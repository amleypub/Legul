import { AGGIORNATO_AL } from './tipi';
import type { Svolgimento } from './tipi';

export const parereCivile2019: Svolgimento = {
    tracciaId: '2019-parere-civile',
    stato: 'verificata',
    aggiornatoAl: AGGIORNATO_AL,
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
  };
