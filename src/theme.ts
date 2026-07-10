export const colors = {
  primary: '#1B2A4A', // blu istituzionale
  primaryLight: '#2E4370',
  accent: '#C9A227', // oro
  accentSoft: '#F5E9C8',
  background: '#F7F8FA',
  card: '#FFFFFF',
  text: '#1C1E26',
  textMuted: '#6B7280',
  success: '#2E9E5B',
  successSoft: '#E3F5EA',
  error: '#C94141',
  errorSoft: '#FBE8E8',
  border: '#E5E7EB',
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
  pill: 999,
};

/** Palette premium per materia: gradiente [inizio, fine] e colore del bordo 3D. */
export const materiaColors: Record<
  string,
  { start: string; end: string; edge: string; soft: string }
> = {
  'Diritto civile': { start: '#4F7CF3', end: '#2D4FC7', edge: '#20399B', soft: '#E8EEFD' },
  'Diritto penale': { start: '#EF5D60', end: '#C2333F', edge: '#96222C', soft: '#FCE9EA' },
  'Procedura civile': { start: '#2CB1A6', end: '#148579', edge: '#0D6459', soft: '#E4F6F4' },
  'Procedura penale': { start: '#8B5CF6', end: '#6D28D9', edge: '#521CA6', soft: '#F0E9FD' },
  'Diritto amministrativo': { start: '#E9A23B', end: '#C77F17', edge: '#9A6110', soft: '#FBF1DF' },
  'Deontologia forense': { start: '#64748B', end: '#334155', edge: '#1F2A3C', soft: '#EBEEF3' },
};

/** Ombra morbida per le card premium. */
export const softShadow = {
  shadowColor: '#1B2A4A',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.12,
  shadowRadius: 12,
  elevation: 5,
} as const;
