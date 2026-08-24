import type { QuizQuestion } from '../../types';

/**
 * Diritto commerciale — Unità 4 · Eccellenza.
 *
 * Le questioni di confine: nullità della società e sanatoria, strumenti
 * finanziari atipici, vantaggi compensativi nei gruppi, garanzie
 * dell'impresa e patto marciano, profili avanzati della crisi e abusi di
 * mercato. Sono i punti su cui la commissione verifica se il candidato
 * sa distinguere, non solo esporre.
 */
export const commercialeL4: QuizQuestion[] = [
  {
    id: 'comm-l4-001',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Dopo l’iscrizione nel registro delle imprese, la nullità della società per azioni:',
    opzioni: [
      'Può essere pronunciata solo nei casi tassativi dell’art. 2332 c.c. e non pregiudica l’efficacia degli atti compiuti in nome della società',
      'Ha effetto retroattivo pieno, come nel diritto comune',
      'Non è mai pronunciabile',
      'Può essere pronunciata per qualsiasi vizio del contratto',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2332 c.c. tipizza tre sole cause: mancata stipulazione dell’atto costitutivo nella forma di atto pubblico, illiceità dell’oggetto sociale, mancanza nell’atto costitutivo di ogni indicazione su denominazione, conferimenti, capitale o oggetto. La dichiarazione opera come causa di scioglimento e non pregiudica l’efficacia degli atti compiuti; la nullità non può inoltre essere dichiarata se la causa è stata eliminata con modifica iscritta.',
  },
  {
    id: 'comm-l4-002',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Gli strumenti finanziari partecipativi dell’art. 2346, comma 6, c.c.:',
    opzioni: [
      'Attribuiscono sempre il diritto di voto nell’assemblea generale',
      'Sono forniti di diritti patrimoniali o anche amministrativi, escluso il voto nell’assemblea generale degli azionisti, e possono essere emessi a fronte di apporti anche d’opera o servizi',
      'Sono una categoria di azioni',
      'Non possono essere emessi a fronte di apporti non capitalizzabili',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La norma consente di remunerare apporti che non possono essere imputati a capitale — fra cui opera e servizi — con strumenti dotati di diritti patrimoniali e anche amministrativi, con esclusione del voto nell’assemblea generale. Lo statuto può però riservare loro la nomina di un componente indipendente del consiglio di amministrazione o del collegio sindacale (art. 2351, comma 5, c.c.).',
  },
  {
    id: 'comm-l4-003',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Le azioni riscattabili (art. 2437-sexies c.c.):',
    opzioni: [
      'Sono ammesse solo nelle società quotate',
      'Sono vietate nel nostro ordinamento',
      'Sono ammesse, con applicazione delle norme sul recesso quanto alla determinazione del corrispettivo e ai limiti di acquisto delle azioni proprie',
      'Attribuiscono al socio un diritto di riscatto verso la società',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2437-sexies c.c. ammette azioni o categorie di azioni per le quali lo statuto preveda un potere di riscatto da parte della società o dei soci, richiamando gli artt. 2437-ter e 2437-quater in materia di determinazione del valore di liquidazione e di procedimento. Il rinvio serve a impedire che il riscatto si traduca in un’espropriazione a condizioni arbitrarie.',
  },
  {
    id: 'comm-l4-004',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La business judgment rule si applica anche alle scelte relative all’assetto organizzativo?',
    opzioni: [
      'Sì, in modo pieno: nessun sindacato è ammesso',
      'La regola riguarda solo le operazioni finanziarie',
      'No: l’adeguatezza degli assetti è sindacabile senza limiti',
      'Sì, ma in misura attenuata: la scelta fra assetti concretamente idonei è insindacabile, mentre resta sindacabile l’adozione di un assetto inadeguato rispetto a natura e dimensioni dell’impresa',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La giurisprudenza più recente distingue: l’obbligo di dotarsi di assetti adeguati ex art. 2086 c.c. è un obbligo a contenuto vincolato nel fine, sicché il giudice può verificare se l’assetto adottato fosse idoneo; resta invece coperta dalla insindacabilità la scelta discrezionale fra più modelli organizzativi tutti astrattamente adeguati.',
  },
  {
    id: 'comm-l4-005',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La teoria dei vantaggi compensativi, prima della codificazione nell’art. 2497 c.c., era stata applicata dalla Cassazione:',
    opzioni: [
      'Richiedendo che i vantaggi compensativi fossero concreti e non meramente ipotetici, con onere della prova a carico dell’amministratore che li invoca',
      'Presumendo sempre l’esistenza del vantaggio',
      'Solo nelle società quotate',
      'Escludendo ogni rilevanza dei benefici di gruppo',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Già prima della riforma la Cassazione aveva ammesso che l’operazione svantaggiosa per la singola società potesse trovare giustificazione nei benefici derivanti dall’appartenenza al gruppo, ma ha sempre preteso che tali vantaggi fossero specifici, concreti e non congetturali, con onere di allegazione e prova a carico di chi li invoca. L’art. 2497 c.c. ha codificato l’impostazione.',
  },
  {
    id: 'comm-l4-006',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La responsabilità da direzione e coordinamento ha natura, secondo l’opinione prevalente:',
    opzioni: [
      'Contrattuale in ogni caso',
      'Extracontrattuale verso i soci e i creditori della società diretta, con conseguente regime di prescrizione quinquennale e onere probatorio a carico dell’attore',
      'Di responsabilità oggettiva',
      'Di responsabilità precontrattuale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2497 c.c. costruisce una responsabilità diretta della capogruppo verso i soci, per il pregiudizio alla redditività e al valore della partecipazione, e verso i creditori sociali, per la lesione dell’integrità del patrimonio. La dottrina e la giurisprudenza prevalenti la qualificano come extracontrattuale, pur con letture che valorizzano la violazione di obblighi specifici di corretta gestione.',
  },
  {
    id: 'comm-l4-007',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'L’art. 2497, comma 3, c.c. subordina l’azione del socio e del creditore alla condizione che:',
    opzioni: [
      'Vi sia una previa delibera assembleare',
      'Sia decorso un anno dal fatto',
      'Non siano stati soddisfatti dalla società soggetta all’attività di direzione e coordinamento',
      'La capogruppo sia insolvente',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La norma introduce una condizione di proponibilità: il socio e il creditore possono agire contro chi esercita direzione e coordinamento solo se non sono stati soddisfatti dalla società che vi è soggetta. Si tratta di una forma di sussidiarietà, che presuppone l’inutile tentativo di ottenere il ristoro dalla società direttamente danneggiata.',
  },
  {
    id: 'comm-l4-008',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il socio di s.r.l. che ha intenzionalmente deciso o autorizzato atti dannosi:',
    opzioni: [
      'Risponde solo se amministratore di fatto',
      'Risponde solo verso gli altri soci',
      'Non risponde mai, per il principio della responsabilità limitata',
      'È responsabile in solido con gli amministratori ai sensi dell’art. 2476, comma 8, c.c.',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2476, comma 8, c.c. rende solidalmente responsabili con gli amministratori i soci che hanno intenzionalmente deciso o autorizzato il compimento di atti dannosi per la società, i soci o i terzi. La norma valorizza il tratto personalistico della s.r.l., in cui ai soci possono essere riservate decisioni gestorie, e presuppone il dolo.',
  },
  {
    id: 'comm-l4-009',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il pegno mobiliare non possessorio (d.l. n. 59/2016):',
    opzioni: [
      'Consente al debitore di conservare il possesso e di trasformare o alienare i beni, con trasferimento del vincolo sul corrispettivo o sul bene sostitutivo, previa iscrizione nel registro dei pegni non possessori',
      'Può essere costituito solo su beni immobili',
      'È una garanzia atipica priva di disciplina',
      'Richiede lo spossessamento del debitore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il pegno non possessorio è riservato agli imprenditori iscritti nel registro delle imprese, a garanzia di crediti inerenti all’esercizio dell’impresa. Il costituente conserva il possesso e può disporre dei beni nell’esercizio dell’attività, con surrogazione reale del vincolo. L’opponibilità è affidata all’iscrizione in un registro informatizzato tenuto dall’Agenzia delle entrate.',
  },
  {
    id: 'comm-l4-010',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il cosiddetto patto marciano si distingue dal patto commissorio perché:',
    opzioni: [
      'Non trasferisce alcun diritto al creditore',
      'Prevede una stima imparziale del bene al momento dell’inadempimento e l’obbligo di restituire al debitore l’eccedenza rispetto al credito',
      'È stipulato dopo l’inadempimento',
      'Riguarda solo beni mobili',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il divieto dell’art. 2744 c.c. colpisce l’appropriazione del bene a prescindere dal suo valore. Il patto marciano supera il divieto perché la stima del bene, affidata a un terzo imparziale e riferita al momento dell’inadempimento, e l’obbligo di restituzione del surplus eliminano il rischio di sproporzione. È lo schema recepito dall’art. 48-bis t.u.b. sul finanziamento alle imprese garantito da trasferimento sospensivamente condizionato.',
  },
  {
    id: 'comm-l4-011',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nella cessione dei crediti d’impresa (l. n. 52/1991), la cessione è opponibile ai terzi:',
    opzioni: [
      'Solo con iscrizione nel registro delle imprese',
      'Solo con notifica al debitore ceduto',
      'Anche mediante il pagamento del corrispettivo da parte del cessionario, avente data certa',
      'Solo con atto pubblico',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La legge sul factoring deroga all’art. 2914 c.c.: il cessionario è preferito agli altri aventi causa se ha pagato in tutto o in parte il corrispettivo della cessione con atto avente data certa, senza necessità di notifica o accettazione del debitore ceduto. La disciplina è funzionale alla circolazione in massa dei crediti d’impresa e ammette la cessione di crediti futuri entro i limiti di legge.',
  },
  {
    id: 'comm-l4-012',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nelle operazioni di cartolarizzazione (l. n. 130/1999), i crediti ceduti:',
    opzioni: [
      'Sono aggredibili da qualunque creditore della società veicolo',
      'Non possono essere ceduti in blocco',
      'Restano nel patrimonio del cedente',
      'Costituiscono patrimonio separato della società veicolo, sul quale non sono ammesse azioni da parte di creditori diversi dai portatori dei titoli emessi',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 3 della l. n. 130/1999 stabilisce che i crediti relativi a ciascuna operazione costituiscono patrimonio separato a tutti gli effetti da quello della società cessionaria e da quello relativo alle altre operazioni: su di essi non sono ammesse azioni da parte di creditori diversi dai portatori dei titoli emessi per finanziare l’acquisto. È la struttura che rende possibile la segregazione del rischio.',
  },
  {
    id: 'comm-l4-013',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il trust liquidatorio istituito da un imprenditore insolvente:',
    opzioni: [
      'È stato ritenuto dalla giurisprudenza nullo o non riconoscibile quando si risolva nella sottrazione del patrimonio alle regole del concorso',
      'È equiparato al concordato preventivo',
      'Richiede l’omologazione del tribunale',
      'È sempre valido e opponibile alla procedura',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La Cassazione ha escluso il riconoscimento del trust cosiddetto liquidatorio quando, istituito da un imprenditore in stato di insolvenza, realizzi una liquidazione parallela idonea a sottrarre il patrimonio alla par condicio e alle regole della procedura concorsuale: il trust è ritenuto non riconoscibile per contrasto con norme imperative e di ordine pubblico, con conseguente inefficacia della segregazione.',
  },
  {
    id: 'comm-l4-014',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Le esenzioni dalla revocatoria per i pagamenti di beni e servizi effettuati nell’esercizio dell’attività d’impresa:',
    opzioni: [
      'Operano solo se il creditore prova la propria buona fede',
      'Operano se i pagamenti sono avvenuti nei termini d’uso, secondo l’art. 166, comma 3, CCII',
      'Non sono previste',
      'Riguardano solo i pagamenti dei dipendenti',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 166, comma 3, lett. a), CCII esenta i pagamenti di beni e servizi effettuati nell’esercizio dell’attività d’impresa nei termini d’uso. La formula richiede la conformità alle prassi in essere fra le parti e nel settore: non basta la mera inerenza all’attività. L’elenco comprende, fra le altre, rimesse su conto corrente non solutorie, atti in esecuzione di concordato o accordi omologati e vendite di immobili abitativi a giusto prezzo.',
  },
  {
    id: 'comm-l4-015',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La revocatoria delle rimesse in conto corrente bancario è ammessa:',
    opzioni: [
      'Mai',
      'Per tutte le rimesse affluite nel periodo sospetto',
      'Solo per le rimesse che abbiano ridotto in maniera consistente e durevole l’esposizione del debitore verso la banca, e nei limiti di tale riduzione',
      'Solo se il conto era scoperto',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La regola, introdotta dalla riforma del 2005 e confluita nell’art. 166, comma 3, lett. b), CCII, limita la revocabilità alle rimesse che abbiano ridotto in maniera consistente e durevole l’esposizione, e comunque nei limiti dell’ammontare massimo della riduzione. Ha superato la precedente distinzione giurisprudenziale fra rimesse solutorie e ripristinatorie sui conti scoperti.',
  },
  {
    id: 'comm-l4-016',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La revocatoria ordinaria esercitata dal curatore (art. 165 CCII):',
    opzioni: [
      'Richiede l’insolvenza del terzo',
      'Ha gli stessi presupposti della revocatoria concorsuale',
      'È preclusa dall’apertura della procedura',
      'È ammessa e si affianca alla revocatoria concorsuale, con i presupposti dell’art. 2901 c.c. e termine di prescrizione quinquennale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 165 CCII conferma la legittimazione del curatore all’azione revocatoria ordinaria, che richiede eventus damni, scientia damni e, per gli atti anteriori al sorgere del credito, la dolosa preordinazione. A differenza della revocatoria concorsuale, non è limitata ai periodi sospetti e si prescrive in cinque anni dal compimento dell’atto.',
  },
  {
    id: 'comm-l4-017',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nel concordato in continuità, la sorte dei contratti pubblici in corso:',
    opzioni: [
      'La continuità è ammessa, con attestazione di conformità al piano e ragionevole capacità di adempimento, e non opera la risoluzione per il solo fatto dell’accesso alla procedura',
      'Richiede una nuova gara',
      'Dipende dalla discrezionalità della stazione appaltante',
      'È la risoluzione automatica',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 95 CCII consente la prosecuzione dei contratti pubblici, se il professionista indipendente attesta la conformità al piano e la ragionevole capacità di adempimento, e vieta alla stazione appaltante di risolvere per il solo fatto dell’accesso allo strumento. La disciplina si coordina con quella dettata dal codice dei contratti pubblici in tema di requisiti dell’operatore economico in crisi.',
  },
  {
    id: 'comm-l4-018',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nel concordato preventivo, i creditori muniti di privilegio, pegno o ipoteca:',
    opzioni: [
      'Non hanno mai diritto di voto',
      'Non votano se soddisfatti integralmente, salvo che rinuncino in tutto o in parte alla prelazione; votano per la parte incapiente se la soddisfazione è parziale',
      'Votano sempre per l’intero credito',
      'Votano solo se la proposta è in continuità',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 109 CCII esclude dal voto i creditori privilegiati soddisfatti integralmente, salvo rinuncia alla prelazione, per la quale votano come chirografari. Se il piano prevede la soddisfazione parziale, essi votano per la parte residua, e a tal fine la degradazione a chirografo richiede la relazione giurata di un professionista indipendente sul valore di mercato dei beni oggetto di garanzia.',
  },
  {
    id: 'comm-l4-019',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il creditore dissenziente può contestare in sede di omologazione la convenienza della proposta:',
    opzioni: [
      'Mai: la convenienza è insindacabile',
      'Sempre, senza condizioni',
      'Se appartenente a una classe dissenziente o, in mancanza di classi, se rappresenta almeno il venti per cento dei crediti ammessi al voto; il tribunale omologa se il credito risulta soddisfatto non meno che nell’alternativa liquidatoria',
      'Solo se privilegiato',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 112, comma 3, CCII riproduce il meccanismo della «convenienza»: l’opposizione del dissenziente qualificato apre un giudizio in cui il tribunale verifica che il credito possa risultare soddisfatto in misura non inferiore rispetto alla liquidazione giudiziale. È l’unico spazio in cui la valutazione economica torna al giudice, in funzione di tutela della minoranza.',
  },
  {
    id: 'comm-l4-020',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'L’art. 120-bis CCII, in materia di accesso agli strumenti di regolazione della crisi da parte delle società:',
    opzioni: [
      'Richiede l’unanimità dei soci',
      'Rimette la scelta al tribunale',
      'Riserva la decisione all’assemblea dei soci',
      'Attribuisce la decisione in via esclusiva agli amministratori, e prevede che i soci non possano ostacolarne l’attuazione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il d.lgs. n. 83/2022 ha attribuito in via esclusiva agli organi amministrativi la decisione sull’accesso agli strumenti di regolazione della crisi, sottraendola alla competenza assembleare e prevedendo che la revoca degli amministratori sia inefficace se priva di giusta causa. È una scelta di sistema: la crisi sposta il baricentro dell’interesse dai soci ai creditori.',
  },
  {
    id: 'comm-l4-021',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nel concordato in continuità che preveda modificazioni del capitale, i soci:',
    opzioni: [
      'Possono opporsi all’omologazione solo lamentando un pregiudizio rispetto all’alternativa liquidatoria, non potendo bloccare il piano',
      'Devono approvare all’unanimità',
      'Non hanno alcuna tutela',
      'Conservano un diritto di veto',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 120-quater CCII regola la posizione dei soci quando il piano prevede operazioni sul capitale: essi possono opporsi all’omologazione, ma il sindacato è limitato al confronto con l’alternativa liquidatoria e alla verifica che il valore eventualmente riservato ai soci sia giustificato. Il piano può essere attuato anche in mancanza del loro consenso.',
  },
  {
    id: 'comm-l4-022',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La transazione fiscale nell’ambito degli accordi di ristrutturazione:',
    opzioni: [
      'Non può riguardare l’IVA',
      'Può riguardare anche IVA e ritenute, essendo caduto il vincolo di intangibilità dopo la sentenza della Corte di giustizia del 7 aprile 2016 (Degano Trasporti) e i successivi interventi normativi',
      'Richiede il pagamento integrale dei tributi',
      'È riservata alle imprese agricole',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Corte di giustizia, nella causa C-546/14, ha escluso che il diritto dell’Unione imponga il pagamento integrale dell’IVA nel concordato, purché un esperto indipendente attesti che il credito non riceverebbe un trattamento migliore nella liquidazione. Il legislatore ha adeguato la disciplina, oggi contenuta negli artt. 63 e 88 CCII, ammettendo la falcidia anche dei tributi costituenti risorse proprie dell’Unione.',
  },
  {
    id: 'comm-l4-023',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il divieto di abuso di informazioni privilegiate (art. 184 TUF) presuppone informazioni:',
    opzioni: [
      'Comunicate dall’emittente al mercato',
      'Di qualsiasi natura, purché non pubbliche',
      'Di carattere preciso, non pubbliche, concernenti direttamente o indirettamente emittenti o strumenti finanziari, che se pubbliche potrebbero influire in modo sensibile sui prezzi',
      'Solo di natura contabile',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La definizione, oggi contenuta nell’art. 7 del regolamento (UE) n. 596/2014 (MAR), richiede precisione, carattere non pubblico, riferibilità a emittenti o strumenti finanziari e price sensitivity. Sul piano sanzionatorio, il sistema italiano cumula illecito penale e amministrativo, con i correttivi imposti dal divieto di bis in idem (Corte cost., sent. n. 43/2018, e Corte EDU, Grande Stevens c. Italia).',
  },
  {
    id: 'comm-l4-024',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La manipolazione del mercato può realizzarsi anche mediante:',
    opzioni: [
      'Il semplice acquisto di titoli in quantità rilevante',
      'L’esercizio del diritto di voto in assemblea',
      'La sola diffusione di notizie false',
      'Operazioni simulate o altri artifizi concretamente idonei a provocare una sensibile alterazione del prezzo degli strumenti finanziari',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 185 TUF punisce chi diffonde notizie false o pone in essere operazioni simulate o altri artifizi concretamente idonei a provocare una sensibile alterazione del prezzo. Accanto alla manipolazione informativa si colloca dunque quella operativa; l’art. 187-ter prevede il corrispondente illecito amministrativo, e il regolamento MAR individua le prassi di mercato ammesse.',
  },
  {
    id: 'comm-l4-025',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nel sistema del doppio binario sanzionatorio in materia di abusi di mercato, dopo la sentenza Grande Stevens:',
    opzioni: [
      'Il cumulo è ammesso se i procedimenti sono avvinti da una connessione sostanziale e temporale sufficientemente stretta e la sanzione complessiva è proporzionata',
      'Resta possibile solo la sanzione amministrativa',
      'Resta possibile solo la sanzione penale',
      'Il cumulo è sempre vietato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La Corte EDU, con Grande Stevens c. Italia (2014), ha ravvisato la violazione del ne bis in idem; la successiva sentenza A e B c. Norvegia (2016) ha ammesso il cumulo in presenza di uno stretto legame materiale e temporale. La Corte costituzionale, con la sent. n. 43/2018, e la Corte di giustizia, con le sentenze del 20 marzo 2018, hanno recepito il criterio, imponendo il controllo di proporzionalità della sanzione complessiva.',
  },
  {
    id: 'comm-l4-026',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'L’azione di responsabilità verso gli amministratori esercitata dal curatore ha natura:',
    opzioni: [
      'Esclusivamente contrattuale',
      'Inscindibile e cumulativa, comprendendo l’azione sociale (contrattuale) e quella dei creditori (extracontrattuale), con conseguente applicazione del regime probatorio più favorevole per ciascun profilo',
      'Esclusivamente extracontrattuale',
      'Di natura penale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La giurisprudenza qualifica l’azione del curatore come cumulo inscindibile delle azioni degli artt. 2393 e 2394 c.c. Ne discende che il curatore può giovarsi del regime probatorio dell’azione sociale — che è di responsabilità contrattuale, con onere di allegare l’inadempimento — e dei termini di prescrizione più favorevoli fra i due, dovendo però individuare condotte specifiche e non generiche.',
  },
  {
    id: 'comm-l4-027',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nella determinazione del danno da mala gestio, il ricorso al criterio della differenza fra attivo e passivo fallimentari:',
    opzioni: [
      'Si applica solo alle società di persone',
      'È il criterio ordinario',
      'È ammissibile solo in via residuale, quando l’assenza o l’irregolarità delle scritture renda impossibile la ricostruzione, e va motivato',
      'È sempre vietato',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Le Sezioni Unite, con la sent. n. 9100/2015, hanno escluso l’uso automatico del criterio, ammettendolo solo come parametro equitativo residuale quando l’irregolarità contabile imputabile agli amministratori impedisca la ricostruzione degli effetti delle singole condotte. Il principio è oggi recepito dall’art. 2486, comma 3, ultimo periodo, c.c.',
  },
  {
    id: 'comm-l4-028',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'L’azione revocatoria dei pagamenti eseguiti dal terzo:',
    opzioni: [
      'È ammessa solo se il terzo è socio',
      'Presuppone la revocatoria del rapporto sottostante',
      'È sempre ammessa',
      'È esclusa quando il terzo ha pagato con mezzi propri, senza rivalersi sul patrimonio del debitore, perché manca la lesione della par condicio',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il presupposto della revocatoria è l’uscita di valore dal patrimonio del debitore poi assoggettato alla procedura. Se il terzo adempie con mezzi propri, senza depauperare il patrimonio del debitore, non vi è lesione della parità di trattamento e l’atto non è revocabile; diversa è l’ipotesi in cui il terzo utilizzi provvista fornita dal debitore, dove la giurisprudenza guarda alla provenienza sostanziale delle somme.',
  },
  {
    id: 'comm-l4-029',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nella liquidazione giudiziale, i beni sopravvenuti al debitore persona fisica:',
    opzioni: [
      'Sono compresi nel concorso, dedotte le passività incontrate per l’acquisto e la conservazione, salve le esclusioni di legge',
      'Spettano integralmente al debitore',
      'Sono attribuiti ai creditori privilegiati',
      'Sono sempre esclusi dalla procedura',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 142 CCII comprende nella liquidazione i beni pervenuti al debitore durante la procedura, dedotte le passività incontrate per l’acquisto e la conservazione. Restano esclusi i beni e i diritti di natura strettamente personale, gli assegni alimentari, gli stipendi nei limiti di quanto occorra al mantenimento del debitore e della famiglia, e le cose impignorabili per legge.',
  },
  {
    id: 'comm-l4-030',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'L’esdebitazione del debitore incapiente (art. 283 CCII):',
    opzioni: [
      'Non esiste nel nostro ordinamento',
      'È concessa alla persona fisica meritevole che non sia in grado di offrire alcuna utilità ai creditori, una sola volta, con obbligo di pagamento se sopravvengono utilità rilevanti nei quattro anni successivi',
      'Richiede il pagamento di almeno il dieci per cento dei debiti',
      'È automatica per ogni debitore',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’istituto, introdotto dal d.l. n. 137/2020 e confluito nel Codice, consente al debitore persona fisica meritevole e incapiente di ottenere la liberazione dai debiti senza alcuna soddisfazione dei creditori, per una sola volta. Nei quattro anni successivi il debitore è tenuto al pagamento se sopravvengono utilità rilevanti che consentano di soddisfare i creditori in misura non inferiore al dieci per cento.',
  },
  {
    id: 'comm-l4-031',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La meritevolezza richiesta al consumatore sovraindebitato è esclusa quando:',
    opzioni: [
      'Il debitore ha già chiesto una dilazione',
      'Il debitore ha contratto debiti superiori al proprio reddito annuo',
      'Il debitore ha determinato la situazione di sovraindebitamento con colpa grave, malafede o frode',
      'Il debitore ha più di un creditore',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 69 CCII esclude l’omologazione quando il consumatore ha determinato la situazione con colpa grave, malafede o frode. Il Codice ha però introdotto un correttivo rilevante: il creditore che abbia colpevolmente determinato o aggravato la situazione, violando i principi in materia di merito creditizio, non può presentare opposizione né reclamo, pur potendo contestare la convenienza.',
  },
  {
    id: 'comm-l4-032',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'L’azione di responsabilità nei confronti della banca per «concessione abusiva del credito»:',
    opzioni: [
      'Spetta esclusivamente ai singoli creditori',
      'Presuppone la revocatoria dei pagamenti',
      'È inammissibile',
      'È ammessa e, secondo la Cassazione, può essere esercitata dal curatore quando la condotta abbia aggravato il dissesto, danneggiando la massa',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Cassazione (fra le altre, n. 18610/2021) ha riconosciuto la legittimazione del curatore ad agire contro la banca che, mantenendo artificiosamente in vita un’impresa decotta, abbia aggravato il dissesto: il danno è quello arrecato al patrimonio sociale e quindi alla massa. Resta ferma la possibilità per il singolo creditore di agire per il danno diretto, quando ne ricorrano i presupposti.',
  },
  {
    id: 'comm-l4-033',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il rapporto fra azione revocatoria e cessione d’azienda in frode ai creditori:',
    opzioni: [
      'Consente il cumulo di rimedi: revocatoria ordinaria o concorsuale, responsabilità ex art. 2560 c.c. e, ricorrendone i presupposti, l’accertamento della simulazione',
      'Impone la scelta esclusiva di un rimedio',
      'Rende sempre nullo il trasferimento',
      'Esclude ogni rimedio diverso dalla revocatoria',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'I rimedi hanno presupposti e funzioni diversi: la revocatoria rende inefficace l’atto verso i creditori, la responsabilità dell’art. 2560 c.c. opera sul piano dei debiti risultanti dai libri, la simulazione presuppone la divergenza fra voluto e dichiarato. Il concorso è ammesso, salvo il divieto di duplicazione del risarcimento.',
  },
  {
    id: 'comm-l4-034',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il socio receduto da una s.p.a. ha diritto alla liquidazione della partecipazione determinata:',
    opzioni: [
      'Al valore nominale',
      'Tenendo conto della consistenza patrimoniale della società e delle sue prospettive reddituali, nonché dell’eventuale valore di mercato delle azioni',
      'Al valore contabile del patrimonio netto',
      'Al prezzo stabilito dagli amministratori senza vincoli',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2437-ter c.c. impone agli amministratori, sentiti il collegio sindacale e il revisore, di determinare il valore tenendo conto della consistenza patrimoniale e delle prospettive reddituali, nonché dell’eventuale valore di mercato delle azioni. Il socio può contestare la determinazione, che è allora effettuata da un esperto nominato dal tribunale; per le quotate si fa riferimento alla media dei prezzi di chiusura.',
  },
  {
    id: 'comm-l4-035',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Le cause di recesso inderogabili nella s.p.a. si distinguono da quelle derogabili perché:',
    opzioni: [
      'Non esiste alcuna distinzione',
      'Le prime possono essere escluse solo con il consenso di tutti i soci',
      'Le prime non possono essere soppresse o rese più gravose dallo statuto, mentre per le seconde lo statuto può escludere il diritto',
      'Le seconde riguardano solo le società quotate',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2437 c.c. elenca al comma 1 le cause inderogabili (fra cui modifica dell’oggetto sociale, trasformazione, trasferimento della sede all’estero, revoca dello stato di liquidazione, eliminazione di cause di recesso) e al comma 2 quelle derogabili (proroga del termine, introduzione o rimozione di vincoli alla circolazione). Il comma 6 dichiara nullo ogni patto volto a escludere o rendere più gravoso l’esercizio del diritto nelle ipotesi inderogabili.',
  },
  {
    id: 'comm-l4-036',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nella s.p.a. costituita a tempo indeterminato e non quotata, il diritto di recesso:',
    opzioni: [
      'Spetta solo per giusta causa',
      'È subordinato alla delibera assembleare',
      'Non è previsto',
      'Spetta ad nutum, con preavviso di almeno centottanta giorni, prorogabile dallo statuto fino a un anno',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2437, comma 3, c.c. attribuisce il recesso ad nutum al socio di società costituita a tempo indeterminato le cui azioni non siano quotate, con preavviso di almeno centottanta giorni, che lo statuto può elevare fino a un anno. La regola compensa il vincolo potenzialmente perpetuo, ed è speculare a quella dell’art. 2473 c.c. per la s.r.l.',
  },
  {
    id: 'comm-l4-037',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nelle società quotate, la nomina degli amministratori mediante voto di lista è funzionale:',
    opzioni: [
      'Ad assicurare che almeno un componente sia espresso dalla minoranza, insieme al rispetto dei criteri di equilibrio fra i generi',
      'A escludere gli amministratori indipendenti',
      'A consentire la nomina da parte della Consob',
      'A garantire la nomina di tutti gli amministratori alla maggioranza',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 147-ter TUF impone che lo statuto preveda il voto di lista e che almeno un componente sia espresso dalla lista di minoranza che non sia collegata in alcun modo con quella risultata prima per numero di voti. La disciplina si combina con i requisiti di indipendenza e con le regole sull’equilibrio fra i generi negli organi sociali.',
  },
  {
    id: 'comm-l4-038',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La distinzione fra amministratore indipendente e amministratore non esecutivo:',
    opzioni: [
      'Non esiste: i termini sono sinonimi',
      'L’amministratore non esecutivo è privo di deleghe, mentre l’indipendente deve possedere requisiti che escludono relazioni idonee a condizionarne l’autonomia di giudizio',
      'L’indipendente è nominato dal tribunale',
      'Il non esecutivo non risponde per mala gestio',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Le due qualifiche operano su piani diversi: la prima attiene all’assenza di deleghe gestorie, la seconda al possesso di requisiti soggettivi che assicurino autonomia di giudizio rispetto a società, azionisti di controllo e amministratori esecutivi. Ogni amministratore indipendente è non esecutivo, ma non vale il contrario; entrambi restano soggetti al dovere di agire informati ex art. 2381 c.c.',
  },
  {
    id: 'comm-l4-039',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La segnalazione interna di violazioni (whistleblowing) nel settore privato, dopo il d.lgs. n. 24/2023:',
    opzioni: [
      'Consente segnalazioni solo anonime',
      'È facoltativa per tutte le imprese',
      'Impone canali di segnalazione interna ai soggetti del settore privato che superino determinate soglie dimensionali o che adottino modelli organizzativi ex d.lgs. n. 231/2001, con tutela del segnalante da ritorsioni',
      'Riguarda solo le pubbliche amministrazioni',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il d.lgs. n. 24/2023, attuativo della direttiva (UE) 2019/1937, ha unificato la disciplina per settore pubblico e privato: obbligo di canali interni, possibilità di segnalazione esterna all’ANAC e, a certe condizioni, di divulgazione pubblica, riservatezza dell’identità del segnalante, divieto e nullità degli atti ritorsivi, con inversione dell’onere della prova a favore del segnalante.',
  },
  {
    id: 'comm-l4-040',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La rendicontazione di sostenibilità, dopo il d.lgs. n. 125/2024:',
    opzioni: [
      'Riguarda solo le società quotate statunitensi',
      'Sostituisce il bilancio d’esercizio',
      'Resta volontaria per tutte le imprese',
      'È obbligatoria per le imprese individuate dalla legge secondo criteri dimensionali e di quotazione, ed è inserita in un’apposita sezione della relazione sulla gestione, soggetta ad attestazione di conformità',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il d.lgs. n. 125/2024 ha attuato la direttiva CSRD, sostituendo la disciplina della dichiarazione non finanziaria: la rendicontazione di sostenibilità è collocata in una sezione specifica della relazione sulla gestione, redatta secondo i principi europei ESRS e sottoposta ad attestazione di conformità da parte del revisore o di un prestatore indipendente abilitato.',
  },
  {
    id: 'comm-l4-041',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La qualificazione del contratto di rete come «rete-soggetto» comporta:',
    opzioni: [
      'L’acquisto della soggettività giuridica, con autonoma rilevanza fiscale e possibilità di essere titolare di rapporti giuridici distinti da quelli dei retisti',
      'La trasformazione in società di capitali',
      'La responsabilità illimitata dei partecipanti',
      'Nessuna conseguenza pratica',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La rete che si doti di fondo patrimoniale comune e organo comune e si iscriva nella sezione ordinaria del registro delle imprese acquista soggettività giuridica: diviene autonomo centro di imputazione di rapporti, con conseguenze anche sul piano tributario. Nella rete-contratto, invece, gli effetti degli atti dell’organo comune ricadono direttamente sui partecipanti.',
  },
  {
    id: 'comm-l4-042',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il conferimento d’opera in s.r.l. richiede, ai sensi dell’art. 2464 c.c.:',
    opzioni: [
      'La sola indicazione nell’atto costitutivo',
      'Una polizza di assicurazione o una fideiussione bancaria che garantiscano, per l’intero valore assegnato, gli obblighi assunti dal socio',
      'Il versamento contestuale in denaro',
      'La perizia di un esperto nominato dal tribunale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2464, comma 6, c.c. ammette il conferimento di prestazioni d’opera o di servizi a condizione che l’intero valore assegnato sia garantito da polizza assicurativa o fideiussione bancaria; l’atto costitutivo può consentire la sostituzione con il versamento di una cauzione. La garanzia assicura che il capitale non resti privo di copertura effettiva in caso di inadempimento.',
  },
  {
    id: 'comm-l4-043',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La delibera di aumento di capitale con esclusione del diritto di opzione richiede che il prezzo di emissione:',
    opzioni: [
      'Sia inferiore al valore contabile, per favorire la sottoscrizione',
      'Sia pari al valore nominale',
      'Sia determinato in base al valore del patrimonio netto, tenendo conto per le quotate anche dell’andamento delle quotazioni dell’ultimo semestre',
      'Sia liberamente fissato dagli amministratori',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2441, comma 6, c.c. impone che la proposta di aumento con esclusione o limitazione dell’opzione determini il prezzo in base al valore del patrimonio netto, tenendo conto, per le azioni quotate, anche dell’andamento delle quotazioni nell’ultimo semestre. Il collegio sindacale deve esprimere parere sulla congruità del prezzo, a tutela dei soci esclusi dalla sottoscrizione.',
  },
  {
    id: 'comm-l4-044',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'L’aumento di capitale con sovrapprezzo è obbligatorio:',
    opzioni: [
      'Solo negli aumenti gratuiti',
      'Mai',
      'In ogni aumento a pagamento',
      'Quando il diritto di opzione è escluso o limitato, per evitare l’annacquamento della partecipazione dei soci',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il sovrapprezzo è la tecnica con cui si evita che i nuovi sottoscrittori acquisiscano gratuitamente una quota delle riserve accumulate. L’art. 2441, comma 6, c.c. lo rende obbligatorio quando l’opzione è esclusa o limitata: senza di esso i soci preesistenti subirebbero una diluizione non solo proporzionale ma anche di valore.',
  },
  {
    id: 'comm-l4-045',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La postergazione dell’art. 2467 c.c. si applica ai finanziamenti erogati da chi non è formalmente socio ma esercita direzione e coordinamento?',
    opzioni: [
      'Sì: l’art. 2497-quinquies c.c. estende la disciplina ai finanziamenti effettuati a favore della società da chi esercita attività di direzione e coordinamento o da altri soggetti ad essa sottoposti',
      'Solo se il finanziatore detiene almeno il dieci per cento',
      'Solo nelle società quotate',
      'No, la norma è di stretta interpretazione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2497-quinquies c.c. richiama l’art. 2467 c.c. per i finanziamenti infragruppo, colpendo così anche il finanziamento «orizzontale» fra società sorelle e quello proveniente dalla capogruppo non socia. La ratio è identica: impedire che il rischio d’impresa venga trasferito sui creditori esterni attraverso il capitale di credito.',
  },
  {
    id: 'comm-l4-046',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La distinzione fra crisi e insolvenza, nel Codice della crisi, rileva perché:',
    opzioni: [
      'È priva di conseguenze pratiche',
      'Delimita l’accesso agli strumenti: alcuni presuppongono la sola crisi o addirittura la probabilità di crisi, altri richiedono l’insolvenza conclamata',
      'Determina la competenza territoriale',
      'Incide solo sui reati fallimentari',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La crisi è definita come lo stato che rende probabile l’insolvenza e si manifesta con l’inadeguatezza dei flussi di cassa prospettici a far fronte alle obbligazioni nei successivi dodici mesi. La composizione negoziata è accessibile anche solo in presenza di squilibrio che renda probabile la crisi; la liquidazione giudiziale presuppone l’insolvenza; il concordato è aperto a entrambe le situazioni.',
  },
  {
    id: 'comm-l4-047',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il centro degli interessi principali del debitore (COMI) rileva:',
    opzioni: [
      'Per determinare la legge applicabile ai contratti',
      'Solo ai fini fiscali',
      'Per individuare la competenza internazionale ad aprire la procedura di insolvenza principale, secondo il regolamento (UE) 2015/848',
      'Solo per le imprese individuali',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il regolamento (UE) 2015/848 àncora la competenza per l’apertura della procedura principale al COMI, presunto coincidente con la sede statutaria per le società, salvo prova contraria e con un periodo sospetto in caso di trasferimento recente. Negli altri Stati in cui il debitore ha una dipendenza può aprirsi una procedura secondaria, con effetti limitati ai beni ivi situati.',
  },
  {
    id: 'comm-l4-048',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La responsabilità solidale dell’acquirente per i debiti tributari dell’azienda ceduta:',
    opzioni: [
      'Non è prevista',
      'Riguarda solo l’IVA',
      'È illimitata',
      'È limitata al valore dell’azienda ceduta e ai debiti risultanti dal certificato rilasciato dall’amministrazione finanziaria, ai sensi dell’art. 14 del d.lgs. n. 472/1997',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 14 del d.lgs. n. 472/1997 prevede la responsabilità solidale e sussidiaria del cessionario, beneficiata dall’escussione preventiva del cedente e contenuta nel valore dell’azienda o del ramo. Il cessionario può inoltre chiedere all’amministrazione un certificato sull’esistenza di contestazioni e debiti: il certificato negativo, o non rilasciato entro quaranta giorni, ha effetto pienamente liberatorio.',
  },
  {
    id: 'comm-l4-049',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La responsabilità dei liquidatori verso i creditori sociali insoddisfatti presuppone:',
    opzioni: [
      'Una condotta colposa, quale la distribuzione dell’attivo ai soci senza soddisfare i creditori o la violazione dell’ordine di distribuzione',
      'L’insolvenza dei soci',
      'La mancata approvazione del bilancio finale',
      'La sola cancellazione della società',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2495 c.c. richiede che il mancato pagamento sia dipeso da colpa dei liquidatori. La condotta tipica è il pagamento dei soci in violazione dell’art. 2491 c.c., che vieta la ripartizione di acconti finché non siano pagati i creditori o accantonate le somme necessarie. La Cassazione ha precisato il riparto dell’onere probatorio in relazione all’esistenza di attivo distribuito.',
  },
  {
    id: 'comm-l4-050',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La cancellazione della società dal registro delle imprese, secondo le Sezioni Unite del 2013:',
    opzioni: [
      'Ha efficacia meramente dichiarativa',
      'Determina l’estinzione dell’ente, con fenomeno successorio in capo ai soci per i rapporti pendenti e rinuncia tacita ai crediti meramente illiquidi',
      'Non produce alcun effetto se vi sono rapporti pendenti',
      'Comporta la nullità degli atti anteriori',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Le sentenze nn. 6070, 6071 e 6072 del 2013 hanno affermato l’efficacia costitutiva della cancellazione, con estinzione dell’ente anche in presenza di rapporti pendenti, e hanno ricostruito la posizione dei soci in termini successori. La mancata inclusione nel bilancio finale di un credito incerto o illiquido è stata interpretata come rinuncia, mentre i beni e i diritti non liquidati si trasferiscono in comunione ai soci.',
  },
  {
    id: 'comm-l4-051',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il fenomeno della «cancellazione e riapertura» del processo pendente contro la società estinta comporta:',
    opzioni: [
      'Il passaggio della causa al tribunale delle imprese',
      'L’improcedibilità assoluta della domanda',
      'L’interruzione del processo e la sua prosecuzione o riassunzione nei confronti dei soci successori',
      'La conversione in giudizio arbitrale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Poiché la cancellazione comporta estinzione e successione, il processo pendente si interrompe e prosegue o è riassunto nei confronti dei soci, quali successori a titolo universale nei rapporti attivi e passivi, nei limiti di quanto riscosso in sede di liquidazione. È regola coerente con l’art. 110 c.p.c. e con l’impianto delle Sezioni Unite del 2013.',
  },
  {
    id: 'comm-l4-052',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il divieto di concorrenza dell’amministratore di s.p.a. (art. 2390 c.c.):',
    opzioni: [
      'Riguarda solo gli amministratori delegati',
      'Vale anche dopo la cessazione della carica, per cinque anni',
      'È inderogabile',
      'Opera salvo autorizzazione dell’assemblea, e la sua violazione comporta la revocabilità per giusta causa e il risarcimento del danno',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2390 c.c. vieta all’amministratore di assumere la qualità di socio illimitatamente responsabile in società concorrenti, esercitare attività concorrente per conto proprio o di terzi o essere amministratore o direttore generale in società concorrenti, salvo autorizzazione assembleare. La violazione fonda la revoca per giusta causa e il risarcimento; il divieto non si estende, di per sé, al periodo successivo alla cessazione.',
  },
  {
    id: 'comm-l4-053',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il compenso degli amministratori investiti di particolari cariche:',
    opzioni: [
      'È stabilito dal consiglio di amministrazione, sentito il parere del collegio sindacale, salvo che l’assemblea ne determini un importo complessivo per tutti gli amministratori',
      'È fissato esclusivamente dall’assemblea straordinaria',
      'Non può eccedere il compenso dei sindaci',
      'È determinato liberamente dagli stessi delegati',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2389, comma 3, c.c. attribuisce al consiglio la determinazione della remunerazione degli amministratori investiti di particolari cariche in conformità dello statuto, sentito il parere del collegio sindacale; se lo statuto lo prevede, l’assemblea può determinare un importo complessivo per la remunerazione di tutti gli amministratori, comprensivo di quelli investiti di cariche particolari.',
  },
  {
    id: 'comm-l4-054',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La delibera assembleare di determinazione del compenso è necessaria anche quando l’amministratore sia unico socio?',
    opzioni: [
      'No, il compenso si presume dovuto',
      'Sì: la giurisprudenza richiede una delibera espressa, non potendo il diritto al compenso essere desunto per fatti concludenti o dall’approvazione del bilancio che lo contabilizzi',
      'No, basta l’indicazione in bilancio',
      'Solo nelle società quotate',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Le Sezioni Unite (n. 21933/2008) hanno escluso che l’approvazione del bilancio contenente la posta relativa ai compensi equivalga alla delibera di determinazione richiesta dall’art. 2389 c.c., salvo che l’assemblea, totalitaria, abbia espressamente discusso e approvato quella specifica posta. La regola presidia la trasparenza nei confronti dei soci e dei terzi.',
  },
  {
    id: 'comm-l4-055',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nel sistema monistico, il comitato per il controllo sulla gestione:',
    opzioni: [
      'È nominato dal tribunale',
      'È nominato dall’assemblea fra soggetti esterni al consiglio',
      'È costituito all’interno del consiglio di amministrazione, con componenti in possesso dei requisiti di indipendenza e privi di deleghe',
      'Coincide con il collegio sindacale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2409-octiesdecies c.c. prevede che il comitato sia composto da amministratori in possesso dei requisiti di onorabilità, professionalità e indipendenza, che non siano membri del comitato esecutivo, non abbiano deleghe e non svolgano funzioni attinenti alla gestione. Almeno un componente deve essere revisore legale iscritto nel registro.',
  },
  {
    id: 'comm-l4-056',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Nel sistema dualistico, l’approvazione del bilancio d’esercizio spetta:',
    opzioni: [
      'Al consiglio di gestione',
      'Al revisore legale',
      'All’assemblea ordinaria, in ogni caso',
      'Al consiglio di sorveglianza, salvo il caso in cui lo statuto ne attribuisca la competenza all’assemblea o quando il consiglio non approvi',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2409-terdecies c.c. attribuisce al consiglio di sorveglianza l’approvazione del bilancio di esercizio e, ove redatto, di quello consolidato. Se lo statuto lo prevede, o in caso di mancata approvazione, o quando lo richieda almeno un terzo dei componenti dei due consigli, la competenza torna all’assemblea. È una delle differenze più marcate rispetto al sistema tradizionale.',
  },
  {
    id: 'comm-l4-057',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'L’azione di responsabilità nel sistema dualistico è promossa:',
    opzioni: [
      'Anche dal consiglio di sorveglianza, con deliberazione assunta a maggioranza dei componenti',
      'Solo dal consiglio di gestione',
      'Solo dal curatore',
      'Solo dall’assemblea',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2409-decies c.c. attribuisce la legittimazione all’azione sociale di responsabilità contro i consiglieri di gestione anche al consiglio di sorveglianza, con deliberazione a maggioranza dei componenti; se assunta a maggioranza dei due terzi, comporta la revoca dall’ufficio dei consiglieri di gestione contro cui è proposta. Resta ferma la legittimazione dell’assemblea.',
  },
  {
    id: 'comm-l4-058',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il gruppo europeo di interesse economico (GEIE):',
    opzioni: [
      'Ha scopo di lucro proprio',
      'Ha lo scopo di agevolare o sviluppare l’attività economica dei membri, con responsabilità illimitata e solidale di questi per le obbligazioni del gruppo',
      'È una società di capitali sovranazionale',
      'Non può essere iscritto nel registro delle imprese',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il GEIE, disciplinato dal regolamento (CEE) n. 2137/85 e dal d.lgs. n. 240/1991, ha finalità ausiliaria rispetto all’attività dei membri e non può realizzare utili per sé. I membri rispondono illimitatamente e solidalmente delle obbligazioni del gruppo, con beneficio di preventiva escussione. È soggetto a iscrizione nel registro delle imprese.',
  },
  {
    id: 'comm-l4-059',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il rapporto fra clausola compromissoria statutaria e controversie sulla validità delle delibere:',
    opzioni: [
      'Dipende dall’ammontare del capitale sociale',
      'Le controversie sulle delibere sono sempre indisponibili e quindi non compromettibili',
      'Sono compromettibili le controversie che non abbiano a oggetto interessi indisponibili, sicché non ogni delibera nulla è per ciò solo sottratta agli arbitri',
      'Sono sempre compromettibili',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La giurisprudenza ha superato l’equazione automatica fra nullità della delibera e indisponibilità del diritto: il criterio dell’art. 34 del d.lgs. n. 5/2003 è la disponibilità dell’interesse dedotto in lite. Restano sottratte all’arbitrato le controversie che coinvolgono interessi generali o di terzi, come quelle relative a delibere di approvazione del bilancio incidenti su norme poste a tutela dei creditori.',
  },
  {
    id: 'comm-l4-060',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il concordato con assuntore si caratterizza perché:',
    opzioni: [
      'I creditori assumono la gestione dell’impresa',
      'È vietato nel Codice della crisi',
      'Il debitore conserva la titolarità dei beni',
      'Un terzo assume gli obblighi del concordato, acquisendo di regola le attività e liberando il debitore nei limiti previsti dal piano',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’assunzione consiste nell’accollo, da parte di un terzo, degli obblighi derivanti dal concordato, con contestuale trasferimento a suo favore delle attività. Il Codice della crisi la ammette sia nel concordato preventivo sia nel concordato nella liquidazione giudiziale, richiedendo che il piano indichi analiticamente le obbligazioni assunte e le garanzie offerte.',
  },
  {
    id: 'comm-l4-061',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'La proposta di concordato nella liquidazione giudiziale può essere presentata:',
    opzioni: [
      'Da uno o più creditori o da un terzo, anche prima del decreto di esecutività dello stato passivo se la contabilità consente la ricostruzione della posizione dei creditori, e dal debitore decorso un anno dall’apertura',
      'Solo dal curatore',
      'Solo dopo la chiusura della liquidazione',
      'Solo dal debitore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 240 CCII consente la proposta a uno o più creditori o a un terzo anche prima del decreto che rende esecutivo lo stato passivo, purché la contabilità e le altre notizie disponibili consentano al curatore di predisporre un elenco provvisorio dei creditori. Il debitore, i suoi soci e le società del gruppo possono proporla solo dopo il decorso di un anno dall’apertura e non oltre due anni dal decreto di esecutività.',
  },
  {
    id: 'comm-l4-062',
    materia: 'Diritto commerciale',
    difficolta: 4,
    domanda:
      'Il rapporto fra composizione negoziata e successiva liquidazione giudiziale, quanto agli atti autorizzati dal tribunale:',
    opzioni: [
      'Gli atti autorizzati restano revocabili',
      'Gli atti, i pagamenti e le garanzie posti in essere in esecuzione delle misure autorizzate non sono soggetti all’azione revocatoria, salvo i casi di malafede',
      'Tutti gli atti compiuti sono nulli',
      'La composizione negoziata preclude la liquidazione giudiziale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 24 CCII sottrae alla revocatoria gli atti, i pagamenti e le garanzie posti in essere dopo l’accettazione dell’incarico dell’esperto, purché coerenti con l’andamento delle trattative e con le prospettive di risanamento, e con l’ulteriore presidio dell’autorizzazione giudiziale per gli atti di straordinaria amministrazione. È l’incentivo che rende praticabile la negoziazione con i creditori.',
  },
];
