/** Distanza minima, in punti, fra due etichette di un grafico. */
export const DISTANZA_ETICHETTE = 15;

/**
 * Allontana due etichette troppo vicine in verticale, spostandole di
 * metà ciascuna, e le lascia dove sono se c'è già spazio. Restituisce le
 * nuove coordinate nello stesso ordine.
 *
 * Serve ai valori scritti accanto ai punti: due serie che partono vicine
 * — 83 e 71 nel grafico dell'intro — su un grafico basso si
 * scriverebbero una sopra l'altra.
 */
export function separa(a: number, b: number, minimo = DISTANZA_ETICHETTE): [number, number] {
  const scarto = Math.abs(a - b);
  if (scarto >= minimo) return [a, b];
  const spinta = (minimo - scarto) / 2;
  return a < b ? [a - spinta, b + spinta] : [a + spinta, b - spinta];
}
