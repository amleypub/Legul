import type { CasoPratico } from './tipi';

export const casiPenale: CasoPratico[] = [
  {
    id: 'penale-furto-abitazione',
    materia: 'Diritto penale',
    titolo: 'Furto in abitazione e possesso della refurtiva',
    fatto: [
      'Il tuo assistito è stato fermato dai carabinieri a due isolati da una villetta in cui, poche ore prima, era stato commesso un furto: una finestra al piano terra era stata forzata e mancavano gioielli e contanti.',
      'Al momento del controllo aveva con sé un orologio poi riconosciuto dal proprietario e un cacciavite. Dichiara di avere acquistato l’orologio da uno sconosciuto per pochi euro e di non essere mai entrato nell’abitazione.',
      'La persona offesa non ha presentato querela: si è limitata a chiamare il numero di emergenza la sera stessa.',
    ],
    consegna:
      'Il candidato qualifichi il fatto, esamini i profili di procedibilità e le questioni processuali connesse alla situazione dell’assistito, indicando la linea difensiva.',
    scaletta: [
      {
        id: 'qualificazione',
        titolo: 'Furto in abitazione o ricettazione',
        dettaglio:
          'Vanno tenute distinte due ipotesi. Se si prova l’ingresso nell’abitazione, si versa nella fattispecie aggravata del furto in luogo di privata dimora. Se si prova solo il possesso, viene in rilievo la ricettazione, o l’incauto acquisto se manca la consapevolezza della provenienza delittuosa.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 624-bis c.p.', tipo: 'norma' },
          { testo: 'art. 648 c.p.', tipo: 'norma' },
          { testo: 'art. 712 c.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'possesso',
        titolo: 'Il valore indiziante del possesso della refurtiva',
        dettaglio:
          'Il possesso di cosa proveniente da delitto, non giustificato, è indizio che va valutato con i criteri della prova indiziaria e non basta da solo a dimostrare la sottrazione. La giustificazione fornita dall’imputato, se non implausibile, non può essere trattata come confessione implicita.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 192, comma 2, c.p.p.', tipo: 'norma' },
          { testo: 'art. 648 c.p.', tipo: 'norma' },
          { testo: 'art. 27, comma 2, Cost.', tipo: 'norma' },
        ],
      },
      {
        id: 'procedibilita',
        titolo: 'La procedibilità dopo la riforma Cartabia',
        dettaglio:
          'È il punto che decide il caso e su cui i testi meno aggiornati sbagliano. La riforma del 2022 ha reso procedibile a querela il furto semplice e diverse ipotesi aggravate, ma il furto in luogo di privata dimora è rimasto procedibile d’ufficio. L’assenza di querela non giova quindi all’assistito se la qualificazione resta quella.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 624-bis c.p.', tipo: 'norma' },
          { testo: 'art. 624 c.p.', tipo: 'norma' },
          { testo: 'd.lgs. 150/2022', tipo: 'norma' },
        ],
      },
      {
        id: 'precautelare',
        titolo: 'Fermo, arresto e flagranza',
        dettaglio:
          'Va verificato a quale titolo l’assistito sia stato privato della libertà e se ricorressero i presupposti: flagranza o quasi flagranza, presupposti dell’arresto facoltativo o obbligatorio, termini per la convalida. Un arresto fuori dai casi consentiti non è un dettaglio: si riflette sull’udienza di convalida.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 380 c.p.p.', tipo: 'norma' },
          { testo: 'art. 382 c.p.p.', tipo: 'norma' },
          { testo: 'art. 391 c.p.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'riti',
        titolo: 'Riti alternativi e conseguenze della qualificazione',
        dettaglio:
          'Va valutata la convenienza del giudizio abbreviato o dell’applicazione della pena su richiesta, tenendo conto che la qualificazione in ricettazione anziché in furto in abitazione cambia cornice edittale e prospettive. Vanno considerate anche le condotte riparatorie e la causa di non punibilità per particolare tenuità, ove compatibile.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 438 c.p.p.', tipo: 'norma' },
          { testo: 'art. 444 c.p.p.', tipo: 'norma' },
          { testo: 'art. 131-bis c.p.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'Se il fatto venisse riqualificato in furto semplice, l’assenza di querela che effetto produrrebbe? E la chiamata al numero di emergenza può valere come querela?',
      'Il cacciavite integra di per sé un reato autonomo?',
      'Che rapporto c’è fra ricettazione e incauto acquisto, e su quale elemento si gioca la distinzione?',
      'Se l’arresto fosse stato eseguito fuori dai casi consentiti, che cosa accadrebbe alle prove raccolte in quell’occasione?',
    ],
    insidie: [
      'Dare per scontato che l’assenza di querela chiuda la vicenda. Il furto in abitazione è rimasto procedibile d’ufficio dopo la riforma: è la trappola su cui il caso è costruito.',
      'Trattare il possesso della refurtiva come prova della sottrazione. È indizio, e va valutato con i criteri della prova indiziaria.',
      'Saltare il versante processuale della privazione della libertà. La commissione chiede espressamente sostanziale e processuale insieme.',
      'Proporre l’abbreviato senza aver prima ragionato sulla qualificazione. La convenienza del rito dipende dalla cornice edittale, che dipende dalla qualificazione.',
    ],
  },
  {
    id: 'penale-omicidio-stradale',
    materia: 'Diritto penale',
    titolo: 'Sinistro stradale con esito mortale',
    fatto: [
      'Il tuo assistito, alla guida della propria auto in ambito urbano, ha investito un pedone che attraversava fuori dalle strisce in orario serale; il pedone è deceduto in ospedale due giorni dopo.',
      'Gli accertamenti eseguiti in ospedale hanno rilevato nel conducente un tasso alcolemico di poco superiore alla soglia più bassa prevista dal codice della strada. Il conducente si è fermato, ha chiamato i soccorsi e ha assistito la vittima fino all’arrivo dell’ambulanza.',
      'La velocità tenuta è oggetto di contestazione: la polizia locale la stima superiore al limite sulla base della lunghezza delle tracce di frenata, la difesa ritiene il calcolo inattendibile.',
    ],
    consegna:
      'Il candidato individui le fattispecie configurabili, esamini le circostanze rilevanti e illustri le questioni processuali, con particolare riguardo agli accertamenti tecnici.',
    scaletta: [
      {
        id: 'fattispecie',
        titolo: 'Omicidio stradale e sue aggravanti',
        dettaglio:
          'Va inquadrata la fattispecie autonoma di omicidio stradale e individuata la fascia applicabile in ragione del tasso alcolemico accertato, distinguendo le soglie che il codice della strada prevede e le corrispondenti graduazioni di pena.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 589-bis c.p.', tipo: 'norma' },
          { testo: 'art. 186 d.lgs. 285/1992', tipo: 'norma' },
        ],
      },
      {
        id: 'causalita',
        titolo: 'Causalità della colpa e comportamento della vittima',
        dettaglio:
          'Non basta accertare la violazione della regola cautelare: occorre che l’evento sia concretizzazione del rischio che quella regola mirava a prevenire. L’attraversamento irregolare del pedone va valutato sul terreno della causalità e della prevedibilità, e può ridurre la pena secondo la specifica previsione dedicata al concorso del comportamento della vittima.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 43 c.p.', tipo: 'norma' },
          { testo: 'art. 589-bis, comma 7, c.p.', tipo: 'norma' },
          { testo: 'art. 41 c.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'circostanze',
        titolo: 'Circostanze attenuanti e condotta successiva',
        dettaglio:
          'La condotta dell’assistito — arresto sul posto, chiamata dei soccorsi, assistenza alla vittima — esclude le aggravanti connesse alla fuga e rileva per le attenuanti; va valutato il risarcimento del danno prima del giudizio, che apre a un’attenuante di rilievo.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 589-ter c.p.', tipo: 'norma' },
          { testo: 'art. 62, n. 6, c.p.', tipo: 'norma' },
          { testo: 'art. 62-bis c.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'alcoltest',
        titolo: 'L’accertamento del tasso alcolemico',
        dettaglio:
          'Il prelievo eseguito in ospedale segue una disciplina propria: va verificato se sia stato richiesto dalla polizia giudiziaria, se l’interessato fosse in condizione di prestare consenso e se sia stato dato l’avviso della facoltà di farsi assistere dal difensore, la cui omissione produce una nullità da eccepire tempestivamente.',
        peso: 25,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 186, comma 5, d.lgs. 285/1992', tipo: 'norma' },
          { testo: 'art. 354 c.p.p.', tipo: 'norma' },
          { testo: 'art. 114 disp. att. c.p.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'perizia',
        titolo: 'Ricostruzione del sinistro e incidente probatorio',
        dettaglio:
          'La velocità stimata dalle tracce di frenata va contestata con consulenza tecnica di parte; quando lo stato dei luoghi è destinato a modificarsi, la strada è l’incidente probatorio, che consente di formare la prova nel contraddittorio e non lasciarla all’accertamento unilaterale.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 392 c.p.p.', tipo: 'norma' },
          { testo: 'art. 359 c.p.p.', tipo: 'norma' },
          { testo: 'art. 360 c.p.p.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'Se il prelievo fosse stato eseguito senza l’avviso al difensore, che tipo di invalidità ne deriva e entro quando va eccepita?',
      'L’attraversamento irregolare del pedone può interrompere il nesso causale, o incide solo sulla pena?',
      'Che differenza c’è fra accertamento tecnico ripetibile e non ripetibile, e perché qui conta?',
      'Il risarcimento integrale alla famiglia prima del giudizio quali strade apre sul piano del trattamento?',
    ],
    insidie: [
      'Trattare l’omicidio stradale come un’aggravante dell’omicidio colposo. È fattispecie autonoma, con una struttura circostanziale propria.',
      'Fermarsi alla violazione della regola cautelare senza verificare che l’evento sia concretizzazione del rischio che quella regola voleva evitare.',
      'Non contestare l’accertamento alcolemico. È spesso il punto più fragile del fascicolo e un candidato che lo dà per acquisito ha rinunciato alla difesa migliore.',
      'Dimenticare l’incidente probatorio quando i luoghi cambiano. La prova tecnica formata unilateralmente resta e pesa per tutto il processo.',
    ],
  },
  {
    id: 'penale-maltrattamenti',
    materia: 'Diritto penale',
    titolo: 'Maltrattamenti in famiglia e tutela della persona offesa',
    fatto: [
      'Una donna si presenta in commissariato e riferisce che da circa due anni il convivente la umilia quotidianamente, le impedisce di lavorare, controlla le sue uscite e in tre occasioni l’ha afferrata per le braccia procurandole ecchimosi, refertate al pronto soccorso come guaribili in pochi giorni.',
      'La coppia ha una figlia di sei anni, che secondo il racconto ha assistito ad almeno due degli episodi. La donna riferisce di aver lasciato la casa la settimana precedente e di essersi trasferita da una sorella, e dichiara di temere per la propria incolumità.',
      'Ti viene chiesta assistenza dalla persona offesa, che ti domanda che cosa possa accadere nell’immediato e che ruolo avrà nel procedimento.',
    ],
    consegna:
      'Il candidato qualifichi i fatti, illustri le questioni di diritto sostanziale e processuale rilevanti e indichi gli strumenti di tutela attivabili nell’immediato.',
    scaletta: [
      {
        id: 'fattispecie',
        titolo: 'La fattispecie di maltrattamenti e il requisito dell’abitualità',
        dettaglio:
          'Il delitto è reato abituale proprio: non rileva il singolo episodio ma la condotta protratta che genera un regime di vita vessatorio. La norma copre anche la persona convivente, indipendentemente dal vincolo coniugale, e la cessazione della convivenza non esclude il reato per il periodo pregresso.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 572 c.p.', tipo: 'norma' },
          { testo: 'art. 572, comma 1, c.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'concorso',
        titolo: 'Rapporto con lesioni e con gli atti persecutori',
        dettaglio:
          'Le lesioni concorrono con i maltrattamenti quando integrano un autonomo evento lesivo. Il confine con gli atti persecutori si traccia sulla convivenza e sul rapporto attuale: cessata la convivenza e venuto meno il rapporto, le condotte successive possono integrare il diverso delitto di cui all’art. 612-bis c.p.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 582 c.p.', tipo: 'norma' },
          { testo: 'art. 612-bis c.p.', tipo: 'norma' },
          { testo: 'art. 81 c.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'aggravante',
        titolo: 'La violenza assistita come aggravante',
        dettaglio:
          'Il fatto commesso in presenza di un minore, o in suo danno, è espressamente aggravato. Va sottolineato che il minore che assiste è a sua volta persona offesa, con le conseguenze che ne derivano sulla notifica degli atti e sull’eventuale segnalazione al tribunale per i minorenni.',
        peso: 10,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 572, comma 2, c.p.', tipo: 'norma' },
          { testo: 'art. 61, n. 11-quinquies, c.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'codice-rosso',
        titolo: 'Le corsie accelerate introdotte dal codice rosso',
        dettaglio:
          'Acquisita la notizia di reato, il pubblico ministero deve assumere informazioni dalla persona offesa entro un termine breve fissato dalla legge, e la polizia giudiziaria riferisce senza ritardo. È la disciplina pensata proprio per evitare che il tempo fra denuncia e primo atto diventi il tempo in cui il rischio si concretizza.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 362, comma 1-ter, c.p.p.', tipo: 'norma' },
          { testo: 'art. 347, comma 3, c.p.p.', tipo: 'norma' },
          { testo: 'l. 69/2019', tipo: 'norma' },
        ],
      },
      {
        id: 'cautelari',
        titolo: 'Le misure cautelari a tutela della persona offesa',
        dettaglio:
          'Vanno illustrati l’allontanamento dalla casa familiare e il divieto di avvicinamento ai luoghi frequentati dalla persona offesa, con la possibilità di prescrivere modalità di controllo elettronico, e l’allontanamento d’urgenza disposto dalla polizia giudiziaria nei casi di flagranza con autorizzazione del pubblico ministero.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 282-bis c.p.p.', tipo: 'norma' },
          { testo: 'art. 282-ter c.p.p.', tipo: 'norma' },
          { testo: 'art. 384-bis c.p.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'incidente',
        titolo: 'Incidente probatorio e audizione protetta',
        dettaglio:
          'La prova dichiarativa della persona offesa e del minore può essere cristallizzata con incidente probatorio anche fuori dai casi ordinari, con modalità protette. È lo strumento che mette al riparo dal rischio di ritrattazione e dalla vittimizzazione secondaria dell’esame dibattimentale.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 392, comma 1-bis, c.p.p.', tipo: 'norma' },
          { testo: 'art. 398, comma 5-bis, c.p.p.', tipo: 'norma' },
          { testo: 'art. 90-quater c.p.p.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'La donna ha lasciato la casa. Il reato di maltrattamenti resta configurabile o le condotte successive vanno qualificate diversamente?',
      'Le lesioni refertate sono assorbite nei maltrattamenti o concorrono?',
      'Che ruolo ha la figlia di sei anni nel procedimento, oltre a quello di testimone?',
      'Se la persona offesa in dibattimento ritratta, che uso si può fare delle dichiarazioni rese in indagini?',
    ],
    insidie: [
      'Ragionare sui singoli episodi invece che sulla condotta abituale. Il reato non è la somma delle percosse: è il regime di vita che ne risulta.',
      'Confondere maltrattamenti e atti persecutori. Il discrimine è il rapporto attuale e la convivenza, e va detto con precisione perché la commissione lo chiede quasi sempre.',
      'Trattare la violenza assistita come una circostanza di contorno. Il minore che assiste è persona offesa, e questo cambia gli adempimenti.',
      'Fermarsi alla qualificazione senza dire che cosa si fa oggi per la cliente. Qui la parte utile della risposta sono le misure cautelari e l’incidente probatorio.',
    ],
  },
  {
    id: 'penale-legittima-difesa',
    materia: 'Diritto penale',
    titolo: 'Reazione a un’intrusione notturna nell’abitazione',
    fatto: [
      'Il tuo assistito, sessantenne, si sveglia nella notte per un rumore proveniente dal piano terra della propria villetta isolata. Scende con una pistola legalmente detenuta e trova due persone che stanno rovistando nel soggiorno dopo aver forzato una finestra.',
      'Alla vista dell’uomo i due si dirigono verso l’uscita. L’assistito esplode due colpi: il primo verso l’alto, il secondo attinge alla schiena uno degli intrusi, che riporta lesioni gravi. Il ferito viene rintracciato in ospedale poche ore dopo.',
      'L’assistito riferisce di aver agito nel panico, di aver temuto che i due fossero armati e di non ricordare con precisione la sequenza dei propri gesti.',
    ],
    consegna:
      'Il candidato qualifichi la condotta dell’assistito, illustri le questioni di diritto sostanziale e processuale rilevanti e indichi la linea difensiva.',
    scaletta: [
      {
        id: 'scriminante',
        titolo: 'I requisiti generali della legittima difesa',
        dettaglio:
          'Occorrono un’aggressione ingiusta e attuale a un diritto proprio o altrui, la necessità della reazione e la proporzione fra difesa e offesa. L’attualità è il requisito critico del caso: gli intrusi si stavano dirigendo verso l’uscita, e va affrontato di petto se il pericolo fosse ancora in corso.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 52, comma 1, c.p.', tipo: 'norma' },
          { testo: 'art. 59, comma 4, c.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'domiciliare',
        titolo: 'La difesa domiciliare e la presunzione di proporzionalità',
        dettaglio:
          'Nel domicilio e nei luoghi a esso equiparati la proporzione si presume quando si usa un’arma legittimamente detenuta per difendere l’incolumità propria o altrui, o i beni quando non vi sia desistenza e vi sia pericolo di aggressione. La riforma del 2019 ha aggiunto che agisce sempre in stato di difesa legittima chi respinge l’intrusione con violenza o minaccia di uso di armi.',
        peso: 25,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 52, commi 2 e 3, c.p.', tipo: 'norma' },
          { testo: 'art. 52, comma 4, c.p.', tipo: 'norma' },
          { testo: 'l. 36/2019', tipo: 'norma' },
        ],
      },
      {
        id: 'eccesso',
        titolo: 'L’eccesso colposo e la nuova causa di non punibilità',
        dettaglio:
          'Se i limiti della scriminante sono superati per colpa si risponde a titolo colposo. La riforma del 2019 ha però escluso la punibilità di chi ecceda trovandosi in stato di grave turbamento derivante dalla situazione di pericolo in atto: è la disposizione su cui si gioca il caso, e va distinta dalla scriminante putativa.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 55, comma 1, c.p.', tipo: 'norma' },
          { testo: 'art. 55, comma 2, c.p.', tipo: 'norma' },
          { testo: 'art. 590 c.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'indagini',
        titolo: 'La fase delle indagini e la qualificazione provvisoria',
        dettaglio:
          'L’iscrizione avverrà di regola per lesioni gravi o per tentato omicidio, e la qualificazione provvisoria condiziona termini e misure. Vanno curati subito il sopralluogo, il rilievo della posizione dei bossoli e delle tracce di effrazione, e la richiesta di accertamenti tecnici sulla traiettoria.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 335 c.p.p.', tipo: 'norma' },
          { testo: 'art. 391-bis c.p.p.', tipo: 'norma' },
          { testo: 'art. 360 c.p.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'archiviazione',
        titolo: 'La richiesta di archiviazione e l’opposizione della persona offesa',
        dettaglio:
          'Se la scriminante emerge già in indagini il pubblico ministero chiede l’archiviazione. La persona offesa che abbia dichiarato di volerne essere informata può opporsi, e il giudice fissa udienza in camera di consiglio: la difesa deve prepararsi a questo passaggio e non darlo per scontato.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 408 c.p.p.', tipo: 'norma' },
          { testo: 'art. 410 c.p.p.', tipo: 'norma' },
          { testo: 'art. 409 c.p.p.', tipo: 'norma' },
        ],
      },
      {
        id: 'civile',
        titolo: 'Il versante civile: costituzione di parte civile e indennità',
        dettaglio:
          'Va considerata l’eventuale costituzione di parte civile del ferito e la possibilità che, esclusa la punibilità per eccesso in stato di grave turbamento, resti un obbligo indennitario. Nel caso di legittima difesa piena non è invece dovuto alcun indennizzo.',
        peso: 10,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 76 c.p.p.', tipo: 'norma' },
          { testo: 'art. 2044 c.c.', tipo: 'norma' },
          { testo: 'art. 185 c.p.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'Gli intrusi si stavano dirigendo verso l’uscita. Il pericolo era ancora attuale?',
      'Che differenza c’è fra la causa di non punibilità per grave turbamento e la legittima difesa putativa?',
      'Il colpo alla schiena che peso ha nella ricostruzione? È un dato neutro o decisivo?',
      'Se il giudice esclude la punibilità per eccesso, il ferito resta senza alcuna tutela civile?',
    ],
    insidie: [
      'Dire che nel domicilio si può sempre sparare. La presunzione riguarda la proporzione, non l’attualità del pericolo né la necessità della reazione, che vanno comunque accertate.',
      'Confondere l’eccesso colposo scusato dal grave turbamento con la legittima difesa putativa. Sono istituti diversi con presupposti diversi, e scambiarli è l’errore più frequente sul tema.',
      'Sorvolare sulla direzione del colpo. La commissione ci arriva sempre, e una risposta che la ignora sembra costruita a tavolino.',
      'Trattare il caso come una questione solo sostanziale. La partita difensiva si gioca in indagini, sulla richiesta di archiviazione e sugli accertamenti tecnici.',
    ],
  },
];
