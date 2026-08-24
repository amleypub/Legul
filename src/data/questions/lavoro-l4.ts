import type { QuizQuestion } from '../../types';

/**
 * Diritto del lavoro — Unità 4 · Eccellenza.
 *
 * Le questioni di confine: qualificazione del rapporto quando gli indici
 * classici non bastano, unico centro di imputazione e gruppo, abuso del
 * termine nel pubblico impiego davanti alla Corte di giustizia, fonti
 * sovranazionali dei diritti del lavoratore, presidi contro lo
 * sfruttamento.
 */
export const lavoroL4: QuizQuestion[] = [
  {
    id: 'lav-l4-001',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Nelle prestazioni intellettuali o altamente qualificate, dove l’etero-direzione è tenue, la qualificazione si fonda:',
    opzioni: [
      'Sugli indici sussidiari — continuità, inserimento nell’organizzazione, assenza di rischio, vincoli di orario, esclusività — valutati globalmente',
      'Sull’ammontare del compenso',
      'Sull’iscrizione a un albo professionale',
      'Sul solo nomen iuris adottato dalle parti',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Quando il potere direttivo si attenua per la natura della prestazione, la giurisprudenza ricorre a un giudizio complessivo sugli indici sussidiari, nessuno dei quali è di per sé decisivo. Il nomen iuris ha rilievo solo sussidiario e cede di fronte alle concrete modalità di svolgimento: il contratto va qualificato per come è stato attuato, non per come è stato denominato.',
  },
  {
    id: 'lav-l4-002',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il socio lavoratore di cooperativa, dopo la l. n. 142/2001:',
    opzioni: [
      'Ha un solo rapporto, quello associativo',
      'Instaura con la cooperativa un rapporto associativo e un ulteriore e distinto rapporto di lavoro, subordinato o autonomo',
      'È sempre lavoratore autonomo',
      'Non ha diritto a retribuzione',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La l. n. 142/2001 configura un doppio rapporto: quello associativo e quello di lavoro, in forma subordinata, autonoma o in altra forma. Al socio lavoratore subordinato si applicano lo Statuto dei lavoratori, con le esclusioni indicate, e i trattamenti economici non inferiori ai minimi dei contratti collettivi. L’art. 5, comma 2, collega però la cessazione del rapporto di lavoro all’esclusione dalla società.',
  },
  {
    id: 'lav-l4-003',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La giurisdizione sulla controversia del socio lavoratore che impugni la delibera di esclusione e il conseguente licenziamento:',
    opzioni: [
      'È del giudice amministrativo',
      'È del tribunale delle imprese per entrambe le domande',
      'È del giudice del lavoro, secondo le Sezioni Unite, per la connessione fra il rapporto associativo e quello di lavoro',
      'È divisa fra due giudici diversi',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Le Sezioni Unite hanno ricondotto al rito del lavoro le controversie in cui l’impugnazione dell’esclusione è funzionalmente collegata alla cessazione del rapporto di lavoro, valorizzando la prevalenza della domanda lavoristica. La caducazione del rapporto associativo travolge quello di lavoro, ma il vaglio di legittimità dell’esclusione è compiuto dal giudice del lavoro.',
  },
  {
    id: 'lav-l4-004',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'L’«unico centro di imputazione del rapporto di lavoro» nei gruppi si accerta:',
    opzioni: [
      'Con la sola identità dei soci',
      'Con la comunanza della sede legale',
      'Con il solo collegamento societario',
      'Attraverso indici quali unicità della struttura organizzativa e produttiva, integrazione delle attività, coordinamento tecnico e amministrativo unitario, utilizzazione contemporanea della prestazione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La giurisprudenza esclude che il collegamento economico e funzionale basti a superare l’autonomia delle società. Occorre la prova di un’unica struttura sostanziale, desunta da indici concorrenti: integrazione delle attività, direzione unitaria, confusione di beni e personale, utilizzazione contemporanea della prestazione. L’accertamento rileva ai fini del computo dimensionale e della responsabilità solidale.',
  },
  {
    id: 'lav-l4-005',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La somministrazione fraudolenta (art. 38-bis del d.lgs. n. 81/2015):',
    opzioni: [
      'Ricorre quando la somministrazione è posta in essere con la specifica finalità di eludere norme inderogabili di legge o di contratto collettivo, ed è sanzionata penalmente',
      'Coincide con la somministrazione irregolare',
      'Riguarda solo il settore pubblico',
      'È stata abrogata',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La fattispecie, reintrodotta dal d.l. n. 87/2018, punisce con l’ammenda somministratore e utilizzatore quando la somministrazione sia attuata con la specifica finalità elusiva. Si distingue dalla somministrazione irregolare, che è illecito civile rimediabile con la costituzione del rapporto in capo all’utilizzatore, e presuppone il dolo specifico.',
  },
  {
    id: 'lav-l4-006',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Nell’appalto illecito, la costituzione del rapporto in capo all’utilizzatore effettivo:',
    opzioni: [
      'Opera automaticamente, senza domanda giudiziale',
      'Richiede la domanda del lavoratore ai sensi dell’art. 29, comma 3-bis, del d.lgs. n. 276/2003, con effetto dall’inizio della somministrazione',
      'Richiede il consenso dell’appaltatore',
      'È esclusa in ogni caso',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 29, comma 3-bis, rinvia all’art. 38 del d.lgs. n. 81/2015: il lavoratore impiegato in un appalto privo dei requisiti può chiedere giudizialmente la costituzione del rapporto alle dipendenze del committente, con effetto dall’inizio dell’utilizzazione. Gli atti compiuti dall’appaltatore si intendono compiuti dal committente. Vale il termine di decadenza dell’art. 32 della l. n. 183/2010.',
  },
  {
    id: 'lav-l4-007',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Nel pubblico impiego, la Corte di giustizia con la sentenza Mascolo (2014) ha affermato che:',
    opzioni: [
      'Il risarcimento è escluso',
      'La conversione è sempre dovuta',
      'La normativa nazionale che consente il rinnovo di contratti a termine per la copertura di posti vacanti in attesa di concorsi, senza tempi certi e senza sanzioni effettive, contrasta con la clausola 5 dell’accordo quadro',
      'Il termine è sempre legittimo nel settore pubblico',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte ha censurato la disciplina della scuola nella parte in cui consentiva la reiterazione dei contratti a termine per la copertura di posti vacanti senza tempi certi per l’espletamento dei concorsi e senza misure sanzionatorie effettive e dissuasive. Ne è seguito l’intervento della l. n. 107/2015 sui piani di assunzione e la definizione, in sede interna, dei criteri risarcitori.',
  },
  {
    id: 'lav-l4-008',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il risarcimento per abusiva reiterazione di contratti a termine nel pubblico impiego, secondo Cass., sez. un., n. 5072/2016:',
    opzioni: [
      'È pari alle retribuzioni non percepite',
      'È escluso',
      'Richiede la prova puntuale del danno subito',
      'È commisurato all’indennità dell’art. 32, comma 5, della l. n. 183/2010, con esonero dall’onere della prova del danno, salvo il diritto a provare un pregiudizio maggiore',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Le Sezioni Unite hanno individuato un criterio di quantificazione agevolato, applicando in via analogica l’indennità onnicomprensiva fra 2,5 e 12 mensilità come «danno comunitario» presunto, con esonero dall’onere probatorio. Resta salva la possibilità per il lavoratore di allegare e provare un danno ulteriore, ad esempio la perdita di occasioni di lavoro alternative.',
  },
  {
    id: 'lav-l4-009',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'L’art. 30 della Carta dei diritti fondamentali dell’Unione europea:',
    opzioni: [
      'Tutela contro il licenziamento ingiustificato ma, secondo la Corte di giustizia, non è dotato dei caratteri necessari a fondare da solo la disapplicazione, richiedendo la mediazione di una disciplina di attuazione',
      'Non riguarda i licenziamenti',
      'È vincolante solo per le istituzioni europee',
      'Ha effetto diretto orizzontale e consente la disapplicazione della norma interna sui licenziamenti',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La disposizione riconosce il diritto alla tutela contro ogni licenziamento ingiustificato «conformemente al diritto dell’Unione e alle legislazioni e prassi nazionali»: il rinvio impedisce di ricavarne un precetto sufficientemente preciso e incondizionato. La Corte di giustizia ha inoltre chiarito che la Carta si applica solo nell’ambito di attuazione del diritto dell’Unione, ai sensi dell’art. 51.',
  },
  {
    id: 'lav-l4-010',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La decisione del Comitato europeo dei diritti sociali sul reclamo collettivo CGIL contro l’Italia:',
    opzioni: [
      'Ha annullato il d.lgs. n. 23/2015',
      'Ha ritenuto il meccanismo indennitario rigido incompatibile con l’art. 24 della Carta sociale europea, ed è stata valorizzata dalla Corte costituzionale nella sent. n. 194/2018',
      'Ha dichiarato conforme il sistema italiano',
      'È vincolante come una sentenza',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il Comitato ha ritenuto che un’indennità predeterminata e legata alla sola anzianità non assicuri un ristoro adeguato né un effetto dissuasivo, in contrasto con l’art. 24 della Carta sociale europea riveduta. Le decisioni del Comitato non sono direttamente vincolanti, ma la Corte costituzionale le ha richiamate come elemento di conforto interpretativo nella sent. n. 194/2018.',
  },
  {
    id: 'lav-l4-011',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La direttiva (UE) 2022/2041 sui salari minimi adeguati impone agli Stati:',
    opzioni: [
      'Di fissare il salario a livello europeo',
      'Di introdurre un salario minimo legale',
      'Di promuovere la contrattazione collettiva e, negli Stati con salario minimo legale, di adottare criteri di adeguatezza; è previsto un piano d’azione per gli Stati con copertura collettiva inferiore alla soglia indicata',
      'Di abolire la contrattazione collettiva',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La direttiva non impone l’introduzione di un minimo legale né interviene sulla determinazione della retribuzione, materia sottratta alla competenza dell’Unione dall’art. 153, par. 5, TFUE. Promuove invece la contrattazione collettiva, chiedendo agli Stati con copertura inferiore alla soglia indicata di predisporre un piano d’azione, e fissa criteri di adeguatezza dove il minimo legale esiste.',
  },
  {
    id: 'lav-l4-012',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'L’intermediazione illecita e sfruttamento del lavoro (art. 603-bis c.p.):',
    opzioni: [
      'Richiede la violenza o la minaccia',
      'È una contravvenzione',
      'Punisce solo l’intermediario',
      'Punisce sia chi recluta manodopera per destinarla al lavoro presso terzi in condizioni di sfruttamento, sia chi utilizza o impiega tale manodopera, approfittando dello stato di bisogno',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La riforma del 2016 ha esteso la fattispecie all’utilizzatore, non più solo all’intermediario, e ha eliminato la necessità di violenza, minaccia o intimidazione, che restano circostanza aggravante. Gli indici di sfruttamento sono tipizzati: retribuzione difforme dai contratti collettivi o sproporzionata, violazione delle norme su orario, riposi e ferie, violazione della normativa sulla sicurezza, condizioni degradanti.',
  },
  {
    id: 'lav-l4-013',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il controllo giudiziario dell’azienda previsto in materia di caporalato e criminalità organizzata:',
    opzioni: [
      'È una misura che consente la prosecuzione dell’attività sotto il controllo di un amministratore giudiziario, in funzione di bonifica dell’impresa e salvaguardia dei livelli occupazionali',
      'Comporta la chiusura dell’impresa',
      'Riguarda solo le imprese pubbliche',
      'Comporta sempre la confisca',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’amministrazione giudiziaria e il controllo giudiziario, previsti dal codice antimafia e richiamati in materia di sfruttamento lavorativo, mirano a risanare l’impresa evitandone la disgregazione: l’attività prosegue sotto vigilanza, con adozione di misure organizzative correttive. È una risposta che privilegia la prospettiva della continuità rispetto all’ablazione patrimoniale.',
  },
  {
    id: 'lav-l4-014',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La patente a crediti nei cantieri, introdotta nel 2024:',
    opzioni: [
      'Riguarda solo i lavoratori autonomi',
      'È richiesta alle imprese e ai lavoratori autonomi operanti nei cantieri temporanei o mobili, con dotazione iniziale di crediti decurtabili in caso di infortuni e violazioni, e soglia minima per operare',
      'Sostituisce il documento di valutazione dei rischi',
      'È facoltativa',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il d.l. n. 19/2024 ha introdotto nel d.lgs. n. 81/2008 l’art. 27 sulla patente a crediti: le imprese e i lavoratori autonomi che operano nei cantieri devono esserne dotati, salvo le esenzioni previste, con un punteggio iniziale decurtabile per infortuni gravi e violazioni accertate. Al di sotto della soglia minima è preclusa l’operatività nei cantieri, con sanzioni ed esclusione dagli appalti pubblici.',
  },
  {
    id: 'lav-l4-015',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La responsabilità dell’ente ex d.lgs. n. 231/2001 per i reati di omicidio colposo e lesioni gravi commessi con violazione delle norme antinfortunistiche:',
    opzioni: [
      'Riguarda solo le imprese edili',
      'Non è prevista',
      'È prevista dall’art. 25-septies, e richiede che il reato sia commesso nell’interesse o a vantaggio dell’ente, criterio adattato dalla giurisprudenza alla struttura colposa della fattispecie',
      'Presuppone il dolo dell’ente',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 25-septies estende la responsabilità dell’ente ai reati colposi di evento in materia di sicurezza. Poiché l’evento non è voluto, la giurisprudenza riferisce i criteri di imputazione oggettiva alla condotta violativa: l’interesse o il vantaggio si colgono nel risparmio di costi o di tempi conseguito omettendo le cautele, non nell’evento lesivo.',
  },
  {
    id: 'lav-l4-016',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il modello organizzativo idoneo in materia di sicurezza:',
    opzioni: [
      'È sostituito dalla nomina del RSPP',
      'Non è mai idoneo a escludere la responsabilità',
      'Coincide con il documento di valutazione dei rischi',
      'Deve assicurare un sistema aziendale per l’adempimento degli obblighi giuridici indicati dall’art. 30 del d.lgs. n. 81/2008, con sistema di registrazione, articolazione di funzioni, sistema disciplinare e verifica periodica',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 30 del d.lgs. n. 81/2008 individua i requisiti del modello con efficacia esimente: adempimento degli obblighi in materia di rischi, sorveglianza sanitaria, informazione e formazione, gestione delle emergenze e degli appalti; idoneo sistema di registrazione; articolazione di funzioni con adeguate competenze e poteri; sistema disciplinare; sistema di vigilanza e riesame periodico.',
  },
  {
    id: 'lav-l4-017',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il diritto di sciopero incontra il limite:',
    opzioni: [
      'Del danno alla produttività, cioè della lesione irreparabile della capacità produttiva dell’impresa, distinto dal danno alla produzione, che è fisiologico',
      'Della durata superiore a un giorno',
      'Della previa autorizzazione sindacale',
      'Del danno economico all’impresa',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La giurisprudenza distingue il danno alla produzione, cioè la perdita di beni o servizi non prodotti, che è connaturato allo sciopero e legittimo, dal danno alla produttività, che compromette in modo irreversibile l’apparato produttivo e la possibilità stessa di riprendere l’attività. Solo quest’ultimo segna il limite esterno del diritto, insieme alla tutela di beni costituzionali quali vita e incolumità.',
  },
  {
    id: 'lav-l4-018',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La serrata, nel nostro ordinamento:',
    opzioni: [
      'È un diritto costituzionalmente garantito come lo sciopero',
      'Non è un diritto ma una libertà: la Corte costituzionale ha depenalizzato la serrata per fini contrattuali, che resta però inadempimento contrattuale del datore',
      'È un reato',
      'È equiparata al licenziamento collettivo',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Corte costituzionale, con la sent. n. 29/1960, ha dichiarato illegittimo l’art. 502 c.p. nella parte relativa alla serrata per fini contrattuali. La serrata non gode però della copertura dell’art. 40 Cost.: non è un diritto ma una mera libertà, e sul piano civilistico costituisce rifiuto della prestazione, con permanenza dell’obbligo retributivo salvo impossibilità oggettiva.',
  },
  {
    id: 'lav-l4-019',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Lo sciopero «a singhiozzo» e «a scacchiera»:',
    opzioni: [
      'Richiedono l’autorizzazione della Commissione di garanzia',
      'Sono sempre illegittimi',
      'Sono legittimi, salvo che ledano la produttività o beni costituzionalmente protetti; il datore può però rifiutare le prestazioni parziali non utili',
      'Sono vietati dalla l. n. 146/1990',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Superata la teoria che considerava illegittime le forme anomale, la giurisprudenza le ammette entro i limiti esterni del diritto. Il datore, dal canto suo, può rifiutare la prestazione offerta negli intervalli fra le astensioni quando non sia utilmente utilizzabile, con esonero dall’obbligo retributivo per quei segmenti, secondo i principi in tema di mora del creditore.',
  },
  {
    id: 'lav-l4-020',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il crumiraggio interno ed esterno:',
    opzioni: [
      'Sono entrambi liberi',
      'Sono vietati solo nei servizi pubblici essenziali',
      'Sono entrambi vietati',
      'Il datore può utilizzare lavoratori non scioperanti già in organico, ma non ricorrere alla somministrazione per sostituire gli scioperanti',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il cosiddetto crumiraggio interno è ritenuto legittimo, purché non si traduca in demansionamento o in comportamento antisindacale: il datore può riorganizzare il lavoro dei non scioperanti. È invece espressamente vietato dall’art. 32 del d.lgs. n. 81/2015 il ricorso alla somministrazione per sostituire lavoratori in sciopero, e la giurisprudenza ha esteso il divieto ad appalti elusivi.',
  },
  {
    id: 'lav-l4-021',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La legittimazione attiva nel procedimento ex art. 28 dello Statuto:',
    opzioni: [
      'Spetta agli organismi locali delle associazioni sindacali nazionali che vi abbiano interesse, e non al singolo né alla r.s.a. in quanto tale, salvo che sia articolazione di un sindacato nazionale',
      'Spetta al pubblico ministero',
      'Spetta a qualunque associazione',
      'Spetta al singolo lavoratore',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 28 attribuisce la legittimazione agli organismi locali delle associazioni sindacali nazionali, in ragione dell’interesse collettivo tutelato. Il singolo lavoratore può agire in via ordinaria per la lesione di posizioni individuali, ma non attivare il procedimento speciale. Il carattere nazionale dell’associazione è verificato in concreto, guardando alla diffusione territoriale e all’effettiva attività.',
  },
  {
    id: 'lav-l4-022',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La condotta antisindacale può essere accertata:',
    opzioni: [
      'Solo in presenza di intento lesivo',
      'Anche in assenza di uno specifico intento, essendo sufficiente l’idoneità oggettiva del comportamento a ledere i beni protetti dalla norma',
      'Solo se reiterata',
      'Solo se accompagnata da un licenziamento',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Le Sezioni Unite hanno chiarito che l’art. 28 tutela beni oggettivi — libertà e attività sindacale, diritto di sciopero — sicché ciò che rileva è l’attitudine lesiva del comportamento, non l’animus nocendi. L’intento può rilevare come elemento sintomatico, ma la sua assenza non esclude l’antisindacalità di una condotta oggettivamente pregiudizievole.',
  },
  {
    id: 'lav-l4-023',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il licenziamento collettivo dei dirigenti, dopo la sentenza della Corte di giustizia del 13 febbraio 2014:',
    opzioni: [
      'È vietato',
      'Resta fuori dalla disciplina della l. n. 223/1991',
      'Rientra nel computo e nell’ambito della procedura, essendo stata censurata l’esclusione dei dirigenti operata dal diritto italiano',
      'Comporta la reintegrazione',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La Corte di giustizia ha dichiarato che l’Italia era venuta meno agli obblighi della direttiva 98/59/CE escludendo i dirigenti dalla nozione di lavoratore rilevante. Il legislatore è intervenuto con la l. n. 161/2014, includendo i dirigenti nel computo e nella procedura, con una specifica disciplina sanzionatoria di natura indennitaria in caso di violazione.',
  },
  {
    id: 'lav-l4-024',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La nozione di licenziamento collettivo nel diritto dell’Unione, quanto all’unità di riferimento:',
    opzioni: [
      'Coincide con il gruppo societario',
      'È rimessa alla scelta del datore',
      'Coincide con l’intera impresa',
      'Fa riferimento allo «stabilimento», cioè all’entità cui i lavoratori sono addetti per svolgere le mansioni, secondo la Corte di giustizia',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte di giustizia, nelle cause Rabal Cañas e Lyttle, ha precisato che la soglia numerica va calcolata con riferimento allo stabilimento, inteso come entità distinta dotata di una certa stabilità e destinata a svolgere una o più mansioni, senza che occorra autonomia giuridica, economica o finanziaria. La nozione europea non necessariamente coincide con quella interna di unità produttiva.',
  },
  {
    id: 'lav-l4-025',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'L’informazione e consultazione sindacale nel licenziamento collettivo ha per oggetto:',
    opzioni: [
      'La possibilità di evitare o ridurre i licenziamenti e di attenuarne le conseguenze, con obbligo di negoziare in buona fede pur senza obbligo di raggiungere un accordo',
      'La determinazione del trattamento economico',
      'L’approvazione dei criteri da parte dell’assemblea',
      'La sola comunicazione del numero degli esuberi',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La direttiva 98/59/CE e la l. n. 223/1991 configurano una consultazione finalizzata: le parti devono esaminare la possibilità di evitare o ridurre i licenziamenti e di attenuarne le conseguenze con misure sociali di accompagnamento. L’obbligo è di comportamento, non di risultato: il datore deve fornire informazioni complete e trattare correttamente, ma non è tenuto a concludere un accordo.',
  },
  {
    id: 'lav-l4-026',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La previdenza complementare, dopo il d.lgs. n. 252/2005:',
    opzioni: [
      'È obbligatoria per tutti',
      'È volontaria, con meccanismo di conferimento tacito del TFR in mancanza di scelta espressa entro il termine di legge',
      'Sostituisce la previdenza obbligatoria',
      'Riguarda solo i dirigenti',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’adesione è volontaria, ma opera il silenzio-assenso: in mancanza di manifestazione di volontà entro sei mesi dall’assunzione, il TFR maturando è conferito alla forma pensionistica collettiva prevista dagli accordi applicabili. Il sistema si fonda sull’art. 38, comma 2, Cost., che affianca alla previdenza obbligatoria forme di assistenza privata.',
  },
  {
    id: 'lav-l4-027',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il welfare aziendale erogato in sostituzione di premi di risultato:',
    opzioni: [
      'Non richiede alcun accordo collettivo',
      'È vietato',
      'È ammesso, con un regime fiscale agevolato per i beni e servizi indicati dal TUIR, purché la conversione sia volontaria per il lavoratore e prevista dalla contrattazione',
      'Costituisce sempre retribuzione imponibile',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Le leggi di bilancio hanno consolidato la possibilità di convertire il premio di risultato in beni e servizi con il regime di detassazione previsto dagli artt. 51 e 100 TUIR. La conversione deve essere rimessa alla scelta del lavoratore e trovare fondamento in un contratto collettivo aziendale o territoriale depositato, così da evitare l’elusione della natura retributiva.',
  },
  {
    id: 'lav-l4-028',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La natura retributiva o meno di un’erogazione datoriale rileva perché:',
    opzioni: [
      'Determina la giurisdizione',
      'Incide sulla forma del contratto',
      'Incide solo sul piano fiscale',
      'Determina l’assoggettamento a contribuzione, l’incidenza sugli istituti indiretti e differiti e l’irriducibilità del trattamento',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La qualificazione condiziona l’imponibile contributivo, il computo nel TFR e negli istituti indiretti e l’operatività del principio di irriducibilità della retribuzione. La giurisprudenza guarda alla corrispettività rispetto alla prestazione e alla continuità dell’erogazione, escludendo la natura retributiva delle liberalità occasionali e dei rimborsi di spese sostenute nell’interesse del datore.',
  },
  {
    id: 'lav-l4-029',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il principio di irriducibilità della retribuzione, dopo la riforma dell’art. 2103 c.c.:',
    opzioni: [
      'Copre il trattamento retributivo in godimento, salve le eccezioni previste dalla legge in caso di assegnazione a mansioni inferiori, con perdita delle indennità legate a modalità della prestazione non più svolte',
      'Impedisce ogni modifica delle mansioni',
      'Riguarda solo il minimo tabellare',
      'È stato abrogato',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 2103, comma 5, c.c. conserva il livello di inquadramento e il trattamento retributivo in godimento in caso di assegnazione a mansioni inferiori, con esclusione degli elementi retributivi collegati a particolari modalità di svolgimento della precedente prestazione. Fuori dalle ipotesi legali, la riduzione unilaterale della retribuzione resta illegittima.',
  },
  {
    id: 'lav-l4-030',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il superminimo individuale è assorbibile dagli aumenti contrattuali:',
    opzioni: [
      'Sempre',
      'Salvo che risulti attribuito in funzione di particolari meriti o qualità del lavoratore, o che le parti ne abbiano escluso l’assorbibilità',
      'Mai',
      'Solo se superiore al venti per cento della retribuzione',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La regola generale è l’assorbibilità, perché il superminimo integra il trattamento minimo contrattuale. Fa eccezione il superminimo attribuito in considerazione di particolari meriti, qualità professionali o mansioni specifiche del singolo, che ha causa autonoma, e quello per il quale sia stata pattuita la non assorbibilità. L’onere della prova dell’eccezione grava sul lavoratore.',
  },
  {
    id: 'lav-l4-031',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La successione di contratti collettivi in senso peggiorativo incontra il limite:',
    opzioni: [
      'Del divieto assoluto di modifica',
      'Dell’intangibilità di ogni trattamento in godimento',
      'Dei diritti già entrati definitivamente nel patrimonio del lavoratore, quali i crediti già maturati, restando modificabili le mere aspettative',
      'Della necessità del consenso individuale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il contratto collettivo successivo può disporre anche in senso peggiorativo per il futuro, non essendo configurabile un principio di irreversibilità dei trattamenti collettivi. Restano intangibili i diritti quesiti, cioè i crediti già maturati ed entrati nel patrimonio individuale, che possono essere dismessi solo con atti dispositivi soggetti all’art. 2113 c.c.',
  },
  {
    id: 'lav-l4-032',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il contratto collettivo può essere interpretato dalla Corte di cassazione:',
    opzioni: [
      'Solo per i contratti del pubblico impiego',
      'Solo su rinvio della corte d’appello',
      'No, essendo questione di fatto',
      'Sì: la violazione o falsa applicazione dei contratti e accordi collettivi nazionali di lavoro è autonomo motivo di ricorso ai sensi dell’art. 360, n. 3, c.p.c.',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Il d.lgs. n. 40/2006 ha incluso i contratti e accordi collettivi nazionali fra le fonti la cui violazione o falsa applicazione è denunciabile in cassazione, superando l’assimilazione al fatto. Il ricorrente deve però depositare il testo integrale del contratto, a pena di improcedibilità, per consentire alla Corte l’accesso diretto alla fonte.',
  },
  {
    id: 'lav-l4-033',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La clausola di un contratto individuale che rinvia «al contratto collettivo tempo per tempo vigente»:',
    opzioni: [
      'Comporta il recepimento dinamico della disciplina collettiva, comprese le modifiche successive, anche peggiorative, salvi i diritti quesiti',
      'Cristallizza il contratto vigente al momento dell’assunzione',
      'Vincola solo il datore',
      'È nulla',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il rinvio dinamico incorpora nel contratto individuale la disciplina collettiva nella sua evoluzione: il lavoratore non iscritto resta così soggetto anche alle modifiche successive. Il rinvio statico, invece, cristallizza il testo richiamato. La distinzione si risolve in un problema di interpretazione della volontà delle parti, con presunzione a favore del rinvio dinamico.',
  },
  {
    id: 'lav-l4-034',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il recesso del sindacato dal contratto collettivo a tempo indeterminato:',
    opzioni: [
      'È vietato',
      'È ammesso con congruo preavviso, non potendo un vincolo obbligatorio essere perpetuo; nel frattempo il contratto conserva efficacia',
      'Comporta la caducazione immediata di tutte le clausole',
      'Richiede l’accordo di tutte le organizzazioni',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La giurisprudenza applica il principio generale che vieta i vincoli perpetui: dal contratto collettivo a tempo indeterminato si può recedere con congruo preavviso e secondo buona fede. Fino al recesso il contratto resta efficace; alla scadenza, la disciplina economica cessa mentre quella normativa è spesso mantenuta in via provvisoria dalle stesse parti sociali.',
  },
  {
    id: 'lav-l4-035',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'L’efficacia ultrattiva del contratto collettivo scaduto:',
    opzioni: [
      'È disposta dal Ministero del lavoro',
      'È automatica per legge',
      'Non è prevista in via generale: la parte economica cessa alla scadenza, salvo diversa previsione delle parti, mentre resta operante l’art. 36 Cost. quale parametro',
      'Dura cinque anni',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Non esiste una regola generale di ultrattività: il contratto scaduto cessa di produrre effetti, salvo che le parti abbiano pattuito la sua vigenza fino al rinnovo, come spesso avviene. Nel frattempo il trattamento in godimento resta dovuto in forza del contratto individuale, e il minimo costituzionale continua a operare come parametro inderogabile.',
  },
  {
    id: 'lav-l4-036',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il lavoratore che rifiuti il trasferimento illegittimo e non prenda servizio:',
    opzioni: [
      'Ha sempre ragione',
      'Perde il diritto a impugnare il provvedimento',
      'Commette sempre inadempimento',
      'Può invocare l’art. 1460 c.c., ma il rifiuto va valutato secondo buona fede, comparando la gravità dell’inadempimento datoriale e la proporzionalità della reazione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’eccezione di inadempimento è applicabile, ma il giudizio è comparativo: il rifiuto totale della prestazione può risultare sproporzionato quando il provvedimento sia solo formalmente viziato o quando il lavoratore avesse rimedi cautelari a disposizione. La valutazione è di merito e determina l’esito sia sul piano retributivo sia su quello disciplinare.',
  },
  {
    id: 'lav-l4-037',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La tutela cautelare ex art. 700 c.p.c. nelle controversie di lavoro:',
    opzioni: [
      'È ammessa in via residuale, quando il pregiudizio sia imminente e irreparabile e non vi siano strumenti cautelari tipici, come nel demansionamento o nel trasferimento illegittimo',
      'Sostituisce il giudizio di merito',
      'È riservata al licenziamento',
      'È esclusa',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il provvedimento d’urgenza ha carattere residuale e presuppone fumus boni iuris e periculum in mora, quest’ultimo inteso come pregiudizio imminente e irreparabile, tipicamente la perdita di professionalità nel demansionamento protratto. Il carattere anticipatorio esonera dall’onere di instaurare il giudizio di merito, ai sensi dell’art. 669-octies, comma 6, c.p.c.',
  },
  {
    id: 'lav-l4-038',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La reintegrazione, quanto alla sua esecuzione:',
    opzioni: [
      'È coercibile in forma specifica',
      'Non è coercibile in forma specifica quanto all’obbligo di ricevere la prestazione, e la giurisprudenza discute l’applicabilità delle misure di coercizione indiretta dell’art. 614-bis c.p.c.',
      'Si esegue con l’intervento dell’ufficiale giudiziario',
      'Comporta l’arresto del datore inadempiente',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’ordine di reintegrazione ha per oggetto un facere infungibile: il datore non può essere costretto materialmente a riammettere il lavoratore. La sanzione è quindi il perdurare dell’obbligo retributivo e risarcitorio. L’art. 614-bis c.p.c. esclude espressamente dal proprio ambito le controversie di lavoro subordinato e le collaborazioni etero-organizzate.',
  },
  {
    id: 'lav-l4-039',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il lavoratore reintegrato che non riprenda servizio entro trenta giorni dall’invito del datore:',
    opzioni: [
      'Può riprendere servizio in qualunque momento',
      'Conserva ogni diritto',
      'Vede risolto il rapporto, salvo che abbia richiesto l’indennità sostitutiva della reintegrazione',
      'Ha diritto al risarcimento',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 18, comma 3, dello Statuto prevede che il rapporto si intenda risolto quando il lavoratore non riprenda servizio entro trenta giorni dall’invito del datore, salvo che abbia richiesto l’indennità sostitutiva. La disposizione bilancia la tutela ripristinatoria con l’esigenza di certezza sulla prosecuzione effettiva del rapporto.',
  },
  {
    id: 'lav-l4-040',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il periodo intercorrente fra licenziamento e reintegrazione, quanto alla contribuzione:',
    opzioni: [
      'È a carico del lavoratore',
      'È coperto dall’INPS',
      'Non è coperto',
      'È coperto: il datore è condannato al versamento dei contributi previdenziali e assistenziali per il periodo, secondo la disciplina applicabile al regime sanzionatorio',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Sia l’art. 18 dello Statuto sia il d.lgs. n. 23/2015 prevedono, nelle ipotesi di reintegrazione, la condanna al versamento dei contributi dal licenziamento all’effettiva reintegra. Il regime differisce quanto alla detraibilità dell’aliunde perceptum dal risarcimento e alla non incidenza di quest’ultimo sulla posizione contributiva, che resta integralmente ricostituita.',
  },
  {
    id: 'lav-l4-041',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'L’aliunde percipiendum, nel calcolo del risarcimento:',
    opzioni: [
      'È detraibile nel regime dell’art. 18, comma 4, dello Statuto quale quanto il lavoratore avrebbe potuto percepire dedicandosi con diligenza alla ricerca di nuova occupazione, con onere di allegazione a carico del datore',
      'Non è previsto',
      'Coincide con la NASpI',
      'È sempre detraibile',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il comma 4 dell’art. 18 impone di dedurre, oltre a quanto effettivamente percepito, anche quanto il lavoratore avrebbe potuto percepire accettando una congrua offerta di lavoro. L’onere di allegare gli elementi da cui desumere la negligenza nella ricerca grava sul datore; la giurisprudenza esige indicazioni concrete e non affermazioni generiche.',
  },
  {
    id: 'lav-l4-042',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il licenziamento inefficace per vizio di motivazione, nel regime del d.lgs. n. 23/2015:',
    opzioni: [
      'Comporta la reintegrazione',
      'Comporta la tutela indennitaria dell’art. 4, la cui misura, dopo la sent. n. 150/2020 della Corte costituzionale, è rimessa alla valutazione del giudice e non alla sola anzianità',
      'È nullo',
      'Non produce conseguenze',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 4 del d.lgs. n. 23/2015 sanziona i vizi di forma e di procedura con un’indennità dimezzata rispetto a quella ordinaria. La Corte costituzionale, con la sent. n. 150/2020, ne ha censurato la rigida commisurazione all’anzianità, estendendo il principio già affermato nella sent. n. 194/2018 e restituendo al giudice la valutazione dei criteri di quantificazione.',
  },
  {
    id: 'lav-l4-043',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il regime sanzionatorio applicabile alle piccole imprese nel d.lgs. n. 23/2015:',
    opzioni: [
      'Prevede sempre la reintegrazione',
      'Coincide con quello ordinario',
      'Prevede indennità dimezzate con un tetto massimo, ed è stato oggetto di uno dei quesiti referendari del giugno 2025, non approvato per mancato raggiungimento del quorum',
      'Esclude ogni tutela',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 9 del d.lgs. n. 23/2015 dimezza gli importi indennitari e fissa un tetto per i datori che non raggiungono i requisiti dimensionali, escludendo per essi la reintegrazione salvo le ipotesi di nullità e di licenziamento orale. Il quesito referendario del giugno 2025 mirava a rimuovere il tetto dell’art. 8 della l. n. 604/1966: la consultazione non ha raggiunto il quorum.',
  },
  {
    id: 'lav-l4-044',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La coesistenza dei due regimi di tutela nella stessa azienda:',
    opzioni: [
      'È impedita dal principio di parità di trattamento',
      'Opera solo nelle imprese sopra i cento dipendenti',
      'È stata dichiarata incostituzionale',
      'È stata ritenuta non irragionevole dalla Corte costituzionale, essendo la data di assunzione un criterio idoneo a giustificare la diversità di disciplina nel tempo',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La Corte costituzionale, già nella sent. n. 194/2018, ha escluso che la differenziazione fondata sulla data di assunzione violi l’art. 3 Cost.: la successione nel tempo delle discipline è un criterio in sé neutro e coerente con la finalità dichiarata di incentivare le assunzioni. Le censure accolte hanno riguardato altri profili, in particolare il meccanismo di quantificazione dell’indennità.',
  },
  {
    id: 'lav-l4-045',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il lavoro accessorio e le prestazioni occasionali, dopo il d.l. n. 50/2017:',
    opzioni: [
      'Sono regolati dal contratto di prestazione occasionale e dal libretto famiglia, con limiti economici annui e divieti soggettivi e settoriali',
      'Coincidono con i vecchi voucher',
      'Non prevedono copertura previdenziale',
      'Sono stati aboliti',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Dopo l’abrogazione dei voucher, il d.l. n. 50/2017 ha introdotto due strumenti: il libretto famiglia per le prestazioni rese a favore di persone fisiche fuori dall’esercizio d’impresa, e il contratto di prestazione occasionale per gli altri utilizzatori. Operano limiti economici annui per utilizzatore e per prestatore, divieti dimensionali e settoriali, e la copertura previdenziale e assicurativa è assicurata.',
  },
  {
    id: 'lav-l4-046',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La maxisanzione per lavoro sommerso:',
    opzioni: [
      'È solo penale',
      'È una sanzione amministrativa graduata in ragione della durata dell’impiego irregolare, con maggiorazioni in presenza di lavoratori stranieri irregolari o minori',
      'Comporta la chiusura dell’azienda',
      'È applicata dal giudice penale',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La sanzione, prevista dall’art. 3 del d.l. n. 12/2002 e più volte riformata, colpisce l’impiego di lavoratori senza preventiva comunicazione di instaurazione del rapporto, con importi crescenti in relazione alla durata della violazione e maggiorazioni per lavoratori stranieri privi di permesso o minori in età non lavorativa. Si accompagna al recupero contributivo e alla possibile sospensione dell’attività imprenditoriale.',
  },
  {
    id: 'lav-l4-047',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il provvedimento di sospensione dell’attività imprenditoriale:',
    opzioni: [
      'Riguarda solo i cantieri',
      'È adottato dal giudice',
      'È adottato dall’Ispettorato del lavoro in presenza di gravi violazioni in materia di sicurezza o di impiego di lavoratori in nero oltre la soglia di legge, ed è revocabile con la regolarizzazione e il pagamento della somma aggiuntiva',
      'È definitivo',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 14 del d.lgs. n. 81/2008, riscritto dal d.l. n. 146/2021, prevede la sospensione in caso di impiego di personale non risultante dalla documentazione obbligatoria in misura pari o superiore alla soglia legale, o di gravi violazioni prevenzionistiche tipizzate. La revoca presuppone la regolarizzazione, il ripristino delle condizioni di sicurezza e il pagamento di una somma aggiuntiva.',
  },
  {
    id: 'lav-l4-048',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il lavoratore straniero privo di permesso di soggiorno:',
    opzioni: [
      'Ha diritto solo al TFR',
      'Deve restituire quanto percepito',
      'Non ha alcun diritto retributivo',
      'Ha diritto alla retribuzione e alle tutele per l’attività effettivamente prestata, in applicazione dell’art. 2126 c.c. sulla prestazione di fatto',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 2126 c.c. stabilisce che la nullità o l’annullamento del contratto di lavoro non producono effetto per il periodo in cui il rapporto ha avuto esecuzione, salvo che la nullità derivi dall’illiceità dell’oggetto o della causa. La giurisprudenza applica la norma al lavoratore irregolare, riconoscendogli retribuzione e tutele, coerentemente con l’art. 36 Cost. e con la direttiva sanzioni.',
  },
  {
    id: 'lav-l4-049',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La prestazione di fatto ex art. 2126 c.c. non produce effetti quando:',
    opzioni: [
      'La nullità deriva dall’illiceità dell’oggetto o della causa, salvo che il lavoro sia stato prestato in violazione di norme poste a tutela del prestatore, che conserva comunque il diritto alla retribuzione',
      'Il lavoratore è minorenne',
      'Manca la comunicazione al centro per l’impiego',
      'Il contratto è verbale',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'Il comma 1 dell’art. 2126 c.c. fa salva l’ipotesi di illiceità dell’oggetto o della causa, tipicamente il lavoro finalizzato a un’attività criminosa. Il comma 2 precisa però che, se il lavoro è stato prestato con violazione di norme poste a tutela del prestatore, questi ha in ogni caso diritto alla retribuzione: una scelta che privilegia la protezione della persona sulla logica restitutoria.',
  },
  {
    id: 'lav-l4-050',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La disciplina antidiscriminatoria consente l’azione:',
    opzioni: [
      'Solo al singolo discriminato',
      'Anche a soggetti collettivi legittimati, in caso di discriminazione collettiva quando non siano individuabili in modo diretto e immediato le persone lese',
      'Solo al pubblico ministero',
      'Solo previa autorizzazione dell’Ispettorato',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'Il d.lgs. n. 215/2003, il d.lgs. n. 216/2003 e il codice delle pari opportunità attribuiscono legittimazione ad associazioni ed enti iscritti in appositi elenchi, oltre che alla consigliera di parità, anche per le discriminazioni collettive. Il giudice può ordinare la cessazione della condotta, la rimozione degli effetti e l’adozione di un piano di rimozione delle discriminazioni.',
  },
  {
    id: 'lav-l4-051',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La certificazione della parità di genere:',
    opzioni: [
      'È rilasciata dall’INPS',
      'È obbligatoria per tutte le imprese',
      'È volontaria e comporta benefici quali l’esonero contributivo parziale e premialità nelle procedure di affidamento pubblico',
      'Sostituisce il rapporto sulla situazione del personale',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'La l. n. 162/2021 ha introdotto la certificazione della parità di genere, attestante le politiche e le misure adottate per ridurre il divario. È volontaria e dà accesso a un esonero contributivo entro i limiti di legge e a criteri premiali negli appalti pubblici e nei finanziamenti. Distinto è l’obbligo, per le imprese sopra soglia, di redigere il rapporto biennale sulla situazione del personale.',
  },
  {
    id: 'lav-l4-052',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il rapporto fra danno biologico, morale ed esistenziale nel rapporto di lavoro, dopo le Sezioni Unite del 2008:',
    opzioni: [
      'Solo il danno biologico è risarcibile',
      'Il danno esistenziale è sempre in re ipsa',
      'Sono tre voci autonome e cumulabili',
      'Il danno non patrimoniale è categoria unitaria, e le sottovoci hanno funzione descrittiva: va evitata la duplicazione risarcitoria, pur dovendosi personalizzare la liquidazione',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'Le sentenze di San Martino hanno affermato l’unitarietà del danno non patrimoniale, riconducibile all’art. 2059 c.c., con funzione meramente descrittiva delle sottocategorie. Ne discende il divieto di duplicazione, temperato dalla necessità di personalizzare il risarcimento quando emergano conseguenze peculiari, adeguatamente allegate e provate.',
  },
  {
    id: 'lav-l4-053',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Lo straining si distingue dal mobbing perché:',
    opzioni: [
      'Difetta il carattere della continuità delle condotte vessatorie, ma permane una situazione stressante consapevolmente prodotta, idonea a fondare la responsabilità ex art. 2087 c.c.',
      'Non produce danno',
      'È penalmente rilevante',
      'Riguarda solo i dirigenti',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'La giurisprudenza ha valorizzato lo straining come figura residuale: anche in assenza della reiterazione sistematica e dell’intento persecutorio richiesti per il mobbing, il datore risponde ai sensi dell’art. 2087 c.c. se ha consapevolmente creato o tollerato una condizione lavorativa stressante e lesiva della salute o della dignità del lavoratore.',
  },
  {
    id: 'lav-l4-054',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il danno da usura psicofisica per mancata fruizione del riposo settimanale:',
    opzioni: [
      'Non è risarcibile',
      'È risarcibile, ma non è in re ipsa: la giurisprudenza richiede allegazione e prova, sia pure agevolate da presunzioni, quando la protrazione dell’attività sia stata particolarmente intensa',
      'Coincide con il compenso per lavoro straordinario',
      'È liquidato dall’INAIL',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La Cassazione, superando orientamenti che ammettevano il danno in re ipsa, richiede l’allegazione di conseguenze pregiudizievoli concrete, ammettendo però il ricorso a presunzioni fondate su durata, intensità e sistematicità della violazione. Al risarcimento si affianca il compenso per l’attività prestata nella giornata di riposo, che ha titolo distinto.',
  },
  {
    id: 'lav-l4-055',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Nel rapporto di lavoro, il licenziamento intimato per rappresaglia a fronte di una segnalazione whistleblowing:',
    opzioni: [
      'Comporta la sola sanzione amministrativa',
      'È annullabile',
      'È nullo, e la nullità è espressamente prevista dal d.lgs. n. 24/2023 per tutti gli atti ritorsivi',
      'È valido se sorretto da altro motivo',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'Il decreto sancisce la nullità degli atti ritorsivi, fra cui licenziamento, sospensione, demansionamento, trasferimento e mancato rinnovo, adottati in ragione della segnalazione, della denuncia o della divulgazione pubblica. Opera la presunzione a favore del segnalante e la tutela si estende ai facilitatori e alle persone del medesimo contesto lavorativo.',
  },
  {
    id: 'lav-l4-056',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La rinuncia al diritto alla reintegrazione, contestuale al licenziamento:',
    opzioni: [
      'È sempre nulla',
      'Non richiede alcuna forma',
      'È valida se scritta',
      'Ricade nell’art. 2113 c.c. ed è impugnabile entro sei mesi, salvo che intervenga nelle sedi protette',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'La reintegrazione è posizione derivante da norme inderogabili: la sua dismissione è atto dispositivo soggetto al regime dell’art. 2113 c.c., con impugnabilità entro sei mesi. Solo la conciliazione raggiunta nelle sedi protette, con assistenza effettiva, ne rende definitivi gli effetti; diverso è il caso dell’opzione per l’indennità sostitutiva, espressamente prevista dalla legge.',
  },
  {
    id: 'lav-l4-057',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il computo dei lavoratori assunti a termine ai fini delle soglie dimensionali:',
    opzioni: [
      'Avviene sulla base del numero medio mensile di lavoratori impiegati negli ultimi due anni, secondo l’art. 27 del d.lgs. n. 81/2015, salve diverse previsioni',
      'Segue il criterio della presenza al momento del licenziamento',
      'Richiede il consenso sindacale',
      'È escluso',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’art. 27 del d.lgs. n. 81/2015 stabilisce che, salvo diversa disposizione, i lavoratori a tempo determinato si computano sulla base del numero medio mensile di quelli impiegati negli ultimi due anni, sulla base dell’effettiva durata dei loro rapporti. La regola convive con il criterio giurisprudenziale della normale occupazione ai fini dell’art. 18 dello Statuto.',
  },
  {
    id: 'lav-l4-058',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La successione di appalti con passaggio di personale, ai fini dell’art. 2112 c.c.:',
    opzioni: [
      'Costituisce sempre trasferimento d’azienda',
      'Non costituisce di per sé trasferimento: occorre verificare il passaggio di un complesso organizzato che conservi la propria identità, potendo però bastare, nei servizi ad alta intensità di manodopera, il riassorbimento di una parte essenziale del personale',
      'È sempre esclusa dall’art. 2112 c.c.',
      'Dipende dalla durata dell’appalto',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'L’art. 29, comma 3, del d.lgs. n. 276/2003 esclude che l’acquisizione del personale già impiegato nell’appalto, in forza di legge o di contratto collettivo, costituisca di per sé trasferimento. Restano però fermi i criteri europei: nei servizi labour intensive il riassorbimento di una parte quantitativamente e qualitativamente essenziale degli addetti può integrare il trasferimento di entità economica.',
  },
  {
    id: 'lav-l4-059',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La responsabilità solidale negli appalti può essere derogata dalla contrattazione collettiva:',
    opzioni: [
      'Solo negli appalti pubblici',
      'Sì, senza limiti',
      'I contratti collettivi possono individuare metodi e procedure di controllo e verifica della regolarità degli appalti, ma non elidere la responsabilità solidale, che ha natura inderogabile a tutela del lavoratore',
      'No, in nessun modo',
    ],
    rispostaCorretta: 2,
    spiegazione:
      'L’art. 29, comma 2, del d.lgs. n. 276/2003 consente ai contratti collettivi nazionali sottoscritti dalle organizzazioni comparativamente più rappresentative di individuare metodi e procedure di controllo e verifica della regolarità complessiva degli appalti. La giurisprudenza ha però escluso che tali previsioni possano tradursi nella soppressione della garanzia solidale.',
  },
  {
    id: 'lav-l4-060',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'Il beneficio della preventiva escussione nella responsabilità solidale del committente:',
    opzioni: [
      'Opera automaticamente',
      'Riguarda solo i contributi previdenziali',
      'Non è previsto',
      'È previsto per il committente convenuto in giudizio insieme all’appaltatore, che può eccepire il beneficio con conseguente escussione preventiva del patrimonio di appaltatore e subappaltatori',
    ],
    rispostaCorretta: 3,
    spiegazione:
      'L’art. 29, comma 2, del d.lgs. n. 276/2003 prevede che il committente convenuto possa eccepire, nella prima difesa, il beneficio della preventiva escussione: l’azione esecutiva può essere intentata nei suoi confronti solo dopo l’infruttuosa escussione del patrimonio dell’appaltatore e degli eventuali subappaltatori. Il beneficio va eccepito, non opera d’ufficio.',
  },
  {
    id: 'lav-l4-061',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'La transazione conclusa dal lavoratore assistito dal proprio avvocato, fuori dalle sedi protette:',
    opzioni: [
      'Resta soggetta all’art. 2113 c.c., non essendo l’assistenza legale di per sé equiparata alle sedi tipiche indicate dall’ultimo comma',
      'È nulla',
      'Richiede il deposito in tribunale',
      'È inoppugnabile',
    ],
    rispostaCorretta: 0,
    spiegazione:
      'L’ultimo comma dell’art. 2113 c.c. richiama sedi tipiche e tassative: giudiziale, amministrativa, sindacale e arbitrale. L’assistenza del difensore, pur rilevante sul piano della consapevolezza, non rientra in quell’elenco e non produce l’effetto di stabilità. La transazione resta quindi impugnabile nei sei mesi, se ha a oggetto diritti derivanti da norme inderogabili.',
  },
  {
    id: 'lav-l4-062',
    materia: 'Diritto del lavoro',
    difficolta: 4,
    domanda:
      'L’arbitrato irrituale in materia di lavoro, dopo la l. n. 183/2010:',
    opzioni: [
      'È vietato',
      'È ammesso nelle forme tipizzate dal codice di rito e dalla contrattazione collettiva, e la clausola compromissoria può essere pattuita solo dopo il periodo di prova, ove previsto, e va certificata',
      'È obbligatorio',
      'Riguarda solo il pubblico impiego',
    ],
    rispostaCorretta: 1,
    spiegazione:
      'La l. n. 183/2010 ha rilanciato l’arbitrato irrituale, prevedendo più modelli (davanti alla commissione di conciliazione, in sede sindacale, presso le camere arbitrali, con arbitrato secondo equità). La clausola compromissoria richiede la certificazione presso gli organi abilitati e, a pena di nullità, non può essere sottoscritta prima della conclusione del periodo di prova, ove previsto, o comunque prima dei trenta giorni dalla stipulazione.',
  },
];
