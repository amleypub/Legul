import React, { useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Icona } from '../components/Icona';
import { useGamification } from '../gamification/GamificationContext';
import { Bottone } from '../components/Bottone';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, radius, spacing, SCALA_PRESSIONE } from '../theme';

const VANTAGGI = [
  'Unità Avanzato ed Eccellenza per tutte le materie',
  'Migliaia di domande con spiegazioni e riferimenti normativi',
  'Il percorso completo per arrivare pronto all’esame',
  'Sostieni lo sviluppo continuo di Legul',
];

type Piano = 'mensile' | 'annuale';

/** Card di un piano: blocco 3D che si abbassa quando lo scegli. */
function Piano({
  nome,
  prezzo,
  dettaglio,
  etichetta,
  attivo,
  onPress,
}: {
  nome: string;
  prezzo: string;
  dettaglio: string;
  etichetta?: string;
  attivo: boolean;
  onPress: () => void;
}) {
  const premuto = useRef(new Animated.Value(0)).current;
  const giu = (down: boolean) =>
    Animated.spring(premuto, {
      toValue: down ? 1 : 0,
      speed: 40,
      bounciness: 0,
      useNativeDriver: true,
    }).start();

  return (
    <Pressable style={styles.pianoPress} onPressIn={() => giu(true)} onPressOut={() => giu(false)} onPress={onPress}>
      <View style={styles.pianoWrap}>
        <Animated.View
          style={[
            styles.piano,
            attivo && styles.pianoAttivo,
            { transform: [
                {
                  scale: premuto.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, SCALA_PRESSIONE],
                  }),
                },
              ] },
          ]}
        >
          {etichetta ? (
            <View style={[styles.pianoBadge, !attivo && styles.pianoBadgeSpento]}>
              <Text style={[styles.pianoBadgeTesto, !attivo && styles.pianoBadgeTestoSpento]}>
                {etichetta}
              </Text>
            </View>
          ) : (
            <View style={styles.pianoBadgeVuoto} />
          )}
          <Text style={styles.pianoNome}>{nome}</Text>
          <Text style={styles.pianoPrezzo}>{prezzo}</Text>
          <Text style={styles.pianoDettaglio}>{dettaglio}</Text>
          {attivo && (
            <View style={styles.pianoSpunta}>
              <Icona nome="checkmark" size={15} color={colors.primary} />
            </View>
          )}
        </Animated.View>
      </View>
    </Pressable>
  );
}

export default function PaywallScreen({ navigation }: RootStackScreenProps<'Paywall'>) {
  const { attivaPremium } = useGamification();
  const [piano, setPiano] = useState<Piano>('annuale');

  return (
    <LinearGradient colors={['#22314F', '#101728']} style={styles.gradient}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <ScrollView contentContainerStyle={styles.content}>
          <Pressable onPress={() => navigation.goBack()} hitSlop={12} style={styles.chiudi}>
            <Icona nome="close" size={28} color="rgba(255,255,255,0.7)" />
          </Pressable>

          <View style={styles.coronaBubble}>
            <MaterialCommunityIcons name="crown" size={44} color={colors.primary} />
          </View>
          <Text style={styles.titolo}>Legul Premium</Text>
          <Text style={styles.sottotitolo}>
            Sblocca l’intero percorso e preparati all’esame senza limiti.
          </Text>

          <View style={styles.vantaggi}>
            {VANTAGGI.map((v) => (
              <View key={v} style={styles.vantaggioRiga}>
                <Icona nome="checkmark-circle" size={22} color={colors.accent} />
                <Text style={styles.vantaggioTesto}>{v}</Text>
              </View>
            ))}
          </View>

          <View style={styles.piani}>
            <Piano
              nome="Annuale"
              prezzo="49,99 €"
              dettaglio="4,17 € al mese"
              etichetta="RISPARMI IL 48%"
              attivo={piano === 'annuale'}
              onPress={() => setPiano('annuale')}
            />
            <Piano
              nome="Mensile"
              prezzo="7,99 €"
              dettaglio="fatturazione mensile"
              attivo={piano === 'mensile'}
              onPress={() => setPiano('mensile')}
            />
          </View>

          <Bottone
            label="Attiva Premium"
            onPress={() => {
              attivaPremium();
              navigation.goBack();
            }}
          variante="accento"
          />
          <Text style={styles.nota}>
            Prezzi di esempio. L’acquisto in-app (App Store / Google Play) sarà integrato prima
            della pubblicazione: per ora il pulsante attiva Premium in modalità demo, per provare i
            contenuti bloccati.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1 },
  content: { padding: spacing.lg, alignItems: 'center', paddingBottom: spacing.xl },
  chiudi: { alignSelf: 'flex-start' },
  coronaBubble: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
  },
  titolo: { fontSize: 30, fontWeight: '800', color: '#FFFFFF', marginTop: spacing.md },
  sottotitolo: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: spacing.xs,
  },
  vantaggi: { alignSelf: 'stretch', marginTop: spacing.lg, gap: spacing.sm },
  vantaggioRiga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  vantaggioTesto: { flex: 1, fontSize: 15, color: '#FFFFFF', lineHeight: 21 },
  piani: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: spacing.sm,
    alignSelf: 'stretch',
    marginVertical: spacing.lg,
  },
  pianoPress: { flex: 1 },
  pianoWrap: { flex: 1, },
  pianoEdgeAttivo: { backgroundColor: '#A8861B' },
  // Sfondo pieno (non traslucido) così il bordo 3D non traspare e sporca il colore.
  piano: {
    flex: 1,
    backgroundColor: '#26314C',
    borderRadius: radius.xl,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.16)',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
  },
  pianoAttivo: { borderColor: colors.accent, backgroundColor: '#2E3B5C' },
  // Altezza fissa condivisa col segnaposto, così i due piani restano allineati.
  pianoBadge: {
    height: 22,
    justifyContent: 'center',
    backgroundColor: colors.accent,
    borderRadius: radius.pill,
    paddingHorizontal: 9,
    marginBottom: spacing.sm,
  },
  pianoBadgeSpento: { backgroundColor: 'rgba(255,255,255,0.16)' },
  pianoBadgeVuoto: { height: 22, marginBottom: spacing.sm },
  pianoBadgeTesto: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.6,
    color: colors.primary,
  },
  pianoBadgeTestoSpento: { color: 'rgba(255,255,255,0.85)' },
  pianoNome: { fontSize: 15, fontWeight: '700', color: '#FFFFFF' },
  pianoPrezzo: { fontSize: 24, fontWeight: '900', color: '#FFFFFF', marginTop: 4 },
  pianoDettaglio: { fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2, textAlign: 'center' },
  pianoSpunta: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nota: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: spacing.md,
  },
});
