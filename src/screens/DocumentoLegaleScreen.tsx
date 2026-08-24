import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DOCUMENTI } from '../data/legale';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, radius, spacing } from '../theme';

/**
 * Mostra un documento legale (privacy o termini) leggendo dalla stessa
 * sorgente da cui vengono generate le pagine pubbliche.
 *
 * Qui la leggibilità conta più dello stile: righe corte, buona
 * interlinea, numerazione visibile. Un testo legale illeggibile è un
 * testo che nessuno legge, e questo vale anche davanti a un giudice.
 */
export default function DocumentoLegaleScreen({
  route,
}: RootStackScreenProps<'DocumentoLegale'>) {
  const documento = DOCUMENTI[route.params.documento];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.occhiello}>{documento.occhiello}</Text>
      <View style={styles.dataPill}>
        <Text style={styles.data}>Aggiornato il {documento.aggiornatoIl}</Text>
      </View>

      {documento.sezioni.map((sezione) => (
        <View key={sezione.titolo} style={styles.sezione}>
          <Text style={styles.sezioneTitolo}>{sezione.titolo}</Text>
          {sezione.paragrafi.map((p, i) => (
            <Text key={i} style={styles.paragrafo}>
              {p}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  content: { padding: spacing.md, paddingBottom: spacing.xl * 2 },
  occhiello: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
    fontWeight: '600',
  },
  dataPill: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accentSoft,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginTop: spacing.sm,
  },
  data: { fontSize: 12, fontWeight: '700', color: colors.accentEdge },
  sezione: { marginTop: spacing.lg },
  sezioneTitolo: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  paragrafo: {
    fontSize: 14.5,
    lineHeight: 23,
    color: colors.text,
    marginBottom: spacing.sm + 2,
  },
});
