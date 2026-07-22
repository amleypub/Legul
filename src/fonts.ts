import React from 'react';
import { StyleSheet, Text, type TextStyle } from 'react-native';
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

/** Font da caricare all'avvio con useFonts. */
export const fontMap = {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
};

/** Mappa il fontWeight richiesto al file Nunito corrispondente. */
function famForWeight(weight: TextStyle['fontWeight']): string {
  switch (String(weight)) {
    case '900':
    case '800':
      return 'Nunito_800ExtraBold';
    case '700':
    case 'bold':
      return 'Nunito_700Bold';
    case '600':
    case '500':
      return 'Nunito_600SemiBold';
    default:
      return 'Nunito_400Regular';
  }
}

/**
 * Applica Nunito a ogni <Text> dell'app senza toccare le singole schermate:
 * inserisce un fontFamily di default (scelto in base al fontWeight) prima
 * dello stile esistente, così eventuali override espliciti hanno la meglio.
 * Le icone (che impostano già il proprio fontFamily) restano intatte.
 */
export function applyGlobalFont() {
  const AnyText = Text as unknown as { render?: (...a: unknown[]) => React.ReactElement };
  if (!AnyText.render || (AnyText as { __nunito?: boolean }).__nunito) return;
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
  (AnyText as { __nunito?: boolean }).__nunito = true;
}
