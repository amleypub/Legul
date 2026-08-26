import { Platform } from 'react-native';

/**
 * Sistema visivo di Legul.
 *
 * Obsidiana, vetro satinato, un solo accento.
 *
 * L'impianto precedente era chiaro, tondeggiante e amichevole: funzionava
 * per un'app di esercizi quotidiani, non per un prodotto che si presenta
 * a un professionista come strumento serio e costoso. Qui il fondo è
 * scuro e freddo, le superfici sono lastre di vetro appena schiarite che
 * lasciano intravedere ciò che hanno sotto, e il colore è quasi assente:
 * compare solo dove c'è una decisione da prendere.
 *
 * Le tre regole che tengono insieme tutto il resto:
 *
 * - **Il vetro ha bisogno di qualcosa da rifrangere.** Le superfici sono
 *   bianco al quattro-sette per cento sopra una sfocatura: se il fondale
 *   fosse un colore piatto sarebbero indistinguibili da rettangoli grigi.
 *   Per questo `Sfondo` costruisce velature e aloni, non tinte unite.
 * - **Il bordo è luce, non contorno.** Un grigio pieno su fondo scuro
 *   disegna una cornice; un bianco al dieci per cento in alto che sfuma
 *   verso il basso disegna lo spigolo di una lastra colpita dalla luce.
 *   È la differenza fra una scheda e un oggetto.
 * - **L'accento è una risorsa scarsa.** Lo champagne è riservato alle
 *   azioni primarie. Usato anche per un'icona decorativa smetterebbe di
 *   significare «qui si agisce» e tornerebbe a essere un colore.
 */

// ——— Fondamentali ———

export const colors = {
  /*
    `primary` è una **superficie**, non un accento: grafite profonda, per
    i fondi scuri e i gradienti. Tenerlo distinto da `accent` non è
    pedanteria — quando i due ruoli coincidono ogni scheda che usava il
    primario come fondo diventa una lastra dorata, ed è esattamente ciò
    che è successo al primo tentativo.
  */
  primary: '#161B24',
  primaryLight: '#2A3140',
  /** Champagne: l'unico accento. Riservato alle azioni primarie. */
  accent: '#C9A227',
  accentChiaro: '#E0C05A',
  accentEdge: '#8C6F14',
  /** Velo d'accento per i fondi delle pastiglie, non per il testo. */
  accentSoft: 'rgba(201,162,39,0.12)',

  /** Obsidiana: il fondo su cui poggia tutto. */
  background: '#07090D',
  /** Ardesia profonda: superfici opache quando il vetro non è possibile. */
  card: '#10141B',
  /** Un gradino più su, per ciò che deve staccarsi dal fondo. */
  cardAlta: '#161B24',

  text: '#EEF1F6',
  textMuted: '#98A1B0',
  /** Terzo livello: didascalie, unità di misura, note a margine. */
  textFaint: '#5E6675',

  /** Titanio: i dettagli metallici, i bordi marcati, le icone inattive. */
  titanio: '#8A93A3',
  titanioChiaro: '#C3CAD6',

  success: '#4FBF8B',
  successEdge: '#2E8A62',
  successSoft: 'rgba(79,191,139,0.12)',
  error: '#E2566B',
  errorEdge: '#A32C40',
  errorSoft: 'rgba(226,86,107,0.12)',

  /** Bordo di base: su fondo scuro è un bianco appena acceso. */
  border: 'rgba(255,255,255,0.09)',
  streakFrom: '#E0C05A',
  streakTo: '#C9A227',
};

/**
 * Livelli trasparenti.
 *
 * Sono la sostanza del linguaggio. Su fondo scuro il vetro non si ottiene
 * schiarendo molto — a partire dal dodici per cento la lastra diventa
 * lattiginosa e il testo sotto sparisce — ma schiarendo pochissimo e
 * lasciando che sia il bordo a disegnare lo spigolo.
 */
export const alpha = {
  /** Riempimento delle superfici in vetro. */
  vetro: 'rgba(255,255,255,0.045)',
  vetroForte: 'rgba(255,255,255,0.075)',
  /** Superficie appoggiata su una superficie: va più tenue, non più densa. */
  vetroInterno: 'rgba(255,255,255,0.028)',
  /**
   * Barra dei tab e intestazioni: più densa delle superfici di contenuto.
   *
   * È un elemento di comando, non di lettura: deve lasciar intuire che
   * sotto scorre qualcosa senza che quel qualcosa competa con le
   * etichette.
   */
  vetroChrome: 'rgba(14,18,25,0.82)',

  /** Bordo standard: bianco a bassissima opacità, prende la luce del fondo. */
  bordo: 'rgba(255,255,255,0.10)',
  bordoMarcato: 'rgba(255,255,255,0.18)',
  /** Filo di luce in alto: è il taglio del vetro. */
  lume: 'rgba(255,255,255,0.16)',
  /** Filo d'ombra in basso: chiude la lastra e le dà spessore. */
  fondo: 'rgba(0,0,0,0.28)',

  /** Riempimenti tenui per pastiglie e stati inattivi. */
  velo: 'rgba(255,255,255,0.05)',
  veloForte: 'rgba(255,255,255,0.09)',
};

/**
 * Gradiente del bordo di vetro.
 *
 * Un bordo di colore uniforme disegna una cornice. Un bordo che è quasi
 * bianco dove la luce batte e quasi nulla dal lato opposto disegna uno
 * spigolo: è ciò che distingue una lastra da un rettangolo.
 */
export const BORDO_VETRO = ['rgba(255,255,255,0.16)', 'rgba(255,255,255,0.02)'] as const;

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
 * Su fondo scuro un'ombra nera non si vede: la profondità viene dal
 * contrasto fra la lastra schiarita e il fondo, e l'ombra serve solo a
 * staccare il bordo inferiore. Resta perché su Android `elevation` è
 * l'unica leva disponibile e senza di essa le superfici collassano sul
 * fondale.
 */
export const ombra = {
  /** Appena staccato: pastiglie, campi. */
  tenue: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 1,
  },
  /** Superficie normale. */
  media: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.45,
    shadowRadius: 26,
    elevation: 4,
  },
  /** Elemento in primo piano: fogli, schede aperte. */
  alta: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 22 },
    shadowOpacity: 0.6,
    shadowRadius: 44,
    elevation: 12,
  },
} as const;

/**
 * Alone colorato per gli elementi attivi.
 *
 * Su fondo scuro finalmente funziona come un vero bagliore: l'elemento
 * illumina l'aria intorno a sé invece di proiettare un'ombra colorata.
 * È il modo con cui si dice «questo è acceso» senza aggiungere colore
 * alla superficie.
 */
export function alone(colore: string, intensita: 'tenue' | 'pieno' = 'pieno') {
  const forte = intensita === 'pieno';
  return {
    shadowColor: colore,
    shadowOffset: { width: 0, height: forte ? 6 : 3 },
    shadowOpacity: forte ? 0.5 : 0.3,
    shadowRadius: forte ? 26 : 14,
    elevation: forte ? 8 : 4,
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
 * Più alta di prima: su fondo scuro la sfocatura è ciò che rende la
 * lastra credibile, e a valori bassi il vetro sembra semplicemente un
 * rettangolo un po' più chiaro. Su Android resta più costosa e resa in
 * modo diverso, quindi si scende.
 */
export const SFOCATURA = Platform.select({ ios: 40, android: 24, default: 32 });

/**
 * Tinte delle materie.
 *
 * Desaturate e scurite rispetto ai gradienti precedenti, che erano
 * caramellati e su fondo obsidiana avrebbero gridato. Qui servono a
 * distinguere, non a decorare: la differenza fra due materie deve
 * leggersi di colpo d'occhio, ma nessuna delle due deve competere con
 * l'accento champagne, che è l'unico colore autorizzato a chiamare
 * l'azione.
 *
 * `soft` non è più una tinta pastello ma un velo trasparente: su fondo
 * scuro un riempimento chiaro sarebbe una macchia.
 */
export const materiaColors: Record<
  string,
  { start: string; end: string; edge: string; soft: string }
> = {
  'Diritto civile': {
    start: '#5A7FC7',
    end: '#2F4C86',
    edge: '#7FA0DC',
    soft: 'rgba(90,127,199,0.14)',
  },
  'Diritto penale': {
    start: '#C25C68',
    end: '#8A3540',
    edge: '#DB828C',
    soft: 'rgba(194,92,104,0.14)',
  },
  'Procedura civile': {
    start: '#3E9E92',
    end: '#1F6259',
    edge: '#6BC0B4',
    soft: 'rgba(62,158,146,0.14)',
  },
  'Procedura penale': {
    start: '#8B72C4',
    end: '#54408A',
    edge: '#AC98DC',
    soft: 'rgba(139,114,196,0.14)',
  },
  /* Era un ambra a 33° di tinta, cioè quasi lo champagne dell'accento.
     Nell'elenco delle materie sta a tre schede da «Ripasso», che l'oro
     lo porta apposta per dire «questo è ciò che l'app ti chiede di
     fare»: due ori vicini tolgono forza proprio a quel segnale. Qui è
     un'oliva istituzionale, lontana sia dall'oro sia dal verde del
     lavoro, che comunque vive nell'altro blocco. */
  'Diritto amministrativo': {
    start: '#8A9350',
    end: '#555C28',
    edge: '#B0B87C',
    soft: 'rgba(138,147,80,0.14)',
  },
  'Deontologia forense': {
    start: '#77808F',
    end: '#474E5A',
    edge: '#9AA3B2',
    soft: 'rgba(119,128,143,0.14)',
  },
  // Le sei materie della rosa: stessa logica, tinte scelte perché due
  // schede affiancate nell'elenco non si confondano mai.
  'Diritto costituzionale': {
    start: '#C05E7E',
    end: '#84314C',
    edge: '#D98BA4',
    soft: 'rgba(192,94,126,0.14)',
  },
  'Diritto commerciale': {
    start: '#3F92AE',
    end: '#1F5B72',
    edge: '#6FB8CF',
    soft: 'rgba(63,146,174,0.14)',
  },
  'Diritto del lavoro': {
    start: '#6D9E58',
    end: '#3F6631',
    edge: '#96C182',
    soft: 'rgba(109,158,88,0.14)',
  },
  'Diritto dell’Unione europea': {
    start: '#4C6BC0',
    end: '#293F86',
    edge: '#7B93DC',
    soft: 'rgba(76,107,192,0.14)',
  },
  'Diritto internazionale': {
    start: '#B5714E',
    end: '#7A4227',
    edge: '#D19A7C',
    soft: 'rgba(181,113,78,0.14)',
  },
  'Diritto tributario': {
    start: '#6F68B8',
    end: '#403A7E',
    edge: '#9891D4',
    soft: 'rgba(111,104,184,0.14)',
  },
  // Il ripasso non è una materia: porta l'accento, perché è l'unica cosa
  // che l'app chiede attivamente di fare.
  Ripasso: {
    start: '#C9A227',
    end: '#8C6F14',
    edge: '#E0C05A',
    soft: 'rgba(201,162,39,0.14)',
  },
};
