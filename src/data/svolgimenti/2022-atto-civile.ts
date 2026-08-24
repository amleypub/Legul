import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * La traccia mette in mano al candidato due rimedi che sembrano
 * cumulabili e non lo sono. La scelta fra esecuzione in forma specifica
 * e recesso con ritenzione della caparra va fatta prima di scrivere
 * l'atto, perché dopo il processo non la si cambia più: è il punto in
 * cui si vede chi ha capito la traccia e chi ha elencato istituti.
 */
export const attoCivile2022: Svolgimento = {
  tracciaId: '2022-atto-civile',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'Quale rimedio conviene: esecuzione in forma specifica dell’obbligo di concludere il contratto, risoluzione con risarcimento, o recesso con il doppio della caparra.',
    'Perché la scelta è irreversibile: i rimedi non sono cumulabili né intercambiabili in corso di causa.',
    'Se e come trascrivere la domanda giudiziale, e che cosa si perde a non farlo.',
    'Che cosa deve offrire il promissario acquirente perché la domanda ex art. 2932 c.c. sia accoglibile.',
    'Se la pretestuosità del rifiuto — la sopravvenuta variazione del valore di mercato — abbia rilievo giuridico o sia solo un dato di colore.',
    'Quali condizioni di procedibilità gravano su una controversia in materia di diritti reali immobiliari.',
    'Quale atto redigere, con quali domande e in quale ordine.',
  ],
  blocchi: [
    {
      id: 'rimedi',
      titolo: 'I tre rimedi e la scelta',
      sintesi: 'Non sono cumulabili: si sceglie prima di scrivere, e la scelta non si cambia.',
      paragrafi: [
        'Davanti al rifiuto del promittente venditore il promissario dispone di tre strade. Può chiedere la sentenza che produca gli effetti del contratto non concluso, ottenendo l’immobile. Può chiedere la risoluzione per inadempimento con il risarcimento del danno effettivo, che va provato. Può recedere dal contratto e ritenere il doppio della caparra confirmatoria ricevuta, con una liquidazione forfetaria che non richiede prova del danno.',
        'La prima cosa da capire è che i rimedi non stanno sullo stesso piano. L’esecuzione in forma specifica mira a conservare il contratto e a realizzarne il risultato; risoluzione e recesso mirano invece a scioglierlo. Le due direzioni sono opposte e non si tengono insieme.',
        'La seconda, che è il vero snodo della traccia, è che domanda di risoluzione con risarcimento e recesso con ritenzione della caparra sono state dichiarate strutturalmente e funzionalmente incompatibili: proposta l’una, il passaggio all’altra costituisce domanda nuova e come tale è inammissibile in corso di causa. Non è una preferenza di stile: è una preclusione processuale che si produce con l’atto introduttivo.',
        'Il criterio di scelta è quindi economico prima che giuridico, e va discusso con il cliente. Se l’immobile interessa ancora e il prezzo pattuito è oggi conveniente — cosa che la traccia lascia intendere, visto che il venditore si tira indietro proprio perché il valore è salito — la strada è l’art. 2932 c.c. Se l’interesse è venuto meno, il recesso con il doppio della caparra offre un ristoro immediato senza onere probatorio, ma rinuncia al maggior danno.',
        'Il rimedio scelto va indicato in via principale, e le domande subordinate vanno formulate con attenzione: si può chiedere in subordine la risoluzione per il caso in cui l’esecuzione specifica risulti impossibile, perché in quel caso non si sta cambiando cavallo in corsa ma prevedendo un’impossibilità sopravvenuta del primo rimedio.',
      ],
      riferimenti: [
        { testo: 'art. 2932 c.c.', tipo: 'norma' },
        { testo: 'art. 1385 c.c.', tipo: 'norma' },
        { testo: 'art. 1453 c.c.', tipo: 'norma' },
        { testo: 'Cass. Sez. Un. n. 553/2009', tipo: 'giurisprudenza' },
      ],
    },
    {
      id: 'duemilanovecentotrentadue',
      titolo: 'La domanda di esecuzione in forma specifica',
      sintesi: 'Il presupposto che si dimentica: l’offerta della prestazione.',
      paragrafi: [
        'La sentenza costitutiva che tiene luogo del contratto non concluso presuppone che l’esecuzione in forma specifica sia possibile e non esclusa dal titolo. Vanno quindi verificati e allegati: la validità del preliminare, la sua idoneità a individuare l’immobile e il prezzo, l’assenza di clausole che escludano il rimedio, la conformità urbanistica e catastale che condiziona la commerciabilità del bene.',
        'Il presupposto che più spesso si dimentica è però un altro, e la legge lo enuncia espressamente: se si tratta di contratti che hanno per oggetto il trasferimento della proprietà di una cosa determinata, la domanda non può essere accolta se la parte che l’ha proposta non esegue la sua prestazione o non ne fa offerta nei modi di legge. Il promissario deve cioè offrire il saldo del prezzo, e l’offerta va allegata nell’atto.',
        'L’offerta non deve necessariamente essere formale nei modi degli artt. 1208 e seguenti del codice civile: la giurisprudenza ammette che la manifestazione della volontà di adempiere possa risultare dalla stessa domanda giudiziale, purché sia seria e concreta. Ma un atto che non ne fa parola espone a un rigetto per una ragione che nulla ha a che vedere con il merito.',
        'Va infine considerato il coordinamento con la caparra già versata: se si ottiene la sentenza costitutiva, la caparra si imputa al prezzo. Chiederne insieme la restituzione o il doppio sarebbe contraddittorio, perché quel rimedio presuppone lo scioglimento del contratto che con l’art. 2932 c.c. si sta invece eseguendo.',
      ],
      riferimenti: [
        { testo: 'art. 2932, comma 2, c.c.', tipo: 'norma' },
        { testo: 'art. 1351 c.c.', tipo: 'norma' },
        { testo: 'art. 1208 c.c.', tipo: 'norma' },
        { testo: 'art. 40 l. 47/1985', tipo: 'norma' },
      ],
    },
    {
      id: 'trascrizione',
      titolo: 'La trascrizione della domanda',
      sintesi: 'L’effetto prenotativo: chi non trascrive rischia di vincere e non ottenere nulla.',
      paragrafi: [
        'La domanda diretta a ottenere l’esecuzione in forma specifica dell’obbligo di contrarre va trascritta. La trascrizione non è un adempimento burocratico: produce l’effetto prenotativo per cui la sentenza che accoglie la domanda prevale sulle trascrizioni e iscrizioni eseguite contro il convenuto dopo la trascrizione della domanda.',
        'Il rischio concreto che si corre a non trascrivere è quello che la traccia rende plausibile: un venditore che si rifiuta di stipulare perché il mercato è salito è un venditore che sta con ogni probabilità trattando con un altro acquirente. Se quello acquista e trascrive prima, la sentenza ottenuta dopo anni di causa è carta.',
        'Va inoltre ricordato che la trascrizione del preliminare, se eseguita, produce a sua volta un effetto prenotativo, ma a termine: gli effetti cessano se entro un anno dalla data convenuta per la stipulazione del definitivo, e comunque entro tre anni dalla trascrizione del preliminare, non è eseguita la trascrizione del contratto definitivo o della domanda giudiziale. È una scadenza da verificare prima di ogni altra cosa, perché se è spirata l’argomento non c’è più.',
        'Nell’atto la trascrizione va menzionata come attività da compiere e va chiesto al giudice, ove ne ricorrano i presupposti, il sequestro giudiziario o conservativo: quando il rischio di alienazione a terzi è concreto, la sola trascrizione della domanda potrebbe non bastare a proteggere il credito risarcitorio subordinato.',
      ],
      riferimenti: [
        { testo: 'art. 2652, n. 2, c.c.', tipo: 'norma' },
        { testo: 'art. 2645-bis c.c.', tipo: 'norma' },
        { testo: 'art. 2643 c.c.', tipo: 'norma' },
        { testo: 'art. 670 c.p.c.', tipo: 'norma' },
      ],
    },
    {
      id: 'inadempimento',
      titolo: 'L’inadempimento e la sua non scarsa importanza',
      sintesi: 'Il rifiuto pretestuoso non è colore: è l’elemento che qualifica la condotta.',
      paragrafi: [
        'La traccia precisa che il rifiuto è motivato dalla sopravvenuta variazione del valore di mercato dell’immobile. Non è un dettaglio narrativo: è ciò che rende l’inadempimento non solo oggettivo ma anche privo di qualunque giustificazione, e serve a due cose diverse.',
        'Serve, in primo luogo, a escludere le eccezioni che il convenuto tenterà. La variazione del valore di mercato non integra un’ipotesi di eccessiva onerosità sopravvenuta rilevante, perché quella richiede avvenimenti straordinari e imprevedibili e non opera nei contratti in cui l’alea è normale: l’oscillazione dei prezzi immobiliari rientra nell’alea normale della compravendita. Va detto preventivamente nell’atto, per non lasciare al convenuto il vantaggio della prima mossa.',
        'Serve, in secondo luogo, a fondare la non scarsa importanza dell’inadempimento ove si opti per la risoluzione, e a colorare la condotta in termini di mala fede contrattuale rilevante ai fini del danno. Il rifiuto di stipulare il definitivo, quando il preliminare è valido e il termine è scaduto, è inadempimento dell’obbligazione principale: difficilmente potrebbe dirsi di scarsa importanza.',
        'Va poi verificato se il termine per la stipula fosse essenziale e se sia stata inviata una diffida. In assenza di essenzialità e di diffida, la costituzione in mora si realizza con l’atto introduttivo, ma conviene comunque dare conto delle interlocuzioni precedenti, che documentano la serietà dell’offerta del promissario.',
      ],
      riferimenti: [
        { testo: 'art. 1455 c.c.', tipo: 'norma' },
        { testo: 'art. 1467 c.c.', tipo: 'norma' },
        { testo: 'art. 1375 c.c.', tipo: 'norma' },
        { testo: 'art. 1219 c.c.', tipo: 'norma' },
      ],
    },
    {
      id: 'processo',
      titolo: 'Procedibilità, competenza, atto',
      sintesi: 'Diritti reali immobiliari: la mediazione qui è obbligatoria davvero.',
      paragrafi: [
        'A differenza della fornitura di beni, questa materia rientra fra quelle a mediazione obbligatoria: la controversia in materia di diritti reali immobiliari è nell’elenco, e l’esperimento del procedimento è condizione di procedibilità. Va indicato nell’atto che la mediazione è stata esperita, con gli estremi del verbale, oppure va chiesto al giudice il termine.',
        'La competenza per territorio segue il foro delle cause relative a diritti reali su beni immobili, che è quello del luogo dove è posto l’immobile, concorrente con i fori generali. La competenza per valore va determinata sul prezzo pattuito.',
        'L’atto è la citazione. Valgono il termine a comparire di centoventi giorni e gli avvertimenti prescritti a pena di nullità, fra cui l’invito a costituirsi nel termine di settanta giorni prima dell’udienza indicata e l’avvertimento sulle decadenze. Vanno rispettate anche le verifiche preliminari e il sistema di memorie introdotto dalla riforma del 2022, che sposta a monte dell’udienza tutta l’attività di trattazione.',
        'Le conclusioni vanno costruite così: in via principale l’accertamento dell’inadempimento e la pronuncia della sentenza che tenga luogo del contratto non concluso, previa offerta del saldo del prezzo, con ordine di trascrizione; in via subordinata, per il caso di impossibilità dell’esecuzione specifica, la risoluzione con il risarcimento; in ogni caso, le spese. La domanda di condanna alle spese va formulata: non si presume.',
      ],
      riferimenti: [
        { testo: 'art. 5, comma 1-bis, d.lgs. 28/2010', tipo: 'norma' },
        { testo: 'art. 21 c.p.c.', tipo: 'norma' },
        { testo: 'art. 163 c.p.c.', tipo: 'norma' },
        { testo: 'art. 171-bis c.p.c.', tipo: 'norma' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'mutamento-domanda',
      questione:
        'Chi ha chiesto la risoluzione con risarcimento può poi passare al recesso con ritenzione della caparra, o viceversa?',
      orientamenti: [
        {
          tesi:
            'No: i due rimedi sono strutturalmente e funzionalmente incompatibili, e il passaggio dall’uno all’altro integra domanda nuova.',
          argomento:
            'Chi domanda la risoluzione con il risarcimento sceglie la liquidazione giudiziale del danno effettivo e con ciò rinuncia alla liquidazione forfetaria che la caparra realizza automaticamente. Consentire in appello la conversione della domanda di risoluzione in domanda di recesso significherebbe riattivare surrettiziamente il meccanismo legale della ritenzione, ormai caducato per effetto delle preclusioni prodottesi con la domanda iniziale.',
          riferimenti: [
            { testo: 'Cass. Sez. Un. n. 553/2009', tipo: 'giurisprudenza' },
            { testo: 'art. 345 c.p.c.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'Sì, entro certi limiti: le due azioni sono fungibili perché muovono dallo stesso presupposto, l’inadempimento di non scarsa importanza della controparte.',
          argomento:
            'L’inadempimento che legittima il recesso con ritenzione della caparra è il medesimo che giustificherebbe la risoluzione. Poiché il fatto costitutivo è identico e cambia solo il criterio di liquidazione del pregiudizio, il passaggio non muterebbe i termini oggettivi della lite ma soltanto la misura della pretesa, restando entro i confini dell’emendatio libelli.',
          riferimenti: [
            { testo: 'art. 1385, comma 2, c.c.', tipo: 'norma' },
            { testo: 'art. 183 c.p.c.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'La scelta va fatta prima di depositare l’atto e va fatta con il cliente, perché non si torna indietro: se il primo orientamento è quello applicato, chi ha domandato risoluzione e risarcimento e poi scopre di non riuscire a provare il danno si trova con una vittoria che non vale il doppio della caparra. Non esiste un modo di scriverla che copra entrambe le ipotesi.',
    },
    {
      id: 'offerta-prestazione',
      questione:
        'L’offerta del saldo del prezzo richiesta per l’accoglimento della domanda ex art. 2932 c.c. deve avere forma solenne?',
      orientamenti: [
        {
          tesi:
            'Basta una manifestazione di volontà seria e concreta, che può risultare dalla stessa domanda giudiziale.',
          argomento:
            'La norma richiede l’esecuzione della prestazione o l’offerta «nei modi di legge», ma la funzione della previsione è assicurare che il promissario sia effettivamente disposto ad adempiere, non imporgli un rituale. Poiché il pagamento va eseguito contestualmente al trasferimento, che avverrà solo con la sentenza, un’offerta reale anticipata sarebbe priva di senso pratico.',
          riferimenti: [
            { testo: 'art. 2932, comma 2, c.c.', tipo: 'norma' },
            { testo: 'art. 1206 c.c.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'Serve l’offerta formale nelle forme degli artt. 1208 e seguenti, o quanto meno l’offerta per intimazione.',
          argomento:
            'Il rinvio ai «modi di legge» è un rinvio alle norme sull’offerta della prestazione, che quei modi disciplinano espressamente. Una lettura che si accontenti della domanda giudiziale svuota il rinvio e priva il promittente della possibilità di verificare la concreta disponibilità della somma, che è proprio ciò che la norma vuole garantirgli.',
          riferimenti: [
            { testo: 'art. 1208 c.c.', tipo: 'norma' },
            { testo: 'art. 1216 c.c.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Qui il contrasto si neutralizza in redazione: si formula l’offerta nell’atto in modo espresso e circostanziato, indicando la provvista e dichiarandosi disponibili a versarla anche in via anticipata presso un conto vincolato o alla stipula. Costa tre righe e rende irrilevante quale delle due tesi il giudice segua.',
    },
  ],
  trappole: [
    'Cumulare la domanda ex art. 2932 c.c. con la richiesta del doppio della caparra. La prima esegue il contratto, la seconda lo scioglie: chiederle insieme rivela che non si è capito il rapporto fra i rimedi.',
    'Dimenticare l’offerta del saldo del prezzo. È un presupposto di accoglimento scritto nella norma, e la sua assenza fa rigettare la domanda senza che il giudice entri nel merito.',
    'Non trascrivere la domanda giudiziale. In una vicenda in cui il venditore si sfila perché il mercato è salito, è l’omissione che può rendere inutile l’intera causa.',
    'Non verificare il termine di efficacia della trascrizione del preliminare, ove eseguita. Se è spirato, l’effetto prenotativo non c’è più e l’argomento va abbandonato.',
    'Trascurare la mediazione. In materia di diritti reali immobiliari è condizione di procedibilità e la sua mancanza si rileva d’ufficio.',
    'Trattare la variazione del valore di mercato come un fatto irrilevante. È l’elemento che smonta preventivamente l’eccezione di eccessiva onerosità e che qualifica la mala fede del promittente.',
    'Omettere la domanda di condanna alle spese. Non si presume, e nell’atto d’esame la sua assenza si nota.',
  ],
  griglia: [
    {
      voce: 'Scelta del rimedio e sua coerenza',
      peso: 25,
      criterio: 'Hai scelto un rimedio, motivato la scelta e non hai cumulato l’incumulabile.',
    },
    {
      voce: 'Presupposti dell’art. 2932 c.c.',
      peso: 20,
      criterio: 'Validità del preliminare, possibilità dell’esecuzione, offerta del saldo del prezzo.',
    },
    {
      voce: 'Trascrizione ed effetto prenotativo',
      peso: 15,
      criterio: 'Hai trascritto la domanda e spiegato perché, con i termini della trascrizione del preliminare.',
    },
    {
      voce: 'Inadempimento e difese preventive',
      peso: 15,
      criterio: 'Non scarsa importanza argomentata; eccezione di eccessiva onerosità anticipata e smontata.',
    },
    {
      voce: 'Procedibilità e competenza',
      peso: 15,
      criterio: 'Mediazione obbligatoria e foro dell’immobile trattati, non dati per scontati.',
    },
    {
      voce: 'Tecnica redazionale',
      peso: 10,
      criterio: 'Editto, avvertimenti, termine a comparire, conclusioni graduate, spese.',
    },
  ],
};
