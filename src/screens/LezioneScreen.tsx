import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { trovaLezione } from '../data/percorso';
import { useGamification } from '../gamification/GamificationContext';
import { EsecuzioneQuiz, type EsitoQuiz } from './EsecuzioneQuiz';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, materiaColors, spacing } from '../theme';

export { CUORI_INIZIALI } from './EsecuzioneQuiz';

export default function LezioneScreen({ route, navigation }: RootStackScreenProps<'Lezione'>) {
  const { materia, lezioneId } = route.params;
  const tinte = materiaColors[materia];
  const { registraLezioneCompletata } = useGamification();

  const lezione = useMemo(() => trovaLezione(materia, lezioneId), [materia, lezioneId]);

  const [iniziata, setIniziata] = useState(false);
  /** Alzata quando siamo noi a uscire (fine lezione o abbandono confermato). */
  const uscitaConsentita = useRef(false);

  /**
   * Chiede conferma prima di abbandonare una lezione già iniziata: le
   * risposte date non vengono salvate da nessuna parte, e prima bastava
   * sfiorare la X alla nona domanda su dieci per perdere tutto.
   *
   * Intercetta l'uscita e non solo il tocco sulla X, così vale anche per
   * il tasto indietro di Android e per il gesto di trascinamento su iOS.
   */
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (uscitaConsentita.current || !iniziata) return;
        e.preventDefault();
        Alert.alert(
          'Vuoi uscire dalla lezione?',
          'Le risposte date finora andranno perse e la lezione ripartirà da capo.',
          [
            { text: 'Continua la lezione', style: 'cancel' },
            {
              text: 'Esci',
              style: 'destructive',
              onPress: () => {
                uscitaConsentita.current = true;
                navigation.dispatch(e.data.action);
              },
            },
          ]
        );
      }),
    [navigation, iniziata]
  );

  const onFine = useCallback(
    (esito: EsitoQuiz) => {
      uscitaConsentita.current = true;
      if (esito.fallita) {
        navigation.replace('EsitoLezione', {
          materia,
          lezioneId,
          fallito: true,
          corrette: esito.corrette,
          totale: esito.totale,
          stelle: 0,
          punti: esito.punti,
          messaggio: 'Ripassa le spiegazioni e riprova: sei più vicino di quanto pensi.',
          nuoviBadge: esito.badge,
        });
        return;
      }
      const completata = registraLezioneCompletata(lezioneId, esito.corrette, esito.totale);
      navigation.replace('EsitoLezione', {
        materia,
        lezioneId,
        fallito: false,
        corrette: esito.corrette,
        totale: esito.totale,
        stelle: completata.stelle ?? 0,
        punti: esito.punti + completata.puntiGuadagnati,
        messaggio: completata.messaggio,
        nuoviBadge: [...esito.badge, ...completata.nuoviBadge.map((b) => b.id)],
      });
    },
    [navigation, materia, lezioneId, registraLezioneCompletata]
  );

  if (!lezione) {
    return (
      <SafeAreaView style={styles.vuoto}>
        <Text style={styles.vuotoTesto}>Lezione non trovata.</Text>
      </SafeAreaView>
    );
  }

  return (
    <EsecuzioneQuiz
      domande={lezione.domande}
      tinte={tinte}
      kicker={`${materia} · Lezione ${lezione.indice + 1}`}
      onEsci={() => navigation.goBack()}
      onIniziata={setIniziata}
      onFine={onFine}
    />
  );
}

const styles = StyleSheet.create({
  vuoto: { flex: 1, padding: spacing.md },
  vuotoTesto: { fontSize: 18, fontWeight: '600', color: colors.text },
});
