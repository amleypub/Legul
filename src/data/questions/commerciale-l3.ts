import type { QuizQuestion } from '../../types';

/**
 * Diritto commerciale — Unità 3 · Avanzato.
 *
 * Il terreno in cui la commissione distingue chi ha letto il manuale da
 * chi ha letto le sentenze: quantificazione del danno da mala gestio,
 * abuso della personalità giuridica e società di fatto, operazioni
 * straordinarie con indebitamento, gruppi, e il funzionamento concreto
 * degli strumenti di regolazione della crisi.
 */
export const commercialeL3: QuizQuestion[] = [
  {
    id: 'comm-l3-001',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nell’azione di responsabilità per prosecuzione dell’attività dopo lo scioglimento, come si quantifica il danno secondo l’art. 2486 c.c.?',
    opzioni: [
      'Con il valore nominale del capitale sociale perduto',
      'Con il solo danno emergente documentato voce per voce',
      'Con la somma di tutti i debiti maturati dopo lo scioglimento',
      'Nella differenza fra il patrimonio netto alla data della cessazione della carica (o dell’apertura della procedura) e quello alla data in cui si è verificata la causa di scioglimento, salvo prova di un diverso ammontare',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il comma 3 dell’art. 2486 c.c., introdotto dal Codice della crisi, ha codificato il criterio dei netti patrimoniali, opportunamente rettificati, come presunzione legale relativa. Se la contabilità manca o è irregolare a tal punto da non consentire la ricostruzione, il danno è liquidato nella differenza fra attivo e passivo accertati nella procedura. Le Sezioni Unite (n. 9100/2015) avevano già escluso l’uso automatico di quest’ultimo criterio.',
  },
  {
    id: 'comm-l3-002',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'L’azione di responsabilità dei creditori sociali (art. 2394 c.c.) si prescrive:',
    opzioni: [
      'In cinque anni dal momento in cui l’insufficienza del patrimonio sociale è divenuta oggettivamente conoscibile',
      'In dieci anni dalla cessazione della carica',
      'In tre anni dall’approvazione del bilancio',
      'Non si prescrive',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La giurisprudenza consolidata individua il dies a quo nel momento in cui l’insufficienza patrimoniale è divenuta oggettivamente percepibile all’esterno dai creditori, con presunzione relativa di coincidenza con la dichiarazione di insolvenza. Il termine quinquennale dell’art. 2949 c.c. resta sospeso, per gli amministratori ancora in carica, ai sensi dell’art. 2941, n. 7, c.c.',
  },
  {
    id: 'comm-l3-003',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Chi è legittimato a esercitare le azioni di responsabilità dopo l’apertura della liquidazione giudiziale?',
    opzioni: [
      'Ciascun creditore, individualmente',
      'Il curatore, cui spetta l’esercizio delle azioni sociali e di quelle dei creditori sociali',
      'L’assemblea dei soci',
      'Il pubblico ministero',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 255 CCII attribuisce al curatore la legittimazione a esercitare le azioni di responsabilità contro amministratori, organi di controllo, direttori generali e liquidatori, comprese quelle spettanti ai creditori sociali, previa autorizzazione del giudice delegato. Resta invece nella disponibilità del singolo l’azione dell’art. 2395 c.c. per il danno diretto al proprio patrimonio.',
  },
  {
    id: 'comm-l3-004',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Che cosa distingue l’azione dell’art. 2395 c.c. da quella dell’art. 2394 c.c.?',
    opzioni: [
      'La prima ha natura contrattuale, la seconda extracontrattuale',
      'La prima si prescrive in dieci anni',
      'La prima presuppone un danno diretto al patrimonio del socio o del terzo, non riflesso della perdita del patrimonio sociale',
      'La prima è esperibile solo dai soci di maggioranza',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2395 c.c. richiede un danno «direttamente» cagionato al patrimonio del singolo socio o del terzo: non basta il pregiudizio riflesso derivante dalla diminuzione del patrimonio sociale, che è tutelato dalle azioni sociali. Il caso tipico è quello di chi ha investito o concesso credito sulla base di un bilancio falso.',
  },
  {
    id: 'comm-l3-005',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La responsabilità dei sindaci per omessa vigilanza, secondo la giurisprudenza di legittimità:',
    opzioni: [
      'Presuppone sempre il dolo',
      'È limitata al compenso percepito',
      'È esclusa se gli amministratori hanno nascosto le irregolarità',
      'Sussiste anche a titolo concorsuale omissivo, quando l’esercizio diligente dei poteri di controllo avrebbe consentito di rilevare e impedire il danno',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2407 c.c. rende i sindaci solidalmente responsabili con gli amministratori per i fatti o le omissioni di questi, quando il danno non si sarebbe prodotto se avessero vigilato in conformità agli obblighi della loro carica. La Cassazione valorizza i poteri-doveri di ispezione, richiesta di informazioni, denuncia e, nei casi più gravi, ricorso all’art. 2409 c.c. e alle dimissioni.',
  },
  {
    id: 'comm-l3-006',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La società di fatto fra persone fisiche, secondo la giurisprudenza:',
    opzioni: [
      'È configurabile in presenza di fondo comune, affectio societatis e partecipazione a utili e perdite, desumibili anche da indici esteriori',
      'Richiede sempre l’iscrizione nel registro delle imprese',
      'È sempre nulla per difetto di forma',
      'Non è configurabile in mancanza di un contratto scritto',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il contratto di società di persone non richiede forma scritta ad substantiam quando non siano conferiti beni immobili: la società può quindi risultare per fatti concludenti. Gli indici usati dalla giurisprudenza sono il fondo comune, l’alea comune dei guadagni e delle perdite e l’affectio societatis, spesso desunti da comportamenti quali la sistematica prestazione di garanzie o l’ingerenza nella gestione.',
  },
  {
    id: 'comm-l3-007',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La cosiddetta «supersocietà di fatto» fra una società di capitali e altri soggetti:',
    opzioni: [
      'È esclusa in radice dall’art. 2361 c.c.',
      'È ammessa dalla giurisprudenza, con conseguente possibile estensione della liquidazione giudiziale ai soci illimitatamente responsabili',
      'Comporta la nullità della società di capitali partecipante',
      'È configurabile solo fra persone fisiche',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Cassazione ammette che una società di capitali possa essere socia di una società di fatto, superando la lettura preclusiva dell’art. 2361, comma 2, c.c., che detta una regola procedimentale e non un divieto. L’accertamento consente l’applicazione dell’art. 256 CCII, con estensione della liquidazione giudiziale ai soci illimitatamente responsabili, anche occulti.',
  },
  {
    id: 'comm-l3-008',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'L’abuso della personalità giuridica, nella prassi giurisprudenziale italiana:',
    opzioni: [
      'Comporta sempre la nullità della società',
      'Consente il superamento dello schermo societario attraverso una clausola generale espressamente prevista dal codice',
      'Non trova una norma generale, ma è contrastato attraverso istituti quali la simulazione, la responsabilità da direzione e coordinamento, la società di fatto e l’art. 2497 c.c.',
      'È irrilevante nel nostro ordinamento',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Manca nel codice una clausola generale di piercing the corporate veil. Gli strumenti impiegati sono la responsabilità da direzione e coordinamento, l’accertamento di una società di fatto o di un socio tiranno, la simulazione, l’art. 2362 c.c. per l’unico azionista e le norme sulla postergazione dei finanziamenti soci: rimedi tipici, non una deroga generalizzata all’autonomia patrimoniale.',
  },
  {
    id: 'comm-l3-009',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La holding «di fatto» può essere assoggettata a liquidazione giudiziale?',
    opzioni: [
      'Solo se costituita in forma di società di capitali',
      'Solo se iscritta nel registro delle imprese',
      'No, non essendo un’impresa',
      'Sì, quando l’attività di direzione e coordinamento assume i caratteri di un’autonoma attività d’impresa, anche svolta da una persona fisica',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Cassazione riconosce la figura dell’imprenditore commerciale occulto che, dirigendo e coordinando più società, svolge un’attività economica organizzata di gestione di partecipazioni con finalità imprenditoriale. Ricorrendone i presupposti, la holding, anche individuale, può essere dichiarata insolvente. Rileva la spendita del nome e la sistematica erogazione di finanziamenti e garanzie.',
  },
  {
    id: 'comm-l3-010',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La fusione a seguito di acquisizione con indebitamento (art. 2501-bis c.c.) richiede:',
    opzioni: [
      'Un progetto che indichi le risorse finanziarie previste per il soddisfacimento delle obbligazioni, una relazione degli amministratori sulle ragioni dell’operazione e la relazione degli esperti sulla ragionevolezza delle indicazioni',
      'L’autorizzazione della Consob',
      'Il consenso unanime dei creditori',
      'Il divieto assoluto dell’operazione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il merger leveraged buy out è lecito ma procedimentalizzato: il progetto deve indicare le risorse finanziarie previste per il soddisfacimento delle obbligazioni della società risultante, la relazione degli amministratori deve illustrare ragioni e obiettivi e allegare un piano economico-finanziario, la relazione degli esperti deve attestare la ragionevolezza delle indicazioni. È esclusa l’esenzione dalla relazione degli esperti.',
  },
  {
    id: 'comm-l3-011',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il divieto di assistenza finanziaria (art. 2358 c.c.) vieta alla s.p.a.:',
    opzioni: [
      'Di distribuire dividendi ai soci',
      'Di accordare prestiti o fornire garanzie per l’acquisto o la sottoscrizione di azioni proprie, salvo il procedimento autorizzativo previsto dalla norma',
      'Di emettere obbligazioni',
      'Di acquistare partecipazioni in altre società',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2358 c.c., riformulato dal d.lgs. n. 142/2008, consente l’assistenza finanziaria solo previa autorizzazione dell’assemblea straordinaria, sulla base di una relazione degli amministratori che illustri l’operazione, il prezzo, l’interesse della società e i rischi, nei limiti degli utili distribuibili e delle riserve disponibili, con iscrizione di una riserva indisponibile.',
  },
  {
    id: 'comm-l3-012',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nella scissione, per i debiti non soddisfatti dalla società cui fanno carico:',
    opzioni: [
      'Rispondono personalmente gli amministratori',
      'Non risponde alcun altro soggetto',
      'Rispondono in solido le altre società partecipanti, nei limiti del valore effettivo del patrimonio netto loro assegnato o rimasto',
      'Risponde solo la società scissa, senza limiti',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2506-quater, comma 3, c.c. prevede la responsabilità solidale delle società partecipanti alla scissione per i debiti non soddisfatti dalla società cui fanno carico, entro il limite del valore effettivo del patrimonio netto assegnato o rimasto. È una garanzia patrimoniale a tutela dei creditori, che si aggiunge al diritto di opposizione.',
  },
  {
    id: 'comm-l3-013',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La trasformazione eterogenea da società di capitali (art. 2500-septies c.c.):',
    opzioni: [
      'Richiede la preventiva liquidazione della società',
      'È ammessa solo verso società cooperative',
      'È vietata',
      'È ammessa verso consorzi, società consortili, società cooperative, comunioni di azienda, associazioni non riconosciute e fondazioni, con deliberazione a maggioranza qualificata e consenso dei soci che assumono responsabilità illimitata',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2500-septies c.c. ammette la trasformazione in consorzi, società consortili, società cooperative, comunioni di azienda, associazioni non riconosciute e fondazioni, con deliberazione dell’assemblea straordinaria assunta con il voto favorevole dei due terzi degli aventi diritto e comunque con il consenso dei soci che assumono responsabilità illimitata. La trasformazione in fondazione produce gli effetti dell’atto di fondazione.',
  },
  {
    id: 'comm-l3-014',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'I patrimoni destinati a uno specifico affare (art. 2447-bis c.c.):',
    opzioni: [
      'Non possono superare, complessivamente, il dieci per cento del patrimonio netto della società',
      'Richiedono la costituzione di una società veicolo',
      'Sono ammessi solo nelle società quotate',
      'Possono essere costituiti senza limiti quantitativi',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2447-bis c.c. consente di costituire uno o più patrimoni destinati in via esclusiva a uno specifico affare, nel limite complessivo del dieci per cento del patrimonio netto e con esclusione degli affari attinenti ad attività riservate. Per le obbligazioni contratte in relazione all’affare risponde nei limiti del patrimonio destinato, purché sia fatta espressa menzione del vincolo.',
  },
  {
    id: 'comm-l3-015',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nelle operazioni con parti correlate delle società quotate, la disciplina Consob impone:',
    opzioni: [
      'Il divieto assoluto di compierle',
      'Presidi procedurali quali il coinvolgimento di comitati di amministratori indipendenti e obblighi di trasparenza, graduati in ragione della rilevanza dell’operazione',
      'La sola comunicazione successiva all’assemblea',
      'L’autorizzazione del tribunale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2391-bis c.c. rinvia ai principi generali fissati dalla Consob, attuati con il regolamento in materia di operazioni con parti correlate: le operazioni non sono vietate, ma assoggettate a procedure che ne assicurino trasparenza e correttezza sostanziale e procedurale, con ruolo centrale degli amministratori indipendenti e informativa al mercato per le operazioni di maggiore rilevanza.',
  },
  {
    id: 'comm-l3-016',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'L’offerta pubblica di acquisto obbligatoria totalitaria scatta, di regola, in capo a chi:',
    opzioni: [
      'Nomina la maggioranza degli amministratori',
      'Acquista una qualsiasi partecipazione in società quotata',
      'Venga a detenere una partecipazione superiore alla soglia rilevante fissata dal TUF, salvo le esenzioni previste',
      'Acquista almeno il cinque per cento del capitale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 106 TUF impone a chi, a seguito di acquisti o di maggiorazione dei diritti di voto, venga a detenere una partecipazione superiore alla soglia rilevante, di promuovere un’offerta totalitaria sulla totalità dei titoli. Sono previste soglie differenziate per le PMI e un articolato regime di esenzioni, oltre alla disciplina dell’OPA da consolidamento e di quella residuale.',
  },
  {
    id: 'comm-l3-017',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La regola di passività (passivity rule) dell’art. 104 TUF impone agli amministratori della società bersaglio:',
    opzioni: [
      'Di dimettersi immediatamente',
      'Di acquistare azioni proprie senza limiti',
      'Di adottare ogni misura difensiva ritenuta opportuna',
      'Di astenersi dal compiere atti od operazioni che possano contrastare gli obiettivi dell’offerta, salvo autorizzazione dell’assemblea',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 104 TUF sottopone le misure difensive all’autorizzazione dell’assemblea, adottata anche in convocazione successiva alla comunicazione dell’offerta, con quorum ridotti. Lo statuto può prevedere l’opt-out dalla regola; l’art. 104-bis disciplina la regola di neutralizzazione delle limitazioni statutarie al trasferimento e al voto.',
  },
  {
    id: 'comm-l3-018',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il voto maggiorato nelle società quotate (art. 127-quinquies TUF):',
    opzioni: [
      'Può essere previsto dallo statuto a favore degli azionisti che detengano le azioni per un periodo continuativo non inferiore a quello stabilito dalla legge',
      'Spetta di diritto ai soci fondatori',
      'È attribuito dall’assemblea caso per caso',
      'È incompatibile con il principio «un’azione, un voto» e quindi vietato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 127-quinquies TUF consente allo statuto delle società quotate di attribuire un voto maggiorato agli azionisti che abbiano detenuto le azioni, con iscrizione in un apposito elenco, per un periodo continuativo non inferiore a quello fissato dalla legge. È istituto distinto dalle azioni a voto plurimo dell’art. 2351 c.c., ammesse nelle società non quotate.',
  },
  {
    id: 'comm-l3-019',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Le azioni a voto plurimo, ai sensi dell’art. 2351 c.c.:',
    opzioni: [
      'Sono vietate in ogni società',
      'Possono essere create dallo statuto, anche per particolari argomenti o subordinatamente a condizioni, entro il limite massimo di voti per azione fissato dalla legge',
      'Attribuiscono sempre dieci voti per azione',
      'Sono riservate alle società quotate',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il d.l. n. 91/2014 ha ammesso le azioni a voto plurimo nelle società non quotate, entro il limite legale di voti per ciascuna azione, eventualmente per particolari argomenti o subordinatamente al verificarsi di condizioni. Restano ferme le azioni senza voto o con voto limitato, che non possono complessivamente superare la metà del capitale sociale.',
  },
  {
    id: 'comm-l3-020',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nel concordato preventivo in continuità aziendale, il valore eccedente quello di liquidazione:',
    opzioni: [
      'Non può essere distribuito',
      'Va distribuito rispettando rigidamente l’ordine delle cause legittime di prelazione',
      'Può essere distribuito anche in deroga all’ordine delle prelazioni, purché ciascuna classe sia trattata in modo non deteriore rispetto alle classi di pari rango e più favorevole rispetto a quelle di rango inferiore',
      'Deve essere integralmente destinato ai soci',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 84, comma 6, CCII distingue il valore di liquidazione, da distribuire secondo la regola di priorità assoluta, dal valore eccedente prodotto dalla continuità, cui si applica la regola di priorità relativa: ciascuna classe deve essere trattata in modo non deteriore rispetto alle classi di pari grado e più vantaggioso rispetto a quelle di grado inferiore.',
  },
  {
    id: 'comm-l3-021',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La ristrutturazione trasversale (cram down interclassi) nel concordato in continuità:',
    opzioni: [
      'Richiede il consenso unanime dei creditori privilegiati',
      'Opera solo nel concordato liquidatorio',
      'Non è ammessa',
      'Consente l’omologazione anche in mancanza dell’approvazione di tutte le classi, ricorrendo le condizioni dell’art. 112 CCII',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 112, comma 2, CCII consente al tribunale di omologare il concordato in continuità anche se non tutte le classi sono favorevoli, purché il valore di liquidazione sia distribuito nel rispetto delle prelazioni, il valore eccedente sia distribuito secondo la priorità relativa, nessun creditore riceva più dell’intero credito e la proposta sia approvata dalla maggioranza delle classi o almeno da una classe di creditori almeno parzialmente soddisfatti secondo l’ordine delle prelazioni.',
  },
  {
    id: 'comm-l3-022',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il cram down fiscale e contributivo:',
    opzioni: [
      'Consente al tribunale di omologare nonostante la mancata adesione dell’amministrazione finanziaria o degli enti previdenziali, ricorrendo le condizioni di legge',
      'È stato abrogato dal Codice della crisi',
      'Consente all’erario di imporre il proprio credito in prededuzione',
      'Riguarda solo la liquidazione giudiziale',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Nel concordato preventivo e negli accordi di ristrutturazione, il tribunale può omologare anche in mancanza di adesione dell’amministrazione finanziaria o degli enti gestori di forme di previdenza obbligatoria, quando la proposta sia conveniente rispetto all’alternativa liquidatoria e ricorrano gli ulteriori presupposti fissati dagli artt. 63 e 88 CCII, come precisati dal d.lgs. n. 136/2024.',
  },
  {
    id: 'comm-l3-023',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'I crediti sorti in funzione o in occasione delle procedure di regolazione della crisi:',
    opzioni: [
      'Sono sempre chirografari',
      'Possono essere prededucibili, nei casi e nei limiti espressamente previsti dal Codice della crisi',
      'Sono postergati a tutti gli altri',
      'Si estinguono con l’omologazione',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 6 CCII ha tipizzato la prededuzione, superando la formula aperta della legge fallimentare: sono prededucibili i crediti per spese e debiti di massa, quelli professionali sorti in funzione dell’accesso agli strumenti nei limiti quantitativi indicati, quelli per prestazioni rese in esecuzione del concordato o degli accordi omologati e i finanziamenti autorizzati.',
  },
  {
    id: 'comm-l3-024',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'I finanziamenti prededucibili in esecuzione o in funzione del concordato:',
    opzioni: [
      'Sono sempre postergati',
      'Non richiedono alcuna autorizzazione',
      'Devono essere autorizzati dal tribunale, che verifica la funzionalità alla migliore soddisfazione dei creditori',
      'Sono ammessi solo se erogati dai soci',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Gli artt. 99 e 101 CCII subordinano la prededucibilità dei finanziamenti all’autorizzazione del tribunale, che verifica, se del caso sulla base dell’attestazione di un professionista indipendente, la funzionalità del finanziamento alla migliore soddisfazione dei creditori. Regole particolari valgono per i finanziamenti dei soci, prededucibili nella misura stabilita dalla legge in deroga alla postergazione.',
  },
  {
    id: 'comm-l3-025',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nel concordato preventivo, la proposta di un creditore concorrente è ammissibile:',
    opzioni: [
      'Solo nel concordato in continuità',
      'Solo con il consenso del debitore',
      'Mai',
      'Quando la proposta del debitore non assicura la soglia di soddisfacimento fissata dalla legge, e a condizione che il proponente rappresenti almeno il dieci per cento dei crediti',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 90 CCII ammette le proposte concorrenti presentate da creditori che rappresentino almeno il dieci per cento dei crediti risultanti dalla situazione patrimoniale depositata, precludendole però quando l’attestatore certifichi che la proposta del debitore assicura il pagamento di almeno il trenta per cento dei crediti chirografari (venti per cento nel concordato in continuità).',
  },
  {
    id: 'comm-l3-026',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'L’attestazione del professionista indipendente nel concordato riguarda:',
    opzioni: [
      'La veridicità dei dati aziendali e la fattibilità del piano, con specifica indicazione, nel concordato in continuità, delle ragioni per cui la continuità è funzionale al miglior soddisfacimento dei creditori',
      'La solvibilità dei singoli creditori',
      'Il valore di mercato delle partecipazioni sociali',
      'La sola convenienza economica per il debitore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 87, comma 3, CCII richiede che il professionista indipendente attesti la veridicità dei dati aziendali e la fattibilità del piano; nel concordato in continuità deve indicare le ragioni per cui questa è funzionale al miglior soddisfacimento dei creditori. Il tribunale conserva il controllo sulla fattibilità giuridica e, secondo la giurisprudenza, sulla manifesta inattitudine del piano a raggiungere gli obiettivi.',
  },
  {
    id: 'comm-l3-027',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nel giudizio di omologazione del concordato, il controllo del tribunale sulla fattibilità:',
    opzioni: [
      'Si estende alla fattibilità economica in ogni suo aspetto',
      'Riguarda la fattibilità giuridica e, quanto a quella economica, la manifesta inidoneità del piano a conseguire gli obiettivi prefissati',
      'È escluso in radice',
      'È rimesso al solo commissario giudiziale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Le Sezioni Unite, con la sent. n. 1521/2013, hanno distinto la fattibilità giuridica, pienamente sindacabile, dalla fattibilità economica, la cui valutazione spetta ai creditori, salvo il controllo sulla manifesta inettitudine del piano al raggiungimento degli obiettivi. L’impostazione è stata sostanzialmente recepita dal Codice della crisi.',
  },
  {
    id: 'comm-l3-028',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Le azioni esecutive individuali dei creditori, dopo l’apertura della liquidazione giudiziale:',
    opzioni: [
      'Possono proseguire se munite di titolo esecutivo',
      'Proseguono regolarmente',
      'Non possono essere iniziate né proseguite: ogni credito va fatto valere nel concorso attraverso la domanda di ammissione al passivo',
      'Sono sospese per sei mesi',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 150 CCII sancisce il divieto di azioni esecutive e cautelari individuali sui beni compresi nella liquidazione giudiziale, dal giorno della sentenza di apertura. Il credito va accertato nel concorso ai sensi dell’art. 201 CCII, davanti al giudice delegato, con esclusività dell’accertamento del passivo.',
  },
  {
    id: 'comm-l3-029',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'L’estensione della liquidazione giudiziale ai soci illimitatamente responsabili (art. 256 CCII):',
    opzioni: [
      'È esclusa per i soci receduti',
      'Opera solo su istanza dei creditori particolari del socio',
      'Richiede l’accertamento della loro personale insolvenza',
      'Consegue all’apertura della procedura verso la società, e riguarda anche i soci occulti la cui esistenza risulti dopo la sentenza',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La liquidazione giudiziale della società con soci illimitatamente responsabili produce l’apertura della procedura anche nei confronti di questi ultimi, senza necessità di accertarne l’autonoma insolvenza. Se dopo la sentenza risulta l’esistenza di altri soci illimitatamente responsabili, il tribunale estende la procedura su istanza del curatore, di un creditore o di un socio. I soci cessati rispondono per le obbligazioni anteriori, nei limiti temporali di legge.',
  },
  {
    id: 'comm-l3-030',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La bancarotta fraudolenta patrimoniale documentale si distingue da quella semplice perché:',
    opzioni: [
      'La prima presuppone la sottrazione, distruzione o falsificazione delle scritture, ovvero la loro tenuta in modo da non consentire la ricostruzione del patrimonio o del movimento degli affari, con dolo; la seconda punisce condotte colpose o meramente irregolari',
      'La prima è punita con pena pecuniaria',
      'La prima è perseguibile a querela',
      'La prima richiede la distrazione di beni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 322 CCII (già art. 216 l.fall.) punisce la bancarotta fraudolenta documentale, nelle due sottofattispecie della sottrazione, distruzione o falsificazione e della tenuta irregolare finalizzata a impedire la ricostruzione; l’art. 323 (già art. 217 l.fall.) punisce la bancarotta semplice, che comprende l’omessa o irregolare tenuta delle scritture nei tre anni anteriori, anche a titolo di colpa.',
  },
  {
    id: 'comm-l3-031',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La sentenza di apertura della liquidazione giudiziale, rispetto ai reati di bancarotta:',
    opzioni: [
      'È un elemento costitutivo del reato in senso pieno, che deve essere coperto dal dolo',
      'Secondo l’orientamento consolidato successivo alla sent. n. 13910/2017 delle Sezioni Unite, non richiede di essere coperta dal dolo dell’agente',
      'È una mera condizione di procedibilità',
      'È irrilevante',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Le Sezioni Unite (n. 22474/2016, poi la giurisprudenza successiva) hanno chiarito che la sentenza dichiarativa non è condizione obiettiva di punibilità ma elemento della fattispecie, senza però che sia richiesta la sua rappresentazione da parte dell’agente: il dolo deve investire la condotta distrattiva e la sua idoneità a pregiudicare la garanzia patrimoniale dei creditori.',
  },
  {
    id: 'comm-l3-032',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'L’amministrazione straordinaria delle grandi imprese in stato di insolvenza:',
    opzioni: [
      'Si applica a qualunque impresa insolvente',
      'È disciplinata dal Codice della crisi',
      'Resta regolata dal d.lgs. n. 270/1999 e dalla l. n. 39/2004, con finalità conservativa del complesso produttivo',
      'È stata abrogata nel 2022',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’amministrazione straordinaria è rimasta fuori dal perimetro del Codice della crisi ed è regolata dal d.lgs. n. 270/1999 (procedura ordinaria, con requisiti dimensionali di dipendenti e debiti) e dalla l. n. 39/2004, di conversione del d.l. Marzano, per le imprese di maggiori dimensioni. La finalità è la conservazione del complesso produttivo e dei livelli occupazionali.',
  },
  {
    id: 'comm-l3-033',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La liquidazione coatta amministrativa si applica:',
    opzioni: [
      'Solo alle società quotate',
      'Alle sole imprese pubbliche',
      'A ogni impresa commerciale',
      'Alle imprese soggette a vigilanza pubblica per le quali la legge la preveda, quali banche, assicurazioni e alcune cooperative',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La liquidazione coatta amministrativa, regolata dagli artt. 293 ss. CCII e dalle leggi speciali, riguarda imprese sottoposte a vigilanza per la natura dell’attività: banche e intermediari finanziari (t.u.b. e t.u.f.), imprese di assicurazione, società cooperative. È disposta dall’autorità amministrativa di vigilanza e, quando la legge lo consente, concorre con la liquidazione giudiziale secondo il criterio della prevenzione.',
  },
  {
    id: 'comm-l3-034',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il contratto autonomo di garanzia si distingue dalla fideiussione perché:',
    opzioni: [
      'Il garante non può opporre al beneficiario le eccezioni relative al rapporto principale, salvo l’exceptio doli',
      'Richiede la forma dell’atto pubblico',
      'Ha natura reale',
      'È sempre a titolo gratuito',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Le Sezioni Unite (n. 3947/2010) hanno affermato l’autonomia della garanzia «a prima richiesta e senza eccezioni» rispetto al rapporto garantito: viene meno l’accessorietà propria della fideiussione e il garante deve pagare, salvo opporre l’exceptio doli generalis in caso di escussione fraudolenta o abusiva, o la nullità del contratto principale per contrarietà a norme imperative.',
  },
  {
    id: 'comm-l3-035',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Le fideiussioni omnibus conformi allo schema ABI dichiarato anticoncorrenziale sono, secondo le Sezioni Unite n. 41994/2021:',
    opzioni: [
      'Integralmente nulle',
      'Affette da nullità parziale, limitata alle clausole riproduttive dell’intesa vietata, salvo prova di una diversa volontà delle parti',
      'Pienamente valide',
      'Annullabili entro cinque anni',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Le Sezioni Unite hanno optato per la nullità parziale ex art. 1419 c.c., limitata alle clausole che riproducono quelle dello schema ABI censurato dal provvedimento della Banca d’Italia del 2005 (reviviscenza, rinuncia ai termini, sopravvivenza), salvo che risulti che i contraenti non avrebbero concluso il contratto senza quelle clausole. È rimasta salva la tutela risarcitoria.',
  },
  {
    id: 'comm-l3-036',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La nullità di protezione prevista dal testo unico bancario per i contratti bancari:',
    opzioni: [
      'Non è mai rilevabile d’ufficio',
      'Può essere fatta valere da chiunque',
      'Opera solo a vantaggio del cliente e può essere rilevata d’ufficio dal giudice solo nell’interesse di questi',
      'È imprescrittibile e assoluta',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 127, comma 2, t.u.b. qualifica le nullità previste dal titolo VI come nullità che possono essere fatte valere solo dal cliente e possono essere rilevate d’ufficio dal giudice soltanto a vantaggio del medesimo. La Cassazione a Sezioni Unite (n. 28314/2019) ha applicato lo schema alla nullità selettiva nei contratti di investimento, temperandola con il principio di buona fede.',
  },
  {
    id: 'comm-l3-037',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nell’anatocismo bancario, dopo l’art. 120 t.u.b. come riformato:',
    opzioni: [
      'È consentita la capitalizzazione trimestrale',
      'Gli interessi non sono dovuti',
      'La capitalizzazione degli interessi è libera',
      'Gli interessi debitori maturati non possono produrre interessi ulteriori e sono conteggiati secondo le modalità e i termini stabiliti dal CICR',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 120, comma 2, t.u.b., nella formulazione introdotta dalla l. n. 49/2016, esclude che gli interessi debitori maturati possano produrre interessi ulteriori, salvo quelli di mora, e stabilisce che siano conteggiati al 31 dicembre e divengano esigibili il 1° marzo dell’anno successivo. Il cliente può autorizzarne l’addebito in conto, con autorizzazione revocabile.',
  },
  {
    id: 'comm-l3-038',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il superamento del tasso soglia dell’usura, secondo la giurisprudenza consolidata, va verificato:',
    opzioni: [
      'Al momento della pattuizione, secondo il principio dell’usurarietà originaria; l’usura sopravvenuta non determina di per sé illiceità della pretesa',
      'Al momento della scadenza del contratto',
      'Alla data di apertura di ogni singolo rapporto di conto',
      'Con riferimento al momento del pagamento degli interessi',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Le Sezioni Unite (n. 24675/2017) hanno escluso che il superamento sopravvenuto del tasso soglia renda illecita la pretesa del creditore, valorizzando il tenore dell’art. 644 c.p. e dell’art. 1 del d.l. n. 394/2000: rileva il momento in cui gli interessi sono promessi o convenuti. Con la sent. n. 19597/2020 le Sezioni Unite hanno poi affermato l’assoggettabilità al vaglio di usura anche degli interessi moratori.',
  },
  {
    id: 'comm-l3-039',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nella cessione di partecipazioni sociali, le garanzie sulla consistenza del patrimonio della società:',
    opzioni: [
      'Operano automaticamente, essendo la partecipazione rappresentativa del patrimonio',
      'Non sono implicite: occorrono specifiche clausole di rappresentazioni e garanzie, perché oggetto della vendita è la partecipazione e non i beni sociali',
      'Sono nulle se pattuite',
      'Sono sostituite dalla garanzia per evizione',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La giurisprudenza è costante nel ritenere che oggetto della cessione sia la partecipazione, non il patrimonio sociale: i vizi di quest’ultimo non incidono di per sé sulla qualità del bene venduto. Da qui la necessità pratica delle clausole di representations and warranties, che spostano convenzionalmente il rischio sulla consistenza patrimoniale, con la relativa disciplina dei termini di decadenza.',
  },
  {
    id: 'comm-l3-040',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La clausola statutaria di «russian roulette» o di drag along, secondo la prassi notarile e giurisprudenziale:',
    opzioni: [
      'Richiede l’omologazione del tribunale',
      'È nulla in quanto patto leonino',
      'È generalmente ammessa purché sia garantita al socio uscente una valorizzazione equa della partecipazione',
      'È ammessa solo nelle società di persone',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Le clausole di trascinamento e i meccanismi di stallo sono ritenuti compatibili con il tipo societario quando assicurino al socio destinatario un corrispettivo non arbitrario, tipicamente ancorato ai criteri di liquidazione previsti in caso di recesso. Il limite è il divieto di espropriazione della partecipazione a condizioni deteriori rispetto a quelle minime di legge.',
  },
  {
    id: 'comm-l3-041',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La responsabilità dell’amministratore di fatto, secondo la giurisprudenza:',
    opzioni: [
      'È limitata alle sanzioni amministrative',
      'Presuppone l’iscrizione nel registro delle imprese',
      'È esclusa in mancanza di nomina formale',
      'Sussiste in capo a chi esercita in modo continuativo e significativo i poteri tipici dell’organo gestorio, con applicazione delle stesse regole di responsabilità',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La figura è pacificamente accolta: rileva l’esercizio di fatto, in modo continuativo e non episodico, di funzioni riservate agli amministratori. Ne conseguono la soggezione alle azioni di responsabilità e, in sede penale, l’estensione delle qualifiche soggettive ai sensi dell’art. 2639 c.c., che equipara a chi è formalmente investito chi esercita in modo continuativo e significativo i poteri tipici.',
  },
  {
    id: 'comm-l3-042',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La responsabilità amministrativa degli enti dipendente da reato (d.lgs. n. 231/2001) è esclusa se l’ente prova:',
    opzioni: [
      'Di aver adottato ed efficacemente attuato modelli di organizzazione idonei a prevenire reati della specie di quello verificatosi, con un organismo di vigilanza dotato di autonomi poteri e l’elusione fraudolenta dei modelli',
      'Che l’autore del reato era un dipendente e non un dirigente',
      'Di non aver tratto alcun vantaggio economico',
      'Di aver risarcito il danno',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 6 del d.lgs. n. 231/2001 costruisce, per i reati commessi da soggetti in posizione apicale, un’esimente ad onere probatorio invertito: adozione ed efficace attuazione del modello organizzativo, vigilanza affidata a un organismo con autonomi poteri di iniziativa e controllo, elusione fraudolenta del modello da parte dell’autore, assenza di omessa o insufficiente vigilanza dell’organismo.',
  },
  {
    id: 'comm-l3-043',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il rapporto fra il modello organizzativo ex d.lgs. n. 231/2001 e gli assetti adeguati dell’art. 2086 c.c.:',
    opzioni: [
      'Sono istituti del tutto estranei',
      'Convergono: l’adeguatezza degli assetti richiesta dal codice civile comprende anche i presidi di controllo interno, dei quali il modello 231 è componente',
      'Il modello 231 sostituisce gli assetti adeguati',
      'Gli assetti adeguati sono obbligatori solo per gli enti con modello 231',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il dovere di dotarsi di assetti organizzativi, amministrativi e contabili adeguati ha portata generale e comprende il sistema di controllo interno e di gestione dei rischi, di cui il modello organizzativo rappresenta una componente specifica sul versante della prevenzione dei reati presupposto. L’inadeguatezza degli assetti è, di per sé, fonte di responsabilità gestoria.',
  },
  {
    id: 'comm-l3-044',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nel gruppo di imprese, il Codice della crisi consente:',
    opzioni: [
      'La liquidazione giudiziale della sola capogruppo',
      'Solo procedure separate per ciascuna società',
      'La presentazione di un piano unitario o di piani reciprocamente collegati e interferenti, con un’unica procedura davanti a un solo tribunale',
      'La confusione automatica dei patrimoni',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Gli artt. 284 ss. CCII disciplinano la regolazione della crisi di gruppo, ammettendo un unico ricorso per l’accesso al concordato preventivo o agli accordi di ristrutturazione con piano unitario o piani collegati, davanti al tribunale competente per la società che esercita la direzione e coordinamento. Restano ferme l’autonomia delle masse attive e passive e la tutela dei creditori di ciascuna società.',
  },
  {
    id: 'comm-l3-045',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nel concordato di gruppo, le operazioni infragruppo che spostano valore da una società all’altra:',
    opzioni: [
      'Richiedono il consenso unanime dei creditori',
      'Comportano la nullità del piano',
      'Sono vietate',
      'Sono ammesse se coerenti con il piano e se i creditori di ciascuna società risultano soddisfatti in misura non inferiore all’alternativa liquidatoria',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 285 CCII ammette operazioni contrattuali e riorganizzative infragruppo funzionali alla continuità e alla migliore soddisfazione dei creditori, purché un professionista indipendente attesti che i creditori di ciascuna impresa ricevono un trattamento non deteriore rispetto alla liquidazione giudiziale. I creditori dissenzienti possono opporsi all’omologazione contestando la convenienza.',
  },
  {
    id: 'comm-l3-046',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La cessione dell’azienda nell’ambito di una procedura concorsuale, quanto ai debiti anteriori:',
    opzioni: [
      'Non comporta, salvo diversa convenzione, la responsabilità dell’acquirente per i debiti anteriori',
      'Estingue i debiti',
      'Trasferisce i debiti alla procedura',
      'Comporta sempre la responsabilità solidale dell’acquirente ex art. 2560 c.c.',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 214, comma 3, CCII esclude, salvo diversa convenzione, la responsabilità dell’acquirente per i debiti relativi all’esercizio dell’azienda ceduta anteriori al trasferimento. La deroga all’art. 2560 c.c. serve a rendere appetibile la cessione dei complessi aziendali, massimizzando il ricavato per la massa. Per i rapporti di lavoro operano le regole speciali dell’art. 47 della l. n. 428/1990.',
  },
  {
    id: 'comm-l3-047',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il concordato semplificato per la liquidazione del patrimonio:',
    opzioni: [
      'È accessibile a qualunque imprenditore',
      'Presuppone l’esito negativo della composizione negoziata attestato dalla relazione finale dell’esperto e non prevede il voto dei creditori',
      'Richiede l’adesione del sessanta per cento dei crediti',
      'Comporta la continuità aziendale obbligatoria',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Gli artt. 25-sexies e 25-septies CCII consentono all’imprenditore, quando l’esperto dichiara nella relazione finale che le trattative si sono svolte correttamente e in buona fede senza esito, di proporre entro sessanta giorni un concordato liquidatorio senza voto dei creditori, i quali possono soltanto opporsi all’omologazione. Il tribunale nomina un ausiliario e valuta l’assenza di pregiudizio rispetto all’alternativa liquidatoria.',
  },
  {
    id: 'comm-l3-048',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il trasferimento della sede legale all’estero di una società italiana:',
    opzioni: [
      'Richiede l’autorizzazione del Ministero degli esteri',
      'È sempre vietato',
      'È ammesso, e la disciplina delle operazioni transfrontaliere è oggi contenuta nel d.lgs. n. 19/2023, attuativo della direttiva (UE) 2019/2121',
      'Comporta necessariamente lo scioglimento',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il d.lgs. n. 19/2023 ha attuato la direttiva sulle trasformazioni, fusioni e scissioni transfrontaliere, disciplinando in modo organico le operazioni fra società di Stati membri e prevedendo presidi a tutela di soci, creditori e lavoratori, oltre a un controllo preventivo di legalità e a una clausola antiabuso. Restano applicabili gli artt. 25 della l. n. 218/1995 per i profili di diritto internazionale privato.',
  },
  {
    id: 'comm-l3-049',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La postergazione dei finanziamenti soci ex art. 2467 c.c. opera, secondo l’orientamento prevalente:',
    opzioni: [
      'Solo se la società è una s.p.a.',
      'Solo se il finanziamento è superiore al capitale sociale',
      'Solo in sede concorsuale',
      'Anche fuori dalle procedure concorsuali, come regola di comportamento che impedisce il rimborso finché perdura la situazione di squilibrio',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La giurisprudenza prevalente configura la postergazione come regola sostanziale che opera anche in bonis: gli amministratori devono rifiutare il rimborso finché permane la situazione di squilibrio descritta dalla norma, e il pagamento eseguito in violazione è fonte di responsabilità e di obbligo restitutorio. La qualificazione incide anche sull’esigibilità del credito e quindi sulla prescrizione.',
  },
  {
    id: 'comm-l3-050',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nella s.r.l. che sia PMI, la deroga al divieto di offerta al pubblico delle quote:',
    opzioni: [
      'È ammessa attraverso i portali di crowdfunding, nei limiti della disciplina speciale',
      'Vale solo per le start-up innovative',
      'Richiede la trasformazione in s.p.a.',
      'Non esiste',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La disciplina inizialmente riservata alle start-up innovative è stata estesa alle PMI dal d.l. n. 50/2017: le s.r.l. che siano PMI possono creare categorie di quote con diritti diversi e offrire le proprie quote al pubblico attraverso portali per la raccolta di capitali, in deroga all’art. 2468 c.c., nel quadro oggi definito anche dal regolamento (UE) 2020/1503 sui fornitori di servizi di crowdfunding.',
  },
  {
    id: 'comm-l3-051',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La società tra professionisti (s.t.p.), ai sensi della l. n. 183/2011:',
    opzioni: [
      'È vietata dall’ordinamento',
      'È ammessa nei tipi societari regolati dal codice civile, con obbligo di prevalenza dei soci professionisti nelle deliberazioni e nel capitale',
      'Può essere costituita solo come associazione professionale',
      'Non richiede l’iscrizione all’albo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La l. n. 183/2011 ammette le società per l’esercizio di attività professionali regolamentate secondo i tipi del codice civile, con soci professionisti iscritti agli albi e possibilità di soci per prestazioni tecniche o per finalità di investimento, purché il numero e la partecipazione al capitale dei professionisti garantiscano la maggioranza dei due terzi nelle deliberazioni. Per gli avvocati vale la disciplina speciale dell’art. 4-bis della l. n. 247/2012.',
  },
  {
    id: 'comm-l3-052',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nelle società a partecipazione pubblica, il d.lgs. n. 175/2016 impone:',
    opzioni: [
      'L’applicazione integrale delle regole della contabilità pubblica',
      'La costituzione esclusivamente in forma di s.p.a.',
      'Il rispetto di vincoli su tipi ammessi, oggetto sociale, motivazione analitica dell’atto costitutivo e obblighi di razionalizzazione periodica delle partecipazioni',
      'Il divieto assoluto di partecipazioni pubbliche',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il testo unico limita i tipi utilizzabili, vincola l’oggetto sociale alle attività strettamente necessarie al perseguimento delle finalità istituzionali, impone una motivazione analitica dell’atto deliberativo di costituzione o acquisto e prevede la razionalizzazione periodica delle partecipazioni. Alle società resta applicabile la disciplina codicistica, salvo le deroghe espresse.',
  },
  {
    id: 'comm-l3-053',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La giurisdizione sulle azioni di responsabilità verso amministratori di società a partecipazione pubblica appartiene:',
    opzioni: [
      'Sempre al giudice amministrativo',
      'Al collegio arbitrale nominato dal socio pubblico',
      'Sempre alla Corte dei conti',
      'Al giudice ordinario per il danno al patrimonio sociale, e alla Corte dei conti per il danno erariale diretto al socio pubblico o nelle società in house',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Le Sezioni Unite (n. 26806/2009 e successive) hanno distinto: il danno al patrimonio della società partecipata è danno sociale, azionabile davanti al giudice ordinario; sussiste la giurisdizione contabile per il danno diretto al socio pubblico e, secondo l’art. 12 del d.lgs. n. 175/2016, nelle società in house, dove il patrimonio sociale è sostanzialmente riferibile all’ente.',
  },
  {
    id: 'comm-l3-054',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il conflitto di interessi degli amministratori nella s.r.l. è disciplinato:',
    opzioni: [
      'Dall’art. 2475-ter c.c., che prevede l’annullabilità dei contratti conclusi in conflitto e delle decisioni adottate con il voto determinante dell’amministratore in conflitto',
      'Da nessuna norma specifica',
      'Solo dallo statuto',
      'Dall’art. 2391 c.c., applicabile in via diretta',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2475-ter c.c. detta una disciplina autonoma: i contratti conclusi dagli amministratori che hanno la rappresentanza in conflitto di interessi con la società sono annullabili su domanda della società, se il conflitto era conosciuto o riconoscibile dal terzo; le decisioni del consiglio adottate con il voto determinante di un amministratore in conflitto sono impugnabili entro novanta giorni se cagionano un danno patrimoniale.',
  },
  {
    id: 'comm-l3-055',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La revoca dell’amministratore di s.r.l. per gravi irregolarità:',
    opzioni: [
      'Non è ammessa',
      'Può essere chiesta in via cautelare da ciascun socio nell’ambito dell’azione di responsabilità',
      'Spetta esclusivamente all’assemblea',
      'Richiede la denuncia al pubblico ministero',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2476, comma 3, c.c. consente a ciascun socio, nell’ambito dell’azione sociale di responsabilità, di chiedere in via cautelare la revoca degli amministratori in caso di gravi irregolarità nella gestione. La giurisprudenza ha a lungo discusso l’ammissibilità di una domanda cautelare autonoma; il Codice della crisi ha inoltre esteso alle s.r.l. il rimedio dell’art. 2409 c.c.',
  },
  {
    id: 'comm-l3-056',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'L’impugnazione del bilancio per violazione dei principi di chiarezza e precisione:',
    opzioni: [
      'È possibile solo entro trenta giorni',
      'È inammissibile, se il bilancio è stato approvato all’unanimità',
      'È ammessa e la deliberazione è nulla per illiceità dell’oggetto, quando la violazione incide sulla rappresentazione veritiera e corretta',
      'Comporta la sola responsabilità degli amministratori',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La giurisprudenza qualifica come nulla per illiceità dell’oggetto la delibera di approvazione di un bilancio redatto in violazione delle norme imperative sulla chiarezza e sulla rappresentazione veritiera e corretta. Occorre però che la violazione sia idonea a incidere sull’informazione: le irregolarità meramente formali e irrilevanti non travolgono la deliberazione.',
  },
  {
    id: 'comm-l3-057',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il termine per l’impugnazione delle deliberazioni nulle di s.p.a. (art. 2379 c.c.) è, di regola:',
    opzioni: [
      'Dieci anni',
      'Nessun termine',
      'Novanta giorni',
      'Tre anni dall’iscrizione o dal deposito nel registro delle imprese, salvo le ipotesi di imprescrittibilità previste dalla legge',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2379 c.c. prevede l’impugnabilità entro tre anni dall’iscrizione o dal deposito nel registro delle imprese, o dalla trascrizione nel libro delle adunanze. Restano impugnabili senza limiti di tempo le deliberazioni che modificano l’oggetto sociale prevedendo attività illecite o impossibili. Termini più brevi valgono per aumento, riduzione del capitale ed emissione di obbligazioni (art. 2379-ter c.c.).',
  },
  {
    id: 'comm-l3-058',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La sanatoria delle deliberazioni invalide prevista dall’art. 2377, comma 8, c.c. opera quando:',
    opzioni: [
      'La deliberazione è sostituita con altra presa in conformità della legge e dello statuto',
      'Tutti i soci rinunciano all’impugnazione',
      'Il tribunale lo autorizza',
      'Sono decorsi cinque anni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’annullamento non può avere luogo se la deliberazione impugnata è sostituita con altra presa in conformità della legge e dello statuto: il giudice provvede allora sulle spese e sull’eventuale risarcimento del danno. Il meccanismo è richiamato per le deliberazioni nulle dall’art. 2379, comma 4, c.c., ed è espressione del favore per la stabilità degli atti societari.',
  },
  {
    id: 'comm-l3-059',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Nel giudizio di impugnazione, se i soci impugnanti non raggiungono la soglia di capitale richiesta:',
    opzioni: [
      'La domanda è comunque accolta',
      'Non possono ottenere l’annullamento, ma hanno diritto al risarcimento del danno cagionato dalla non conformità della deliberazione',
      'Il giudizio è improcedibile',
      'La soglia non è mai richiesta',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2377, comma 4, c.c. converte la tutela reale in tutela obbligatoria: i soci che non raggiungono le soglie di legittimazione (l’uno per mille del capitale nelle società aperte, il cinque per cento nelle altre, salvo diversa previsione statutaria) conservano il diritto al risarcimento del danno. La stessa regola si applica ai soci privi del diritto di voto.',
  },
  {
    id: 'comm-l3-060',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La responsabilità dell’attestatore nel concordato preventivo:',
    opzioni: [
      'Riguarda solo i rapporti con il debitore',
      'È esclusa in ogni caso',
      'Ha rilievo civile e penale, essendo prevista una fattispecie incriminatrice per le falsità nelle attestazioni e relazioni',
      'È limitata al compenso pattuito',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il professionista indipendente risponde civilmente verso i creditori che abbiano fatto affidamento sull’attestazione, e penalmente ai sensi dell’art. 342 CCII (già art. 236-bis l.fall.), che punisce l’esposizione di informazioni false o l’omissione di informazioni rilevanti nelle relazioni e attestazioni, con aggravante se il fatto è commesso per conseguire un ingiusto profitto.',
  },
  {
    id: 'comm-l3-061',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'Il patto parasociale che vincola il voto degli amministratori:',
    opzioni: [
      'È valido se depositato presso il registro delle imprese',
      'È valido se approvato dall’assemblea',
      'È pienamente valido',
      'È di regola ritenuto nullo o comunque inefficace, perché incide sull’indipendenza di giudizio degli amministratori e sul dovere di agire nell’interesse sociale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Mentre i sindacati di voto fra soci sono ammessi entro i limiti dell’art. 2341-bis c.c., i patti che predeterminano il voto degli amministratori sono guardati con sfavore: l’amministratore è titolare di un ufficio e deve decidere in autonomia, informato e nell’interesse della società. Un vincolo esterno che ne comprima il giudizio contrasta con gli artt. 2380-bis e 2392 c.c.',
  },
  {
    id: 'comm-l3-062',
    materia: 'Diritto commerciale',
    difficolta: 3,
    domanda:
      'La rinuncia e la transazione dell’azione sociale di responsabilità:',
    opzioni: [
      'Sono ammesse con deliberazione espressa dell’assemblea, purché non vi sia il voto contrario di una minoranza qualificata di soci',
      'Possono essere decise dal consiglio di amministrazione',
      'Richiedono l’unanimità dei soci',
      'Sono sempre vietate',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2393, comma 6, c.c. consente rinuncia e transazione purché deliberate espressamente dall’assemblea e purché non voti contro una minoranza di soci che rappresenti almeno un quinto del capitale sociale, o un ventesimo nelle società che fanno ricorso al mercato del capitale di rischio, salvo diversa e minore percentuale statutaria.',
  },
];
