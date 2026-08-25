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
import { setAudioEnabled } from '../audio/sounds';
import { useAuth } from '../auth/AuthContext';
import { streakEffettiva } from './settimana';
import { conRisposta, daElencoPiatto, oggiISO, type CartaRipasso } from './ripasso';
import { coperturaProgramma } from '../data/percorso';
import { OBIETTIVO_PREDEFINITO, puntiObiettivo, type Andatura } from './obiettivo';
import { PROFILO_VUOTO, type ProfiloEsame } from '../data/scelte';
import { materie } from '../data/quizzes';
import type { QuizQuestion } from '../types';
import {
  annullaPromemoria,
  chiediPermesso,
  ORA_PREDEFINITA,
  programmaPromemoria,
} from '../notifiche/promemoria';
import {
  caricaProgressi,
  scaricaProgressi,
  unisciProgressi,
  type ProgressiRemoti,
} from './sync';

/** Nome logico dell'icona: la mappa dei glifi sta in `components/Icona`. */
type IconName = string;

const STORAGE_KEY = '@legul/gamification/v1';

// ——— Punti assegnati per ogni azione ———
export const PUNTI = {
  rispostaCorretta: 10,
  rispostaErrata: 2, // premio di partecipazione: studiare conta comunque!
  quizCompletato: 20,
  quizPerfetto: 30, // bonus aggiuntivo se tutte le risposte sono corrette
  perStella: 10, // bonus per ogni stella ottenuta in una lezione
  tracciaLetta: 5,
  /**
   * Il caso pratico costa venti minuti di lavoro vero, non trenta
   * secondi di quiz: il premio riflette lo sforzo, e la parte variabile
   * riflette quanto della scaletta si è effettivamente coperto.
   */
  casoPratico: 25,
  casoPraticoPerDieciPunti: 4,
} as const;

export interface Livello {
  nome: string;
  /** Quota di programma svolto (0–1) da cui il livello vale. */
  sogliaCopertura: number;
  icona: IconName;
}

/**
 * I livelli misurano quanto sei pronto per l'esame, non che titolo hai.
 *
 * Chi usa Legul è già laureato e sta facendo pratica: una scala che parte
 * da «studente» lo retrocederebbe, e una che regala il titolo di
 * «avvocato» a mille punti svilirebbe proprio il traguardo che l'app
 * serve a raggiungere. Nessuno di questi nomi è una qualifica.
 *
 * **La scala è agganciata al programma svolto e non ai punti.** Con i
 * punti l'ultimo livello — quello che dice «più che pronto» — si
 * raggiungeva avendo visto poco più del cinque per cento delle domande:
 * bastava tornare abbastanza a lungo, perché i punti si accumulano anche
 * sbagliando e anche rifacendo la stessa lezione. Una barra che sale
 * mentre la preparazione non sale è peggio di nessuna barra, perché
 * l'unica persona a cui questa app non può mentire è chi la sta usando
 * per decidere se è pronto a presentarsi.
 */
export const LIVELLI: Livello[] = [
  { nome: 'Al via', sogliaCopertura: 0, icona: 'flag' },
  { nome: 'In carreggiata', sogliaCopertura: 0.08, icona: 'navigate' },
  { nome: 'Ritmo costante', sogliaCopertura: 0.2, icona: 'pulse' },
  { nome: 'Passo sicuro', sogliaCopertura: 0.35, icona: 'footsteps' },
  { nome: 'Dirittura d’arrivo', sogliaCopertura: 0.55, icona: 'speedometer' },
  { nome: 'Pronto all’esame', sogliaCopertura: 0.75, icona: 'shield-checkmark' },
  { nome: 'Più che pronto', sogliaCopertura: 0.95, icona: 'trophy' },
];

export interface BadgeDef {
  id: string;
  nome: string;
  descrizione: string;
  icona: IconName;
}

export const BADGES: BadgeDef[] = [
  { id: 'primo-quiz', nome: 'Primo passo', descrizione: 'Completa il tuo primo quiz', icona: 'rocket' },
  { id: 'quiz-perfetto', nome: 'En plein', descrizione: 'Completa un quiz senza errori', icona: 'checkmark-done-circle' },
  { id: 'dieci-corrette', nome: 'Giurista in erba', descrizione: 'Totalizza 10 risposte corrette', icona: 'leaf' },
  { id: 'cinquanta-corrette', nome: 'Memoria di ferro', descrizione: 'Totalizza 50 risposte corrette', icona: 'bulb' },
  { id: 'streak-3', nome: 'Costanza', descrizione: 'Studia per 3 giorni consecutivi', icona: 'flame' },
  { id: 'streak-7', nome: 'Settimana da toga', descrizione: 'Studia per 7 giorni consecutivi', icona: 'calendar' },
  { id: 'prima-traccia', nome: 'Storico del diritto', descrizione: 'Leggi la tua prima traccia d’esame', icona: 'archive' },
  { id: 'cinque-tracce', nome: 'Archivista', descrizione: 'Leggi 5 tracce degli anni passati', icona: 'file-tray-full' },
  { id: 'mille-punti', nome: 'Mille di questi punti', descrizione: 'Raggiungi 1.000 punti', icona: 'trophy' },
  { id: 'primo-caso', nome: 'Davanti alla commissione', descrizione: 'Completa il tuo primo caso pratico', icona: 'mic' },
  { id: 'caso-completo', nome: 'Niente fuori', descrizione: 'Copri l’intera scaletta di un caso pratico', icona: 'checkmark-done' },
];

const INCORAGGIAMENTI_CORRETTA = [
  'Esatto! Continua così, l’esame si avvicina e tu sei sempre più pronto.',
  'Risposta da vero avvocato.',
  'Perfetto! Un altro articolo che non dimenticherai più.',
  'Ottimo: la Commissione sarebbe colpita.',
  'Corretto! Un passo alla volta verso la toga.',
];

const INCORAGGIAMENTI_ERRATA = [
  'Non mollare: sbagliando si impara, e ora conosci la risposta giusta.',
  'Capita anche ai migliori cassazionisti. Leggi la spiegazione e riprova.',
  'Errore utile: è così che si fissano i concetti.',
  'Tieni duro: ogni errore oggi è un punto in più all’esame.',
];

const INCORAGGIAMENTI_QUIZ_FINE = [
  'Quiz completato! La costanza è la vera arma segreta per l’esame.',
  'Ottimo lavoro! Concediti una pausa: te la sei meritata.',
  'Un altro quiz in archivio: il tuo io del giorno dell’esame ti ringrazierà.',
];

function pick(arr: string[], seed: number): string {
  return arr[seed % arr.length];
}

export interface GamificationState {
  punti: number;
  risposteCorrette: number;
  risposteErrate: number;
  quizCompletati: number;
  /** Migliori stelle ottenute per ogni lezione del percorso (id lezione -> 0-3). */
  lezioni: Record<string, number>;
  /** True se l'utente ha sbloccato i contenuti Premium (unità 3 e 4). */
  premium: boolean;
  /** Effetti sonori attivi. */
  audioAttivo: boolean;
  /**
   * L'andatura scelta per l'obiettivo giornaliero. Una costante uguale
   * per tutti sbaglia in entrambe le direzioni: vedi `obiettivo.ts`.
   */
  andatura: Andatura;
  /**
   * Che cosa porta all'esame: materia degli scritti, procedura, materia
   * della rosa, e quando sostiene la prova. Vedi `data/scelte.ts`.
   */
  esame: ProfiloEsame;
  /**
   * Le domande d'apertura sono già state fatte.
   *
   * Distinto dal profilo compilato: si può saltare tutto, e in quel caso
   * l'app non deve richiedere le stesse cose a ogni avvio.
   */
  aperturaFatta: boolean;
  /**
   * La proposta di attivare il promemoria è già stata mostrata.
   *
   * Si chiede una volta sola, dopo la prima lezione: chiedere il permesso
   * alle notifiche prima che l'app abbia dimostrato di valere qualcosa è
   * il modo più affidabile di farselo negare per sempre.
   */
  promemoriaProposto: boolean;
  /** Promemoria giornaliero attivo, e a che ora. Preferenze del dispositivo. */
  promemoriaAttivo: boolean;
  oraPromemoria: number;
  tracceLette: string[]; // id delle tracce lette
  badges: string[]; // id dei badge sbloccati
  streak: number;
  ultimoGiornoAttivita: string | null; // YYYY-MM-DD
  /** Punti guadagnati oggi: si azzera al cambio di giorno. */
  puntiOggi: number;
  /**
   * Risposte date, contate per materia.
   *
   * I contatori globali dicono quanto si sbaglia, non dove: sono la
   * media che nasconde proprio l'informazione che serve a chi ha una
   * data e poco tempo. Qui la precisione è misurata, non stimata dalle
   * stelle delle lezioni — le stelle sono fasce, e una fascia non
   * distingue il novanta per cento dal cento.
   */
  perMateria: Record<string, { corrette: number; errate: number }>;
  /**
   * Il mazzo del ripasso a ripetizione dilazionata: ogni domanda
   * sbagliata diventa una carta con una data di scadenza che si allontana
   * a ogni risposta giusta. Vedi `ripasso.ts`.
   */
  mazzoRipasso: CartaRipasso[];
  /**
   * Il vecchio elenco piatto degli errori.
   *
   * Resta nel tipo perché va letto dai dispositivi che aggiornano l'app:
   * al primo avvio viene convertito in carte e svuotato. Nessuna
   * schermata lo usa più.
   *
   * @deprecated Convertito in `mazzoRipasso` all'avvio.
   */
  erroriDaRipassare?: string[];
  /**
   * Miglior punteggio (0–100) ottenuto in ciascun caso pratico.
   *
   * Resta sul dispositivo e non viene sincronizzato: la simulazione è
   * un'autovalutazione, e un dato che l'utente si assegna da solo non
   * ha lo stesso significato di un risultato misurato dall'app.
   */
  casiSvolti: Record<string, number>;
}

const initialState: GamificationState = {
  punti: 0,
  risposteCorrette: 0,
  risposteErrate: 0,
  quizCompletati: 0,
  lezioni: {},
  premium: false,
  audioAttivo: true,
  andatura: OBIETTIVO_PREDEFINITO,
  esame: PROFILO_VUOTO,
  aperturaFatta: false,
  promemoriaProposto: false,
  promemoriaAttivo: false,
  oraPromemoria: ORA_PREDEFINITA,
  tracceLette: [],
  badges: [],
  streak: 0,
  ultimoGiornoAttivita: null,
  puntiOggi: 0,
  perMateria: {},
  mazzoRipasso: [],
  casiSvolti: {},
};

export interface EventoGamification {
  puntiGuadagnati: number;
  messaggio: string;
  nuoviBadge: BadgeDef[];
  /** Stelle ottenute (solo per il completamento di una lezione). */
  stelle?: number;
}

interface GamificationContextValue {
  state: GamificationState;
  /**
   * Giorni di fila validi oggi. Da usare al posto di `state.streak`, che
   * è il valore congelato all'ultima attività: dopo un giorno saltato
   * quello resta alto finché non si guadagnano nuovi punti.
   */
  streak: number;
  /**
   * Falso finché i progressi non sono stati letti dal dispositivo: senza
   * questa distinzione «nessun dato» e «dati non ancora arrivati» sono
   * indistinguibili, e le schermate mostrano un vuoto che non è vero.
   */
  caricato: boolean;
  livello: Livello;
  prossimoLivello: Livello | null;
  /** Avanzamento (0–1) verso il prossimo livello. */
  progressoLivello: number;
  /**
   * Quota di programma svolto (0–1): lezioni superate con almeno una
   * stella sul totale. È la misura da cui dipende il livello.
   */
  copertura: number;
  /**
   * Riceve la domanda intera e non il solo identificativo.
   *
   * L'identificativo serve al ripasso — senza, una risposta sbagliata
   * dava la spiegazione e spariva — ma la materia serve al conteggio per
   * materia, che è l'unico modo per sapere *dove* si sbaglia. Ricavarla
   * da una tabella di quattromila voci sarebbe stato un giro inutile:
   * chi chiama ha la domanda in mano.
   */
  registraRisposta(corretta: boolean, domanda?: QuizQuestion): EventoGamification;
  /**
   * Registra il completamento di una lezione del percorso.
   * Stelle: 3 = nessun errore, 2 = almeno 80%, 1 = almeno 60%.
   */
  registraLezioneCompletata(
    lezioneId: string,
    corrette: number,
    totale: number
  ): EventoGamification;
  registraTracciaLetta(tracciaId: string): EventoGamification;
  /**
   * Registra una simulazione del caso pratico. `punteggio` è la quota
   * di scaletta che l'utente si è riconosciuto, da 0 a 100.
   *
   * A differenza delle lezioni, i punti si guadagnano ogni volta: il
   * valore dell'esercizio sta nel rifarlo, e premiare solo il primo
   * tentativo scoraggerebbe proprio la ripetizione che serve.
   */
  registraCasoPratico(casoId: string, punteggio: number): EventoGamification;
  /**
   * Attiva Premium. Oggi è un flag locale (modalità demo); quando verrà
   * integrato l'acquisto in-app, andrà chiamato dopo la conferma dello store.
   */
  attivaPremium(): void;
  /** Attiva/disattiva gli effetti sonori. */
  toggleAudio(): void;
  /** Cambia l'andatura dell'obiettivo giornaliero. */
  impostaAndatura(andatura: Andatura): void;
  /** Salva (anche parzialmente) le scelte d'esame. */
  aggiornaEsame(parziale: Partial<ProfiloEsame>): void;
  /** Segna che le domande d'apertura sono state fatte o saltate. */
  chiudiApertura(): void;
  /** Segna che la proposta del promemoria è già stata mostrata. */
  segnaPromemoriaProposto(): void;
  /** I punti da raggiungere oggi, secondo l'andatura scelta. */
  obiettivoOggi: number;
  /**
   * Accende o spegne il promemoria giornaliero. Restituisce `false` se il
   * permesso alle notifiche è stato negato: l'interruttore non deve
   * restare acceso promettendo qualcosa che non accadrà.
   */
  impostaPromemoria(attivo: boolean, ora?: number): Promise<boolean>;
  /**
   * Riporta i progressi a zero su questo dispositivo, conservando le
   * preferenze locali (audio). Usato quando si elimina l'account: i dati
   * non devono restare sul telefono dopo la cancellazione.
   */
  azzeraProgressi(): void;
}

export function stellePerRisultato(corrette: number, totale: number): number {
  if (totale <= 0) return 0;
  const quota = corrette / totale;
  if (quota >= 1) return 3;
  if (quota >= 0.8) return 2;
  if (quota >= 0.6) return 1;
  return 0;
}

const GamificationContext = createContext<GamificationContextValue | null>(null);

function ieriISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

/** Aggiorna la streak giornaliera in base all'ultima attività registrata. */
export function conStreakAggiornata(s: GamificationState): GamificationState {
  const oggi = oggiISO();
  if (s.ultimoGiornoAttivita === oggi) return s;
  const streak = s.ultimoGiornoAttivita === ieriISO() ? s.streak + 1 : 1;
  // Nuovo giorno: l'obiettivo giornaliero riparte da zero.
  return { ...s, streak, ultimoGiornoAttivita: oggi, puntiOggi: 0 };
}

/** Calcola i badge sbloccati dallo stato corrente e restituisce i nuovi. */
export function conBadgeAggiornati(s: GamificationState): {
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
    'primo-caso': Object.keys(s.casiSvolti).length >= 1,
    'caso-completo': Object.values(s.casiSvolti).some((p) => p >= 100),
  };
  const nuovi = BADGES.filter((b) => criteri[b.id] && !unlocked.has(b.id));
  if (nuovi.length === 0) return { state: s, nuovi };
  return { state: { ...s, badges: [...s.badges, ...nuovi.map((b) => b.id)] }, nuovi };
}

/**
 * Riporta i progressi allo stato iniziale conservando le preferenze che
 * riguardano il dispositivo e non i dati dell'utente: azzerare anche
 * l'audio sarebbe una sorpresa sgradita, e non è ciò che si chiede
 * eliminando un account.
 */
export function progressiAzzerati(s: GamificationState): GamificationState {
  return {
    ...initialState,
    audioAttivo: s.audioAttivo,
    // L'andatura è una preferenza, non un progresso: chi elimina
    // l'account e ricomincia non deve ritrovarsi un obiettivo che non ha
    // scelto.
    andatura: s.andatura,
    // Le scelte d'esame e le domande già fatte non sono progressi: chi
    // azzera non deve rifare l'apertura né ridire che cosa porta.
    esame: s.esame,
    aperturaFatta: s.aperturaFatta,
    promemoriaProposto: s.promemoriaProposto,
    promemoriaAttivo: s.promemoriaAttivo,
    oraPromemoria: s.oraPromemoria,
  };
}

export function livelloPerCopertura(copertura: number): Livello {
  let corrente = LIVELLI[0];
  for (const l of LIVELLI) {
    if (copertura >= l.sogliaCopertura) corrente = l;
  }
  return corrente;
}

/** Estrae dallo stato solo i campi che vanno sul cloud (fuori: le preferenze locali). */
function soloSincronizzabili(s: GamificationState): ProgressiRemoti {
  return {
    punti: s.punti,
    risposteCorrette: s.risposteCorrette,
    risposteErrate: s.risposteErrate,
    quizCompletati: s.quizCompletati,
    lezioni: s.lezioni,
    premium: s.premium,
    tracceLette: s.tracceLette,
    badges: s.badges,
    streak: s.streak,
    ultimoGiornoAttivita: s.ultimoGiornoAttivita,
    esame: s.esame,
    aperturaFatta: s.aperturaFatta,
  };
}

/**
 * Aggiorna i contatori per materia dopo una risposta.
 *
 * Senza materia non fa nulla: capita nelle sessioni che non provengono
 * dal percorso, e sommare quelle risposte a una materia sbagliata
 * sarebbe peggio che non contarle.
 */
export function conRispostaPerMateria(
  perMateria: Record<string, { corrette: number; errate: number }>,
  corretta: boolean,
  materia?: string
): Record<string, { corrette: number; errate: number }> {
  if (!materia) return perMateria;
  const attuale = perMateria[materia] ?? { corrette: 0, errate: 0 };
  return {
    ...perMateria,
    [materia]: {
      corrette: attuale.corrette + (corretta ? 1 : 0),
      errate: attuale.errate + (corretta ? 0 : 1),
    },
  };
}

/**
 * Porta avanti i dati salvati da versioni precedenti.
 *
 * Il vecchio ripasso era un elenco di identificatori senza date: chi
 * aggiorna l'app deve ritrovarsi quegli errori come carte dovute oggi,
 * non perderli. La conversione avviene una volta sola, perché subito dopo
 * l'elenco viene svuotato.
 */
export function migrato(s: GamificationState): GamificationState {
  const vecchi = s.erroriDaRipassare;
  if (!vecchi || vecchi.length === 0) return { ...s, erroriDaRipassare: undefined };
  const gia = new Set(s.mazzoRipasso.map((c) => c.id));
  return {
    ...s,
    mazzoRipasso: [
      ...s.mazzoRipasso,
      ...daElencoPiatto(
        vecchi.filter((id) => !gia.has(id)),
        oggiISO()
      ),
    ],
    erroriDaRipassare: undefined,
  };
}

export function GamificationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GamificationState>(initialState);
  const [caricato, setCaricato] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) {
          setState(migrato({ ...initialState, ...(JSON.parse(raw) as GamificationState) }));
        }
      })
      .catch(() => {})
      .finally(() => {
        loaded.current = true;
        setCaricato(true);
      });
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state)).catch(() => {});
  }, [state]);

  // ——— Sincronizzazione con il cloud ———
  const { utente } = useAuth();
  const utenteId = utente?.id ?? null;
  // Finché non abbiamo fuso i dati remoti non ha senso ricaricarli su:
  // spedirebbe lo stato locale ancora incompleto sovrascrivendo il cloud.
  const fusioneFatta = useRef(false);

  useEffect(() => {
    fusioneFatta.current = false;
    if (!utenteId) return;
    let vivo = true;

    (async () => {
      try {
        const remoto = await scaricaProgressi(utenteId);
        if (!vivo) return;
        if (remoto) {
          setState((prev) => ({ ...prev, ...unisciProgressi(soloSincronizzabili(prev), remoto) }));
        }
      } catch {
        // Rete assente o tabella non ancora creata: si continua in locale.
      } finally {
        if (vivo) fusioneFatta.current = true;
      }
    })();

    return () => {
      vivo = false;
    };
  }, [utenteId]);

  // Salva sul cloud a ogni cambiamento, ma non più di una volta al secondo:
  // durante una lezione lo stato cambia a ogni risposta.
  useEffect(() => {
    if (!utenteId || !fusioneFatta.current) return;
    const t = setTimeout(() => {
      caricaProgressi(utenteId, soloSincronizzabili(state)).catch(() => {});
    }, 1000);
    return () => clearTimeout(t);
  }, [state, utenteId]);

  const applica = useCallback(
    (
      trasforma: (s: GamificationState) => GamificationState,
      messaggio: string,
      puntiGuadagnati: number
    ): EventoGamification => {
      let nuoviBadge: BadgeDef[] = [];
      setState((prev) => {
        // L'ordine conta: conStreakAggiornata azzera puntiOggi al cambio
        // di giorno, quindi i punti appena guadagnati vanno sommati dopo.
        const aggiornato = conStreakAggiornata(trasforma(prev));
        const conOggi = { ...aggiornato, puntiOggi: aggiornato.puntiOggi + puntiGuadagnati };
        const { state: finale, nuovi } = conBadgeAggiornati(conOggi);
        nuoviBadge = nuovi;
        return finale;
      });
      return { puntiGuadagnati, messaggio, nuoviBadge };
    },
    []
  );

  const registraRisposta = useCallback(
    (corretta: boolean, domanda?: QuizQuestion): EventoGamification => {
      const punti = corretta ? PUNTI.rispostaCorretta : PUNTI.rispostaErrata;
      const pool = corretta ? INCORAGGIAMENTI_CORRETTA : INCORAGGIAMENTI_ERRATA;
      const seed = Math.floor(Math.random() * pool.length);
      return applica(
        (s) => ({
          ...s,
          punti: s.punti + punti,
          risposteCorrette: s.risposteCorrette + (corretta ? 1 : 0),
          risposteErrate: s.risposteErrate + (corretta ? 0 : 1),
          perMateria: conRispostaPerMateria(s.perMateria, corretta, domanda?.materia),
          mazzoRipasso: conRisposta(s.mazzoRipasso, corretta, domanda?.id, oggiISO()),
        }),
        pick(pool, seed),
        punti
      );
    },
    [applica]
  );

  const registraLezioneCompletata = useCallback(
    (lezioneId: string, corrette: number, totale: number): EventoGamification => {
      const stelle = stellePerRisultato(corrette, totale);
      const perfetto = stelle === 3;
      const punti =
        PUNTI.quizCompletato + stelle * PUNTI.perStella + (perfetto ? PUNTI.quizPerfetto : 0);
      const seed = Math.floor(Math.random() * INCORAGGIAMENTI_QUIZ_FINE.length);
      const messaggio = perfetto
        ? 'Perfetto! Tutte corrette: sei in formissima.'
        : pick(INCORAGGIAMENTI_QUIZ_FINE, seed);
      const evento = applica(
        (s) => {
          const base = {
            ...s,
            punti: s.punti + punti,
            quizCompletati: s.quizCompletati + 1,
            lezioni: {
              ...s.lezioni,
              [lezioneId]: Math.max(s.lezioni[lezioneId] ?? 0, stelle),
            },
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
      return { ...evento, stelle };
    },
    [applica]
  );

  const attivaPremium = useCallback(() => {
    setState((prev) => (prev.premium ? prev : { ...prev, premium: true }));
  }, []);

  const toggleAudio = useCallback(() => {
    setState((prev) => ({ ...prev, audioAttivo: !prev.audioAttivo }));
  }, []);

  const impostaAndatura = useCallback((andatura: Andatura) => {
    setState((prev) => (prev.andatura === andatura ? prev : { ...prev, andatura }));
  }, []);

  const aggiornaEsame = useCallback((parziale: Partial<ProfiloEsame>) => {
    setState((prev) => ({ ...prev, esame: { ...prev.esame, ...parziale } }));
  }, []);

  const chiudiApertura = useCallback(() => {
    setState((prev) => (prev.aperturaFatta ? prev : { ...prev, aperturaFatta: true }));
  }, []);

  const segnaPromemoriaProposto = useCallback(() => {
    setState((prev) => (prev.promemoriaProposto ? prev : { ...prev, promemoriaProposto: true }));
  }, []);

  const azzeraProgressi = useCallback(() => {
    setState(progressiAzzerati);
  }, []);

  const impostaPromemoria = useCallback(async (attivo: boolean, ora?: number) => {
    if (!attivo) {
      await annullaPromemoria();
      setState((prev) => ({ ...prev, promemoriaAttivo: false }));
      return true;
    }
    const permesso = await chiediPermesso();
    if (!permesso) return false;
    const oraScelta = ora ?? ORA_PREDEFINITA;
    await programmaPromemoria(oraScelta);
    setState((prev) => ({ ...prev, promemoriaAttivo: true, oraPromemoria: oraScelta }));
    return true;
  }, []);

  /**
   * Le notifiche programmate vivono nel sistema operativo, non nell'app:
   * dopo un riavvio del telefono o una reinstallazione potrebbero non
   * esserci più. Riprogrammarle all'avvio le rimette in fila.
   */
  useEffect(() => {
    if (!caricato || !state.promemoriaAttivo) return;
    programmaPromemoria(state.oraPromemoria).catch(() => {});
  }, [caricato, state.promemoriaAttivo, state.oraPromemoria]);

  // Mantiene il gestore suoni allineato alla preferenza salvata.
  useEffect(() => {
    setAudioEnabled(state.audioAttivo);
  }, [state.audioAttivo]);

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
        'Traccia studiata: conoscere il passato è il modo migliore di prepararsi al futuro.',
        PUNTI.tracciaLetta
      );
    },
    [applica, state.tracceLette]
  );

  const registraCasoPratico = useCallback(
    (casoId: string, punteggioCaso: number): EventoGamification => {
      const quota = Math.min(100, Math.max(0, Math.round(punteggioCaso)));
      const punti =
        PUNTI.casoPratico + Math.floor(quota / 10) * PUNTI.casoPraticoPerDieciPunti;
      const messaggio =
        quota >= 85
          ? 'Esposizione completa: se all’orale va così, il caso pratico è tuo.'
          : quota >= 55
            ? 'Simulazione registrata. Rifallo fra qualche giorno: la seconda volta si vede la differenza.'
            : 'Simulazione registrata. Rileggi la scaletta e riprova: è esattamente a questo che serve.';
      return applica(
        (s) => ({
          ...s,
          punti: s.punti + punti,
          casiSvolti: {
            ...s.casiSvolti,
            [casoId]: Math.max(s.casiSvolti[casoId] ?? 0, quota),
          },
        }),
        messaggio,
        punti
      );
    },
    [applica]
  );

  /**
   * Attraversa i percorsi di tutte le materie: si ricalcola solo quando
   * cambiano le stelle, non a ogni risposta.
   */
  const copertura = useMemo(() => coperturaProgramma(materie, state.lezioni), [state.lezioni]);

  const value = useMemo<GamificationContextValue>(() => {
    const livello = livelloPerCopertura(copertura);
    const idx = LIVELLI.indexOf(livello);
    const prossimoLivello = idx < LIVELLI.length - 1 ? LIVELLI[idx + 1] : null;
    const progressoLivello = prossimoLivello
      ? (copertura - livello.sogliaCopertura) /
        (prossimoLivello.sogliaCopertura - livello.sogliaCopertura)
      : 1;
    return {
      state,
      streak: streakEffettiva(state.streak, state.ultimoGiornoAttivita, oggiISO()),
      caricato,
      livello,
      prossimoLivello,
      progressoLivello: Math.min(Math.max(progressoLivello, 0), 1),
      copertura,
      registraRisposta,
      registraLezioneCompletata,
      registraTracciaLetta,
      registraCasoPratico,
      attivaPremium,
      toggleAudio,
      impostaAndatura,
      aggiornaEsame,
      chiudiApertura,
      segnaPromemoriaProposto,
      obiettivoOggi: puntiObiettivo(state.andatura),
      impostaPromemoria,
      azzeraProgressi,
    };
  }, [
    state,
    caricato,
    copertura,
    registraRisposta,
    registraLezioneCompletata,
    registraTracciaLetta,
    registraCasoPratico,
    attivaPremium,
    toggleAudio,
    impostaAndatura,
    aggiornaEsame,
    chiudiApertura,
    segnaPromemoriaProposto,
    impostaPromemoria,
    azzeraProgressi,
  ]);

  return <GamificationContext.Provider value={value}>{children}</GamificationContext.Provider>;
}

export function useGamification(): GamificationContextValue {
  const ctx = useContext(GamificationContext);
  if (!ctx) {
    throw new Error('useGamification deve essere usato dentro <GamificationProvider>');
  }
  return ctx;
}
