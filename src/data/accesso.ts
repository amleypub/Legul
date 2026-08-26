import { casi } from './casi';
import { tracceConSvolgimento } from './svolgimenti';

/**
 * Che cosa è gratuito e che cosa richiede Premium.
 *
 * Sta tutto qui perché il confine è una decisione di prodotto, non un
 * dettaglio di ogni schermata: sparso in giro diventa impossibile
 * rispondere alla domanda «che cosa ottiene chi paga» senza rileggere
 * venti file, ed è la domanda che conta di più.
 *
 * **Il confine è stato ribaltato.** Prima si pagava per le unità 3 e 4
 * del percorso quiz — domande a risposta multipla, la merce più comune
 * del settore — mentre restava gratuito tutto ciò che nessun altro ha:
 * gli svolgimenti con i contrasti giurisprudenziali verificati e il
 * simulatore del caso pratico. Si pagava per la commodity e si regalava
 * il differenziale.
 *
 * Ora:
 *
 * - **I quiz sono interamente gratuiti**, tutte e quattro le unità.
 *   Servono a costruire l'abitudine quotidiana e a far vedere la qualità
 *   delle spiegazioni. Un percorso che si interrompe a metà interrompe
 *   anche l'abitudine, che è l'unica cosa che porta qualcuno a pagare.
 * - **Svolgimenti e casi pratici hanno un assaggio gratuito** e poi
 *   chiedono Premium. Chi ha svolto un caso pratico e ne vuole altri
 *   nove è molto più vicino a pagare di chi ha finito le domande
 *   facili di civile.
 *
 * L'assaggio è fissato per identificativo e non per posizione: se fosse
 * «i primi due dell'elenco», aggiungere una traccia in cima cambierebbe
 * in silenzio che cosa è gratis per chi ha già l'app installata.
 */

/**
 * Gli svolgimenti leggibili senza Premium.
 *
 * Uno per genere: un atto e un parere. Chi prova l'assaggio deve vedere
 * entrambi i formati, altrimenti si fa un'idea sbagliata di che cosa
 * comprerebbe.
 */
export const SVOLGIMENTI_IN_PROVA = ['2023-atto-civile', '2019-parere-civile'];

/**
 * I casi pratici eseguibili senza Premium: uno per materia.
 *
 * Vale la stessa ragione degli svolgimenti, e qui pesa di più. La prova
 * si sceglie fra diritto privato, penale e amministrativo, e se ne porta
 * **una sola**: con un assaggio in una materia soltanto, due candidati
 * su tre valuterebbero il simulatore su una materia che non porteranno,
 * e deciderebbero se pagare guardando la cosa sbagliata.
 *
 * Il primo dell'elenco è anche quello che il simulatore propone per
 * primo a chi non ha mai cominciato: l'assaggio e il primo passo
 * suggerito coincidono, così nessuno sbatte contro il muro alla prima
 * apertura.
 */
export const CASI_IN_PROVA = [
  'privato-locazione-morosita',
  'penale-furto-abitazione',
  'ammin-esclusione-gara',
];

/** Le unità del percorso quiz sono tutte gratuite. */
export function unitaAccessibile(): boolean {
  return true;
}

export function svolgimentoAccessibile(tracciaId: string, premium: boolean): boolean {
  return premium || SVOLGIMENTI_IN_PROVA.includes(tracciaId);
}

export function casoAccessibile(casoId: string, premium: boolean): boolean {
  return premium || CASI_IN_PROVA.includes(casoId);
}

/** Quanti svolgimenti restano dietro Premium, per la copia del paywall. */
export function svolgimentiRiservati(): number {
  return tracceConSvolgimento().filter((id) => !SVOLGIMENTI_IN_PROVA.includes(id)).length;
}

/** Quanti casi pratici restano dietro Premium. */
export function casiRiservati(): number {
  return casi.filter((c) => !CASI_IN_PROVA.includes(c.id)).length;
}
