import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * Il venditore ha eccepito decadenza e prescrizione: il parere deve
 * quindi lavorare all'indietro, dalle eccezioni ai rimedi, e non
 * viceversa. Chi comincia esponendo la garanzia per vizi e arriva ai
 * termini in fondo scrive un tema; chi comincia dalle eccezioni scrive
 * un parere.
 */
export const parereCivile2017: Svolgimento = {
  tracciaId: '2017-parere-civile',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'Se l’acquirente sia un consumatore: da questo dipende quale disciplina della garanzia si applichi, e i termini cambiano radicalmente.',
    'Come si articolano decadenza e prescrizione nella garanzia codicistica, e da quando decorrono.',
    'Se la denuncia fosse davvero necessaria, o se ricorra una delle ipotesi in cui l’onere non opera.',
    'Come distinguere vizio, mancanza di qualità e aliud pro alio, e quali rimedi e termini conseguano a ciascuna qualificazione.',
    'Chi deve provare che cosa: è il punto su cui le Sezioni Unite sono intervenute e su cui i manuali più vecchi dicono altro.',
    'Se, decaduti dall’azione, resti la possibilità di far valere la garanzia in via di eccezione.',
    'Quale strategia suggerire in concreto, con l’avvertimento sull’alea.',
  ],
  blocchi: [
    {
      id: 'quale-disciplina',
      titolo: 'Quale disciplina si applica',
      sintesi: 'Prima domanda, non ultima: codice civile o codice del consumo.',
      paragrafi: [
        'La traccia parla di un acquirente e di un venditore senza qualificarli. È la prima cosa da sciogliere, perché esistono due regimi paralleli con termini incompatibili fra loro.',
        'Se l’acquirente è un consumatore e il venditore un professionista, si applica la garanzia legale di conformità del codice del consumo: il venditore risponde dei difetti di conformità che si manifestano entro ventiquattro mesi dalla consegna e l’azione si prescrive in ventisei mesi dalla consegna. Dopo la riforma del 2021 di attuazione della direttiva sulla vendita di beni non esiste più alcun onere di denuncia entro due mesi: chi lo scrive applica una norma abrogata.',
        'Se invece si tratta di vendita fra privati o fra imprenditori, vale la garanzia del codice civile, ed è il regime che la traccia sembra presupporre visto che il venditore eccepisce la tardività della denuncia: eccezione che nel regime consumeristico non avrebbe senso.',
        'Il parere deve dire questo esplicitamente, perché la ricostruzione della vicenda cambia. Va inoltre verificato il momento della conclusione del contratto, dato che la disciplina consumeristica riformata si applica ai contratti conclusi a partire dal 2022: per acquisti anteriori vige la versione precedente, che l’onere di denuncia bimestrale lo prevedeva.',
      ],
      riferimenti: [
        { testo: 'art. 1490 c.c.', tipo: 'norma' },
        { testo: 'artt. 128 ss. d.lgs. 206/2005', tipo: 'norma' },
        { testo: 'd.lgs. 170/2021', tipo: 'norma' },
        { testo: 'art. 3 d.lgs. 206/2005', tipo: 'norma' },
      ],
    },
    {
      id: 'termini',
      titolo: 'Decadenza e prescrizione',
      sintesi: 'Due termini distinti, due decorrenze distinte: si confondono di continuo.',
      paragrafi: [
        'Nel regime codicistico il compratore decade dalla garanzia se non denuncia i vizi al venditore entro otto giorni dalla scoperta, salvo diverso termine stabilito dalle parti o dalla legge. L’azione si prescrive in ogni caso in un anno dalla consegna.',
        'Le due decorrenze sono diverse e questo genera l’effetto più duro della disciplina: l’azione può prescriversi prima ancora che il vizio venga scoperto, perché il termine annuale decorre dalla consegna e non dalla scoperta. Nella traccia i vizi emergono «a distanza di tempo dalla consegna», il che rende l’eccezione di prescrizione tutt’altro che pretestuosa.',
        'La denuncia non è però sempre necessaria. L’onere non opera se il venditore ha riconosciuto l’esistenza del vizio o l’ha occultato: è la prima verifica da compiere, e nella pratica il riconoscimento si ricava spesso da interlocuzioni successive, offerte di riparazione, interventi in garanzia. Un venditore che ha mandato un tecnico a rimediare ha, di regola, riconosciuto.',
        'Va poi ricordato che il compratore convenuto per il pagamento del prezzo può sempre far valere la garanzia, purché il vizio sia stato denunciato entro otto giorni dalla scoperta e prima del decorso dell’anno dalla consegna. È una finestra stretta ma va verificata, perché muta l’assetto della lite: da attore decaduto a convenuto che eccepisce.',
        'La sospensione o interruzione della prescrizione va infine controllata: un riconoscimento del diritto da parte del venditore interrompe il termine, e nella corrispondenza fra le parti si trova più spesso di quanto si creda.',
      ],
      riferimenti: [
        { testo: 'art. 1495, comma 1, c.c.', tipo: 'norma' },
        { testo: 'art. 1495, comma 2, c.c.', tipo: 'norma' },
        { testo: 'art. 1495, comma 3, c.c.', tipo: 'norma' },
        { testo: 'art. 2944 c.c.', tipo: 'norma' },
      ],
    },
    {
      id: 'qualificazione',
      titolo: 'Vizio, mancanza di qualità, aliud pro alio',
      sintesi: 'Tre qualificazioni, tre regimi di termini: è la via d’uscita dalla decadenza.',
      paragrafi: [
        'Il vizio in senso proprio è l’imperfezione della cosa che la rende inidonea all’uso cui è destinata o ne diminuisce in modo apprezzabile il valore. È l’ipotesi che la traccia descrive letteralmente, e comporta i rimedi della risoluzione o della riduzione del prezzo, con i termini brevi visti sopra.',
        'La mancanza di qualità ricorre quando la cosa appartiene al genere pattuito ma è priva delle qualità promesse o essenziali per l’uso: dà diritto alla risoluzione secondo le disposizioni generali sulla risoluzione per inadempimento, ma resta soggetta agli stessi termini di decadenza e prescrizione della garanzia per vizi.',
        'L’aliud pro alio si ha quando la cosa consegnata appartiene a un genere del tutto diverso o presenta difetti che le impediscono di assolvere la funzione economico-sociale che le è propria. Qui non c’è inesattezza della prestazione ma inadempimento vero e proprio: si applica l’azione ordinaria di risoluzione, con prescrizione decennale, e i termini brevi non operano.',
        'La qualificazione come aliud pro alio è dunque, per un compratore che rischia la decadenza, la via d’uscita. Ma non si ottiene con un’etichetta: va costruita nei fatti, descrivendo in che modo il bene non assolve la sua funzione. Se la descrizione resta sul piano della diminuzione di valore, la qualificazione non ha su cosa poggiare.',
        'Il parere deve quindi impostare la conclusione in via graduata: in via principale l’aliud pro alio, se i fatti lo consentono; in subordine la garanzia per vizi, con l’argomento del riconoscimento del vizio da parte del venditore per superare la decadenza.',
      ],
      riferimenti: [
        { testo: 'art. 1490 c.c.', tipo: 'norma' },
        { testo: 'art. 1497 c.c.', tipo: 'norma' },
        { testo: 'art. 1453 c.c.', tipo: 'norma' },
        { testo: 'art. 2946 c.c.', tipo: 'norma' },
      ],
    },
    {
      id: 'rimedi',
      titolo: 'I rimedi e il risarcimento',
      sintesi: 'Risoluzione o riduzione: si sceglie, e la scelta è definitiva.',
      paragrafi: [
        'Il compratore può domandare a sua scelta la risoluzione del contratto ovvero la riduzione del prezzo, salvo che per determinati vizi gli usi escludano la risoluzione. La scelta è irrevocabile quando è fatta con la domanda giudiziale: è un vincolo da spiegare al cliente prima di depositare l’atto.',
        'Il venditore è inoltre tenuto a risarcire il danno, se non prova di avere ignorato senza colpa i vizi. È una responsabilità che presuppone la colpa presunta, e la prova liberatoria è a suo carico: nel parere va valorizzata, perché sposta il peso probatorio.',
        'Va notato che la garanzia non obbliga il venditore a eliminare i vizi: la struttura dell’istituto non è quella di un’obbligazione di fare ma di una soggezione ai rimedi che il compratore può attivare. È la ragione per cui non si può chiedere in via ordinaria la condanna alla riparazione, a meno che il venditore non si sia impegnato in tal senso con un accordo autonomo.',
        'Sul versante del danno, sono risarcibili le spese sostenute per l’accertamento dei vizi, il minor valore del bene, i danni ulteriori derivati dal vizio se prevedibili. Vanno allegate voce per voce, perché anche qui il danno non è in re ipsa.',
      ],
      riferimenti: [
        { testo: 'art. 1492 c.c.', tipo: 'norma' },
        { testo: 'art. 1494 c.c.', tipo: 'norma' },
        { testo: 'art. 1476 c.c.', tipo: 'norma' },
        { testo: 'Cass. Sez. Un. n. 11748/2019', tipo: 'giurisprudenza' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'onere-prova-vizi',
      questione:
        'Nell’azione di garanzia per vizi, chi deve provare l’esistenza del difetto intrinseco alla cosa venduta?',
      orientamenti: [
        {
          tesi:
            'Il venditore: al compratore basta allegare l’inesatto adempimento, secondo la regola generale in materia di prova dell’inadempimento.',
          argomento:
            'Il codice qualifica la garanzia per vizi come oggetto di un’obbligazione del venditore. Se di obbligazione si tratta, si applica il principio per cui il creditore prova il titolo e allega l’inadempimento, mentre spetta al debitore dimostrare di avere esattamente adempiuto. Diversamente si graverebbe il compratore di una prova tecnica spesso impossibile su un bene che non ha fabbricato.',
          riferimenti: [
            { testo: 'art. 1476, n. 3, c.c.', tipo: 'norma' },
            { testo: 'Cass. Sez. Un. n. 13533/2001', tipo: 'giurisprudenza' },
          ],
        },
        {
          tesi:
            'Il compratore, con una progressione: allega il difetto, il venditore prova la conformità al tipo e la regolarità del processo produttivo, e a quel punto tocca al compratore dimostrare il vizio intrinseco.',
          argomento:
            'La garanzia non pone il venditore in una situazione di obbligazione ma di soggezione: egli non promette un modo di essere attuale della cosa, resta assoggettato ai rimedi che il compratore può attivare. Non essendovi un’obbligazione da adempiere, non opera il meccanismo dell’allegazione dell’inadempimento, e l’esistenza del vizio resta fatto costitutivo della domanda, gravante su chi agisce.',
          riferimenti: [
            { testo: 'Cass. Sez. Un. n. 11748/2019', tipo: 'giurisprudenza' },
            { testo: 'art. 2697 c.c.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Il secondo assetto è quello affermato dalle Sezioni Unite e va assunto come base operativa: il parere deve dire al cliente che gli servirà una consulenza tecnica e che l’onere, superata la prova di conformità al tipo offerta dal venditore, tornerà su di lui. È l’informazione che decide se avviare la causa o cercare un accordo, e tacerla significa consegnare al cliente una previsione ottimistica infondata.',
    },
    {
      id: 'eccezione-garanzia',
      questione:
        'Il compratore decaduto o prescritto può ancora far valere la garanzia in via di eccezione, se convenuto per il pagamento del prezzo?',
      orientamenti: [
        {
          tesi:
            'Sì entro i limiti fissati dalla norma: la garanzia è opponibile in via di eccezione purché il vizio sia stato denunciato nei termini.',
          argomento:
            'La legge prevede espressamente che il compratore convenuto per l’esecuzione del contratto possa sempre far valere la garanzia, e il temperamento vale a evitare che il decorso di un termine annuale, che corre dalla consegna e non dalla scoperta, si traduca in un vantaggio per chi ha venduto una cosa viziata. La condizione posta dalla norma — la denuncia tempestiva — va intesa come l’unico limite.',
          riferimenti: [
            { testo: 'art. 1495, comma 3, c.c.', tipo: 'norma' },
            { testo: 'art. 1449 c.c.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'No quando è intervenuta la decadenza dalla denuncia: l’eccezione presuppone che la garanzia sia ancora esistente, e la decadenza la estingue.',
          argomento:
            'La norma consente di opporre in via di eccezione un diritto non ancora prescritto, non di resuscitare un diritto già estinto per decadenza. Se il compratore ha lasciato spirare gli otto giorni, la garanzia non è più nel suo patrimonio giuridico: non c’è nulla da opporre, né in via di azione né in via di eccezione.',
          riferimenti: [
            { testo: 'art. 2969 c.c.', tipo: 'norma' },
            { testo: 'art. 1495, comma 1, c.c.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Per l’assistito la differenza è fra pagare e non pagare il residuo del prezzo. Il parere deve indicare la strada difensiva — non agire per primi, attendere l’azione del venditore per il pagamento e opporre la garanzia — solo dopo aver verificato che la denuncia sia stata fatta nei termini. Se non lo è stata, quella strada è preclusa secondo il secondo orientamento e va cercato l’aliud pro alio.',
    },
  ],
  trappole: [
    'Non qualificare le parti. Consumatore e professionista significano ventiquattro mesi e nessuna denuncia; privati significano otto giorni e un anno. Non è un dettaglio anagrafico.',
    'Scrivere che il consumatore deve denunciare entro due mesi. Quell’onere è stato abrogato nel 2021 per i contratti conclusi dal 2022 in poi.',
    'Confondere le decorrenze: la decadenza corre dalla scoperta, la prescrizione dalla consegna. È la ragione per cui l’azione può prescriversi prima che il vizio si manifesti.',
    'Dimenticare che la denuncia non serve se il venditore ha riconosciuto o occultato il vizio. È la prima verifica da fare, e spesso la si trova nella corrispondenza.',
    'Etichettare il fatto come aliud pro alio senza costruirlo. La qualificazione va fondata sulla descrizione della funzione che il bene non assolve, non affermata.',
    'Chiedere la condanna del venditore a riparare il bene. La garanzia lo assoggetta ai rimedi, non gli impone un facere, salvo impegno autonomo.',
    'Promettere al cliente che l’onere della prova è del venditore. Dopo le Sezioni Unite del 2019 la progressione probatoria è diversa, e il cliente ha diritto di saperlo prima di pagare un anticipo.',
  ],
  griglia: [
    {
      voce: 'Qualificazione delle parti e disciplina applicabile',
      peso: 15,
      criterio: 'Consumatore o no, con la conseguente scelta fra codice civile e codice del consumo.',
    },
    {
      voce: 'Decadenza e prescrizione',
      peso: 20,
      criterio: 'Termini distinti, decorrenze distinte, ipotesi in cui la denuncia non serve.',
    },
    {
      voce: 'Vizio, mancanza di qualità, aliud pro alio',
      peso: 20,
      criterio: 'Tre qualificazioni distinte con i rispettivi rimedi e termini, non un elenco.',
    },
    {
      voce: 'Onere della prova',
      peso: 20,
      criterio: 'Progressione probatoria esposta, con l’avvertimento sulla consulenza tecnica.',
    },
    {
      voce: 'Strategia e garanzia in via di eccezione',
      peso: 15,
      criterio: 'Hai valutato se convenga agire o attendere, verificando la tempestività della denuncia.',
    },
    {
      voce: 'Conclusione operativa',
      peso: 10,
      criterio: 'Conclusione graduata nell’interesse dell’assistito, con l’alea dichiarata.',
    },
  ],
};
