/**
 * Modello della discussione: tipi e regole pure, senza rete e senza React.
 *
 * Sta separato dalla schermata perché è la parte che si può sbagliare in
 * silenzio — l'ordine dei messaggi, le risposte orfane, il conteggio — ed
 * è quindi la parte che ha senso coprire con i test.
 */

export type GenereMessaggio = 'commento' | 'soluzione';

/** Riga così come arriva dalla funzione `discussione()` di Postgres. */
export interface MessaggioGrezzo {
  id: string;
  padre_id: string | null;
  genere: GenereMessaggio;
  testo: string | null;
  pseudonimo: string;
  autore_id: string;
  creato_il: string;
  punteggio: number;
  mio_voto: number | null;
  eliminato: boolean;
  mio: boolean;
}

export interface Messaggio {
  id: string;
  padreId: string | null;
  genere: GenereMessaggio;
  /** `null` quando il messaggio è stato eliminato dal suo autore. */
  testo: string | null;
  pseudonimo: string;
  autoreId: string;
  creatoIl: string;
  punteggio: number;
  /** 1, -1 oppure 0 se chi legge non ha ancora votato. */
  mioVoto: 1 | -1 | 0;
  eliminato: boolean;
  mio: boolean;
}

export interface Nodo extends Messaggio {
  risposte: Messaggio[];
}

export interface Filo {
  /** Soluzioni alternative proposte dagli utenti, in cima. */
  soluzioni: Nodo[];
  /** Commenti liberi. */
  commenti: Nodo[];
}

export const LIMITE_TESTO = 4000;
export const MINIMO_TESTO = 2;

export function daGrezzo(riga: MessaggioGrezzo): Messaggio {
  const voto = riga.mio_voto === 1 ? 1 : riga.mio_voto === -1 ? -1 : 0;
  return {
    id: riga.id,
    padreId: riga.padre_id,
    genere: riga.genere,
    testo: riga.eliminato ? null : riga.testo,
    pseudonimo: riga.pseudonimo,
    autoreId: riga.autore_id,
    creatoIl: riga.creato_il,
    punteggio: riga.punteggio ?? 0,
    mioVoto: voto,
    eliminato: riga.eliminato,
    mio: riga.mio,
  };
}

/** Ordine di Reddit: prima il più votato, a parità il più vecchio. */
function perPunteggio(a: Messaggio, b: Messaggio): number {
  if (b.punteggio !== a.punteggio) return b.punteggio - a.punteggio;
  return a.creatoIl.localeCompare(b.creatoIl);
}

/**
 * Costruisce le due liste da mostrare, con le risposte agganciate.
 *
 * Due casi meritano attenzione:
 *
 * - **Risposte orfane.** Se l'autore del messaggio di partenza è stato
 *   bloccato o il suo messaggio è stato nascosto, le risposte arrivano
 *   senza genitore. Non vengono buttate via: chi ha risposto non ha fatto
 *   nulla di male e il suo contributo va comunque letto. Diventano
 *   messaggi di primo livello.
 * - **Lapidi senza figli.** Un messaggio eliminato resta solo per non
 *   portarsi via le risposte altrui; se anche quelle spariscono, la lapide
 *   non ha più ragione di esistere e non va mostrata.
 */
export function costruisciFilo(messaggi: Messaggio[]): Filo {
  const perId = new Map(messaggi.map((m) => [m.id, m]));
  const risposte = new Map<string, Messaggio[]>();
  const radici: Messaggio[] = [];

  for (const m of messaggi) {
    if (m.padreId && perId.has(m.padreId)) {
      const elenco = risposte.get(m.padreId);
      if (elenco) elenco.push(m);
      else risposte.set(m.padreId, [m]);
    } else {
      radici.push(m);
    }
  }

  const nodi: Nodo[] = [];
  for (const radice of radici) {
    const figlie = (risposte.get(radice.id) ?? []).slice().sort(perPunteggio);
    if (radice.eliminato && figlie.length === 0) continue;
    nodi.push({ ...radice, risposte: figlie });
  }
  nodi.sort(perPunteggio);

  return {
    soluzioni: nodi.filter((n) => n.genere === 'soluzione'),
    commenti: nodi.filter((n) => n.genere === 'commento'),
  };
}

/** Quanti messaggi visibili contiene il filo, risposte comprese. */
export function contaMessaggi(filo: Filo): number {
  const somma = (nodi: Nodo[]) =>
    nodi.reduce((tot, n) => tot + (n.eliminato ? 0 : 1) + n.risposte.length, 0);
  return somma(filo.soluzioni) + somma(filo.commenti);
}

export interface EsitoValidazione {
  valido: boolean;
  errore?: string;
}

export function validaTesto(testo: string): EsitoValidazione {
  const pulito = testo.trim();
  if (pulito.length < MINIMO_TESTO) return { valido: false, errore: 'Scrivi qualcosa in più.' };
  if (pulito.length > LIMITE_TESTO) {
    return { valido: false, errore: `Massimo ${LIMITE_TESTO} caratteri.` };
  }
  return { valido: true };
}

/**
 * Nome accorciato: «Andrea Moriggi» → «Andrea M.».
 *
 * Copia in TypeScript di `abbrevia_nome()` in Postgres. Serve solo per
 * mostrare in anteprima, nel Profilo, con che nome si comparirà: il nome
 * vero lo assegna comunque il database, che è l'unico a poter garantire
 * che non sia già di qualcun altro.
 */
export function abbreviaNome(nome: string | null | undefined): string | null {
  if (!nome) return null;
  const parti = nome.trim().split(/\s+/).filter(Boolean);
  if (parti.length === 0) return null;
  const primo = parti[0][0].toUpperCase() + parti[0].slice(1).toLowerCase();
  const iniziali = parti.slice(1).map((p) => `${p[0].toUpperCase()}.`);
  return [primo, ...iniziali].join(' ').slice(0, 32);
}

const MINUTO = 60_000;
const ORA = 60 * MINUTO;
const GIORNO = 24 * ORA;

/**
 * «adesso», «12 min», «3 h», «5 g», poi la data.
 *
 * Oltre la settimana il tempo relativo smette di dire qualcosa di utile
 * («37 g fa» non si legge), e conviene la data secca.
 */
export function tempoRelativo(iso: string, ora: Date = new Date()): string {
  const quando = new Date(iso).getTime();
  if (Number.isNaN(quando)) return '';
  const delta = ora.getTime() - quando;
  if (delta < MINUTO) return 'adesso';
  if (delta < ORA) return `${Math.floor(delta / MINUTO)} min`;
  if (delta < GIORNO) return `${Math.floor(delta / ORA)} h`;
  if (delta < 7 * GIORNO) return `${Math.floor(delta / GIORNO)} g`;
  return new Date(iso).toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });
}

/**
 * Voto da inviare dopo un tocco: ritoccare la stessa freccia lo ritira.
 * È il comportamento che tutti si aspettano, e senza di esso un voto dato
 * per sbaglio non si potrebbe più togliere.
 */
export function prossimoVoto(attuale: 1 | -1 | 0, premuto: 1 | -1): 1 | -1 | 0 {
  return attuale === premuto ? 0 : premuto;
}

/** Punteggio dopo il cambio di voto, per aggiornare subito senza aspettare il server. */
export function punteggioDopoVoto(punteggio: number, attuale: 1 | -1 | 0, nuovo: 1 | -1 | 0): number {
  return punteggio - attuale + nuovo;
}

/** Chiave del filo di una traccia. Un argomento per contenuto, non per schermata. */
export function argomentoTraccia(tracciaId: string): string {
  return `traccia:${tracciaId}`;
}
