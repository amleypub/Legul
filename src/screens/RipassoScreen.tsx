import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { tutteLeDomande } from '../data/questions';
import { useGamification } from '../gamification/GamificationContext';
import {
  descriviScadenza,
  dovuteOggi,
  oggiISO,
  prossimaScadenza,
} from '../gamification/ripasso';
import { Bottone } from '../components/Bottone';
import { Monolite } from '../components/Monolite';
import { EsecuzioneQuiz, type EsitoQuiz } from './EsecuzioneQuiz';
import type { RootStackScreenProps } from '../navigation/types';
import type { QuizQuestion } from '../types';
import { colors, materiaColors, spacing } from '../theme';

/** Quante domande al massimo in una sessione di ripasso. */
export const DOMANDE_PER_RIPASSO = 10;

/**
 * Ripasso a ripetizione dilazionata.
 *
 * Non vengono riproposti tutti gli errori accumulati, ma solo le carte
 * che scadono oggi: una regola sbagliata torna dopo un giorno, poi dopo
 * tre, poi dopo una settimana. È il momento in cui sta per uscire di
 * testa, ed è l'unico in cui rivederla serve davvero.
 *
 * Senza cuori: qui non si può fallire. Il ripasso serve a recuperare gli
 * errori, e interromperlo a metà per un errore di troppo — proprio dove
 * gli errori sono la norma — sarebbe controproducente.
 */
export default function RipassoScreen({ navigation }: RootStackScreenProps<'Ripasso'>) {
  const { state, caricato } = useGamification();
  const [iniziata, setIniziata] = useState(false);
  const uscitaConsentita = useRef(false);

  /**
   * La serie di domande viene fotografata una volta sola: rispondendo
   * bene le carte escono dal mazzo dovuto, e senza la fotografia il
   * ripasso si ridurrebbe sotto i piedi mentre lo si sta facendo.
   *
   * Si attende `caricato` perché i progressi arrivano dal dispositivo in
   * modo asincrono: fotografare al primo render coglierebbe un mazzo
   * vuoto che non è quello vero.
   */
  const [domande, setDomande] = useState<QuizQuestion[] | null>(null);
  const [prossima, setProssima] = useState<string | null>(null);
  useEffect(() => {
    if (domande !== null || !caricato) return;
    const oggi = oggiISO();
    const perId = new Map(tutteLeDomande.map((d) => [d.id, d]));
    setDomande(
      dovuteOggi(state.mazzoRipasso, oggi)
        .map((c) => perId.get(c.id))
        .filter((d): d is QuizQuestion => Boolean(d))
        .slice(0, DOMANDE_PER_RIPASSO)
    );
    const scadenza = prossimaScadenza(state.mazzoRipasso, oggi);
    setProssima(scadenza ? descriviScadenza(scadenza, oggi) : null);
  }, [caricato, domande, state.mazzoRipasso]);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (uscitaConsentita.current || !iniziata) return;
        e.preventDefault();
        Alert.alert('Vuoi interrompere il ripasso?', 'Le risposte date finora andranno perse.', [
          { text: 'Continua il ripasso', style: 'cancel' },
          {
            text: 'Esci',
            style: 'destructive',
            onPress: () => {
              uscitaConsentita.current = true;
              navigation.dispatch(e.data.action);
            },
          },
        ]);
      }),
    [navigation, iniziata]
  );

  const onFine = useCallback(
    (esito: EsitoQuiz) => {
      uscitaConsentita.current = true;
      const recuperate = esito.corrette;
      navigation.replace('EsitoLezione', {
        materia: 'Ripasso',
        lezioneId: '',
        fallito: false,
        corrette: esito.corrette,
        totale: esito.totale,
        // Nessuna stella: il ripasso non fa parte del percorso, e premiarlo
        // con le stesse stelle delle lezioni ne falserebbe l'avanzamento.
        stelle: 0,
        punti: esito.punti,
        messaggio:
          recuperate === esito.totale
            ? 'Tutte giuste: queste domande torneranno più avanti, a distanza maggiore.'
            : `${recuperate} ${recuperate === 1 ? 'domanda recuperata' : 'domande recuperate'} su ${esito.totale}. Quelle sbagliate tornano domani, le altre più avanti.`,
        nuoviBadge: esito.badge,
      });
    },
    [navigation]
  );

  // Ancora in lettura dei progressi: nessun contenuto da mostrare, ma
  // nemmeno un vuoto che sarebbe falso.
  if (domande === null) return <View style={styles.attesa} />;

  if (domande.length === 0) {
    return (
      <SafeAreaView style={styles.vuoto}>
        <Monolite state="celebrating" size={104} />
        <Text style={styles.vuotoTitolo}>
          {prossima ? 'Ripasso in pari' : 'Nessun errore da ripassare'}
        </Text>
        <Text style={styles.vuotoTesto}>
          {prossima
            ? `Le domande che hai sbagliato tornano a distanza crescente, quando stanno per uscirti di testa. Le prossime ti aspettano ${prossima}.`
            : 'Le domande che sbagli finiscono qui e tornano a distanza crescente: dopo un giorno, poi dopo tre, poi dopo una settimana. Al momento non ce n’è nessuna in sospeso.'}
        </Text>
        <Bottone
          label="Torna indietro"
          onPress={() => navigation.goBack()}
          variante="scuro"
          style={styles.vuotoBtn}
        />
      </SafeAreaView>
    );
  }

  return (
    <EsecuzioneQuiz
      domande={domande}
      tinte={materiaColors.Ripasso}
      kicker="Ripasso degli errori"
      cuoriIniziali={null}
      onEsci={() => navigation.goBack()}
      onIniziata={setIniziata}
      onFine={onFine}
    />
  );
}

const styles = StyleSheet.create({
  attesa: { flex: 1, },
  vuoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  vuotoTitolo: { fontSize: 21, fontWeight: '700', color: colors.text, marginTop: spacing.sm },
  vuotoTesto: {
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },
  vuotoBtn: { alignSelf: 'stretch', marginTop: spacing.md },
});
