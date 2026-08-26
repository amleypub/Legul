import type { Difficolta, Materia, QuizQuestion } from '../types';
import { tutteLeDomande } from './questions';

export const DOMANDE_PER_LEZIONE = 10;

/*
  L'icona di ciascuna materia.

  Sta qui e non nella schermata che per prima l'ha usata perché è un
  dato, non una vista: la usano l'elenco dei percorsi e la diagnosi, e
  soprattutto è ciò che identifica una materia quando il colore non
  basta. Le tinte smorzate di questo tema non riescono a tenere dodici
  materie tutte distinguibili fra loro — è misurato in `tema.test.ts` —
  quindi il nome per esteso e questa icona sono il segno vero, e il
  colore aiuta soltanto a ritrovarsi.
*/
export const ICONA_MATERIA: Record<Materia, string> = {
  'Diritto civile': 'handshake',
  'Diritto penale': 'shield-half',
  'Procedura civile': 'gavel',
  'Procedura penale': 'scales',
  'Diritto amministrativo': 'landmark',
  'Deontologia forense': 'people',
  'Diritto costituzionale': 'library-outline',
  'Diritto commerciale': 'briefcase',
  'Diritto del lavoro': 'hard-hat',
  'Diritto dell’Unione europea': 'globe',
  'Diritto internazionale': 'compass',
  'Diritto tributario': 'calculator',
};


export interface Lezione {
  /** Identificatore stabile: `materia|difficolta|indice`. */
  id: string;
  materia: Materia;
  difficolta: Difficolta;
  /** Posizione (0-based) della lezione dentro la sua unità. */
  indice: number;
  domande: QuizQuestion[];
}

export interface Unita {
  difficolta: Difficolta;
  nome: string;
  lezioni: Lezione[];
}

export const NOMI_UNITA: Record<Difficolta, string> = {
  1: 'Fondamenti',
  2: 'Consolidamento',
  3: 'Avanzato',
  4: 'Eccellenza',
};

const DIFFICOLTA: Difficolta[] = [1, 2, 3, 4];

/**
 * Il percorso di una materia dipende solo dalla banca domande, che non
 * cambia a runtime: si costruisce una volta e si riusa.
 *
 * Senza questa cache la schermata Quiz rileggeva tutte e 3.500 le domande
 * sei volte per ogni render — una per materia — e lo rifaceva a ogni
 * risposta data, perché lo stato cambia.
 */
const cachePercorsi = new Map<Materia, Unita[]>();

/**
 * Costruisce il percorso di una materia: unità per difficoltà crescente,
 * ciascuna suddivisa in lezioni da DOMANDE_PER_LEZIONE domande.
 * Una coda finale con meno di 5 domande viene accorpata all'ultima lezione.
 */
export function percorsoPerMateria(materia: Materia): Unita[] {
  const inCache = cachePercorsi.get(materia);
  if (inCache) return inCache;
  const costruito = costruisciPercorso(materia);
  cachePercorsi.set(materia, costruito);
  return costruito;
}

function costruisciPercorso(materia: Materia): Unita[] {
  const perDifficolta: Record<Difficolta, QuizQuestion[]> = { 1: [], 2: [], 3: [], 4: [] };
  for (const q of tutteLeDomande) {
    if (q.materia === materia) perDifficolta[q.difficolta].push(q);
  }

  return DIFFICOLTA.map((difficolta) => {
    const domande = perDifficolta[difficolta];
    const lezioni: Lezione[] = [];
    for (let i = 0; i * DOMANDE_PER_LEZIONE < domande.length; i++) {
      lezioni.push({
        id: `${materia}|${difficolta}|${i}`,
        materia,
        difficolta,
        indice: i,
        domande: domande.slice(i * DOMANDE_PER_LEZIONE, (i + 1) * DOMANDE_PER_LEZIONE),
      });
    }
    const ultima = lezioni[lezioni.length - 1];
    if (lezioni.length > 1 && ultima.domande.length < 5) {
      lezioni.pop();
      lezioni[lezioni.length - 1].domande.push(...ultima.domande);
    }
    return { difficolta, nome: NOMI_UNITA[difficolta], lezioni };
  }).filter((u) => u.lezioni.length > 0);
}

const cacheOrdine = new Map<Materia, Lezione[]>();

/** Tutte le lezioni della materia in ordine di percorso (per la logica di sblocco). */
export function lezioniInOrdine(materia: Materia): Lezione[] {
  const inCache = cacheOrdine.get(materia);
  if (inCache) return inCache;
  const ordine = percorsoPerMateria(materia).flatMap((u) => u.lezioni);
  cacheOrdine.set(materia, ordine);
  return ordine;
}

const cacheIndici = new Map<Materia, Map<string, Lezione>>();

function indicePerId(materia: Materia): Map<string, Lezione> {
  const inCache = cacheIndici.get(materia);
  if (inCache) return inCache;
  const indice = new Map(lezioniInOrdine(materia).map((l) => [l.id, l]));
  cacheIndici.set(materia, indice);
  return indice;
}

export function trovaLezione(materia: Materia, lezioneId: string): Lezione | undefined {
  return indicePerId(materia).get(lezioneId);
}

/**
 * Stato di una lezione lungo il percorso.
 * `corrente` è quella su cui riprendere: sbloccata ma non ancora superata.
 */
export type StatoLezione = 'completata' | 'corrente' | 'bloccata';

/**
 * Calcola in un colpo solo lo stato di tutte le lezioni di un percorso.
 *
 * Regola: la prima lezione è sempre aperta, le successive si aprono
 * quando la precedente ha conquistato almeno una stella.
 *
 * Riceve l'elenco già ordinato invece di ricostruirlo: la schermata del
 * percorso ce l'ha in mano, e ricalcolarlo per ogni nodo significherebbe
 * rileggere l'intera banca domande decine di volte.
 */
export function statiLezioni(
  ordine: Lezione[],
  stellePerLezione: Record<string, number>
): Map<string, StatoLezione> {
  const stati = new Map<string, StatoLezione>();
  let precedenteSuperata = true; // la prima lezione non ha vincoli
  for (const lezione of ordine) {
    const stelle = stellePerLezione[lezione.id] ?? 0;
    if (stelle >= 1) {
      stati.set(lezione.id, 'completata');
    } else {
      stati.set(lezione.id, precedenteSuperata ? 'corrente' : 'bloccata');
    }
    precedenteSuperata = stelle >= 1;
  }
  return stati;
}

/**
 * Una lezione è sbloccata se è la prima del percorso o se la precedente
 * è stata completata con almeno una stella. Comodo per un controllo
 * isolato; per un'intera schermata usare `statiLezioni`.
 */
export function lezioneSbloccata(
  materia: Materia,
  lezioneId: string,
  stellePerLezione: Record<string, number>
): boolean {
  const stato = statiLezioni(lezioniInOrdine(materia), stellePerLezione).get(lezioneId);
  return stato !== undefined && stato !== 'bloccata';
}

/**
 * Dove riprendere: la lezione su cui l'utente si è fermato.
 *
 * Il pulsante in Home diceva «Continua a studiare» e portava all'elenco
 * delle materie, cioè chiedeva di ricordarsi da soli dove si era rimasti.
 * È l'attrito che si paga a ogni singola apertura dell'app, e si paga
 * proprio nel momento in cui la sessione o comincia o finisce.
 *
 * La materia scelta è quella con più lezioni già completate fra quelle
 * ancora aperte: è dove si sta effettivamente lavorando. A parità vince
 * l'ordine dell'elenco, che è quello dell'esame. Se una materia è finita
 * si passa alla successiva, e se sono finite tutte non c'è nulla da
 * riprendere.
 */
export function lezioneDoveRiprendere(
  materie: Materia[],
  stellePerLezione: Record<string, number>
): { materia: Materia; lezione: Lezione } | null {
  let migliore: { materia: Materia; lezione: Lezione; fatte: number } | null = null;

  for (const materia of materie) {
    const ordine = lezioniInOrdine(materia);
    if (ordine.length === 0) continue;
    const stati = statiLezioni(ordine, stellePerLezione);
    const corrente = ordine.find((l) => stati.get(l.id) === 'corrente');
    if (!corrente) continue; // materia completata
    const fatte = ordine.filter((l) => stati.get(l.id) === 'completata').length;
    if (!migliore || fatte > migliore.fatte) migliore = { materia, lezione: corrente, fatte };
  }

  return migliore ? { materia: migliore.materia, lezione: migliore.lezione } : null;
}

/**
 * Quanta parte del programma è stata effettivamente coperta.
 *
 * Restituisce la quota (0–1) di lezioni superate con almeno una stella
 * sulle materie passate. È la misura che sostituisce i punti nel definire
 * il livello: i punti si accumulano anche sbagliando e anche rifacendo la
 * stessa lezione, quindi crescono con il tempo speso invece che con il
 * programma svolto. Un'app che dichiara «pronto all'esame» a chi ha visto
 * il cinque per cento delle domande sta mentendo all'unica persona a cui
 * non può permettersi di mentire.
 */
export function coperturaProgramma(
  materie: Materia[],
  stellePerLezione: Record<string, number>
): number {
  let totali = 0;
  let fatte = 0;
  for (const materia of materie) {
    for (const lezione of lezioniInOrdine(materia)) {
      totali += 1;
      if ((stellePerLezione[lezione.id] ?? 0) >= 1) fatte += 1;
    }
  }
  return totali === 0 ? 0 : fatte / totali;
}

/** Quante lezioni contiene in tutto il percorso delle materie passate. */
export function totaleLezioni(materie: Materia[]): number {
  return materie.reduce((n, m) => n + lezioniInOrdine(m).length, 0);
}
