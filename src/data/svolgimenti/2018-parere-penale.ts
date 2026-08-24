import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * Traccia costruita interamente su un contrasto: se al concorrente che
 * si tira indietro basti neutralizzare il proprio apporto o se debba
 * impedire il reato altrui. Il fatto è disegnato apposta per stare in
 * mezzo — il complice si allontana e tenta di dissuadere, ma l'altro
 * porta a termine — quindi qualunque risposta secca è sbagliata.
 */
export const parerePenale2018: Svolgimento = {
  tracciaId: '2018-parere-penale',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'A che punto era arrivata l’azione: la distinzione fra desistenza e recesso attivo dipende da qui, non dalle intenzioni.',
    'Se l’allontanamento prima dell’inizio dell’esecuzione lasci residuare un contributo concorsuale già prestato.',
    'Se al concorrente basti neutralizzare il proprio apporto o se debba impedire la consumazione: è il cuore della traccia.',
    'Che natura abbia la desistenza — causa di non punibilità o elemento negativo del fatto — e perché cambi qualcosa.',
    'Se residui la punibilità per i fatti già commessi che costituiscano di per sé reato.',
    'Quali circostanze attenuanti restino comunque spendibili se la desistenza non è riconosciuta.',
    'Che cosa suggerire in concreto all’assistito e con quale avvertimento sul rischio.',
  ],
  blocchi: [
    {
      id: 'concorso',
      titolo: 'Il contributo concorsuale già prestato',
      sintesi: 'La pianificazione non è nulla: è già un apporto che va sciolto.',
      paragrafi: [
        'Il concorso di persone si realizza con il contributo, materiale o morale, alla realizzazione del fatto tipico. La pianificazione congiunta del furto e la partecipazione alla fase preparatoria costituiscono già contributo rilevante: rafforzano il proposito criminoso dell’altro e ne agevolano l’azione. Non si tratta di un antefatto irrilevante che l’allontanamento cancella da solo.',
        'La traccia colloca l’allontanamento prima dell’inizio dell’esecuzione. È il dato che orienta la qualificazione, perché la desistenza volontaria presuppone che l’azione sia iniziata e non ancora completata: si desiste da ciò che si sta facendo. Se l’esecuzione non era iniziata, si è ancora nella fase degli atti preparatori, che di regola non sono punibili, e il problema si sposta sul contributo morale già dato.',
        'Va quindi distinto con precisione il piano su cui si ragiona. Rispetto alla condotta propria, il soggetto non ha compiuto atti idonei diretti in modo non equivoco: nulla da desistere in senso stretto. Rispetto alla condotta altrui, che si è consumata, egli risponde a titolo di concorso per il contributo prestato, salvo che quel contributo risulti sciolto.',
        'Il parere deve dire chiaramente che il tema non è «desistenza sì o no» ma «il contributo concorsuale è stato neutralizzato». È la riformulazione che consente di usare il materiale giurisprudenziale in modo pertinente invece di applicare meccanicamente una norma sul tentativo a una fattispecie consumata da altri.',
      ],
      riferimenti: [
        { testo: 'art. 110 c.p.', tipo: 'norma' },
        { testo: 'art. 115 c.p.', tipo: 'norma' },
        { testo: 'art. 56, comma 1, c.p.', tipo: 'norma' },
        { testo: 'art. 624-bis c.p.', tipo: 'norma' },
      ],
    },
    {
      id: 'desistenza',
      titolo: 'Desistenza e recesso attivo',
      sintesi: 'Due istituti diversi, con presupposti e conseguenze diverse.',
      paragrafi: [
        'La desistenza volontaria opera quando il colpevole desiste volontariamente dall’azione: risponde soltanto degli atti compiuti, se questi costituiscono per sé un reato diverso. Il recesso attivo, o pentimento operoso, opera invece quando l’azione è già compiuta e l’agente impedisce volontariamente l’evento: qui non c’è esclusione della punibilità ma una diminuzione di pena.',
        'Il criterio distintivo è il grado di avanzamento della condotta, non l’intensità del ravvedimento. Finché l’azione è in corso e l’agente può ancora fermarla omettendo il resto, si è nella desistenza, che richiede un comportamento omissivo. Quando l’azione è esaurita e l’evento dipende ormai dal decorso causale innescato, serve una condotta attiva che lo impedisca.',
        'La volontarietà è requisito comune e va intesa in senso rigoroso: la desistenza opera solo se l’interruzione è frutto di una scelta libera, non se è imposta da fattori esterni sopravvenuti che rendano impossibile o troppo rischiosa la prosecuzione. Chi si allontana perché sente arrivare qualcuno non desiste: si arrende.',
        'Nella traccia la volontarietà sembra sostenibile, perché l’allontanamento non è motivato da ostacoli e si accompagna al tentativo di dissuadere il complice. Ma è un elemento da provare, e in sede difensiva va documentato con ogni elemento disponibile: messaggi, testimonianze, condotta successiva.',
      ],
      riferimenti: [
        { testo: 'art. 56, comma 3, c.p.', tipo: 'norma' },
        { testo: 'art. 56, comma 4, c.p.', tipo: 'norma' },
        { testo: 'Cass. pen. n. 13104/2025', tipo: 'giurisprudenza' },
      ],
    },
    {
      id: 'natura',
      titolo: 'La natura giuridica e perché conta',
      sintesi: 'Causa di non punibilità o elemento negativo del fatto: cambia la comunicabilità.',
      paragrafi: [
        'La dottrina discute se la desistenza sia una causa sopravvenuta di non punibilità o un elemento negativo del fatto tipico. La disputa sembra astratta e non lo è, perché da essa dipende la comunicabilità ai concorrenti.',
        'Se si tratta di causa personale di non punibilità, essa opera soltanto per chi desiste e non si estende agli altri, secondo la regola generale in materia di circostanze e cause soggettive. Se invece si tratta di elemento che incide sulla tipicità del fatto, l’effetto potrebbe riguardare la fattispecie nel suo complesso.',
        'La conclusione prevalente è nel primo senso: la desistenza ha carattere personale e giova solo al concorrente che l’ha realizzata, restando gli altri punibili per il fatto consumato. Per l’assistito è la lettura favorevole, perché consente di isolare la sua posizione da quella del complice che ha portato a termine la sottrazione.',
        'Ne discende un corollario operativo importante: la difesa non deve difendere il correo. Ogni argomento speso per attenuare la posizione dell’altro rischia di ricompattare le due posizioni proprio quando l’interesse dell’assistito è separarle.',
      ],
      riferimenti: [
        { testo: 'art. 119 c.p.', tipo: 'norma' },
        { testo: 'art. 118 c.p.', tipo: 'norma' },
        { testo: 'art. 56, comma 3, c.p.', tipo: 'norma' },
      ],
    },
    {
      id: 'residui',
      titolo: 'Che cosa resta comunque punibile',
      sintesi: 'La desistenza non cancella i reati già perfezionati per conto proprio.',
      paragrafi: [
        'Anche quando la desistenza è riconosciuta, il soggetto risponde degli atti già compiuti se questi costituiscono per sé un reato diverso. Nella vicenda descritta vanno quindi verificati i fatti eventualmente già perfezionati nella fase preparatoria: il possesso ingiustificato di strumenti atti allo scasso, l’eventuale violazione di domicilio se vi era stato ingresso, il danneggiamento di serrature o infissi.',
        'Va poi valutato se ricorra l’ipotesi dell’accordo non seguito dalla commissione del reato, che di regola non è punibile ma consente l’applicazione di una misura di sicurezza: il richiamo serve a completare il quadro e a mostrare che si conosce il confine fra pianificazione e concorso punibile.',
        'Se la desistenza non viene riconosciuta, l’assistito risponde di concorso nel furto consumato. In quel caso restano spendibili le attenuanti: la partecipazione di minima importanza, se il contributo si è limitato alla fase ideativa; l’attenuante per chi si sia adoperato spontaneamente per elidere o attenuare le conseguenze; le generiche, valorizzando il tentativo di dissuasione come indice di resipiscenza.',
        'Va infine considerata la strada del risarcimento del danno alla persona offesa prima del giudizio, che apre all’attenuante corrispondente e, per fattispecie procedibili a querela, può condurre alla remissione. È un suggerimento operativo che appartiene al parere e che spesso vale più di ogni argomento dogmatico.',
      ],
      riferimenti: [
        { testo: 'art. 56, comma 3, c.p.', tipo: 'norma' },
        { testo: 'art. 114 c.p.', tipo: 'norma' },
        { testo: 'art. 62, n. 6, c.p.', tipo: 'norma' },
        { testo: 'art. 62-bis c.p.', tipo: 'norma' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'quid-pluris',
      questione:
        'Al concorrente che desiste basta neutralizzare il proprio contributo, o deve impedire che gli altri consumino il reato?',
      orientamenti: [
        {
          tesi:
            'Basta neutralizzare il proprio apporto: se il contributo è annullato, la condotta successiva degli altri è priva di collegamento causale con quella del desistente.',
          argomento:
            'La responsabilità concorsuale si fonda sul nesso fra il contributo e il fatto. Se quel contributo viene rimosso — ritirando il mezzo fornito, comunicando il proprio recesso, informando chi può impedire l’azione — il fatto altrui non è più riferibile al desistente, che risponderebbe altrimenti per una condotta di cui non è più causa. Pretendere l’impedimento significherebbe addossargli un obbligo di garanzia che la legge non prevede.',
          riferimenti: [
            { testo: 'art. 56, comma 3, c.p.', tipo: 'norma' },
            { testo: 'art. 40 c.p.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'Serve un quid pluris: l’annullamento del contributo dato alla realizzazione collettiva e l’eliminazione delle conseguenze prodotte fino a quel momento.',
          argomento:
            'Nel reato plurisoggettivo l’azione non è quella del singolo ma quella comune: interrompere la propria condotta non equivale a desistere dall’azione, che prosegue. Perché il beneficio operi occorre che il concorrente elimini gli effetti del proprio apporto — non basta smettere, bisogna disfare — e che il proposito altrui non risulti ancora sorretto dal rafforzamento originariamente prodotto.',
          riferimenti: [
            { testo: 'art. 110 c.p.', tipo: 'norma' },
            { testo: 'art. 56, comma 3, c.p.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'La traccia è costruita esattamente sul crinale: il soggetto si allontana — che soddisfa il primo orientamento — e tenta di dissuadere il complice, ma senza riuscirci. Il secondo orientamento chiede se quel tentativo abbia annullato il rafforzamento del proposito che la pianificazione comune aveva prodotto. Il parere favorevole all’assistito si costruisce valorizzando il tentativo di dissuasione come atto di segno contrario, idoneo a elidere il precedente contributo morale, e va accompagnato dall’avvertimento che l’orientamento più esigente è quello che la giurisprudenza applica con maggiore frequenza.',
    },
    {
      id: 'natura-desistenza',
      questione:
        'La desistenza è causa personale di non punibilità o incide sulla tipicità del fatto?',
      orientamenti: [
        {
          tesi:
            'È causa personale di non punibilità sopravvenuta: opera solo per chi desiste e non si comunica ai concorrenti.',
          argomento:
            'Il fatto tipico si è realizzato e resta illecito; la legge sceglie di non punire chi si è ritirato, per una ragione di politica criminale che premia il ripensamento. Trattandosi di valutazione che riguarda la persona e non il fatto, la disciplina generale sulle circostanze e cause soggettive ne esclude l’estensione agli altri concorrenti.',
          riferimenti: [
            { testo: 'art. 119, comma 1, c.p.', tipo: 'norma' },
            { testo: 'art. 56, comma 3, c.p.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'È elemento negativo del fatto: la desistenza rende atipica la condotta del desistente, che non ha realizzato alcun tentativo punibile.',
          argomento:
            'Il tentativo richiede atti idonei diretti in modo non equivoco alla commissione del delitto: se l’agente interrompe volontariamente, l’univocità viene meno retrospettivamente e la sua condotta non integra la fattispecie. Non si tratta di non punire un fatto tipico, ma di constatare che il fatto tipico non c’è.',
          riferimenti: [
            { testo: 'art. 56, comma 1, c.p.', tipo: 'norma' },
            { testo: 'art. 49 c.p.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Per l’assistito è preferibile la prima lettura, per quanto possa sembrare meno favorevole in astratto: essendo personale, isola la sua posizione da quella del complice che ha consumato il furto. La seconda, se applicata a un concorso in reato consumato da altri, offre meno appigli, perché il fatto tipico è comunque venuto a esistenza per mano dell’altro. Nel parere conviene aderire alla prima e trarne il corollario processuale: chiedere la separazione delle posizioni.',
    },
  ],
  trappole: [
    'Applicare la desistenza come se il reato fosse rimasto allo stadio del tentativo. Nella traccia il furto è stato consumato da altri: il tema è il contributo concorsuale, non il tentativo proprio.',
    'Trattare la pianificazione come un antefatto irrilevante. Il contributo morale è contributo, e l’allontanamento da solo non lo scioglie.',
    'Dare per acquisita la volontarietà. Se l’allontanamento è stato indotto da un ostacolo esterno non c’è desistenza, e la difesa deve saperlo prima dell’accusa.',
    'Difendere anche il complice. L’interesse dell’assistito è separare la propria posizione: ogni argomento a favore dell’altro le ricompatta.',
    'Dimenticare i reati residui. La desistenza non copre i fatti già perfezionati che costituiscano di per sé reato, e vanno individuati.',
    'Non prevedere l’ipotesi sfavorevole. Se la desistenza non è riconosciuta servono le attenuanti, e vanno indicate nel parere, non lasciate all’improvvisazione.',
    'Chiudere senza avvertire del rischio. L’orientamento più esigente è quello applicato più spesso: un parere che lo tace consegna al cliente una sicurezza che non ha.',
  ],
  griglia: [
    {
      voce: 'Inquadramento del contributo concorsuale',
      peso: 20,
      criterio: 'Hai riconosciuto che la pianificazione è già apporto e riformulato il tema di conseguenza.',
    },
    {
      voce: 'Distinzione desistenza / recesso attivo',
      peso: 15,
      criterio: 'Criterio dell’avanzamento della condotta, non dell’intensità del ravvedimento.',
    },
    {
      voce: 'Trattazione del contrasto sul quid pluris',
      peso: 25,
      criterio: 'Entrambi gli orientamenti esposti e applicati al fatto concreto della traccia.',
    },
    {
      voce: 'Natura e comunicabilità ai concorrenti',
      peso: 15,
      criterio: 'Carattere personale affermato e corollario processuale tratto.',
    },
    {
      voce: 'Reati residui e attenuanti',
      peso: 15,
      criterio: 'Ipotesi sfavorevole prevista, con attenuanti e condotte riparatorie indicate.',
    },
    {
      voce: 'Conclusione e avvertimento sul rischio',
      peso: 10,
      criterio: 'Conclusione presa nell’interesse dell’assistito, con l’alea dichiarata.',
    },
  ],
};
