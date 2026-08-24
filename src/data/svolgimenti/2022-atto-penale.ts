import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * Il riesame è la prova in cui la tecnica conta più della dottrina:
 * termini brevissimi, effetto devolutivo pieno, e un'ordinanza da
 * smontare punto per punto. La traccia offre due appigli molto concreti
 * — la motivazione che non si confronta con la difesa e il tempo
 * trascorso dai fatti — e conviene costruirci sopra l'intero atto
 * invece di ripercorrere la teoria delle misure cautelari.
 */
export const attoPenale2022: Svolgimento = {
  tracciaId: '2022-atto-penale',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'Quale rimedio: riesame, appello cautelare o ricorso per cassazione. Contro un’ordinanza applicativa la strada è una sola.',
    'I termini, che nel riesame sono perentori e brevissimi, e la struttura a orologeria che ne discende.',
    'Se l’ordinanza soddisfi l’obbligo di autonoma valutazione o si limiti a recepire la richiesta del pubblico ministero.',
    'Se gli indizi siano gravi nel senso richiesto dalla legge, che non coincide con la gravità del reato.',
    'Se le esigenze cautelari siano attuali, e che peso abbia il tempo trascorso dai fatti.',
    'Se la custodia in carcere superi il vaglio di adeguatezza e proporzionalità, o se basti una misura meno afflittiva.',
    'Che cosa chiedere: annullamento, sostituzione, attenuazione — e in quale ordine.',
  ],
  blocchi: [
    {
      id: 'rimedio',
      titolo: 'Il rimedio e i termini',
      sintesi: 'Dieci giorni per proporlo, dieci perché il tribunale decida: tutto ruota qui.',
      paragrafi: [
        'Contro l’ordinanza che dispone una misura cautelare personale il rimedio è la richiesta di riesame, proponibile dall’imputato e dal suo difensore entro dieci giorni dall’esecuzione o notificazione del provvedimento. L’appello cautelare riguarda i provvedimenti diversi da quelli applicativi, e il ricorso per cassazione è ammesso per saltum ma solo per violazione di legge: chi vuole discutere di gravità indiziaria e di esigenze deve andare al riesame.',
        'Il riesame ha effetto devolutivo pieno: il tribunale conosce dell’intera vicenda cautelare anche oltre i motivi, che infatti possono essere enunciati contestualmente o riservati fino all’udienza. Questo non deve però indurre a proporre una richiesta priva di motivi: il tribunale decide su ciò che ha davanti, e un atto argomentato orienta la decisione.',
        'La struttura dei termini è la ragione per cui questo atto va scritto pensando all’orologio. Gli atti devono essere trasmessi al tribunale entro cinque giorni dalla richiesta; la decisione deve intervenire entro dieci giorni dalla ricezione degli atti, a pena di perdita di efficacia della misura. Sono termini perentori la cui inosservanza produce la caducazione: vanno verificati e, se violati, eccepiti per primi, perché rendono superfluo ogni altro argomento.',
        'Nell’atto conviene aprire proprio con la verifica dei termini e con la richiesta di declaratoria di inefficacia in via preliminare, per poi svolgere i motivi di merito in via subordinata. È l’ordine che rispecchia la logica del rimedio.',
      ],
      riferimenti: [
        { testo: 'art. 309 c.p.p.', tipo: 'norma' },
        { testo: 'art. 310 c.p.p.', tipo: 'norma' },
        { testo: 'art. 311 c.p.p.', tipo: 'norma' },
        { testo: 'art. 309, comma 10, c.p.p.', tipo: 'norma' },
      ],
    },
    {
      id: 'motivazione',
      titolo: 'L’autonoma valutazione del giudice',
      sintesi: 'L’ordinanza deve dire perché il giudice è d’accordo, non solo che lo è.',
      paragrafi: [
        'L’ordinanza cautelare deve contenere, a pena di nullità rilevabile anche d’ufficio, l’esposizione e l’autonoma valutazione delle specifiche esigenze cautelari e degli indizi che giustificano in concreto la misura, con l’indicazione degli elementi di fatto da cui sono desunti e dei motivi per i quali essi assumono rilevanza, tenuto conto anche del tempo trascorso dalla commissione del reato.',
        'La formula «autonoma valutazione» è stata introdotta nel 2015 proprio per reagire alla prassi delle ordinanze che riproducevano la richiesta del pubblico ministero. Il requisito non impone al giudice di riscrivere con parole proprie ciò che condivide: impone che dal provvedimento emerga di avere compiuto un vaglio critico e di avere spiegato perché quegli elementi giustificano la misura.',
        'Nella traccia l’ordinanza valorizza esclusivamente la gravità del fatto e non si confronta con gli elementi difensivi né con il tempo trascorso. Sono due omissioni distinte e vanno dedotte separatamente: la prima riguarda l’autonomia della valutazione, la seconda riguarda un elemento che la legge impone espressamente di considerare.',
        'La nullità che ne deriva non è assoluta: è a regime intermedio, il che significa che va eccepita tempestivamente e che il tribunale del riesame può, entro certi limiti, integrare la motivazione carente. Questo va detto nell’atto, perché consente di anticipare l’obiezione e di spiegare perché nel caso concreto l’integrazione non è possibile: quando manca del tutto la valutazione, non c’è nulla da integrare.',
        'Va poi tenuto presente un dato che gioca a sfavore e che conviene conoscere prima di scommetterci sopra: l’obbligo di autonoma valutazione riguarda il giudice che emette la misura inaudita altera parte, non l’ordinanza del tribunale del riesame, che proprio per questo può svolgere una valutazione propria e completa. Il vizio va quindi fatto valere subito e in modo che non sia sanabile, non tenuto in serbo.',
        'Tecnicamente il motivo si costruisce affiancando in due colonne il testo della richiesta del pubblico ministero e quello dell’ordinanza. Se coincidono, la sovrapposizione va documentata: è l’unico modo per trasformare un’impressione in un rilievo verificabile.',
      ],
      riferimenti: [
        { testo: 'art. 292, comma 2, lett. c), c.p.p.', tipo: 'norma' },
        { testo: 'l. 47/2015', tipo: 'norma' },
        { testo: 'art. 178 c.p.p.', tipo: 'norma' },
        { testo: 'Cass. pen. n. 9413/2024', tipo: 'giurisprudenza' },
      ],
    },
    {
      id: 'indizi',
      titolo: 'La gravità indiziaria',
      sintesi: 'Gravi non vuol dire che il reato è grave: vuol dire che l’indizio è solido.',
      paragrafi: [
        'La misura presuppone gravi indizi di colpevolezza. È l’equivoco più diffuso e va sciolto subito: la gravità richiesta non è quella del reato contestato ma quella degli elementi indiziari, che devono essere tali da rendere altamente probabile la responsabilità dell’indagato secondo un giudizio prognostico.',
        'Un’ordinanza che desume la gravità indiziaria dalla gravità del titolo di reato compie una sostituzione logica: prende un dato che rileva ai fini della proporzionalità della misura e lo usa per fondare il presupposto probatorio. Il motivo va scritto così, perché mette in luce un errore di metodo e non un semplice dissenso valutativo.',
        'Per un reato contro la pubblica amministrazione conviene entrare nel merito degli elementi costitutivi contestati e verificare che ciascuno trovi riscontro: la qualifica soggettiva, l’atto d’ufficio, il rapporto sinallagmatico fra utilità e atto quando la fattispecie lo richiede. La difesa cautelare che si limita a negare in blocco è meno efficace di quella che smonta un elemento specifico.',
        'Vanno infine spesi gli elementi difensivi che l’ordinanza ha ignorato. Se erano già agli atti, la loro pretermissione è vizio di motivazione; se non lo erano, il riesame è la sede per produrli, perché il tribunale può tenere conto degli elementi sopravvenuti a favore dell’indagato.',
      ],
      riferimenti: [
        { testo: 'art. 273, comma 1, c.p.p.', tipo: 'norma' },
        { testo: 'art. 273, comma 1-bis, c.p.p.', tipo: 'norma' },
        { testo: 'art. 192 c.p.p.', tipo: 'norma' },
        { testo: 'art. 309, comma 9, c.p.p.', tipo: 'norma' },
      ],
    },
    {
      id: 'esigenze',
      titolo: 'Attualità, adeguatezza, proporzionalità',
      sintesi: 'Il tempo trascorso non è un dettaglio: la legge impone di tenerne conto.',
      paragrafi: [
        'Le esigenze cautelari devono essere concrete e attuali. L’aggettivo «attuali» è stato aggiunto dalla riforma del 2015 con riferimento al pericolo di reiterazione, e la stessa riforma ha stabilito che quel pericolo non può essere desunto esclusivamente dalla gravità del titolo di reato.',
        'È esattamente ciò che nella traccia l’ordinanza ha fatto. Il motivo si scrive citando la norma e mostrando che la motivazione non contiene altro: non elementi sulla personalità, non condotte successive, non un contesto operativo ancora in essere. Quando la gravità del fatto è l’unico argomento, la norma è violata alla lettera.',
        'Il tempo trascorso dai fatti opera su due piani. Sul piano dell’attualità, un intervallo significativo senza condotte ulteriori indebolisce la prognosi di reiterazione, tanto più in un reato che presuppone una funzione pubblica che l’indagato potrebbe non esercitare più. Sul piano della motivazione, la legge impone espressamente al giudice di tenerne conto: non averlo fatto è omissione su un elemento normativamente indicato.',
        'Restano poi i criteri di scelta della misura: ogni misura deve essere proporzionata all’entità del fatto e alla sanzione irrogabile, e la custodia in carcere può essere disposta soltanto quando ogni altra misura risulti inadeguata. Il carcere è cioè l’ultima risorsa e la sua scelta richiede una motivazione rafforzata sull’insufficienza delle alternative, arresti domiciliari con braccialetto compresi.',
        'La richiesta va quindi graduata: in via principale l’annullamento dell’ordinanza; in subordine la sostituzione con una misura meno afflittiva, indicando quale e perché sarebbe adeguata; in ulteriore subordine l’attenuazione delle prescrizioni. Chiedere solo l’annullamento significa lasciare al tribunale una sola alternativa, che è confermare.',
      ],
      riferimenti: [
        { testo: 'art. 274, comma 1, lett. c), c.p.p.', tipo: 'norma' },
        { testo: 'art. 275, comma 2, c.p.p.', tipo: 'norma' },
        { testo: 'art. 275, comma 3, c.p.p.', tipo: 'norma' },
        { testo: 'art. 275, comma 3-bis, c.p.p.', tipo: 'norma' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'autonoma-valutazione',
      questione:
        'L’ordinanza che recepisce per relationem la richiesta del pubblico ministero soddisfa l’obbligo di autonoma valutazione?',
      orientamenti: [
        {
          tesi:
            'Sì, purché il giudice dia conto del proprio esame critico degli elementi e delle ragioni per cui li ritiene idonei a giustificare la misura.',
          argomento:
            'La norma richiede autonomia di valutazione, non originalità di scrittura. Se il giudice condivide la ricostruzione del pubblico ministero, riscriverla con parole diverse non aggiungerebbe garanzia alcuna: ciò che conta è che dal provvedimento emerga il vaglio, il che può avvenire anche mediante rinvio a elementi obiettivi già ricostruiti negli atti, accompagnato dall’indicazione delle ragioni della condivisione.',
          riferimenti: [
            { testo: 'Cass. pen. n. 30327/2025', tipo: 'giurisprudenza' },
            { testo: 'art. 291 c.p.p.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'No quando l’ordinanza riproduce meccanicamente la richiesta: la tecnica del copia e incolla rende la motivazione apparente e determina la nullità.',
          argomento:
            'Il requisito è stato introdotto nel 2015 proprio per reagire a quella prassi: leggerlo come soddisfatto dalla riproduzione della richiesta significa privare la riforma di ogni effetto. Se il testo del giudice coincide con quello della parte richiedente, manca la prova stessa che una valutazione distinta sia avvenuta, e la garanzia della riserva di giurisdizione sulla libertà personale resta sulla carta.',
          riferimenti: [
            { testo: 'l. 47/2015', tipo: 'norma' },
            { testo: 'art. 13 Cost.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'La differenza fra i due orientamenti non si gioca in astratto ma sul documento: il primo protegge il rinvio ragionato, il secondo colpisce la riproduzione pedissequa. Per l’atto significa che non basta affermare il vizio — bisogna dimostrare la coincidenza testuale, riportando i passaggi affiancati. Un motivo che dica soltanto «il giudice ha recepito la richiesta» cade sotto entrambe le letture.',
    },
    {
      id: 'tempo-trascorso',
      questione:
        'Il tempo trascorso dai fatti, in assenza di condotte successive, è di per sé sufficiente a escludere l’attualità del pericolo di reiterazione?',
      orientamenti: [
        {
          tesi:
            'No: il tempo è un elemento di valutazione fra gli altri e va apprezzato insieme alla personalità e al contesto, non isolatamente.',
          argomento:
            'La norma impone al giudice di tenerne conto, non di trarne una conseguenza automatica. In reati che si consumano nell’esercizio di una funzione e che restano occulti a lungo, l’assenza di condotte ulteriori può dipendere dall’emersione dell’indagine più che da un mutamento della persona: dedurne la cessazione del pericolo sarebbe una presunzione senza base.',
          riferimenti: [
            { testo: 'art. 292, comma 2, lett. c), c.p.p.', tipo: 'norma' },
            { testo: 'art. 274, comma 1, lett. c), c.p.p.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'Sì, quando l’intervallo è significativo e nulla è sopravvenuto: l’attualità richiede un pericolo che esista oggi, e un pericolo risalente non lo è.',
          argomento:
            'Il legislatore del 2015 ha aggiunto l’aggettivo «attuali» proprio per impedire che una prognosi formulata sul fatto storico si perpetuasse nel tempo. Se fra i fatti e la misura intercorrono anni e nel frattempo la persona ha tenuto una condotta regolare, affermare che il pericolo è attuale significa fondarlo di nuovo sulla sola gravità del reato, che è ciò che la stessa norma vieta.',
          riferimenti: [
            { testo: 'l. 47/2015', tipo: 'norma' },
            { testo: 'art. 274, comma 1, lett. c), c.p.p.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Per l’assistito il secondo orientamento è quello da spendere, ma va irrobustito: al tempo trascorso si affiancano gli elementi che dimostrano il mutamento della situazione — cessazione dalla funzione, assenza di procedimenti successivi, condotta collaborativa. Il tempo da solo è un argomento fragile; il tempo più il venir meno del contesto operativo è un argomento che regge anche davanti al primo orientamento.',
    },
  ],
  trappole: [
    'Aprire l’atto con la teoria delle misure cautelari. Il riesame si vince sull’ordinanza concreta: la parte generale, se serve, sta in tre righe.',
    'Non verificare i termini di trasmissione degli atti e di decisione. Sono perentori e la loro violazione fa perdere efficacia alla misura: è il primo controllo da fare, non l’ultimo.',
    'Confondere la gravità degli indizi con la gravità del reato. È l’equivoco che l’ordinanza della traccia commette e che l’atto deve smascherare, non ripetere.',
    'Dedurre il vizio di autonoma valutazione senza documentare la sovrapposizione testuale con la richiesta del pubblico ministero. Senza il confronto è un’affermazione.',
    'Dimenticare che la legge impone di tenere conto del tempo trascorso dalla commissione del reato: è scritto nella norma sulla motivazione, non è un argomento di equità.',
    'Chiedere solo l’annullamento. Senza richieste graduate il tribunale ha una sola alternativa, e di solito sceglie quella.',
    'Non considerare gli arresti domiciliari con procedure di controllo. Il carcere è l’extrema ratio e la difesa deve indicare l’alternativa concreta, non limitarsi a dire che il carcere è eccessivo.',
  ],
  griglia: [
    {
      voce: 'Individuazione del rimedio e dei termini',
      peso: 15,
      criterio: 'Riesame correttamente individuato; termini perentori verificati ed eventualmente eccepiti.',
    },
    {
      voce: 'Vizio di autonoma valutazione',
      peso: 20,
      criterio: 'Dedotto con confronto testuale fra ordinanza e richiesta, e qualificato come nullità.',
    },
    {
      voce: 'Gravità indiziaria',
      peso: 20,
      criterio: 'Hai distinto gravità degli indizi da gravità del reato e attaccato elementi specifici.',
    },
    {
      voce: 'Attualità e tempo trascorso',
      peso: 20,
      criterio: 'Attualità contestata con la norma alla mano, non come argomento di equità.',
    },
    {
      voce: 'Proporzionalità e richieste graduate',
      peso: 15,
      criterio: 'Carcere come extrema ratio; misura alternativa concreta indicata.',
    },
    {
      voce: 'Tecnica redazionale',
      peso: 10,
      criterio: 'Intestazione corretta, motivi numerati, conclusioni in ordine di subordinazione.',
    },
  ],
};
