import type { QuizQuestion } from '../../types';

/**
 * Previdenza forense — Fondamenti.
 *
 * La previdenza è parte dell'ordinamento professionale e all'orale viene
 * chiesta insieme alla deontologia, ma è la porzione che quasi nessuno
 * ripassa: si arriva davanti alla commissione sapendo tutto sul conflitto
 * di interessi e nulla su chi sia tenuto a iscriversi alla Cassa.
 *
 * Le domande evitano di proposito gli importi in euro dei contributi
 * minimi, che il Comitato dei delegati ridetermina ogni anno: una
 * domanda costruita su una cifra è una domanda che diventa sbagliata da
 * sola. Restano le regole, che cambiano di rado e sono quelle che la
 * commissione chiede.
 */
export const previdenzaL1: QuizQuestion[] = [
  {
    id: 'prev-l1-001',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Qual è la natura giuridica della Cassa Nazionale di Previdenza e Assistenza Forense dopo il d.lgs. 30 giugno 1994, n. 509?',
    opzioni: [
      'Persona giuridica di diritto privato senza scopo di lucro, che continua a svolgere una funzione previdenziale obbligatoria',
      'Ente pubblico non economico sottoposto al controllo del Ministero della giustizia',
      'Società per azioni a partecipazione pubblica maggioritaria',
      'Articolazione interna del Consiglio Nazionale Forense priva di autonomia patrimoniale',
    ],
    rispostaCorretta: 0,
    spiegazione: 'Il d.lgs. 509/1994 ha trasformato gli enti gestori di forme obbligatorie di previdenza per i liberi professionisti in persone giuridiche di diritto privato senza scopo di lucro, dotate di autonomia gestionale, organizzativa e contabile. La privatizzazione ha riguardato la veste giuridica, non la funzione: la contribuzione resta obbligatoria e l’ente continua a gestire una previdenza di categoria, il che spiega perché l’autonomia normativa della Cassa sia comunque sottoposta a controlli ministeriali.',
  },
  {
    id: 'prev-l1-002',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Dopo la legge professionale (l. 31 dicembre 2012, n. 247), chi è tenuto a iscriversi alla Cassa Forense?',
    opzioni: [
      'Soltanto gli avvocati che superino una soglia annua di reddito professionale',
      'Tutti gli iscritti agli albi forensi, a prescindere da qualsiasi soglia reddituale',
      'Soltanto gli avvocati che esercitino la professione in forma esclusiva e continuativa',
      'Soltanto gli avvocati iscritti da almeno cinque anni all’albo',
    ],
    rispostaCorretta: 1,
    spiegazione: 'L’art. 21, comma 8, l. 247/2012 ha reso l’iscrizione alla Cassa obbligatoria e automatica per tutti gli iscritti agli albi forensi, superando il sistema precedente in cui chi non raggiungeva le soglie di reddito e di volume d’affari confluiva nella gestione separata INPS. L’iscrizione è disposta d’ufficio dalla Giunta esecutiva non appena la Cassa riceve la comunicazione dell’iscrizione all’albo.',
  },
  {
    id: 'prev-l1-003',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Quali sono i contributi obbligatori che l’avvocato iscritto deve alla Cassa Forense?',
    opzioni: [
      'Il solo contributo soggettivo, calcolato sul reddito lordo',
      'Il contributo integrativo e una quota fissa di iscrizione all’albo',
      'Il contributo soggettivo, il contributo integrativo e il contributo di maternità',
      'Un contributo unico proporzionale al numero di incarichi accettati',
    ],
    rispostaCorretta: 2,
    spiegazione: 'La contribuzione obbligatoria si articola in tre voci: il contributo soggettivo, commisurato al reddito professionale netto dichiarato ai fini IRPEF; il contributo integrativo, calcolato sul volume d’affari IVA e ripetibile nei confronti del cliente; il contributo di maternità, di importo fisso determinato ogni anno, che finanzia l’indennità spettante ai liberi professionisti. A queste si aggiunge il contributo modulare, che però è volontario. La tripartizione risale alla l. 576/1980 ed è oggi confermata dal Regolamento unico della previdenza forense.',
  },
  {
    id: 'prev-l1-004',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Su quale base è calcolato il contributo soggettivo dovuto alla Cassa Forense?',
    opzioni: [
      'Sul volume d’affari dichiarato ai fini IVA',
      'Sul numero di procedimenti iscritti a ruolo nell’anno',
      'Sul patrimonio complessivo del professionista',
      'Sul reddito professionale netto dichiarato ai fini IRPEF',
    ],
    rispostaCorretta: 3,
    spiegazione: 'Il contributo soggettivo si calcola applicando l’aliquota vigente al reddito professionale netto prodotto nell’anno e dichiarato ai fini IRPEF, entro un tetto reddituale rivalutato annualmente; sulla parte eccedente il tetto si applica un’aliquota ridotta. È il contributo che alimenta il montante individuale e quindi incide direttamente sull’importo della futura pensione, a differenza dell’integrativo: lo prevede il Regolamento unico della previdenza forense.',
  },
  {
    id: 'prev-l1-005',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Il contributo integrativo dovuto alla Cassa Forense grava economicamente su chi?',
    opzioni: [
      'Sull’avvocato, che non può in alcun caso trasferirlo al cliente',
      'Sul cliente, perché la maggiorazione è ripetibile e va esposta in fattura',
      'Sul Consiglio dell’Ordine di appartenenza',
      'Sulla parte soccombente nel giudizio, per legge',
    ],
    rispostaCorretta: 1,
    spiegazione: 'Il contributo integrativo è una maggiorazione percentuale applicata a tutti i corrispettivi che rientrano nel volume d’affari IVA: è ripetibile nei confronti del cliente e per questo va esposta in fattura. Proprio perché non è un costo dell’avvocato, non concorre a formare il suo reddito professionale e non è soggetta a IRPEF. Ciò non toglie che, verso la Cassa, il soggetto obbligato al versamento resti l’iscritto. La disciplina, originariamente dettata dall’art. 11 l. 576/1980, è oggi contenuta nell’art. 18 del Regolamento unico della previdenza forense.',
  },
  {
    id: 'prev-l1-006',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Qual è l’aliquota del contributo integrativo dovuto alla Cassa Forense?',
    opzioni: [
      'Il 2 per cento',
      'Un’aliquota progressiva che varia con il volume d’affari',
      'Il 4 per cento',
      'Il 10 per cento',
    ],
    rispostaCorretta: 2,
    spiegazione: 'L’aliquota del contributo integrativo è del 4 per cento del volume d’affari IVA, misura raddoppiata rispetto al 2 per cento originariamente previsto dall’art. 11 l. 576/1980 e oggi confermata dal Regolamento unico della previdenza forense. È un’aliquota fissa: non cresce al crescere del volume d’affari, a differenza dell’aliquota del contributo soggettivo.',
  },
  {
    id: 'prev-l1-007',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Che cos’è il modello 5 che l’avvocato invia alla Cassa Forense?',
    opzioni: [
      'La domanda di iscrizione all’albo da trasmettere al Consiglio dell’Ordine',
      'Il modulo con cui si chiede la rateizzazione dei contributi arretrati',
      'Il prospetto delle spese di studio deducibili',
      'La dichiarazione annuale del reddito professionale e del volume d’affari prodotti nell’anno precedente',
    ],
    rispostaCorretta: 3,
    spiegazione: 'Il modello 5 è la comunicazione obbligatoria con cui ogni iscritto dichiara alla Cassa il reddito professionale netto e il volume d’affari IVA dell’anno precedente: è il dato su cui la Cassa liquida il conguaglio del contributo soggettivo e di quello integrativo. L’invio è telematico e l’obbligo riguarda anche chi è stato iscritto per una sola frazione d’anno, secondo il Regolamento unico della previdenza forense.',
  },
  {
    id: 'prev-l1-008',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'L’avvocato che nell’anno non ha prodotto alcun reddito professionale è comunque tenuto a inviare il modello 5?',
    opzioni: [
      'Sì, l’obbligo dichiarativo riguarda tutti gli iscritti, anche in caso di dichiarazione a zero',
      'No, l’obbligo sorge solo in presenza di un reddito imponibile',
      'No, è sufficiente una comunicazione al Consiglio dell’Ordine',
      'Sì, ma soltanto se ha emesso almeno una fattura',
    ],
    rispostaCorretta: 0,
    spiegazione: 'L’obbligo di trasmissione del modello 5 è autonomo rispetto all’esistenza di un reddito: sono tenuti all’invio tutti coloro che nell’anno di riferimento siano stati iscritti a un albo forense, anche per una frazione d’anno, e i praticanti iscritti alla Cassa. La dichiarazione «a zero» va comunque inviata, perché è l’adempimento che consente alla Cassa di verificare la posizione. L’obbligo e le sanzioni per l’omissione sono disciplinati dal Regolamento unico della previdenza forense.',
  },
  {
    id: 'prev-l1-009',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Il codice deontologico forense si occupa degli obblighi previdenziali dell’avvocato?',
    opzioni: [
      'No, la materia previdenziale è estranea alla responsabilità disciplinare',
      'Sì, ma soltanto con riguardo all’assicurazione per la responsabilità civile',
      'Sì, l’art. 16 impone il dovere di adempimento fiscale, previdenziale, assicurativo e contributivo',
      'No, salvo che il mancato versamento integri un reato',
    ],
    rispostaCorretta: 2,
    spiegazione: 'L’art. 16 cdf, rubricato «Dovere di adempimento fiscale, previdenziale, assicurativo e contributivo», impone all’avvocato di provvedere agli adempimenti fiscali e previdenziali previsti dalle norme in materia e di pagare con regolarità e puntualità i contributi dovuti agli enti forensi. La disposizione dà rilievo disciplinare espresso a un inadempimento che altrimenti resterebbe confinato sul piano contributivo.',
  },
  {
    id: 'prev-l1-010',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Che cos’è il contributo modulare della previdenza forense?',
    opzioni: [
      'Un contributo obbligatorio aggiuntivo dovuto dagli iscritti con reddito superiore al tetto',
      'La quota di contributo integrativo che resta a carico dell’avvocato',
      'Il contributo dovuto dalle società tra avvocati in luogo dei singoli soci',
      'Un contributo volontario che l’iscritto può versare in aggiunta al soggettivo, entro una percentuale del proprio reddito',
    ],
    rispostaCorretta: 3,
    spiegazione: 'Il contributo modulare è facoltativo: l’iscritto non pensionato di vecchiaia può scegliere, in sede di invio del modello 5, di versare un’ulteriore quota compresa entro una percentuale del proprio reddito professionale netto, entro il tetto reddituale. Alimenta una quota di pensione calcolata con metodo contributivo e serve a chi vuole innalzare volontariamente la propria prestazione futura; la facoltà è prevista dal Regolamento unico della previdenza forense.',
  },
  {
    id: 'prev-l1-011',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Il contributo integrativo concorre a determinare il reddito professionale dell’avvocato ai fini IRPEF?',
    opzioni: [
      'No, proprio perché è una maggiorazione ripetibile nei confronti del cliente',
      'Sì, come qualsiasi altro corrispettivo incassato',
      'Sì, ma solo per la metà dell’importo',
      'No, ma concorre a formare la base di calcolo del contributo soggettivo',
    ],
    rispostaCorretta: 0,
    spiegazione: 'Il contributo integrativo non è un compenso dell’avvocato ma una maggiorazione che egli riscuote dal cliente e riversa alla Cassa: per questo non concorre alla formazione del reddito professionale e non è soggetto a IRPEF. Ne discende anche che non entra nella base imponibile del contributo soggettivo, che si calcola sul reddito netto professionale. È la conseguenza della natura di maggiorazione che l’art. 11 l. 576/1980 attribuisce al contributo.',
  },
  {
    id: 'prev-l1-012',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Da quale data è in vigore il Regolamento unico della previdenza forense?',
    opzioni: [
      'Dal 2 febbraio 2013, contestualmente alla legge professionale',
      'Dal 1° gennaio 2025',
      'Dal 1° gennaio 2020',
      'Non è ancora entrato in vigore, essendo in attesa di approvazione ministeriale',
    ],
    rispostaCorretta: 1,
    spiegazione: 'Il Regolamento unico della previdenza forense, deliberato dal Comitato dei delegati nel 2024 e approvato dai Ministeri vigilanti, è in vigore dal 1° gennaio 2025. Ha riunito in un solo testo la disciplina prima frammentata in più regolamenti e ha introdotto il passaggio al calcolo contributivo pro rata, l’innalzamento progressivo dell’aliquota soggettiva e la riduzione dei contributi minimi.',
  },
  {
    id: 'prev-l1-013',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'A quale età si consegue, a regime, la pensione di vecchiaia della Cassa Forense?',
    opzioni: [
      'A 65 anni',
      'A 67 anni, come nel regime generale INPS',
      'A 70 anni',
      'A 75 anni',
    ],
    rispostaCorretta: 2,
    spiegazione: 'La pensione di vecchiaia della Cassa Forense si consegue, a regime, al compimento dei 70 anni di età, con almeno 35 anni di effettiva iscrizione e contribuzione. Il requisito anagrafico è il risultato di un innalzamento graduale avviato dalla riforma previdenziale del 2012 e oggi recepito nel Regolamento unico della previdenza forense: tiene conto della durata media della carriera forense, che comincia più tardi di quella del lavoro dipendente.',
  },
  {
    id: 'prev-l1-014',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Che cosa può riscattare l’avvocato ai fini della previdenza forense?',
    opzioni: [
      'Gli anni del corso legale di laurea, il periodo di praticantato e il servizio militare obbligatorio, nei limiti stabiliti dal regolamento',
      'Soltanto il periodo di servizio militare di leva',
      'Qualsiasi periodo di lavoro svolto prima dell’iscrizione all’albo, senza limiti',
      'Nessun periodo: il riscatto non è ammesso nella previdenza forense',
    ],
    rispostaCorretta: 0,
    spiegazione: 'Il riscatto consente di trasformare in anzianità utile periodi in cui non vi era contribuzione: gli anni del corso legale di laurea, il periodo di praticantato (con o senza abilitazione) e il servizio militare obbligatorio o il servizio civile sostitutivo, ciascuno nei limiti massimi fissati dal regolamento. È oneroso, i limiti massimi sono fissati dal Regolamento unico della previdenza forense e la domanda si presenta in via telematica.',
  },
  {
    id: 'prev-l1-015',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'Il contributo di maternità dovuto alla Cassa Forense è:',
    opzioni: [
      'Una percentuale del reddito dovuta dalle sole avvocate',
      'Un importo fisso, determinato ogni anno, dovuto da tutti gli iscritti',
      'Un contributo dovuto soltanto dagli iscritti di età inferiore a quarant’anni',
      'Una prestazione a carico dello Stato, non un contributo a carico degli iscritti',
    ],
    rispostaCorretta: 1,
    spiegazione: 'Il contributo di maternità è dovuto da tutti gli iscritti in misura fissa, determinata annualmente dalla Cassa: finanzia in regime di solidarietà di categoria l’indennità di maternità spettante ai liberi professionisti. Non è commisurato al reddito e non è limitato per genere o per età, proprio perché il rischio coperto è ripartito sull’intera platea degli iscritti: la prestazione che finanzia è quella dell’art. 70 d.lgs. 151/2001.',
  },
  {
    id: 'prev-l1-016',
    materia: 'Deontologia forense',
    difficolta: 1,
    domanda: 'L’iscrizione dell’avvocato alla Cassa Forense è compatibile con l’iscrizione obbligatoria a un’altra forma di previdenza?',
    opzioni: [
      'Sì, il cumulo di iscrizioni obbligatorie è sempre ammesso',
      'Sì, purché l’avvocato versi il contributo integrativo a entrambi gli enti',
      'No, e la conseguenza è la cancellazione automatica dall’albo forense',
      'No, l’iscrizione ad altra previdenza obbligatoria è incompatibile: l’altra copertura può rilevare solo in via volontaria o alternativa',
    ],
    rispostaCorretta: 3,
    spiegazione: 'Il regolamento di attuazione dell’art. 21, commi 8 e 9, l. 247/2012 esclude che l’iscritto all’albo possa essere contemporaneamente soggetto a un’altra previdenza obbligatoria in luogo della Cassa: la contribuzione ad altra gestione rileva solo se volontaria o alternativa. Il divieto è coerente con l’automatismo dell’iscrizione, che non lascia all’avvocato una scelta sull’ente di destinazione.',
  },
];
