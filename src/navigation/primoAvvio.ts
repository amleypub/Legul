/**
 * Che cosa vede chi apre l'app, nell'ordine: l'intro, l'accesso, le
 * domande d'apertura, l'app.
 *
 * Ogni fase si salta da sola quando non serve più: l'intro una volta
 * vista non torna, l'accesso non si propone a chi un account ce l'ha già,
 * le domande non si ripetono a chi le ha fatte o saltate. Sta in una
 * funzione a parte, senza React, perché l'ordine si possa verificare in
 * un test invece che a mano, reinstallando l'app.
 */

export type FasePrimoAvvio = 'attesa' | 'intro' | 'accesso' | 'domande' | 'app';

/**
 * Quanto resta a schermo ciascuna pagina dell'intro, in millisecondi.
 *
 * In tutto meno di dieci secondi: è il tetto che rende un'intro qualcosa
 * che si guarda invece di qualcosa che si salta. La seconda pagina è più
 * lunga perché ha un grafico da leggere; chi vuole leggerlo tutto tiene
 * premuto e il tempo si ferma.
 */
export const DURATA_INTRO = [3800, 5600] as const;

export interface StatoPrimoAvvio {
  introVista: boolean;
  accessoProposto: boolean;
  aperturaFatta: boolean;
  /** C'è una sessione attiva. */
  conAccount: boolean;
  /** La sessione salvata si sta ancora leggendo dal dispositivo. */
  sessioneInVerifica: boolean;
}

export function fasePrimoAvvio(s: StatoPrimoAvvio): FasePrimoAvvio {
  if (!s.introVista) return 'intro';
  if (!s.accessoProposto && !s.conAccount) {
    // Prima di proporre l'accesso bisogna sapere se una sessione c'è già:
    // altrimenti chi ha un account vedrebbe un lampo della schermata.
    return s.sessioneInVerifica ? 'attesa' : 'accesso';
  }
  if (!s.aperturaFatta) return 'domande';
  return 'app';
}
