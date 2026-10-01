import React, { useEffect, useId } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

/*
  Luce colorata che respira dietro il logo.

  Le tinte sono quelle del gradiente del marchio, campionate dal disegno
  originale e schiarite: il blu notte della L, il malva del centro, il
  pesca della u. Così il fondo dell'intro sembra la stessa luce che
  attraversa la parola, non una decorazione accostata.

  Ogni bolla è un gradiente radiale che sfuma fino a zero, non un disco
  sfocato: la sfocatura vera costa a ogni fotogramma, il gradiente si
  disegna una volta e poi si sposta soltanto. Le bolle derivano su
  traiettorie diverse, con periodi che non si dividono fra loro, così il
  movimento non si ripete mai uguale e non si legge come un'animazione
  in loop.
*/

interface Bolla {
  colore: string;
  /** Posizione e diametro in frazioni della larghezza del contenitore. */
  x: number;
  y: number;
  diametro: number;
  opacita: number;
  /** Escursione della deriva, in punti. */
  deriva: [number, number];
  periodo: number;
}

/*
  Il blu è più chiaro di quello della L: un blu notte steso su carta
  calda diventa grigio, e la schermata sembra velata invece che
  illuminata. Come luce funziona un pervinca.
*/
const BOLLE: Bolla[] = [
  { colore: '#7F93CC', x: -0.3, y: -0.02, diametro: 1.1, opacita: 0.3, deriva: [34, 22], periodo: 9100 },
  { colore: '#B392B0', x: 0.34, y: 0.06, diametro: 1.0, opacita: 0.34, deriva: [-28, 26], periodo: 11300 },
  { colore: '#F0B8A2', x: 0.02, y: 0.3, diametro: 1.04, opacita: 0.42, deriva: [26, -20], periodo: 7900 },
];

/**
 * Come si spegne una bolla dal centro al bordo: una campana, non una
 * retta. Con una discesa lineare il punto in cui l'opacità tocca lo zero
 * fa angolo, e l'occhio lo vede come il bordo di un disco; così invece
 * arriva a zero quasi in piano e il bordo sparisce.
 */
const SFUMATURA: [number, number][] = [
  [0, 1],
  [0.2, 0.9],
  [0.4, 0.64],
  [0.6, 0.34],
  [0.8, 0.11],
  [0.92, 0.03],
  [1, 0],
];

function BollaDiLuce({ bolla, larghezza, prefisso }: { bolla: Bolla; larghezza: number; prefisso: string }) {
  const ridotto = useReducedMotion();
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const respiro = useSharedValue(0);

  useEffect(() => {
    if (ridotto) return;
    const morbida = Easing.inOut(Easing.sin);
    x.value = withRepeat(withTiming(1, { duration: bolla.periodo, easing: morbida }), -1, true);
    y.value = withRepeat(withTiming(1, { duration: bolla.periodo * 1.37, easing: morbida }), -1, true);
    respiro.value = withRepeat(withTiming(1, { duration: bolla.periodo * 0.83, easing: morbida }), -1, true);
    return () => {
      cancelAnimation(x);
      cancelAnimation(y);
      cancelAnimation(respiro);
    };
  }, [ridotto, bolla.periodo, x, y, respiro]);

  const stile = useAnimatedStyle(() => ({
    transform: [
      { translateX: (x.value * 2 - 1) * bolla.deriva[0] },
      { translateY: (y.value * 2 - 1) * bolla.deriva[1] },
      { scale: 0.94 + respiro.value * 0.12 },
    ],
  }));

  const d = bolla.diametro * larghezza;
  return (
    <Animated.View
      style={[
        styles.bolla,
        { left: bolla.x * larghezza, top: bolla.y * larghezza, width: d, height: d },
        stile,
      ]}
    >
      <Luce colore={bolla.colore} opacita={bolla.opacita} diametro={d} id={`${prefisso}-${bolla.colore.slice(1)}`} />
    </Animated.View>
  );
}

/**
 * Una luce ferma: un disco che sfuma a campana fino a zero.
 *
 * È il mattone dell'aurora e degli aloni del fondale. `id` serve solo a
 * chi ne mette più d'una nello stesso componente; altrimenti se ne
 * ricava uno unico da sé.
 */
export function Luce({
  colore,
  opacita,
  diametro,
  id,
  style,
}: {
  colore: string;
  opacita: number;
  diametro: number;
  id?: string;
  style?: ViewStyle;
}) {
  // Gli id dei gradienti devono essere unici nella pagina, e sul web i due
  // punti che React mette negli id rompono il riferimento `url(#…)`.
  const proprio = 'luce' + useId().replace(/[^a-zA-Z0-9]/g, '');
  const ref = id ?? proprio;
  return (
    <Svg width={diametro} height={diametro} style={style} pointerEvents="none">
      <Defs>
        <RadialGradient id={ref} cx="50%" cy="50%" r="50%">
          {SFUMATURA.map(([offset, quota]) => (
            <Stop key={offset} offset={offset} stopColor={colore} stopOpacity={opacita * quota} />
          ))}
        </RadialGradient>
      </Defs>
      <Rect x={0} y={0} width={diametro} height={diametro} fill={`url(#${ref})`} />
    </Svg>
  );
}

/**
 * L'aurora: tre luci nei colori del marchio che derivano lentamente.
 *
 * Il contenitore va posizionato da chi la usa; le bolle si dispongono in
 * proporzione alla sua larghezza e possono uscirne, perché una luce
 * tagliata di netto dal bordo smetterebbe di sembrare luce.
 */
export function Aurora({ larghezza, style }: { larghezza: number; style?: ViewStyle }) {
  const prefisso = 'aurora' + useId().replace(/[^a-zA-Z0-9]/g, '');
  return (
    <View style={[styles.contenitore, { width: larghezza, height: larghezza * 1.3 }, style]} pointerEvents="none">
      {BOLLE.map((b) => (
        <BollaDiLuce key={b.colore} bolla={b} larghezza={larghezza} prefisso={prefisso} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  contenitore: { position: 'absolute' },
  bolla: { position: 'absolute' },
});
