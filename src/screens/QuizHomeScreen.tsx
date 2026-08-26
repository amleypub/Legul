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
import { SCALA_PRESSIONE, SPAZIO_TAB, alpha, colors, materiaColors, radius, spacing, type } from '../theme';

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
  'Diritto internazionale': 'compass',
  'Diritto tributario': 'calculator',
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
          {/*
            La scheda è vetro, non una lastra colorata.

            Sei riquadri saturi in fila erano il residuo più vistoso del
            linguaggio precedente: leggibili, allegri e completamente fuori
            registro per un prodotto che si vende come strumento
            professionale. Qui la tinta della materia sopravvive in tre
            punti soli — il filo verticale a sinistra, il tratto
            dell'icona e il riempimento della barra — e basta a
            distinguere una materia dall'altra senza gridare.
          */}
          <View style={styles.block}>
            <LinearGradient
              colors={[tinte.soft, 'rgba(255,255,255,0.02)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={StyleSheet.absoluteFill}
              pointerEvents="none"
            />
            {/* Il filo di tinta: identifica la materia a colpo d'occhio
                anche scorrendo veloce, e costa due pixel. */}
            <View style={[styles.filo, { backgroundColor: tinte.edge }]} pointerEvents="none" />
            <View style={styles.blockHeader}>
              <View style={styles.iconBubble}>
                <Icona nome={ICONA_MATERIA[materia]} size={22} color={tinte.edge} />
              </View>
              <View style={styles.blockText}>
                <Text style={styles.materia}>{materia}</Text>
                <View style={styles.metaRow}>
                  <Icona nome="star" size={12} color={colors.accent} />
                  <Text style={styles.blockMeta}>
                    {stelleTotali} · {completate}/{lezioni.length} lezioni
                  </Text>
                </View>
              </View>
              <Icona nome="chevron-forward" size={18} color={colors.textFaint} />
            </View>
            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${quota * 100}%`, backgroundColor: tinte.edge },
                ]}
              />
            </View>
          </View>
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
            Le materie della rosa che Legul non copre ancora. Oggi non ce
            ne sono — tutte e sei sono in banca dati — e il blocco non
            compare: la riga resta perché l'elenco della rosa è fissato
            dalla legge e non da noi, e se una riforma ne aggiungesse una
            l'app deve tornare a dirlo invece di sembrare completa.
            Tacerne l'esistenza farebbe sembrare l'app completa a chi
            guarda l'elenco, e incompleta a chi cerca quella materia per
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
  titolo: { fontSize: 28, fontWeight: '700', color: colors.text },
  sottotitolo: { fontSize: 14, color: colors.textMuted, lineHeight: 20, marginBottom: spacing.xs },

  blockWrap: { },
  block: {
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: alpha.bordo,
    overflow: 'hidden',
    paddingVertical: spacing.md - 2,
    paddingHorizontal: spacing.md,
    paddingLeft: spacing.md + 4,
    gap: spacing.sm + 2,
  },
  filo: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 2 },
  blockHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md - 2 },
  iconBubble: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: alpha.bordo,
    backgroundColor: alpha.velo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockText: { flex: 1 },
  materia: { ...type.scheda, fontSize: 16, color: colors.text },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 3 },
  blockMeta: { ...type.piccolo, fontSize: 12.5, color: colors.textMuted },
  progressTrack: {
    height: 3,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.07)',
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 2 },

  gruppo: { marginTop: spacing.sm, gap: 4 },
  gruppoTitolo: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  gruppoNota: { fontSize: 13, color: colors.textMuted, lineHeight: 19 },
  gruppoForte: { fontWeight: '600', color: colors.text },
});
