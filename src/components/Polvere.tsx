import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';

/*
  Sostituisce i coriandoli.

  La pioggia di dischi colorati che ruotavano era il gesto più
  riconoscibile del linguaggio precedente: sette tinte primarie sature,
  forme tonde, un capitombolo pseudo-tridimensionale. La festa resta —
  la logica che decide quando mostrarla non è cambiata — ma cambia
  registro: una polvere rada di scaglie sottili, champagne e titanio,
  che sale piano e si spegne. Si nota, non festeggia.
*/

const TINTE = ['#C9A227', '#E0C05A', '#C3CAD6', '#8A93A3'];

interface Scaglia {
  left: number;
  alto: number;
  lunghezza: number;
  tinta: string;
  ritardo: number;
  deriva: number;
  durata: number;
  opacita: number;
}

function semina(quante: number, larghezza: number, altezza: number): Scaglia[] {
  const scaglie: Scaglia[] = [];
  for (let i = 0; i < quante; i++) {
    scaglie.push({
      left: Math.random() * larghezza,
      // Partono sparse su tutta l'altezza, non da un unico bordo: così
      // l'effetto è un pulviscolo nell'aria, non qualcosa che cade.
      alto: altezza * (0.15 + Math.random() * 0.8),
      lunghezza: 6 + Math.random() * 12,
      tinta: TINTE[Math.floor(Math.random() * TINTE.length)],
      ritardo: Math.random() * 900,
      deriva: (Math.random() - 0.5) * 40,
      durata: 2200 + Math.random() * 1800,
      opacita: 0.25 + Math.random() * 0.45,
    });
  }
  return scaglie;
}

function Scintilla({ scaglia }: { scaglia: Scaglia }) {
  const t = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(scaglia.ritardo),
      Animated.timing(t, {
        toValue: 1,
        duration: scaglia.durata,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  }, [t, scaglia]);

  const translateY = t.interpolate({ inputRange: [0, 1], outputRange: [0, -110] });
  const translateX = t.interpolate({ inputRange: [0, 1], outputRange: [0, scaglia.deriva] });
  const scaleY = t.interpolate({ inputRange: [0, 0.3, 1], outputRange: [0.3, 1, 0.6] });
  const opacity = t.interpolate({
    inputRange: [0, 0.2, 0.7, 1],
    outputRange: [0, scaglia.opacita, scaglia.opacita, 0],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: 'absolute',
        top: scaglia.alto,
        left: scaglia.left,
        width: 1,
        height: scaglia.lunghezza,
        backgroundColor: scaglia.tinta,
        opacity,
        transform: [{ translateY }, { translateX }, { scaleY }],
      }}
    />
  );
}

/**
 * Pulviscolo di scaglie verticali che sale e svanisce, da montare sopra
 * una schermata di esito riuscito.
 */
export function Polvere({ count = 34, run = true }: { count?: number; run?: boolean }) {
  const { width, height } = Dimensions.get('window');
  const scaglie = useMemo(() => semina(count, width, height), [count, width, height]);
  if (!run) return null;
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {scaglie.map((s, i) => (
        <Scintilla key={i} scaglia={s} />
      ))}
    </View>
  );
}
