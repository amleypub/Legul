import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface Props {
  /** Avanzamento da 0 a 1. */
  progresso: number;
  size?: number;
  spessore?: number;
  /** Estremi del gradiente dell'arco. */
  da?: string;
  a?: string;
  coloreTraccia?: string;
  children?: React.ReactNode;
}

/**
 * Anello di avanzamento con arco in gradiente, che si riempie con una
 * breve animazione quando il valore cambia.
 */
export function AnelloProgresso({
  progresso,
  size = 104,
  spessore = 11,
  da = '#FFC53D',
  a = '#F5842B',
  coloreTraccia = 'rgba(255,255,255,0.16)',
  children,
}: Props) {
  const raggio = (size - spessore) / 2;
  const circonferenza = 2 * Math.PI * raggio;
  const quota = Math.min(Math.max(progresso, 0), 1);

  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, {
      toValue: quota,
      duration: 900,
      easing: Easing.out(Easing.cubic),
      // strokeDashoffset non è una proprietà gestibile dal thread nativo.
      useNativeDriver: false,
    }).start();
  }, [quota, anim]);

  const offset = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [circonferenza, 0],
  });

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Defs>
          <SvgGradient id="anello" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={da} />
            <Stop offset="1" stopColor={a} />
          </SvgGradient>
        </Defs>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={raggio}
          stroke={coloreTraccia}
          strokeWidth={spessore}
          fill="none"
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={raggio}
          stroke="url(#anello)"
          strokeWidth={spessore}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circonferenza}
          strokeDashoffset={offset}
          // Parte da mezzogiorno invece che da destra.
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View style={styles.centro}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  centro: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/** Testo standard al centro dell'anello: valore grande e unità piccola. */
export function EtichettaAnello({ valore, unita }: { valore: string; unita: string }) {
  return (
    <>
      <Text style={etichetta.valore}>{valore}</Text>
      <Text style={etichetta.unita}>{unita}</Text>
    </>
  );
}

const etichetta = StyleSheet.create({
  valore: { color: '#FFFFFF', fontSize: 26, fontWeight: '900' },
  unita: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: -2,
  },
});
