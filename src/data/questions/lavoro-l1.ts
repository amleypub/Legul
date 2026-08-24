import type { QuizQuestion } from '../../types';

/**
 * Diritto del lavoro — Unità 1 · Fondamenti.
 *
 * Materia a scelta dell'orale (d.l. 100/2026, conv. l. 145/2026).
 * Il livello copre l'ossatura: subordinazione e sue alternative, obblighi
 * delle parti, mansioni e retribuzione, orario e sospensioni, estinzione
 * del rapporto, diritto sindacale.
 *
 * Punto su cui i testi non aggiornati sbagliano: il d.lgs. 23/2015 sul
 * contratto a tutele crescenti è tuttora in vigore — il referendum
 * abrogativo dell'8-9 giugno 2025 non ha raggiunto il quorum — ma è
 * stato più volte inciso dalla Corte costituzionale.
 */
export const lavoroL1: QuizQuestion[] = [
  {
    id: 'lav-l1-001',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Secondo l’art. 2094 c.c., è prestatore di lavoro subordinato chi:',
    opzioni: [
      'Riceve un compenso periodico da un committente',
      'Si obbliga a collaborare nell’impresa prestando il proprio lavoro alle dipendenze e sotto la direzione dell’imprenditore',
      'Svolge la propria attività all’interno dei locali aziendali',
      'È iscritto a un albo professionale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il tratto qualificante è l’assoggettamento al potere direttivo, organizzativo e disciplinare del datore. Gli indici sussidiari elaborati dalla giurisprudenza — orario predeterminato, continuità, assenza di rischio economico, retribuzione fissa, inserimento nell’organizzazione — rilevano quando la subordinazione non emerge nettamente, ma restano appunto sussidiari rispetto all’etero-direzione.',
  },
  {
    id: 'lav-l1-002',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il contratto d’opera dell’art. 2222 c.c. si distingue dal lavoro subordinato perché:',
    opzioni: [
      'Ha necessariamente forma scritta',
      'Non può avere ad oggetto un servizio',
      'Il prestatore compie l’opera con lavoro prevalentemente proprio e senza vincolo di subordinazione',
      'Il compenso è sempre più elevato',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2222 c.c. definisce il lavoro autonomo come impegno a compiere un’opera o un servizio, verso corrispettivo, con lavoro prevalentemente proprio e senza vincolo di subordinazione nei confronti del committente. Il rischio dell’organizzazione grava sul prestatore, che risponde del risultato e non della mera messa a disposizione delle energie lavorative.',
  },
  {
    id: 'lav-l1-003',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Alle collaborazioni «etero-organizzate» dell’art. 2 del d.lgs. n. 81/2015 si applica:',
    opzioni: [
      'Solo la disciplina previdenziale',
      'Nessuna disciplina, trattandosi di rapporti atipici',
      'La disciplina del lavoro autonomo puro',
      'La disciplina del rapporto di lavoro subordinato',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La norma estende la disciplina del lavoro subordinato ai rapporti di collaborazione che si concretano in prestazioni di lavoro prevalentemente personali e continuative, le cui modalità di esecuzione sono organizzate dal committente. Dopo il d.l. n. 101/2019 non è più richiesto che l’organizzazione riguardi anche tempi e luogo di lavoro; la Cassazione (n. 1663/2020, riders) ha qualificato la norma come «di disciplina» e non di fattispecie.',
  },
  {
    id: 'lav-l1-004',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Quanto può durare al massimo il periodo di prova?',
    opzioni: [
      'Il termine è fissato dalla contrattazione collettiva e, per i dirigenti, non può eccedere i sei mesi',
      'Tre mesi, inderogabilmente',
      'Non esiste un limite',
      'Un anno in ogni caso',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2096 c.c. rinvia agli usi e alla contrattazione collettiva; il limite massimo di sei mesi per i dirigenti è fissato dall’art. 10 della l. n. 604/1966. Il patto di prova deve risultare da atto scritto anteriore o contestuale all’assunzione, a pena di nullità, e deve indicare in modo specifico le mansioni oggetto della prova.',
  },
  {
    id: 'lav-l1-005',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Durante il periodo di prova il recesso:',
    opzioni: [
      'Richiede sempre la giusta causa',
      'È libero per entrambe le parti, salvo che sia motivato da ragioni illecite o discriminatorie',
      'È vietato al datore di lavoro',
      'Richiede il preavviso di trenta giorni',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2096, comma 3, c.c. consente il recesso senza obbligo di preavviso né di motivazione. Il recesso resta però sindacabile quando sia intimato per un motivo illecito determinante o discriminatorio, o quando la prova non sia stata effettivamente consentita: in tali casi il lavoratore può chiedere l’accertamento della nullità e la prosecuzione del rapporto.',
  },
  {
    id: 'lav-l1-006',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il potere di variare le mansioni del lavoratore (art. 2103 c.c.) consente al datore:',
    opzioni: [
      'Di assegnare mansioni superiori solo in via definitiva',
      'Di assegnare qualunque mansione, anche inferiore',
      'Di assegnare mansioni riconducibili allo stesso livello e categoria legale di inquadramento delle ultime effettivamente svolte',
      'Di modificare le mansioni solo con il consenso scritto del lavoratore',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2103 c.c., riscritto dal d.lgs. n. 81/2015, ha sostituito il criterio dell’equivalenza professionale con quello formale del medesimo livello e categoria legale. Il comma 2 consente l’assegnazione a mansioni inferiori, appartenenti al livello immediatamente inferiore e nella stessa categoria legale, in caso di modifica degli assetti organizzativi incidente sulla posizione del lavoratore.',
  },
  {
    id: 'lav-l1-007',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'In caso di assegnazione a mansioni superiori, il lavoratore ha diritto:',
    opzioni: [
      'Alla sola differenza retributiva, senza mai promozione',
      'Alla promozione immediata',
      'A nulla, se l’assegnazione è stata disposta per esigenze aziendali',
      'Al trattamento corrispondente e, salvo diversa volontà, alla promozione definitiva dopo il periodo fissato dai contratti collettivi o comunque non superiore a sei mesi continuativi',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2103, comma 7, c.c. prevede il diritto al trattamento corrispondente all’attività svolta e l’assegnazione definitiva dopo il periodo fissato dai contratti collettivi, o comunque non superiore a sei mesi continuativi, salvo che l’assegnazione sia avvenuta in sostituzione di lavoratore assente con diritto alla conservazione del posto e salva diversa volontà del lavoratore.',
  },
  {
    id: 'lav-l1-008',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Le rinunce e transazioni del lavoratore su diritti derivanti da norme inderogabili:',
    opzioni: [
      'Non sono valide, e sono impugnabili entro sei mesi dalla cessazione del rapporto o dalla rinuncia se successiva',
      'Sono nulle in modo assoluto e insanabile',
      'Richiedono l’omologazione del tribunale',
      'Sono sempre valide se scritte',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2113 c.c. prevede l’invalidità delle rinunce e transazioni su diritti derivanti da disposizioni inderogabili di legge o di contratti collettivi, con impugnazione entro sei mesi a pena di decadenza. L’ultimo comma esclude dall’invalidità le conciliazioni intervenute nelle sedi protette indicate dal codice di procedura civile, che sono perciò definitive.',
  },
  {
    id: 'lav-l1-009',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'La retribuzione «sufficiente» di cui all’art. 36 Cost., in assenza di contratto collettivo applicabile:',
    opzioni: [
      'Non è azionabile in giudizio',
      'È determinata dal giudice, che di regola assume come parametro i minimi tabellari della contrattazione collettiva del settore',
      'Coincide con il salario minimo legale',
      'È rimessa alla libera pattuizione delle parti',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 36 Cost. è ritenuto immediatamente precettivo: il giudice può dichiarare nulla la clausola sul trattamento economico ex art. 1419 c.c. e determinare la retribuzione, assumendo come parametro i minimi della contrattazione collettiva di categoria. La Cassazione ha precisato che il parametro non è vincolante e può essere disatteso motivatamente se il contratto collettivo non assicura una retribuzione dignitosa.',
  },
  {
    id: 'lav-l1-010',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il trattamento di fine rapporto si calcola:',
    opzioni: [
      'In misura liberamente pattuita fra le parti',
      'Su un’unica mensilità per ogni anno di servizio',
      'Sommando per ciascun anno una quota pari alla retribuzione annua divisa per 13,5, con rivalutazione annuale del fondo accantonato',
      'Sul solo minimo tabellare, senza rivalutazione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2120 c.c. prevede l’accantonamento annuo di una quota pari alla retribuzione dovuta per l’anno divisa per 13,5, con rivalutazione del fondo accantonato al 31 dicembre dell’anno precedente secondo un tasso composto dell’1,5 per cento in misura fissa e del 75 per cento dell’aumento dell’indice ISTAT dei prezzi al consumo.',
  },
  {
    id: 'lav-l1-011',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'L’anticipazione del TFR può essere richiesta:',
    opzioni: [
      'Solo alla cessazione del rapporto',
      'Solo dai lavoratori con qualifica dirigenziale',
      'In qualunque momento e per qualunque motivo',
      'Una sola volta nel corso del rapporto, con almeno otto anni di servizio, nella misura massima del settanta per cento e per le causali previste dalla legge',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2120, commi 6 ss., c.c. subordina l’anticipazione ad almeno otto anni di servizio presso lo stesso datore, la limita al settanta per cento del maturato e a una sola richiesta nel corso del rapporto, e la riserva alle causali indicate: spese sanitarie per terapie e interventi straordinari, acquisto della prima casa per sé o per i figli, congedi parentali e formativi. Le richieste sono soddisfatte entro limiti percentuali annui.',
  },
  {
    id: 'lav-l1-012',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'La durata media settimanale dell’orario di lavoro, comprese le ore di straordinario:',
    opzioni: [
      'Non può superare le quarantotto ore, calcolate su un periodo di riferimento non superiore a quattro mesi',
      'Non può superare le quaranta ore in ogni singola settimana',
      'Non incontra limiti se il lavoratore acconsente',
      'È fissata in sessanta ore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il d.lgs. n. 66/2003 fissa la durata normale in quaranta ore settimanali (art. 3) e stabilisce che la durata media, comprensiva degli straordinari, non superi le quarantotto ore per ogni periodo di sette giorni, calcolata su un periodo non superiore a quattro mesi, elevabile dalla contrattazione collettiva fino a sei o dodici mesi in presenza di ragioni obiettive, tecniche o organizzative.',
  },
  {
    id: 'lav-l1-013',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il riposo giornaliero minimo previsto dal d.lgs. n. 66/2003 è di:',
    opzioni: [
      'Otto ore consecutive',
      'Undici ore consecutive',
      'Dodici ore',
      'Sei ore',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 7 del d.lgs. n. 66/2003 riconosce al lavoratore undici ore di riposo consecutivo ogni ventiquattro ore. L’art. 9 prevede inoltre un riposo settimanale di almeno ventiquattro ore consecutive, di regola coincidente con la domenica, da cumulare con il riposo giornaliero e calcolato come media in un periodo non superiore a quattordici giorni.',
  },
  {
    id: 'lav-l1-014',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il periodo minimo di ferie annuali retribuite:',
    opzioni: [
      'È di sei settimane',
      'È di due settimane, monetizzabili',
      'È di quattro settimane, di cui due da godere nell’anno di maturazione e le restanti entro diciotto mesi dal termine dell’anno di maturazione',
      'È rimesso interamente alla contrattazione collettiva',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 10 del d.lgs. n. 66/2003 riconosce almeno quattro settimane, di cui due consecutive su richiesta del lavoratore da godere nell’anno di maturazione e le restanti nei diciotto mesi successivi al termine dell’anno di maturazione. Il periodo minimo non è monetizzabile, salvo il caso di cessazione del rapporto.',
  },
  {
    id: 'lav-l1-015',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'L’obbligo di sicurezza dell’art. 2087 c.c. impone al datore di lavoro di adottare:',
    opzioni: [
      'Le misure economicamente più convenienti',
      'Le misure indicate dal medico competente, e nulla più',
      'Solo le misure espressamente previste dalla normativa antinfortunistica',
      'Le misure che, secondo la particolarità del lavoro, l’esperienza e la tecnica, sono necessarie a tutelare l’integrità fisica e la personalità morale dei prestatori',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2087 c.c. è norma di chiusura del sistema prevenzionistico: obbliga a un adeguamento continuo alle migliori conoscenze tecniche disponibili, andando oltre l’elenco delle misure tipizzate dal d.lgs. n. 81/2008. Non configura però una responsabilità oggettiva: occorre pur sempre la colpa, cioè la violazione di una regola cautelare specifica o generica.',
  },
  {
    id: 'lav-l1-016',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il documento di valutazione dei rischi (DVR):',
    opzioni: [
      'È obbligo indelegabile del datore di lavoro, insieme alla nomina del responsabile del servizio di prevenzione e protezione',
      'È richiesto solo alle imprese con più di quindici dipendenti',
      'Ha natura facoltativa',
      'Può essere delegato a un consulente esterno',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 17 del d.lgs. n. 81/2008 individua due obblighi non delegabili: la valutazione di tutti i rischi con la conseguente elaborazione del documento e la designazione del responsabile del servizio di prevenzione e protezione. Tutti gli altri obblighi possono essere delegati nel rispetto dei requisiti di forma, contenuto e pubblicità dell’art. 16, che comunque non esclude l’obbligo di vigilanza del delegante.',
  },
  {
    id: 'lav-l1-017',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il licenziamento individuale deve essere:',
    opzioni: [
      'Comunicato oralmente, se motivato',
      'Comunicato per iscritto, con contestuale indicazione dei motivi, a pena di inefficacia',
      'Preceduto dall’autorizzazione dell’Ispettorato del lavoro',
      'Motivato solo su richiesta del lavoratore',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2 della l. n. 604/1966, come modificato dalla l. n. 92/2012, impone la forma scritta e la contestuale comunicazione dei motivi: è caduta la vecchia regola per cui i motivi andavano indicati solo su richiesta. Il licenziamento orale è radicalmente inefficace e dà luogo alla tutela reintegratoria piena, in ogni regime e a prescindere dalle dimensioni del datore.',
  },
  {
    id: 'lav-l1-018',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Che cosa distingue la giusta causa dal giustificato motivo soggettivo di licenziamento?',
    opzioni: [
      'Il giustificato motivo soggettivo riguarda ragioni organizzative',
      'La giusta causa riguarda solo i dirigenti',
      'La giusta causa è la causa che non consente la prosecuzione neppure provvisoria del rapporto e legittima il recesso senza preavviso; il giustificato motivo soggettivo è un notevole inadempimento che consente il recesso con preavviso',
      'Non c’è alcuna differenza pratica',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La giusta causa dell’art. 2119 c.c. consente il recesso in tronco perché lede irrimediabilmente il vincolo fiduciario; il giustificato motivo soggettivo dell’art. 3 della l. n. 604/1966 consiste in un notevole inadempimento degli obblighi contrattuali e impone il preavviso. Il giustificato motivo oggettivo attiene invece a ragioni inerenti all’attività produttiva e all’organizzazione del lavoro.',
  },
  {
    id: 'lav-l1-019',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Entro quale termine il licenziamento va impugnato?',
    opzioni: [
      'Cinque anni dalla cessazione del rapporto',
      'Trenta giorni, senza altri adempimenti',
      'Un anno dalla comunicazione',
      'Sessanta giorni dalla comunicazione, con successivo deposito del ricorso entro centottanta giorni',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 6 della l. n. 604/1966, come modificato dalla l. n. 183/2010, prevede una doppia decadenza: impugnazione stragiudiziale entro sessanta giorni dalla ricezione della comunicazione, e deposito del ricorso giudiziale o comunicazione della richiesta di conciliazione o arbitrato entro i successivi centottanta giorni, pena l’inefficacia dell’impugnazione.',
  },
  {
    id: 'lav-l1-020',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'A quali rapporti si applica il contratto a tutele crescenti (d.lgs. n. 23/2015)?',
    opzioni: [
      'Ai lavoratori assunti con contratto a tempo indeterminato a decorrere dal 7 marzo 2015, oltre ai casi di conversione e di superamento delle soglie dimensionali',
      'Ai soli dirigenti',
      'Ai soli contratti a termine',
      'A tutti i lavoratori, indipendentemente dalla data di assunzione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il decreto si applica agli operai, impiegati e quadri assunti a tempo indeterminato dalla sua entrata in vigore, ai casi di conversione di un contratto a termine o di apprendistato successivi a tale data e, per tutti i dipendenti, quando il datore superi le soglie dimensionali dell’art. 18 dello Statuto in conseguenza di assunzioni successive. Il referendum abrogativo dell’8-9 giugno 2025 non ha raggiunto il quorum: il decreto è tuttora vigente.',
  },
  {
    id: 'lav-l1-021',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il licenziamento discriminatorio:',
    opzioni: [
      'È annullabile solo se il lavoratore prova il dolo del datore',
      'È nullo a prescindere dalla motivazione formalmente addotta e dal numero di dipendenti, con reintegrazione e risarcimento non inferiore a cinque mensilità',
      'Comporta la sola indennità risarcitoria',
      'È valido se accompagnato da un giustificato motivo oggettivo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La nullità del licenziamento discriminatorio è sancita dall’art. 3 della l. n. 108/1990 e ribadita dall’art. 2 del d.lgs. n. 23/2015: opera qualunque sia il motivo formalmente addotto e indipendentemente dal requisito dimensionale, con reintegrazione nel posto di lavoro e risarcimento commisurato all’ultima retribuzione di riferimento per il TFR, in misura non inferiore a cinque mensilità.',
  },
  {
    id: 'lav-l1-022',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Le dimissioni del lavoratore, di regola:',
    opzioni: [
      'Devono essere convalidate dal giudice',
      'Sono valide in qualunque forma, anche orale',
      'Devono essere effettuate con modalità telematiche secondo le procedure di legge, a pena di inefficacia',
      'Richiedono l’accettazione del datore di lavoro',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 26 del d.lgs. n. 151/2015 impone che dimissioni e risoluzione consensuale siano effettuate con modalità telematiche su appositi moduli, pena l’inefficacia; il lavoratore può revocarle entro sette giorni. Restano fuori dalla procedura le dimissioni rese in sede protetta e quelle della lavoratrice o del lavoratore nel periodo di tutela della genitorialità, soggette a convalida presso l’Ispettorato del lavoro.',
  },
  {
    id: 'lav-l1-023',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il collegato lavoro (l. n. 203/2024) ha disciplinato le dimissioni «per fatti concludenti», prevedendo che:',
    opzioni: [
      'L’assenza ingiustificata comporti sempre il licenziamento per giusta causa',
      'Il rapporto prosegua senza conseguenze',
      'Il lavoratore debba comunque compilare il modulo telematico',
      'L’assenza ingiustificata protratta oltre il termine previsto dal contratto collettivo o, in mancanza, oltre quindici giorni comporti la risoluzione del rapporto per volontà del lavoratore, previa comunicazione all’Ispettorato del lavoro',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 19 della l. n. 203/2024 ha introdotto la fattispecie: superato il termine di assenza ingiustificata fissato dal contratto collettivo o, in mancanza, quello legale, il rapporto si intende risolto per volontà del lavoratore, con perdita delle tutele contro il licenziamento e della NASpI. La disposizione non si applica se il lavoratore dimostra l’impossibilità di comunicare per forza maggiore o per fatto imputabile al datore.',
  },
  {
    id: 'lav-l1-024',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il contratto di lavoro a tempo determinato, in mancanza di causali:',
    opzioni: [
      'Non può superare i dodici mesi',
      'Non può superare i sei mesi',
      'Non incontra limiti di durata',
      'È vietato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 19 del d.lgs. n. 81/2015 consente il termine liberamente apposto fino a dodici mesi. Oltre tale soglia, e comunque entro il limite complessivo di ventiquattro mesi, occorre una delle condizioni previste dalla legge: quelle indicate dai contratti collettivi, quelle individuate dalle parti nei casi e nei termini consentiti dalla normativa vigente, oppure le esigenze di sostituzione di altri lavoratori.',
  },
  {
    id: 'lav-l1-025',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il termine apposto al contratto di lavoro deve risultare:',
    opzioni: [
      'Da accordo verbale confermato da testimoni',
      'Da atto scritto, salvo i rapporti di durata non superiore a dodici giorni',
      'Da qualsiasi documento, anche successivo',
      'Solo dalla comunicazione al centro per l’impiego',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 19, comma 4, del d.lgs. n. 81/2015 richiede la forma scritta ad substantiam per l’apposizione del termine, con eccezione dei rapporti di durata non superiore a dodici giorni. Copia dell’atto va consegnata al lavoratore entro cinque giorni dall’inizio della prestazione; in mancanza di forma scritta il contratto si considera a tempo indeterminato.',
  },
  {
    id: 'lav-l1-026',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Nel contratto di lavoro a tempo parziale, il lavoro supplementare:',
    opzioni: [
      'Trasforma automaticamente il rapporto in tempo pieno',
      'È vietato',
      'È ammesso nei limiti e con le conseguenze retributive stabiliti dai contratti collettivi e, in mancanza, entro il limite legale, con maggiorazione',
      'È liberamente esigibile dal datore senza compenso aggiuntivo',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 6 del d.lgs. n. 81/2015 rimette ai contratti collettivi la disciplina del lavoro supplementare; in mancanza, il datore può richiederlo entro il limite del venticinque per cento delle ore settimanali concordate, con una maggiorazione del quindici per cento della retribuzione oraria globale di fatto, comprensiva dell’incidenza sugli istituti indiretti e differiti.',
  },
  {
    id: 'lav-l1-027',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Le clausole elastiche nel part-time:',
    opzioni: [
      'Sono vietate',
      'Non richiedono forma scritta',
      'Sono liberamente modificabili dal datore senza compenso',
      'Consentono al datore di variare la collocazione temporale o la durata della prestazione, alle condizioni fissate dalla legge e dai contratti collettivi',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 6 del d.lgs. n. 81/2015 consente alle parti di pattuire per iscritto clausole elastiche relative alla variazione della collocazione temporale o alla variazione in aumento della durata della prestazione, con preavviso di almeno due giorni lavorativi e con diritto a specifiche compensazioni. Il rifiuto del lavoratore di concordarle non integra giustificato motivo di licenziamento.',
  },
  {
    id: 'lav-l1-028',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Nella somministrazione di lavoro, il lavoratore è dipendente:',
    opzioni: [
      'Dell’agenzia somministratrice, ma svolge l’attività sotto la direzione e il controllo dell’utilizzatore',
      'Di entrambi in solido, con doppio contratto',
      'Di nessuno dei due, essendo un lavoratore autonomo',
      'Dell’utilizzatore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La somministrazione è un contratto trilatero: il rapporto di lavoro intercorre con l’agenzia autorizzata, mentre il potere direttivo e di controllo è esercitato dall’utilizzatore. L’art. 35 del d.lgs. n. 81/2015 impone la parità di trattamento economico e normativo rispetto ai dipendenti dell’utilizzatore di pari livello, e pone a carico di quest’ultimo la responsabilità solidale per retribuzioni e contributi.',
  },
  {
    id: 'lav-l1-029',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'L’apprendistato è un contratto:',
    opzioni: [
      'A tempo determinato con causale obbligatoria',
      'A tempo indeterminato finalizzato alla formazione e all’occupazione dei giovani, articolato in tre tipologie',
      'Di lavoro autonomo',
      'Riservato ai lavoratori over cinquanta',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 41 del d.lgs. n. 81/2015 definisce l’apprendistato come contratto di lavoro a tempo indeterminato finalizzato alla formazione e all’occupazione dei giovani, articolato in apprendistato per la qualifica e il diploma professionale, apprendistato professionalizzante e apprendistato di alta formazione e ricerca. Al termine del periodo formativo ciascuna parte può recedere con preavviso.',
  },
  {
    id: 'lav-l1-030',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'In caso di trasferimento d’azienda, il rapporto di lavoro:',
    opzioni: [
      'Prosegue con il cedente',
      'Si estingue e va ricostituito con il cessionario',
      'Continua con il cessionario e il lavoratore conserva tutti i diritti che ne derivano',
      'Prosegue solo se il lavoratore vi consente',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2112 c.c. sancisce la continuazione automatica del rapporto con il cessionario e la conservazione di tutti i diritti che ne derivano, senza necessità di consenso del lavoratore. Cedente e cessionario sono obbligati in solido per i crediti che il lavoratore aveva al tempo del trasferimento; il trasferimento non costituisce di per sé motivo di licenziamento.',
  },
  {
    id: 'lav-l1-031',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il trasferimento del lavoratore da un’unità produttiva a un’altra:',
    opzioni: [
      'Richiede sempre il consenso scritto del lavoratore',
      'È vietato per i lavoratori con anzianità superiore a cinque anni',
      'È libero',
      'Può avvenire solo per comprovate ragioni tecniche, organizzative e produttive',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2103, ultimo comma, c.c. subordina il trasferimento a comprovate ragioni tecniche, organizzative e produttive. Il datore non è tenuto a comunicare contestualmente i motivi, ma deve indicarli su richiesta del lavoratore e provarli in giudizio; il sindacato del giudice riguarda l’effettività delle ragioni, non la loro opportunità.',
  },
  {
    id: 'lav-l1-032',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Prima di irrogare una sanzione disciplinare, il datore deve:',
    opzioni: [
      'Contestare l’addebito per iscritto e sentire il lavoratore a sua difesa, che può farsi assistere da un rappresentante sindacale',
      'Comunicare la sanzione con effetto immediato',
      'Attendere l’esito di un eventuale procedimento penale',
      'Ottenere il parere dell’Ispettorato del lavoro',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 7 dello Statuto dei lavoratori impone la previa affissione del codice disciplinare, la contestazione scritta e specifica dell’addebito e il diritto di difesa, con termine di almeno cinque giorni e facoltà di farsi assistere da un rappresentante dell’associazione sindacale cui il lavoratore aderisce o conferisce mandato. La procedura si applica anche al licenziamento disciplinare.',
  },
  {
    id: 'lav-l1-033',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'I principi che governano il procedimento disciplinare comprendono:',
    opzioni: [
      'La segretezza della contestazione',
      'L’immediatezza della contestazione, la specificità dell’addebito e l’immutabilità dei fatti contestati',
      'La possibilità di sanzionare fatti non contestati, se emersi in seguito',
      'La retroattività del codice disciplinare',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La giurisprudenza ha enucleato tre principi cardine: immediatezza, da valutare in senso relativo e in rapporto alla complessità dell’accertamento; specificità, per consentire una difesa effettiva; immutabilità, che vieta di fondare la sanzione su fatti diversi da quelli contestati. La violazione comporta l’illegittimità della sanzione o del licenziamento.',
  },
  {
    id: 'lav-l1-034',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il licenziamento per superamento del periodo di comporto:',
    opzioni: [
      'Richiede la previa contestazione dell’addebito',
      'È un licenziamento disciplinare',
      'Costituisce fattispecie autonoma di recesso, che presuppone il superamento del periodo di conservazione del posto in caso di malattia',
      'È sempre nullo',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2110 c.c. riconosce il diritto alla conservazione del posto per il periodo stabilito dalla legge, dai contratti collettivi, dagli usi o secondo equità; superato tale periodo il datore può recedere. La giurisprudenza qualifica la fattispecie come autonoma, distinta dal giustificato motivo oggettivo e da quello soggettivo, con onere del datore di indicare i giorni di assenza computati.',
  },
  {
    id: 'lav-l1-035',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Durante il periodo di prova e in caso di malattia, il computo del comporto:',
    opzioni: [
      'È rimesso alla discrezionalità del datore',
      'Non opera mai',
      'Include ogni assenza, anche quelle dovute a infortunio sul lavoro imputabile al datore',
      'Non include le assenze riconducibili a una responsabilità del datore per violazione degli obblighi di sicurezza',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La giurisprudenza esclude dal computo le assenze causate da una malattia riconducibile alla violazione, da parte del datore, dell’obbligo di sicurezza dell’art. 2087 c.c. o alla nocività delle mansioni: sarebbe contraddittorio che il datore traesse vantaggio dalla propria inadempienza. Grava sul lavoratore la prova del nesso causale fra l’ambiente di lavoro e la patologia.',
  },
  {
    id: 'lav-l1-036',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il congedo di maternità obbligatorio:',
    opzioni: [
      'Dura cinque mesi, con possibilità di flessibilità nella collocazione secondo le condizioni previste dalla legge',
      'È facoltativo',
      'Spetta solo alle lavoratrici a tempo indeterminato',
      'Dura tre mesi complessivi',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il d.lgs. n. 151/2001 prevede cinque mesi di astensione obbligatoria, di regola due mesi prima e tre dopo il parto, con possibilità di posticipare l’inizio o di fruire dell’intero periodo dopo il parto, previa attestazione sanitaria. Nel periodo di gravidanza e fino al compimento di un anno di età del bambino opera inoltre il divieto di licenziamento.',
  },
  {
    id: 'lav-l1-037',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il divieto di licenziamento della lavoratrice madre:',
    opzioni: [
      'Non opera nelle imprese con meno di quindici dipendenti',
      'Opera dall’inizio della gravidanza fino al compimento di un anno di età del bambino, salvo le eccezioni tassative previste dalla legge',
      'Opera solo durante il congedo obbligatorio',
      'È derogabile con il consenso della lavoratrice',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 54 del d.lgs. n. 151/2001 vieta il licenziamento dall’inizio della gravidanza fino al termine del congedo di maternità e fino a un anno di età del bambino, con le eccezioni della colpa costituente giusta causa, della cessazione dell’attività dell’azienda, dell’ultimazione della prestazione per cui la lavoratrice fu assunta e dell’esito negativo della prova. Il licenziamento intimato in violazione è nullo.',
  },
  {
    id: 'lav-l1-038',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'L’art. 39 Cost., quanto all’efficacia del contratto collettivo:',
    opzioni: [
      'Attribuisce al Governo il potere di estendere i contratti',
      'Ne prevede l’efficacia erga omnes, attuata dal legislatore',
      'Prevede un sistema di registrazione dei sindacati mai attuato, sicché il contratto collettivo di diritto comune vincola in via di principio i soli iscritti',
      'Vieta la contrattazione collettiva',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La seconda parte dell’art. 39 Cost., che subordinava l’efficacia erga omnes alla registrazione dei sindacati e alla rappresentanza unitaria proporzionale, è rimasta inattuata. Il contratto collettivo è quindi atto di autonomia privata, vincolante per gli iscritti alle organizzazioni stipulanti; l’estensione di fatto avviene attraverso il rinvio del contratto individuale, l’adesione implicita e il parametro dell’art. 36 Cost.',
  },
  {
    id: 'lav-l1-039',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Dopo il referendum del 1995 e la sent. n. 231/2013 della Corte costituzionale, le rappresentanze sindacali aziendali possono essere costituite:',
    opzioni: [
      'Da qualunque gruppo di lavoratori, senza requisiti',
      'Solo dai sindacati confederali maggiormente rappresentativi',
      'Solo dai sindacati firmatari del contratto collettivo applicato',
      'Anche dai sindacati che, pur non firmatari, abbiano partecipato alla negoziazione relativa agli stessi contratti applicati nell’unità produttiva',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte costituzionale, con la sent. n. 231/2013, ha dichiarato illegittimo l’art. 19 dello Statuto nella parte in cui non consentiva la costituzione di r.s.a. ai sindacati che, pur non firmatari, avessero partecipato alla negoziazione. Il criterio della sottoscrizione, se applicato in modo rigido, avrebbe consentito al datore di scegliere i propri interlocutori sindacali.',
  },
  {
    id: 'lav-l1-040',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'La condotta antisindacale è repressa:',
    opzioni: [
      'Con il procedimento speciale dell’art. 28 dello Statuto, su ricorso degli organismi locali delle associazioni sindacali nazionali',
      'Con denuncia all’Ispettorato del lavoro',
      'Con arbitrato obbligatorio',
      'Con il rito ordinario di cognizione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 28 dello Statuto prevede un procedimento d’urgenza davanti al tribunale in funzione di giudice del lavoro, su ricorso degli organismi locali delle associazioni sindacali nazionali che vi abbiano interesse. Il giudice ordina la cessazione del comportamento e la rimozione degli effetti; l’inottemperanza è sanzionata penalmente dall’art. 650 c.p.',
  },
  {
    id: 'lav-l1-041',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Nei servizi pubblici essenziali, lo sciopero:',
    opzioni: [
      'È vietato',
      'È soggetto a preavviso, indicazione della durata e garanzia delle prestazioni indispensabili, con vigilanza di una Commissione di garanzia',
      'È libero, senza alcun adempimento',
      'Richiede l’autorizzazione del prefetto',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La l. n. 146/1990 impone il preavviso minimo, l’indicazione della durata e delle modalità, l’esperimento delle procedure di raffreddamento e conciliazione e l’erogazione delle prestazioni indispensabili individuate dagli accordi o dalla regolamentazione provvisoria. La Commissione di garanzia valuta gli accordi e può deliberare sanzioni; il Governo può ordinare la precettazione.',
  },
  {
    id: 'lav-l1-042',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Lo sciopero, nel nostro ordinamento, è configurato come:',
    opzioni: [
      'Un illecito civile scriminato',
      'Un potere del sindacato',
      'Un diritto individuale a esercizio collettivo, la cui titolarità spetta al singolo lavoratore',
      'Un dovere di solidarietà',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 40 Cost. riconosce lo sciopero come diritto: la titolarità è individuale, l’esercizio necessariamente collettivo. Ne discende che la proclamazione sindacale non è requisito di legittimità e che il singolo può astenersi anche in dissenso dal sindacato. L’esercizio del diritto sospende le obbligazioni corrispettive, senza integrare inadempimento.',
  },
  {
    id: 'lav-l1-043',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il divieto di indagini sulle opinioni (art. 8 dello Statuto) vieta al datore:',
    opzioni: [
      'Di richiedere il curriculum vitae',
      'Di verificare i titoli di studio',
      'Ogni forma di colloquio con il candidato',
      'Di effettuare indagini sulle opinioni politiche, religiose o sindacali e su fatti non rilevanti ai fini della valutazione dell’attitudine professionale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 8 dello Statuto vieta al datore, anche a mezzo di terzi, di effettuare indagini sulle opinioni politiche, religiose o sindacali del lavoratore e su fatti non rilevanti ai fini della valutazione dell’attitudine professionale, sia ai fini dell’assunzione sia nel corso del rapporto. La violazione è sanzionata penalmente e i dati eventualmente raccolti sono inutilizzabili.',
  },
  {
    id: 'lav-l1-044',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Gli impianti audiovisivi e gli strumenti da cui derivi un controllo a distanza dei lavoratori:',
    opzioni: [
      'Possono essere impiegati solo per esigenze organizzative e produttive, per la sicurezza del lavoro o per la tutela del patrimonio aziendale, previo accordo sindacale o autorizzazione amministrativa',
      'Sono sempre vietati',
      'Richiedono solo l’informativa ai lavoratori',
      'Sono liberamente installabili',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 4 dello Statuto, riscritto dal d.lgs. n. 151/2015, subordina l’impiego alla ricorrenza di una delle finalità tipiche e all’accordo con le rappresentanze sindacali o, in mancanza, all’autorizzazione dell’Ispettorato del lavoro. Il comma 2 esclude dalla procedura gli strumenti utilizzati per rendere la prestazione e quelli di registrazione degli accessi; il comma 3 subordina comunque l’utilizzabilità dei dati a un’adeguata informativa.',
  },
  {
    id: 'lav-l1-045',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'I controlli difensivi occulti sono ammessi:',
    opzioni: [
      'Sempre, purché proporzionati',
      'Solo quando siano diretti ad accertare condotte illecite del lavoratore, in presenza di un fondato sospetto già insorto, e non si traducano nel controllo dell’adempimento della prestazione',
      'Mai',
      'Solo previa autorizzazione del giudice',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Cassazione ha ammesso i controlli difensivi «in senso stretto», mirati alla tutela di beni estranei al rapporto o alla verifica di condotte illecite, purché il sospetto sia insorto prima dell’attivazione del controllo e questo sia ex post, non generalizzato e proporzionato. Restano soggetti all’art. 4 dello Statuto i controlli che investono, sia pure indirettamente, l’esatto adempimento della prestazione.',
  },
  {
    id: 'lav-l1-046',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il patto di non concorrenza dell’art. 2125 c.c. è nullo se:',
    opzioni: [
      'Riguarda un lavoratore non dirigente',
      'Prevede una penale',
      'Non risulta da atto scritto, non prevede un corrispettivo o non è contenuto entro determinati limiti di oggetto, tempo e luogo',
      'È stipulato dopo l’assunzione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 2125 c.c. richiede forma scritta, corrispettivo a favore del lavoratore e limiti determinati di oggetto, tempo e luogo. La durata non può eccedere cinque anni per i dirigenti e tre per gli altri lavoratori; se pattuita per un periodo maggiore, si riduce automaticamente. Il corrispettivo deve essere determinato o determinabile e non simbolico.',
  },
  {
    id: 'lav-l1-047',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il divieto di discriminazione nell’accesso al lavoro riguarda:',
    opzioni: [
      'Solo l’appartenenza sindacale',
      'Solo la cittadinanza',
      'Solo il sesso',
      'Sesso, razza, origine etnica, religione, convinzioni personali, disabilità, età e orientamento sessuale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il quadro è dato dal d.lgs. n. 216/2003 (religione, convinzioni personali, handicap, età, orientamento sessuale), dal d.lgs. n. 215/2003 (razza e origine etnica) e dal codice delle pari opportunità, d.lgs. n. 198/2006, per le discriminazioni di genere. Si distinguono discriminazione diretta e indiretta, e sono previste agevolazioni probatorie a favore di chi lamenta la discriminazione.',
  },
  {
    id: 'lav-l1-048',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Nel giudizio antidiscriminatorio, l’onere della prova:',
    opzioni: [
      'È agevolato: chi agisce può dedurre elementi di fatto, anche statistici, dai quali si presuma l’esistenza della discriminazione, e spetta al convenuto provare l’insussistenza',
      'Grava sempre sul datore',
      'È rimesso alla valutazione equitativa del giudice',
      'Grava integralmente sul lavoratore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 28 del d.lgs. n. 150/2011 e l’art. 40 del d.lgs. n. 198/2006 prevedono un regime probatorio agevolato di derivazione europea: il ricorrente deve fornire elementi di fatto, desunti anche da dati statistici, precisi e concordanti, che rendano verosimile la discriminazione; grava allora sul convenuto l’onere di provare l’insussistenza della disparità di trattamento.',
  },
  {
    id: 'lav-l1-049',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il lavoro agile, disciplinato dalla l. n. 81/2017:',
    opzioni: [
      'È una tipologia contrattuale autonoma',
      'È una modalità di esecuzione del rapporto di lavoro subordinato, stabilita mediante accordo fra le parti, senza precisi vincoli di orario o luogo',
      'Comporta la trasformazione del rapporto in lavoro autonomo',
      'È imposto unilateralmente dal datore',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il lavoro agile non è un tipo contrattuale ma una modalità di esecuzione del rapporto subordinato, concordata fra le parti anche con forme di organizzazione per fasi, cicli e obiettivi e senza precisi vincoli di orario o di luogo. Restano fermi i limiti di durata massima dell’orario, il diritto alla disconnessione e la parità di trattamento economico e normativo.',
  },
  {
    id: 'lav-l1-050',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'La NASpI spetta ai lavoratori che:',
    opzioni: [
      'Siano stati licenziati per giusta causa, in via esclusiva',
      'Si dimettono volontariamente, in ogni caso',
      'Abbiano perduto involontariamente l’occupazione, con i requisiti contributivi previsti dalla legge; le dimissioni rilevano solo se per giusta causa o nei casi equiparati',
      'Abbiano raggiunto l’età pensionabile',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il d.lgs. n. 22/2015 riconosce la NASpI a chi ha perduto involontariamente l’occupazione, in presenza dello stato di disoccupazione e dei requisiti contributivi. Sono equiparate le dimissioni per giusta causa e quelle rese nel periodo tutelato di maternità e paternità, oltre alla risoluzione consensuale intervenuta nella procedura di conciliazione obbligatoria.',
  },
  {
    id: 'lav-l1-051',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'L’indennità sostitutiva del preavviso:',
    opzioni: [
      'È dovuta solo dal lavoratore',
      'Sostituisce il TFR',
      'Non è mai dovuta',
      'È dovuta dalla parte che recede senza rispettare il termine di preavviso, salvo il recesso per giusta causa',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2118 c.c. consente il recesso dal rapporto a tempo indeterminato dando il preavviso nei termini stabiliti dai contratti collettivi, dagli usi o secondo equità; in mancanza, la parte recedente deve corrispondere l’indennità equivalente. Il recesso per giusta causa ex art. 2119 c.c. esclude l’obbligo di preavviso.',
  },
  {
    id: 'lav-l1-052',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'I crediti retributivi del lavoratore si prescrivono, di regola, in:',
    opzioni: [
      'Cinque anni',
      'Tre anni',
      'Un anno',
      'Dieci anni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2948, n. 4, c.c. prevede la prescrizione quinquennale per tutto ciò che deve pagarsi periodicamente ad anno o in termini più brevi, categoria in cui rientra la retribuzione. Termini più brevi valgono per specifiche voci; il TFR, in quanto credito che matura alla cessazione, si prescrive in cinque anni dalla cessazione del rapporto.',
  },
  {
    id: 'lav-l1-053',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Le controversie individuali di lavoro sono soggette:',
    opzioni: [
      'Al rito ordinario di cognizione',
      'Al rito del lavoro degli artt. 409 ss. c.p.c., caratterizzato da oralità, concentrazione e immediatezza',
      'Al rito sommario di cognizione',
      'All’arbitrato obbligatorio',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Gli artt. 409 ss. c.p.c. disciplinano un rito speciale ispirato a oralità, concentrazione e immediatezza, con poteri istruttori d’ufficio del giudice, provvisoria esecutività delle sentenze di condanna a favore del lavoratore e regime particolare delle preclusioni, che impone alle parti di dedurre nei primi atti tutti i mezzi di prova.',
  },
  {
    id: 'lav-l1-054',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il tentativo di conciliazione nelle controversie di lavoro privato è:',
    opzioni: [
      'Riservato al pubblico impiego',
      'Obbligatorio a pena di improcedibilità',
      'Di regola facoltativo, salvo le ipotesi in cui la legge lo prevede come obbligatorio',
      'Vietato',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La l. n. 183/2010 ha reso il tentativo di conciliazione facoltativo nel lavoro privato, superando la precedente obbligatorietà. Resta obbligatorio in casi specifici, fra cui la procedura preventiva davanti all’Ispettorato del lavoro per il licenziamento per giustificato motivo oggettivo nelle imprese sopra soglia rispetto ai rapporti soggetti all’art. 18 dello Statuto.',
  },
  {
    id: 'lav-l1-055',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il datore di lavoro che occupa più di quindici dipendenti nell’unità produttiva:',
    opzioni: [
      'Deve costituire obbligatoriamente le r.s.a.',
      'Non può stipulare contratti a termine',
      'È esente dalla disciplina limitativa dei licenziamenti',
      'Rientra nel campo di applicazione dell’art. 18 dello Statuto per i rapporti costituiti prima del 7 marzo 2015',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La soglia dei quindici dipendenti nell’unità produttiva o nel comune, o dei sessanta complessivi, delimita l’applicazione dell’art. 18 dello Statuto ai rapporti anteriori al 7 marzo 2015; al di sotto opera la tutela obbligatoria dell’art. 8 della l. n. 604/1966. Per i rapporti successivi si applica invece il d.lgs. n. 23/2015, che differenzia le tutele in ragione delle stesse soglie.',
  },
  {
    id: 'lav-l1-056',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Nella tutela obbligatoria dell’art. 8 della l. n. 604/1966, il datore può scegliere fra:',
    opzioni: [
      'Riassunzione del lavoratore entro tre giorni o corresponsione di un’indennità compresa fra un minimo e un massimo di mensilità',
      'Solo il pagamento del TFR',
      'Solo la reintegrazione',
      'Reintegrazione e risarcimento integrale',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 8 della l. n. 604/1966 prevede l’obbligo alternativo di riassumere il lavoratore entro tre giorni o di risarcire il danno con un’indennità compresa fra 2,5 e 6 mensilità dell’ultima retribuzione globale di fatto, elevabile in ragione dell’anzianità e delle dimensioni dell’impresa. È il regime tipico delle piccole imprese, oggetto di uno dei quesiti referendari del giugno 2025.',
  },
  {
    id: 'lav-l1-057',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il licenziamento intimato in forma orale:',
    opzioni: [
      'È valido se il lavoratore ne prende atto',
      'È inefficace e comporta la tutela reintegratoria piena, indipendentemente dal numero di dipendenti',
      'Comporta la sola indennità di due mensilità',
      'È sanabile con successiva comunicazione scritta',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La forma scritta è richiesta ad substantiam: il licenziamento orale è radicalmente inefficace. Sia l’art. 18, comma 1, dello Statuto sia l’art. 2 del d.lgs. n. 23/2015 riconducono l’ipotesi alla tutela reintegratoria piena, che opera a prescindere dal requisito dimensionale. Grava sul lavoratore l’onere di provare l’esistenza dell’estromissione, non la sua forma.',
  },
  {
    id: 'lav-l1-058',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'L’obbligo di repêchage impone al datore, prima del licenziamento per giustificato motivo oggettivo:',
    opzioni: [
      'Di attendere sei mesi',
      'Di offrire al lavoratore una somma di denaro',
      'Di verificare l’impossibilità di ricollocare il lavoratore in altre posizioni disponibili nell’organizzazione aziendale',
      'Di consultare le organizzazioni sindacali',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’obbligo, di elaborazione giurisprudenziale, impone di verificare la possibilità di adibire il lavoratore ad altre mansioni disponibili al momento del licenziamento, anche inferiori alla luce del nuovo art. 2103 c.c. La prova dell’impossibilità grava sul datore; secondo la giurisprudenza consolidata il lavoratore non ha un onere di allegazione delle posizioni disponibili.',
  },
  {
    id: 'lav-l1-059',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il licenziamento collettivo presuppone:',
    opzioni: [
      'Il consenso delle organizzazioni sindacali',
      'La cessazione totale dell’attività',
      'Almeno tre licenziamenti in qualunque arco temporale',
      'L’intenzione di effettuare almeno cinque licenziamenti nell’arco di centoventi giorni, in ciascuna unità produttiva o in più unità nella stessa provincia, da parte di datori con più di quindici dipendenti',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 24 della l. n. 223/1991 individua la fattispecie nell’intenzione di effettuare almeno cinque licenziamenti nell’arco di centoventi giorni, in conseguenza di riduzione o trasformazione di attività o di lavoro, da parte di imprese che occupano più di quindici dipendenti. La procedura prevede comunicazione alle rappresentanze sindacali, esame congiunto ed eventuale fase amministrativa.',
  },
  {
    id: 'lav-l1-060',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'I criteri di scelta dei lavoratori nel licenziamento collettivo sono, in mancanza di accordo sindacale:',
    opzioni: [
      'Carichi di famiglia, anzianità e esigenze tecnico-produttive e organizzative, in concorso fra loro',
      'La sola anzianità di servizio',
      'L’ordine alfabetico',
      'Rimessi alla discrezionalità del datore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 5 della l. n. 223/1991 stabilisce che, in mancanza di diversi criteri concordati con i sindacati, l’individuazione avvenga nel rispetto dei carichi di famiglia, dell’anzianità e delle esigenze tecnico-produttive e organizzative, in concorso fra loro. I criteri vanno applicati all’intero complesso aziendale, salvo che le esigenze organizzative giustifichino la limitazione a un reparto.',
  },
  {
    id: 'lav-l1-061',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'La cassa integrazione guadagni ordinaria è destinata a fronteggiare:',
    opzioni: [
      'La cessazione definitiva dell’attività',
      'Situazioni aziendali dovute a eventi transitori e non imputabili all’impresa o ai dipendenti, comprese le situazioni temporanee di mercato',
      'Il licenziamento collettivo',
      'La crisi irreversibile dell’impresa',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il d.lgs. n. 148/2015 riserva la CIGO alle situazioni aziendali dovute a eventi transitori e non imputabili all’impresa o ai dipendenti, incluse le intemperie stagionali, e alle situazioni temporanee di mercato. La CIGS riguarda invece riorganizzazione, crisi aziendale e contratto di solidarietà, e presuppone la prospettiva di continuazione dell’attività.',
  },
  {
    id: 'lav-l1-062',
    materia: 'Diritto del lavoro',
    difficolta: 1,
    domanda:
      'Il committente che affida un appalto di opere o servizi:',
    opzioni: [
      'Risponde solo se l’appalto è illecito',
      'Non ha alcuna responsabilità verso i dipendenti dell’appaltatore',
      'È obbligato in solido con l’appaltatore, entro il limite temporale di legge, per i trattamenti retributivi e i contributi dovuti ai lavoratori impiegati nell’appalto',
      'Risponde solo per i danni da infortunio',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 29, comma 2, del d.lgs. n. 276/2003 pone la responsabilità solidale del committente con l’appaltatore e con gli eventuali subappaltatori, entro il limite di due anni dalla cessazione dell’appalto, per i trattamenti retributivi, comprese le quote di TFR, e per i contributi previdenziali e i premi assicurativi. È esclusa la responsabilità per le sanzioni civili, di cui risponde il solo responsabile dell’inadempimento.',
  },
];
