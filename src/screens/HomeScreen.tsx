import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { BADGES, useGamification } from '../gamification/GamificationContext';
import { ProgressBar } from '../components/ProgressBar';
import { Mascot } from '../components/Mascot';
import { colors, EDGE_3D, radius, softShadow, spacing } from '../theme';

function StatTile({
  valore,
  label,
  icona,
  tint,
  edge,
}: {
  valore: string | number;
  label: string;
  icona: keyof typeof Ionicons.glyphMap;
  tint: string;
  edge: string;
}) {
  return (
    <View style={styles.tileWrap}>
      <View style={[styles.tileEdge, { backgroundColor: edge }]} />
      <View style={styles.tile}>
        <View style={styles.tileTop}>
          <View style={[styles.tileIcon, { backgroundColor: tint }]}>
            <Ionicons name={icona} size={19} color="#FFFFFF" />
          </View>
          <Text style={[styles.tileValue, { color: tint }]} numberOfLines={1} adjustsFontSizeToFit>
            {valore}
          </Text>
        </View>
        <Text style={styles.tileLabel}>{label}</Text>
      </View>
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
        <View style={styles.streakEdge} />
        <Animated.View
          style={[
            styles.streakCard,
            {
              transform: [
                { scale: glow.interpolate({ inputRange: [0, 1], outputRange: [1, 1.012] }) },
              ],
            },
          ]}
        >
        <LinearGradient
          colors={[colors.streakFrom, colors.streakTo]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.streakInner}
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
        </Animated.View>
      </View>

      {/* Progressi in tessere colorate compatte */}
      <Text style={styles.sectionTitle}>I tuoi progressi</Text>
      <View style={styles.bentoRow}>
        <StatTile
          valore={state.risposteCorrette}
          label="Risposte esatte"
          icona="checkmark-done"
          tint={colors.success}
          edge="#C9E8D8"
        />
        <StatTile
          valore={precisione !== null ? `${precisione}%` : '0%'}
          label="Precisione"
          icona="analytics"
          tint="#4F7CF3"
          edge="#CCDAF8"
        />
      </View>
      <View style={styles.bentoRow}>
        <StatTile
          valore={state.quizCompletati}
          label="Lezioni"
          icona="ribbon"
          tint="#9B6BFF"
          edge="#DBCEF8"
        />
        <StatTile
          valore={state.tracceLette.length}
          label="Tracce studiate"
          icona="document-text"
          tint={colors.accentEdge}
          edge="#F0DFB8"
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
            <View key={badge.id} style={styles.badgeWrap}>
              <View style={[styles.badgeEdge, sbloccato && styles.badgeEdgeOn]} />
              <View style={[styles.badgeCard, sbloccato && styles.badgeCardOn]}>
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

  streakWrap: { marginTop: spacing.lg, paddingBottom: EDGE_3D },
  streakEdge: {
    position: 'absolute',
    top: EDGE_3D,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#C43A22',
    borderRadius: radius.xl,
  },
  streakCard: { borderRadius: radius.xl },
  streakInner: {
    borderRadius: radius.xl,
    paddingVertical: spacing.md - 2,
    paddingLeft: spacing.md,
    paddingRight: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
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

  bentoRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm },
  tileWrap: { flex: 1, paddingBottom: EDGE_3D },
  tileEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xl,
  },
  tile: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md - 2,
  },
  tileTop: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  tileIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileValue: { flex: 1, fontSize: 26, fontWeight: '900' },
  tileLabel: { fontSize: 13, color: colors.textMuted, marginTop: 6, fontWeight: '700' },

  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  badgeWrap: { width: '48%', flexGrow: 1, paddingBottom: EDGE_3D },
  badgeEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xl,
    backgroundColor: '#DFE4EF',
  },
  badgeEdgeOn: { backgroundColor: colors.accentEdge },
  badgeCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md,
    alignItems: 'center',
    overflow: 'hidden',
  },
  badgeCardOn: { backgroundColor: colors.accentSoft },
  badgeIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF1F6',
  },
  badgeIconWrapOn: { backgroundColor: '#FFFFFF' },
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
