import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@legul/gamification/v1';

// ——— Punti assegnati per ogni azione ———
export const PUNTI = {
  rispostaCorretta: 10,
  rispostaErrata: 2, // premio di partecipazione: studiare conta comunque!
  quizCompletato: 20,
  quizPerfetto: 30, // bonus aggiuntivo se tutte le risposte sono corrette
  tracciaLetta: 5,
} as const;

export interface Livello {
  nome: string;
  sogliaPunti: number;
  emoji: string;
}

export const LIVELLI: Livello[] = [
  { nome: 'Studente di Giurisprudenza', sogliaPunti: 0, emoji: '📖' },
  { nome: 'Laureato in Legge', sogliaPunti: 100, emoji: '🎓' },
  { nome: 'Praticante', sogliaPunti: 300, emoji: '🗂️' },
  { nome: 'Praticante Abilitato', sogliaPunti: 600, emoji: '📜' },
  { nome: 'Avvocato', sogliaPunti: 1000, emoji: '⚖️' },
  { nome: 'Cassazionista', sogliaPunti: 2000, emoji: '🏛️' },
  { nome: 'Principe del Foro', sogliaPunti: 4000, emoji: '👑' },
];

export interface BadgeDef {
  id: string;
  nome: string;
  descrizione: string;
  emoji: string;
}

export const BADGES: BadgeDef[] = [
  { id: 'primo-quiz', nome: 'Primo passo', descrizione: 'Completa il tuo primo quiz', emoji: '🚀' },
  { id: 'quiz-perfetto', nome: 'En plein', descrizione: 'Completa un quiz senza errori', emoji: '💯' },
  { id: 'dieci-corrette', nome: 'Giurista in erba', descrizione: 'Totalizza 10 risposte corrette', emoji: '🌱' },
  { id: 'cinquanta-corrette', nome: 'Memoria di ferro', descrizione: 'Totalizza 50 risposte corrette', emoji: '🧠' },
  { id: 'streak-3', nome: 'Costanza', descrizione: 'Studia per 3 giorni consecutivi', emoji: '🔥' },
  { id: 'streak-7', nome: 'Settimana da toga', descrizione: 'Studia per 7 giorni consecutivi', emoji: '🗓️' },
  { id: 'prima-traccia', nome: 'Storico del diritto', descrizione: 'Leggi la tua prima traccia d’esame', emoji: '🏺' },
  { id: 'cinque-tracce', nome: 'Archivista', descrizione: 'Leggi 5 tracce degli anni passati', emoji: '🗄️' },
  { id: 'mille-punti', nome: 'Mille di questi punti', descrizione: 'Raggiungi 1.000 punti', emoji: '🏆' },
];

const INCORAGGIAMENTI_CORRETTA = [
  'Esatto! Continua così, l’esame si avvicina e tu sei sempre più pronto! 💪',
  'Risposta da vero avvocato! ⚖️',
  'Perfetto! Un altro articolo che non dimenticherai più. 📚',
  'Grande! La Commissione sarebbe colpita. 👏',
  'Corretto! Un passo alla volta verso la toga. 🎯',
];

const INCORAGGIAMENTI_ERRATA = [
  'Non mollare: sbagliando si impara, e ora conosci la risposta giusta! 🌱',
  'Capita anche ai migliori cassazionisti. Leggi la spiegazione e riprova! 💡',
  'Errore utile! È così che si fissano i concetti. 📖',
  'Tieni duro: ogni errore oggi è un punto in più all’esame. 🚀',
];

const INCORAGGIAMENTI_QUIZ_FINE = [
  'Quiz completato! La costanza è la vera arma segreta per l’esame. 🔑',
  'Ottimo lavoro! Concediti una pausa: te la sei meritata. ☕',
  'Un altro quiz in archivio: il tuo io del giorno dell’esame ti ringrazierà. 🙌',
];

function pick(arr: string[], seed: number): string {
  return arr[seed % arr.length];
}

interface GamificationState {
  punti: number;
  risposteCorrette: number;
  risposteErrate: number;
  quizCompletati: number;
  tracceLette: string[]; // id delle tracce lette
  badges: string[]; // id dei badge sbloccati
  streak: number;
  ultimoGiornoAttivita: string | null; // YYYY-MM-DD
}

const initialState: GamificationState = {
  punti: 0,
  risposteCorrette: 0,
  risposteErrate: 0,
  quizCompletati: 0,
  tracceLette: [],
  badges: [],
  streak: 0,
  ultimoGiornoAttivita: null,
};

export interface EventoGamification {
  puntiGuadagnati: number;
  messaggio: string;
  nuoviBadge: BadgeDef[];
}

interface GamificationContextValue {
  state: GamificationState;
  livello: Livello;
  prossimoLivello: Livello | null;
  /** Avanzamento (0–1) verso il prossimo livello. */
  progressoLivello: number;
  registraRisposta(corretta: boolean): EventoGamification;
  registraQuizCompletato(corrette: number, totale: number): EventoGamification;
  registraTracciaLetta(tracciaId: string): EventoGamification;
}

const GamificationContext = createContext<GamificationContextValue | null>(null);

function oggiISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function ieriISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

/** Aggiorna la streak giornaliera in base all'ultima attività registrata. */
function conStreakAggiornata(s: GamificationState): GamificationState {
  const oggi = oggiISO();
  if (s.ultimoGiornoAttivita === oggi) return s;
  const streak = s.ultimoGiornoAttivita === ieriISO() ? s.streak + 1 : 1;
  return { ...s, streak, ultimoGiornoAttivita: oggi };
}

/** Calcola i badge sbloccati dallo stato corrente e restituisce i nuovi. */
function conBadgeAggiornati(s: GamificationState): {
  state: GamificationState;
  nuovi: BadgeDef[];
} {
  const unlocked = new Set(s.badges);
  const criteri: Record<string, boolean> = {
    'primo-quiz': s.quizCompletati >= 1,
    'dieci-corrette': s.risposteCorrette >= 10,
    'cinquanta-corrette': s.risposteCorrette >= 50,
    'streak-3': s.streak >= 3,
    'streak-7': s.streak >= 7,
    'prima-traccia': s.tracceLette.length >= 1,
    'cinque-tracce': s.tracceLette.length >= 5,
    'mille-punti': s.punti >= 1000,
  };
  const nuovi = BADGES.filter((b) => criteri[b.id] && !unlocked.has(b.id));
  if (nuovi.length === 0) return { state: s, nuovi };
  return { state: { ...s, badges: [...s.badges, ...nuovi.map((b) => b.id)] }, nuovi };
}

export function livelloPerPunti(punti: number): Livello {
  let corrente = LIVELLI[0];
  for (const l of LIVELLI) {
    if (punti >= l.sogliaPunti) corrente = l;
  }
  return corrente;
}

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GamificationState>(initialState);
  const loaded = useRef(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) setState({ ...initialState, ...(JSON.parse(raw) as GamificationState) });
      })
      .catch(() => {})
      .finally(() => {
        loaded.current = true;
      });
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state)).catch(() => {});
  }, [state]);

  const applica = useCallback(
    (
      trasforma: (s: GamificationState) => GamificationState,
      messaggio: string,
      puntiGuadagnati: number
    ): EventoGamification => {
      let nuoviBadge: BadgeDef[] = [];
      setState((prev) => {
        const aggiornato = conStreakAggiornata(trasforma(prev));
        const { state: finale, nuovi } = conBadgeAggiornati(aggiornato);
        nuoviBadge = nuovi;
        return finale;
      });
      return { puntiGuadagnati, messaggio, nuoviBadge };
    },
    []
  );

  const registraRisposta = useCallback(
    (corretta: boolean): EventoGamification => {
      const punti = corretta ? PUNTI.rispostaCorretta : PUNTI.rispostaErrata;
      const pool = corretta ? INCORAGGIAMENTI_CORRETTA : INCORAGGIAMENTI_ERRATA;
      const seed = Math.floor(Math.random() * pool.length);
      return applica(
        (s) => ({
          ...s,
          punti: s.punti + punti,
          risposteCorrette: s.risposteCorrette + (corretta ? 1 : 0),
          risposteErrate: s.risposteErrate + (corretta ? 0 : 1),
        }),
        pick(pool, seed),
        punti
      );
    },
    [applica]
  );

  const registraQuizCompletato = useCallback(
    (corrette: number, totale: number): EventoGamification => {
      const perfetto = totale > 0 && corrette === totale;
      const punti = PUNTI.quizCompletato + (perfetto ? PUNTI.quizPerfetto : 0);
      const seed = Math.floor(Math.random() * INCORAGGIAMENTI_QUIZ_FINE.length);
      const messaggio = perfetto
        ? 'PERFETTO! Tutte corrette: sei in formissima! 🌟'
        : pick(INCORAGGIAMENTI_QUIZ_FINE, seed);
      return applica(
        (s) => {
          const base = {
            ...s,
            punti: s.punti + punti,
            quizCompletati: s.quizCompletati + 1,
          };
          if (!perfetto) return base;
          return {
            ...base,
            badges: base.badges.includes('quiz-perfetto')
              ? base.badges
              : [...base.badges, 'quiz-perfetto'],
          };
        },
        messaggio,
        punti
      );
    },
    [applica]
  );

  const registraTracciaLetta = useCallback(
    (tracciaId: string): EventoGamification => {
      if (state.tracceLette.includes(tracciaId)) {
        return { puntiGuadagnati: 0, messaggio: '', nuoviBadge: [] };
      }
      return applica(
        (s) =>
          s.tracceLette.includes(tracciaId)
            ? s
            : {
                ...s,
                punti: s.punti + PUNTI.tracciaLetta,
                tracceLette: [...s.tracceLette, tracciaId],
              },
        'Traccia studiata: conoscere il passato è il modo migliore di prepararsi al futuro! 🏛️',
        PUNTI.tracciaLetta
      );
    },
    [applica, state.tracceLette]
  );

  const value = useMemo<GamificationContextValue>(() => {
    const livello = livelloPerPunti(state.punti);
    const idx = LIVELLI.indexOf(livello);
    const prossimoLivello = idx < LIVELLI.length - 1 ? LIVELLI[idx + 1] : null;
    const progressoLivello = prossimoLivello
      ? (state.punti - livello.sogliaPunti) /
        (prossimoLivello.sogliaPunti - livello.sogliaPunti)
      : 1;
    return {
      state,
      livello,
      prossimoLivello,
      progressoLivello: Math.min(Math.max(progressoLivello, 0), 1),
      registraRisposta,
      registraQuizCompletato,
      registraTracciaLetta,
    };
  }, [state, registraRisposta, registraQuizCompletato, registraTracciaLetta]);

  return <GamificationContext.Provider value={value}>{children}</GamificationContext.Provider>;
}

export function useGamification(): GamificationContextValue {
  const ctx = useContext(GamificationContext);
  if (!ctx) {
    throw new Error('useGamification deve essere usato dentro <GamificationProvider>');
  }
  return ctx;
}
