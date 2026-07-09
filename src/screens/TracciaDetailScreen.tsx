import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { tracce } from '../data/tracce';
import { useGamification } from '../gamification/GamificationContext';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, radius, spacing } from '../theme';

export default function TracciaDetailScreen({ route }: RootStackScreenProps<'TracciaDetail'>) {
  const { tracciaId } = route.params;
  const traccia = tracce.find((t) => t.id === tracciaId);
  const { registraTracciaLetta } = useGamification();
  const [premio, setPremio] = useState<string | null>(null);
  const registrata = useRef(false);

  useEffect(() => {
    if (!traccia || registrata.current) return;
    registrata.current = true;
    const evento = registraTracciaLetta(traccia.id);
    if (evento.puntiGuadagnati > 0) {
      setPremio(`+${evento.puntiGuadagnati} punti — ${evento.messaggio}`);
    }
  }, [traccia, registraTracciaLetta]);

  if (!traccia) {
    return (
      <View style={styles.container}>
        <Text style={styles.testo}>Traccia non trovata.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.sessione}>{traccia.sessione}</Text>
      <Text style={styles.tipo}>{traccia.tipo}</Text>
      <Text style={styles.titolo}>{traccia.titolo}</Text>

      <View style={styles.chipRow}>
        {traccia.argomenti.map((a) => (
          <View key={a} style={styles.chip}>
            <Text style={styles.chipText}>{a}</Text>
          </View>
        ))}
      </View>

      {premio && (
        <View style={styles.premioCard}>
          <Text style={styles.premioTesto}>{premio}</Text>
        </View>
      )}

      <View style={styles.testoCard}>
        <Text style={styles.testo}>{traccia.testo}</Text>
      </View>

      {traccia.testoUfficiale ? (
        traccia.fonte ? (
          <Text style={styles.nota}>Fonte ufficiale: {traccia.fonte}</Text>
        ) : null
      ) : (
        <Text style={styles.nota}>
          Testo riassunto a scopo di studio: le tracce ufficiali integrali sono pubblicate dal
          Ministero della Giustizia.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  sessione: { fontSize: 13, color: colors.textMuted, fontWeight: '600' },
  tipo: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.accent,
    textTransform: 'uppercase',
    marginTop: spacing.sm,
  },
  titolo: { fontSize: 22, fontWeight: '800', color: colors.text, marginTop: 4 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: spacing.sm },
  chip: {
    backgroundColor: colors.card,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipText: { fontSize: 12, color: colors.textMuted },
  premioCard: {
    backgroundColor: colors.successSoft,
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.md,
  },
  premioTesto: { fontSize: 14, color: colors.text, lineHeight: 20 },
  testoCard: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  testo: { fontSize: 15, color: colors.text, lineHeight: 24 },
  nota: { fontSize: 12, color: colors.textMuted, marginTop: spacing.md, lineHeight: 18 },
});
