import React from 'react';
import { Linking, SectionList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { buildAffiliateUrl } from '../config/affiliate';
import { materiali } from '../data/materiali';
import { Card3D } from '../components/Card3D';
import { Button3D } from '../components/Button3D';
import { Mascot } from '../components/Mascot';
import type { MaterialeEsame } from '../types';
import { colors, radius, spacing } from '../theme';

const CATEGORIE: MaterialeEsame['categoria'][] = ['Codici', 'Manuali', 'Cancelleria e utilità'];

const ICONA_CATEGORIA: Record<MaterialeEsame['categoria'], keyof typeof Ionicons.glyphMap> = {
  Codici: 'library',
  Manuali: 'school',
  'Cancelleria e utilità': 'color-wand',
};

async function apriSuAmazon(m: MaterialeEsame) {
  try {
    await Linking.openURL(buildAffiliateUrl(m));
  } catch {
    // link non apribile: nessuna azione
  }
}

export default function MaterialeScreen() {
  const sections = CATEGORIE.map((categoria) => ({
    title: categoria,
    data: materiali.filter((m) => m.categoria === categoria),
  })).filter((s) => s.data.length > 0);

  return (
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.content}
      sections={sections}
      keyExtractor={(m) => m.id}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={
        <View style={styles.headerCard}>
          <Mascot state="studying" size={72} />
          <Text style={styles.headerText}>
            Tutto ciò che ti serve per la prova: i codici ammessi in sede d’esame, i manuali per
            esercitarti e qualche accessorio salva-tempo.
          </Text>
        </View>
      }
      renderSectionHeader={({ section }) => (
        <View style={styles.categoriaRow}>
          <Ionicons name={ICONA_CATEGORIA[section.title]} size={20} color={colors.primary} />
          <Text style={styles.categoria}>{section.title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <Card3D edgeColor="#DfE3EC" radiusSize={radius.lg} style={styles.cardOuter} contentStyle={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.iconTile}>
              <Ionicons name="book" size={20} color={colors.accentEdge} />
            </View>
            <Text style={styles.titolo}>{item.titolo}</Text>
          </View>
          <Text style={styles.descrizione}>{item.descrizione}</Text>
          <Button3D
            label="Vedi su Amazon"
            onPress={() => apriSuAmazon(item)}
            color={colors.accent}
            edgeColor={colors.accentEdge}
            textColor={colors.primary}
            style={styles.btn}
          />
        </Card3D>
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
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  headerText: { flex: 1, fontSize: 13, color: colors.textMuted, lineHeight: 19 },
  categoriaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  categoria: { fontSize: 18, fontWeight: '800', color: colors.primary },
  cardOuter: { marginBottom: spacing.sm },
  card: { padding: spacing.md },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  iconTile: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titolo: { flex: 1, fontSize: 16, fontWeight: '800', color: colors.text },
  descrizione: { fontSize: 13, color: colors.textMuted, lineHeight: 19, marginTop: spacing.sm },
  btn: { marginTop: spacing.md },
  disclosure: {
    fontSize: 11,
    color: colors.textMuted,
    lineHeight: 16,
    marginTop: spacing.md,
    textAlign: 'center',
  },
});
