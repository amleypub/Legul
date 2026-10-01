import { Platform } from 'react-native';

/**
 * Sistema visivo di Legul.
 *
 * Carta calda, vetro satinato, un solo accento.
 *
 * Il tema è passato per tre stagioni. La prima era chiara ma giocosa —
 * colori caramellati, forme tonde, una mascotte — e non reggeva il
 * posizionamento di uno strumento professionale. La seconda era scura:
 * obsidiana e vetro, corretta come registro ma, all'uso, faticosa per
 * l'unica cosa che qui si fa davvero a lungo, cioè leggere. Questa
 * tiene il registro della seconda e torna alla luce della prima: fondo
 * color carta, testo quasi nero, superfici di vetro bianco che si
 * staccano con un'ombra morbida invece che con un bagliore.
 *
 * Le tre regole restano le stesse, cambia come si applicano:
 *
 * - **Il vetro ha bisogno di qualcosa da rifrangere.** Su carta il vetro
 *   è bianco al settanta-novanta per cento sopra una sfocatura, e il
 *   fondale non è una tinta unita: `Sfondo` ci stende velature appena
 *   percettibili. Senza, le schede sarebbero rettangoli bianchi su un
 *   rettangolo beige.
 * - **Il bordo è luce, non contorno.** In alto un filo bianco pieno che
 *   prende la luce, in basso un filo d'ombra appena accennato: lo
 *   spigolo di una lastra, non la cornice di un riquadro.
 * - **L'accento è una risorsa scarsa.** Lo champagne riempie le azioni
 *   primarie e nient'altro. Come *testo* su carta però non si legge —
 *   il contrasto è 2,2 — e per questo ha un gemello, `accentTesto`, un
 *   oro profondo che porta lo stesso significato dove serve leggerlo.
 */

// ——— Fondamentali ———

export const colors = {
  /*
    `primary` è una **superficie scura**, non un accento: grafite, per i
    pulsanti scuri e per il testo sopra i riempimenti champagne. Tenerlo
    distinto da `accent` non è pedanteria — quando i due ruoli sono
    coincisi una volta, ogni scheda che usava il primario come fondo è
    diventata una lastra dorata.
  */
  primary: '#16181D',
  primaryLight: '#2B2F38',
  /** Champagne: l'unico accento. Riempie le azioni primarie, mai il testo. */
  accent: '#C9A227',
  accentChiaro: '#DDBA4E',
  accentEdge: '#8C6F14',
  /**
   * L'accento quando va letto: testi, icone, tratti su carta.
   *
   * Lo champagne pieno su fondo chiaro scende a 2,2 di contrasto. Questo
   * oro profondo sta sopra 5,4: abbastanza per un'etichetta piccola, e
   * ancora abbastanza caldo da leggersi come lo stesso colore.
   */
  accentTesto: '#7D5F0B',
  /** Velo d'accento per i fondi delle pastiglie, non per il testo. */
  accentSoft: 'rgba(201,162,39,0.13)',

  /** Carta calda: il fondo su cui poggia tutto. */
  background: '#F5F4F0',
  /** Superficie opaca, quando il vetro non è possibile. */
  card: '#FFFFFF',
  /** Un gradino sopra la carta, per ciò che deve staccarsi senza ombra. */
  cardAlta: '#FBFAF7',

  text: '#14161B',
  textMuted: '#5C6270',
  /** Terzo livello: solo stati disattivi e dettagli decorativi, mai testo da leggere. */
  textFaint: '#8E94A0',

  /** Titanio: icone secondarie, dettagli metallici, stati inattivi. */
  titanio: '#7C828E',
  /** Il titanio quando deve vedersi: tratti del monolite, icone in evidenza. */
  titanioForte: '#4B515C',

  success: '#2F8F63',
  successEdge: '#1F6B48',
  successSoft: 'rgba(47,143,99,0.10)',
  error: '#C93A50',
  errorEdge: '#9E2638',
  errorSoft: 'rgba(201,58,80,0.09)',

  /** Bordo di base: su carta è un grafite appena accennato. */
  border: 'rgba(20,22,27,0.08)',
  streakFrom: '#DDBA4E',
  streakTo: '#C9A227',
};

/**
 * Livelli trasparenti.
 *
 * Sono la sostanza del linguaggio, e su carta si dividono in due
 * famiglie che non vanno confuse. Il **vetro** è bianco e denso: è ciò
 * di cui sono fatte le superfici. I **veli** sono grafite e radi: sono
 * ciò che si posa *dentro* una superficie per segnare un campo, uno
 * stato, una pastiglia. Un velo bianco dentro una scheda bianca non si
 * vedrebbe; un vetro grafite sopra la carta sarebbe una macchia.
 */
export const alpha = {
  /** Riempimento delle superfici in vetro. */
  vetro: 'rgba(255,255,255,0.74)',
  vetroForte: 'rgba(255,255,255,0.9)',
  /** Superficie appoggiata su una superficie: un velo, non altro bianco. */
  vetroInterno: 'rgba(20,22,27,0.028)',
  /**
   * Barra dei tab e intestazioni: più densa delle superfici di contenuto.
   *
   * È un elemento di comando, non di lettura: deve lasciar intuire che
   * sotto scorre qualcosa senza che quel qualcosa competa con le
   * etichette.
   */
  vetroChrome: 'rgba(250,249,246,0.88)',

  /** Bordo standard: grafite a bassissima opacità. */
  bordo: 'rgba(20,22,27,0.08)',
  bordoMarcato: 'rgba(20,22,27,0.15)',
  /** Filo di luce in alto: è il taglio del vetro. */
  lume: 'rgba(255,255,255,0.95)',
  /** Filo d'ombra in basso: chiude la lastra e le dà spessore. */
  fondo: 'rgba(20,22,27,0.05)',

  /** Riempimenti tenui per pastiglie, campi e stati inattivi. */
  velo: 'rgba(20,22,27,0.04)',
  veloForte: 'rgba(20,22,27,0.07)',
};

/**
 * Gradiente del bordo di vetro.
 *
 * Bianco pieno dove la luce batte, un'ombra appena accennata dal lato
 * opposto. Su carta il bianco in alto si vede solo contro il fondale,
 * ed è giusto così: lo spigolo lo disegna il filo scuro in basso, la
 * luce lo rende tagliato invece che stampato.
 */
export const BORDO_VETRO = ['rgba(255,255,255,1)', 'rgba(20,22,27,0.09)'] as const;

/**
 * Colore del testo sopra un riempimento scuro o saturo.
 *
 * È uno dei pochi bianchi rimasti, e ha un nome perché non va confuso
 * con il testo normale: dove lo si trova, sotto c'è una superficie
 * colorata, non la carta.
 */
export const SU_SCURO = '#FFFFFF';

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

/**
 * Raggi.
 *
 * Più stretti di prima. Gli angoli molto morbidi appartengono al
 * linguaggio giocoso da cui questa interfaccia si è staccata: il vetro
 * tagliato ha spigoli definiti, e la geometria rigida è essa stessa un
 * segnale di precisione.
 */
export const radius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  xxl: 24,
  pill: 999,
};

// ——— Tipografia ———

/** Interfaccia: geometrico, stretto, ad alta precisione. */
export const FONT_UI = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semibold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
} as const;

/**
 * Testi di legge: un serif editoriale.
 *
 * Vale per ciò che si legge come si legge una pagina stampata — il testo
 * di una traccia, i paragrafi di uno svolgimento, le spiegazioni lunghe —
 * e non per l'interfaccia. È la distinzione che i prodotti editoriali
 * seri mantengono e che qui separa la macchina dal documento.
 */
export const FONT_SERIF = {
  regular: 'SourceSerif4_400Regular',
  semibold: 'SourceSerif4_600SemiBold',
} as const;

/**
 * Scala tipografica.
 *
 * `letterSpacing` negativo cresce in valore assoluto con il corpo: a
 * trentadue punti lo spazio fra le lettere che va bene per il testo
 * corrente diventa un buco. Le etichette in maiuscoletto vanno nella
 * direzione opposta, perché lì lo spazio serve a leggere.
 */
export const type = {
  display: {
    fontSize: 34,
    fontWeight: '600' as const,
    letterSpacing: -1.2,
    lineHeight: 40,
  },
  titolo: { fontSize: 26, fontWeight: '600' as const, letterSpacing: -0.9, lineHeight: 32 },
  sezione: { fontSize: 20, fontWeight: '600' as const, letterSpacing: -0.5, lineHeight: 26 },
  scheda: { fontSize: 16, fontWeight: '600' as const, letterSpacing: -0.3, lineHeight: 22 },
  corpo: { fontSize: 15, fontWeight: '400' as const, letterSpacing: -0.15, lineHeight: 23 },
  /** Testi lunghi di legge: serif, interlinea larga. */
  corpoLungo: {
    fontSize: 16,
    fontWeight: '400' as const,
    letterSpacing: 0,
    lineHeight: 27,
    fontFamily: FONT_SERIF.regular,
  },
  piccolo: { fontSize: 13, fontWeight: '400' as const, letterSpacing: -0.05, lineHeight: 19 },
  minuto: { fontSize: 11.5, fontWeight: '500' as const, letterSpacing: 0.1, lineHeight: 16 },
  /** Etichette in maiuscoletto: qui la spaziatura si allarga. */
  etichetta: {
    fontSize: 10.5,
    fontWeight: '600' as const,
    letterSpacing: 1.4,
    textTransform: 'uppercase' as const,
  },
  /** Numeri che cambiano nel tempo: cifre a larghezza fissa. */
  numero: {
    fontSize: 44,
    fontWeight: '600' as const,
    letterSpacing: -2.2,
    fontVariant: ['tabular-nums'] as const,
  },
};

// ——— Profondità ———

/**
 * Ombre.
 *
 * Su carta tornano a fare il loro mestiere: sono ciò che dice «questo
 * sta davanti». Morbide, larghe e rade — un'ombra stretta e scura su
 * fondo chiaro è il segno più riconoscibile delle interfacce economiche.
 * Il colore è un grafite freddo e non il nero, che su carta calda
 * sporcherebbe invece di staccare.
 */
export const ombra = {
  /** Appena staccato: pastiglie, campi. */
  tenue: {
    shadowColor: '#1A1D24',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  /** Superficie normale. */
  media: {
    shadowColor: '#1A1D24',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.07,
    shadowRadius: 22,
    elevation: 3,
  },
  /** Elemento in primo piano: fogli, schede aperte. */
  alta: {
    shadowColor: '#1A1D24',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.12,
    shadowRadius: 40,
    elevation: 10,
  },
} as const;

/**
 * Alone colorato per gli elementi attivi.
 *
 * Su carta un bagliore non illumina niente: diventa un'ombra della tinta
 * dell'elemento. Per questo è più tenue che sul fondo scuro — abbastanza
 * da dire «questo è acceso», non tanto da sembrare una sbavatura.
 */
export function alone(colore: string, intensita: 'tenue' | 'pieno' = 'pieno') {
  const forte = intensita === 'pieno';
  return {
    shadowColor: colore,
    shadowOffset: { width: 0, height: forte ? 8 : 4 },
    shadowOpacity: forte ? 0.28 : 0.16,
    shadowRadius: forte ? 22 : 12,
    elevation: forte ? 6 : 3,
  };
}

// ——— Movimento ———

/**
 * Costanti di animazione, in un posto solo.
 *
 * `damping` alto e `stiffness` media danno la molla che si ferma senza
 * rimbalzare. Il rimbalzo apparteneva al linguaggio precedente: qui il
 * movimento deve essere percepito come risposta immediata, non come
 * carattere.
 */
export const molla = {
  /** Reazione al tocco: deve sembrare immediata. */
  tocco: { damping: 30, stiffness: 460, mass: 0.6 },
  /** Comparsa e riassetto degli elementi. */
  entrata: { damping: 24, stiffness: 200, mass: 0.8 },
  /** Movimenti ampi, tipo fogli che salgono. */
  ampia: { damping: 26, stiffness: 150, mass: 1 },
} as const;

/**
 * Spazio da lasciare in fondo alle schermate a tab.
 *
 * La barra dei tab è traslucida e posizionata in assoluto, così il
 * contenuto le scorre sotto e si intravede: in cambio non riserva più
 * il proprio spazio, e senza questo margine l'ultima riga di ogni
 * elenco resterebbe nascosta dietro di essa.
 */
export const SPAZIO_TAB = 96;

/** Scala a cui scende un elemento premuto. */
export const SCALA_PRESSIONE = 0.985;

/**
 * Intensità della sfocatura dietro le superfici.
 *
 * È ciò che rende credibile la lastra: senza, il vetro bianco su carta
 * è solo un rettangolo un po' più chiaro. Su Android resta più costosa e
 * resa in modo diverso, quindi si scende.
 */
export const SFOCATURA = Platform.select({ ios: 40, android: 24, default: 32 });

/**
 * Tinte delle materie.
 *
 * Servono a distinguere, non a decorare, e nessuna deve competere con
 * l'accento champagne, che è l'unico colore autorizzato a chiamare
 * l'azione.
 *
 * Il ruolo dei campi non cambia fra tema chiaro e scuro, cambiano i
 * valori: `edge` è la tinta *da leggere* — occhielli, numeri dei passi,
 * icone, il filo laterale delle schede — e su carta è la più scura delle
 * tre. Ogni `edge` è ricavato da `start` scurendolo verso un grafite
 * freddo finché il contrasto sul fondo arriva a 4,6: abbastanza per il
 * testo piccolo, e ancora riconoscibile come quella materia. `soft` è un
 * velo trasparente: su carta un pastello pieno sarebbe una caramella.
 */
export const materiaColors: Record<
  string,
  { start: string; end: string; edge: string; soft: string }
> = {
  'Diritto civile': {
    start: '#5A7FC7',
    end: '#2F4C86',
    edge: '#4E6EAB',
    soft: 'rgba(90,127,199,0.11)',
  },
  'Diritto penale': {
    start: '#C25C68',
    end: '#8A3540',
    edge: '#AB525E',
    soft: 'rgba(194,92,104,0.11)',
  },
  'Procedura civile': {
    start: '#3E9E92',
    end: '#1F6259',
    edge: '#327871',
    soft: 'rgba(62,158,146,0.11)',
  },
  'Procedura penale': {
    start: '#8B72C4',
    end: '#54408A',
    edge: '#7763A8',
    soft: 'rgba(139,114,196,0.11)',
  },
  'Diritto amministrativo': {
    start: '#8A9350',
    end: '#555C28',
    edge: '#6A7141',
    soft: 'rgba(138,147,80,0.11)',
  },
  'Deontologia forense': {
    start: '#77808F',
    end: '#474E5A',
    edge: '#676E7C',
    soft: 'rgba(119,128,143,0.11)',
  },
  'Diritto costituzionale': {
    start: '#C05E7E',
    end: '#84314C',
    edge: '#A75370',
    soft: 'rgba(192,94,126,0.11)',
  },
  'Diritto commerciale': {
    start: '#3F92AE',
    end: '#1F5B72',
    edge: '#35768D',
    soft: 'rgba(63,146,174,0.11)',
  },
  'Diritto del lavoro': {
    start: '#6D9E58',
    end: '#3F6631',
    edge: '#537746',
    soft: 'rgba(109,158,88,0.11)',
  },
  'Diritto dell’Unione europea': {
    start: '#4C6BC0',
    end: '#293F86',
    edge: '#4B6ABE',
    soft: 'rgba(76,107,192,0.11)',
  },
  'Diritto internazionale': {
    start: '#B5714E',
    end: '#7A4227',
    edge: '#976044',
    soft: 'rgba(181,113,78,0.11)',
  },
  'Diritto tributario': {
    start: '#6F68B8',
    end: '#403A7E',
    edge: '#6B65B2',
    soft: 'rgba(111,104,184,0.11)',
  },
  // Il ripasso non è una materia: porta l'accento, perché è l'unica cosa
  // che l'app chiede attivamente di fare.
  Ripasso: {
    start: '#C9A227',
    end: '#8C6F14',
    edge: '#7D5F0B',
    soft: 'rgba(201,162,39,0.13)',
  },
};

/**
 * La tinta di una materia, con un ripiego se il nome non è in mappa.
 *
 * Serve perché il nome arriva anche dall'URL: `legul://esito/Pippo/x` è
 * un indirizzo che chiunque può digitare, e la ricerca diretta
 * restituiva `undefined`. Le schermate lo dereferenziavano subito —
 * `tinte.soft` — e l'app si apriva su una pagina bianca. Un titanio
 * neutro è la risposta giusta: l'indirizzo è sbagliato, ma non è una
 * ragione per non disegnare niente.
 */
export function tintaMateria(nome: string): (typeof materiaColors)[string] {
  return materiaColors[nome] ?? materiaColors['Deontologia forense'];
}
