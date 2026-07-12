import React, { useRef } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { materie } from '../data/quizzes';
import { lezioniInOrdine } from '../data/percorso';
import { useGamification } from '../gamification/GamificationContext';
import type { RootStackParamList } from '../navigation/types';
import type { Materia } from '../types';
import { colors, EDGE_3D, materiaColors, radius, spacing } from '../theme';

export const ICONA_MATERIA: Record<Materia, keyof typeof Ionicons.glyphMap> = {
  'Diritto civile': 'home',
  'Diritto penale': 'shield-half',
  'Procedura civile': 'reader',
  'Procedura penale': 'search',
  'Diritto amministrativo': 'business',
  'Deontologia forense': 'people',
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
  const lezioni = lezioniInOrdine(materia);
  const completate = lezioni.filter((l) => (state.lezioni[l.id] ?? 0) >= 1).length;
  const stelleTotali = lezioni.reduce((acc, l) => acc + (state.lezioni[l.id] ?? 0), 0);
  const quota = lezioni.length > 0 ? completate / lezioni.length : 0;

  const ty = useRef(new Animated.Value(0)).current;
  const press = (down: boolean) => {
    Animated.spring(ty, { toValue: down ? EDGE_3D : 0, speed: 40, bounciness: 0, useNativeDriver: true }).start();
    if (down) Haptics.selectionAsync().catch(() => {});
  };

  return (
    <Pressable onPressIn={() => press(true)} onPressOut={() => press(false)} onPress={onPress}>
      <View style={styles.blockWrap}>
        <View style={[styles.blockEdge, { backgroundColor: tinte.edge }]} />
        <Animated.View style={{ transform: [{ translateY: ty }] }}>
          <LinearGradient
            colors={[tinte.start, tinte.end]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.block}
          >
            <View style={styles.blockHeader}>
              <View style={styles.iconBubble}>
                <Ionicons name={ICONA_MATERIA[materia]} size={26} color={tinte.end} />
              </View>
              <View style={styles.blockText}>
                <Text style={styles.materia}>{materia}</Text>
                <View style={styles.metaRow}>
                  <Ionicons name="star" size={13} color="#FFE08A" />
                  <Text style={styles.blockMeta}>
                    {stelleTotali} · {completate}/{lezioni.length} lezioni
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={22} color="rgba(255,255,255,0.9)" />
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
      <Text style={styles.titolo}>Percorso di studio</Text>
      <Text style={styles.sottotitolo}>
        Scegli la materia e avanza lezione dopo lezione: dai Fondamenti fino all’Eccellenza.
      </Text>

      {materie.map((materia) => (
        <MateriaBlock
          key={materia}
          materia={materia}
          onPress={() => navigation.navigate('Percorso', { materia })}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl, gap: spacing.md },
  titolo: { fontSize: 28, fontWeight: '900', color: colors.text },
  sottotitolo: { fontSize: 14, color: colors.textMuted, lineHeight: 20, marginBottom: spacing.xs },

  blockWrap: { paddingBottom: EDGE_3D },
  blockEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xl,
  },
  block: { borderRadius: radius.xl, padding: spacing.md, gap: spacing.md },
  blockHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  iconBubble: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockText: { flex: 1 },
  materia: { fontSize: 18, fontWeight: '800', color: '#FFFFFF' },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 3 },
  blockMeta: { fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: '600' },
  progressTrack: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.18)',
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 5, backgroundColor: '#FFFFFF' },
});
