import type { QuizQuestion } from '../../types';

/**
 * Diritto del lavoro — Unità 3 · Avanzato.
 *
 * Il terreno della giurisprudenza recente: decorrenza della prescrizione
 * dopo il venir meno della stabilità reale, sindacato sui minimi
 * contrattuali alla luce dell'art. 36 Cost., trasferimento di ramo
 * d'azienda, codatorialità, rito dei licenziamenti dopo l'abrogazione
 * del rito Fornero.
 */
export const lavoroL3: QuizQuestion[] = [
  {
    id: 'lav-l3-001',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Per i rapporti soggetti al d.lgs. n. 23/2015, la prescrizione dei crediti retributivi decorre, secondo Cass. n. 26246/2022:',
    opzioni: [
      'Dalla data di deposito del ricorso',
      'Dal licenziamento, solo se illegittimo',
      'Dalla maturazione di ciascun credito, anche in costanza di rapporto',
      'Dalla cessazione del rapporto, non essendo assistito da stabilità reale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Cassazione ha applicato il criterio elaborato dalla Corte costituzionale con la sent. n. 63/1966: la prescrizione non decorre in costanza di rapporto quando manchi una tutela che renda il lavoratore libero dal timore del recesso. Poiché il contratto a tutele crescenti ha ridotto la reintegrazione a ipotesi residuali, il rapporto non è assistito da stabilità reale e il termine decorre dalla cessazione.',
  },
  {
    id: 'lav-l3-002',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il giudice può discostarsi dai minimi retributivi del contratto collettivo di categoria?',
    opzioni: [
      'Sì: secondo la giurisprudenza di legittimità del 2023, il parametro contrattuale può essere disatteso motivatamente se non assicura una retribuzione proporzionata e sufficiente ai sensi dell’art. 36 Cost.',
      'Sì, ma solo in aumento del venti per cento',
      'Solo se il contratto collettivo è scaduto',
      'No, i minimi sono vincolanti',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Con una serie di pronunce dell’autunno 2023 la Cassazione ha affermato che il rinvio ai minimi collettivi è un criterio di riferimento privilegiato ma non insuperabile: il giudice può discostarsene, anche in melius, quando il trattamento previsto non garantisca una retribuzione dignitosa, utilizzando come parametri complementari indicatori economici e statistici ufficiali.',
  },
  {
    id: 'lav-l3-003',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il rito Fornero per le controversie sui licenziamenti:',
    opzioni: [
      'È tuttora in vigore',
      'È stato abrogato dalla riforma Cartabia: le controversie seguono il rito del lavoro, con trattazione prioritaria secondo gli artt. 441-bis ss. c.p.c.',
      'È stato esteso a tutte le controversie di lavoro',
      'È diventato facoltativo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il d.lgs. n. 149/2022 ha abrogato il rito speciale bifasico introdotto dalla l. n. 92/2012 per le controversie sui licenziamenti soggetti all’art. 18 dello Statuto. Le cause seguono ora il rito ordinario del lavoro, con l’obbligo per il giudice di riservare una corsia preferenziale nella formazione del ruolo e di fissare l’udienza entro termini ridotti.',
  },
  {
    id: 'lav-l3-004',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Nel trasferimento di ramo d’azienda, la giurisprudenza europea e nazionale richiede che l’entità ceduta:',
    opzioni: [
      'Sia stata autonoma per almeno cinque anni',
      'Comprenda necessariamente beni materiali di rilievo',
      'Conservi la propria identità come insieme di mezzi organizzati per l’esercizio di un’attività economica, valutata secondo un complesso di indici e tenendo conto della natura dell’attività',
      'Occupi almeno dieci lavoratori',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte di giustizia, a partire da Spijkers, valuta la conservazione dell’identità economica attraverso un fascio di indici: tipo di impresa, cessione di elementi materiali e immateriali, riassunzione del personale, trasferimento della clientela, analogia dell’attività, durata dell’eventuale sospensione. Nei settori labour intensive può bastare il passaggio di un gruppo significativo di addetti dotati di competenze specifiche.',
  },
  {
    id: 'lav-l3-005',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Se il ramo ceduto non è dotato di autonomia funzionale preesistente, il trasferimento:',
    opzioni: [
      'Comporta la nullità dell’intera cessione',
      'Obbliga il cessionario a riassumere tutti i dipendenti del cedente',
      'È comunque valido',
      'Non è opponibile ai lavoratori, che possono chiedere l’accertamento della persistenza del rapporto con il cedente',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'In mancanza dei presupposti dell’art. 2112 c.c. si è fuori dal trasferimento d’azienda: la cessione dei contratti richiede allora il consenso dei ceduti ai sensi dell’art. 1406 c.c. Il lavoratore che non abbia consentito può chiedere l’accertamento della persistenza del rapporto con il cedente e la condanna alla riammissione in servizio, oltre alle retribuzioni maturate.',
  },
  {
    id: 'lav-l3-006',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La codatorialità nel gruppo di imprese è configurabile:',
    opzioni: [
      'Quando più società esercitino congiuntamente i poteri datoriali sullo stesso lavoratore, con conseguente responsabilità solidale',
      'Solo se le società hanno lo stesso amministratore',
      'Solo nei gruppi con più di cinquanta dipendenti',
      'Mai, per l’autonomia giuridica delle società',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La giurisprudenza ammette la codatorialità quando l’utilizzazione della prestazione sia contemporanea e congiunta e i poteri direttivo, organizzativo e disciplinare siano esercitati in modo condiviso, al di là della formale titolarità del contratto. Ne discende la responsabilità solidale per le obbligazioni retributive e contributive. Il contratto di rete consente inoltre la codatorialità regolata ai sensi dell’art. 30 del d.lgs. n. 276/2003.',
  },
  {
    id: 'lav-l3-007',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Nel licenziamento per giustificato motivo oggettivo, il sindacato del giudice sulla scelta imprenditoriale:',
    opzioni: [
      'Si estende alla convenienza economica della riorganizzazione',
      'Riguarda l’effettività della ragione addotta e il nesso causale con la soppressione della posizione, non l’opportunità della scelta',
      'È escluso in radice',
      'Richiede una perizia contabile',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 41 Cost. copre la libertà di iniziativa economica: il giudice non valuta se la riorganizzazione fosse opportuna o conveniente, ma verifica che la ragione allegata sia effettiva, non pretestuosa, e che sussista il nesso causale con la soppressione del posto. La Cassazione ha chiarito che il giustificato motivo può fondarsi anche sull’obiettivo di incrementare la redditività, e non solo su una situazione di crisi.',
  },
  {
    id: 'lav-l3-008',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La scelta del lavoratore da licenziare, quando le posizioni fungibili siano più d’una:',
    opzioni: [
      'Richiede l’accordo sindacale',
      'È del tutto libera',
      'Deve rispettare i principi di correttezza e buona fede, con applicazione in via analogica dei criteri dell’art. 5 della l. n. 223/1991',
      'Segue rigidamente l’anzianità di servizio',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Quando la posizione soppressa è fungibile con altre, la scelta di quale lavoratore licenziare non è arbitraria: la giurisprudenza impone il rispetto dei canoni di correttezza e buona fede, utilizzando come parametri orientativi i criteri legali del licenziamento collettivo (carichi di famiglia, anzianità, esigenze tecnico-produttive), senza però trasformarli in regole vincolanti.',
  },
  {
    id: 'lav-l3-009',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il licenziamento intimato in violazione dell’obbligo di accomodamenti ragionevoli per il lavoratore disabile:',
    opzioni: [
      'Comporta la sola sanzione amministrativa',
      'È valido con il consenso del lavoratore',
      'È legittimo se la disabilità impedisce le mansioni',
      'È illegittimo, gravando sul datore la prova di avere adottato le misure appropriate o della loro sproporzione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 3, comma 3-bis, del d.lgs. n. 216/2003, di derivazione europea, impone al datore di adottare accomodamenti ragionevoli per garantire la parità di trattamento delle persone con disabilità. La Cassazione ne ha fatto un presupposto di legittimità del recesso per inidoneità: il datore deve provare di avere verificato soluzioni organizzative alternative o la sproporzione dell’onere.',
  },
  {
    id: 'lav-l3-010',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La discriminazione «algoritmica» nelle piattaforme digitali:',
    opzioni: [
      'È stata riconosciuta come discriminazione indiretta quando il sistema di ranking penalizza indistintamente le disconnessioni, comprese quelle dovute all’esercizio di diritti fondamentali',
      'Rileva solo se prodotta da un operatore umano',
      'È esclusa dal d.lgs. n. 81/2015',
      'Non è configurabile, mancando l’intento',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Nel caso deciso dal Tribunale di Bologna nel 2020 l’algoritmo di prenotazione delle sessioni fu ritenuto indirettamente discriminatorio perché trattava allo stesso modo ogni mancata partecipazione, comprese quelle dovute a sciopero o a motivi tutelati. La discriminazione indiretta prescinde dall’intento e si coglie nell’effetto di svantaggio prodotto da un criterio apparentemente neutro.',
  },
  {
    id: 'lav-l3-011',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La responsabilità solidale negli appalti, per gli infortuni sul lavoro:',
    opzioni: [
      'Non è prevista',
      'Grava su committente, appaltatore e subappaltatore per i danni non indennizzati dall’INAIL subiti dai lavoratori impiegati nell’appalto, salvo i rischi specifici dell’attività dell’appaltatore',
      'Grava sul solo appaltatore',
      'Opera solo nei contratti pubblici',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 26, comma 4, del d.lgs. n. 81/2008 prevede la responsabilità solidale dell’imprenditore committente con l’appaltatore e i subappaltatori per i danni non indennizzati dall’INAIL, con esclusione dei danni conseguenza dei rischi specifici propri dell’attività delle imprese appaltatrici. Il committente deve inoltre elaborare il documento unico di valutazione dei rischi da interferenze.',
  },
  {
    id: 'lav-l3-012',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La delega di funzioni in materia di sicurezza è efficace se:',
    opzioni: [
      'Riguarda anche la valutazione dei rischi',
      'È conferita verbalmente al preposto',
      'Risulta da atto scritto con data certa, il delegato possiede i requisiti di professionalità ed esperienza, e gli sono attribuiti poteri di organizzazione, gestione, controllo e autonomia di spesa',
      'È comunicata all’Ispettorato del lavoro',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 16 del d.lgs. n. 81/2008 elenca i requisiti: forma scritta con data certa, accettazione scritta del delegato, professionalità ed esperienza, attribuzione di tutti i poteri di organizzazione, gestione e controllo e dell’autonomia di spesa necessaria, adeguata pubblicità. La delega non esclude l’obbligo di vigilanza del delegante, che si intende assolto con l’adozione di un modello organizzativo idoneo.',
  },
  {
    id: 'lav-l3-013',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Nel giudizio di responsabilità del datore per infortunio, il riparto dell’onere probatorio:',
    opzioni: [
      'Grava interamente sul datore',
      'Segue le regole della responsabilità extracontrattuale',
      'Grava interamente sul lavoratore, anche quanto alla colpa',
      'Impone al lavoratore di provare il danno, il nesso con l’attività e la nocività dell’ambiente; al datore di provare di avere adottato tutte le cautele necessarie',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La responsabilità ex art. 2087 c.c. è di natura contrattuale: il lavoratore deve allegare l’inadempimento e provare danno, nesso causale e nocività dell’ambiente di lavoro; grava sul datore la prova liberatoria di avere adottato tutte le misure necessarie secondo la particolarità del lavoro, l’esperienza e la tecnica. Non si tratta però di responsabilità oggettiva.',
  },
  {
    id: 'lav-l3-014',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il comportamento abnorme del lavoratore infortunato:',
    opzioni: [
      'Interrompe il nesso causale solo se del tutto imprevedibile ed esorbitante dal procedimento lavorativo, non bastando l’imprudenza o la disattenzione',
      'È irrilevante',
      'Riduce il risarcimento della metà',
      'Esclude sempre la responsabilità del datore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La giurisprudenza distingue la condotta imprudente, che rientra nel rischio che le cautele mirano a prevenire e non esonera il datore, dal cosiddetto rischio elettivo: una condotta abnorme, arbitraria ed esorbitante dalle mansioni, che interrompe il nesso causale. La distinzione riflette l’idea che le regole cautelari servano proprio a proteggere il lavoratore anche dalla propria disattenzione.',
  },
  {
    id: 'lav-l3-015',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La disciplina del whistleblowing (d.lgs. n. 24/2023) tutela il segnalante:',
    opzioni: [
      'Solo in caso di segnalazione anonima',
      'Con obbligo di riservatezza sull’identità, divieto di ritorsioni e presunzione a suo favore, essendo onere del datore provare che le misure adottate sono estranee alla segnalazione',
      'Solo se dipendente pubblico',
      'Solo dopo l’accertamento giudiziale dell’illecito segnalato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il decreto vieta ogni ritorsione, elencandone le forme tipiche, e sancisce la nullità degli atti ritorsivi. Opera un’inversione dell’onere probatorio: si presume che le misure pregiudizievoli adottate dopo la segnalazione siano ritorsive, e spetta al datore dimostrare che sono motivate da ragioni estranee. È garantita la riservatezza dell’identità del segnalante, con eccezioni tassative.',
  },
  {
    id: 'lav-l3-016',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'I cosiddetti «contratti collettivi pirata»:',
    opzioni: [
      'Sono validi solo nel settore edile',
      'Sono equiparati a quelli sottoscritti dalle organizzazioni comparativamente più rappresentative',
      'Non sono idonei a fungere da parametro dell’art. 36 Cost. e non consentono di accedere ai benefici normativi e contributivi riservati ai contratti sottoscritti dalle organizzazioni comparativamente più rappresentative',
      'Sono nulli',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La legislazione ha progressivamente selezionato la contrattazione rilevante, ancorando deroghe e benefici ai contratti stipulati dalle organizzazioni comparativamente più rappresentative sul piano nazionale. I contratti sottoscritti da sigle prive di rappresentatività effettiva non producono quegli effetti e, secondo la giurisprudenza, non costituiscono un parametro affidabile della retribuzione sufficiente.',
  },
  {
    id: 'lav-l3-017',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il recesso del lavoratore per giusta causa dà diritto:',
    opzioni: [
      'Alla reintegrazione',
      'A nulla, trattandosi di dimissioni',
      'Alla sola cessazione del rapporto',
      'All’indennità sostitutiva del preavviso a carico del datore, oltre al risarcimento dell’eventuale ulteriore danno',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Le dimissioni per giusta causa, tipicamente per mancato pagamento della retribuzione, demansionamento o molestie, danno diritto all’indennità sostitutiva del preavviso, poiché la cessazione è imputabile al datore. Sul piano previdenziale il lavoratore accede alla NASpI, essendo la perdita dell’occupazione equiparata a quella involontaria.',
  },
  {
    id: 'lav-l3-018',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il licenziamento intimato durante il periodo di comporto ma prima del suo superamento:',
    opzioni: [
      'È nullo per violazione dell’art. 2110 c.c., che prevale sulla disciplina del recesso e sospende la possibilità di licenziare per motivi economici',
      'È annullabile',
      'È inefficace fino alla guarigione',
      'È legittimo se sopraggiunge un giustificato motivo oggettivo',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Le Sezioni Unite (n. 12568/2018) hanno affermato che l’art. 2110, comma 2, c.c. costituisce norma speciale che prevale sulla disciplina generale del recesso: il licenziamento intimato prima del superamento del comporto è nullo per violazione di norma imperativa, e la nullità opera anche se il datore adduce un giustificato motivo oggettivo.',
  },
  {
    id: 'lav-l3-019',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Nel computo del comporto per il lavoratore disabile:',
    opzioni: [
      'Le assenze legate alla disabilità si computano come tutte le altre',
      'L’applicazione indifferenziata del comporto ordinario può integrare discriminazione indiretta, richiedendo accomodamenti quali lo scomputo delle assenze riconducibili alla disabilità',
      'Il comporto non si applica',
      'Il comporto è raddoppiato per legge',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La giurisprudenza, in linea con la Corte di giustizia (Ring e Skouboe Werge), ha ravvisato una potenziale discriminazione indiretta nell’applicazione a tutti dello stesso periodo di comporto: il lavoratore disabile è esposto a un rischio maggiore di assenze. Il datore deve adottare accomodamenti ragionevoli, e la conoscenza della condizione di disabilità è presupposto della sua esigibilità.',
  },
  {
    id: 'lav-l3-020',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il trasferimento d’azienda in crisi, ai sensi dell’art. 47 della l. n. 428/1990:',
    opzioni: [
      'Vieta il trasferimento',
      'Comporta sempre l’integrale applicazione dell’art. 2112 c.c.',
      'Consente, nelle procedure e alle condizioni indicate dalla legge e con accordo sindacale, deroghe alla continuità dei rapporti e ai trattamenti, entro i limiti fissati dal diritto dell’Unione',
      'Esclude ogni tutela dei lavoratori',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La direttiva 2001/23/CE consente agli Stati di attenuare le tutele nelle procedure di insolvenza aperte in vista della liquidazione. L’art. 47 distingue le procedure che comportano la cessazione dell’attività, dove l’art. 2112 c.c. può essere derogato dall’accordo sindacale, da quelle che ne prevedono la continuazione, dove la deroga è più limitata. La Corte di giustizia ha più volte censurato applicazioni eccedenti.',
  },
  {
    id: 'lav-l3-021',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il distacco transnazionale di lavoratori nell’ambito di una prestazione di servizi:',
    opzioni: [
      'Comporta sempre l’applicazione della legge dello Stato d’origine',
      'È vietato nell’Unione europea',
      'È libero e non soggetto a regole',
      'È disciplinato dal d.lgs. n. 136/2016, che impone l’applicazione al distaccato delle condizioni di lavoro previste nello Stato ospitante e sanziona il distacco non autentico',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il d.lgs. n. 136/2016, di recepimento della direttiva enforcement e poi adeguato alla direttiva 2018/957, impone il rispetto delle condizioni di lavoro dello Stato ospitante quanto a orario, ferie, retribuzione, sicurezza e parità di trattamento. In caso di distacco non autentico, il lavoratore è considerato alle dipendenze del soggetto che ne ha utilizzato la prestazione, con responsabilità solidale.',
  },
  {
    id: 'lav-l3-022',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La clausola sociale negli appalti pubblici:',
    opzioni: [
      'Impone l’assorbimento del personale compatibilmente con l’organizzazione dell’impresa subentrante e con le esigenze dell’appalto, senza automatismi',
      'È vietata dal diritto dell’Unione',
      'Riguarda solo gli appalti di lavori',
      'Impone l’assunzione integrale e automatica del personale del gestore uscente',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La giurisprudenza amministrativa e di legittimità ha costantemente escluso una lettura rigida della clausola, che confliggerebbe con la libertà di iniziativa economica e con la concorrenza: l’obbligo di riassorbimento va armonizzato con l’organizzazione dell’impresa subentrante e con il fabbisogno effettivo dell’appalto. Non si tratta di trasferimento d’azienda, salvo che ne ricorrano in concreto i presupposti.',
  },
  {
    id: 'lav-l3-023',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il patto di stabilità (o di durata minima garantita) del rapporto:',
    opzioni: [
      'È nullo',
      'È valido se bilaterale o comunque sorretto da un interesse meritevole, e vincola il lavoratore a non dimettersi per un periodo determinato',
      'Vincola solo il datore',
      'Richiede l’autorizzazione dell’Ispettorato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La giurisprudenza ammette il patto di durata minima garantita, che deroga alla libera recedibilità del lavoratore, purché sia sorretto da un interesse meritevole e da un corrispettivo o da un vantaggio adeguato, e sia contenuto in limiti temporali ragionevoli. La violazione espone il lavoratore al risarcimento del danno o alla penale eventualmente pattuita.',
  },
  {
    id: 'lav-l3-024',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il diritto del lavoratore al risarcimento del danno da perdita di chance:',
    opzioni: [
      'Coincide con il danno biologico',
      'È escluso nel rapporto di lavoro',
      'È ammesso quando sia provata, anche in via presuntiva, la ragionevole probabilità di conseguire un risultato favorevole, quale una progressione di carriera',
      'Richiede la certezza del risultato',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La chance è considerata un bene giuridico autonomo: il pregiudizio consiste nella perdita della possibilità di conseguire il risultato, non nel mancato conseguimento. La giurisprudenza richiede la prova, anche presuntiva, di una probabilità apprezzabile, e liquida il danno in via equitativa in proporzione a quella probabilità. È tipica delle vicende di illegittima esclusione da selezioni interne.',
  },
  {
    id: 'lav-l3-025',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La conversione del rapporto a termine e la decadenza dell’art. 32 della l. n. 183/2010:',
    opzioni: [
      'Prevede un termine di cinque anni',
      'Riguarda solo il licenziamento',
      'Non si applica ai contratti a termine',
      'Impone l’impugnazione entro centottanta giorni dalla cessazione del contratto e il successivo deposito del ricorso entro centottanta giorni',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 32 della l. n. 183/2010 ha esteso il regime di doppia decadenza ai contratti a termine e ad altre fattispecie: impugnazione stragiudiziale entro centottanta giorni dalla cessazione del singolo contratto e deposito del ricorso, o comunicazione della richiesta di conciliazione o arbitrato, entro i successivi centottanta giorni.',
  },
  {
    id: 'lav-l3-026',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La nozione di «unità produttiva» rilevante per l’art. 18 dello Statuto:',
    opzioni: [
      'Indica un’articolazione aziendale dotata di autonomia funzionale e finalistica, idonea a realizzare in tutto o in parte il ciclo produttivo',
      'Coincide con ogni luogo di lavoro',
      'È determinata dal contratto collettivo',
      'Coincide con la sede legale',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La giurisprudenza richiede che l’articolazione presenti autonomia funzionale, organizzativa e amministrativa, tale da consentirle di svolgere in tutto o in parte l’attività dell’impresa. La qualificazione ha rilievo pratico notevole, perché il computo dei dipendenti si effettua nell’ambito dell’unità produttiva o del comune, con soglie che determinano il regime sanzionatorio applicabile.',
  },
  {
    id: 'lav-l3-027',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Nel computo dei dipendenti ai fini delle soglie dimensionali:',
    opzioni: [
      'Si considerano solo i lavoratori a tempo pieno e indeterminato',
      'Si considera la normale occupazione nel periodo precedente, computando i part-time in proporzione all’orario ed escludendo i lavoratori assunti in sostituzione di assenti',
      'Si considerano anche i collaboratori autonomi',
      'Si guarda al solo giorno del licenziamento',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il criterio è quello della normale occupazione nel periodo antecedente il licenziamento, e non del dato del singolo giorno. L’art. 18, comma 9, dello Statuto computa i lavoratori a tempo parziale in proporzione all’orario svolto e include apprendisti e lavoratori a termine; sono esclusi il coniuge e i parenti entro il secondo grado dell’imprenditore e i sostituti di lavoratori assenti.',
  },
  {
    id: 'lav-l3-028',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'L’onere della prova del requisito dimensionale:',
    opzioni: [
      'Non deve essere provato',
      'Grava sul lavoratore, quale fatto costitutivo',
      'Grava sul datore di lavoro, secondo l’orientamento delle Sezioni Unite, trattandosi di eccezione al regime di tutela',
      'È rimesso alla valutazione del giudice',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Le Sezioni Unite (n. 141/2006) hanno posto sul datore l’onere di provare il difetto del requisito dimensionale, in ragione della vicinanza della prova e della natura di fatto impeditivo dell’applicazione della tutela reale. Il lavoratore resta onerato di allegare l’illegittimità del recesso e la propria qualità di dipendente.',
  },
  {
    id: 'lav-l3-029',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Le mansioni promiscue, in parte superiori e in parte proprie del livello di inquadramento:',
    opzioni: [
      'Sono irrilevanti',
      'Comportano la nullità del contratto',
      'Danno sempre diritto alla promozione',
      'Rilevano ai fini dell’art. 2103 c.c. solo se quelle superiori sono prevalenti sotto il profilo qualitativo e caratterizzano la prestazione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La giurisprudenza adotta un criterio qualitativo e non meramente quantitativo: rileva se le mansioni superiori, ancorché non esclusive, connotino la prestazione e ne assorbano il contenuto professionale. La verifica passa per il consueto procedimento trifasico, con accertamento delle attività svolte, individuazione della declaratoria contrattuale e raffronto.',
  },
  {
    id: 'lav-l3-030',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'L’art. 8 del d.l. n. 138/2011 consente alle intese aziendali o territoriali:',
    opzioni: [
      'Di derogare, entro le materie indicate e con finalità tipizzate, anche a disposizioni di legge e del contratto collettivo nazionale, nel rispetto della Costituzione e dei vincoli europei e internazionali',
      'Di derogare solo alla contrattazione nazionale',
      'Di derogare solo in materia di orario',
      'Di derogare a qualunque norma, senza limiti',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La norma, molto discussa, consente intese di prossimità sottoscritte dalle rappresentanze sindacali comparativamente più rappresentative, con efficacia verso tutti i lavoratori se approvate a maggioranza, per finalità quali maggiore occupazione, qualità dei contratti, emersione del lavoro irregolare e gestione delle crisi. Le deroghe incontrano il limite della Costituzione e dei vincoli europei e internazionali.',
  },
  {
    id: 'lav-l3-031',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'L’efficacia soggettiva delle intese di prossimità:',
    opzioni: [
      'È limitata agli iscritti',
      'Si estende a tutti i lavoratori dell’unità produttiva, quando l’intesa sia approvata a maggioranza dalle rappresentanze sindacali secondo i criteri di legge',
      'Richiede l’adesione individuale',
      'Dipende da un decreto ministeriale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 8, comma 1, del d.l. n. 138/2011 attribuisce alle intese efficacia nei confronti di tutti i lavoratori interessati, purché sottoscritte sulla base di un criterio maggioritario relativo alle rappresentanze sindacali. La disposizione ha sollevato dubbi di compatibilità con l’art. 39 Cost., mai risolti da una pronuncia della Corte costituzionale sul punto.',
  },
  {
    id: 'lav-l3-032',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La rappresentanza sindacale unitaria (r.s.u.):',
    opzioni: [
      'Coincide con l’assemblea dei lavoratori',
      'È prevista dallo Statuto dei lavoratori',
      'È istituto di fonte contrattuale, disciplinato dagli accordi interconfederali, e subentra alle r.s.a. nella titolarità dei diritti sindacali',
      'È nominata dal datore di lavoro',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La r.s.u. non è prevista dalla legge ma dagli accordi interconfederali, da ultimo il testo unico sulla rappresentanza del 2014: è eletta da tutti i lavoratori e subentra alle r.s.a. nella titolarità dei diritti sindacali dello Statuto. La coesistenza fra i due modelli e i criteri di misurazione della rappresentatività restano affidati all’autonomia collettiva.',
  },
  {
    id: 'lav-l3-033',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il licenziamento del lavoratore che ha esercitato il diritto di critica:',
    opzioni: [
      'È legittimo se la critica è pubblica',
      'Richiede la previa autorizzazione sindacale',
      'È sempre legittimo',
      'È illegittimo quando la critica resti nei limiti della continenza sostanziale e formale, cioè della verità dei fatti e della correttezza espressiva',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il diritto di critica del lavoratore trova fondamento nell’art. 21 Cost. e nell’art. 1 dello Statuto, e incontra i limiti della continenza sostanziale, cioè la corrispondenza al vero dei fatti narrati, e della continenza formale, cioè la misura nell’espressione. Superati tali limiti, la condotta può integrare violazione dell’obbligo di fedeltà ex art. 2105 c.c.',
  },
  {
    id: 'lav-l3-034',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'L’obbligo di fedeltà dell’art. 2105 c.c.:',
    opzioni: [
      'Vieta di trattare affari in concorrenza e di divulgare notizie attinenti all’organizzazione e ai metodi di produzione, e viene integrato dai doveri di correttezza e buona fede',
      'Si estende anche dopo la cessazione del rapporto, senza patti',
      'Vale solo per i dirigenti',
      'Impone al lavoratore un generico dovere di lealtà illimitato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2105 c.c. tipizza due divieti: la concorrenza e la divulgazione o l’uso di notizie riservate. La giurisprudenza ne amplia la portata attraverso gli artt. 1175 e 1375 c.c., ricavando obblighi di astensione da condotte idonee a ledere l’interesse del datore. Dopo la cessazione del rapporto opera solo se pattuito ai sensi dell’art. 2125 c.c.',
  },
  {
    id: 'lav-l3-035',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il controllo del datore sulla posta elettronica aziendale del dipendente:',
    opzioni: [
      'È sempre lecito, trattandosi di strumento aziendale',
      'Deve rispettare l’art. 4 dello Statuto, la normativa sulla protezione dei dati e i principi di necessità, proporzionalità e trasparenza, con previa informativa e policy aziendale',
      'È sempre vietato',
      'Richiede il consenso del lavoratore in ogni caso',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La titolarità aziendale dello strumento non legittima un accesso indiscriminato: occorre una policy resa nota, il rispetto dei principi del regolamento (UE) 2016/679 e la conformità all’art. 4 dello Statuto quanto all’utilizzabilità dei dati. La Corte EDU, nel caso Bărbulescu c. Romania, ha fissato i criteri di bilanciamento fra prerogative datoriali e vita privata sul luogo di lavoro.',
  },
  {
    id: 'lav-l3-036',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La conservazione del posto durante la malattia opera:',
    opzioni: [
      'Solo per i lavoratori con più di dieci anni di anzianità',
      'Senza limiti temporali',
      'Per il periodo stabilito dalla legge, dai contratti collettivi, dagli usi o secondo equità, con possibilità di aspettativa non retribuita se prevista dalla contrattazione',
      'Solo per sei mesi',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2110 c.c. rinvia a legge, contratti collettivi, usi ed equità. Molti contratti prevedono, oltre al comporto ordinario, la possibilità di richiedere un periodo di aspettativa non retribuita: la giurisprudenza ha affermato che il datore, se informato della volontà del lavoratore di avvalersene, non può licenziare senza consentirne la fruizione.',
  },
  {
    id: 'lav-l3-037',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Lo svolgimento di altra attività durante la malattia:',
    opzioni: [
      'È sempre lecito',
      'Comporta la sola perdita dell’indennità',
      'Costituisce sempre giusta causa di licenziamento',
      'Rileva disciplinarmente se pregiudica o ritarda la guarigione, o se dimostra la simulazione dello stato morboso',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La giurisprudenza esclude un divieto assoluto: l’attività extralavorativa assume rilievo quando riveli l’inesistenza della malattia, oppure quando, per le sue modalità, sia idonea a compromettere o ritardare la guarigione e quindi il rientro in servizio, in violazione degli obblighi di correttezza e buona fede.',
  },
  {
    id: 'lav-l3-038',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il licenziamento per scarso rendimento:',
    opzioni: [
      'Richiede la prova di una notevole sproporzione fra gli obiettivi fissati e quanto effettivamente realizzato, imputabile a colpevole negligenza del lavoratore',
      'È un licenziamento per giustificato motivo oggettivo',
      'È sempre illegittimo',
      'È automatico al mancato raggiungimento degli obiettivi',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il mancato raggiungimento di un risultato non costituisce di per sé inadempimento, perché l’obbligazione del lavoratore subordinato è di mezzi. Il datore deve provare una notevole sproporzione fra obiettivi e risultati, tenuto conto del contesto e della media dei colleghi, e la riconducibilità dello scarto a negligenza colpevole. Si tratta quindi di licenziamento disciplinare.',
  },
  {
    id: 'lav-l3-039',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La sospensione cautelare del lavoratore in pendenza di procedimento disciplinare:',
    opzioni: [
      'È sempre non retribuita',
      'È ammessa se prevista dalla contrattazione collettiva o giustificata dall’incompatibilità della presenza in servizio, di regola con conservazione della retribuzione salvo diversa previsione collettiva',
      'Richiede l’autorizzazione del giudice',
      'Comporta la risoluzione del rapporto',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La sospensione cautelare non ha natura sanzionatoria ma organizzativa: mira a evitare che la permanenza in servizio pregiudichi l’accertamento o l’interesse aziendale. La sua legittimità è ancorata alla previsione collettiva o alla concreta incompatibilità; in mancanza di diversa disciplina, permane l’obbligo retributivo, versando il datore in mora accipiendi.',
  },
  {
    id: 'lav-l3-040',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il principio di immediatezza della contestazione disciplinare:',
    opzioni: [
      'Impone la contestazione entro tre giorni',
      'Va inteso in senso assoluto',
      'Va inteso in senso relativo, tenendo conto della complessità dell’accertamento e della struttura organizzativa dell’impresa, ma decorre dalla piena conoscenza del fatto da parte del titolare del potere disciplinare',
      'Non esiste',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’immediatezza tutela l’affidamento del lavoratore e il suo diritto di difesa, che si affievolisce con il tempo. La giurisprudenza la valuta in senso relativo: il termine decorre dal momento in cui il fatto è conosciuto in modo pieno da chi ha il potere di contestarlo, e può essere dilatato dalla complessità degli accertamenti, purché il ritardo sia giustificato.',
  },
  {
    id: 'lav-l3-041',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La recidiva, ai fini della sanzione disciplinare:',
    opzioni: [
      'Non rileva mai',
      'Richiede almeno tre precedenti',
      'Può essere valorizzata anche se non contestata',
      'Deve essere espressamente contestata al lavoratore, per consentirgli di difendersi anche sui precedenti',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La recidiva è elemento costitutivo della fattispecie sanzionatoria più grave e incide sulla proporzionalità: deve quindi entrare nella contestazione, in ossequio ai principi di specificità e immutabilità. Il datore non può fondare il licenziamento su precedenti disciplinari mai richiamati nella lettera di contestazione.',
  },
  {
    id: 'lav-l3-042',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Le sanzioni disciplinari non possono essere computate ai fini di ogni effetto decorsi:',
    opzioni: [
      'Due anni dalla loro applicazione',
      'Cinque anni',
      'Dieci anni',
      'Sei mesi',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 7, ultimo comma, dello Statuto stabilisce che non può tenersi conto a nessun effetto delle sanzioni disciplinari decorsi due anni dalla loro applicazione. La regola limita la rilevanza della recidiva e impone di verificare la data dei precedenti richiamati nella contestazione.',
  },
  {
    id: 'lav-l3-043',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il rapporto fra procedimento penale e procedimento disciplinare:',
    opzioni: [
      'Impone la sospensione obbligatoria del procedimento disciplinare',
      'È di autonomia: il datore può procedere senza attendere l’esito penale, salvo che la contrattazione collettiva imponga la sospensione o che l’accertamento penale sia indispensabile',
      'Impone di attendere il giudicato',
      'Esclude ogni valenza probatoria degli atti penali',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Vige il principio di autonomia dei due procedimenti: il datore non è tenuto ad attendere la definizione del giudizio penale, e il giudice del lavoro accerta autonomamente i fatti. La sospensione è dovuta solo se prevista dalla contrattazione collettiva; gli atti del procedimento penale possono essere utilizzati come prova atipica, liberamente valutabile.',
  },
  {
    id: 'lav-l3-044',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La conversione del contratto di apprendistato in rapporto ordinario si verifica:',
    opzioni: [
      'Su richiesta del lavoratore',
      'Al termine del periodo formativo, automaticamente',
      'In caso di inadempimento nella erogazione della formazione di responsabilità del datore, tale da impedire la realizzazione delle finalità formative',
      'Se il lavoratore supera i trent’anni',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 47 del d.lgs. n. 81/2015 prevede che, in caso di inadempimento nell’erogazione della formazione di esclusiva responsabilità del datore e tale da impedire la realizzazione delle finalità formative, il contratto si consideri a tempo indeterminato ordinario sin dalla data di costituzione, con recupero delle differenze contributive. Al termine ordinario del periodo, invece, il rapporto prosegue come ordinario salvo recesso con preavviso.',
  },
  {
    id: 'lav-l3-045',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il lavoratore che accetta il trasferimento illegittimo e vi si adegua:',
    opzioni: [
      'Deve necessariamente rifiutarsi di prendere servizio',
      'Può contestarlo solo entro cinque giorni',
      'Perde ogni diritto a contestarlo',
      'Non decade dal diritto di impugnarlo, salvo che dal comportamento risulti una univoca volontà abdicativa, non desumibile dalla mera ottemperanza',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La mera ottemperanza all’ordine di trasferimento non equivale ad accettazione: il lavoratore è tenuto a eseguire la prestazione e la sua condotta è coerente con l’obbligo di collaborazione. La rinuncia richiederebbe un atto dispositivo inequivoco, soggetto ai limiti dell’art. 2113 c.c. Il rifiuto di prendere servizio è invece valutato secondo l’art. 1460 c.c.',
  },
  {
    id: 'lav-l3-046',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il danno da illegittima privazione delle ferie:',
    opzioni: [
      'Dà diritto, alla cessazione del rapporto, all’indennità sostitutiva, e in costanza di rapporto può dare luogo al risarcimento del danno alla salute se provato',
      'Comporta la reintegrazione',
      'È coperto dall’INAIL',
      'Non è risarcibile',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il periodo minimo di quattro settimane non è monetizzabile in costanza di rapporto, perché la sua funzione è il recupero delle energie psicofisiche. Alla cessazione, la Corte di giustizia ha affermato il diritto all’indennità sostitutiva per le ferie non godute, salvo che il datore provi di avere concretamente messo il lavoratore in condizione di fruirne, informandolo in modo adeguato.',
  },
  {
    id: 'lav-l3-047',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Nel pubblico impiego contrattualizzato, la giurisdizione sulle controversie di lavoro:',
    opzioni: [
      'Spetta al giudice amministrativo',
      'Spetta al giudice ordinario, salve le controversie sulle procedure concorsuali per l’assunzione e i rapporti in regime di diritto pubblico',
      'Spetta alla Corte dei conti',
      'È rimessa a un collegio arbitrale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 63 del d.lgs. n. 165/2001 devolve al giudice ordinario, in funzione di giudice del lavoro, tutte le controversie relative ai rapporti di lavoro alle dipendenze delle pubbliche amministrazioni. Restano al giudice amministrativo le controversie in materia di procedure concorsuali per l’assunzione e quelle relative alle categorie di personale in regime di diritto pubblico ex art. 3.',
  },
  {
    id: 'lav-l3-048',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La progressione verticale nel pubblico impiego:',
    opzioni: [
      'È decisa dalla contrattazione collettiva',
      'È libera',
      'Costituisce di regola nuova assunzione, soggetta al principio del concorso pubblico, salvo le limitate riserve consentite dalla legge',
      'Avviene per sola anzianità',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte costituzionale ha ripetutamente affermato che il passaggio a un’area o categoria superiore equivale a nuova assunzione e richiede il concorso pubblico ex art. 97 Cost., ammettendo riserve di posti per gli interni solo entro limiti ristretti e a fronte di peculiari esigenze di interesse pubblico. Le procedure riservate integrali sono state ritenute illegittime.',
  },
  {
    id: 'lav-l3-049',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'L’abuso del diritto nel licenziamento collettivo si configura quando:',
    opzioni: [
      'Il datore licenzia più di dieci lavoratori',
      'La procedura dura meno di quarantacinque giorni',
      'Le organizzazioni sindacali non rispondono',
      'Il datore rispetta formalmente la procedura ma la utilizza per finalità estranee, ad esempio per espellere lavoratori sgraditi',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il controllo giudiziale non si arresta alla regolarità formale: la comunicazione di avvio deve consentire il controllo sindacale sulla effettività delle ragioni e sulla correttezza dell’individuazione della platea. L’uso della procedura per scopi diversi da quelli tipici, o la delimitazione artificiosa dell’ambito di applicazione dei criteri di scelta, sono censurabili.',
  },
  {
    id: 'lav-l3-050',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La comunicazione finale dell’art. 4, comma 9, della l. n. 223/1991 deve indicare:',
    opzioni: [
      'L’elenco dei lavoratori licenziati, con puntuale indicazione delle modalità di applicazione dei criteri di scelta',
      'Le sole ragioni economiche',
      'Il bilancio dell’impresa',
      'Solo il numero dei licenziati',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La comunicazione ai competenti uffici e alle organizzazioni sindacali deve contenere l’elenco dei lavoratori collocati in mobilità con i dati anagrafici, la qualifica, il livello e l’età, e la puntuale indicazione delle modalità con cui sono stati applicati i criteri di scelta. Una comunicazione generica impedisce il controllo e vizia i licenziamenti.',
  },
  {
    id: 'lav-l3-051',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Nel licenziamento collettivo, i criteri di scelta si applicano:',
    opzioni: [
      'Sempre all’intero complesso aziendale',
      'All’intero complesso aziendale, salvo che le esigenze tecnico-produttive giustifichino la limitazione a specifici reparti, con onere di specifica motivazione',
      'Al solo reparto interessato',
      'Ai lavoratori scelti dal datore',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La regola è la comparazione su base aziendale. La limitazione a un reparto o a un settore è ammessa quando gli esuberi riguardino unità produttive o professionalità specifiche e infungibili, e deve risultare dalla comunicazione di avvio con adeguata motivazione, per consentire il controllo sindacale e giudiziale sulla non arbitrarietà del perimetro.',
  },
  {
    id: 'lav-l3-052',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'L’accordo sindacale può derogare ai criteri legali di scelta:',
    opzioni: [
      'Solo con il consenso di tutti i lavoratori',
      'No, mai',
      'Sì, purché i criteri concordati siano oggettivi, verificabili e coerenti con la finalità della procedura, e non risultino discriminatori',
      'Sì, senza alcun limite',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 5 della l. n. 223/1991 attribuisce priorità ai criteri concordati. La giurisprudenza ne ammette la validità, incluso il criterio della prossimità alla pensione, purché siano oggettivi, generali, verificabili e non discriminatori. Il controllo giudiziale verifica la razionalità del criterio e la corretta applicazione in concreto.',
  },
  {
    id: 'lav-l3-053',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il fondo di garanzia INPS per il TFR interviene:',
    opzioni: [
      'Solo per i dipendenti pubblici',
      'Solo dopo dieci anni dalla cessazione',
      'In ogni caso di mancato pagamento',
      'In caso di insolvenza del datore, previa insinuazione al passivo, o, per i datori non assoggettabili a procedure concorsuali, in esito a esecuzione forzata infruttuosa',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La l. n. 297/1982 istituisce il fondo di garanzia, che si sostituisce al datore insolvente nel pagamento del TFR e, per effetto del d.lgs. n. 80/1992, delle ultime tre mensilità di retribuzione. Il presupposto è l’apertura di una procedura concorsuale con insinuazione al passivo, o l’esito negativo dell’esecuzione forzata per i datori non assoggettabili.',
  },
  {
    id: 'lav-l3-054',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il principio di automaticità delle prestazioni previdenziali:',
    opzioni: [
      'Consente al lavoratore di ottenere la prestazione anche se il datore non ha versato i contributi, salvo i limiti previsti per le prestazioni pensionistiche e la prescrizione contributiva',
      'Opera solo per l’assicurazione infortuni',
      'Vale solo per i dipendenti pubblici',
      'Non esiste nel nostro ordinamento',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2116 c.c. sancisce che le prestazioni sono dovute al prestatore anche quando il datore non abbia versato regolarmente i contributi, salva diversa disposizione delle leggi speciali. Il principio incontra però il limite della prescrizione contributiva: se i contributi sono prescritti, il lavoratore può agire per il risarcimento del danno pensionistico ai sensi del secondo comma.',
  },
  {
    id: 'lav-l3-055',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La prescrizione dei contributi previdenziali è, di regola, di:',
    opzioni: [
      'Dieci anni',
      'Cinque anni',
      'Tre anni',
      'Un anno',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La l. n. 335/1995 ha ridotto a cinque anni il termine di prescrizione dei contributi di previdenza e assistenza sociale obbligatoria, salvo il caso di denuncia del lavoratore o dei suoi superstiti, per il quale resta il termine decennale. La prescrizione è rilevabile d’ufficio e non è ammesso il pagamento dei contributi prescritti.',
  },
  {
    id: 'lav-l3-056',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il danno pensionistico da omissione contributiva:',
    opzioni: [
      'Coincide con l’importo dei contributi omessi',
      'È risarcibile solo dopo il pensionamento',
      'È risarcibile ai sensi dell’art. 2116, comma 2, c.c., e la giurisprudenza ne colloca l’esigibilità al momento del pensionamento, salvo l’azione di condanna generica anteriore',
      'Non è risarcibile',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2116, comma 2, c.c. obbliga il datore a risarcire il danno derivante al prestatore dall’omissione contributiva. Il danno si concretizza con la liquidazione di una pensione inferiore, ma la giurisprudenza ammette prima di allora l’azione di condanna generica o l’azione volta alla costituzione della rendita vitalizia dell’art. 13 della l. n. 1338/1962.',
  },
  {
    id: 'lav-l3-057',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La transazione novativa in materia di lavoro:',
    opzioni: [
      'Non richiede forma scritta',
      'È vietata',
      'È sempre valida',
      'Resta soggetta all’art. 2113 c.c. quando abbia a oggetto diritti derivanti da norme inderogabili già entrati nel patrimonio del lavoratore',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La qualificazione come novativa non sottrae l’atto al regime dell’art. 2113 c.c.: ciò che rileva è l’oggetto, cioè la disposizione di diritti già acquisiti derivanti da norme inderogabili. Restano invece validi gli accordi che compongono una lite su una situazione controversa, purché non si risolvano in una rinuncia mascherata a diritti certi.',
  },
  {
    id: 'lav-l3-058',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il verbale di conciliazione in sede protetta:',
    opzioni: [
      'Costituisce titolo esecutivo, previo decreto di esecutorietà quando previsto, ed è inoppugnabile ai sensi dell’art. 2113, ultimo comma, c.c.',
      'Richiede l’omologazione della corte d’appello',
      'È revocabile entro trenta giorni',
      'Ha valore di mera scrittura privata',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Le conciliazioni raggiunte nelle sedi degli artt. 410 e 411 c.p.c. sfuggono all’invalidità dell’art. 2113 c.c. e, con il decreto di esecutorietà del giudice ove previsto, acquistano efficacia di titolo esecutivo. Restano impugnabili solo per vizi del consenso o per difetto dei presupposti della sede protetta, in particolare per assenza di assistenza effettiva.',
  },
  {
    id: 'lav-l3-059',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Nel processo del lavoro, la produzione di nuovi documenti in appello:',
    opzioni: [
      'È sempre ammessa',
      'È ammessa solo se indispensabili ai fini della decisione o se la parte dimostra di non aver potuto proporli prima per causa non imputabile',
      'È vietata in modo assoluto',
      'È rimessa al consenso della controparte',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 437, comma 2, c.p.c. vieta in appello nuove domande ed eccezioni e limita l’ammissione di nuovi mezzi di prova, salvo che il collegio li ritenga indispensabili ai fini della decisione o che la parte dimostri di non averli potuti proporre nel giudizio di primo grado per causa a sé non imputabile. Il regime riflette la concentrazione del rito.',
  },
  {
    id: 'lav-l3-060',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'I poteri istruttori d’ufficio del giudice del lavoro:',
    opzioni: [
      'Sono esercitabili solo in appello',
      'Sono esclusi',
      'Sono ammessi entro i limiti dei fatti allegati dalle parti e non possono sopperire alle carenze probatorie imputabili a inerzia',
      'Consentono di introdurre fatti nuovi',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 421 c.p.c. attribuisce al giudice la facoltà di disporre d’ufficio, in qualsiasi momento, l’ammissione di ogni mezzo di prova, anche fuori dai limiti del codice civile. Il potere è però discrezionale, ancorato ai fatti già ritualmente allegati e non può supplire all’inerzia della parte: le Sezioni Unite ne hanno delimitato l’uso in funzione della ricerca della verità materiale.',
  },
  {
    id: 'lav-l3-061',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'Il licenziamento del lavoratore in prova per mancato superamento, se la prova è nulla:',
    opzioni: [
      'Comporta l’automatica conversione a tempo determinato',
      'È inefficace ma sanabile',
      'Resta valido',
      'Va valutato secondo la disciplina generale del licenziamento, dovendo il datore addurre giusta causa o giustificato motivo',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La nullità del patto di prova — per difetto di forma, per genericità nell’indicazione delle mansioni, o perché il lavoratore aveva già svolto le stesse mansioni per il medesimo datore — comporta che il rapporto sia sin dall’origine definitivo. Il recesso ricade allora nella disciplina limitativa dei licenziamenti, con onere del datore di provarne la giustificazione.',
  },
  {
    id: 'lav-l3-062',
    materia: 'Diritto del lavoro',
    difficolta: 3,
    domanda:
      'La conversione del licenziamento nullo in dimissioni o risoluzione consensuale:',
    opzioni: [
      'Non è ammessa: l’accettazione del TFR o di altre somme non implica acquiescenza al recesso, salvo comportamenti univocamente abdicativi',
      'Opera automaticamente dopo un anno',
      'Richiede il consenso del sindacato',
      'È ammessa se il lavoratore ha accettato somme dal datore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La giurisprudenza è costante nell’escludere che la riscossione del TFR o di altre spettanze, dovute comunque alla cessazione, valga come rinuncia all’impugnazione: si tratta di somme il cui incasso è compatibile con la contestazione del recesso. Occorre un comportamento concludente inequivoco, valutato con rigore in ragione dell’art. 2113 c.c.',
  },
];
