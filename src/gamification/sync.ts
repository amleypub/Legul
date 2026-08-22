import { supabase } from '../auth/supabase';

/**
 * Progressi sincronizzati sul cloud.
 * Volutamente un sottoinsieme dello stato locale: `audioAttivo` è una
 * preferenza del singolo dispositivo e non va portata in giro.
 */
export interface ProgressiRemoti {
  punti: number;
  risposteCorrette: number;
  risposteErrate: number;
  quizCompletati: number;
  lezioni: Record<string, number>;
  premium: boolean;
  tracceLette: string[];
  badges: string[];
  streak: number;
  ultimoGiornoAttivita: string | null;
}

const TABELLA = 'progressi';

/** Unisce due liste senza duplicati, preservando l'ordine di comparsa. */
function unisciListe(a: string[], b: string[]): string[] {
  return Array.from(new Set([...a, ...b]));
}

/**
 * Fonde i progressi locali con quelli sul cloud.
 *
 * La regola è «non si perde mai niente»: per ogni contatore vince il
 * valore più alto, per ogni lezione il miglior numero di stelle, e le
 * liste si uniscono. Così chi studia offline sul treno e poi apre l'app
 * sul tablet ritrova tutto, e un dispositivo rimasto indietro non può
 * cancellare i progressi fatti altrove.
 */
export function unisciProgressi(
  locale: ProgressiRemoti,
  remoto: ProgressiRemoti
): ProgressiRemoti {
  const lezioni: Record<string, number> = { ...remoto.lezioni };
  for (const [id, stelle] of Object.entries(locale.lezioni)) {
    lezioni[id] = Math.max(stelle, lezioni[id] ?? 0);
  }

  // La data più recente vince, così la streak resta coerente con essa.
  const ultimoGiornoAttivita =
    [locale.ultimoGiornoAttivita, remoto.ultimoGiornoAttivita]
      .filter((d): d is string => Boolean(d))
      .sort()
      .pop() ?? null;

  return {
    punti: Math.max(locale.punti, remoto.punti),
    risposteCorrette: Math.max(locale.risposteCorrette, remoto.risposteCorrette),
    risposteErrate: Math.max(locale.risposteErrate, remoto.risposteErrate),
    quizCompletati: Math.max(locale.quizCompletati, remoto.quizCompletati),
    lezioni,
    premium: locale.premium || remoto.premium,
    tracceLette: unisciListe(locale.tracceLette, remoto.tracceLette),
    badges: unisciListe(locale.badges, remoto.badges),
    streak: Math.max(locale.streak, remoto.streak),
    ultimoGiornoAttivita,
  };
}

/** Legge i progressi dell'utente. `null` se non ne ha ancora salvati. */
export async function scaricaProgressi(utenteId: string): Promise<ProgressiRemoti | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from(TABELLA)
    .select('dati')
    .eq('utente_id', utenteId)
    .maybeSingle();
  if (error) throw error;
  return (data?.dati as ProgressiRemoti | undefined) ?? null;
}

/** Salva (o sovrascrive) i progressi dell'utente. */
export async function caricaProgressi(
  utenteId: string,
  progressi: ProgressiRemoti
): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase
    .from(TABELLA)
    .upsert(
      { utente_id: utenteId, dati: progressi, aggiornato_il: new Date().toISOString() },
      { onConflict: 'utente_id' }
    );
  if (error) throw error;
}
