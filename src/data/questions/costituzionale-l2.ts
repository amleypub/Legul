import type { QuizQuestion } from '../../types';

/**
 * Diritto costituzionale — Unità 2 · Consolidamento.
 *
 * Si passa dall'ossatura al funzionamento: sistema delle fonti e criteri
 * di risoluzione delle antinomie, procedimento legislativo, forma di
 * governo in concreto, tipologie di decisioni della Corte, rapporti con
 * l'ordinamento dell'Unione e con la CEDU.
 */
export const costituzionaleL2: QuizQuestion[] = [
  {
    id: 'cost-l2-001',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Fra due norme di pari rango, di cui una generale successiva e una speciale anteriore, quale criterio prevale di regola?',
    opzioni: [
      'Il criterio della competenza, sempre applicabile',
      'Il criterio cronologico: prevale sempre la norma successiva',
      'Il criterio di specialità: la norma speciale anteriore resiste alla generale successiva',
      'Il criterio gerarchico, che opera anche fra norme di pari grado',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il criterio cronologico (lex posterior derogat priori) cede di fronte a quello di specialità: la lex specialis anterior non è abrogata dalla lex generalis posterior, salvo che quest’ultima manifesti la volontà di disciplinare integralmente la materia. L’art. 15 delle preleggi distingue infatti abrogazione espressa, per incompatibilità e per nuova disciplina dell’intera materia.',
  },
  {
    id: 'cost-l2-002',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il criterio della competenza nel sistema delle fonti serve a:',
    opzioni: [
      'Determinare l’ordine cronologico di entrata in vigore delle fonti',
      'Individuare la fonte gerarchicamente superiore in caso di dubbio',
      'Stabilire quale giudice sia competente a decidere sulla norma',
      'Ripartire ambiti riservati a fonti diverse, che non possono invadersi a vicenda',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il criterio della competenza opera quando la Costituzione riserva un ambito a una fonte determinata: i regolamenti parlamentari (art. 64 Cost.), le leggi regionali nelle materie dell’art. 117 Cost., i regolamenti dell’Unione. In quegli ambiti la fonte competente non è né superiore né successiva rispetto alle altre: è l’unica abilitata, e l’invasione altrui è invalidità, non abrogazione.',
  },
  {
    id: 'cost-l2-003',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'I regolamenti governativi dell’art. 17 l. n. 400/1988 sono fonti:',
    opzioni: [
      'Secondarie, subordinate alla legge e disapplicabili dal giudice se illegittime',
      'Costituzionali, se adottati in attuazione diretta della Costituzione',
      'Atipiche, sottratte a ogni sindacato giurisdizionale',
      'Primarie, equiparate alla legge ordinaria',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'I regolamenti sono fonti secondarie, formalmente atti amministrativi: sono impugnabili davanti al giudice amministrativo e disapplicabili dal giudice ordinario se contrari alla legge. Non possono essere sindacati dalla Corte costituzionale, che ai sensi dell’art. 134 Cost. giudica solo di leggi e atti aventi forza di legge.',
  },
  {
    id: 'cost-l2-004',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'I regolamenti di delegificazione (art. 17, comma 2, l. n. 400/1988):',
    opzioni: [
      'Abrogano direttamente la legge previgente, di propria iniziativa',
      'Operano in forza di una legge che autorizza la disciplina regolamentare e dispone l’abrogazione differita delle norme legislative',
      'Possono intervenire anche nelle materie coperte da riserva assoluta di legge',
      'Sono adottati dal Ministro competente senza deliberazione del Consiglio dei ministri',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Nella delegificazione la legge autorizza il regolamento a disciplinare una materia, ne fissa le norme generali regolatrici e dispone l’abrogazione delle norme legislative vigenti con effetto dall’entrata in vigore del regolamento. L’effetto abrogativo è quindi della legge, non del regolamento. Lo strumento è precluso nelle materie coperte da riserva assoluta di legge.',
  },
  {
    id: 'cost-l2-005',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La legge di conversione del decreto-legge può contenere emendamenti:',
    opzioni: [
      'In nessun caso: la conversione può essere solo integrale o negata',
      'Di qualsiasi contenuto, essendo una legge ordinaria a tutti gli effetti',
      'Solo se omogenei rispetto all’oggetto o alla finalità del decreto',
      'Solo se proposti dal Governo',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte costituzionale, con la sent. n. 22/2012 e la successiva giurisprudenza, ha affermato che la legge di conversione ha natura di legge funzionalizzata: gli emendamenti devono essere omogenei rispetto all’oggetto o alla finalità del decreto. Le disposizioni «intruse» sono illegittime per violazione dell’art. 77 Cost.',
  },
  {
    id: 'cost-l2-006',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Che cosa vieta l’art. 15, comma 2, della l. n. 400/1988 al decreto-legge?',
    opzioni: [
      'Di produrre effetti prima della conversione',
      'Di essere adottato durante le sedute delle Camere',
      'Di disciplinare materie di competenza regionale',
      'Di conferire deleghe legislative, provvedere in materie coperte da riserva di assemblea, rinnovare decreti non convertiti',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 15, comma 2, l. n. 400/1988 vieta al decreto-legge di conferire deleghe legislative, provvedere nelle materie indicate dall’art. 72, comma 4, Cost. (riserva di assemblea), rinnovare disposizioni di decreti non convertiti, regolare i rapporti sorti sulla base di decreti non convertiti e ripristinare l’efficacia di norme dichiarate illegittime.',
  },
  {
    id: 'cost-l2-007',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Per quali progetti di legge è obbligatoria la procedura normale di esame e approvazione in aula?',
    opzioni: [
      'Per i disegni di legge in materia costituzionale ed elettorale, delegazione legislativa, ratifica di trattati, bilanci e consuntivi',
      'Per i soli disegni di legge di conversione dei decreti-legge',
      'Per nessuno: la scelta della procedura è sempre rimessa al Presidente della Camera',
      'Per tutti i disegni di legge di iniziativa governativa',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 72, comma 4, Cost. riserva all’esame e all’approvazione diretta dell’assemblea i disegni di legge in materia costituzionale ed elettorale, quelli di delegazione legislativa, di autorizzazione a ratificare trattati internazionali e di approvazione di bilanci e consuntivi. Per gli altri è ammessa la procedura decentrata in commissione deliberante o redigente.',
  },
  {
    id: 'cost-l2-008',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il rinvio presidenziale della legge alle Camere (art. 74 Cost.):',
    opzioni: [
      'Deve essere autorizzato dal Consiglio dei ministri',
      'Può essere esercitato una sola volta sulla medesima legge',
      'Può essere reiterato ogni volta che la legge sia riapprovata',
      'Comporta l’automatica decadenza del progetto di legge',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 74 Cost. consente al Presidente della Repubblica di chiedere con messaggio motivato una nuova deliberazione; se le Camere approvano nuovamente la legge, questa deve essere promulgata. Il potere è quindi di veto sospensivo e non reiterabile sullo stesso testo. Resta discussa in dottrina la possibilità di rifiutare la promulgazione in ipotesi estreme di incostituzionalità manifesta.',
  },
  {
    id: 'cost-l2-009',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Le sentenze «additive» della Corte costituzionale:',
    opzioni: [
      'Rinviano al legislatore senza alcun effetto immediato',
      'Sostituiscono integralmente la legge impugnata con una nuova disciplina',
      'Dichiarano illegittima la norma nella parte in cui non prevede qualcosa che dovrebbe prevedere',
      'Aggiungono una nuova disposizione al testo della Costituzione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Con le additive la Corte dichiara l’illegittimità della norma «nella parte in cui non prevede» un determinato contenuto, che viene ricavato dal sistema come soluzione costituzionalmente obbligata (le cosiddette rime obbligate). Quando la soluzione non è univoca la Corte tende invece a pronunciare inammissibilità o a ricorrere alle additive di principio.',
  },
  {
    id: 'cost-l2-010',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Le sentenze interpretative di rigetto:',
    opzioni: [
      'Dichiarano inammissibile la questione per difetto di rilevanza',
      'Vincolano tutti i giudici a seguire l’interpretazione indicata',
      'Annullano la norma con efficacia erga omnes',
      'Respingono la questione sulla base di un’interpretazione conforme a Costituzione della disposizione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Con l’interpretativa di rigetto la Corte afferma che la disposizione, correttamente interpretata, non è incostituzionale: la questione viene respinta perché fondata su una lettura non necessitata. L’efficacia resta limitata al giudizio a quo; se i giudici comuni continuano a seguire l’interpretazione censurata, la Corte può giungere a una interpretativa di accoglimento.',
  },
  {
    id: 'cost-l2-011',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il giudizio in via principale sulle leggi regionali è promosso:',
    opzioni: [
      'Dal Governo entro sessanta giorni dalla pubblicazione della legge regionale',
      'Dal giudice ordinario in via incidentale',
      'Dal Presidente della Repubblica in sede di promulgazione',
      'Da qualunque cittadino interessato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 127 Cost. consente al Governo di promuovere la questione di legittimità costituzionale della legge regionale entro sessanta giorni dalla sua pubblicazione, quando ritenga che ecceda la competenza della Regione. Simmetricamente la Regione può impugnare leggi statali o di altre Regioni che ledano la propria sfera di competenza.',
  },
  {
    id: 'cost-l2-012',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Nel conflitto di attribuzione fra poteri dello Stato, la Corte si pronuncia anzitutto:',
    opzioni: [
      'Sul merito della questione, senza filtri preliminari',
      'Sull’ammissibilità, verificando i requisiti soggettivo e oggettivo',
      'Sulla competenza territoriale del giudice a quo',
      'Sulla rilevanza della questione nel processo principale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il giudizio si articola in due fasi: con ordinanza in camera di consiglio la Corte delibera sull’ammissibilità, verificando che il ricorrente sia potere dello Stato competente a dichiarare definitivamente la volontà del potere cui appartiene (requisito soggettivo) e che sia dedotta una lesione della sfera di attribuzioni costituzionali (requisito oggettivo). Solo dopo si passa al merito.',
  },
  {
    id: 'cost-l2-013',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Secondo la sentenza Granital (Corte cost. n. 170/1984), di fronte a una norma interna contrastante con un regolamento dell’Unione il giudice deve:',
    opzioni: [
      'Rimettere gli atti alla Corte di giustizia per l’annullamento della norma interna',
      'Sollevare questione di legittimità costituzionale',
      'Non applicare la norma interna, dando diretta applicazione a quella europea',
      'Applicare la norma interna, in quanto successiva',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Con la sent. n. 170/1984 la Corte ha abbandonato il criterio gerarchico e accolto quello della competenza: il giudice comune non applica la norma interna incompatibile con quella europea dotata di effetto diretto, senza bisogno di rimettere la questione. Il sindacato della Corte resta per le violazioni dei principi supremi (teoria dei controlimiti) e per i casi di contrasto non risolvibile con la non applicazione.',
  },
  {
    id: 'cost-l2-014',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Che rango ha la CEDU nell’ordinamento italiano secondo le sentenze gemelle del 2007?',
    opzioni: [
      'Rango di legge ordinaria, derogabile da legge successiva',
      'Rango sovracostituzionale, prevalente anche sui principi supremi',
      'Rango costituzionale, pari a quello della Costituzione',
      'Rango subcostituzionale: norma interposta che integra il parametro dell’art. 117, comma 1, Cost.',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Con le sentenze nn. 348 e 349/2007 la Corte ha collocato la CEDU a un livello subcostituzionale: le sue norme, come interpretate dalla Corte di Strasburgo, integrano il parametro dell’art. 117, comma 1, Cost. quali norme interposte. Il giudice non può disapplicare la legge interna contrastante, ma deve sollevare questione di legittimità costituzionale, previa verifica di compatibilità della stessa CEDU con la Costituzione.',
  },
  {
    id: 'cost-l2-015',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La dottrina dei «controlimiti» consiste:',
    opzioni: [
      'Nell’intangibilità dei principi supremi dell’ordinamento e dei diritti inviolabili di fronte al diritto dell’Unione',
      'Nel divieto per le Regioni di legiferare in materie statali',
      'Nel limite temporale di efficacia dei trattati internazionali',
      'Nel limite quantitativo alle limitazioni di sovranità consentite dall’art. 11 Cost.',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'I controlimiti sono i principi supremi dell’ordinamento costituzionale e i diritti inalienabili della persona, che non possono essere sacrificati dalle limitazioni di sovranità consentite dall’art. 11 Cost. Enunciati con le sentenze nn. 183/1973 e 170/1984 e ribaditi nella sent. n. 238/2014, sono stati concretamente evocati nella vicenda Taricco (ord. n. 24/2017 e sent. n. 115/2018).',
  },
  {
    id: 'cost-l2-016',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La cosiddetta «doppia pregiudizialità» riguarda il caso in cui:',
    opzioni: [
      'Due giudici sollevino la stessa questione davanti alla Corte costituzionale',
      'Una norma interna sia sospettata di violare insieme la Costituzione e la Carta dei diritti fondamentali dell’Unione',
      'La questione sia rilevante in due distinti processi',
      'La Corte costituzionale debba decidere prima sull’ammissibilità e poi sul merito',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Con la sent. n. 269/2017 e le successive precisazioni (nn. 20 e 63/2019, 182/2020) la Corte ha affermato che, quando la legge interna sia sospettata di violare al contempo la Costituzione e la Carta di Nizza, il giudice può rivolgersi anzitutto alla Corte costituzionale, restando ferma la facoltà di rinvio pregiudiziale alla Corte di giustizia e di non applicazione della norma interna.',
  },
  {
    id: 'cost-l2-017',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il potere estero delle Regioni (art. 117, comma 9, Cost.):',
    opzioni: [
      'Consente alle Regioni di aderire autonomamente a organizzazioni internazionali',
      'È escluso: la politica estera è materia esclusiva statale senza eccezioni',
      'Consente alle Regioni di concludere accordi con Stati e intese con enti territoriali interni ad altro Stato, nei casi e forme disciplinati da legge statale',
      'Permette alle Regioni di ratificare trattati internazionali',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 117, comma 9, Cost. abilita le Regioni, nelle materie di loro competenza, a concludere accordi con Stati e intese con enti territoriali interni ad altro Stato, nei casi e con le forme disciplinati da leggi dello Stato (l. n. 131/2003, art. 6). Resta ferma la competenza esclusiva statale in materia di politica estera e rapporti internazionali dello Stato (comma 2, lett. a).',
  },
  {
    id: 'cost-l2-018',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La «chiamata in sussidiarietà» elaborata dalla Corte costituzionale consente allo Stato:',
    opzioni: [
      'Di sostituirsi liberamente alle Regioni in ogni materia concorrente',
      'Di abrogare le leggi regionali con decreto-legge',
      'Di trasferire alle Province le funzioni comunali',
      'Di attrarre funzioni amministrative e la relativa disciplina legislativa in materie regionali, se necessario per l’esercizio unitario e previa intesa',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Con la sent. n. 303/2003 la Corte ha ammesso che lo Stato attragga a sé funzioni amministrative in materie di competenza regionale, insieme alla potestà legislativa necessaria a disciplinarle, purché la disciplina sia proporzionata, ragionevole e adottata previa intesa con la Regione interessata, in applicazione del principio di leale collaborazione.',
  },
  {
    id: 'cost-l2-019',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il potere sostitutivo del Governo verso Regioni ed enti locali (art. 120, comma 2, Cost.) è esercitabile:',
    opzioni: [
      'Nei casi indicati dalla Costituzione, nel rispetto dei principi di sussidiarietà e leale collaborazione',
      'Solo previa autorizzazione della Corte costituzionale',
      'Solo nei confronti delle Regioni a statuto speciale',
      'In ogni caso di inerzia dell’ente, senza limiti procedurali',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 120, comma 2, Cost. prevede il potere sostitutivo in caso di mancato rispetto di norme e trattati internazionali o della normativa comunitaria, di pericolo grave per l’incolumità e la sicurezza pubblica, o quando lo richiedano la tutela dell’unità giuridica o economica e in particolare dei livelli essenziali delle prestazioni. La legge definisce le procedure, nel rispetto di sussidiarietà e leale collaborazione.',
  },
  {
    id: 'cost-l2-020',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Lo statuto delle Regioni ordinarie è approvato:',
    opzioni: [
      'Con legge statale, su proposta del consiglio regionale',
      'Con legge regionale approvata a maggioranza assoluta in due deliberazioni successive a non meno di due mesi di distanza',
      'Con decreto del Presidente della Repubblica',
      'Con legge costituzionale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 123 Cost., come riformato dalla l. cost. n. 1/1999, prevede che lo statuto ordinario sia adottato con legge regionale approvata dal consiglio a maggioranza assoluta dei componenti, con due deliberazioni successive a intervallo non minore di due mesi. È possibile il referendum regionale e il Governo può promuovere la questione di legittimità entro trenta giorni. Gli statuti speciali sono invece adottati con legge costituzionale.',
  },
  {
    id: 'cost-l2-021',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La regola del simul stabunt simul cadent nelle Regioni comporta che:',
    opzioni: [
      'Il Presidente resti in carica anche dopo lo scioglimento del consiglio',
      'La giunta decada solo se sfiduciata singolarmente nei suoi componenti',
      'Le dimissioni del Presidente eletto a suffragio universale determinano lo scioglimento del consiglio',
      'Il consiglio regionale possa sfiduciare il Presidente senza conseguenze sulla propria durata',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 126, comma 3, Cost. stabilisce che l’approvazione della mozione di sfiducia nei confronti del Presidente eletto a suffragio universale, così come la sua rimozione, le sue dimissioni, l’impedimento permanente o la morte comportano le dimissioni della giunta e lo scioglimento del consiglio. La regola presidia la stabilità dell’esecutivo regionale.',
  },
  {
    id: 'cost-l2-022',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'I livelli essenziali delle prestazioni (LEP) di cui all’art. 117, comma 2, lett. m), Cost.:',
    opzioni: [
      'Spettano alla competenza residuale delle Regioni',
      'Sono determinati dalla Conferenza Stato-Regioni con atto amministrativo',
      'Sono una materia in senso stretto, delimitata per oggetto',
      'Sono una competenza trasversale dello Stato, che può incidere su materie regionali',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte costituzionale ha qualificato i LEP come competenza trasversale o «finalistica»: non individuano una materia, ma abilitano lo Stato a fissare standard uniformi di prestazione concernenti i diritti civili e sociali su tutto il territorio, potendo così incidere anche su ambiti di competenza regionale (sent. nn. 282/2002 e 88/2003).',
  },
  {
    id: 'cost-l2-023',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La riserva di legge dell’art. 97 Cost. in materia di pubblici uffici è funzionale a garantire:',
    opzioni: [
      'Buon andamento e imparzialità dell’amministrazione',
      'La libertà di iniziativa economica degli operatori privati',
      'L’autonomia contrattuale della pubblica amministrazione',
      'Il solo pareggio di bilancio delle amministrazioni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 97 Cost. stabilisce che i pubblici uffici sono organizzati secondo disposizioni di legge in modo che siano assicurati il buon andamento e l’imparzialità dell’amministrazione. Il comma 1, aggiunto dalla l. cost. n. 1/2012, impone alle amministrazioni di assicurare l’equilibrio dei bilanci e la sostenibilità del debito pubblico; il comma 4 pone la regola del concorso pubblico.',
  },
  {
    id: 'cost-l2-024',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'L’accesso ai pubblici impieghi avviene di regola:',
    opzioni: [
      'Per chiamata diretta dell’amministrazione',
      'Mediante concorso, salvo i casi stabiliti dalla legge',
      'Per sorteggio fra gli iscritti alle liste di collocamento',
      'Mediante procedura negoziata con le organizzazioni sindacali',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 97, comma 4, Cost. pone il concorso come regola per l’accesso agli impieghi nelle pubbliche amministrazioni, salvo i casi stabiliti dalla legge. La Corte costituzionale ha ripetutamente affermato che le deroghe devono rispondere a peculiari e straordinarie esigenze di interesse pubblico e restare entro limiti di stretta necessità.',
  },
  {
    id: 'cost-l2-025',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il principio di leale collaborazione fra Stato e Regioni:',
    opzioni: [
      'Opera esclusivamente in materia di finanza pubblica',
      'È espressamente enunciato in un unico articolo della Costituzione',
      'È ricavato dalla giurisprudenza costituzionale e si concreta in intese, pareri e concerti',
      'Vincola solo le Regioni a statuto speciale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il principio non ha un’enunciazione generale esplicita nel testo costituzionale, ma è desunto dal sistema (artt. 5, 117 e 120 Cost.) e ampiamente sviluppato dalla Corte. Si traduce in strumenti procedurali — intese forti o deboli, pareri, concerti in sede di Conferenze — la cui violazione costituisce autonomo vizio di legittimità.',
  },
  {
    id: 'cost-l2-026',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Quale organo dichiara lo scioglimento di un consiglio regionale per gravi violazioni di legge?',
    opzioni: [
      'Il Ministro dell’interno, con decreto',
      'Il Parlamento in seduta comune, con deliberazione a maggioranza assoluta',
      'La Corte costituzionale, con sentenza',
      'Il Presidente della Repubblica, con decreto motivato, sentita una commissione bicamerale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 126, comma 1, Cost. prevede che lo scioglimento del consiglio regionale e la rimozione del Presidente per atti contrari alla Costituzione o gravi violazioni di legge, o per ragioni di sicurezza nazionale, siano disposti con decreto motivato del Presidente della Repubblica, sentita una commissione di deputati e senatori costituita per le questioni regionali.',
  },
  {
    id: 'cost-l2-027',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il referendum abrogativo può avere a oggetto:',
    opzioni: [
      'Leggi ordinarie e atti aventi valore di legge, in tutto o in parte',
      'Regolamenti governativi e atti amministrativi generali',
      'Sentenze della Corte costituzionale',
      'Anche disposizioni di leggi costituzionali',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 75 Cost. ammette il referendum per l’abrogazione totale o parziale di una legge o di un atto avente valore di legge. Restano esclusi gli atti secondari, le leggi costituzionali (per le quali opera il diverso referendum dell’art. 138 Cost.) e le categorie sottratte dal comma 2, oltre alle ulteriori ipotesi di inammissibilità individuate dalla sent. n. 16/1978.',
  },
  {
    id: 'cost-l2-028',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Che cosa accade se la legge oggetto di referendum viene abrogata dal Parlamento prima della consultazione?',
    opzioni: [
      'Il referendum si svolge comunque, per accertare la volontà popolare',
      'Le operazioni referendarie si arrestano, salvo che la nuova disciplina non modifichi principi e contenuti essenziali',
      'Il referendum è automaticamente trasformato in consultivo',
      'Il quesito si intende approvato senza votazione',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 39 della l. n. 352/1970 prevede che l’abrogazione della legge determini l’arresto delle operazioni. La Corte costituzionale, con la sent. n. 68/1978, ha però precisato che il referendum si trasferisce sulla nuova normativa quando questa non modifichi i principi ispiratori e i contenuti essenziali della disciplina precedente, per evitare che il Parlamento neutralizzi lo strumento con abrogazioni apparenti.',
  },
  {
    id: 'cost-l2-029',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La prorogatio delle Camere significa che:',
    opzioni: [
      'Le commissioni parlamentari continuano a operare durante le ferie estive',
      'La legislatura è prolungata oltre i cinque anni con legge ordinaria',
      'I poteri delle Camere sciolte sono prorogati finché non si riuniscono le nuove',
      'Il Governo dimissionario resta in carica a tempo indeterminato',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 61, comma 2, Cost. dispone che finché non siano riunite le nuove Camere sono prorogati i poteri delle precedenti. La prorogatio va distinta dalla proroga dell’art. 60, comma 2, Cost., che consente di prolungare la durata delle Camere soltanto per legge e soltanto in caso di guerra.',
  },
  {
    id: 'cost-l2-030',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Le Commissioni parlamentari d’inchiesta (art. 82 Cost.):',
    opzioni: [
      'Possono irrogare sanzioni penali all’esito dei lavori',
      'Sono istituite con decreto del Presidente della Repubblica',
      'Hanno poteri meramente conoscitivi, senza strumenti coercitivi',
      'Procedono alle indagini con gli stessi poteri e limiti dell’autorità giudiziaria',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 82 Cost. attribuisce alle commissioni d’inchiesta gli stessi poteri e le stesse limitazioni dell’autorità giudiziaria: possono disporre mezzi di ricerca della prova, ma non adottare provvedimenti restrittivi della libertà personale né pronunciare condanne. Il loro fine è politico-conoscitivo, e la commissione bicamerale è istituita con legge, quella monocamerale con atto della singola Camera.',
  },
  {
    id: 'cost-l2-031',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Per i reati ministeriali (art. 96 Cost.) è competente:',
    opzioni: [
      'Il tribunale dei ministri presso il tribunale del capoluogo del distretto di corte d’appello, previa autorizzazione della Camera competente',
      'Il Parlamento in seduta comune',
      'Il Consiglio superiore della magistratura',
      'La Corte costituzionale in composizione integrata',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Dopo la l. cost. n. 1/1989 i reati ministeriali sono giudicati dalla giurisdizione ordinaria: le indagini sono svolte da un collegio di tre magistrati (tribunale dei ministri) e l’esercizio dell’azione penale è subordinato all’autorizzazione della Camera di appartenenza, che può negarla solo a tutela di un interesse costituzionalmente rilevante.',
  },
  {
    id: 'cost-l2-032',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Nel giudizio d’accusa contro il Presidente della Repubblica, la Corte costituzionale giudica:',
    opzioni: [
      'Nella composizione ordinaria di quindici giudici',
      'Integrata da sedici membri tratti a sorte da un elenco di cittadini eleggibili a senatore',
      'Insieme alle Sezioni Unite della Corte di cassazione',
      'Con l’intervento del Consiglio superiore della magistratura',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 135, comma 7, Cost. prevede che nei giudizi d’accusa contro il Presidente della Repubblica intervengano, oltre ai giudici ordinari della Corte, sedici membri tratti a sorte da un elenco di cittadini aventi i requisiti per l’eleggibilità a senatore, compilato dal Parlamento ogni nove anni mediante elezione.',
  },
  {
    id: 'cost-l2-033',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La riserva di giurisdizione si distingue dalla riserva di legge perché:',
    opzioni: [
      'Consente alla pubblica amministrazione di intervenire senza controllo',
      'Opera esclusivamente nel processo civile',
      'Impone che la limitazione sia disposta con atto dell’autorità giudiziaria',
      'Riguarda soltanto i diritti patrimoniali',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La riserva di legge attiene alla fonte che disciplina i presupposti della limitazione; la riserva di giurisdizione attiene all’organo che la dispone in concreto, che deve essere il giudice con atto motivato. Le due garanzie si cumulano negli artt. 13, 14, 15 e 21 Cost. a presidio delle libertà fondamentali.',
  },
  {
    id: 'cost-l2-034',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Le ispezioni e perquisizioni domiciliari per motivi di sanità, incolumità pubblica o fini economici e fiscali:',
    opzioni: [
      'Richiedono sempre l’autorizzazione del giudice penale',
      'Sono ammesse solo con il consenso del titolare del domicilio',
      'Sono vietate in modo assoluto dall’art. 14 Cost.',
      'Sono regolate da leggi speciali, che possono derogare alla riserva di giurisdizione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 14, comma 3, Cost. prevede che gli accertamenti e le ispezioni per motivi di sanità e di incolumità pubblica o a fini economici e fiscali siano regolati da leggi speciali. È l’unico caso in cui la Costituzione consente di attenuare la riserva di giurisdizione posta al comma 2, che per il resto equipara il domicilio alla libertà personale.',
  },
  {
    id: 'cost-l2-035',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La libertà di circolazione e soggiorno (art. 16 Cost.) può essere limitata:',
    opzioni: [
      'In via generale dalla legge, per motivi di sanità o di sicurezza',
      'Solo con atto motivato dell’autorità giudiziaria',
      'Soltanto in tempo di guerra',
      'Per motivi politici, con provvedimento del Ministro dell’interno',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 16 Cost. consente alla legge di stabilire in via generale limitazioni per motivi di sanità o di sicurezza, escludendo espressamente che possano essere determinate da ragioni politiche. La norma è stata al centro del dibattito sulle misure di contenimento adottate durante l’emergenza sanitaria.',
  },
  {
    id: 'cost-l2-036',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il diritto di sciopero, ai sensi dell’art. 40 Cost.:',
    opzioni: [
      'È vietato ai dipendenti pubblici',
      'Si esercita nell’ambito delle leggi che lo regolano',
      'Può essere esercitato solo previa autorizzazione sindacale',
      'È illimitato e non ammette regolamentazione alcuna',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 40 Cost. riconosce lo sciopero come diritto, esercitato nell’ambito delle leggi che lo regolano. La disciplina organica è arrivata solo con la l. n. 146/1990 per i servizi pubblici essenziali, che impone preavviso, prestazioni indispensabili e affida la vigilanza a una Commissione di garanzia.',
  },
  {
    id: 'cost-l2-037',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La retribuzione, secondo l’art. 36 Cost., deve essere:',
    opzioni: [
      'Fissata annualmente con decreto del Ministro del lavoro',
      'Uguale per tutti i lavoratori del medesimo settore',
      'Proporzionata alla quantità e qualità del lavoro e in ogni caso sufficiente a un’esistenza libera e dignitosa',
      'Determinata liberamente dalle parti, senza vincoli costituzionali',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 36, comma 1, Cost. è ritenuto immediatamente precettivo: il giudice può dichiarare nulla la clausola sul trattamento economico e determinare la retribuzione, di regola facendo riferimento ai minimi della contrattazione collettiva di settore. I commi 2 e 3 garantiscono la durata massima della giornata lavorativa e il riposo settimanale e le ferie annuali retribuite, irrinunciabili.',
  },
  {
    id: 'cost-l2-038',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La proprietà privata, secondo l’art. 42 Cost.:',
    opzioni: [
      'Appartiene esclusivamente allo Stato e agli enti pubblici',
      'Può essere espropriata senza indennizzo per motivi di interesse generale',
      'È inviolabile e non può mai essere espropriata',
      'È riconosciuta e garantita dalla legge, che ne determina modi di acquisto e limiti per assicurarne la funzione sociale',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 42 Cost. riconosce la proprietà pubblica e privata e affida alla legge la determinazione dei modi di acquisto e di godimento e dei limiti, allo scopo di assicurarne la funzione sociale e di renderla accessibile a tutti. Il comma 3 ammette l’espropriazione per motivi di interesse generale, nei casi previsti dalla legge e salvo indennizzo.',
  },
  {
    id: 'cost-l2-039',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La responsabilità dei funzionari e dipendenti pubblici (art. 28 Cost.):',
    opzioni: [
      'È diretta, secondo le leggi penali, civili e amministrative, e si estende allo Stato e agli enti pubblici',
      'Grava esclusivamente sull’amministrazione di appartenenza',
      'Richiede sempre il dolo, essendo esclusa per colpa',
      'È esclusa quando l’atto sia stato adottato nell’esercizio delle funzioni',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 28 Cost. afferma la responsabilità diretta di funzionari e dipendenti pubblici per gli atti compiuti in violazione di diritti, secondo le leggi penali, civili e amministrative, estendendo la responsabilità civile allo Stato e agli enti pubblici. La norma supera l’immunità dell’amministrazione e fonda un regime di responsabilità solidale.',
  },
  {
    id: 'cost-l2-040',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il principio di buon andamento impone che l’azione amministrativa sia:',
    opzioni: [
      'Gratuita per tutti i cittadini',
      'Efficace, efficiente ed economica',
      'Sempre preceduta da un contraddittorio pieno',
      'Sottratta al sindacato del giudice amministrativo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il buon andamento dell’art. 97 Cost. è tradizionalmente declinato nei canoni di efficacia, efficienza ed economicità, oggi recepiti dall’art. 1 della l. n. 241/1990 insieme a pubblicità e trasparenza. L’imparzialità, l’altro corno della disposizione, si traduce fra l’altro nell’obbligo di astensione e nel divieto di disparità di trattamento.',
  },
  {
    id: 'cost-l2-041',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La Corte dei conti esercita il controllo preventivo di legittimità:',
    opzioni: [
      'Sugli atti delle Regioni a statuto speciale',
      'Su tutti gli atti amministrativi statali, senza eccezioni',
      'Sugli atti del Governo indicati dalla legge, e il controllo successivo sulla gestione del bilancio dello Stato',
      'Sulle sole leggi di spesa approvate dal Parlamento',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 100, comma 2, Cost. attribuisce alla Corte dei conti il controllo preventivo di legittimità sugli atti del Governo e quello successivo sulla gestione del bilancio dello Stato, oltre al controllo sulla gestione finanziaria degli enti cui lo Stato contribuisce in via ordinaria, con riferimento diretto alle Camere. La Corte è anche giudice della contabilità pubblica (art. 103, comma 2, Cost.).',
  },
  {
    id: 'cost-l2-042',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il Consiglio di Stato, secondo l’art. 100 Cost., è:',
    opzioni: [
      'Organo politico ausiliario del Presidente del Consiglio',
      'Sezione specializzata della Corte di cassazione',
      'Organo di sola giurisdizione amministrativa',
      'Organo di consulenza giuridico-amministrativa e di tutela della giustizia nell’amministrazione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 100, comma 1, Cost. qualifica il Consiglio di Stato come organo di consulenza giuridico-amministrativa e di tutela della giustizia nell’amministrazione. La funzione giurisdizionale gli è attribuita dall’art. 103, comma 1, Cost., che riserva al giudice amministrativo la tutela degli interessi legittimi e, in particolari materie indicate dalla legge, anche dei diritti soggettivi.',
  },
  {
    id: 'cost-l2-043',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il ricorso in Cassazione per violazione di legge (art. 111, comma 7, Cost.) è ammesso:',
    opzioni: [
      'Contro le sentenze e i provvedimenti sulla libertà personale pronunciati da organi giurisdizionali ordinari o speciali',
      'Solo contro le sentenze penali di condanna',
      'Solo previa autorizzazione del Procuratore generale',
      'Contro qualunque provvedimento giurisdizionale, senza limiti',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 111, comma 7, Cost. garantisce sempre il ricorso in Cassazione per violazione di legge contro le sentenze e i provvedimenti sulla libertà personale pronunciati dagli organi giurisdizionali ordinari o speciali. Il comma 8 limita invece il ricorso contro le decisioni del Consiglio di Stato e della Corte dei conti ai soli motivi inerenti alla giurisdizione.',
  },
  {
    id: 'cost-l2-044',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il divieto di istituire giudici straordinari o speciali (art. 102 Cost.) ammette:',
    opzioni: [
      'La creazione di nuovi tribunali speciali con legge ordinaria',
      'L’istituzione presso gli organi giudiziari ordinari di sezioni specializzate, anche con la partecipazione di cittadini idonei estranei alla magistratura',
      'Il ricorso a collegi arbitrali obbligatori in materia penale',
      'La giurisdizione domestica delle amministrazioni sui propri dipendenti',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 102, comma 2, Cost. vieta i giudici straordinari e speciali, ma consente di istituire presso gli organi giudiziari ordinari sezioni specializzate per determinate materie, anche con la partecipazione di cittadini idonei estranei alla magistratura. Restano legittime le giurisdizioni speciali preesistenti, oggetto della revisione prevista dalla VI disposizione transitoria.',
  },
  {
    id: 'cost-l2-045',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'L’inamovibilità dei magistrati (art. 107 Cost.) significa che essi:',
    opzioni: [
      'Restano in servizio senza limiti di età',
      'Non possono mai essere trasferiti, nemmeno con il loro consenso',
      'Non possono essere dispensati o sospesi dal servizio né destinati ad altre sedi o funzioni se non con decisione del CSM',
      'Non possono essere sottoposti a procedimento disciplinare',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 107, comma 1, Cost. stabilisce che i magistrati sono inamovibili: non possono essere dispensati o sospesi dal servizio né destinati ad altre sedi o funzioni se non in seguito a decisione del Consiglio superiore della magistratura, adottata con le garanzie di difesa previste dall’ordinamento giudiziario o con il loro consenso.',
  },
  {
    id: 'cost-l2-046',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il Ministro della giustizia, ai sensi dell’art. 107, comma 2, Cost.:',
    opzioni: [
      'Nomina e revoca i magistrati',
      'Presiede il Consiglio superiore della magistratura',
      'Dirige l’azione penale del pubblico ministero',
      'Ha facoltà di promuovere l’azione disciplinare',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 107, comma 2, Cost. attribuisce al Ministro della giustizia la facoltà di promuovere l’azione disciplinare, che si affianca a quella obbligatoria del Procuratore generale presso la Cassazione. Il Ministro non ha invece alcun potere di direzione sull’azione penale, che l’art. 112 Cost. rende obbligatoria, né sulla carriera dei magistrati, riservata al CSM.',
  },
  {
    id: 'cost-l2-047',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'L’obbligatorietà dell’azione penale (art. 112 Cost.) è funzionale a garantire:',
    opzioni: [
      'L’uguaglianza dei cittadini davanti alla legge penale e l’indipendenza del pubblico ministero',
      'Il diritto di difesa dell’imputato',
      'Il controllo del Parlamento sull’attività giudiziaria',
      'La rapidità delle indagini preliminari',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’obbligo di esercitare l’azione penale sottrae la scelta a valutazioni di opportunità politica, garantendo insieme l’uguaglianza davanti alla legge (art. 3 Cost.) e l’indipendenza del pubblico ministero. La riforma Cartabia ha introdotto criteri di priorità nell’esercizio dell’azione, che presuppongono comunque l’obbligo e ne regolano solo l’ordine di trattazione.',
  },
  {
    id: 'cost-l2-048',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Quale valore ha la motivazione dei provvedimenti giurisdizionali secondo l’art. 111, comma 6, Cost.?',
    opzioni: [
      'È facoltativa per i provvedimenti non definitivi',
      'È obbligatoria per tutti i provvedimenti giurisdizionali',
      'È richiesta soltanto per le sentenze di condanna',
      'È sostituibile con il richiamo agli atti del processo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 111, comma 6, Cost. impone che tutti i provvedimenti giurisdizionali siano motivati. La motivazione assolve a una duplice funzione: endoprocessuale, consentendo il controllo in sede di impugnazione, ed extraprocessuale, permettendo alla collettività di verificare l’esercizio del potere giurisdizionale, che è esercitato in nome del popolo (art. 101, comma 1, Cost.).',
  },
  {
    id: 'cost-l2-049',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La formula «i giudici sono soggetti soltanto alla legge» (art. 101 Cost.) esclude:',
    opzioni: [
      'L’obbligo di applicare il diritto dell’Unione europea',
      'L’applicazione dei precedenti della Corte di cassazione a Sezioni Unite',
      'Ogni vincolo gerarchico interno e ogni subordinazione ad altri poteri',
      'La possibilità di sollevare questione di legittimità costituzionale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La soggezione soltanto alla legge esprime l’indipendenza funzionale del giudice: non esistono gerarchie interne quanto all’esercizio della giurisdizione, né direttive vincolanti da parte di altri poteri. Il precedente, anche delle Sezioni Unite, ha efficacia persuasiva e non vincolante, salvo il meccanismo dell’art. 374, comma 3, c.p.c.',
  },
  {
    id: 'cost-l2-050',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il diritto all’istruzione secondo l’art. 34 Cost. comporta che:',
    opzioni: [
      'Lo Stato finanzi integralmente le scuole private',
      'L’accesso all’università sia libero e senza selezione',
      'L’istruzione superiore sia gratuita per tutti',
      'L’istruzione inferiore, di almeno otto anni, sia obbligatoria e gratuita',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 34 Cost. dichiara la scuola aperta a tutti e stabilisce che l’istruzione inferiore, impartita per almeno otto anni, è obbligatoria e gratuita. I capaci e meritevoli, anche se privi di mezzi, hanno diritto di raggiungere i gradi più alti degli studi mediante borse di studio e altre provvidenze da attribuire per concorso. L’art. 33 garantisce a enti e privati il diritto di istituire scuole senza oneri per lo Stato.',
  },
  {
    id: 'cost-l2-051',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il voto, secondo l’art. 48 Cost., è:',
    opzioni: [
      'Personale, eguale, libero e segreto, e il suo esercizio è dovere civico',
      'Obbligatorio, con sanzione amministrativa in caso di astensione',
      'Delegabile a un familiare in caso di impedimento',
      'Riservato ai soli cittadini residenti nel territorio nazionale',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 48 Cost. qualifica il voto come personale ed eguale, libero e segreto, e il suo esercizio come dovere civico: dovere morale e non giuridicamente sanzionato. Il diritto può essere limitato solo per incapacità civile, sentenza penale irrevocabile o casi di indegnità morale indicati dalla legge.',
  },
  {
    id: 'cost-l2-052',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'I partiti politici, secondo l’art. 49 Cost.:',
    opzioni: [
      'Sono organi costituzionali dello Stato',
      'Sono libere associazioni attraverso cui i cittadini concorrono con metodo democratico a determinare la politica nazionale',
      'Devono ottenere il riconoscimento della personalità giuridica per partecipare alle elezioni',
      'Sono sottoposti al controllo preventivo del Ministero dell’interno',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 49 Cost. riconosce ai cittadini il diritto di associarsi liberamente in partiti per concorrere con metodo democratico a determinare la politica nazionale. I partiti restano associazioni di diritto privato, non organi dello Stato; il requisito del metodo democratico è prevalentemente riferito all’azione esterna del partito, mentre resta discusso il vincolo alla democrazia interna.',
  },
  {
    id: 'cost-l2-053',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il diritto di petizione (art. 50 Cost.) consente ai cittadini di:',
    opzioni: [
      'Ottenere una risposta obbligatoria entro trenta giorni',
      'Presentare proposte di legge redatte in articoli',
      'Rivolgersi alle Camere per chiedere provvedimenti legislativi o esporre necessità comuni',
      'Chiedere l’abrogazione di una legge con effetto immediato',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 50 Cost. riconosce a tutti i cittadini il diritto di rivolgere petizioni alle Camere per chiedere provvedimenti legislativi o esporre comuni necessità. Si distingue dall’iniziativa legislativa popolare dell’art. 71 Cost., che richiede 50.000 firme e un progetto redatto in articoli; la petizione non obbliga le Camere a deliberare.',
  },
  {
    id: 'cost-l2-054',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La sospensione del processo per le alte cariche dello Stato è stata:',
    opzioni: [
      'Introdotta stabilmente con legge costituzionale',
      'Rimessa alla valutazione discrezionale del giudice procedente',
      'Ritenuta legittima dalla Corte costituzionale in ogni sua formulazione',
      'Dichiarata illegittima con le sentenze nn. 24/2004 e 262/2009, per violazione degli artt. 3 e 111 Cost.',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte costituzionale ha dichiarato illegittime sia la sospensione prevista dal cosiddetto lodo Schifani (sent. n. 24/2004) sia quella del lodo Alfano (sent. n. 262/2009), per violazione dei principi di uguaglianza e di ragionevole durata, rilevando fra l’altro che deroghe di tale portata al regime comune della responsabilità richiederebbero una legge costituzionale.',
  },
  {
    id: 'cost-l2-055',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La legge elettorale può essere sottoposta al sindacato della Corte costituzionale?',
    opzioni: [
      'Sì, come chiarito dalla sent. n. 1/2014, che ha ammesso l’accesso in via incidentale per evitare zone franche',
      'Solo in via principale, su ricorso del Governo',
      'Solo dopo lo svolgimento delle elezioni, su ricorso dei candidati non eletti',
      'No, in quanto atto politico insindacabile',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Con la sent. n. 1/2014 (e poi con la n. 35/2017) la Corte ha ammesso il sindacato sulla legge elettorale sollevato nell’ambito di un’azione di accertamento del diritto di voto, per evitare che la materia restasse una zona franca sottratta al controllo di costituzionalità. Sono stati così censurati il premio di maggioranza senza soglia minima e le liste bloccate lunghe.',
  },
  {
    id: 'cost-l2-056',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La cosiddetta illegittimità costituzionale «consequenziale» (art. 27 l. n. 87/1953) consente alla Corte di:',
    opzioni: [
      'Sospendere l’efficacia della norma in attesa del legislatore',
      'Estendere la dichiarazione di illegittimità ad altre disposizioni la cui illegittimità deriva come conseguenza',
      'Dichiarare illegittima qualsiasi legge affine, anche non impugnata né conseguente',
      'Rinviare la decisione a una successiva udienza',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 27 della l. n. 87/1953 consente alla Corte, quando accoglie una questione, di dichiarare quali sono le altre disposizioni legislative la cui illegittimità deriva come conseguenza dalla decisione adottata. È l’unica deroga al principio della corrispondenza fra chiesto e pronunciato nel giudizio costituzionale, e presuppone un rapporto di derivazione necessaria.',
  },
  {
    id: 'cost-l2-057',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Il principio di ragionevolezza è ricavato dalla Corte costituzionale principalmente:',
    opzioni: [
      'Dall’art. 139 Cost.',
      'Dall’art. 97 Cost.',
      'Dall’art. 3 Cost., come sviluppo del giudizio di uguaglianza',
      'Dall’art. 101 Cost.',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il sindacato di ragionevolezza nasce come sviluppo del giudizio di uguaglianza dell’art. 3 Cost., basato sul confronto con un tertium comparationis, e si è poi affrancato divenendo controllo sulla coerenza intrinseca della disciplina e sulla proporzionalità del mezzo rispetto al fine. È oggi il parametro più usato nel giudizio di legittimità.',
  },
  {
    id: 'cost-l2-058',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Le ordinanze di manifesta infondatezza della Corte costituzionale:',
    opzioni: [
      'Sospendono il giudizio a quo in attesa dell’intervento del legislatore',
      'Sono adottate solo su richiesta concorde delle parti',
      'Hanno la stessa efficacia erga omnes delle sentenze di accoglimento',
      'Definiscono il giudizio in forma semplificata quando la questione è palesemente priva di fondamento',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Le ordinanze consentono di definire in forma semplificata i casi di manifesta infondatezza o di manifesta inammissibilità, spesso richiamando precedenti conformi. Come le sentenze di rigetto, non hanno efficacia erga omnes: la questione resta riproponibile con argomenti o profili diversi.',
  },
  {
    id: 'cost-l2-059',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'Che cosa si intende per «diritto vivente»?',
    opzioni: [
      'L’interpretazione consolidata della disposizione nella giurisprudenza, specie di legittimità, che la Corte assume come oggetto del proprio giudizio',
      'La legge in vigore al momento del fatto',
      'Il diritto dell’Unione europea direttamente applicabile',
      'La norma costituzionale come interpretata dalla dottrina prevalente',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Quando sulla disposizione si è formato un orientamento giurisprudenziale consolidato, la Corte assume quell’interpretazione come oggetto del giudizio invece di proporne una propria conforme a Costituzione. La dottrina del diritto vivente segna così il confine fra il sindacato di legittimità e la funzione nomofilattica della Corte di cassazione.',
  },
  {
    id: 'cost-l2-060',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'L’autonomia finanziaria di Regioni ed enti locali (art. 119 Cost.) comporta:',
    opzioni: [
      'La possibilità di ricorrere liberamente all’indebitamento per qualsiasi spesa',
      'Risorse autonome, tributi ed entrate propri e compartecipazioni al gettito erariale, con un fondo perequativo per i territori a minore capacità fiscale',
      'La totale dipendenza dai trasferimenti statali',
      'Il divieto assoluto di istituire tributi propri',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 119 Cost. riconosce autonomia finanziaria di entrata e di spesa, con risorse autonome, tributi propri stabiliti in armonia con la Costituzione e i principi di coordinamento della finanza pubblica, compartecipazioni al gettito erariale riferibile al territorio e un fondo perequativo senza vincoli di destinazione. Il ricorso all’indebitamento è ammesso solo per spese di investimento, con contestuali piani di ammortamento.',
  },
  {
    id: 'cost-l2-061',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'L’art. 116, comma 3, Cost. prevede il cosiddetto regionalismo differenziato, che consente:',
    opzioni: [
      'Alle Regioni di derogare alle materie di competenza esclusiva statale senza limiti',
      'Alle sole Regioni speciali di ampliare le proprie competenze',
      'Alle Regioni ordinarie di ottenere ulteriori forme e condizioni particolari di autonomia con legge approvata a maggioranza assoluta, sulla base di intesa con lo Stato',
      'Al Governo di attribuire nuove competenze con decreto',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 116, comma 3, Cost. consente di attribuire alle Regioni ordinarie ulteriori forme e condizioni particolari di autonomia, nelle materie concorrenti e in tre materie esclusive statali, con legge dello Stato approvata a maggioranza assoluta dei componenti, su iniziativa della Regione interessata e sulla base di intesa fra Stato e Regione, sentiti gli enti locali.',
  },
  {
    id: 'cost-l2-062',
    materia: 'Diritto costituzionale',
    difficolta: 2,
    domanda:
      'La Corte costituzionale, con la sent. n. 192/2024, si è pronunciata sulla legge in materia di autonomia differenziata dichiarando:',
    opzioni: [
      'La piena legittimità di tutte le disposizioni impugnate',
      'L’inammissibilità di tutti i ricorsi regionali',
      'L’illegittimità dell’intera legge',
      'L’illegittimità di specifiche disposizioni, salvando l’impianto complessivo e valorizzando il ruolo del Parlamento nella determinazione dei LEP',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Con la sent. n. 192/2024 la Corte ha respinto la censura di illegittimità dell’intera l. n. 86/2024, dichiarando però illegittimi singoli profili: fra questi la delega al Governo per la determinazione dei LEP e la possibilità di trasferire intere materie anziché singole funzioni, ribadendo che l’attribuzione deve essere giustificata alla luce del principio di sussidiarietà.',
  },
];
