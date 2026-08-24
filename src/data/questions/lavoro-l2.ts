import type { QuizQuestion } from '../../types';

/**
 * Diritto del lavoro — Unità 2 · Consolidamento.
 *
 * Dal contratto al suo funzionamento: regimi sanzionatori dei
 * licenziamenti, tipologie contrattuali e loro patologie, poteri del
 * datore e limiti, trasferimento d'azienda e appalti, ammortizzatori
 * sociali, contrattazione collettiva.
 */
export const lavoroL2: QuizQuestion[] = [
  {
    id: 'lav-l2-001',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Nel regime dell’art. 18 dello Statuto, la reintegrazione per il licenziamento disciplinare è disposta quando:',
    opzioni: [
      'Il lavoratore ha più di dieci anni di anzianità',
      'Il licenziamento è comunque illegittimo',
      'Il fatto contestato non sussiste o rientra fra le condotte punibili con sanzione conservativa dai contratti collettivi',
      'Il datore non ha rispettato il preavviso',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 18, comma 4, dello Statuto, come riformato dalla l. n. 92/2012, riserva la reintegrazione attenuata alle ipotesi di insussistenza del fatto contestato o di riconducibilità del fatto alle condotte punibili con sanzione conservativa secondo i contratti collettivi o i codici disciplinari. Negli altri casi di illegittimità opera la tutela indennitaria del comma 5.',
  },
  {
    id: 'lav-l2-002',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'L’«insussistenza del fatto contestato» rilevante ai fini della reintegrazione va intesa:',
    opzioni: [
      'Come qualsiasi vizio procedurale',
      'Come mancanza di prova scritta',
      'In senso meramente materiale, con esclusione di ogni valutazione',
      'Comprendendo anche il fatto materialmente esistente ma privo del carattere di illiceità o di rilievo disciplinare',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Superando la tesi del «fatto materiale nudo», la giurisprudenza ha chiarito che il fatto rilevante è il fatto giuridico: la condotta materialmente accertata ma priva di antigiuridicità o di qualsiasi rilievo disciplinare equivale a fatto insussistente, con conseguente reintegrazione. Resta escluso il sindacato sulla proporzionalità della sanzione, che conduce alla sola tutela indennitaria.',
  },
  {
    id: 'lav-l2-003',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La Corte costituzionale, con la sent. n. 194/2018, ha dichiarato illegittimo l’art. 3 del d.lgs. n. 23/2015:',
    opzioni: [
      'Nella parte in cui determinava rigidamente l’indennità in due mensilità per ogni anno di servizio',
      'Nella parte in cui si applicava ai dirigenti',
      'Nella sua interezza',
      'Nella parte in cui prevedeva la reintegrazione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La Corte ha censurato l’automatismo che ancorava l’indennità alla sola anzianità di servizio, in contrasto con gli artt. 3, 4 e 35 Cost. e con la Carta sociale europea: il risarcimento deve essere adeguato e dissuasivo e il giudice deve poter considerare anche numero dei dipendenti, dimensioni dell’attività, comportamento e condizioni delle parti. La sent. n. 150/2020 ha esteso il principio ai vizi formali e procedurali.',
  },
  {
    id: 'lav-l2-004',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Con la sent. n. 22/2024 la Corte costituzionale è intervenuta sull’art. 2 del d.lgs. n. 23/2015:',
    opzioni: [
      'Abrogando l’intera disciplina',
      'Espungendo la parola «espressamente», così estendendo la reintegrazione a tutti i licenziamenti nulli per violazione di norme imperative, anche non espressamente qualificate come tali',
      'Escludendo la reintegrazione per i licenziamenti discriminatori',
      'Riducendo l’indennità minima',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Corte ha dichiarato l’illegittimità per eccesso di delega, limitatamente alla parola «espressamente»: la tutela reintegratoria piena si applica quindi a tutti i casi di nullità del licenziamento previsti dalla legge, comprese le nullità derivanti dalla violazione di norme imperative che vietano il recesso, senza che sia necessaria una qualificazione espressa.',
  },
  {
    id: 'lav-l2-005',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Con la sent. n. 128/2024 la Corte costituzionale ha esteso la reintegrazione:',
    opzioni: [
      'Ai soli licenziamenti collettivi',
      'A tutti i licenziamenti illegittimi',
      'Al licenziamento per giustificato motivo oggettivo quando il fatto materiale posto a fondamento del recesso risulti insussistente',
      'Al licenziamento intimato senza preavviso',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte ha dichiarato illegittimo l’art. 3, comma 2, del d.lgs. n. 23/2015 nella parte in cui non prevedeva la reintegrazione per l’ipotesi di insussistenza del fatto materiale allegato a fondamento del licenziamento per giustificato motivo oggettivo. Ha però precisato che la violazione del solo obbligo di repêchage resta sanzionata con la tutela indennitaria.',
  },
  {
    id: 'lav-l2-006',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Nel regime dell’art. 18 dello Statuto, la Corte costituzionale con le sentt. nn. 59/2021 e 125/2022 ha inciso sul comma 7:',
    opzioni: [
      'Escludendo ogni reintegrazione',
      'Estendendo il regime ai dirigenti',
      'Abrogando l’intero art. 18',
      'Rendendo obbligatoria la reintegrazione in caso di insussistenza del fatto posto a base del giustificato motivo oggettivo, ed eliminando il requisito della «manifesta» insussistenza',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La sent. n. 59/2021 ha censurato la facoltatività («può») della reintegrazione, rendendola doverosa una volta accertata l’insussistenza del fatto; la sent. n. 125/2022 ha espunto l’aggettivo «manifesta», ritenendolo indeterminato e fonte di disparità di trattamento. Le due pronunce hanno ricomposto il regime del giustificato motivo oggettivo attorno all’insussistenza del fatto.',
  },
  {
    id: 'lav-l2-007',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'L’offerta di conciliazione dell’art. 6 del d.lgs. n. 23/2015:',
    opzioni: [
      'Consente al datore di offrire, entro il termine di impugnazione, un importo esente da imposizione fiscale e contributiva mediante assegno circolare, la cui accettazione comporta rinuncia all’impugnazione',
      'Comporta la reintegrazione',
      'Richiede l’omologazione del giudice',
      'È obbligatoria per il datore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La norma prevede che il datore possa offrire, in una delle sedi protette ed entro i termini di impugnazione stragiudiziale, un importo determinato per legge in ragione dell’anzianità, mediante consegna di assegno circolare. L’accettazione comporta l’estinzione del rapporto e la rinuncia all’impugnazione; l’importo non costituisce reddito imponibile né è assoggettato a contribuzione.',
  },
  {
    id: 'lav-l2-008',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il numero complessivo di contratti a termine stipulabili è limitato:',
    opzioni: [
      'Al dieci per cento dei dipendenti a tempo indeterminato',
      'Al venti per cento del numero dei lavoratori a tempo indeterminato in forza al 1° gennaio dell’anno di assunzione, salvo diversa previsione dei contratti collettivi',
      'A tre contratti per datore',
      'Non esiste alcun limite',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 23 del d.lgs. n. 81/2015 fissa il limite del venti per cento, arrotondato all’unità superiore, calcolato sui lavoratori a tempo indeterminato in forza al 1° gennaio, salva diversa disposizione dei contratti collettivi. Sono previste esenzioni, fra cui start-up innovative, sostituzione di lavoratori assenti, attività stagionali e lavoratori di età superiore a cinquant’anni.',
  },
  {
    id: 'lav-l2-009',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La violazione del limite massimo di durata del contratto a termine comporta:',
    opzioni: [
      'Il diritto a un’indennità pari a una mensilità',
      'Una sanzione amministrativa e nulla più',
      'La trasformazione del contratto a tempo indeterminato dalla data del superamento del termine',
      'La nullità dell’intero contratto',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 19, comma 2, del d.lgs. n. 81/2015 prevede che, superata la durata massima complessiva di ventiquattro mesi per effetto di un unico contratto o di una successione di contratti, il rapporto si trasformi a tempo indeterminato dalla data del superamento. Analoga conseguenza deriva dalla prosecuzione di fatto oltre i termini di tolleranza di cui all’art. 22.',
  },
  {
    id: 'lav-l2-010',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'In caso di trasformazione del contratto a termine per illegittimità del termine, il lavoratore ha diritto:',
    opzioni: [
      'Alla sola reintegrazione, senza somme',
      'A un’indennità pari a ventiquattro mensilità',
      'Al risarcimento integrale delle retribuzioni perdute',
      'A un’indennità onnicomprensiva fra 2,5 e 12 mensilità, che ristora per intero il pregiudizio subito dalla scadenza del termine fino alla sentenza',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 28 del d.lgs. n. 81/2015 prevede un’indennità onnicomprensiva compresa fra 2,5 e 12 mensilità dell’ultima retribuzione di riferimento per il TFR, che copre integralmente il danno subito dal lavoratore dalla scadenza del termine sino alla pronuncia. La misura è dimezzata in presenza di contratti collettivi che prevedano l’assunzione di lavoratori già occupati a termine.',
  },
  {
    id: 'lav-l2-011',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Fra due contratti a termine successivi deve intercorrere un intervallo di:',
    opzioni: [
      'Dieci giorni se il contratto precedente aveva durata fino a sei mesi, venti giorni se superiore',
      'Novanta giorni in ogni caso',
      'Nessun intervallo',
      'Un anno',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 21, comma 2, del d.lgs. n. 81/2015 impone il rispetto dello «stop and go»: dieci giorni dalla scadenza di un contratto di durata fino a sei mesi, venti giorni se di durata superiore. In caso di mancato rispetto, il secondo contratto si trasforma a tempo indeterminato. Sono previste esclusioni per le attività stagionali e per le ipotesi individuate dai contratti collettivi.',
  },
  {
    id: 'lav-l2-012',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La somministrazione irregolare consente al lavoratore:',
    opzioni: [
      'Solo il risarcimento del danno',
      'Di chiedere, con ricorso giudiziale, la costituzione di un rapporto di lavoro alle dipendenze dell’utilizzatore, con effetto dall’inizio della somministrazione',
      'Di ottenere la reintegrazione presso l’agenzia',
      'Di ottenere la sola conversione a tempo indeterminato con l’agenzia',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 38 del d.lgs. n. 81/2015 consente al lavoratore, quando la somministrazione avvenga fuori dai limiti e dalle condizioni di legge, di chiedere la costituzione di un rapporto alle dipendenze dell’utilizzatore, con effetto dall’inizio della somministrazione. Tutti gli atti compiuti dal somministratore si intendono compiuti dall’utilizzatore, che è il datore sostanziale.',
  },
  {
    id: 'lav-l2-013',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'L’appalto si distingue dalla somministrazione illecita di manodopera per:',
    opzioni: [
      'La durata del contratto',
      'La sola forma scritta del contratto',
      'L’organizzazione dei mezzi necessari da parte dell’appaltatore, l’esercizio del potere organizzativo e direttivo verso i lavoratori impiegati e l’assunzione del rischio d’impresa',
      'Il numero dei lavoratori impiegati',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 29 del d.lgs. n. 276/2003 individua i tratti distintivi: organizzazione dei mezzi necessari da parte dell’appaltatore, che può risultare anche dall’esercizio del potere organizzativo e direttivo nei confronti dei lavoratori, e assunzione del rischio d’impresa. In mancanza si ha interposizione illecita, con costituzione del rapporto in capo all’utilizzatore effettivo.',
  },
  {
    id: 'lav-l2-014',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il distacco è legittimo quando:',
    opzioni: [
      'Il lavoratore vi consente per iscritto, in ogni caso',
      'Il distaccatario assume il lavoratore',
      'Il distaccante realizza un profitto dall’operazione',
      'Risponde a un interesse del distaccante, è temporaneo e il distaccante resta responsabile del trattamento economico e normativo',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 30 del d.lgs. n. 276/2003 richiede l’interesse del distaccante, che deve essere specifico, rilevante e persistente, e la temporaneità, non necessariamente breve ma non definitiva. Il distacco che comporti mutamento di mansioni richiede il consenso del lavoratore; se avviene a più di cinquanta chilometri occorrono comprovate ragioni tecniche, organizzative, produttive o sostitutive.',
  },
  {
    id: 'lav-l2-015',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il trasferimento di ramo d’azienda presuppone, ai sensi dell’art. 2112 c.c.:',
    opzioni: [
      'Un’articolazione funzionalmente autonoma di un’attività economica organizzata, identificata come tale dal cedente e dal cessionario al momento del trasferimento',
      'Il trasferimento di almeno cinque lavoratori',
      'La cessione di beni materiali',
      'L’autorizzazione dell’Ispettorato del lavoro',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il comma 5 dell’art. 2112 c.c. richiede un’articolazione funzionalmente autonoma di un’attività economica organizzata, identificata come tale dalle parti al momento del trasferimento. La giurisprudenza esige che l’autonomia funzionale preesista e non sia creata ad hoc: altrimenti si tratta di cessione di un gruppo di lavoratori, che richiede il loro consenso ai sensi dell’art. 1406 c.c.',
  },
  {
    id: 'lav-l2-016',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Nel trasferimento d’azienda con più di quindici dipendenti, cedente e cessionario devono:',
    opzioni: [
      'Ottenere il consenso dei lavoratori',
      'Dare comunicazione scritta alle rappresentanze sindacali e ai sindacati di categoria almeno venticinque giorni prima, avviando su richiesta un esame congiunto',
      'Comunicare l’operazione solo dopo il perfezionamento',
      'Chiedere l’autorizzazione del tribunale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 47 della l. n. 428/1990 impone la comunicazione preventiva, almeno venticinque giorni prima del perfezionamento dell’atto o del raggiungimento di un’intesa vincolante, con indicazione di data, motivi, conseguenze e misure previste. Su richiesta sindacale si apre l’esame congiunto; il mancato rispetto della procedura costituisce condotta antisindacale ai sensi dell’art. 28 dello Statuto.',
  },
  {
    id: 'lav-l2-017',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il lavoratore può liberare il cedente dalle obbligazioni derivanti dal rapporto:',
    opzioni: [
      'Con il semplice silenzio protratto per sei mesi',
      'Con una dichiarazione unilaterale scritta',
      'Solo attraverso le procedure conciliative in sede protetta previste dagli artt. 410 e 411 c.p.c.',
      'Mai',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2112, comma 2, c.c. mantiene la solidarietà fra cedente e cessionario per i crediti esistenti al momento del trasferimento, e consente la liberazione del cedente solo mediante le procedure conciliative degli artt. 410 e 411 c.p.c. La regola impedisce che il lavoratore rinunci alla garanzia patrimoniale con atti unilaterali non assistiti.',
  },
  {
    id: 'lav-l2-018',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il lavoratore le cui condizioni di lavoro subiscano una sostanziale modifica nei tre mesi successivi al trasferimento:',
    opzioni: [
      'Ha diritto alla reintegrazione presso il cedente',
      'Può chiedere la nullità del trasferimento',
      'Non ha rimedi',
      'Può rassegnare le dimissioni con gli effetti dell’art. 2119 c.c., conservando il diritto all’indennità sostitutiva del preavviso',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2112, comma 4, c.c. equipara la sostanziale modifica delle condizioni di lavoro nei tre mesi successivi al trasferimento a una giusta causa di dimissioni: il lavoratore conserva quindi il diritto all’indennità sostitutiva del preavviso e, sul piano previdenziale, l’accesso alla NASpI, poiché la cessazione non è considerata volontaria.',
  },
  {
    id: 'lav-l2-019',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il diritto di precedenza del lavoratore a termine:',
    opzioni: [
      'Spetta a chi ha prestato attività per oltre sei mesi, nelle assunzioni a tempo indeterminato effettuate dal datore entro i dodici mesi successivi, per le stesse mansioni, e va manifestato per iscritto',
      'Opera automaticamente senza manifestazione di volontà',
      'Spetta solo ai lavoratori stagionali',
      'Non esiste',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 24 del d.lgs. n. 81/2015 riconosce il diritto di precedenza al lavoratore che abbia prestato attività per più di sei mesi, rispetto alle assunzioni a tempo indeterminato per le medesime mansioni effettuate nei dodici mesi successivi. Il diritto va espressamente manifestato entro sei mesi dalla cessazione e si estingue decorso un anno; il periodo di maternità concorre a determinare l’anzianità utile.',
  },
  {
    id: 'lav-l2-020',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il lavoro intermittente (a chiamata) può essere concluso:',
    opzioni: [
      'Con qualunque lavoratore e senza limiti',
      'Per prestazioni discontinue individuate dai contratti collettivi o dal decreto ministeriale, ovvero con soggetti con meno di ventiquattro anni o più di cinquantacinque, con limite complessivo di giornate',
      'Solo nel settore agricolo',
      'Solo a tempo determinato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Gli artt. 13 ss. del d.lgs. n. 81/2015 ammettono il contratto per lo svolgimento di prestazioni di carattere discontinuo o intermittente secondo le esigenze individuate dai contratti collettivi o, in mancanza, dal decreto ministeriale, ovvero con soggetti di età inferiore a ventiquattro anni o superiore a cinquantacinque. Il limite è di quattrocento giornate di effettivo lavoro nell’arco di tre anni solari, con eccezioni settoriali.',
  },
  {
    id: 'lav-l2-021',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'L’indennità di disponibilità nel lavoro intermittente:',
    opzioni: [
      'È dovuta solo dopo un anno di rapporto',
      'Non è mai dovuta',
      'Spetta al lavoratore che si sia obbligato contrattualmente a rispondere alla chiamata, nella misura stabilita dai contratti collettivi e comunque non inferiore a quella fissata dal decreto ministeriale',
      'È pari all’intera retribuzione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’indennità presuppone l’assunzione dell’obbligo di rispondere alla chiamata: solo in questo caso il lavoratore subisce una compressione della propria libertà. È divisibile in quote orarie, non è computata ai fini di alcun istituto legale o contrattuale ed è assoggettata a contribuzione per il suo effettivo ammontare. Il rifiuto ingiustificato della chiamata può giustificare la risoluzione.',
  },
  {
    id: 'lav-l2-022',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il contratto di somministrazione a tempo indeterminato (staff leasing):',
    opzioni: [
      'È ammesso solo nel settore pubblico',
      'Non richiede forma scritta',
      'È vietato',
      'È ammesso nel limite percentuale fissato dalla legge rispetto ai lavoratori a tempo indeterminato dell’utilizzatore, salvo diversa previsione collettiva',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 31 del d.lgs. n. 81/2015 ammette lo staff leasing nel limite del venti per cento del numero dei lavoratori a tempo indeterminato in forza presso l’utilizzatore al 1° gennaio dell’anno di stipula, salvo diversa previsione dei contratti collettivi. Il contratto richiede la forma scritta con l’indicazione degli elementi essenziali, a pena delle conseguenze previste dall’art. 38.',
  },
  {
    id: 'lav-l2-023',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il divieto di ricorso alla somministrazione opera, fra l’altro:',
    opzioni: [
      'Per sostituire lavoratori in sciopero',
      'Per qualunque mansione operaia',
      'Nelle imprese con oltre cento dipendenti',
      'Nei contratti a tempo pieno',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 32 del d.lgs. n. 81/2015 vieta la somministrazione per sostituire lavoratori in sciopero, presso unità produttive che nei sei mesi precedenti abbiano proceduto a licenziamenti collettivi o abbiano in corso sospensioni con ammortizzatori per lavoratori adibiti alle stesse mansioni, e presso datori che non abbiano effettuato la valutazione dei rischi.',
  },
  {
    id: 'lav-l2-024',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il contratto collettivo aziendale, rispetto a quello nazionale:',
    opzioni: [
      'È sempre subordinato e non può derogarvi',
      'Può derogare, secondo la giurisprudenza, anche in senso peggiorativo, salvo i diritti già entrati nel patrimonio del lavoratore e i limiti inderogabili di legge',
      'Non ha alcuna efficacia',
      'Vincola solo il datore',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Fra contratti collettivi non opera il criterio gerarchico ma quello della successione nel tempo fra fonti di pari natura, temperato dalla verifica dell’effettiva volontà derogatoria e dal rispetto dei diritti quesiti, cioè già definitivamente acquisiti al patrimonio del singolo. L’art. 8 del d.l. n. 138/2011 consente inoltre, a determinate condizioni, intese aziendali derogatorie anche di norme di legge.',
  },
  {
    id: 'lav-l2-025',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il lavoratore che non sia iscritto ad alcun sindacato:',
    opzioni: [
      'Deve stipulare un contratto individuale integrale',
      'Non può in alcun modo vedersi applicato il contratto collettivo',
      'Può vedersi applicato il contratto collettivo per effetto del rinvio contenuto nel contratto individuale o dell’adesione implicita desumibile dal comportamento delle parti',
      'È soggetto al contratto collettivo per legge',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'In assenza di attuazione dell’art. 39 Cost., l’applicazione al non iscritto passa per l’autonomia individuale: il rinvio espresso nel contratto di assunzione, l’adesione implicita ricavabile dalla costante applicazione delle condizioni collettive, o la richiesta del lavoratore di applicazione integrale del contratto. Resta ferma la rilevanza dei minimi collettivi come parametro dell’art. 36 Cost.',
  },
  {
    id: 'lav-l2-026',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'L’assemblea dei lavoratori in azienda (art. 20 dello Statuto):',
    opzioni: [
      'Non è retribuita in alcun caso',
      'Richiede l’autorizzazione dell’Ispettorato del lavoro',
      'Può essere convocata solo dal datore',
      'Si tiene fuori dall’orario di lavoro, ovvero durante l’orario nel limite di dieci ore annue retribuite, salvo migliori condizioni collettive',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 20 dello Statuto riconosce ai lavoratori il diritto di riunirsi in assemblea nell’unità produttiva, su convocazione singola o congiunta delle rappresentanze sindacali aziendali, fuori orario di lavoro ovvero durante l’orario nei limiti di dieci ore annue retribuite, salvo condizioni migliori previste dai contratti collettivi.',
  },
  {
    id: 'lav-l2-027',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il licenziamento del dirigente:',
    opzioni: [
      'È libero, salvo il diritto all’indennità supplementare prevista dalla contrattazione collettiva in caso di recesso ingiustificato, e salve le ipotesi di nullità',
      'Richiede sempre la giusta causa',
      'Comporta la reintegrazione in caso di illegittimità',
      'È soggetto alla disciplina limitativa della l. n. 604/1966',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il dirigente è escluso dal campo di applicazione della l. n. 604/1966 quanto alla necessità di giusta causa o giustificato motivo, ma i contratti collettivi di categoria prevedono la nozione di «giustificatezza» e l’indennità supplementare in caso di recesso ingiustificato. Restano applicabili le regole sulla forma scritta, sul procedimento disciplinare se il recesso ha natura disciplinare, e sulle nullità.',
  },
  {
    id: 'lav-l2-028',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Nel pubblico impiego privatizzato, l’annullamento del licenziamento illegittimo comporta:',
    opzioni: [
      'La sola tutela indennitaria come nel settore privato',
      'La reintegrazione nel posto di lavoro, secondo l’art. 63 del d.lgs. n. 165/2001, non trovando applicazione il contratto a tutele crescenti',
      'La riassunzione a discrezione dell’amministrazione',
      'La conversione in rapporto a termine',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 63, comma 2, del d.lgs. n. 165/2001 impone al giudice di annullare il licenziamento e di condannare l’amministrazione alla reintegrazione e al risarcimento nei limiti previsti. La giurisprudenza ha escluso l’applicabilità del d.lgs. n. 23/2015 al pubblico impiego, valorizzando la specialità del regime e il vincolo del concorso pubblico.',
  },
  {
    id: 'lav-l2-029',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Nel pubblico impiego, la violazione delle norme sul contratto a termine:',
    opzioni: [
      'Comporta la sola sanzione amministrativa',
      'Comporta la conversione a tempo indeterminato',
      'Non comporta la costituzione di rapporti a tempo indeterminato, ma il diritto al risarcimento del danno, secondo l’art. 36 del d.lgs. n. 165/2001',
      'Non produce alcuna conseguenza',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 36, comma 5, del d.lgs. n. 165/2001 esclude la conversione, in ragione del vincolo costituzionale del concorso, e riconosce il diritto al risarcimento del danno. Le Sezioni Unite (n. 5072/2016) hanno individuato il criterio nell’indennità dell’art. 32, comma 5, della l. n. 183/2010, con esonero dall’onere della prova del danno, fatta salva la prova di un pregiudizio maggiore.',
  },
  {
    id: 'lav-l2-030',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La cassa integrazione guadagni straordinaria può essere richiesta per:',
    opzioni: [
      'Qualunque riduzione di fatturato',
      'La cessazione definitiva dell’attività, in via ordinaria',
      'Eventi meteorologici transitori',
      'Riorganizzazione aziendale, crisi aziendale e contratto di solidarietà',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 21 del d.lgs. n. 148/2015 individua tre causali: riorganizzazione aziendale, crisi aziendale con esclusione dei casi di cessazione dell’attività salvo le ipotesi transitorie previste dalla legge, e contratto di solidarietà. Ciascuna causale ha durata massima propria, entro il limite complessivo di ventiquattro mesi in un quinquennio mobile.',
  },
  {
    id: 'lav-l2-031',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il contratto di solidarietà difensivo:',
    opzioni: [
      'Prevede una riduzione dell’orario di lavoro per evitare, in tutto o in parte, la riduzione o la dichiarazione di esubero del personale',
      'Comporta la cessazione del rapporto',
      'È riservato al settore agricolo',
      'Prevede l’assunzione di nuovi lavoratori',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il contratto di solidarietà difensivo consiste in un accordo con le rappresentanze sindacali che riduce l’orario per evitare esuberi, con integrazione salariale a carico dell’INPS. La riduzione media oraria non può superare il sessanta per cento dell’orario giornaliero, settimanale o mensile, e per ciascun lavoratore la riduzione complessiva non può eccedere il settanta per cento nell’arco dell’intero periodo.',
  },
  {
    id: 'lav-l2-032',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'L’infortunio in itinere è indennizzabile dall’INAIL:',
    opzioni: [
      'Sempre, in qualunque circostanza',
      'Quando si verifica nel normale percorso di andata e ritorno fra abitazione e luogo di lavoro, salvo interruzioni o deviazioni non necessitate',
      'Solo se avvenuto con mezzo aziendale',
      'Mai',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 12 del d.lgs. n. 38/2000 ha codificato la tutela dell’infortunio in itinere, riferendola al normale percorso di andata e ritorno dal luogo di abitazione a quello di lavoro, a quello di consumazione abituale dei pasti e fra due luoghi di lavoro. L’indennizzabilità è esclusa in caso di interruzione o deviazione non necessitate o estranee al lavoro, e di uso non necessitato del mezzo privato.',
  },
  {
    id: 'lav-l2-033',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il danno differenziale nella responsabilità del datore per infortunio:',
    opzioni: [
      'È risarcibile solo in caso di dolo',
      'Non è risarcibile',
      'È la parte di danno che eccede l’indennizzo INAIL, risarcibile dal datore quando ricorra la sua responsabilità',
      'Coincide con l’indennizzo INAIL',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’indennizzo dell’INAIL copre il danno biologico secondo tabelle e le conseguenze patrimoniali, ma non integralmente il pregiudizio subito. Il lavoratore può agire verso il datore per il danno differenziale — la parte eccedente — e per il danno complementare, cioè le voci non coperte dall’assicurazione, quale il danno morale, quando ricorra la responsabilità civile del datore ai sensi degli artt. 2087 c.c. e 10 del d.P.R. n. 1124/1965.',
  },
  {
    id: 'lav-l2-034',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il licenziamento per giustificato motivo oggettivo, nelle imprese soggette all’art. 18 dello Statuto:',
    opzioni: [
      'Richiede il consenso delle organizzazioni sindacali',
      'È vietato',
      'Non richiede alcuna procedura preventiva',
      'È preceduto dalla comunicazione all’Ispettorato del lavoro e al lavoratore, con procedura di conciliazione, per i rapporti anteriori al 7 marzo 2015',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 7 della l. n. 604/1966, come riformato dalla l. n. 92/2012, impone una procedura preventiva davanti all’Ispettorato territoriale del lavoro. La procedura non si applica ai rapporti soggetti al d.lgs. n. 23/2015, né ai licenziamenti per superamento del comporto, per inidoneità fisica o sopravvenuta o intimati durante il periodo di prova.',
  },
  {
    id: 'lav-l2-035',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La sopravvenuta inidoneità fisica del lavoratore:',
    opzioni: [
      'Impone al datore di verificare la possibilità di adibire il lavoratore a mansioni compatibili, anche inferiori, e di adottare accomodamenti ragionevoli in caso di disabilità',
      'Comporta la risoluzione automatica del rapporto',
      'Rileva solo se permanente e totale',
      'Giustifica sempre il licenziamento',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La giurisprudenza impone la verifica di soluzioni alternative prima del recesso. In caso di disabilità opera inoltre l’art. 3, comma 3-bis, del d.lgs. n. 216/2003, che recepisce l’obbligo europeo di accomodamenti ragionevoli: il datore deve adottare le misure organizzative appropriate, salvo che comportino un onere finanziario sproporzionato, e ne deve dare prova.',
  },
  {
    id: 'lav-l2-036',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Le quote di riserva per i lavoratori disabili (l. n. 68/1999) impongono ai datori con più di cinquanta dipendenti:',
    opzioni: [
      'Nessun obbligo',
      'L’assunzione di lavoratori disabili nella misura del sette per cento dei lavoratori occupati',
      'L’assunzione di due disabili in ogni caso',
      'Il solo versamento di un contributo esonerativo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 3 della l. n. 68/1999 gradua l’obbligo: sette per cento dei lavoratori occupati per i datori con più di cinquanta dipendenti, due lavoratori per quelli da cinquantuno a centocinquanta, un lavoratore per quelli da quindici a trentacinque. Sono previsti esoneri parziali con contributo e la possibilità di convenzioni con i servizi per l’impiego.',
  },
  {
    id: 'lav-l2-037',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Le molestie, ai sensi del codice delle pari opportunità:',
    opzioni: [
      'Richiedono la prova del danno biologico',
      'Sono rilevanti solo se penalmente sanzionate',
      'Sono considerate discriminazioni, e consistono in comportamenti indesiderati posti in essere per ragioni connesse al sesso, con lo scopo o l’effetto di violare la dignità e creare un clima ostile',
      'Rilevano solo se provenienti dal datore',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 26 del d.lgs. n. 198/2006 qualifica come discriminazioni le molestie e le molestie sessuali, definite come comportamenti indesiderati aventi lo scopo o l’effetto di violare la dignità della lavoratrice o del lavoratore e di creare un clima intimidatorio, ostile, degradante, umiliante o offensivo. Sono nulli gli atti ritorsivi adottati in conseguenza del rifiuto o della sottomissione.',
  },
  {
    id: 'lav-l2-038',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il mobbing, nella ricostruzione giurisprudenziale, richiede:',
    opzioni: [
      'La sola percezione soggettiva del lavoratore',
      'Una previsione espressa di legge',
      'Un singolo atto vessatorio',
      'Una pluralità di condotte, protratte nel tempo, unificate da un intento persecutorio e produttive di un danno alla salute o alla personalità del lavoratore',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Manca una definizione legislativa: la figura è ricondotta all’art. 2087 c.c. La Cassazione richiede la molteplicità e la sistematicità dei comportamenti, la loro durata, l’evento lesivo della salute o della personalità, il nesso causale e l’intento persecutorio unificante. In mancanza dell’intento, resta configurabile lo straining o comunque la responsabilità per violazione dell’obbligo di sicurezza.',
  },
  {
    id: 'lav-l2-039',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il demansionamento illegittimo può fondare il risarcimento:',
    opzioni: [
      'Del danno patrimoniale da perdita di professionalità e del danno non patrimoniale, che però non è in re ipsa e va allegato e provato, anche per presunzioni',
      'Automaticamente, in misura pari alla retribuzione',
      'Solo se accompagnato da un licenziamento',
      'Del solo danno patrimoniale documentato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Le Sezioni Unite (n. 6572/2006) hanno escluso l’automatismo risarcitorio: il danno professionale, biologico o esistenziale non è conseguenza automatica del demansionamento, ma va allegato e provato dal lavoratore, potendo la prova essere raggiunta anche per presunzioni sulla base di qualità e quantità dell’attività, durata del demansionamento e frustrazione delle aspettative professionali.',
  },
  {
    id: 'lav-l2-040',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'L’accordo individuale di modifica delle mansioni in pejus (art. 2103, comma 6, c.c.):',
    opzioni: [
      'È vietato',
      'È consentito nelle sedi protette, nell’interesse del lavoratore alla conservazione dell’occupazione, all’acquisizione di diversa professionalità o al miglioramento delle condizioni di vita',
      'È libero e informale',
      'Richiede l’autorizzazione dell’Ispettorato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il comma 6 dell’art. 2103 c.c. ammette accordi individuali di modifica delle mansioni, della categoria legale, del livello e della relativa retribuzione, purché stipulati nelle sedi protette e nell’interesse del lavoratore alla conservazione dell’occupazione, all’acquisizione di una diversa professionalità o al miglioramento delle condizioni di vita. Il lavoratore può farsi assistere da un rappresentante sindacale o da un avvocato.',
  },
  {
    id: 'lav-l2-041',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il patto di prova apposto a un contratto a termine:',
    opzioni: [
      'Dura sempre sei mesi',
      'Non incontra limiti',
      'Deve essere proporzionato alla durata del contratto e alle mansioni, secondo la disciplina introdotta dal d.lgs. n. 104/2022',
      'È vietato',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il d.lgs. n. 104/2022, attuativo della direttiva sulle condizioni di lavoro trasparenti e prevedibili, ha stabilito che nel rapporto a termine la durata della prova sia stabilita in misura proporzionale alla durata del contratto e alle mansioni, e che in caso di rinnovo per le stesse mansioni non possa essere apposto un nuovo periodo di prova.',
  },
  {
    id: 'lav-l2-042',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Gli obblighi informativi verso il lavoratore, dopo il d.lgs. n. 104/2022:',
    opzioni: [
      'Sono adempiuti con la sola busta paga',
      'Sono facoltativi',
      'Riguardano solo la retribuzione',
      'Comprendono un ampio novero di informazioni sulle condizioni di lavoro, da fornire per iscritto entro termini determinati, inclusi i sistemi decisionali automatizzati impiegati per la gestione del rapporto',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il decreto ha ampliato il contenuto dell’informativa dovuta al lavoratore, imponendo l’indicazione di elementi quali durata della prova, formazione, ferie, procedure di licenziamento, orario e sua prevedibilità. L’art. 1-bis impone inoltre un’informativa specifica sull’utilizzo di sistemi decisionali o di monitoraggio automatizzati, con previo confronto sindacale.',
  },
  {
    id: 'lav-l2-043',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La retribuzione del lavoratore va corrisposta:',
    opzioni: [
      'Con strumenti di pagamento tracciabili, essendo vietato il pagamento in contanti della retribuzione',
      'Solo tramite assegno circolare',
      'Con cadenza esclusivamente mensile',
      'Anche in contanti, senza limiti',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La l. n. 205/2017 ha vietato il pagamento della retribuzione in contanti, imponendo l’uso di strumenti tracciabili quali bonifico, strumenti di pagamento elettronico o assegno, con sanzione amministrativa a carico del datore. La firma della busta paga non costituisce prova dell’avvenuto pagamento.',
  },
  {
    id: 'lav-l2-044',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il principio di onnicomprensività della retribuzione:',
    opzioni: [
      'È un principio generale inderogabile',
      'Non ha valore di regola generale: la base di calcolo degli istituti indiretti e differiti è quella individuata dalla legge o dalla contrattazione collettiva',
      'Impone di includere ogni emolumento in ogni istituto',
      'Vale solo per il TFR',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La giurisprudenza ha escluso che esista un principio generale di onnicomprensività: la determinazione della base di calcolo di ciascun istituto è rimessa alla disciplina legale o collettiva specifica. Fa eccezione l’art. 2120 c.c., che per il TFR adotta una nozione ampia comprensiva di tutte le somme corrisposte in dipendenza del rapporto, salvo diversa previsione collettiva.',
  },
  {
    id: 'lav-l2-045',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'I riders e i lavoratori delle piattaforme digitali:',
    opzioni: [
      'Non godono di alcuna tutela',
      'Sono sempre lavoratori autonomi puri',
      'Se etero-organizzati sono soggetti alla disciplina del lavoro subordinato; ai collaboratori autonomi si applicano comunque le tutele minime del capo V-bis del d.lgs. n. 81/2015',
      'Sono sempre lavoratori subordinati',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il d.l. n. 101/2019 ha inciso sull’art. 2 e ha introdotto il capo V-bis del d.lgs. n. 81/2015, che detta livelli minimi di tutela per i lavoratori autonomi delle piattaforme: forma scritta e informativa, divieto di retribuzione a cottimo, copertura INAIL, tutela contro la discriminazione algoritmica. La Cassazione, con la sent. n. 1663/2020, ha ricondotto i riders di quel caso all’art. 2.',
  },
  {
    id: 'lav-l2-046',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il lavoro autonomo non imprenditoriale gode, ai sensi della l. n. 81/2017:',
    opzioni: [
      'Della disciplina integrale del lavoro subordinato',
      'Solo di agevolazioni fiscali',
      'Di nessuna tutela specifica',
      'Di tutele contro le clausole e le condotte abusive, dei termini di pagamento della disciplina sui ritardi, e di alcune tutele in caso di gravidanza, malattia e infortunio',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il capo I della l. n. 81/2017 introduce tutele per i lavoratori autonomi non imprenditori: nullità delle clausole che attribuiscono al committente la facoltà di modificare unilateralmente le condizioni o di recedere senza congruo preavviso, applicazione della disciplina sui ritardi di pagamento, sospensione del rapporto in caso di gravidanza, malattia e infortunio, e tutela della proprietà intellettuale sui contributi originali.',
  },
  {
    id: 'lav-l2-047',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il licenziamento ritorsivo:',
    opzioni: [
      'È nullo per illiceità del motivo, che deve essere unico e determinante, con onere della prova a carico del lavoratore',
      'Comporta la sola indennità risarcitoria',
      'È valido se accompagnato da un motivo formale legittimo',
      'È una specie di licenziamento per giusta causa',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La ritorsione è ricondotta al motivo illecito determinante ex art. 1345 c.c., richiamato dall’art. 1418 c.c.: il licenziamento è nullo, con reintegrazione piena a prescindere dal requisito dimensionale. La giurisprudenza richiede che l’intento ritorsivo sia l’unica ragione effettiva del recesso e ne pone l’onere probatorio sul lavoratore, sia pure con l’ausilio di presunzioni.',
  },
  {
    id: 'lav-l2-048',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La rinuncia del lavoratore al termine di decadenza per impugnare il licenziamento:',
    opzioni: [
      'È valida se anteriore alla scadenza',
      'È inefficace se preventiva, potendo la decadenza essere oggetto di rinuncia solo dopo che si è verificata',
      'È sempre nulla',
      'Richiede la forma dell’atto pubblico',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La decadenza è posta a tutela di un interesse generale alla certezza dei rapporti: la rinuncia preventiva sarebbe elusiva della funzione dell’istituto. È invece ammissibile la rinuncia successiva, quando la decadenza si sia già verificata e il datore vi abbia interesse, con i limiti che l’art. 2113 c.c. pone alle rinunce su diritti indisponibili.',
  },
  {
    id: 'lav-l2-049',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La revoca del licenziamento, se effettuata entro quindici giorni dalla comunicazione dell’impugnazione:',
    opzioni: [
      'È inefficace',
      'Non produce effetti senza il consenso del lavoratore',
      'Comporta il ripristino del rapporto senza soluzione di continuità, con diritto alla retribuzione maturata nel periodo, e non si applicano i regimi sanzionatori',
      'Comporta comunque la reintegrazione con risarcimento',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 18, comma 10, dello Statuto e l’art. 5 del d.lgs. n. 23/2015 prevedono che la revoca tempestiva ripristini il rapporto senza soluzione di continuità, con diritto alla retribuzione maturata nel periodo precedente la revoca e senza applicazione dei regimi sanzionatori. La revoca è atto unilaterale e non necessita dell’accettazione del lavoratore.',
  },
  {
    id: 'lav-l2-050',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'L’aliunde perceptum, nel calcolo del risarcimento da licenziamento illegittimo:',
    opzioni: [
      'È detraibile solo su richiesta del lavoratore',
      'Comprende anche la NASpI percepita',
      'Non è mai detraibile',
      'È detraibile dal risarcimento nel regime della reintegrazione, ed è onere del datore allegarne e provarne gli elementi',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Nella tutela reintegratoria attenuata l’art. 18, comma 4, dello Statuto impone la detrazione di quanto il lavoratore ha percepito per lo svolgimento di altre attività lavorative. L’onere di allegazione e prova grava sul datore, pur potendo il giudice esercitare poteri istruttori officiosi. Nella reintegrazione piena il risarcimento non può comunque essere inferiore a cinque mensilità.',
  },
  {
    id: 'lav-l2-051',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il lavoratore reintegrato può optare per l’indennità sostitutiva della reintegrazione:',
    opzioni: [
      'Pari a quindici mensilità dell’ultima retribuzione di riferimento per il TFR, richiedibile entro trenta giorni dalla comunicazione del deposito della sentenza o dall’invito del datore a riprendere servizio',
      'Pari a ventiquattro mensilità',
      'In qualunque momento, senza limiti',
      'Pari a sei mensilità, entro sessanta giorni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 18, comma 3, dello Statuto e l’art. 2, comma 3, del d.lgs. n. 23/2015 attribuiscono al lavoratore la facoltà di chiedere, in sostituzione della reintegrazione, un’indennità pari a quindici mensilità, non assoggettata a contribuzione. La richiesta va formulata entro trenta giorni dalla comunicazione del deposito della sentenza o dall’invito a riprendere servizio, se anteriore, e determina la risoluzione del rapporto.',
  },
  {
    id: 'lav-l2-052',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La procedura di licenziamento collettivo si articola in:',
    opzioni: [
      'Una sola comunicazione finale',
      'Una fase sindacale, con comunicazione e possibile esame congiunto, e una eventuale fase amministrativa davanti all’autorità competente',
      'Un procedimento davanti al giudice',
      'Un accordo individuale con ciascun lavoratore',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Gli artt. 4 e 24 della l. n. 223/1991 disciplinano la comunicazione preventiva alle rappresentanze sindacali e alle associazioni di categoria, con l’indicazione dei motivi e del numero dei lavoratori interessati, l’esame congiunto su richiesta e, in caso di mancato accordo, l’ulteriore fase davanti all’autorità amministrativa. I vizi della comunicazione o della procedura incidono sulla legittimità dei recessi.',
  },
  {
    id: 'lav-l2-053',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La violazione dei criteri di scelta nel licenziamento collettivo comporta, per i rapporti soggetti all’art. 18 dello Statuto:',
    opzioni: [
      'La conversione in licenziamento individuale',
      'La sola indennità risarcitoria',
      'La reintegrazione con risarcimento nei limiti delle dodici mensilità',
      'La nullità dell’intera procedura',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 5, comma 3, della l. n. 223/1991, come modificato dalla l. n. 92/2012, distingue: il licenziamento intimato senza forma scritta è inefficace con reintegrazione piena; la violazione dei criteri di scelta comporta la reintegrazione attenuata; la violazione delle procedure dà luogo alla sola tutela indennitaria. Nel regime del d.lgs. n. 23/2015 anche la violazione dei criteri è sanzionata in via indennitaria.',
  },
  {
    id: 'lav-l2-054',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il collocamento obbligatorio, in caso di mancata assunzione, consente:',
    opzioni: [
      'Nessun rimedio giurisdizionale',
      'La sola richiesta di risarcimento',
      'La sola sanzione amministrativa',
      'Al lavoratore avente diritto di agire per l’accertamento del proprio diritto all’assunzione, con sentenza costitutiva del rapporto',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La giurisprudenza riconosce al soggetto avente diritto all’assunzione obbligatoria un’azione volta a ottenere una pronuncia costitutiva del rapporto ai sensi dell’art. 2932 c.c., oltre al risarcimento del danno da ritardata assunzione. Restano ferme le sanzioni amministrative previste dalla l. n. 68/1999 a carico del datore inadempiente.',
  },
  {
    id: 'lav-l2-055',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il lavoratore che rifiuti la prestazione per inadempimento del datore agli obblighi di sicurezza:',
    opzioni: [
      'Può legittimamente astenersi invocando l’eccezione di inadempimento, purché il rifiuto sia proporzionato e conforme a buona fede',
      'Deve comunque prestare l’attività e agire in giudizio',
      'Perde il diritto alla retribuzione in ogni caso',
      'Commette sempre inadempimento',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il rifiuto trova fondamento nell’art. 1460 c.c., applicabile anche al rapporto di lavoro: l’astensione è legittima se l’inadempimento datoriale è grave e il rifiuto non è contrario a buona fede, con valutazione comparativa dei comportamenti. Il lavoratore conserva il diritto alla retribuzione, versando il datore in mora accipiendi.',
  },
  {
    id: 'lav-l2-056',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il diritto alla disconnessione:',
    opzioni: [
      'Non è previsto dall’ordinamento',
      'È riconosciuto nel lavoro agile, dovendo l’accordo individuare le misure tecniche e organizzative che assicurano la disconnessione dalle strumentazioni di lavoro',
      'Si applica solo ai dirigenti',
      'Vieta ogni comunicazione aziendale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 19 della l. n. 81/2017, integrato dalle successive modifiche, impone che l’accordo di lavoro agile individui i tempi di riposo e le misure tecniche e organizzative necessarie ad assicurare la disconnessione del lavoratore dalle strumentazioni tecnologiche. Il diritto è funzionale al rispetto dei limiti di durata dell’orario e alla tutela della salute.',
  },
  {
    id: 'lav-l2-057',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il congedo di paternità obbligatorio:',
    opzioni: [
      'Spetta solo se la madre vi rinuncia',
      'Non esiste',
      'È riconosciuto per un periodo determinato dalla legge, fruibile nei mesi intorno alla nascita, ed è autonomo rispetto al congedo della madre',
      'Coincide con il congedo di maternità',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il d.lgs. n. 105/2022, attuativo della direttiva sull’equilibrio fra attività professionale e vita familiare, ha reso strutturale il congedo obbligatorio del padre lavoratore, fruibile nei mesi che precedono e seguono la nascita e indipendente dal diritto della madre. Il decreto ha inoltre potenziato i congedi parentali e le tutele contro le discriminazioni legate alla genitorialità.',
  },
  {
    id: 'lav-l2-058',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La certificazione dei contratti di lavoro:',
    opzioni: [
      'È obbligatoria per tutti i contratti',
      'È rilasciata dall’INPS',
      'Rende incontestabile la qualificazione del rapporto',
      'Ha efficacia giuridica fino a sentenza di merito, e l’impugnazione presuppone il previo tentativo obbligatorio di conciliazione davanti alla commissione che ha certificato',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Gli artt. 75 ss. del d.lgs. n. 276/2003 attribuiscono agli atti di certificazione piena forza legale fino a sentenza di merito, impugnabili per erronea qualificazione, difformità fra programma negoziale certificato e successiva attuazione, o vizi del consenso. Il ricorso richiede il previo esperimento del tentativo di conciliazione davanti alla commissione di certificazione.',
  },
  {
    id: 'lav-l2-059',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Il lavoratore che agisce per differenze retributive deve:',
    opzioni: [
      'Allegare e provare i fatti costitutivi del proprio diritto, fra cui lo svolgimento delle mansioni e la corretta qualificazione contrattuale invocata',
      'Limitarsi a produrre le buste paga',
      'Attendere l’accertamento dell’Ispettorato del lavoro',
      'Provare solo l’esistenza del rapporto',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Vale la regola generale dell’art. 2697 c.c.: chi vuole far valere un diritto deve provarne i fatti costitutivi. Nel giudizio per differenze retributive il lavoratore deve quindi provare le mansioni concretamente svolte e i presupposti dell’inquadramento rivendicato, secondo il consueto procedimento trifasico di accertamento, individuazione della declaratoria contrattuale e raffronto.',
  },
  {
    id: 'lav-l2-060',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'Le somme dovute al lavoratore, in caso di ritardo:',
    opzioni: [
      'Producono i soli interessi legali',
      'Danno diritto agli interessi e alla rivalutazione monetaria, che il giudice può riconoscere anche d’ufficio',
      'Non producono alcun accessorio',
      'Sono rivalutate solo se richiesto in appello',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 429, comma 3, c.p.c. impone al giudice, nel condannare al pagamento di somme di denaro per crediti di lavoro, di determinare anche gli interessi e il maggior danno da svalutazione monetaria, senza necessità di specifica domanda. I due accessori sono cumulabili, secondo l’orientamento consolidato successivo alla sent. n. 1 del 1986 delle Sezioni Unite.',
  },
  {
    id: 'lav-l2-061',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La sentenza di primo grado che accoglie la domanda del lavoratore:',
    opzioni: [
      'È esecutiva solo se munita di formula speciale',
      'Non è esecutiva fino al passaggio in giudicato',
      'È provvisoriamente esecutiva, e l’esecuzione può essere sospesa dal giudice d’appello solo per gravi motivi',
      'È sempre sospesa dall’appello',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 431 c.p.c. attribuisce provvisoria esecutività alle sentenze di condanna a favore del lavoratore, eseguibili anche con la sola copia del dispositivo. Il giudice d’appello può disporre la sospensione, con ordinanza non impugnabile, quando dall’esecuzione possa derivare un gravissimo danno, secondo la disciplina dettata dallo stesso articolo.',
  },
  {
    id: 'lav-l2-062',
    materia: 'Diritto del lavoro',
    difficolta: 2,
    domanda:
      'La conciliazione in sede sindacale:',
    opzioni: [
      'Richiede l’omologazione del tribunale',
      'È riservata al pubblico impiego',
      'È inefficace',
      'È una delle sedi protette che rendono definitive le rinunce e transazioni del lavoratore, purché sia effettiva l’assistenza sindacale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2113, ultimo comma, c.c. sottrae all’invalidità le conciliazioni intervenute nelle sedi di cui agli artt. 185, 410, 411, 412-ter e 412-quater c.p.c., fra cui quella sindacale. La giurisprudenza richiede però che l’assistenza sia effettiva e consapevole: la mera presenza formale di un sindacalista non basta a garantire la genuinità della rinuncia.',
  },
];
