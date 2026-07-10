import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { materie } from '../data/quizzes';
import { lezioniInOrdine } from '../data/percorso';
import { useGamification } from '../gamification/GamificationContext';
import type { RootStackParamList } from '../navigation/types';
import type { Materia } from '../types';
import { colors, materiaColors, radius, softShadow, spacing } from '../theme';

export const ICONA_MATERIA: Record<Materia, keyof typeof Ionicons.glyphMap> = {
  'Diritto civile': 'home',
  'Diritto penale': 'shield-half',
  'Procedura civile': 'reader',
  'Procedura penale': 'search',
  'Diritto amministrativo': 'business',
  'Deontologia forense': 'people',
};

export default function QuizHomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { state } = useGamification();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titolo}>Percorso di studio</Text>
      <Text style={styles.sottotitolo}>
        Scegli la materia e avanza lezione dopo lezione: dai Fondamenti fino all’Eccellenza.
      </Text>

      {materie.map((materia) => {
        const tinte = materiaColors[materia];
        const lezioni = lezioniInOrdine(materia);
        const completate = lezioni.filter((l) => (state.lezioni[l.id] ?? 0) >= 1).length;
        const stelleTotali = lezioni.reduce((acc, l) => acc + (state.lezioni[l.id] ?? 0), 0);
        const quota = lezioni.length > 0 ? completate / lezioni.length : 0;

        return (
          <Pressable
            key={materia}
            onPress={() => navigation.navigate('Percorso', { materia })}
            style={({ pressed }) => [styles.cardWrap, pressed && styles.cardPressed]}
          >
            <LinearGradient
              colors={[tinte.start, tinte.end]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}
            >
              <View style={styles.cardHeader}>
                <View style={styles.iconBubble}>
                  <Ionicons name={ICONA_MATERIA[materia]} size={26} color={tinte.end} />
                </View>
                <View style={styles.cardHeaderText}>
                  <Text style={styles.materia}>{materia}</Text>
                  <Text style={styles.cardMeta}>
                    {completate}/{lezioni.length} lezioni · {stelleTotali} stelle
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="rgba(255,255,255,0.9)" />
              </View>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${quota * 100}%` }]} />
              </View>
            </LinearGradient>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl, gap: spacing.md },
  titolo: { fontSize: 26, fontWeight: '800', color: colors.text },
  sottotitolo: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
    marginBottom: spacing.xs,
  },
  cardWrap: { borderRadius: radius.xl, ...softShadow },
  cardPressed: { transform: [{ scale: 0.98 }] },
  card: {
    borderRadius: radius.xl,
    padding: spacing.md,
    gap: spacing.md,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  iconBubble: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeaderText: { flex: 1 },
  materia: { fontSize: 18, fontWeight: '800', color: '#FFFFFF' },
  cardMeta: { fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 2 },
  progressTrack: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.28)',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
});
