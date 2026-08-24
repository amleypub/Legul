import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * Attenzione: questa traccia è quella su cui i manuali invecchiano più
 * in fretta. L'art. 581 c.p.p. è stato riscritto dalla riforma Cartabia
 * nel 2022 e poi corretto dalla legge 114/2024, che ha abrogato il
 * comma 1-ter e ristretto il comma 1-quater al solo difensore d'ufficio.
 * Chi studia su un testo del 2023 espone il cliente a un'inammissibilità
 * che non esiste più, o gli fa dimenticare quella che esiste ancora.
 */
export const attoPenale2023: Svolgimento = {
  tracciaId: '2023-atto-penale',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'Quale mezzo di impugnazione proporre: appello o ricorso per cassazione. La scelta non è libera e dipende dai vizi che si vogliono far valere.',
    'Come si costruisce un motivo che superi il vaglio di specificità introdotto dalla riforma Cartabia, che è oggi la prima causa di inammissibilità.',
    'Quali oneri formali gravano oggi sull’atto di impugnazione, dopo che la legge 114/2024 ne ha abrogato uno e ristretto un altro.',
    'Come si censura la motivazione sull’elemento soggettivo desunto da indizi, senza scivolare in una richiesta di rivalutazione del fatto.',
    'Come si aggredisce il diniego di attenuanti generiche quando il giudice non ha motivato sul punto.',
    'Quali richieste formulare e in che ordine, tenendo conto del divieto di reformatio in peius.',
  ],
  blocchi: [
    {
      id: 'mezzo',
      titolo: 'Quale impugnazione',
      sintesi: 'Appello o ricorso: la scelta discende dai vizi, non dalle preferenze.',
      paragrafi: [
        'La sentenza è di primo grado e i vizi denunciati riguardano la ricostruzione del fatto e la valutazione della prova indiziaria: è terreno dell’appello, non del ricorso per cassazione. Il ricorso per saltum resta possibile ma è una scelta autolesionista quando si vuole discutere di come sono stati letti gli indizi, perché in Cassazione quel discorso non si può fare.',
        'L’appello consente il riesame nel merito entro i limiti dei punti devoluti, mentre il ricorso è limitato ai motivi tassativi previsti dalla legge e, sul versante della motivazione, al vizio che risulti dal testo del provvedimento o da atti specificamente indicati. Chiedere alla Cassazione di rileggere gli indizi significa vedersi dichiarare il ricorso inammissibile per genericità o per manifesta infondatezza.',
        'Va poi ricordato che la riforma ha ampliato i casi di inappellabilità e ha inciso sulla concordata applicazione della pena in appello, oggi disciplinata come istituto stabile. Nell’atto conviene valutare se, accanto ai motivi, non sia più conveniente per l’assistito la strada del concordato sui motivi, che va però ponderata con il cliente e non decisa dal difensore da solo.',
        'La scelta va dichiarata e motivata nell’intestazione dell’atto: un appello che nella sostanza è un ricorso, o viceversa, non si salva con la qualificazione formale, perché il giudice dell’impugnazione guarda al contenuto dei motivi.',
      ],
      riferimenti: [
        { testo: 'art. 593 c.p.p.', tipo: 'norma' },
        { testo: 'art. 606 c.p.p.', tipo: 'norma' },
        { testo: 'art. 599-bis c.p.p.', tipo: 'norma' },
        { testo: 'd.lgs. 150/2022', tipo: 'norma' },
      ],
    },
    {
      id: 'specificita',
      titolo: 'La specificità dei motivi',
      sintesi: 'Il vaglio introdotto nel 2022: oggi è la prima causa di inammissibilità.',
      paragrafi: [
        'La riforma Cartabia ha riscritto la forma dell’impugnazione imponendo, a pena di inammissibilità, l’enunciazione in forma puntuale ed esplicita dei rilievi critici in relazione alle ragioni di fatto o di diritto espresse nel provvedimento impugnato, con riferimento ai capi e ai punti cui l’impugnazione si riferisce.',
        'La differenza rispetto al passato è di metodo. Prima bastava indicare il vizio; oggi il motivo deve agganciarsi al passaggio motivazionale che si contesta e spiegare perché quel passaggio non regge. Un motivo che espone la propria ricostruzione senza confrontarsi con quella della sentenza è, secondo la formula usata in giurisprudenza, privo di specificità estrinseca: non dialoga con il provvedimento.',
        'Sul piano redazionale questo si traduce in una struttura fissa da ripetere per ogni motivo: che cosa ha detto la sentenza (con citazione della pagina), perché quel ragionamento è viziato, quale sarebbe la conclusione corretta, quale richiesta ne discende. Chi scrive per blocchi tematici anziché per capi e punti si espone al rilievo di inammissibilità già in limine.',
        'Nel caso della traccia i punti da devolvere sono almeno tre e vanno tenuti distinti: l’affermazione di responsabilità sotto il profilo dell’elemento soggettivo, la qualificazione giuridica del fatto, il trattamento sanzionatorio con il diniego delle generiche. Accorparli in un unico motivo indistinto è il modo più rapido per perderli tutti insieme.',
      ],
      riferimenti: [
        { testo: 'art. 581, comma 1-bis, c.p.p.', tipo: 'norma' },
        { testo: 'art. 591 c.p.p.', tipo: 'norma' },
        { testo: 'art. 597 c.p.p.', tipo: 'norma' },
      ],
    },
    {
      id: 'oneri',
      titolo: 'Gli oneri formali dopo la legge 114/2024',
      sintesi: 'Un adempimento è stato abrogato, un altro è rimasto ma solo per il difensore d’ufficio.',
      paragrafi: [
        'Qui sta la trappola più insidiosa della traccia, perché riguarda una norma cambiata due volte in due anni. La riforma Cartabia aveva introdotto due oneri: il deposito, con l’atto di impugnazione, della dichiarazione o elezione di domicilio per la notificazione del decreto di citazione a giudizio, e il deposito di uno specifico mandato a impugnare rilasciato dopo la sentenza quando si è proceduto in assenza dell’imputato.',
        'La legge 9 agosto 2024, n. 114 ha abrogato il primo dei due. Chi oggi scrive che l’appello è inammissibile senza la dichiarazione o elezione di domicilio sta applicando una norma che non c’è più, e in un atto vero rischierebbe di rinunciare a un’impugnazione ammissibile.',
        'Il secondo onere è invece rimasto, ma ristretto: la stessa legge ha aggiunto la parola «ufficio» dopo il riferimento al difensore, sicché il mandato specifico a impugnare, rilasciato dopo la pronuncia della sentenza, è oggi richiesto a pena di inammissibilità soltanto al difensore d’ufficio dell’imputato assente. Il difensore di fiducia non ne ha bisogno.',
        'Nell’atto la questione va affrontata in una riga soltanto, ma quella riga distingue chi conosce la norma vigente da chi ha studiato su un manuale di due anni fa. Se l’assistito era presente al processo, il problema non si pone affatto e conviene dirlo, per mostrare che si è verificato.',
      ],
      riferimenti: [
        { testo: 'art. 581, comma 1-quater, c.p.p.', tipo: 'norma' },
        { testo: 'l. 114/2024', tipo: 'norma' },
        { testo: 'art. 420-bis c.p.p.', tipo: 'norma' },
      ],
    },
    {
      id: 'dolo',
      titolo: 'L’elemento soggettivo desunto da indizi',
      sintesi: 'Si censura il metodo della prova indiziaria, non il risultato che non piace.',
      paragrafi: [
        'La sentenza ha ritenuto sussistente il dolo sulla base di elementi indiziari. La censura non può consistere nel dire che quegli indizi non convincono: sarebbe una richiesta di rivalutazione, e in appello passa solo se agganciata a un vizio del ragionamento.',
        'Il terreno solido è il metodo. La prova per indizi richiede che gli indizi siano gravi, precisi e concordanti, e la giurisprudenza pretende una valutazione prima analitica di ciascuno e poi globale del loro insieme: una sentenza che salta il primo passaggio, o che tratta come grave un indizio equivoco, ha un vizio di motivazione censurabile.',
        'Sul dolo specificamente, quando il fatto si presta a una lettura alternativa, va spesa la distinzione fra dolo eventuale e colpa cosciente: nel primo l’agente accetta il rischio del verificarsi dell’evento, nella seconda confida che non si verifichi. La formula che la giurisprudenza usa come banco di prova è se l’agente avrebbe agito ugualmente qualora avesse avuto la certezza del verificarsi dell’evento.',
        'Il motivo va chiuso indicando la conseguenza processuale che se ne trae: assoluzione perché il fatto non costituisce reato, oppure riqualificazione in una fattispecie colposa se prevista, oppure annullamento con rinvio. Un motivo che descrive il vizio senza dire che cosa il giudice debba farne resta a metà.',
      ],
      riferimenti: [
        { testo: 'art. 192, comma 2, c.p.p.', tipo: 'norma' },
        { testo: 'art. 43 c.p.', tipo: 'norma' },
        { testo: 'Cass. Sez. Un. n. 38343/2014', tipo: 'giurisprudenza' },
        { testo: 'art. 546, comma 1, lett. e), c.p.p.', tipo: 'norma' },
      ],
    },
    {
      id: 'generiche',
      titolo: 'Il diniego delle attenuanti generiche',
      sintesi: 'Il silenzio della sentenza è il punto: va aggredito come vizio, non come ingiustizia.',
      paragrafi: [
        'La traccia dice che le generiche sono state negate senza motivare specificamente. È l’appiglio più concreto, perché il trattamento sanzionatorio è punto autonomo della decisione e come tale richiede una motivazione propria.',
        'Le generiche non sono un diritto e il giudice non deve passare in rassegna tutti gli elementi: è però tenuto a dare conto delle ragioni del diniego facendo riferimento agli elementi ritenuti decisivi. Una motivazione che si limita alla gravità del fatto, già valutata per la determinazione della pena base, incorre in una duplice valutazione dello stesso elemento.',
        'Il motivo si costruisce quindi in due passi: si isola l’assenza o l’apparenza della motivazione sul punto, e si indicano gli elementi favorevoli allegati in primo grado su cui il giudice non si è pronunciato — condotta processuale, incensuratezza, condizioni personali, eventuale risarcimento. Se quegli elementi non erano stati allegati, l’appello è la sede per farlo, perché il giudice di secondo grado può valutarli.',
        'Nella stessa impugnazione conviene chiedere in via graduata la rideterminazione della pena, il riconoscimento della prevalenza delle generiche sulle eventuali aggravanti e, se ne ricorrono i presupposti, i benefici di legge. Il divieto di reformatio in peius protegge da un esito peggiorativo quando appella il solo imputato: è la ragione per cui su questo punto conviene sempre insistere.',
      ],
      riferimenti: [
        { testo: 'art. 62-bis c.p.', tipo: 'norma' },
        { testo: 'art. 133 c.p.', tipo: 'norma' },
        { testo: 'art. 69 c.p.', tipo: 'norma' },
        { testo: 'art. 597, comma 3, c.p.p.', tipo: 'norma' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'specificita-estrinseca',
      questione:
        'Quanto deve essere puntuale il confronto del motivo con la motivazione impugnata perché l’appello superi il vaglio di specificità introdotto nel 2022?',
      orientamenti: [
        {
          tesi:
            'Serve un confronto analitico: il motivo deve riprodurre e criticare i singoli passaggi argomentativi della sentenza, altrimenti è inammissibile.',
          argomento:
            'La norma richiede l’enunciazione «puntuale ed esplicita» dei rilievi critici in relazione alle ragioni espresse nel provvedimento: l’aggettivo non sarebbe stato aggiunto se fosse bastato quanto già si pretendeva prima. Chi non si misura con la ratio decidendi non devolve nulla al giudice dell’impugnazione, che si troverebbe a dover cercare da sé il punto della discordia.',
          riferimenti: [{ testo: 'art. 581, comma 1-bis, c.p.p.', tipo: 'norma' }],
        },
        {
          tesi:
            'Basta che il motivo individui con chiarezza il punto contestato e la ragione del dissenso: pretendere la confutazione passo per passo trasformerebbe un requisito di forma in un ostacolo all’impugnazione.',
          argomento:
            'L’impugnazione resta un diritto e i requisiti formali vanno interpretati in modo da non svuotarlo. Un’interpretazione che esiga la replica a ogni periodo della sentenza finirebbe per premiare la lunghezza dell’atto invece della sua qualità, e si porrebbe in tensione con il diritto di difesa e con il diritto a un ricorso effettivo.',
          riferimenti: [
            { testo: 'art. 24 Cost.', tipo: 'norma' },
            { testo: 'art. 111 Cost.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Nel dubbio si scrive per il primo orientamento, perché è quello che, se ha ragione, rende inammissibile l’atto scritto secondo il secondo — mentre il contrario non è vero. In concreto: un motivo per ogni punto, la citazione testuale del passaggio contestato, la ragione del dissenso, la richiesta. Costa qualche riga in più e mette l’atto al riparo da entrambe le letture.',
    },
    {
      id: 'motivazione-generiche',
      questione:
        'Il diniego delle attenuanti generiche fondato sulla sola gravità del fatto è motivazione sufficiente?',
      orientamenti: [
        {
          tesi:
            'Sì: il giudice può fondare il diniego su un solo elemento ritenuto decisivo, e la gravità del fatto può esserlo.',
          argomento:
            'La concessione delle generiche è rimessa alla discrezionalità del giudice, che non è tenuto a esaminare tutti i parametri della commisurazione: è sufficiente che indichi quello considerato prevalente. Pretendere una motivazione analitica su ciascun elemento significherebbe trasformare un potere discrezionale in un obbligo di concessione salvo prova contraria.',
          riferimenti: [
            { testo: 'art. 62-bis c.p.', tipo: 'norma' },
            { testo: 'art. 133 c.p.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'No, quando la gravità del fatto è già stata spesa per fissare la pena base: usarla una seconda volta è duplicazione valutativa e la motivazione è apparente.',
          argomento:
            'Gli elementi della commisurazione e quelli delle generiche operano su piani distinti. Se lo stesso dato serve prima ad alzare la pena base e poi a negare l’attenuazione, il giudice non ha compiuto due valutazioni ma una sola, contata due volte a danno dell’imputato: la motivazione esiste graficamente ma non regge al controllo, ed è quindi apparente.',
          riferimenti: [
            { testo: 'art. 546, comma 1, lett. e), c.p.p.', tipo: 'norma' },
            { testo: 'art. 125, comma 3, c.p.p.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Per l’assistito la seconda lettura è l’unica che apre uno spazio, ed è spendibile solo se si dimostra in concreto la sovrapposizione: bisogna citare il passaggio in cui la sentenza ha usato la gravità per la pena base e quello in cui la riusa per negare le generiche. Senza questo confronto testuale il motivo resta un’affermazione e cade sotto il vaglio di specificità.',
    },
  ],
  trappole: [
    'Scrivere che l’appello è inammissibile senza il deposito della dichiarazione o elezione di domicilio: quell’onere è stato abrogato dalla legge 114/2024 e i manuali del 2023 lo riportano ancora come vigente.',
    'Dimenticare, all’opposto, che il mandato specifico a impugnare per l’imputato assente è rimasto in vigore per il difensore d’ufficio. Abrogato uno, non sono caduti entrambi.',
    'Costruire i motivi per argomenti anziché per capi e punti della decisione. È il modo più diretto per incappare nel difetto di specificità.',
    'Chiedere in appello una rivalutazione degli indizi senza indicare il vizio del ragionamento probatorio. Il giudice del gravame riesamina il merito, ma solo sui punti devoluti e sulle ragioni dedotte.',
    'Trattare le attenuanti generiche come un diritto negato ingiustamente anziché come un punto della decisione motivato in modo apparente. La prima è una lamentela, la seconda è un motivo.',
    'Non graduare le richieste. Assoluzione, riqualificazione, rideterminazione della pena e benefici vanno chiesti in ordine, perché il giudice decide su ciò che gli si chiede.',
    'Ignorare il divieto di reformatio in peius quando appella il solo imputato: è un argomento che rassicura il cliente e che va detto anche a lui, non solo al giudice.',
  ],
  griglia: [
    {
      voce: 'Scelta e qualificazione dell’impugnazione',
      peso: 15,
      criterio: 'Hai scelto appello o ricorso in coerenza con i vizi dedotti e l’hai motivato.',
    },
    {
      voce: 'Specificità dei motivi',
      peso: 25,
      criterio: 'Un motivo per capo e punto, con citazione del passaggio contestato e richiesta finale.',
    },
    {
      voce: 'Oneri formali vigenti',
      peso: 15,
      criterio: 'Hai applicato l’art. 581 c.p.p. nella versione dopo la legge 114/2024.',
    },
    {
      voce: 'Censura sull’elemento soggettivo',
      peso: 20,
      criterio: 'Hai attaccato il metodo della prova indiziaria, non il solo risultato.',
    },
    {
      voce: 'Trattamento sanzionatorio',
      peso: 15,
      criterio: 'Diniego delle generiche aggredito come vizio di motivazione, con richieste graduate.',
    },
    {
      voce: 'Tecnica redazionale',
      peso: 10,
      criterio: 'Intestazione, indicazione dei capi impugnati, conclusioni ordinate, termini rispettati.',
    },
  ],
};
