import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  type TextStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Animated, {
  cancelAnimation,
  Easing,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { Aurora } from '../components/Aurora';
import { Bottone } from '../components/Bottone';
import { GraficoMetodo } from '../components/GraficoMetodo';
import {
  altezzaFonetica,
  altezzaParola,
  LogoFonetica,
  LogoParola,
} from '../components/Logo';
import { APICI, FONTI } from '../data/ricerca';
import { DURATA_INTRO } from '../navigation/primoAvvio';
import { colors, FONT_INTRO, ombra, radius } from '../theme';

/*
  L'introduzione: due pagine, meno di dieci secondi.

  1. **Benvenuto.** Il logo entra da fuori fuoco dentro una luce nei
     colori del marchio; sotto compare la fonetica, poi un filo d'oro e
     due righe di benvenuto, parola per parola.
  2. **Il metodo.** La luce si solleva come un sipario e porta con sé il
     logo, che diventa la testata della pagina; sotto si rivela il perché
     del metodo, con il grafico di una ricerca e le fonti in nota.

  Le pagine avanzano da sole. Toccando si va avanti subito, tenendo
  premuto ci si ferma a leggere, «Salta» porta all'accesso. Con un
  lettore di schermo attivo non avanza niente da solo: un testo che
  scappa mentre lo si ascolta è peggio di un testo assente.
*/

const MORBIDA = Easing.out(Easing.cubic);

/** Un valore che va da 0 a 1 dopo un ritardo, quando `attivo` diventa vero. */
function useComparsa(attivo: boolean, ritardo: number, ridotto: boolean, durata = 560) {
  const v = useSharedValue(0);
  useEffect(() => {
    if (!attivo) return;
    v.value = ridotto
      ? withTiming(1, { duration: 220 })
      : withDelay(ritardo, withTiming(1, { duration: durata, easing: MORBIDA }));
  }, [attivo, ritardo, ridotto, durata, v]);
  return v;
}

/** Stile di un elemento che sale di poco e si accende. */
function useStileComparsa(v: SharedValue<number>, ridotto: boolean, da = 8) {
  return useAnimatedStyle(() => ({
    opacity: v.value,
    transform: [{ translateY: ridotto ? 0 : (1 - v.value) * da }],
  }));
}

function Parola({
  testo,
  attivo,
  ritardo,
  ridotto,
  style,
}: {
  testo: string;
  attivo: boolean;
  ritardo: number;
  ridotto: boolean;
  style: TextStyle | TextStyle[];
}) {
  const v = useComparsa(attivo, ritardo, ridotto, 620);
  const stile = useStileComparsa(v, ridotto, 10);
  return (
    <Animated.Text style={[style, stile]} maxFontSizeMultiplier={1.25}>
      {testo}
    </Animated.Text>
  );
}

/**
 * Una frase che compare una parola alla volta.
 *
 * Per i lettori di schermo resta una frase sola: le parole separate
 * verrebbero lette come otto elementi distinti.
 */
function Parole({
  testo,
  attivo,
  ritardo,
  ridotto,
  passo = 70,
  centrata = false,
  style,
  intestazione = false,
}: {
  testo: string;
  attivo: boolean;
  ritardo: number;
  ridotto: boolean;
  passo?: number;
  centrata?: boolean;
  style: TextStyle;
  intestazione?: boolean;
}) {
  const parole = testo.split(' ');
  return (
    <View
      accessible
      accessibilityRole={intestazione ? 'header' : 'text'}
      accessibilityLabel={testo}
      style={[
        styles.parole,
        { justifyContent: centrata ? 'center' : 'flex-start', columnGap: Math.round((style.fontSize ?? 16) * 0.26) },
      ]}
    >
      {parole.map((p, i) => (
        <Parola
          key={`${i}-${p}`}
          testo={p}
          attivo={attivo}
          ritardo={ritardo + i * passo}
          ridotto={ridotto}
          style={style}
        />
      ))}
    </View>
  );
}

/** Un passo del ciclo, che compare quando tocca a lui. */
function Passo({
  testo,
  attivo,
  ritardo,
  ridotto,
  conFreccia,
}: {
  testo: string;
  attivo: boolean;
  ritardo: number;
  ridotto: boolean;
  conFreccia: boolean;
}) {
  const v = useComparsa(attivo, ritardo, ridotto, 420);
  const stile = useStileComparsa(v, ridotto, 6);
  return (
    <Animated.View style={[styles.passo, stile]}>
      <View style={styles.passoChip}>
        <Text style={styles.passoTesto} maxFontSizeMultiplier={1.2}>
          {testo}
        </Text>
      </View>
      {conFreccia && <Text style={styles.freccia}>→</Text>}
    </Animated.View>
  );
}

const PASSI_CICLO = ['pensare', 'ricordare', 'rispondere', 'feedback', 'riprovare'];

/**
 * Il ciclo di ogni esercizio: i cinque passi si accendono uno dopo
 * l'altro, come si susseguono davvero in una lezione. Per un lettore di
 * schermo è una frase sola.
 */
function Ciclo({ attivo, ritardo, ridotto }: { attivo: boolean; ritardo: number; ridotto: boolean }) {
  return (
    <View
      style={styles.ciclo}
      accessible
      accessibilityLabel={`Ogni esercizio: ${PASSI_CICLO.join(', ')}.`}
    >
      {PASSI_CICLO.map((p, i) => (
        <Passo
          key={p}
          testo={p}
          attivo={attivo}
          ritardo={ritardo + i * 180}
          ridotto={ridotto}
          conFreccia={i < PASSI_CICLO.length - 1}
        />
      ))}
    </View>
  );
}

/** Una tacca della barra in alto: piena, vuota, o che si riempie col tempo. */
function Tacca({
  indice,
  pagina,
  avanzamento,
  ferma,
}: {
  indice: number;
  pagina: number;
  avanzamento: SharedValue<number>;
  ferma: boolean;
}) {
  const stile = useAnimatedStyle(() => {
    const quota =
      indice < pagina ? 1 : indice > pagina ? 0 : ferma ? 1 : Math.min(1, Math.max(0, avanzamento.value));
    return { width: `${quota * 100}%` };
  });
  return (
    <View style={styles.tacca}>
      <Animated.View style={[styles.taccaPiena, stile]} />
    </View>
  );
}

export default function IntroScreen({ onFine }: { onFine: () => void }) {
  const { width: W, height: H } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const ridotto = useReducedMotion();
  const [lettore, setLettore] = useState(false);
  const [pagina, setPagina] = useState(0);
  const paginaRef = useRef(0);
  const finito = useRef(false);

  useEffect(() => {
    // Sul web la domanda non ha risposta: react-native-web risponde
    // sempre di sì, e l'intro resterebbe ferma per tutti.
    if (Platform.OS === 'web') return;
    let vivo = true;
    AccessibilityInfo.isScreenReaderEnabled()
      .then((attivo) => vivo && setLettore(attivo))
      .catch(() => {});
    const sub = AccessibilityInfo.addEventListener('screenReaderChanged', setLettore);
    return () => {
      vivo = false;
      sub.remove();
    };
  }, []);

  const chiudi = useCallback(() => {
    if (finito.current) return;
    finito.current = true;
    onFine();
  }, [onFine]);

  const avanti = useCallback(() => {
    if (paginaRef.current >= DURATA_INTRO.length - 1) {
      chiudi();
      return;
    }
    paginaRef.current += 1;
    setPagina(paginaRef.current);
  }, [chiudi]);

  // ——— Il tempo di ciascuna pagina ———
  const avanzamento = useSharedValue(0);
  const inPausa = useRef(false);

  const avvia = useCallback(
    (da: number) => {
      const durata = DURATA_INTRO[paginaRef.current] * (1 - da);
      avanzamento.value = withTiming(1, { duration: durata, easing: Easing.linear }, (completata) => {
        if (completata) runOnJS(avanti)();
      });
    },
    [avanti, avanzamento]
  );

  useEffect(() => {
    avanzamento.value = 0;
    if (lettore) return;
    avvia(0);
    return () => cancelAnimation(avanzamento);
  }, [pagina, lettore, avvia, avanzamento]);

  const pausa = () => {
    if (lettore) return;
    inPausa.current = true;
    cancelAnimation(avanzamento);
  };
  const riprendi = () => {
    if (!inPausa.current) return;
    inPausa.current = false;
    avvia(avanzamento.value);
  };

  // ——— Geometria: dove sta il logo nell'una e nell'altra pagina ———
  const compatto = H < 760;
  const L1 = Math.min(236, W * 0.6);
  const h1 = altezzaParola(L1);
  const L2 = compatto ? 92 : 104;
  const h2 = altezzaParola(L2);
  const hf = altezzaFonetica(L1);
  const testataY = insets.top + 10;
  const ALTEZZA_TESTATA = 34;

  // Pagina 1: il blocco logo-fonetica-benvenuto, poco sopra il centro.
  const bloccoPagina1 = h1 + 8 + hf + 26 + 2 + 26 + 34 + 10 + 44;
  const y1 = Math.max(testataY + ALTEZZA_TESTATA + 40, (H - bloccoPagina1) / 2 - H * 0.03);
  const x1 = (W - L1) / 2;
  // Pagina 2: il logo diventa la testata, in alto a sinistra.
  const MARGINE = 24;
  const x2 = MARGINE;
  const y2 = testataY + ALTEZZA_TESTATA + (compatto ? 4 : 10);
  const scala = L2 / L1;
  const dx = x2 - x1 - (L1 * (1 - scala)) / 2;
  const dy = y2 - y1 - (h1 * (1 - scala)) / 2;
  const inizioPagina2 = y2 + h2 + (compatto ? 10 : 18);

  // L'aurora è centrata sul logo della prima pagina e sale con lui.
  const AW = W * 1.2;
  const centroLogo1 = y1 + h1 / 2;
  const auroraTop = centroLogo1 - AW * 0.64;
  const sollevamento = centroLogo1 - (y2 + h2 / 2) + AW * 0.12;

  // ——— Pagina 1 ———
  const luce = useSharedValue(0);
  const logo = useSharedValue(0);
  const fuoco = useSharedValue(0);
  const fase = useSharedValue(0);
  const fonetica = useComparsa(true, 950, ridotto, 600);
  const filo = useComparsa(true, 1250, ridotto, 700);
  const sottotitolo = useComparsa(true, 2050, ridotto, 800);

  useEffect(() => {
    luce.value = withTiming(1, { duration: ridotto ? 300 : 1400, easing: MORBIDA });
    logo.value = withDelay(ridotto ? 0 : 150, withTiming(1, { duration: ridotto ? 300 : 900, easing: MORBIDA }));
    fuoco.value = ridotto ? 1 : withDelay(380, withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.quad) }));
  }, [luce, logo, fuoco, ridotto]);

  const fase3 = useSharedValue(0);
  useEffect(() => {
    if (pagina < 1) return;
    const andatura = { duration: ridotto ? 250 : 950, easing: Easing.inOut(Easing.cubic) };
    fase.value = withTiming(1, andatura);
    if (pagina >= 2) fase3.value = withTiming(1, { ...andatura, duration: ridotto ? 250 : 700 });
  }, [pagina, fase, fase3, ridotto]);

  const stileAurora = useAnimatedStyle(() => ({
    opacity: luce.value * (1 - fase.value * 0.38),
    transform: [
      { translateY: ridotto ? 0 : -fase.value * sollevamento },
      { scale: 1 - fase.value * 0.12 },
    ],
  }));

  const stileLogo = useAnimatedStyle(() => {
    const f = fase.value;
    const entrata = ridotto ? 1 : logo.value;
    return {
      opacity: logo.value,
      transform: [
        { translateX: f * dx },
        { translateY: f * dy + (1 - entrata) * 8 },
        { scale: (1 + f * (scala - 1)) * (1.045 - 0.045 * entrata) },
      ],
    };
  });
  const stileSfocato = useAnimatedStyle(() => ({ opacity: 1 - fuoco.value }));
  const stileNitido = useAnimatedStyle(() => ({ opacity: fuoco.value }));

  const stileUscita1 = useAnimatedStyle(() => ({
    opacity: interpolate(fase.value, [0, 0.45], [1, 0], Extrapolation.CLAMP),
    transform: [{ translateY: ridotto ? 0 : -fase.value * 18 }],
  }));
  const stileFonetica = useStileComparsa(fonetica, ridotto, 5);
  const stileSottotitolo = useStileComparsa(sottotitolo, ridotto, 6);
  const stileFilo = useAnimatedStyle(() => ({ width: 40 * filo.value, opacity: filo.value }));

  // ——— Pagina 2: il metodo ———
  const seconda = pagina >= 1;
  const terza = pagina >= 2;
  const ultima = pagina === DURATA_INTRO.length - 1;
  const occhiello = useComparsa(seconda, 480, ridotto);
  const corpo = useComparsa(seconda, 1150, ridotto, 640);
  const principi = useComparsa(seconda, 1500, ridotto, 640);
  const scheda = useComparsa(seconda, 1850, ridotto, 700);
  const note = useComparsa(seconda, 3300, ridotto, 700);
  const suggerimento = useComparsa(seconda && !lettore, 3900, ridotto, 700);
  const stileOcchiello = useStileComparsa(occhiello, ridotto, 6);
  const stileCorpo = useStileComparsa(corpo, ridotto, 8);
  const stilePrincipi = useStileComparsa(principi, ridotto, 8);
  const stileScheda = useAnimatedStyle(() => ({
    opacity: scheda.value,
    transform: [
      { translateY: ridotto ? 0 : (1 - scheda.value) * 18 },
      { scale: ridotto ? 1 : 0.985 + 0.015 * scheda.value },
    ],
  }));
  const stileNote = useStileComparsa(note, ridotto, 4);
  const stileSuggerimento = useAnimatedStyle(() => ({ opacity: suggerimento.value }));
  // La pagina del metodo esce salendo, come la prima, quando arriva il gioco.
  const stileUscita2 = useAnimatedStyle(() => ({
    opacity: interpolate(fase3.value, [0, 0.5], [1, 0], Extrapolation.CLAMP),
    transform: [{ translateY: ridotto ? 0 : -fase3.value * 18 }],
  }));

  // ——— Pagina 3: il gioco ———
  const occhiello3 = useComparsa(terza, 420, ridotto);
  const corpo3 = useComparsa(terza, 1000, ridotto, 640);
  const filo3 = useComparsa(terza, 2650, ridotto, 700);
  const motto = useComparsa(terza, 2850, ridotto, 800);
  const nota3 = useComparsa(terza, 3200, ridotto, 700);
  const stileOcchiello3 = useStileComparsa(occhiello3, ridotto, 6);
  const stileCorpo3 = useStileComparsa(corpo3, ridotto, 8);
  const stileFilo3 = useAnimatedStyle(() => ({ width: 40 * filo3.value, opacity: filo3.value }));
  const stileMotto = useStileComparsa(motto, ridotto, 10);
  const stileNota3 = useStileComparsa(nota3, ridotto, 4);

  // Garamond ha l'occhio piccolo: a parità di corpo sembra più minuto.
  const corpoTitolo = compatto ? 29 : 34;
  const larghezzaGrafico = W - MARGINE * 2 - 18 * 2;
  // Il grafico prende l'altezza che lo schermo concede: su un telefono
  // alto resterebbe altrimenti un vuoto sotto le note.
  const altezzaGrafico = compatto ? 84 : Math.round(Math.min(170, Math.max(110, 110 + (H - 820) * 0.7)));

  return (
    <View style={styles.radice}>
      <StatusBar style="dark" />
      <Pressable
        style={StyleSheet.absoluteFill}
        // L'intera schermata è un'area di tocco, ma per un lettore di
        // schermo non è un pulsante: lì vale il pulsante «Continua».
        accessible={false}
        onPress={avanti}
        onLongPress={pausa}
        delayLongPress={220}
        onPressOut={riprendi}
      >
        <Animated.View style={[{ position: 'absolute', left: -W * 0.1, top: auroraTop }, stileAurora]}>
          <Aurora larghezza={AW} />
        </Animated.View>

        {/* ——— Pagina 1: il benvenuto ——— */}
        <Animated.View
          style={[styles.colonna1, { top: y1 }, stileUscita1]}
          importantForAccessibility={seconda ? 'no-hide-descendants' : 'auto'}
          accessibilityElementsHidden={seconda}
          pointerEvents="none"
        >
          {/* Il posto del logo: il logo vero galleggia sopra, per poter
              salire nella seconda pagina. */}
          <View style={{ width: L1, height: h1 }} accessible accessibilityRole="header" accessibilityLabel="Legul" />
          <Animated.View style={[{ marginTop: 8 }, stileFonetica]}>
            <LogoFonetica larghezzaParola={L1} />
          </Animated.View>
          <Animated.View style={[styles.filo, stileFilo]} />
          <Parole
            testo="Ti diamo il benvenuto."
            attivo
            ritardo={1500}
            ridotto={ridotto}
            centrata
            style={styles.benvenuto}
          />
          <Animated.Text style={[styles.sottotitolo, stileSottotitolo]} maxFontSizeMultiplier={1.25}>
            La nuova modalità interattiva per preparare l’esame da avvocato.
          </Animated.Text>
        </Animated.View>

        {/* ——— Pagina 2: il metodo ——— */}
        <Animated.View
          style={[styles.colonna2, { top: inizioPagina2, left: MARGINE, right: MARGINE }, stileUscita2]}
          importantForAccessibility={pagina === 1 ? 'auto' : 'no-hide-descendants'}
          accessibilityElementsHidden={pagina !== 1}
          pointerEvents="none"
        >
          <Animated.Text style={[styles.occhiello, stileOcchiello]} maxFontSizeMultiplier={1.2}>
            Il metodo
          </Animated.Text>
          <Parole
            testo="La memoria si costruisce quando provi a ricordare."
            attivo={seconda}
            ritardo={560}
            passo={55}
            ridotto={ridotto}
            intestazione
            style={{ ...styles.titolo, fontSize: corpoTitolo, lineHeight: Math.round(corpoTitolo * 1.18) }}
          />
          {!compatto && (
            <Animated.Text style={[styles.corpo, stileCorpo]} maxFontSizeMultiplier={1.2}>
              Rileggere dà l’illusione di sapere. All’esame la risposta non sarà sulla pagina:
              dovrai tirarla fuori dalla memoria{APICI[0]}.
            </Animated.Text>
          )}

          <Animated.View style={[styles.principi, stilePrincipi]}>
            <View style={styles.principio}>
              <Text style={styles.principioNome} maxFontSizeMultiplier={1.2}>
                Retrieval practice
              </Text>
              <Text style={styles.principioTesto} maxFontSizeMultiplier={1.2}>
                recuperare attivamente dalla memoria
              </Text>
            </View>
            <View style={styles.principioFilo} />
            <View style={styles.principio}>
              <Text style={styles.principioNome} maxFontSizeMultiplier={1.2}>
                Spaced repetition
              </Text>
              <Text style={styles.principioTesto} maxFontSizeMultiplier={1.2}>
                ripetere nel momento giusto{APICI[1]}
              </Text>
            </View>
          </Animated.View>

          <Animated.View style={[styles.scheda, compatto && styles.schedaCompatta, stileScheda]}>
            <GraficoMetodo
              larghezza={larghezzaGrafico}
              altezza={altezzaGrafico}
              corpoNumero={compatto ? 38 : 46}
              carattere={FONT_INTRO.testo}
              attivo={seconda}
              ritardo={2150}
              ridotto={ridotto}
            />
          </Animated.View>

          <Animated.View style={[styles.note, stileNote]}>
            {FONTI.slice(0, 2).map((f) => (
              <Text key={f.nota} style={styles.nota} maxFontSizeMultiplier={1.2}>
                {APICI[f.nota - 1]} {f.citazione}
              </Text>
            ))}
          </Animated.View>
        </Animated.View>

        {/* ——— Pagina 3: il gioco ——— */}
        <View
          style={[styles.colonna2, { top: inizioPagina2, left: MARGINE, right: MARGINE }]}
          importantForAccessibility={terza ? 'auto' : 'no-hide-descendants'}
          accessibilityElementsHidden={!terza}
          pointerEvents="none"
        >
          <Animated.Text style={[styles.occhiello, stileOcchiello3]} maxFontSizeMultiplier={1.2}>
            Il gioco
          </Animated.Text>
          <Parole
            testo="E poi abbiamo aggiunto il gioco."
            attivo={terza}
            ritardo={500}
            passo={60}
            ridotto={ridotto}
            intestazione
            style={{ ...styles.titolo, fontSize: corpoTitolo, lineHeight: Math.round(corpoTitolo * 1.18) }}
          />
          <Animated.Text style={[styles.corpo, stileCorpo3]} maxFontSizeMultiplier={1.2}>
            Recupero attivo, feedback e ripetizione distribuita rendono l’apprendimento più
            efficace e duraturo. Noi li abbiamo trasformati in domande, sfide e progressi
            {APICI[2]}.
          </Animated.Text>

          <Ciclo attivo={terza} ritardo={1400} ridotto={ridotto} />

          {/* Il motto scende con lo schermo: su un telefono alto resterebbe
              appeso a metà, con un vuoto sotto. */}
          <Animated.View
            style={[styles.filo, styles.filo3, { marginTop: compatto ? 26 : Math.max(30, 30 + (H - 820) * 0.9) }, stileFilo3]}
          />
          <Animated.Text style={[styles.motto, stileMotto]} maxFontSizeMultiplier={1.2}>
            Non studiare di più.{'\n'}Studia meglio.
          </Animated.Text>
          <Animated.Text style={[styles.nota, styles.nota3, stileNota3]} maxFontSizeMultiplier={1.2}>
            {APICI[2]} {FONTI[2].citazione}
          </Animated.Text>
        </View>

        {/* Il logo, che passa da una pagina all'altra. */}
        <Animated.View
          style={[styles.logo, { left: x1, top: y1, width: L1, height: h1 }, stileLogo]}
          pointerEvents="none"
          importantForAccessibility="no-hide-descendants"
          accessibilityElementsHidden
        >
          {!ridotto && (
            <Animated.View style={[StyleSheet.absoluteFill, stileSfocato]}>
              <LogoParola larghezza={L1} sfocatura={10} />
            </Animated.View>
          )}
          <Animated.View style={[StyleSheet.absoluteFill, stileNitido]}>
            <LogoParola larghezza={L1} />
          </Animated.View>
        </Animated.View>

        {!lettore && (
          <Animated.Text
            style={[styles.suggerimento, { bottom: insets.bottom + 18 }, stileSuggerimento]}
            maxFontSizeMultiplier={1.2}
          >
            Tieni premuto per leggere con calma
          </Animated.Text>
        )}
      </Pressable>

      {/* La testata: l'avanzamento delle pagine e «Salta». */}
      <View style={[styles.testata, { top: testataY, height: ALTEZZA_TESTATA }]}>
        <View style={styles.tacche} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          {DURATA_INTRO.map((_, i) => (
            <Tacca key={i} indice={i} pagina={pagina} avanzamento={avanzamento} ferma={lettore} />
          ))}
        </View>
        <Pressable
          onPress={chiudi}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Salta l’introduzione"
        >
          <Text style={styles.salta} maxFontSizeMultiplier={1.3}>
            Salta
          </Text>
        </Pressable>
      </View>

      {lettore && (
        <View style={[styles.piede, { bottom: insets.bottom + 16 }]}>
          <Bottone label={ultima ? 'Continua' : 'Avanti'} onPress={avanti} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  radice: { flex: 1 },
  testata: {
    position: 'absolute',
    left: 24,
    right: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  tacche: { flex: 1, flexDirection: 'row', gap: 6 },
  tacca: {
    flex: 1,
    height: 3,
    borderRadius: 2,
    backgroundColor: 'rgba(20,22,27,0.09)',
    overflow: 'hidden',
  },
  taccaPiena: { height: 3, borderRadius: 2, backgroundColor: colors.titanioForte },
  salta: {
    fontFamily: FONT_INTRO.testo, fontSize: 14, lineHeight: 20, fontWeight: '600', color: colors.textMuted },
  colonna1: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logo: { position: 'absolute' },
  /* Il filo d'oro: un dettaglio da frontespizio, che separa il marchio
     dalle parole. È un tratto, quindi lo champagne pieno va bene. */
  filo: {
    height: 1.5,
    borderRadius: 1,
    backgroundColor: colors.accent,
    marginTop: 26,
    marginBottom: 26,
  },
  parole: { flexDirection: 'row', flexWrap: 'wrap' },
  benvenuto: {
    fontFamily: FONT_INTRO.titoloLeggero,
    fontWeight: '400',
    fontSize: 29,
    lineHeight: 36,
    letterSpacing: -0.3,
    color: colors.text,
  },
  sottotitolo: {
    fontFamily: FONT_INTRO.testo,
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: -0.1,
    color: colors.textMuted,
    textAlign: 'center',
    maxWidth: 300,
  },
  colonna2: { position: 'absolute' },
  occhiello: {
    fontFamily: FONT_INTRO.testo,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: colors.accentTesto,
    marginBottom: 8,
  },
  titolo: {
    fontFamily: FONT_INTRO.titolo,
    fontWeight: '400',
    letterSpacing: -0.4,
    color: colors.text,
  },
  corpo: {
    fontFamily: FONT_INTRO.testo,
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: -0.12,
    color: colors.textMuted,
  },
  principi: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 14,
  },
  principio: { flex: 1, gap: 3 },
  principioFilo: { width: StyleSheet.hairlineWidth * 2, backgroundColor: 'rgba(20,22,27,0.14)' },
  principioNome: {
    fontFamily: FONT_INTRO.testo,
    fontSize: 10.5,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 1.3,
    textTransform: 'uppercase',
    color: colors.text,
  },
  principioTesto: {
    fontFamily: FONT_INTRO.testo, fontSize: 13, lineHeight: 18, color: colors.textMuted },
  ciclo: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 10, marginTop: 20 },
  passo: { flexDirection: 'row', alignItems: 'center' },
  passoChip: {
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: 'rgba(20,22,27,0.10)',
    ...ombra.tenue,
  },
  passoTesto: {
    fontFamily: FONT_INTRO.testo, fontSize: 13, lineHeight: 17, fontWeight: '600', color: colors.text },
  freccia: {
    fontFamily: FONT_INTRO.testo, marginHorizontal: 6, fontSize: 13, color: colors.accentTesto },
  filo3: { marginTop: 30, marginBottom: 22 },
  motto: {
    fontFamily: FONT_INTRO.titolo,
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 42,
    letterSpacing: -0.7,
    color: colors.text,
  },
  nota3: { marginTop: 22 },
  scheda: {
    marginTop: 18,
    padding: 18,
    borderRadius: radius.xl,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: 'rgba(20,22,27,0.08)',
    ...ombra.media,
  },
  schedaCompatta: { marginTop: 12, padding: 14, paddingHorizontal: 18 },
  note: { marginTop: 14, gap: 3 },
  nota: {
    fontFamily: FONT_INTRO.testo, fontSize: 11.5, lineHeight: 16, color: colors.textMuted, letterSpacing: 0 },
  suggerimento: {
    fontFamily: FONT_INTRO.testo,
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.textMuted,
  },
  piede: { position: 'absolute', left: 24, right: 24 },
});
