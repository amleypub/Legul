import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * La traccia sembra chiedere quale delle due fattispecie si applichi, e
 * invece chiede qualcosa di più: come si distinguono e che cosa accade
 * quando i loro presupposti coesistono. Chi risponde «è circonvenzione»
 * senza affrontare il rapporto fra le norme ha svolto metà del parere.
 */
export const parerePenale2019: Svolgimento = {
  tracciaId: '2019-parere-penale',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'Quali sono gli elementi costitutivi della truffa e quali quelli della circonvenzione di persone incapaci.',
    'Qual è il vero criterio distintivo: non il tipo di vittima, ma il modo in cui se ne piega la volontà.',
    'Se lo stato di «deficienza psichica» richiesto dalla norma coincida con l’infermità o sia qualcosa di meno.',
    'Che cosa accade quando i presupposti delle due fattispecie coesistono: concorso di reati o assorbimento.',
    'Quando il reato si consuma, questione che decide la prescrizione e quindi spesso l’esito del processo.',
    'Quali conseguenze sanzionatorie discendono dall’una o dall’altra qualificazione, e quale convenga all’assistito.',
    'Quali strategie difensive sono concretamente praticabili sul terreno probatorio.',
  ],
  blocchi: [
    {
      id: 'fattispecie',
      titolo: 'Le due fattispecie',
      sintesi: 'Stessa vittima, stesso danno, due modi diversi di ottenerlo.',
      paragrafi: [
        'La truffa punisce chi, con artifizi o raggiri, inducendo taluno in errore, procura a sé o ad altri un ingiusto profitto con altrui danno. Gli elementi sono quattro e vanno accertati in sequenza: la condotta ingannatoria, l’errore che ne deriva, l’atto di disposizione patrimoniale compiuto dalla vittima in stato di errore, il danno con correlativo ingiusto profitto.',
        'La circonvenzione di persone incapaci punisce chi, per procurare a sé o ad altri un profitto, abusando dei bisogni, delle passioni o dell’inesperienza di una persona minore, ovvero abusando dello stato d’infermità o deficienza psichica di una persona, anche se non interdetta o inabilitata, la induce a compiere un atto che importi qualsiasi effetto giuridico per lei o per altri dannoso.',
        'Le due norme condividono l’evento — un atto di disposizione pregiudizievole — e la finalità di profitto. Divergono sul mezzo. Nella truffa il mezzo è l’inganno: la volontà della vittima è viziata perché le è stata rappresentata una realtà falsa. Nella circonvenzione il mezzo è l’abuso di una condizione preesistente: la vittima non è ingannata, è sfruttata, e proprio perché le sue difese critiche sono già ridotte non c’è bisogno di costruire un raggiro elaborato.',
        'Questa differenza si riflette anche sull’oggettività giuridica. La circonvenzione tutela il patrimonio ma anche, e forse prima, l’autodeterminazione negoziale del soggetto debole: è la ragione per cui la norma non richiede che la persona sia interdetta o inabilitata, bastando una minorazione di fatto della capacità di autodeterminarsi negli interessi patrimoniali.',
      ],
      riferimenti: [
        { testo: 'art. 640 c.p.', tipo: 'norma' },
        { testo: 'art. 643 c.p.', tipo: 'norma' },
        { testo: 'art. 640, comma 2, c.p.', tipo: 'norma' },
      ],
    },
    {
      id: 'deficienza',
      titolo: 'Lo stato di deficienza psichica',
      sintesi: 'Meno dell’infermità, più della semplice età avanzata.',
      paragrafi: [
        'Il presupposto della circonvenzione è, nella traccia, lo stato di fragilità psichica della persona offesa. La norma affianca l’infermità e la deficienza psichica, e la seconda è la nozione più ampia: non richiede una patologia diagnosticata né una capacità di intendere e volere esclusa o grandemente scemata.',
        'La deficienza psichica rilevante è una minorazione della sfera intellettiva o volitiva che agevoli la suggestionabilità e diminuisca i poteri di critica e di difesa nella gestione degli interessi patrimoniali. Può derivare da decadimento senile, da una condizione di solitudine e dipendenza affettiva, da un disturbo non invalidante: ciò che conta è l’effetto sulla capacità di autodeterminarsi.',
        'Va però evitata l’equazione fra età avanzata e deficienza psichica, che è l’errore più frequente in questa materia e che una difesa attenta deve contestare. L’anzianità di per sé non integra il presupposto: serve la prova, di regola tecnica, di una concreta riduzione delle capacità critiche al tempo degli atti dispositivi.',
        'L’abuso è elemento ulteriore e autonomo rispetto alla condizione: non basta che l’agente sappia della fragilità, occorre che se ne serva, strumentalizzando il rapporto. La giurisprudenza ammette che l’abuso possa consistere anche nello sfruttamento di un rapporto fiduciario, senza inganno diretto. È il punto su cui la difesa può lavorare, mostrando che le dazioni avevano una causa autonoma — riconoscenza, corrispettivo di assistenza prestata, liberalità consapevole.',
      ],
      riferimenti: [
        { testo: 'art. 643 c.p.', tipo: 'norma' },
        { testo: 'Cass. pen. n. 8022/2025', tipo: 'giurisprudenza' },
        { testo: 'art. 428 c.c.', tipo: 'norma' },
        { testo: 'art. 220 c.p.p.', tipo: 'norma' },
      ],
    },
    {
      id: 'qualificazione',
      titolo: 'La qualificazione del fatto della traccia',
      sintesi: 'Ci sono entrambi gli ingredienti: è qui che il parere deve scegliere.',
      paragrafi: [
        'La vicenda descritta contiene tutti e due gli elementi. C’è l’abuso di una condizione di fragilità psichica, che è il cuore della circonvenzione. Ma c’è anche una condotta ingannatoria autonoma — la prospettazione di investimenti in realtà inesistenti — che di per sé integrerebbe l’artifizio della truffa.',
        'Non si tratta quindi di scegliere quale delle due fattispecie descriva meglio il fatto, ma di stabilire come le due norme si rapportino quando i loro presupposti coesistono. È la questione che la traccia chiede di affrontare e che distingue un parere da un riassunto di manuale.',
        'Un dato va comunque fissato: la ripetitività delle dazioni. La condotta si è protratta nel tempo con più consegne di denaro, e questo apre il tema della continuazione ovvero del reato unitario a consumazione prolungata, con conseguenze rilevanti sulla decorrenza della prescrizione.',
        'Sul momento consumativo, per la circonvenzione la giurisprudenza ha chiarito che il reato non è di pericolo ma di danno, e che si consuma con il compimento dell’atto produttivo di effetti giuridici pregiudizievoli. Non serve attendere il concreto depauperamento: serve però che l’atto sia venuto a esistenza. È il dato da cui far decorrere il termine, e in una vicenda risalente può valere l’intero processo.',
      ],
      riferimenti: [
        { testo: 'art. 81 c.p.', tipo: 'norma' },
        { testo: 'art. 157 c.p.', tipo: 'norma' },
        { testo: 'art. 158 c.p.', tipo: 'norma' },
        { testo: 'art. 643 c.p.', tipo: 'norma' },
      ],
    },
    {
      id: 'conseguenze',
      titolo: 'Conseguenze sanzionatorie e strategia',
      sintesi: 'Quale qualificazione conviene, e come si costruisce la difesa sul fatto.',
      paragrafi: [
        'Le cornici edittali non coincidono e la scelta non è indifferente per l’assistito. La circonvenzione è punita più severamente della truffa semplice, ed è procedibile d’ufficio; la truffa semplice è procedibile a querela, salvo le ipotesi aggravate. La verifica della tempestività e della validità della querela, ove la qualificazione approdi alla truffa, è dunque il primo controllo da fare.',
        'Va inoltre considerata l’eventuale circostanza aggravante che riguarda i fatti commessi in danno di persona che versi in condizioni di minorata difesa, applicabile anche in ragione dell’età: se contestata, incide sul trattamento e sulla procedibilità.',
        'Sul piano difensivo, il terreno più solido non è la qualificazione ma il fatto. Contestare l’esistenza stessa della deficienza psichica al tempo degli atti, con perizia; documentare l’esistenza di una causa lecita delle dazioni; dimostrare che la persona offesa gestiva autonomamente altri affari nello stesso periodo. Sono argomenti che, se accolti, escludono il reato invece di ridurlo.',
        'Il parere va chiuso indicando la qualificazione ritenuta più probabile, le conseguenze che ne derivano, e le condotte immediate da suggerire: verifica dei termini di prescrizione per ciascuna dazione, valutazione dell’offerta risarcitoria alla persona offesa o ai suoi familiari, che incide sulle attenuanti e, nella truffa procedibile a querela, sulla possibilità di remissione.',
      ],
      riferimenti: [
        { testo: 'art. 640, comma 3, c.p.', tipo: 'norma' },
        { testo: 'art. 61, n. 5, c.p.', tipo: 'norma' },
        { testo: 'art. 62, n. 6, c.p.', tipo: 'norma' },
        { testo: 'art. 152 c.p.', tipo: 'norma' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'concorso-assorbimento',
      questione:
        'Quando l’agente inganna una persona che versa già in stato di deficienza psichica, truffa e circonvenzione concorrono o l’una assorbe l’altra?',
      orientamenti: [
        {
          tesi:
            'L’assorbimento: la condizione di circonvenibilità della persona offesa assorbe la possibilità di configurare anche la truffa.',
          argomento:
            'Quando la vittima è già priva delle normali difese critiche, l’artificio perde la sua funzione tipica, che è quella di creare un errore in chi sarebbe altrimenti in grado di valutare. Il disvalore del fatto è interamente racchiuso nell’abuso della minorazione, e punire due volte lo stesso approfittamento — una come inganno, una come abuso — significherebbe sanzionare due volte il medesimo fatto.',
          riferimenti: [
            { testo: 'art. 15 c.p.', tipo: 'norma' },
            { testo: 'art. 643 c.p.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'Il concorso: le due norme tutelano beni e reprimono condotte diversi, e l’artificio autonomo resta punibile accanto all’abuso.',
          argomento:
            'Le fattispecie non stanno in rapporto di specialità, perché nessuna contiene tutti gli elementi dell’altra più un elemento specializzante: nella truffa il mezzo è l’inganno, nella circonvenzione l’abuso di una condizione preesistente. Quando l’agente non si limita a sfruttare la fragilità ma costruisce anche un raggiro autonomo — prospettando investimenti inesistenti — pone in essere una condotta ulteriore, il cui disvalore non è coperto dalla sola circonvenzione.',
          riferimenti: [
            { testo: 'art. 81 c.p.', tipo: 'norma' },
            { testo: 'art. 640 c.p.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Per l’assistito l’assorbimento è quasi sempre preferibile, perché evita il cumulo e apre alla contestazione di un solo titolo. Ma la scelta va argomentata sul fatto: si sostiene l’assorbimento mostrando che la prospettazione degli investimenti non era un artificio autonomo, bensì la modalità stessa con cui l’abuso si è realizzato. Se invece i raggiri hanno una consistenza propria, la tesi del concorso è difficile da respingere e conviene concentrare la difesa sui presupposti della circonvenzione.',
    },
    {
      id: 'consumazione',
      questione:
        'Nella circonvenzione, il reato si consuma con il compimento dell’atto pregiudizievole o con il concreto conseguimento del profitto?',
      orientamenti: [
        {
          tesi:
            'Con il compimento dell’atto: la fattispecie è di danno e l’atto giuridicamente pregiudizievole è già il danno.',
          argomento:
            'La norma punisce chi induce a compiere un atto che importi «qualsiasi effetto giuridico dannoso»: l’evento tipico è dunque l’atto stesso, non il successivo spostamento materiale di ricchezza. Il pregiudizio è già insito nell’assunzione dell’obbligazione o nella dismissione del diritto, indipendentemente dal fatto che l’agente riesca poi a incassare.',
          riferimenti: [{ testo: 'art. 643 c.p.', tipo: 'norma' }],
        },
        {
          tesi:
            'Con il conseguimento del profitto: finché l’utilità non è percepita, il reato resta allo stadio del tentativo.',
          argomento:
            'La norma richiede che l’agente operi «per procurare a sé o ad altri un profitto», e nei delitti contro il patrimonio mediante frode l’offesa si perfeziona con lo spostamento patrimoniale. Anticipare la consumazione all’atto significherebbe punire come consumato un fatto in cui il bene giuridico non ha ancora subito la lesione definitiva.',
          riferimenti: [
            { testo: 'art. 56 c.p.', tipo: 'norma' },
            { testo: 'art. 158 c.p.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Qui il calcolo è puramente cronologico e va fatto con il calendario alla mano: la tesi che anticipa la consumazione fa decorrere prima la prescrizione, e in una vicenda protrattasi per anni può rendere prescritte le dazioni più risalenti. È il primo conto da fare prima di impostare qualunque altra difesa, perché può renderla superflua.',
    },
  ],
  trappole: [
    'Trattare la scelta fra truffa e circonvenzione come una questione di quale vittima sia coinvolta. Il criterio non è chi è la persona offesa, ma con quale mezzo se ne è piegata la volontà.',
    'Equiparare l’età avanzata alla deficienza psichica. È l’argomento dell’accusa, e una difesa che lo dà per acquisito ha già rinunciato al terreno più solido.',
    'Dimenticare che l’abuso è elemento autonomo rispetto alla condizione di fragilità: conoscere la debolezza altrui non basta, occorre servirsene.',
    'Non affrontare il rapporto fra le due norme. La traccia chiede espressamente i criteri distintivi: fermarsi alla qualificazione è svolgere metà del compito.',
    'Ignorare il momento consumativo e la prescrizione. In una vicenda con dazioni ripetute e risalenti è spesso la questione che decide il processo.',
    'Non verificare la procedibilità. Se la qualificazione approda alla truffa semplice serve la querela, e la sua mancanza o tardività chiude la vicenda.',
    'Chiudere il parere senza scegliere. Il parere è reso a una parte: le tesi si espongono, la conclusione si prende e si motiva nel suo interesse.',
  ],
  griglia: [
    {
      voce: 'Elementi costitutivi delle due fattispecie',
      peso: 15,
      criterio: 'Esposti in sequenza e non come elenco, con l’oggettività giuridica di ciascuna.',
    },
    {
      voce: 'Criterio distintivo',
      peso: 20,
      criterio: 'Inganno contro abuso di condizione preesistente, non tipo di vittima.',
    },
    {
      voce: 'Stato di deficienza psichica e abuso',
      peso: 20,
      criterio: 'Nozione delimitata, distinta dall’età, con l’abuso trattato come elemento autonomo.',
    },
    {
      voce: 'Rapporto fra le norme',
      peso: 20,
      criterio: 'Concorso o assorbimento affrontato con entrambe le tesi e con una scelta motivata.',
    },
    {
      voce: 'Consumazione, prescrizione, procedibilità',
      peso: 15,
      criterio: 'Momento consumativo individuato e conseguenze pratiche tratte.',
    },
    {
      voce: 'Conclusione operativa',
      peso: 10,
      criterio: 'Qualificazione scelta, strategia indicata, avvertimento sul rischio.',
    },
  ],
};
