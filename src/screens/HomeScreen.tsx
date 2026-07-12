import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { BADGES, useGamification } from '../gamification/GamificationContext';
import { ProgressBar } from '../components/ProgressBar';
import { Mascot } from '../components/Mascot';
import { colors, radius, softShadow, spacing } from '../theme';

function StatTile({
  valore,
  label,
  icona,
  tint,
  big,
}: {
  valore: string | number;
  label: string;
  icona: keyof typeof Ionicons.glyphMap;
  tint: string;
  big?: boolean;
}) {
  return (
    <View style={[styles.tile, big && styles.tileBig]}>
      <View style={[styles.tileIcon, { backgroundColor: tint + '22' }]}>
        <Ionicons name={icona} size={big ? 26 : 18} color={tint} />
      </View>
      <Text style={[styles.tileValue, big && styles.tileValueBig]}>{valore}</Text>
      <Text style={styles.tileLabel}>{label}</Text>
    </View>
  );
}

export default function HomeScreen() {
  const { state, livello, prossimoLivello, progressoLivello } = useGamification();

  const totaleRisposte = state.risposteCorrette + state.risposteErrate;
  const precisione =
    totaleRisposte > 0 ? Math.round((state.risposteCorrette / totaleRisposte) * 100) : null;

  // Animazioni streak: bagliore pulsante + fiamma che respira.
  const glow = useRef(new Animated.Value(0)).current;
  const flame = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const mk = (v: Animated.Value, d: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(v, { toValue: 1, duration: d, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
          Animated.timing(v, { toValue: 0, duration: d, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
        ])
      );
    const a = mk(glow, 1400);
    const b = mk(flame, 700);
    a.start();
    b.start();
    return () => {
      a.stop();
      b.stop();
    };
  }, [glow, flame]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero: mascotte + livello + punti */}
      <LinearGradient
        colors={['#2E4370', '#1B2A4A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.hero, softShadow]}
      >
        <Mascot state="neutral" size={112} animated style={styles.heroMascot} />
        <View style={styles.heroBadgeLivello}>
          <Ionicons name={livello.icona} size={16} color={colors.primary} />
          <Text style={styles.heroLivello}>{livello.nome}</Text>
        </View>
        <Text style={styles.heroPunti}>{state.punti}</Text>
        <Text style={styles.heroPuntiLabel}>punti totali</Text>
        <ProgressBar progress={progressoLivello} />
        {prossimoLivello ? (
          <Text style={styles.heroProssimo}>
            {prossimoLivello.sogliaPunti - state.punti} punti al livello «{prossimoLivello.nome}»
          </Text>
        ) : (
          <Text style={styles.heroProssimo}>Hai raggiunto il livello massimo.</Text>
        )}
      </LinearGradient>

      {/* Banner streak con bagliore animato e mascotte che sbuca */}
      <View style={styles.streakWrap}>
        <Animated.View
          style={[
            styles.streakGlow,
            { opacity: glow.interpolate({ inputRange: [0, 1], outputRange: [0.25, 0.6] }) },
          ]}
        />
        <View style={styles.streakEdge} />
        <LinearGradient
          colors={[colors.streakFrom, colors.streakTo]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.streakCard}
        >
          <Animated.View
            style={{
              transform: [
                { scale: flame.interpolate({ inputRange: [0, 1], outputRange: [1, 1.18] }) },
                { rotate: flame.interpolate({ inputRange: [0, 1], outputRange: ['-4deg', '4deg'] }) },
              ],
            }}
          >
            <Ionicons name="flame" size={40} color="#FFFFFF" />
          </Animated.View>
          <View style={styles.streakTextWrap}>
            <Text style={styles.streakNumero}>
              {state.streak > 0 ? state.streak : '0'}
              <Text style={styles.streakNumeroLabel}>
                {' '}
                {state.streak === 1 ? 'giorno' : 'giorni'}
              </Text>
            </Text>
            <Text style={styles.streakSub}>
              {state.streak > 0
                ? 'di studio di fila! Torna domani per non perderla.'
                : 'Inizia oggi: completa una lezione per accendere la fiamma.'}
            </Text>
          </View>
          {state.streak > 0 && <Mascot state="celebrating" size={64} style={styles.streakMascot} />}
        </LinearGradient>
      </View>

      {/* Bento grid dei progressi */}
      <Text style={styles.sectionTitle}>I tuoi progressi</Text>
      <View style={styles.bento}>
        <StatTile
          valore={state.risposteCorrette}
          label="Risposte esatte"
          icona="checkmark-done"
          tint={colors.success}
          big
        />
        <View style={styles.bentoColumn}>
          <StatTile
            valore={precisione !== null ? `${precisione}%` : '—'}
            label="Precisione"
            icona="analytics"
            tint="#4F7CF3"
          />
          <StatTile
            valore={state.quizCompletati}
            label="Lezioni"
            icona="ribbon"
            tint="#9B6BFF"
          />
        </View>
      </View>
      <View style={styles.bentoWide}>
        <StatTile
          valore={state.tracceLette.length}
          label="Tracce d’esame studiate"
          icona="document-text"
          tint={colors.accentEdge}
        />
      </View>

      {/* Badge con vetro smerigliato sui bloccati */}
      <Text style={styles.sectionTitle}>
        Badge ({state.badges.length}/{BADGES.length})
      </Text>
      <View style={styles.badgeGrid}>
        {BADGES.map((badge) => {
          const sbloccato = state.badges.includes(badge.id);
          return (
            <View key={badge.id} style={styles.badgeCard}>
              <View style={[styles.badgeIconWrap, sbloccato && styles.badgeIconWrapOn]}>
                <Ionicons
                  name={badge.icona}
                  size={26}
                  color={sbloccato ? colors.accent : '#9AA3B2'}
                />
              </View>
              <Text style={styles.badgeNome}>{badge.nome}</Text>
              <Text style={styles.badgeDescr}>{badge.descrizione}</Text>
              {!sbloccato && (
                <BlurView intensity={18} tint="light" style={styles.badgeFrost}>
                  <View style={styles.badgeLockPill}>
                    <Ionicons name="lock-closed" size={14} color="#5B6472" />
                  </View>
                </BlurView>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },

  hero: {
    borderRadius: radius.xxl,
    paddingTop: spacing.xl + spacing.lg,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    marginTop: 44,
  },
  heroMascot: { position: 'absolute', top: -56, alignSelf: 'center' },
  heroBadgeLivello: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.accent,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  heroLivello: { color: colors.primary, fontSize: 13, fontWeight: '800' },
  heroPunti: { color: '#FFFFFF', fontSize: 46, fontWeight: '900', marginTop: spacing.sm },
  heroPuntiLabel: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: spacing.md,
  },
  heroProssimo: { color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: spacing.sm },

  streakWrap: { marginTop: spacing.lg },
  streakGlow: {
    position: 'absolute',
    top: 6,
    left: 18,
    right: 18,
    bottom: -6,
    backgroundColor: colors.streakTo,
    borderRadius: radius.xxl,
  },
  streakEdge: {
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#C43A22',
    borderRadius: radius.xl,
  },
  streakCard: {
    borderRadius: radius.xl,
    padding: spacing.md,
    paddingRight: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: 6,
  },
  streakTextWrap: { flex: 1 },
  streakNumero: { fontSize: 26, fontWeight: '900', color: '#FFFFFF' },
  streakNumeroLabel: { fontSize: 15, fontWeight: '700', color: 'rgba(255,255,255,0.9)' },
  streakSub: { fontSize: 13, color: 'rgba(255,255,255,0.92)', marginTop: 2, lineHeight: 18 },
  streakMascot: { marginRight: -6 },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },

  bento: { flexDirection: 'row', gap: spacing.sm },
  bentoColumn: { flex: 1, gap: spacing.sm },
  bentoWide: { marginTop: spacing.sm },
  tile: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...softShadow,
    shadowOpacity: 0.06,
  },
  tileBig: { justifyContent: 'center', paddingVertical: spacing.lg },
  tileIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  tileValue: { fontSize: 22, fontWeight: '900', color: colors.text },
  tileValueBig: { fontSize: 40 },
  tileLabel: { fontSize: 12, color: colors.textMuted, marginTop: 2, fontWeight: '600' },

  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  badgeCard: {
    width: '48%',
    flexGrow: 1,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    alignItems: 'center',
    overflow: 'hidden',
    ...softShadow,
    shadowOpacity: 0.06,
  },
  badgeIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF1F6',
  },
  badgeIconWrapOn: { backgroundColor: colors.accentSoft },
  badgeNome: { fontSize: 14, fontWeight: '800', color: colors.text, marginTop: spacing.sm },
  badgeDescr: { fontSize: 11, color: colors.textMuted, textAlign: 'center', marginTop: 2 },
  badgeFrost: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(245,247,250,0.35)',
  },
  badgeLockPill: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.75)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
  },
});
