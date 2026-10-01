import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from 'expo-audio';

/**
 * Effetti sonori.
 *
 * I file sono sintetizzati da `scripts/genera-suoni.mjs`: rintocchi di
 * vetro su intervalli consonanti per le risposte esatte e gli esiti, un
 * tono basso e ovattato per gli errori, un ticchettio per la selezione.
 *
 * Questo modulo esisteva già e a volte restava muto. Le cause erano tre,
 * tutte qui e nessuna nei file:
 *
 * 1. **Il riavvolgimento non veniva aspettato.** `seekTo(0)` è
 *    asincrono e `play()` partiva subito: un suono già finito poteva
 *    ripartire dalla fine, cioè in silenzio.
 * 2. **I player nascevano al primo uso**, e il primo `play()` arrivava
 *    prima che il file fosse caricato: la prima risposta esatta di una
 *    sessione spesso non suonava.
 * 3. **Un solo player per suono.** Le tre stelle dell'esito suonavano lo
 *    stesso file a 250 millisecondi l'una dall'altra, e la seconda
 *    interrompeva la prima.
 *
 * Ora i player si preparano all'avvio, ognuno ha un gemello per quando
 * il suono si ripete prima di essere finito, e la riproduzione aspetta
 * che il riavvolgimento sia concluso.
 */
const SOURCES = {
  tap: require('../../assets/sounds/tap.wav'),
  correct: require('../../assets/sounds/correct.wav'),
  wrong: require('../../assets/sounds/wrong.wav'),
  star1: require('../../assets/sounds/star1.wav'),
  star2: require('../../assets/sounds/star2.wav'),
  star3: require('../../assets/sounds/star3.wav'),
  complete: require('../../assets/sounds/complete.wav'),
  perfect: require('../../assets/sounds/perfect.wav'),
} as const;

export type SoundName = keyof typeof SOURCES;

/** Quanti player per suono: due bastano perché un suono non tronchi se stesso. */
const GEMELLI = 2;

let enabled = true;
let preparazione: Promise<void> | null = null;
const players: Partial<Record<SoundName, AudioPlayer[]>> = {};
const prossimo: Partial<Record<SoundName, number>> = {};

/** Attiva/disattiva globalmente gli effetti sonori. */
export function setAudioEnabled(value: boolean) {
  enabled = value;
}

/**
 * Prepara la sessione audio e carica tutti i suoni.
 *
 * Va chiamata all'avvio, non al primo suono: è il caricamento che
 * richiede tempo, e farlo prima significa che quando serve il suono c'è.
 * Chiamarla più volte non ricarica nulla.
 */
export function preparaAudio(): Promise<void> {
  if (preparazione) return preparazione;
  preparazione = (async () => {
    try {
      // Suona anche con l'interruttore silenzioso, come nei giochi; e va
      // impostato prima del primo suono, non insieme.
      await setAudioModeAsync({ playsInSilentMode: true });
    } catch {
      // Sul web e su qualche simulatore la sessione non è configurabile.
    }
    for (const nome of Object.keys(SOURCES) as SoundName[]) {
      try {
        players[nome] = Array.from({ length: GEMELLI }, () => createAudioPlayer(SOURCES[nome]));
        prossimo[nome] = 0;
      } catch {
        // Audio non disponibile su questa piattaforma.
      }
    }
  })();
  return preparazione;
}

/** Riproduce un effetto sonoro (nessun effetto se l'audio è disattivato). */
export function playSound(name: SoundName) {
  if (!enabled) return;
  // Se per qualche ragione la preparazione non è ancora partita, parte ora:
  // questo suono potrebbe perdersi, i successivi no.
  if (!preparazione) void preparaAudio();
  const gruppo = players[name];
  if (!gruppo?.length) return;

  // Il primo gemello libero; se suonano entrambi, quello toccato da più tempo.
  const libero = gruppo.find((p) => !p.playing);
  const indice = libero ? gruppo.indexOf(libero) : (prossimo[name] ?? 0) % gruppo.length;
  const player = gruppo[indice];
  prossimo[name] = indice + 1;

  try {
    player
      .seekTo(0)
      .then(() => player.play())
      .catch(() => {
        // Se il riavvolgimento fallisce — file non ancora caricato — si
        // prova comunque: alcune piattaforme partono appena pronte.
        try {
          player.play();
        } catch {
          // niente da fare
        }
      });
  } catch {
    // audio non disponibile: ignora silenziosamente
  }
}

/** Il suono della stella n-esima: tre note che salgono, Do, Mi, Sol. */
export function suonoStella(n: number): SoundName {
  return n >= 3 ? 'star3' : n === 2 ? 'star2' : 'star1';
}
