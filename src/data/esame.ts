/**
 * Come funziona l'esame di abilitazione forense.
 *
 * Sorgente unica dei contenuti della schermata omonima. Ogni voce porta
 * il proprio riferimento normativo: su una materia che cambia — e che è
 * appena cambiata — l'unica difesa contro l'invecchiamento silenzioso è
 * che ogni affermazione sia verificabile alla fonte.
 *
 * Attenzione a due confini, rispettati in tutto il file:
 *
 * 1. Si riporta ciò che il decreto dice. I tempi di preparazione del
 *    caso pratico, che circolano nei corsi, NON stanno nella norma: se
 *    ne dà conto separatamente e come tale.
 * 2. Il decreto di indizione non è ancora uscito. Finché non esce, date
 *    e modalità operative non sono note e la schermata deve dirlo.
 */

/** Data dell'ultima verifica dei contenuti. Va aggiornata a ogni modifica. */
export const AGGIORNATO_IL = '24 agosto 2026';

export const RIFORMA = {
  decreto: 'decreto-legge 12 giugno 2026, n. 100',
  conversione: 'legge 7 agosto 2026, n. 145',
  gazzetta: 'Gazzetta Ufficiale n. 183 dell’8 agosto 2026',
  abrogati: 'artt. 46, 47 e 49 della legge 31 dicembre 2012, n. 247',
  decorrenza: 'sessione 2026-2027',
};

export type TipoProva = 'scritto' | 'orale';

export interface Prova {
  id: string;
  /** Numero d'ordine mostrato nel pallino, es. «1». */
  ordine: string;
  tipo: TipoProva;
  titolo: string;
  /** Una riga: che cosa ti chiedono. */
  sintesi: string;
  /** Materie fra cui si sceglie, quando la scelta c'è. */
  scelta?: string;
  dettagli: string[];
}

export const PROVE: Prova[] = [
  {
    id: 'scritto-parere',
    ordine: '1',
    tipo: 'scritto',
    titolo: 'Parere motivato',
    sintesi: 'Un parere su una questione pratica, in una materia che scegli tu.',
    scelta: 'diritto civile, diritto penale o diritto amministrativo',
    dettagli: [
      'Si svolge in presenza, su traccia formulata dal Ministero della giustizia.',
      'Sono ammessi i soli codici annotati con la giurisprudenza: sono esclusi i commentari dottrinali.',
      'Serve un punteggio di almeno 18 punti per essere ammessi alla prova successiva.',
    ],
  },
  {
    id: 'scritto-atto',
    ordine: '2',
    tipo: 'scritto',
    titolo: 'Atto giudiziario',
    sintesi: 'La redazione dell’atto più idoneo a tutelare la parte assistita.',
    scelta: 'diritto civile, diritto penale o diritto amministrativo',
    dettagli: [
      'Stesse regole della prima prova: in presenza, codici annotati con la giurisprudenza.',
      'Anche qui servono almeno 18 punti.',
      'I punteggi non si compensano fra loro: un ottimo parere non salva un atto insufficiente.',
    ],
  },
  {
    id: 'orale-caso',
    ordine: '3',
    tipo: 'orale',
    titolo: 'Caso pratico',
    sintesi:
      'Un caso da risolvere davanti alla commissione, che richiede insieme diritto sostanziale e processuale.',
    scelta: 'diritto privato, diritto penale o diritto amministrativo (da indicare in anticipo)',
    dettagli: [
      'È la novità principale della riforma: prima non esisteva nulla di simile.',
      'La materia va scelta preventivamente, al momento della domanda.',
      'Ti viene assegnato il caso e hai del tempo per organizzare la risposta prima di esporla.',
    ],
  },
  {
    id: 'orale-processuale',
    ordine: '4',
    tipo: 'orale',
    titolo: 'Quesito di diritto processuale',
    sintesi: 'Una domanda sulla procedura, nella materia che hai scelto.',
    scelta: 'procedura civile o procedura penale',
    dettagli: ['La scelta è fra le due procedure: una delle due va comunque portata.'],
  },
  {
    id: 'orale-sostanziale',
    ordine: '5',
    tipo: 'orale',
    titolo: 'Quesito di diritto sostanziale',
    sintesi: 'Una domanda su una delle tre materie sostanziali.',
    scelta: 'diritto civile, diritto penale o diritto amministrativo',
    dettagli: ['Anche qui la materia è scelta dal candidato all’interno della terna.'],
  },
  {
    id: 'orale-terza',
    ordine: '6',
    tipo: 'orale',
    titolo: 'Terza materia a scelta',
    sintesi: 'Una sola materia, scelta in una rosa di sei.',
    scelta:
      'costituzionale, commerciale, del lavoro, internazionale, dell’Unione europea o tributario',
    dettagli: [
      'Prima se ne portavano cinque su dodici: ora se ne porta una su sei.',
      'Il diritto ecclesiastico, che era la scelta più leggera, è uscito dall’elenco.',
      'Vale un quinto dell’orale e non si compensa: su questa materia serve comunque la sufficienza.',
    ],
  },
  {
    id: 'orale-deontologia',
    ordine: '7',
    tipo: 'orale',
    titolo: 'Ordinamento, deontologia e previdenza forense',
    sintesi: 'Il blocco obbligatorio per tutti, senza alcuna possibilità di scelta.',
    dettagli: [
      'La previdenza forense è ora nominata espressamente, accanto a ordinamento e deontologia.',
    ],
  },
];

export interface VoceConfronto {
  aspetto: string;
  prima: string;
  adesso: string;
}

export const CONFRONTO: VoceConfronto[] = [
  { aspetto: 'Prove scritte', prima: 'Tre', adesso: 'Due: parere e atto' },
  {
    aspetto: 'Materia degli scritti',
    prima: 'Parere civile, parere penale e atto',
    adesso: 'Una materia a scelta fra civile, penale e amministrativo',
  },
  {
    aspetto: 'Codici in aula',
    prima: 'Codici commentati, secondo il regime transitorio',
    adesso: 'Solo codici annotati con la giurisprudenza',
  },
  { aspetto: 'Caso pratico all’orale', prima: 'Non previsto', adesso: 'Prima parte dell’orale' },
  {
    aspetto: 'Materie a scelta all’orale',
    prima: 'Cinque su dodici',
    adesso: 'Una su sei',
  },
  {
    aspetto: 'Diritto ecclesiastico',
    prima: 'Fra le materie a scelta',
    adesso: 'Non più previsto',
  },
  {
    aspetto: 'Previdenza forense',
    prima: 'Non nominata',
    adesso: 'Esplicita, con ordinamento e deontologia',
  },
  {
    aspetto: 'Compensazione fra i voti',
    prima: 'Possibile fra le prove scritte',
    adesso: 'Nessuna: serve la sufficienza in ciascuna prova',
  },
];

export interface SezioneEsame {
  id: string;
  titolo: string;
  icona: string;
  paragrafi: string[];
}

export const SEZIONI: SezioneEsame[] = [
  {
    id: 'punteggi',
    titolo: 'Come si viene valutati',
    icona: 'calculator-outline',
    paragrafi: [
      'Le prove scritte si superano con almeno 18 punti ciascuna. Non c’è compensazione: un punteggio alto in una prova non copre l’insufficienza nell’altra.',
      'All’orale ogni commissario dispone di dieci punti per ciascuna delle parti in cui la prova si articola: caso pratico, quesito processuale, quesito sostanziale, terza materia, ordinamento e deontologia.',
      'Il principio è lo stesso degli scritti: la sufficienza serve su ogni singola parte. È la differenza più pesante rispetto al passato, perché toglie ogni margine alla materia in cui si è più deboli.',
    ],
  },
  {
    id: 'aula',
    titolo: 'Che cosa puoi portare in aula',
    icona: 'library-outline',
    paragrafi: [
      'Alle prove scritte sono ammessi i soli codici annotati con la giurisprudenza: quelli con i richiami alle massime, non i commentari con note dottrinali.',
      'Restano vietati testi, appunti, scritti di qualunque genere, strumenti elettronici e di telecomunicazione.',
      'Prima di comprare i codici, aspetta il decreto di indizione: è quello a fissare in concreto che cosa è ammesso in aula per la sessione.',
    ],
  },
  {
    id: 'quando',
    titolo: 'Quando si svolge',
    icona: 'calendar-outline',
    paragrafi: [
      'L’esame si tiene in un’unica sessione annuale.',
      'Le nuove regole si applicano dalla prima sessione successiva all’entrata in vigore del decreto, cioè dalla sessione 2026-2027.',
      'Le date, le sedi e le modalità operative saranno fissate dal decreto ministeriale di indizione, che alla data di aggiornamento di questa pagina non è ancora stato pubblicato.',
    ],
  },
  {
    id: 'cautele',
    titolo: 'Che cosa non si sa ancora',
    icona: 'help-circle-outline',
    paragrafi: [
      'Il tempo a disposizione per preparare il caso pratico all’orale non è indicato nel decreto. Le stime che circolano — una trentina di minuti per organizzare la risposta, un’ora abbondante di esposizione complessiva — vengono dai corsi di preparazione, non dalla norma.',
      'Il decreto di indizione dovrà chiarire tempi, modalità di svolgimento e criteri di valutazione applicati dalle commissioni.',
      'È inoltre in Parlamento un disegno di legge delega sull’ordinamento della professione forense, che riscriverebbe l’intero sistema di accesso: non è legge, e il decreto del 2026 non lo anticipa.',
    ],
  },
];

/** Come le sezioni dell'app si mappano sulle prove. */
export interface Consiglio {
  id: string;
  titolo: string;
  testo: string;
  icona: string;
}

export const CONSIGLI: Consiglio[] = [
  {
    id: 'quiz',
    titolo: 'Percorso quiz',
    testo:
      'Copre le materie del nucleo comune e, nel blocco separato, le materie a scelta dell’orale. Ricorda che di queste ultime ne porti una sola.',
    icona: 'help-circle',
  },
  {
    id: 'tracce',
    titolo: 'Tracce d’esame',
    testo:
      'L’archivio delle prove degli anni passati resta utile per gli scritti, anche se erano tre invece di due: cambia il numero delle prove, non il modo di ragionare su parere e atto.',
    icona: 'document-text',
  },
  {
    id: 'deontologia',
    titolo: 'Deontologia',
    testo:
      'È l’unico blocco dell’orale che non puoi evitare. Ora comprende anche la previdenza forense.',
    icona: 'people',
  },
];
