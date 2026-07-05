import React from 'react';
import { Linking, Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import { buildAffiliateUrl } from '../config/affiliate';
import { materiali } from '../data/materiali';
import type { MaterialeEsame } from '../types';
import { colors, radius, spacing } from '../theme';

const CATEGORIE: MaterialeEsame['categoria'][] = ['Codici', 'Manuali', 'Cancelleria e utilità'];

export default function MaterialeScreen() {
  const sections = CATEGORIE.map((categoria) => ({
    title: categoria,
    data: materiali.filter((m) => m.categoria === categoria),
  })).filter((s) => s.data.length > 0);

  async function apriSuAmazon(m: MaterialeEsame) {
    const url = buildAffiliateUrl(m);
    try {
      await Linking.openURL(url);
    } catch {
      // link non apribile: nessuna azione
    }
  }

  return (
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.content}
      sections={sections}
      keyExtractor={(m) => m.id}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={
        <Text style={styles.intro}>
          Tutto ciò che ti serve per affrontare la prova: i codici ammessi in sede d’esame, i
          manuali per esercitarti e qualche accessorio salva-tempo. 🧑‍⚖️
        </Text>
      }
      renderSectionHeader={({ section }) => <Text style={styles.categoria}>{section.title}</Text>}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.titolo}>{item.titolo}</Text>
          </View>
          <Text style={styles.descrizione}>{item.descrizione}</Text>
          <Pressable
            style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
            onPress={() => apriSuAmazon(item)}
          >
            <Text style={styles.btnTesto}>🛒 Vedi su Amazon</Text>
          </Pressable>
        </View>
      )}
      ListFooterComponent={
        <Text style={styles.disclosure}>
          In qualità di Affiliati Amazon, riceviamo un guadagno dagli acquisti idonei effettuati
          tramite i link presenti in questa sezione, senza alcun costo aggiuntivo per te.
        </Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  intro: { fontSize: 14, color: colors.textMuted, marginBottom: spacing.sm, lineHeight: 20 },
  categoria: {
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
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  emoji: { fontSize: 24 },
  titolo: { flex: 1, fontSize: 16, fontWeight: '700', color: colors.text },
  descrizione: { fontSize: 13, color: colors.textMuted, lineHeight: 19, marginTop: 6 },
  btn: {
    backgroundColor: colors.accent,
    borderRadius: radius.sm,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  btnPressed: { opacity: 0.85 },
  btnTesto: { fontSize: 14, fontWeight: '800', color: colors.primary },
  disclosure: {
    fontSize: 11,
    color: colors.textMuted,
    lineHeight: 16,
    marginTop: spacing.md,
    textAlign: 'center',
  },
});
