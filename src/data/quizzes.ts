import type { Materia, QuizQuestion } from '../types';

export const materie: Materia[] = [
  'Diritto civile',
  'Diritto penale',
  'Procedura civile',
  'Procedura penale',
  'Diritto amministrativo',
  'Deontologia forense',
];

export const quizQuestions: QuizQuestion[] = [
  // ———————————————— DIRITTO CIVILE ————————————————
  {
    id: 'civ-1',
    materia: 'Diritto civile',
    domanda: 'Qual è il termine ordinario di prescrizione dei diritti?',
    opzioni: ['5 anni', '10 anni', '20 anni', 'I diritti non si prescrivono mai'],
    rispostaCorretta: 1,
    spiegazione:
      'Ai sensi dell’art. 2946 c.c., salvi i casi in cui la legge dispone diversamente, i diritti si estinguono per prescrizione con il decorso di dieci anni. Termini diversi valgono per ipotesi specifiche: ad esempio il risarcimento del danno da fatto illecito si prescrive in cinque anni (art. 2947 c.c.), mentre i diritti reali su cosa altrui in venti anni.',
  },
  {
    id: 'civ-2',
    materia: 'Diritto civile',
    domanda:
      'Se il promittente venditore di un preliminare di vendita rifiuta di stipulare il definitivo, il promissario acquirente può ottenere:',
    opzioni: [
      'Solo la risoluzione del contratto con risarcimento',
      'Una sentenza che produce gli effetti del contratto non concluso',
      'Solo la restituzione del doppio della caparra',
      'Nulla, perché il preliminare non è vincolante',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2932 c.c. consente l’esecuzione in forma specifica dell’obbligo di concludere un contratto: la parte adempiente può chiedere al giudice una sentenza costitutiva che produce gli effetti del contratto definitivo non concluso. Restano ferme, in alternativa, la risoluzione per inadempimento con risarcimento o, se era stata versata una caparra confirmatoria, il recesso con ritenzione/doppio della caparra (art. 1385 c.c.).',
  },
  {
    id: 'civ-3',
    materia: 'Diritto civile',
    domanda: 'Quale forma è richiesta, di regola, per la donazione?',
    opzioni: [
      'Scrittura privata autenticata',
      'Nessuna forma particolare',
      'Atto pubblico a pena di nullità',
      'Forma scritta solo per immobili',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 782 c.c. richiede per la donazione l’atto pubblico, alla presenza di due testimoni, a pena di nullità. Fa eccezione la donazione di modico valore avente ad oggetto beni mobili, valida anche senza atto pubblico purché vi sia stata la tradizione (consegna) della cosa, ex art. 783 c.c.',
  },
  {
    id: 'civ-4',
    materia: 'Diritto civile',
    domanda: 'La responsabilità ex art. 2043 c.c. presuppone:',
    opzioni: [
      'Un inadempimento contrattuale',
      'Un fatto doloso o colposo che cagiona ad altri un danno ingiusto',
      'Sempre e solo il dolo dell’agente',
      'Un danno anche non ingiusto, purché quantificabile',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2043 c.c. fonda la responsabilità extracontrattuale (aquiliana): qualunque fatto doloso o colposo che cagiona ad altri un danno ingiusto obbliga colui che ha commesso il fatto a risarcire il danno. L’ingiustizia del danno (lesione di un interesse giuridicamente rilevante) è elemento costitutivo; l’azione si prescrive in cinque anni ex art. 2947 c.c., a differenza della responsabilità contrattuale (art. 1218 c.c., dieci anni).',
  },
  {
    id: 'civ-5',
    materia: 'Diritto civile',
    domanda:
      'In presenza di coniuge e di un solo figlio, quale quota di legittima spetta a ciascuno?',
    opzioni: [
      'Metà al coniuge e metà al figlio',
      'Un terzo al coniuge e un terzo al figlio',
      'Due terzi al coniuge e un terzo al figlio',
      'Tutto al coniuge, salvo testamento',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Ai sensi dell’art. 542, comma 1, c.c., quando il genitore lascia un figlio solo e il coniuge, a ciascuno di essi è riservato un terzo del patrimonio: la quota disponibile è dunque il residuo terzo. Al coniuge spettano inoltre i diritti di abitazione sulla casa familiare e di uso dei mobili che la corredano (art. 540, comma 2, c.c.).',
  },

  // ———————————————— DIRITTO PENALE ————————————————
  {
    id: 'pen-1',
    materia: 'Diritto penale',
    domanda: 'In materia di delitti, la punibilità a titolo di colpa:',
    opzioni: [
      'È la regola generale',
      'È ammessa solo nei casi espressamente previsti dalla legge',
      'È sempre esclusa',
      'Dipende dalla gravità del danno',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 42, comma 2, c.p. stabilisce che nessuno può essere punito per un fatto preveduto dalla legge come delitto se non l’ha commesso con dolo, salvi i casi di delitto preterintenzionale o colposo espressamente preveduti dalla legge. Il dolo è quindi il criterio ordinario di imputazione soggettiva dei delitti; nelle contravvenzioni, invece, si risponde indifferentemente a titolo di dolo o di colpa (art. 42, comma 4, c.p.).',
  },
  {
    id: 'pen-2',
    materia: 'Diritto penale',
    domanda: 'Il tentativo punibile richiede:',
    opzioni: [
      'Qualsiasi atto preparatorio',
      'Atti idonei, diretti in modo non equivoco a commettere un delitto',
      'La sola intenzione di delinquere',
      'Il verificarsi parziale dell’evento',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Ex art. 56 c.p., risponde di delitto tentato chi compie atti idonei, diretti in modo non equivoco a commettere un delitto, se l’azione non si compie o l’evento non si verifica. Servono dunque sia l’idoneità (valutata ex ante) sia l’univocità degli atti: la mera intenzione o gli atti preparatori equivoci non bastano. Il tentativo non è configurabile nei delitti colposi né, per espressa limitazione ai "delitti", nelle contravvenzioni.',
  },
  {
    id: 'pen-3',
    materia: 'Diritto penale',
    domanda: 'La legittima difesa (art. 52 c.p.) richiede, tra l’altro:',
    opzioni: [
      'Solo l’attualità del pericolo',
      'La proporzione tra difesa e offesa',
      'La fuga preventiva dell’aggredito',
      'Un’aggressione necessariamente armata',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 52 c.p. scrimina chi ha commesso il fatto per esservi stato costretto dalla necessità di difendere un diritto proprio o altrui contro il pericolo attuale di un’offesa ingiusta, sempre che la difesa sia proporzionata all’offesa. Occorrono dunque: pericolo attuale, offesa ingiusta, necessità della difesa e proporzione. Il superamento colposo dei limiti integra l’eccesso colposo ex art. 55 c.p.',
  },
  {
    id: 'pen-4',
    materia: 'Diritto penale',
    domanda: 'Ciò che distingue la rapina dal furto è:',
    opzioni: [
      'Il valore della cosa sottratta',
      'L’uso di violenza alla persona o minaccia',
      'Il luogo di commissione del fatto',
      'La destinazione del profitto',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il furto (art. 624 c.p.) consiste nell’impossessarsi della cosa mobile altrui sottraendola al detentore, per trarne profitto. La rapina (art. 628 c.p.) aggiunge la violenza alla persona o la minaccia, impiegata per impossessarsi della cosa (rapina propria) o, subito dopo la sottrazione, per assicurarsi il possesso o l’impunità (rapina impropria). La violenza sulla persona è quindi l’elemento specializzante.',
  },
  {
    id: 'pen-5',
    materia: 'Diritto penale',
    domanda: 'Se dopo la commissione del fatto entra in vigore una legge più favorevole al reo:',
    opzioni: [
      'Si applica sempre la legge del tempo del fatto',
      'Si applica la legge più favorevole, salvo sentenza irrevocabile',
      'Decide discrezionalmente il giudice',
      'Si applica la legge più severa',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2, comma 4, c.p. sancisce la retroattività della lex mitior: se la legge del tempo del fatto e le successive sono diverse, si applica quella le cui disposizioni sono più favorevoli al reo, salvo che sia stata pronunciata sentenza irrevocabile. Se invece il fatto non è più previsto come reato (abolitio criminis), cessano anche l’esecuzione e gli effetti penali del giudicato (art. 2, comma 2, c.p.). L’irretroattività della norma incriminatrice sfavorevole ha rango costituzionale (art. 25, comma 2, Cost.).',
  },

  // ———————————————— PROCEDURA CIVILE ————————————————
  {
    id: 'pc-1',
    materia: 'Procedura civile',
    domanda:
      'Qual è, in via generale, il limite di competenza per valore del giudice di pace per le cause relative a beni mobili?',
    opzioni: ['5.000 euro', '10.000 euro', '25.000 euro', '50.000 euro'],
    rispostaCorretta: 1,
    spiegazione:
      'Ai sensi dell’art. 7 c.p.c., come modificato dalla riforma della magistratura onoraria (d.lgs. 116/2017, efficace dal 31 ottobre 2021), il giudice di pace è competente per le cause relative a beni mobili di valore non superiore a 10.000 euro. Per le cause di risarcimento del danno da circolazione di veicoli e natanti il limite è di 25.000 euro.',
  },
  {
    id: 'pc-2',
    materia: 'Procedura civile',
    domanda:
      'In assenza di notificazione della sentenza, entro quale termine va proposta l’impugnazione?',
    opzioni: [
      '30 giorni dalla pubblicazione',
      '60 giorni dalla pubblicazione',
      '6 mesi dalla pubblicazione',
      '1 anno dalla pubblicazione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 327 c.p.c. prevede il c.d. termine lungo: indipendentemente dalla notificazione, l’appello e il ricorso per cassazione non possono proporsi dopo sei mesi dalla pubblicazione della sentenza. Se invece la sentenza è notificata, decorre il termine breve di trenta giorni (sessanta per il ricorso per cassazione) ex art. 325 c.p.c.',
  },
  {
    id: 'pc-3',
    materia: 'Procedura civile',
    domanda:
      'Dopo la riforma Cartabia, quale termine minimo a comparire deve essere assegnato al convenuto nell’atto di citazione?',
    opzioni: ['60 giorni', '90 giorni', '120 giorni', '150 giorni'],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 163-bis c.p.c., come riformato dal d.lgs. 149/2022 (riforma Cartabia), impone che tra il giorno della notificazione della citazione e quello dell’udienza di comparizione intercorrano termini liberi non minori di 120 giorni (150 se la notifica avviene all’estero). Ciò si coordina con il nuovo art. 166 c.p.c., che impone al convenuto di costituirsi almeno 70 giorni prima dell’udienza, per consentire le verifiche preliminari e le memorie integrative ex art. 171-ter c.p.c.',
  },
  {
    id: 'pc-4',
    materia: 'Procedura civile',
    domanda: 'Secondo la regola generale sull’onere della prova:',
    opzioni: [
      'Il giudice deve ricercare d’ufficio tutte le prove',
      'Chi vuol far valere un diritto in giudizio deve provare i fatti che ne costituiscono il fondamento',
      'Spetta sempre al convenuto provare l’inesistenza del diritto',
      'Le prove possono essere solo documentali',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2697 c.c. pone la regola cardine: chi vuol far valere un diritto in giudizio deve provare i fatti che ne costituiscono il fondamento; chi eccepisce l’inefficacia di tali fatti, ovvero che il diritto si è modificato o estinto, deve provare i fatti su cui l’eccezione si fonda. Nel processo civile vige il principio dispositivo (art. 115 c.p.c.): il giudice decide iuxta alligata et probata.',
  },
  {
    id: 'pc-5',
    materia: 'Procedura civile',
    domanda: 'Il ricorso per cassazione consente:',
    opzioni: [
      'Un riesame completo del merito della causa',
      'Solo un controllo di legittimità nei casi previsti dall’art. 360 c.p.c.',
      'La rinnovazione dell’istruttoria',
      'La proposizione di nuove domande',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Corte di cassazione è giudice di legittimità: il ricorso è ammesso solo per i motivi tassativi dell’art. 360 c.p.c. (motivi di giurisdizione, violazione di norme sulla competenza, violazione o falsa applicazione di norme di diritto, nullità della sentenza o del procedimento, omesso esame di un fatto decisivo discusso tra le parti). Non è consentito un nuovo apprezzamento dei fatti né sono ammesse nuove domande o prove.',
  },

  // ———————————————— PROCEDURA PENALE ————————————————
  {
    id: 'pp-1',
    materia: 'Procedura penale',
    domanda: 'L’applicazione di una misura cautelare personale richiede:',
    opzioni: [
      'La sola gravità del reato contestato',
      'Gravi indizi di colpevolezza ed esigenze cautelari',
      'La confessione dell’indagato',
      'La richiesta della persona offesa',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Gli artt. 273 e 274 c.p.p. richiedono due presupposti concorrenti: i gravi indizi di colpevolezza (fumus commissi delicti) e almeno una delle esigenze cautelari (pericolo di inquinamento probatorio, pericolo di fuga, pericolo di reiterazione del reato). Vale inoltre il principio di proporzionalità e adeguatezza (art. 275 c.p.p.): la custodia in carcere è extrema ratio.',
  },
  {
    id: 'pp-2',
    materia: 'Procedura penale',
    domanda:
      'Dopo la riforma Cartabia, qual è il termine ordinario di durata delle indagini preliminari per i delitti comuni?',
    opzioni: ['6 mesi', '1 anno', '18 mesi', '2 anni'],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 405, comma 2, c.p.p., come riscritto dal d.lgs. 150/2022 (riforma Cartabia), fissa il termine ordinario in un anno dall’iscrizione della notizia di reato per i delitti, sei mesi per le contravvenzioni e diciotto mesi per i gravi delitti di cui all’art. 407, comma 2, lett. a), c.p.p. Il termine è prorogabile una sola volta, per non più di sei mesi, ex art. 406 c.p.p.',
  },
  {
    id: 'pp-3',
    materia: 'Procedura penale',
    domanda: 'Il "patteggiamento" (applicazione della pena su richiesta) è ammesso quando la pena da applicare:',
    opzioni: [
      'Non supera 2 anni',
      'Non supera 5 anni, sola o congiunta a pena pecuniaria',
      'Non supera 10 anni',
      'È di qualunque entità',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Ai sensi dell’art. 444 c.p.p., imputato e pubblico ministero possono chiedere l’applicazione di una pena sostitutiva o pecuniaria, ovvero di una pena detentiva che, tenuto conto delle circostanze e ridotta fino a un terzo, non superi cinque anni, sola o congiunta a pena pecuniaria. Per il c.d. patteggiamento allargato (pena tra 2 e 5 anni) sono previste esclusioni soggettive e oggettive (comma 1-bis).',
  },
  {
    id: 'pp-4',
    materia: 'Procedura penale',
    domanda: 'In caso di condanna nel giudizio abbreviato, la pena per i delitti è ridotta:',
    opzioni: ['Della metà', 'Di un terzo', 'Di un quarto', 'Di due terzi'],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 442, comma 2, c.p.p. prevede che, in caso di condanna all’esito del giudizio abbreviato, la pena sia diminuita di un terzo per i delitti e della metà per le contravvenzioni. All’ergastolo è sostituita la reclusione di anni trenta. Il rito comporta la decisione allo stato degli atti, con rinuncia al contraddittorio dibattimentale nella formazione della prova.',
  },
  {
    id: 'pp-5',
    materia: 'Procedura penale',
    domanda: 'Prima dell’interrogatorio, la persona sottoposta alle indagini deve essere avvertita che:',
    opzioni: [
      'Ha l’obbligo di rispondere secondo verità a ogni domanda',
      'Ha facoltà di non rispondere ad alcuna domanda',
      'Non può avvalersi del difensore',
      'Le sue dichiarazioni resteranno sempre segrete',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 64, comma 3, c.p.p. impone, a pena di inutilizzabilità delle dichiarazioni, di avvertire l’interrogato che ha facoltà di non rispondere ad alcuna domanda (salvo l’obbligo di dichiarare le proprie generalità), che le sue dichiarazioni potranno essere utilizzate nei suoi confronti e che, se renderà dichiarazioni su fatti concernenti la responsabilità di altri, assumerà l’ufficio di testimone rispetto a tali fatti. È espressione del principio nemo tenetur se detegere.',
  },

  // ———————————————— DIRITTO AMMINISTRATIVO ————————————————
  {
    id: 'amm-1',
    materia: 'Diritto amministrativo',
    domanda: 'Entro quale termine va proposto, di regola, il ricorso al TAR per l’annullamento di un provvedimento?',
    opzioni: ['30 giorni', '60 giorni', '90 giorni', '120 giorni'],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 29 del codice del processo amministrativo (d.lgs. 104/2010) fissa per l’azione di annullamento il termine di decadenza di sessanta giorni, decorrente dalla notificazione, comunicazione o piena conoscenza del provvedimento. Termini diversi valgono per altre azioni: ad esempio 120 giorni per il ricorso avverso il silenzio... e il rito appalti prevede il dimezzamento a trenta giorni (art. 120 c.p.a.).',
  },
  {
    id: 'amm-2',
    materia: 'Diritto amministrativo',
    domanda: 'Con la SCIA (segnalazione certificata di inizio attività), l’attività segnalata:',
    opzioni: [
      'Può iniziare solo dopo 30 giorni',
      'Può iniziare dalla data di presentazione della segnalazione',
      'Richiede comunque un provvedimento espresso',
      'È subordinata a un parere del Consiglio di Stato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Ai sensi dell’art. 19 della l. 241/1990, l’attività oggetto di SCIA può essere iniziata dalla data della presentazione della segnalazione all’amministrazione competente. L’amministrazione conserva poteri di controllo successivo: entro sessanta giorni (trenta in materia edilizia) può adottare provvedimenti di divieto di prosecuzione e di rimozione degli effetti, salva la possibilità di conformare l’attività alla normativa vigente.',
  },
  {
    id: 'amm-3',
    materia: 'Diritto amministrativo',
    domanda: 'Il silenzio-assenso ex art. 20 l. 241/1990 comporta che:',
    opzioni: [
      'Il silenzio della P.A. equivale sempre a rigetto',
      'Nei procedimenti a istanza di parte, decorso il termine, il silenzio equivale ad accoglimento',
      'Il privato deve diffidare la P.A. prima di agire',
      'Il provvedimento si intende annullato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 20 della l. 241/1990 prevede che nei procedimenti a istanza di parte il silenzio dell’amministrazione, protratto oltre il termine di conclusione del procedimento, equivale a provvedimento di accoglimento, senza necessità di ulteriori istanze o diffide. La regola non si applica ai casi esclusi dal comma 4 (patrimonio culturale e paesaggistico, ambiente, difesa nazionale, salute, ecc.), nei quali il silenzio-inadempimento è impugnabile ex artt. 31 e 117 c.p.a.',
  },
  {
    id: 'amm-4',
    materia: 'Diritto amministrativo',
    domanda: 'La giurisdizione generale di legittimità del giudice amministrativo ha ad oggetto:',
    opzioni: [
      'I diritti soggettivi',
      'Gli interessi legittimi',
      'Solo i diritti patrimoniali',
      'Qualsiasi controversia con la P.A.',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il riparto di giurisdizione si fonda sulla causa petendi: al giudice ordinario spettano le controversie su diritti soggettivi, al giudice amministrativo quelle su interessi legittimi (artt. 24, 103 e 113 Cost.; art. 7 c.p.a.). Nelle materie di giurisdizione esclusiva, indicate dalla legge (art. 133 c.p.a.), il G.A. conosce anche dei diritti soggettivi. La Cassazione a Sezioni Unite decide sulle questioni di giurisdizione.',
  },
  {
    id: 'amm-5',
    materia: 'Diritto amministrativo',
    domanda: 'Il diritto di accesso ai documenti amministrativi (l. 241/1990) spetta:',
    opzioni: [
      'A chiunque, senza alcuna condizione',
      'A chi ha un interesse diretto, concreto e attuale, corrispondente a una situazione giuridicamente tutelata',
      'Solo alle pubbliche amministrazioni',
      'Solo a chi è parte di un giudizio pendente',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 22 della l. 241/1990 riconosce il diritto di accesso documentale agli interessati, cioè ai soggetti che abbiano un interesse diretto, concreto e attuale, corrispondente a una situazione giuridicamente tutelata e collegata al documento richiesto. Diverso è l’accesso civico generalizzato (FOIA, d.lgs. 33/2013), che spetta a chiunque senza obbligo di motivazione, ma con limiti a tutela di interessi pubblici e privati.',
  },

  // ———————————————— DEONTOLOGIA FORENSE ————————————————
  {
    id: 'deo-1',
    materia: 'Deontologia forense',
    domanda: 'Il patto con cui l’avvocato pattuisce come compenso una quota del bene oggetto della lite (patto di quota lite) è:',
    opzioni: [
      'Sempre consentito',
      'Vietato',
      'Consentito solo nelle cause di lavoro',
      'Consentito se il cliente è d’accordo per iscritto',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 13, comma 4, della l. 247/2012 e l’art. 25 del codice deontologico forense vietano i patti con i quali l’avvocato percepisca come compenso, in tutto o in parte, una quota del bene oggetto della prestazione o della ragione litigiosa. È invece consentito pattuire compensi parametrati al valore dell’affare o a percentuale su quanto si prevede possa giovarsene il cliente (palmario), purché non si traduca in una partecipazione al bene conteso.',
  },
  {
    id: 'deo-2',
    materia: 'Deontologia forense',
    domanda: 'Il segreto professionale per l’avvocato è:',
    opzioni: [
      'Una semplice facoltà',
      'Un dovere, anche dopo la cessazione del mandato',
      'Un obbligo limitato ai processi penali',
      'Derogabile su richiesta del giudice civile',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 13 del codice deontologico forense (e l’art. 6 l. 247/2012) impone all’avvocato di mantenere il segreto e il massimo riserbo sull’attività prestata e sulle informazioni fornite dal cliente, anche dopo la conclusione del mandato o la rinuncia allo stesso. Sul piano processuale, l’avvocato può astenersi dal testimoniare (art. 200 c.p.p.; art. 249 c.p.c.) e la violazione del segreto può integrare il reato di cui all’art. 622 c.p.',
  },
  {
    id: 'deo-3',
    materia: 'Deontologia forense',
    domanda: 'L’avvocato può assumere un incarico contro un proprio cliente attuale?',
    opzioni: [
      'Sì, sempre',
      'No, deve astenersi in caso di conflitto di interessi',
      'Sì, se le cause riguardano materie diverse',
      'Solo previo pagamento di una penale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 24 del codice deontologico forense impone all’avvocato di astenersi dal prestare attività professionale quando questa possa determinare un conflitto con gli interessi della parte assistita o del cliente, o interferire con lo svolgimento di altro incarico anche non professionale. Il dovere sussiste anche se il conflitto è solo potenziale e si estende ai componenti dello studio e agli associati.',
  },
  {
    id: 'deo-4',
    materia: 'Deontologia forense',
    domanda: 'La pubblicità informativa dell’avvocato è:',
    opzioni: [
      'Vietata in ogni forma',
      'Consentita se trasparente, veritiera e non comparativa né suggestiva',
      'Libera senza alcun limite',
      'Consentita solo su carta stampata',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Ai sensi dell’art. 10 l. 247/2012 e dell’art. 35 del codice deontologico forense, è consentita la pubblicità informativa sull’attività professionale, sulle specializzazioni e sui titoli, con ogni mezzo, purché le informazioni siano trasparenti, veritiere, corrette e non siano comparative con altri professionisti, equivoche, ingannevoli, denigratorie, suggestive o che richiamino clienti in modo non conforme al decoro della professione.',
  },
  {
    id: 'deo-5',
    materia: 'Deontologia forense',
    domanda: 'L’avvocato può mettersi in contatto diretto con la controparte che sia assistita da un collega?',
    opzioni: [
      'Sì, liberamente',
      'No, di regola deve rivolgersi al collega che la assiste',
      'Sì, ma solo per telefono',
      'Solo se la causa è già iniziata',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 41 del codice deontologico forense vieta all’avvocato di mettersi in contatto diretto con la controparte che sappia assistita da altro collega, salvo che il collega ne sia informato o vi consenta e salvi i casi particolari (come la richiesta di adempimenti ai quali la controparte è tenuta per legge). La violazione comporta responsabilità disciplinare, a tutela della lealtà tra colleghi e del diritto di difesa.',
  },
];

export function questionsByMateria(materia: Materia): QuizQuestion[] {
  return quizQuestions.filter((q) => q.materia === materia);
}
