import type { QuizQuestion } from '../../types';

/**
 * Diritto commerciale — Unità 2 · Consolidamento.
 *
 * Dal tipo societario al suo funzionamento: quorum e deleghe, patti
 * parasociali, azioni proprie e obbligazioni, principi di redazione del
 * bilancio, operazioni sul capitale, gruppi e direzione e coordinamento,
 * contratti d'impresa e disciplina della concorrenza.
 */
export const commercialeL2: QuizQuestion[] = [
  {
    id: 'comm-l2-001',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Quale quorum costitutivo è richiesto in prima convocazione per l’assemblea ordinaria di s.p.a.?',
    opzioni: [
      'Nessun quorum: l’assemblea è sempre validamente costituita',
      'Un terzo del capitale sociale',
      'Almeno la metà del capitale sociale',
      'I due terzi del capitale sociale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2368 c.c. richiede in prima convocazione la presenza di tanti soci che rappresentino almeno la metà del capitale sociale; delibera a maggioranza assoluta dei presenti, salvo maggiore maggioranza statutaria. In seconda convocazione l’assemblea ordinaria delibera qualunque sia la parte di capitale rappresentata (art. 2369 c.c.).',
  },
  {
    id: 'comm-l2-002',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'In seconda convocazione, l’assemblea straordinaria di s.p.a. delibera con il voto favorevole di:',
    opzioni: [
      'La maggioranza assoluta del capitale sociale',
      'La totalità dei soci presenti',
      'Almeno un terzo del capitale rappresentato in assemblea',
      'Almeno due terzi del capitale rappresentato in assemblea, con la presenza di oltre un terzo del capitale sociale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2369 c.c. prevede che in seconda convocazione l’assemblea straordinaria sia regolarmente costituita con la partecipazione di oltre un terzo del capitale sociale e deliberi con il voto favorevole di almeno i due terzi del capitale rappresentato in assemblea. Per alcune materie (cambiamento dell’oggetto, trasformazione, scioglimento anticipato, trasferimento della sede all’estero) è comunque richiesto il voto di più di un terzo del capitale sociale.',
  },
  {
    id: 'comm-l2-003',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'L’assemblea totalitaria di s.p.a. si ha quando:',
    opzioni: [
      'È rappresentato l’intero capitale sociale e partecipa la maggioranza dei componenti degli organi amministrativo e di controllo',
      'Partecipa almeno il novanta per cento del capitale',
      'La convocazione è avvenuta con almeno trenta giorni di preavviso',
      'Sono presenti tutti i soci, anche senza gli amministratori e i sindaci',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2366, comma 4, c.c. consente all’assemblea non convocata di deliberare validamente quando è rappresentato l’intero capitale sociale e partecipa la maggioranza dei componenti degli organi amministrativi e di controllo. Ciascun partecipante può opporsi alla discussione degli argomenti sui quali non si ritenga sufficientemente informato.',
  },
  {
    id: 'comm-l2-004',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Quali attribuzioni NON possono essere delegate dal consiglio di amministrazione di s.p.a.?',
    opzioni: [
      'La gestione ordinaria dell’impresa',
      'La redazione del bilancio, l’aumento delegato di capitale e gli adempimenti in caso di riduzione per perdite',
      'La nomina dei procuratori',
      'La stipulazione dei contratti di fornitura',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2381, comma 4, c.c. esclude dalla delega le attribuzioni indicate negli artt. 2420-ter (emissione delegata di obbligazioni convertibili), 2423 (redazione del bilancio), 2443 (aumento delegato del capitale), 2446 e 2447 (riduzione per perdite) e 2501-ter e 2506-bis (progetti di fusione e scissione). Sono materie che coinvolgono l’integrità del capitale e la struttura della società.',
  },
  {
    id: 'comm-l2-005',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Rispetto agli organi delegati, il consiglio di amministrazione di s.p.a.:',
    opzioni: [
      'Risponde in ogni caso in solido per ogni atto dei delegati',
      'Perde ogni potere sulle materie delegate',
      'Conserva il potere di impartire direttive e di avocare a sé operazioni rientranti nella delega',
      'Può solo revocare la delega',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2381, comma 3, c.c. attribuisce al consiglio il potere di impartire direttive agli organi delegati e di avocare a sé operazioni rientranti nella delega, oltre al dovere di valutare l’adeguatezza dell’assetto organizzativo e l’andamento della gestione sulla base delle informazioni ricevute. Gli amministratori privi di delega devono agire informati e possono chiedere informazioni in consiglio.',
  },
  {
    id: 'comm-l2-006',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Nelle società che non fanno ricorso al mercato del capitale di rischio, i patti parasociali:',
    opzioni: [
      'Hanno efficacia reale verso la società',
      'Devono essere depositati presso il registro delle imprese a pena di nullità',
      'Sono nulli',
      'Non possono avere durata superiore a cinque anni; se stipulati a tempo indeterminato, è ammesso il recesso con preavviso di centottanta giorni',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2341-bis c.c. sottopone a un limite quinquennale i patti che stabilizzano gli assetti proprietari o il governo della società; se la durata pattuita è maggiore, il patto si intende stipulato per cinque anni. I patti a tempo indeterminato sono validi, con recesso e preavviso di centottanta giorni. Nelle quotate il limite è di tre anni (art. 123 TUF).',
  },
  {
    id: 'comm-l2-007',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'L’efficacia dei patti parasociali è:',
    opzioni: [
      'Meramente obbligatoria fra i paciscenti: la violazione comporta responsabilità contrattuale, non l’invalidità del voto espresso',
      'Subordinata all’approvazione dell’assemblea',
      'Condizionata all’iscrizione nel libro soci',
      'Reale: vincolano la società e i terzi acquirenti delle azioni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'I patti parasociali operano sul piano dei rapporti fra i soci che li sottoscrivono e non sono opponibili alla società: il voto espresso in violazione del patto è valido e la delibera non è per ciò impugnabile, residuando il risarcimento del danno ed eventuali penali. È la differenza strutturale rispetto alle clausole statutarie, che hanno efficacia reale.',
  },
  {
    id: 'comm-l2-008',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'L’acquisto di azioni proprie da parte della s.p.a.:',
    opzioni: [
      'È vietato in modo assoluto',
      'È consentito nei limiti degli utili distribuibili e delle riserve disponibili risultanti dall’ultimo bilancio approvato, previa autorizzazione dell’assemblea',
      'È libero, purché deliberato dagli amministratori',
      'Richiede l’autorizzazione del tribunale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2357 c.c. consente l’acquisto nei limiti degli utili distribuibili e delle riserve disponibili risultanti dall’ultimo bilancio regolarmente approvato, previa autorizzazione assembleare che ne fissi modalità, numero massimo, durata (non superiore a diciotto mesi) e corrispettivo. Possono essere acquistate solo azioni interamente liberate.',
  },
  {
    id: 'comm-l2-009',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il diritto di voto relativo alle azioni proprie possedute dalla società:',
    opzioni: [
      'È esercitato dal collegio sindacale',
      'È esercitato dagli amministratori',
      'È sospeso, ma le azioni sono computate nel capitale ai fini del calcolo dei quorum',
      'È attribuito ai soci di maggioranza',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2357-ter c.c. sospende il diritto di voto delle azioni proprie, che tuttavia sono computate nel capitale ai fini del calcolo delle quote richieste per la costituzione e per le deliberazioni dell’assemblea. Il diritto agli utili e quello di opzione sono attribuiti proporzionalmente alle altre azioni; va inoltre costituita una riserva indisponibile.',
  },
  {
    id: 'comm-l2-010',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Quale limite quantitativo incontra l’emissione di obbligazioni da parte della s.p.a.?',
    opzioni: [
      'Il patrimonio netto contabile',
      'Nessun limite',
      'Il capitale sociale nominale',
      'Il doppio della somma di capitale sociale, riserva legale e riserve disponibili risultanti dall’ultimo bilancio approvato',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2412 c.c. fissa il limite nel doppio del capitale sociale, della riserva legale e delle riserve disponibili risultanti dall’ultimo bilancio approvato. Il limite non opera, fra l’altro, per le obbligazioni destinate a essere quotate in mercati regolamentati o convertibili in azioni, e può essere superato se le obbligazioni eccedenti sono sottoscritte da investitori professionali soggetti a vigilanza prudenziale.',
  },
  {
    id: 'comm-l2-011',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Le clausole di prelazione contenute nello statuto di s.p.a.:',
    opzioni: [
      'Sono valide e hanno efficacia reale, essendo opponibili alla società e ai terzi acquirenti',
      'Hanno efficacia solo obbligatoria fra i soci',
      'Richiedono l’approvazione all’unanimità a ogni trasferimento',
      'Sono nulle perché limitano la circolazione delle azioni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2355-bis c.c. consente allo statuto di sottoporre a particolari condizioni il trasferimento delle azioni. Trattandosi di clausole statutarie hanno efficacia reale: il trasferimento in violazione non è opponibile alla società, che può rifiutare l’iscrizione dell’acquirente nel libro soci. Il divieto assoluto di trasferimento è ammesso per un periodo non superiore a cinque anni.',
  },
  {
    id: 'comm-l2-012',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La clausola di gradimento «mero» (rimessa al puro arbitrio dell’organo sociale):',
    opzioni: [
      'È sempre nulla',
      'È inefficace se non prevede, a carico della società o degli altri soci, un obbligo di acquisto o il diritto di recesso dell’alienante',
      'È valida senza condizioni',
      'È ammessa solo nelle s.r.l.',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2355-bis, comma 2, c.c. dispone che le clausole che subordinano il trasferimento al mero gradimento di organi sociali o altri soci sono inefficaci se non prevedono, a carico della società o degli altri soci, un obbligo di acquisto oppure il diritto di recesso dell’alienante. La regola bilancia l’interesse alla stabilità della compagine con il diritto di disinvestire.',
  },
  {
    id: 'comm-l2-013',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Quale principio di redazione del bilancio impone di tener conto dei rischi e delle perdite di competenza anche se conosciuti dopo la chiusura dell’esercizio?',
    opzioni: [
      'Il principio di prevalenza della forma sulla sostanza',
      'Il principio di continuità',
      'Il principio di prudenza',
      'Il principio di rilevanza',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2423-bis c.c. impone la prudenza, che si traduce nell’iscrizione dei soli utili realizzati alla data di chiusura e nel computo dei rischi e delle perdite di competenza anche se conosciuti dopo la chiusura dell’esercizio. Il n. 1-bis della stessa norma sancisce invece la rilevazione delle voci secondo la sostanza dell’operazione o del contratto.',
  },
  {
    id: 'comm-l2-014',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La clausola generale di redazione del bilancio (art. 2423 c.c.) impone che esso rappresenti:',
    opzioni: [
      'Esclusivamente i valori fiscalmente rilevanti',
      'La sola consistenza della liquidità disponibile',
      'Il maggior utile distribuibile possibile',
      'In modo veritiero e corretto la situazione patrimoniale e finanziaria e il risultato economico dell’esercizio',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2423 c.c. impone chiarezza e rappresentazione veritiera e corretta. Se le informazioni richieste dalle disposizioni di legge non sono sufficienti, occorre fornirne di complementari; se, in casi eccezionali, l’applicazione di una disposizione è incompatibile con la rappresentazione veritiera e corretta, la disposizione va disapplicata, motivando nella nota integrativa e vincolando a riserva non distribuibile l’eventuale utile che ne derivi.',
  },
  {
    id: 'comm-l2-015',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La riduzione volontaria (reale) del capitale sociale di s.p.a.:',
    opzioni: [
      'Può essere eseguita solo dopo novanta giorni dall’iscrizione della delibera, salvo opposizione dei creditori',
      'Richiede l’autorizzazione della Consob',
      'Non è mai ammessa',
      'Ha effetto immediato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2445 c.c. subordina l’esecuzione della riduzione mediante liberazione dei soci dall’obbligo dei versamenti o rimborso del capitale al decorso di novanta giorni dall’iscrizione della deliberazione, termine entro cui i creditori anteriori possono fare opposizione. Il tribunale può comunque disporre l’esecuzione previa idonea garanzia.',
  },
  {
    id: 'comm-l2-016',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Se per perdite il capitale della s.p.a. scende al di sotto del minimo legale, gli amministratori devono:',
    opzioni: [
      'Attendere l’approvazione del bilancio successivo',
      'Convocare senza indugio l’assemblea per deliberare la riduzione e il contemporaneo aumento a una cifra non inferiore al minimo, o la trasformazione',
      'Chiedere l’ammissione al concordato preventivo',
      'Ridurre il capitale con decisione dell’organo amministrativo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2447 c.c. impone di convocare senza indugio l’assemblea per deliberare la riduzione del capitale e il contemporaneo aumento a una cifra non inferiore al minimo legale, oppure la trasformazione della società. In mancanza, opera la causa di scioglimento dell’art. 2484, n. 4, c.c. e gli amministratori devono gestire ai soli fini della conservazione dell’integrità del patrimonio sociale.',
  },
  {
    id: 'comm-l2-017',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La scissione societaria consiste:',
    opzioni: [
      'Nella liquidazione parziale del patrimonio sociale',
      'Nella suddivisione delle azioni in categorie diverse',
      'Nell’assegnazione dell’intero patrimonio o di parte di esso a una o più società, con attribuzione delle relative partecipazioni ai soci della scissa',
      'Nella cessione dell’azienda a un terzo acquirente',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2506 c.c. distingue la scissione totale, con assegnazione dell’intero patrimonio a più società e conseguente estinzione della scissa, da quella parziale, in cui la scissa sopravvive assegnando parte del patrimonio. Le partecipazioni delle beneficiarie sono assegnate ai soci della scissa, e per questo l’operazione non produce, di regola, un corrispettivo a favore della società.',
  },
  {
    id: 'comm-l2-018',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Quando si presume l’esercizio di attività di direzione e coordinamento di società?',
    opzioni: [
      'Quando esiste un contratto di fornitura in esclusiva',
      'Quando le società hanno sede nello stesso comune',
      'Quando due società hanno lo stesso amministratore',
      'In capo a chi è tenuto al consolidamento dei loro bilanci o le controlla ai sensi dell’art. 2359 c.c.',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2497-sexies c.c. pone una presunzione relativa a carico di chi è tenuto al consolidamento dei bilanci o esercita il controllo ai sensi dell’art. 2359 c.c. L’art. 2497-septies estende la disciplina a chi eserciti direzione e coordinamento sulla base di un contratto o di clausole statutarie. La presunzione è superabile con prova contraria.',
  },
  {
    id: 'comm-l2-019',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La responsabilità della società che esercita direzione e coordinamento (art. 2497 c.c.) è esclusa:',
    opzioni: [
      'Quando il danno risulta mancante alla luce del risultato complessivo dell’attività di direzione e coordinamento o integralmente eliminato con operazioni a ciò dirette',
      'Sempre, se la controllata ha approvato il bilancio',
      'Quando la controllante detiene meno del cinquanta per cento del capitale',
      'Quando la controllata è una s.r.l.',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2497, comma 1, c.c. codifica la teoria dei «vantaggi compensativi»: non vi è responsabilità quando il danno risulta mancante alla luce del risultato complessivo dell’attività di direzione e coordinamento, oppure è integralmente eliminato anche a seguito di operazioni a ciò dirette. Il socio e il creditore possono agire solo se non sono stati soddisfatti dalla società soggetta alla direzione.',
  },
  {
    id: 'comm-l2-020',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Ai sensi dell’art. 2359 c.c., si presume l’influenza dominante quando una società dispone, nell’assemblea ordinaria di un’altra:',
    opzioni: [
      'Del dieci per cento dei voti',
      'Della maggioranza dei voti esercitabili, ovvero di voti sufficienti a esercitare un’influenza dominante',
      'Di almeno il novanta per cento dei voti',
      'Di un solo voto, se qualificato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2359 c.c. individua tre figure di controllo: di diritto, quando si dispone della maggioranza dei voti esercitabili nell’assemblea ordinaria; di fatto interno, quando si dispone di voti sufficienti a esercitare un’influenza dominante; contrattuale, quando l’influenza dominante deriva da particolari vincoli contrattuali. Distinto è il collegamento, presunto con un quinto dei voti (un decimo per le quotate).',
  },
  {
    id: 'comm-l2-021',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'I finanziamenti dei soci a favore della s.r.l. concessi in situazione di eccessivo squilibrio dell’indebitamento:',
    opzioni: [
      'Si convertono automaticamente in capitale',
      'Sono nulli',
      'Sono postergati rispetto alla soddisfazione degli altri creditori e, se rimborsati nell’anno precedente l’apertura della liquidazione giudiziale, vanno restituiti',
      'Godono di privilegio generale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2467 c.c. posterga il rimborso dei finanziamenti dei soci concessi in presenza di un eccessivo squilibrio dell’indebitamento rispetto al patrimonio netto, o in una situazione finanziaria in cui sarebbe stato ragionevole un conferimento. Se il rimborso è avvenuto nell’anno precedente l’apertura della liquidazione giudiziale, la somma deve essere restituita. L’art. 2497-quinquies estende la regola ai finanziamenti infragruppo.',
  },
  {
    id: 'comm-l2-022',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'I diritti particolari attribuibili al singolo socio di s.r.l. (art. 2468 c.c.) possono riguardare:',
    opzioni: [
      'Il diritto di veto su ogni delibera assembleare, in via generale',
      'L’esenzione dalle perdite',
      'Soltanto la distribuzione degli utili',
      'L’amministrazione della società o la distribuzione degli utili',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2468, comma 3, c.c. consente all’atto costitutivo di attribuire a singoli soci particolari diritti riguardanti l’amministrazione della società o la distribuzione degli utili. Sono diritti soggettivi legati alla persona del socio e, salvo diversa disposizione, modificabili solo con il consenso di tutti i soci. È il tratto personalistico più marcato della s.r.l.',
  },
  {
    id: 'comm-l2-023',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il socio di s.r.l. non amministratore ha diritto:',
    opzioni: [
      'Di avere notizie dagli amministratori sullo svolgimento degli affari sociali e di consultare i libri sociali e i documenti relativi all’amministrazione',
      'Di revocare da solo gli amministratori',
      'Di opporsi alle singole operazioni gestorie',
      'Di partecipare alle riunioni dell’organo amministrativo',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2476, comma 2, c.c. attribuisce ai soci che non partecipano all’amministrazione il diritto di avere dagli amministratori notizie sullo svolgimento degli affari sociali e di consultare, anche tramite professionisti di fiducia, i libri sociali e i documenti relativi all’amministrazione. È un potere di controllo individuale che compensa la possibile assenza di un organo di controllo.',
  },
  {
    id: 'comm-l2-024',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Nella società semplice, salvo patto contrario, l’amministrazione spetta:',
    opzioni: [
      'A un amministratore unico nominato dal tribunale',
      'Disgiuntamente a ciascun socio, con diritto di opposizione degli altri prima che l’operazione sia compiuta',
      'Congiuntamente a tutti i soci, con necessità di unanimità',
      'Al socio che ha conferito di più',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2257 c.c. pone come regola l’amministrazione disgiuntiva: ciascun socio amministratore può compiere gli atti di gestione, ma gli altri hanno diritto di opporsi prima che l’operazione sia compiuta, e sull’opposizione decide la maggioranza dei soci calcolata per quote di interesse. L’art. 2258 disciplina in alternativa l’amministrazione congiuntiva.',
  },
  {
    id: 'comm-l2-025',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'L’esclusione del socio da una società di persone è deliberata:',
    opzioni: [
      'Dall’amministratore, con effetto immediato',
      'Dal tribunale, su ricorso di qualunque creditore',
      'Dalla maggioranza dei soci, non computandosi nel numero quello da escludere, e ha effetto decorsi trenta giorni dalla comunicazione',
      'All’unanimità, compreso il socio escluso',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2287 c.c. attribuisce la decisione alla maggioranza dei soci, computata per teste e senza contare il socio da escludere; la delibera ha effetto trascorsi trenta giorni dalla comunicazione, entro i quali il socio può proporre opposizione al tribunale. Se la società è composta da due soci, l’esclusione è pronunciata dal tribunale su domanda dell’altro.',
  },
  {
    id: 'comm-l2-026',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il socio uscente da una società di persone ha diritto:',
    opzioni: [
      'Alla sola restituzione del conferimento nominale',
      'A nulla, se la società prosegue',
      'Alla restituzione in natura dei beni conferiti',
      'A una somma di denaro che rappresenti il valore della quota, determinato in base alla situazione patrimoniale al giorno dello scioglimento del rapporto',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2289 c.c. attribuisce al socio uscente o ai suoi eredi il diritto a una somma di denaro corrispondente al valore della quota, calcolato sulla base della situazione patrimoniale della società al giorno dello scioglimento del rapporto, tenendo conto anche dell’esito delle operazioni in corso. La liquidazione va effettuata entro sei mesi.',
  },
  {
    id: 'comm-l2-027',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il socio che recede o è escluso da una società di persone risponde:',
    opzioni: [
      'Delle obbligazioni sociali sorte fino al giorno in cui si verifica lo scioglimento del rapporto',
      'Di nessuna obbligazione dal momento della comunicazione',
      'Solo delle obbligazioni tributarie',
      'Di tutte le obbligazioni sociali, anche successive',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2290 c.c. mantiene la responsabilità del socio uscente per le obbligazioni sorte fino al giorno dello scioglimento del rapporto. Lo scioglimento deve essere portato a conoscenza dei terzi con mezzi idonei; in mancanza, non è opponibile a chi lo ha senza colpa ignorato, e la responsabilità si estende anche alle obbligazioni successive.',
  },
  {
    id: 'comm-l2-028',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Nella società in accomandita semplice, il venir meno di tutti gli accomandatari:',
    opzioni: [
      'È irrilevante',
      'Comporta lo scioglimento della società se entro sei mesi non si provvede alla loro sostituzione',
      'Trasforma automaticamente la società in s.n.c.',
      'Comporta l’immediata apertura della liquidazione giudiziale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2323 c.c. prevede lo scioglimento se rimangono soltanto soci accomandanti o soltanto accomandatari e non si provvede alla sostituzione entro sei mesi. Nel frattempo gli accomandanti nominano un amministratore provvisorio per il compimento degli atti di ordinaria amministrazione, senza per questo assumere la qualità di accomandatario.',
  },
  {
    id: 'comm-l2-029',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il contratto di leasing finanziario, dopo la l. n. 124/2017, è:',
    opzioni: [
      'Un contratto di mutuo con garanzia reale',
      'Un contratto atipico privo di qualsiasi disciplina legale',
      'Un contratto tipizzato, con una definizione legale e una disciplina della risoluzione per inadempimento dell’utilizzatore',
      'Una forma di vendita con riserva di proprietà',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 1, commi 136 ss., della l. n. 124/2017 ha dato una definizione legale alla locazione finanziaria e ne ha disciplinato la risoluzione per grave inadempimento dell’utilizzatore, individuando la soglia rilevante di mancato pagamento e regolando il conguaglio fra ricavato della vendita del bene e credito residuo del concedente. Restano applicabili i principi elaborati dalla giurisprudenza per i profili non regolati.',
  },
  {
    id: 'comm-l2-030',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Nel contratto di affiliazione commerciale (franchising), la l. n. 129/2004 impone:',
    opzioni: [
      'La sola forma orale',
      'La partecipazione dell’affiliante al capitale dell’affiliato',
      'L’esclusiva a favore dell’affiliante in ogni caso',
      'La forma scritta a pena di nullità e una durata minima idonea all’ammortamento dell’investimento',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La l. n. 129/2004 richiede la forma scritta a pena di nullità e, per i contratti a tempo determinato, una durata comunque sufficiente all’ammortamento dell’investimento e in ogni caso non inferiore a tre anni. Impone inoltre obblighi informativi precontrattuali: copia del contratto almeno trenta giorni prima e comunicazione di dati sull’affiliante e sulla rete.',
  },
  {
    id: 'comm-l2-031',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'L’abuso di dipendenza economica (art. 9 l. n. 192/1998):',
    opzioni: [
      'È vietato nei rapporti fra imprese e comporta la nullità del patto attraverso cui si realizza',
      'È lecito se pattuito per iscritto',
      'Richiede necessariamente una posizione dominante nel mercato rilevante',
      'Riguarda solo i rapporti fra imprese e consumatori',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 9 della l. n. 192/1998 vieta l’abuso dello stato di dipendenza economica di un’impresa cliente o fornitrice, cioè della situazione in cui essa sia in grado di determinare un eccessivo squilibrio di diritti e obblighi. Il patto attraverso cui si realizza l’abuso è nullo, resta il risarcimento del danno e la competenza è del tribunale delle imprese. La dipendenza economica prescinde dalla posizione dominante rilevante ai fini antitrust.',
  },
  {
    id: 'comm-l2-032',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Le intese restrittive della concorrenza, ai sensi della l. n. 287/1990:',
    opzioni: [
      'Sono valide se comunicate all’Autorità garante',
      'Sono vietate e nulle a ogni effetto quando abbiano per oggetto o per effetto di impedire, restringere o falsare in maniera consistente il gioco della concorrenza',
      'Sono lecite se concluse fra imprese di piccole dimensioni, in ogni caso',
      'Richiedono l’autorizzazione preventiva del Ministero delle imprese',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2 della l. n. 287/1990 vieta le intese fra imprese che abbiano per oggetto o per effetto di impedire, restringere o falsare in maniera consistente il gioco della concorrenza nel mercato nazionale o in una sua parte rilevante, e ne sancisce la nullità a ogni effetto. È l’omologo interno dell’art. 101 TFUE, che opera quando l’intesa pregiudica il commercio fra Stati membri.',
  },
  {
    id: 'comm-l2-033',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'L’abuso di posizione dominante:',
    opzioni: [
      'È sanzionato solo se produce un danno ai consumatori finali',
      'Consiste nel semplice fatto di detenere una posizione dominante',
      'Presuppone la posizione dominante e un suo sfruttamento abusivo, ad esempio con prezzi ingiustificatamente gravosi o condizioni discriminatorie',
      'È vietato solo alle imprese pubbliche',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 3 della l. n. 287/1990, come l’art. 102 TFUE, non vieta la posizione dominante ma il suo sfruttamento abusivo: imporre prezzi o condizioni ingiustificatamente gravose, impedire o limitare la produzione, applicare condizioni dissimili per prestazioni equivalenti, subordinare la conclusione dei contratti a prestazioni supplementari estranee.',
  },
  {
    id: 'comm-l2-034',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Chi ha subito un danno da una violazione del diritto della concorrenza:',
    opzioni: [
      'Può agire solo davanti all’Autorità garante',
      'Deve attendere la conclusione del procedimento penale',
      'Non ha alcuna azione risarcitoria',
      'Può agire per il risarcimento davanti alle sezioni specializzate in materia di impresa, secondo il d.lgs. n. 3/2017',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il d.lgs. n. 3/2017, attuativo della direttiva 2014/104/UE, disciplina le azioni risarcitorie per violazione del diritto della concorrenza: competenza delle sezioni specializzate in materia di impresa, presunzione relativa di danno per i cartelli, effetto vincolante della decisione definitiva dell’Autorità quanto all’accertamento della violazione, regole su prescrizione e accesso alle prove.',
  },
  {
    id: 'comm-l2-035',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il marchio è nullo per difetto di capacità distintiva quando:',
    opzioni: [
      'È costituito esclusivamente da denominazioni generiche del prodotto o indicazioni descrittive',
      'È depositato da un soggetto non imprenditore',
      'È composto da più di tre parole',
      'È costituito da un termine di fantasia',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 13 c.p.i. esclude la registrazione dei segni privi di carattere distintivo, in particolare di quelli costituiti esclusivamente da denominazioni generiche di prodotti o servizi o da indicazioni descrittive. Il difetto può però essere superato dal secondary meaning, cioè dall’acquisto di capacità distintiva a seguito dell’uso; simmetricamente, il marchio decade se divenuto denominazione generica.',
  },
  {
    id: 'comm-l2-036',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il marchio che gode di rinomanza è tutelato:',
    opzioni: [
      'Solo per i prodotti identici a quelli registrati',
      'Anche per prodotti non affini, quando l’uso del segno consenta di trarre indebito vantaggio dal carattere distintivo o rechi pregiudizio allo stesso',
      'Solo se registrato a livello europeo',
      'Per un periodo illimitato senza rinnovo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 20, comma 1, lett. c), c.p.i. estende la tutela del marchio rinomato oltre il principio di specialità: il titolare può vietare l’uso di un segno identico o simile anche per prodotti o servizi non affini, se ciò consente di trarre indebito vantaggio dal carattere distintivo o dalla rinomanza del marchio, o reca pregiudizio agli stessi.',
  },
  {
    id: 'comm-l2-037',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La cessione del marchio, dopo la riforma del codice della proprietà industriale:',
    opzioni: [
      'Richiede l’autorizzazione dell’Ufficio italiano brevetti e marchi',
      'È ammessa solo insieme all’azienda o a un suo ramo',
      'È ammessa anche separatamente dall’azienda, purché non ne derivi inganno per il pubblico',
      'È vietata in ogni caso',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 23 c.p.i. consente il trasferimento e la licenza del marchio per la totalità o per parte dei prodotti o servizi, anche indipendentemente dal trasferimento dell’azienda. Il limite è il divieto di inganno: dal trasferimento o dalla licenza non deve derivare inganno per il pubblico nei caratteri dei prodotti o servizi essenziali nell’apprezzamento dei consumatori.',
  },
  {
    id: 'comm-l2-038',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il brevetto per invenzione industriale ha una durata:',
    opzioni: [
      'Illimitata',
      'Di cinque anni prorogabili una sola volta',
      'Di dieci anni rinnovabili',
      'Di venti anni dalla data di deposito della domanda, non rinnovabile',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 60 c.p.i. fissa la durata in venti anni dalla data di deposito della domanda, senza possibilità di rinnovo. Requisiti di brevettabilità sono novità, attività inventiva, industrialità e liceità (artt. 45 ss. c.p.i.). Per i medicinali e i prodotti fitosanitari è previsto il certificato complementare di protezione, che estende la copertura entro i limiti fissati dalla normativa europea.',
  },
  {
    id: 'comm-l2-039',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Quale organo ha competenza per le controversie in materia di proprietà industriale e di concorrenza?',
    opzioni: [
      'Le sezioni specializzate in materia di impresa',
      'Il tribunale amministrativo regionale',
      'La Corte dei conti',
      'Il giudice di pace',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il d.lgs. n. 168/2003, come modificato dal d.l. n. 1/2012, attribuisce alle sezioni specializzate in materia di impresa le controversie in materia di proprietà industriale e intellettuale, di concorrenza sleale interferente con la proprietà industriale, di antitrust, oltre a quelle societarie relative alle società di capitali e ai contratti pubblici sopra soglia europea.',
  },
  {
    id: 'comm-l2-040',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il patto di non concorrenza fra imprenditori (art. 2596 c.c.):',
    opzioni: [
      'È nullo in ogni caso',
      'È valido se circoscritto a una determinata zona o attività e comunque per un periodo non superiore a cinque anni',
      'Non incontra limiti di durata',
      'Richiede la forma dell’atto pubblico',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2596 c.c. richiede la prova per iscritto e impone che il patto sia circoscritto a una determinata zona o a una determinata attività; la durata non può eccedere i cinque anni e, se il termine pattuito è maggiore o indeterminato, il patto vale per cinque anni. La disciplina è distinta da quella del patto di non concorrenza nel lavoro subordinato (art. 2125 c.c.).',
  },
  {
    id: 'comm-l2-041',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Le start-up innovative, ai sensi del d.l. n. 179/2012:',
    opzioni: [
      'Non possono avere dipendenti',
      'Sono esonerate da ogni obbligo contabile',
      'Godono di deroghe alla disciplina societaria ordinaria, fra cui la possibilità per le s.r.l. di creare categorie di quote con diritti diversi',
      'Devono costituirsi necessariamente in forma di s.p.a.',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il d.l. n. 179/2012 prevede per le start-up innovative iscritte nella sezione speciale del registro delle imprese una serie di deroghe: possibilità per le s.r.l. di creare categorie di quote con diritti diversi e anche prive del diritto di voto, offerta al pubblico delle quote tramite portali di equity crowdfunding, disciplina agevolata in caso di perdite e strumenti di incentivazione del personale.',
  },
  {
    id: 'comm-l2-042',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La società benefit, introdotta dalla l. n. 208/2015:',
    opzioni: [
      'È necessariamente senza scopo di lucro',
      'Gode di esenzione fiscale integrale',
      'È un nuovo tipo societario autonomo',
      'È una qualificazione che una società di qualunque tipo può assumere, perseguendo, oltre allo scopo di lucro, finalità di beneficio comune indicate nell’oggetto sociale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La società benefit non è un tipo autonomo: qualunque società può assumerne la qualifica indicando nell’oggetto sociale le finalità di beneficio comune. Gli amministratori devono bilanciare l’interesse dei soci con quello degli altri portatori di interesse, va individuato un responsabile dell’impatto e redatta una relazione annuale sul perseguimento del beneficio comune, allegata al bilancio.',
  },
  {
    id: 'comm-l2-043',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il contratto di rete d’imprese:',
    opzioni: [
      'Può essere costituito con o senza soggettività giuridica, a seconda che sia istituito un fondo patrimoniale comune e un organo comune e la rete sia iscritta nella sezione ordinaria del registro delle imprese',
      'È riservato alle imprese agricole',
      'Sostituisce il consorzio, che è stato abrogato',
      'Determina sempre la nascita di un nuovo soggetto giuridico',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il contratto di rete, disciplinato dal d.l. n. 5/2009, consente a più imprenditori di collaborare, scambiarsi informazioni o prestazioni ed esercitare in comune attività rientranti nel proprio oggetto. Può restare un contratto plurilaterale privo di soggettività (rete-contratto) o acquistarla (rete-soggetto), quando sia dotata di fondo patrimoniale comune e organo comune e sia iscritta nella sezione ordinaria del registro delle imprese.',
  },
  {
    id: 'comm-l2-044',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Nell’associazione in partecipazione, dopo il d.lgs. n. 81/2015:',
    opzioni: [
      'L’apporto dell’associato persona fisica può consistere anche in una prestazione di lavoro',
      'L’apporto dell’associato persona fisica non può consistere, nemmeno in parte, in una prestazione di lavoro',
      'L’associato risponde delle perdite oltre il valore dell’apporto',
      'L’associato ha diritto di amministrare l’impresa',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 53 del d.lgs. n. 81/2015 ha modificato l’art. 2549 c.c. vietando che, nei rapporti in cui l’associato sia una persona fisica, l’apporto consista anche solo in parte in una prestazione di lavoro; restano salvi i rapporti fra imprenditori e quelli in cui l’associato sia parente entro il terzo grado. Resta ferma la regola per cui l’associato partecipa alle perdite nei limiti dell’apporto (art. 2553 c.c.).',
  },
  {
    id: 'comm-l2-045',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Nel contratto di agenzia, il diritto all’indennità di fine rapporto:',
    opzioni: [
      'È determinata liberamente dalle parti senza limiti',
      'Spetta sempre e comunque, anche se il contratto è sciolto per fatto imputabile all’agente',
      'Spetta se l’agente ha procurato nuovi clienti o sviluppato sensibilmente gli affari con quelli esistenti e il preponente ne trae ancora sostanziali vantaggi',
      'È esclusa in ogni caso di recesso del preponente',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 1751 c.c. subordina l’indennità a un duplice presupposto: l’apporto di nuovi clienti o il sensibile sviluppo degli affari con quelli esistenti, e la permanenza di sostanziali vantaggi per il preponente, con verifica di equità. L’indennità non è dovuta se il preponente risolve per fatto imputabile all’agente o se questi recede senza giusta causa; la disposizione è inderogabile a svantaggio dell’agente.',
  },
  {
    id: 'comm-l2-046',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La clausola statutaria di arbitrato nelle società (d.lgs. n. 5/2003):',
    opzioni: [
      'È vietata nelle società di capitali',
      'Vincola solo i soci che l’hanno espressamente sottoscritta',
      'Può prevedere la nomina degli arbitri da parte dei soci di maggioranza',
      'Deve prevedere che la nomina di tutti gli arbitri sia effettuata da un soggetto estraneo alla società, a pena di nullità',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 34 del d.lgs. n. 5/2003 impone, a pena di nullità, che la clausola compromissoria statutaria conferisca il potere di nomina di tutti gli arbitri a un soggetto estraneo alla società. La regola presidia l’imparzialità del collegio in un contesto in cui le parti non hanno pari forza contrattuale. Restano escluse dall’arbitrato le controversie non disponibili.',
  },
  {
    id: 'comm-l2-047',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La denuncia al tribunale per gravi irregolarità (art. 2409 c.c.):',
    opzioni: [
      'Può essere proposta dai soci che rappresentino il decimo del capitale sociale, oltre che dall’organo di controllo, se vi è fondato sospetto di gravi irregolarità potenzialmente dannose',
      'Richiede la maggioranza assoluta del capitale',
      'È esperibile solo dopo l’apertura della liquidazione giudiziale',
      'È riservata al pubblico ministero',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2409 c.c. legittima i soci che rappresentino almeno il decimo del capitale sociale (un ventesimo nelle società aperte), il collegio sindacale e, nelle società aperte, il pubblico ministero. Il tribunale può disporre l’ispezione, adottare provvedimenti provvisori, revocare amministratori e sindaci e nominare un amministratore giudiziario. Il Codice della crisi ne ha esteso l’applicabilità anche alle s.r.l.',
  },
  {
    id: 'comm-l2-048',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Verificatasi una causa di scioglimento, gli amministratori conservano il potere di gestire la società:',
    opzioni: [
      'Con pieni poteri, fino alla nomina dei liquidatori',
      'Ai soli fini della conservazione dell’integrità e del valore del patrimonio sociale',
      'Solo previa autorizzazione del tribunale',
      'In nessun caso: i poteri cessano immediatamente',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2486 c.c. limita i poteri degli amministratori, dal verificarsi della causa di scioglimento, alla sola conservazione dell’integrità e del valore del patrimonio sociale; la violazione fonda responsabilità verso società, soci, creditori e terzi. Il comma 3, introdotto dal Codice della crisi, presume che il danno corrisponda alla differenza fra i patrimoni netti alle due date rilevanti, salva prova contraria.',
  },
  {
    id: 'comm-l2-049',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Dopo la cancellazione della società dal registro delle imprese, i creditori insoddisfatti:',
    opzioni: [
      'Possono agire solo contro gli amministratori',
      'Non hanno più alcuna azione',
      'Possono agire nei confronti dei soci fino alla concorrenza delle somme da questi riscosse in base al bilancio finale di liquidazione, e verso i liquidatori se il mancato pagamento dipende da loro colpa',
      'Possono chiedere la reiscrizione automatica della società',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2495 c.c. consente ai creditori sociali non soddisfatti di far valere i loro crediti nei confronti dei soci, fino alla concorrenza delle somme riscosse in base al bilancio finale di liquidazione, e nei confronti dei liquidatori se il mancato pagamento è dipeso da loro colpa. Le Sezioni Unite (nn. 6070-6072/2013) hanno inquadrato il fenomeno come successione dei soci nei rapporti pendenti.',
  },
  {
    id: 'comm-l2-050',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La liquidazione giudiziale può essere aperta nei confronti di una società cancellata dal registro delle imprese:',
    opzioni: [
      'Entro cinque anni dalla cancellazione',
      'Senza limiti di tempo',
      'Mai',
      'Entro un anno dalla cancellazione, se l’insolvenza si è manifestata anteriormente o entro l’anno successivo',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 33 CCII, riprendendo l’art. 10 della legge fallimentare, consente l’apertura della liquidazione giudiziale entro un anno dalla cancellazione, se l’insolvenza si è manifestata anteriormente alla medesima o entro l’anno successivo. La regola vale anche per l’imprenditore individuale che abbia cessato l’attività.',
  },
  {
    id: 'comm-l2-051',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Nel concordato preventivo liquidatorio, il Codice della crisi richiede:',
    opzioni: [
      'Un apporto di risorse esterne che incrementi di almeno il dieci per cento l’attivo disponibile e assicuri ai chirografari un soddisfacimento non inferiore al venti per cento',
      'Il pagamento integrale di tutti i creditori',
      'Il consenso unanime dei creditori',
      'Nessun requisito minimo di soddisfacimento',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 84, comma 4, CCII impone, per il concordato liquidatorio, un apporto di risorse esterne che incrementi di almeno il dieci per cento l’attivo disponibile al momento della domanda e che consenta di soddisfare i creditori chirografari in misura non inferiore al venti per cento del loro ammontare complessivo. La soglia non si applica al concordato in continuità aziendale.',
  },
  {
    id: 'comm-l2-052',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Gli accordi di ristrutturazione dei debiti «ordinari» richiedono l’adesione di creditori che rappresentino:',
    opzioni: [
      'Il trenta per cento dei crediti',
      'Il sessanta per cento dei crediti',
      'La totalità dei crediti',
      'Il novanta per cento dei crediti',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 57 CCII richiede l’adesione di creditori rappresentanti almeno il sessanta per cento dei crediti, con integrale pagamento dei creditori estranei nei termini di legge. L’art. 60 prevede gli accordi agevolati, con soglia ridotta al trenta per cento a condizione che il debitore non chieda misure protettive né la moratoria per gli estranei; l’art. 61 disciplina gli accordi a efficacia estesa.',
  },
  {
    id: 'comm-l2-053',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il piano di ristrutturazione soggetto a omologazione (PRO), introdotto dal d.lgs. n. 83/2022:',
    opzioni: [
      'È riservato alle imprese agricole',
      'Comporta lo spossessamento del debitore',
      'Consente di derogare all’ordine delle cause legittime di prelazione, purché tutte le classi votino favorevolmente',
      'Non richiede alcuna votazione dei creditori',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Gli artt. 64-bis ss. CCII disciplinano il PRO, strumento che consente di distribuire il valore prescindendo dall’ordine delle cause legittime di prelazione e dalla regola della par condicio, ma che per questo richiede l’approvazione unanime di tutte le classi di creditori, obbligatoriamente formate. In caso di mancata approvazione il debitore può chiedere la conversione in concordato preventivo.',
  },
  {
    id: 'comm-l2-054',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Le misure protettive richieste nella composizione negoziata:',
    opzioni: [
      'Sono disposte dall’esperto indipendente',
      'Comportano la sospensione dei contratti in corso',
      'Operano automaticamente e senza limiti di durata',
      'Sono confermate o revocate dal tribunale e hanno una durata limitata, prorogabile entro i limiti di legge',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’imprenditore può chiedere, con l’istanza di nomina dell’esperto o successivamente, l’applicazione di misure protettive del patrimonio; la pubblicazione dell’istanza nel registro delle imprese ne determina la provvisoria operatività, ma il tribunale deve pronunciarsi sulla conferma o revoca. La durata è limitata nel tempo e prorogabile entro il tetto complessivo fissato dall’art. 19 CCII.',
  },
  {
    id: 'comm-l2-055',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Nella composizione negoziata, i contratti in corso di esecuzione:',
    opzioni: [
      'Non possono essere unilateralmente risolti, sospesi o modificati per il solo fatto dell’accesso allo strumento: le clausole in tal senso sono inefficaci',
      'Possono essere risolti liberamente dalla controparte',
      'Sono sospesi per l’intera durata delle trattative',
      'Si risolvono automaticamente',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 18, comma 5, CCII rende inefficaci i patti che autorizzano la risoluzione, la modifica o la sospensione dei contratti in corso per il solo fatto dell’accesso alla composizione negoziata o della richiesta di misure protettive. Sono le cosiddette clausole ipso facto, la cui neutralizzazione è imposta dalla direttiva europea sulla ristrutturazione preventiva.',
  },
  {
    id: 'comm-l2-056',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Chi sono i «creditori pubblici qualificati» tenuti alle segnalazioni di cui all’art. 25-novies CCII?',
    opzioni: [
      'Le banche e gli intermediari finanziari',
      'L’INPS, l’INAIL, l’Agenzia delle entrate e l’Agenzia delle entrate-Riscossione',
      'I fornitori strategici dell’impresa',
      'Le camere di commercio',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’INPS, l’INAIL, l’Agenzia delle entrate e l’Agenzia delle entrate-Riscossione devono segnalare all’imprenditore e, ove esistente, all’organo di controllo il superamento di determinate soglie di esposizione debitoria, invitandolo a valutare l’accesso alla composizione negoziata. È il meccanismo di allerta esterna che ha sostituito gli OCRI originariamente previsti dal Codice.',
  },
  {
    id: 'comm-l2-057',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La revocatoria fallimentare, oggi disciplinata dall’art. 166 CCII, colpisce:',
    opzioni: [
      'Gli atti compiuti dopo l’apertura della procedura',
      'Solo gli atti a titolo gratuito',
      'Determinati atti, pagamenti e garanzie compiuti dal debitore nei periodi sospetti anteriori all’apertura della liquidazione giudiziale',
      'Tutti gli atti compiuti negli ultimi dieci anni',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 166 CCII individua gli atti revocabili distinguendo fra atti anormali, per i quali l’onere della prova sulla mancata conoscenza dello stato di insolvenza grava sul convenuto, e atti normali (pagamenti di debiti liquidi ed esigibili, atti a titolo oneroso, garanzie contestuali), per i quali è il curatore a dover provare la conoscenza. Il comma 3 elenca le esenzioni, fra cui i pagamenti nei termini d’uso.',
  },
  {
    id: 'comm-l2-058',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'L’esdebitazione, nel Codice della crisi:',
    opzioni: [
      'È preclusa a chi non ha pagato almeno il cinquanta per cento dei debiti',
      'Riguarda solo i debiti tributari',
      'È un beneficio eccezionale concesso solo su richiesta dei creditori',
      'Consegue di diritto alla chiusura della liquidazione giudiziale della persona fisica meritevole, salvo i casi di esclusione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 282 CCII prevede che il debitore persona fisica sia esdebitato di diritto alla chiusura della liquidazione giudiziale, o comunque decorsi tre anni dalla sua apertura, salvo che ricorrano le ipotesi di esclusione dell’art. 280. L’art. 283 disciplina inoltre l’esdebitazione del debitore incapiente, che consente il beneficio anche in assenza di qualsiasi utilità per i creditori, una sola volta.',
  },
  {
    id: 'comm-l2-059',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il consumatore sovraindebitato può accedere:',
    opzioni: [
      'Al piano di ristrutturazione dei debiti del consumatore, che non prevede il voto dei creditori',
      'Alla liquidazione giudiziale',
      'Agli accordi di ristrutturazione dei debiti ex art. 57 CCII',
      'Al concordato preventivo',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Gli artt. 67 ss. CCII disciplinano il piano di ristrutturazione dei debiti del consumatore: non è prevista votazione, e il tribunale omologa valutando la fattibilità del piano e la meritevolezza del debitore, escludendola se questi ha determinato la situazione con colpa grave, malafede o frode. Il concordato minore è invece riservato ai debitori non consumatori.',
  },
  {
    id: 'comm-l2-060',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Il curatore della liquidazione giudiziale, rispetto ai contratti pendenti:',
    opzioni: [
      'Deve sempre proseguirli',
      'Può, previa autorizzazione del comitato dei creditori, subentrare assumendo i relativi obblighi o sciogliersi dal contratto',
      'Non ha alcun potere di scelta',
      'Può scioglierli solo con il consenso del contraente in bonis',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 172 CCII sospende l’esecuzione dei contratti pendenti fino a quando il curatore, previa autorizzazione del comitato dei creditori, dichiara di subentrare assumendo tutti i relativi obblighi ovvero di sciogliersi dal contratto. Il contraente in bonis può mettere in mora il curatore facendogli assegnare dal giudice delegato un termine per la scelta.',
  },
  {
    id: 'comm-l2-061',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'La domanda di concordato «con riserva» (o in bianco) consente al debitore:',
    opzioni: [
      'Di evitare la nomina di un commissario giudiziale',
      'Di ottenere l’omologazione senza piano',
      'Di depositare la domanda riservandosi di presentare proposta, piano e documentazione entro il termine assegnato dal tribunale',
      'Di sospendere a tempo indeterminato le azioni esecutive',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 44 CCII consente al debitore di presentare la domanda di accesso riservandosi di depositare proposta, piano e documentazione entro un termine compreso fra trenta e sessanta giorni, prorogabile. Dalla pubblicazione decorrono gli effetti protettivi, ma il tribunale può nominare un commissario giudiziale e il debitore deve depositare periodicamente informative sulla gestione.',
  },
  {
    id: 'comm-l2-062',
    materia: 'Diritto commerciale',
    difficolta: 2,
    domanda:
      'Nel concordato preventivo, la suddivisione dei creditori in classi:',
    opzioni: [
      'È vietata',
      'È decisa dal commissario giudiziale',
      'È sempre obbligatoria',
      'È di regola facoltativa, ma diventa obbligatoria in casi determinati dalla legge, fra cui i creditori titolari di garanzie prestate da terzi',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 85 CCII lascia di regola alla proposta la scelta di suddividere i creditori in classi secondo posizione giuridica e interessi economici omogenei, ma impone la formazione di classi in ipotesi determinate, fra cui i creditori titolari di garanzie prestate da terzi, i creditori con crediti tributari o previdenziali non integralmente soddisfatti e gli enti del terzo settore. Nel concordato in continuità la classazione è obbligatoria.',
  },
];
