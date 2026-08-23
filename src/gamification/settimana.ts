/**
 * Calcoli sulla streak che dipendono dal calendario e non dallo stato
 * salvato: quanti giorni di fila valgono *oggi*, e come si presenta la
 * settimana corrente.
 */

/** Un giorno della settimana corrente, come lo mostra la striscia in Home. */
export interface GiornoSettimana {
  /** Iniziale del giorno in italiano (L, M, M, G, V, S, D). */
  lettera: string;
  /** Data del giorno in formato YYYY-MM-DD. */
  data: string;
  /** L'utente ha studiato quel giorno. */
  attivo: boolean;
  oggi: boolean;
  /** Giorno non ancora arrivato: si mostra spento ma non "mancato". */
  futuro: boolean;
}

const LETTERE = ['L', 'M', 'M', 'G', 'V', 'S', 'D'];

/** Numero di giorni fra due date in formato YYYY-MM-DD (a - b). */
function distanzaGiorni(a: string, b: string): number {
  const ms = Date.parse(`${a}T00:00:00Z`) - Date.parse(`${b}T00:00:00Z`);
  return Math.round(ms / 86_400_000);
}

/** Somma giorni a una data YYYY-MM-DD restituendo lo stesso formato. */
function piuGiorni(data: string, giorni: number): string {
  const d = new Date(`${data}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + giorni);
  return d.toISOString().slice(0, 10);
}

/**
 * Quanti giorni di fila valgono oggi.
 *
 * Il valore salvato è la streak al momento dell'ultima attività, e viene
 * ricalcolato solo quando si guadagnano punti: preso alla lettera,
 * continuerebbe a dichiarare «4 giorni di fila» a chi ha studiato
 * l'ultima volta la settimana scorsa. La serie è ancora viva soltanto se
 * l'ultima attività è di oggi o di ieri; altrimenti è finita, anche se
 * nessuno l'ha ancora scritto da nessuna parte.
 */
export function streakEffettiva(
  streakSalvata: number,
  ultimaAttivita: string | null,
  oggi: string
): number {
  if (!ultimaAttivita || streakSalvata <= 0) return 0;
  const distanza = distanzaGiorni(oggi, ultimaAttivita);
  // Distanza negativa: data futura, dispositivo con l'orologio spostato.
  // Meglio non fidarsi e non regalare una streak.
  if (distanza < 0 || distanza > 1) return 0;
  return streakSalvata;
}

/**
 * Ricostruisce la settimana corrente (da lunedì a domenica) segnando i
 * giorni in cui si è studiato.
 *
 * I giorni attivi si deducono dalla streak: una serie di `streak` giorni
 * che finisce con l'ultima attività registrata. Non serve tenere uno
 * storico separato, e il risultato coincide con quello reale.
 */
export function settimanaCorrente(
  oggi: string,
  ultimaAttivita: string | null,
  streak: number
): GiornoSettimana[] {
  // getUTCDay(): 0 = domenica. Lo riportiamo a 0 = lunedì.
  const indiceOggi = (new Date(`${oggi}T00:00:00Z`).getUTCDay() + 6) % 7;
  const lunedi = piuGiorni(oggi, -indiceOggi);

  return LETTERE.map((lettera, i) => {
    const data = piuGiorni(lunedi, i);
    const distanza = ultimaAttivita ? distanzaGiorni(ultimaAttivita, data) : -1;
    return {
      lettera,
      data,
      attivo: streak > 0 && distanza >= 0 && distanza < streak,
      oggi: i === indiceOggi,
      futuro: i > indiceOggi,
    };
  });
}
