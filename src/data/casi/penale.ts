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
];
