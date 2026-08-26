import React from 'react';
import { Pressable, StyleSheet, Text, View, type ViewStyle } from 'react-native';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Icona, type NomeIcona } from './Icona';
import { alone, alpha, colors, molla, ombra, radius, SCALA_PRESSIONE, type as tipo } from '../theme';

export type VarianteBottone = 'accento' | 'scuro' | 'chiaro' | 'fantasma';

interface Props {
  label: string;
  onPress: () => void;
  variante?: VarianteBottone;
  /** Colori del gradiente, per i casi in cui il bottone segue una materia. */
  gradiente?: [string, string];
  /** Tinta dell'alone: se assente si ricava dalla variante. */
  glow?: string;
  /**
   * Colore del testo. Con un `gradiente` esplicito il valore predefinito
   * diventa il bianco: i gradienti passati a mano in quest'app sono
   * tinte di materia, sature, dove il testo scuro della variante
   * «accento» sparirebbe.
   */
  testo?: string;
  icona?: NomeIcona;
  disabled?: boolean;
  style?: ViewStyle;
  compatto?: boolean;
}

/**
 * Le quattro varianti, in ordine di autorità.
 *
 * `accento` è champagne su testo obsidiana ed è l'unica cosa dell'app
 * che porta quel colore: se comparisse anche altrove smetterebbe di
 * significare «qui si agisce». Le altre tre sono vetro a densità
 * decrescente, e la loro gerarchia si legge dal bordo, non dal
 * riempimento — su fondo scuro un riempimento più chiaro urla, un bordo
 * più chiaro no.
 */
const VARIANTI: Record<
  VarianteBottone,
  { gradiente: [string, string]; testo: string; glow: string | null; bordo: string | null }
> = {
  accento: {
    /* Champagne chiaro → champagne. Qui c'era `primaryLight`, che dopo
       la separazione fra superficie e accento è diventato ardesia
       grigia: il bottone primario partiva grigio e finiva oro. */
    gradiente: [colors.accentChiaro, colors.accent],
    testo: '#0A0C10',
    glow: colors.accent,
    bordo: null,
  },
  scuro: {
    gradiente: ['rgba(255,255,255,0.13)', 'rgba(255,255,255,0.05)'],
    testo: colors.text,
    glow: null,
    bordo: alpha.bordoMarcato,
  },
  chiaro: {
    gradiente: ['rgba(255,255,255,0.09)', 'rgba(255,255,255,0.03)'],
    testo: colors.text,
    glow: null,
    bordo: alpha.bordo,
  },
  fantasma: {
    gradiente: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'],
    testo: colors.textMuted,
    glow: null,
    bordo: alpha.bordo,
  },
};

/**
 * Bottone dell'app.
 *
 * Al posto del blocco con lo scalino sotto c'è un gradiente con un alone
 * della propria tinta: l'elemento sembra tingere l'aria intorno a sé,
 * che è l'unico modo di rendere un bagliore su fondo chiaro senza che
 * diventi una sbavatura. Alla pressione l'alone si spegne insieme alla
 * scala, così il feedback è doppio ma coerente — l'oggetto si allontana.
 */
export function Bottone({
  label,
  onPress,
  variante = 'accento',
  gradiente,
  glow,
  testo,
  icona,
  disabled = false,
  style,
  compatto = false,
}: Props) {
  const v = VARIANTI[variante];
  const colori = gradiente ?? v.gradiente;
  const tintaAlone = glow ?? v.glow;
  const tintaTesto = testo ?? (gradiente ? '#FFFFFF' : v.testo);

  const premuto = useSharedValue(0);
  const stileAnimato = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - premuto.value * (1 - SCALA_PRESSIONE) }],
    shadowOpacity: tintaAlone ? 0.5 * (1 - premuto.value) : 0,
  }));

  return (
    <Pressable
      disabled={disabled}
      onPressIn={() => {
        premuto.value = withSpring(1, molla.tocco);
        // Il colpetto va sulla pressione e non sul rilascio: è lì che il
        // dito si aspetta la risposta, e sul rilascio arriverebbe insieme
        // al cambio di schermata, dove si perde.
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
      }}
      onPressOut={() => {
        premuto.value = withSpring(0, molla.tocco);
      }}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={style}
    >
      <Animated.View
        style={[
          styles.involucro,
          tintaAlone ? alone(tintaAlone) : ombra.tenue,
          disabled && styles.spento,
          stileAnimato,
        ]}
      >
        <LinearGradient
          colors={colori}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[
            styles.corpo,
            compatto && styles.corpoCompatto,
            v.bordo ? { borderWidth: StyleSheet.hairlineWidth * 1.5, borderColor: v.bordo } : null,
          ]}
        >
          {/* Riflesso in alto: dà al gradiente lo spessore di un oggetto. */}
          <View style={styles.riflesso} pointerEvents="none" />
          {!!icona && <Icona nome={icona} size={compatto ? 16 : 18} color={tintaTesto} />}
          <Text style={[styles.testo, compatto && styles.testoCompatto, { color: tintaTesto }]}>
            {label}
          </Text>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  involucro: { borderRadius: radius.lg, alignSelf: 'stretch' },
  corpo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: radius.lg,
    paddingVertical: 16,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  corpoCompatto: { paddingVertical: 11, paddingHorizontal: 14, borderRadius: radius.md },
  riflesso: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '45%',
    backgroundColor: 'rgba(255,255,255,0.10)',
  },
  testo: { ...tipo.scheda, fontSize: 15, fontWeight: '600', letterSpacing: -0.1 },
  testoCompatto: { fontSize: 14 },
  spento: { opacity: 0.45 },
});
