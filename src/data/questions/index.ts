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
];
