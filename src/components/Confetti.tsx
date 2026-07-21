import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';

const COLORS = ['#F5B316', '#4F7CF3', '#38C172', '#EF4E5B', '#9B6BFF', '#2FC0B3', '#FFFFFF'];

interface Piece {
  left: number;
  size: number;
  color: string;
  delay: number;
  drift: number;
  duration: number;
  spins: number;
  round: boolean;
}

function makePieces(count: number, width: number): Piece[] {
  const pieces: Piece[] = [];
  for (let i = 0; i < count; i++) {
    pieces.push({
      left: Math.random() * width,
      size: 7 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 400,
      drift: (Math.random() - 0.5) * 140,
      duration: 1800 + Math.random() * 1400,
      spins: 2 + Math.floor(Math.random() * 4),
      round: Math.random() > 0.6,
    });
  }
  return pieces;
}

function ConfettiPiece({ piece, fall }: { piece: Piece; fall: number }) {
  const t = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(piece.delay),
      Animated.timing(t, {
        toValue: 1,
        duration: piece.duration,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  }, [t, piece]);

  const translateY = t.interpolate({ inputRange: [0, 1], outputRange: [-40, fall] });
  const translateX = t.interpolate({ inputRange: [0, 1], outputRange: [0, piece.drift] });
  const rotate = t.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `${piece.spins * 360}deg`],
  });
  // scaleX oscillante = falda che si "gira" nello spazio (effetto 3D)
  const scaleX = t.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 0.2, 1, 0.2, 1],
  });
  const opacity = t.interpolate({ inputRange: [0, 0.85, 1], outputRange: [1, 1, 0] });

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: 'absolute',
        top: 0,
        left: piece.left,
        width: piece.size,
        height: piece.size,
        borderRadius: piece.round ? piece.size / 2 : 2,
        backgroundColor: piece.color,
        opacity,
        transform: [{ translateY }, { translateX }, { rotate }, { scaleX }],
      }}
    />
  );
}

/**
 * Pioggia di coriandoli con "tumbling" pseudo-3D (rotazione + scaleX
 * oscillante). Da montare sopra una schermata di vittoria.
 */
export function Confetti({ count = 80, run = true }: { count?: number; run?: boolean }) {
  const { width, height } = Dimensions.get('window');
  const pieces = useMemo(() => makePieces(count, width), [count, width]);
  if (!run) return null;
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {pieces.map((p, i) => (
        <ConfettiPiece key={i} piece={p} fall={height + 60} />
      ))}
    </View>
  );
}
