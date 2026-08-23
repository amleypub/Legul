# Configurare l'accesso e la sincronizzazione (Supabase)

L'app funziona anche senza Supabase: resta in modalità ospite e salva i
progressi solo sul dispositivo. Questi passaggi servono ad attivare
l'accesso con Apple, Google ed email e il salvataggio sul cloud.

Serve farli **una volta sola**, dal pannello di Supabase.

---

## 1. Creare il progetto

1. Vai su [supabase.com](https://supabase.com) e crea un progetto (il piano
   gratuito è più che sufficiente per iniziare).
2. Scegli una regione europea — i dati degli utenti restano nell'UE, cosa
   che semplifica gli adempimenti GDPR.
3. Da **Project Settings → API** copia:
   - **Project URL**
   - **anon public** (la chiave anonima)

Crea poi un file `.env` nella cartella del progetto, copiando `.env.example`:

```
EXPO_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

Riavvia il bundler **svuotando la cache**:

```
npx expo start --clear
```

> Il `--clear` non è un dettaglio. Metro tiene in cache i file già
> trasformati, e i valori del `.env` vengono incollati dentro il codice
> proprio in quel passaggio. Senza svuotare la cache l'app continua a
> usare i valori vecchi (cioè nessuno) e la schermata di accesso mostra
> ancora «server non configurato», anche se il `.env` è corretto.
> Vale la stessa cosa per `npx expo export --clear`.

---

## 2. Creare la tabella dei progressi

Apri **SQL Editor** in Supabase e incolla:

```sql
create table public.progressi (
  utente_id     uuid primary key references auth.users on delete cascade,
  dati          jsonb not null default '{}'::jsonb,
  aggiornato_il timestamptz not null default now()
);

alter table public.progressi enable row level security;

-- Ogni utente vede e scrive solo la propria riga.
create policy "legge i propri progressi"
  on public.progressi for select
  using (auth.uid() = utente_id);

create policy "crea i propri progressi"
  on public.progressi for insert
  with check (auth.uid() = utente_id);

create policy "aggiorna i propri progressi"
  on public.progressi for update
  using (auth.uid() = utente_id)
  with check (auth.uid() = utente_id);
```

Le tre policy sono la parte importante: senza `enable row level security`
chiunque abbia la chiave anonima potrebbe leggere i progressi di tutti.
Con le policy attive, il database rifiuta ogni riga che non appartenga
all'utente autenticato — la chiave nell'app non basta a vedere altro.

---

## 2-bis. Attivare la discussione

La discussione sulle tracce (commenti, soluzioni proposte, voti, risposte)
vive su un secondo gruppo di tabelle. Apri di nuovo **SQL Editor**,
incolla l'intero contenuto di
[`supabase/sql/discussione.sql`](../supabase/sql/discussione.sql) ed esegui.
Lo script è idempotente: rilanciarlo dopo un aggiornamento non rompe nulla
e non cancella i messaggi già scritti.

Che cosa crea:

| Tabella | A che serve |
| --- | --- |
| `profili_pubblici` | lo pseudonimo con cui si compare (`Andrea M.`) |
| `commenti` | i messaggi, raggruppati per «argomento» |
| `voti` | un voto per persona per messaggio |
| `segnalazioni` | chi ha segnalato che cosa |
| `blocchi` | chi hai bloccato |
| `parole_vietate` | filtro minimo sul linguaggio |

Tre cose da sapere:

- **Nessuno scrive direttamente sulle tabelle.** I limiti di lunghezza, il
  filtro sul linguaggio, il tetto di quindici messaggi l'ora e la
  profondità massima del filo stanno dentro funzioni `security definer`.
  La chiave anonima è dentro l'app e quindi in mano a chiunque: se il
  client potesse fare `insert`, basterebbe una chiamata HTTP scritta a
  mano per aggirare ogni regola.
- **Il filtro sul linguaggio è una tabella, non codice.** Puoi allungare
  `parole_vietate` dal pannello di Supabase senza ripubblicare l'app. Le
  voci sono espressioni regolari, quindi `stronz[oiae]` copre tutte le
  desinenze. La tabella non è leggibile dal client: un elenco a
  disposizione di tutti sarebbe il manuale per aggirarlo.
- **Oltre tre segnalazioni un messaggio si nasconde da solo.** È una
  misura cautelare, non una cancellazione: il testo resta nel database e
  si rimette in chiaro con `update commenti set nascosto = false where
  id = '…'`. La soglia si cambia riscrivendo `soglia_segnalazioni()`.

Per vedere che cosa è in attesa di controllo:

```sql
select c.id, c.creato_il, c.segnalazioni, c.testo,
       (select string_agg(coalesce(s.motivo, '—'), ' | ')
          from segnalazioni s where s.commento_id = c.id) as motivi
  from commenti c
 where c.nascosto
 order by c.segnalazioni desc, c.creato_il desc;
```

> **App Store, linea guida 1.2.** Un'app che ospita contenuti scritti
> dagli utenti deve avere quattro cose: un filtro sui contenuti
> offensivi, un modo per segnalarli, un modo per bloccare chi li scrive e
> un recapito pubblico. Le prime tre sono nell'app e in questo schema; la
> quarta è l'indirizzo email in `src/data/legale.ts`, che va compilato
> prima di inviare la build in revisione.

---

## 3. Attivare i provider di accesso

In **Authentication → Providers**:

### Email (il più semplice, attivo di default)
Nessuna configurazione necessaria. L'app usa il link magico: l'utente
riceve un'email, la tocca ed è dentro, senza password.

### Google
1. Crea credenziali OAuth su
   [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
   (tipo: *Web application*).
2. In **Authorized redirect URIs** metti l'indirizzo che Supabase mostra
   nella pagina del provider Google (`https://<progetto>.supabase.co/auth/v1/callback`).
3. Incolla *Client ID* e *Client Secret* in Supabase e salva.

### Apple
Richiede un **account Apple Developer a pagamento** (99 €/anno), lo stesso
che serve comunque per pubblicare su App Store.
1. Su [developer.apple.com](https://developer.apple.com) crea un
   *Services ID* e abilita *Sign in with Apple*.
2. Come *Return URL* usa lo stesso indirizzo di callback di Supabase.
3. Genera una chiave privata (.p8) e incolla in Supabase i valori
   richiesti (Team ID, Key ID, Services ID, chiave).

> Nota per App Store: se l'app offre l'accesso con Google, Apple **obbliga**
> a offrire anche Sign in with Apple. Sono già entrambi presenti
> nell'interfaccia.

---

## 4. Indirizzi di ritorno

In **Authentication → URL Configuration**, alla voce *Redirect URLs*,
aggiungi:

```
legul://accedi
```

È lo schema dell'app (definito in `app.json`): serve al browser per
restituire il controllo a Legul dopo il consenso. Se in futuro pubblichi
anche una versione web, aggiungi qui pure il suo indirizzo.

---

## 5. Pubblicare la funzione di eliminazione account

Apple e Google impongono che un'app che permette di registrarsi permetta
anche di **cancellare l'account dall'interno dell'app**. Il pulsante c'è
già (Profilo, in fondo), ma ha bisogno di una funzione lato server.

Non può farlo l'app da sola: eliminare un utente richiede la chiave
`service_role`, che ha pieni poteri sul database. Dentro il bundle
sarebbe estraibile da chiunque.

Con la [CLI di Supabase](https://supabase.com/docs/guides/cli) installata:

```bash
supabase login
supabase link --project-ref <id-del-progetto>
supabase functions deploy elimina-account
```

L'id del progetto è la parte iniziale del Project URL
(`https://<id-del-progetto>.supabase.co`).

Non serve impostare nessun segreto: `SUPABASE_URL` e
`SUPABASE_SERVICE_ROLE_KEY` sono già disponibili dentro le Edge Function.

Il codice sta in `supabase/functions/elimina-account/index.ts`. Accetta
solo il token di chi chiama e cancella esclusivamente sé stesso: non
riceve mai un id dall'esterno, quindi non è possibile passarle
l'identificativo di un altro utente.

Per provarla senza pubblicarla: `supabase functions serve elimina-account`.

---

## Come funziona la sincronizzazione

- I progressi restano **sempre** salvati sul dispositivo: se la rete manca,
  si continua a studiare senza accorgersi di nulla.
- All'accesso, i progressi locali e quelli sul cloud vengono **fusi**, non
  sovrascritti: per ogni contatore vince il valore più alto, per ogni
  lezione il miglior numero di stelle, e le liste di badge e tracce lette
  si uniscono. Un dispositivo rimasto indietro non può quindi cancellare
  il lavoro fatto altrove.
- Da lì in poi ogni cambiamento viene inviato al cloud, al massimo una
  volta al secondo (durante una lezione lo stato cambia a ogni risposta).
- La preferenza sugli effetti sonori **non** viene sincronizzata: è una
  scelta legata al singolo dispositivo.

Il codice sta in `src/auth/` (sessione e provider) e in
`src/gamification/sync.ts` (fusione e salvataggio).
