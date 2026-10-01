import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing, type } from '../theme';
import { Logo } from './Logo';

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
  marchio = false,
}: {
  titolo: string;
  sottotitolo?: string;
  /**
   * Al posto del titolo scritto, il logo. Si usa in Home, dove il titolo
   * era la parola «Legul» composta nel carattere dell'interfaccia: cioè
   * il nome del prodotto scritto in un modo che non è il suo.
   */
  marchio?: boolean;
}) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.wrap, { paddingTop: insets.top + spacing.sm }]}>
      {marchio ? (
        <Logo larghezza={128} allineamento="flex-start" style={styles.marchio} />
      ) : (
        <Text style={styles.titolo} accessibilityRole="header">
          {titolo}
        </Text>
      )}
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
  titolo: { ...type.display, color: colors.text },
  // Il corsivo del logo sporge a sinistra rispetto al margine del testo:
  // il ritaglio ha un piccolo bordo trasparente, che qui si recupera.
  marchio: { marginLeft: -6, marginBottom: 2 },
  sottotitolo: {
    ...type.corpo,
    color: colors.textMuted,
    marginTop: 5,
    maxWidth: 460,
  },
});
