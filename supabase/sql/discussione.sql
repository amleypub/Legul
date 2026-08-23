-- ============================================================================
-- Discussione: commenti degli utenti e soluzioni proposte
-- ============================================================================
--
-- Da incollare una volta sola nell'SQL Editor di Supabase.
-- Lo script è idempotente: rilanciarlo non rompe nulla.
--
-- Impianto:
--   profili_pubblici  pseudonimo con cui si compare nella discussione
--   commenti          un filo per «argomento» (es. 'traccia:2023-atto-civile')
--   voti              un voto per utente per commento (+1 / -1)
--   segnalazioni      un utente segnala un commento; oltre soglia si nasconde
--   blocchi           chi hai bloccato non ti compare più
--   parole_vietate    filtro minimo sul linguaggio, modificabile dal pannello
--
-- Perché quasi tutte le scritture passano da funzioni `security definer` e
-- non da INSERT diretti: le regole (limiti di lunghezza, filtro sul
-- linguaggio, tetto anti-spam, profondità massima del filo) devono valere
-- per chiunque. Se il client potesse scrivere direttamente sulle tabelle,
-- basterebbe una chiamata HTTP fatta a mano per aggirarle tutte: la chiave
-- anonima sta dentro l'app ed è, per definizione, in mano a chiunque.

-- ---------------------------------------------------------------------------
-- 1. Profilo pubblico (pseudonimo)
-- ---------------------------------------------------------------------------

create table if not exists public.profili_pubblici (
  utente_id  uuid primary key references auth.users on delete cascade,
  pseudonimo text not null unique check (char_length(pseudonimo) between 2 and 32),
  creato_il  timestamptz not null default now()
);

alter table public.profili_pubblici enable row level security;

-- Lo pseudonimo è, per definizione, il nome con cui si compare in pubblico:
-- deve essere leggibile da tutti, altrimenti i commenti risulterebbero
-- firmati da nessuno.
drop policy if exists "chiunque legge gli pseudonimi" on public.profili_pubblici;
create policy "chiunque legge gli pseudonimi"
  on public.profili_pubblici for select using (true);

/**
 * Nome accorciato: «Andrea Moriggi» -> «Andrea M.».
 *
 * Nella discussione non compare mai il nome per intero. Il cognome è il
 * dato che rende una persona rintracciabile, e qui non serve a niente:
 * per riconoscere chi scrive in un filo bastano nome e iniziale.
 */
create or replace function public.abbrevia_nome(nome text)
returns text
language plpgsql
immutable
as $$
declare
  parti text[];
  fuori text;
  i     int;
begin
  if nome is null then return null; end if;
  parti := array_remove(regexp_split_to_array(btrim(nome), '\s+'), '');
  if array_length(parti, 1) is null then return null; end if;

  fuori := initcap(parti[1]);
  for i in 2 .. array_length(parti, 1) loop
    fuori := fuori || ' ' || upper(left(parti[i], 1)) || '.';
  end loop;
  return left(fuori, 32);
end;
$$;

/**
 * Restituisce lo pseudonimo di chi chiama, creandolo alla prima occorrenza.
 *
 * Non lo si crea alla registrazione perché la stragrande maggioranza degli
 * utenti non scriverà mai un commento: creare una riga pubblica per chi non
 * si è mai esposto sarebbe raccogliere un dato di cui non c'è bisogno.
 */
create or replace function public.assicura_profilo_pubblico()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  uid       uuid := auth.uid();
  base      text;
  candidato text;
  esistente text;
  n         int := 0;
begin
  if uid is null then
    raise exception 'Accesso richiesto.' using errcode = '28000';
  end if;

  select pseudonimo into esistente from profili_pubblici where utente_id = uid;
  if esistente is not null then return esistente; end if;

  select abbrevia_nome(coalesce(
           u.raw_user_meta_data ->> 'full_name',
           u.raw_user_meta_data ->> 'name',
           u.raw_user_meta_data ->> 'preferred_username'))
    into base
    from auth.users u
   where u.id = uid;

  -- Chi accede con email o con Apple «nascondi la mia email» non ha alcun
  -- nome: non si ricava nulla dall'indirizzo, che è un dato personale e non
  -- va esposto nemmeno in parte.
  if base is null or char_length(base) < 2 then base := 'Praticante'; end if;

  candidato := base;
  loop
    begin
      insert into profili_pubblici (utente_id, pseudonimo) values (uid, candidato);
      return candidato;
    exception when unique_violation then
      -- Il conflitto può essere sulla chiave primaria (un'altra chiamata in
      -- parallelo ha appena creato il profilo) oppure sullo pseudonimo.
      select pseudonimo into esistente from profili_pubblici where utente_id = uid;
      if esistente is not null then return esistente; end if;
      n := n + 1;
      candidato := base || ' ' || case when n <= 40 then n::text
                                  else substr(md5(random()::text), 1, 4) end;
    end;
  end loop;
end;
$$;

-- ---------------------------------------------------------------------------
-- 2. Filtro sul linguaggio
-- ---------------------------------------------------------------------------
--
-- App Store (linea guida 1.2) chiede, per ogni app con contenuti scritti
-- dagli utenti, un filtro sul materiale offensivo oltre alla segnalazione.
-- Questo è il minimo sindacale, non una moderazione seria: sta in tabella
-- proprio per poterlo allungare dal pannello di Supabase senza toccare il
-- codice né ripubblicare l'app.

create table if not exists public.parole_vietate (parola text primary key);
alter table public.parole_vietate enable row level security;
-- Nessuna policy: la tabella è invisibile al client. La leggono solo le
-- funzioni `security definer`, che scavalcano RLS. Un elenco leggibile
-- sarebbe un manuale di come aggirare il filtro.

insert into public.parole_vietate (parola) values
  ('coglion[ei]'), ('stronz[oiae]'), ('bastard[oiae]'), ('imbecill[ei]'),
  ('cretin[oiae]'), ('deficient[ei]'), ('ritardat[oiae]'), ('idiot[aei]'),
  ('merd[ae]'), ('vaffanculo'), ('troi[ae]'), ('puttan[ae]'),
  ('froci[oe]'), ('negr[oiae]'), ('ricchion[ei]'), ('zoccol[ae]')
on conflict do nothing;

create or replace function public.linguaggio_vietato(testo text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  -- Il confine di parola non è \y perché deve reggere anche gli accenti e
  -- la punteggiatura attaccata: si guarda che ai lati non ci sia una lettera.
  select exists (
    select 1 from parole_vietate p
     where testo ~* ('(^|[^[:alpha:]])' || p.parola || '([^[:alpha:]]|$)')
  );
$$;

-- ---------------------------------------------------------------------------
-- 3. Commenti
-- ---------------------------------------------------------------------------

create table if not exists public.commenti (
  id           uuid primary key default gen_random_uuid(),
  -- Chiave libera del filo: 'traccia:<id>' oggi, 'caso:<id>' domani. Così
  -- la discussione si attacca a qualunque contenuto senza toccare lo schema.
  argomento    text not null check (char_length(argomento) between 1 and 120),
  genere       text not null check (genere in ('commento', 'soluzione')),
  padre_id     uuid references public.commenti on delete cascade,
  autore_id    uuid not null references auth.users on delete cascade,
  testo        text not null check (char_length(btrim(testo)) between 2 and 4000),
  creato_il    timestamptz not null default now(),
  eliminato    boolean not null default false,
  voti_su      int not null default 0,
  voti_giu     int not null default 0,
  segnalazioni int not null default 0,
  nascosto     boolean not null default false
);

create index if not exists commenti_argomento_idx on public.commenti (argomento, creato_il);
create index if not exists commenti_padre_idx     on public.commenti (padre_id);
create index if not exists commenti_autore_idx    on public.commenti (autore_id);

alter table public.commenti enable row level security;

-- In lettura passano solo i commenti non nascosti. Quelli eliminati restano
-- visibili come lapide (il testo lo azzera la funzione di lettura) perché
-- cancellarli davvero porterebbe via anche le risposte altrui.
drop policy if exists "chiunque legge i commenti visibili" on public.commenti;
create policy "chiunque legge i commenti visibili"
  on public.commenti for select using (not nascosto);

-- Nessuna policy di insert/update/delete: si scrive solo dalle funzioni.

-- ---------------------------------------------------------------------------
-- 4. Voti
-- ---------------------------------------------------------------------------

create table if not exists public.voti (
  commento_id uuid not null references public.commenti on delete cascade,
  utente_id   uuid not null references auth.users on delete cascade,
  valore      smallint not null check (valore in (-1, 1)),
  primary key (commento_id, utente_id)
);

alter table public.voti enable row level security;

-- Ognuno vede e cambia solo il proprio voto: il totale sta sul commento,
-- chi ha votato che cosa non è affare di nessun altro.
drop policy if exists "legge i propri voti" on public.voti;
create policy "legge i propri voti" on public.voti for select
  using (auth.uid() = utente_id);

drop policy if exists "esprime i propri voti" on public.voti;
create policy "esprime i propri voti" on public.voti for insert
  with check (auth.uid() = utente_id);

drop policy if exists "cambia i propri voti" on public.voti;
create policy "cambia i propri voti" on public.voti for update
  using (auth.uid() = utente_id) with check (auth.uid() = utente_id);

drop policy if exists "ritira i propri voti" on public.voti;
create policy "ritira i propri voti" on public.voti for delete
  using (auth.uid() = utente_id);

/**
 * Tiene aggiornati i due contatori sul commento.
 *
 * Contarli al volo con un COUNT su `voti` a ogni lettura significherebbe
 * una scansione per commento a ogni apertura del filo; qui il conto si
 * paga una volta sola, quando il voto cambia.
 */
create or replace function public.aggiorna_conteggio_voti()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op = 'INSERT' then
    update commenti
       set voti_su  = voti_su  + (new.valore = 1)::int,
           voti_giu = voti_giu + (new.valore = -1)::int
     where id = new.commento_id;
  elsif tg_op = 'UPDATE' then
    update commenti
       set voti_su  = voti_su  + (new.valore = 1)::int  - (old.valore = 1)::int,
           voti_giu = voti_giu + (new.valore = -1)::int - (old.valore = -1)::int
     where id = new.commento_id;
  else
    update commenti
       set voti_su  = voti_su  - (old.valore = 1)::int,
           voti_giu = voti_giu - (old.valore = -1)::int
     where id = old.commento_id;
  end if;
  return null;
end;
$$;

drop trigger if exists voti_conteggio on public.voti;
create trigger voti_conteggio
  after insert or update or delete on public.voti
  for each row execute function public.aggiorna_conteggio_voti();

-- ---------------------------------------------------------------------------
-- 5. Segnalazioni
-- ---------------------------------------------------------------------------

create table if not exists public.segnalazioni (
  commento_id uuid not null references public.commenti on delete cascade,
  utente_id   uuid not null references auth.users on delete cascade,
  motivo      text check (char_length(motivo) <= 400),
  creato_il   timestamptz not null default now(),
  primary key (commento_id, utente_id)
);

alter table public.segnalazioni enable row level security;

drop policy if exists "legge le proprie segnalazioni" on public.segnalazioni;
create policy "legge le proprie segnalazioni" on public.segnalazioni for select
  using (auth.uid() = utente_id);

drop policy if exists "segnala" on public.segnalazioni;
create policy "segnala" on public.segnalazioni for insert
  with check (auth.uid() = utente_id);

/** Soglia oltre la quale un commento sparisce dalla vista in attesa di controllo. */
create or replace function public.soglia_segnalazioni() returns int
  language sql immutable as $$ select 3 $$;

/**
 * Nasconde in automatico oltre soglia.
 *
 * Serve perché fra la segnalazione e il momento in cui una persona la
 * guarda possono passare ore, e in quelle ore il contenuto resterebbe
 * davanti a tutti. Nascondere non è cancellare: il commento resta nel
 * database e si può rimettere in chiaro dal pannello.
 */
create or replace function public.applica_segnalazione()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update commenti
     set segnalazioni = segnalazioni + 1,
         nascosto     = nascosto or (segnalazioni + 1 >= soglia_segnalazioni())
   where id = new.commento_id;
  return null;
end;
$$;

drop trigger if exists segnalazioni_applica on public.segnalazioni;
create trigger segnalazioni_applica
  after insert on public.segnalazioni
  for each row execute function public.applica_segnalazione();

-- ---------------------------------------------------------------------------
-- 6. Blocchi
-- ---------------------------------------------------------------------------

create table if not exists public.blocchi (
  utente_id   uuid not null references auth.users on delete cascade,
  bloccato_id uuid not null references auth.users on delete cascade,
  creato_il   timestamptz not null default now(),
  primary key (utente_id, bloccato_id),
  constraint blocchi_non_se_stessi check (utente_id <> bloccato_id)
);

alter table public.blocchi enable row level security;

drop policy if exists "legge i propri blocchi" on public.blocchi;
create policy "legge i propri blocchi" on public.blocchi for select
  using (auth.uid() = utente_id);

drop policy if exists "blocca" on public.blocchi;
create policy "blocca" on public.blocchi for insert
  with check (auth.uid() = utente_id);

drop policy if exists "sblocca" on public.blocchi;
create policy "sblocca" on public.blocchi for delete
  using (auth.uid() = utente_id);

-- ---------------------------------------------------------------------------
-- 7. Lettura del filo
-- ---------------------------------------------------------------------------

/**
 * Tutti i messaggi di un argomento, con pseudonimo e voto di chi legge.
 *
 * Gira con i permessi del chiamante (non `security definer`): le policy
 * fanno il lavoro da sole — `voti` restituisce solo il proprio, `commenti`
 * solo quelli non nascosti. L'ordinamento e l'albero li costruisce l'app,
 * che deve comunque separare soluzioni e commenti.
 */
create or replace function public.discussione(p_argomento text)
returns table (
  id         uuid,
  padre_id   uuid,
  genere     text,
  testo      text,
  pseudonimo text,
  autore_id  uuid,
  creato_il  timestamptz,
  punteggio  int,
  mio_voto   smallint,
  eliminato  boolean,
  mio        boolean
)
language sql
stable
as $$
  select c.id,
         c.padre_id,
         c.genere,
         case when c.eliminato then null else c.testo end,
         coalesce(p.pseudonimo, 'Praticante'),
         c.autore_id,
         c.creato_il,
         c.voti_su - c.voti_giu,
         v.valore,
         c.eliminato,
         c.autore_id = auth.uid()
    from public.commenti c
    left join public.profili_pubblici p on p.utente_id = c.autore_id
    left join public.voti v on v.commento_id = c.id and v.utente_id = auth.uid()
   where c.argomento = p_argomento
     -- Chi hai bloccato sparisce, risposte comprese.
     and not exists (
       select 1 from public.blocchi b
        where b.utente_id = auth.uid() and b.bloccato_id = c.autore_id
     )
   order by c.creato_il;
$$;

/** Quanti messaggi ha un argomento: serve al pulsante, senza scaricare il filo. */
create or replace function public.conteggio_discussione(p_argomento text)
returns int
language sql
stable
as $$
  select count(*)::int from public.commenti c
   where c.argomento = p_argomento
     and not c.nascosto
     and not c.eliminato
     and not exists (
       select 1 from public.blocchi b
        where b.utente_id = auth.uid() and b.bloccato_id = c.autore_id
     );
$$;

-- ---------------------------------------------------------------------------
-- 8. Scrittura
-- ---------------------------------------------------------------------------

/** Quanti messaggi si possono pubblicare in un'ora. */
create or replace function public.tetto_orario() returns int
  language sql immutable as $$ select 15 $$;

create or replace function public.pubblica_commento(
  p_argomento text,
  p_genere    text,
  p_testo     text,
  p_padre_id  uuid default null
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  uid    uuid := auth.uid();
  radice uuid := p_padre_id;
  nonno  uuid;
  nuovo  uuid;
  pulito text := btrim(coalesce(p_testo, ''));
begin
  if uid is null then
    raise exception 'Serve l''accesso per scrivere nella discussione.' using errcode = '28000';
  end if;
  if p_genere not in ('commento', 'soluzione') then
    raise exception 'Genere non valido.';
  end if;
  if char_length(pulito) < 2 then
    raise exception 'Scrivi qualcosa in più.';
  end if;
  if char_length(pulito) > 4000 then
    raise exception 'Il testo supera i 4000 caratteri.';
  end if;
  if linguaggio_vietato(pulito) then
    raise exception 'Il testo contiene linguaggio non consentito.';
  end if;
  if (select count(*) from commenti
       where autore_id = uid and creato_il > now() - interval '1 hour') >= tetto_orario() then
    raise exception 'Hai pubblicato troppi messaggi di seguito. Riprova più tardi.';
  end if;

  perform assicura_profilo_pubblico();

  if radice is not null then
    -- Massimo due livelli: rispondere a una risposta resta nello stesso filo.
    -- Su uno schermo di telefono il terzo rientro è già illeggibile.
    select padre_id into nonno from commenti where id = radice;
    if nonno is not null then radice := nonno; end if;
  end if;

  insert into commenti (argomento, genere, padre_id, autore_id, testo)
  values (p_argomento, p_genere, radice, uid, pulito)
  returning id into nuovo;

  return nuovo;
end;
$$;

create or replace function public.vota_commento(p_commento_id uuid, p_valore int)
returns int
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'Serve l''accesso per votare.' using errcode = '28000';
  end if;
  if p_valore not in (-1, 0, 1) then
    raise exception 'Voto non valido.';
  end if;

  if p_valore = 0 then
    delete from voti where commento_id = p_commento_id and utente_id = uid;
  else
    insert into voti (commento_id, utente_id, valore)
    values (p_commento_id, uid, p_valore::smallint)
    on conflict (commento_id, utente_id) do update set valore = excluded.valore;
  end if;

  return (select voti_su - voti_giu from commenti where id = p_commento_id);
end;
$$;

create or replace function public.elimina_commento(p_commento_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid       uuid := auth.uid();
  proprieta uuid;
begin
  select autore_id into proprieta from commenti where id = p_commento_id;
  if proprieta is null then return; end if;
  if proprieta <> uid then
    raise exception 'Puoi eliminare solo i tuoi messaggi.' using errcode = '42501';
  end if;

  if exists (select 1 from commenti where padre_id = p_commento_id) then
    -- Ha risposte: cancellarlo davvero porterebbe via anche quelle, che
    -- sono di altre persone. Resta la lapide, senza testo.
    -- Il testo non può restare vuoto (lo vieta il vincolo sulla colonna) e
    -- non viene comunque mai letto: `discussione()` lo azzera in uscita.
    update commenti set eliminato = true, testo = '[eliminato]' where id = p_commento_id;
  else
    delete from commenti where id = p_commento_id;
  end if;
end;
$$;

create or replace function public.segnala_commento(p_commento_id uuid, p_motivo text default null)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'Serve l''accesso per segnalare.' using errcode = '28000';
  end if;
  insert into segnalazioni (commento_id, utente_id, motivo)
  values (p_commento_id, uid, left(btrim(coalesce(p_motivo, '')), 400))
  on conflict (commento_id, utente_id) do nothing;
end;
$$;

/** Chi hai bloccato, con lo pseudonimo, per poterlo sbloccare dal Profilo. */
create or replace function public.utenti_bloccati()
returns table (utente_id uuid, pseudonimo text, creato_il timestamptz)
language sql
stable
as $$
  select b.bloccato_id, coalesce(p.pseudonimo, 'Praticante'), b.creato_il
    from public.blocchi b
    left join public.profili_pubblici p on p.utente_id = b.bloccato_id
   where b.utente_id = auth.uid()
   order by b.creato_il desc;
$$;

create or replace function public.imposta_pseudonimo(p_nome text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  uid    uuid := auth.uid();
  pulito text := btrim(coalesce(p_nome, ''));
begin
  if uid is null then
    raise exception 'Accesso richiesto.' using errcode = '28000';
  end if;
  if char_length(pulito) < 2 or char_length(pulito) > 32 then
    raise exception 'Il nome deve avere fra 2 e 32 caratteri.';
  end if;
  if linguaggio_vietato(pulito) then
    raise exception 'Questo nome non è consentito.';
  end if;

  perform assicura_profilo_pubblico();

  begin
    update profili_pubblici set pseudonimo = pulito where utente_id = uid;
  exception when unique_violation then
    raise exception 'Questo nome è già usato da qualcun altro.';
  end;

  return pulito;
end;
$$;

/** Lo pseudonimo attuale, senza crearlo se ancora non esiste. */
create or replace function public.mio_pseudonimo()
returns text
language sql
stable
as $$
  select pseudonimo from public.profili_pubblici where utente_id = auth.uid();
$$;

-- ---------------------------------------------------------------------------
-- 9. Permessi
-- ---------------------------------------------------------------------------

grant execute on function public.discussione(text)            to anon, authenticated;
grant execute on function public.conteggio_discussione(text)  to anon, authenticated;
grant execute on function public.mio_pseudonimo()             to authenticated;
grant execute on function public.utenti_bloccati()            to authenticated;
grant execute on function public.pubblica_commento(text, text, text, uuid) to authenticated;
grant execute on function public.vota_commento(uuid, int)     to authenticated;
grant execute on function public.elimina_commento(uuid)       to authenticated;
grant execute on function public.segnala_commento(uuid, text) to authenticated;
grant execute on function public.imposta_pseudonimo(text)     to authenticated;

-- Le funzioni interne non vanno chiamate dall'app. Il revoke deve colpire
-- `public`: Postgres concede EXECUTE a PUBLIC su ogni nuova funzione, e
-- togliere il permesso ai soli ruoli anon/authenticated non basta, perché
-- lo erediterebbero comunque da lì.
revoke execute on function public.linguaggio_vietato(text)    from public;
revoke execute on function public.assicura_profilo_pubblico() from public;
revoke execute on function public.abbrevia_nome(text)         from public;
