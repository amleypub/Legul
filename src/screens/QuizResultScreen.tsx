import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BADGES } from '../gamification/GamificationContext';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, radius, spacing } from '../theme';

export default function QuizResultScreen({
  route,
  navigation,
}: RootStackScreenProps<'QuizResult'>) {
  const { materia, corrette, totale, puntiGuadagnati, messaggio, nuoviBadge } = route.params;
  const percentuale = totale > 0 ? Math.round((corrette / totale) * 100) : 0;
  const badgeSbloccati = BADGES.filter((b) => nuoviBadge.includes(b.id));

  const iconaEsito: keyof typeof Ionicons.glyphMap =
    percentuale === 100 ? 'trophy' : percentuale >= 60 ? 'checkmark-circle' : 'trending-up';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Ionicons name={iconaEsito} size={64} color={colors.accent} style={styles.iconaEsito} />
      <Text style={styles.titolo}>Quiz completato!</Text>
      <Text style={styles.materia}>{materia}</Text>

      <View style={styles.scoreCard}>
        <Text style={styles.score}>
          {corrette}/{totale}
        </Text>
        <Text style={styles.scoreLabel}>risposte corrette ({percentuale}%)</Text>
        <Text style={styles.punti}>+{puntiGuadagnati} punti guadagnati</Text>
      </View>

      <View style={styles.messaggioCard}>
        <Text style={styles.messaggioTesto}>{messaggio}</Text>
      </View>

      {badgeSbloccati.length > 0 && (
        <View style={styles.badgeWrap}>
          <Text style={styles.badgeTitolo}>Nuovi badge sbloccati</Text>
          {badgeSbloccati.map((b) => (
            <View key={b.id} style={styles.badgeCard}>
              <Ionicons name={b.icona} size={30} color={colors.accent} />
              <View style={styles.badgeTextWrap}>
                <Text style={styles.badgeNome}>{b.nome}</Text>
                <Text style={styles.badgeDescr}>{b.descrizione}</Text>
              </View>
            </View>
          ))}
        </View>
      )}

      <Pressable
        style={({ pressed }) => [styles.btnPrimario, pressed && styles.btnPressed]}
        onPress={() => navigation.replace('QuizGame', { materia })}
      >
        <Text style={styles.btnPrimarioTesto}>Riprova questa materia</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.btnSecondario, pressed && styles.btnPressed]}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.btnSecondarioTesto}>Torna alle materie</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, alignItems: 'center', paddingBottom: spacing.xl },
  iconaEsito: { marginTop: spacing.md },
  titolo: { fontSize: 24, fontWeight: '800', color: colors.text, marginTop: spacing.sm },
  materia: { fontSize: 15, color: colors.textMuted, marginTop: 2 },
  scoreCard: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: spacing.lg,
  },
  score: { fontSize: 44, fontWeight: '800', color: '#FFFFFF' },
  scoreLabel: { fontSize: 14, color: 'rgba(255,255,255,0.85)', marginTop: 2 },
  punti: { fontSize: 18, fontWeight: '800', color: colors.accent, marginTop: spacing.sm },
  messaggioCard: {
    backgroundColor: colors.accentSoft,
    borderRadius: radius.md,
    padding: spacing.md,
    alignSelf: 'stretch',
    marginTop: spacing.md,
  },
  messaggioTesto: { fontSize: 15, color: colors.text, textAlign: 'center', lineHeight: 22 },
  badgeWrap: { alignSelf: 'stretch', marginTop: spacing.md, gap: spacing.sm },
  badgeTitolo: { fontSize: 16, fontWeight: '700', color: colors.text, textAlign: 'center' },
  badgeCard: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  badgeTextWrap: { flex: 1 },
  badgeNome: { fontSize: 15, fontWeight: '700', color: colors.text },
  badgeDescr: { fontSize: 13, color: colors.textMuted, marginTop: 2 },
  btnPrimario: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: spacing.lg,
  },
  btnPrimarioTesto: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  btnSecondario: {
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: spacing.sm,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  btnSecondarioTesto: { color: colors.primary, fontSize: 16, fontWeight: '700' },
  btnPressed: { opacity: 0.8 },
});
