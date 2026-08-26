import type { CasoPratico } from './tipi';

export const casiPrivato: CasoPratico[] = [
  {
    id: 'privato-locazione-morosita',
    materia: 'Diritto privato',
    titolo: 'Morosità nella locazione commerciale',
    fatto: [
      'Il tuo assistito è proprietario di un immobile locato dal 2021 a una società per l’esercizio di un’attività di ristorazione, con canone mensile di duemila euro e deposito cauzionale pari a tre mensilità.',
      'La conduttrice ha smesso di pagare da sette mensilità. A fronte dei solleciti ha risposto per iscritto lamentando infiltrazioni dal solaio che, a suo dire, avrebbero reso inagibile una parte del locale, e dichiarando di sospendere il pagamento fino al ripristino.',
      'Il locatore replica che le infiltrazioni riguardano una superficie limitata, che l’attività non si è mai interrotta e che la conduttrice non ha mai denunciato il vizio prima di essere sollecitata.',
    ],
    consegna:
      'Il candidato individui i rimedi esperibili dal locatore, illustri le questioni di diritto sostanziale e processuale rilevanti e indichi la via giudiziale più conveniente.',
    scaletta: [
      {
        id: 'inadempimento',
        titolo: 'L’obbligazione del conduttore e la gravità dell’inadempimento',
        dettaglio:
          'Il pagamento del canone è obbligazione principale del conduttore. Sette mensilità superano ampiamente la soglia legale di gravità prevista per le locazioni, che il legislatore ha tipizzato proprio per sottrarre la valutazione alla discrezionalità del giudice.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 1587 c.c.', tipo: 'norma' },
          { testo: 'art. 5 l. 392/1978', tipo: 'norma' },
          { testo: 'art. 1455 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'autoriduzione',
        titolo: 'L’eccezione di inadempimento e il divieto di autoriduzione',
        dettaglio:
          'Il conduttore non può sospendere unilateralmente il pagamento se non quando venga a mancare del tutto la controprestazione. Se il godimento è solo parzialmente ridotto, l’autoriduzione del canone è illegittima: il rimedio è la domanda di riduzione al giudice, non la sospensione di fatto.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 1460 c.c.', tipo: 'norma' },
          { testo: 'art. 1578 c.c.', tipo: 'norma' },
          { testo: 'art. 1584 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'vizi',
        titolo: 'Vizi della cosa locata e obbligo di manutenzione',
        dettaglio:
          'Vanno distinti i vizi che diminuiscono l’idoneità all’uso, che danno diritto a riduzione o risoluzione, dalle riparazioni di manutenzione straordinaria che gravano sul locatore. Rileva anche la tardività della doglianza, sollevata solo dopo i solleciti.',
        peso: 10,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 1575 c.c.', tipo: 'norma' },
          { testo: 'art. 1576 c.c.', tipo: 'norma' },
          { testo: 'art. 1578 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'sfratto',
        titolo: 'Il procedimento per convalida di sfratto',
        dettaglio:
          'Intimazione di sfratto per morosità con contestuale citazione per la convalida, cumulabile con la domanda di ingiunzione per i canoni scaduti. È la via più rapida e va scelta consapevolmente rispetto all’ordinario giudizio di risoluzione.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 658 c.p.c.', tipo: 'norma' },
          { testo: 'art. 657 c.p.c.', tipo: 'norma' },
          { testo: 'art. 663 c.p.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'opposizione',
        titolo: 'Che cosa accade se il conduttore si oppone',
        dettaglio:
          'In caso di opposizione il giudice può emettere ordinanza provvisoria di rilascio quando l’opposizione non è fondata su prova scritta; il processo prosegue poi nelle forme del rito locatizio, con mutamento del rito.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 665 c.p.c.', tipo: 'norma' },
          { testo: 'art. 667 c.p.c.', tipo: 'norma' },
          { testo: 'art. 447-bis c.p.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'procedibilita',
        titolo: 'Mediazione e termine di grazia',
        dettaglio:
          'La locazione è materia a mediazione obbligatoria, ma la condizione non opera nella fase sommaria fino al mutamento del rito. Va inoltre considerato il termine di grazia che il conduttore può chiedere per sanare la morosità.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 5, comma 1-bis, d.lgs. 28/2010', tipo: 'norma' },
          { testo: 'art. 55 l. 392/1978', tipo: 'norma' },
          { testo: 'art. 5, comma 4, d.lgs. 28/2010', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'Se il conduttore avesse denunciato le infiltrazioni prima di smettere di pagare, cambierebbe qualcosa?',
      'Il locatore può trattenere il deposito cauzionale a copertura dei canoni non pagati, o deve restituirlo e agire separatamente?',
      'Quante volte il conduttore può chiedere il termine di grazia, e con quali limiti?',
      'Se l’opposizione è fondata su prova scritta, il locatore resta senza tutela fino alla sentenza?',
    ],
    insidie: [
      'Dire che il conduttore poteva sospendere il pagamento perché c’erano i vizi. L’eccezione di inadempimento nelle locazioni ha limiti stretti e l’autoriduzione unilaterale è illegittima.',
      'Fermarsi alla risoluzione per inadempimento senza arrivare al procedimento per convalida. La commissione chiede espressamente il versante processuale.',
      'Dimenticare la cumulabilità fra intimazione di sfratto e ingiunzione per i canoni: sono due rimedi in un unico atto ed è il vantaggio pratico principale.',
      'Affermare che la mediazione obbligatoria blocca l’intimazione di sfratto. Nella fase sommaria non opera: la condizione va soddisfatta dopo il mutamento del rito.',
    ],
  },
  {
    id: 'privato-custodia-caduta',
    materia: 'Diritto privato',
    titolo: 'Caduta in un esercizio commerciale e responsabilità del custode',
    fatto: [
      'La tua assistita è scivolata su una chiazza di liquido nel corridoio di un supermercato, riportando la frattura del polso con postumi permanenti.',
      'La società che gestisce il punto vendita sostiene che il liquido era stato rovesciato pochi minuti prima da un altro cliente, che il personale aveva già collocato un cartello di segnalazione a pochi metri e che la donna procedeva parlando al telefono.',
      'Le riprese delle telecamere interne esistono ma la società, sollecitata, non le ha ancora messe a disposizione.',
    ],
    consegna:
      'Il candidato individui il titolo di responsabilità, illustri il riparto dell’onere della prova e indichi i profili processuali rilevanti, comprese le iniziative istruttorie opportune.',
    scaletta: [
      {
        id: 'titolo',
        titolo: 'Responsabilità da cose in custodia',
        dettaglio:
          'Va inquadrata nella responsabilità del custode, che è oggettiva e prescinde dalla colpa: il custode risponde del danno cagionato dalla cosa salvo la prova del caso fortuito. Va spiegato perché non si tratta di responsabilità per fatto illecito generico.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 2051 c.c.', tipo: 'norma' },
          { testo: 'art. 2043 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'fortuito',
        titolo: 'Il caso fortuito e il fatto del terzo',
        dettaglio:
          'Il fatto del terzo che ha rovesciato il liquido può integrare il fortuito solo se dotato di autonoma efficienza causale e imprevedibilità: in un esercizio aperto al pubblico la caduta di sostanze è evento tipico e prevedibile, che il custode deve organizzarsi per fronteggiare.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 2051 c.c.', tipo: 'norma' },
          { testo: 'art. 1218 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'concorso',
        titolo: 'Il concorso del danneggiato',
        dettaglio:
          'La disattenzione della danneggiata rileva come concorso colposo e può ridurre il risarcimento; nei casi estremi la condotta del danneggiato assume efficacia causale esclusiva e integra essa stessa il fortuito. Va graduata, non liquidata in un cenno.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 1227, comma 1, c.c.', tipo: 'norma' },
          { testo: 'art. 1227, comma 2, c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'onere',
        titolo: 'Chi prova che cosa',
        dettaglio:
          'Il danneggiato prova il nesso fra la cosa e il danno, cioè che è caduto per effetto di quella condizione della cosa; il custode deve provare il fortuito. Non spetta al danneggiato dimostrare l’insidia o la colpa nella custodia.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 2697 c.c.', tipo: 'norma' },
          { testo: 'art. 2051 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'istruttoria',
        titolo: 'Le telecamere e l’istruttoria preventiva',
        dettaglio:
          'Le riprese vanno acquisite prima che siano cancellate: si può chiedere l’esibizione, ricorrere all’accertamento tecnico preventivo o all’istruzione preventiva per il rischio di dispersione della prova. Va valutata anche la conseguenza della mancata esibizione sul piano dell’argomento di prova.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 210 c.p.c.', tipo: 'norma' },
          { testo: 'art. 696 c.p.c.', tipo: 'norma' },
          { testo: 'art. 116, comma 2, c.p.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'competenza',
        titolo: 'Competenza, procedibilità e liquidazione',
        dettaglio:
          'Va individuato il giudice competente per valore e territorio, verificata la negoziazione assistita per le domande di pagamento entro cinquantamila euro con l’esclusione per i rapporti fra professionista e consumatore, e impostata la liquidazione tabellare del danno biologico con eventuale personalizzazione.',
        peso: 10,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 3 d.l. 132/2014', tipo: 'norma' },
          { testo: 'art. 20 c.p.c.', tipo: 'norma' },
          { testo: 'art. 2059 c.c.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'Se il cartello di segnalazione era davvero presente, il custode è liberato?',
      'Che differenza c’è, in punto di onere della prova, fra agire in base alla responsabilità del custode e agire in base alla clausola generale sull’illecito?',
      'La mancata esibizione delle riprese che conseguenze processuali produce?',
      'La danneggiata era cliente: cambierebbe qualcosa qualificare il rapporto come contrattuale?',
    ],
    insidie: [
      'Ricostruire il caso come illecito generico, con onere della colpa a carico del danneggiato. È l’errore che ribalta l’intera impostazione probatoria a sfavore dell’assistito.',
      'Trattare il fatto del terzo come fortuito automatico. Serve autonoma efficienza causale e imprevedibilità, e in un supermercato la seconda è difficile da sostenere.',
      'Liquidare il concorso del danneggiato con una battuta. È il punto su cui la commissione insiste, e va distinto il concorso che riduce da quello che interrompe il nesso.',
      'Dimenticare le telecamere. È l’unica prova decisiva e sparisce da sola se non ci si muove subito: un candidato che non lo dice mostra di non aver pensato al caso come a un caso vero.',
    ],
  },
  {
    id: 'privato-preliminare-2932',
    materia: 'Diritto privato',
    titolo: 'Rifiuto di stipulare il definitivo dopo il preliminare',
    fatto: [
      'La tua assistita ha sottoscritto nel marzo dello scorso anno un preliminare di compravendita per un appartamento, versando a titolo di caparra confirmatoria una somma pari a circa un decimo del prezzo. Il preliminare fissava la stipula del definitivo entro dodici mesi ed è stato trascritto.',
      'Alla data convenuta il promittente venditore non si è presentato davanti al notaio. Interpellato, ha risposto per iscritto che nel frattempo il valore dell’immobile è cresciuto e che intende restituire il doppio della caparra.',
      'Dalle visure risulta che sull’immobile è stata iscritta, in data successiva alla trascrizione del preliminare, un’ipoteca volontaria a garanzia di un finanziamento contratto dal promittente venditore.',
    ],
    consegna:
      'Il candidato individui i rimedi esperibili dalla promissaria acquirente, illustri le questioni di diritto sostanziale e processuale rilevanti e indichi la via giudiziale più conveniente.',
    scaletta: [
      {
        id: 'qualificazione',
        titolo: 'Il preliminare e l’obbligo di prestare il consenso',
        dettaglio:
          'Il preliminare produce effetti solo obbligatori: obbliga a prestare il consenso al definitivo, non trasferisce la proprietà. Va sottolineato che il vincolo è pienamente coercibile e che il promittente non ha una facoltà di scelta fra adempiere e pagare.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 1351 c.c.', tipo: 'norma' },
          { testo: 'art. 1376 c.c.', tipo: 'norma' },
          { testo: 'art. 2932 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'caparra',
        titolo: 'La caparra confirmatoria e il carattere alternativo dei rimedi',
        dettaglio:
          'Il recesso con restituzione del doppio della caparra è rimedio della parte non inadempiente, non una via d’uscita per chi è inadempiente. Il promittente venditore non può dunque liberarsi offrendo il doppio: è la promissaria a scegliere fra recesso e domanda di adempimento o risoluzione con risarcimento integrale.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 1385 c.c.', tipo: 'norma' },
          { testo: 'art. 1453 c.c.', tipo: 'norma' },
          { testo: 'Cass. civ., sez. un., n. 553/2009', tipo: 'giurisprudenza' },
        ],
      },
      {
        id: 'esecuzione',
        titolo: 'L’esecuzione in forma specifica e i suoi presupposti',
        dettaglio:
          'La sentenza costitutiva ex art. 2932 c.c. presuppone che l’esecuzione sia possibile e non esclusa dal titolo, e che la parte che agisce esegua o offra la propria prestazione. L’offerta del prezzo va formulata in citazione: la sua omissione è causa frequente di rigetto.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 2932 c.c.', tipo: 'norma' },
          { testo: 'art. 2932, comma 2, c.c.', tipo: 'norma' },
          { testo: 'art. 1477 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'trascrizione',
        titolo: 'Trascrizione della domanda ed effetto prenotativo del preliminare',
        dettaglio:
          'La trascrizione della domanda ex art. 2932 c.c. rende la sentenza opponibile a chi ha acquistato diritti dopo. Se la domanda è trascritta entro i termini dell’art. 2645-bis c.c., l’effetto prenotativo del preliminare retroagisce e l’ipoteca iscritta nel frattempo è travolta: è il punto decisivo del caso.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 2652, n. 2, c.c.', tipo: 'norma' },
          { testo: 'art. 2645-bis c.c.', tipo: 'norma' },
          { testo: 'art. 2915 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'procedibilita',
        titolo: 'Rito, competenza e condizione di procedibilità',
        dettaglio:
          'La domanda si propone davanti al tribunale del luogo in cui si trova l’immobile e va introdotta con citazione nelle forme ordinarie. Va verificata la mediazione obbligatoria in materia di diritti reali e di contratti immobiliari, che è condizione di procedibilità da esperire prima della domanda.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 21 c.p.c.', tipo: 'norma' },
          { testo: 'art. 5, comma 1, d.lgs. 28/2010', tipo: 'norma' },
          { testo: 'art. 163 c.p.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'cautele',
        titolo: 'Le cautele da prendere subito',
        dettaglio:
          'Prima ancora della citazione vanno acquisite le visure aggiornate e verificato se il termine dell’effetto prenotativo sia ancora aperto: se è scaduto, la trascrizione della domanda opera solo dalla propria data e i gravami successivi restano opponibili. Va valutata anche la trascrizione tempestiva rispetto a un’eventuale rivendita a terzi.',
        peso: 10,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 2645-bis, comma 3, c.c.', tipo: 'norma' },
          { testo: 'art. 2643 c.c.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'Il promittente venditore sostiene di potersi liberare restituendo il doppio della caparra. Ha ragione?',
      'Che cosa succede all’ipoteca iscritta dopo la trascrizione del preliminare, se la domanda è trascritta nei termini?',
      'Se la promissaria acquirente non offre il prezzo in citazione, il giudice può ugualmente emettere la sentenza?',
      'Se l’immobile fosse stato nel frattempo venduto a un terzo che ha trascritto per primo, quali rimedi restano?',
    ],
    insidie: [
      'Trattare recesso e domanda di adempimento come rimedi cumulabili. Sono alternativi, e la scelta va motivata in base a ciò che conviene alla cliente.',
      'Dimenticare l’offerta della propria prestazione. È il presupposto dell’art. 2932 c.c. su cui si perdono più cause di quante se ne perdano nel merito.',
      'Fermarsi al diritto sostanziale senza arrivare alla trascrizione della domanda. Qui è la trascrizione a decidere l’esito pratico, non la sentenza in sé.',
      'Confondere l’effetto prenotativo dell’art. 2645-bis c.c. con la trascrizione della domanda giudiziale: sono due meccanismi distinti che devono incastrarsi nei termini.',
    ],
  },
  {
    id: 'privato-responsabilita-sanitaria',
    materia: 'Diritto privato',
    titolo: 'Danno dopo un intervento chirurgico in struttura pubblica',
    fatto: [
      'Il tuo assistito è stato sottoposto a un intervento programmato presso un’azienda ospedaliera. Nel decorso post-operatorio è insorta una complicanza che ha comportato un secondo intervento e postumi permanenti.',
      'Dalla cartella clinica risultano una compilazione lacunosa del diario e l’assenza del modulo di consenso informato relativo alla specifica tecnica chirurgica utilizzata, diversa da quella prospettata in sede di visita.',
      'Il chirurgo operava in regime di dipendenza dall’azienda. L’assistito chiede se convenga agire contro la struttura, contro il medico o contro entrambi, e in che tempi.',
    ],
    consegna:
      'Il candidato individui i titoli di responsabilità configurabili, illustri le questioni di diritto sostanziale e processuale rilevanti e indichi la strategia giudiziale più conveniente.',
    scaletta: [
      {
        id: 'doppio-binario',
        titolo: 'Il doppio binario introdotto dalla legge Gelli-Bianco',
        dettaglio:
          'La struttura risponde a titolo contrattuale per inadempimento dell’obbligazione assunta con il contratto atipico di spedalità; l’esercente la professione sanitaria risponde a titolo extracontrattuale, salvo che abbia agito nell’adempimento di un’obbligazione contrattuale assunta direttamente con il paziente.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 7, commi 1 e 3, l. 24/2017', tipo: 'norma' },
          { testo: 'art. 1218 c.c.', tipo: 'norma' },
          { testo: 'art. 2043 c.c.', tipo: 'norma' },
        ],
      },
      {
        id: 'onere-prova',
        titolo: 'Riparto dell’onere della prova e nesso causale',
        dettaglio:
          'Contro la struttura il paziente allega l’inadempimento e prova il nesso fra condotta ed evento; spetta alla struttura provare la causa non imputabile. Va valorizzata la cartella clinica lacunosa, la cui incompletezza non può ridondare a danno del paziente e consente il ricorso alla presunzione.',
        peso: 20,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 1218 c.c.', tipo: 'norma' },
          { testo: 'art. 2697 c.c.', tipo: 'norma' },
          { testo: 'Cass. civ., sez. III, n. 28991/2019', tipo: 'giurisprudenza' },
        ],
      },
      {
        id: 'consenso',
        titolo: 'Il consenso informato come bene autonomo',
        dettaglio:
          'La violazione del consenso informato lede il diritto all’autodeterminazione ed è fonte di danno risarcibile autonomo, distinto da quello alla salute: può sussistere anche quando l’intervento sia stato eseguito correttamente. Qui la tecnica utilizzata era diversa da quella prospettata, e il punto va tenuto separato dalla colpa medica.',
        peso: 15,
        versante: 'sostanziale',
        riferimenti: [
          { testo: 'art. 32 Cost.', tipo: 'norma' },
          { testo: 'art. 1 l. 219/2017', tipo: 'norma' },
          { testo: 'Cass. civ., sez. III, n. 28985/2019', tipo: 'giurisprudenza' },
        ],
      },
      {
        id: 'procedibilita',
        titolo: 'La condizione di procedibilità e la scelta fra i due percorsi',
        dettaglio:
          'Chi agisce deve preventivamente esperire il ricorso per consulenza tecnica preventiva ai fini della composizione della lite, oppure in alternativa la mediazione. Il primo percorso è di regola preferibile, perché porta in causa la consulenza medico-legale già in fase preventiva e consente il successivo giudizio nelle forme semplificate.',
        peso: 20,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 8 l. 24/2017', tipo: 'norma' },
          { testo: 'art. 696-bis c.p.c.', tipo: 'norma' },
          { testo: 'art. 5, comma 1, d.lgs. 28/2010', tipo: 'norma' },
        ],
      },
      {
        id: 'azione-diretta',
        titolo: 'Azione diretta verso l’assicuratore e litisconsorzio',
        dettaglio:
          'La legge prevede l’azione diretta del danneggiato nei confronti dell’impresa di assicurazione della struttura e dell’esercente, nei limiti dei massimali, con litisconsorzio necessario dell’assicurato. Va verificata l’operatività della disciplina alla luce dei decreti attuativi.',
        peso: 15,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 12 l. 24/2017', tipo: 'norma' },
          { testo: 'art. 10 l. 24/2017', tipo: 'norma' },
        ],
      },
      {
        id: 'rivalsa',
        titolo: 'La rivalsa sulla struttura e la posizione del medico',
        dettaglio:
          'Conviene di regola convenire la struttura, contro cui il titolo è contrattuale e la prescrizione decennale. La struttura potrà poi rivalersi sul medico solo in caso di dolo o colpa grave, entro i limiti e nei termini di legge: è la ragione per cui citare anche il sanitario espone il cliente al più breve termine quinquennale senza reali vantaggi.',
        peso: 10,
        versante: 'processuale',
        riferimenti: [
          { testo: 'art. 9 l. 24/2017', tipo: 'norma' },
          { testo: 'art. 2947 c.c.', tipo: 'norma' },
          { testo: 'art. 2946 c.c.', tipo: 'norma' },
        ],
      },
    ],
    domandeCommissione: [
      'Perché conviene convenire la struttura e non il medico? Che cosa cambia in punto di onere della prova e di prescrizione?',
      'La cartella clinica incompleta che effetti produce sulla posizione della struttura?',
      'Se l’intervento fosse stato eseguito a regola d’arte, resterebbe qualcosa da risarcire?',
      'Il tentativo di conciliazione tramite consulenza preventiva e la mediazione sono cumulabili o alternativi?',
    ],
    insidie: [
      'Trattare struttura e medico come se rispondessero allo stesso titolo. Dal 2017 non è più così, e la differenza si riflette su prova e prescrizione.',
      'Assorbire il consenso informato nella colpa medica. Sono due danni distinti, e il secondo può esistere anche senza il primo.',
      'Dimenticare la condizione di procedibilità. Il ricorso proposto senza averla soddisfatta espone a improcedibilità, ed è un errore che si paga in aula.',
      'Presentare la rivalsa come se fosse una normale azione di regresso. Opera solo per dolo o colpa grave ed è contenuta entro limiti che la legge fissa espressamente.',
    ],
  },
];
