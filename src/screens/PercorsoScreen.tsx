import React, { useEffect, useMemo, useRef } from 'react';
import {
  Alert,
  Animated,
  Easing,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import {
  percorsoPerMateria,
  statiLezioni,
  unitaGratuita,
  type Lezione,
} from '../data/percorso';
import { useGamification } from '../gamification/GamificationContext';
import { Mascot } from '../components/Mascot';
import { Button3D } from '../components/Button3D';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, materiaColors, radius, softShadow, spacing } from '../theme';

const NODE = 76;
const EDGE = 7;
/** Offset orizzontali ciclici che disegnano la serpentina del percorso. */
const OFFSETS = [0, 55, 88, 55, 0, -55, -88, -55];

type StatoNodo = 'bloccata' | 'corrente' | 'completata' | 'premium';

/** Come il nodo viene letto ad alta voce da VoiceOver e TalkBack. */
const ETICHETTA_STATO: Record<StatoNodo, string> = {
  bloccata: 'ancora chiusa',
  corrente: 'da fare',
  completata: 'completata',
  premium: 'riservata a Premium',
};

function Nodo({
  lezione,
  stato,
  stelle,
  mostraInizia = false,
  offset,
  tinte,
  onPress,
}: {
  lezione: Lezione;
  stato: StatoNodo;
  stelle: number;
  /** Il fumetto «INIZIA» compare su una sola lezione del percorso. */
  mostraInizia?: boolean;
  offset: number;
  tinte: { start: string; end: string; edge: string; soft: string };
  onPress: () => void;
}) {
  const translateY = useRef(new Animated.Value(0)).current;
  const bounce = useRef(new Animated.Value(0)).current;
  const halo = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!mostraInizia) return;
    const loopBounce = Animated.loop(
      Animated.sequence([
        Animated.timing(bounce, { toValue: -7, duration: 550, useNativeDriver: true }),
        Animated.timing(bounce, { toValue: 0, duration: 550, useNativeDriver: true }),
      ])
    );
    const loopHalo = Animated.loop(
      Animated.sequence([
        Animated.timing(halo, { toValue: 1, duration: 1100, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(halo, { toValue: 0, duration: 0, useNativeDriver: true }),
      ])
    );
    loopBounce.start();
    loopHalo.start();
    return () => {
      loopBounce.stop();
      loopHalo.stop();
    };
  }, [mostraInizia, bounce, halo]);

  const bloccata = stato === 'bloccata';
  const premium = stato === 'premium';
  const faccia = premium
    ? '#3A4358'
    : bloccata
      ? '#D6DAE2'
      : stato === 'completata'
        ? colors.accent
        : tinte.start;
  const bordo = premium
    ? '#242B3B'
    : bloccata
      ? '#B4BAC6'
      : stato === 'completata'
        ? '#A8861B'
        : tinte.edge;

  return (
    <View style={[styles.nodoRiga, { transform: [{ translateX: offset }] }]}>
      {mostraInizia && (
        <Animated.View style={[styles.iniziaBubble, { transform: [{ translateY: bounce }] }]}>
          <Text style={[styles.iniziaTesto, { color: tinte.end }]}>INIZIA</Text>
          <View style={styles.iniziaFreccia} />
        </Animated.View>
      )}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Lezione ${lezione.indice + 1}, ${ETICHETTA_STATO[stato]}`}
        onPressIn={() => {
          Animated.spring(translateY, {
            toValue: EDGE,
            speed: 40,
            bounciness: 0,
            useNativeDriver: true,
          }).start();
          Haptics.selectionAsync().catch(() => {});
        }}
        onPressOut={() =>
          Animated.spring(translateY, {
            toValue: 0,
            speed: 40,
            bounciness: 0,
            useNativeDriver: true,
          }).start()
        }
        onPress={onPress}
        style={styles.nodoWrap}
      >
        {mostraInizia && (
          <Animated.View
            pointerEvents="none"
            style={[
              styles.halo,
              {
                borderColor: tinte.start,
                opacity: halo.interpolate({ inputRange: [0, 1], outputRange: [0.5, 0] }),
                transform: [{ scale: halo.interpolate({ inputRange: [0, 1], outputRange: [1, 1.5] }) }],
              },
            ]}
          />
        )}
        <View style={[styles.nodoEdge, { backgroundColor: bordo }]} />
        <Animated.View
          style={[styles.nodoFace, { backgroundColor: faccia, transform: [{ translateY }] }]}
        >
          {premium ? (
            <MaterialCommunityIcons name="crown" size={30} color={colors.accent} />
          ) : (
            <Ionicons
              name={bloccata ? 'lock-closed' : stato === 'completata' ? 'checkmark' : 'play'}
              size={30}
              color={bloccata ? '#8B93A3' : '#FFFFFF'}
            />
          )}
        </Animated.View>
      </Pressable>
      <View style={styles.stelleRow}>
        {[1, 2, 3].map((n) => (
          <Ionicons
            key={n}
            name="star"
            size={15}
            color={stelle >= n ? colors.accent : '#D6DAE2'}
          />
        ))}
      </View>
      <Text style={styles.nodoLabel}>Lezione {lezione.indice + 1}</Text>
    </View>
  );
}

/**
 * Riquadro che sostituisce i nodi di un'unità a pagamento: mostra il
 * percorso sfocato dietro un vetro smerigliato, con la proposta Premium.
 * Meglio di sedici lucchetti identici da scorrere.
 */
function BloccoPremium({
  unita,
  tinte,
  onPress,
}: {
  unita: { difficolta: number; nome: string; lezioni: Lezione[] };
  tinte: { start: string; end: string; edge: string; soft: string };
  onPress: () => void;
}) {
  const domande = unita.lezioni.reduce((acc, l) => acc + l.domande.length, 0);

  return (
    <View style={styles.premiumWrap}>
      {/* Anteprima del percorso: nodi veri, ma sfocati e desaturati. */}
      <View style={styles.premiumGhost} pointerEvents="none">
        {[-72, 18, 72].map((dx) => (
          <View
            key={dx}
            style={[
              styles.premiumGhostNodo,
              { backgroundColor: tinte.start, transform: [{ translateX: dx }] },
            ]}
          />
        ))}
      </View>
      <BlurView intensity={30} tint="dark" style={styles.premiumFrost}>
        <View style={styles.premiumCorona}>
          <MaterialCommunityIcons name="crown" size={30} color={colors.primary} />
        </View>
        <Text style={styles.premiumTitolo}>Unità {unita.difficolta} bloccata</Text>
        <Text style={styles.premiumSub}>
          {unita.lezioni.length} lezioni e {domande} domande di livello «{unita.nome}» ti aspettano.
        </Text>
        <Button3D
          label="Sblocca con Premium"
          onPress={onPress}
          color={colors.accent}
          edgeColor="#A8861B"
          textColor={colors.primary}
          style={styles.premiumBtn}
        />
      </BlurView>
    </View>
  );
}

/**
 * Un nodo bloccato prima non reagiva al tocco: premevi e non succedeva
 * nulla, che è come si comporta un'app rotta. Ora dice perché.
 */
function spiegaBlocco(indicePrecedente: number) {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
  Alert.alert(
    'Lezione ancora chiusa',
    `Completa la lezione ${indicePrecedente + 1} con almeno una stella per sbloccare questa.`,
    [{ text: 'Ho capito' }]
  );
}

export default function PercorsoScreen({ route, navigation }: RootStackScreenProps<'Percorso'>) {
  const { materia } = route.params;
  const { state } = useGamification();
  const tinte = materiaColors[materia];
  const unita = percorsoPerMateria(materia);
  const ordine = useMemo(() => unita.flatMap((u) => u.lezioni), [unita]);

  // Regola di sblocco: una sola implementazione, condivisa con il resto
  // dell'app. Prima era riscritta a mano qui, e le due potevano divergere.
  const stati = useMemo(() => statiLezioni(ordine, state.lezioni), [ordine, state.lezioni]);

  // Il fumetto «INIZIA» va su una sola lezione, anche nel caso anomalo in
  // cui più di una risultasse aperta e non ancora superata.
  const primaDaFare = ordine.find((l) => stati.get(l.id) === 'corrente')?.id;

  let contatoreGlobale = -1;

  const stelleFatte = ordine.reduce((acc, l) => acc + (state.lezioni[l.id] ?? 0), 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.pathHeader}>
        <Mascot state="studying" size={68} />
        <View style={styles.pathHeaderText}>
          <Text style={styles.pathHeaderTitle}>
            {stelleFatte > 0 ? 'Continua da dove eri!' : 'Si comincia da qui'}
          </Text>
          <View style={styles.pathHeaderStars}>
            <Ionicons name="star" size={15} color={colors.accent} />
            <Text style={styles.pathHeaderStarsText}>
              {stelleFatte > 0
                ? `${stelleFatte} stelle conquistate`
                : 'Completa la prima lezione per la tua prima stella'}
            </Text>
          </View>
        </View>
      </View>

      {unita.map((u) => {
        const richiedePremium = !unitaGratuita(u.difficolta) && !state.premium;
        return (
          <View key={u.difficolta}>
            <LinearGradient
              colors={richiedePremium ? ['#3A4358', '#242B3B'] : [tinte.start, tinte.end]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.unitaBanner, softShadow]}
            >
              <View style={styles.unitaTextWrap}>
                <Text style={styles.unitaKicker}>Unità {u.difficolta}</Text>
                <Text style={styles.unitaNome}>{u.nome}</Text>
              </View>
              {richiedePremium ? (
                <View style={styles.premiumChip}>
                  <MaterialCommunityIcons name="crown" size={16} color={colors.primary} />
                  <Text style={styles.premiumChipTesto}>PREMIUM</Text>
                </View>
              ) : (
                <Text style={styles.unitaMeta}>
                  {u.lezioni.filter((l) => (state.lezioni[l.id] ?? 0) >= 1).length}/
                  {u.lezioni.length} lezioni
                </Text>
              )}
            </LinearGradient>

            {richiedePremium ? (
              <BloccoPremium
                unita={u}
                tinte={tinte}
                onPress={() => navigation.navigate('Paywall')}
              />
            ) : (
              <View style={styles.nodi}>
                {u.lezioni.map((lezione, i) => {
                  contatoreGlobale += 1;
                  const stelle = state.lezioni[lezione.id] ?? 0;
                  const stato = stati.get(lezione.id) ?? 'bloccata';
                  return (
                    <Nodo
                      key={lezione.id}
                      lezione={lezione}
                      stato={stato}
                      stelle={stelle}
                      mostraInizia={lezione.id === primaDaFare}
                      offset={OFFSETS[contatoreGlobale % OFFSETS.length]}
                      tinte={tinte}
                      onPress={() =>
                        stato === 'bloccata'
                          ? spiegaBlocco(u.lezioni[i - 1]?.indice ?? lezione.indice)
                          : navigation.navigate('Lezione', { materia, lezioneId: lezione.id })
                      }
                    />
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl * 2 },
  pathHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.sm,
    paddingRight: spacing.md,
    marginBottom: spacing.md,
    ...softShadow,
    shadowOpacity: 0.06,
  },
  pathHeaderText: { flex: 1 },
  pathHeaderTitle: { fontSize: 16, fontWeight: '800', color: colors.text },
  // flex-start: con il testo su due righe la stella deve restare sulla prima.
  pathHeaderStars: { flexDirection: 'row', alignItems: 'flex-start', gap: 4, marginTop: 2 },
  pathHeaderStarsText: {
    flex: 1,
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '600',
    lineHeight: 18,
  },
  unitaBanner: {
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  unitaTextWrap: { flex: 1 },
  unitaKicker: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  unitaNome: { color: '#FFFFFF', fontSize: 20, fontWeight: '800', marginTop: 2 },
  unitaMeta: { color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: '600' },
  premiumChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.accent,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  premiumChipTesto: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: colors.primary,
  },
  premiumWrap: {
    borderRadius: radius.xxl,
    overflow: 'hidden',
    marginBottom: spacing.lg,
    backgroundColor: '#2A3247',
  },
  premiumGhost: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    opacity: 0.45,
  },
  premiumGhostNodo: { width: NODE, height: NODE, borderRadius: NODE / 2 },
  premiumFrost: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    backgroundColor: 'rgba(26,33,50,0.55)',
  },
  premiumCorona: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumTitolo: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
    marginTop: spacing.sm + 2,
  },
  premiumSub: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.82)',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 6,
  },
  premiumBtn: { alignSelf: 'stretch', marginTop: spacing.md },

  nodi: { alignItems: 'center', gap: spacing.md, marginBottom: spacing.lg },
  nodoRiga: { alignItems: 'center' },
  nodoWrap: { width: NODE, height: NODE + EDGE },
  halo: {
    position: 'absolute',
    left: 0,
    width: NODE,
    height: NODE,
    borderRadius: NODE / 2,
    borderWidth: 4,
    top: EDGE,
  },
  nodoEdge: {
    position: 'absolute',
    top: EDGE,
    width: NODE,
    height: NODE,
    borderRadius: NODE / 2,
  },
  nodoFace: {
    width: NODE,
    height: NODE,
    borderRadius: NODE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stelleRow: { flexDirection: 'row', gap: 2, marginTop: 6 },
  nodoLabel: { fontSize: 12, color: colors.textMuted, fontWeight: '600', marginTop: 2 },
  iniziaBubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 10,
    ...softShadow,
  },
  iniziaTesto: { fontSize: 13, fontWeight: '800', letterSpacing: 1.5 },
  iniziaFreccia: {
    position: 'absolute',
    bottom: -6,
    alignSelf: 'center',
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderTopWidth: 7,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FFFFFF',
  },
});
