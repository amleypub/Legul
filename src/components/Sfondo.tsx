import React from 'react';
import { StyleSheet, useWindowDimensions, View, type ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Luce } from './Aurora';
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
 * Gli aloni sono gradienti radiali che si spengono a campana, non ombre:
 * un'ombra colorata di quelle dimensioni costa cara su Android e si
 * vedrebbe scattare durante lo scorrimento. Prima erano rettangoli
 * arrotondati riempiti con un gradiente lineare, e dove la schermata è
 * vuota — l'intro, l'accesso — se ne vedeva il bordo: un arco netto a
 * metà altezza, che sembrava un errore di stampa.
 */
export function Sfondo({ children, tinta, style }: Props) {
  const { width: W } = useWindowDimensions();
  const freddo = W * 1.5;
  const sezione = W * 1.4;
  return (
    <View style={[styles.base, style]}>
      <LinearGradient
        colors={['#FAF9F6', colors.background, '#EFEDE7']}
        locations={[0, 0.5, 1]}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />
      {/* Luce ambientale fredda: c'è sempre, indipendente dalla sezione. */}
      <Luce
        colore="#7892C4"
        opacita={0.12}
        diametro={freddo}
        style={{ ...styles.alone, left: W * 0.1 - freddo / 2, top: 30 - freddo / 2 }}
      />
      {!!tinta && (
        <Luce
          colore={tinta}
          opacita={0.12}
          diametro={sezione}
          style={{ ...styles.alone, left: W * 0.95 - sezione / 2, top: 10 - sezione / 2 }}
        />
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: { flex: 1, backgroundColor: colors.background },
  alone: { position: 'absolute' },
});
