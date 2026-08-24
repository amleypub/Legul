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
];
