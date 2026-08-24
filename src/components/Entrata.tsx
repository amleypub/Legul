import React, { useEffect } from 'react';
import { type ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { molla } from '../theme';

interface Props {
  children: React.ReactNode;
  /** Ritardo in millisecondi: serve a scaglionare gli elementi di una lista. */
  ritardo?: number;
  /** Spostamento verticale iniziale. Negativo per far scendere dall'alto. */
  da?: number;
  style?: ViewStyle;
}

/**
 * Entrata in scena di un elemento: sale di poco e si accende.
 *
 * Lo scaglionamento serve a dare direzione alla lettura — l'occhio segue
 * l'ordine in cui le cose compaiono — ma va tenuto corto. Oltre una
 * cinquantina di millisecondi fra un elemento e il successivo la
 * schermata sembra caricare lentamente invece che animarsi, e chi apre
 * l'app venti volte al giorno se ne accorge alla terza.
 *
 * L'opacità usa un `timing` e la posizione una molla: una molla
 * sull'opacità produce un lampeggio quando supera l'uno e torna
 * indietro.
 */
export function Entrata({ children, ritardo = 0, da = 14, style }: Props) {
  const apparizione = useSharedValue(0);
  const scorrimento = useSharedValue(da);

  useEffect(() => {
    apparizione.value = withDelay(ritardo, withTiming(1, { duration: 260 }));
    scorrimento.value = withDelay(ritardo, withSpring(0, molla.entrata));
  }, [apparizione, scorrimento, ritardo]);

  const stile = useAnimatedStyle(() => ({
    opacity: apparizione.value,
    transform: [{ translateY: scorrimento.value }],
  }));

  return <Animated.View style={[style, stile]}>{children}</Animated.View>;
}

/** Ritardo per il numero d'ordine di un elemento, con un tetto. */
export function scaglione(indice: number, passo = 45, massimo = 320): number {
  return Math.min(indice * passo, massimo);
}
