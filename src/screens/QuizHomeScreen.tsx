import React, { useMemo, useRef } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Icona } from '../components/Icona';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MATERIE_A_SCELTA, materieObbligatorie } from '../data/quizzes';
import { percorsoPerMateria } from '../data/percorso';
import { materieScoperte, rosaOrdinata } from '../data/scelte';
import { useGamification } from '../gamification/GamificationContext';
import type { RootStackParamList } from '../navigation/types';
import type { Materia } from '../types';
import { Sfondo } from '../components/Sfondo';
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
  'Diritto dell’Unione europea': 'globe',
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
        .flatMap((u) => u.lezioni),
    [materia]
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
                    {stelleTotali} · {completate}/{lezioni.length} lezioni
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
  const { state } = useGamification();
  const { portata, altre } = rosaOrdinata(state.esame.materiaScelta, MATERIE_A_SCELTA);
  const scoperte = materieScoperte();

  return (
    <Sfondo tinta={materiaColors['Diritto civile'].start}>
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
            <Text style={styles.gruppoTitolo}>
              {portata ? 'La tua materia a scelta' : 'Materie a scelta'}
            </Text>
            <Text style={styles.gruppoNota}>
              {portata ? (
                <>
                  Hai scelto <Text style={styles.gruppoForte}>{portata}</Text>. Puoi cambiare dal
                  Profilo.
                </>
              ) : (
                <>
                  All’orale ne porti <Text style={styles.gruppoForte}>una sola</Text>, scelta fra
                  costituzionale, commerciale, del lavoro, internazionale, dell’Unione europea e
                  tributario.
                </>
              )}
            </Text>
          </View>
          {/* La materia portata sta in cima, le altre sotto: si cambia
              idea, quindi non spariscono, ma non hanno lo stesso peso. */}
          {!!portata && (
            <MateriaBlock
              materia={portata}
              onPress={() => navigation.navigate('Percorso', { materia: portata })}
            />
          )}
          {altre.map((materia) => (
            <MateriaBlock
              key={materia}
              materia={materia}
              onPress={() => navigation.navigate('Percorso', { materia })}
            />
          ))}
          {/*
            Le tre materie della rosa che Legul non copre ancora. Tacerne
            l'esistenza farebbe sembrare l'app completa a chi guarda
            l'elenco, e incompleta a chi porta tributario e la cerca per
            settimane. Il secondo è l'utente che paga.
          */}
          {scoperte.length > 0 && (
            <Text style={styles.gruppoNota}>
              Non ancora coperte da Legul: {scoperte.join(', ')}. Le altre prove e il blocco di
              ordinamento, deontologia e previdenza valgono comunque per tutti.
            </Text>
          )}
        </>
      )}
    </ScrollView>
    </Sfondo>
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
