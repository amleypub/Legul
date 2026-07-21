import React, { useEffect, useRef, useState } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { BADGES } from '../gamification/GamificationContext';
import { Button3D } from '../components/Button3D';
import { Mascot } from '../components/Mascot';
import { Confetti } from '../components/Confetti';
import { playSound } from '../audio/sounds';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, materiaColors, radius, softShadow, spacing } from '../theme';

function Stella({ accesa, ritardo }: { accesa: boolean; ritardo: number }) {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(ritardo),
      Animated.spring(scale, { toValue: 1, speed: 10, bounciness: 14, useNativeDriver: true }),
    ]).start();
  }, [ritardo, scale]);

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Ionicons name="star" size={54} color={accesa ? colors.accent : 'rgba(255,255,255,0.25)'} />
    </Animated.View>
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

  const [puntiMostrati, setPuntiMostrati] = useState(0);
  const contatore = useRef(new Animated.Value(0)).current;
  // Ingresso 3D della mascotte (pop + rotazione sull'asse Y).
  const entrata = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Haptics.notificationAsync(
      fallito ? Haptics.NotificationFeedbackType.Warning : Haptics.NotificationFeedbackType.Success
    ).catch(() => {});
    if (!fallito) playSound(stelle === 3 ? 'perfect' : 'complete');

    Animated.spring(entrata, { toValue: 1, speed: 6, bounciness: 12, delay: 150, useNativeDriver: true }).start();

    const sub = contatore.addListener(({ value }) => setPuntiMostrati(Math.round(value)));
    Animated.timing(contatore, {
      toValue: punti,
      duration: 1100,
      delay: 500,
      useNativeDriver: false,
    }).start();
    return () => contatore.removeListener(sub);
  }, [contatore, entrata, punti, fallito, stelle]);

  const mascotStyle = {
    transform: [
      { perspective: 800 },
      { scale: entrata.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1] }) },
      {
        rotateY: entrata.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '0deg'] }),
      },
    ],
  };

  const titolo = fallito
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
      {!fallito && <Confetti count={stelle === 3 ? 110 : 70} />}
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <ScrollView contentContainerStyle={styles.content}>
          <Animated.View style={mascotStyle}>
            <Mascot state={fallito ? 'studying' : 'celebrating'} size={128} animated={!fallito} />
          </Animated.View>

          <View style={styles.stelleRow}>
            <Stella accesa={!fallito && stelle >= 1} ritardo={200} />
            <View style={styles.stellaCentro}>
              <Stella accesa={!fallito && stelle >= 2} ritardo={450} />
            </View>
            <Stella accesa={!fallito && stelle >= 3} ritardo={700} />
          </View>

          <Text style={styles.titolo}>{titolo}</Text>
          <Text style={styles.messaggio}>{messaggio}</Text>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Punti</Text>
              <Text style={styles.statValore}>+{puntiMostrati}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Precisione</Text>
              <Text style={styles.statValore}>{precisione}%</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Risposte</Text>
              <Text style={styles.statValore}>
                {corrette}/{totale}
              </Text>
            </View>
          </View>

          {badgeSbloccati.length > 0 && (
            <View style={styles.badgeWrap}>
              <Text style={styles.badgeTitolo}>Nuovi badge sbloccati</Text>
              {badgeSbloccati.map((b) => (
                <View key={b.id} style={styles.badgeCard}>
                  <Ionicons name={b.icona} size={26} color={colors.accent} />
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
          {(fallito || stelle < 3) && (
            <Button3D
              label="Riprova la lezione"
              onPress={() => navigation.replace('Lezione', { materia, lezioneId })}
              color="rgba(255,255,255,0.16)"
              edgeColor="rgba(0,0,0,0.25)"
            />
          )}
          <Button3D
            label="Continua"
            onPress={() => navigation.goBack()}
            color={colors.accent}
            edgeColor="#A8861B"
            textColor={colors.primary}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1 },
  content: { padding: spacing.lg, alignItems: 'center', paddingBottom: spacing.xl },
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
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.75)',
  },
  statValore: { fontSize: 22, fontWeight: '800', color: '#FFFFFF', marginTop: 4 },
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
    ...softShadow,
  },
  badgeTextWrap: { flex: 1 },
  badgeNome: { fontSize: 15, fontWeight: '700', color: colors.text },
  badgeDescr: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  footer: { padding: spacing.md, gap: spacing.sm },
});
