import React, { useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icona } from '../components/Icona';
import {
  casoDaId,
  DURATA_ESPOSIZIONE_PREDEFINITA,
  DURATA_PREPARAZIONE_PREDEFINITA,
  DURATE_ESPOSIZIONE,
  DURATE_PREPARAZIONE,
  type MateriaCaso,
} from '../data/casi';
import {
  coperturaPerVersante,
  esitoSimulazione,
  formattaTempo,
  punteggio as calcolaPunteggio,
  SOGLIA_VERSANTE,
  type FaseSimulazione,
} from '../simulatore/modello';
import { useCronometro } from '../simulatore/useCronometro';
import { useGamification } from '../gamification/GamificationContext';
import { casiRiservati, casoAccessibile } from '../data/accesso';
import { MuroPremium } from '../components/MuroPremium';
import { Bottone } from '../components/Bottone';
import { Mascot } from '../components/Mascot';
import { ProgressBar } from '../components/ProgressBar';
import type { RootStackScreenProps } from '../navigation/types';
import { alpha, colors, materiaColors, radius, spacing } from '../theme';

const TINTA: Record<MateriaCaso, keyof typeof materiaColors> = {
  'Diritto privato': 'Diritto civile',
  'Diritto penale': 'Diritto penale',
  'Diritto amministrativo': 'Diritto amministrativo',
};

export default function CasoPraticoScreen({
  route,
  navigation,
}: RootStackScreenProps<'CasoPratico'>) {
  const { casoId } = route.params;
  const caso = casoDaId(casoId);
  const { state, registraCasoPratico } = useGamification();

  const [fase, setFase] = useState<FaseSimulazione>('istruzioni');
  const [minutiPrep, setMinutiPrep] = useState<number>(DURATA_PREPARAZIONE_PREDEFINITA);
  const [minutiEsp, setMinutiEsp] = useState<number>(DURATA_ESPOSIZIONE_PREDEFINITA);
  const [presi, setPresi] = useState<string[]>([]);
  const [premio, setPremio] = useState<{ punti: number; messaggio: string } | null>(null);
  const registrato = useRef(false);

  const prep = useCronometro(minutiPrep * 60, fase === 'preparazione');
  const esp = useCronometro(minutiEsp * 60, fase === 'esposizione');

  const totale = useMemo(
    () => (caso ? calcolaPunteggio(caso.scaletta, presi) : 0),
    [caso, presi]
  );
  const versanti = useMemo(
    () => (caso ? coperturaPerVersante(caso.scaletta, presi) : null),
    [caso, presi]
  );

  if (!caso) {
    return (
      <View style={styles.vuoto}>
        <Mascot state="studying" size={96} />
        <Text style={styles.vuotoTitolo}>Caso non trovato</Text>
        <Bottone
          label="Torna ai casi"
          onPress={() => navigation.goBack()}
          variante="scuro"
          style={styles.vuotoBtn}
        />
      </View>
    );
  }

  /*
   * Come per gli svolgimenti: il collegamento diretto porta qui senza
   * passare dall'elenco, quindi il controllo va ripetuto.
   */
  if (!casoAccessibile(caso.id, state.premium)) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contenutoMuro}>
        <MuroPremium
          cosa="Questo caso pratico"
          motivo="Il caso, il tempo per prepararlo e la scaletta punto per punto con cui confrontare quello che hai detto, separata fra sostanziale e processuale."
          quantiAltri={casiRiservati()}
          onSblocca={() => navigation.navigate('Paywall')}
          onIndietro={() => navigation.goBack()}
          etichettaIndietro="Torna ai casi"
        />
      </ScrollView>
    );
  }

  const tinte = materiaColors[TINTA[caso.materia]];

  const chiudi = () => {
    if (registrato.current) return;
    registrato.current = true;
    const evento = registraCasoPratico(caso.id, totale);
    setPremio({ punti: evento.puntiGuadagnati, messaggio: evento.messaggio });
    setFase('esito');
  };

  const testata = (
    <View style={styles.testataWrap}>
      <LinearGradient
        colors={[tinte.start, tinte.end]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.testata}
      >
        <Text style={styles.occhiello}>{caso.materia}</Text>
        <Text style={styles.titolo}>{caso.titolo}</Text>
      </LinearGradient>
    </View>
  );

  const fattoCard = (
    <>
      <View style={styles.sezione}>
        <Icona nome="reader-outline" size={16} color={colors.textMuted} />
        <Text style={styles.sezioneTitolo}>Il caso</Text>
      </View>
      <View style={styles.fattoWrap}>
        <View style={styles.fatto}>
          {caso.fatto.map((f, i) => (
            <Text key={i} style={styles.fattoTesto}>
              {f}
            </Text>
          ))}
          <View style={styles.consegna}>
            <Text style={styles.consegnaTesto}>{caso.consegna}</Text>
          </View>
        </View>
      </View>
    </>
  );

  // ——— Istruzioni: si sceglie quanto durano le due fasi ———
  if (fase === 'istruzioni') {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {testata}

        <View style={styles.passiWrap}>
          <View style={styles.passi}>
            {[
              ['1', 'Leggi e prepara', 'Il caso resta visibile. Prendi appunti su carta, come farai all’esame.'],
              ['2', 'Esponi ad alta voce', 'La scaletta resta nascosta. Parla come se la commissione fosse davanti.'],
              ['3', 'Confronta', 'Ti mostriamo la scaletta punto per punto e segni quello che hai davvero detto.'],
            ].map(([n, t, d]) => (
              <View key={n} style={styles.passo}>
                <View style={[styles.passoNumero, { backgroundColor: tinte.end }]}>
                  <Text style={styles.passoNumeroTesto}>{n}</Text>
                </View>
                <View style={styles.passoTesti}>
                  <Text style={styles.passoTitolo}>{t}</Text>
                  <Text style={styles.passoDettaglio}>{d}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sezione}>
          <Icona nome="timer-outline" size={16} color={colors.textMuted} />
          <Text style={styles.sezioneTitolo}>Quanto tempo ti dai</Text>
        </View>

        <View style={styles.durateCard}>
          <Text style={styles.durataEtichetta}>Preparazione</Text>
          <View style={styles.durataRiga}>
            {DURATE_PREPARAZIONE.map((m) => (
              <Pressable
                key={m}
                onPress={() => setMinutiPrep(m)}
                accessibilityRole="radio"
                accessibilityState={{ selected: minutiPrep === m }}
                style={[styles.durata, minutiPrep === m && { backgroundColor: tinte.end }]}
              >
                <Text style={[styles.durataTesto, minutiPrep === m && styles.durataTestoAttiva]}>
                  {m} min
                </Text>
              </Pressable>
            ))}
          </View>

          <Text style={[styles.durataEtichetta, styles.durataEtichettaDopo]}>Esposizione</Text>
          <View style={styles.durataRiga}>
            {DURATE_ESPOSIZIONE.map((m) => (
              <Pressable
                key={m}
                onPress={() => setMinutiEsp(m)}
                accessibilityRole="radio"
                accessibilityState={{ selected: minutiEsp === m }}
                style={[styles.durata, minutiEsp === m && { backgroundColor: tinte.end }]}
              >
                <Text style={[styles.durataTesto, minutiEsp === m && styles.durataTestoAttiva]}>
                  {m} min
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Va detto qui, dove si scelgono i minuti, non in fondo alla
              schermata: è nel momento della scelta che l'utente potrebbe
              scambiarli per una regola. */}
          <Text style={styles.durataNota}>
            Il decreto non fissa questi tempi e il decreto di indizione non è ancora uscito. Sono
            una nostra impostazione di lavoro: cambiala pure.
          </Text>
        </View>

        <Bottone
          label="Comincia"
          onPress={() => setFase('preparazione')}
          variante="accento"
          style={styles.azione}
        />
      </ScrollView>
    );
  }

  // ——— Preparazione ed esposizione: cambia il cronometro, non il resto ———
  if (fase === 'preparazione' || fase === 'esposizione') {
    const inPreparazione = fase === 'preparazione';
    const crono = inPreparazione ? prep : esp;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={[styles.cronoWrap, crono.scaduto && styles.cronoScadutoWrap]}>
          <View style={styles.cronoTesta}>
            <Icona
              nome={inPreparazione ? 'create-outline' : 'mic-outline'}
              size={18}
              color={crono.scaduto ? colors.error : tinte.end}
            />
            <Text style={styles.cronoEtichetta}>
              {inPreparazione ? 'Preparazione' : 'Esposizione'}
            </Text>
          </View>
          <Text style={[styles.cronoTempo, crono.scaduto && styles.cronoTempoScaduto]}>
            {formattaTempo(crono.residuo)}
          </Text>
          {/* Il binario va indicato: quello predefinito è bianco
              trasparente, pensato per le card colorate, e qui sparirebbe. */}
          <ProgressBar
            progress={crono.quota}
            color={crono.scaduto ? colors.error : tinte.end}
            trackColor="#E4E8F0"
          />
          <Text style={styles.cronoNota}>
            {crono.scaduto
              ? inPreparazione
                ? 'Tempo scaduto. All’esame ti fermerebbero qui: passa all’esposizione con quello che hai.'
                : 'Tempo scaduto. Chiudi il ragionamento e passa al confronto.'
              : inPreparazione
                ? 'Prendi appunti su carta. Cerca le questioni, non la risposta.'
                : 'Parla ad alta voce. La scaletta resta nascosta apposta.'}
          </Text>
        </View>

        {fattoCard}

        {inPreparazione && (
          <View style={styles.suggerimento}>
            <Icona nome="bulb-outline" size={17} color={colors.accentEdge} />
            <Text style={styles.suggerimentoTesto}>
              Dividi gli appunti in due colonne: sostanziale e processuale. La prova chiede
              entrambi, ed è il secondo quello che si dimentica.
            </Text>
          </View>
        )}

        <Bottone
          label={inPreparazione ? 'Sono pronto, comincio a esporre' : 'Ho finito di esporre'}
          onPress={() => setFase(inPreparazione ? 'esposizione' : 'autovalutazione')}
          variante="accento"
          style={styles.azione}
        />
        <Pressable onPress={() => navigation.goBack()} style={styles.abbandona}>
          <Text style={styles.abbandonaTesto}>Interrompi la simulazione</Text>
        </Pressable>
      </ScrollView>
    );
  }

  // ——— Autovalutazione: la scaletta compare qui e non prima ———
  if (fase === 'autovalutazione') {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.sezione}>
          <Icona nome="list-outline" size={16} color={colors.textMuted} />
          <Text style={styles.sezioneTitolo}>Che cosa hai detto davvero</Text>
        </View>
        <Text style={styles.istruzione}>
          Segna solo i punti che hai effettivamente toccato esponendo. Barare qui significa solo
          togliersi l’unica misura utile che questa simulazione può darti.
        </Text>

        {caso.scaletta.map((p) => {
          const preso = presi.includes(p.id);
          return (
            <Pressable
              key={p.id}
              onPress={() =>
                setPresi((s) => (s.includes(p.id) ? s.filter((x) => x !== p.id) : [...s, p.id]))
              }
              accessibilityRole="checkbox"
              accessibilityState={{ checked: preso }}
              style={({ pressed }) => [
                styles.puntoWrap,
                pressed && styles.puntoPremuto,
                preso && styles.puntoPreso,
              ]}
            >
              <Icona
                nome={preso ? 'checkbox' : 'square-outline'}
                size={22}
                color={preso ? colors.successEdge : '#B6BECC'}
                style={styles.puntoSpunta}
              />
              <View style={styles.puntoTesti}>
                <View style={styles.puntoTesta}>
                  <View
                    style={[
                      styles.versante,
                      p.versante === 'processuale' && styles.versanteProc,
                    ]}
                  >
                    <Text
                      style={[
                        styles.versanteTesto,
                        p.versante === 'processuale' && styles.versanteTestoProc,
                      ]}
                    >
                      {p.versante}
                    </Text>
                  </View>
                  <Text style={styles.puntoPeso}>{p.peso}</Text>
                </View>
                <Text style={styles.puntoTitolo}>{p.titolo}</Text>
                <Text style={styles.puntoDettaglio}>{p.dettaglio}</Text>
                <View style={styles.rifRiga}>
                  {p.riferimenti.map((r) => (
                    <View
                      key={r.testo}
                      style={[styles.rif, r.tipo === 'norma' ? styles.rifNorma : styles.rifGiuri]}
                    >
                      <Text
                        style={[
                          styles.rifTesto,
                          r.tipo === 'norma' ? styles.rifTestoNorma : styles.rifTestoGiuri,
                        ]}
                      >
                        {r.testo}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </Pressable>
          );
        })}

        <View style={styles.correnteCard}>
          <Text style={styles.correnteEtichetta}>Punti che ti sei riconosciuto</Text>
          <Text style={styles.correnteValore}>{totale}/100</Text>
        </View>

        <Bottone
          label="Vedi l’esito"
          onPress={chiudi}
          variante="accento"
          style={styles.azione}
        />
      </ScrollView>
    );
  }

  // ——— Esito ———
  const esito = esitoSimulazione(caso, presi);
  const tinteEsito =
    esito.tono === 'insufficiente'
      ? { sfondo: colors.errorSoft, testo: colors.errorEdge }
      : esito.tono === 'sufficiente'
        ? { sfondo: colors.accentSoft, testo: '#8A5B00' }
        : { sfondo: colors.successSoft, testo: colors.successEdge };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.esitoTesta}>
        <Mascot state={esito.tono === 'insufficiente' ? 'studying' : 'celebrating'} size={80} />
        <Text style={[styles.esitoPunteggio, { color: tinteEsito.testo }]}>
          {esito.punteggio}
          <Text style={styles.esitoSu}>/100</Text>
        </Text>
        <Text style={styles.esitoEtichetta}>{esito.etichetta}</Text>
      </View>

      {versanti && (
        <View style={styles.versantiCard}>
          {(['sostanziale', 'processuale'] as const).map((v) => (
            <View key={v} style={styles.versanteRiga}>
              <Text style={styles.versanteNome}>{v === 'sostanziale' ? 'Sostanziale' : 'Processuale'}</Text>
              <View style={styles.versanteBarra}>
                <ProgressBar
                  progress={versanti[v].quota}
                  color={versanti[v].quota < SOGLIA_VERSANTE ? colors.error : colors.success}
                  trackColor="#E4E8F0"
                  height={8}
                />
              </View>
              <Text style={styles.versanteValore}>
                {versanti[v].presi}/{versanti[v].totale}
              </Text>
            </View>
          ))}
        </View>
      )}

      <View style={[styles.consiglio, { backgroundColor: tinteEsito.sfondo }]}>
        <Text style={[styles.consiglioTesto, { color: tinteEsito.testo }]}>{esito.consiglio}</Text>
      </View>

      {premio && premio.punti > 0 && (
        <View style={styles.premio}>
          <Icona nome="add-circle" size={20} color={colors.successEdge} />
          <Text style={styles.premioTesto}>
            <Text style={styles.premioPunti}>+{premio.punti} punti</Text> {premio.messaggio}
          </Text>
        </View>
      )}

      <View style={styles.sezione}>
        <Icona nome="help-circle-outline" size={16} color={colors.textMuted} />
        <Text style={styles.sezioneTitolo}>Se la commissione insiste</Text>
      </View>
      <View style={styles.listaCard}>
        {caso.domandeCommissione.map((d) => (
          <View key={d} style={styles.voce}>
            <Icona nome="chatbubble-ellipses-outline" size={16} color={colors.primary} />
            <Text style={styles.voceTesto}>{d}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sezione}>
        <Icona nome="warning-outline" size={16} color={colors.textMuted} />
        <Text style={styles.sezioneTitolo}>Insidie di questo caso</Text>
      </View>
      <View style={styles.listaCard}>
        {caso.insidie.map((i) => (
          <View key={i} style={styles.voce}>
            <Icona nome="alert-circle" size={16} color={colors.error} />
            <Text style={styles.voceTesto}>{i}</Text>
          </View>
        ))}
      </View>

      <Bottone
        label="Torna ai casi"
        onPress={() => navigation.goBack()}
          variante="scuro"
        style={styles.azione}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  contenutoMuro: { padding: spacing.md, paddingTop: spacing.xl, justifyContent: 'center', flexGrow: 1 },

  vuoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  vuotoTitolo: { fontSize: 20, fontWeight: '800', color: colors.text },
  vuotoBtn: { alignSelf: 'stretch', marginTop: spacing.md },

  testataWrap: { },
  testata: { borderRadius: radius.xxl, padding: spacing.md, gap: 3 },
  occhiello: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.85)',
  },
  titolo: { fontSize: 20, fontWeight: '900', color: '#FFFFFF', lineHeight: 26 },

  passiWrap: { marginTop: spacing.md },
  passi: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md - 2,
    gap: spacing.md - 2,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  passo: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm + 2 },
  passoNumero: {
    width: 26,
    height: 26,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  passoNumeroTesto: { fontSize: 13, fontWeight: '900', color: '#FFFFFF' },
  passoTesti: { flex: 1 },
  passoTitolo: { fontSize: 15, fontWeight: '800', color: colors.text },
  passoDettaglio: { fontSize: 13, color: colors.textMuted, lineHeight: 19, marginTop: 2 },

  sezione: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  sezioneTitolo: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },

  durateCard: { backgroundColor: colors.card, borderRadius: radius.xl, padding: spacing.md - 2 },
  durataEtichetta: { fontSize: 13.5, fontWeight: '700', color: colors.text },
  durataEtichettaDopo: { marginTop: spacing.md },
  durataRiga: { flexDirection: 'row', gap: 8, marginTop: spacing.sm },
  durata: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: radius.md,
    backgroundColor: '#EEF1F7',
  },
  durataTesto: { fontSize: 14, fontWeight: '800', color: colors.textMuted },
  durataTestoAttiva: { color: '#FFFFFF' },
  durataNota: { fontSize: 12, color: colors.textMuted, lineHeight: 18, marginTop: spacing.md },

  cronoWrap: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md,
    gap: spacing.sm,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  cronoScadutoWrap: { backgroundColor: colors.errorSoft },
  cronoTesta: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  cronoEtichetta: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  cronoTempo: {
    fontSize: 46,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: -1,
    fontVariant: ['tabular-nums'],
  },
  cronoTempoScaduto: { color: colors.errorEdge },
  cronoNota: { fontSize: 13, color: colors.textMuted, lineHeight: 19 },

  fattoWrap: { },
  fatto: { backgroundColor: colors.card, borderRadius: radius.xl, padding: spacing.md },
  fattoTesto: { fontSize: 15.5, color: colors.text, lineHeight: 26, marginBottom: spacing.sm },
  consegna: {
    backgroundColor: '#F2F5FB',
    borderRadius: radius.lg,
    padding: spacing.md - 4,
    marginTop: spacing.sm,
  },
  consegnaTesto: { fontSize: 14.5, color: colors.text, lineHeight: 22, fontWeight: '600' },

  suggerimento: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.lg,
    padding: spacing.md - 4,
    marginTop: spacing.md,
  },
  suggerimentoTesto: { flex: 1, fontSize: 13, color: '#5A3D00', lineHeight: 19 },

  istruzione: { fontSize: 13.5, color: colors.textMuted, lineHeight: 20, marginBottom: spacing.sm },

  puntoWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm + 2,
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md - 4,
    marginBottom: spacing.sm,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  puntoPremuto: { backgroundColor: '#F2F5FB' },
  puntoPreso: { backgroundColor: '#F4FBF7' },
  puntoSpunta: { marginTop: 2 },
  puntoTesti: { flex: 1 },
  puntoTesta: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
  versante: {
    backgroundColor: '#E8EEFD',
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  versanteProc: { backgroundColor: '#E1F7F4' },
  versanteTesto: {
    fontSize: 10.5,
    fontWeight: '800',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: '#20399B',
  },
  versanteTestoProc: { color: '#0C6C60' },
  puntoPeso: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.textMuted,
    backgroundColor: '#EEF1F7',
    borderRadius: radius.pill,
    paddingHorizontal: 7,
    paddingVertical: 2,
    overflow: 'hidden',
  },
  puntoTitolo: { fontSize: 15, fontWeight: '800', color: colors.text, lineHeight: 20 },
  puntoDettaglio: { fontSize: 13.5, color: colors.text, lineHeight: 21, marginTop: 4 },

  rifRiga: { flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginTop: spacing.sm },
  rif: { borderRadius: radius.pill, paddingHorizontal: 8, paddingVertical: 3 },
  rifNorma: { backgroundColor: '#E8EEFD' },
  rifGiuri: { backgroundColor: '#FBE7EC' },
  rifTesto: { fontSize: 11, fontWeight: '700' },
  rifTestoNorma: { color: '#20399B' },
  rifTestoGiuri: { color: '#8C1B3C' },

  correnteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.successSoft,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md - 4,
    paddingVertical: 12,
    marginTop: spacing.sm,
  },
  correnteEtichetta: { fontSize: 13.5, fontWeight: '700', color: colors.text },
  correnteValore: { fontSize: 17, fontWeight: '900', color: colors.successEdge },

  esitoTesta: { alignItems: 'center', gap: 2, paddingTop: spacing.md },
  esitoPunteggio: { fontSize: 52, fontWeight: '900', letterSpacing: -2 },
  esitoSu: { fontSize: 22, fontWeight: '800', color: colors.textMuted },
  esitoEtichetta: { fontSize: 16, fontWeight: '800', color: colors.text },

  versantiCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md - 2,
    gap: spacing.sm + 2,
    marginTop: spacing.lg,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  versanteRiga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  versanteNome: { fontSize: 13, fontWeight: '700', color: colors.text, width: 96 },
  versanteBarra: { flex: 1 },
  versanteValore: {
    fontSize: 12.5,
    fontWeight: '800',
    color: colors.textMuted,
    width: 46,
    textAlign: 'right',
  },

  consiglio: { borderRadius: radius.lg, padding: spacing.md - 2, marginTop: spacing.md },
  consiglioTesto: { fontSize: 14, lineHeight: 21, fontWeight: '600' },

  premio: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: colors.successSoft,
    borderRadius: radius.lg,
    padding: spacing.md - 2,
    marginTop: spacing.sm,
  },
  premioTesto: { flex: 1, fontSize: 13.5, color: colors.text, lineHeight: 20 },
  premioPunti: { fontWeight: '800', color: colors.successEdge },

  listaCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md - 2,
    gap: spacing.sm + 2,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  voce: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm },
  voceTesto: { flex: 1, fontSize: 13.5, color: colors.text, lineHeight: 20 },

  azione: { alignSelf: 'stretch', marginTop: spacing.lg },
  abbandona: { alignSelf: 'center', paddingVertical: spacing.md },
  abbandonaTesto: { fontSize: 13.5, color: colors.textMuted, fontWeight: '600' },
});
