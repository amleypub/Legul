import React, { useEffect, useRef } from 'react';
import { Animated, Easing, type ViewStyle } from 'react-native';
import Svg, {
  Circle,
  Defs,
  G,
  Line,
  LinearGradient as SvgGradient,
  Path,
  RadialGradient,
  Stop,
} from 'react-native-svg';
import { colors } from '../theme';

/**
 * Il segno dell'app: un prisma rifratto.
 *
 * Sostituisce la mascotte. Un personaggio cartoon costruisce simpatia, e
 * la simpatia è ciò che si vende a chi sceglie fra le app gratuite: chi
 * paga molto per uno strumento professionale legge quel registro come
 * una promessa di leggerezza, cioè esattamente il contrario di quello che
 * sta cercando.
 *
 * Al suo posto una geometria astratta: tre facce di un solido visto in
 * assonometria, attraversate da una maglia sottile e circondate da un
 * anello di tacche. Non raffigura nulla — niente bilance, niente
 * martelletti, niente colonne — perché la figura letterale è il modo più
 * rapido di sembrare uno studio legale di provincia. Dice invece
 * struttura, stratificazione e precisione, che è ciò che il diritto è.
 *
 * Gli stati sono ereditati dalle chiamate esistenti e qui diventano
 * gradazioni di intensità, non espressioni facciali:
 *
 * - `neutral` — il solido a riposo
 * - `studying` — maglia più fitta: c'è del lavoro da fare
 * - `celebrating` — spigoli accesi in champagne e alone pieno
 * - `peek` — come neutral, per gli inserimenti dentro un banner
 */
export type StatoMonolite = 'neutral' | 'celebrating' | 'studying' | 'peek';

interface Props {
  state?: StatoMonolite;
  size?: number;
  /** Respiro lentissimo dell'alone. Solo dove l'elemento è protagonista. */
  animated?: boolean;
  style?: ViewStyle;
}

/* Vertici del solido, calcolati una volta: a ogni render sarebbero
   ottanta moltiplicazioni per niente. */
const CX = 60;
const CY = 62;
const R = 34; // semi-larghezza
const H = 20; // semi-altezza della faccia superiore
const D = 26; // profondità dei fianchi

const P_TOP = `${CX},${CY - H - D / 2}`;
const P_RIGHT = `${CX + R},${CY - D / 2}`;
const P_BOTTOM = `${CX},${CY + H - D / 2}`;
const P_LEFT = `${CX - R},${CY - D / 2}`;

const FACCIA_SUP = `M ${P_TOP} L ${P_RIGHT} L ${P_BOTTOM} L ${P_LEFT} Z`;
const FACCIA_DX = `M ${P_RIGHT} L ${CX + R},${CY - D / 2 + D} L ${CX},${CY + H + D / 2} L ${P_BOTTOM} Z`;
const FACCIA_SX = `M ${P_LEFT} L ${CX - R},${CY - D / 2 + D} L ${CX},${CY + H + D / 2} L ${P_BOTTOM} Z`;

/** Tacche dell'anello esterno: dodici, come le ore. */
const TACCHE = Array.from({ length: 12 }, (_, i) => {
  const a = (i * Math.PI * 2) / 12 - Math.PI / 2;
  const r1 = 52;
  const r2 = i % 3 === 0 ? 45 : 48.5;
  return {
    x1: CX + Math.cos(a) * r1,
    y1: CY + Math.sin(a) * r1,
    x2: CX + Math.cos(a) * r2,
    y2: CY + Math.sin(a) * r2,
    forte: i % 3 === 0,
  };
});

export function Monolite({ state = 'neutral', size = 120, animated = false, style }: Props) {
  const respiro = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!animated) return;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(respiro, {
          toValue: 1,
          duration: 2600,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(respiro, {
          toValue: 0,
          duration: 2600,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [animated, respiro]);

  /* Il movimento è sull'opacità e su una scala minima: la traslazione
     verticale era il dondolio della mascotte, e qui sembrerebbe che il
     solido galleggi invece di stare fermo dove deve stare. */
  const opacita = respiro.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1] });
  const scala = respiro.interpolate({ inputRange: [0, 1], outputRange: [1, 1.015] });

  const acceso = state === 'celebrating';
  const denso = state === 'studying';
  const spigolo = acceso ? colors.primaryLight : colors.titanioChiaro;
  const maglia = denso ? 5 : 3;

  return (
    <Animated.View
      style={[{ width: size, height: size, opacity: opacita, transform: [{ scale: scala }] }, style]}
    >
      <Svg width={size} height={size} viewBox="0 0 120 120">
        <Defs>
          <RadialGradient id="mono-alone" cx="50%" cy="50%" r="50%">
            <Stop offset="0" stopColor={acceso ? colors.primary : '#6E86B8'} stopOpacity="0.34" />
            <Stop offset="1" stopColor={acceso ? colors.primary : '#6E86B8'} stopOpacity="0" />
          </RadialGradient>
          <SvgGradient id="mono-sup" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0.22" />
            <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0.06" />
          </SvgGradient>
          <SvgGradient id="mono-dx" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0.11" />
            <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0.02" />
          </SvgGradient>
          <SvgGradient id="mono-sx" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0.05" />
            <Stop offset="1" stopColor="#000000" stopOpacity="0.10" />
          </SvgGradient>
        </Defs>

        {/* Alone ambientale: è ciò che stacca il solido dal fondo scuro. */}
        <Circle cx={CX} cy={CY} r={58} fill="url(#mono-alone)" />

        {/* Anello di tacche: dice misura, e dà al segno una scala. */}
        <G>
          <Circle
            cx={CX}
            cy={CY}
            r={52}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={0.75}
          />
          {TACCHE.map((t, i) => (
            <Line
              key={i}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke={t.forte ? spigolo : 'rgba(255,255,255,0.22)'}
              strokeOpacity={t.forte ? 0.55 : 1}
              strokeWidth={t.forte ? 1.1 : 0.7}
              strokeLinecap="round"
            />
          ))}
        </G>

        {/* Le tre facce. L'ordine conta: i fianchi sotto, il piano sopra. */}
        <Path d={FACCIA_SX} fill="url(#mono-sx)" />
        <Path d={FACCIA_DX} fill="url(#mono-dx)" />
        <Path d={FACCIA_SUP} fill="url(#mono-sup)" />

        {/* Maglia sulla faccia superiore: la stratificazione del solido. */}
        <G stroke="rgba(255,255,255,0.16)" strokeWidth={0.6}>
          {Array.from({ length: maglia }, (_, i) => {
            const t = (i + 1) / (maglia + 1);
            return (
              <React.Fragment key={i}>
                <Line
                  x1={CX - R + R * t}
                  y1={CY - D / 2 - H * (1 - t)}
                  x2={CX + R * t}
                  y2={CY - D / 2 + H * t}
                />
                <Line
                  x1={CX - R * t}
                  y1={CY - D / 2 + H * t}
                  x2={CX + R - R * t}
                  y2={CY - D / 2 - H * (1 - t)}
                />
              </React.Fragment>
            );
          })}
        </G>

        {/* Spigoli. Il perimetro superiore è la linea che prende la luce. */}
        <Path
          d={FACCIA_SUP}
          fill="none"
          stroke={spigolo}
          strokeOpacity={acceso ? 0.95 : 0.55}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
        <G
          stroke={spigolo}
          strokeOpacity={acceso ? 0.5 : 0.24}
          strokeWidth={1}
          strokeLinecap="round"
        >
          <Line x1={CX - R} y1={CY - D / 2} x2={CX - R} y2={CY - D / 2 + D} />
          <Line x1={CX + R} y1={CY - D / 2} x2={CX + R} y2={CY - D / 2 + D} />
          <Line x1={CX} y1={CY + H - D / 2} x2={CX} y2={CY + H + D / 2} />
        </G>

        {/* Il punto di fuga: un solo pixel acceso al centro del piano. */}
        <Circle
          cx={CX}
          cy={CY - D / 2}
          r={acceso ? 2.4 : 1.8}
          fill={acceso ? colors.primaryLight : colors.titanioChiaro}
          fillOpacity={acceso ? 1 : 0.7}
        />
      </Svg>
    </Animated.View>
  );
}
