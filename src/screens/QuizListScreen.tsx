import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { materie, questionsByMateria } from '../data/quizzes';
import type { RootStackParamList } from '../navigation/types';
import type { Materia } from '../types';
import { colors, radius, spacing } from '../theme';

const EMOJI_MATERIA: Record<Materia, string> = {
  'Diritto civile': '🏠',
  'Diritto penale': '🚔',
  'Procedura civile': '🧾',
  'Procedura penale': '🔍',
  'Diritto amministrativo': '🏛️',
  'Deontologia forense': '🤝',
};

export default function QuizListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={materie}
      keyExtractor={(m) => m}
      ListHeaderComponent={
        <Text style={styles.intro}>
          Scegli la materia e mettiti alla prova: ogni risposta è spiegata con i riferimenti
          normativi, così impari anche quando sbagli. Ogni risposta vale punti! 🎯
        </Text>
      }
      renderItem={({ item }) => {
        const count = questionsByMateria(item).length;
        return (
          <Pressable
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            onPress={() => navigation.navigate('QuizGame', { materia: item })}
          >
            <Text style={styles.emoji}>{EMOJI_MATERIA[item]}</Text>
            <View style={styles.cardText}>
              <Text style={styles.materia}>{item}</Text>
              <Text style={styles.count}>
                {count} {count === 1 ? 'domanda' : 'domande'}
              </Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.sm },
  intro: { fontSize: 14, color: colors.textMuted, marginBottom: spacing.sm, lineHeight: 20 },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardPressed: { opacity: 0.7 },
  emoji: { fontSize: 28 },
  cardText: { flex: 1 },
  materia: { fontSize: 16, fontWeight: '700', color: colors.text },
  count: { fontSize: 13, color: colors.textMuted, marginTop: 2 },
  chevron: { fontSize: 26, color: colors.textMuted },
});
