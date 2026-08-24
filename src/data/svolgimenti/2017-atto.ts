import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * L'opposizione a decreto ingiuntivo è l'atto in cui i ruoli si
 * invertono: chi propone la domanda è convenuto in senso sostanziale, e
 * chi si difende è l'attore. Da questa inversione dipendono l'onere
 * della prova, il regime delle eccezioni e — questione che ha fatto
 * revocare decreti già definitivi — l'onere di promuovere la
 * mediazione.
 */
export const atto2017: Svolgimento = {
  tracciaId: '2017-atto',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'Quale atto e quali termini: l’opposizione ha un termine perentorio che non ammette rimessioni indulgenti.',
    'Chi è attore in senso sostanziale, e quali conseguenze ne discendono sull’onere della prova.',
    'Su chi grava l’onere di promuovere la mediazione nel giudizio di opposizione: è la trappola che ha fatto perdere cause vere.',
    'Come si articola la contestazione della mancata consegna della merce, che è cosa diversa dalla contestazione dei vizi.',
    'Come si coordinano le due difese — merce mai consegnata e comunque viziata — senza che si annullino a vicenda.',
    'Se e come chiedere la sospensione della provvisoria esecutorietà, e con quali argomenti.',
    'Quali domande riconvenzionali proporre e quali preclusioni si producono con l’atto introduttivo.',
  ],
  blocchi: [
    {
      id: 'atto-termini',
      titolo: 'L’atto e i termini',
      sintesi: 'Quaranta giorni, citazione, e un termine che non perdona.',
      paragrafi: [
        'L’opposizione si propone con atto di citazione davanti all’ufficio giudiziario al quale appartiene il giudice che ha emesso il decreto, entro quaranta giorni dalla notificazione del decreto stesso. Il termine è perentorio: decorso senza opposizione, il decreto diventa esecutivo e acquista efficacia di giudicato sostanziale.',
        'La forma è quella della citazione e non del ricorso, salvo che la controversia sia soggetta a un rito diverso: in tal caso vale il principio per cui l’opposizione va proposta nelle forme del rito applicabile alla causa. È una verifica da fare prima di scrivere, perché sbagliare forma espone a conseguenze che il mutamento del rito non sempre sana.',
        'Va rispettato il termine a comparire, che si computa a ritroso dall’udienza indicata, e vanno inseriti gli avvertimenti prescritti a pena di nullità. Va inoltre tenuto conto delle verifiche preliminari del giudice e del sistema di memorie introdotto dalla riforma del 2022, che concentra prima dell’udienza tutta l’attività di trattazione: chi ragiona ancora sull’udienza come momento di prima interlocuzione perde le finestre utili.',
        'L’iscrizione a ruolo è a carico dell’opponente e va eseguita nei termini, con il fascicolo che deve contenere copia del decreto opposto. È l’adempimento più banale e uno di quelli che, se mancato, chiude la partita prima di cominciarla.',
      ],
      riferimenti: [
        { testo: 'art. 641 c.p.c.', tipo: 'norma' },
        { testo: 'art. 645 c.p.c.', tipo: 'norma' },
        { testo: 'art. 647 c.p.c.', tipo: 'norma' },
        { testo: 'art. 165 c.p.c.', tipo: 'norma' },
        { testo: 'art. 171-bis c.p.c.', tipo: 'norma' },
      ],
    },
    {
      id: 'ruoli',
      titolo: 'Chi è attore, chi è convenuto',
      sintesi: 'L’opponente è convenuto sostanziale: l’onere della prova non si sposta.',
      paragrafi: [
        'L’opposizione non introduce un giudizio autonomo di impugnazione del decreto ma dà luogo a un ordinario giudizio di cognizione sul credito. L’opponente ha la veste formale di attore, ma è convenuto in senso sostanziale; l’opposto, formalmente convenuto, è attore sostanziale perché è colui che fa valere il credito.',
        'La conseguenza è precisa e va enunciata nell’atto senza timidezza: l’onere di provare i fatti costitutivi del credito resta a carico dell’opposto, che non può giovarsi della prova scritta che gli è servita per ottenere il decreto. Il decreto è provvedimento reso allo stato degli atti e in assenza di contraddittorio: nel giudizio di opposizione quella prova va confermata secondo le regole ordinarie.',
        'All’opponente spetta invece la prova dei fatti estintivi, modificativi o impeditivi che eccepisce: il pagamento, la compensazione, la prescrizione. È la ripartizione ordinaria, e va detta perché il primo argomento dell’opposto sarà quasi sempre che il decreto si fonda su fatture non contestate.',
        'Su questo punto conviene anticipare l’obiezione: le fatture sono documenti formati unilateralmente dal creditore e, contestate, non costituiscono prova del rapporto sottostante ma solo del fatto che sono state emesse. Il loro valore probatorio nella fase monitoria è il frutto della sommarietà di quella fase, non di una qualità intrinseca del documento.',
      ],
      riferimenti: [
        { testo: 'art. 2697 c.c.', tipo: 'norma' },
        { testo: 'art. 633 c.p.c.', tipo: 'norma' },
        { testo: 'art. 634 c.p.c.', tipo: 'norma' },
        { testo: 'art. 2710 c.c.', tipo: 'norma' },
      ],
    },
    {
      id: 'mediazione',
      titolo: 'Chi deve promuovere la mediazione',
      sintesi: 'La trappola: se tocca all’opposto e nessuno la promuove, il decreto viene revocato.',
      paragrafi: [
        'Nelle materie soggette a mediazione obbligatoria, il giudizio di opposizione a decreto ingiuntivo pone un problema che per anni ha diviso i tribunali: se l’onere di promuovere il procedimento gravi sull’opponente, che formalmente introduce il giudizio, o sull’opposto, che sostanzialmente fa valere il credito.',
        'Le Sezioni Unite hanno stabilito che l’onere grava sull’opposto, cioè sul creditore, e che l’inerzia comporta l’improcedibilità della domanda con conseguente revoca del decreto ingiuntivo. La soluzione è stata poi recepita dal legislatore, che ha introdotto una disposizione dedicata al rapporto fra mediazione e procedimento monitorio.',
        'La sequenza è precisa e va rispettata: il giudice decide prima sulle istanze di concessione o sospensione della provvisoria esecuzione, e solo dopo assegna il termine per promuovere la mediazione. L’ordine non è formale, perché la decisione sull’esecutorietà incide sui rapporti di forza nella trattativa.',
        'Per l’opponente questo significa che, se la materia rientra fra quelle a mediazione obbligatoria, non deve attivarsi lui — e anzi non gli conviene farlo, perché l’inerzia dell’opposto travolge il decreto. Va però verificata l’esatta materia del contendere, perché la fornitura di merce non rientra nell’elenco tassativo: nel caso della traccia la mediazione obbligatoria non opera, e sarebbe un errore invocarla.',
        'Resta da verificare la negoziazione assistita, condizione di procedibilità per le domande di pagamento di somme non superiori a cinquantamila euro, con l’esclusione dei rapporti fra professionisti e consumatori. Anche qui l’onere segue la logica sostanziale, e va segnalato nell’atto per non lasciare all’opposto il vantaggio dell’iniziativa.',
      ],
      riferimenti: [
        { testo: 'Cass. Sez. Un. n. 19596/2020', tipo: 'giurisprudenza' },
        { testo: 'art. 5-bis d.lgs. 28/2010', tipo: 'norma' },
        { testo: 'art. 5, comma 1-bis, d.lgs. 28/2010', tipo: 'norma' },
        { testo: 'art. 3 d.l. 132/2014', tipo: 'norma' },
      ],
    },
    {
      id: 'difese',
      titolo: 'Le due difese e il loro coordinamento',
      sintesi: 'Merce mai consegnata e merce viziata sono difese diverse: vanno graduate, non mescolate.',
      paragrafi: [
        'La traccia mette in bocca all’ingiunto due contestazioni: la merce non sarebbe mai stata consegnata e comunque sarebbe affetta da vizi tempestivamente denunciati. Sono difese logicamente incompatibili se affermate insieme sullo stesso piano, e vanno perciò graduate.',
        'La contestazione della mancata consegna è la difesa principale ed è una contestazione del fatto costitutivo: nega che il venditore abbia adempiuto. Non richiede prova a carico dell’opponente, perché è l’opposto a dover dimostrare la consegna. Va formulata come contestazione specifica, non generica, indicando quali documenti mancano — bolle sottoscritte, documenti di trasporto, riscontri di ricezione.',
        'La contestazione dei vizi è difesa subordinata, e presuppone che una consegna vi sia stata. Va introdotta espressamente in via subordinata, per l’ipotesi in cui il giudice ritenga provata la consegna, e va accompagnata dalla prova della tempestività della denuncia, che è onere dell’opponente.',
        'Sul piano sostanziale la difesa più efficace è l’eccezione di inadempimento: nei contratti a prestazioni corrispettive ciascun contraente può rifiutare di adempiere se l’altro non adempie o non offre di adempiere contemporaneamente. È eccezione in senso stretto, va proposta e non è rilevabile d’ufficio, e va calibrata sulla buona fede, perché il rifiuto sproporzionato rispetto all’inadempimento altrui non è tutelato.',
        'Vanno infine considerate le domande riconvenzionali: risoluzione del contratto, restituzione di quanto eventualmente versato, risarcimento del danno. Vanno proposte con l’atto di opposizione, perché il regime delle preclusioni non consente di recuperarle dopo.',
      ],
      riferimenti: [
        { testo: 'art. 1460 c.c.', tipo: 'norma' },
        { testo: 'art. 1218 c.c.', tipo: 'norma' },
        { testo: 'art. 1495 c.c.', tipo: 'norma' },
        { testo: 'art. 115 c.p.c.', tipo: 'norma' },
        { testo: 'art. 167 c.p.c.', tipo: 'norma' },
      ],
    },
    {
      id: 'sospensione',
      titolo: 'La sospensione della provvisoria esecutorietà',
      sintesi: 'Gravi motivi o pregiudizio grave: due presupposti alternativi, spesso confusi.',
      paragrafi: [
        'Se il decreto è stato emesso con clausola di provvisoria esecuzione, l’opponente può chiedere che l’esecuzione sia sospesa quando ricorrono gravi motivi ovvero quando la parte che ha chiesto l’ingiunzione non offre cauzione idonea. La norma è stata integrata per consentire la sospensione anche quando l’esecuzione arrechi grave e irreparabile pregiudizio.',
        'I due presupposti sono alternativi e vanno tenuti distinti. I gravi motivi attengono al fumus: la probabile fondatezza dell’opposizione, che nel caso della traccia si sostiene mostrando che il credito riposa su fatture contestate e che manca la prova della consegna. Il grave e irreparabile pregiudizio attiene invece al periculum e va documentato con dati sulla situazione dell’ingiunto, non affermato.',
        'L’istanza va formulata nell’atto di opposizione e riproposta all’udienza o con la memoria, perché sulla sospensione il giudice provvede nella prima udienza o comunque prima di assegnare il termine per la mediazione ove dovuta. Chi la scrive solo nelle conclusioni e non la illustra ottiene il rigetto per genericità.',
        'Se invece il decreto è stato emesso senza clausola, l’opposto chiederà la provvisoria esecuzione in corso di causa: conviene anticipare l’argomento contrario, che è la contestazione specifica del credito, perché la concessione presuppone che l’opposizione non sia fondata su prova scritta o di pronta soluzione.',
      ],
      riferimenti: [
        { testo: 'art. 649 c.p.c.', tipo: 'norma' },
        { testo: 'art. 648 c.p.c.', tipo: 'norma' },
        { testo: 'art. 642 c.p.c.', tipo: 'norma' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'onere-mediazione',
      questione:
        'Nel giudizio di opposizione a decreto ingiuntivo soggetto a mediazione obbligatoria, su chi grava l’onere di promuoverla?',
      orientamenti: [
        {
          tesi:
            'Sull’opponente, che è l’attore in senso formale e che introduce il giudizio di cognizione.',
          argomento:
            'La condizione di procedibilità riguarda la domanda giudiziale, e la domanda che introduce il giudizio a cognizione piena è quella dell’opponente. È lui che, non accettando il decreto, sceglie di aprire il processo: coerentemente, è lui a dover esperire il tentativo che la legge impone prima di adire il giudice.',
          riferimenti: [
            { testo: 'art. 5 d.lgs. 28/2010', tipo: 'norma' },
            { testo: 'art. 645 c.p.c.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'Sull’opposto, che è l’attore in senso sostanziale: la sua inerzia comporta l’improcedibilità e la revoca del decreto.',
          argomento:
            'La condizione di procedibilità si riferisce alla domanda di merito, cioè a quella con cui si fa valere il diritto di credito, e quella domanda è dell’opposto. Addossare l’onere all’opponente premierebbe l’inerzia del creditore, consentendogli di conservare un titolo ottenuto senza contraddittorio; la sanzione dell’improcedibilità colpisce perciò la domanda del creditore, con revoca del decreto.',
          riferimenti: [
            { testo: 'Cass. Sez. Un. n. 19596/2020', tipo: 'giurisprudenza' },
            { testo: 'art. 5-bis d.lgs. 28/2010', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Il secondo orientamento è quello affermato dalle Sezioni Unite e poi recepito dal legislatore, ma il contrasto conserva rilievo pratico perché la scelta difensiva ne dipende: se l’onere è dell’opposto, all’opponente conviene non attivarsi e limitarsi a rilevare l’improcedibilità. È una strategia che va però adottata con cognizione, verificando prima che la materia rientri davvero nell’elenco tassativo — e nel caso della traccia, che riguarda una fornitura di merce, non vi rientra.',
    },
    {
      id: 'valore-fatture',
      questione:
        'Le fatture prodotte per ottenere il decreto conservano valore probatorio nel giudizio di opposizione?',
      orientamenti: [
        {
          tesi:
            'Sì, quando estratte da scritture contabili regolarmente tenute fanno prova fra imprenditori nei rapporti inerenti all’esercizio dell’impresa.',
          argomento:
            'Il codice attribuisce ai libri e alle scritture contabili delle imprese soggette a registrazione un’efficacia probatoria contro l’imprenditore e, a determinate condizioni, anche a suo favore nei rapporti fra imprenditori. La fattura registrata non è quindi un documento qualunque: si inserisce in un sistema contabile obbligatorio la cui regolarità è presidiata da controlli esterni.',
          riferimenti: [
            { testo: 'art. 2710 c.c.', tipo: 'norma' },
            { testo: 'art. 634 c.p.c.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'No: la fattura è documento formato unilateralmente dal creditore e, se specificamente contestata, non prova il rapporto sottostante.',
          argomento:
            'Nel giudizio a cognizione piena si torna alle regole ordinarie sull’onere della prova, e nessuno può precostituirsi una prova a proprio favore. L’efficacia riconosciuta alle scritture contabili opera in via eccezionale e presuppone la regolarità della tenuta, che va dimostrata; contestata la consegna, la fattura prova che è stata emessa, non che la merce è arrivata.',
          riferimenti: [
            { testo: 'art. 2697 c.c.', tipo: 'norma' },
            { testo: 'art. 115 c.p.c.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'La difesa vive o muore sulla specificità della contestazione. Una contestazione generica lascia i fatti non contestati e quindi fuori dal thema probandum; una contestazione puntuale — quali forniture, quali date, quali documenti di trasporto mancano — costringe l’opposto a provare la consegna con mezzi diversi dalla fattura. Nell’atto vanno elencate le forniture una per una, non contestate in blocco.',
    },
  ],
  trappole: [
    'Sbagliare il termine di quaranta giorni o la sua decorrenza. È perentorio e la sua inosservanza rende il decreto definitivo, con esito che nessun argomento di merito recupera.',
    'Dimenticare l’iscrizione a ruolo nei termini con copia del decreto opposto. È l’adempimento più elementare e uno dei più frequentemente mancati.',
    'Contestare il credito in blocco. La contestazione generica lascia i fatti non contestati: vanno indicate le singole forniture, le date, i documenti mancanti.',
    'Affermare insieme che la merce non è mai arrivata e che era viziata. Sono difese incompatibili se poste sullo stesso piano: la seconda va proposta in via subordinata.',
    'Invocare la mediazione obbligatoria in una controversia da fornitura di merce. L’elenco è tassativo e non comprende la vendita: l’errore rivela che non lo si è consultato.',
    'Non proporre le domande riconvenzionali con l’atto di opposizione. Il regime delle preclusioni non consente di recuperarle in seguito.',
    'Chiedere la sospensione della provvisoria esecutorietà solo nelle conclusioni. Va illustrata, distinguendo i gravi motivi dal grave e irreparabile pregiudizio.',
  ],
  griglia: [
    {
      voce: 'Atto, termini, adempimenti introduttivi',
      peso: 20,
      criterio: 'Citazione entro quaranta giorni, termine a comparire, avvertimenti, iscrizione a ruolo.',
    },
    {
      voce: 'Inversione dei ruoli e onere della prova',
      peso: 20,
      criterio: 'Opponente convenuto sostanziale; onere del credito lasciato all’opposto ed enunciato.',
    },
    {
      voce: 'Condizioni di procedibilità',
      peso: 15,
      criterio: 'Verificata la materia; onere sull’opposto trattato senza invocare elenchi che non ricorrono.',
    },
    {
      voce: 'Contestazione specifica e coordinamento delle difese',
      peso: 20,
      criterio: 'Forniture contestate una per una; vizi in via subordinata; eccezione di inadempimento.',
    },
    {
      voce: 'Sospensione dell’esecutorietà',
      peso: 15,
      criterio: 'Presupposti alternativi distinti e argomentati, non solo richiamati.',
    },
    {
      voce: 'Riconvenzionali e conclusioni',
      peso: 10,
      criterio: 'Domande riconvenzionali proposte tempestivamente; conclusioni ordinate e complete.',
    },
  ],
};
