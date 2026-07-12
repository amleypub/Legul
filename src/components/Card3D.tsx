import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { EDGE_3D, radius } from '../theme';

interface Props {
  children: React.ReactNode;
  /** Colore della faccia (default bianco). */
  color?: string;
  /** Colore del bordo 3D inferiore. */
  edgeColor: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  radiusSize?: number;
  edge?: number;
}

/**
 * Card "blocco di plastica" stile Duolingo: una faccia rialzata su un
 * bordo inferiore più scuro. Se `onPress` è definito, alla pressione la
 * faccia scende (translateY) riducendo il bordo, con effetto tattile.
 */
export function Card3D({
  children,
  color = '#FFFFFF',
  edgeColor,
  onPress,
  disabled = false,
  style,
  contentStyle,
  radiusSize = radius.xl,
  edge = EDGE_3D,
}: Props) {
  const translateY = useRef(new Animated.Value(0)).current;

  const animate = (down: boolean) =>
    Animated.spring(translateY, {
      toValue: down ? edge : 0,
      speed: 40,
      bounciness: 0,
      useNativeDriver: true,
    }).start();

  const face = (
    <Animated.View
      style={[
        styles.face,
        { backgroundColor: color, borderRadius: radiusSize, transform: [{ translateY }] },
        contentStyle,
      ]}
    >
      {children}
    </Animated.View>
  );

  const inner = (
    <View style={[styles.wrap, { paddingBottom: edge }, disabled && styles.disabled, style]}>
      <View
        style={[
          styles.edge,
          { backgroundColor: edgeColor, borderRadius: radiusSize, top: edge },
        ]}
      />
      {face}
    </View>
  );

  if (!onPress) return inner;

  return (
    <Pressable
      disabled={disabled}
      onPressIn={() => animate(true)}
      onPressOut={() => animate(false)}
      onPress={onPress}
    >
      {inner}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { alignSelf: 'stretch' },
  disabled: { opacity: 0.5 },
  edge: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  face: {
    overflow: 'hidden',
  },
});
