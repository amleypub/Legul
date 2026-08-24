/**
 * Svolgimenti proposti delle tracce d'esame.
 *
 * Il nome non è un vezzo: si chiama «svolgimento proposto» e mai
 * «soluzione corretta». All'esame non esiste una risposta esatta
 * depositata da qualche parte — esiste un elaborato che regge o non
 * regge. Promettere la soluzione giusta sarebbe una promessa che
 * nessuno può mantenere, e nessuno qui firma nulla.
 *
 * Da questa premessa discendono tre regole rispettate in tutto il file:
 *
 * 1. **Ogni affermazione porta il suo aggancio.** Un blocco senza
 *    riferimenti puntuali è un'opinione: il test lo rifiuta.
 * 2. **Dove la giurisprudenza è divisa, si mostra il contrasto.** Non si
 *    sceglie il vincitore al posto del candidato: si espongono le tesi
 *    con i loro argomenti e si dice che cosa cambia in concreto. È anche
 *    l'unico modo onesto di preparare a una prova in cui la commissione
 *    valuta il ragionamento, non la conclusione.
 * 3. **`stato` è un cancello interno, non un bollino.** All'utente non
 *    viene mostrata nessuna medaglia di qualità: `bozza` semplicemente
 *    non arriva in schermata. Chi legge vede solo la data di
 *    aggiornamento e il pulsante per segnalare un errore.
 */

import { tracce } from './tracce';

/**
 * Cancello di pubblicazione, uso interno.
 *
 * `bozza` = scritto ma non ricontrollato: `svolgimentoDi()` non lo
 * restituisce, quindi non esiste per l'interfaccia.
 */
export type StatoSvolgimento = 'bozza' | 'verificata';

export type TipoRiferimento = 'norma' | 'giurisprudenza';

export interface Riferimento {
  /** Citazione puntuale: «art. 1495 c.c.», «Cass. 5935/2018». */
  testo: string;
  tipo: TipoRiferimento;
}

/** Un passaggio dello svolgimento: si apre e si chiude da solo. */
export interface BloccoSvolgimento {
  id: string;
  titolo: string;
  /** Una riga di anteprima, visibile anche a blocco chiuso. */
  sintesi: string;
  paragrafi: string[];
  riferimenti: Riferimento[];
}

export interface Orientamento {
  /** La tesi in una riga, come la enuncerebbe una massima. */
  tesi: string;
  argomento: string;
  riferimenti: Riferimento[];
}

/**
 * Una questione su cui la giurisprudenza non è allineata.
 *
 * `ricaduta` è la parte che serve davvero: sapere che esistono due
 * orientamenti non vale nulla se non si sa che cosa cambia per il
 * cliente.
 */
export interface Contrasto {
  id: string;
  questione: string;
  orientamenti: Orientamento[];
  ricaduta: string;
}

/** Voce della griglia di autovalutazione. `peso` in punti su 100. */
export interface VoceGriglia {
  voce: string;
  peso: number;
  /** Che cosa deve esserci perché il punto si consideri preso. */
  criterio: string;
}

export interface Svolgimento {
  tracciaId: string;
  stato: StatoSvolgimento;
  /** Data dell'ultima verifica dei contenuti, mostrata in schermata. */
  aggiornatoAl: string;
  /**
   * Le questioni che la traccia nasconde, prima di leggere lo
   * svolgimento. È il primo blocco che si apre: individuarle è metà
   * della prova, e chi salta questo passaggio si porta via molto meno.
   */
  questioni: string[];
  blocchi: BloccoSvolgimento[];
  contrasti: Contrasto[];
  /** Errori che ricorrono negli elaborati, non generici consigli. */
  trappole: string[];
  griglia: VoceGriglia[];
}

export const svolgimenti: Svolgimento[] = [
  {
    tracciaId: '2023-atto-civile',
    stato: 'verificata',
    aggiornatoAl: '24 agosto 2026',
    questioni: [
      'Come si qualifica un contratto di fornitura e posa in opera: vendita, appalto o contratto d’opera? Da qui dipende tutto il resto.',
      'Quale regime di garanzia si applica ai vizi, con quali termini di decadenza e di prescrizione.',
      'Se il committente è un consumatore che compra per la propria abitazione, la garanzia legale di conformità del codice del consumo prende il posto di quella del codice civile.',
      'Se la domanda sia soggetta a mediazione o a negoziazione assistita come condizione di procedibilità: sbagliare qui costa l’improcedibilità.',
      'Quale giudice è competente per territorio, tenuto conto del foro esclusivo del consumatore.',
      'Quale atto redigere e con quali domande: risoluzione, restituzione dell’acconto, risarcimento.',
    ],
    blocchi: [
      {
        id: 'qualificazione',
        titolo: 'Qualificazione del contratto',
        sintesi: 'Vendita con posa in opera o appalto: il crinale da cui dipende ogni termine.',
        paragrafi: [
          'La traccia descrive un contratto avente a oggetto insieme la fornitura di serramenti e la loro installazione. È il caso classico in cui una prestazione di dare e una di fare convivono nello stesso accordo, e la disciplina applicabile va individuata con il criterio della prevalenza: si applica al contratto la disciplina del tipo negoziale prevalente, senza però escludere le singole norme del tipo recessivo quando siano compatibili.',
          'Il criterio non è quantitativo. Non conta cioè quanto valgono i materiali rispetto alla manodopera, ma quale delle due obbligazioni le parti hanno considerato essenziale. Si ha vendita quando il bene è di serie e la posa serve soltanto a renderlo utilizzabile: l’installazione è accessoria e il compratore voleva quel prodotto. Si ha appalto quando il materiale è il mezzo per realizzare un’opera nuova e specifica, adattata alle esigenze del committente, e il risultato finale è qualcosa di diverso dalla somma dei componenti.',
          'Applicato ai serramenti, il crinale è concreto: infissi standard, sia pure ritagliati su misura, restano di regola vendita con posa in opera; infissi che richiedono progettazione esecutiva, prestazioni termiche o acustiche da certificare in opera e un montaggio che li integra nella muratura fanno pendere la bilancia verso l’appalto.',
          'Va poi tenuta distinta una terza possibilità: se il fornitore è un artigiano che esegue con lavoro prevalentemente proprio, si esce dall’appalto ed entra il contratto d’opera. La differenza sembra teorica e non lo è affatto, perché il contratto d’opera è oggi fra le materie a mediazione obbligatoria e l’appalto no.',
          'Nell’atto la qualificazione va argomentata, non presupposta. Il modo tecnicamente più solido è impostare la domanda in via principale sulla qualificazione più favorevole all’assistito e in via subordinata sull’altra, così che la diversa qualificazione operata dal giudice non travolga la domanda.',
        ],
        riferimenti: [
          { testo: 'art. 1470 c.c.', tipo: 'norma' },
          { testo: 'art. 1655 c.c.', tipo: 'norma' },
          { testo: 'art. 2222 c.c.', tipo: 'norma' },
          { testo: 'Cass. civ. n. 5935/2018', tipo: 'giurisprudenza' },
        ],
      },
      {
        id: 'consumatore',
        titolo: 'Il committente è un consumatore',
        sintesi: 'Serramenti per la propria abitazione: entra in gioco il codice del consumo.',
        paragrafi: [
          'La traccia dice che i serramenti sono destinati all’abitazione di Tizio. Se Tizio agisce per scopi estranei all’attività imprenditoriale o professionale eventualmente svolta, è un consumatore e Alfa è un professionista: si applica il codice del consumo.',
          'Sul piano della garanzia questo cambia il quadro. La garanzia legale di conformità copre anche i contratti di fornitura di beni da fabbricare o produrre, quindi copre la fattispecie anche quando la si qualifichi come vendita con posa in opera. Il venditore risponde dei difetti che si manifestano entro ventiquattro mesi dalla consegna e l’azione si prescrive in ventisei mesi dalla consegna.',
          'Il punto più spesso trascurato è che, dopo la riforma del 2021 di attuazione della direttiva sulla vendita di beni, l’obbligo di denunciare il difetto entro due mesi dalla scoperta non esiste più. Chi lo scrive ancora sta usando un manuale superato e regala al venditore un’eccezione che la legge non gli dà.',
          'Va poi ricordata la presunzione: salvo prova contraria, i difetti manifestatisi entro un anno dalla consegna si presumono esistenti già a quella data. È una presunzione che ribalta l’onere della prova e va spesa espressamente nell’atto.',
          'Se invece prevale la qualificazione come appalto, il codice del consumo non si applica e si torna al regime del codice civile: denuncia entro sessanta giorni dalla scoperta e prescrizione biennale dalla consegna. La differenza fra i due regimi è la ragione per cui la qualificazione va trattata per prima e non come premessa di stile.',
        ],
        riferimenti: [
          { testo: 'art. 3, comma 1, lett. a) e c), d.lgs. 206/2005', tipo: 'norma' },
          { testo: 'artt. 128 ss. d.lgs. 206/2005', tipo: 'norma' },
          { testo: 'd.lgs. 170/2021', tipo: 'norma' },
          { testo: 'art. 1667 c.c.', tipo: 'norma' },
          { testo: 'art. 1668 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'inadempimento',
        titolo: 'Ritardo, vizi e risoluzione',
        sintesi: 'Due inadempimenti distinti, con due percorsi argomentativi da tenere separati.',
        paragrafi: [
          'La traccia contiene due inadempimenti che conviene non mescolare: il ritardo nell’esecuzione e i vizi che rendono i beni inidonei all’uso. Il primo si presta alla risoluzione per inadempimento; il secondo, in un contratto qualificato come vendita, apre anche i rimedi della garanzia.',
          'Per la risoluzione occorre che l’inadempimento non sia di scarsa importanza avuto riguardo all’interesse dell’altra parte. La traccia offre il materiale per sostenerlo: non un ritardo qualunque, ma un notevole ritardo unito a vizi che rendono i beni inidonei all’uso, cioè che frustrano la funzione stessa della prestazione.',
          'Quando i vizi sono tali da rendere la cosa completamente diversa da quella pattuita o del tutto inidonea alla sua funzione, si esce dalla garanzia per vizi ed entra la consegna di aliud pro alio: si applica l’azione ordinaria di risoluzione, che sfugge ai brevi termini di decadenza e prescrizione della garanzia. È l’argomento di riserva da tenere pronto se il convenuto eccepisce la decadenza.',
          'Sul piano della sequenza degli atti, la diffida ad adempiere è la mossa che conviene aver già compiuto: fissa un termine non inferiore a quindici giorni e produce la risoluzione di diritto alla sua scadenza, risparmiando l’onere di dimostrare in giudizio la non scarsa importanza. La traccia parla di soli solleciti bonari, quindi nell’atto la risoluzione va chiesta al giudice.',
          'Risolto il contratto, le prestazioni vanno restituite: l’acconto cospicuo versato da Tizio torna indietro, con gli interessi. La restituzione non è una voce di danno ma un effetto restitutorio, e come tale va domandata separatamente dal risarcimento — confonderle è uno degli errori che pesano di più in correzione.',
        ],
        riferimenti: [
          { testo: 'art. 1453 c.c.', tipo: 'norma' },
          { testo: 'art. 1454 c.c.', tipo: 'norma' },
          { testo: 'art. 1455 c.c.', tipo: 'norma' },
          { testo: 'art. 1458 c.c.', tipo: 'norma' },
          { testo: 'art. 1490 c.c.', tipo: 'norma' },
          { testo: 'art. 1492 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'danno',
        titolo: 'Il danno da domandare',
        sintesi: 'Voci concrete, allegate e provate: il danno generico non si liquida.',
        paragrafi: [
          'Il risarcimento comprende la perdita subita e il mancato guadagno, in quanto conseguenza immediata e diretta dell’inadempimento. Poiché l’inadempimento contrattuale della traccia non è doloso, il danno risarcibile resta limitato a quello prevedibile al tempo in cui è sorta l’obbligazione.',
          'Le voci vanno individuate e allegate una per una, perché il danno non è in re ipsa. Nella vicenda descritta sono spendibili: il costo del ripristino o della nuova fornitura presso terzi, le spese sostenute per rimediare all’inagibilità dei locali, gli eventuali maggiori costi energetici documentabili nel periodo in cui gli infissi difettosi sono rimasti in opera, le spese tecniche di accertamento.',
          'La valutazione equitativa è una rete di sicurezza per il quantum, non una scorciatoia sull’an: presuppone che il danno sia certo nella sua esistenza e soltanto di difficile determinazione nel suo ammontare. Va invocata in via subordinata, dopo aver comunque allegato i criteri di calcolo.',
          'Utile chiedere fin dall’atto la consulenza tecnica d’ufficio sui vizi e sui costi di ripristino, avvertendo però che la consulenza non è un mezzo di prova e non supplisce alle allegazioni mancanti: serve ad accertare fatti tecnici che la parte ha già dedotto.',
        ],
        riferimenti: [
          { testo: 'art. 1218 c.c.', tipo: 'norma' },
          { testo: 'art. 1223 c.c.', tipo: 'norma' },
          { testo: 'art. 1225 c.c.', tipo: 'norma' },
          { testo: 'art. 1226 c.c.', tipo: 'norma' },
          { testo: 'art. 2697 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'processo',
        titolo: 'Condizioni di procedibilità, giudice, atto',
        sintesi: 'La parte che fa la differenza fra un buon tema e un atto: gli adempimenti preliminari.',
        paragrafi: [
          'Prima di scrivere una riga di citazione va sciolto il nodo delle condizioni di procedibilità. La mediazione è obbligatoria soltanto nelle materie tassativamente elencate, che non ammettono estensione analogica: l’appalto non vi rientra, la vendita nemmeno, ma il contratto d’opera sì. È la ragione pratica per cui la qualificazione va decisa prima e non dopo.',
          'La negoziazione assistita è a sua volta condizione di procedibilità per le domande di pagamento di somme non superiori a cinquantamila euro, ma non si applica alle controversie che nascono da contratti conclusi fra professionisti e consumatori. Se si è argomentata la qualità di consumatore dell’assistito, l’esclusione opera e va detto espressamente: il candidato che si limita a tacere lascia il dubbio che non se ne sia accorto.',
          'Sulla competenza per territorio, il consumatore ha il proprio foro esclusivo: è vessatoria, e quindi nulla, la clausola che indica come sede del foro competente una località diversa da quella di residenza o di domicilio elettivo del consumatore. Se il contratto contiene una clausola di deroga, la si eccepisce nell’atto anziché limitarsi a ignorarla.',
          'L’atto da redigere è la citazione. Vanno rispettati il termine a comparire di centoventi giorni e, soprattutto, gli avvertimenti che il codice impone a pena di nullità: la costituzione entro settanta giorni prima dell’udienza e le decadenze che dalla costituzione tardiva discendono. Sono gli elementi che si perdono per fretta e che in correzione pesano più di un passaggio dottrinale.',
          'Le conclusioni vanno graduate: in via principale la risoluzione con la qualificazione più favorevole, in via subordinata la stessa domanda sull’altra qualificazione, in ogni caso la restituzione dell’acconto, il risarcimento e le spese. Chi scrive un solo capo di domanda affida l’esito a un’unica carta.',
        ],
        riferimenti: [
          { testo: 'art. 5, comma 1-bis, d.lgs. 28/2010', tipo: 'norma' },
          { testo: 'art. 3 d.l. 132/2014', tipo: 'norma' },
          { testo: 'art. 33, comma 2, lett. u), d.lgs. 206/2005', tipo: 'norma' },
          { testo: 'Cass. Sez. Un. n. 14669/2003', tipo: 'giurisprudenza' },
          { testo: 'art. 163 c.p.c.', tipo: 'norma' },
          { testo: 'art. 163-bis c.p.c.', tipo: 'norma' },
        ],
      },
    ],
    contrasti: [
      {
        id: 'vendita-appalto',
        questione:
          'Con quale criterio si distingue la vendita con posa in opera dall’appalto quando il contratto prevede insieme la fornitura del bene e la sua installazione?',
        orientamenti: [
          {
            tesi:
              'Conta la prevalenza economica: se il valore dei materiali supera nettamente quello della manodopera, il contratto è vendita.',
            argomento:
              'È il criterio più maneggevole e trova applicazione soprattutto nelle pronunce di merito, che ricavano la volontà delle parti dal peso economico delle due prestazioni così come risulta dal preventivo o dalla fattura. Il vantaggio è la verificabilità: il dato è documentale e non richiede indagini sull’intenzione.',
            riferimenti: [{ testo: 'Cass. civ. n. 5935/2018', tipo: 'giurisprudenza' }],
          },
          {
            tesi:
              'Conta la prevalenza funzionale: se l’obbligazione di dare assorbe quella di fare il contratto è vendita, se il fare è il fine e il dare il mezzo è appalto.',
            argomento:
              'È l’impostazione della Cassazione: il rapporto fra i valori è al più un indizio, mentre il criterio decisivo è se la fornitura del materiale sia solo il mezzo per produrre l’opera — e allora il lavoro è lo scopo del contratto, dunque appalto — oppure se il lavoro sia il mezzo per trasformare la materia e l’ottenimento della cosa sia lo scopo effettivo, dunque vendita. Restano rilevanti la serialità del bene e il grado di adattamento alle esigenze del committente.',
            riferimenti: [
              { testo: 'Cass. civ. n. 5935/2018', tipo: 'giurisprudenza' },
              { testo: 'art. 1655 c.c.', tipo: 'norma' },
            ],
          },
        ],
        ricaduta:
          'Non è una disputa accademica: dalla qualificazione dipendono i termini. Vendita al consumatore significa ventiquattro mesi di garanzia, ventisei di prescrizione e nessun onere di denuncia. Appalto significa sessanta giorni dalla scoperta per denunciare e due anni dalla consegna per agire. Chi qualifica male può trovarsi decaduto senza saperlo.',
      },
      {
        id: 'aliud-pro-alio',
        questione:
          'Quando i vizi sono così gravi da rendere il bene inidoneo all’uso, si resta nella garanzia per vizi o si passa all’azione ordinaria di risoluzione?',
        orientamenti: [
          {
            tesi:
              'Si resta nella garanzia: i vizi, per quanto gravi, restano vizi e soggiacciono ai termini di decadenza e prescrizione previsti per essa.',
            argomento:
              'La disciplina della garanzia è speciale e i suoi termini brevi rispondono all’esigenza di certezza dei rapporti commerciali. Ammettere che la gravità del difetto faccia rientrare la fattispecie nella disciplina generale significherebbe consentire di aggirare la decadenza ogni volta che il vizio sia serio, svuotando la norma.',
            riferimenti: [
              { testo: 'art. 1490 c.c.', tipo: 'norma' },
              { testo: 'art. 1495 c.c.', tipo: 'norma' },
            ],
          },
          {
            tesi:
              'Si passa all’azione ordinaria: se la cosa consegnata appartiene a un genere diverso o è del tutto inidonea alla funzione cui è destinata, vi è consegna di aliud pro alio e vale la prescrizione ordinaria.',
            argomento:
              'La garanzia presuppone che sia stata consegnata la cosa dovuta, sia pure difettosa. Quando il difetto è tale da impedire alla cosa di assolvere la funzione economico-sociale che le è propria, la prestazione non è inesatta ma mancata: l’inadempimento è totale e si applica la disciplina generale della risoluzione, con la prescrizione decennale.',
            riferimenti: [
              { testo: 'art. 1453 c.c.', tipo: 'norma' },
              { testo: 'art. 2946 c.c.', tipo: 'norma' },
            ],
          },
        ],
        ricaduta:
          'È l’argomento che salva l’atto quando la controparte eccepisce la decadenza dalla garanzia. Va costruito nei fatti prima che nel diritto: bisogna aver descritto i vizi in modo da far emergere che i serramenti non isolano, non chiudono, non svolgono la funzione per cui sono stati acquistati. Se i fatti sono descritti genericamente, la qualificazione come aliud pro alio non ha su cosa poggiare.',
      },
    ],
    trappole: [
      'Trattare la qualificazione del contratto come una premessa di stile e poi applicare i termini della vendita senza averla motivata. La commissione legge lì la differenza fra chi ha visto la questione e chi ha ricopiato uno schema.',
      'Scrivere che il consumatore deve denunciare il difetto entro due mesi dalla scoperta: quell’onere è stato abrogato nel 2021 e i manuali stampati prima lo riportano ancora.',
      'Confondere la restituzione dell’acconto con il risarcimento del danno. Sono due domande distinte con due fondamenti distinti, e vanno in due capi separati delle conclusioni.',
      'Dimenticare gli avvertimenti prescritti a pena di nullità della citazione. È il tipo di omissione che non si recupera con la qualità del ragionamento sostanziale.',
      'Affermare o negare la mediazione obbligatoria senza verificare l’elenco. L’elenco è tassativo e non si estende per analogia: la fornitura non vi rientra, il contratto d’opera sì.',
      'Chiedere la consulenza tecnica per far accertare fatti che non sono stati allegati. La consulenza accerta, non supplisce.',
      'Formulare un unico capo di domanda. Con una qualificazione controversa, le conclusioni si graduano in principale e subordinata.',
    ],
    griglia: [
      {
        voce: 'Individuazione dell’atto e delle domande',
        peso: 20,
        criterio:
          'Hai scelto la citazione, hai graduato le conclusioni e hai distinto restituzione e risarcimento.',
      },
      {
        voce: 'Qualificazione del contratto',
        peso: 20,
        criterio:
          'Hai argomentato vendita, appalto o contratto d’opera con il criterio della prevalenza, non per affermazione.',
      },
      {
        voce: 'Regime della garanzia e termini',
        peso: 20,
        criterio:
          'Hai applicato i termini coerenti con la qualificazione scelta e hai considerato il codice del consumo.',
      },
      {
        voce: 'Condizioni di procedibilità e competenza',
        peso: 15,
        criterio: 'Hai verificato mediazione, negoziazione assistita e foro del consumatore.',
      },
      {
        voce: 'Danno: allegazione e prova',
        peso: 15,
        criterio: 'Hai indicato voci concrete e i mezzi con cui provarle, senza danno in re ipsa.',
      },
      {
        voce: 'Tecnica redazionale',
        peso: 10,
        criterio: 'Editto completo, avvertimenti, termine a comparire, conclusioni ordinate.',
      },
    ],
  },
  {
    tracciaId: '2019-parere-civile',
    stato: 'verificata',
    aggiornatoAl: '24 agosto 2026',
    questioni: [
      'Se la dazione di denaro impiegato dal figlio per acquistare un immobile sia donazione diretta di denaro o donazione indiretta dell’immobile.',
      'Che cosa vada conferito in collazione: il denaro o l’immobile.',
      'Che cosa accada quando il genitore ha pagato solo una parte del prezzo — è qui che la giurisprudenza si divide.',
      'Con quale modalità la collazione si esegue quando ha per oggetto una liberalità indiretta.',
      'A quale momento si valuta il bene conferito, e perché la differenza fra denaro e immobile vale, in concreto, moltissimo.',
      'Se vi sia stata dispensa dalla collazione e quali limiti essa incontri.',
      'Come impostare la conclusione nell’interesse dell’assistito, che è il beneficiario e non i coeredi.',
    ],
    blocchi: [
      {
        id: 'inquadramento',
        titolo: 'Donazione indiretta e collazione',
        sintesi: 'Due istituti da tenere separati: la liberalità atipica e l’obbligo di conferire.',
        paragrafi: [
          'La donazione indiretta è la liberalità realizzata con un negozio diverso dalla donazione: il risultato dell’arricchimento del beneficiario si ottiene per via obliqua, e la legge sottopone l’atto alla disciplina sostanziale delle donazioni ma non alla forma dell’atto pubblico. È il motivo per cui l’operazione descritta nella traccia è valida pur senza notaio.',
          'La collazione è cosa diversa: è l’obbligo, gravante sui figli, sui loro discendenti e sul coniuge che concorrono alla successione, di conferire alla massa ereditaria quanto hanno ricevuto in vita dal defunto per donazione. Non serve a reintegrare una quota lesa — quella è la riduzione — ma a ricostruire la parità fra i coeredi presumendo che il genitore abbia voluto anticipare, non privilegiare.',
          'I due istituti si incontrano perché la collazione riguarda anche le liberalità indirette: la disciplina delle donazioni si applica anche agli atti diversi dalla donazione con cui si realizza una liberalità. La domanda che la traccia pone è dunque legittima, e la risposta dipende da che cosa si consideri oggetto della liberalità.',
          'Va tenuta ferma anche la distinzione, decisiva per il caso, fra due situazioni che si somigliano molto. Altro è la donazione diretta del denaro, che il beneficiario poi impiega di sua iniziativa in un acquisto immobiliare: lì l’oggetto della liberalità resta il denaro. Altro è la dazione del denaro come mezzo per l’unico e specifico fine di acquistare quel determinato immobile: lì la liberalità ha per oggetto il bene.',
        ],
        riferimenti: [
          { testo: 'art. 809 c.c.', tipo: 'norma' },
          { testo: 'art. 737 c.c.', tipo: 'norma' },
          { testo: 'art. 769 c.c.', tipo: 'norma' },
          { testo: 'art. 782 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'oggetto',
        titolo: 'Che cosa si conferisce',
        sintesi: 'Il collegamento teleologico fra la somma e l’acquisto è il fatto da provare.',
        paragrafi: [
          'Il principio consolidato è che, quando un immobile viene acquistato con denaro del genitore e intestato al figlio che il genitore intende beneficiare, la compravendita è lo strumento formale del trasferimento e la liberalità ha per oggetto l’immobile, non il denaro. Ne segue che in sede di collazione va conferito il bene.',
          'Il presupposto di questa conclusione non è però automatico: occorre che la dazione della somma sia avvenuta quale mezzo esclusivo e specifico per quell’acquisto. È un collegamento teleologico che va dimostrato — con la contestualità fra erogazione e rogito, con la tracciabilità del pagamento del prezzo, con la partecipazione del genitore alla trattativa — e che, se manca o non si riesce a provare, lascia in piedi la sola donazione di denaro.',
          'La differenza è tutt’altro che nominale. Se si conferisce l’immobile, la collazione si compie secondo il valore del bene al tempo dell’apertura della successione: un immobile comprato vent’anni prima può essersi rivalutato in modo importante. Se si conferisce il denaro, opera il principio nominalistico e si imputa la somma ricevuta, senza rivalutazione.',
          'Nell’interesse dell’assistito, che sostiene di dover conferire il solo denaro, la strategia difensiva si costruisce quindi sul terreno probatorio prima che su quello dogmatico: contestare il collegamento specifico, valorizzare l’autonomia della scelta di acquisto, evidenziare l’eventuale distanza di tempo fra la dazione e il rogito, mettere in luce che parte del prezzo è stata sostenuta con mezzi propri o con mutuo.',
        ],
        riferimenti: [
          { testo: 'Cass. Sez. Un. n. 9282/1992', tipo: 'giurisprudenza' },
          { testo: 'Cass. civ. n. 18541/2014', tipo: 'giurisprudenza' },
          { testo: 'art. 747 c.c.', tipo: 'norma' },
          { testo: 'art. 751 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'modalita',
        titolo: 'Modalità e dispensa',
        sintesi: 'La liberalità indiretta si conferisce per imputazione; la dispensa ha un limite.',
        paragrafi: [
          'Per gli immobili la legge offre l’alternativa fra conferimento in natura e imputazione. Quando però la liberalità è indiretta, il bene non è mai uscito dal patrimonio del defunto per entrare in quello del beneficiario per effetto di un atto di donazione: è stato acquistato direttamente dal terzo venditore. Il conferimento in natura non ha quindi un oggetto su cui operare nel modo previsto dalla norma, e la collazione si esegue per imputazione.',
          'L’imputazione si compie assegnando agli altri coeredi una porzione della massa proporzionale alla quota del beneficiario, e il valore si calcola al momento dell’apertura della successione.',
          'La dispensa dalla collazione è ammessa e può essere contenuta nell’atto di liberalità o in un atto successivo: se c’è, va cercata e spesa. Il suo limite è però netto, perché non produce effetto se non nei limiti della quota disponibile: la dispensa evita la collazione, non protegge dalla riduzione se la legittima di qualcuno risulta lesa.',
          'Questa distinzione va enunciata con precisione nel parere, perché è il punto in cui più spesso si scivola: la collazione è rinunciabile e disponibile, la legittima no.',
        ],
        riferimenti: [
          { testo: 'art. 746 c.c.', tipo: 'norma' },
          { testo: 'art. 747 c.c.', tipo: 'norma' },
          { testo: 'art. 737, comma 2, c.c.', tipo: 'norma' },
          { testo: 'art. 564 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'conclusione',
        titolo: 'Come chiudere il parere',
        sintesi: 'Una conclusione favorevole all’assistito, ma che non nasconde il rischio.',
        paragrafi: [
          'Il parere è un atto reso a un cliente, non un saggio: deve chiudersi con una indicazione operativa. La conclusione più difendibile nell’interesse del beneficiario è che la collazione abbia per oggetto il denaro, salvo che i coeredi provino il collegamento esclusivo e specifico fra la dazione e l’acquisto e, secondo l’orientamento prevalente, che l’intero costo del bene sia stato sostenuto dal defunto.',
          'A questa conclusione va accompagnato l’avvertimento sul rischio, perché un parere che promette l’esito è un parere che il cliente non può usare: se i coeredi riescono a dimostrare il nesso, il conferimento riguarderà l’immobile al valore attuale, con una differenza economica che va quantificata già in sede di consulenza.',
          'Utile chiudere indicando le condotte concrete: reperire la documentazione bancaria dell’epoca, verificare l’eventuale mutuo acceso dal beneficiario, ricostruire i tempi fra erogazione e rogito, cercare un’eventuale dispensa, valutare la convenienza di una definizione transattiva prima che il giudizio di divisione fissi il valore.',
        ],
        riferimenti: [
          { testo: 'art. 737 c.c.', tipo: 'norma' },
          { testo: 'art. 2697 c.c.', tipo: 'norma' },
        ],
      },
    ],
    contrasti: [
      {
        id: 'pagamento-parziale',
        questione:
          'La donazione indiretta dell’immobile è configurabile anche quando il donante ha pagato solo una parte del prezzo?',
        orientamenti: [
          {
            tesi:
              'No: se il donante non sostiene l’intero costo del bene, l’oggetto della liberalità resta il denaro erogato.',
            argomento:
              'Il pagamento del prezzo da parte di un terzo produce l’attribuzione indiretta dell’immobile soltanto quando l’intero costo sia stato sostenuto da lui: solo allora si può dire che il bene è entrato nel patrimonio del beneficiario per effetto della liberalità. Se il beneficiario ha contribuito con mezzi propri, il collegamento fra la somma e il bene è parziale e l’imputazione può riguardare soltanto il denaro versato, non una quota di valore dell’immobile.',
            riferimenti: [
              { testo: 'Cass. civ. n. 2149/2014', tipo: 'giurisprudenza' },
              { testo: 'Cass. civ. n. 16329/2024', tipo: 'giurisprudenza' },
            ],
          },
          {
            tesi:
              'Sì: provato il collegamento specifico fra le somme e l’impiego, la liberalità ha per oggetto il bene anche se il denaro non copriva l’intero prezzo.',
            argomento:
              'Se si accogliesse la tesi restrittiva, non sarebbe configurabile la donazione indiretta secondo lo schema del negotium mixtum cum donatione, che si fonda proprio sullo scarto voluto fra il prezzo dovuto e quello effettivamente pagato. La liberalità non richiede che l’attribuzione copra l’intero valore: richiede che il vantaggio patrimoniale sia riferibile all’intento liberale, e questo può accertarsi anche per una parte.',
            riferimenti: [
              { testo: 'Cass. civ. n. 9194/2015', tipo: 'giurisprudenza' },
              { testo: 'Cass. civ. n. 10759/2019', tipo: 'giurisprudenza' },
            ],
          },
        ],
        ricaduta:
          'È la questione su cui il caso si vince o si perde, e va trattata anche se la traccia non dice espressamente che il pagamento fu parziale: proprio perché non lo dice, il parere deve prevedere l’ipotesi. Per l’assistito la tesi restrittiva è la più favorevole, perché àncora il conferimento alla somma nominale invece che al valore attuale dell’immobile.',
      },
      {
        id: 'modalita-collazione',
        questione:
          'La collazione di una liberalità indiretta avente a oggetto un immobile può avvenire in natura?',
        orientamenti: [
          {
            tesi: 'No: può avvenire soltanto per imputazione.',
            argomento:
              'Il conferimento in natura presuppone che il bene sia pervenuto al coerede dal defunto. Nella liberalità indiretta il bene è stato acquistato dal terzo venditore e non è mai transitato nel patrimonio del disponente: manca il presupposto materiale del conferimento in natura, e resta l’imputazione del valore.',
            riferimenti: [
              { testo: 'art. 746 c.c.', tipo: 'norma' },
              { testo: 'art. 747 c.c.', tipo: 'norma' },
            ],
          },
          {
            tesi: 'Sì, quando il coerede lo scelga, in forza dell’alternativa che la legge gli riconosce.',
            argomento:
              'La norma attribuisce al conferente la scelta fra natura e imputazione senza distinguere secondo la fonte della liberalità, e la disciplina delle donazioni si applica anche alle liberalità realizzate con atti diversi. Negare l’alternativa significherebbe introdurre una limitazione che il testo non prevede.',
            riferimenti: [
              { testo: 'art. 746 c.c.', tipo: 'norma' },
              { testo: 'art. 809 c.c.', tipo: 'norma' },
            ],
          },
        ],
        ricaduta:
          'Sul piano pratico la scelta conta quando il valore dell’immobile è cresciuto molto: il conferimento in natura restituisce il bene alla massa, l’imputazione lascia il bene al coerede e riequilibra con il valore. Nel parere va indicata quale delle due soluzioni convenga in concreto all’assistito, non solo quale sia astrattamente preferibile.',
      },
    ],
    trappole: [
      'Confondere collazione e riduzione. La collazione ricostruisce la parità fra coeredi ed è disponibile; la riduzione tutela la legittima e non lo è. La dispensa dalla collazione non mette al riparo dall’azione di riduzione.',
      'Dimenticare che la collazione opera solo fra coniuge, figli e loro discendenti che accettano l’eredità: non riguarda gli altri successibili.',
      'Applicare al denaro la rivalutazione. Per le somme di denaro vale il principio nominalistico, con l’eventuale correttivo previsto dalla legge; per l’immobile vale invece il valore al tempo dell’apertura della successione.',
      'Trattare il collegamento fra dazione e acquisto come una qualificazione giuridica anziché come un fatto da provare. È un fatto, e l’onere grava su chi invoca la collazione dell’immobile.',
      'Scrivere un parere che espone entrambe le tesi e non sceglie. Il parere è reso a una parte: le tesi si espongono, ma la conclusione va presa e va motivata nell’interesse dell’assistito.',
      'Omettere l’avvertimento sul rischio. Una conclusione favorevole senza indicazione dell’alea è un parere che il cliente non può usare per decidere.',
    ],
    griglia: [
      {
        voce: 'Inquadramento degli istituti',
        peso: 15,
        criterio: 'Donazione indiretta e collazione distinte, con la loro funzione e i loro presupposti.',
      },
      {
        voce: 'Oggetto della collazione',
        peso: 25,
        criterio:
          'Hai posto la questione denaro/immobile e l’hai risolta con il criterio del collegamento teleologico.',
      },
      {
        voce: 'Trattazione del contrasto',
        peso: 20,
        criterio: 'Hai dato conto di entrambi gli orientamenti sul pagamento parziale, con le pronunce.',
      },
      {
        voce: 'Modalità, valore e dispensa',
        peso: 15,
        criterio: 'Imputazione, momento di valutazione e limite della dispensa alla disponibile.',
      },
      {
        voce: 'Conclusione nell’interesse dell’assistito',
        peso: 15,
        criterio: 'Conclusione presa, motivata e accompagnata dall’avvertimento sul rischio.',
      },
      {
        voce: 'Struttura e proprietà di linguaggio',
        peso: 10,
        criterio: 'Premesse brevi, sviluppo ordinato, conclusione operativa. Nessuna divagazione.',
      },
    ],
  },
];

/**
 * Lo svolgimento pubblicato di una traccia, se esiste.
 *
 * Le bozze restano fuori: è qui che il cancello di pubblicazione opera,
 * in un solo punto, così che nessuna schermata possa aggirarlo per
 * distrazione.
 */
export function svolgimentoDi(tracciaId: string): Svolgimento | undefined {
  return svolgimenti.find((s) => s.tracciaId === tracciaId && s.stato === 'verificata');
}

/** Tracce che hanno uno svolgimento pubblicato. */
export function tracceConSvolgimento(): string[] {
  return svolgimenti.filter((s) => s.stato === 'verificata').map((s) => s.tracciaId);
}

/** Numero di tracce dell'archivio che hanno già uno svolgimento pubblicato. */
export function quanteConSvolgimento(): number {
  const pubblicate = new Set(tracceConSvolgimento());
  return tracce.filter((t) => pubblicate.has(t.id)).length;
}
