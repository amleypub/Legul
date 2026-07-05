export type Materia =
  | 'Diritto civile'
  | 'Diritto penale'
  | 'Procedura civile'
  | 'Procedura penale'
  | 'Diritto amministrativo'
  | 'Deontologia forense';

export interface QuizQuestion {
  id: string;
  materia: Materia;
  domanda: string;
  opzioni: string[];
  /** Indice (0-based) della risposta corretta in `opzioni`. */
  rispostaCorretta: number;
  /** Spiegazione del perché la risposta è corretta, con riferimenti normativi. */
  spiegazione: string;
}

export type TipoTraccia = 'Parere di diritto civile' | 'Parere di diritto penale' | 'Atto giudiziario';

export interface Traccia {
  id: string;
  anno: number;
  sessione: string;
  tipo: TipoTraccia;
  titolo: string;
  testo: string;
  argomenti: string[];
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
  emoji: string;
}
