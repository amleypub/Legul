import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from 'expo-audio';

/**
 * Effetti sonori gamificati (file WAV originali generati per l'app).
 * I player vengono creati pigramente e riutilizzati: per rigiocare un
 * suono si riporta la testina a 0 e si riavvia.
 */
const SOURCES = {
  tap: require('../../assets/sounds/tap.wav'),
  correct: require('../../assets/sounds/correct.wav'),
  wrong: require('../../assets/sounds/wrong.wav'),
  star: require('../../assets/sounds/star.wav'),
  complete: require('../../assets/sounds/complete.wav'),
  perfect: require('../../assets/sounds/perfect.wav'),
} as const;

export type SoundName = keyof typeof SOURCES;

let enabled = true;
let configured = false;
const players: Partial<Record<SoundName, AudioPlayer>> = {};

/** Attiva/disattiva globalmente gli effetti sonori. */
export function setAudioEnabled(value: boolean) {
  enabled = value;
}

/** Riproduce un effetto sonoro (no-op se l'audio è disattivato). */
export function playSound(name: SoundName) {
  if (!enabled) return;
  try {
    if (!configured) {
      configured = true;
      // Suona anche con l'interruttore silenzioso, come nei giochi
      setAudioModeAsync({ playsInSilentMode: true }).catch(() => {});
    }
    let player = players[name];
    if (!player) {
      player = createAudioPlayer(SOURCES[name]);
      players[name] = player;
    }
    player.seekTo(0).catch(() => {});
    player.play();
  } catch {
    // audio non disponibile: ignora silenziosamente
  }
}
