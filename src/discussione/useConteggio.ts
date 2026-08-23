import { useCallback, useRef, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { contaDiscussione, discussioneDisponibile } from './api';

/**
 * Quanti messaggi ha un argomento.
 *
 * Si ricarica a ogni ritorno sulla schermata (`useFocusEffect`): senza,
 * chi scrive un commento e torna indietro vedrebbe il numero fermo a
 * prima e penserebbe di non aver pubblicato nulla.
 *
 * `null` finché non si sa: il pulsante mostra allora solo l'etichetta,
 * senza sbattere in faccia uno zero che potrebbe essere falso.
 */
export function useConteggioDiscussione(argomento: string): number | null {
  const [conteggio, setConteggio] = useState<number | null>(null);
  const vivo = useRef(true);

  useFocusEffect(
    useCallback(() => {
      vivo.current = true;
      if (discussioneDisponibile) {
        contaDiscussione(argomento)
          .then((n) => {
            if (vivo.current) setConteggio(n);
          })
          .catch(() => {
            // Il conteggio è un di più: se non arriva, il pulsante resta
            // senza numero e tutto il resto continua a funzionare.
          });
      }
      return () => {
        vivo.current = false;
      };
    }, [argomento])
  );

  return conteggio;
}
