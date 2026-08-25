import type { QuizQuestion } from '../../types';
import { quizQuestions } from '../quizzes';
import { civileL1 } from './civile-l1';
import { civileL2 } from './civile-l2';
import { civileL3 } from './civile-l3';
import { civileL4 } from './civile-l4';
import { penaleL1 } from './penale-l1';
import { penaleL2 } from './penale-l2';
import { penaleL3 } from './penale-l3';
import { penaleL4 } from './penale-l4';
import { procCivileL1 } from './proc-civile-l1';
import { procCivileL2 } from './proc-civile-l2';
import { procCivileL3 } from './proc-civile-l3';
import { procCivileL4 } from './proc-civile-l4';
import { procPenaleL1 } from './proc-penale-l1';
import { procPenaleL2 } from './proc-penale-l2';
import { procPenaleL3 } from './proc-penale-l3';
import { procPenaleL4 } from './proc-penale-l4';
import { amministrativoL1 } from './amministrativo-l1';
import { amministrativoL2 } from './amministrativo-l2';
import { amministrativoL3 } from './amministrativo-l3';
import { amministrativoL4 } from './amministrativo-l4';
import { deontologiaL1 } from './deontologia-l1';
import { deontologiaL2 } from './deontologia-l2';
import { deontologiaL3 } from './deontologia-l3';
import { deontologiaL4 } from './deontologia-l4';
import { costituzionaleL1 } from './costituzionale-l1';
import { costituzionaleL2 } from './costituzionale-l2';
import { costituzionaleL3 } from './costituzionale-l3';
import { costituzionaleL4 } from './costituzionale-l4';
import { commercialeL1 } from './commerciale-l1';
import { commercialeL2 } from './commerciale-l2';
import { commercialeL3 } from './commerciale-l3';
import { commercialeL4 } from './commerciale-l4';
import { lavoroL1 } from './lavoro-l1';
import { lavoroL2 } from './lavoro-l2';
import { lavoroL3 } from './lavoro-l3';
import { lavoroL4 } from './lavoro-l4';
import { deontologia2025 } from './deontologia-2025';
import { ueL1 } from './ue-l1';
import { ueL2 } from './ue-l2';
import { ueL3 } from './ue-l3';
import { ueL4 } from './ue-l4';
import { previdenzaL1 } from './previdenza-l1';
import { previdenzaL2 } from './previdenza-l2';
import { previdenzaL3 } from './previdenza-l3';
import { previdenzaL4 } from './previdenza-l4';

/**
 * Aggregatore della banca domande: unisce tutti i moduli materia/livello.
 * Banca completa su 4 livelli di difficolta per ogni materia (deontologia
 * con volumi ridotti, coerenti col peso della materia all'esame).
 */
export const tutteLeDomande: QuizQuestion[] = [
  ...quizQuestions,
  ...civileL1,
  ...civileL2,
  ...civileL3,
  ...civileL4,
  ...penaleL1,
  ...penaleL2,
  ...penaleL3,
  ...penaleL4,
  ...procCivileL1,
  ...procCivileL2,
  ...procCivileL3,
  ...procCivileL4,
  ...procPenaleL1,
  ...procPenaleL2,
  ...procPenaleL3,
  ...procPenaleL4,
  ...amministrativoL1,
  ...amministrativoL2,
  ...amministrativoL3,
  ...amministrativoL4,
  ...deontologiaL1,
  ...deontologiaL2,
  ...deontologiaL3,
  ...deontologiaL4,
  ...costituzionaleL1,
  ...costituzionaleL2,
  ...costituzionaleL3,
  ...costituzionaleL4,
  ...commercialeL1,
  ...commercialeL2,
  ...commercialeL3,
  ...commercialeL4,
  ...lavoroL1,
  ...lavoroL2,
  ...lavoroL3,
  ...lavoroL4,
  // La previdenza forense è parte dell'ordinamento professionale e va con
  // la deontologia: sta in coda perché così le sue domande formano un
  // blocco di lezioni riconoscibile in fondo a ciascuna unità, invece di
  // sparpagliarsi fra le regole sul conflitto di interessi.
  // Le modifiche al codice deontologico in vigore dal 1° novembre 2025:
  // è la parte su cui un manuale dell'anno scorso fa sbagliare.
  ...deontologia2025,
  // Diritto dell'Unione europea: una delle sei materie a scelta
  // dell'orale, che l'app dichiarava di non coprire.
  ...ueL1,
  ...ueL2,
  ...ueL3,
  ...ueL4,
  ...previdenzaL1,
  ...previdenzaL2,
  ...previdenzaL3,
  ...previdenzaL4,
];

/**
 * Materia di una domanda, dato il suo identificativo.
 *
 * Serve alla diagnosi per attribuire alla materia giusta le carte rimaste
 * nel mazzo del ripasso, che di sé portano solo l'identificativo. La
 * tabella si costruisce una volta sola alla prima richiesta: quattromila
 * voci non si scorrono a ogni carta.
 */
let indiceMaterie: Map<string, QuizQuestion['materia']> | null = null;

export function materiaDiDomanda(domandaId: string): QuizQuestion['materia'] | undefined {
  if (!indiceMaterie) {
    indiceMaterie = new Map(tutteLeDomande.map((d) => [d.id, d.materia]));
  }
  return indiceMaterie.get(domandaId);
}
