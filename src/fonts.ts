import React from 'react';
import { StyleSheet, Text, type TextStyle } from 'react-native';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import {
  SourceSerif4_400Regular,
  SourceSerif4_600SemiBold,
} from '@expo-google-fonts/source-serif-4';

/**
 * I due caratteri dell'app.
 *
 * **Inter** per l'interfaccia: geometrico, stretto, disegnato per gli
 * schermi. Sostituisce Nunito, che era arrotondato e cordiale — la
 * qualità esatta di cui questo prodotto non ha bisogno.
 *
 * **Source Serif 4** per i testi di legge: tracce, paragrafi degli
 * svolgimenti, spiegazioni lunghe. La distinzione fra il carattere
 * dell'interfaccia e quello del documento è una convenzione editoriale
 * antica e vale la pena rispettarla: separa la macchina dal testo che
 * la macchina serve.
 *
 * Sul serif ho scelto un carattere da testo e non uno da titolazione.
 * Le alternative da vetrina hanno un contrasto altissimo fra pieni e
 * filetti: magnifiche in un titolo, faticose in tre paragrafi di parere,
 * che è esattamente ciò che qui si legge più a lungo.
 */
export const fontMap = {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  SourceSerif4_400Regular,
  SourceSerif4_600SemiBold,
};

/** Mappa il fontWeight richiesto al taglio di Inter corrispondente. */
function famForWeight(weight: TextStyle['fontWeight']): string {
  switch (String(weight)) {
    case '900':
    case '800':
    case '700':
    case 'bold':
      return 'Inter_700Bold';
    case '600':
      return 'Inter_600SemiBold';
    case '500':
      return 'Inter_500Medium';
    default:
      return 'Inter_400Regular';
  }
}

/**
 * Applica Inter a ogni <Text> dell'app senza toccare le singole
 * schermate: inserisce un fontFamily di default (scelto in base al
 * fontWeight) *prima* dello stile esistente, così ogni override
 * esplicito — per esempio il serif dei testi di legge — ha la meglio.
 * Le icone, che impostano già il proprio fontFamily, restano intatte.
 */
export function applyGlobalFont() {
  const AnyText = Text as unknown as { render?: (...a: unknown[]) => React.ReactElement };
  if (!AnyText.render || (AnyText as { __legulFont?: boolean }).__legulFont) return;
  const original = AnyText.render;
  AnyText.render = function (...args: unknown[]) {
    const element = original.apply(this, args);
    const prev = (element.props as { style?: unknown }).style;
    const flat = (StyleSheet.flatten(prev as TextStyle) || {}) as TextStyle;
    const fam = famForWeight(flat.fontWeight);
    // NB: usare uno stile *flatten* (oggetto singolo) e non un array:
    // react-native-web applica lo stile direttamente al DOM e un array
    // manda in crash CSSStyleDeclaration ("indexed property setter").
    return React.cloneElement(element, {
      style: StyleSheet.flatten([{ fontFamily: fam }, prev]),
    } as { style: unknown });
  };
  (AnyText as { __legulFont?: boolean }).__legulFont = true;
}
