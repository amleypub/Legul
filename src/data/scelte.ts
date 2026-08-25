import { MATERIE_A_SCELTA } from './quizzes';
import type { Materia } from '../types';

/**
 * Le scelte che il candidato fa sull'esame.
 *
 * La riforma del 2026 ha spostato quasi tutto sulla scelta: la materia
 * degli scritti, quella del caso pratico, la procedura all'orale e la
 * materia della rosa. Un candidato che porta penale non ha alcun motivo
 * di vedere le stesse schermate di uno che porta amministrativo, e
 * soprattutto non ha motivo di vedere sessantaquattro lezioni di
 * procedura civile presentate con lo stesso peso di quelle che gli
 * serviranno davvero.
 *
 * Finché l'app non sa che cosa porti, deve trattare tutte le materie
 * allo stesso modo — cioè dare a tutti il percorso di nessuno.
 *
 * Le scelte restano modificabili in qualsiasi momento dal Profilo: si
 * cambia idea, e un'app che chiede una decisione irreversibile al primo
 * avvio si fa chiudere.
 */

/** Materia su cui si sostengono le due prove scritte. */
export type MateriaScritti = 'Diritto civile' | 'Diritto penale' | 'Diritto amministrativo';

/** Procedura portata all'orale: una delle due va comunque sostenuta. */
export type ProceduraOrale = 'Procedura civile' | 'Procedura penale';

/** La materia della rosa di sei, di cui se ne porta una sola. */
export type MateriaScelta =
  | 'Diritto costituzionale'
  | 'Diritto commerciale'
  | 'Diritto del lavoro'
  | 'Diritto internazionale'
  | 'Diritto dell’Unione europea'
  | 'Diritto tributario';

export const SCELTE_SCRITTI: { valore: MateriaScritti; nota: string }[] = [
  {
    valore: 'Diritto civile',
    nota: 'La scelta più frequente. Programma vastissimo, ma tracce prevedibili.',
  },
  {
    valore: 'Diritto penale',
    nota: 'Programma più circoscritto, ma le tracce puniscono l’approssimazione.',
  },
  {
    valore: 'Diritto amministrativo',
    nota: 'Meno concorrenti e meno materiale in circolazione.',
  },
];

export const SCELTE_PROCEDURA: { valore: ProceduraOrale; nota: string }[] = [
  {
    valore: 'Procedura civile',
    nota: 'Coerente con chi porta civile agli scritti e nel caso pratico.',
  },
  {
    valore: 'Procedura penale',
    nota: 'Coerente con chi porta penale, e più breve da preparare.',
  },
];

/**
 * La rosa completa dei sei, non solo quelle che Legul copre.
 *
 * Tre hanno un percorso di quiz, tre no. La tentazione sarebbe mostrare
 * solo le prime: sembrerebbe un'app completa. Ma chi porta tributario
 * esiste comunque, e scoprire a metà preparazione che la propria materia
 * non c'è è molto peggio che saperlo il primo giorno. `coperta` dice la
 * verità nell'elenco, e chi sceglie una materia scoperta se lo sente dire
 * subito invece di cercarla per settimane.
 */
const ROSA: { valore: MateriaScelta; nota: string }[] = [
  { valore: 'Diritto costituzionale', nota: 'Trasversale: torna utile anche nelle altre prove.' },
  { valore: 'Diritto commerciale', nota: 'Programma corposo, ma vicino alla pratica dello studio.' },
  { valore: 'Diritto del lavoro', nota: 'Molto codificato: si prepara in fretta se già lo conosci.' },
  { valore: 'Diritto internazionale', nota: 'Programma contenuto, poche domande ricorrenti.' },
  {
    valore: 'Diritto dell’Unione europea',
    nota: 'Il più breve della rosa, ma richiede precisione sulle fonti.',
  },
  { valore: 'Diritto tributario', nota: 'Tecnico e stabile: premia chi ci ha già lavorato.' },
];

export const SCELTE_MATERIA: { valore: MateriaScelta; nota: string; coperta: boolean }[] = ROSA.map(
  (v) => ({ ...v, coperta: MATERIE_A_SCELTA.includes(v.valore as Materia) })
);

/** Le materie della rosa che l'app non copre ancora con un percorso. */
export function materieScoperte(): MateriaScelta[] {
  return SCELTE_MATERIA.filter((m) => !m.coperta).map((m) => m.valore);
}

export interface ProfiloEsame {
  /** Data della prova scritta, se il candidato la conosce. */
  dataEsame: string | null;
  scritti: MateriaScritti | null;
  procedura: ProceduraOrale | null;
  materiaScelta: MateriaScelta | null;
}

export const PROFILO_VUOTO: ProfiloEsame = {
  dataEsame: null,
  scritti: null,
  procedura: null,
  materiaScelta: null,
};

/**
 * Divide la rosa fra la materia portata e le altre.
 *
 * All'orale se ne porta una sola: mostrarne sei con lo stesso peso
 * significa presentare a ciascuno cinque percorsi che non farà mai. Le
 * altre non spariscono — si cambia idea — ma stanno sotto.
 */
export function rosaOrdinata(
  scelta: MateriaScelta | null,
  rosa: Materia[]
): { portata: Materia | null; altre: Materia[] } {
  if (!scelta || !rosa.includes(scelta as Materia)) return { portata: null, altre: rosa };
  return { portata: scelta as Materia, altre: rosa.filter((m) => m !== scelta) };
}

/** Quanti giorni mancano alla data indicata. Negativo se è passata. */
export function giorniAllEsame(dataEsame: string, oggi: string): number {
  return Math.round(
    (Date.parse(`${dataEsame}T00:00:00Z`) - Date.parse(`${oggi}T00:00:00Z`)) / 86_400_000
  );
}

/**
 * Come si dice il conto alla rovescia.
 *
 * Sopra il mese si passa alle settimane: «mancano 137 giorni» è un
 * numero che non si riesce a immaginare, «diciannove settimane» sì. Sotto
 * la settimana si torna ai giorni, perché lì ogni giorno conta.
 */
export function testoConto(giorni: number): string {
  if (giorni < 0) return 'La data che hai indicato è passata';
  if (giorni === 0) return 'È oggi. In bocca al lupo.';
  if (giorni === 1) return 'Manca un giorno';
  if (giorni <= 30) return `Mancano ${giorni} giorni`;
  const settimane = Math.round(giorni / 7);
  return `Mancano ${settimane} settimane`;
}

/**
 * Quante lezioni al giorno servirebbero per finire il programma in tempo.
 *
 * È il numero che trasforma una data in un piano. Restituisce `null` se
 * la data è passata o se non c'è più niente da fare: in entrambi i casi
 * non c'è un ritmo da suggerire.
 */
export function ritmoNecessario(
  lezioniRimaste: number,
  giorni: number
): number | null {
  if (giorni <= 0 || lezioniRimaste <= 0) return null;
  return Math.ceil((lezioniRimaste / giorni) * 10) / 10;
}
