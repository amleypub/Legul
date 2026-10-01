import React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme';

interface Props {
  children: React.ReactNode;
  /**
   * Tinta dell'alone in alto. Ogni sezione dell'app ne ha una diversa,
   * così passando da una schermata all'altra si percepisce lo
   * spostamento anche senza guardare la barra dei tab.
   */
  tinta?: string;
  style?: ViewStyle;
}

/**
 * Fondale dell'app: carta calda con luce ambientale.
 *
 * Non è un beige piatto ma una stratificazione. Una velatura verticale
 * appena più chiara in alto, poi un alone freddo in alto a sinistra e un
 * secondo alone della tinta di sezione: entrambi a opacità bassissima e
 * molto estesi, così non si leggono come macchie ma come luce che entra
 * da una finestra.
 *
 * Serve a dare al vetro qualcosa da rifrangere. Una lastra bianca e
 * traslucida sopra un fondo uniforme è indistinguibile da una scheda
 * opaca, e il linguaggio crollerebbe in un elenco di rettangoli.
 *
 * Gli aloni sono ellissi molto sfocate ottenute con gradienti, non con
 * ombre: un'ombra colorata di quelle dimensioni costa cara su Android e
 * si vedrebbe scattare durante lo scorrimento.
 */
export function Sfondo({ children, tinta, style }: Props) {
  return (
    <View style={[styles.base, style]}>
      <LinearGradient
        colors={['#FAF9F6', colors.background, '#EFEDE7']}
        locations={[0, 0.5, 1]}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />
      {/* Luce ambientale fredda: c'è sempre, indipendente dalla sezione. */}
      <LinearGradient
        colors={['rgba(120,146,196,0.10)', 'rgba(120,146,196,0)']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={styles.aloneFreddo}
        pointerEvents="none"
      />
      {!!tinta && (
        <LinearGradient
          colors={[tinta + '1A', tinta + '00']}
          start={{ x: 0.85, y: 0 }}
          end={{ x: 0.2, y: 1 }}
          style={styles.aloneSezione}
          pointerEvents="none"
        />
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: { flex: 1, backgroundColor: colors.background },
  aloneFreddo: {
    position: 'absolute',
    top: -200,
    left: -120,
    right: -40,
    height: 460,
    borderRadius: 999,
  },
  aloneSezione: {
    position: 'absolute',
    top: -160,
    left: -40,
    right: -120,
    height: 420,
    borderRadius: 999,
  },
});
