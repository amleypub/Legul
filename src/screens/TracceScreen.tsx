import React from 'react';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { anniDisponibili, tracceByAnno } from '../data/tracce';
import { useGamification } from '../gamification/GamificationContext';
import type { RootStackParamList } from '../navigation/types';
import type { TipoTraccia } from '../types';
import { colors, radius, spacing } from '../theme';

const EMOJI_TIPO: Record<TipoTraccia, string> = {
  'Parere di diritto civile': '📕',
  'Parere di diritto penale': '📗',
  'Atto giudiziario': '📄',
};

export default function TracceScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { state } = useGamification();

  const sections = anniDisponibili.map((anno) => ({
    title: String(anno),
    data: tracceByAnno(anno),
  }));

  return (
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.content}
      sections={sections}
      keyExtractor={(t) => t.id}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={
        <Text style={styles.intro}>
          Rivedi le tracce delle prove scritte degli anni passati: capire cosa è già stato chiesto
          è il modo migliore per prevedere cosa arriverà. Ogni traccia letta vale punti! 🏛️
        </Text>
      }
      renderSectionHeader={({ section }) => (
        <Text style={styles.anno}>Anno {section.title}</Text>
      )}
      renderItem={({ item }) => {
        const letta = state.tracceLette.includes(item.id);
        return (
          <Pressable
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            onPress={() => navigation.navigate('TracciaDetail', { tracciaId: item.id })}
          >
            <Text style={styles.emoji}>{EMOJI_TIPO[item.tipo]}</Text>
            <View style={styles.cardText}>
              <Text style={styles.tipo}>{item.tipo}</Text>
              <Text style={styles.titolo}>{item.titolo}</Text>
              <View style={styles.chipRow}>
                {item.argomenti.map((a) => (
                  <View key={a} style={styles.chip}>
                    <Text style={styles.chipText}>{a}</Text>
                  </View>
                ))}
              </View>
            </View>
            <Text style={styles.letta}>{letta ? '✅' : '›'}</Text>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  intro: { fontSize: 14, color: colors.textMuted, marginBottom: spacing.sm, lineHeight: 20 },
  anno: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: 'row',
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
    alignItems: 'center',
  },
  cardPressed: { opacity: 0.7 },
  emoji: { fontSize: 26 },
  cardText: { flex: 1 },
  tipo: { fontSize: 12, fontWeight: '700', color: colors.accent, textTransform: 'uppercase' },
  titolo: { fontSize: 15, fontWeight: '700', color: colors.text, marginTop: 2 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginTop: 6 },
  chip: {
    backgroundColor: colors.background,
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipText: { fontSize: 11, color: colors.textMuted },
  letta: { fontSize: 20, color: colors.textMuted },
});
