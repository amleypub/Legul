import type { QuizQuestion } from '../../types';

/**
 * Diritto commerciale — Unità 1 · Fondamenti.
 *
 * Materia a scelta dell'orale (d.l. 100/2026, conv. l. 145/2026).
 * Il livello copre l'ossatura: statuto dell'imprenditore, azienda e segni
 * distintivi, concorrenza, tipi societari e loro tratti essenziali.
 *
 * Le domande sul dissesto usano il lessico del Codice della crisi
 * (d.lgs. 14/2019, in vigore dal 15 luglio 2022 e da ultimo modificato
 * dal d.lgs. 136/2024): «liquidazione giudiziale», non «fallimento».
 */
export const commercialeL1: QuizQuestion[] = [
  {
    id: 'comm-l1-001',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Secondo l’art. 2082 c.c., è imprenditore chi esercita:',
    opzioni: [
      'Qualsiasi attività lavorativa retribuita, anche occasionale',
      'Professionalmente un’attività economica organizzata al fine della produzione o dello scambio di beni o servizi',
      'Un’attività commerciale iscritta nel registro delle imprese, a prescindere dall’organizzazione',
      'Un’attività di lavoro autonomo con almeno un dipendente',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2082 c.c. richiede quattro requisiti: professionalità (esercizio abituale e non occasionale), economicità (metodo tendenzialmente idoneo a coprire i costi con i ricavi), organizzazione (di capitali e/o lavoro altrui) e destinazione al mercato. L’iscrizione nel registro delle imprese non è elemento costitutivo della qualità di imprenditore.',
  },
  {
    id: 'comm-l1-002',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Chi è il piccolo imprenditore ai sensi dell’art. 2083 c.c.?',
    opzioni: [
      'Chi ha meno di dieci dipendenti',
      'Chi realizza un fatturato annuo inferiore a 200.000 euro',
      'Chi esercita un’attività professionale organizzata prevalentemente con il lavoro proprio e dei componenti della famiglia',
      'Chi non è iscritto nel registro delle imprese',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2083 c.c. indica coltivatori diretti, artigiani, piccoli commercianti e chiunque eserciti un’attività professionale organizzata prevalentemente con il lavoro proprio e dei componenti della famiglia. Il criterio è qualitativo: la prevalenza del lavoro personale sul capitale investito e sul lavoro altrui. I limiti quantitativi rilevano su un piano diverso, quello dell’accesso alla liquidazione giudiziale.',
  },
  {
    id: 'comm-l1-003',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'L’imprenditore agricolo, dopo la riforma del d.lgs. n. 228/2001, è definito dall’art. 2135 c.c. come chi esercita:',
    opzioni: [
      'Qualsiasi attività svolta in un fondo rustico di sua proprietà',
      'Attività di trasformazione di prodotti agricoli acquistati da terzi',
      'La sola coltivazione del fondo, con esclusione dell’allevamento',
      'Coltivazione del fondo, selvicoltura, allevamento di animali e attività connesse',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2135 c.c. individua le attività agricole essenziali — coltivazione del fondo, selvicoltura, allevamento di animali — e le attività connesse (manipolazione, conservazione, trasformazione, commercializzazione e valorizzazione), purché abbiano ad oggetto prodotti ottenuti prevalentemente dall’esercizio dell’attività principale. La riforma ha eliminato il riferimento allo sfruttamento del fondo, valorizzando il ciclo biologico.',
  },
  {
    id: 'comm-l1-004',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Che efficacia ha l’iscrizione nella sezione ordinaria del registro delle imprese?',
    opzioni: [
      'Dichiarativa: i fatti iscritti sono opponibili ai terzi, quelli non iscritti no, salvo prova della conoscenza effettiva',
      'Di mera pubblicità notizia, priva di effetti verso i terzi',
      'Sanante di eventuali vizi dell’atto iscritto',
      'Costitutiva per ogni tipo di impresa',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2193 c.c. stabilisce che i fatti dei quali la legge prescrive l’iscrizione, se non iscritti, non possono essere opposti ai terzi, salvo che l’imprenditore provi che questi ne avevano conoscenza; una volta iscritti, l’opponibilità è automatica. L’iscrizione non sana i vizi dell’atto e non ha, di regola, efficacia costitutiva, che ricorre invece per le società di capitali.',
  },
  {
    id: 'comm-l1-005',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Per quali soggetti l’iscrizione nel registro delle imprese ha efficacia costitutiva?',
    opzioni: [
      'Per tutti gli imprenditori commerciali',
      'Per le società di capitali, che acquistano la personalità giuridica con l’iscrizione',
      'Per gli imprenditori agricoli',
      'Per le società semplici',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2331 c.c. dispone che con l’iscrizione nel registro delle imprese la società per azioni acquista la personalità giuridica; la regola vale anche per s.r.l. e s.a.p.a. Prima dell’iscrizione, per le operazioni compiute rispondono illimitatamente e solidalmente coloro che hanno agito. Efficacia costitutiva ha anche l’iscrizione della società cooperativa.',
  },
  {
    id: 'comm-l1-006',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Quali sono le scritture contabili obbligatorie per ogni imprenditore commerciale non piccolo?',
    opzioni: [
      'Il registro dei beni ammortizzabili e il libro cassa',
      'Il solo libro giornale',
      'Il libro giornale e il libro degli inventari',
      'Il libro soci e il libro delle adunanze assembleari',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2214 c.c. impone il libro giornale e il libro degli inventari, oltre alle altre scritture richieste dalla natura e dalle dimensioni dell’impresa, e la conservazione ordinata della corrispondenza. Le scritture vanno conservate per dieci anni dalla data dell’ultima registrazione (art. 2220 c.c.).',
  },
  {
    id: 'comm-l1-007',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'L’institore è:',
    opzioni: [
      'Il revisore legale dei conti della società',
      'Il liquidatore nominato dal tribunale',
      'Il socio accomandante che partecipa alla gestione',
      'Colui che è preposto dal titolare all’esercizio dell’impresa o di una sua sede o ramo',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2203 c.c. definisce institore chi è preposto dal titolare all’esercizio dell’impresa, di una sede secondaria o di un ramo particolare. Può compiere tutti gli atti pertinenti all’esercizio dell’impresa, salvo alienare o ipotecare beni immobili del preponente, se non espressamente autorizzato (art. 2204 c.c.).',
  },
  {
    id: 'comm-l1-008',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Le limitazioni ai poteri dell’institore sono opponibili ai terzi:',
    opzioni: [
      'Solo se iscritte nel registro delle imprese o se si prova che i terzi ne erano a conoscenza',
      'Mai, essendo i poteri institori inderogabili',
      'Solo se comunicate individualmente a ciascun terzo',
      'Sempre, anche se non pubblicate',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2206 c.c. richiede che la procura, con sottoscrizione autenticata, sia depositata per l’iscrizione presso il registro delle imprese; in mancanza, la rappresentanza si reputa generale e le limitazioni non sono opponibili ai terzi se non si prova che questi ne avevano effettiva conoscenza. La stessa regola vale per la revoca (art. 2207 c.c.).',
  },
  {
    id: 'comm-l1-009',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Che cos’è l’azienda secondo l’art. 2555 c.c.?',
    opzioni: [
      'La società titolare dell’attività d’impresa',
      'Il complesso dei beni organizzati dall’imprenditore per l’esercizio dell’impresa',
      'L’insieme dei rapporti di lavoro subordinato facenti capo all’imprenditore',
      'Il capitale sociale sottoscritto e versato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’azienda è il complesso dei beni organizzati dall’imprenditore per l’esercizio dell’impresa: un insieme di beni, non un soggetto. L’impresa è l’attività, l’imprenditore il soggetto che la esercita, l’azienda lo strumento. La distinzione è il presupposto della disciplina del trasferimento degli artt. 2556 ss. c.c.',
  },
  {
    id: 'comm-l1-010',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Per quanto tempo l’alienante di un’azienda commerciale deve astenersi dalla concorrenza?',
    opzioni: [
      'Un anno dal trasferimento',
      'Tre anni dal trasferimento',
      'Cinque anni dal trasferimento',
      'Dieci anni dal trasferimento',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2557 c.c. vieta all’alienante, per cinque anni dal trasferimento, di iniziare una nuova impresa idonea a sviare la clientela dell’azienda ceduta. Un patto che ampli il divieto è valido purché non impedisca ogni attività professionale dell’alienante e non ecceda comunque i cinque anni.',
  },
  {
    id: 'comm-l1-011',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Nel trasferimento d’azienda, il terzo contraente di un contratto non personale:',
    opzioni: [
      'Vede il contratto risolto di diritto',
      'Può opporsi entro trenta giorni senza motivazione',
      'Deve prestare il proprio consenso alla successione dell’acquirente',
      'Subentra automaticamente e può recedere entro tre mesi per giusta causa',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2558 c.c. prevede la successione automatica dell’acquirente nei contratti stipulati per l’esercizio dell’azienda che non abbiano carattere personale, senza bisogno del consenso del terzo. Questi può però recedere entro tre mesi dalla notizia del trasferimento, se sussiste una giusta causa, salvo in tal caso la responsabilità dell’alienante.',
  },
  {
    id: 'comm-l1-012',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Di quali debiti anteriori risponde l’acquirente dell’azienda commerciale?',
    opzioni: [
      'Dei debiti risultanti dai libri contabili obbligatori',
      'Dei soli debiti tributari',
      'Di tutti i debiti, senza eccezione',
      'Di nessun debito, salvo espresso accollo',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2560 c.c. stabilisce che l’alienante non è liberato dai debiti anteriori se non risulta il consenso dei creditori; nel trasferimento di un’azienda commerciale, l’acquirente risponde in solido dei debiti che risultano dai libri contabili obbligatori. L’iscrizione contabile è quindi condizione della responsabilità dell’acquirente. Per i debiti da lavoro opera la regola speciale dell’art. 2112 c.c.',
  },
  {
    id: 'comm-l1-013',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'La ditta, ai sensi dell’art. 2563 c.c., deve contenere:',
    opzioni: [
      'Il numero di iscrizione al registro delle imprese',
      'Almeno il cognome o la sigla dell’imprenditore',
      'L’indicazione del capitale sociale',
      'La denominazione del comune in cui ha sede l’impresa',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La ditta è il nome commerciale sotto cui l’imprenditore esercita l’attività e, comunque sia formata, deve contenere almeno il cognome o la sigla dell’imprenditore (principio di verità). Vale inoltre il principio di novità: chi adotta una ditta uguale o simile a quella altrui deve integrarla o modificarla (art. 2564 c.c.).',
  },
  {
    id: 'comm-l1-014',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Quanto dura la registrazione di un marchio d’impresa e come si conserva?',
    opzioni: [
      'Fino alla cessazione dell’impresa titolare',
      'Cinque anni, non rinnovabili',
      'Dieci anni dalla domanda, rinnovabile indefinitamente per periodi di dieci anni',
      'Venti anni, non rinnovabili',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 16 del codice della proprietà industriale (d.lgs. n. 30/2005) fissa la durata in dieci anni dalla data di deposito della domanda, con rinnovo per periodi decennali senza limiti. Il marchio decade però per non uso quinquennale (art. 24 c.p.i.) e per volgarizzazione o decettività sopravvenuta (art. 13 e 14 c.p.i.).',
  },
  {
    id: 'comm-l1-015',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Quale fra questi NON è un atto di concorrenza sleale tipizzato dall’art. 2598 c.c.?',
    opzioni: [
      'L’imitazione servile dei prodotti di un concorrente',
      'L’uso di nomi o segni distintivi idonei a produrre confusione',
      'La diffusione di notizie idonee a determinare il discredito dei prodotti altrui',
      'La pratica di prezzi inferiori a quelli dei concorrenti',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2598 c.c. tipizza tre gruppi: atti di confusione (n. 1), denigrazione e appropriazione di pregi (n. 2), ogni altro mezzo non conforme ai principi della correttezza professionale e idoneo a danneggiare l’altrui azienda (n. 3). La concorrenza sui prezzi è, di per sé, lecita e fisiologica: può diventare illecita solo come vendita sottocosto predatoria, riconducibile alla clausola generale del n. 3.',
  },
  {
    id: 'comm-l1-016',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Nell’azione per concorrenza sleale, quanto all’elemento soggettivo:',
    opzioni: [
      'La colpa si presume, una volta accertato l’atto di concorrenza sleale',
      'L’elemento soggettivo è irrilevante anche ai fini risarcitori',
      'Occorre la prova della colpa grave',
      'Il dolo deve essere sempre provato dall’attore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2600 c.c. dispone che, accertati gli atti di concorrenza sleale, la colpa si presume. Ne consegue che l’inibitoria e la rimozione degli effetti (art. 2599 c.c.) prescindono dall’elemento soggettivo, mentre per il risarcimento del danno la presunzione agevola l’attore, restando a carico del convenuto la prova contraria.',
  },
  {
    id: 'comm-l1-017',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'La società semplice:',
    opzioni: [
      'Può esercitare qualsiasi attività, commerciale compresa',
      'Non può avere per oggetto l’esercizio di un’attività commerciale',
      'È una società di capitali con capitale minimo ridotto',
      'Acquista personalità giuridica con l’iscrizione nel registro delle imprese',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2249 c.c. riserva la società semplice alle attività non commerciali: tipicamente l’attività agricola e la gestione di patrimoni immobiliari. È il tipo residuale per le attività non commerciali, mentre per quelle commerciali il tipo residuale è la società in nome collettivo.',
  },
  {
    id: 'comm-l1-018',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Nella società in nome collettivo, il patto che limita la responsabilità di alcuni soci:',
    opzioni: [
      'Richiede l’approvazione del tribunale',
      'È nullo in ogni caso',
      'Non ha effetto nei confronti dei terzi, se non iscritto o portato a loro conoscenza',
      'È valido e opponibile a chiunque',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2291 c.c. sancisce la responsabilità illimitata e solidale di tutti i soci per le obbligazioni sociali e precisa che il patto contrario non ha effetto nei confronti dei terzi. Il patto conserva quindi validità nei rapporti interni, regolando la ripartizione finale del peso del debito.',
  },
  {
    id: 'comm-l1-019',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Nella s.n.c. registrata, il creditore sociale che agisce verso il socio:',
    opzioni: [
      'Deve prima ottenere l’autorizzazione degli altri soci',
      'Può agire solo dopo lo scioglimento della società',
      'Può aggredirne il patrimonio senza alcun limite',
      'Non può pretendere il pagamento se non dopo l’escussione del patrimonio sociale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2304 c.c. prevede il beneficio di preventiva escussione: nella s.n.c. iscritta i creditori sociali, anche se la società è in liquidazione, non possono pretendere il pagamento dai singoli soci se non dopo l’escussione del patrimonio sociale. Nella società semplice il beneficio opera diversamente, perché è il socio a dover indicare i beni sociali su cui soddisfarsi (art. 2268 c.c.).',
  },
  {
    id: 'comm-l1-020',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Il socio accomandante di una s.a.s. che compie atti di amministrazione:',
    opzioni: [
      'Assume responsabilità illimitata e solidale verso i terzi e può essere escluso',
      'Diventa automaticamente accomandatario a tutti gli effetti',
      'Perde il diritto agli utili per l’esercizio in corso',
      'Non subisce alcuna conseguenza',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2320 c.c. pone il divieto di immistione: l’accomandante non può compiere atti di amministrazione né trattare o concludere affari in nome della società, se non in forza di procura speciale per singoli affari. La violazione comporta responsabilità illimitata e solidale verso i terzi per tutte le obbligazioni sociali e la possibilità di esclusione.',
  },
  {
    id: 'comm-l1-021',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Qual è il capitale sociale minimo di una società per azioni?',
    opzioni: [
      '10.000 euro',
      '50.000 euro',
      '120.000 euro',
      '1 euro',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2327 c.c. fissa in cinquantamila euro il capitale minimo della s.p.a., soglia abbassata dall’originario importo dal d.l. n. 91/2014. All’atto della costituzione va versato almeno il venticinque per cento dei conferimenti in denaro, per intero in caso di società unipersonale (art. 2342 c.c.).',
  },
  {
    id: 'comm-l1-022',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Il capitale minimo della società a responsabilità limitata:',
    opzioni: [
      'Non è previsto dalla legge',
      'È fisso in 10.000 euro, senza eccezioni',
      'È di 10.000 euro, ma può essere determinato in misura inferiore, pari almeno a un euro',
      'È di 50.000 euro come nella s.p.a.',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2463 c.c. indica in diecimila euro l’ammontare ordinario, ma consente di determinare il capitale in misura inferiore, pari almeno a un euro. In tal caso i conferimenti devono farsi in denaro e versarsi per intero, e va accantonato a riserva legale un quinto degli utili netti finché riserva e capitale non raggiungano diecimila euro.',
  },
  {
    id: 'comm-l1-023',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'La s.r.l. semplificata (art. 2463-bis c.c.) si caratterizza perché:',
    opzioni: [
      'Non è iscritta nel registro delle imprese',
      'Ha responsabilità illimitata dei soci',
      'Non ha organo amministrativo',
      'I soci devono essere persone fisiche e l’atto costitutivo è redatto secondo un modello standard tipizzato',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La s.r.l.s. ha capitale da un euro a meno di diecimila, interamente versato in denaro all’organo amministrativo, soci esclusivamente persone fisiche e atto costitutivo redatto per atto pubblico conforme al modello standard tipizzato, le cui clausole sono inderogabili. È esente da imposta di bollo, diritti di segreteria e onorari notarili.',
  },
  {
    id: 'comm-l1-024',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Nella s.r.l. la partecipazione sociale è rappresentata da:',
    opzioni: [
      'Quote, che non possono costituire oggetto di offerta al pubblico di prodotti finanziari',
      'Obbligazioni convertibili',
      'Certificati di deposito',
      'Azioni liberamente trasferibili sul mercato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2468 c.c. stabilisce che le partecipazioni dei soci di s.r.l. non possono essere rappresentate da azioni né costituire oggetto di offerta al pubblico di prodotti finanziari. La quota è divisibile e può avere ammontare diverso da socio a socio; una deroga alla regola dell’offerta al pubblico opera per le s.r.l. che siano PMI, ai sensi della disciplina speciale sulle start up e PMI innovative.',
  },
  {
    id: 'comm-l1-025',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Che cosa NON può essere conferito in una società per azioni?',
    opzioni: [
      'Beni immobili',
      'Prestazioni d’opera o di servizi',
      'Crediti',
      'Denaro',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2342, ultimo comma, c.c. vieta espressamente che formino oggetto di conferimento in s.p.a. le prestazioni di opera o di servizi. Nella s.r.l., invece, l’art. 2464 c.c. le ammette, a condizione che siano garantite da polizza assicurativa o fideiussione bancaria per l’intero valore assegnato.',
  },
  {
    id: 'comm-l1-026',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'I conferimenti di beni in natura in s.p.a. richiedono, di regola:',
    opzioni: [
      'L’approvazione del collegio sindacale',
      'Nessuna formalità particolare',
      'Una relazione giurata di stima di un esperto designato dal tribunale',
      'Il solo consenso unanime dei soci',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2343 c.c. impone la relazione giurata di un esperto designato dal tribunale, contenente descrizione dei beni, criteri di valutazione e attestazione che il valore non è inferiore a quello attribuito. Gli amministratori devono poi revisionare le stime entro centottanta giorni. L’art. 2343-ter prevede ipotesi di esonero, ad esempio per valori mobiliari con prezzo medio ponderato di negoziazione.',
  },
  {
    id: 'comm-l1-027',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Quale materia rientra nella competenza dell’assemblea straordinaria di s.p.a.?',
    opzioni: [
      'La determinazione del compenso dei sindaci',
      'L’approvazione del bilancio',
      'La nomina degli amministratori',
      'Le modificazioni dello statuto',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2365 c.c. riserva all’assemblea straordinaria le modificazioni dello statuto, la nomina, sostituzione e determinazione dei poteri dei liquidatori e le altre materie espressamente attribuite dalla legge. Approvazione del bilancio, nomina e revoca delle cariche e determinazione dei compensi spettano invece all’assemblea ordinaria (art. 2364 c.c.).',
  },
  {
    id: 'comm-l1-028',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Quanto può durare al massimo l’incarico degli amministratori di s.p.a.?',
    opzioni: [
      'Tre esercizi',
      'Cinque esercizi',
      'A tempo indeterminato',
      'Un esercizio',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2383 c.c. stabilisce che gli amministratori non possono essere nominati per un periodo superiore a tre esercizi e scadono alla data dell’assemblea convocata per l’approvazione del bilancio relativo all’ultimo esercizio della carica. Sono rieleggibili, salvo diversa disposizione statutaria, e revocabili in ogni tempo, salvo il risarcimento se manca la giusta causa.',
  },
  {
    id: 'comm-l1-029',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Da quanti membri effettivi è composto il collegio sindacale di s.p.a.?',
    opzioni: [
      'Da uno o due',
      'Da tre o cinque sindaci effettivi, oltre a due supplenti',
      'Sempre da sette',
      'Da un numero liberamente determinato dallo statuto',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2397 c.c. prevede tre o cinque sindaci effettivi, soci o non soci, e due sindaci supplenti. Almeno un membro effettivo e uno supplente devono essere revisori legali iscritti nell’apposito registro; gli altri devono essere scelti fra iscritti agli albi professionali individuati dal decreto ministeriale o professori universitari di ruolo in materie economiche o giuridiche.',
  },
  {
    id: 'comm-l1-030',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Il collegio sindacale di s.p.a. ha il compito di vigilare, fra l’altro, su:',
    opzioni: [
      'La correttezza delle dichiarazioni fiscali dei soci',
      'La convenienza economica delle scelte gestionali',
      'L’osservanza della legge e dello statuto e sull’adeguatezza dell’assetto organizzativo, amministrativo e contabile',
      'La solvibilità dei singoli clienti della società',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2403 c.c. affida al collegio la vigilanza sull’osservanza della legge e dello statuto, sul rispetto dei principi di corretta amministrazione e sull’adeguatezza dell’assetto organizzativo, amministrativo e contabile e sul suo concreto funzionamento. Il controllo non si estende al merito e all’opportunità delle scelte gestionali, coperte dalla business judgment rule.',
  },
  {
    id: 'comm-l1-031',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'La revisione legale dei conti, nelle s.p.a. che non fanno ricorso al mercato del capitale di rischio:',
    opzioni: [
      'È esercitata dall’assemblea dei soci',
      'Non è mai obbligatoria',
      'È sempre esercitata da una società di revisione esterna',
      'Può essere affidata dallo statuto al collegio sindacale, se la società non è tenuta al bilancio consolidato',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2409-bis c.c. attribuisce la revisione legale a un revisore o a una società di revisione, ma consente che lo statuto delle società non tenute alla redazione del bilancio consolidato la affidi al collegio sindacale, purché interamente composto da revisori legali iscritti nel registro. Nelle società con azioni quotate la revisione è sempre esterna.',
  },
  {
    id: 'comm-l1-032',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Quando è obbligatoria la nomina dell’organo di controllo o del revisore nella s.r.l.?',
    opzioni: [
      'Quando la società è tenuta al bilancio consolidato, controlla una società obbligata alla revisione legale o supera per due esercizi consecutivi determinate soglie dimensionali',
      'Solo su richiesta di tanti soci che rappresentino un terzo del capitale',
      'Solo nelle s.r.l. con capitale superiore a 50.000 euro',
      'Sempre, in ogni s.r.l.',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2477 c.c. impone la nomina quando la società è tenuta alla redazione del bilancio consolidato, controlla una società obbligata alla revisione legale, oppure ha superato per due esercizi consecutivi almeno uno dei limiti di quattro milioni di euro di attivo, quattro milioni di ricavi o venti dipendenti occupati in media. L’obbligo cessa quando per tre esercizi consecutivi nessun limite è superato.',
  },
  {
    id: 'comm-l1-033',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Dopo l’approvazione del bilancio, quale quota degli utili netti va accantonata a riserva legale?',
    opzioni: [
      'Nessuna: l’accantonamento è sempre facoltativo',
      'Un ventesimo, fino al quinto del capitale sociale',
      'Un decimo, senza limite massimo',
      'Un quinto, fino a metà del capitale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2430 c.c. impone di dedurre dagli utili netti annuali una somma corrispondente almeno alla ventesima parte, destinata a riserva legale, finché questa non abbia raggiunto il quinto del capitale sociale. Se la riserva diminuisce, l’accantonamento deve riprendere.',
  },
  {
    id: 'comm-l1-034',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Di quali documenti si compone il bilancio d’esercizio?',
    opzioni: [
      'Di stato patrimoniale e libro giornale',
      'Del solo stato patrimoniale',
      'Di stato patrimoniale, conto economico, rendiconto finanziario e nota integrativa',
      'Di conto economico e relazione degli amministratori',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2423 c.c. individua stato patrimoniale, conto economico, rendiconto finanziario e nota integrativa. Il rendiconto è stato aggiunto dal d.lgs. n. 139/2015 e non è dovuto dalle società che redigono il bilancio in forma abbreviata (art. 2435-bis c.c.) né dalle micro-imprese (art. 2435-ter c.c.). La relazione sulla gestione è documento distinto e accompagna il bilancio (art. 2428 c.c.).',
  },
  {
    id: 'comm-l1-035',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'La clausola statutaria che attribuisce a un socio tutti gli utili escludendone altri dalle perdite:',
    opzioni: [
      'È valida solo nelle società di persone',
      'È valida se limitata nel tempo',
      'È valida se approvata all’unanimità',
      'È nulla, in quanto patto leonino',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2265 c.c. dichiara nullo il patto con il quale uno o più soci sono esclusi da ogni partecipazione agli utili o alle perdite. La norma, dettata per la società semplice, esprime un principio generale applicabile a tutti i tipi. È invece lecita, secondo la giurisprudenza, la clausola che deroga alla proporzionalità fra conferimento e partecipazione, purché non azzeri il rischio d’impresa.',
  },
  {
    id: 'comm-l1-036',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Che cosa distingue le azioni di risparmio dalle azioni ordinarie?',
    opzioni: [
      'Sono prive del diritto di voto e dotate di privilegi patrimoniali',
      'Attribuiscono voto plurimo',
      'Non partecipano agli utili',
      'Sono riservate ai soci fondatori',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Le azioni di risparmio, previste dagli artt. 145 ss. TUF per le sole società con azioni ordinarie quotate, sono prive del diritto di voto e dotate di privilegi di natura patrimoniale. Rientrano nella categoria più ampia delle azioni speciali, che l’art. 2348 c.c. consente di creare con lo statuto, purché tutte le azioni della medesima categoria abbiano uguali diritti.',
  },
  {
    id: 'comm-l1-037',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Il diritto di opzione in caso di aumento di capitale a pagamento spetta:',
    opzioni: [
      'Ai soli soci fondatori',
      'Ai soci e ai possessori di obbligazioni convertibili, in proporzione alle azioni possedute',
      'Ai creditori sociali',
      'Ai dipendenti della società',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2441 c.c. attribuisce il diritto di sottoscrivere le azioni di nuova emissione ai soci e ai possessori di obbligazioni convertibili, in proporzione al numero delle azioni possedute. Il diritto può essere escluso o limitato quando l’interesse della società lo esige, con deliberazione approvata da oltre la metà del capitale sociale e sulla base di una relazione degli amministratori sulle ragioni dell’esclusione e sui criteri di determinazione del prezzo.',
  },
  {
    id: 'comm-l1-038',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Quale evento NON costituisce causa di scioglimento della società di capitali?',
    opzioni: [
      'Il conseguimento dell’oggetto sociale o la sopravvenuta impossibilità di conseguirlo',
      'La riduzione del capitale al di sotto del minimo legale, se non reintegrato o trasformata la società',
      'Il trasferimento della sede legale in altro comune',
      'Il decorso del termine',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2484 c.c. elenca le cause di scioglimento: decorso del termine, conseguimento dell’oggetto o sopravvenuta impossibilità di conseguirlo, impossibilità di funzionamento o continuata inattività dell’assemblea, riduzione del capitale sotto il minimo legale, ipotesi degli artt. 2437-quater e 2473, deliberazione dell’assemblea, altre cause statutarie. Il trasferimento della sede è una semplice modificazione statutaria.',
  },
  {
    id: 'comm-l1-039',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Se il capitale della s.p.a. si riduce di oltre un terzo per perdite ma resta sopra il minimo legale, gli amministratori devono:',
    opzioni: [
      'Chiedere immediatamente l’apertura della liquidazione giudiziale',
      'Ridurre di propria iniziativa il capitale',
      'Non fare nulla fino all’approvazione del bilancio successivo',
      'Convocare senza indugio l’assemblea per gli opportuni provvedimenti',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2446 c.c. impone agli amministratori (o al consiglio di gestione) di convocare senza indugio l’assemblea, sottoponendole una relazione sulla situazione patrimoniale. Se entro l’esercizio successivo la perdita non risulta diminuita a meno di un terzo, l’assemblea che approva il bilancio deve ridurre il capitale in proporzione alle perdite accertate.',
  },
  {
    id: 'comm-l1-040',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Nella società cooperativa vige il principio:',
    opzioni: [
      '«Una testa, un voto»: ogni socio cooperatore ha un voto, qualunque sia la quota',
      'Del voto plurimo per i soci fondatori',
      'Dell’assenza di diritto di voto per i soci persone fisiche',
      'Del voto proporzionale al capitale sottoscritto',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2538 c.c. attribuisce a ciascun socio cooperatore un solo voto, qualunque sia il valore della quota o il numero delle azioni possedute. È l’espressione del principio democratico e dello scopo mutualistico, che distingue la cooperativa dalle società lucrative. Ai soci finanziatori possono essere attribuiti più voti, entro i limiti di legge.',
  },
  {
    id: 'comm-l1-041',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Il consorzio, ai sensi dell’art. 2602 c.c., è il contratto con cui più imprenditori:',
    opzioni: [
      'Costituiscono una società di capitali comune',
      'Istituiscono un’organizzazione comune per la disciplina o lo svolgimento di determinate fasi delle rispettive imprese',
      'Si obbligano a non farsi concorrenza per dieci anni',
      'Trasferiscono le proprie aziende a un unico soggetto',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2602 c.c. definisce il consorzio come il contratto con cui più imprenditori istituiscono un’organizzazione comune per la disciplina o per lo svolgimento di determinate fasi delle rispettive imprese. Si distinguono i consorzi con sola attività interna da quelli con attività esterna, per i quali l’art. 2612 c.c. impone l’iscrizione nel registro delle imprese e la costituzione di un fondo consortile.',
  },
  {
    id: 'comm-l1-042',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'I titoli di credito sono caratterizzati da:',
    opzioni: [
      'Necessaria forma di atto pubblico',
      'Intrasferibilità',
      'Incorporazione, letteralità e autonomia',
      'Accessorietà rispetto al rapporto fondamentale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’incorporazione lega il diritto al documento, sicché la circolazione del titolo trasferisce il diritto; la letteralità limita il contenuto del diritto a quanto risulta dal tenore del titolo; l’autonomia rende la posizione del terzo possessore in buona fede indipendente dai rapporti fra i precedenti portatori. L’art. 1993 c.c. limita le eccezioni opponibili proprio in applicazione di questi principi.',
  },
  {
    id: 'comm-l1-043',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Quali eccezioni può opporre il debitore al portatore del titolo di credito?',
    opzioni: [
      'Nessuna eccezione',
      'Solo le eccezioni di prescrizione',
      'Tutte le eccezioni derivanti dai rapporti con i precedenti portatori',
      'Le eccezioni reali e quelle personali al portatore, salvo che questi abbia agito intenzionalmente a danno del debitore',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 1993 c.c. consente le eccezioni di forma, quelle fondate sul contesto letterale del titolo, quelle di falsità della firma, di difetto di capacità o di rappresentanza e di mancanza delle condizioni necessarie per l’esercizio dell’azione (eccezioni reali), oltre a quelle personali al portatore. Le eccezioni fondate su rapporti con i precedenti portatori sono opponibili solo se il possessore ha agito intenzionalmente a danno del debitore.',
  },
  {
    id: 'comm-l1-044',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'La cambiale tratta si distingue dal vaglia cambiario perché:',
    opzioni: [
      'Contiene un ordine di pagamento rivolto a un terzo, e non una promessa di pagamento',
      'Non è titolo esecutivo',
      'Non può circolare per girata',
      'Non richiede il bollo',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Nella tratta il traente ordina al trattario di pagare una somma al prenditore; nel vaglia cambiario (pagherò) l’emittente promette di pagare. Entrambe sono titoli di credito all’ordine e, se regolarmente bollate fin dall’origine, titoli esecutivi ai sensi dell’art. 63 del r.d. n. 1669/1933.',
  },
  {
    id: 'comm-l1-045',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'L’assegno bancario:',
    opzioni: [
      'È uno strumento di credito con scadenza differita',
      'È uno strumento di pagamento, sempre pagabile a vista',
      'Può essere emesso senza provvista, purché con il consenso della banca',
      'Non è trasferibile in alcun caso',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 31 del r.d. n. 1736/1933 stabilisce che l’assegno bancario è pagabile a vista e che ogni contraria disposizione si ha per non scritta: la postdatazione non incide sulla pagabilità immediata. Presuppone la provvista presso il trattario e una convenzione di assegno; l’emissione senza provvista è illecito amministrativo ai sensi del d.lgs. n. 507/1999.',
  },
  {
    id: 'comm-l1-046',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Quale soggetto NON può essere assoggettato a liquidazione giudiziale?',
    opzioni: [
      'L’imprenditore individuale commerciale sopra soglia',
      'La società per azioni in stato di insolvenza',
      'L’imprenditore commerciale che non superi congiuntamente le soglie dimensionali di legge',
      'La società in nome collettivo che eserciti attività commerciale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 121 CCII riserva la liquidazione giudiziale agli imprenditori commerciali che non dimostrino il possesso congiunto dei requisiti di cui all’art. 2, comma 1, lett. d): attivo patrimoniale non superiore a trecentomila euro, ricavi lordi non superiori a duecentomila euro e debiti anche non scaduti non superiori a cinquecentomila euro. Gli imprenditori minori e quelli agricoli accedono alle procedure di composizione delle crisi da sovraindebitamento.',
  },
  {
    id: 'comm-l1-047',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Come definisce l’insolvenza l’art. 2 del Codice della crisi?',
    opzioni: [
      'Come la perdita integrale del capitale sociale',
      'Come il mancato deposito del bilancio per due esercizi',
      'Come la semplice esistenza di debiti scaduti',
      'Come lo stato del debitore che si manifesta con inadempimenti o altri fatti esteriori, dimostrativi dell’incapacità di soddisfare regolarmente le proprie obbligazioni',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2, comma 1, lett. b), CCII definisce l’insolvenza come lo stato del debitore che si manifesta con inadempimenti od altri fatti esteriori, i quali dimostrino che non è più in grado di soddisfare regolarmente le proprie obbligazioni. È uno stato di impotenza strutturale e non transitoria, distinto dalla crisi, che l’art. 2, lett. a), definisce come probabilità di futura insolvenza.',
  },
  {
    id: 'comm-l1-048',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'La composizione negoziata della crisi (artt. 12 ss. CCII):',
    opzioni: [
      'È un percorso volontario e riservato, in cui l’imprenditore conserva la gestione e si avvale di un esperto indipendente',
      'Può essere attivata solo dai creditori',
      'Comporta automaticamente la nomina di un curatore',
      'È una procedura concorsuale giudiziale che spossessa l’imprenditore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La composizione negoziata è uno strumento volontario e stragiudiziale: l’imprenditore in condizioni di squilibrio patrimoniale o economico-finanziario che rendano probabile la crisi o l’insolvenza chiede la nomina di un esperto indipendente tramite la piattaforma telematica nazionale. Conserva la gestione ordinaria e straordinaria dell’impresa e può chiedere al tribunale misure protettive del patrimonio.',
  },
  {
    id: 'comm-l1-049',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'L’art. 2086, comma 2, c.c. impone all’imprenditore che operi in forma societaria o collettiva:',
    opzioni: [
      'Di aderire a un consorzio di garanzia',
      'Di dotarsi di un assetto organizzativo, amministrativo e contabile adeguato, anche in funzione della rilevazione tempestiva della crisi',
      'Di nominare in ogni caso un collegio sindacale',
      'Di redigere il bilancio consolidato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il comma 2 dell’art. 2086 c.c., introdotto dal Codice della crisi, impone il dovere di istituire un assetto adeguato alla natura e alle dimensioni dell’impresa, anche in funzione della rilevazione tempestiva della crisi e della perdita della continuità aziendale, e di attivarsi senza indugio per l’adozione di uno degli strumenti previsti dall’ordinamento. È la norma cardine del sistema di allerta interna.',
  },
  {
    id: 'comm-l1-050',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'La business judgment rule comporta che il giudice:',
    opzioni: [
      'Possa valutare solo le scelte approvate dall’assemblea',
      'Possa sindacare liberamente la convenienza economica delle scelte gestionali',
      'Non possa sindacare il merito delle scelte gestionali, salvo che siano irrazionali o assunte senza le cautele e le informazioni necessarie',
      'Debba sempre esonerare gli amministratori da responsabilità',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La regola, di elaborazione giurisprudenziale e coerente con l’art. 2392 c.c., esclude il sindacato sul merito e sull’opportunità delle decisioni imprenditoriali, che restano rischiose per definizione. Resta invece sindacabile il processo decisionale: la scelta manifestamente irrazionale o adottata senza le verifiche e le informazioni che la diligenza richiedeva fonda responsabilità.',
  },
  {
    id: 'comm-l1-051',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'A quale diligenza sono tenuti gli amministratori di s.p.a. ai sensi dell’art. 2392 c.c.?',
    opzioni: [
      'Alla sola assenza di dolo',
      'Alla diligenza minima, trattandosi di incarico fiduciario',
      'Alla diligenza del buon padre di famiglia',
      'Alla diligenza richiesta dalla natura dell’incarico e dalle loro specifiche competenze',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La riforma del 2003 ha sostituito il parametro del mandatario con quello della diligenza richiesta dalla natura dell’incarico e dalle specifiche competenze dell’amministratore, professionalizzando lo standard. Gli amministratori sono solidalmente responsabili, salvo si tratti di attribuzioni proprie del comitato esecutivo o di funzioni in concreto attribuite a uno o più di essi.',
  },
  {
    id: 'comm-l1-052',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'L’azione sociale di responsabilità contro gli amministratori di s.p.a. è deliberata:',
    opzioni: [
      'Dall’assemblea, anche in occasione dell’approvazione del bilancio, o dal collegio sindacale con la maggioranza dei due terzi',
      'Dal singolo socio, senza alcuna deliberazione',
      'Dal tribunale, d’ufficio',
      'Dal collegio sindacale, in via esclusiva',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2393 c.c. attribuisce la legittimazione all’assemblea, anche se la società è in liquidazione, e consente che l’azione sia promossa entro cinque anni dalla cessazione dalla carica; il comma 3 la attribuisce anche al collegio sindacale con deliberazione assunta a maggioranza dei due terzi dei componenti. L’art. 2393-bis riconosce l’azione alla minoranza qualificata.',
  },
  {
    id: 'comm-l1-053',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Nella s.r.l., l’azione di responsabilità contro gli amministratori può essere promossa:',
    opzioni: [
      'Solo dall’assemblea dei soci',
      'Da ciascun socio, individualmente',
      'Solo dal collegio sindacale, se nominato',
      'Solo dopo l’apertura della liquidazione giudiziale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2476, comma 3, c.c. attribuisce a ciascun socio la legittimazione a promuovere l’azione sociale di responsabilità, senza soglie di partecipazione, e a chiedere in via cautelare la revoca degli amministratori in caso di gravi irregolarità. Il comma 6, come modificato dal Codice della crisi, prevede espressamente la responsabilità verso i creditori sociali per l’inosservanza degli obblighi di conservazione del patrimonio.',
  },
  {
    id: 'comm-l1-054',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Quale fra questi è un sistema alternativo di amministrazione e controllo della s.p.a.?',
    opzioni: [
      'Il sistema fiduciario',
      'Il sistema consortile',
      'Il sistema dualistico, con consiglio di sorveglianza e consiglio di gestione',
      'Il sistema assembleare puro',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Accanto al sistema tradizionale (consiglio di amministrazione e collegio sindacale), la riforma del 2003 ha introdotto il sistema dualistico, con consiglio di gestione e consiglio di sorveglianza nominato dall’assemblea (artt. 2409-octies ss. c.c.), e quello monistico, con consiglio di amministrazione al cui interno opera il comitato per il controllo sulla gestione (artt. 2409-sexiesdecies ss. c.c.).',
  },
  {
    id: 'comm-l1-055',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'La trasformazione è l’operazione con cui:',
    opzioni: [
      'Il patrimonio di una società è diviso fra più beneficiarie',
      'Una società trasferisce la sede all’estero',
      'Due società si fondono in un nuovo soggetto',
      'Una società muta il proprio tipo o la propria causa, conservando i diritti e gli obblighi anteriori',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2498 c.c. sancisce la continuità dei rapporti giuridici: l’ente trasformato conserva i diritti e gli obblighi e prosegue in tutti i rapporti anche processuali anteriori. Accanto alla trasformazione omogenea, la riforma ha disciplinato quella eterogenea da e in società di capitali (artt. 2500-septies e 2500-octies c.c.).',
  },
  {
    id: 'comm-l1-056',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Entro quanto tempo dall’iscrizione della delibera di fusione i creditori possono fare opposizione?',
    opzioni: [
      'Sessanta giorni',
      'Novanta giorni',
      'Sei mesi',
      'Trenta giorni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2503 c.c. subordina l’attuazione della fusione al decorso di sessanta giorni dall’ultima iscrizione delle delibere, termine entro il quale i creditori anteriori possono proporre opposizione. Il termine non opera se consta il consenso dei creditori, il pagamento dei dissenzienti o il deposito delle somme presso una banca, ovvero se una società di revisione asseveri che la situazione patrimoniale rende non necessarie garanzie.',
  },
  {
    id: 'comm-l1-057',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Una volta eseguite le iscrizioni dell’atto di fusione, l’invalidità della fusione:',
    opzioni: [
      'Può essere sempre pronunciata, con effetto retroattivo',
      'Non può più essere pronunciata, salvo il diritto al risarcimento del danno',
      'Può essere fatta valere solo dai soci di minoranza',
      'Comporta la ricostituzione automatica delle società originarie',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2504-quater c.c. preclude la declaratoria di invalidità dopo le iscrizioni dell’atto di fusione, salvo il diritto al risarcimento del danno spettante ai soci o ai terzi danneggiati. La norma sacrifica la tutela reale a quella obbligatoria, per garantire la stabilità dell’operazione e la certezza dei rapporti con i terzi.',
  },
  {
    id: 'comm-l1-058',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Il socio di s.r.l. che non ha consentito al cambiamento dell’oggetto sociale:',
    opzioni: [
      'Non ha alcun rimedio',
      'Può soltanto impugnare la delibera',
      'Ha diritto di recedere dalla società',
      'Deve cedere la propria quota agli altri soci',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2473 c.c. riconosce il diritto di recesso ai soci che non hanno consentito, fra l’altro, al cambiamento dell’oggetto sociale o del tipo, alla fusione o scissione, al trasferimento della sede all’estero, alla revoca dello stato di liquidazione e al compimento di operazioni che comportano una sostanziale modificazione dell’oggetto o dei diritti dei soci. Nella s.p.a. la disciplina corrispondente è quella dell’art. 2437 c.c.',
  },
  {
    id: 'comm-l1-059',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'La società unipersonale a responsabilità limitata:',
    opzioni: [
      'Comporta sempre la responsabilità illimitata del socio',
      'Richiede un capitale minimo di 50.000 euro',
      'È vietata dall’ordinamento italiano',
      'È ammessa, ma l’unico socio risponde illimitatamente se non sono rispettati gli obblighi di conferimento e di pubblicità',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2462, comma 2, c.c. prevede che in caso di insolvenza della società l’unico socio risponda illimitatamente quando i conferimenti non siano stati integralmente eseguiti o non sia stata attuata la pubblicità prescritta dall’art. 2470 c.c. Fuori da queste ipotesi opera la regola generale della responsabilità limitata al patrimonio sociale.',
  },
  {
    id: 'comm-l1-060',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Le deliberazioni assembleari contrarie alla legge o allo statuto sono, di regola:',
    opzioni: [
      'Annullabili su impugnazione dei soci assenti, dissenzienti o astenuti, degli amministratori e dei sindaci',
      'Inefficaci verso i soli soci dissenzienti',
      'Inesistenti',
      'Nulle e impugnabili senza limiti di tempo',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2377 c.c. prevede l’annullabilità come regime ordinario, con impugnazione entro novanta giorni dalla deliberazione da parte dei soci assenti, dissenzienti o astenuti che rappresentino la percentuale di capitale richiesta, oltre che degli amministratori e dell’organo di controllo. La nullità dell’art. 2379 c.c. è riservata ai casi di mancata convocazione, mancanza del verbale e impossibilità o illiceità dell’oggetto.',
  },
  {
    id: 'comm-l1-061',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'Il socio in conflitto di interessi in un’assemblea di s.p.a.:',
    opzioni: [
      'Non può in nessun caso esercitare il voto',
      'Può votare, ma la delibera è impugnabile se il suo voto è stato determinante e la società può subirne danno',
      'Deve astenersi a pena di nullità della delibera',
      'Perde il diritto di voto per l’intero esercizio',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2373 c.c. non impone un obbligo di astensione al socio in conflitto: la deliberazione approvata con il suo voto determinante è impugnabile se può recare danno alla società (prova di resistenza). Un divieto di voto è invece previsto per gli amministratori nelle deliberazioni riguardanti la loro responsabilità e, nel sistema dualistico, per i componenti del consiglio di gestione.',
  },
  {
    id: 'comm-l1-062',
    materia: 'Diritto commerciale',
    difficolta: 1,
    domanda:
      'L’amministratore di s.p.a. portatore di un interesse in una determinata operazione deve:',
    opzioni: [
      'Chiedere l’autorizzazione dell’assemblea',
      'Dimettersi immediatamente',
      'Dare notizia agli altri amministratori e al collegio sindacale, precisandone natura, termini, origine e portata',
      'Astenersi in ogni caso dal partecipare alla riunione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2391 c.c. impone all’amministratore di dare notizia di ogni interesse, proprio o di terzi, in una determinata operazione, precisandone natura, termini, origine e portata; se delegato deve astenersi e investire l’organo collegiale. La deliberazione deve motivare le ragioni e la convenienza dell’operazione per la società, e in mancanza è impugnabile se può arrecarle danno.',
  },
];
