import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, ViewStyle } from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  Path,
  Polygon,
  Rect,
  Defs,
  LinearGradient as SvgGradient,
  Stop,
} from 'react-native-svg';

export type MascotState = 'neutral' | 'celebrating' | 'studying' | 'peek';

interface Props {
  state?: MascotState;
  size?: number;
  /** Anima con un dondolio/rimbalzo continuo. */
  animated?: boolean;
  style?: ViewStyle;
}

/**
 * Giudo, la mascotte di Legul: un gufo-giurista.
 * Costruito con SVG inline in layer, cambia espressione in base allo stato:
 * - neutral: sguardo aperto e sereno (dashboard/statistiche)
 * - celebrating: occhi felici e ali alzate (streak/quiz superato)
 * - studying: occhiali e sguardo concentrato (materiale d'esame)
 * - peek: come neutral, pensato per sbucare da dietro un banner
 */
export function Mascot({ state = 'neutral', size = 120, animated = false, style }: Props) {
  const bob = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!animated) return;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(bob, {
          toValue: 1,
          duration: 1100,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(bob, {
          toValue: 0,
          duration: 1100,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [animated, bob]);

  const translateY = bob.interpolate({ inputRange: [0, 1], outputRange: [0, -6] });

  const celebrating = state === 'celebrating';
  const studying = state === 'studying';

  return (
    <Animated.View style={[{ width: size, height: size, transform: [{ translateY }] }, style]}>
      <Svg width={size} height={size} viewBox="0 0 120 120">
        <Defs>
          <SvgGradient id="body" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#4F7CF3" />
            <Stop offset="1" stopColor="#2D4FC7" />
          </SvgGradient>
          <SvgGradient id="belly" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#FFFFFF" />
            <Stop offset="1" stopColor="#EAF0FF" />
          </SvgGradient>
        </Defs>

        {/* Ombra a terra */}
        <Ellipse cx="60" cy="112" rx="30" ry="5" fill="#1B2A4A" opacity={0.12} />

        {/* Ali (dietro il corpo) */}
        <G>
          {/* ala sinistra */}
          <G rotation={celebrating ? -32 : 0} origin="34, 66">
            <Ellipse cx="26" cy="70" rx="11" ry="20" fill="#3B63D6" />
          </G>
          {/* ala destra */}
          <G rotation={celebrating ? 32 : 0} origin="86, 66">
            <Ellipse cx="94" cy="70" rx="11" ry="20" fill="#3B63D6" />
          </G>
        </G>

        {/* Ciuffi/orecchie */}
        <Polygon points="40,26 48,10 54,30" fill="#2D4FC7" />
        <Polygon points="80,26 72,10 66,30" fill="#2D4FC7" />

        {/* Corpo */}
        <Ellipse cx="60" cy="66" rx="36" ry="40" fill="url(#body)" />
        {/* Pancia */}
        <Ellipse cx="60" cy="74" rx="24" ry="28" fill="url(#belly)" />

        {/* Zampe */}
        <Path d="M48 104 q-6 4 -10 2 q6 4 12 1 Z" fill="#F5B316" />
        <Path d="M72 104 q6 4 10 2 q-6 4 -12 1 Z" fill="#F5B316" />

        {/* Collare da giudice (jabot) */}
        <Path d="M60 78 l-8 6 l8 5 l8 -5 Z" fill="#FFFFFF" opacity={0.9} />

        {/* Occhi: dischi bianchi */}
        <Circle cx="47" cy="58" r="15" fill="#FFFFFF" />
        <Circle cx="73" cy="58" r="15" fill="#FFFFFF" />

        {celebrating ? (
          <>
            {/* occhi felici (archi) */}
            <Path d="M39 58 q8 -10 16 0" stroke="#1B2A4A" strokeWidth={3.4} fill="none" strokeLinecap="round" />
            <Path d="M65 58 q8 -10 16 0" stroke="#1B2A4A" strokeWidth={3.4} fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            {/* iridi + pupille */}
            <Circle cx="47" cy="59" r="7.5" fill="#2A3550" />
            <Circle cx="73" cy="59" r="7.5" fill="#2A3550" />
            <Circle cx="49.5" cy="56.5" r="2.6" fill="#FFFFFF" />
            <Circle cx="75.5" cy="56.5" r="2.6" fill="#FFFFFF" />
          </>
        )}

        {/* Occhiali da studio */}
        {studying && (
          <G stroke="#2A3550" strokeWidth={2.6} fill="none">
            <Circle cx="47" cy="58" r="15" />
            <Circle cx="73" cy="58" r="15" />
            <Path d="M62 58 h-4" />
          </G>
        )}

        {/* Becco */}
        <Polygon points="60,66 54,72 66,72" fill="#F5B316" />
        {celebrating && <Path d="M56 72 q4 4 8 0" stroke="#C98A0E" strokeWidth={2} fill="none" strokeLinecap="round" />}

        {/* Tocco/cappello da laurea */}
        <G>
          <Polygon points="60,4 92,16 60,28 28,16" fill="#1B2A4A" />
          <Rect x="50" y="16" width="20" height="7" rx="2" fill="#233457" />
          <Path d="M88 17 v12" stroke="#F5B316" strokeWidth={2} strokeLinecap="round" />
          <Circle cx="88" cy="31" r="3" fill="#F5B316" />
        </G>

        {/* Libretto (stato studio) */}
        {studying && (
          <G>
            <Rect x="70" y="82" width="26" height="18" rx="3" fill="#F5B316" />
            <Rect x="73" y="85" width="20" height="12" rx="2" fill="#FFF7E2" />
            <Path d="M83 85 v12" stroke="#C98A0E" strokeWidth={1.4} />
          </G>
        )}

        {/* Scintille (stato festa) */}
        {celebrating && (
          <G fill="#F5B316">
            <Polygon points="18,34 20,40 26,42 20,44 18,50 16,44 10,42 16,40" />
            <Polygon points="102,30 104,35 109,37 104,39 102,44 100,39 95,37 100,35" />
          </G>
        )}
      </Svg>
    </Animated.View>
  );
}

/** Variante compatta che sbuca da dietro un elemento (solo testa e cappello). */
export function MascotPeek({ size = 84, style }: { size?: number; style?: ViewStyle }) {
  return (
    <View style={[{ width: size, height: size * 0.72, overflow: 'hidden' }, style]}>
      <Mascot state="celebrating" size={size} />
    </View>
  );
}
