import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { playSound } from '../audio/sounds';
import { trovaLezione } from '../data/percorso';
import { useGamification } from '../gamification/GamificationContext';
import { Button3D } from '../components/Button3D';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, materiaColors, radius, softShadow, spacing } from '../theme';

export const CUORI_INIZIALI = 4;

export default function LezioneScreen({ route, navigation }: RootStackScreenProps<'Lezione'>) {
  const { materia, lezioneId } = route.params;
  const tinte = materiaColors[materia];
  const { registraRisposta, registraLezioneCompletata } = useGamification();

  const lezione = useMemo(() => trovaLezione(materia, lezioneId), [materia, lezioneId]);

  const [indice, setIndice] = useState(0);
  const [cuori, setCuori] = useState(CUORI_INIZIALI);
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

  const domande = lezione?.domande ?? [];
  const domanda = domande[indice];

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

  if (!lezione || !domanda) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.domandaTesto}>Lezione non trovata.</Text>
      </SafeAreaView>
    );
  }

  const giusta = selezionata === domanda.rispostaCorretta;
  const ultima = indice === domande.length - 1;

  function conferma() {
    if (selezionata === null || confermata) return;
    const corretta = selezionata === domanda.rispostaCorretta;
    const evento = registraRisposta(corretta);
    puntiTotali.current += evento.puntiGuadagnati;
    badgeRaccolti.current.push(...evento.nuoviBadge.map((b) => b.id));
    if (corretta) {
      corrette.current += 1;
      playSound('correct');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    } else {
      setCuori((c) => c - 1);
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
    if (!giusta && cuori <= 0) {
      navigation.replace('EsitoLezione', {
        materia,
        lezioneId,
        fallito: true,
        corrette: corrette.current,
        totale: domande.length,
        stelle: 0,
        punti: puntiTotali.current,
        messaggio: 'Cuori esauriti. Ripassa la spiegazione e riprova: ci sei quasi.',
        nuoviBadge: badgeRaccolti.current,
      });
      return;
    }
    if (!ultima) {
      setIndice((i) => i + 1);
      setSelezionata(null);
      setConfermata(false);
      return;
    }
    const esito = registraLezioneCompletata(lezioneId, corrette.current, domande.length);
    navigation.replace('EsitoLezione', {
      materia,
      lezioneId,
      fallito: false,
      corrette: corrette.current,
      totale: domande.length,
      stelle: esito.stelle ?? 0,
      punti: puntiTotali.current + esito.puntiGuadagnati,
      messaggio: esito.messaggio,
      nuoviBadge: [...badgeRaccolti.current, ...esito.nuoviBadge.map((b) => b.id)],
    });
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Barra superiore: chiudi, avanzamento, cuori */}
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={12}>
          <Ionicons name="close" size={28} color={colors.textMuted} />
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
        <Animated.View style={[styles.cuoriWrap, { transform: [{ translateX: heartShake }] }]}>
          <Ionicons name="heart" size={22} color="#E4405F" />
          <Text style={styles.cuoriTesto}>{cuori}</Text>
        </Animated.View>
      </View>

      <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
        <Text style={styles.kicker}>
          {materia} · Lezione {lezione.indice + 1}
        </Text>
        <Text style={styles.domandaTesto}>{domanda.domanda}</Text>

        {domanda.opzioni.map((opzione, i) => {
          const isSelezionata = i === selezionata;
          const isCorretta = i === domanda.rispostaCorretta;
          return (
            <Pressable
              key={i}
              disabled={confermata}
              onPress={() => {
                setSelezionata(i);
                playSound('tap');
                Haptics.selectionAsync().catch(() => {});
              }}
              style={({ pressed }) => [
                styles.opzione,
                pressed && styles.opzionePressed,
                isSelezionata && !confermata && { borderColor: tinte.start, backgroundColor: tinte.soft },
                confermata && isCorretta && styles.opzioneCorretta,
                confermata && isSelezionata && !isCorretta && styles.opzioneErrata,
              ]}
            >
              <Text
                style={[
                  styles.opzioneTesto,
                  isSelezionata && !confermata && { color: tinte.end, fontWeight: '700' },
                ]}
              >
                {opzione}
              </Text>
              {confermata && isCorretta && (
                <Ionicons name="checkmark-circle" size={22} color={colors.success} />
              )}
              {confermata && isSelezionata && !isCorretta && (
                <Ionicons name="close-circle" size={22} color={colors.error} />
              )}
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Pulsante di conferma */}
      {!confermata && (
        <View style={styles.footer}>
          <Button3D
            label="Conferma"
            onPress={conferma}
            color={selezionata === null ? '#D6DAE2' : tinte.start}
            edgeColor={selezionata === null ? '#B4BAC6' : tinte.edge}
            disabled={selezionata === null}
          />
        </View>
      )}

      {/* Foglio di feedback */}
      {confermata && (
        <Animated.View
          style={[
            styles.sheet,
            giusta ? styles.sheetOk : styles.sheetKo,
            { transform: [{ translateY: sheet }] },
          ]}
        >
          <View style={styles.sheetHeader}>
            <Ionicons
              name={giusta ? 'checkmark-circle' : 'close-circle'}
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
          <Button3D
            label={ultima || (!giusta && cuori <= 0) ? 'Vedi il risultato' : 'Continua'}
            onPress={continua}
            color={giusta ? colors.success : colors.error}
            edgeColor={giusta ? '#1F7A43' : '#9A2F2F'}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
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
  opzione: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 2,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  opzionePressed: { opacity: 0.75 },
  opzioneCorretta: { borderColor: colors.success, backgroundColor: colors.successSoft },
  opzioneErrata: { borderColor: colors.error, backgroundColor: colors.errorSoft },
  opzioneTesto: { flex: 1, fontSize: 15, color: colors.text, lineHeight: 21 },
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
