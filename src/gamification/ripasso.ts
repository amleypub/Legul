/**
 * Ripetizione dilazionata.
 *
 * Prima il ripasso era un elenco: una domanda sbagliata ci entrava, una
 * risposta giusta la toglieva. È il modo più veloce di dimenticare una
 * regola, perché il momento in cui la si ricorda meglio — subito dopo
 * averla riletta — è anche il momento in cui ripassarla non serve a
 * niente. Chi prepara l'esame ha bisogno del contrario: rivedere la
 * stessa norma quando sta per uscirgli di testa.
 *
 * Ogni domanda sbagliata diventa una carta con una data di scadenza.
 * Rispondendo bene la data si allontana secondo intervalli crescenti;
 * sbagliando torna a oggi. Dopo l'ultimo intervallo la carta esce
 * dall'elenco: a quel punto la regola è stata richiamata correttamente a
 * distanza di più di un mese, ed è ragionevole considerarla acquisita.
 *
 * Gli intervalli non sono un algoritmo adattivo alla SM-2: sono una
 * scaletta fissa. Un algoritmo che stima la difficoltà percepita ha
 * bisogno che l'utente si autovaluti a ogni carta, e qui la risposta è
 * già binaria — l'unica informazione disponibile è «giusta» o
 * «sbagliata». Con un solo bit, la scaletta fissa fa lo stesso lavoro
 * senza chiedere niente in più.
 */

/**
 * Giorni di attesa dopo la n-esima risposta giusta di fila.
 *
 * Il primo intervallo è di un giorno e non di poche ore: l'app si apre
 * una volta al giorno, e un ripasso che scade nel pomeriggio dello stesso
 * giorno semplicemente non viene visto.
 */
export const INTERVALLI = [1, 3, 7, 16, 35] as const;

export interface CartaRipasso {
  /** Identificatore della domanda. */
  id: string;
  /** Risposte giuste consecutive date finora su questa carta. */
  successi: number;
  /** Giorno (YYYY-MM-DD) dal quale la carta torna dovuta. */
  dovutaIl: string;
}

/**
 * Quante carte teniamo in circolo.
 *
 * Oltre un certo numero il ripasso smette di essere un recupero mirato e
 * diventa un secondo percorso parallelo, che nessuno finisce mai. Quando
 * si supera il tetto esce la carta con la scadenza più lontana: è quella
 * su cui si è già risposto giusto più volte, quindi la meno urgente.
 */
export const MAX_CARTE = 60;

/** Somma giorni a una data YYYY-MM-DD restituendo lo stesso formato. */
export function piuGiorni(data: string, giorni: number): string {
  const d = new Date(`${data}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + giorni);
  return d.toISOString().slice(0, 10);
}

/**
 * Aggiorna il mazzo dopo una risposta.
 *
 * Una risposta giusta su una carta che non è nel mazzo non fa nulla: si
 * entra solo sbagliando. Il contrario — promuovere qualsiasi risposta
 * giusta — riempirebbe il mazzo di migliaia di carte già sapute.
 */
export function conRisposta(
  mazzo: CartaRipasso[],
  corretta: boolean,
  domandaId: string | undefined,
  oggi: string
): CartaRipasso[] {
  if (!domandaId) return mazzo;
  const esistente = mazzo.find((c) => c.id === domandaId);

  if (!corretta) {
    // Sbagliando si riparte da capo e la carta è dovuta subito: è la
    // regola che si è appena rivelata non acquisita.
    const senza = mazzo.filter((c) => c.id !== domandaId);
    const carta: CartaRipasso = { id: domandaId, successi: 0, dovutaIl: oggi };
    return limita([carta, ...senza]);
  }

  if (!esistente) return mazzo;

  const successi = esistente.successi + 1;
  // Superato l'ultimo intervallo la carta è acquisita ed esce dal mazzo.
  if (successi >= INTERVALLI.length) return mazzo.filter((c) => c.id !== domandaId);

  return mazzo.map((c) =>
    c.id === domandaId
      ? { id: c.id, successi, dovutaIl: piuGiorni(oggi, INTERVALLI[successi - 1]) }
      : c
  );
}

/**
 * Taglia il mazzo al tetto scartando le carte più lontane dalla
 * scadenza, cioè quelle su cui si è già risposto giusto più volte.
 */
function limita(mazzo: CartaRipasso[]): CartaRipasso[] {
  if (mazzo.length <= MAX_CARTE) return mazzo;
  const perScadenza = [...mazzo].sort((a, b) => (a.dovutaIl < b.dovutaIl ? -1 : 1));
  const tenute = new Set(perScadenza.slice(0, MAX_CARTE).map((c) => c.id));
  return mazzo.filter((c) => tenute.has(c.id));
}

/** Le carte dovute oggi, dalla più scaduta. */
export function dovuteOggi(mazzo: CartaRipasso[], oggi: string): CartaRipasso[] {
  return mazzo.filter((c) => c.dovutaIl <= oggi).sort((a, b) => (a.dovutaIl < b.dovutaIl ? -1 : 1));
}

/**
 * Il primo giorno in cui tornerà dovuta almeno una carta, se oggi non ce
 * n'è nessuna. Serve a dire «torna giovedì» invece di lasciare una
 * schermata vuota senza spiegazione.
 */
export function prossimaScadenza(mazzo: CartaRipasso[], oggi: string): string | null {
  const future = mazzo.filter((c) => c.dovutaIl > oggi).map((c) => c.dovutaIl);
  if (future.length === 0) return null;
  return future.reduce((min, d) => (d < min ? d : min));
}

/**
 * Converte il vecchio elenco piatto di errori in un mazzo.
 *
 * Chi ha già l'app installata ha un elenco di identificatori senza date.
 * Trattarli come carte dovute oggi è la lettura giusta: erano lì proprio
 * perché non ancora recuperati.
 */
export function daElencoPiatto(errori: string[], oggi: string): CartaRipasso[] {
  return errori.map((id) => ({ id, successi: 0, dovutaIl: oggi }));
}

/**
 * Distanza in giorni fra due date YYYY-MM-DD (a - b), per le etichette
 * del tipo «fra 3 giorni».
 */
export function distanzaGiorni(a: string, b: string): number {
  return Math.round((Date.parse(`${a}T00:00:00Z`) - Date.parse(`${b}T00:00:00Z`)) / 86_400_000);
}

/** Il giorno corrente in formato YYYY-MM-DD. */
export function oggiISO(): string {
  return new Date().toISOString().slice(0, 10);
}

const MESI = [
  'gennaio',
  'febbraio',
  'marzo',
  'aprile',
  'maggio',
  'giugno',
  'luglio',
  'agosto',
  'settembre',
  'ottobre',
  'novembre',
  'dicembre',
];

/**
 * Come si dice a voce quando torna dovuta una carta.
 *
 * Scritto a mano invece che con `toLocaleDateString`: la formattazione di
 * sistema dipende dalla locale del dispositivo, e un'app tutta in
 * italiano che dice «March 12» su un telefono impostato in inglese è un
 * dettaglio che si nota subito.
 */
export function descriviScadenza(dovutaIl: string, oggi: string): string {
  const giorni = distanzaGiorni(dovutaIl, oggi);
  if (giorni <= 0) return 'oggi';
  if (giorni === 1) return 'domani';
  if (giorni <= 7) return `fra ${giorni} giorni`;
  const [, mese, giorno] = dovutaIl.split('-');
  return `il ${Number(giorno)} ${MESI[Number(mese) - 1]}`;
}
