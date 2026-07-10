import type { Difficolta, Materia, QuizQuestion } from '../types';
import { tutteLeDomande } from './questions';

export const DOMANDE_PER_LEZIONE = 10;

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

/**
 * Modello freemium: le unità 1 e 2 sono gratuite,
 * le unità 3 e 4 richiedono Premium.
 */
export function unitaGratuita(difficolta: Difficolta): boolean {
  return difficolta <= 2;
}

const DIFFICOLTA: Difficolta[] = [1, 2, 3, 4];

/**
 * Costruisce il percorso di una materia: unità per difficoltà crescente,
 * ciascuna suddivisa in lezioni da DOMANDE_PER_LEZIONE domande.
 * Una coda finale con meno di 5 domande viene accorpata all'ultima lezione.
 */
export function percorsoPerMateria(materia: Materia): Unita[] {
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

/** Tutte le lezioni della materia in ordine di percorso (per la logica di sblocco). */
export function lezioniInOrdine(materia: Materia): Lezione[] {
  return percorsoPerMateria(materia).flatMap((u) => u.lezioni);
}

export function trovaLezione(materia: Materia, lezioneId: string): Lezione | undefined {
  return lezioniInOrdine(materia).find((l) => l.id === lezioneId);
}

/**
 * Una lezione è sbloccata se è la prima del percorso o se la precedente
 * è stata completata con almeno una stella.
 */
export function lezioneSbloccata(
  materia: Materia,
  lezioneId: string,
  stellePerLezione: Record<string, number>
): boolean {
  const ordine = lezioniInOrdine(materia);
  const idx = ordine.findIndex((l) => l.id === lezioneId);
  if (idx <= 0) return idx === 0;
  return (stellePerLezione[ordine[idx - 1].id] ?? 0) >= 1;
}
