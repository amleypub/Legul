import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * L'autotutela tardiva è la traccia di amministrativo per eccellenza:
 * una norma breve, un'adunanza plenaria che la interpreta, e un caso in
 * cui tutti gli elementi di quella norma mancano uno per uno.
 *
 * La tentazione è scrivere una trattazione sull'autotutela. La traccia
 * chiede invece un atto, e l'atto si costruisce sul provvedimento
 * concreto: il termine superato, l'interesse pubblico non indicato,
 * l'affidamento non ponderato, la comunicazione mai inviata. Sono quattro
 * motivi distinti, e vanno numerati come tali.
 */
export const attoAmministrativo2022: Svolgimento = {
  tracciaId: '2022-atto-amministrativo',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'Quale rimedio e davanti a quale giudice: contro l’annullamento d’ufficio di un titolo edilizio si agisce davanti al giudice amministrativo.',
    'Il termine di impugnazione e il suo dies a quo, che qui coincide con la notificazione del provvedimento.',
    'Se il potere di annullamento d’ufficio fosse ancora esercitabile a distanza di oltre due anni dal rilascio del titolo.',
    'Che cosa significhi «interesse pubblico concreto e attuale» e perché il solo ripristino della legalità non basti.',
    'Che peso abbia l’affidamento maturato dal privato che ha iniziato i lavori e sostenuto spese.',
    'Se la mancata comunicazione di avvio del procedimento sia vizio invalidante o vizio non annullabile.',
    'Che cosa chiedere oltre all’annullamento: sospensione, e in subordine risarcimento del danno da affidamento.',
  ],
  blocchi: [
    {
      id: 'rimedio',
      titolo: 'Il rimedio, il giudice e i sessanta giorni',
      sintesi: 'Ricorso al TAR nel termine ordinario, con domanda cautelare contestuale.',
      paragrafi: [
        'L’annullamento d’ufficio di un permesso di costruire è esercizio di un potere amministrativo di secondo grado, e la posizione del privato che lo subisce ha consistenza di interesse legittimo: la giurisdizione è quella generale di legittimità del giudice amministrativo. Il rimedio è il ricorso al tribunale amministrativo regionale nella cui circoscrizione ha sede il Comune.',
        'Il termine è quello ordinario di sessanta giorni, decorrenti dalla notificazione, comunicazione o piena conoscenza del provvedimento. Nel caso della traccia il dies a quo è la notificazione dell’atto di annullamento: non rilevano i fatti anteriori, perché ciò che si impugna è il provvedimento di secondo grado e non il titolo originario.',
        'La domanda cautelare va proposta contestualmente e non con atto separato successivo. Nell’edilizia il pregiudizio è per definizione difficile da riparare: i lavori si fermano, il cantiere subisce costi di fermo, e l’annullamento del titolo espone all’ordine di demolizione delle opere già realizzate. Sono circostanze da descrivere in concreto, con l’indicazione delle spese sostenute e dello stato di avanzamento.',
        'Vanno impugnati il provvedimento di annullamento e ogni atto presupposto o consequenziale, compresi gli eventuali ordini di sospensione dei lavori adottati nel frattempo. L’aggiunta di motivi resta possibile per gli atti che sopravvengono, ma è preferibile impugnare subito tutto ciò che è già noto.',
        'Non vi sono controinteressati in senso proprio quando l’annullamento non attribuisce un vantaggio a un soggetto determinato. Se però il procedimento di autotutela è stato avviato su esposto di un vicino, quel soggetto è portatore di un interesse qualificato e la notifica nei suoi confronti è prudente: costa poco e mette al riparo da un’eccezione di inammissibilità.',
      ],
      riferimenti: [
        { testo: 'art. 29 c.p.a.', tipo: 'norma' },
        { testo: 'art. 41, comma 2, c.p.a.', tipo: 'norma' },
        { testo: 'art. 55 c.p.a.', tipo: 'norma' },
        { testo: 'art. 43 c.p.a.', tipo: 'norma' },
      ],
    },
    {
      id: 'termine',
      titolo: 'Il termine per annullare',
      sintesi: 'Dodici mesi dall’adozione del titolo, non più diciotto: e qui ne sono passati oltre ventiquattro.',
      paragrafi: [
        'L’annullamento d’ufficio di provvedimenti di autorizzazione o di attribuzione di vantaggi economici può intervenire soltanto entro un termine ragionevole, che la legge sul procedimento fissa espressamente. Il termine era di diciotto mesi ed è stato ridotto a dodici dal decreto legge 77 del 2021, con l’obiettivo dichiarato di rafforzare la tutela dell’affidamento del privato.',
        'Il permesso di costruire rientra a pieno titolo fra i provvedimenti autorizzatori cui il termine si applica: è il caso su cui la norma è stata concepita e su cui si è formata la giurisprudenza più consistente. Nella traccia sono trascorsi oltre due anni dal rilascio, quindi il termine è ampiamente superato e il motivo è quello da collocare per primo, perché assorbe tutti gli altri.',
        'Il termine non opera quando il provvedimento sia stato ottenuto sulla base di false rappresentazioni dei fatti o di dichiarazioni false o mendaci accertate con sentenza passata in giudicato. È l’eccezione che l’amministrazione tenterà di invocare, e la traccia la esclude espressamente: va detto nell’atto, perché anticipare la difesa avversaria e neutralizzarla vale più che ignorarla.',
        'Attenzione a un punto che la giurisprudenza ha chiarito e che è facile confondere: il decorso del tempo non consuma di per sé il potere, e il termine ragionevole decorre dal momento in cui l’amministrazione scopre i fatti posti a fondamento del ritiro. La precisazione riguarda però il termine «ragionevole» come clausola generale, non il termine fisso di dodici mesi, che la legge àncora all’adozione del provvedimento: la distinzione va tenuta ferma, perché l’amministrazione proverà a spostare il conteggio sulla scoperta dell’abuso.',
        'Nel formulare il motivo conviene chiedere in via principale l’annullamento per superamento del termine e, in subordine, per difetto dei presupposti sostanziali. Anche se il primo motivo è quello più solido, un ricorso che si giochi tutto su di esso resterebbe scoperto se il giudice accedesse a una lettura diversa del dies a quo.',
      ],
      riferimenti: [
        { testo: 'art. 21-nonies, comma 1, l. 241/1990', tipo: 'norma' },
        { testo: 'd.l. 77/2021', tipo: 'norma' },
        { testo: 'art. 21-nonies, comma 2-bis, l. 241/1990', tipo: 'norma' },
        { testo: 'Cons. Stato, ad. plen., n. 8/2017', tipo: 'giurisprudenza' },
      ],
    },
    {
      id: 'interesse',
      titolo: 'L’interesse pubblico e l’affidamento',
      sintesi: 'Il ripristino della legalità non è di per sé l’interesse pubblico richiesto dalla norma.',
      paragrafi: [
        'La legge non consente di annullare per il solo fatto che il provvedimento sia illegittimo: richiede che sussistano ragioni di interesse pubblico e che l’annullamento intervenga tenendo conto degli interessi dei destinatari e dei controinteressati. Sono due requisiti autonomi, e la loro assenza è vizio del provvedimento, non semplice difetto di stile della motivazione.',
        'L’adunanza plenaria del Consiglio di Stato ha affermato che l’annullamento d’ufficio di un titolo edilizio intervenuto a considerevole distanza di tempo deve essere motivato in relazione alla sussistenza di un interesse pubblico concreto e attuale, valutati anche gli interessi dei privati destinatari. La stessa pronuncia ha escluso che si possa esonerare l’amministrazione dall’obbligo generale di motivazione, pur riconoscendo che in materia edilizia la motivazione possa essere svolta anche sinteticamente.',
        'Nella traccia il provvedimento indica come unica ragione il ripristino della legalità violata. È la formula che la giurisprudenza considera insufficiente proprio perché coincide con il presupposto dell’annullamento — l’illegittimità dell’atto — e quindi non aggiunge nulla: se bastasse, il requisito dell’interesse pubblico sarebbe soddisfatto in ogni caso e la norma non avrebbe contenuto.',
        'L’affidamento del privato va poi allegato in fatto e non solo invocato in diritto: la data del titolo, l’inizio dei lavori, l’entità delle spese sostenute, i contratti stipulati con le imprese. È il materiale che rende concreto il secondo requisito, e senza il quale il motivo resta un richiamo di principio. La medesima adunanza plenaria ha però chiarito che l’affidamento non si configura quando l’illegittimità dipenda da una rappresentazione erronea dei fatti da parte del privato: la traccia lo esclude, e l’atto deve dirlo.',
        'La motivazione, infine, è requisito generale del provvedimento amministrativo e deve indicare i presupposti di fatto e le ragioni giuridiche della decisione. Il difetto di motivazione va dedotto come motivo autonomo rispetto alla violazione dei presupposti sostanziali: sono censure diverse e il giudice può accogliere l’una e respingere l’altra.',
      ],
      riferimenti: [
        { testo: 'art. 21-nonies l. 241/1990', tipo: 'norma' },
        { testo: 'art. 3 l. 241/1990', tipo: 'norma' },
        { testo: 'Cons. Stato, ad. plen., n. 8/2017', tipo: 'giurisprudenza' },
        { testo: 'art. 97 Cost.', tipo: 'norma' },
      ],
    },
    {
      id: 'partecipazione',
      titolo: 'La comunicazione di avvio che non c’è stata',
      sintesi: 'Su un potere discrezionale la prova che il contenuto non poteva essere diverso è quasi impossibile.',
      paragrafi: [
        'L’avvio del procedimento va comunicato ai soggetti nei cui confronti il provvedimento finale è destinato a produrre effetti diretti. Nel procedimento di autotutela il destinatario è il titolare del provvedimento da annullare, e la comunicazione è lo strumento con cui egli può rappresentare l’affidamento maturato e le spese sostenute — cioè proprio gli elementi che la legge impone all’amministrazione di ponderare.',
        'L’amministrazione opporrà la regola per cui il provvedimento non è annullabile per mancata comunicazione di avvio quando essa dimostri in giudizio che il contenuto non avrebbe potuto essere diverso da quello adottato. È una difesa prevedibile e va disinnescata nell’atto, non attesa in memoria di replica.',
        'L’argomento decisivo è la natura del potere esercitato. La prova liberatoria riguarda un giudizio controfattuale su ciò che l’amministrazione avrebbe deciso, e quel giudizio è praticabile quando l’attività è vincolata, perché l’esito è predeterminato dalla norma. L’annullamento d’ufficio è invece potere ampiamente discrezionale, che presuppone una ponderazione fra interesse pubblico e interessi privati: sostenere che l’apporto del destinatario non avrebbe potuto incidere significa affermare che la ponderazione era già chiusa prima di essere fatta.',
        'Il motivo va perciò costruito in due passaggi: prima la violazione della norma sulla partecipazione, poi la non operatività della sanatoria processuale in ragione della discrezionalità del potere. E va irrobustito indicando che cosa il privato avrebbe dedotto se fosse stato messo in condizione di farlo: senza quell’indicazione l’argomento resta astratto e l’amministrazione ha buon gioco a sostenere che nulla sarebbe cambiato.',
        'Va infine ricordato che la stessa disposizione esclude espressamente la sanatoria per il provvedimento adottato in violazione delle regole sul preavviso di rigetto. È un dato che serve come argomento sistematico: dove il legislatore ha voluto proteggere la partecipazione in modo assoluto lo ha detto, e la lettura restrittiva della prova liberatoria si muove nella stessa direzione.',
      ],
      riferimenti: [
        { testo: 'art. 7 l. 241/1990', tipo: 'norma' },
        { testo: 'art. 21-octies, comma 2, l. 241/1990', tipo: 'norma' },
        { testo: 'art. 10 l. 241/1990', tipo: 'norma' },
        { testo: 'art. 10-bis l. 241/1990', tipo: 'norma' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'dies-a-quo',
      questione:
        'Il termine di dodici mesi per l’annullamento d’ufficio decorre dall’adozione del provvedimento o dalla scoperta dell’illegittimità da parte dell’amministrazione?',
      orientamenti: [
        {
          tesi:
            'Dall’adozione del provvedimento: è il dato testuale, e spostare il conteggio sulla scoperta renderebbe il termine indeterminato.',
          argomento:
            'La norma àncora il termine al momento dell’adozione dell’atto, e la riduzione da diciotto a dodici mesi è stata voluta proprio per dare certezza al privato. Far decorrere il termine dalla scoperta significherebbe consegnare all’amministrazione la chiave del proprio termine di decadenza, perché la scoperta dipende da quando essa decide di controllare: il risultato sarebbe un termine mobile, cioè nessun termine.',
          riferimenti: [
            { testo: 'art. 21-nonies, comma 1, l. 241/1990', tipo: 'norma' },
            { testo: 'd.l. 77/2021', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'Dalla scoperta dei fatti che fondano il ritiro, quando l’illegittimità dipenda da elementi non conoscibili al momento del rilascio.',
          argomento:
            'Il mero decorso del tempo non consuma il potere, e il carattere «ragionevole» del termine si apprezza rispetto al momento in cui l’amministrazione è posta in condizione di conoscere i fatti. Diversamente, chi ha ottenuto un titolo su presupposti taciuti si troverebbe protetto proprio dal proprio comportamento, e l’amministrazione sarebbe decaduta prima ancora di poter sapere che c’era qualcosa da annullare.',
          riferimenti: [{ testo: 'Cons. Stato, ad. plen., n. 8/2017', tipo: 'giurisprudenza' }],
        },
      ],
      ricaduta:
        'Nel caso della traccia il primo orientamento conduce direttamente all’annullamento, e va sostenuto in via principale. Il secondo però non va ignorato: l’atto deve mostrare che, anche a volerlo seguire, nulla era occulto — il titolo era stato rilasciato sulla base di un progetto depositato e i limiti volumetrici erano verificabili dagli uffici fin dall’inizio. Argomentare su entrambi i piani costa poche righe e toglie all’amministrazione la sua difesa più naturale.',
    },
    {
      id: 'legalita',
      questione:
        'Il ripristino della legalità violata può da solo integrare l’interesse pubblico che la legge richiede per l’annullamento d’ufficio?',
      orientamenti: [
        {
          tesi:
            'No: coincide con il presupposto stesso dell’annullamento e non aggiunge nulla, svuotando il requisito di contenuto.',
          argomento:
            'La legge richiede che all’illegittimità dell’atto si aggiungano ragioni di interesse pubblico: se l’illegittimità bastasse a integrarle, il requisito non avrebbe alcuna funzione selettiva e ogni atto illegittimo sarebbe annullabile in ogni tempo, che è esattamente ciò che la disciplina dell’autotutela vuole impedire a tutela dell’affidamento.',
          riferimenti: [
            { testo: 'art. 21-nonies l. 241/1990', tipo: 'norma' },
            { testo: 'Cons. Stato, ad. plen., n. 8/2017', tipo: 'giurisprudenza' },
          ],
        },
        {
          tesi:
            'Sì in materia edilizia e urbanistica, dove l’interesse al rispetto della disciplina del territorio è in re ipsa e la motivazione può essere sintetica.',
          argomento:
            'La normativa urbanistica presidia beni che eccedono il rapporto fra amministrazione e richiedente — l’assetto del territorio, il carico urbanistico, la sicurezza — e la loro tutela non è disponibile. Pretendere una motivazione rafforzata su un interesse pubblico che la legge stessa qualifica come prevalente significherebbe rendere praticamente impossibile la rimozione di titoli illegittimi e premiare chi ne ha beneficiato.',
          riferimenti: [{ testo: 'art. 41 Cost.', tipo: 'norma' }],
        },
      ],
      ricaduta:
        'Il secondo orientamento non va trattato come una posizione minoritaria da liquidare: in materia edilizia è vivo, e la stessa adunanza plenaria ha ammesso una motivazione sintetica. Per l’atto ciò significa che il motivo non può fermarsi a dire che l’interesse pubblico manca: deve mostrare che manca anche a volerlo cercare — nessun pregiudizio al carico urbanistico dedotto, nessuna incidenza su terzi allegata, nessun profilo di sicurezza richiamato. È la differenza fra una censura di stile e una censura che il giudice può accogliere.',
    },
  ],
  trappole: [
    'Scrivere una trattazione sull’autotutela invece di un atto. La traccia chiede un ricorso: la parte generale, se serve, sta in poche righe di premessa.',
    'Impugnare il permesso di costruire originario. Ciò che si impugna è il provvedimento di annullamento, e il termine decorre dalla sua notificazione.',
    'Fermarsi al superamento del termine di dodici mesi. È il motivo più forte, ma un ricorso monomotivo resta scoperto se il giudice accede a una lettura diversa del dies a quo.',
    'Invocare l’affidamento senza allegarlo in fatto. Servono la data del titolo, l’inizio dei lavori, le spese sostenute: senza quei dati il requisito resta un principio.',
    'Ignorare la regola sulla non annullabilità per vizi procedimentali. L’amministrazione la invocherà: va disinnescata nel ricorso, spiegando perché su un potere discrezionale la prova liberatoria non è praticabile.',
    'Trascurare la domanda cautelare. Senza sospensione i lavori restano fermi e può sopravvenire l’ordine di demolizione, che riapre il contenzioso su un altro fronte.',
    'Dimenticare la domanda risarcitoria in subordine. Se l’annullamento non basta a rimettere le cose a posto, il danno da affidamento è l’unica tutela residua e va chiesto subito.',
  ],
  griglia: [
    {
      voce: 'Rimedio, giurisdizione e termini',
      peso: 15,
      criterio: 'Ricorso al TAR correttamente individuato; termine di sessanta giorni e dies a quo esatti.',
    },
    {
      voce: 'Superamento del termine per l’autotutela',
      peso: 25,
      criterio:
        'Termine di dodici mesi individuato con la sua fonte; eccezione delle false rappresentazioni anticipata ed esclusa.',
    },
    {
      voce: 'Interesse pubblico concreto e attuale',
      peso: 20,
      criterio:
        'Insufficienza del solo ripristino della legalità argomentata, non affermata; assenza di pregiudizi ulteriori mostrata.',
    },
    {
      voce: 'Affidamento del privato',
      peso: 15,
      criterio: 'Allegato in fatto con date e spese, non invocato come principio.',
    },
    {
      voce: 'Violazione delle garanzie partecipative',
      peso: 15,
      criterio:
        'Dedotta insieme alla non operatività della sanatoria processuale, con indicazione di ciò che si sarebbe dedotto.',
    },
    {
      voce: 'Domande e tecnica redazionale',
      peso: 10,
      criterio: 'Cautelare contestuale, risarcimento in subordine, motivi rubricati e numerati.',
    },
  ],
};
