import type { QuizQuestion } from '../../types';

/**
 * Diritto costituzionale — Unità 4 · Eccellenza.
 *
 * Le questioni di confine: quelle su cui la commissione capisce se il
 * candidato sa distinguere, non solo esporre. Tecniche decisorie fini,
 * questioni ancora aperte in dottrina, intrecci fra ordinamenti.
 */
export const costituzionaleL4: QuizQuestion[] = [
  {
    id: 'cost-l4-001',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Qual è la differenza fra «disposizione» e «norma» nella giurisprudenza costituzionale?',
    opzioni: [
      'La disposizione è l’enunciato linguistico, la norma il significato che se ne ricava in via interpretativa',
      'La disposizione è la norma costituzionale, la norma quella ordinaria',
      'La disposizione riguarda il diritto scritto, la norma quello consuetudinario',
      'Sono sinonimi, usati indifferentemente',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La distinzione, di matrice crisafulliana, è il presupposto tecnico delle decisioni interpretative: la Corte può annullare una norma lasciando in vita la disposizione (interpretativa di accoglimento) oppure respingere la questione indicando l’interpretazione conforme (interpretativa di rigetto). Senza di essa il sindacato sarebbe solo di annullamento del testo.',
  },
  {
    id: 'cost-l4-002',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Che rapporto c’è fra obbligo di interpretazione conforme e questione di legittimità costituzionale?',
    opzioni: [
      'L’interpretazione conforme è alternativa e sempre preferibile, anche contro la lettera della disposizione',
      'Il giudice deve tentarla, ma quando è preclusa dal tenore letterale o dal diritto vivente deve sollevare la questione',
      'La questione va sempre sollevata prima di tentare l’interpretazione conforme',
      'L’obbligo di interpretazione conforme riguarda solo il diritto dell’Unione',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’interpretazione conforme è doverosa ma non illimitata: incontra il limite del tenore letterale della disposizione, oltre il quale si tradurrebbe in creazione giudiziale. Quando l’interpretazione costituzionalmente orientata è impossibile, o quando si è formato un diritto vivente contrario, il giudice deve rimettere la questione, pena l’inammissibilità per omesso tentativo.',
  },
  {
    id: 'cost-l4-003',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La sent. n. 269/2017, nella parte poi precisata dalle successive pronunce, afferma che:',
    opzioni: [
      'La Corte costituzionale non può utilizzare la Carta di Nizza come parametro',
      'Il giudice deve sempre rivolgersi prima alla Corte costituzionale, perdendo la facoltà di non applicare la norma interna',
      'Il giudice può rivolgersi prima alla Corte costituzionale, ma conserva il potere di rinvio pregiudiziale e di non applicazione',
      'La Carta di Nizza non può mai fungere da parametro interno',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’obiter della sent. n. 269/2017 sembrava imporre la priorità dell’incidente di costituzionalità. Le sentt. nn. 20, 63 e 117/2019 e la n. 182/2020 hanno chiarito che si tratta di una facoltà: resta impregiudicato il potere-dovere del giudice comune di rinviare alla Corte di giustizia e di non applicare la norma interna contrastante con disposizioni dotate di effetto diretto.',
  },
  {
    id: 'cost-l4-004',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La Corte costituzionale è «giurisdizione nazionale» legittimata al rinvio pregiudiziale ex art. 267 TFUE?',
    opzioni: [
      'Sì, ma solo nei conflitti di attribuzione',
      'Sì, solo dopo la riforma dei Trattati',
      'No, lo ha sempre escluso',
      'Sì: lo ha ammesso nel giudizio in via principale con l’ord. n. 103/2008 e in quello incidentale con l’ord. n. 207/2013',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Dopo un iniziale diniego (ord. n. 536/1995), la Corte ha effettuato il primo rinvio nel giudizio in via principale con l’ord. n. 103/2008 e ha esteso la soluzione al giudizio incidentale con l’ord. n. 207/2013, riconoscendosi giurisdizione nazionale di unica istanza ai sensi dell’art. 267, comma 3, TFUE.',
  },
  {
    id: 'cost-l4-005',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Le sentenze «sostitutive» della Corte costituzionale:',
    opzioni: [
      'Dichiarano illegittima la norma nella parte in cui prevede una certa disciplina anziché un’altra',
      'Sostituiscono l’intero testo di legge con uno nuovo',
      'Rinviano al legislatore la sostituzione della disciplina',
      'Sono ammesse solo in materia tributaria',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La sostitutiva opera con la formula «nella parte in cui prevede X anziché Y»: la Corte espunge un frammento normativo e ne inserisce un altro, ricavato dal sistema. Come per le additive, la legittimità della tecnica riposa sull’esistenza di una soluzione costituzionalmente obbligata, altrimenti si invaderebbe la discrezionalità legislativa.',
  },
  {
    id: 'cost-l4-006',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Nella sent. n. 40/2019 (in tema di stupefacenti) la Corte ha superato il criterio delle «rime obbligate» affermando che:',
    opzioni: [
      'Il giudice comune può disapplicare la cornice edittale',
      'Il trattamento sanzionatorio può essere corretto anche in assenza di un’unica soluzione, purché il parametro sia già rinvenibile nel sistema',
      'La Corte può fissare liberamente la pena',
      'Il vizio di sproporzione sanzionatoria non è mai sindacabile',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'A partire dalla sent. n. 236/2016 e con la n. 40/2019, la Corte ha attenuato il vincolo delle rime obbligate: quando la sanzione è manifestamente sproporzionata, è sufficiente che nel sistema sia individuabile una o più soluzioni già normativamente previste, idonee a sostituire quella censurata, senza che occorra un’unica risposta costituzionalmente necessitata.',
  },
  {
    id: 'cost-l4-007',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Le sentenze «monitorie» si distinguono dalle additive di principio perché:',
    opzioni: [
      'Vincolano il legislatore a un termine',
      'Sono adottate solo in sede di conflitto',
      'Sono decisioni di rigetto o inammissibilità che contengono un avvertimento al legislatore, senza effetti ablativi',
      'Hanno efficacia erga omnes',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il monito accompagna una pronuncia che non rimuove la norma: la Corte segnala l’incostituzionalità incipiente o la necessità di un intervento, avvertendo che in caso di inerzia potrà pronunciare l’annullamento. L’additiva di principio, invece, è una decisione di accoglimento che rimuove la norma e fissa il principio sostitutivo.',
  },
  {
    id: 'cost-l4-008',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La «doppia pronuncia» consiste nella sequenza per cui la Corte, dopo un primo monito rimasto inascoltato:',
    opzioni: [
      'Rimette la questione al Parlamento in seduta comune',
      'Sospende l’efficacia della norma',
      'Dichiara l’inammissibilità definitiva della questione',
      'Dichiara l’illegittimità della norma già oggetto di avvertimento',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il modello è quello dell’ord. n. 207/2018 seguita dalla sent. n. 242/2019, e dell’ord. n. 97/2021 seguita dalla sent. n. 227/2022 (con l’intervento medio tempore del legislatore). La tecnica consente di rispettare la discrezionalità parlamentare senza lasciare indefinitamente in vita una disciplina riconosciuta incostituzionale.',
  },
  {
    id: 'cost-l4-009',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Rispetto alla dichiarazione di illegittimità di una norma penale, l’art. 30, comma 4, l. n. 87/1953:',
    opzioni: [
      'Impone la cessazione dell’esecuzione e di tutti gli effetti penali della condanna, travolgendo il giudicato',
      'Consente la revisione solo su istanza del condannato',
      'Si applica alle sole norme processuali',
      'Fa salvo il giudicato, come nelle altre materie',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Nella materia penale il giudicato cede: cessano l’esecuzione e gli effetti penali della condanna pronunciata in applicazione della norma dichiarata illegittima. Le Sezioni Unite (Gatto, n. 42858/2014) hanno esteso il principio alla rideterminazione della pena quando l’illegittimità colpisca una circostanza aggravante applicata.',
  },
  {
    id: 'cost-l4-010',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il requisito della rilevanza nel giudizio incidentale è valutato dalla Corte:',
    opzioni: [
      'Con un controllo pieno e sostitutivo rispetto al giudice a quo',
      'Con un controllo esterno, limitato alla non implausibilità della motivazione del rimettente',
      'Solo se eccepito dalle parti',
      'Non è valutato: spetta esclusivamente al giudice a quo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Corte non si sostituisce al giudice nella ricostruzione del thema decidendum: verifica dall’esterno che la motivazione sulla rilevanza non sia implausibile o contraddittoria. Un controllo pieno trasformerebbe la Corte in giudice del merito; l’assenza di controllo aprirebbe la porta a questioni astratte, incompatibili con il carattere incidentale del giudizio.',
  },
  {
    id: 'cost-l4-011',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Può essere sollevata questione di legittimità costituzionale nel corso di un procedimento arbitrale rituale?',
    opzioni: [
      'Sì, solo previo consenso delle parti e del Presidente del tribunale',
      'No, l’arbitro non è giudice',
      'Sì: la sent. n. 376/2001 ha riconosciuto agli arbitri rituali la legittimazione a sollevare la questione',
      'Sì, ma solo negli arbitrati obbligatori',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Con la sent. n. 376/2001 la Corte ha ammesso che gli arbitri rituali possano sollevare questione incidentale, valorizzando il carattere sostanzialmente giurisdizionale del procedimento e la natura di decisione idonea al giudicato del lodo. È un’applicazione della nozione «funzionale» di giudice a quo, che prescinde dall’inquadramento organico.',
  },
  {
    id: 'cost-l4-012',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La Corte dei conti in sede di controllo preventivo di legittimità può sollevare questione di legittimità costituzionale?',
    opzioni: [
      'Sì, senza alcun limite di oggetto',
      'Solo in sede giurisdizionale',
      'No, esercitando funzione amministrativa',
      'Sì, limitatamente ai profili di legittimità dell’atto sottoposto a controllo, secondo la nozione funzionale di giudice a quo',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte, già con la sent. n. 226/1976, ha ammesso la legittimazione della Corte dei conti in sede di controllo preventivo, in quanto organo che applica la legge in posizione di terzietà e a garanzia di interessi costituzionalmente protetti. Si tratta di un’estensione funzionale, circoscritta ai profili di legittimità dell’atto controllato.',
  },
  {
    id: 'cost-l4-013',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Che cosa distingue l’intesa «forte» dall’intesa «debole» nella leale collaborazione?',
    opzioni: [
      'Nella forte il mancato accordo blocca il procedimento, salvo procedure di superamento; nella debole lo Stato può procedere unilateralmente motivando',
      'La forte riguarda le Regioni speciali, la debole quelle ordinarie',
      'La forte è prevista dalla Costituzione, la debole dalla legge',
      'La forma dell’atto con cui è raggiunta',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Nell’intesa forte l’accordo è condizione di legittimità dell’atto: il dissenso può essere superato solo con procedimenti di reiterazione delle trattative e, in ultima istanza, con una decisione motivata assunta ai massimi livelli. Nell’intesa debole il mancato accordo consente allo Stato di procedere, dando conto delle ragioni del superamento del dissenso.',
  },
  {
    id: 'cost-l4-014',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il principio di leale collaborazione si applica anche al procedimento legislativo statale?',
    opzioni: [
      'Sì, sempre: ogni legge che incida su materie regionali richiede intesa',
      'Di regola no, salvo che il legislatore scelga esso stesso di procedimentalizzare la collaborazione, come nel caso della delega legislativa (sent. n. 251/2016)',
      'Sì, ma solo per i decreti-legge',
      'No, in nessun caso, nemmeno per i decreti legislativi',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Corte ha tradizionalmente escluso che la leale collaborazione condizioni l’esercizio della funzione legislativa. Con la sent. n. 251/2016 ha però affermato che, quando la legge delega investe materie inestricabilmente intrecciate, i decreti legislativi attuativi devono essere adottati previa intesa in Conferenza, non essendo sufficiente il parere.',
  },
  {
    id: 'cost-l4-015',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La sent. n. 251/2016 ha prodotto effetti sulle leggi delega già attuate?',
    opzioni: [
      'No, perché la sentenza era di mero rigetto',
      'Sì, travolgendo automaticamente tutti i decreti legislativi emanati',
      'No: la Corte ha precisato che la pronuncia riguarda le disposizioni di delega e che gli eventuali vizi dei decreti attuativi vanno fatti valere con autonome impugnazioni',
      'Sì, con efficacia retroattiva su tutti i rapporti',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte ha limitato l’oggetto della pronuncia alle disposizioni di delega impugnate, chiarendo che le censure sui decreti legislativi già adottati dovevano essere veicolate con separate impugnazioni. La precisazione ha contenuto l’impatto sistemico della decisione, che altrimenti avrebbe travolto interi corpi normativi.',
  },
  {
    id: 'cost-l4-016',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Nel giudizio in via principale la Regione può impugnare una legge statale:',
    opzioni: [
      'Solo per violazione dell’art. 117 Cost.',
      'Solo previa deliberazione del consiglio regionale a maggioranza dei due terzi',
      'Per qualsiasi vizio di costituzionalità',
      'Di regola solo per lesione delle proprie competenze, salvo che la violazione di altri parametri ridondi su di esse',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’impugnazione regionale ha portata più ristretta di quella statale: la Regione deve dedurre la lesione delle proprie attribuzioni costituzionali. È tuttavia ammessa l’evocazione di parametri estranei al riparto, purché la ricorrente motivi in modo specifico la «ridondanza» della violazione sulle proprie competenze.',
  },
  {
    id: 'cost-l4-017',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Lo Stato, impugnando una legge regionale, può dedurre:',
    opzioni: [
      'Qualsiasi vizio di legittimità costituzionale',
      'Solo la violazione di norme finanziarie',
      'Solo la violazione del diritto dell’Unione europea',
      'Solo l’eccesso di competenza regionale',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Nonostante la lettera dell’art. 127 Cost. faccia riferimento all’eccesso di competenza, la giurisprudenza costante riconosce allo Stato la possibilità di dedurre ogni vizio di legittimità costituzionale della legge regionale. L’asimmetria rispetto alla legittimazione regionale è giustificata dalla posizione di garanzia dell’unità dell’ordinamento.',
  },
  {
    id: 'cost-l4-018',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il conflitto di attribuzione fra enti si distingue da quello fra poteri perché:',
    opzioni: [
      'Non richiede il previo esperimento di rimedi giurisdizionali',
      'Ha ad oggetto atti anche non legislativi lesivi della sfera di competenza costituzionale di Stato o Regione, con termine di sessanta giorni e senza fase di ammissibilità separata',
      'È deciso con ordinanza e non con sentenza',
      'Può essere promosso da qualunque ente locale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il conflitto intersoggettivo è proposto da Stato o Regione contro atti (anche amministrativi o giurisdizionali) invasivi della rispettiva sfera costituzionale, entro sessanta giorni dalla conoscenza dell’atto e senza la fase di delibazione dell’ammissibilità propria del conflitto fra poteri. Gli enti locali non sono legittimati e agiscono tramite la Regione.',
  },
  {
    id: 'cost-l4-019',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La «vindicatio potestatis» e il conflitto «da menomazione» si distinguono perché:',
    opzioni: [
      'La prima è ammessa solo per gli atti legislativi',
      'La seconda è inammissibile nel nostro ordinamento',
      'Nella prima si rivendica la titolarità del potere, nella seconda si lamenta l’esercizio scorretto di un potere altrui che menoma il proprio',
      'La prima riguarda gli enti, la seconda i poteri',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Nella vindicatio potestatis il ricorrente afferma che il potere esercitato dal resistente spetta a sé. Nel conflitto da menomazione non si contesta la titolarità, ma le modalità di esercizio, che comprimono indebitamente le attribuzioni altrui: è la figura più frequente, e la Corte vi conduce anche i conflitti sull’uso di prerogative come l’insindacabilità parlamentare.',
  },
  {
    id: 'cost-l4-020',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La delibera di insindacabilità adottata dalla Camera è impugnabile dall’autorità giudiziaria:',
    opzioni: [
      'Sì, con ricorso al giudice amministrativo',
      'Sì, con ricorso alle Sezioni Unite della Cassazione',
      'No, è definitiva e vincolante per il giudice',
      'Sì, con conflitto di attribuzione fra poteri davanti alla Corte costituzionale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La delibera con cui la Camera afferma l’insindacabilità delle opinioni del parlamentare è atto che menoma le attribuzioni dell’autorità giudiziaria se manca il nesso funzionale: il giudice può sollevare conflitto, e la Corte verifica la sussistenza del nesso, annullando la delibera in caso negativo. È il contenzioso quantitativamente più rilevante fra poteri.',
  },
  {
    id: 'cost-l4-021',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il potere di rinvio dell’art. 74 Cost. può essere esercitato su una legge di conversione?',
    opzioni: [
      'Sì, ma il rinvio pone il problema pratico del decorso del termine di sessanta giorni per la conversione',
      'Sì, con sospensione automatica del termine di conversione',
      'Sì, e comporta la decadenza immediata del decreto',
      'No, mai',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Nessuna norma esclude il rinvio della legge di conversione, e vi sono precedenti (fra tutti il rinvio del 2002 in materia di rientro dei capitali e quello del 2009). Il nodo è che il termine costituzionale di sessanta giorni non si sospende: il rinvio, in concreto, rischia di determinare la decadenza del decreto, il che ne spiega l’uso parsimonioso.',
  },
  {
    id: 'cost-l4-022',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il decreto-legge decaduto per mancata conversione produce effetti sui rapporti sorti nel frattempo?',
    opzioni: [
      'La questione è rimessa al giudice caso per caso, senza criteri legali',
      'No: la decadenza opera ex tunc, salva la legge di sanatoria delle Camere',
      'Sì: gli effetti già prodotti restano definitivamente salvi',
      'Sì, ma solo per i rapporti di diritto pubblico',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 77, comma 3, Cost. stabilisce che i decreti non convertiti perdono efficacia sin dall’inizio. Le Camere possono però regolare con legge i rapporti giuridici sorti sulla base dei decreti non convertiti: si tratta di una legge di sanatoria, a contenuto retroattivo, il cui esercizio è discrezionale ma soggetto ai limiti di ragionevolezza.',
  },
  {
    id: 'cost-l4-023',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il decreto legislativo «correttivo» (art. 76 Cost. e prassi delle deleghe):',
    opzioni: [
      'Ha natura di regolamento',
      'È adottato senza alcun limite temporale',
      'È ammesso se la legge delega lo prevede e resta vincolato ai medesimi principi e criteri direttivi',
      'Può modificare i principi della legge delega',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La prassi delle deleghe prevede spesso un termine ulteriore (di regola dodici o ventiquattro mesi) per l’adozione di decreti integrativi e correttivi. Questi restano soggetti ai principi e criteri direttivi originari e alle medesime procedure consultive: non possono ampliare l’oggetto della delega né innovare rispetto ai criteri fissati dal Parlamento.',
  },
  {
    id: 'cost-l4-024',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La cosiddetta «delega in bianco» è illegittima perché:',
    opzioni: [
      'Non è pubblicata in Gazzetta Ufficiale',
      'Non è approvata a maggioranza assoluta',
      'Viola il divieto di mandato imperativo',
      'Difetta dei principi e criteri direttivi, trasferendo al Governo una scelta politica che la Costituzione riserva al Parlamento',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 76 Cost. esige che il Parlamento compia le scelte fondamentali: la delega priva di principi e criteri direttivi sufficientemente determinati abdica alla funzione legislativa. La Corte ammette una certa elasticità in relazione alla complessità tecnica della materia, ma richiede che i criteri consentano di individuare la ratio dell’intervento.',
  },
  {
    id: 'cost-l4-025',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Un testo unico «misto» (compilativo e innovativo) pone il problema:',
    opzioni: [
      'Della distinta forza delle disposizioni, legislative o regolamentari, e del regime di modificazione e sindacato applicabile a ciascuna',
      'Della competenza del giudice amministrativo',
      'Della sua entrata in vigore differita',
      'Della sua pubblicazione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Nei testi unici misti convivono norme di rango legislativo e norme regolamentari: la conseguenza pratica è che le prime si modificano con legge e sono sindacabili dalla Corte, le seconde con regolamento e sono disapplicabili o annullabili dal giudice amministrativo. La distinzione, spesso trascurata, incide sul regime di ciascuna disposizione.',
  },
  {
    id: 'cost-l4-026',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Che cosa si intende per «riserva di assemblea» e quale ne è la ratio?',
    opzioni: [
      'La riserva di legge in materia di organizzazione parlamentare',
      'L’obbligo di procedura normale per determinate materie, a garanzia della pubblicità e della partecipazione delle minoranze',
      'Il divieto di delega legislativa in materia costituzionale',
      'La riserva al Senato dell’esame dei disegni di legge di bilancio',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 72, comma 4, Cost. impone per alcune materie l’esame e l’approvazione in aula, sottraendole alle commissioni deliberanti. La ratio è duplice: assicurare la massima pubblicità del procedimento e garantire alle minoranze parlamentari la sede più visibile di confronto, su materie che toccano gli equilibri istituzionali e finanziari.',
  },
  {
    id: 'cost-l4-027',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il rapporto fra art. 81 Cost. e leggi di spesa: la copertura finanziaria deve riguardare:',
    opzioni: [
      'Le sole leggi statali, non quelle regionali',
      'Solo il primo esercizio finanziario',
      'Ogni legge che importi nuovi o maggiori oneri, per l’intero periodo di efficacia, con obbligo di indicare i mezzi per farvi fronte',
      'Le sole leggi di bilancio',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 81, comma 3, Cost. impone a ogni legge che comporti nuovi o maggiori oneri di provvedere ai mezzi per farvi fronte. La Corte ha chiarito che la copertura deve essere credibile, sufficientemente sicura, non arbitraria o irrazionale e coprire l’intero arco temporale degli oneri, e ha applicato il vincolo anche alle leggi regionali.',
  },
  {
    id: 'cost-l4-028',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il principio dell’equilibrio di bilancio, nella lettura della Corte:',
    opzioni: [
      'Non ha rilievo nel giudizio di legittimità',
      'Si applica solo agli enti locali',
      'Prevale sempre sui diritti fondamentali',
      'È un valore costituzionale da bilanciare, che non può comprimere il nucleo incomprimibile dei diritti',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte ha rifiutato sia la tesi della recessività dell’equilibrio di bilancio sia quella della sua prevalenza assoluta: è un valore che entra nel bilanciamento, come mostrano la sent. n. 10/2015 sulla modulazione degli effetti e, in senso opposto, la sent. n. 275/2016 sull’incomprimibilità del nucleo essenziale dei diritti sociali.',
  },
  {
    id: 'cost-l4-029',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il «giudizio di parificazione» del rendiconto davanti alla Corte dei conti consente di sollevare questioni di legittimità costituzionale?',
    opzioni: [
      'Sì: la Corte costituzionale ha riconosciuto la legittimazione, valorizzando la funzione di garanzia degli equilibri di bilancio',
      'Sì, ma solo per le leggi statali',
      'Sì, solo se richiesto dal Procuratore generale',
      'No, si tratta di funzione di controllo',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La Corte ha ammesso la legittimazione delle sezioni regionali di controllo in sede di parificazione (fra le altre, sentt. nn. 89/2017, 196/2018 e 244/2020), riconoscendo che si tratta di sede in cui si applica la legge in posizione di terzietà a tutela di interessi costituzionali, evitando altrimenti una zona d’ombra del sindacato.',
  },
  {
    id: 'cost-l4-030',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La nozione di «zona franca» dal controllo di costituzionalità è stata usata dalla Corte per:',
    opzioni: [
      'Escludere il sindacato su materie politicamente sensibili',
      'Giustificare l’ammissibilità di questioni che altrimenti non potrebbero mai raggiungerla, come in materia elettorale',
      'Delimitare le competenze delle Regioni speciali',
      'Individuare gli atti politici insindacabili',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’argomento della zona franca serve a evitare che intere categorie di leggi restino sottratte al sindacato per l’assenza di un giudizio a quo idoneo. Su di esso poggiano l’ammissibilità delle questioni sulla legge elettorale (sent. n. 1/2014) e l’apertura in materia di parificazione dei rendiconti.',
  },
  {
    id: 'cost-l4-031',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Nella sent. n. 192/2024 sull’autonomia differenziata, la Corte ha affermato che il trasferimento deve riguardare:',
    opzioni: [
      'Solo le materie a costo zero per il bilancio dello Stato',
      'Intere materie, per garantire coerenza',
      'Singole funzioni, giustificate alla luce del principio di sussidiarietà',
      'Solo le materie di competenza esclusiva statale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte ha escluso che l’art. 116, comma 3, Cost. consenta il trasferimento di materie intere: l’attribuzione deve riguardare specifiche funzioni legislative e amministrative, ciascuna giustificata in base al principio di sussidiarietà e alla capacità della Regione di esercitarla meglio, con garanzia dei livelli essenziali su tutto il territorio.',
  },
  {
    id: 'cost-l4-032',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La determinazione dei LEP, secondo la sent. n. 192/2024, non può essere affidata:',
    opzioni: [
      'Al Parlamento in seduta comune',
      'Alle Conferenze Stato-Regioni',
      'Alla legge dello Stato',
      'A una delega legislativa priva di adeguati principi e criteri direttivi né a fonti secondarie',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte ha dichiarato illegittima la previsione che rimetteva a decreti legislativi, e in parte a d.P.C.m., la determinazione dei livelli essenziali: trattandosi di scelte che incidono sul contenuto dei diritti civili e sociali su tutto il territorio, richiedono un intervento del Parlamento con criteri sufficientemente determinati.',
  },
  {
    id: 'cost-l4-033',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il sindacato sulle leggi anteriori alla Costituzione compete:',
    opzioni: [
      'Alla Corte costituzionale per illegittimità sopravvenuta, ferma restando la possibilità di abrogazione tacita rilevabile dal giudice',
      'Esclusivamente al giudice comune',
      'A nessuno: restano in vigore fino a espressa abrogazione',
      'Al giudice comune, che le disapplica per abrogazione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Con la sent. n. 1/1956 la Corte ha respinto la tesi che riservava al giudice comune il controllo sulle leggi anteriori tramite l’abrogazione: il contrasto con la Costituzione dà luogo a illegittimità costituzionale sopravvenuta, di sua competenza. Resta possibile per il giudice rilevare l’abrogazione quando ricorra un’incompatibilità fra norme successive.',
  },
  {
    id: 'cost-l4-034',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Le norme dei Patti Lateranensi contrarie ai principi supremi dell’ordinamento:',
    opzioni: [
      'Sono immuni dal sindacato di costituzionalità in forza dell’art. 7 Cost.',
      'Sono sindacabili: la copertura dell’art. 7 Cost. non si estende alla violazione dei principi supremi (sent. n. 30/1971 e n. 18/1982)',
      'Possono essere modificate solo con legge costituzionale',
      'Prevalgono sulla Costituzione',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 7, comma 2, Cost. sottrae le modificazioni concordate dei Patti al procedimento di revisione, ma la Corte ha chiarito che la copertura costituzionale non arriva al punto di consentire deroghe ai principi supremi dell’ordinamento: la questione fu decisa con le sentt. nn. 30/1971 e 18/1982 in materia di efficacia civile delle sentenze ecclesiastiche di nullità matrimoniale.',
  },
  {
    id: 'cost-l4-035',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il diritto di accesso civico generalizzato, nel bilanciamento con la riservatezza, è stato inquadrato dalla Corte:',
    opzioni: [
      'Come diritto riservato ai soli giornalisti',
      'Come diritto assoluto, prevalente su ogni altro interesse',
      'Come strumento di controllo democratico soggetto a proporzionalità, non idoneo a giustificare compressioni indiscriminate della protezione dei dati',
      'Come istituto di rilievo meramente amministrativo, estraneo alla Costituzione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La sent. n. 20/2019 ha collocato la trasparenza fra i valori costituzionali (artt. 1, 2, 97 Cost. e art. 15 TFUE) riconoscendole pari rango rispetto alla protezione dei dati personali (art. 8 della Carta di Nizza), e ha imposto un test di proporzionalità che vieta obblighi di pubblicazione indiscriminati.',
  },
  {
    id: 'cost-l4-036',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Nella sent. n. 242/2019 la Corte ha subordinato la non punibilità dell’aiuto al suicidio:',
    opzioni: [
      'All’autorizzazione preventiva del giudice tutelare',
      'A una legge attuativa, in mancanza della quale la pronuncia resta inoperante',
      'Alla sola volontà libera dell’interessato',
      'A condizioni sostanziali e procedurali, fra cui il coinvolgimento del servizio sanitario nazionale e il parere del comitato etico territorialmente competente',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte ha dichiarato illegittimo l’art. 580 c.p. nella parte in cui non esclude la punibilità di chi agevoli il proposito di suicidio di una persona tenuta in vita da trattamenti di sostegno vitale, affetta da patologia irreversibile fonte di sofferenze intollerabili e pienamente capace, alle condizioni procedurali della l. n. 219/2017 e previo parere del comitato etico.',
  },
  {
    id: 'cost-l4-037',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il divieto di analogia in malam partem in materia penale:',
    opzioni: [
      'Ha copertura costituzionale nell’art. 25, comma 2, Cost., quale corollario della riserva di legge e della determinatezza',
      'Non esiste, essendo ammessa l’analogia in ogni ambito',
      'Vale solo per le misure di sicurezza',
      'Ha rango meramente legislativo, ricavabile dall’art. 14 delle preleggi',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il divieto è tradizionalmente ricondotto all’art. 14 delle preleggi, ma la giurisprudenza costituzionale lo ancora all’art. 25, comma 2, Cost.: la riserva di legge sarebbe svuotata se il giudice potesse estendere la fattispecie oltre i casi previsti. Resta ammessa l’analogia in bonam partem, salvo il carattere eccezionale della norma di favore.',
  },
  {
    id: 'cost-l4-038',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Con la sent. n. 32/2020 la Corte ha affermato che le modifiche peggiorative in materia di esecuzione della pena:',
    opzioni: [
      'Sono sempre retroattive, trattandosi di norme processuali',
      'Non si applicano retroattivamente quando trasformino la natura della pena da non detentiva a detentiva, per il principio di affidamento e di legalità della pena',
      'Sono retroattive solo per i reati ostativi',
      'Sono sempre irretroattive, senza distinzioni',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Superando il tradizionale principio tempus regit actum, la Corte ha ritenuto che le norme che incidono sulle misure alternative, quando comportino il passaggio da una pena scontabile in libertà a una detentiva, abbiano natura sostanziale ai fini della garanzia dell’art. 25, comma 2, Cost. e non possano applicarsi ai fatti anteriori.',
  },
  {
    id: 'cost-l4-039',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La distinzione fra «diritti finanziariamente condizionati» e nucleo essenziale rileva perché:',
    opzioni: [
      'Riguarda i soli diritti civili',
      'Consente al legislatore di sopprimere i diritti sociali in caso di crisi',
      'Ammette la gradualità nell’attuazione, ma non il sacrificio del contenuto minimo indefettibile della prestazione',
      'Esclude ogni sindacato della Corte in materia di spesa',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte riconosce che l’attuazione dei diritti a prestazione dipende dalle risorse disponibili e può essere graduale e ragionevolmente modulata; individua però un nucleo essenziale che non può essere compresso, come nel diritto alla salute (sent. n. 309/1999) e nel diritto all’istruzione del disabile (sentt. nn. 80/2010 e 275/2016).',
  },
  {
    id: 'cost-l4-040',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La «ridondanza» nel giudizio in via principale promosso dalla Regione richiede:',
    opzioni: [
      'Il previo esperimento del ricorso amministrativo',
      'L’intervento del Consiglio delle autonomie locali',
      'La sola indicazione del parametro extracompetenziale violato',
      'Una specifica e motivata indicazione del modo in cui la violazione si riverbera sulle competenze regionali',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte esige che la Regione non si limiti a evocare parametri estranei al riparto (ad esempio gli artt. 3, 24 o 97 Cost.), ma spieghi in modo puntuale come la loro violazione si traduca in una lesione delle proprie attribuzioni. In mancanza, la censura è inammissibile per genericità.',
  },
  {
    id: 'cost-l4-041',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'L’«ius superveniens» favorevole nel giudizio in via principale:',
    opzioni: [
      'Può determinare la cessazione della materia del contendere, se satisfattivo e la norma censurata non ha avuto medio tempore applicazione',
      'Comporta sempre l’estinzione del giudizio',
      'Obbliga il ricorrente a rinunciare',
      'È irrilevante: la Corte decide sulla norma originaria',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La Corte dichiara cessata la materia del contendere quando la modifica sopravvenuta ha carattere satisfattivo delle censure e risulta che la disposizione impugnata non ha ricevuto applicazione nel frattempo. Se anche una sola delle due condizioni manca, il giudizio prosegue sulla norma originaria.',
  },
  {
    id: 'cost-l4-042',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il potere di ordinanza in deroga della protezione civile trova il proprio limite:',
    opzioni: [
      'Nella sola durata dello stato di emergenza',
      'Nel rispetto dei principi generali dell’ordinamento e delle norme costituzionali, essendo esclusa la deroga alle riserve assolute di legge',
      'Nella competenza del prefetto',
      'Nell’assenza di limiti, trattandosi di poteri necessitati',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Le ordinanze contingibili e urgenti sono fonti secondarie atipiche: possono derogare a norme di legge solo se autorizzate, per un tempo determinato e nel rispetto dei principi generali dell’ordinamento. La Corte, già con le sentt. nn. 8/1956 e 26/1961, ha escluso che possano incidere su materie coperte da riserva assoluta di legge.',
  },
  {
    id: 'cost-l4-043',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La sent. n. 115/2011 sulle ordinanze sindacali «ordinarie» in materia di sicurezza urbana ha dichiarato illegittima la norma perché:',
    opzioni: [
      'Contrastava con il diritto dell’Unione europea',
      'Non prevedeva l’intervento del prefetto',
      'Attribuiva al sindaco poteri privi del carattere della contingibilità e urgenza, senza adeguata delimitazione legislativa',
      'Violava la competenza regionale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte ha censurato l’art. 54 TUEL nella parte in cui consentiva ordinanze sindacali non contingibili e urgenti: mancando il presupposto dell’urgenza, il potere si trasformava in una fonte normativa atipica priva di sufficiente base legale, in violazione della riserva di legge dell’art. 23 Cost. e del principio di legalità sostanziale.',
  },
  {
    id: 'cost-l4-044',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il principio di legalità sostanziale, nella giurisprudenza costituzionale, impone che:',
    opzioni: [
      'Il potere amministrativo sia sempre vincolato',
      'L’amministrazione possa agire solo su richiesta di parte',
      'Ogni atto amministrativo abbia una base legislativa meramente formale',
      'La legge non si limiti ad attribuire il potere, ma ne predetermini contenuto, modalità ed estensione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La legalità formale richiede una norma attributiva del potere; quella sostanziale esige che la legge ne definisca presupposti, contenuto e limiti, così da rendere possibile il controllo giurisdizionale. È il canone impiegato dalla Corte per censurare poteri amministrativi indeterminati, anche nel campo delle autorità indipendenti.',
  },
  {
    id: 'cost-l4-045',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Le autorità amministrative indipendenti pongono un problema costituzionale perché:',
    opzioni: [
      'Non sono previste dalla Costituzione e la loro indipendenza attenua il circuito della responsabilità ministeriale ex art. 95 Cost.',
      'Esercitano funzioni giurisdizionali vietate dall’art. 102 Cost.',
      'Sono organi di rilievo costituzionale non nominati',
      'Violano l’art. 97 Cost. sul concorso pubblico',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La loro legittimazione è dibattuta: sottratte all’indirizzo politico, sfuggono al modello per cui l’amministrazione risponde al ministro e questi al Parlamento. La dottrina ne ricerca il fondamento nella tutela di interessi costituzionali (artt. 21, 41, 47 Cost.) e nel diritto dell’Unione, compensando il deficit di responsabilità con procedure partecipative e controllo giurisdizionale.',
  },
  {
    id: 'cost-l4-046',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'I regolamenti delle autorità indipendenti («regolazione») sono soggetti:',
    opzioni: [
      'Al solo controllo interno dell’autorità',
      'Al sindacato del giudice amministrativo, con particolare rilievo delle garanzie procedimentali che compensano l’attenuata legalità sostanziale',
      'Al sindacato della Corte costituzionale',
      'A nessun controllo, essendo atti tecnici',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La giurisprudenza amministrativa (fra tutte, Cons. Stato, sez. VI, n. 7972/2006) ha affermato che, a fronte di una legalità sostanziale attenuata, il rispetto delle garanzie procedimentali — consultazione, motivazione, analisi di impatto — assume rilievo compensativo e diviene oggetto di sindacato pieno, insieme alla ragionevolezza tecnica.',
  },
  {
    id: 'cost-l4-047',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il rapporto fra art. 117, comma 1, Cost. e Carta di Nizza si distingue da quello con la CEDU perché:',
    opzioni: [
      'La Carta vincola solo le istituzioni europee',
      'La Carta non è mai parametro interno',
      'La Carta, nell’ambito di applicazione del diritto dell’Unione, gode di effetto diretto quando la disposizione è sufficientemente chiara e incondizionata, consentendo la non applicazione della norma interna',
      'La CEDU ha effetto diretto e la Carta no',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La CEDU non gode di effetto diretto e opera come norma interposta, imponendo l’incidente di costituzionalità. Le disposizioni della Carta, invece, quando chiare, precise e incondizionate e nell’ambito di attuazione del diritto dell’Unione, possono essere direttamente applicate dal giudice comune con non applicazione della norma interna confliggente.',
  },
  {
    id: 'cost-l4-048',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Nella sent. n. 24/2017 (Taricco) la Corte ha qualificato la prescrizione, nel nostro ordinamento, come istituto:',
    opzioni: [
      'Di natura mista, sottratto a ogni garanzia',
      'Rimesso alla discrezionalità del giudice',
      'Processuale, soggetto al principio tempus regit actum',
      'Sostanziale, coperto dal principio di legalità penale dell’art. 25, comma 2, Cost.',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La qualificazione sostanziale della prescrizione è la premessa dell’intero ragionamento sui controlimiti: se la prescrizione attiene alla punibilità, la sua disciplina è soggetta alla riserva di legge e alla determinatezza, e una regola di fonte giurisprudenziale europea che ne imponga la disapplicazione confligge con un principio supremo.',
  },
  {
    id: 'cost-l4-049',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il «margine di apprezzamento» nella giurisprudenza della Corte EDU:',
    opzioni: [
      'Riconosce agli Stati uno spazio di valutazione, più ampio in assenza di consenso europeo sulla materia e più ristretto quando siano in gioco aspetti essenziali dell’identità personale',
      'Si applica solo ai diritti derogabili',
      'È stato abbandonato dopo il Protocollo n. 15',
      'Esclude ogni sindacato sulle scelte nazionali',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La dottrina del margine di apprezzamento, oggi richiamata nel Preambolo della Convenzione dal Protocollo n. 15, modula l’intensità del controllo di Strasburgo: si espande quando manca un consenso fra gli Stati e sono in gioco valutazioni morali o economiche, si restringe quando la restrizione tocca il nucleo di diritti come quelli della vita privata e familiare.',
  },
  {
    id: 'cost-l4-050',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il ricorso individuale alla Corte EDU richiede il previo esaurimento dei ricorsi interni: nel sistema italiano ciò comporta di regola:',
    opzioni: [
      'La necessità di adire la Corte costituzionale',
      'L’esperimento dei rimedi giurisdizionali ordinari effettivi, non essendo il giudizio incidentale un rimedio direttamente accessibile alla parte',
      'La proposizione di un conflitto di attribuzione',
      'La presentazione di un esposto al Ministero della giustizia',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Poiché l’accesso alla Corte costituzionale è solo indiretto e rimesso alla valutazione del giudice, esso non costituisce un rimedio che la parte debba esaurire ai sensi dell’art. 35 CEDU. L’assenza di un ricorso diretto individuale è uno dei tratti che distinguono il sistema italiano da quelli tedesco e spagnolo.',
  },
  {
    id: 'cost-l4-051',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La revisione del processo penale per conformarsi a una sentenza definitiva della Corte EDU è stata introdotta:',
    opzioni: [
      'Dal Protocollo n. 16 alla CEDU',
      'Dal legislatore con la l. n. 103/2017',
      'Dalla Corte costituzionale con la sent. n. 113/2011, che ha dichiarato illegittimo l’art. 630 c.p.p. nella parte in cui non la prevedeva',
      'Dalle Sezioni Unite della Cassazione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Con la sent. n. 113/2011 la Corte ha creato la cosiddetta revisione europea, dichiarando illegittimo l’art. 630 c.p.p. nella parte in cui non prevedeva un caso di revisione per conformarsi a una sentenza definitiva della Corte EDU. È un esempio di additiva che colma una lacuna imposta dall’art. 46 CEDU tramite l’art. 117, comma 1, Cost.',
  },
  {
    id: 'cost-l4-052',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il giudicato costituzionale «implicito» nelle sentenze di accoglimento parziale comporta che:',
    opzioni: [
      'Il giudice a quo debba comunque disapplicare l’intera disposizione',
      'Il legislatore non possa più intervenire sulla materia',
      'La disposizione residua sia immune da ulteriori questioni',
      'La parte non colpita resti sindacabile, salvo che la questione riproposta sia identica per norma, parametro e profili',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’accoglimento parziale non consuma il sindacato sulla parte residua: la preclusione (ne bis in idem costituzionale) opera solo per questioni identiche quanto a norma censurata, parametro evocato e profili dedotti. Diversamente ragionando, l’intervento chirurgico della Corte finirebbe per immunizzare il resto della disciplina.',
  },
  {
    id: 'cost-l4-053',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il vincolo derivante da una sentenza di accoglimento nei confronti del legislatore:',
    opzioni: [
      'Vieta di riprodurre la norma annullata, sotto pena di violazione dell’art. 136 Cost., ma non preclude una disciplina diversa',
      'È meramente politico e privo di sanzione',
      'Opera solo per cinque anni',
      'Impedisce ogni futura disciplina della materia',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La riproduzione della norma dichiarata illegittima integra violazione dell’art. 136 Cost. e può essere fatta valere anche in sede di conflitto di attribuzione. Il legislatore resta però libero di ridisciplinare la materia in modo diverso, purché rimuova il vizio accertato: il vincolo è negativo, non positivo.',
  },
  {
    id: 'cost-l4-054',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Con l’ord. n. 24/2017 e la sent. n. 115/2018 la Corte ha, in definitiva:',
    opzioni: [
      'Applicato i controlimiti annullando una norma dei Trattati',
      'Evitato l’attivazione dei controlimiti, valorizzando l’esito del dialogo con la Corte di giustizia',
      'Rimesso la questione al Parlamento',
      'Disapplicato la regola Taricco senza coinvolgere la Corte di giustizia',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Corte di giustizia, con la sentenza M.A.S., ha escluso l’obbligo di disapplicazione quando esso comporti violazione del principio di determinatezza in materia penale: la Corte costituzionale ha così potuto dichiarare non fondate le questioni senza attivare formalmente i controlimiti, che restano un’ipotesi estrema mai concretamente azionata verso il diritto dell’Unione.',
  },
  {
    id: 'cost-l4-055',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La distinzione fra «principi supremi» e norme costituzionali ordinarie rileva:',
    opzioni: [
      'Solo in materia penale',
      'Solo in dottrina, senza conseguenze pratiche',
      'Come limite alla revisione costituzionale, ai Patti Lateranensi, al diritto dell’Unione e alle norme internazionali generalmente riconosciute',
      'Solo nei rapporti con le Regioni speciali',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La categoria, elaborata a partire dalla sent. n. 1146/1988, opera come limite trasversale: circoscrive la revisione costituzionale, delimita la copertura dell’art. 7 Cost., costituisce il contenuto dei controlimiti verso il diritto dell’Unione e ha impedito l’ingresso della consuetudine sull’immunità degli Stati con la sent. n. 238/2014.',
  },
  {
    id: 'cost-l4-056',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La questione di legittimità può avere ad oggetto una norma già abrogata?',
    opzioni: [
      'Sì, in ogni caso, per finalità di chiarezza dell’ordinamento',
      'Solo se l’abrogazione è avvenuta per referendum',
      'No, mai',
      'Sì, se deve ancora essere applicata nel giudizio a quo in base al principio tempus regit actum',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’abrogazione non fa venir meno l’interesse quando la norma continua a regolare fattispecie sorte sotto la sua vigenza e deve perciò essere applicata nel giudizio principale. È la ragione per cui il sindacato conserva rilevanza anche su discipline formalmente non più in vigore, purché la rilevanza sia motivata dal rimettente.',
  },
  {
    id: 'cost-l4-057',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il cosiddetto «seguito» delle sentenze additive di principio è affidato:',
    opzioni: [
      'Al legislatore e, nel frattempo, ai giudici comuni, che ricavano dal principio la regola del caso concreto',
      'Alla Corte costituzionale, che emana norme attuative',
      'Al Governo, con regolamento',
      'Esclusivamente al legislatore, restando la pronuncia priva di effetti fino al suo intervento',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’additiva di principio produce un immediato effetto ablativo e affida al legislatore la disciplina definitiva; nell’attesa, i giudici comuni sono chiamati a dare attuazione al principio nei casi concreti. Questa dimensione «diffusa» del seguito ne costituisce insieme il pregio e il limite, per il rischio di applicazioni disomogenee.',
  },
  {
    id: 'cost-l4-058',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il conflitto di attribuzione può avere ad oggetto un atto legislativo?',
    opzioni: [
      'No, mai: per le leggi opera solo il giudizio di legittimità',
      'Nel conflitto fra enti sì, quando la legge invada la sfera costituzionale altrui; nel conflitto fra poteri di regola no, salvo ipotesi eccezionali',
      'Sì, sempre, in alternativa al giudizio di legittimità',
      'Solo se la legge è regionale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Nel conflitto intersoggettivo la legge è impugnabile in via principale ex art. 127 Cost.; la Corte ha però ammesso il conflitto quando la lesione derivi da atti legislativi non altrimenti censurabili. Nel conflitto fra poteri, invece, la via ordinaria resta il giudizio di legittimità, e l’ammissibilità di ricorsi contro atti legislativi è stata riconosciuta solo in casi eccezionali.',
  },
  {
    id: 'cost-l4-059',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Le Norme integrative del 2020 hanno introdotto davanti alla Corte costituzionale:',
    opzioni: [
      'Il patrocinio gratuito obbligatorio',
      'Il ricorso diretto individuale',
      'La disciplina degli amici curiae e dell’audizione di esperti, per aprire il giudizio a contributi esterni',
      'L’obbligo di motivazione delle ordinanze di rimessione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Le modifiche del 2020 hanno formalizzato la possibilità per formazioni sociali e soggetti istituzionali di depositare opinioni scritte in qualità di amici curiae e per la Corte di disporre l’audizione di esperti, senza che ciò attribuisca la qualità di parte. Resta invece estraneo al sistema il ricorso diretto individuale.',
  },
  {
    id: 'cost-l4-060',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'La proroga della durata delle Camere prevista dall’art. 60, comma 2, Cost. è ammessa:',
    opzioni: [
      'Con deliberazione a maggioranza dei due terzi',
      'Su decisione del Presidente della Repubblica',
      'Con decreto-legge, in caso di emergenza sanitaria',
      'Soltanto per legge e soltanto in caso di guerra',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 60, comma 2, Cost. consente la proroga della durata delle Camere solo per legge e solo in caso di guerra. La formulazione tassativa ha assunto rilievo pratico nel dibattito sul rinvio delle consultazioni elettorali durante l’emergenza sanitaria, che ha riguardato le sole elezioni amministrative e regionali, non la durata delle Camere.',
  },
  {
    id: 'cost-l4-061',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il numero dei senatori a vita di nomina presidenziale, secondo l’interpretazione consolidatasi dal 2013:',
    opzioni: [
      'È di cinque complessivi, sicché ogni Presidente può nominare solo in caso di posti vacanti',
      'È illimitato',
      'È di tre complessivi',
      'È di cinque per ciascun Presidente della Repubblica',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 59, comma 2, Cost. è ambiguo. Dopo una prassi oscillante, si è consolidata la lettura secondo cui il limite dei cinque è riferito al numero complessivo dei senatori a vita di nomina presidenziale in carica, e non alla singola presidenza: le nomine sono quindi possibili solo in presenza di posti vacanti.',
  },
  {
    id: 'cost-l4-062',
    materia: 'Diritto costituzionale',
    difficolta: 4,
    domanda:
      'Il d.l. n. 100/2026 ha inciso sull’esame di abilitazione forense senza legge costituzionale: quale profilo costituzionale rileva principalmente?',
    opzioni: [
      'La necessità di un referendum confermativo',
      'La riserva di legge dell’art. 33, comma 5, Cost. sull’esame di Stato per l’abilitazione professionale, che non impone la fonte costituzionale',
      'La violazione dell’art. 138 Cost., trattandosi di materia costituzionale',
      'La competenza regionale in materia di professioni',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 33, comma 5, Cost. prescrive un esame di Stato per l’abilitazione all’esercizio professionale, rimettendone la disciplina alla legge ordinaria: la riforma delle modalità non richiede quindi fonte costituzionale. Le professioni sono materia concorrente ex art. 117, comma 3, Cost., ma la determinazione dei principi, compresi i titoli abilitanti, spetta allo Stato.',
  },
];
