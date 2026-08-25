import React, { useEffect, useMemo, useRef } from 'react';
import {
  Alert,
  Animated,
  Easing,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as Haptics from 'expo-haptics';
import { Icona } from '../components/Icona';
import {
  percorsoPerMateria,
  statiLezioni,
  type Lezione,
  type StatoLezione,
  type Unita,
} from '../data/percorso';
import { useGamification } from '../gamification/GamificationContext';
import { Mascot } from '../components/Mascot';
import { Bottone } from '../components/Bottone';
import type { RootStackScreenProps } from '../navigation/types';
import { alone, alpha, colors, materiaColors, radius, ombra, spacing, SCALA_PRESSIONE } from '../theme';

const NODE = 76;
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
  const premuto = useRef(new Animated.Value(0)).current;
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
          Animated.spring(premuto, {
            toValue: 1,
            speed: 40,
            bounciness: 0,
            useNativeDriver: true,
          }).start();
          Haptics.selectionAsync().catch(() => {});
        }}
        onPressOut={() =>
          Animated.spring(premuto, {
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
        <Animated.View
          style={[
            styles.nodoFace,
            !bloccata && alone(tinte.end, 'tenue'),
            {
              backgroundColor: faccia,
              transform: [
                {
                  scale: premuto.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, SCALA_PRESSIONE],
                  }),
                },
              ],
            },
          ]}
        >
          {premium ? (
            <MaterialCommunityIcons name="crown" size={30} color={colors.accent} />
          ) : (
            <Icona
              nome={bloccata ? 'lock-closed' : stato === 'completata' ? 'checkmark' : 'play'}
              size={30}
              color={bloccata ? '#8B93A3' : '#FFFFFF'}
            />
          )}
        </Animated.View>
      </Pressable>
      <View style={styles.stelleRow}>
        {[1, 2, 3].map((n) => (
          <Icona
            key={n}
            nome="star"
            pieno={stelle >= n}
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

/** Le righe che compongono il percorso, appiattite per la lista. */
type Riga =
  | { chiave: string; tipo: 'testata'; stelleFatte: number }
  | { chiave: string; tipo: 'unita'; unita: Unita; completate: number }
  | {
      chiave: string;
      tipo: 'nodo';
      lezione: Lezione;
      stato: StatoLezione;
      stelle: number;
      inizia: boolean;
      offset: number;
      indicePrecedente: number;
    };

export default function PercorsoScreen({ route, navigation }: RootStackScreenProps<'Percorso'>) {
  const { materia } = route.params;
  const { state } = useGamification();
  const tinte = materiaColors[materia];
  const lista = useRef<FlatList<Riga>>(null);

  const unita = percorsoPerMateria(materia);
  const ordine = useMemo(() => unita.flatMap((u) => u.lezioni), [unita]);

  // Regola di sblocco: una sola implementazione, condivisa con il resto
  // dell'app. Prima era riscritta a mano qui, e le due potevano divergere.
  const stati = useMemo(() => statiLezioni(ordine, state.lezioni), [ordine, state.lezioni]);

  const righe = useMemo<Riga[]>(() => {
    const stelleFatte = ordine.reduce((acc, l) => acc + (state.lezioni[l.id] ?? 0), 0);
    // Il fumetto «INIZIA» va su una sola lezione, anche nel caso anomalo
    // in cui più d'una risultasse aperta e non ancora superata.
    const primaDaFare = ordine.find((l) => stati.get(l.id) === 'corrente')?.id;

    const out: Riga[] = [{ chiave: 'testata', tipo: 'testata', stelleFatte }];
    let contatore = -1;

    for (const u of unita) {
      out.push({
        chiave: `unita-${u.difficolta}`,
        tipo: 'unita',
        unita: u,
        completate: u.lezioni.filter((l) => (state.lezioni[l.id] ?? 0) >= 1).length,
      });

      u.lezioni.forEach((lezione, i) => {
        contatore += 1;
        out.push({
          chiave: lezione.id,
          tipo: 'nodo',
          lezione,
          stato: stati.get(lezione.id) ?? 'bloccata',
          stelle: state.lezioni[lezione.id] ?? 0,
          inizia: lezione.id === primaDaFare,
          offset: OFFSETS[contatore % OFFSETS.length],
          indicePrecedente: u.lezioni[i - 1]?.indice ?? lezione.indice,
        });
      });
    }
    return out;
  }, [unita, ordine, stati, state.lezioni]);

  /**
   * Il percorso si apriva sempre in cima: più lezioni completavi, più
   * dovevi scorrere per ritrovare il punto in cui eri. Ora parte da lì.
   * Solo al primo montaggio: durante l'uso lo scorrimento è dell'utente.
   */
  const indiceCorrente = righe.findIndex((r) => r.tipo === 'nodo' && r.inizia);
  const giaPosizionato = useRef(false);
  useEffect(() => {
    if (giaPosizionato.current || indiceCorrente < 2) return;
    giaPosizionato.current = true;
    const t = setTimeout(() => {
      lista.current?.scrollToIndex({ index: indiceCorrente, viewPosition: 0.45, animated: false });
    }, 60);
    return () => clearTimeout(t);
  }, [indiceCorrente]);

  const renderRiga = ({ item }: { item: Riga }) => {
    switch (item.tipo) {
      case 'testata':
        return (
          <View style={styles.pathHeader}>
            <Mascot state="studying" size={68} />
            <View style={styles.pathHeaderText}>
              <Text style={styles.pathHeaderTitle}>
                {item.stelleFatte > 0 ? 'Continua da dove eri!' : 'Si comincia da qui'}
              </Text>
              <View style={styles.pathHeaderStars}>
                <Icona nome="star" size={15} color={colors.accent} pieno />
                <Text style={styles.pathHeaderStarsText}>
                  {item.stelleFatte > 0
                    ? `${item.stelleFatte} stelle conquistate`
                    : 'Completa la prima lezione per la tua prima stella'}
                </Text>
              </View>
            </View>
          </View>
        );

      case 'unita':
        return (
          <LinearGradient
            colors={[tinte.start, tinte.end]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.unitaBanner, ombra.media]}
          >
            <View style={styles.unitaTextWrap}>
              <Text style={styles.unitaKicker}>Unità {item.unita.difficolta}</Text>
              <Text style={styles.unitaNome}>{item.unita.nome}</Text>
            </View>
            <Text style={styles.unitaMeta}>
              {item.completate}/{item.unita.lezioni.length} lezioni
            </Text>
          </LinearGradient>
        );


      case 'nodo':
        return (
          <View style={styles.nodoRigaWrap}>
            <Nodo
              lezione={item.lezione}
              stato={item.stato}
              stelle={item.stelle}
              mostraInizia={item.inizia}
              offset={item.offset}
              tinte={tinte}
              onPress={() =>
                item.stato === 'bloccata'
                  ? spiegaBlocco(item.indicePrecedente)
                  : navigation.navigate('Lezione', { materia, lezioneId: item.lezione.id })
              }
            />
          </View>
        );
    }
  };

  return (
    <FlatList
      ref={lista}
      style={styles.container}
      contentContainerStyle={styles.content}
      data={righe}
      keyExtractor={(r) => r.chiave}
      renderItem={renderRiga}
      // Le righe hanno altezze diverse: senza getItemLayout lo scorrimento
      // a un indice non ancora montato fallisce, e va ritentato.
      onScrollToIndexFailed={({ index, averageItemLength }) => {
        lista.current?.scrollToOffset({ offset: index * averageItemLength, animated: false });
        setTimeout(
          () => lista.current?.scrollToIndex({ index, viewPosition: 0.45, animated: false }),
          80
        );
      }}
      initialNumToRender={12}
      windowSize={9}
      removeClippedSubviews
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
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
    ...ombra.media,
    shadowOpacity: 0.06,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
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

  nodoRigaWrap: { alignItems: 'center', marginBottom: spacing.md },
  nodoRiga: { alignItems: 'center' },
  nodoWrap: { width: NODE, height: NODE },
  halo: {
    position: 'absolute',
    left: 0,
    width: NODE,
    height: NODE,
    borderRadius: NODE / 2,
    borderWidth: 4,
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
    ...ombra.media,
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
