import type { QuizQuestion } from '../../types';

/**
 * Diritto costituzionale — Unità 1 · Fondamenti.
 *
 * Materia a scelta dell'orale (d.l. 100/2026, conv. l. 145/2026). Il
 * livello copre l'ossatura: fonti, principi fondamentali, diritti,
 * organi costituzionali e giustizia costituzionale.
 *
 * Attenzione a due punti su cui i manuali stampati prima del 2026
 * sbagliano: la l. cost. 1/2022 ha modificato gli artt. 9 e 41, e la
 * riforma sulla separazione delle carriere è stata respinta dal
 * referendum del marzo 2026, quindi il Titolo IV è rimasto invariato.
 */
export const costituzionaleL1: QuizQuestion[] = [
  {
    id: 'cost-l1-001',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Che cosa significa che la Costituzione italiana è «rigida»?',
    opzioni: [
      'Che non può essere modificata in alcun caso, nemmeno con legge costituzionale',
      'Che può essere modificata solo con il procedimento aggravato dell’art. 138 Cost.',
      'Che si applica soltanto ai cittadini italiani residenti nel territorio dello Stato',
      'Che le sue norme sono tutte immediatamente precettive, senza bisogno di leggi attuative',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La rigidità consiste nel fatto che le norme costituzionali non possono essere modificate o derogate da una legge ordinaria, ma solo attraverso il procedimento aggravato di revisione previsto dall’art. 138 Cost. Ne discende il controllo di legittimità costituzionale delle leggi (art. 134 Cost.): una legge ordinaria contrastante con la Costituzione è illegittima, non semplicemente successiva.',
  },
  {
    id: 'cost-l1-002',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il procedimento di revisione costituzionale dell’art. 138 Cost. richiede:',
    opzioni: [
      'Una sola deliberazione di ciascuna Camera a maggioranza dei due terzi',
      'L’approvazione del Presidente della Repubblica prima della votazione parlamentare',
      'Due successive deliberazioni di ciascuna Camera a intervallo non minore di tre mesi',
      'Il parere vincolante della Corte costituzionale sul testo proposto',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 138 Cost. prevede due successive deliberazioni di ciascuna Camera a intervallo non minore di tre mesi; nella seconda votazione serve la maggioranza assoluta dei componenti. Se in seconda deliberazione il testo è approvato dai due terzi dei componenti di ciascuna Camera, non è ammesso il referendum confermativo.',
  },
  {
    id: 'cost-l1-003',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Chi può chiedere il referendum confermativo su una legge di revisione costituzionale?',
    opzioni: [
      'Soltanto il Presidente della Repubblica, entro trenta giorni dall’approvazione',
      'Un decimo dei membri di una Camera oppure 50.000 elettori',
      'Soltanto il Governo, con deliberazione del Consiglio dei ministri',
      'Un quinto dei membri di una Camera, 500.000 elettori o cinque consigli regionali',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Ai sensi dell’art. 138, comma 2, Cost. la richiesta va avanzata, entro tre mesi dalla pubblicazione notiziale, da un quinto dei membri di una Camera, da 500.000 elettori o da cinque consigli regionali. A differenza del referendum abrogativo, per quello costituzionale non è previsto alcun quorum di partecipazione.',
  },
  {
    id: 'cost-l1-004',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quale limite espresso incontra la revisione costituzionale?',
    opzioni: [
      'La forma repubblicana, che non può essere oggetto di revisione',
      'La disciplina dei rapporti economici, sottratta a ogni modifica',
      'L’organizzazione della magistratura, riservata alla legge ordinaria',
      'Il numero dei parlamentari, che non può essere modificato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 139 Cost. stabilisce che la forma repubblicana non può essere oggetto di revisione costituzionale. Accanto a questo limite espresso, la Corte costituzionale (sent. n. 1146/1988) ha riconosciuto l’esistenza di limiti impliciti: i principi supremi dell’ordinamento e i diritti inviolabili della persona non possono essere sovvertiti nemmeno con legge di revisione.',
  },
  {
    id: 'cost-l1-005',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Secondo l’art. 2 Cost., i diritti inviolabili dell’uomo sono:',
    opzioni: [
      'Concessi dallo Stato ai cittadini con legge ordinaria',
      'Riconosciuti e garantiti, sia come singolo sia nelle formazioni sociali',
      'Attribuiti ai soli cittadini italiani maggiorenni',
      'Subordinati all’adempimento dei doveri di solidarietà politica ed economica',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 2 Cost. usa il verbo «riconosce», non «attribuisce»: i diritti inviolabili preesistono allo Stato, che li garantisce sia come singolo sia nelle formazioni sociali dove si svolge la personalità. La norma è comunemente letta come clausola aperta, idonea a dare copertura a diritti non espressamente elencati.',
  },
  {
    id: 'cost-l1-006',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il principio di uguaglianza sostanziale (art. 3, comma 2, Cost.) impone alla Repubblica di:',
    opzioni: [
      'Trattare in modo identico tutte le situazioni, senza distinzione alcuna',
      'Astenersi da qualsiasi intervento nei rapporti economici e sociali',
      'Rimuovere gli ostacoli che limitano di fatto libertà e uguaglianza',
      'Garantire a tutti i cittadini il medesimo reddito minimo',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Mentre il comma 1 sancisce l’uguaglianza formale davanti alla legge, il comma 2 impegna la Repubblica a rimuovere gli ostacoli di ordine economico e sociale che, limitando di fatto la libertà e l’uguaglianza, impediscono il pieno sviluppo della persona. È la base costituzionale delle azioni positive e dei trattamenti differenziati ragionevoli.',
  },
  {
    id: 'cost-l1-007',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'La limitazione della libertà personale (art. 13 Cost.) è ammessa:',
    opzioni: [
      'Con provvedimento del prefetto, quando lo richiedano ragioni di ordine pubblico',
      'Con qualsiasi provvedimento amministrativo, purché comunicato all’interessato',
      'Solo in tempo di guerra, previa deliberazione delle Camere',
      'Per atto motivato dell’autorità giudiziaria e nei soli casi e modi previsti dalla legge',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 13 Cost. prevede una duplice garanzia: riserva di legge assoluta (i casi e i modi li stabilisce la legge) e riserva di giurisdizione (serve un atto motivato dell’autorità giudiziaria). In casi eccezionali di necessità e urgenza indicati tassativamente dalla legge, l’autorità di pubblica sicurezza può adottare provvedimenti provvisori, da comunicare al giudice entro 48 ore e da convalidare nelle successive 48 ore.',
  },
  {
    id: 'cost-l1-008',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Che cosa accade se il provvedimento provvisorio di polizia limitativo della libertà personale non è convalidato nei termini?',
    opzioni: [
      'Si intende revocato e resta privo di ogni effetto',
      'Deve essere rinnovato dall’autorità di pubblica sicurezza per altre 48 ore',
      'Si converte automaticamente in misura di prevenzione',
      'Resta efficace fino alla decisione definitiva del giudice di merito',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 13, comma 3, Cost. è netto: i provvedimenti provvisori dell’autorità di pubblica sicurezza devono essere comunicati entro 48 ore all’autorità giudiziaria e, se questa non li convalida nelle successive 48 ore, si intendono revocati e restano privi di ogni effetto. Il decorso del termine opera di diritto, senza bisogno di alcuna pronuncia.',
  },
  {
    id: 'cost-l1-009',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'La libertà di manifestazione del pensiero (art. 21 Cost.) può essere limitata:',
    opzioni: [
      'Da autorizzazioni preventive dell’autorità amministrativa competente',
      'Dal solo limite del buon costume, oltre a quelli desumibili dalla tutela di altri beni costituzionali',
      'Da una censura preventiva, quando siano coinvolti interessi della difesa nazionale',
      'Da un divieto generale di critica nei confronti dei pubblici poteri',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 21 Cost. esclude autorizzazioni e censure e pone come unico limite espresso il buon costume (comma 6). La giurisprudenza costituzionale ha individuato ulteriori limiti impliciti a tutela di altri beni di rango costituzionale, quali l’onore e la reputazione, la riservatezza e la dignità della persona. Il sequestro della stampa è ammesso solo per atto motivato dell’autorità giudiziaria nei casi previsti dalla legge.',
  },
  {
    id: 'cost-l1-010',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Ai sensi dell’art. 17 Cost., la riunione in luogo pubblico:',
    opzioni: [
      'Richiede l’autorizzazione del sindaco del comune interessato',
      'È vietata, salvo autorizzazione del questore',
      'Richiede preavviso all’autorità, che può vietarla solo per comprovati motivi di sicurezza o incolumità pubblica',
      'È sempre libera, senza alcun adempimento verso l’autorità',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 17 Cost. distingue: le riunioni in luogo aperto al pubblico non richiedono preavviso; per quelle in luogo pubblico è previsto il preavviso all’autorità, che può vietarle soltanto per comprovati motivi di sicurezza o di incolumità pubblica. Il preavviso non è una richiesta di autorizzazione, e la sua mancanza non rende di per sé illegittima la riunione.',
  },
  {
    id: 'cost-l1-011',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il principio di legalità in materia penale è sancito dall’art. 25 Cost. e comporta che:',
    opzioni: [
      'Le norme penali di favore non possano mai avere effetto retroattivo',
      'Il giudice possa creare nuove fattispecie incriminatrici in caso di lacune',
      'La pena possa essere applicata anche in via analogica a casi simili',
      'Nessuno possa essere punito se non in forza di una legge entrata in vigore prima del fatto commesso',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 25, comma 2, Cost. sancisce la riserva di legge e l’irretroattività della norma penale sfavorevole. Il comma 1 aggiunge la garanzia del giudice naturale precostituito per legge e il comma 3 estende la riserva di legge alle misure di sicurezza. La retroattività della norma penale più favorevole non è coperta dall’art. 25 ma si ricava dall’art. 3 Cost. e dall’art. 7 CEDU.',
  },
  {
    id: 'cost-l1-012',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Secondo l’art. 27 Cost., le pene devono tendere:',
    opzioni: [
      'Alla rieducazione del condannato',
      'Esclusivamente alla retribuzione del male commesso',
      'Al risarcimento integrale della vittima del reato',
      'Alla neutralizzazione del condannato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 27, comma 3, Cost. impone che le pene non consistano in trattamenti contrari al senso di umanità e che tendano alla rieducazione del condannato. Il comma 1 sancisce la personalità della responsabilità penale, il comma 2 la presunzione di non colpevolezza sino alla condanna definitiva; la pena di morte è stata abolita in ogni caso dalla l. cost. n. 1/2007, che ha soppresso il richiamo alle leggi militari di guerra.',
  },
  {
    id: 'cost-l1-013',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'A quale condizione l’art. 32 Cost. consente di imporre un trattamento sanitario obbligatorio?',
    opzioni: [
      'Se lo dispone il medico curante, con provvedimento motivato',
      'Solo se previsto per legge, nel rispetto della dignità della persona',
      'Sempre, quando sia in gioco la salute collettiva, anche senza base legale',
      'Solo con il consenso scritto dell’interessato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 32, comma 2, Cost. stabilisce che nessuno può essere obbligato a un determinato trattamento sanitario se non per disposizione di legge, e che la legge non può in nessun caso violare i limiti imposti dal rispetto della persona umana. La salute è tutelata come fondamentale diritto dell’individuo e insieme come interesse della collettività.',
  },
  {
    id: 'cost-l1-014',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'La legge costituzionale n. 1/2022 ha modificato l’art. 9 Cost. inserendo la tutela:',
    opzioni: [
      'Della concorrenza e del mercato interno',
      'Del lavoro in tutte le sue forme e applicazioni',
      'Dell’ambiente, della biodiversità e degli ecosistemi, anche nell’interesse delle future generazioni',
      'Del risparmio in tutte le sue forme',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La l. cost. n. 1/2022 ha aggiunto all’art. 9 Cost. un terzo comma, che affida alla Repubblica la tutela dell’ambiente, della biodiversità e degli ecosistemi, anche nell’interesse delle future generazioni, demandando alla legge dello Stato la disciplina dei modi e delle forme di tutela degli animali. La stessa legge ha inciso anche sull’art. 41 Cost.',
  },
  {
    id: 'cost-l1-015',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Dopo la l. cost. n. 1/2022, l’iniziativa economica privata non può svolgersi in modo da recare danno:',
    opzioni: [
      'Al solo equilibrio del bilancio dello Stato',
      'Alla sola libertà di concorrenza degli altri operatori',
      'Alla sola sicurezza dei lavoratori',
      'Alla sicurezza, alla libertà, alla dignità umana, alla salute e all’ambiente',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 41, comma 2, Cost., come modificato dalla l. cost. n. 1/2022, vieta che l’iniziativa economica privata si svolga in contrasto con l’utilità sociale o in modo da recare danno alla salute, all’ambiente, alla sicurezza, alla libertà e alla dignità umana. Il comma 3 consente alla legge di indirizzare l’attività economica a fini sociali e, ora, anche ambientali.',
  },
  {
    id: 'cost-l1-016',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'L’art. 10, comma 1, Cost. prevede che l’ordinamento italiano:',
    opzioni: [
      'Si conformi alle norme del diritto internazionale generalmente riconosciute',
      'Recepisca i trattati internazionali senza necessità di legge di autorizzazione alla ratifica',
      'Non possa in alcun caso limitare la propria sovranità',
      'Prevalga sempre sul diritto internazionale',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 10, comma 1, Cost. contiene il cosiddetto adattamento automatico: le norme consuetudinarie del diritto internazionale generalmente riconosciute entrano nell’ordinamento senza bisogno di un atto interno di recepimento. Le norme pattizie seguono invece la via dell’ordine di esecuzione e trovano copertura nell’art. 117, comma 1, Cost.',
  },
  {
    id: 'cost-l1-017',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Su quale disposizione si fonda la partecipazione dell’Italia all’Unione europea, con le connesse limitazioni di sovranità?',
    opzioni: [
      'Art. 5 Cost.',
      'Art. 11 Cost.',
      'Art. 52 Cost.',
      'Art. 139 Cost.',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 11 Cost. consente, in condizioni di parità con gli altri Stati, le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace e la giustizia fra le nazioni. È la base costituzionale dell’adesione all’Unione europea, come riconosciuto dalla Corte costituzionale già con la sent. n. 183/1973 e poi con la sent. n. 170/1984 (Granital).',
  },
  {
    id: 'cost-l1-018',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quanti sono oggi i componenti elettivi della Camera dei deputati e del Senato?',
    opzioni: [
      '450 deputati e 150 senatori elettivi',
      '630 deputati e 315 senatori elettivi',
      '400 deputati e 200 senatori elettivi',
      '500 deputati e 250 senatori elettivi',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La l. cost. n. 1/2020, confermata dal referendum del settembre 2020, ha modificato gli artt. 56 e 57 Cost. riducendo il numero dei parlamentari a 400 deputati e 200 senatori elettivi (di cui, rispettivamente, 8 e 4 eletti nella circoscrizione Estero). A questi si aggiungono i senatori a vita di cui all’art. 59 Cost.',
  },
  {
    id: 'cost-l1-019',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Chi ha diritto di elettorato attivo per il Senato della Repubblica?',
    opzioni: [
      'Tutti gli elettori che hanno compiuto ventuno anni',
      'I soli elettori iscritti nelle liste della regione di residenza da almeno cinque anni',
      'Tutti gli elettori che hanno compiuto venticinque anni',
      'Tutti gli elettori che hanno compiuto diciotto anni',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La l. cost. n. 1/2021 ha modificato l’art. 58 Cost. eliminando il previgente limite dei venticinque anni: il Senato è ora eletto a suffragio universale e diretto dagli elettori maggiorenni, come la Camera. Resta invece fermo il requisito dei quarant’anni per l’elettorato passivo al Senato.',
  },
  {
    id: 'cost-l1-020',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il divieto di mandato imperativo (art. 67 Cost.) significa che il parlamentare:',
    opzioni: [
      'Rappresenta la Nazione ed esercita le sue funzioni senza vincolo di mandato',
      'Può essere revocato dagli elettori del collegio che lo ha eletto',
      'Risponde civilmente verso il partito delle proprie votazioni',
      'Deve attenersi alle indicazioni del proprio gruppo parlamentare',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 67 Cost. stabilisce che ogni membro del Parlamento rappresenta la Nazione ed esercita le sue funzioni senza vincolo di mandato. Ne consegue che il parlamentare non può essere revocato dagli elettori né giuridicamente obbligato a seguire le direttive del partito: eventuali impegni assunti in tal senso sono privi di effetti giuridici.',
  },
  {
    id: 'cost-l1-021',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'L’insindacabilità di cui all’art. 68, comma 1, Cost. copre:',
    opzioni: [
      'Tutti i reati commessi dal parlamentare durante il mandato',
      'Le opinioni espresse e i voti dati nell’esercizio delle funzioni',
      'Le sole dichiarazioni rese in aula durante le sedute pubbliche',
      'Le condotte del parlamentare anche successive alla cessazione del mandato, senza limiti',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 68, comma 1, Cost. prevede l’irresponsabilità per le opinioni espresse e i voti dati nell’esercizio delle funzioni: si tratta di una prerogativa funzionale, che copre anche le dichiarazioni extra moenia purché legate da nesso funzionale con l’attività parlamentare (Corte cost., sent. n. 10/2000 e successive). I commi 2 e 3 disciplinano invece l’autorizzazione della Camera per perquisizioni, arresto e intercettazioni.',
  },
  {
    id: 'cost-l1-022',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quale maggioranza è richiesta, in via ordinaria, perché una Camera deliberi validamente?',
    opzioni: [
      'L’unanimità dei presenti',
      'La maggioranza dei due terzi dei componenti',
      'La maggioranza dei presenti, salva la presenza della maggioranza dei componenti',
      'La maggioranza assoluta dei componenti, in ogni caso',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 64, comma 3, Cost. richiede, per la validità delle deliberazioni, la presenza della maggioranza dei componenti (quorum strutturale) e il voto favorevole della maggioranza dei presenti (quorum funzionale), salvo che la Costituzione prescriva una maggioranza speciale. È il caso, ad esempio, dell’art. 138 e dell’art. 79 Cost.',
  },
  {
    id: 'cost-l1-023',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Chi ha l’iniziativa legislativa secondo la Costituzione?',
    opzioni: [
      'Il solo Parlamento, in composizione monocamerale',
      'Il Presidente della Repubblica, su proposta del Presidente del Consiglio',
      'Il solo Governo, attraverso disegni di legge deliberati dal Consiglio dei ministri',
      'Il Governo, ciascun parlamentare, il corpo elettorale, il CNEL e i consigli regionali',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 71 Cost. attribuisce l’iniziativa al Governo, a ciascun membro delle Camere e agli organi ed enti ai quali sia conferita da legge costituzionale; il popolo la esercita con la proposta di almeno 50.000 elettori. L’iniziativa spetta inoltre ai consigli regionali (art. 121 Cost.) e al CNEL (art. 99 Cost.).',
  },
  {
    id: 'cost-l1-024',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Entro quanto tempo il decreto-legge deve essere convertito in legge?',
    opzioni: [
      'Sessanta giorni dalla pubblicazione',
      'Novanta giorni dalla presentazione alle Camere',
      'Sei mesi dalla deliberazione del Consiglio dei ministri',
      'Trenta giorni dalla pubblicazione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 77 Cost. impone che il decreto-legge sia presentato il giorno stesso alle Camere e convertito entro sessanta giorni dalla pubblicazione, a pena di decadenza con effetto ex tunc. Le Camere possono comunque regolare con legge i rapporti giuridici sorti sulla base dei decreti non convertiti.',
  },
  {
    id: 'cost-l1-025',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quali presupposti legittimano l’adozione di un decreto-legge?',
    opzioni: [
      'La sola urgenza politica valutata discrezionalmente dal Governo',
      'Casi straordinari di necessità e urgenza',
      'La richiesta della maggioranza assoluta di una Camera',
      'La dichiarazione dello stato di emergenza da parte del Presidente della Repubblica',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 77, comma 2, Cost. consente al Governo di adottare provvedimenti provvisori con forza di legge solo in casi straordinari di necessità e urgenza. La Corte costituzionale ha chiarito che l’evidente mancanza dei presupposti è sindacabile e vizia anche la legge di conversione (sent. nn. 171/2007 e 128/2008).',
  },
  {
    id: 'cost-l1-026',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'La delega legislativa al Governo (art. 76 Cost.) è legittima se la legge delega:',
    opzioni: [
      'È preceduta dal parere favorevole della Corte costituzionale',
      'Indica soltanto l’oggetto, rimettendo al Governo ogni altra scelta',
      'Determina principi e criteri direttivi, per tempo limitato e per oggetti definiti',
      'È approvata a maggioranza dei due terzi dei componenti di ciascuna Camera',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 76 Cost. richiede che la delega sia conferita con determinazione di principi e criteri direttivi, per un tempo limitato e per oggetti definiti. La violazione di questi limiti dà luogo a eccesso di delega, vizio di legittimità costituzionale del decreto legislativo per contrasto con la norma interposta della legge delega.',
  },
  {
    id: 'cost-l1-027',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quali leggi non possono essere sottoposte a referendum abrogativo?',
    opzioni: [
      'Le sole leggi costituzionali',
      'Le leggi approvate da meno di cinque anni',
      'Le leggi in materia di ordinamento giudiziario e di pubblica istruzione',
      'Le leggi tributarie e di bilancio, di amnistia e indulto, di autorizzazione a ratificare trattati',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 75, comma 2, Cost. esclude dal referendum abrogativo le leggi tributarie e di bilancio, di amnistia e di indulto e di autorizzazione a ratificare trattati internazionali. La Corte costituzionale, con la sent. n. 16/1978, ha aggiunto ulteriori cause di inammissibilità, fra cui la disomogeneità del quesito e le leggi costituzionalmente necessarie.',
  },
  {
    id: 'cost-l1-028',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quando la proposta sottoposta a referendum abrogativo è approvata?',
    opzioni: [
      'Se ha partecipato la maggioranza degli aventi diritto e i sì superano i no',
      'Se i sì superano i no, qualunque sia l’affluenza',
      'Se ha partecipato almeno un terzo degli aventi diritto',
      'Se i sì raggiungono i due terzi dei votanti',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 75, comma 4, Cost. richiede un doppio requisito: la partecipazione della maggioranza degli aventi diritto al voto (quorum strutturale) e il raggiungimento della maggioranza dei voti validamente espressi. Il quorum di partecipazione non è invece previsto per il referendum costituzionale dell’art. 138 Cost.',
  },
  {
    id: 'cost-l1-029',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Da chi è eletto il Presidente della Repubblica?',
    opzioni: [
      'Dal corpo elettorale a suffragio universale diretto',
      'Dal Parlamento in seduta comune, integrato da delegati regionali',
      'Dalla sola Camera dei deputati',
      'Dal Consiglio superiore della magistratura',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Ai sensi dell’art. 83 Cost. il Presidente è eletto dal Parlamento in seduta comune, integrato da tre delegati per ogni regione (uno solo per la Valle d’Aosta), eletti dai consigli regionali in modo da assicurare la rappresentanza delle minoranze. Nei primi tre scrutini serve la maggioranza dei due terzi dell’assemblea; dal quarto basta la maggioranza assoluta.',
  },
  {
    id: 'cost-l1-030',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quanto dura il mandato del Presidente della Repubblica?',
    opzioni: [
      'Cinque anni',
      'Sei anni',
      'Sette anni',
      'Nove anni',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 85 Cost. fissa in sette anni la durata del mandato presidenziale, decorrenti dal giuramento. La durata più lunga rispetto alla legislatura serve a sottrarre la figura presidenziale al ciclo politico delle Camere che lo hanno eletto. La Costituzione non pone divieti espressi di rielezione.',
  },
  {
    id: 'cost-l1-031',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Per quali atti il Presidente della Repubblica è responsabile ai sensi dell’art. 90 Cost.?',
    opzioni: [
      'Per i soli reati contro la pubblica amministrazione',
      'Per nessun atto: gode di immunità assoluta e perpetua',
      'Per qualsiasi reato commesso nell’esercizio delle funzioni',
      'Per alto tradimento e attentato alla Costituzione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 90 Cost. rende il Presidente irresponsabile per gli atti compiuti nell’esercizio delle sue funzioni, salvo che per alto tradimento e attentato alla Costituzione. In tali casi la messa in stato d’accusa è deliberata dal Parlamento in seduta comune a maggioranza assoluta dei membri, e il giudizio spetta alla Corte costituzionale in composizione integrata (art. 134 Cost.).',
  },
  {
    id: 'cost-l1-032',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'La controfirma ministeriale degli atti presidenziali serve a:',
    opzioni: [
      'Attestare la regolarità formale dell’atto e assumerne la responsabilità',
      'Consentire al ministro di modificare unilateralmente il contenuto dell’atto',
      'Sostituire la firma del Presidente in caso di suo impedimento',
      'Rendere l’atto conoscibile ai terzi',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 89 Cost. stabilisce che nessun atto del Presidente è valido se non controfirmato dai ministri proponenti, che ne assumono la responsabilità. La controfirma è il congegno che rende compatibile l’irresponsabilità presidenziale con il principio per cui ogni atto di potere deve trovare un responsabile politico.',
  },
  {
    id: 'cost-l1-033',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Chi nomina i ministri?',
    opzioni: [
      'Il Presidente del Consiglio, con proprio decreto',
      'Il Presidente della Repubblica, su proposta del Presidente del Consiglio',
      'Il Parlamento in seduta comune, con voto palese',
      'Il Consiglio dei ministri, a maggioranza dei componenti',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 92, comma 2, Cost. prevede che il Presidente della Repubblica nomini il Presidente del Consiglio e, su proposta di questo, i ministri. Il potere presidenziale non è meramente notarile: la Corte costituzionale, nel conflitto deciso con l’ord. n. 87/2018, ne ha riconosciuto il rilievo autonomo.',
  },
  {
    id: 'cost-l1-034',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'La mozione di sfiducia al Governo (art. 94 Cost.):',
    opzioni: [
      'È deliberata dal Parlamento in seduta comune',
      'Può essere presentata da un solo parlamentare e votata immediatamente',
      'Deve essere firmata da almeno un decimo dei componenti della Camera e non può essere discussa prima di tre giorni',
      'Richiede la maggioranza dei due terzi dei componenti',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 94, comma 5, Cost. richiede che la mozione di sfiducia sia motivata, firmata da almeno un decimo dei componenti della Camera e messa in discussione non prima di tre giorni dalla presentazione. Il comma 4 chiarisce che il voto contrario di una o entrambe le Camere su una proposta del Governo non comporta obbligo di dimissioni.',
  },
  {
    id: 'cost-l1-035',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il potere di scioglimento anticipato delle Camere spetta:',
    opzioni: [
      'Al Parlamento in seduta comune, a maggioranza assoluta',
      'Alla Corte costituzionale, in caso di crisi istituzionale',
      'Al Presidente del Consiglio dei ministri',
      'Al Presidente della Repubblica, sentiti i loro Presidenti',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 88 Cost. attribuisce al Presidente della Repubblica il potere di sciogliere le Camere, o anche una sola di esse, sentiti i loro Presidenti. Il potere non può essere esercitato negli ultimi sei mesi del mandato presidenziale (cosiddetto semestre bianco), salvo che coincidano con gli ultimi sei mesi della legislatura.',
  },
  {
    id: 'cost-l1-036',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quanti sono i giudici della Corte costituzionale e come sono nominati?',
    opzioni: [
      'Quindici: un terzo dal Presidente della Repubblica, un terzo dal Parlamento in seduta comune, un terzo dalle supreme magistrature',
      'Quindici, tutti nominati dal Presidente della Repubblica',
      'Venti: metà dal Parlamento e metà dal Consiglio superiore della magistratura',
      'Dodici, tutti eletti dal Parlamento in seduta comune',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 135 Cost. prevede quindici giudici, nominati per un terzo dal Presidente della Repubblica, per un terzo dal Parlamento in seduta comune e per un terzo dalle supreme magistrature ordinaria e amministrative. Durano in carica nove anni e non sono rieleggibili.',
  },
  {
    id: 'cost-l1-037',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quale fra queste NON rientra fra le competenze della Corte costituzionale?',
    opzioni: [
      'Le controversie sulla legittimità costituzionale delle leggi statali e regionali',
      'Il giudizio di appello sulle sentenze penali della Corte di cassazione',
      'L’ammissibilità delle richieste di referendum abrogativo',
      'I conflitti di attribuzione tra i poteri dello Stato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 134 Cost. elenca tre competenze: legittimità costituzionale delle leggi e degli atti aventi forza di legge, conflitti di attribuzione fra poteri dello Stato e fra Stato e regioni, accuse contro il Presidente della Repubblica. Il giudizio sull’ammissibilità del referendum abrogativo è aggiunto dall’art. 2 della l. cost. n. 1/1953. La Corte non è in alcun caso giudice di impugnazione delle sentenze.',
  },
  {
    id: 'cost-l1-038',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Nel giudizio incidentale, il giudice a quo solleva la questione se essa è:',
    opzioni: [
      'Manifestamente fondata e sostenuta dal pubblico ministero',
      'Rilevante, anche se la norma non deve essere applicata nel giudizio',
      'Rilevante e non manifestamente infondata',
      'Fondata e proposta da entrambe le parti del giudizio',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 23 della l. n. 87/1953 richiede il duplice requisito della rilevanza (la norma deve essere applicabile nel giudizio principale, che non può essere definito indipendentemente dalla sua risoluzione) e della non manifesta infondatezza. Il giudice deve inoltre aver tentato senza esito un’interpretazione conforme a Costituzione.',
  },
  {
    id: 'cost-l1-039',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Da quando cessa di avere efficacia una norma dichiarata incostituzionale?',
    opzioni: [
      'Dalla data di entrata in vigore della norma dichiarata illegittima, senza alcun limite',
      'Dal momento in cui il legislatore l’abbia formalmente abrogata',
      'Dalla data di deposito della sentenza in cancelleria',
      'Dal giorno successivo alla pubblicazione della decisione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 136 Cost. stabilisce che la norma cessa di avere efficacia dal giorno successivo alla pubblicazione della decisione. L’effetto opera però anche sui rapporti pendenti e non esauriti (art. 30, comma 3, l. n. 87/1953): restano salvi i rapporti esauriti e, in materia penale, cessano esecuzione ed effetti penali della condanna.',
  },
  {
    id: 'cost-l1-040',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Che efficacia ha una sentenza di rigetto della Corte costituzionale?',
    opzioni: [
      'Limitata al giudizio a quo: la questione può essere riproposta da altri giudici',
      'Abrogativa della norma impugnata, come quella di accoglimento',
      'Meramente consultiva, priva di ogni vincolo',
      'Erga omnes, con divieto per chiunque di riproporre la questione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La sentenza di rigetto non dichiara la norma costituzionalmente legittima in assoluto, ma respinge la questione così come proposta: vincola il solo giudice a quo, che non può riproporla nello stesso stato e grado del giudizio. La questione resta riproponibile da altri giudici o dallo stesso giudice con diversi profili. Solo la sentenza di accoglimento ha efficacia erga omnes.',
  },
  {
    id: 'cost-l1-041',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il Consiglio superiore della magistratura è presieduto:',
    opzioni: [
      'Dal Primo presidente della Corte di cassazione',
      'Dal Presidente della Repubblica',
      'Dal Ministro della giustizia',
      'Dal componente laico più anziano',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 104 Cost. dispone che il CSM sia presieduto dal Presidente della Repubblica; ne fanno parte di diritto il Primo presidente e il Procuratore generale della Corte di cassazione. Gli altri componenti sono eletti per due terzi da tutti i magistrati ordinari e per un terzo dal Parlamento in seduta comune fra professori ordinari di materie giuridiche e avvocati con quindici anni di esercizio.',
  },
  {
    id: 'cost-l1-042',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Che effetto ha avuto sul Titolo IV della Costituzione la riforma sulla separazione delle carriere dei magistrati?',
    opzioni: [
      'È stata dichiarata illegittima dalla Corte costituzionale',
      'È entrata in vigore, sdoppiando il CSM e istituendo l’Alta Corte disciplinare',
      'Nessuno: bocciata dal referendum costituzionale del marzo 2026, non è entrata in vigore',
      'È entrata in vigore limitatamente all’istituzione dell’Alta Corte disciplinare',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La legge di revisione costituzionale sulla separazione delle carriere, che prevedeva due Consigli superiori distinti con componenti estratti a sorte e un’Alta Corte disciplinare, è stata approvata dalle Camere senza la maggioranza dei due terzi ed è stata quindi sottoposta a referendum ai sensi dell’art. 138 Cost. Nella consultazione del marzo 2026 ha prevalso il No: la riforma non è entrata in vigore e il Titolo IV resta invariato.',
  },
  {
    id: 'cost-l1-043',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il principio del giudice naturale precostituito per legge comporta che:',
    opzioni: [
      'Il giudice possa essere designato caso per caso dal Ministro della giustizia',
      'Ogni causa sia decisa dal giudice del luogo di residenza dell’attore',
      'Il giudice sia scelto dalle parti di comune accordo',
      'La competenza sia determinata da criteri legali prestabiliti rispetto al fatto',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 25, comma 1, Cost. vieta che il giudice sia individuato ex post o in vista di uno specifico processo: la competenza deve risultare da criteri generali e astratti fissati dalla legge prima del fatto da giudicare. È il presidio contro i giudici straordinari e speciali, vietati anche dall’art. 102, comma 2, Cost.',
  },
  {
    id: 'cost-l1-044',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il principio del giusto processo è stato costituzionalizzato:',
    opzioni: [
      'Dalla l. cost. n. 2/1999, che ha riscritto l’art. 111 Cost.',
      'Dalla l. cost. n. 3/2001, che ha riformato il Titolo V',
      'Dalla l. cost. n. 1/2012, sull’equilibrio di bilancio',
      'Direttamente dal testo originario del 1948, senza modifiche successive',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La l. cost. n. 2/1999 ha riscritto l’art. 111 Cost., introducendo i principi del contraddittorio fra le parti in condizioni di parità davanti a giudice terzo e imparziale, della ragionevole durata e, per il processo penale, del contraddittorio nella formazione della prova. Il comma 7 mantiene il ricorso in Cassazione per violazione di legge contro sentenze e provvedimenti sulla libertà personale.',
  },
  {
    id: 'cost-l1-045',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Secondo l’art. 117, comma 1, Cost., la potestà legislativa dello Stato e delle Regioni incontra il limite:',
    opzioni: [
      'Del solo rispetto della Costituzione',
      'Della Costituzione e dei vincoli derivanti dall’ordinamento comunitario e dagli obblighi internazionali',
      'Delle sole direttive del Governo in materia di finanza pubblica',
      'Dei regolamenti comunali delle città metropolitane',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 117, comma 1, Cost., come riformato dalla l. cost. n. 3/2001, vincola il legislatore statale e regionale al rispetto della Costituzione e dei vincoli derivanti dall’ordinamento comunitario e dagli obblighi internazionali. Su questa base la Corte costituzionale, con le sentenze gemelle nn. 348 e 349/2007, ha qualificato la CEDU come norma interposta.',
  },
  {
    id: 'cost-l1-046',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Nelle materie di legislazione concorrente (art. 117, comma 3, Cost.):',
    opzioni: [
      'La competenza è ripartita di volta in volta con accordo in Conferenza Stato-Regioni',
      'La competenza spetta in via esclusiva alle sole Regioni a statuto speciale',
      'Lo Stato detta i principi fondamentali e le Regioni la disciplina di dettaglio',
      'Le Regioni dettano i principi e lo Stato il dettaglio',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Nelle materie di competenza concorrente elencate dall’art. 117, comma 3, Cost. la potestà legislativa spetta alle Regioni, salva la determinazione dei principi fondamentali riservata alla legislazione dello Stato. Il comma 4 attribuisce invece alle Regioni la potestà residuale in ogni materia non espressamente riservata allo Stato.',
  },
  {
    id: 'cost-l1-047',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quale fra queste è materia di legislazione esclusiva statale?',
    opzioni: [
      'Il governo del territorio',
      'La tutela della salute',
      'Il commercio con l’estero',
      'L’ordinamento civile e penale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’ordinamento civile e penale, insieme alla giurisdizione e alle norme processuali, è riservato allo Stato dall’art. 117, comma 2, lett. l), Cost. Commercio con l’estero, governo del territorio e tutela della salute figurano invece nell’elenco delle materie di legislazione concorrente del comma 3.',
  },
  {
    id: 'cost-l1-048',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il principio di sussidiarietà nell’allocazione delle funzioni amministrative comporta che:',
    opzioni: [
      'Le funzioni siano attribuite ai Comuni, salvo che richiedano esercizio unitario a livello superiore',
      'Le funzioni siano ripartite in parti uguali fra i livelli di governo',
      'Le funzioni siano attribuite alle Province, in quanto enti intermedi',
      'Tutte le funzioni siano attribuite allo Stato, salvo delega alle Regioni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 118, comma 1, Cost. attribuisce le funzioni amministrative ai Comuni, salvo che, per assicurarne l’esercizio unitario, siano conferite a Province, Città metropolitane, Regioni e Stato sulla base dei principi di sussidiarietà, differenziazione e adeguatezza. Il comma 4 enuncia la sussidiarietà orizzontale a favore dell’iniziativa dei cittadini.',
  },
  {
    id: 'cost-l1-049',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quante e quali sono le Regioni a statuto speciale?',
    opzioni: [
      'Tre: Sicilia, Sardegna e Valle d’Aosta',
      'Cinque: Sicilia, Sardegna, Trentino-Alto Adige, Friuli-Venezia Giulia e Valle d’Aosta',
      'Sette, comprese Calabria e Basilicata',
      'Nessuna: la distinzione è stata soppressa dalla riforma del Titolo V',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 116, comma 1, Cost. individua cinque Regioni ad autonomia particolare: Friuli-Venezia Giulia, Sardegna, Sicilia, Trentino-Alto Adige/Südtirol e Valle d’Aosta/Vallée d’Aoste, i cui statuti sono adottati con legge costituzionale. Il comma 2 riconosce autonomia particolare anche alle Province autonome di Trento e di Bolzano.',
  },
  {
    id: 'cost-l1-050',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Chi promulga le leggi ordinarie dello Stato?',
    opzioni: [
      'Il Ministro competente per materia',
      'Il Presidente del Consiglio dei ministri',
      'Il Presidente della Repubblica, entro un mese dall’approvazione',
      'I Presidenti delle due Camere, congiuntamente',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 73 Cost. affida la promulgazione al Presidente della Repubblica entro un mese dall’approvazione. L’art. 74 gli consente, prima di promulgare, di chiedere con messaggio motivato una nuova deliberazione: se le Camere approvano nuovamente, la legge deve essere promulgata.',
  },
  {
    id: 'cost-l1-051',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'La riserva di legge assoluta si distingue da quella relativa perché:',
    opzioni: [
      'Consente la disciplina della materia anche con atto amministrativo generale',
      'Riguarda soltanto le materie di competenza regionale',
      'Ammette l’intervento del regolamento solo per la disciplina di dettaglio',
      'Esclude qualsiasi intervento di fonti secondarie nella materia riservata',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Nella riserva assoluta la materia deve essere disciplinata integralmente dalla legge, senza spazio per le fonti secondarie: è il caso degli artt. 13 e 25, comma 2, Cost. Nella riserva relativa la legge può limitarsi a fissare i principi, lasciando al regolamento la disciplina di dettaglio, come nell’art. 23 Cost. in materia di prestazioni imposte.',
  },
  {
    id: 'cost-l1-052',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'L’art. 23 Cost. stabilisce che nessuna prestazione personale o patrimoniale può essere imposta:',
    opzioni: [
      'Se non in base alla legge',
      'Se non con il consenso dell’interessato',
      'Se non con atto del Governo deliberato in Consiglio dei ministri',
      'Se non per un periodo superiore a un anno',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 23 Cost. pone una riserva di legge relativa: la legge deve individuare i presupposti e i criteri dell’imposizione, potendo rimettere a fonti secondarie la determinazione degli aspetti tecnici. È la norma di riferimento anche per il diritto tributario, letta insieme all’art. 53 Cost. sulla capacità contributiva.',
  },
  {
    id: 'cost-l1-053',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il sistema tributario, secondo l’art. 53 Cost., è informato a criteri di:',
    opzioni: [
      'Proporzionalità',
      'Progressività',
      'Regressività',
      'Uniformità assoluta',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 53, comma 1, Cost. impone a tutti di concorrere alle spese pubbliche in ragione della propria capacità contributiva; il comma 2 stabilisce che il sistema tributario è informato a criteri di progressività. La progressività è riferita al sistema nel suo complesso, non a ciascun singolo tributo.',
  },
  {
    id: 'cost-l1-054',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'La tutela giurisdizionale contro gli atti della pubblica amministrazione (art. 113 Cost.):',
    opzioni: [
      'È ammessa solo davanti al giudice amministrativo',
      'Può essere limitata dalla legge a determinati mezzi di impugnazione, senza altri limiti',
      'È sempre ammessa e non può essere esclusa per particolari categorie di atti',
      'È esclusa per gli atti di alta amministrazione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 113 Cost. garantisce sempre la tutela giurisdizionale dei diritti e degli interessi legittimi contro gli atti della pubblica amministrazione, davanti agli organi di giurisdizione ordinaria o amministrativa. Il comma 2 vieta di escluderla o limitarla a particolari mezzi di impugnazione o per determinate categorie di atti.',
  },
  {
    id: 'cost-l1-055',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Amnistia e indulto sono concessi:',
    opzioni: [
      'Con decreto-legge, in casi di necessità e urgenza',
      'Con delibera del Consiglio superiore della magistratura',
      'Con decreto del Presidente della Repubblica, su proposta del Ministro della giustizia',
      'Con legge deliberata a maggioranza dei due terzi dei componenti di ciascuna Camera',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 79 Cost., come modificato dalla l. cost. n. 1/1992, richiede una legge approvata a maggioranza dei due terzi dei componenti di ciascuna Camera, in ogni suo articolo e nella votazione finale. La legge deve inoltre stabilire il termine per la loro applicazione, che non può riguardare reati commessi successivamente alla proposta.',
  },
  {
    id: 'cost-l1-056',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'La grazia è concessa:',
    opzioni: [
      'Dal Presidente della Repubblica',
      'Dal Ministro della giustizia',
      'Dal Parlamento in seduta comune',
      'Dal giudice dell’esecuzione',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 87, comma 11, Cost. attribuisce al Presidente della Repubblica il potere di concedere la grazia e di commutare le pene. La Corte costituzionale, con la sent. n. 200/2006, ha chiarito che si tratta di un potere sostanzialmente presidenziale: il Ministro della giustizia controfirma senza poterne impedire l’esercizio.',
  },
  {
    id: 'cost-l1-057',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Quale principio esprime l’art. 5 Cost.?',
    opzioni: [
      'Il federalismo, con pari sovranità di Stato e Regioni',
      'L’unità e indivisibilità della Repubblica, che promuove le autonomie locali',
      'La separazione rigida dei poteri dello Stato',
      'La supremazia del diritto internazionale su quello interno',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 5 Cost. afferma che la Repubblica, una e indivisibile, riconosce e promuove le autonomie locali e attua il più ampio decentramento amministrativo. È un principio fondamentale non modificabile nel suo nucleo essenziale, che convive con l’autonomia riconosciuta dal Titolo V senza trasformare l’Italia in uno Stato federale.',
  },
  {
    id: 'cost-l1-058',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'I rapporti fra lo Stato e le confessioni religiose diverse da quella cattolica sono regolati:',
    opzioni: [
      'Da accordi conclusi dalle singole Regioni',
      'Dai Patti Lateranensi, in via analogica',
      'Per legge, sulla base di intese con le relative rappresentanze',
      'Da regolamenti governativi adottati previo parere del Consiglio di Stato',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 8, comma 3, Cost. prevede che i rapporti con le confessioni diverse dalla cattolica siano regolati per legge sulla base di intese con le relative rappresentanze. L’art. 7 disciplina invece i rapporti con la Chiesa cattolica, regolati dai Patti Lateranensi, le cui modificazioni accettate dalle due parti non richiedono procedimento di revisione costituzionale.',
  },
  {
    id: 'cost-l1-059',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'La libertà di associazione (art. 18 Cost.) incontra il divieto:',
    opzioni: [
      'Di ogni associazione non riconosciuta come persona giuridica',
      'Delle associazioni con finalità politiche, in quanto riservate ai partiti',
      'Delle associazioni con più di cento aderenti',
      'Delle associazioni segrete e di quelle che perseguono, anche indirettamente, scopi politici mediante organizzazioni di carattere militare',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 18 Cost. riconosce ai cittadini il diritto di associarsi liberamente, senza autorizzazione, per fini non vietati ai singoli dalla legge penale, e vieta le associazioni segrete e quelle che perseguono, anche indirettamente, scopi politici mediante organizzazioni di carattere militare. Si aggiunge il divieto di ricostituzione del disciolto partito fascista (XII disp. trans. e fin.).',
  },
  {
    id: 'cost-l1-060',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'L’estradizione del cittadino:',
    opzioni: [
      'È ammessa solo se espressamente prevista dalle convenzioni internazionali',
      'È liberamente disposta dal Ministro della giustizia',
      'È ammessa per qualsiasi reato, su richiesta dello Stato estero',
      'È sempre vietata, senza eccezioni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 26 Cost. consente l’estradizione del cittadino soltanto nei casi espressamente previsti dalle convenzioni internazionali, e in nessun caso per reati politici. Il divieto per i reati politici vale anche per lo straniero ai sensi dell’art. 10, comma 4, Cost., che al comma 3 riconosce il diritto d’asilo.',
  },
  {
    id: 'cost-l1-061',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il principio di equilibrio del bilancio è stato inserito in Costituzione:',
    opzioni: [
      'Dalla l. cost. n. 1/2020, sulla riduzione dei parlamentari',
      'Dalla l. cost. n. 1/2012, che ha riscritto l’art. 81 Cost.',
      'Dalla l. cost. n. 3/2001, di riforma del Titolo V',
      'Dal testo originario della Costituzione del 1948',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La l. cost. n. 1/2012 ha riscritto l’art. 81 Cost., imponendo allo Stato di assicurare l’equilibrio fra entrate e spese del bilancio, tenendo conto delle fasi avverse e favorevoli del ciclo economico. Il ricorso all’indebitamento è consentito solo per considerare gli effetti del ciclo o, previa autorizzazione a maggioranza assoluta, al verificarsi di eventi eccezionali.',
  },
  {
    id: 'cost-l1-062',
    materia: 'Diritto costituzionale',
    difficolta: 1,
    domanda:
      'Il diritto di difesa, secondo l’art. 24 Cost., è:',
    opzioni: [
      'Garantito soltanto nei giudizi davanti al giudice ordinario',
      'Riconosciuto solo nel processo penale',
      'Diritto inviolabile in ogni stato e grado del procedimento',
      'Subordinato alla capacità economica della parte',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 24, comma 2, Cost. qualifica la difesa come diritto inviolabile in ogni stato e grado del procedimento. Il comma 1 garantisce a tutti la tutela giurisdizionale dei diritti e degli interessi legittimi; il comma 3 assicura ai non abbienti i mezzi per agire e difendersi davanti a ogni giurisdizione, base costituzionale del patrocinio a spese dello Stato.',
  },
];
