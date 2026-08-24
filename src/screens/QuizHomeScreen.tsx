import React, { useMemo, useRef } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Icona } from '../components/Icona';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MATERIE_A_SCELTA, materieObbligatorie } from '../data/quizzes';
import { percorsoPerMateria, unitaGratuita } from '../data/percorso';
import { useGamification } from '../gamification/GamificationContext';
import type { RootStackParamList } from '../navigation/types';
import type { Materia } from '../types';
import { TitoloSchermata } from '../components/TitoloSchermata';
import { colors, materiaColors, radius, spacing, SCALA_PRESSIONE, SPAZIO_TAB } from '../theme';

export const ICONA_MATERIA: Record<Materia, string> = {
  'Diritto civile': 'handshake',
  'Diritto penale': 'shield-half',
  'Procedura civile': 'gavel',
  'Procedura penale': 'scales',
  'Diritto amministrativo': 'landmark',
  'Deontologia forense': 'people',
  'Diritto costituzionale': 'library-outline',
  'Diritto commerciale': 'briefcase',
  'Diritto del lavoro': 'hard-hat',
};

function MateriaBlock({
  materia,
  onPress,
}: {
  materia: Materia;
  onPress: () => void;
}) {
  const { state } = useGamification();
  const tinte = materiaColors[materia];

  // Conta solo le lezioni che l'utente può davvero aprire: mostrare
  // «0/64» a chi non ha Premium significa indicare un traguardo
  // irraggiungibile e una barra che non arriverà mai in fondo.
  const lezioni = useMemo(
    () =>
      percorsoPerMateria(materia)
        .filter((u) => state.premium || unitaGratuita(u.difficolta))
        .flatMap((u) => u.lezioni),
    [materia, state.premium]
  );
  const completate = lezioni.filter((l) => (state.lezioni[l.id] ?? 0) >= 1).length;
  const stelleTotali = lezioni.reduce((acc, l) => acc + (state.lezioni[l.id] ?? 0), 0);
  const quota = lezioni.length > 0 ? completate / lezioni.length : 0;

  const premuto = useRef(new Animated.Value(0)).current;
  const press = (down: boolean) => {
    Animated.spring(premuto, {
      toValue: down ? 1 : 0,
      speed: 40,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
    if (down) Haptics.selectionAsync().catch(() => {});
  };

  return (
    <Pressable onPressIn={() => press(true)} onPressOut={() => press(false)} onPress={onPress}>
      <View style={styles.blockWrap}>
        <Animated.View style={{ transform: [
                {
                  scale: premuto.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, SCALA_PRESSIONE],
                  }),
                },
              ] }}>
          <LinearGradient
            colors={[tinte.start, tinte.end]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.block}
          >
            <View style={styles.blockHeader}>
              <View style={styles.iconBubble}>
                <Icona nome={ICONA_MATERIA[materia]} size={26} color={tinte.end} />
              </View>
              <View style={styles.blockText}>
                <Text style={styles.materia}>{materia}</Text>
                <View style={styles.metaRow}>
                  <Icona nome="star" size={13} color="#FFE08A" pieno />
                  <Text style={styles.blockMeta}>
                    {stelleTotali} · {completate}/{lezioni.length} lezioni{state.premium ? '' : ' gratuite'}
                  </Text>
                </View>
              </View>
              <Icona nome="chevron-forward" size={22} color="rgba(255,255,255,0.9)" />
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${quota * 100}%` }]} />
            </View>
          </LinearGradient>
        </Animated.View>
      </View>
    </Pressable>
  );
}

export default function QuizHomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TitoloSchermata
        titolo="Percorso di studio"
        sottotitolo="Scegli la materia e avanza lezione dopo lezione: dai Fondamenti fino all’Eccellenza."
      />

      {materieObbligatorie.map((materia) => (
        <MateriaBlock
          key={materia}
          materia={materia}
          onPress={() => navigation.navigate('Percorso', { materia })}
        />
      ))}

      {/* Le materie a scelta non vanno presentate insieme alle altre: chi
          le vedesse in fila crederebbe di doverle studiare tutte, mentre
          all'orale se ne porta una sola. */}
      {MATERIE_A_SCELTA.length > 0 && (
        <>
          <View style={styles.gruppo}>
            <Text style={styles.gruppoTitolo}>Materie a scelta</Text>
            <Text style={styles.gruppoNota}>
              All’orale ne porti <Text style={styles.gruppoForte}>una sola</Text>, scelta fra
              costituzionale, commerciale, del lavoro, internazionale, dell’Unione europea e
              tributario.
            </Text>
          </View>
          {MATERIE_A_SCELTA.map((materia) => (
            <MateriaBlock
              key={materia}
              materia={materia}
              onPress={() => navigation.navigate('Percorso', { materia })}
            />
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  content: { padding: spacing.md, paddingBottom: SPAZIO_TAB, gap: spacing.md },
  titolo: { fontSize: 28, fontWeight: '900', color: colors.text },
  sottotitolo: { fontSize: 14, color: colors.textMuted, lineHeight: 20, marginBottom: spacing.xs },

  blockWrap: { },
  block: { borderRadius: radius.xxl, paddingVertical: spacing.sm + 2, paddingHorizontal: spacing.md, gap: spacing.sm },
  blockHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  iconBubble: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockText: { flex: 1 },
  materia: { fontSize: 18, fontWeight: '800', color: '#FFFFFF' },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  blockMeta: { fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: '600' },
  progressTrack: {
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.18)',
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 4, backgroundColor: '#FFFFFF' },

  gruppo: { marginTop: spacing.sm, gap: 4 },
  gruppoTitolo: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  gruppoNota: { fontSize: 13, color: colors.textMuted, lineHeight: 19 },
  gruppoForte: { fontWeight: '800', color: colors.text },
});
