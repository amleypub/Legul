import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing } from '../theme';

/**
 * Titolo in testa a una schermata con tab.
 *
 * Le tab non hanno più la barra di navigazione di sistema — ripeteva il
 * nome della sezione e rubava spazio — quindi il titolo vive dentro il
 * contenuto e questo componente si occupa anche di stare sotto la
 * status bar, che senza barra sarebbe altrimenti sovrapposta al testo.
 */
export function TitoloSchermata({
  titolo,
  sottotitolo,
}: {
  titolo: string;
  sottotitolo?: string;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.wrap, { paddingTop: insets.top + spacing.sm }]}>
      <Text style={styles.titolo} accessibilityRole="header">
        {titolo}
      </Text>
      {sottotitolo ? <Text style={styles.sottotitolo}>{sottotitolo}</Text> : null}
    </View>
  );
}

/** Solo lo spazio della status bar, per le schermate che aprono con altro. */
export function SpazioStatusBar({ extra = 0 }: { extra?: number }) {
  const insets = useSafeAreaInsets();
  return <View style={{ height: insets.top + extra }} />;
}

const styles = StyleSheet.create({
  wrap: { marginBottom: spacing.md },
  titolo: { fontSize: 28, fontWeight: '900', color: colors.text, letterSpacing: -0.3 },
  sottotitolo: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
    marginTop: 4,
  },
});
