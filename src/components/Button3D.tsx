import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import * as Haptics from 'expo-haptics';
import { radius } from '../theme';

interface Props {
  label: string;
  onPress: () => void;
  /** Colore della faccia del pulsante. */
  color: string;
  /** Colore del bordo inferiore che dà l'effetto 3D. */
  edgeColor: string;
  textColor?: string;
  disabled?: boolean;
  style?: ViewStyle;
}

const EDGE = 5;

/**
 * Pulsante "chunky" in stile Duolingo: faccia rialzata su un bordo scuro,
 * che si abbassa con una molla alla pressione, con feedback aptico.
 */
export function Button3D({
  label,
  onPress,
  color,
  edgeColor,
  textColor = '#FFFFFF',
  disabled = false,
  style,
}: Props) {
  const translateY = useRef(new Animated.Value(0)).current;

  const press = (down: boolean) => {
    Animated.spring(translateY, {
      toValue: down ? EDGE : 0,
      speed: 40,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      disabled={disabled}
      onPressIn={() => {
        press(true);
        Haptics.selectionAsync().catch(() => {});
      }}
      onPressOut={() => press(false)}
      onPress={onPress}
      style={[styles.wrap, disabled && styles.disabled, style]}
    >
      <View style={[styles.edge, { backgroundColor: edgeColor }]} />
      <Animated.View
        style={[styles.face, { backgroundColor: color, transform: [{ translateY }] }]}
      >
        <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignSelf: 'stretch',
  },
  disabled: {
    opacity: 0.4,
  },
  edge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE,
    bottom: 0,
    borderRadius: radius.md + 2,
  },
  face: {
    borderRadius: radius.md + 2,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: EDGE,
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
