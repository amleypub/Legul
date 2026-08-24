import type { CasoPratico, PuntoScaletta, Versante } from '../data/casi';

/**
 * Logica del simulatore del caso pratico, senza React.
 *
 * Sta qui e non dentro la schermata per una ragione pratica: il conteggio
 * per versante e il giudizio finale sono le uniche cose che l'utente
 * porta via dalla simulazione, e devono poter essere verificate da un
 * test invece che a occhio su uno screenshot.
 */

export type FaseSimulazione =
  | 'istruzioni'
  | 'preparazione'
  | 'esposizione'
  | 'autovalutazione'
  | 'esito';

/** Fasi in cui scorre un cronometro. */
export const FASI_CRONOMETRATE: FaseSimulazione[] = ['preparazione', 'esposizione'];

/** `mm:ss`, con le ore solo quando servono davvero. */
export function formattaTempo(secondi: number): string {
  const s = Math.max(0, Math.floor(secondi));
  const min = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

/** Somma dei pesi dei punti effettivamente spuntati. */
export function punteggio(scaletta: PuntoScaletta[], presi: string[]): number {
  const set = new Set(presi);
  return scaletta.filter((p) => set.has(p.id)).reduce((acc, p) => acc + p.peso, 0);
}

export interface CoperturaVersante {
  presi: number;
  totale: number;
  /** Percentuale sul peso, non sul numero di voci. */
  quota: number;
}

/**
 * Copertura separata per sostanziale e processuale.
 *
 * È il numero che conta più del totale: la prova chiede espressamente
 * entrambi i piani, e chi arriva a settanta punti prendendoli tutti dal
 * sostanziale non ha superato nulla — ha solo studiato metà della prova.
 */
export function coperturaPerVersante(
  scaletta: PuntoScaletta[],
  presi: string[]
): Record<Versante, CoperturaVersante> {
  const set = new Set(presi);
  const conta = (versante: Versante): CoperturaVersante => {
    const punti = scaletta.filter((p) => p.versante === versante);
    const totale = punti.reduce((acc, p) => acc + p.peso, 0);
    const ottenuti = punti.filter((p) => set.has(p.id)).reduce((acc, p) => acc + p.peso, 0);
    return { presi: ottenuti, totale, quota: totale === 0 ? 0 : ottenuti / totale };
  };
  return { sostanziale: conta('sostanziale'), processuale: conta('processuale') };
}

export type TonoEsito = 'ottimo' | 'buono' | 'sufficiente' | 'insufficiente';

export interface Esito {
  punteggio: number;
  tono: TonoEsito;
  etichetta: string;
  /**
   * Il consiglio: guarda lo squilibrio fra i versanti prima del totale,
   * perché è quello a dire dove intervenire.
   */
  consiglio: string;
}

/** Soglia sotto la quale un versante si considera scoperto. */
export const SOGLIA_VERSANTE = 0.5;

export function esitoSimulazione(caso: CasoPratico, presi: string[]): Esito {
  const totale = punteggio(caso.scaletta, presi);
  const versanti = coperturaPerVersante(caso.scaletta, presi);
  const sostScoperto = versanti.sostanziale.quota < SOGLIA_VERSANTE;
  const procScoperto = versanti.processuale.quota < SOGLIA_VERSANTE;

  const tono: TonoEsito =
    totale >= 85 ? 'ottimo' : totale >= 70 ? 'buono' : totale >= 55 ? 'sufficiente' : 'insufficiente';

  const etichetta =
    tono === 'ottimo'
      ? 'Esposizione completa'
      : tono === 'buono'
        ? 'Buona esposizione, con qualche vuoto'
        : tono === 'sufficiente'
          ? 'Ci sei, ma restano lacune'
          : 'Troppi punti fuori';

  let consiglio: string;
  if (sostScoperto && procScoperto) {
    consiglio =
      'Mancano pezzi su entrambi i versanti: rileggi la scaletta per intero prima di riprovare questo caso.';
  } else if (procScoperto) {
    consiglio =
      'Il sostanziale regge, il processuale no. È lo squilibrio più comune e il più penalizzante: la prova chiede espressamente come si porta in giudizio quello che hai ricostruito.';
  } else if (sostScoperto) {
    consiglio =
      'Conosci il percorso processuale ma l’inquadramento sostanziale resta scoperto: la commissione parte da lì, e senza quello il resto non si regge.';
  } else if (tono === 'ottimo') {
    consiglio =
      'Copertura piena su entrambi i versanti. Prova a rifarlo accorciando il tempo di preparazione: all’esame la stretta è quella.';
  } else {
    consiglio =
      'Copertura equilibrata fra i due versanti. Guarda i punti che hai lasciato fuori: sono quelli su cui la commissione insiste.';
  }

  return { punteggio: totale, tono, etichetta, consiglio };
}

/**
 * Il caso da proporre.
 *
 * Prima quelli mai affrontati, poi quelli andati peggio: riproporre per
 * primo un caso già preso al novanta per cento sarebbe tempo speso a
 * confermare quello che si sa già.
 */
export function casoSuggerito(
  elenco: CasoPratico[],
  svolti: Record<string, number>
): CasoPratico | undefined {
  if (elenco.length === 0) return undefined;
  const mai = elenco.find((c) => svolti[c.id] === undefined);
  if (mai) return mai;
  return [...elenco].sort((a, b) => (svolti[a.id] ?? 0) - (svolti[b.id] ?? 0))[0];
}

/** Somma dei pesi di un caso: deve fare cento. */
export function pesoTotale(caso: CasoPratico): number {
  return caso.scaletta.reduce((acc, p) => acc + p.peso, 0);
}
