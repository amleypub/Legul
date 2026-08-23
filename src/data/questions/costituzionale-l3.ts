import type { QuizQuestion } from '../../types';

/**
 * Diritto costituzionale — Unità 3 · Avanzato.
 *
 * Qui si entra nel terreno dove la commissione distingue chi ha studiato
 * il manuale da chi ha letto le sentenze: tecniche decisorie della Corte,
 * riparto di competenze in concreto, prerogative e conflitti, rapporti
 * fra ordinamenti.
 */
export const costituzionaleL3: QuizQuestion[] = [
  {
    id: 'cost-l3-001',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Le sentenze «additive di principio» si distinguono dalle additive classiche perché:',
    opzioni: [
      'Hanno efficacia limitata al giudizio a quo',
      'Sono adottate soltanto in materia penale',
      'Sono prive di qualsiasi effetto sull’ordinamento',
      'Individuano il principio cui il legislatore deve conformarsi, senza introdurre una regola autoapplicativa',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Quando la soluzione costituzionalmente obbligata non è unica, la Corte non può sostituirsi al legislatore. Con l’additiva di principio dichiara l’illegittimità e indica il principio cui la futura disciplina dovrà attenersi, lasciando al legislatore la scelta fra le possibili concretizzazioni; nel frattempo il giudice comune può ricavarne la regola del caso.',
  },
  {
    id: 'cost-l3-002',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Con l’ordinanza n. 207/2018 (caso Cappato) la Corte costituzionale ha inaugurato la tecnica:',
    opzioni: [
      'Del rinvio dell’udienza con monito al legislatore, mantenendo pendente il giudizio',
      'Della doppia pronuncia di inammissibilità',
      'Dell’annullamento con effetti differiti nel tempo',
      'Dell’additiva di prestazione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Con l’ord. n. 207/2018 la Corte, riscontrata una lacuna nell’art. 580 c.p., ha rinviato l’udienza di quasi un anno per consentire al Parlamento di intervenire, senza dichiarare l’illegittimità né rigettare. Rimasto inerte il legislatore, è seguita la sent. n. 242/2019, che ha dichiarato l’illegittimità parziale della norma alle condizioni procedurali indicate.',
  },
  {
    id: 'cost-l3-003',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Nella vicenda Taricco, con l’ord. n. 24/2017 la Corte costituzionale ha:',
    opzioni: [
      'Disapplicato direttamente la norma interna sulla prescrizione',
      'Sollevato rinvio pregiudiziale alla Corte di giustizia prospettando l’operatività dei controlimiti',
      'Dichiarato illegittimo il Trattato sul funzionamento dell’Unione',
      'Rimesso la questione alle Sezioni Unite della Cassazione',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Corte ha rivolto alla Corte di giustizia un rinvio pregiudiziale, prospettando che la regola Taricco, se applicata, violerebbe il principio di legalità in materia penale come principio supremo dell’ordinamento. La Corte di giustizia, con la sentenza M.A.S. e M.B. del 5 dicembre 2017, ha escluso l’obbligo di disapplicazione quando ciò comporti violazione del principio di determinatezza; è seguita la sent. n. 115/2018.',
  },
  {
    id: 'cost-l3-004',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La Corte costituzionale può sollevare davanti a sé stessa una questione di legittimità costituzionale?',
    opzioni: [
      'Sì, solo in materia elettorale',
      'No, in nessun caso',
      'Sì, nei giudizi in via principale e nei conflitti, quando è essa stessa giudice a quo rispetto a una norma che deve applicare',
      'Sì, ma solo su richiesta del Presidente della Repubblica',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La cosiddetta autorimessione è ammessa quando la Corte, nel corso di un giudizio di sua competenza, debba applicare una norma di legge che sospetta incostituzionale: si è verificata, fra l’altro, nel giudizio di ammissibilità dei referendum e in materia di legge elettorale. La Corte assume in quel frangente la doppia veste di giudice a quo e giudice ad quem.',
  },
  {
    id: 'cost-l3-005',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Con la sent. n. 238/2014 la Corte costituzionale ha applicato i controlimiti nei confronti:',
    opzioni: [
      'Di una direttiva non correttamente attuata',
      'Di una decisione quadro in materia penale',
      'Di un regolamento dell’Unione europea',
      'Della norma consuetudinaria internazionale sull’immunità degli Stati dalla giurisdizione, come interpretata dalla Corte internazionale di giustizia',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte ha ritenuto che l’immunità degli Stati dalla giurisdizione, per come ricostruita dalla Corte internazionale di giustizia nella sentenza del 2012, non potesse entrare nell’ordinamento italiano tramite l’art. 10, comma 1, Cost. nella parte in cui precludeva il risarcimento alle vittime di crimini di guerra, per contrasto con i principi supremi degli artt. 2 e 24 Cost.',
  },
  {
    id: 'cost-l3-006',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il conflitto di attribuzione fra poteri può essere sollevato anche:',
    opzioni: [
      'Dal comitato promotore di un referendum, riconosciuto come potere dello Stato',
      'Da un partito politico non rappresentato in Parlamento',
      'Da un consiglio comunale',
      'Da un singolo cittadino leso da un atto legislativo',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La Corte ha riconosciuto la legittimazione del comitato promotore del referendum quale potere dello Stato, in quanto competente a dichiarare in via definitiva la volontà del corpo elettorale nella fase di iniziativa (sent. n. 69/1978 e successive). Analoga legittimazione è stata riconosciuta, fra gli altri, al singolo parlamentare in casi limitati (ord. n. 17/2019).',
  },
  {
    id: 'cost-l3-007',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Nel conflitto sollevato da singoli parlamentari sulla legge di bilancio (ord. n. 17/2019) la Corte ha:',
    opzioni: [
      'Dichiarato ammissibile il ricorso e annullato la deliberazione',
      'Dichiarato inammissibile il ricorso, pur riconoscendo in astratto la legittimazione del singolo parlamentare',
      'Rimesso la questione alle Camere',
      'Escluso in radice che il parlamentare possa essere potere dello Stato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Corte ha ammesso in linea di principio che il singolo parlamentare possa essere potere dello Stato a tutela delle proprie attribuzioni costituzionali, ma ha dichiarato inammissibile il ricorso perché le violazioni denunciate non raggiungevano la soglia della manifesta lesione delle prerogative costituzionali. La pronuncia resta il riferimento sul punto.',
  },
  {
    id: 'cost-l3-008',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'L’insindacabilità parlamentare ex art. 68 Cost. per dichiarazioni rese fuori dalle Camere richiede:',
    opzioni: [
      'Che le dichiarazioni riguardino materie di competenza della commissione di appartenenza',
      'La semplice qualità di parlamentare al momento della dichiarazione',
      'Un nesso funzionale con l’attività parlamentare, cioè la sostanziale corrispondenza con atti tipici',
      'La previa autorizzazione della Camera di appartenenza',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte richiede un nesso funzionale: la dichiarazione extra moenia deve costituire divulgazione di opinioni già espresse in atti parlamentari tipici (interrogazioni, interventi, mozioni), con sostanziale corrispondenza di contenuti. La mera contestualità politica o l’identità di argomento non bastano (fra le tante, sentt. nn. 10 e 11/2000, 379/2003).',
  },
  {
    id: 'cost-l3-009',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Le intercettazioni «indirette» che coinvolgono un parlamentare:',
    opzioni: [
      'Sono vietate in modo assoluto',
      'Richiedono l’autorizzazione della Corte costituzionale',
      'Sono sempre utilizzabili senza autorizzazione, se il parlamentare non è il bersaglio',
      'Richiedono l’autorizzazione successiva della Camera se l’utenza è casualmente captata ma la captazione era in concreto diretta al parlamentare',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La l. n. 140/2003 e la giurisprudenza costituzionale distinguono le intercettazioni casuali, utilizzabili previa autorizzazione successiva della Camera, da quelle in cui il parlamentare era in concreto il destinatario dell’attività captativa, che senza autorizzazione preventiva sono inutilizzabili. Il discrimine è l’effettiva direzione dell’atto d’indagine, non la titolarità formale dell’utenza (sent. n. 390/2007).',
  },
  {
    id: 'cost-l3-010',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'L’autodichia degli organi costituzionali consiste:',
    opzioni: [
      'Nel potere di giudicare le controversie di lavoro dei propri dipendenti con organi interni',
      'Nel potere di emanare norme con forza di legge',
      'Nell’immunità penale dei propri membri',
      'Nella facoltà di non applicare le leggi ritenute incostituzionali',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’autodichia è la giurisdizione domestica su rapporti di lavoro e concorsi interni, esercitata da organi istituiti dagli stessi organi costituzionali. Con la sent. n. 262/2017 la Corte, pur esprimendo forti riserve, ne ha riconosciuto la persistenza per Camera, Senato e Presidenza della Repubblica, ricollegandola all’autonomia normativa garantita dall’art. 64 Cost.',
  },
  {
    id: 'cost-l3-011',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il segreto di Stato, dopo la sent. n. 106/2009 e la l. n. 124/2007:',
    opzioni: [
      'Può essere opposto senza limiti di tempo e su qualsiasi materia',
      'Ha durata massima e non è opponibile per fatti eversivi, di terrorismo, stragi e mafia',
      'È sindacabile nel merito dal giudice penale',
      'È apposto dal Procuratore generale presso la Cassazione',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La l. n. 124/2007 fissa una durata (quindici anni, prorogabili fino a trenta) e vieta di opporre il segreto per fatti eversivi dell’ordine costituzionale, di terrorismo, strage, associazione mafiosa e scambio elettorale politico-mafioso. Il conflitto sull’opposizione è deciso dalla Corte costituzionale, cui spetta un controllo sull’esistenza del potere, non sul merito della valutazione politica.',
  },
  {
    id: 'cost-l3-012',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Nel caso Abu Omar la Corte costituzionale ha affermato che il giudice penale, di fronte al segreto di Stato:',
    opzioni: [
      'Deve rimettere gli atti al Presidente del Consiglio',
      'Può valutarne autonomamente la fondatezza',
      'Non può utilizzare le prove coperte dal segreto, ma può procedere sulla base di altri elementi',
      'Deve sempre pronunciare sentenza di non doversi procedere',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Con la sent. n. 106/2009 e le successive pronunce sulla vicenda, la Corte ha chiarito che il segreto opposto legittimamente preclude l’utilizzo degli elementi coperti, senza però impedire al giudice di procedere sulla base di prove autonome e non contaminate. Al giudice è invece sottratta ogni valutazione sull’opportunità politica dell’apposizione.',
  },
  {
    id: 'cost-l3-013',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La Corte costituzionale ha ritenuto che le materie trasversali statali:',
    opzioni: [
      'Attribuiscano allo Stato una competenza illimitata',
      'Operino soltanto nelle Regioni a statuto ordinario',
      'Non possano mai incidere su competenze regionali',
      'Legittimino l’intervento statale purché proporzionato e limitato a quanto necessario al fine unitario',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Competenze come tutela della concorrenza, LEP e tutela dell’ambiente non individuano materie in senso stretto ma finalità: legittimano l’intervento statale anche in ambiti regionali, a condizione che sia proporzionato e non ecceda quanto necessario. Il giudizio si risolve in uno scrutinio di proporzionalità e ragionevolezza (fra le altre, sent. n. 80/2006 e n. 401/2007).',
  },
  {
    id: 'cost-l3-014',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Quando una disciplina statale interseca più materie, la Corte risolve il concorso di competenze:',
    opzioni: [
      'Con il criterio della prevalenza e, se non applicabile, con la leale collaborazione',
      'Dividendo la norma in parti uguali fra Stato e Regione',
      'Rimettendo la scelta alla Conferenza unificata',
      'Applicando sempre la competenza statale',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'In caso di intreccio inestricabile la Corte cerca anzitutto la materia prevalente; quando nessuna prevale, impone il rispetto del principio di leale collaborazione, con moduli concertativi il cui grado di vincolatività (intesa forte o parere) varia in ragione dell’intensità della compressione delle competenze regionali.',
  },
  {
    id: 'cost-l3-015',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La tutela dell’ambiente, secondo la giurisprudenza costituzionale:',
    opzioni: [
      'È rimessa integralmente al diritto dell’Unione europea',
      'È materia esclusiva statale che fissa standard di tutela non derogabili in peius dalle Regioni',
      'È materia concorrente, con principi statali e dettaglio regionale',
      'È materia residuale regionale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 117, comma 2, lett. s), Cost. riserva allo Stato tutela dell’ambiente e dell’ecosistema. La Corte ha chiarito che si tratta di un valore trasversale: lo Stato fissa standard uniformi di tutela che le Regioni possono elevare nell’esercizio di proprie competenze (governo del territorio, tutela della salute), mai abbassare.',
  },
  {
    id: 'cost-l3-016',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Con riferimento alle leggi provvedimento, la Corte costituzionale ha affermato che:',
    opzioni: [
      'Non sono sindacabili dalla Corte',
      'Sono sempre illegittime per violazione della separazione dei poteri',
      'Sono ammissibili, ma soggette a uno scrutinio stretto di ragionevolezza e non arbitrarietà',
      'Sono legittime solo se adottate con legge costituzionale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Costituzione non riserva alla legge un contenuto necessariamente generale e astratto: le leggi provvedimento sono ammissibili, ma poiché sottraggono il destinatario alla tutela ordinaria davanti al giudice amministrativo, la Corte le sottopone a uno scrutinio particolarmente rigoroso di ragionevolezza e non arbitrarietà (fra le altre, sent. n. 20/2012 e n. 275/2013).',
  },
  {
    id: 'cost-l3-017',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Le leggi di interpretazione autentica retroattive sono legittime se:',
    opzioni: [
      'Sono approvate a maggioranza assoluta',
      'Non incidono su giudizi pendenti in primo grado',
      'Sono adottate entro un anno dalla legge interpretata',
      'Attribuiscono alla disposizione un significato compatibile con la sua lettera e sono sorrette da motivi imperativi di interesse generale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte ammette l’interpretazione autentica quando la norma attribuisce alla disposizione uno dei significati già ricavabili dal testo. La retroattività incontra però i limiti della ragionevolezza, del legittimo affidamento e, per l’art. 6 CEDU, il divieto di ingerenza del legislatore nell’amministrazione della giustizia se non per motivi imperativi di interesse generale (sentt. nn. 78/2012 e 170/2013).',
  },
  {
    id: 'cost-l3-018',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La reiterazione dei decreti-legge non convertiti è stata dichiarata illegittima:',
    opzioni: [
      'Dalla sent. n. 360/1996, salvo che il nuovo decreto sia fondato su autonomi e sopravvenuti presupposti',
      'Dalla sent. n. 22/2012',
      'Dalla sent. n. 1/2014',
      'Da nessuna pronuncia: la reiterazione resta ammessa',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Con la sent. n. 360/1996 la Corte ha dichiarato illegittima la prassi della reiterazione, che alterava la natura provvisoria del decreto e svuotava il termine di sessanta giorni, salvo che il nuovo decreto risulti fondato su autonomi e nuovi presupposti di necessità e urgenza o presenti contenuti sostanzialmente diversi.',
  },
  {
    id: 'cost-l3-019',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il sindacato sui presupposti del decreto-legge dopo la conversione:',
    opzioni: [
      'È precluso, perché la conversione sana ogni vizio',
      'È ammesso nei casi di evidente mancanza dei presupposti, che si traduce in vizio della stessa legge di conversione',
      'Spetta al giudice comune in via di disapplicazione',
      'È rimesso alla valutazione politica delle Camere',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Superata la tesi dell’effetto sanante, la Corte ha affermato che l’evidente mancanza dei presupposti costituisce vizio in procedendo della legge di conversione, sindacabile anche dopo la conversione (sentt. nn. 171/2007 e 128/2008). Il controllo resta limitato ai casi di manifesta implausibilità, non estendendosi al merito della valutazione governativa.',
  },
  {
    id: 'cost-l3-020',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La questione di fiducia posta su un maxiemendamento:',
    opzioni: [
      'Richiede il previo assenso del Presidente della Repubblica',
      'È stata dichiarata illegittima dalla Corte costituzionale',
      'È stata oggetto di censure e moniti, ma non ha condotto a dichiarazioni di illegittimità delle leggi così approvate',
      'È vietata dall’art. 72 Cost.',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La prassi del maxiemendamento con questione di fiducia comprime l’esame articolo per articolo previsto dall’art. 72, comma 1, Cost. La Corte, pur esprimendo moniti (fra gli altri nell’ord. n. 17/2019 e nella sent. n. 32/2014 sul diverso profilo dell’omogeneità), non ha finora annullato leggi per questo solo motivo, ritenendo prevalenti gli spazi di autonomia parlamentare.',
  },
  {
    id: 'cost-l3-021',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Sono sindacabili dalla Corte costituzionale i regolamenti parlamentari?',
    opzioni: [
      'Sì, ma solo in via principale su ricorso del Governo',
      'Sì, quando incidano su diritti di terzi estranei',
      'Sì, in quanto atti aventi forza di legge',
      'No: la sent. n. 154/1985 li ha ritenuti sottratti al giudizio di legittimità, in ragione dell’autonomia delle Camere',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Con la sent. n. 154/1985 la Corte ha escluso i regolamenti parlamentari dal novero degli atti sindacabili ex art. 134 Cost., valorizzando l’indipendenza guarentigiata delle Camere ex art. 64 Cost. Resta la via del conflitto di attribuzione per la tutela di attribuzioni costituzionali di altri poteri, e la sent. n. 262/2017 ha ribadito che l’autonomia non è illimitata.',
  },
  {
    id: 'cost-l3-022',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il potere di esternazione del Presidente della Repubblica:',
    opzioni: [
      'Non è soggetto a controfirma quando si tratti di atti personalissimi, come i messaggi informali',
      'È vietato in periodo elettorale',
      'È esercitabile solo con messaggio formale alle Camere ex art. 87 Cost.',
      'Richiede sempre la controfirma ministeriale',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Accanto ai messaggi formali alle Camere, controfirmati, si è consolidata la prassi delle esternazioni atipiche. La dottrina prevalente e la prassi le collocano fra gli atti personalissimi, sottratti alla controfirma perché non imputabili alla responsabilità ministeriale; il limite è il rispetto della funzione di garanzia e di rappresentanza dell’unità nazionale.',
  },
  {
    id: 'cost-l3-023',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Secondo l’ord. n. 87/2018 della Corte costituzionale, nella nomina dei ministri il Presidente della Repubblica:',
    opzioni: [
      'Ha un ruolo meramente notarile',
      'Dispone di un potere di valutazione autonoma, il cui esercizio non integra di per sé conflitto di attribuzione',
      'Deve accogliere la proposta del Presidente del Consiglio senza margini',
      'Può nominare ministri anche senza proposta',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Corte ha dichiarato inammissibile il conflitto sollevato da un cittadino per il diniego di nomina di un ministro, ribadendo che l’art. 92 Cost. attribuisce al Presidente una valutazione propria, non riducibile a un atto dovuto. La pronuncia è il riferimento sul concorso di volontà fra Presidente della Repubblica e Presidente del Consiglio.',
  },
  {
    id: 'cost-l3-024',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La decretazione d’urgenza in materia di diritti fondamentali durante l’emergenza sanitaria ha posto il problema:',
    opzioni: [
      'Dell’abrogazione tacita dell’art. 77 Cost.',
      'Della necessaria approvazione con legge costituzionale',
      'Della compatibilità dei d.P.C.m. attuativi con le riserve di legge degli artt. 13, 16 e 17 Cost.',
      'Della competenza esclusiva regionale in materia di profilassi internazionale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il modello adottato — decreti-legge che fissano le misure adottabili, attuati con d.P.C.m. — ha sollevato il problema del rispetto delle riserve di legge. La Corte, con la sent. n. 37/2021, ha ricondotto la materia alla profilassi internazionale di competenza statale esclusiva, escludendo interventi regionali derogatori; sulla catena delle fonti il dibattito resta aperto.',
  },
  {
    id: 'cost-l3-025',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il diritto all’identità personale e alla riservatezza è ricondotto dalla Corte:',
    opzioni: [
      'All’art. 42 Cost.',
      'All’art. 41 Cost.',
      'All’art. 21 Cost.',
      'All’art. 2 Cost., quale diritto inviolabile della persona, in combinato con gli artt. 13, 14 e 15 Cost.',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La riservatezza non è espressamente nominata in Costituzione: la giurisprudenza la ricava dall’art. 2 Cost. come diritto inviolabile, con appoggio nelle garanzie del domicilio e della corrispondenza. Sul piano sovranazionale il riferimento è l’art. 8 CEDU e l’art. 8 della Carta di Nizza, che distingue la protezione dei dati personali dalla vita privata.',
  },
  {
    id: 'cost-l3-026',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Con la sent. n. 1/2014 la Corte ha censurato la legge elettorale perché:',
    opzioni: [
      'Attribuiva un premio di maggioranza senza soglia minima e prevedeva liste bloccate di dimensioni tali da impedire una scelta consapevole',
      'Escludeva il voto degli italiani all’estero',
      'Non prevedeva il ballottaggio',
      'Prevedeva collegi uninominali',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La Corte ha dichiarato illegittimo il premio di maggioranza privo di una soglia minima di voti, per irragionevole compressione della rappresentatività, e le liste bloccate lunghe, per lesione del carattere personale e libero del voto ex art. 48 Cost. Con la sent. n. 35/2017 ha poi censurato il ballottaggio dell’Italicum così come congegnato.',
  },
  {
    id: 'cost-l3-027',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La cosiddetta «normativa di risulta» in materia elettorale designa:',
    opzioni: [
      'La normativa regionale applicabile in via suppletiva',
      'La legge elettorale che residua dopo l’intervento ablativo della Corte, idonea a garantire il rinnovo degli organi',
      'La disciplina transitoria adottata dal Governo con decreto',
      'Il regolamento parlamentare applicabile in mancanza di legge',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Poiché le leggi elettorali sono costituzionalmente necessarie, la Corte verifica che dopo l’annullamento residui una disciplina autoapplicativa idonea a consentire il rinnovo degli organi: è la normativa di risulta. Il requisito condiziona anche l’ammissibilità dei referendum abrogativi in materia elettorale (sent. n. 32/1993 e successive).',
  },
  {
    id: 'cost-l3-028',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La Corte costituzionale, nel giudizio di ammissibilità del referendum, verifica fra l’altro:',
    opzioni: [
      'Il gradimento del Governo',
      'L’opportunità politica del quesito',
      'L’omogeneità, chiarezza e univocità del quesito, oltre alle esclusioni dell’art. 75 Cost.',
      'La disponibilità finanziaria per lo svolgimento della consultazione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La sent. n. 16/1978 ha individuato cause di inammissibilità ulteriori rispetto all’elenco dell’art. 75, comma 2, Cost.: disomogeneità e mancanza di chiarezza del quesito, natura costituzionalmente necessaria o vincolata della legge, leggi a contenuto costituzionalmente vincolato. È escluso ogni giudizio sull’opportunità politica.',
  },
  {
    id: 'cost-l3-029',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il divieto di referendum «manipolativo» significa che il quesito non può:',
    opzioni: [
      'Essere promosso da consigli regionali',
      'Essere sottoposto a votazione nello stesso anno di altre consultazioni',
      'Riguardare più di un articolo di legge',
      'Trasformarsi in proposta di una nuova disciplina, estranea alla funzione meramente abrogativa',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il referendum dell’art. 75 Cost. ha funzione abrogativa: l’abrogazione parziale è ammessa, e con essa un certo effetto innovativo, ma non fino al punto di far scaturire dal ritaglio una normativa nuova e diversa, propositiva, che si sostituirebbe alla scelta del legislatore. Il confine è tracciato caso per caso nel giudizio di ammissibilità.',
  },
  {
    id: 'cost-l3-030',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La Corte costituzionale può modulare nel tempo gli effetti delle proprie decisioni?',
    opzioni: [
      'Sì: la sent. n. 10/2015 ha limitato al futuro gli effetti dell’annullamento per esigenze di equilibrio di bilancio',
      'Sì, ma solo con il consenso del Governo',
      'Sì, ma solo in materia penale',
      'No, l’effetto è sempre retroattivo sui rapporti pendenti',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Con la sent. n. 10/2015 (Robin Tax) la Corte ha per la prima volta escluso l’efficacia retroattiva della dichiarazione di illegittimità, bilanciando il ripristino della legalità costituzionale con l’equilibrio di bilancio ex art. 81 Cost. La tecnica è rimasta eccezionale e ha suscitato ampie critiche per la tensione con l’art. 136 Cost.',
  },
  {
    id: 'cost-l3-031',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La nozione di «rapporti esauriti», che limita la retroattività delle pronunce di accoglimento, comprende:',
    opzioni: [
      'Tutti i rapporti sorti prima della pronuncia',
      'I rapporti coperti da giudicato, prescrizione, decadenza o comunque non più azionabili',
      'I soli rapporti di diritto pubblico',
      'I rapporti in corso di esecuzione',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La dichiarazione di illegittimità travolge i rapporti pendenti, non quelli esauriti, cioè definiti da giudicato o divenuti intangibili per prescrizione, decadenza o preclusione. Fa eccezione la materia penale: l’art. 30, comma 4, l. n. 87/1953 impone la cessazione dell’esecuzione e degli effetti penali della condanna anche in presenza di giudicato.',
  },
  {
    id: 'cost-l3-032',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La Corte costituzionale ha ammesso l’intervento nel giudizio incidentale:',
    opzioni: [
      'Di nessun soggetto diverso dal giudice rimettente',
      'Di chiunque vi abbia interesse di mero fatto',
      'Delle parti del giudizio a quo e, in via eccezionale, di terzi titolari di un interesse qualificato inerente al rapporto sostanziale dedotto',
      'Solo del Presidente del Consiglio dei ministri',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Le Norme integrative limitano la costituzione alle parti del giudizio principale e al Presidente del Consiglio. La Corte ha però aperto, in via eccezionale, all’intervento di terzi titolari di un interesse qualificato, immediatamente inerente al rapporto sostanziale dedotto e non semplicemente regolato dalla norma censurata, e ha valorizzato il contributo degli amici curiae.',
  },
  {
    id: 'cost-l3-033',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Nel giudizio in via principale, a differenza di quello incidentale:',
    opzioni: [
      'Non è richiesta la specificazione dei parametri costituzionali',
      'La Corte può pronunciarsi d’ufficio su leggi non impugnate',
      'Non opera il principio di corrispondenza fra chiesto e pronunciato',
      'Il ricorrente ha la disponibilità del giudizio e può rinunciare, con conseguente estinzione se la controparte accetta',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il giudizio in via principale ha carattere marcatamente dispositivo: il ricorrente può rinunciare al ricorso e, se la controparte costituita accetta, il giudizio si estingue. Ne discende anche l’onere di indicare in modo puntuale parametri e motivi, a pena di inammissibilità per genericità.',
  },
  {
    id: 'cost-l3-034',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Che cosa impone il principio di continuità normativa nei rapporti Stato-Regioni?',
    opzioni: [
      'Che le leggi statali anteriori alla riforma del Titolo V restino in vigore finché le Regioni non esercitino la propria competenza',
      'Che le Regioni recepiscano automaticamente ogni legge statale',
      'Che lo Stato non possa più legiferare nelle materie residuali',
      'Che le leggi regionali prevalgano su quelle statali anteriori',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Per evitare vuoti di disciplina dopo la riforma del 2001, la Corte ha affermato che le norme statali preesistenti continuano ad applicarsi nelle materie divenute di competenza regionale finché la Regione non eserciti la propria potestà legislativa (fra le altre, sent. n. 376/2002). Si tratta di un criterio di successione, non di gerarchia.',
  },
  {
    id: 'cost-l3-035',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La «clausola di maggior favore» dell’art. 10 della l. cost. n. 3/2001 dispone che:',
    opzioni: [
      'Le Regioni speciali applichino integralmente il nuovo Titolo V',
      'Le disposizioni del nuovo Titolo V si applichino alle Regioni speciali per le parti in cui prevedano forme di autonomia più ampie di quelle già attribuite',
      'Le Regioni ordinarie assumano lo statuto speciale',
      'Gli statuti speciali siano modificabili con legge ordinaria',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 10 della l. cost. n. 3/2001 estende alle Regioni a statuto speciale e alle Province autonome le disposizioni della riforma solo nelle parti in cui prevedano forme di autonomia più ampie rispetto a quelle già attribuite, sino all’adeguamento dei rispettivi statuti. La clausola impedisce che la riforma si traduca in un arretramento per le autonomie speciali.',
  },
  {
    id: 'cost-l3-036',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il coordinamento della finanza pubblica, materia concorrente, consente allo Stato:',
    opzioni: [
      'Di approvare direttamente i bilanci regionali',
      'Di imporre vincoli puntuali su singole voci di spesa regionale',
      'Di fissare principi fondamentali, quali limiti complessivi di spesa, lasciando alle Regioni la scelta delle modalità di conseguimento',
      'Di sostituirsi alle Regioni nella gestione del bilancio',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte distingue i principi fondamentali, che possono porre obiettivi complessivi di contenimento della spesa e sono legittimi, dalle norme di dettaglio che vincolano singole voci, illegittime perché comprimono l’autonomia di allocazione delle risorse. Il vincolo deve inoltre essere transitorio e non concernere minutamente l’organizzazione regionale.',
  },
  {
    id: 'cost-l3-037',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Con la sent. n. 275/2016 la Corte ha affermato, in materia di diritti sociali, che:',
    opzioni: [
      'I diritti sociali non sono giustiziabili',
      'La spesa sociale è materia di competenza esclusiva statale',
      'Il diritto del disabile al trasporto scolastico cede sempre di fronte ai vincoli di bilancio',
      'È la garanzia dei diritti incomprimibili a incidere sul bilancio, e non l’equilibrio di bilancio a condizionarne la doverosa erogazione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La sent. n. 275/2016, in tema di trasporto scolastico per studenti disabili, contiene l’affermazione divenuta emblematica secondo cui è la garanzia dei diritti incomprimibili a incidere sul bilancio, e non l’equilibrio di questo a condizionarne la doverosa erogazione. Il nucleo essenziale del diritto non può essere sacrificato dalla scarsità di risorse.',
  },
  {
    id: 'cost-l3-038',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il principio del legittimo affidamento nei confronti del legislatore:',
    opzioni: [
      'Impone che l’intervento retroattivo sia sorretto da adeguata giustificazione e non incida in modo irragionevole su situazioni consolidate',
      'Opera solo nei rapporti fra privati',
      'È espressamente sancito dall’art. 25 Cost.',
      'Vieta in assoluto le leggi retroattive non penali',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Fuori dalla materia penale, coperta dall’art. 25 Cost., la retroattività non è vietata ma incontra il limite della ragionevolezza: la Corte verifica che non siano lesi in modo sproporzionato l’affidamento legittimamente sorto, la certezza dei rapporti giuridici e il principio di uguaglianza (fra le altre, sentt. nn. 349/1985, 264/2012 e 108/2019).',
  },
  {
    id: 'cost-l3-039',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il test di proporzionalità applicato dalla Corte si articola nei passaggi di:',
    opzioni: [
      'Legalità, tipicità e offensività',
      'Idoneità, necessarietà e proporzionalità in senso stretto',
      'Rilevanza, non manifesta infondatezza e ammissibilità',
      'Prevalenza, sussidiarietà e adeguatezza',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il sindacato verifica che la misura sia idonea al fine perseguito, necessaria in quanto non sostituibile con altra ugualmente efficace e meno restrittiva, e proporzionata in senso stretto, cioè che il sacrificio imposto non sia eccessivo rispetto al beneficio. Il modello, di derivazione tedesca ed europea, è oggi correntemente impiegato anche dalla Corte italiana.',
  },
  {
    id: 'cost-l3-040',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La sent. n. 32/2014, in materia di stupefacenti, ha dichiarato illegittime le norme perché:',
    opzioni: [
      'Erano state adottate con decreto legislativo in eccesso di delega',
      'Erano contrarie al principio di offensività',
      'Erano state introdotte in sede di conversione con emendamenti eterogenei rispetto al decreto-legge',
      'Violavano la riserva di competenza regionale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte ha censurato le disposizioni della cosiddetta legge Fini-Giovanardi per violazione dell’art. 77 Cost.: erano state inserite in sede di conversione di un decreto-legge dal contenuto del tutto eterogeneo. L’annullamento ha comportato la reviviscenza della disciplina previgente, questione a sua volta delicata sotto il profilo della successione di leggi penali.',
  },
  {
    id: 'cost-l3-041',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La reviviscenza di norme abrogate, secondo la Corte:',
    opzioni: [
      'Si verifica sempre alla scadenza del termine di conversione del decreto-legge',
      'È rimessa alla discrezionalità del giudice comune',
      'È effetto ordinario di ogni abrogazione referendaria',
      'È fenomeno eccezionale, ammesso in caso di annullamento della norma abrogatrice ma non come effetto di un referendum abrogativo',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La sent. n. 13/2012, in materia di referendum elettorale, ha escluso che l’abrogazione referendaria possa determinare la reviviscenza di norme precedentemente abrogate, perché ciò equivarrebbe a un referendum propositivo. Diverso è il caso della dichiarazione di illegittimità della norma abrogatrice, che rimuovendo l’atto abrogante può far riespandere la disciplina anteriore.',
  },
  {
    id: 'cost-l3-042',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La Corte costituzionale, di fronte a una norma penale di favore:',
    opzioni: [
      'Può sindacarla, poiché il principio di legalità non preclude il controllo su norme che sottraggono irragionevolmente una classe di fatti alla disciplina generale',
      'Deve limitarsi a un monito al legislatore',
      'Può annullarla con effetti retroattivi anche sui giudicati',
      'Non può mai sindacarla, perché l’eventuale annullamento produrrebbe effetti in malam partem',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Con la sent. n. 394/2006 la Corte ha ammesso il sindacato sulle norme penali di favore, cioè quelle che sottraggono un gruppo di casi alla disciplina generale in modo irragionevole: il controllo non viola la riserva di legge, perché ripristina la portata della norma generale preesistente. Restano fermi i limiti dell’art. 25 Cost. quanto ai fatti anteriori.',
  },
  {
    id: 'cost-l3-043',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'L’art. 27 Cost. e l’ergastolo ostativo: con l’ord. n. 97/2021 la Corte ha:',
    opzioni: [
      'Dichiarato immediatamente illegittima la disciplina',
      'Rinviato la trattazione per consentire l’intervento del legislatore, ravvisando profili di contrasto con gli artt. 3 e 27 Cost.',
      'Escluso ogni contrasto con la Costituzione',
      'Rimesso la questione alla Corte europea dei diritti dell’uomo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Riprendendo la tecnica inaugurata con il caso Cappato, la Corte ha ravvisato il contrasto della presunzione assoluta di pericolosità legata alla mancata collaborazione con gli artt. 3 e 27 Cost. e con l’art. 3 CEDU (dopo la sentenza Viola c. Italia), rinviando l’udienza per lasciare spazio al legislatore, poi intervenuto con il d.l. n. 162/2022.',
  },
  {
    id: 'cost-l3-044',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il parametro dell’art. 117, comma 1, Cost. rispetto alla CEDU opera:',
    opzioni: [
      'Solo per le sentenze pilota della Corte EDU',
      'Solo se la norma CEDU è più favorevole di quella costituzionale',
      'A condizione che la norma convenzionale, come interpretata dalla Corte EDU, sia essa stessa conforme alla Costituzione',
      'Automaticamente, senza alcun controllo',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La norma convenzionale integra il parametro solo se supera il vaglio di compatibilità con la Costituzione nel suo complesso: la Corte esercita un controllo sulla norma interposta e, ove il contrasto sussista, dichiara illegittima la legge di adattamento (sentt. nn. 348 e 349/2007, poi n. 49/2015 sul rilievo della giurisprudenza consolidata).',
  },
  {
    id: 'cost-l3-045',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Secondo la sent. n. 49/2015, il giudice comune è vincolato:',
    opzioni: [
      'Solo alle sentenze rese nei confronti dell’Italia',
      'Alle sole sentenze della Grande Camera',
      'A ogni singola pronuncia della Corte EDU',
      'Alla giurisprudenza consolidata di Strasburgo, e non a decisioni isolate o non definitive',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte ha precisato che il vincolo interpretativo discende dal diritto consolidato di Strasburgo: il giudice non è tenuto ad allinearsi a pronunce isolate, non definitive o espressione di orientamenti non stabilizzati. Fra gli indici del consolidamento vi sono la creatività del principio, l’eventuale dissenso interno e la provenienza dalla Grande Camera.',
  },
  {
    id: 'cost-l3-046',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La Carta dei diritti fondamentali dell’Unione europea si applica agli Stati membri:',
    opzioni: [
      'Esclusivamente nell’attuazione del diritto dell’Unione (art. 51 della Carta)',
      'Solo nei rapporti fra istituzioni europee',
      'Soltanto in materia penale',
      'In ogni ambito, anche puramente interno',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 51 della Carta ne limita l’applicazione alle istituzioni dell’Unione e agli Stati membri esclusivamente nell’attuazione del diritto dell’Unione. La Carta ha lo stesso valore giuridico dei Trattati (art. 6 TUE) ma non estende le competenze dell’Unione; fuori dal suo ambito operano Costituzione e CEDU.',
  },
  {
    id: 'cost-l3-047',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La riserva di legge dell’art. 13 Cost. rispetto alle misure di prevenzione personali:',
    opzioni: [
      'Non opera, trattandosi di misure amministrative',
      'Impone che i presupposti applicativi siano descritti con sufficiente precisione, come affermato dopo la sentenza De Tommaso',
      'Consente qualunque descrizione, purché la misura sia disposta dal giudice',
      'Vale solo per le misure patrimoniali',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Dopo la sentenza De Tommaso c. Italia (Grande Camera, 2017), che ha censurato l’indeterminatezza delle fattispecie di pericolosità generica, la Corte costituzionale con la sent. n. 24/2019 ha dichiarato illegittima la categoria di cui all’art. 1, lett. a), d.lgs. n. 159/2011 e ha imposto una lettura tassativizzante delle restanti ipotesi.',
  },
  {
    id: 'cost-l3-048',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il divieto di bis in idem, nella lettura convenzionale, impone di verificare:',
    opzioni: [
      'Che la seconda sanzione sia più grave della prima',
      'La sola identità del nomen iuris delle sanzioni',
      'La natura sostanzialmente penale della sanzione secondo i criteri Engel e la sussistenza di un legame materiale e temporale sufficientemente stretto fra i procedimenti',
      'Che i due procedimenti si svolgano davanti allo stesso giudice',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'I criteri Engel (qualificazione interna, natura dell’illecito, severità della sanzione) consentono di attribuire natura penale anche a sanzioni formalmente amministrative. Dopo A e B c. Norvegia (2016) il cumulo è compatibile se i procedimenti sono avvinti da un legame materiale e temporale sufficientemente stretto; la Corte costituzionale ha recepito l’impostazione con la sent. n. 43/2018.',
  },
  {
    id: 'cost-l3-049',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il principio di laicità dello Stato:',
    opzioni: [
      'Implica l’indifferenza dello Stato verso il fenomeno religioso',
      'Comporta il divieto di ogni finanziamento pubblico alle confessioni',
      'È espressamente enunciato dall’art. 7 Cost.',
      'È stato riconosciuto come principio supremo dalla sent. n. 203/1989, ricavato dagli artt. 2, 3, 7, 8, 19 e 20 Cost.',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Con la sent. n. 203/1989 la Corte ha qualificato la laicità come principio supremo, non enunciato in una singola disposizione ma desumibile dal combinato degli artt. 2, 3, 7, 8, 19 e 20 Cost. Si tratta di laicità non indifferente ma «positiva»: lo Stato garantisce la salvaguardia della libertà di religione in regime di pluralismo confessionale e culturale.',
  },
  {
    id: 'cost-l3-050',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'L’obiezione di coscienza, secondo la giurisprudenza costituzionale:',
    opzioni: [
      'Va riconosciuta dal legislatore nei singoli ambiti, con bilanciamento fra libertà di coscienza e doveri di solidarietà',
      'È vietata in quanto contraria all’art. 54 Cost.',
      'Opera automaticamente ogni volta che sia invocata',
      'È un diritto costituzionalmente garantito in via generale, azionabile in qualunque ambito',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La Corte ha ricondotto la libertà di coscienza agli artt. 2 e 19 Cost., ma ha escluso un diritto generalizzato di sottrarsi ai doveri: spetta al legislatore individuare gli ambiti in cui riconoscerla, bilanciandola con i doveri inderogabili di solidarietà. È il caso del servizio militare (sent. n. 164/1985) e dell’interruzione di gravidanza ex art. 9 l. n. 194/1978.',
  },
  {
    id: 'cost-l3-051',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La Corte costituzionale ha ricondotto le unioni fra persone dello stesso sesso:',
    opzioni: [
      'All’art. 29 Cost., come formazione equivalente alla famiglia fondata sul matrimonio',
      'All’art. 2 Cost., come formazione sociale meritevole di riconoscimento, spettando al legislatore le forme di garanzia',
      'All’art. 30 Cost.',
      'A nessuna disposizione costituzionale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Con la sent. n. 138/2010 la Corte ha collocato l’unione omosessuale fra le formazioni sociali dell’art. 2 Cost., riconoscendo il diritto fondamentale di vivere liberamente la condizione di coppia, ma rimettendo al legislatore l’individuazione delle forme di garanzia. L’intervento è arrivato con la l. n. 76/2016; la sent. n. 170/2014 aveva nel frattempo censurato il divorzio imposto in caso di rettificazione di sesso.',
  },
  {
    id: 'cost-l3-052',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il potere di grazia, secondo la sent. n. 200/2006:',
    opzioni: [
      'Spetta al Consiglio superiore della magistratura',
      'È atto sostanzialmente governativo, che richiede la proposta del Ministro',
      'È atto sostanzialmente presidenziale: il Ministro controfirma senza poter impedire la concessione',
      'È atto complesso eguale, che richiede il consenso di entrambi',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Risolvendo il conflitto fra Presidente della Repubblica e Ministro della giustizia, la Corte ha qualificato la grazia come atto sostanzialmente presidenziale, finalizzato a esigenze umanitarie: la controfirma ministeriale attesta la regolarità del procedimento e non attribuisce al Ministro un potere di veto.',
  },
  {
    id: 'cost-l3-053',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Nel sistema costituzionale italiano il potere di scioglimento anticipato è qualificato come:',
    opzioni: [
      'Atto vincolato alla richiesta del Presidente del Consiglio',
      'Atto di alta amministrazione sindacabile dal giudice amministrativo',
      'Atto sostanzialmente governativo',
      'Atto complesso eguale, frutto del concorso di Presidente della Repubblica e Governo, secondo la ricostruzione prevalente della prassi',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La qualificazione è discussa: la tesi dell’atto duumvirale o complesso eguale, che valorizza il concorso della volontà presidenziale e di quella governativa espressa dalla controfirma, è la più seguita nella lettura della prassi. Resta fermo il carattere di potere di garanzia, esercitato dopo le consultazioni e in presenza dell’impossibilità di formare una maggioranza.',
  },
  {
    id: 'cost-l3-054',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il Presidente della Repubblica può rifiutare l’emanazione di un decreto-legge?',
    opzioni: [
      'Sì, nei casi di manifesta e macroscopica incostituzionalità, secondo la prassi e la dottrina prevalente',
      'Sì, per qualsiasi ragione di merito politico',
      'Sì, ma solo previo parere della Corte costituzionale',
      'No, in nessun caso',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'A differenza della promulgazione, per la quale l’art. 74 Cost. prevede il rinvio, per l’emanazione degli atti governativi non esiste un procedimento tipizzato. Prassi e dottrina riconoscono un potere di rifiuto limitato ai casi di evidente violazione della Costituzione o di manifesta carenza dei presupposti di necessità e urgenza, non estensibile a valutazioni di opportunità politica.',
  },
  {
    id: 'cost-l3-055',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il cosiddetto «governo del Presidente» designa:',
    opzioni: [
      'Il governo in prorogatio dopo lo scioglimento',
      'Un esecutivo formato su iniziativa presidenziale in assenza di una maggioranza politica precostituita',
      'Il governo presieduto dal Presidente della Repubblica',
      'Un governo nominato senza fiducia parlamentare',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’espressione indica esecutivi la cui formazione è largamente sostenuta dall’iniziativa del Capo dello Stato in fasi di crisi, quando i partiti non esprimono una soluzione. Resta ferma la necessità della fiducia delle Camere ex art. 94 Cost.: il Presidente non può in alcun caso presiedere il Governo, né sostituirsi al circuito fiduciario.',
  },
  {
    id: 'cost-l3-056',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il CSM può adottare «pratiche a tutela» dell’indipendenza dei magistrati:',
    opzioni: [
      'Sì, solo su richiesta del Ministro della giustizia',
      'No, esulano dalle sue attribuzioni',
      'Sì, ma non possono tradursi in valutazioni sull’operato di altri poteri, pena il conflitto di attribuzione',
      'Sì, con effetti vincolanti per il Governo',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La prassi delle pratiche a tutela è stata ammessa entro limiti stretti: il CSM può intervenire a difesa del prestigio e dell’indipendenza dell’ordine giudiziario, ma non può sindacare atti di altri poteri, altrimenti eccede le attribuzioni dell’art. 105 Cost. La questione è stata più volte oggetto di conflitti davanti alla Corte costituzionale.',
  },
  {
    id: 'cost-l3-057',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Nel giudizio disciplinare dei magistrati, la sezione disciplinare del CSM:',
    opzioni: [
      'Decide in via definitiva, senza alcuna impugnazione',
      'È presieduta dal Ministro della giustizia',
      'Esercita funzione amministrativa, con atti impugnabili davanti al giudice amministrativo',
      'Esercita funzione giurisdizionale, con ricorso alle Sezioni Unite civili della Cassazione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La sezione disciplinare è organo giurisdizionale: le sue decisioni sono impugnabili davanti alle Sezioni Unite civili della Corte di cassazione ai sensi dell’art. 24 del d.lgs. n. 109/2006. Gli altri atti del CSM, di natura amministrativa, sono invece impugnabili davanti al giudice amministrativo.',
  },
  {
    id: 'cost-l3-058',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La sent. n. 20/2019 della Corte costituzionale, in materia di trasparenza e dati dei dirigenti pubblici:',
    opzioni: [
      'Ha applicato il test di proporzionalità bilanciando trasparenza e protezione dei dati personali, censurando l’obbligo per la sua indiscriminata estensione',
      'Ha escluso ogni rilievo del diritto alla protezione dei dati',
      'Ha rimesso la questione alla Corte di giustizia',
      'Ha dichiarato illegittimo l’intero obbligo di pubblicazione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La Corte ha riconosciuto pari dignità costituzionale alla trasparenza amministrativa e alla protezione dei dati personali, applicando il test di proporzionalità: l’obbligo di pubblicare dati reddituali e patrimoniali riferito indistintamente a tutti i titolari di incarichi dirigenziali è stato ritenuto sproporzionato rispetto al fine di controllo diffuso.',
  },
  {
    id: 'cost-l3-059',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il concetto di «norma interposta» indica:',
    opzioni: [
      'Una norma costituzionale di secondo grado',
      'Una norma di rango primario la cui violazione si traduce in violazione indiretta di un parametro costituzionale',
      'Una norma regolamentare integrativa della legge',
      'Una disposizione transitoria di raccordo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La norma interposta si colloca fra la Costituzione e la legge impugnata: la sua violazione integra la violazione indiretta del parametro costituzionale che ad essa rinvia. Sono norme interposte la legge delega rispetto all’art. 76 Cost., la CEDU rispetto all’art. 117, comma 1, Cost. e le norme statali di principio rispetto all’art. 117, comma 3, Cost.',
  },
  {
    id: 'cost-l3-060',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La Corte costituzionale può sindacare le omissioni del legislatore?',
    opzioni: [
      'No, in nessuna forma',
      'Sì, condannando il Parlamento a legiferare entro un termine',
      'No direttamente: può però censurare la disposizione «nella parte in cui non prevede», o rivolgere moniti quando la scelta non è costituzionalmente obbligata',
      'Sì, sostituendosi al legislatore in ogni caso',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Manca nel nostro sistema un giudizio sull’omissione legislativa come tale. La Corte agisce sull’omissione relativa tramite le additive, quando la soluzione è a rime obbligate, e ricorre a moniti, additive di principio o inammissibilità con avvertimento quando la scelta appartiene alla discrezionalità del legislatore.',
  },
  {
    id: 'cost-l3-061',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'Il principio di sussidiarietà orizzontale (art. 118, comma 4, Cost.) comporta che:',
    opzioni: [
      'Le funzioni siano attribuite al livello di governo più alto',
      'I servizi pubblici siano necessariamente privatizzati',
      'I privati sostituiscano integralmente le amministrazioni pubbliche',
      'Gli enti pubblici favoriscano l’autonoma iniziativa dei cittadini per lo svolgimento di attività di interesse generale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 118, comma 4, Cost. impegna Stato, Regioni ed enti locali a favorire l’autonoma iniziativa dei cittadini, singoli e associati, per lo svolgimento di attività di interesse generale, sulla base del principio di sussidiarietà. La Corte, con la sent. n. 131/2020, vi ha ricondotto la coamministrazione con gli enti del terzo settore prevista dal d.lgs. n. 117/2017.',
  },
  {
    id: 'cost-l3-062',
    materia: 'Diritto costituzionale',
    difficolta: 3,
    domanda:
      'La competenza statale in materia di «tutela della concorrenza»:',
    opzioni: [
      'Comprende anche le misure di promozione e liberalizzazione dei mercati, con effetto di legittimare interventi in ambiti regionali',
      'Spetta alle Regioni in via residuale',
      'È esercitata esclusivamente dall’Autorità garante, senza intervento legislativo',
      'È limitata alla disciplina antitrust in senso stretto',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La Corte ha attribuito alla materia dell’art. 117, comma 2, lett. e), Cost. un contenuto ampio, comprensivo delle misure antitrust, di quelle di liberalizzazione e di promozione della concorrenza. Trattandosi di competenza trasversale, legittima interventi statali che incidono su ambiti regionali, purché proporzionati (fra le altre, sent. n. 401/2007 in materia di appalti).',
  },
];
