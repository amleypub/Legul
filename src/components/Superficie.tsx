import React from 'react';
import { Platform, Pressable, StyleSheet, View, type ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { alone, alpha, molla, ombra, radius, SCALA_PRESSIONE, SFOCATURA } from '../theme';

type Tono = 'vetro' | 'forte' | 'interno' | 'piena';
type Rilievo = 'nessuno' | 'tenue' | 'media' | 'alta';

interface Props {
  children: React.ReactNode;
  tono?: Tono;
  rilievo?: Rilievo;
  raggio?: number;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  /** Tinta dell'alone quando la superficie è premuta o attiva. */
  glow?: string;
  /** Alone sempre acceso, per gli elementi selezionati. */
  attiva?: boolean;
  accessibilityLabel?: string;
}

const RIEMPIMENTO: Record<Tono, string> = {
  vetro: alpha.vetro,
  forte: alpha.vetroForte,
  interno: alpha.vetroInterno,
  piena: '#FFFFFF',
};

/**
 * La sfocatura vera costa, e su una lista lunga costa per ogni riga.
 * Si usa solo dove la superficie è grande e ferma; altrove il
 * riempimento traslucido da solo dà già il distacco, perché il fondale
 * sotto non è uniforme.
 */
const SFOCA: Record<Tono, boolean> = {
  vetro: true,
  forte: true,
  interno: false,
  piena: false,
};

/**
 * Superficie in vetro: il mattone dell'interfaccia.
 *
 * Sostituisce i vecchi blocchi con bordo inferiore spesso. Il distacco
 * dal fondo non viene più da uno scalino disegnato ma da tre cose che
 * agiscono insieme: un riempimento bianco non del tutto opaco, un filo
 * di bordo scuro a bassissima opacità e un'ombra ampia e morbida.
 *
 * Alla pressione l'elemento rimpicciolisce appena invece di scendere.
 * La differenza non è estetica: la traslazione verticale funzionava
 * perché c'era uno spessore sotto da schiacciare, e senza quello
 * sembrerebbe solo che l'elemento scivola.
 */
export function Superficie({
  children,
  tono = 'vetro',
  rilievo = 'media',
  raggio = radius.xl,
  onPress,
  disabled = false,
  style,
  contentStyle,
  glow,
  attiva = false,
  accessibilityLabel,
}: Props) {
  const scala = useSharedValue(1);
  const stileAnimato = useAnimatedStyle(() => ({ transform: [{ scale: scala.value }] }));

  const rilievoStile = rilievo === 'nessuno' ? null : ombra[rilievo];
  const aloneStile = attiva && glow ? alone(glow, 'tenue') : null;

  const corpo = (
    <View style={[styles.clip, { borderRadius: raggio }, contentStyle]}>
      {/*
        La sfocatura sta sotto al riempimento, non al posto suo: da sola
        renderebbe il fondo lattiginoso e illeggibile sotto al testo.
      */}
      {SFOCA[tono] && Platform.OS !== 'web' && (
        <BlurView intensity={SFOCATURA} tint="light" style={StyleSheet.absoluteFill} />
      )}
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: RIEMPIMENTO[tono], borderRadius: raggio },
        ]}
      />
      {/* Filo di luce in alto: è ciò che dà lo spessore al vetro. */}
      <View style={[styles.lume, { borderRadius: raggio }]} pointerEvents="none" />
      {children}
    </View>
  );

  const involucro = (
    <Animated.View
      style={[
        styles.base,
        { borderRadius: raggio, borderColor: attiva && glow ? glow + '40' : alpha.bordo },
        rilievoStile,
        aloneStile,
        disabled && styles.spento,
        style,
        stileAnimato,
      ]}
    >
      {corpo}
    </Animated.View>
  );

  if (!onPress) return involucro;

  return (
    <Pressable
      disabled={disabled}
      onPressIn={() => {
        scala.value = withSpring(SCALA_PRESSIONE, molla.tocco);
      }}
      onPressOut={() => {
        scala.value = withSpring(1, molla.tocco);
      }}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      {involucro}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'stretch',
    borderWidth: StyleSheet.hairlineWidth * 1.5,
  },
  clip: { overflow: 'hidden' },
  lume: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1,
    backgroundColor: alpha.lume,
  },
  spento: { opacity: 0.45 },
});
