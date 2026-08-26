import { Platform } from 'react-native';

/**
 * Sistema visivo di Legul.
 *
 * Il linguaggio è chiaro e translucido: superfici bianche non del tutto
 * opache posate su un fondale con gradienti appena percepibili, separate
 * dallo sfondo da un filo di bordo scuro a bassissima opacità e da
 * un'ombra ampia e morbida. Niente bordi duri, niente blocchi.
 *
 * Perché il bordo è scuro-trasparente e non grigio pieno: su un fondale
 * che cambia tinta da una zona all'altra un grigio fisso stacca, mentre
 * un nero al sei per cento prende il colore di ciò che ha sotto e resta
 * coerente ovunque. Vale lo stesso per i riempimenti delle superfici.
 *
 * Il «glow» degli elementi attivi non è un bagliore luminoso — su fondo
 * chiaro non si vedrebbe — ma un'ombra colorata della stessa tinta
 * dell'elemento, larga e tenue: l'oggetto sembra tingere l'aria intorno
 * a sé. È l'equivalente leggibile dell'alone.
 */

// ——— Fondamentali ———

export const colors = {
  primary: '#141B2E',
  primaryLight: '#2E3B5C',
  /** Oro caldo: resta l'accento dell'app. */
  accent: '#F0A81B',
  accentEdge: '#B9770A',
  accentSoft: '#FDF4E0',

  background: '#F4F6FB',
  card: '#FFFFFF',

  text: '#101422',
  textMuted: '#5F6880',
  /** Terzo livello: didascalie, unità di misura, note a margine. */
  textFaint: '#98A1B8',

  success: '#2FB86B',
  successEdge: '#1B8B4E',
  successSoft: '#E4F7EC',
  error: '#E8485C',
  errorEdge: '#BE2A3D',
  errorSoft: '#FDEBEE',

  border: '#E5E7EB',
  streakFrom: '#FF9A3D',
  streakTo: '#FF5E3A',
};

/**
 * Livelli trasparenti.
 *
 * Sono la sostanza del linguaggio: le superfici non sono bianche piene
 * ma bianco al settanta-ottanta per cento sopra la sfocatura, e i bordi
 * sono nero a due cifre di opacità.
 */
export const alpha = {
  /** Riempimento delle superfici in vetro. */
  vetro: 'rgba(255,255,255,0.72)',
  vetroForte: 'rgba(255,255,255,0.86)',
  /** Superficie appoggiata su una superficie: va un filo più densa. */
  vetroInterno: 'rgba(255,255,255,0.55)',
  /**
   * Barra dei tab: più densa delle superfici di contenuto.
   *
   * È un elemento di comando, non di lettura: deve lasciar intuire che
   * sotto scorre qualcosa senza che quel qualcosa competa con le
   * etichette. Al settanta per cento un pulsante giallo che le passa
   * dietro le rende illeggibili.
   */
  vetroChrome: 'rgba(255,255,255,0.93)',

  /** Bordo standard: nero a bassissima opacità, prende la tinta del fondo. */
  bordo: 'rgba(16,20,34,0.07)',
  bordoMarcato: 'rgba(16,20,34,0.12)',
  /** Filo di luce in alto, che dà lo spessore del vetro. */
  lume: 'rgba(255,255,255,0.65)',

  /** Riempimenti tenui per pastiglie e stati inattivi. */
  velo: 'rgba(16,20,34,0.04)',
  veloForte: 'rgba(16,20,34,0.07)',
};

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
 * Più ampi di prima: superfici traslucide con angoli stretti sembrano
 * ritagliate, con angoli larghi sembrano posate.
 */
export const radius = {
  sm: 10,
  md: 14,
  lg: 20,
  xl: 26,
  xxl: 32,
  pill: 999,
};

// ——— Tipografia ———

/**
 * Scala tipografica con crenatura stretta.
 *
 * `letterSpacing` negativo cresce in valore assoluto con il corpo: a
 * trentadue punti lo spazio fra le lettere che va bene per il testo
 * corrente diventa un buco. Le maiuscoletto delle etichette vanno
 * invece nella direzione opposta, perché lì lo spazio serve a leggere.
 */
export const type = {
  display: { fontSize: 34, fontWeight: '800' as const, letterSpacing: -1.1, lineHeight: 40 },
  titolo: { fontSize: 26, fontWeight: '800' as const, letterSpacing: -0.8, lineHeight: 32 },
  sezione: { fontSize: 20, fontWeight: '800' as const, letterSpacing: -0.5, lineHeight: 26 },
  scheda: { fontSize: 16, fontWeight: '700' as const, letterSpacing: -0.3, lineHeight: 22 },
  corpo: { fontSize: 15, fontWeight: '400' as const, letterSpacing: -0.1, lineHeight: 23 },
  corpoLungo: { fontSize: 15.5, fontWeight: '400' as const, letterSpacing: -0.1, lineHeight: 26 },
  piccolo: { fontSize: 13, fontWeight: '400' as const, letterSpacing: 0, lineHeight: 19 },
  minuto: { fontSize: 11.5, fontWeight: '600' as const, letterSpacing: 0, lineHeight: 16 },
  /** Etichette in maiuscoletto: qui la spaziatura si allarga. */
  etichetta: {
    fontSize: 11,
    fontWeight: '800' as const,
    letterSpacing: 0.9,
    textTransform: 'uppercase' as const,
  },
  /** Numeri che cambiano nel tempo: cifre a larghezza fissa. */
  numero: {
    fontSize: 44,
    fontWeight: '800' as const,
    letterSpacing: -2,
    fontVariant: ['tabular-nums'] as const,
  },
};

// ——— Profondità ———

/**
 * Ombre.
 *
 * Su Android `elevation` è l'unica leva e non conosce colore né
 * direzione, quindi i valori sono scelti perché l'ordine di profondità
 * resti lo stesso sulle due piattaforme anche se la resa non coincide.
 */
export const ombra = {
  /** Appena staccato: pastiglie, campi. */
  tenue: {
    shadowColor: '#0B1020',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  /** Superficie normale. */
  media: {
    shadowColor: '#0B1020',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
  },
  /** Elemento in primo piano: fogli, schede aperte. */
  alta: {
    shadowColor: '#0B1020',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.13,
    shadowRadius: 36,
    elevation: 10,
  },
} as const;

/**
 * Alone colorato per gli elementi attivi.
 *
 * Un'ombra che ha il colore dell'oggetto invece del nero: l'elemento
 * sembra tingere l'aria intorno a sé. È l'unico modo di rendere un glow
 * su fondo chiaro senza che diventi una sbavatura.
 */
export function alone(colore: string, intensita: 'tenue' | 'pieno' = 'pieno') {
  const forte = intensita === 'pieno';
  return {
    shadowColor: colore,
    shadowOffset: { width: 0, height: forte ? 8 : 4 },
    shadowOpacity: forte ? 0.42 : 0.24,
    shadowRadius: forte ? 20 : 12,
    elevation: forte ? 8 : 4,
  };
}

// ——— Movimento ———

/**
 * Costanti di animazione, in un posto solo.
 *
 * `damping` alto e `stiffness` media danno la molla che si ferma senza
 * rimbalzare: il rimbalzo va bene su un gioco, su un'app che si usa per
 * ore diventa rumore.
 */
export const molla = {
  /** Reazione al tocco: deve sembrare immediata. */
  tocco: { damping: 26, stiffness: 420, mass: 0.7 },
  /** Comparsa e riassetto degli elementi. */
  entrata: { damping: 20, stiffness: 180, mass: 0.9 },
  /** Movimenti ampi, tipo fogli che salgono. */
  ampia: { damping: 24, stiffness: 140, mass: 1 },
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
export const SCALA_PRESSIONE = 0.972;

/**
 * Intensità della sfocatura dietro le superfici.
 *
 * Su Android la sfocatura è più costosa e resa in modo diverso: un
 * valore identico a iOS produce un vetro lattiginoso, quindi si scende.
 */
export const SFOCATURA = Platform.select({ ios: 24, android: 16, default: 20 });

/** Palette per materia: gradiente [inizio, fine], tinta piena e velo. */
export const materiaColors: Record<
  string,
  { start: string; end: string; edge: string; soft: string }
> = {
  'Diritto civile': { start: '#5B85F5', end: '#2F53CC', edge: '#223EA3', soft: '#EAF0FE' },
  'Diritto penale': { start: '#F4787A', end: '#DC3F4B', edge: '#AE2833', soft: '#FEECED' },
  'Procedura civile': { start: '#31C7B8', end: '#159688', edge: '#0C7166', soft: '#E3F8F5' },
  'Procedura penale': { start: '#A275FF', end: '#7A38E5', edge: '#5B22B2', soft: '#F3ECFE' },
  'Diritto amministrativo': { start: '#F8B048', end: '#E38A1E', edge: '#B36913', soft: '#FEF2E0' },
  'Deontologia forense': { start: '#8492A8', end: '#48546B', edge: '#2F384B', soft: '#EFF1F6' },
  // Materia a scelta dell'orale: tinta propria, così si distingue a colpo
  // d'occhio dalle sei che valgono per tutti.
  'Diritto costituzionale': { start: '#E56A86', end: '#BE325B', edge: '#911E40', soft: '#FCE9EE' },
  'Diritto commerciale': { start: '#44B0CF', end: '#1E85A6', edge: '#13627C', soft: '#E4F3F9' },
  'Diritto del lavoro': { start: '#82BC68', end: '#52913D', edge: '#376B29', soft: '#ECF5E6' },
  'Diritto dell’Unione europea': {
    start: '#4C6FE8',
    end: '#1E3FA8',
    edge: '#152C78',
    soft: '#E8EDFD',
  },
  // Terracotta: è l'unico buco rimasto nella ruota: il verde è del lavoro,
  // il ciano del commerciale, il teal della procedura civile, l'ambra
  // dell'amministrativo. Una seconda tinta vicina a una di queste
  // renderebbe indistinguibili due schede affiancate nell'elenco.
  'Diritto internazionale': { start: '#C87A54', end: '#9C4D2A', edge: '#78381C', soft: '#F9ECE4' },
  // Il ripasso non è una materia: ha un colore proprio, così si distingue
  // a colpo d'occhio da una lezione del percorso.
  Ripasso: { start: '#F8B048', end: '#E37B1E', edge: '#AF5C13', soft: '#FEF0E0' },
};


