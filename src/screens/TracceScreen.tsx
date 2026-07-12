import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { anniDisponibili, tracceByAnno } from '../data/tracce';
import { useGamification } from '../gamification/GamificationContext';
import { Card3D } from '../components/Card3D';
import type { RootStackParamList } from '../navigation/types';
import type { TipoTraccia } from '../types';
import { colors, materiaColors, radius, spacing } from '../theme';

const TIPO_STYLE: Record<TipoTraccia, { icona: keyof typeof Ionicons.glyphMap; tinta: string }> = {
  'Parere di diritto civile': { icona: 'book', tinta: materiaColors['Diritto civile'].start },
  'Parere di diritto penale': { icona: 'shield-half', tinta: materiaColors['Diritto penale'].start },
  'Atto giudiziario': { icona: 'document-text', tinta: materiaColors['Procedura civile'].start },
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
          è il modo migliore per prevedere cosa arriverà. Ogni traccia letta vale punti.
        </Text>
      }
      renderSectionHeader={({ section }) => (
        <View style={styles.annoRow}>
          <View style={styles.annoPill}>
            <Text style={styles.annoPillText}>{section.title}</Text>
          </View>
          <View style={styles.annoLine} />
        </View>
      )}
      renderItem={({ item }) => {
        const letta = state.tracceLette.includes(item.id);
        const tipo = TIPO_STYLE[item.tipo];
        return (
          <Card3D
            edgeColor="#DfE3EC"
            radiusSize={radius.lg}
            style={styles.cardOuter}
            contentStyle={styles.card}
            onPress={() => navigation.navigate('TracciaDetail', { tracciaId: item.id })}
          >
            <View style={[styles.iconTile, { backgroundColor: tipo.tinta + '1A' }]}>
              <Ionicons name={tipo.icona} size={24} color={tipo.tinta} />
            </View>
            <View style={styles.cardText}>
              <Text style={[styles.tipo, { color: tipo.tinta }]}>{item.tipo}</Text>
              <Text style={styles.titolo}>{item.titolo}</Text>
              <View style={styles.chipRow}>
                {item.argomenti.map((a) => (
                  <View key={a} style={styles.chip}>
                    <Text style={styles.chipText}>{a}</Text>
                  </View>
                ))}
              </View>
            </View>
            <Ionicons
              name={letta ? 'checkmark-circle' : 'chevron-forward'}
              size={22}
              color={letta ? colors.success : colors.textMuted}
            />
          </Card3D>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  intro: { fontSize: 14, color: colors.textMuted, marginBottom: spacing.sm, lineHeight: 20 },
  annoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  annoPill: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  annoPillText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  annoLine: { flex: 1, height: 2, borderRadius: 1, backgroundColor: colors.border },
  cardOuter: { marginBottom: spacing.sm },
  card: {
    padding: spacing.md,
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  iconTile: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: { flex: 1 },
  tipo: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.3 },
  titolo: { fontSize: 15, fontWeight: '700', color: colors.text, marginTop: 2 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginTop: 6 },
  chip: {
    backgroundColor: colors.background,
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  chipText: { fontSize: 11, color: colors.textMuted, fontWeight: '600' },
});
