export const colors = {
  primary: '#1B2A4A', // blu istituzionale
  primaryLight: '#2E4370',
  accent: '#F5B316', // oro caldo, più vivace
  accentEdge: '#C98A0E', // bordo 3D dell'oro
  accentSoft: '#FDF3D6',
  background: '#F1F4FB', // sfondo leggermente più caldo/vibrante
  card: '#FFFFFF',
  text: '#1C1E26',
  textMuted: '#6B7280',
  success: '#38C172',
  successEdge: '#1F9D57',
  successSoft: '#E3F7EC',
  error: '#EF4E5B',
  errorEdge: '#C9313E',
  errorSoft: '#FDEBEC',
  border: '#E5E7EB',
  streakFrom: '#FF9A3D',
  streakTo: '#FF5E3A',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 20,
  xl: 26,
  xxl: 34,
  pill: 999,
};

/** Palette premium per materia: gradiente [inizio, fine] e colore del bordo 3D. */
export const materiaColors: Record<
  string,
  { start: string; end: string; edge: string; soft: string }
> = {
  'Diritto civile': { start: '#4F7CF3', end: '#2D4FC7', edge: '#20399B', soft: '#E8EEFD' },
  'Diritto penale': { start: '#F26D6F', end: '#D83A46', edge: '#A82530', soft: '#FDEAEB' },
  'Procedura civile': { start: '#2FC0B3', end: '#159183', edge: '#0C6C60', soft: '#E1F7F4' },
  'Procedura penale': { start: '#9B6BFF', end: '#7534E0', edge: '#571FAD', soft: '#F1EAFE' },
  'Diritto amministrativo': { start: '#F6A93B', end: '#E1841A', edge: '#B0640F', soft: '#FDF0DC' },
  'Deontologia forense': { start: '#7C8BA0', end: '#455166', edge: '#2C3547', soft: '#EDEFF4' },
};

/** Ombra morbida per le card premium. */
export const softShadow = {
  shadowColor: '#1B2A4A',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.12,
  shadowRadius: 12,
  elevation: 5,
} as const;

/**
 * Spessore del "bordo 3D" inferiore che dà l'effetto blocco di plastica
 * (stile Duolingo). Usato dalle card e dai pulsanti tattili.
 */
export const EDGE_3D = 5;
