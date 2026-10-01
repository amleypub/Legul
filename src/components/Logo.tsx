import React from 'react';
import { Image, StyleSheet, View, type ImageStyle, type ViewStyle } from 'react-native';

/*
  Il logo di Legul: la parola in corsivo con il gradiente dal blu notte al
  pesca, e sotto la trascrizione fonetica /ˈliːɡəl/.

  Le due parti sono immagini separate, ricavate dal sorgente da
  `scripts/genera-icone.mjs`: l'intro le fa comparire in due tempi, e
  altrove si usa solo la parola. Sono su fondo trasparente, quindi si
  posano su qualunque superficie chiara senza il riquadro crema del file
  originale.
*/

export const SORGENTE_PAROLA = require('../../assets/logo/parola.png');
export const SORGENTE_FONETICA = require('../../assets/logo/fonetica.png');

/**
 * Dimensioni in pixel dei due ritagli, come li produce il generatore.
 *
 * Stanno qui scritte e non lette a runtime perché `resolveAssetSource`
 * non c'è su tutte le piattaforme. Se il logo viene rigenerato e queste
 * non tornano, `logo.test.ts` fallisce dicendo quali valori mettere: un
 * logo deformato non dà errori, si vede soltanto.
 */
export const DIMENSIONI_LOGO = {
  parola: { larghezza: 622, altezza: 307 },
  fonetica: { larghezza: 239, altezza: 67 },
} as const;

/** Altezza della parola per una data larghezza. */
export function altezzaParola(larghezza: number): number {
  const { parola } = DIMENSIONI_LOGO;
  return Math.round((larghezza * parola.altezza) / parola.larghezza);
}

/**
 * Larghezza della fonetica per una data larghezza della parola.
 *
 * I due ritagli escono dallo stesso sorgente alla stessa scala, quindi il
 * rapporto fra le larghezze è quello del disegno originale: la fonetica
 * resta della misura che il logo le assegna.
 */
export function larghezzaFonetica(larghezzaParola: number): number {
  const { parola, fonetica } = DIMENSIONI_LOGO;
  return Math.round((larghezzaParola * fonetica.larghezza) / parola.larghezza);
}

export function altezzaFonetica(larghezzaParola: number): number {
  const { fonetica } = DIMENSIONI_LOGO;
  const w = larghezzaFonetica(larghezzaParola);
  return Math.round((w * fonetica.altezza) / fonetica.larghezza);
}

/**
 * La sola parola.
 *
 * `sfocatura` serve all'intro, dove il logo entra da fuori fuoco: una
 * copia sfocata sotto la nitida, e le due si scambiano l'opacità.
 */
export function LogoParola({
  larghezza,
  sfocatura,
  style,
}: {
  larghezza: number;
  sfocatura?: number;
  style?: ImageStyle;
}) {
  return (
    <Image
      source={SORGENTE_PAROLA}
      style={[{ width: larghezza, height: altezzaParola(larghezza) }, style]}
      resizeMode="contain"
      blurRadius={sfocatura}
      accessibilityIgnoresInvertColors
    />
  );
}

/** La sola trascrizione fonetica, alla scala della parola indicata. */
export function LogoFonetica({
  larghezzaParola,
  style,
}: {
  larghezzaParola: number;
  style?: ImageStyle;
}) {
  return (
    <Image
      source={SORGENTE_FONETICA}
      style={[
        {
          width: larghezzaFonetica(larghezzaParola),
          height: altezzaFonetica(larghezzaParola),
        },
        style,
      ]}
      resizeMode="contain"
    />
  );
}

/**
 * Il logo, con o senza fonetica.
 *
 * Per chi usa un lettore di schermo è un'intestazione che si chiama
 * «Legul»: l'immagine da sola verrebbe letta come «immagine», o saltata.
 */
export function Logo({
  larghezza,
  fonetica = false,
  allineamento = 'center',
  style,
}: {
  larghezza: number;
  fonetica?: boolean;
  allineamento?: 'center' | 'flex-start';
  style?: ViewStyle;
}) {
  return (
    <View
      style={[styles.colonna, { alignItems: allineamento }, style]}
      accessible
      accessibilityRole="header"
      accessibilityLabel="Legul"
    >
      <LogoParola larghezza={larghezza} />
      {fonetica && (
        <LogoFonetica
          larghezzaParola={larghezza}
          // La fonetica sta centrata sotto la parola, come nel disegno,
          // anche quando il blocco è allineato a sinistra.
          style={allineamento === 'flex-start' ? { marginLeft: centratura(larghezza) } : undefined}
        />
      )}
    </View>
  );
}

/** Rientro che centra la fonetica sotto una parola allineata a sinistra. */
function centratura(larghezzaParola: number): number {
  return Math.round((larghezzaParola - larghezzaFonetica(larghezzaParola)) / 2);
}

const styles = StyleSheet.create({
  colonna: {},
});
