import type { QuizQuestion } from '../../types';

/**
 * Le modifiche al codice deontologico in vigore dal 1° novembre 2025.
 *
 * Delibera CNF n. 636 del 21 marzo 2025, comunicata in Gazzetta Ufficiale
 * n. 202 del 1° settembre 2025: toccano gli artt. 48, 49, 50, 51, 56, 61
 * e 62, introducono l'art. 62-bis sulla negoziazione assistita e
 * riscrivono la titolazione del Titolo IV.
 *
 * Sono la parte del programma su cui un manuale dell'anno scorso fa
 * sbagliare, ed è esattamente il tipo di aggiornamento per cui vale la
 * pena avere un'app invece di un libro: la commissione chiede il testo
 * vigente, non quello su cui il candidato ha studiato.
 */
export const deontologia2025: QuizQuestion[] = [
  {
    id: 'deo-25-001',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Da quale data è in vigore il testo del codice deontologico forense modificato con la delibera CNF n. 636 del 2025?',
    opzioni: [
      'Dal 1° novembre 2025',
      'Dal 21 marzo 2025, data della delibera',
      'Dal 1° settembre 2025, data della pubblicazione in Gazzetta Ufficiale',
      'Dal 1° gennaio 2026',
    ],
    rispostaCorretta: 0,
    spiegazione: 'La delibera del Consiglio Nazionale Forense n. 636 del 21 marzo 2025 è stata comunicata nella Gazzetta Ufficiale n. 202 del 1° settembre 2025 e le modifiche sono entrate in vigore il 1° novembre 2025. Le tre date vanno tenute distinte: l’adozione, la pubblicazione e l’efficacia, che è quella rilevante per stabilire quale testo si applica a una condotta.',
  },
  {
    id: 'deo-25-002',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Come è oggi intitolato il Titolo IV del codice deontologico forense?',
    opzioni: [
      '«Doveri dell’avvocato nel processo»',
      '«Doveri dell’avvocato nel processo e nei procedimenti di risoluzione alternativa e complementare delle controversie»',
      '«Rapporti con i terzi e con le controparti»',
      '«Doveri dell’avvocato nell’attività stragiudiziale»',
    ],
    rispostaCorretta: 1,
    spiegazione: 'La delibera n. 636/2025 ha riscritto la titolazione del Titolo IV, che ora è dedicato ai «Doveri dell’avvocato nel processo e nei procedimenti di risoluzione alternativa e complementare delle controversie». Non è un ritocco lessicale: la nuova rubrica riconosce che i doveri processuali dell’avvocato valgono anche fuori dal processo, nella mediazione, nell’arbitrato e nella negoziazione assistita.',
  },
  {
    id: 'deo-25-003',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Quale istituto disciplina l’art. 62-bis, introdotto nel codice deontologico dal 1° novembre 2025?',
    opzioni: [
      'L’arbitrato',
      'La mediazione civile e commerciale',
      'La negoziazione assistita',
      'Il procedimento disciplinare davanti al consiglio distrettuale',
    ],
    rispostaCorretta: 2,
    spiegazione: 'L’art. 62-bis è la disposizione nuova introdotta dalla delibera n. 636/2025 e detta le regole di condotta dell’avvocato nella negoziazione assistita, accanto all’art. 62 che riguarda la mediazione. Fino a quel momento la negoziazione assistita non aveva una norma deontologica propria, pur essendo da anni un passaggio obbligato in molte materie.',
  },
  {
    id: 'deo-25-004',
    materia: 'Deontologia forense',
    difficolta: 2,
    domanda: 'Il nuovo comma dell’art. 50 cdf, in tema di dovere di verità, impone all’avvocato che presenti istanze o richieste relative al medesimo fatto di:',
    opzioni: [
      'Depositarle esclusivamente in via telematica',
      'Comunicarle preventivamente al collega di controparte',
      'Astenersi dal riproporle una seconda volta',
      'Indicare i provvedimenti già ottenuti sul medesimo fatto, compresi quelli di rigetto di cui sia a conoscenza',
    ],
    rispostaCorretta: 3,
    spiegazione: 'La modifica del 2025 ha aggiunto all’art. 50 l’obbligo di indicare, in caso di istanze o richieste relative al medesimo fatto, i provvedimenti già ottenuti, compresi quelli di rigetto di cui l’avvocato sia a conoscenza. La regola colpisce la pratica di riproporre la stessa istanza davanti a giudici diversi tacendo l’esito precedente: è una specificazione del dovere di verità, non un adempimento formale.',
  },
  {
    id: 'deo-25-005',
    materia: 'Deontologia forense',
    difficolta: 2,
    domanda: 'Che cosa può fare l’avvocato, cessato il mandato, della corrispondenza riservata scambiata con il collega?',
    opzioni: [
      'Trasmetterla soltanto al collega che gli succede, il quale resta a sua volta vincolato al dovere di riservatezza',
      'Consegnarla al cliente, che ne è il titolare sostanziale',
      'Depositarla in giudizio, essendo venuto meno il rapporto professionale',
      'Distruggerla, non potendo essere conservata dopo la cessazione dell’incarico',
    ],
    rispostaCorretta: 0,
    spiegazione: 'L’art. 48 cdf, nel testo vigente dal 1° novembre 2025, conferma che la corrispondenza riservata non può essere consegnata alla parte assistita né al cliente e precisa che, in caso di cessazione del mandato, essa può essere trasmessa al collega che succede nell’incarico, il quale è tenuto al medesimo dovere di riservatezza. La riservatezza segue quindi il documento e non la persona dell’avvocato.',
  },
  {
    id: 'deo-25-006',
    materia: 'Deontologia forense',
    difficolta: 2,
    domanda: 'Su quali materie l’art. 51 cdf, nel testo vigente, impone all’avvocato di astenersi dal deporre come testimone?',
    opzioni: [
      'Su qualsiasi circostanza appresa dopo l’assunzione dell’incarico',
      'Sulle conversazioni riservate, sulla corrispondenza riservata e sulle proposte transattive',
      'Soltanto sui fatti coperti dal segreto professionale in senso stretto',
      'Su nessuna: l’avvocato è sempre tenuto a deporre se citato',
    ],
    rispostaCorretta: 1,
    spiegazione: 'Il testo dell’art. 51 in vigore dal 1° novembre 2025 individua espressamente l’oggetto del dovere di astensione dalla testimonianza: le conversazioni riservate, la corrispondenza riservata e le proposte transattive. L’elencazione rende più netto il confine rispetto alla formula precedente e si coordina con il divieto di produrre in giudizio quegli stessi materiali, previsto dall’art. 48.',
  },
  {
    id: 'deo-25-007',
    materia: 'Deontologia forense',
    difficolta: 3,
    domanda: 'A quali condizioni l’avvocato può procedere all’ascolto di un minore, secondo l’art. 56 cdf nel testo vigente?',
    opzioni: [
      'Liberamente, purché ne dia atto in un verbale',
      'Solo su autorizzazione del giudice procedente',
      'Con il consenso di chi esercita la responsabilità genitoriale, salvo che sia stato nominato un curatore speciale del minore e sempre che non vi sia conflitto di interessi',
      'Mai: l’ascolto del minore è riservato al giudice e agli ausiliari da lui nominati',
    ],
    rispostaCorretta: 2,
    spiegazione: 'L’art. 56 cdf, riscritto nel 2025 per adeguarlo alle novità della riforma Cartabia sull’ascolto del minore, subordina l’ascolto al consenso di chi esercita la responsabilità genitoriale, salvo che sia stato nominato un curatore speciale del minore, e sempre che non sussista conflitto di interessi con chi presta il consenso. La clausola sul conflitto è il punto che rende la regola operativa: senza, il consenso potrebbe venire proprio da chi ha interesse a orientare l’ascolto.',
  },
  {
    id: 'deo-25-008',
    materia: 'Deontologia forense',
    difficolta: 3,
    domanda: 'Con quali modalità l’avvocato deve procedere all’ascolto del minore ai sensi dell’art. 56 cdf?',
    opzioni: [
      'Alla presenza obbligatoria di entrambi i genitori',
      'In forma scritta, mediante quesiti predisposti dalle parti',
      'Con registrazione audiovisiva integrale, a pena di inutilizzabilità',
      'Con modalità che assicurino il superiore interesse del minore',
    ],
    rispostaCorretta: 3,
    spiegazione: 'La norma non tipizza le forme dell’ascolto ma indica il criterio che deve guidarle: il superiore interesse del minore. È la trasposizione deontologica del principio che governa l’intera disciplina dell’ascolto nel processo di famiglia, e affida all’avvocato una valutazione sostanziale sulle circostanze del singolo caso invece di un elenco di adempimenti da spuntare.',
  },
  {
    id: 'deo-25-009',
    materia: 'Deontologia forense',
    difficolta: 3,
    domanda: 'Secondo l’art. 61 cdf, l’avvocato non deve accettare la nomina ad arbitro quando una delle parti del procedimento:',
    opzioni: [
      'Sia assistita, o sia stata assistita negli ultimi due anni, da altro professionista suo socio o associato, o che eserciti negli stessi locali o collabori professionalmente in maniera non occasionale',
      'Sia una pubblica amministrazione',
      'Abbia sede nello stesso circondario del suo studio',
      'Sia rappresentata da un avvocato iscritto al medesimo ordine territoriale',
    ],
    rispostaCorretta: 0,
    spiegazione: 'La modifica del 2025 estende all’arbitrato la stessa logica dell’art. 24 sul conflitto di interessi: l’incompatibilità non riguarda solo l’avvocato personalmente ma anche i professionisti a lui legati da un rapporto societario, associativo o di collaborazione non occasionale, o che esercitino negli stessi locali. Il riferimento agli ultimi due anni impedisce che l’ostacolo si aggiri interrompendo il rapporto poco prima della nomina.',
  },
  {
    id: 'deo-25-010',
    materia: 'Deontologia forense',
    difficolta: 4,
    domanda: 'Quale regime prevede l’art. 62-bis cdf per le informazioni acquisite dall’avvocato nel corso della negoziazione assistita?',
    opzioni: [
      'Sono liberamente utilizzabili una volta fallita la negoziazione',
      'Sono coperte da riservatezza e non possono essere utilizzate in giudizio',
      'Sono utilizzabili soltanto previo consenso del giudice',
      'Sono utilizzabili nei confronti dei terzi ma non fra le parti',
    ],
    rispostaCorretta: 1,
    spiegazione: 'L’art. 62-bis impone la riservatezza sulle informazioni acquisite nel corso della negoziazione assistita e ne esclude l’utilizzabilità in giudizio. È la regola che rende praticabile la procedura: senza la garanzia che quanto detto al tavolo non tornerà in aula, nessuna parte metterebbe sul tavolo le proprie carte, e la negoziazione si ridurrebbe a un adempimento da esaurire.',
  },
  {
    id: 'deo-25-011',
    materia: 'Deontologia forense',
    difficolta: 4,
    domanda: 'Nella negoziazione assistita, l’art. 62-bis cdf vieta all’avvocato di:',
    opzioni: [
      'Partecipare senza la presenza fisica della parte assistita',
      'Redigere personalmente il testo dell’accordo',
      'Esercitare pressioni o suggestioni sulle persone informate sui fatti',
      'Concordare il compenso in misura percentuale sul valore dell’accordo',
    ],
    rispostaCorretta: 2,
    spiegazione: 'Fra i doveri introdotti dall’art. 62-bis vi è il divieto di esercitare pressioni o suggestioni nei confronti delle persone informate sui fatti sentite nel corso della procedura. È la trasposizione, nel contesto della negoziazione assistita, della regola che già presidia i rapporti con i testimoni nel processo: la procedura stragiudiziale non è un luogo in cui le garanzie si allentano.',
  },
  {
    id: 'deo-25-012',
    materia: 'Deontologia forense',
    difficolta: 4,
    domanda: 'L’avvocato che ha partecipato alla redazione di un accordo di negoziazione assistita può impugnarlo?',
    opzioni: [
      'Sì, senza limiti, nell’interesse della parte assistita',
      'Sì, purché ne dia comunicazione al collega di controparte',
      'No, in nessun caso',
      'No, salvo che ricorrano sopravvenienze o fatti non conosciuti al momento della redazione',
    ],
    rispostaCorretta: 3,
    spiegazione: 'L’art. 62-bis vieta all’avvocato di impugnare l’accordo alla cui redazione ha partecipato, con l’eccezione delle sopravvenienze e dei fatti non conosciuti al momento della stipula. Il divieto tutela l’affidamento della controparte e la serietà della procedura; l’eccezione evita che il divieto si trasformi in una rinuncia preventiva alla tutela per vizi che nessuno poteva conoscere.',
  },
];
