import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * L'atto di amministrativo si vince sui termini e sulla motivazione.
 *
 * Nel contenzioso sugli appalti il tempo è la prima variabile: trenta
 * giorni per impugnare, un'aggiudicazione già disposta, un contratto che
 * può essere stipulato. Chi imposta l'atto come un saggio sull'illecito
 * professionale grave e arriva alla cautelare in coda ha già perso il
 * pezzo che valeva di più.
 *
 * La traccia offre poi un appiglio che vale più di qualunque
 * ricostruzione dottrinale: l'esclusione dà atto del rinvio a giudizio ma
 * non dice perché quel fatto renda inaffidabile la società. È il vizio da
 * mettere per primo, perché tocca l'unico punto su cui il giudice
 * amministrativo può sindacare una valutazione discrezionale.
 */
export const attoAmministrativo2023: Svolgimento = {
  tracciaId: '2023-atto-amministrativo',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'Quale rimedio e davanti a quale giudice: la controversia sull’esclusione da una gara appartiene alla giurisdizione esclusiva del giudice amministrativo.',
    'Il termine di impugnazione, che negli appalti è dimezzato, e da quale momento decorre dopo il codice del 2023.',
    'Che cosa deve provare la stazione appaltante per escludere per illecito professionale grave: gli elementi sono tre e vanno tenuti distinti.',
    'Se un decreto che dispone il giudizio basti da solo, o se sia soltanto il mezzo di prova di un fatto che va comunque valutato.',
    'Quale sia l’onere motivazionale della stazione appaltante e dove passi il confine del sindacato del giudice sulla discrezionalità.',
    'Che rilievo abbiano le misure di self-cleaning dichiarate in gara e non esaminate nel provvedimento.',
    'Che cosa chiedere: annullamento, subentro, dichiarazione di inefficacia del contratto, risarcimento — e in quale ordine.',
    'La tutela cautelare: che cosa domandare e perché va chiesta contestualmente e non dopo.',
  ],
  blocchi: [
    {
      id: 'rimedio',
      titolo: 'Il rimedio, il giudice e i trenta giorni',
      sintesi: 'Ricorso al TAR in giurisdizione esclusiva, con un termine che è la metà di quello ordinario.',
      paragrafi: [
        'Le controversie relative alle procedure di affidamento di appalti pubblici sono devolute alla giurisdizione esclusiva del giudice amministrativo. La regola comprende i provvedimenti di esclusione e l’aggiudicazione, e vale anche quando la posizione dedotta abbia natura di diritto soggettivo: è la materia a radicare la giurisdizione, non la qualificazione della situazione giuridica. Il rimedio è quindi il ricorso al tribunale amministrativo regionale territorialmente competente.',
        'Il termine è quello dimezzato del rito degli appalti: trenta giorni, a pena di decadenza, invece dei sessanta ordinari. È il primo dato da fissare nell’atto, perché tutta la strategia difensiva ne discende: con trenta giorni non c’è spazio per attendere l’esito di un’istanza di autotutela o di un accesso ordinario, e chi lo fa arriva fuori termine.',
        'Sul dies a quo il codice dei contratti del 2023 ha cambiato l’impostazione: l’accesso agli atti di gara è ora contestuale alla comunicazione dell’aggiudicazione, e il termine decorre dal momento in cui l’operatore acquisisce o è messo in condizione di acquisire piena conoscenza degli atti. Il differimento resta possibile, ma soltanto quando parti dell’offerta siano state oscurate e l’oscuramento sia stato a sua volta impugnato: fuori da quell’ipotesi il termine corre.',
        'Vanno impugnati insieme il provvedimento di esclusione e l’aggiudicazione in favore della seconda classificata. Impugnare la sola esclusione lascerebbe in piedi l’atto che attribuisce la commessa ad altri, e l’eventuale annullamento resterebbe senza effetto pratico: è l’errore che trasforma una vittoria in una sentenza da incorniciare.',
        'Nell’intestazione vanno indicati come controinteressati l’aggiudicataria e, se del caso, gli altri concorrenti che dall’annullamento riceverebbero pregiudizio. La notifica ad almeno un controinteressato è condizione di ammissibilità, e negli appalti l’aggiudicataria è il controinteressato per eccellenza.',
      ],
      riferimenti: [
        { testo: 'art. 133, comma 1, lett. e), n. 1, c.p.a.', tipo: 'norma' },
        { testo: 'art. 120, comma 2, c.p.a.', tipo: 'norma' },
        { testo: 'art. 36 d.lgs. 36/2023', tipo: 'norma' },
        { testo: 'art. 41 c.p.a.', tipo: 'norma' },
      ],
    },
    {
      id: 'illecito',
      titolo: 'I tre elementi dell’illecito professionale grave',
      sintesi: 'Il fatto, la sua idoneità a incidere sull’affidabilità, e un mezzo di prova adeguato: servono tutti e tre.',
      paragrafi: [
        'L’illecito professionale grave è oggi disciplinato in modo analitico dal codice del 2023, che ha voluto reagire alla giurisprudenza formatasi sulla clausola aperta del codice precedente. La causa di esclusione presuppone la ricorrenza congiunta di tre elementi: elementi sufficienti a integrare l’illecito, l’idoneità di quell’illecito a incidere sull’affidabilità e sull’integrità dell’operatore, e adeguati mezzi di prova.',
        'La distinzione fra i tre elementi non è un esercizio classificatorio: è la struttura del motivo di ricorso. Un provvedimento che accerta il fatto ma non spiega perché esso incida sull’affidabilità ha dimostrato il primo elemento e ha taciuto il secondo, e la causa di esclusione non si perfeziona. È esattamente ciò che accade nella traccia, dove l’esclusione dà atto della pendenza del procedimento penale e si ferma lì.',
        'Il codice elenca poi i mezzi di prova che la stazione appaltante può utilizzare, fra i quali rientrano i provvedimenti del giudice penale anche non definitivi: il decreto che dispone il giudizio è un mezzo di prova adeguato. Va detto con chiarezza nell’atto, perché contestarne l’utilizzabilità in radice è una strada che porta a una sconfitta sicura e brucia credibilità sul resto.',
        'Il punto è un altro, e va isolato: un mezzo di prova prova un fatto, non sostituisce la valutazione. Che il fatto sia provato non dice ancora che quel fatto renda inaffidabile l’operatore, tanto più quando riguarda l’amministratore e non la società, e quando il procedimento penale è alle sue battute iniziali. Il salto dal mezzo di prova alla conseguenza escludente è il vizio da denunciare.',
        'Va infine ricordato che la valutazione riguarda l’operatore economico offerente, e che l’estensione a fatti riferibili ad altri soggetti opera solo nelle ipotesi che la norma prevede espressamente. Anche questo va verificato sul provvedimento: se l’esclusione muove da una condotta dell’amministratore, occorre che il collegamento con la società sia argomentato e non presupposto.',
      ],
      riferimenti: [
        { testo: 'art. 98 d.lgs. 36/2023', tipo: 'norma' },
        { testo: 'art. 98, comma 2, d.lgs. 36/2023', tipo: 'norma' },
        { testo: 'art. 98, comma 6, d.lgs. 36/2023', tipo: 'norma' },
        { testo: 'art. 95 d.lgs. 36/2023', tipo: 'norma' },
      ],
    },
    {
      id: 'motivazione',
      titolo: 'Motivazione e limiti del sindacato',
      sintesi: 'Sulla discrezionalità il giudice non sostituisce la propria valutazione: ma la motivazione apparente la può annullare.',
      paragrafi: [
        'La giurisprudenza amministrativa è ferma nel ritenere che la valutazione sull’illecito professionale grave sia rimessa alla discrezionalità della stazione appaltante, e che il giudice non possa sostituirvi la propria quando la valutazione sia stata effettivamente compiuta, presenti margini fisiologici di opinabilità e non risulti travisata né apparente. È il limite dentro cui il ricorso deve muoversi, e conviene enunciarlo per primi: mostra che si conosce il terreno e sposta il discorso dove si può vincere.',
        'Quel limite indica anche la via. Se il sindacato è precluso sulla valutazione compiuta, resta pieno sulla valutazione mancante: un provvedimento che non spiega perché il fatto incida sull’affidabilità non offre una valutazione opinabile ma nessuna valutazione, e ricade nel difetto di motivazione. La motivazione, del resto, è requisito generale di ogni provvedimento amministrativo e deve indicare i presupposti di fatto e le ragioni giuridiche della decisione.',
        'Nella traccia il difetto è duplice: manca la spiegazione dell’incidenza sull’affidabilità e manca ogni esame delle misure organizzative che la società aveva dichiarato. Sono due omissioni distinte e vanno dedotte come motivi separati, perché la seconda resiste anche se sul primo il giudice ritenesse la motivazione sufficiente.',
        'Il codice del 2023 disciplina espressamente le misure di self-cleaning: l’operatore che le abbia adottate e dimostrate non può essere escluso, e la stazione appaltante deve valutarle motivando. Un provvedimento che le ignora viola una regola procedimentale precisa, non un principio generale, e il motivo va scritto con quella norma davanti.',
        'Nella redazione conviene numerare i motivi e intitolarli, dando a ciascuno la propria rubrica: violazione dell’art. 98 sotto il profilo dell’idoneità del fatto a incidere sull’affidabilità; difetto di motivazione; omessa valutazione delle misure di self-cleaning. Un unico motivo omnibus costringe il giudice a spacchettarlo e regala alla difesa avversaria l’argomento della genericità.',
      ],
      riferimenti: [
        { testo: 'art. 3 l. 241/1990', tipo: 'norma' },
        { testo: 'art. 96 d.lgs. 36/2023', tipo: 'norma' },
        { testo: 'art. 21-octies l. 241/1990', tipo: 'norma' },
        { testo: 'Cons. Stato, sez. V, n. 7282/2025', tipo: 'giurisprudenza' },
      ],
    },
    {
      id: 'cautelare',
      titolo: 'La tutela cautelare e le domande finali',
      sintesi: 'Senza sospensiva il contratto si firma, e la partita si sposta sul risarcimento.',
      paragrafi: [
        'La domanda cautelare va proposta contestualmente al ricorso. Il presupposto è il pregiudizio grave e irreparabile durante il tempo necessario a giungere alla decisione sul merito, valutato insieme alla ragionevole probabilità di accoglimento del ricorso. Negli appalti il pregiudizio si argomenta con la perdita della commessa e con la stipula del contratto, che una volta avvenuta rende molto più difficile ottenere il subentro.',
        'Il periculum va scritto in concreto e con i numeri della vicenda: valore dell’appalto, incidenza sul fatturato, natura dei servizi, tempi di avvio dell’esecuzione. Una formula di stile sul pregiudizio grave e irreparabile è la ragione più comune per cui le sospensive si perdono.',
        'Sul versante delle conclusioni, il codice del processo consente di domandare il conseguimento dell’aggiudicazione e del contratto: se il ricorrente era primo in graduatoria, come nella traccia, la domanda di subentro è la sostanza dell’interesse azionato e va formulata espressamente. Chiedere il solo annullamento significa rimettere alla stazione appaltante che cosa fare dopo.',
        'Se il contratto è già stato stipulato entrano in gioco le norme sull’inefficacia: il giudice che annulla l’aggiudicazione dichiara l’inefficacia del contratto nei casi di violazioni gravi, e negli altri casi decide se dichiararla in relazione allo stato di esecuzione e alla possibilità di subentro. Vanno richiamate entrambe le disposizioni, perché la scelta dipende da circostanze che al momento del ricorso non sono ancora note.',
        'Le conclusioni si graduano così: annullamento dell’esclusione e dell’aggiudicazione; declaratoria di inefficacia del contratto eventualmente stipulato con subentro; in subordine, risarcimento del danno per equivalente. E in via cautelare, la sospensione degli atti impugnati con ogni misura idonea, compresa quella che inibisce la stipula.',
      ],
      riferimenti: [
        { testo: 'art. 55 c.p.a.', tipo: 'norma' },
        { testo: 'art. 124 c.p.a.', tipo: 'norma' },
        { testo: 'art. 121 c.p.a.', tipo: 'norma' },
        { testo: 'art. 122 c.p.a.', tipo: 'norma' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'automatismo',
      questione:
        'La pendenza di un procedimento penale per fatti commessi nell’esecuzione di un precedente contratto pubblico giustifica di per sé l’esclusione per illecito professionale grave?',
      orientamenti: [
        {
          tesi:
            'No: il provvedimento penale è mezzo di prova del fatto, ma l’esclusione richiede una valutazione autonoma sull’incidenza del fatto nell’affidabilità dell’operatore.',
          argomento:
            'La norma costruisce la causa di esclusione su tre elementi congiunti e colloca i provvedimenti del giudice penale fra i mezzi di prova, non fra i presupposti automatici. Leggere la pendenza del procedimento come causa di esclusione in sé significherebbe anticipare gli effetti di una condanna a un momento in cui vige la presunzione di non colpevolezza, e sovrapporre la causa di esclusione automatica per condanna definitiva con quella non automatica dell’illecito professionale, che il codice tiene distinte proprio perché la seconda richiede un giudizio.',
          riferimenti: [
            { testo: 'art. 98, comma 2, d.lgs. 36/2023', tipo: 'norma' },
            { testo: 'art. 94 d.lgs. 36/2023', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'Sì quando il fatto contestato attiene direttamente all’esecuzione di contratti pubblici, perché in quel caso l’incidenza sull’affidabilità è insita nella natura della condotta.',
          argomento:
            'La valutazione dell’affidabilità è rimessa alla discrezionalità della stazione appaltante e il giudice non può sostituirvisi. Quando la condotta contestata riguarda proprio il rapporto con una pubblica amministrazione committente, la connessione con l’affidabilità professionale non ha bisogno di essere costruita: emerge dal fatto stesso, e pretendere una motivazione ulteriore significa imporre una spiegazione dell’ovvio e spostare sul giudice una scelta che la legge affida all’amministrazione.',
          riferimenti: [
            { testo: 'art. 98, comma 6, d.lgs. 36/2023', tipo: 'norma' },
            { testo: 'TAR Campania, Napoli, n. 3744/2025', tipo: 'giurisprudenza' },
          ],
        },
      ],
      ricaduta:
        'Per l’atto la differenza è enorme e non va nascosta. Se si dà per scontato il primo orientamento e la commissione segue il secondo, il ricorso resta senza risposta sull’obiezione centrale. Conviene perciò dedurre in via principale il difetto di motivazione sull’incidenza — che regge sotto entrambe le letture, perché anche chi ammette la connessione naturale pretende che l’amministrazione dia conto di averla considerata — e solo in via subordinata contestare l’automatismo.',
    },
    {
      id: 'self-cleaning',
      questione:
        'L’omessa valutazione delle misure di self-cleaning dichiarate in gara determina l’illegittimità dell’esclusione anche quando le misure siano generiche?',
      orientamenti: [
        {
          tesi:
            'Sì: la valutazione è un passaggio procedimentale obbligatorio e la sua omissione vizia il provvedimento a prescindere dall’esito che avrebbe avuto.',
          argomento:
            'Il codice impone alla stazione appaltante di esaminare le misure e di motivare sulla loro sufficienza: è un onere che nasce dalla dichiarazione dell’operatore e non dalla sua fondatezza. Ammettere che l’amministrazione possa saltare l’esame quando le misure le appaiano generiche significa consentirle di decidere in anticipo l’esito di una valutazione che deve essere resa nel provvedimento e sottoposta al controllo del giudice.',
          riferimenti: [{ testo: 'art. 96 d.lgs. 36/2023', tipo: 'norma' }],
        },
        {
          tesi:
            'No quando le misure dichiarate siano manifestamente inidonee: in quel caso l’omessa valutazione è un vizio formale che non poteva condurre a un provvedimento diverso.',
          argomento:
            'La legge sul procedimento esclude l’annullabilità del provvedimento per violazione di norme sul procedimento quando sia palese che il contenuto non avrebbe potuto essere diverso. Se le misure si risolvono in enunciazioni di principio, la loro valutazione espressa avrebbe prodotto lo stesso esito, e annullare il provvedimento significherebbe imporre alla stazione appaltante di riscrivere la medesima decisione con qualche riga in più.',
          riferimenti: [{ testo: 'art. 21-octies, comma 2, l. 241/1990', tipo: 'norma' }],
        },
      ],
      ricaduta:
        'Chi scrive l’atto deve prevenire il secondo orientamento invece di ignorarlo: va perciò descritto nel ricorso il contenuto concreto delle misure adottate — modifiche degli assetti organizzativi, sostituzione delle persone coinvolte, risarcimenti eseguiti — così che l’amministrazione non possa sostenerne l’inidoneità manifesta. Un motivo che si limiti a lamentare l’omessa valutazione, senza dire che cosa c’era da valutare, offre alla difesa avversaria la via d’uscita più comoda.',
    },
  ],
  trappole: [
    'Impugnare la sola esclusione e lasciare in piedi l’aggiudicazione. L’annullamento resterebbe senza effetto pratico, e la seconda classificata continuerebbe a eseguire il contratto.',
    'Ragionare sul termine ordinario di sessanta giorni. Negli appalti il termine è di trenta giorni a pena di decadenza, ed è la prima cosa che il giudice verifica.',
    'Attendere l’esito di un’istanza di autotutela o di un accesso ordinario prima di ricorrere. Con trenta giorni non c’è margine, e l’istanza non sospende il termine.',
    'Contestare l’utilizzabilità del decreto che dispone il giudizio come mezzo di prova. È espressamente ammesso dal codice: il vizio sta nel salto dalla prova del fatto alla conseguenza escludente, non nella prova.',
    'Chiedere al giudice di sostituire la propria valutazione a quella della stazione appaltante. Il sindacato non arriva lì, e formulare il motivo così lo rende inammissibile prima ancora che infondato.',
    'Scrivere il periculum con una formula di stile. Senza i numeri dell’appalto e i tempi di esecuzione la sospensiva non si ottiene, e senza sospensiva il contratto si firma.',
    'Dimenticare la domanda di subentro. Se il ricorrente era primo in graduatoria è quella la sostanza dell’interesse: il solo annullamento rimette all’amministrazione che cosa fare dopo.',
    'Notificare solo alla stazione appaltante. L’aggiudicataria è controinteressata e la notifica ad almeno un controinteressato condiziona l’ammissibilità del ricorso.',
  ],
  griglia: [
    {
      voce: 'Rimedio, giurisdizione e termini',
      peso: 15,
      criterio:
        'Ricorso al TAR in giurisdizione esclusiva; termine di trenta giorni individuato e decorrenza argomentata.',
    },
    {
      voce: 'Atti impugnati e controinteressati',
      peso: 10,
      criterio: 'Esclusione e aggiudicazione impugnate insieme; aggiudicataria evocata in giudizio.',
    },
    {
      voce: 'Struttura dell’illecito professionale grave',
      peso: 20,
      criterio:
        'I tre elementi tenuti distinti; il mezzo di prova non confuso con la valutazione sull’affidabilità.',
    },
    {
      voce: 'Difetto di motivazione e limiti del sindacato',
      peso: 20,
      criterio:
        'Il limite del sindacato sulla discrezionalità enunciato, e il motivo costruito sulla valutazione mancante.',
    },
    {
      voce: 'Self-cleaning',
      peso: 10,
      criterio: 'Omessa valutazione dedotta come motivo autonomo, con il contenuto concreto delle misure.',
    },
    {
      voce: 'Tutela cautelare',
      peso: 10,
      criterio: 'Domanda proposta contestualmente; periculum argomentato con i dati della vicenda.',
    },
    {
      voce: 'Conclusioni graduate',
      peso: 10,
      criterio: 'Annullamento, subentro, inefficacia del contratto, risarcimento in ordine di subordinazione.',
    },
    {
      voce: 'Tecnica redazionale',
      peso: 5,
      criterio: 'Intestazione corretta, motivi rubricati e numerati, conclusioni ordinate.',
    },
  ],
};
