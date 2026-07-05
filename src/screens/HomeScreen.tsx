import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BADGES, useGamification } from '../gamification/GamificationContext';
import { ProgressBar } from '../components/ProgressBar';
import { colors, radius, spacing } from '../theme';

export default function HomeScreen() {
  const { state, livello, prossimoLivello, progressoLivello } = useGamification();

  const totaleRisposte = state.risposteCorrette + state.risposteErrate;
  const precisione =
    totaleRisposte > 0 ? Math.round((state.risposteCorrette / totaleRisposte) * 100) : null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Carta livello e punti */}
      <View style={styles.heroCard}>
        <Text style={styles.heroEmoji}>{livello.emoji}</Text>
        <Text style={styles.heroLivello}>{livello.nome}</Text>
        <Text style={styles.heroPunti}>{state.punti} punti</Text>
        <ProgressBar progress={progressoLivello} />
        {prossimoLivello ? (
          <Text style={styles.heroProssimo}>
            {prossimoLivello.sogliaPunti - state.punti} punti al livello «{prossimoLivello.nome}»
          </Text>
        ) : (
          <Text style={styles.heroProssimo}>Hai raggiunto il livello massimo! 👑</Text>
        )}
      </View>

      {/* Streak */}
      <View style={styles.streakCard}>
        <Text style={styles.streakEmoji}>🔥</Text>
        <View style={styles.streakTextWrap}>
          <Text style={styles.streakTitle}>
            {state.streak > 0
              ? `${state.streak} ${state.streak === 1 ? 'giorno' : 'giorni'} di studio di fila!`
              : 'Inizia oggi la tua serie di studio!'}
          </Text>
          <Text style={styles.streakSub}>
            {state.streak > 0
              ? 'Torna domani per non perdere la serie.'
              : 'Completa un quiz o leggi una traccia per accendere la fiamma.'}
          </Text>
        </View>
      </View>

      {/* Statistiche */}
      <Text style={styles.sectionTitle}>I tuoi progressi</Text>
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{state.quizCompletati}</Text>
          <Text style={styles.statLabel}>Quiz completati</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{state.risposteCorrette}</Text>
          <Text style={styles.statLabel}>Risposte esatte</Text>
        </View>
      </View>
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{precisione !== null ? `${precisione}%` : '—'}</Text>
          <Text style={styles.statLabel}>Precisione</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{state.tracceLette.length}</Text>
          <Text style={styles.statLabel}>Tracce studiate</Text>
        </View>
      </View>

      {/* Badge */}
      <Text style={styles.sectionTitle}>
        Badge ({state.badges.length}/{BADGES.length})
      </Text>
      <View style={styles.badgeGrid}>
        {BADGES.map((badge) => {
          const sbloccato = state.badges.includes(badge.id);
          return (
            <View key={badge.id} style={[styles.badgeCard, !sbloccato && styles.badgeLocked]}>
              <Text style={styles.badgeEmoji}>{sbloccato ? badge.emoji : '🔒'}</Text>
              <Text style={styles.badgeNome}>{badge.nome}</Text>
              <Text style={styles.badgeDescr}>{badge.descrizione}</Text>
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
  heroCard: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    gap: spacing.sm,
  },
  heroEmoji: { fontSize: 44 },
  heroLivello: { color: '#FFFFFF', fontSize: 20, fontWeight: '700' },
  heroPunti: { color: colors.accent, fontSize: 32, fontWeight: '800' },
  heroProssimo: { color: 'rgba(255,255,255,0.8)', fontSize: 13 },
  streakCard: {
    marginTop: spacing.md,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  streakEmoji: { fontSize: 32 },
  streakTextWrap: { flex: 1 },
  streakTitle: { fontSize: 15, fontWeight: '700', color: colors.text },
  streakSub: { fontSize: 13, color: colors.textMuted, marginTop: 2 },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  statsRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  statValue: { fontSize: 24, fontWeight: '800', color: colors.primary },
  statLabel: { fontSize: 12, color: colors.textMuted, marginTop: 2, textAlign: 'center' },
  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  badgeCard: {
    width: '48%',
    flexGrow: 1,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  badgeLocked: { opacity: 0.45 },
  badgeEmoji: { fontSize: 30 },
  badgeNome: { fontSize: 14, fontWeight: '700', color: colors.text, marginTop: 4 },
  badgeDescr: {
    fontSize: 11,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 2,
  },
});
