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
 * Fondale dell'app.
 *
 * Non è un colore piatto ma due velature sovrapposte: una verticale che
 * schiarisce verso il basso e una macchia colorata in alto, entrambe a
 * opacità bassissima. Serve a dare al vetro qualcosa da rifrangere —
 * una superficie traslucida sopra un fondo uniforme è indistinguibile
 * da una superficie opaca, e tutto il linguaggio crollerebbe.
 *
 * Le macchie sono ellissi molto sfocate ottenute con gradienti, non con
 * ombre: un'ombra colorata di quelle dimensioni costa cara su Android e
 * si vedrebbe scattare durante lo scorrimento.
 */
export function Sfondo({ children, tinta, style }: Props) {
  return (
    <View style={[styles.base, style]}>
      <LinearGradient
        colors={['#FFFFFF', colors.background, '#EEF1F9']}
        locations={[0, 0.45, 1]}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />
      {!!tinta && (
        <LinearGradient
          colors={[tinta + '26', tinta + '00']}
          start={{ x: 0.15, y: 0 }}
          end={{ x: 0.85, y: 1 }}
          style={styles.macchia}
          pointerEvents="none"
        />
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: { flex: 1, backgroundColor: colors.background },
  macchia: {
    position: 'absolute',
    top: -120,
    left: -60,
    right: -60,
    height: 380,
    borderRadius: 999,
  },
});
