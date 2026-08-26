/**
 * Materie del percorso.
 *
 * Le prime sei coprono gli scritti e il nucleo fisso dell'orale. Il d.l.
 * 100/2026 (conv. l. 145/2026) ha però ristretto la scelta libera
 * dell'orale a una sola materia fra sei — costituzionale, commerciale,
 * lavoro, internazionale, dell'Unione europea, tributario — e ha tolto
 * di mezzo l'ecclesiastico. Non sono materie nuove per l'esame (c'erano
 * già nella rosa di dodici del vecchio ordinamento), ma lo sono per
 * l'app, e ora pesano di più: la prova è una su cinque e non c'è
 * compensazione fra i punteggi.
 */
export type Materia =
  | 'Diritto civile'
  | 'Diritto penale'
  | 'Procedura civile'
  | 'Procedura penale'
  | 'Diritto amministrativo'
  | 'Deontologia forense'
  | 'Diritto costituzionale'
  | 'Diritto commerciale'
  | 'Diritto del lavoro'
  | 'Diritto dell’Unione europea'
  | 'Diritto internazionale'
  | 'Diritto tributario';

/** Livello di difficoltà: 1 Fondamenti, 2 Consolidamento, 3 Avanzato, 4 Eccellenza. */
export type Difficolta = 1 | 2 | 3 | 4;

export interface QuizQuestion {
  id: string;
  materia: Materia;
  difficolta: Difficolta;
  domanda: string;
  opzioni: string[];
  /** Indice (0-based) della risposta corretta in `opzioni`. */
  rispostaCorretta: number;
  /** Spiegazione del perché la risposta è corretta, con riferimenti normativi. */
  spiegazione: string;
}

/**
 * Tipo di una traccia d'esame: forma della prova e materia insieme.
 *
 * Prima era `'Parere di diritto civile' | 'Parere di diritto penale' |
 * 'Atto giudiziario'`, e l'atto non diceva su quale materia vertesse.
 * Andava bene finché l'atto era uno solo: dopo il d.l. 100/2026 il
 * candidato sceglie la terna — civile, penale o amministrativo — e per
 * entrambe le prove, quindi una traccia che non dichiara la propria
 * materia non si può nemmeno filtrare per chi la porta.
 *
 * L'amministrativo, in particolare, non era esprimibile affatto: la
 * materia c'era già nella prova d'atto degli anni passati, ma qui non
 * aveva un nome.
 */
export type TipoTraccia =
  | 'Parere di diritto civile'
  | 'Parere di diritto penale'
  | 'Parere di diritto amministrativo'
  | 'Atto di diritto civile'
  | 'Atto di diritto penale'
  | 'Atto di diritto amministrativo';

/** La materia di una traccia, ricavata dal tipo. */
export function materiaDellaTraccia(tipo: TipoTraccia): Materia {
  if (tipo.endsWith('civile')) return 'Diritto civile';
  if (tipo.endsWith('penale')) return 'Diritto penale';
  return 'Diritto amministrativo';
}

export interface Traccia {
  id: string;
  anno: number;
  sessione: string;
  tipo: TipoTraccia;
  titolo: string;
  testo: string;
  argomenti: string[];
  /**
   * True quando `testo` è il testo ufficiale integrale della traccia
   * (atto ufficiale pubblicato dal Ministero della Giustizia);
   * false/assente quando è una sintesi a scopo di studio.
   */
  testoUfficiale?: boolean;
  /** URL della fonte ufficiale (pagina o PDF del Ministero della Giustizia). */
  fonte?: string;
}

export interface MaterialeEsame {
  id: string;
  titolo: string;
  descrizione: string;
  categoria: 'Codici' | 'Manuali' | 'Cancelleria e utilità';
  /**
   * ASIN Amazon del prodotto (es. "B0ABC12345"): quando presente il link
   * affiliato punta direttamente alla scheda prodotto. Se assente, il link
   * apre una ricerca Amazon con `searchQuery` (comunque tracciata col tag).
   */
  asin?: string;
  /** Query di ricerca Amazon usata come fallback quando manca l'ASIN. */
  searchQuery: string;
}
