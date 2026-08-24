import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { Icona } from '../components/Icona';
import { playSound } from '../audio/sounds';
import { useGamification } from '../gamification/GamificationContext';
import { Bottone } from '../components/Bottone';
import type { QuizQuestion } from '../types';
import { colors, radius, softShadow, spacing, SCALA_PRESSIONE } from '../theme';

export const CUORI_INIZIALI = 4;

export interface Tinte {
  start: string;
  end: string;
  edge: string;
  soft: string;
}

export interface EsitoQuiz {
  corrette: number;
  totale: number;
  punti: number;
  badge: string[];
  /** Vero solo quando i cuori si esauriscono prima della fine. */
  fallita: boolean;
}

/** Risposta "a blocco": si abbassa sul bordo 3D quando la premi. */
function Opzione({
  testo,
  stato,
  tinte,
  disabled,
  onPress,
}: {
  testo: string;
  stato: 'idle' | 'selezionata' | 'corretta' | 'errata';
  tinte: Tinte;
  disabled: boolean;
  onPress: () => void;
}) {
  const premuto = useRef(new Animated.Value(0)).current;
  const giu = (down: boolean) =>
    Animated.spring(premuto, {
      toValue: down ? 1 : 0,
      speed: 40,
      bounciness: 0,
      useNativeDriver: true,
    }).start();

  const palette = {
    idle: { bg: colors.card, bordo: '#E3E7EF', edge: '#D3D9E6', testo: colors.text },
    selezionata: { bg: tinte.soft, bordo: tinte.start, edge: tinte.edge, testo: tinte.end },
    corretta: {
      bg: colors.successSoft,
      bordo: colors.success,
      edge: colors.successEdge,
      testo: colors.successEdge,
    },
    errata: {
      bg: colors.errorSoft,
      bordo: colors.error,
      edge: colors.errorEdge,
      testo: colors.errorEdge,
    },
  }[stato];

  const etichetta = {
    idle: '',
    selezionata: ', selezionata',
    corretta: ', risposta corretta',
    errata: ', risposta sbagliata',
  }[stato];

  return (
    <Pressable
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={`${testo}${etichetta}`}
      onPressIn={() => giu(true)}
      onPressOut={() => giu(false)}
      onPress={onPress}
    >
      <View style={styles.opzioneWrap}>
        <Animated.View
          style={[
            styles.opzione,
            { backgroundColor: palette.bg, borderColor: palette.bordo },
            { transform: [
                {
                  scale: premuto.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, SCALA_PRESSIONE],
                  }),
                },
              ] },
          ]}
        >
          <Text
            style={[
              styles.opzioneTesto,
              { color: palette.testo },
              stato !== 'idle' && styles.opzioneTestoAttivo,
            ]}
          >
            {testo}
          </Text>
          {stato === 'corretta' && (
            <Icona nome="checkmark-circle" size={22} color={colors.success} />
          )}
          {stato === 'errata' && <Icona nome="close-circle" size={22} color={colors.error} />}
        </Animated.View>
      </View>
    </Pressable>
  );
}

/**
 * Lo svolgimento di una serie di domande: avanzamento, cuori, risposta,
 * spiegazione.
 *
 * Vive qui e non dentro la schermata della lezione perché lo usano in
 * due — la lezione del percorso e il ripasso degli errori — e tenerne
 * due copie significherebbe correggere ogni difetto due volte.
 */
export function EsecuzioneQuiz({
  domande,
  tinte,
  kicker,
  /** Con i cuori la prova si può fallire; con `null` si arriva in fondo comunque. */
  cuoriIniziali = CUORI_INIZIALI,
  onEsci,
  onIniziata,
  onFine,
}: {
  domande: QuizQuestion[];
  tinte: Tinte;
  kicker: string;
  cuoriIniziali?: number | null;
  onEsci: () => void;
  onIniziata?: (iniziata: boolean) => void;
  onFine: (esito: EsitoQuiz) => void;
}) {
  const { registraRisposta } = useGamification();

  const [indice, setIndice] = useState(0);
  const [cuori, setCuori] = useState(cuoriIniziali ?? 0);
  const [selezionata, setSelezionata] = useState<number | null>(null);
  const [confermata, setConfermata] = useState(false);
  const [messaggio, setMessaggio] = useState('');
  const [puntiRisposta, setPuntiRisposta] = useState(0);
  const corrette = useRef(0);
  const puntiTotali = useRef(0);
  const badgeRaccolti = useRef<string[]>([]);

  const progress = useRef(new Animated.Value(0)).current;
  const sheet = useRef(new Animated.Value(400)).current;
  const heartShake = useRef(new Animated.Value(0)).current;

  const domanda = domande[indice];
  const iniziata = indice > 0 || confermata || selezionata !== null;

  useEffect(() => {
    onIniziata?.(iniziata);
  }, [iniziata, onIniziata]);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: (indice + (confermata ? 1 : 0)) / Math.max(domande.length, 1),
      duration: 350,
      useNativeDriver: false,
    }).start();
  }, [indice, confermata, domande.length, progress]);

  useEffect(() => {
    if (confermata) {
      Animated.spring(sheet, { toValue: 0, speed: 14, bounciness: 6, useNativeDriver: true }).start();
    } else {
      sheet.setValue(400);
    }
  }, [confermata, sheet]);

  if (!domanda) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.domandaTesto}>Nessuna domanda disponibile.</Text>
      </SafeAreaView>
    );
  }

  const giusta = selezionata === domanda.rispostaCorretta;
  const ultima = indice === domande.length - 1;
  const senzaCuori = cuoriIniziali !== null && cuori <= 0;

  function conferma() {
    if (selezionata === null || confermata) return;
    const corretta = selezionata === domanda.rispostaCorretta;
    const evento = registraRisposta(corretta, domanda.id);
    puntiTotali.current += evento.puntiGuadagnati;
    badgeRaccolti.current.push(...evento.nuoviBadge.map((b) => b.id));
    if (corretta) {
      corrette.current += 1;
      playSound('correct');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    } else {
      if (cuoriIniziali !== null) setCuori((c) => c - 1);
      playSound('wrong');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      Animated.sequence([
        Animated.timing(heartShake, { toValue: 8, duration: 60, useNativeDriver: true }),
        Animated.timing(heartShake, { toValue: -8, duration: 60, useNativeDriver: true }),
        Animated.timing(heartShake, { toValue: 5, duration: 50, useNativeDriver: true }),
        Animated.timing(heartShake, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();
    }
    setMessaggio(evento.messaggio);
    setPuntiRisposta(evento.puntiGuadagnati);
    setConfermata(true);
  }

  function continua() {
    // `cuori` è già stato decrementato in conferma() al momento dell'errore.
    if (!giusta && senzaCuori) {
      onFine({
        corrette: corrette.current,
        totale: domande.length,
        punti: puntiTotali.current,
        badge: badgeRaccolti.current,
        fallita: true,
      });
      return;
    }
    if (!ultima) {
      setIndice((i) => i + 1);
      setSelezionata(null);
      setConfermata(false);
      return;
    }
    onFine({
      corrette: corrette.current,
      totale: domande.length,
      punti: puntiTotali.current,
      badge: badgeRaccolti.current,
      fallita: false,
    });
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Barra superiore: chiudi, avanzamento, cuori */}
      <View style={styles.topBar}>
        <Pressable onPress={onEsci} hitSlop={12} accessibilityRole="button" accessibilityLabel="Chiudi">
          <Icona nome="close" size={28} color={colors.textMuted} />
        </Pressable>
        <View style={styles.progressTrack}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                backgroundColor: tinte.start,
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>
        {cuoriIniziali === null ? (
          <Text style={styles.contatore}>
            {indice + 1}/{domande.length}
          </Text>
        ) : (
          <Animated.View style={[styles.cuoriWrap, { transform: [{ translateX: heartShake }] }]}>
            <Icona nome="heart" size={22} color="#E4405F" />
            <Text style={styles.cuoriTesto}>{cuori}</Text>
          </Animated.View>
        )}
      </View>

      <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
        <Text style={styles.kicker}>{kicker}</Text>
        <Text style={styles.domandaTesto}>{domanda.domanda}</Text>

        {domanda.opzioni.map((opzione, i) => {
          const isSelezionata = i === selezionata;
          const isCorretta = i === domanda.rispostaCorretta;
          const stato = confermata
            ? isCorretta
              ? 'corretta'
              : isSelezionata
                ? 'errata'
                : 'idle'
            : isSelezionata
              ? 'selezionata'
              : 'idle';
          return (
            <Opzione
              key={i}
              testo={opzione}
              stato={stato}
              tinte={tinte}
              disabled={confermata}
              onPress={() => {
                setSelezionata(i);
                playSound('tap');
                Haptics.selectionAsync().catch(() => {});
              }}
            />
          );
        })}
      </ScrollView>

      {!confermata && (
        <View style={styles.footer}>
          <Bottone
            label="Conferma"
            onPress={conferma}
            gradiente={[tinte.start, tinte.end]}
            glow={tinte.end}
            disabled={selezionata === null}
          />
        </View>
      )}

      {confermata && (
        <Animated.View
          style={[
            styles.sheet,
            giusta ? styles.sheetOk : styles.sheetKo,
            { transform: [{ translateY: sheet }] },
          ]}
        >
          <View style={styles.sheetHeader}>
            <Icona
              nome={giusta ? 'checkmark-circle' : 'close-circle'}
              size={28}
              color={giusta ? colors.success : colors.error}
            />
            <Text style={[styles.sheetTitolo, { color: giusta ? colors.success : colors.error }]}>
              {giusta ? 'Corretto!' : 'Risposta errata'}
            </Text>
            <Text style={styles.sheetPunti}>+{puntiRisposta} punti</Text>
          </View>
          {!giusta && (
            <Text style={styles.sheetSoluzione}>
              Risposta esatta: {domanda.opzioni[domanda.rispostaCorretta]}
            </Text>
          )}
          <ScrollView style={styles.sheetSpiegazioneScroll}>
            <Text style={styles.sheetSpiegazione}>{domanda.spiegazione}</Text>
            <Text style={styles.sheetMessaggio}>{messaggio}</Text>
          </ScrollView>
          <Bottone
            label={ultima || (!giusta && senzaCuori) ? 'Vedi il risultato' : 'Continua'}
            onPress={continua}
            gradiente={giusta ? [colors.success, colors.successEdge] : [colors.error, colors.errorEdge]}
            glow={giusta ? colors.success : colors.error}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  progressTrack: {
    flex: 1,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#E4E7EC',
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 7 },
  cuoriWrap: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  cuoriTesto: { fontSize: 16, fontWeight: '800', color: '#E4405F' },
  contatore: { fontSize: 15, fontWeight: '800', color: colors.textMuted },
  body: { flex: 1 },
  bodyContent: { padding: spacing.md, paddingBottom: spacing.xl },
  kicker: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },
  domandaTesto: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 28,
    marginBottom: spacing.lg,
  },
  opzioneWrap: { marginBottom: spacing.sm },
  opzione: {
    borderRadius: radius.lg,
    borderWidth: 2,
    paddingVertical: spacing.md - 2,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  opzioneTesto: { flex: 1, fontSize: 15, lineHeight: 21, fontWeight: '600' },
  opzioneTestoAttivo: { fontWeight: '800' },
  footer: { padding: spacing.md },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    padding: spacing.md,
    paddingBottom: spacing.lg,
    ...softShadow,
  },
  sheetOk: { backgroundColor: '#EDF9F1' },
  sheetKo: { backgroundColor: '#FDF0F0' },
  sheetHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  sheetTitolo: { flex: 1, fontSize: 19, fontWeight: '800' },
  sheetPunti: { fontSize: 14, fontWeight: '800', color: colors.primary },
  sheetSoluzione: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.sm,
  },
  sheetSpiegazioneScroll: { maxHeight: 190, marginVertical: spacing.sm },
  sheetSpiegazione: { fontSize: 14, color: colors.text, lineHeight: 21 },
  sheetMessaggio: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: spacing.sm,
    fontStyle: 'italic',
  },
});
