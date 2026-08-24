import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';

/**
 * Conto alla rovescia che sopravvive al passaggio in background.
 *
 * Un cronometro basato su un contatore decrementato ogni secondo mente
 * appena l'app finisce in secondo piano, perché i timer vengono
 * sospesi: chi guarda una notifica per due minuti tornerebbe con due
 * minuti regalati. Qui il tempo residuo si ricalcola sempre da un
 * istante di scadenza assoluto, così il conto resta vero comunque.
 */
export function useCronometro(durataSecondi: number, attivo: boolean) {
  const scadenza = useRef<number | null>(null);
  const [residuo, setResiduo] = useState(durataSecondi);

  const ricalcola = useCallback(() => {
    if (scadenza.current === null) return;
    setResiduo(Math.max(0, Math.round((scadenza.current - Date.now()) / 1000)));
  }, []);

  // Un cambio di durata è un nuovo cronometro, non una correzione di
  // quello in corso: riparte da capo.
  useEffect(() => {
    scadenza.current = null;
    setResiduo(durataSecondi);
  }, [durataSecondi]);

  useEffect(() => {
    if (!attivo) return;
    if (scadenza.current === null) scadenza.current = Date.now() + durataSecondi * 1000;
    ricalcola();
    const id = setInterval(ricalcola, 500);
    const sub = AppState.addEventListener('change', (stato) => {
      if (stato === 'active') ricalcola();
    });
    return () => {
      clearInterval(id);
      sub.remove();
    };
  }, [attivo, durataSecondi, ricalcola]);

  const trascorso = durataSecondi - residuo;
  return {
    residuo,
    trascorso,
    scaduto: residuo <= 0,
    /** Avanzamento 0–1, comodo per la barra. */
    quota: durataSecondi === 0 ? 1 : Math.min(1, trascorso / durataSecondi),
  };
}
