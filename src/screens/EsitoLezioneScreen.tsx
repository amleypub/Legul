import React, { useEffect, useRef, useState } from 'react';
import { Alert, Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import Rianimato, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as Haptics from 'expo-haptics';
import { Icona } from '../components/Icona';
import { BADGES, useGamification } from '../gamification/GamificationContext';
import { ORE_PROPOSTE } from '../notifiche/promemoria';
import { Bottone } from '../components/Bottone';
import { Mascot } from '../components/Mascot';
import { Confetti } from '../components/Confetti';
import { playSound } from '../audio/sounds';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, materiaColors, molla, radius, ombra, spacing } from '../theme';

function Stella({ accesa, ritardo }: { accesa: boolean; ritardo: number }) {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(ritardo),
      Animated.spring(scale, { toValue: 1, speed: 10, bounciness: 14, useNativeDriver: true }),
    ]).start();

    // Ogni stella che si accende ha il suo scatto sonoro, sincronizzato
    // con la comparsa: tre stelle, tre note in sequenza.
    if (!accesa) return;
    const t = setTimeout(() => playSound('star'), ritardo);
    return () => clearTimeout(t);
  }, [ritardo, scale, accesa]);

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Icona
        nome="star"
        size={54}
        color={accesa ? colors.accent : 'rgba(255,255,255,0.25)'}
        pieno={accesa}
      />
    </Animated.View>
  );
}

/** Riquadro statistica a blocco, con bordo 3D scuro sul gradiente. */
function StatBlocco({
  label,
  valore,
  icona,
}: {
  label: string;
  valore: string;
  icona: string;
}) {
  return (
    <View style={styles.statCard}>
      <Icona nome={icona} size={16} color="rgba(255,255,255,0.7)" />
      <Text style={styles.statValore} numberOfLines={1} adjustsFontSizeToFit>
        {valore}
      </Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export default function EsitoLezioneScreen({
  route,
  navigation,
}: RootStackScreenProps<'EsitoLezione'>) {
  const { materia, lezioneId, fallito, corrette, totale, stelle, punti, messaggio, nuoviBadge } =
    route.params;
  const tinte = materiaColors[materia];
  const badgeSbloccati = BADGES.filter((b) => nuoviBadge.includes(b.id));
  const precisione = totale > 0 ? Math.round((corrette / totale) * 100) : 0;

  const { state, impostaPromemoria, segnaPromemoriaProposto } = useGamification();
  const proponiPromemoria =
    !fallito &&
    materia !== 'Ripasso' &&
    !state.promemoriaProposto &&
    !state.promemoriaAttivo &&
    state.quizCompletati >= 1;

  async function accettaPromemoria() {
    segnaPromemoriaProposto();
    const riuscito = await impostaPromemoria(true, state.oraPromemoria || ORE_PROPOSTE[0]);
    if (!riuscito) {
      Alert.alert(
        'Notifiche disattivate',
        'Per ricevere il promemoria devi consentire le notifiche a Legul dalle impostazioni del telefono.'
      );
    }
  }

  const [puntiMostrati, setPuntiMostrati] = useState(0);
  /*
    Il conteggio dei punti che sale.

    Prima era un `Animated.Value` senza driver nativo con un listener che
    chiamava `setState` a ogni fotogramma: un render di React ogni sedici
    millesimi, sulla schermata dove nel frattempo cadono i coriandoli.
    Ora l'interpolazione avviene sul thread dell'interfaccia e il valore
    torna in JavaScript solo quando cambia di uno scalino, che è la sola
    cosa che l'occhio distingue.
  */
  const contatore = useSharedValue(0);
  const passo = Math.max(1, Math.ceil(punti / 30));
  useAnimatedReaction(
    () => Math.min(punti, Math.round(contatore.value / passo) * passo),
    (attuale, precedente) => {
      if (attuale !== precedente) runOnJS(setPuntiMostrati)(attuale);
    }
  );

  // Ingresso 3D della mascotte (pop + rotazione sull'asse Y).
  const entrata = useSharedValue(0);

  useEffect(() => {
    Haptics.notificationAsync(
      fallito ? Haptics.NotificationFeedbackType.Warning : Haptics.NotificationFeedbackType.Success
    ).catch(() => {});
    if (!fallito) playSound(stelle === 3 ? 'perfect' : 'complete');

    entrata.value = withDelay(150, withSpring(1, molla.ampia));
    contatore.value = withDelay(500, withTiming(punti, { duration: 1100 }));
  }, [contatore, entrata, punti, fallito, stelle]);

  const mascotStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 800 },
      { scale: 0.3 + entrata.value * 0.7 },
      { rotateY: `${180 - entrata.value * 180}deg` },
    ],
  }));

  const titolo = materia === 'Ripasso'
    ? 'Ripasso completato'
    : fallito
    ? 'Cuori esauriti'
    : stelle === 3
      ? 'Perfetto!'
      : stelle === 2
        ? 'Ottimo lavoro!'
        : 'Lezione completata';

  return (
    <LinearGradient
      colors={fallito ? ['#3A4358', '#1C2231'] : [tinte.start, tinte.end]}
      style={styles.gradient}
    >
      <StatusBar style="light" />
      {!fallito && <Confetti count={stelle === 3 ? 110 : 70} />}
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <ScrollView contentContainerStyle={styles.content}>
          <Rianimato.View style={mascotStyle}>
            <Mascot state={fallito ? 'studying' : 'celebrating'} size={128} animated={!fallito} />
          </Rianimato.View>

          {materia !== 'Ripasso' && (
            <View style={styles.stelleRow}>
              <Stella accesa={!fallito && stelle >= 1} ritardo={200} />
              <View style={styles.stellaCentro}>
                <Stella accesa={!fallito && stelle >= 2} ritardo={450} />
              </View>
              <Stella accesa={!fallito && stelle >= 3} ritardo={700} />
            </View>
          )}

          <Text style={styles.titolo}>{titolo}</Text>
          <Text style={styles.messaggio}>{messaggio}</Text>

          <View style={styles.statsRow}>
            <StatBlocco label="Punti" valore={`+${puntiMostrati}`} icona="flash" />
            <StatBlocco label="Precisione" valore={`${precisione}%`} icona="analytics" />
            <StatBlocco label="Risposte" valore={`${corrette}/${totale}`} icona="checkmark-done" />
          </View>

          {/*
            La proposta del promemoria arriva qui e non all'installazione.

            Chiedere il permesso alle notifiche prima che l'app abbia
            dimostrato di valere qualcosa è il modo più affidabile di
            farselo negare, e su iOS quel «no» è quasi definitivo: per
            tornare indietro bisogna passare dalle impostazioni di
            sistema. Dopo la prima lezione completata la domanda ha un
            senso che si può vedere, ed è il momento in cui costa meno
            dire di sì. Si chiede una volta sola.
          */}
          {proponiPromemoria && (
            <View style={styles.promemoria}>
              <Icona nome="notifications" size={26} color={colors.accent} />
              <View style={styles.promemoriaTesto}>
                <Text style={styles.promemoriaTitolo}>Ti ricordo di studiare domani?</Text>
                <Text style={styles.promemoriaSub}>
                  Un promemoria al giorno, all’ora che preferisci. Si spegne dal Profilo quando
                  vuoi.
                </Text>
              </View>
              <View style={styles.promemoriaAzioni}>
                <Bottone
                  label="Sì"
                  compatto
                  onPress={accettaPromemoria}
                  variante="accento"
                />
                <Bottone
                  label="No"
                  compatto
                  onPress={segnaPromemoriaProposto}
                  gradiente={['rgba(255,255,255,0.22)', 'rgba(255,255,255,0.12)']}
                />
              </View>
            </View>
          )}

          {badgeSbloccati.length > 0 && (
            <View style={styles.badgeWrap}>
              <Text style={styles.badgeTitolo}>Nuovi badge sbloccati</Text>
              {badgeSbloccati.map((b) => (
                <View key={b.id} style={styles.badgeCard}>
                  <Icona nome={b.icona} size={26} color={colors.accent} />
                  <View style={styles.badgeTextWrap}>
                    <Text style={styles.badgeNome}>{b.nome}</Text>
                    <Text style={styles.badgeDescr}>{b.descrizione}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          {materia !== 'Ripasso' && (fallito || stelle < 3) && (
            <Bottone
              label="Riprova la lezione"
              onPress={() => navigation.replace('Lezione', { materia, lezioneId })}
              gradiente={['rgba(255,255,255,0.22)', 'rgba(255,255,255,0.12)']}
            />
          )}
          <Bottone
            label="Continua"
            onPress={() => navigation.goBack()}
          variante="accento"
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  promemoria: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderRadius: radius.xl,
    padding: spacing.md,
    marginTop: spacing.lg,
  },
  promemoriaTesto: { flex: 1, gap: 2 },
  promemoriaTitolo: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
  promemoriaSub: { fontSize: 12.5, color: 'rgba(255,255,255,0.75)', lineHeight: 18 },
  promemoriaAzioni: { gap: 6, width: 74 },
  gradient: { flex: 1 },
  safe: { flex: 1 },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.lg,
    alignItems: 'center',
    paddingBottom: spacing.xl,
  },
  stelleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  stellaCentro: { marginBottom: 14 },
  titolo: { fontSize: 30, fontWeight: '800', color: '#FFFFFF', marginTop: spacing.lg },
  messaggio: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: spacing.sm,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xl,
    alignSelf: 'stretch',
  },
  // La card è traslucida: il bordo 3D è un border inferiore, non un
  // riquadro dietro (che trasparirebbe come una banda scura).
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: radius.lg,
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.xs,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.75)',
    marginTop: 2,
  },
  statValore: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', marginTop: 2 },
  badgeWrap: { alignSelf: 'stretch', marginTop: spacing.lg, gap: spacing.sm },
  badgeTitolo: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  badgeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    ...ombra.media,
  },
  badgeTextWrap: { flex: 1 },
  badgeNome: { fontSize: 15, fontWeight: '700', color: colors.text },
  badgeDescr: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  footer: { padding: spacing.md, gap: spacing.sm },
});
