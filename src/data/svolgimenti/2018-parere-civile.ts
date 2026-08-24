import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

/**
 * Questa è la traccia in cui è più facile scrivere molto e dire poco.
 * Il tema del consenso informato si presta alla dissertazione, ma il
 * parere si gioca su tre nodi concreti: chi si conviene, chi prova che
 * cosa, e che cosa esattamente si chiede a titolo di danno. Tutto il
 * resto è contorno.
 */
export const parereCivile2018: Svolgimento = {
  tracciaId: '2018-parere-civile',
  stato: 'verificata',
  aggiornatoAl: AGGIORNATO_AL,
  questioni: [
    'Chi conviene in giudizio: la struttura, il medico, entrambi. La legge Gelli-Bianco ha reso la risposta diversa per ciascuno.',
    'Quale titolo di responsabilità grava sulla struttura e quale sul professionista, con le conseguenze su prescrizione e onere della prova.',
    'Come si ripartisce la prova del nesso causale fra paziente e struttura: è il nodo su cui la giurisprudenza si è mossa.',
    'Se la lesione del diritto all’autodeterminazione sia risarcibile in sé, anche quando l’intervento è tecnicamente ben eseguito.',
    'Chi deve provare che il paziente, se informato, avrebbe rifiutato l’intervento.',
    'Quali voci di danno chiedere e come tenerle distinte, evitando duplicazioni.',
    'Quale condizione di procedibilità la legge impone in materia sanitaria, e quale strada conviene scegliere.',
  ],
  blocchi: [
    {
      id: 'doppio-binario',
      titolo: 'Il doppio binario dopo la legge Gelli-Bianco',
      sintesi: 'Struttura e medico non rispondono allo stesso titolo: cambia tutto.',
      paragrafi: [
        'La legge del 2017 ha rotto l’unità del regime che si era affermato con la teoria del contatto sociale. La struttura sanitaria, pubblica o privata, risponde a titolo contrattuale delle condotte dolose o colpose degli operatori di cui si avvale, anche se non suoi dipendenti. L’esercente la professione sanitaria risponde invece a titolo extracontrattuale, salvo che abbia agito nell’adempimento di un’obbligazione contrattuale assunta direttamente con il paziente.',
        'Le conseguenze non sono teoriche. Contro la struttura la prescrizione è decennale e il paziente deve provare il contratto, il danno e allegare l’inadempimento, gravando sul debitore la prova di avere adempiuto o dell’impossibilità della prestazione per causa non imputabile. Contro il medico la prescrizione è quinquennale e il paziente deve provare tutti gli elementi dell’illecito, colpa compresa.',
        'Ne discende una scelta processuale quasi obbligata: si conviene la struttura, che offre il regime probatorio più favorevole e la solvibilità maggiore, valutando se convenire anche il medico per ragioni di opportunità istruttoria. Va tenuto presente il diritto di rivalsa della struttura verso l’esercente, esercitabile entro limiti quantitativi e temporali stabiliti dalla legge, che rende la posizione del singolo professionista meno esposta di quanto il paziente possa credere.',
        'Sul piano intertemporale va verificata la data dei fatti: le disposizioni sul titolo di responsabilità non hanno efficacia retroattiva, sicché per condotte anteriori all’entrata in vigore resta applicabile il regime del contatto sociale, con responsabilità contrattuale anche del medico. È un controllo di poche righe che cambia radicalmente la strategia.',
      ],
      riferimenti: [
        { testo: 'art. 7 l. 24/2017', tipo: 'norma' },
        { testo: 'art. 9 l. 24/2017', tipo: 'norma' },
        { testo: 'art. 1218 c.c.', tipo: 'norma' },
        { testo: 'art. 2043 c.c.', tipo: 'norma' },
        { testo: 'art. 2947 c.c.', tipo: 'norma' },
      ],
    },
    {
      id: 'consenso',
      titolo: 'Il consenso informato come diritto autonomo',
      sintesi: 'Non è un adempimento burocratico: è un diritto distinto da quello alla salute.',
      paragrafi: [
        'Il consenso informato trova fondamento nei principi costituzionali sull’inviolabilità della libertà personale e sul diritto alla salute, e ha ricevuto disciplina espressa nella legge del 2017 sul consenso e sulle disposizioni anticipate di trattamento, che ne fa il presupposto di ogni trattamento sanitario e ne regola forma, revocabilità e documentazione.',
        'Il punto decisivo per la traccia è che il diritto all’autodeterminazione e il diritto alla salute sono distinti. L’intervento tecnicamente corretto non sana il difetto di informazione: l’omessa o insufficiente informazione lede l’autodeterminazione anche quando l’atto terapeutico è necessario e correttamente eseguito.',
        'La distinzione genera più scenari, che il parere deve tenere separati perché conducono a risarcimenti diversi. Se l’informazione è mancata e dall’intervento è derivato un danno alla salute che il paziente informato avrebbe evitato rifiutando, è risarcibile il danno alla salute. Se il paziente si sarebbe comunque sottoposto all’intervento, resta risarcibile il solo pregiudizio da lesione dell’autodeterminazione, che consiste nella sofferenza e nella privazione della libertà di disporre di sé, e che va allegato e provato.',
        'La traccia colloca il caso nel primo scenario, perché il paziente sostiene che informato avrebbe rifiutato. Ma il parere deve prevedere anche il secondo, perché se quella allegazione non regge non si resta a mani vuote: si ripiega sul danno da autodeterminazione, purché lo si sia domandato.',
        'Va infine verificata la documentazione: modulo di consenso sottoscritto, sua specificità rispetto ai rischi concretamente verificatisi, annotazioni in cartella. Un modulo generico e prestampato è, nella pratica, l’elemento su cui più spesso si fonda l’accoglimento della domanda.',
      ],
      riferimenti: [
        { testo: 'art. 32 Cost.', tipo: 'norma' },
        { testo: 'art. 13 Cost.', tipo: 'norma' },
        { testo: 'art. 1 l. 219/2017', tipo: 'norma' },
        { testo: 'Cass. civ. n. 28985/2019', tipo: 'giurisprudenza' },
      ],
    },
    {
      id: 'prova',
      titolo: 'Chi prova che cosa',
      sintesi: 'La prova dell’inadempimento informativo e quella del nesso viaggiano separate.',
      paragrafi: [
        'Sull’adempimento dell’obbligo informativo l’onere grava sul sanitario e sulla struttura: è il debitore della prestazione informativa a dover dimostrare di averla resa, e di averla resa in modo completo e comprensibile rispetto ai rischi poi concretizzatisi. Il paziente si limita ad allegarne la mancanza.',
        'Sul nesso causale il discorso è diverso e più insidioso. Il paziente che lamenta l’inadempimento deve provare il nesso fra la condotta e il danno lamentato: non basta allegare l’inadempimento e attendere che il debitore dimostri il contrario. È il punto su cui la giurisprudenza si è assestata dopo un percorso non lineare, e su cui il parere deve essere esplicito perché è lì che le cause si perdono.',
        'Nel caso della traccia i nessi da provare sono due e vanno tenuti distinti. Il primo è quello fra l’intervento e il pregiudizio alla salute, che è terreno della consulenza medico-legale. Il secondo, più difficile, è quello fra l’omessa informazione e il danno: presuppone di dimostrare che il paziente, se informato, avrebbe rifiutato l’intervento.',
        'Questo secondo accertamento è controfattuale e ipotetico. La prova può essere data anche per presunzioni, valorizzando elementi concreti: le condizioni di salute del paziente al momento della scelta, la disponibilità di alternative terapeutiche, la non urgenza dell’intervento, il comportamento tenuto in occasioni analoghe, il rapporto costi-benefici come si presentava allora. Un parere che si limiti ad affermare che il paziente avrebbe rifiutato non ha detto nulla di utilizzabile.',
      ],
      riferimenti: [
        { testo: 'art. 2697 c.c.', tipo: 'norma' },
        { testo: 'art. 1218 c.c.', tipo: 'norma' },
        { testo: 'art. 2727 c.c.', tipo: 'norma' },
        { testo: 'Cass. civ. n. 28985/2019', tipo: 'giurisprudenza' },
      ],
    },
    {
      id: 'liquidazione',
      titolo: 'Le voci di danno',
      sintesi: 'Distinte e non duplicate: è il controllo che la Cassazione fa per prima.',
      paragrafi: [
        'Il danno alla salute si liquida secondo il criterio tabellare, con personalizzazione ove ricorrano circostanze specifiche e documentate che rendano il pregiudizio dinamico-relazionale eccedente quello standard. La legge del 2017 rinvia alle tabelle previste dal codice delle assicurazioni per la liquidazione del danno biologico.',
        'Il danno da lesione dell’autodeterminazione è voce distinta e va domandata come tale: consiste nella sofferenza per essere stati privati della possibilità di scegliere, e non si liquida automaticamente in una frazione del danno biologico. Va allegato in fatto — che cosa avrebbe fatto il paziente, come ha vissuto la scoperta di non essere stato informato — e provato anche per presunzioni.',
        'Il rischio da evitare è la duplicazione. Se si è già liquidato l’intero danno alla salute perché si è provato che il paziente informato avrebbe rifiutato l’intervento, aggiungere un importo autonomo per la sofferenza legata alla mancata informazione può essere ritenuto duplicativo. Il parere deve indicare le voci in via graduata, non cumulativa acritica.',
        'Vanno poi considerate le voci patrimoniali: spese mediche sostenute e future, spese di assistenza, eventuale incidenza sulla capacità lavorativa specifica se documentata. Sono le voci che si perdono per omessa allegazione più che per rigetto nel merito.',
      ],
      riferimenti: [
        { testo: 'art. 7, comma 4, l. 24/2017', tipo: 'norma' },
        { testo: 'artt. 138 e 139 d.lgs. 209/2005', tipo: 'norma' },
        { testo: 'art. 1223 c.c.', tipo: 'norma' },
        { testo: 'art. 1226 c.c.', tipo: 'norma' },
      ],
    },
    {
      id: 'procedibilita',
      titolo: 'Come si arriva in giudizio',
      sintesi: 'In materia sanitaria la strada preliminare è obbligata, ma se ne sceglie una fra due.',
      paragrafi: [
        'Chi intende esercitare un’azione risarcitoria in materia di responsabilità sanitaria è tenuto preliminarmente a proporre ricorso per consulenza tecnica preventiva ai fini della composizione della lite. In alternativa può esperire il procedimento di mediazione. L’una o l’altra è condizione di procedibilità della domanda.',
        'La scelta non è indifferente. La consulenza tecnica preventiva porta in campo subito l’accertamento tecnico, che in materia sanitaria è la vera partita, e produce un elaborato utilizzabile nel successivo giudizio; ha però tempi e costi propri e obbliga alla partecipazione. La mediazione è più rapida e meno onerosa, ma senza l’accertamento tecnico difficilmente sposta le posizioni delle compagnie assicurative.',
        'Nel caso della traccia, in cui il tema centrale è documentale — che cosa è stato detto al paziente e che cosa risulta dal modulo — e il profilo tecnico serve soprattutto a quantificare, la mediazione può bastare; se invece si vuole contestare anche l’esecuzione dell’intervento, la consulenza preventiva è la strada da preferire.',
        'Va infine ricordata l’azione diretta nei confronti dell’impresa di assicurazione, prevista dalla legge del 2017 nei limiti dei massimali, con l’obbligo di litisconsorzio: è uno strumento che rafforza molto la posizione del danneggiato e che va valutato nel parere, verificandone l’operatività alla luce della disciplina attuativa.',
      ],
      riferimenti: [
        { testo: 'art. 8 l. 24/2017', tipo: 'norma' },
        { testo: 'art. 696-bis c.p.c.', tipo: 'norma' },
        { testo: 'art. 5 d.lgs. 28/2010', tipo: 'norma' },
        { testo: 'art. 12 l. 24/2017', tipo: 'norma' },
      ],
    },
  ],
  contrasti: [
    {
      id: 'nesso-causale',
      questione:
        'Nella responsabilità contrattuale della struttura sanitaria, chi deve provare il nesso causale fra la condotta e il danno?',
      orientamenti: [
        {
          tesi:
            'Il paziente: allegare l’inadempimento non basta, il nesso causale è elemento costitutivo della domanda e va dimostrato da chi agisce.',
          argomento:
            'Nell’obbligazione sanitaria l’inadempimento non coincide con il danno, perché la prestazione ha per oggetto una condotta diligente e non un risultato. Ne segue che l’evento dannoso non discende automaticamente dall’inadempimento e che il collegamento fra i due va provato: solo una volta dimostrato il nesso si sposta sul debitore l’onere di provare che l’inadempimento è stato determinato da causa a lui non imputabile.',
          riferimenti: [
            { testo: 'art. 2697 c.c.', tipo: 'norma' },
            { testo: 'art. 1218 c.c.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'La struttura: al paziente basta provare il contratto e allegare un inadempimento astrattamente idoneo a causare il danno.',
          argomento:
            'È la lettura che estende all’obbligazione sanitaria il principio generale in materia di prova dell’inadempimento: il creditore prova il titolo e allega la mancata o inesatta esecuzione, mentre il debitore deve dimostrare l’adempimento o l’impossibilità per causa non imputabile. Addossare al paziente anche il nesso significa privarlo del vantaggio probatorio che la qualificazione contrattuale dovrebbe garantirgli, in un ambito in cui la conoscenza dei fatti è tutta dalla parte del debitore.',
          riferimenti: [
            { testo: 'Cass. Sez. Un. n. 13533/2001', tipo: 'giurisprudenza' },
            { testo: 'art. 1218 c.c.', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'È la questione che decide la causa più di ogni argomento sul consenso. Il parere deve impostare l’istruttoria come se valesse il primo orientamento — quindi consulenza tecnica, cartella clinica acquisita integralmente, allegazioni causali specifiche — e spendere il secondo come argomento subordinato. Chi conta sull’inversione dell’onere e non prepara la prova del nesso rischia il rigetto senza che il merito venga esaminato.',
    },
    {
      id: 'rifiuto-ipotetico',
      questione:
        'Chi deve provare che il paziente, se correttamente informato, avrebbe rifiutato l’intervento?',
      orientamenti: [
        {
          tesi:
            'Il paziente, trattandosi di un elemento costitutivo del nesso fra omessa informazione e danno alla salute.',
          argomento:
            'Il danno alla salute non deriva dalla mancata informazione in sé ma dall’intervento: perché l’omissione informativa ne sia causa occorre che, informato, il paziente non si sarebbe sottoposto al trattamento. È un fatto costitutivo della pretesa e come tale spetta a chi lo invoca, potendo essere dimostrato anche mediante presunzioni fondate su elementi concreti.',
          riferimenti: [
            { testo: 'art. 2697 c.c.', tipo: 'norma' },
            { testo: 'art. 2729 c.c.', tipo: 'norma' },
          ],
        },
        {
          tesi:
            'La struttura, dovendo dimostrare che il consenso sarebbe stato comunque prestato: è una prova liberatoria, non un fatto costitutivo.',
          argomento:
            'Accertato l’inadempimento dell’obbligo informativo, opera una presunzione di riferibilità della scelta all’informazione mancata: pretendere dal paziente la prova di ciò che avrebbe fatto in una situazione mai verificatasi significa esigere una prova impossibile e svuotare la tutela dell’autodeterminazione. Spetta a chi ha violato l’obbligo dimostrare che la violazione è stata irrilevante.',
          riferimenti: [
            { testo: 'art. 1218 c.c.', tipo: 'norma' },
            { testo: 'art. 1 l. 219/2017', tipo: 'norma' },
          ],
        },
      ],
      ricaduta:
        'Anche qui la difesa non si affida al contrasto: si costruisce la prova presuntiva come se l’onere fosse del paziente. Alternative terapeutiche disponibili, assenza di urgenza, condizioni personali, precedenti rifiuti documentati. E si domanda comunque, in via subordinata, il danno da lesione dell’autodeterminazione, che prescinde da quella prova e che è il paracadute del caso.',
    },
  ],
  trappole: [
    'Convenire il solo medico. Dopo la legge del 2017 risponde a titolo extracontrattuale, con prescrizione quinquennale e onere della prova interamente sul paziente: è la scelta peggiore per l’assistito.',
    'Non verificare la data dei fatti. Le norme sul titolo di responsabilità non retroagiscono, e per condotte anteriori vale ancora il regime del contatto sociale.',
    'Trattare il consenso informato come un adempimento formale. È un diritto autonomo, e il suo difetto è risarcibile anche quando l’intervento è tecnicamente perfetto.',
    'Confondere i due nessi causali. Quello fra intervento e danno alla salute è tecnico; quello fra omessa informazione e danno è controfattuale e va provato con presunzioni concrete.',
    'Affermare che il paziente avrebbe rifiutato senza indicare gli elementi da cui desumerlo. È l’affermazione che, non provata, fa rigettare la domanda principale.',
    'Cumulare acriticamente danno alla salute e danno da autodeterminazione. Vanno domandati in via graduata, altrimenti si espone il cliente al rilievo di duplicazione.',
    'Dimenticare la condizione di procedibilità. In materia sanitaria è obbligatoria e va scelta fra consulenza tecnica preventiva e mediazione, motivando la scelta.',
  ],
  griglia: [
    {
      voce: 'Individuazione dei convenuti e dei titoli',
      peso: 20,
      criterio: 'Doppio binario applicato, con prescrizione e onere della prova per ciascuno.',
    },
    {
      voce: 'Autonomia del diritto all’autodeterminazione',
      peso: 20,
      criterio: 'Distinzione fra danno alla salute e danno da mancata informazione, con gli scenari.',
    },
    {
      voce: 'Riparto dell’onere probatorio',
      peso: 20,
      criterio: 'Prova dell’informazione sul sanitario; prova del nesso trattata esplicitamente.',
    },
    {
      voce: 'Prova del rifiuto ipotetico',
      peso: 15,
      criterio: 'Elementi presuntivi concreti indicati, non affermazione apodittica.',
    },
    {
      voce: 'Voci di danno e liquidazione',
      peso: 15,
      criterio: 'Voci distinte, graduate, senza duplicazioni; patrimoniali non dimenticate.',
    },
    {
      voce: 'Condizione di procedibilità e conclusione',
      peso: 10,
      criterio: 'Scelta fra consulenza preventiva e mediazione motivata; conclusione operativa.',
    },
  ],
};
