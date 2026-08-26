import React from 'react';
import { Pressable, StyleSheet, View, type ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import {
  alone,
  alpha,
  BORDO_VETRO,
  molla,
  ombra,
  radius,
  SCALA_PRESSIONE,
  SFOCATURA,
} from '../theme';

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
  /**
   * Riempimento colorato al posto del vetro, per le superfici che devono
   * segnalare qualcosa con la tinta — un avviso, una nota.
   *
   * Serve una prop apposta perché il riempimento del tono è disegnato in
   * una vista sovrapposta: un colore messo in `contentStyle` finirebbe
   * sotto di essa e non si vedrebbe mai.
   */
  tinta?: string;
  accessibilityLabel?: string;
}

const RIEMPIMENTO: Record<Tono, string> = {
  vetro: alpha.vetro,
  forte: alpha.vetroForte,
  interno: alpha.vetroInterno,
  piena: '#141922',
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
 * Su fondo obsidiana il distacco viene da quattro cose che agiscono
 * insieme, e nessuna delle quattro da sola basterebbe:
 *
 * 1. una sfocatura vera dietro la lastra, che deforma ciò che passa sotto;
 * 2. un riempimento bianco al quattro-sette per cento, non di più: oltre
 *    il dieci il vetro diventa lattiginoso e il testo perde contrasto;
 * 3. un bordo **in gradiente**, chiaro in alto e quasi nullo in basso —
 *    è la differenza fra lo spigolo di una lastra e la cornice di un
 *    rettangolo, ed è il dettaglio che fa sembrare l'oggetto tagliato;
 * 4. un'ombra profonda sotto, che è l'unica cosa che su fondo scuro
 *    dice «questo sta davanti».
 *
 * Alla pressione l'elemento rimpicciolisce di pochissimo. Il rimbalzo
 * generoso apparteneva al linguaggio precedente: qui il tocco deve
 * sembrare la risposta di un oggetto rigido, non di uno morbido.
 */
export function Superficie({
  children,
  tono = 'vetro',
  rilievo = 'media',
  raggio = radius.lg,
  onPress,
  disabled = false,
  style,
  contentStyle,
  glow,
  attiva = false,
  tinta,
  accessibilityLabel,
}: Props) {
  const scala = useSharedValue(1);
  const stileAnimato = useAnimatedStyle(() => ({ transform: [{ scale: scala.value }] }));

  const rilievoStile = rilievo === 'nessuno' ? null : ombra[rilievo];
  const aloneStile = attiva && glow ? alone(glow, 'tenue') : null;

  const raggioInterno = Math.max(0, raggio - 1);

  const corpo = (
    <View style={[styles.clip, { borderRadius: raggioInterno }, contentStyle]}>
      {/*
        La sfocatura sta sotto al riempimento, non al posto suo: da sola
        renderebbe il fondo illeggibile sotto al testo. Sul web `expo-blur`
        si traduce in `backdrop-filter`, che è esattamente ciò che serve.
      */}
      {!tinta && SFOCA[tono] && (
        <BlurView intensity={SFOCATURA} tint="dark" style={StyleSheet.absoluteFill} />
      )}
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: tinta ?? RIEMPIMENTO[tono], borderRadius: raggioInterno },
        ]}
      />
      {/* Filo di luce in alto e filo d'ombra in basso: insieme danno alla
          lastra uno spessore che il solo bordo non produce. */}
      <View style={[styles.lume, { borderRadius: raggioInterno }]} pointerEvents="none" />
      <View style={styles.fondo} pointerEvents="none" />
      {children}
    </View>
  );

  const involucro = (
    <Animated.View
      style={[
        styles.base,
        { borderRadius: raggio },
        rilievoStile,
        aloneStile,
        disabled && styles.spento,
        style,
        stileAnimato,
      ]}
    >
      {/*
        Il bordo è un gradiente e non un `borderColor`, perché un bordo di
        colore uniforme fa una cornice: qui serve una linea quasi bianca
        dove la luce batte, che sparisce dal lato opposto.

        Si ottiene con un anello vero: il gradiente riempie tutta la
        superficie e il contenuto ci sta sopra rientrato di un pixel, così
        resta scoperta solo la cornice. Il trucco alternativo — gradiente
        con `borderWidth` e riempimento trasparente — non funziona, perché
        il gradiente colora comunque anche l'area interna.
      */}
      <LinearGradient
        colors={attiva && glow ? [glow + 'AA', glow + '11'] : [...BORDO_VETRO]}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        style={[StyleSheet.absoluteFill, { borderRadius: raggio }]}
        pointerEvents="none"
      />
      <View style={[styles.anello, { borderRadius: Math.max(0, raggio - 1) }]}>{corpo}</View>
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
  base: { alignSelf: 'stretch' },
  clip: { overflow: 'hidden' },
  /* Un pixel di margine su ogni lato: è ciò che lascia scoperto
     l'anello di gradiente sottostante e lo trasforma in un bordo. */
  anello: { margin: 1, overflow: 'hidden' },
  lume: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1,
    backgroundColor: alpha.lume,
  },
  fondo: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: alpha.fondo,
  },
  spento: { opacity: 0.4 },
});
