/**
 * L'obiettivo giornaliero, scelto dall'utente.
 *
 * Prima era una costante: cinquanta punti al giorno per tutti. Un numero
 * unico funziona per una persona sola — quella per cui è stato scelto —
 * e sbaglia in entrambe le direzioni per le altre. Chi ha l'esame fra tre
 * settimane lo raggiunge in due minuti e non ha più niente che lo tiri
 * avanti; chi studia per il concorso in magistratura e passa da Legul
 * dieci minuti a settimana lo manca sempre, e un obiettivo mancato ogni
 * giorno smette di essere un obiettivo.
 *
 * Le tre andature sono espresse in punti perché è la valuta che l'app già
 * mostra, ma la descrizione le traduce in lezioni: nessuno sa quanto vale
 * un punto, tutti sanno quanto dura una lezione.
 */

export type Andatura = 'leggero' | 'costante' | 'intensivo';

export interface Obiettivo {
  id: Andatura;
  nome: string;
  punti: number;
  /** Che cosa significa in pratica, in una riga. */
  descrizione: string;
}

/**
 * Una lezione da dieci domande fatta bene vale circa 130 punti: dieci
 * risposte corrette da 10, i 20 del completamento, le tre stelle e il
 * bonus del pieno. Le andature sono tarate su quello.
 */
export const OBIETTIVI: Obiettivo[] = [
  {
    id: 'leggero',
    nome: 'Leggero',
    punti: 60,
    descrizione: 'Circa mezza lezione al giorno. Per non perdere il filo nei periodi pieni.',
  },
  {
    id: 'costante',
    nome: 'Costante',
    punti: 130,
    descrizione: 'Una lezione al giorno. È l’andatura che porta all’esame senza sprint finali.',
  },
  {
    id: 'intensivo',
    nome: 'Intensivo',
    punti: 320,
    descrizione: 'Due o tre lezioni al giorno. Per chi ha una data vicina e vuole recuperare.',
  },
];

export const OBIETTIVO_PREDEFINITO: Andatura = 'costante';

export function obiettivoDi(andatura: Andatura): Obiettivo {
  return OBIETTIVI.find((o) => o.id === andatura) ?? OBIETTIVI[1];
}

/** I punti da raggiungere oggi, secondo l'andatura scelta. */
export function puntiObiettivo(andatura: Andatura): number {
  return obiettivoDi(andatura).punti;
}

/**
 * Il messaggio sotto l'anello dei progressi.
 *
 * Quando mancano dei punti li traduce in risposte esatte: «ti mancano 40
 * punti» non dice quanto lavoro sia, «circa quattro risposte» sì.
 */
export function messaggioObiettivo(
  puntiOggi: number,
  andatura: Andatura,
  puntiPerRispostaCorretta: number
): string {
  const meta = puntiObiettivo(andatura);
  if (puntiOggi >= meta) {
    return 'Obiettivo di oggi raggiunto. Ogni punto in più è vantaggio guadagnato.';
  }
  const mancanti = meta - puntiOggi;
  if (puntiOggi > 0) {
    const risposte = Math.ceil(mancanti / puntiPerRispostaCorretta);
    return `Ti mancano ${mancanti} punti: circa ${risposte} ${
      risposte === 1 ? 'risposta esatta' : 'risposte esatte'
    }.`;
  }
  return `${obiettivoDi(andatura).nome}: ${meta} punti al giorno. ${
    obiettivoDi(andatura).descrizione
  }`;
}
