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
];
