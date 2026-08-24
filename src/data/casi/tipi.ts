import type { Riferimento } from '../svolgimenti/tipi';

/**
 * Casi pratici per la prima parte dell'orale.
 *
 * È la prova introdotta dal d.l. 100/2026: prima non esisteva nulla di
 * simile, quindi non esiste nemmeno materiale storico su cui esercitarsi.
 * Questi casi sono scritti da zero seguendo la sola indicazione che la
 * norma dà — un caso da risolvere che richieda insieme diritto
 * sostanziale e processuale — e vanno presi per quello che sono:
 * esercizi costruiti su quella indicazione, non prove d'esame passate.
 *
 * Il `versante` di ogni punto della scaletta non è una classificazione
 * decorativa. La prova chiede espressamente entrambi i piani, e
 * l'errore ricorrente di chi si prepara è esporre benissimo il
 * sostanziale e dimenticare come si porta in giudizio: separare i due
 * conteggi rende visibile quello squilibrio invece di annegarlo in un
 * totale unico.
 */

export type MateriaCaso = 'Diritto privato' | 'Diritto penale' | 'Diritto amministrativo';

export const MATERIE_CASO: MateriaCaso[] = [
  'Diritto privato',
  'Diritto penale',
  'Diritto amministrativo',
];

export type Versante = 'sostanziale' | 'processuale';

export interface PuntoScaletta {
  id: string;
  titolo: string;
  /** Che cosa va effettivamente detto perché il punto si consideri toccato. */
  dettaglio: string;
  /** Peso in punti. La somma dei pesi di un caso fa cento. */
  peso: number;
  versante: Versante;
  riferimenti: Riferimento[];
}

export interface CasoPratico {
  id: string;
  materia: MateriaCaso;
  titolo: string;
  /** Il fatto, nei termini in cui verrebbe letto dalla commissione. */
  fatto: string[];
  /** La consegna: che cosa ti viene chiesto di fare. */
  consegna: string;
  scaletta: PuntoScaletta[];
  /** Le domande con cui la commissione tipicamente incalza su questo caso. */
  domandeCommissione: string[];
  /** Errori ricorrenti di chi espone proprio questo caso. */
  insidie: string[];
}

/**
 * Durate proposte per le due fasi, in minuti.
 *
 * ATTENZIONE, e la schermata deve dirlo a chiare lettere: **il decreto
 * non fissa questi tempi**. Le cifre che circolano vengono dai corsi di
 * preparazione, non dalla norma, e il decreto di indizione — che dovrà
 * stabilire modalità e tempi — alla data di aggiornamento non è ancora
 * stato pubblicato. Sono qui come impostazione di lavoro, modificabile,
 * non come riproduzione di una regola.
 */
export const DURATE_PREPARAZIONE = [15, 30, 45] as const;
export const DURATE_ESPOSIZIONE = [10, 15, 20] as const;

export const DURATA_PREPARAZIONE_PREDEFINITA = 30;
export const DURATA_ESPOSIZIONE_PREDEFINITA = 15;
