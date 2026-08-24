/**
 * Forma di uno svolgimento proposto.
 *
 * Il nome non è un vezzo: si chiama «svolgimento proposto» e mai
 * «soluzione corretta». All'esame non esiste una risposta esatta
 * depositata da qualche parte — esiste un elaborato che regge o non
 * regge. Promettere la soluzione giusta sarebbe una promessa che
 * nessuno può mantenere, e nessuno qui firma nulla.
 *
 * Da questa premessa discendono tre regole rispettate in ogni file
 * della cartella:
 *
 * 1. **Ogni affermazione porta il suo aggancio.** Un blocco senza
 *    riferimenti puntuali è un'opinione: il test lo rifiuta.
 * 2. **Dove la giurisprudenza è divisa, si mostra il contrasto.** Non si
 *    sceglie il vincitore al posto del candidato: si espongono le tesi
 *    con i loro argomenti e si dice che cosa cambia in concreto. È anche
 *    l'unico modo onesto di preparare a una prova in cui la commissione
 *    valuta il ragionamento, non la conclusione.
 * 3. **`stato` è un cancello interno, non un bollino.** All'utente non
 *    viene mostrata nessuna medaglia di qualità: `bozza` semplicemente
 *    non arriva in schermata. Chi legge vede solo la data di
 *    aggiornamento e il pulsante per segnalare un errore.
 */

/**
 * Cancello di pubblicazione, uso interno.
 *
 * `bozza` = scritto ma non ricontrollato: `svolgimentoDi()` non lo
 * restituisce, quindi non esiste per l'interfaccia.
 */
export type StatoSvolgimento = 'bozza' | 'verificata';

export type TipoRiferimento = 'norma' | 'giurisprudenza';

export interface Riferimento {
  /** Citazione puntuale: «art. 1495 c.c.», «Cass. civ. n. 5935/2018». */
  testo: string;
  tipo: TipoRiferimento;
}

/** Un passaggio dello svolgimento: si apre e si chiude da solo. */
export interface BloccoSvolgimento {
  id: string;
  titolo: string;
  /** Una riga di anteprima, visibile anche a blocco chiuso. */
  sintesi: string;
  paragrafi: string[];
  riferimenti: Riferimento[];
}

export interface Orientamento {
  /** La tesi in una riga, come la enuncerebbe una massima. */
  tesi: string;
  argomento: string;
  riferimenti: Riferimento[];
}

/**
 * Una questione su cui la giurisprudenza non è allineata.
 *
 * `ricaduta` è la parte che serve davvero: sapere che esistono due
 * orientamenti non vale nulla se non si sa che cosa cambia per il
 * cliente.
 */
export interface Contrasto {
  id: string;
  questione: string;
  orientamenti: Orientamento[];
  ricaduta: string;
}

/** Voce della griglia di autovalutazione. `peso` in punti su 100. */
export interface VoceGriglia {
  voce: string;
  peso: number;
  /** Che cosa deve esserci perché il punto si consideri preso. */
  criterio: string;
}

export interface Svolgimento {
  tracciaId: string;
  stato: StatoSvolgimento;
  /** Data dell'ultima verifica dei contenuti, mostrata in schermata. */
  aggiornatoAl: string;
  /**
   * Le questioni che la traccia nasconde, prima di leggere lo
   * svolgimento. È il primo blocco che si apre: individuarle è metà
   * della prova, e chi salta questo passaggio si porta via molto meno.
   */
  questioni: string[];
  blocchi: BloccoSvolgimento[];
  contrasti: Contrasto[];
  /** Errori che ricorrono negli elaborati, non generici consigli. */
  trappole: string[];
  griglia: VoceGriglia[];
}

/** Data dell'ultima verifica dell'intera cartella. */
export const AGGIORNATO_AL = '24 agosto 2026';
