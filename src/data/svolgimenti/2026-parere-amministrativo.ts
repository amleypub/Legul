import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * Il parere di amministrativo si gioca su una data.
 *
 * La traccia sembra chiedere se l'opera sia abusiva: distanze, altezze,
 * regolamento edilizio. Non è quella la domanda. Il fatto decisivo è che
 * l'esposto arriva il 5 maggio a fronte di una segnalazione presentata
 * il 10 marzo, e cioè dopo la scadenza del termine perentorio entro cui
 * il Comune poteva inibire i lavori con il potere ordinario.
 *
 * Da lì in poi tutto cambia: il potere che resta non è più lo stesso, ha
 * presupposti più stretti, e il rimedio del terzo non è l'impugnazione
 * di un provvedimento — che non esiste — ma l'azione contro il silenzio.
 * Chi imposta il parere come una consulenza urbanistica e arriva ai
 * termini in fondo ha già mancato il punto su cui il parere si valuta.
 *
 * È anche il motivo per cui questo esercizio esiste: dopo il d.l.
 * 100/2026 il parere può essere scelto in diritto amministrativo, e una
 * prova del genere non è mai stata assegnata. Chi porta quella
 * combinazione non ha nulla di storico su cui allenarsi.
 */
export const parereAmministrativo2026: Svolgimento = {
  tracciaId: '2026-parere-amministrativo',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'Che cosa sia giuridicamente una segnalazione certificata di inizio attività: se un provvedimento tacito o un atto del privato, perché da qui dipende tutto il resto.',
    'Entro quale termine il Comune poteva inibire i lavori con il potere ordinario, e se quel termine sia perentorio o ordinatorio.',
    'Quale potere residui all’amministrazione dopo la scadenza del termine, e a quali condizioni più stringenti sia sottoposto.',
    'Se Tizio potesse impugnare la segnalazione, e perché la risposta sia negativa nonostante l’interesse sia evidente.',
    'Quale sia il rimedio effettivamente esperibile dal terzo e davanti a quale giudice vada proposto.',
    'Entro quale termine vada esercitato quel rimedio e da quale momento decorra, considerato che l’esposto è del 5 maggio.',
    'Se il giudice possa ordinare al Comune non solo di provvedere, ma di provvedere in un determinato senso.',
    'Quali rimedi restino a Tizio sul piano civile, indipendentemente dall’esito del percorso amministrativo.',
  ],
  blocchi: [
    {
      id: 'natura',
      titolo: 'Che cos’è la segnalazione, e perché non si impugna',
      sintesi:
        'Non è un provvedimento tacito ma un atto del privato: manca l’oggetto stesso dell’impugnazione.',
      paragrafi: [
        'La segnalazione certificata di inizio attività è un atto del privato che sostituisce il titolo abilitativo e consente di avviare l’attività dalla data della presentazione. Non promana dall’amministrazione, non contiene alcuna manifestazione di volontà provvedimentale e non è il frutto di un silenzio qualificato: è una dichiarazione che libera l’attività per effetto diretto della legge, sottoponendola a un controllo successivo. Confonderla con il silenzio-assenso è l’errore da cui discendono tutti gli altri, perché nel silenzio-assenso esiste un provvedimento sia pure tacito, qui no.',
        'La conseguenza processuale è netta e la legge la enuncia espressamente: la segnalazione non costituisce provvedimento tacito direttamente impugnabile. Il terzo che se ne dolga non può quindi proporre un’azione di annullamento, per la ragione elementare che manca l’atto da annullare. È un punto che va affermato subito nel parere, perché è la prima cosa che il cliente chiede — «possiamo impugnarla?» — e la risposta è no, ma non per difetto di interesse.',
        'La questione è stata a lungo controversa, e il legislatore è intervenuto proprio per chiuderla dopo che l’Adunanza plenaria aveva costruito in via pretoria la tutela del terzo. Ricostruire questo passaggio nel parere non è erudizione: serve a spiegare al cliente perché la via che gli sembra ovvia è preclusa, e a mostrare alla commissione di conoscere il perché della regola e non solo la regola.',
      ],
      riferimenti: [
        { testo: 'art. 19, comma 1, l. 241/1990', tipo: 'norma' },
        { testo: 'art. 19, comma 6-ter, l. 241/1990', tipo: 'norma' },
        { testo: 'Cons. Stato, ad. plen., n. 15/2011', tipo: 'giurisprudenza' },
      ],
    },
    {
      id: 'termini',
      titolo: 'I trenta giorni, e che cosa resta dopo',
      sintesi:
        'Il termine per il potere inibitorio ordinario è perentorio: scaduto, il potere cambia natura.',
      paragrafi: [
        'L’amministrazione dispone di un termine per verificare i presupposti e, in mancanza, adottare i provvedimenti che vietano la prosecuzione dell’attività. Il termine generale è di sessanta giorni, ma in materia edilizia è ridotto a trenta, e decorre dal ricevimento della segnalazione. Nel caso in esame la segnalazione è del 10 marzo: il termine per l’esercizio del potere ordinario era dunque già ampiamente decorso quando Tizio ha presentato l’esposto il 5 maggio.',
        'Il carattere perentorio del termine è il punto che regge l’intero parere. Non si tratta di un termine acceleratorio la cui violazione produca soltanto responsabilità del funzionario: alla sua scadenza il potere inibitorio ordinario si consuma, e un provvedimento adottato dopo, sulla base del solo comma 3, è inefficace. La giurisprudenza amministrativa è consolidata nel senso della perentorietà, e ha annullato provvedimenti inibitori tardivi proprio per questa ragione.',
        'Ciò non significa che l’amministrazione resti disarmata. La legge fa salvo il potere di intervenire successivamente, ma lo àncora ai presupposti dell’annullamento d’ufficio: occorrono le ragioni di interesse pubblico, la valutazione degli interessi dei destinatari e dei controinteressati, e il rispetto del termine ragionevole che la legge quantifica in dodici mesi. È un potere diverso, discrezionale e non doveroso, e nel parere va tenuto rigorosamente distinto dal primo.',
      ],
      riferimenti: [
        { testo: 'art. 19, comma 3, l. 241/1990', tipo: 'norma' },
        { testo: 'art. 19, comma 6-bis, l. 241/1990', tipo: 'norma' },
        { testo: 'art. 19, comma 4, l. 241/1990', tipo: 'norma' },
        { testo: 'art. 21-nonies l. 241/1990', tipo: 'norma' },
      ],
    },
    {
      id: 'rimedio',
      titolo: 'Il rimedio del terzo: sollecitazione e azione sul silenzio',
      sintesi:
        'Non impugnazione ma istanza all’amministrazione e, in caso di inerzia, ricorso ex art. 31 c.p.a.',
      paragrafi: [
        'La legge indica al terzo un percorso obbligato: sollecitare l’esercizio delle verifiche spettanti all’amministrazione e, in caso di inerzia, esperire esclusivamente l’azione avverso il silenzio. L’esposto del 5 maggio è dunque l’atto giusto, e ha attivato il dovere del Comune di pronunciarsi su di esso. Il silenzio serbato non è un diniego implicito impugnabile: è inadempimento, e come tale va aggredito.',
        'L’azione si propone davanti al tribunale amministrativo regionale, con il rito camerale a termini dimezzati, finché perdura l’inadempimento e comunque non oltre un anno dalla scadenza del termine per provvedere sull’istanza. Nel caso in esame il termine è ampiamente aperto, ma il parere deve dirlo con precisione, perché il cliente ha bisogno di sapere entro quando muoversi e l’avvocato di non trovarsi decaduto.',
        'Accolto il ricorso, il giudice ordina al Comune di provvedere entro un termine e può nominare un commissario ad acta, subito o su successiva istanza in caso di ulteriore inerzia. È il passaggio che rende il rimedio effettivo: senza la nomina del commissario, una sentenza che si limiti a ordinare di provvedere rischia di produrre soltanto un secondo silenzio, e nel frattempo i lavori proseguono.',
      ],
      riferimenti: [
        { testo: 'art. 19, comma 6-ter, l. 241/1990', tipo: 'norma' },
        { testo: 'art. 31, commi 1 e 2, c.p.a.', tipo: 'norma' },
        { testo: 'art. 117 c.p.a.', tipo: 'norma' },
      ],
    },
    {
      id: 'cognizione',
      titolo: 'Fin dove arriva il giudice, e che cosa si può realisticamente ottenere',
      sintesi:
        'L’ordine è di provvedere; sul contenuto il giudice arriva solo se non residua discrezionalità.',
      paragrafi: [
        'Il giudice può pronunciare sulla fondatezza della pretesa soltanto quando si tratti di attività vincolata o quando risulti che non residuano margini di discrezionalità e non siano necessari adempimenti istruttori riservati all’amministrazione. Il parere deve prendere posizione su questo punto invece di aggirarlo, perché è ciò che separa una consulenza utile da una generica.',
        'La risposta va calibrata sul potere concretamente sollecitato. Se ciò che si chiede è la verifica dei presupposti e l’adozione delle misure repressive in materia edilizia, l’attività ha margini di vincolatezza significativi: accertato l’abuso, la repressione è dovuta. Se invece si sollecita l’annullamento d’ufficio della segnalazione ormai consolidata, si chiede l’esercizio di un potere discrezionale, e il giudice potrà ordinare di provvedere ma non di annullare.',
        'Al cliente va detto con franchezza che il percorso amministrativo ha tempi non brevi e un esito non garantito nel contenuto, e che nel frattempo i lavori proseguono perché l’azione sul silenzio non ne sospende l’esecuzione. È l’informazione che gli serve per decidere, e ometterla per non guastare il parere sarebbe il modo peggiore di renderlo.',
      ],
      riferimenti: [
        { testo: 'art. 31, comma 3, c.p.a.', tipo: 'norma' },
        { testo: 'art. 34, comma 2, c.p.a.', tipo: 'norma' },
        { testo: 'art. 27 d.P.R. 380/2001', tipo: 'norma' },
      ],
    },
    {
      id: 'civile',
      titolo: 'La via civile, che qui è la più efficace',
      sintesi:
        'Sulle distanze il giudice ordinario può ordinare la riduzione in pristino, e non dipende dal Comune.',
      paragrafi: [
        'La violazione delle distanze legali fra costruzioni fonda un’autonoma azione davanti al giudice ordinario, del tutto indipendente dal titolo edilizio e dall’inerzia del Comune. Il vicino può chiedere la riduzione in pristino e il risarcimento del danno, e il giudice ordinario conosce incidentalmente della legittimità del titolo senza doverlo annullare. È un rimedio che nel caso in esame vale più di quello amministrativo, e un parere che lo tacesse sarebbe incompleto.',
        'Le norme del regolamento edilizio che integrano la disciplina codicistica sulle distanze hanno natura integrativa del codice civile, con la conseguenza che la loro violazione dà diritto alla tutela reale e non soltanto al risarcimento. Va però verificato in concreto quali disposizioni del regolamento abbiano questa natura e quali siano invece meramente urbanistiche, perché da questo dipende il tipo di tutela ottenibile.',
        'Sul piano pratico la via civile consente anche di chiedere un provvedimento d’urgenza per la sospensione dei lavori, che è ciò di cui il cliente ha bisogno adesso, mentre l’azione sul silenzio non offre nulla di equivalente. Il parere deve quindi consigliare di percorrere le due strade insieme, indicando quale delle due porta il risultato e quale serve a mettere l’amministrazione di fronte alle proprie responsabilità.',
      ],
      riferimenti: [
        { testo: 'art. 873 c.c.', tipo: 'norma' },
        { testo: 'art. 872, comma 2, c.c.', tipo: 'norma' },
        { testo: 'art. 700 c.p.c.', tipo: 'norma' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'natura-potere-tardivo',
      questione:
        'Scaduto il termine per il potere inibitorio ordinario, il potere che residua è un vero annullamento d’ufficio o un potere inibitorio a presupposti rafforzati?',
      orientamenti: [
        {
          tesi:
            'È un potere di autotutela in senso proprio, che presuppone quindi l’interesse pubblico attuale, il bilanciamento con l’affidamento e il rispetto del termine di dodici mesi.',
          argomento:
            'Il rinvio operato dalla legge ai presupposti dell’annullamento d’ufficio è integrale e non selettivo: se il legislatore avesse voluto conservare un potere inibitorio a condizioni soltanto più severe lo avrebbe detto, invece ha richiamato una disciplina compiuta che comprende l’interesse pubblico, il bilanciamento e il termine. Ne discende che il Comune non può limitarsi ad accertare l’abuso, ma deve motivare perché rimuoverlo oggi corrisponda a un interesse pubblico attuale e prevalente sull’affidamento maturato dal segnalante.',
          riferimenti: [
            { testo: 'art. 19, comma 4, l. 241/1990', tipo: 'norma' },
            { testo: 'art. 21-nonies, comma 1, l. 241/1990', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'È un potere inibitorio che conserva natura repressiva, sicché l’accertamento dell’abuso edilizio ne costituisce da solo il presupposto sufficiente.',
          argomento:
            'In materia edilizia i poteri repressivi sono vincolati e l’ordine di demolizione non richiede una motivazione sull’interesse pubblico ulteriore rispetto al ripristino della legalità, perché l’abuso è illecito permanente e non genera affidamento tutelabile. Applicare a una segnalazione illegittima il regime dell’annullamento d’ufficio significherebbe trattare meglio chi ha dichiarato il falso di chi ha ottenuto un permesso illegittimo, e consentire che il decorso di dodici mesi sani sul territorio un’opera che resta abusiva.',
          riferimenti: [
            { testo: 'art. 27 d.P.R. 380/2001', tipo: 'norma' },
            { testo: 'Cons. Stato, ad. plen., n. 9/2017', tipo: 'giurisprudenza' },
          ],
        },
      ],
      ricaduta:
        'Per il cliente la differenza è tutta pratica. Sotto il primo orientamento il Comune può legittimamente rispondere che non intende intervenire perché l’interesse pubblico non lo giustifica, e quella risposta sarebbe difficilmente attaccabile; sotto il secondo, accertato l’abuso, l’intervento è dovuto. Il parere deve quindi impostare l’istanza in modo che regga sotto entrambe le letture: documentare l’abuso, ma anche allegare le ragioni di interesse pubblico attuale — sicurezza, assetto del territorio, precedente per il quartiere — e contestare che vi sia affidamento meritevole quando la segnalazione contenga dichiarazioni non veritiere.',
    },
    {
      id: 'termine-decorrenza-terzo',
      questione:
        'Da quale momento decorre per il terzo il termine per agire contro il silenzio: dalla presentazione della propria istanza o dalla presentazione della segnalazione?',
      orientamenti: [
        {
          tesi:
            'Dalla scadenza del termine per provvedere sull’istanza del terzo, che è l’atto che fa sorgere il dovere di pronunciarsi nei suoi confronti.',
          argomento:
            'L’azione avverso il silenzio presuppone un obbligo di provvedere su una domanda determinata, e quell’obbligo nasce con l’istanza. Prima che il terzo si attivi l’amministrazione non ha alcun dovere verso di lui, e far decorrere il termine dalla segnalazione significherebbe far maturare una decadenza a carico di chi non era ancora legittimato ad agire e spesso nemmeno a conoscenza dell’intervento, come accade quasi sempre al vicino.',
          riferimenti: [
            { testo: 'art. 31, comma 2, c.p.a.', tipo: 'norma' },
            { testo: 'art. 2, comma 1, l. 241/1990', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'Dalla scadenza del termine perentorio per l’esercizio del potere inibitorio ordinario, perché è quello il momento in cui l’inerzia diviene giuridicamente rilevante.',
          argomento:
            'Il dovere di verifica dell’amministrazione nasce con la segnalazione e non con l’esposto del terzo, che ha valore di mera sollecitazione di un potere già doveroso. Ancorare il termine all’iniziativa del privato consentirebbe di riaprire a piacimento situazioni consolidate presentando un’istanza a distanza di anni, e vanificherebbe la funzione di stabilità che il termine perentorio assolve nei confronti del segnalante.',
          riferimenti: [{ testo: 'art. 19, comma 3, l. 241/1990', tipo: 'norma' }],
        },
      ],
      ricaduta:
        'Il parere deve consigliare di non appoggiarsi al primo orientamento come se fosse pacifico. La cautela operativa è agire subito dopo il decorso del termine sull’istanza, senza attendere l’anno, e argomentare nel ricorso la decorrenza dall’esposto: così il ricorso è tempestivo sotto entrambe le ricostruzioni. Va inoltre documentato quando Tizio ha avuto effettiva conoscenza dei lavori, perché è il dato che rende ragionevole la sua tempistica e neutralizza l’obiezione di inerzia.',
    },
  ],
  trappole: [
    'Impostare il parere sull’impugnazione della segnalazione. Non è un provvedimento tacito e la legge lo dice espressamente: il parere che parte da lì è sbagliato in radice, per quanto bene sia scritto il resto.',
    'Trattare il termine di trenta giorni come ordinatorio. È perentorio, e la sua scadenza è il fatto che governa l’intera vicenda: senza quel passaggio non si capisce perché il potere del Comune sia cambiato.',
    'Usare il termine generale di sessanta giorni. In materia edilizia il termine è dimezzato, ed è una svista che si vede subito perché sposta le date del caso.',
    'Confondere il potere inibitorio ordinario con quello successivo. Sono due poteri distinti, con presupposti diversi e con un diverso onere motivazionale: sovrapporli fa perdere il punto centrale.',
    'Dimenticare l’azione sul silenzio e limitarsi a suggerire un nuovo esposto. Il cliente ha già scritto una volta e non ha ottenuto nulla: ripetere l’istanza senza indicare il rimedio giurisdizionale è un consiglio che non serve.',
    'Promettere che il giudice ordinerà la demolizione. Sull’attività discrezionale l’ordine è di provvedere, e va detto prima che sia il cliente a scoprirlo.',
    'Tacere la via civile sulle distanze. È il rimedio che nel caso concreto porta il risultato più rapido e non dipende dal Comune: un parere che la ometta è incompleto anche se tutto il resto è esatto.',
    'Non dire che i lavori nel frattempo proseguono. L’azione sul silenzio non li sospende, e il cliente deve saperlo per decidere se chiedere un provvedimento d’urgenza al giudice ordinario.',
  ],
  griglia: [
    {
      voce: 'Natura della segnalazione e non impugnabilità',
      peso: 20,
      criterio:
        'Qualificazione come atto del privato e non come provvedimento tacito, con la conseguenza processuale enunciata espressamente.',
    },
    {
      voce: 'Termini e mutamento del potere',
      peso: 25,
      criterio:
        'Individuazione del termine ridotto in materia edilizia, affermazione della sua perentorietà e distinzione fra potere inibitorio ordinario e potere successivo ancorato all’autotutela.',
    },
    {
      voce: 'Rimedio del terzo e rito',
      peso: 20,
      criterio:
        'Sollecitazione delle verifiche e azione avverso il silenzio, con giudice competente, termine, rito camerale e commissario ad acta.',
    },
    {
      voce: 'Limiti della cognizione sul rapporto',
      peso: 15,
      criterio:
        'Presa di posizione motivata su quando il giudice possa pronunciare sulla fondatezza, distinguendo attività vincolata e discrezionale.',
    },
    {
      voce: 'Tutela civile sulle distanze',
      peso: 10,
      criterio:
        'Individuazione dell’azione davanti al giudice ordinario, della natura integrativa delle norme regolamentari e del provvedimento d’urgenza.',
    },
    {
      voce: 'Taglio consulenziale e franchezza sull’esito',
      peso: 10,
      criterio:
        'Indicazione della via consigliata, dei tempi e dei rischi, senza promettere risultati che il rimedio non garantisce.',
    },
  ],
};
