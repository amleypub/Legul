import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import Animated, {
  Easing,
  interpolate,
  Extrapolation,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { descrizioneGrafico, ESPERIMENTO, guadagnoDopoUnaSettimana } from '../data/ricerca';
import { separa } from './etichette';
import { colors } from '../theme';

/*
  Il grafico dell'intro: quanto si ricorda di un testo, rileggendolo o
  mettendosi alla prova, cinque minuti e sette giorni dopo.

  È un grafico a pendenza e non a barre perché il dato che conta è
  l'incrocio. Con le sole barre a sette giorni si vedrebbe che un metodo
  vince; con le due linee si vede anche perché si sceglie quello
  sbagliato: subito dopo, rileggere sembra funzionare meglio.

  Le regole che segue:
  - **un solo colore che chiama**: lo champagne sulla serie da guardare,
    un grigio per il confronto. Due tinte vivaci si contenderebbero
    l'occhio;
  - **testo in inchiostro, mai nel colore della serie**: i valori sono
    grafite o grigio scuro, l'identità la porta il segno accanto;
  - **valori scritti accanto ai punti**, e anche una legenda: due modi di
    sapere quale linea è quale, nessuno affidato al solo colore;
  - **scala onesta**, da zero a cento: una scala tagliata farebbe
    sembrare enorme una differenza che è grande e basta.
*/

/** La serie da guardare. Lo champagne qui è un tratto, non un testo. */
const TINTA_PROVA = colors.accent;
/** La serie di confronto: un grigio neutro, verificato per daltonismo contro lo champagne. */
const TINTA_RILETTURA = '#B9BEC7';

/** Spazio ai lati per i valori scritti accanto ai punti. */
const MARGINE = 48;
/** Margine verticale interno, perché i punti agli estremi non vengano tagliati. */
const PAD = 10;

/** Un numero che sale fino al suo valore, con un'andatura che rallenta in arrivo. */
function useConteggio(obiettivo: number, attivo: boolean, ritardo: number, durata: number, ridotto: boolean) {
  const [valore, setValore] = useState(0);
  useEffect(() => {
    if (!attivo) return;
    if (ridotto) {
      setValore(obiettivo);
      return;
    }
    let fotogramma = 0;
    let inizio = 0;
    const attesa = setTimeout(() => {
      const passo = (ora: number) => {
        if (!inizio) inizio = ora;
        const p = Math.min(1, (ora - inizio) / durata);
        setValore(Math.round(obiettivo * (1 - Math.pow(1 - p, 3))));
        if (p < 1) fotogramma = requestAnimationFrame(passo);
      };
      fotogramma = requestAnimationFrame(passo);
    }, ritardo);
    return () => {
      clearTimeout(attesa);
      cancelAnimationFrame(fotogramma);
    };
  }, [attivo, obiettivo, ritardo, durata, ridotto]);
  return valore;
}

interface Props {
  /** Larghezza disponibile, cioè l'interno della scheda che lo contiene. */
  larghezza: number;
  /** Altezza del solo piano del grafico, senza legenda né etichette dei tempi. */
  altezza?: number;
  /** Diventa vero quando la scheda è comparsa: da lì partono le linee. */
  attivo: boolean;
  ritardo?: number;
  /** Movimento ridotto: tutto compare già al suo posto. */
  ridotto?: boolean;
  /** Corpo del numero principale. */
  corpoNumero?: number;
}

export function GraficoMetodo({
  larghezza,
  altezza = 140,
  attivo,
  ritardo = 0,
  ridotto = false,
  corpoNumero = 48,
}: Props) {
  const x0 = MARGINE;
  const x1 = larghezza - MARGINE;
  const y = (v: number) => PAD + (1 - v / 100) * (altezza - 2 * PAD);

  const [r0, r1] = ESPERIMENTO.rileggere;
  const [p0, p1] = ESPERIMENTO.allaProva;
  const [yR0, yP0] = separa(y(r0), y(p0));
  const [yR1, yP1] = separa(y(r1), y(p1));

  const rivela = useSharedValue(0);
  const etichetteIniziali = useSharedValue(0);

  useEffect(() => {
    if (!attivo) return;
    if (ridotto) {
      rivela.value = 1;
      etichetteIniziali.value = 1;
      return;
    }
    etichetteIniziali.value = withDelay(ritardo, withTiming(1, { duration: 320 }));
    rivela.value = withDelay(
      ritardo + 120,
      withTiming(1, { duration: 1100, easing: Easing.inOut(Easing.cubic) })
    );
  }, [attivo, ridotto, ritardo, rivela, etichetteIniziali]);

  // Le linee si disegnano da sinistra a destra: è una finestra che si
  // allarga, non un tratto animato, così funziona uguale su ogni
  // piattaforma. Parte già larga quanto i punti iniziali.
  const finestra = useAnimatedStyle(() => ({
    width: interpolate(rivela.value, [0, 1], [x0 + 6, larghezza], Extrapolation.CLAMP),
  }));
  const sinistra = useAnimatedStyle(() => ({ opacity: etichetteIniziali.value }));
  const destra = useAnimatedStyle(() => ({
    opacity: interpolate(rivela.value, [0.86, 1], [0, 1], Extrapolation.CLAMP),
    transform: [
      { translateX: interpolate(rivela.value, [0.86, 1], [-4, 0], Extrapolation.CLAMP) },
    ],
  }));

  // Il conteggio parte mentre la scheda sta ancora comparendo: fermo a
  // «+0%», anche solo per mezzo secondo, si leggerebbe come un dato.
  const guadagno = useConteggio(
    guadagnoDopoUnaSettimana(),
    attivo,
    Math.max(0, ritardo - 250),
    1350,
    ridotto
  );

  return (
    <View accessible accessibilityRole="image" accessibilityLabel={descrizioneGrafico()}>
      <View style={styles.testata} importantForAccessibility="no-hide-descendants">
        <Text
          style={[styles.numero, { fontSize: corpoNumero, lineHeight: Math.round(corpoNumero * 1.08) }]}
          maxFontSizeMultiplier={1.2}
        >
          +{guadagno}%
        </Text>
        <Text style={styles.didascalia} maxFontSizeMultiplier={1.3}>
          ricordato dopo una settimana mettendosi alla prova, invece di rileggere
          <Text style={styles.apice}>¹</Text>
        </Text>
      </View>

      <View style={styles.legenda} importantForAccessibility="no-hide-descendants">
        <View style={styles.voce}>
          <View style={[styles.campione, { backgroundColor: TINTA_PROVA }]} />
          <Text style={styles.voceTesto} maxFontSizeMultiplier={1.3}>
            Mettersi alla prova
          </Text>
        </View>
        <View style={styles.voce}>
          <View style={[styles.campione, { backgroundColor: TINTA_RILETTURA }]} />
          <Text style={[styles.voceTesto, styles.voceTestoTenue]} maxFontSizeMultiplier={1.3}>
            Rileggere
          </Text>
        </View>
      </View>

      <View style={{ width: larghezza, height: altezza }} importantForAccessibility="no-hide-descendants">
        {/* Le due verticali dei momenti e la linea dello zero: guide, non protagonisti. */}
        <Svg width={larghezza} height={altezza} style={StyleSheet.absoluteFill}>
          {[x0, x1].map((x) => (
            <Line
              key={x}
              x1={x}
              x2={x}
              y1={y(100)}
              y2={y(0)}
              stroke="rgba(20,22,27,0.10)"
              strokeWidth={1}
              strokeDasharray="2 4"
            />
          ))}
          <Line x1={x0} x2={x1} y1={y(0)} y2={y(0)} stroke="rgba(20,22,27,0.14)" strokeWidth={1} />
        </Svg>

        <Animated.View style={[styles.finestra, { height: altezza }, finestra]}>
          <Svg width={larghezza} height={altezza}>
            <Line
              x1={x0}
              y1={y(r0)}
              x2={x1}
              y2={y(r1)}
              stroke={TINTA_RILETTURA}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <Line
              x1={x0}
              y1={y(p0)}
              x2={x1}
              y2={y(p1)}
              stroke={TINTA_PROVA}
              strokeWidth={2}
              strokeLinecap="round"
            />
            {/* Un anello del colore della superficie stacca i punti dalle linee. */}
            {[
              [x0, y(r0), TINTA_RILETTURA],
              [x1, y(r1), TINTA_RILETTURA],
              [x0, y(p0), TINTA_PROVA],
              [x1, y(p1), TINTA_PROVA],
            ].map(([cx, cy, tinta]) => (
              <Circle
                key={`${cx}-${cy}`}
                cx={cx as number}
                cy={cy as number}
                r={4}
                fill={tinta as string}
                stroke="#FFFFFF"
                strokeWidth={2}
              />
            ))}
          </Svg>
        </Animated.View>

        <Animated.View style={[StyleSheet.absoluteFill, sinistra]} pointerEvents="none">
          <Text style={[styles.valore, styles.valoreTenue, styles.aSinistra, { top: yR0 - 8, right: larghezza - x0 + 10 }]}>
            {r0}%
          </Text>
          <Text style={[styles.valore, styles.aSinistra, { top: yP0 - 8, right: larghezza - x0 + 10 }]}>
            {p0}%
          </Text>
        </Animated.View>
        <Animated.View style={[StyleSheet.absoluteFill, destra]} pointerEvents="none">
          <Text style={[styles.valore, styles.valoreTenue, { top: yR1 - 8, left: x1 + 10 }]}>{r1}%</Text>
          <Text style={[styles.valore, styles.valoreForte, { top: yP1 - 8, left: x1 + 10 }]}>{p1}%</Text>
        </Animated.View>
      </View>

      <View style={[styles.tempi, { width: larghezza }]} importantForAccessibility="no-hide-descendants">
        <Text style={[styles.tempo, { left: x0 - MARGINE, width: MARGINE * 2 }]} maxFontSizeMultiplier={1.2}>
          {ESPERIMENTO.momenti[0]}
        </Text>
        <Text style={[styles.tempo, { left: x1 - MARGINE, width: MARGINE * 2 }]} maxFontSizeMultiplier={1.2}>
          {ESPERIMENTO.momenti[1]}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  testata: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 14 },
  /* Il numero principale: in inchiostro, non in champagne. Il colore
     dice quale linea guardare; il numero lo si legge. */
  numero: {
    fontWeight: '600',
    letterSpacing: -1.6,
    color: colors.text,
  },
  didascalia: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.05,
    color: colors.textMuted,
  },
  apice: { color: colors.textMuted },
  legenda: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginBottom: 6 },
  voce: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  campione: { width: 14, height: 3, borderRadius: 2 },
  voceTesto: { fontSize: 12, lineHeight: 16, fontWeight: '600', color: colors.text },
  voceTestoTenue: { color: colors.textMuted, fontWeight: '500' },
  finestra: { position: 'absolute', left: 0, top: 0, overflow: 'hidden' },
  valore: {
    position: 'absolute',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    color: colors.text,
    fontVariant: ['tabular-nums'],
  },
  valoreTenue: { color: colors.textMuted, fontWeight: '500' },
  valoreForte: { fontWeight: '700' },
  aSinistra: { textAlign: 'right' },
  tempi: { height: 18, marginTop: 4 },
  tempo: {
    position: 'absolute',
    top: 0,
    textAlign: 'center',
    fontSize: 11.5,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.textMuted,
  },
});
