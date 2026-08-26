import type { CasoPratico } from './tipi';

export const casiAmministrativo: CasoPratico[] = [
  {
    id: 'ammin-esclusione-gara',
    materia: 'Diritto amministrativo',
    titolo: 'Esclusione da una gara per illecito professionale grave',
    fatto: [
      'La tua assistita è un’impresa di costruzioni esclusa da una procedura aperta per l’affidamento di lavori pubblici. La stazione appaltante ha motivato l’esclusione richiamando la risoluzione anticipata di un precedente contratto, disposta da un’altra amministrazione due anni prima e contestata in giudizio dall’impresa.',
      'Il provvedimento di esclusione è di poche righe: richiama la risoluzione e conclude per l’inaffidabilità dell’operatore, senza dare conto delle difese che l’impresa aveva presentato in gara né dell’esito del contenzioso pendente.',
      'L’aggiudicazione è già stata disposta a favore della seconda classificata e il contratto non è ancora stato stipulato.',
    ],
    consegna:
      'Il candidato individui i vizi del provvedimento, illustri il regime dell’esclusione per illecito professionale e indichi la via giurisdizionale, con i relativi termini e le tutele cautelari.',
    scaletta: [
      {
        id: 'presupposti',
        titolo: 'L’illecito professionale grave non è causa automatica di esclusione',
        dettaglio:
          'Il codice richiede la compresenza di più condizioni: elementi sufficienti a integrare l’illecito, idoneità dello stesso a incidere su affidabilità e integrità dell’operatore, e adeguati mezzi di prova. L’esclusione presuppone una valutazione, non l’automatica trasposizione di un fatto pregresso.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 98 d.lgs. 36/2023', tipo: 'norma' },
          { testo: 'art. 95, comma 1, lett. e), d.lgs. 36/2023', tipo: 'norma' },
        ],
      },
      {
        id: 'motivazione',
        titolo: 'Difetto di motivazione e di istruttoria',
        dettaglio:
          'Il provvedimento non dà conto delle difese presentate né della pendenza del contenzioso sulla risoluzione: sono i vizi da dedurre, perché la discrezionalità della stazione appaltante è sindacabile quando la motivazione è illogica, insufficiente o omette elementi rilevanti acquisiti al procedimento.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 3 l. 241/1990', tipo: 'norma' },
          { testo: 'art. 10 l. 241/1990', tipo: 'norma' },
          { testo: 'art. 2 d.lgs. 36/2023', tipo: 'norma' },
        ],
      },
      {
        id: 'contenzioso',
        titolo: 'Il fatto contestato in giudizio',
        dettaglio:
          'La risoluzione impugnata e non definitiva può essere valutata, ma la sua contestazione giudiziale è elemento che la stazione appaltante deve considerare e ponderare: trattarla come accertamento definitivo è errore di presupposto.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 98, comma 6, d.lgs. 36/2023', tipo: 'norma' },
          { testo: 'art. 96 d.lgs. 36/2023', tipo: 'norma' },
        ],
      },
      {
        id: 'rito',
        titolo: 'Il rito e i termini',
        dettaglio:
          'Giurisdizione esclusiva del giudice amministrativo, rito speciale in materia di contratti pubblici, termine di trenta giorni per il ricorso e dimezzamento dei termini processuali. Va individuato con precisione il dies a quo, che decorre dalla comunicazione del provvedimento.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 120 c.p.a.', tipo: 'norma' },
          { testo: 'art. 133, comma 1, lett. e), c.p.a.', tipo: 'norma' },
          { testo: 'art. 41 c.p.a.', tipo: 'norma' },
        ],
      },
      {
        id: 'cautelare',
        titolo: 'Tutela cautelare e sorte del contratto',
        dettaglio:
          'Va chiesta la sospensione dell’aggiudicazione, valutando il periculum in relazione all’imminente stipula. Se il contratto viene stipulato, entrano in gioco le norme sull’inefficacia e sul subentro, che vanno conosciute perché cambiano l’oggetto stesso della domanda.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 55 c.p.a.', tipo: 'norma' },
          { testo: 'art. 121 c.p.a.', tipo: 'norma' },
          { testo: 'art. 122 c.p.a.', tipo: 'norma' },
        ],
      },
      {
        id: 'accesso',
        titolo: 'Accesso agli atti e motivi aggiunti',
        dettaglio:
          'L’accesso in materia di contratti pubblici ha una disciplina propria e tempi rapidi; ciò che emerge dopo il ricorso si fa valere con motivi aggiunti. È il meccanismo che consente di non restare vincolati a quanto si conosceva al momento del deposito.',
        peso: 10,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 36 d.lgs. 36/2023', tipo: 'norma' },
          { testo: 'art. 43 c.p.a.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'Se la risoluzione precedente fosse stata annullata dopo l’esclusione, che strumenti avrebbe l’impresa?',
      'Fino a che punto il giudice amministrativo può sindacare la valutazione di affidabilità della stazione appaltante?',
      'Che differenza c’è fra le ipotesi in cui il contratto è dichiarato inefficace e quelle in cui resta efficace con risarcimento per equivalente?',
      'L’impresa può chiedere il risarcimento se non ottiene il subentro, e su quali presupposti?',
    ],
    insidie: [
      'Presentare l’illecito professionale grave come causa automatica di esclusione. Il codice richiede condizioni concorrenti e una valutazione motivata: è il cuore della difesa.',
      'Confondere il termine ordinario di sessanta giorni con quello di trenta previsto per i contratti pubblici. Sbagliare il termine significa un ricorso irricevibile.',
      'Dimenticare il dimezzamento dei termini processuali nel rito speciale.',
      'Non affrontare la sorte del contratto. Se viene stipulato, l’oggetto della domanda cambia e un candidato che si ferma all’annullamento non ha risolto il caso.',
    ],
  },
  {
    id: 'ammin-autotutela-permesso',
    materia: 'Diritto amministrativo',
    titolo: 'Annullamento in autotutela di un permesso di costruire',
    fatto: [
      'Al tuo assistito era stato rilasciato un permesso di costruire per l’ampliamento di un fabbricato. I lavori sono iniziati e sono a buon punto, con spese già sostenute per una parte rilevante dell’intervento.',
      'Ventidue mesi dopo il rilascio, il Comune ha annullato il permesso in autotutela, rilevando che l’intervento eccede l’indice di edificabilità previsto dallo strumento urbanistico. Il provvedimento non menziona l’avvio del procedimento, che in effetti non è stato comunicato.',
      'Non risulta che il permesso sia stato ottenuto sulla base di dichiarazioni non veritiere dell’interessato: l’errore di calcolo sull’indice fu commesso dagli uffici comunali.',
    ],
    consegna:
      'Il candidato esamini la legittimità dell’annullamento d’ufficio, individui i vizi deducibili e illustri i profili processuali, comprese le domande risarcitorie proponibili.',
    scaletta: [
      {
        id: 'termine',
        titolo: 'Il termine ragionevole per l’annullamento d’ufficio',
        dettaglio:
          'L’annullamento d’ufficio dei provvedimenti attributivi di vantaggi economici incontra un termine massimo, decorso il quale il potere si consuma. Va verificato quale sia il termine applicabile ratione temporis e se ricorra l’eccezione prevista per i provvedimenti conseguiti sulla base di false rappresentazioni: qui non ricorre, perché l’errore fu dell’amministrazione.',
        peso: 25,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 21-nonies l. 241/1990', tipo: 'norma' },
          { testo: 'art. 21-nonies, comma 2-bis, l. 241/1990', tipo: 'norma' },
        ],
      },
      {
        id: 'interesse',
        titolo: 'Interesse pubblico attuale e affidamento',
        dettaglio:
          'L’annullamento richiede la sussistenza di ragioni di interesse pubblico ulteriori rispetto al mero ripristino della legalità, e la comparazione con l’interesse del destinatario. Un affidamento consolidato da lavori avviati e spese sostenute pesa in quella comparazione e va allegato in fatto, non evocato.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 21-nonies, comma 1, l. 241/1990', tipo: 'norma' },
          { testo: 'art. 1 l. 241/1990', tipo: 'norma' },
        ],
      },
      {
        id: 'partecipazione',
        titolo: 'La mancata comunicazione di avvio del procedimento',
        dettaglio:
          'L’omessa comunicazione è vizio del procedimento; va però affrontata la disciplina sull’annullabilità per vizi formali, che esclude l’annullamento quando il contenuto del provvedimento non avrebbe potuto essere diverso. Qui l’argomento contrario è che il procedimento è discrezionale, e la partecipazione avrebbe potuto incidere sulla comparazione degli interessi.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 7 l. 241/1990', tipo: 'norma' },
          { testo: 'art. 21-octies, comma 2, l. 241/1990', tipo: 'norma' },
        ],
      },
      {
        id: 'giurisdizione',
        titolo: 'Giurisdizione, termini, sospensione',
        dettaglio:
          'Giurisdizione del giudice amministrativo, azione di annullamento entro sessanta giorni dalla notificazione o piena conoscenza, con domanda cautelare di sospensione motivata sul pregiudizio derivante dall’arresto del cantiere.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 29 c.p.a.', tipo: 'norma' },
          { testo: 'art. 41 c.p.a.', tipo: 'norma' },
          { testo: 'art. 55 c.p.a.', tipo: 'norma' },
        ],
      },
      {
        id: 'risarcimento',
        titolo: 'Il danno da affidamento',
        dettaglio:
          'Va distinta la domanda di annullamento da quella risarcitoria, proponibile anche autonomamente entro il termine di decadenza previsto dal codice. Il danno da lesione dell’affidamento incolpevole riguarda le spese sostenute confidando nella legittimità del titolo, e il suo inquadramento è oggetto di discussione.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 30 c.p.a.', tipo: 'norma' },
          { testo: 'art. 7 c.p.a.', tipo: 'norma' },
          { testo: 'art. 1337 c.c.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'Se il permesso fosse stato ottenuto con dichiarazioni non veritiere dell’interessato, che cosa cambierebbe sul termine?',
      'La mancata comunicazione di avvio è sempre causa di annullamento, o incontra il limite dei vizi formali?',
      'A quale giudice spetta la domanda di risarcimento per lesione dell’affidamento, e perché la questione è stata discussa?',
      'Il privato può chiedere il risarcimento senza avere impugnato l’annullamento?',
    ],
    insidie: [
      'Dire che l’amministrazione può sempre annullare un atto illegittimo. Il potere di autotutela è discrezionale, richiede un interesse pubblico attuale e incontra un termine massimo.',
      'Non verificare se ricorra l’eccezione delle false rappresentazioni. Qui non ricorre, e dirlo espressamente mostra che si è letto il fatto invece di applicare uno schema.',
      'Dedurre la mancata comunicazione di avvio senza affrontare la norma sui vizi formali. La commissione ci arriva subito e il candidato deve arrivarci prima.',
      'Trattare il risarcimento come un accessorio dell’annullamento. È domanda autonoma, con un proprio termine, e nel caso concreto può essere l’unica utile se i lavori vanno comunque demoliti.',
    ],
  },
  {
    id: 'ammin-silenzio-ritardo',
    materia: 'Diritto amministrativo',
    titolo: 'Silenzio sull’istanza e danno da ritardo',
    fatto: [
      'La tua assistita, titolare di un’impresa artigiana, ha presentato al Comune un’istanza di autorizzazione necessaria per avviare una nuova linea produttiva, allegando la documentazione richiesta dal regolamento comunale.',
      'Sono trascorsi undici mesi. L’ufficio non ha adottato alcun provvedimento, non ha comunicato motivi ostativi e non ha richiesto integrazioni; a due solleciti scritti ha risposto verbalmente che la pratica è in istruttoria.',
      'Nel frattempo l’impresa ha perso una commessa che era subordinata all’avvio della linea entro una certa data, e ha sostenuto i canoni di locazione di un capannone rimasto inutilizzato.',
    ],
    consegna:
      'Il candidato individui i rimedi esperibili, illustri le questioni di diritto sostanziale e processuale rilevanti e indichi la via giudiziale più conveniente.',
    scaletta: [
      {
        id: 'obbligo',
        titolo: 'L’obbligo di provvedere e il termine del procedimento',
        dettaglio:
          'Ove il procedimento consegua obbligatoriamente a un’istanza, l’amministrazione ha il dovere di concluderlo con un provvedimento espresso entro il termine previsto, decorrente dal ricevimento della domanda. Il dovere sussiste anche quando l’esito sia negativo: il silenzio non è mai una risposta legittima.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 2, comma 1, l. 241/1990', tipo: 'norma' },
          { testo: 'art. 2, comma 2, l. 241/1990', tipo: 'norma' },
          { testo: 'art. 97 Cost.', tipo: 'norma' },
        ],
      },
      {
        id: 'qualificazione',
        titolo: 'Silenzio-inadempimento, silenzio-assenso e silenzio significativo',
        dettaglio:
          'Va accertato in via preliminare se la materia rientri fra quelle in cui il decorso del termine equivale ad accoglimento: in tal caso il rimedio non è il ricorso avverso il silenzio ma la richiesta di attestazione. Solo dove il silenzio è mero inadempimento si apre la via dell’art. 31 c.p.a.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 20 l. 241/1990', tipo: 'norma' },
          { testo: 'art. 19 l. 241/1990', tipo: 'norma' },
          { testo: 'art. 2, comma 8-bis, l. 241/1990', tipo: 'norma' },
        ],
      },
      {
        id: 'danno',
        titolo: 'Il danno da ritardo e i suoi presupposti',
        dettaglio:
          'L’inosservanza dolosa o colposa del termine obbliga al risarcimento del danno ingiusto. Non basta il ritardo in sé: vanno provati la spettanza del bene della vita o comunque la lesione, l’elemento soggettivo, il nesso causale e il danno nella sua concreta consistenza, qui la commessa perduta e i canoni sostenuti.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 2-bis, comma 1, l. 241/1990', tipo: 'norma' },
          { testo: 'art. 30, comma 4, c.p.a.', tipo: 'norma' },
          { testo: 'art. 1223 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'rito',
        titolo: 'L’azione avverso il silenzio e il rito camerale',
        dettaglio:
          'L’azione si propone finché perdura l’inadempimento e comunque non oltre un anno dalla scadenza del termine, con rito camerale e termini dimezzati. La domanda risarcitoria può essere proposta congiuntamente, e in tal caso il giudice può definire con rito camerale l’azione sul silenzio e disporre il passaggio al rito ordinario per il risarcimento.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 31, commi 1 e 2, c.p.a.', tipo: 'norma' },
          { testo: 'art. 117 c.p.a.', tipo: 'norma' },
          { testo: 'art. 87, comma 2, c.p.a.', tipo: 'norma' },
        ],
      },
      {
        id: 'commissario',
        titolo: 'La nomina del commissario ad acta',
        dettaglio:
          'Accolto il ricorso, il giudice ordina all’amministrazione di provvedere entro un termine e può nominare fin da subito un commissario ad acta, oppure nominarlo su istanza in caso di ulteriore inerzia. È il passaggio che rende il rimedio effettivo invece che dichiarativo.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 117, comma 3, c.p.a.', tipo: 'norma' },
          { testo: 'art. 114, comma 4, c.p.a.', tipo: 'norma' },
        ],
      },
      {
        id: 'cognizione',
        titolo: 'I limiti della cognizione sul rapporto',
        dettaglio:
          'Il giudice può pronunciare sulla fondatezza della pretesa solo quando si tratti di attività vincolata o quando risulti che non residuano margini di discrezionalità e non siano necessari adempimenti istruttori riservati all’amministrazione. Fuori da questi casi l’ordine è di provvedere, non di provvedere in un certo senso.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 31, comma 3, c.p.a.', tipo: 'norma' },
          { testo: 'art. 34, comma 2, c.p.a.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'Come si stabilisce se in questa materia il silenzio vale assenso o inadempimento? E se valesse assenso, che cosa cambierebbe nella strategia?',
      'Il ricorso avverso il silenzio è soggetto a un termine di decadenza? Da quando decorre?',
      'Il giudice può dire al Comune che l’autorizzazione va rilasciata, o solo che va risposto?',
      'Per il danno da ritardo basta provare che il termine è scaduto?',
    ],
    insidie: [
      'Andare diritti al ricorso senza qualificare il silenzio. Se la materia è a silenzio-assenso il ricorso è inammissibile, e l’errore si vede subito.',
      'Presentare il danno da ritardo come automatico. È un danno da provare in tutti i suoi elementi, e la giurisprudenza è restrittiva sull’elemento soggettivo.',
      'Dimenticare il commissario ad acta. Senza, la sentenza rischia di produrre solo un secondo silenzio.',
      'Chiedere al giudice di sostituirsi all’amministrazione in una valutazione discrezionale. È il limite dell’art. 31, comma 3, e va detto prima che lo chieda la commissione.',
    ],
  },
  {
    id: 'ammin-occupazione-senza-titolo',
    materia: 'Diritto amministrativo',
    titolo: 'Terreno occupato senza decreto di esproprio',
    fatto: [
      'Un Comune ha occupato d’urgenza un terreno del tuo assistito per realizzarvi una strada di collegamento, sulla base di una dichiarazione di pubblica utilità e di un decreto di occupazione temporanea. L’opera è stata completata e la strada è aperta al traffico da diversi anni.',
      'Il decreto di esproprio non è mai stato emesso e i termini dell’occupazione sono scaduti. Il proprietario risulta ancora intestatario catastale del bene e continua a ricevere gli avvisi di pagamento dei tributi locali.',
      'L’assistito ha inviato al Comune una diffida chiedendo la restituzione del fondo o, in alternativa, l’adozione di un provvedimento che ne regolarizzi la situazione. Il Comune non ha risposto.',
    ],
    consegna:
      'Il candidato individui i rimedi esperibili, illustri le questioni di diritto sostanziale e processuale rilevanti e indichi la via giudiziale più conveniente.',
    scaletta: [
      {
        id: 'illecito',
        titolo: 'L’occupazione sine titulo come illecito permanente',
        dettaglio:
          'Scaduti i termini senza decreto di esproprio, l’amministrazione detiene il bene senza titolo. La trasformazione irreversibile del fondo non fa acquistare la proprietà: l’occupazione appropriativa e quella usurpativa, di creazione pretoria, sono state superate perché contrarie alla Convenzione europea, e l’illecito è permanente finché dura.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 42 Cost.', tipo: 'norma' },
          { testo: 'art. 1 Prot. n. 1 CEDU', tipo: 'norma' },
          { testo: 'Cons. Stato, ad. plen., n. 2/2020', tipo: 'giurisprudenza' },
        ],
      },
      {
        id: 'acquisizione',
        titolo: 'L’acquisizione sanante e i suoi presupposti',
        dettaglio:
          'L’amministrazione può acquisire il bene al proprio patrimonio indisponibile con provvedimento espresso, valutando le attuali ed eccezionali ragioni di interesse pubblico, l’assenza di ragionevoli alternative e con motivazione rafforzata. È dovuto un indennizzo per il pregiudizio patrimoniale e non patrimoniale, oltre all’interesse per il periodo di occupazione senza titolo.',
        peso: 25,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 42-bis d.P.R. 327/2001', tipo: 'norma' },
          { testo: 'Corte cost., n. 71/2015', tipo: 'giurisprudenza' },
          { testo: 'Cons. Stato, ad. plen., n. 5/2020', tipo: 'giurisprudenza' },
        ],
      },
      {
        id: 'rinuncia',
        titolo: 'L’inammissibilità della rinuncia abdicativa',
        dettaglio:
          'Non è configurabile un acquisto della proprietà per effetto di una rinuncia implicita del privato che si limiti a chiedere il risarcimento del valore del bene: l’Adunanza plenaria l’ha escluso, perché l’ordinamento conosce un solo modo di regolarizzare l’occupazione, ed è il provvedimento espresso.',
        peso: 10,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'Cons. Stato, ad. plen., n. 2/2020', tipo: 'giurisprudenza' },
          { testo: 'art. 1350 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'giurisdizione',
        titolo: 'Il riparto di giurisdizione',
        dettaglio:
          'Le controversie in materia di espropriazione sono devolute alla giurisdizione esclusiva del giudice amministrativo, salvo quelle sulla determinazione e corresponsione delle indennità. Restano al giudice ordinario i comportamenti non riconducibili nemmeno mediatamente all’esercizio del potere: qui il collegamento con la dichiarazione di pubblica utilità c’è, e radica la giurisdizione amministrativa.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 133, comma 1, lett. g), c.p.a.', tipo: 'norma' },
          { testo: 'art. 53 d.P.R. 327/2001', tipo: 'norma' },
          { testo: 'Corte cost., n. 191/2006', tipo: 'giurisprudenza' },
        ],
      },
      {
        id: 'azioni',
        titolo: 'Le azioni esperibili e il silenzio sull’istanza',
        dettaglio:
          'Si può chiedere la restituzione previa riduzione in pristino, il risarcimento del danno da occupazione, oppure agire contro il silenzio serbato sull’istanza di provvedere ai sensi dell’art. 42-bis. Quest’ultima è spesso la via più efficace, perché costringe l’amministrazione a scegliere invece di lasciare la situazione sospesa.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 31 c.p.a.', tipo: 'norma' },
          { testo: 'art. 30 c.p.a.', tipo: 'norma' },
          { testo: 'art. 34, comma 1, lett. c), c.p.a.', tipo: 'norma' },
        ],
      },
      {
        id: 'prescrizione',
        titolo: 'Prescrizione e permanenza dell’illecito',
        dettaglio:
          'Trattandosi di illecito permanente, la prescrizione del diritto al risarcimento non decorre finché la situazione antigiuridica perdura, e matura giorno per giorno per i danni già prodotti. È l’argomento che neutralizza l’eccezione con cui l’amministrazione oppone il tempo trascorso dall’apertura della strada.',
        peso: 10,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 2947 c.c.', tipo: 'norma' },
          { testo: 'art. 2935 c.c.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'La strada è stata realizzata e funziona da anni. Il Comune ne ha acquistato la proprietà per effetto della trasformazione del fondo?',
      'Se il proprietario chiede solo il risarcimento del valore del bene, l’amministrazione ne diventa proprietaria?',
      'Perché la giurisdizione è del giudice amministrativo e non del giudice ordinario?',
      'Il Comune eccepisce la prescrizione, contando dall’apertura della strada. Che cosa si risponde?',
    ],
    insidie: [
      'Ragionare ancora in termini di accessione invertita. È una costruzione superata e censurata a Strasburgo: continuare a usarla segnala una preparazione ferma a vent’anni fa.',
      'Presentare l’art. 42-bis come un atto dovuto. È un potere discrezionale che richiede motivazione rafforzata sulle attuali ed eccezionali ragioni di interesse pubblico.',
      'Dimenticare che il proprietario continua a pagare i tributi sul bene. È un dato di fatto che pesa nella quantificazione e che la commissione apprezza sentirsi dire.',
      'Fermarsi alla domanda risarcitoria senza considerare il ricorso avverso il silenzio. È la mossa che sblocca davvero la situazione.',
    ],
  },
];
