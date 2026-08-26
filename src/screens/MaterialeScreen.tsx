import React from 'react';
import { Linking, SectionList, StyleSheet, Text, View } from 'react-native';
import { Icona } from '../components/Icona';
import { buildAffiliateUrl } from '../config/affiliate';
import { materiali } from '../data/materiali';
import { Superficie } from '../components/Superficie';
import { Monolite } from '../components/Monolite';
import type { MaterialeEsame } from '../types';
import { TitoloSchermata } from '../components/TitoloSchermata';
import { Sfondo } from '../components/Sfondo';
import { SPAZIO_TAB, alpha, colors, materiaColors, radius, spacing } from '../theme';

const CATEGORIE: MaterialeEsame['categoria'][] = ['Codici', 'Manuali', 'Cancelleria e utilità'];

const ICONA_CATEGORIA: Record<MaterialeEsame['categoria'], string> = {
  Codici: 'library',
  Manuali: 'school',
  'Cancelleria e utilità': 'color-wand',
};

/** Icona mostrata nella tessera del singolo prodotto. */
const ICONA_MATERIALE: Record<MaterialeEsame['categoria'], string> = {
  Codici: 'book',
  Manuali: 'reader',
  'Cancelleria e utilità': 'briefcase',
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
    <Sfondo tinta={materiaColors['Diritto amministrativo'].start}>
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.content}
      sections={sections}
      keyExtractor={(m) => m.id}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={
        <>
        <TitoloSchermata titolo="Materiale per l’esame" />
        <View style={styles.headerCard}>
          <Monolite state="studying" size={72} />
          <Text style={styles.headerText}>
            Tutto ciò che ti serve per la prova: i codici ammessi in sede d’esame, i manuali per
            esercitarti e qualche accessorio salva-tempo.
          </Text>
        </View>
        </>
      }
      renderSectionHeader={({ section }) => (
        <View style={styles.categoriaRow}>
          <Icona nome={ICONA_CATEGORIA[section.title]} size={20} color={colors.accent} />
          <Text style={styles.categoria}>{section.title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <Superficie
          raggio={radius.xl}
          style={styles.cardOuter}
          contentStyle={styles.card}
          onPress={() => apriSuAmazon(item)}
        >
          <View style={styles.iconTile}>
            <Icona nome={ICONA_MATERIALE[item.categoria]} size={22} color={colors.accentEdge} />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.titolo}>{item.titolo}</Text>
            <Text style={styles.descrizione} numberOfLines={2}>
              {item.descrizione}
            </Text>
            <View style={styles.chip}>
              <Icona nome="cart" size={13} color={colors.primary} />
              <Text style={styles.chipTesto}>Vedi su Amazon</Text>
            </View>
          </View>
        </Superficie>
      )}
      ListFooterComponent={
        <Text style={styles.disclosure}>
          In qualità di Affiliati Amazon, riceviamo un guadagno dagli acquisti idonei effettuati
          tramite i link presenti in questa sezione, senza alcun costo aggiuntivo per te.
        </Text>
      }
    />
    </Sfondo>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  content: { padding: spacing.md, paddingBottom: SPAZIO_TAB },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  headerText: { flex: 1, fontSize: 13, color: colors.textMuted, lineHeight: 19 },
  categoriaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  categoria: { fontSize: 18, fontWeight: '600', color: colors.primary },
  cardOuter: { marginBottom: spacing.sm },
  card: {
    flexDirection: 'row',
    gap: spacing.sm + 4,
    paddingVertical: spacing.md - 2,
    paddingHorizontal: spacing.md - 2,
  },
  cardText: { flex: 1 },
  iconTile: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: alpha.bordo,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titolo: { fontSize: 16, fontWeight: '600', color: colors.text, lineHeight: 21 },
  descrizione: { fontSize: 13, color: colors.textMuted, lineHeight: 18, marginTop: 3 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 5,
    marginTop: spacing.sm,
    backgroundColor: colors.accent,
    borderRadius: radius.sm,
    paddingHorizontal: 11,
    paddingVertical: 5,
  },
  chipTesto: { fontSize: 12, fontWeight: '600', color: colors.primary },
  disclosure: {
    fontSize: 11,
    color: colors.textMuted,
    lineHeight: 16,
    marginTop: spacing.md,
    textAlign: 'center',
  },
});
