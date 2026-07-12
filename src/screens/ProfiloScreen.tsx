import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGamification } from '../gamification/GamificationContext';
import { Mascot } from '../components/Mascot';
import { Button3D } from '../components/Button3D';
import type { RootStackParamList } from '../navigation/types';
import { colors, radius, softShadow, spacing } from '../theme';

const VANTAGGI: { icona: keyof typeof Ionicons.glyphMap; testo: string }[] = [
  { icona: 'sync', testo: 'Ritrova i tuoi progressi su ogni dispositivo' },
  { icona: 'cloud-done', testo: 'Backup automatico di punti, streak e stelle' },
  { icona: 'shield-checkmark', testo: 'Accesso sicuro con Apple, Google o email' },
];

export default function ProfiloScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { state, livello } = useGamification();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Intestazione ospite */}
      <LinearGradient
        colors={['#2E4370', '#1B2A4A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.hero, softShadow]}
      >
        <Mascot state="neutral" size={96} style={styles.heroMascot} />
        <Text style={styles.heroNome}>Ospite</Text>
        <View style={styles.heroLivelloRow}>
          <Ionicons name={livello.icona} size={15} color={colors.accent} />
          <Text style={styles.heroLivello}>{livello.nome}</Text>
        </View>
        <View style={styles.heroStats}>
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValore}>{state.punti}</Text>
            <Text style={styles.heroStatLabel}>punti</Text>
          </View>
          <View style={styles.heroDivider} />
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValore}>{state.streak}</Text>
            <Text style={styles.heroStatLabel}>streak</Text>
          </View>
          <View style={styles.heroDivider} />
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValore}>{state.quizCompletati}</Text>
            <Text style={styles.heroStatLabel}>lezioni</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Invito ad accedere */}
      <View style={styles.card}>
        <Text style={styles.cardTitolo}>Crea un account gratuito</Text>
        <Text style={styles.cardSub}>
          Stai studiando come ospite: i progressi sono salvati solo su questo telefono. Accedi per
          non perderli mai e ritrovarli ovunque.
        </Text>
        <View style={styles.vantaggi}>
          {VANTAGGI.map((v) => (
            <View key={v.testo} style={styles.vantaggioRiga}>
              <View style={styles.vantaggioIcona}>
                <Ionicons name={v.icona} size={18} color={colors.primary} />
              </View>
              <Text style={styles.vantaggioTesto}>{v.testo}</Text>
            </View>
          ))}
        </View>
        <Button3D
          label="Accedi o registrati"
          onPress={() => navigation.navigate('Login')}
          color={colors.primary}
          edgeColor="#0E1830"
          style={styles.cta}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingTop: spacing.xl + spacing.md, paddingBottom: spacing.xl },
  hero: {
    borderRadius: radius.xxl,
    paddingTop: spacing.xl + spacing.md,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    marginTop: 40,
  },
  heroMascot: { position: 'absolute', top: -48, alignSelf: 'center' },
  heroNome: { color: '#FFFFFF', fontSize: 24, fontWeight: '900', marginTop: spacing.sm },
  heroLivelloRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 4 },
  heroLivello: { color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: '700' },
  heroStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.lg,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  heroStat: { alignItems: 'center', flex: 1 },
  heroStatValore: { color: '#FFFFFF', fontSize: 22, fontWeight: '900' },
  heroStatLabel: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 2,
  },
  heroDivider: { width: 1, height: 30, backgroundColor: 'rgba(255,255,255,0.18)' },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginTop: spacing.lg,
    ...softShadow,
    shadowOpacity: 0.06,
  },
  cardTitolo: { fontSize: 20, fontWeight: '800', color: colors.text },
  cardSub: { fontSize: 14, color: colors.textMuted, lineHeight: 21, marginTop: spacing.xs },
  vantaggi: { gap: spacing.sm, marginTop: spacing.md },
  vantaggioRiga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  vantaggioIcona: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vantaggioTesto: { flex: 1, fontSize: 14, color: colors.text },
  cta: { marginTop: spacing.lg },
});
