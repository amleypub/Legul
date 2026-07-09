import React, { useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { questionsByMateria } from '../data/quizzes';
import { useGamification } from '../gamification/GamificationContext';
import { ProgressBar } from '../components/ProgressBar';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, radius, spacing } from '../theme';

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const LETTERE = ['A', 'B', 'C', 'D', 'E'];

export default function QuizScreen({ route, navigation }: RootStackScreenProps<'QuizGame'>) {
  const { materia } = route.params;
  const { registraRisposta, registraQuizCompletato } = useGamification();

  const domande = useMemo(() => shuffle(questionsByMateria(materia)), [materia]);

  const [indice, setIndice] = useState(0);
  const [selezionata, setSelezionata] = useState<number | null>(null);
  const [messaggio, setMessaggio] = useState('');
  const [puntiRisposta, setPuntiRisposta] = useState(0);
  const corretteRef = useRef(0);
  const puntiTotaliRef = useRef(0);
  const badgeRef = useRef<string[]>([]);

  const domanda = domande[indice];
  const risposto = selezionata !== null;
  const ultima = indice === domande.length - 1;

  function rispondi(opzione: number) {
    if (risposto) return;
    const corretta = opzione === domanda.rispostaCorretta;
    if (corretta) corretteRef.current += 1;
    const evento = registraRisposta(corretta);
    puntiTotaliRef.current += evento.puntiGuadagnati;
    badgeRef.current.push(...evento.nuoviBadge.map((b) => b.id));
    setSelezionata(opzione);
    setMessaggio(evento.messaggio);
    setPuntiRisposta(evento.puntiGuadagnati);
  }

  function avanti() {
    if (!ultima) {
      setIndice((i) => i + 1);
      setSelezionata(null);
      setMessaggio('');
      setPuntiRisposta(0);
      return;
    }
    const eventoFine = registraQuizCompletato(corretteRef.current, domande.length);
    navigation.replace('QuizResult', {
      materia,
      corrette: corretteRef.current,
      totale: domande.length,
      puntiGuadagnati: puntiTotaliRef.current + eventoFine.puntiGuadagnati,
      messaggio: eventoFine.messaggio,
      nuoviBadge: [...badgeRef.current, ...eventoFine.nuoviBadge.map((b) => b.id)],
    });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Avanzamento */}
      <View style={styles.progressWrap}>
        <Text style={styles.progressLabel}>
          Domanda {indice + 1} di {domande.length}
        </Text>
        <ProgressBar
          progress={(indice + (risposto ? 1 : 0)) / domande.length}
          trackColor={colors.border}
          color={colors.primary}
        />
      </View>

      <Text style={styles.domanda}>{domanda.domanda}</Text>

      {domanda.opzioni.map((opzione, i) => {
        const isCorretta = i === domanda.rispostaCorretta;
        const isSelezionata = i === selezionata;
        return (
          <Pressable
            key={i}
            disabled={risposto}
            onPress={() => rispondi(i)}
            style={({ pressed }) => [
              styles.opzione,
              pressed && !risposto && styles.opzionePressed,
              risposto && isCorretta && styles.opzioneCorretta,
              risposto && isSelezionata && !isCorretta && styles.opzioneErrata,
            ]}
          >
            <Text
              style={[
                styles.lettera,
                risposto && isCorretta && styles.letteraCorretta,
                risposto && isSelezionata && !isCorretta && styles.letteraErrata,
              ]}
            >
              {LETTERE[i]}
            </Text>
            <Text style={styles.opzioneTesto}>{opzione}</Text>
            {risposto && isCorretta && (
              <Ionicons name="checkmark" size={20} color={colors.success} />
            )}
            {risposto && isSelezionata && !isCorretta && (
              <Ionicons name="close" size={20} color={colors.error} />
            )}
          </Pressable>
        );
      })}

      {risposto && (
        <View style={styles.feedbackWrap}>
          <View
            style={[
              styles.incoraggiamento,
              selezionata === domanda.rispostaCorretta
                ? styles.incoraggiamentoOk
                : styles.incoraggiamentoKo,
            ]}
          >
            <Text style={styles.incoraggiamentoTesto}>{messaggio}</Text>
            <Text style={styles.puntiGuadagnati}>+{puntiRisposta} punti</Text>
          </View>

          <View style={styles.spiegazioneCard}>
            <Text style={styles.spiegazioneTitolo}>Perché?</Text>
            <Text style={styles.spiegazioneTesto}>{domanda.spiegazione}</Text>
          </View>

          <Pressable style={({ pressed }) => [styles.avantiBtn, pressed && styles.avantiBtnPressed]} onPress={avanti}>
            <Text style={styles.avantiTesto}>
              {ultima ? 'Vedi il risultato' : 'Prossima domanda'}
            </Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  progressWrap: { marginBottom: spacing.md, gap: spacing.xs },
  progressLabel: { fontSize: 13, color: colors.textMuted, fontWeight: '600' },
  domanda: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
    lineHeight: 26,
  },
  opzione: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderWidth: 1.5,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  opzionePressed: { opacity: 0.7 },
  opzioneCorretta: { borderColor: colors.success, backgroundColor: colors.successSoft },
  opzioneErrata: { borderColor: colors.error, backgroundColor: colors.errorSoft },
  lettera: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.background,
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: '800',
    color: colors.primary,
    overflow: 'hidden',
  },
  letteraCorretta: { backgroundColor: colors.success, color: '#FFFFFF' },
  letteraErrata: { backgroundColor: colors.error, color: '#FFFFFF' },
  opzioneTesto: { flex: 1, fontSize: 15, color: colors.text, lineHeight: 21 },
  feedbackWrap: { marginTop: spacing.sm, gap: spacing.sm },
  incoraggiamento: {
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  incoraggiamentoOk: { backgroundColor: colors.successSoft },
  incoraggiamentoKo: { backgroundColor: colors.accentSoft },
  incoraggiamentoTesto: { flex: 1, fontSize: 14, color: colors.text, lineHeight: 20 },
  puntiGuadagnati: { fontSize: 14, fontWeight: '800', color: colors.primary },
  spiegazioneCard: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  spiegazioneTitolo: { fontSize: 15, fontWeight: '700', color: colors.text, marginBottom: 6 },
  spiegazioneTesto: { fontSize: 14, color: colors.text, lineHeight: 21 },
  avantiBtn: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
  },
  avantiBtnPressed: { opacity: 0.85 },
  avantiTesto: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});
