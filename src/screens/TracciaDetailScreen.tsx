import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Icona } from '../components/Icona';
import { tracce } from '../data/tracce';
import { svolgimentoDi } from '../data/svolgimenti';
import { svolgimentoAccessibile } from '../data/accesso';
import { useGamification } from '../gamification/GamificationContext';
import { argomentoTraccia } from '../discussione/modello';
import { useConteggioDiscussione } from '../discussione/useConteggio';
import { Bottone } from '../components/Bottone';
import { Monolite } from '../components/Monolite';
import type { RootStackScreenProps } from '../navigation/types';
import { materiaDellaTraccia, type TipoTraccia } from '../types';
import { alpha, colors, materiaColors, radius, spacing, type } from '../theme';

/*
  Il colore viene dalla materia della traccia, che ora il tipo dichiara:
  la mappa scritta a mano andava riscritta a ogni materia aggiunta, e
  infatti all'amministrativo non era mai arrivata.
*/
const ICONA_TIPO: Record<TipoTraccia, string> = {
  'Parere di diritto civile': 'chatbox-ellipses',
  'Parere di diritto penale': 'chatbox-ellipses',
  'Parere di diritto amministrativo': 'chatbox-ellipses',
  'Atto di diritto civile': 'document-text',
  'Atto di diritto penale': 'document-text',
  'Atto di diritto amministrativo': 'document-text',
};

export default function TracciaDetailScreen({
  route,
  navigation,
}: RootStackScreenProps<'TracciaDetail'>) {
  const { tracciaId } = route.params;
  const traccia = tracce.find((t) => t.id === tracciaId);
  const svolgimento = svolgimentoDi(tracciaId);
  const { state, registraTracciaLetta } = useGamification();
  const [premio, setPremio] = useState<number | null>(null);
  const registrata = useRef(false);
  const conteggio = useConteggioDiscussione(argomentoTraccia(tracciaId));

  useEffect(() => {
    if (!traccia || registrata.current) return;
    registrata.current = true;
    const evento = registraTracciaLetta(traccia.id);
    if (evento.puntiGuadagnati > 0) setPremio(evento.puntiGuadagnati);
  }, [traccia, registraTracciaLetta]);

  /**
   * La traccia successiva da studiare: arrivati in fondo alla lettura,
   * prima non c'era nulla da fare se non tornare indietro a mano.
   */
  const prossima = useMemo(() => {
    if (!traccia) return undefined;
    const daLeggere = tracce.filter(
      (t) => t.id !== traccia.id && !state.tracceLette.includes(t.id)
    );
    return daLeggere[0] ?? tracce.find((t) => t.id !== traccia.id);
  }, [traccia, state.tracceLette]);

  if (!traccia) {
    return (
      <View style={styles.vuoto}>
        <Monolite state="studying" size={96} />
        <Text style={styles.vuotoTitolo}>Traccia non trovata</Text>
        <Text style={styles.vuotoTesto}>
          Potrebbe essere stata rimossa. Torna all’archivio per sceglierne un’altra.
        </Text>
        <Bottone
          label="Torna all’archivio"
          onPress={() => navigation.goBack()}
          variante="scuro"
          style={styles.vuotoBtn}
        />
      </View>
    );
  }

  const tinte = materiaColors[materiaDellaTraccia(traccia.tipo)];
  const svolgimentoLibero = svolgimentoAccessibile(traccia.id, state.premium);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Testata colorata per tipo di prova, come i blocchi del quiz */}
      <View style={styles.testataWrap}>
        <LinearGradient
          colors={[tinte.start, tinte.end]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.testata}
        >
          <View style={styles.testataRiga}>
            <View style={styles.testataIcona}>
              <Icona nome={ICONA_TIPO[traccia.tipo]} size={22} color={tinte.end} />
            </View>
            <View style={styles.testataTesto}>
              <Text style={styles.tipo}>{traccia.tipo}</Text>
              <Text style={styles.sessione}>{traccia.sessione}</Text>
            </View>
          </View>
          <Text style={styles.titolo}>{traccia.titolo}</Text>
          <View style={styles.chipRow}>
            {traccia.argomenti.map((a) => (
              <View key={a} style={styles.chip}>
                <Text style={styles.chipText}>{a}</Text>
              </View>
            ))}
          </View>
        </LinearGradient>
      </View>

      {premio !== null && (
        <View style={styles.premioCard}>
          <View style={styles.premioIcona}>
            <Icona nome="add-circle" size={20} color={colors.success} />
          </View>
          <Text style={styles.premioTesto}>
            <Text style={styles.premioPunti}>+{premio} punti</Text> per aver studiato questa
            traccia.
          </Text>
        </View>
      )}

      <View style={styles.sezioneTestata}>
        <Icona nome="reader-outline" size={16} color={colors.textMuted} />
        {/* «Assegnata» è la parola giusta solo per una prova che è stata
            davvero assegnata. Su un esercizio scritto da noi sarebbe una
            piccola bugia stampata sopra il testo, e la nota che segue non
            basterebbe a disfarla. */}
        <Text style={styles.sezioneTitolo}>
          {traccia.esercizio ? 'Traccia proposta' : 'Traccia assegnata'}
        </Text>
      </View>

      <View style={styles.testoWrap}>
        <View style={styles.testoCard}>
          <Text style={styles.testo}>{traccia.testo}</Text>
        </View>
      </View>

      <View style={styles.nota}>
        <Icona
          nome={
            traccia.esercizio
              ? 'warning'
              : traccia.testoUfficiale
                ? 'checkmark-circle'
                : 'information-circle'
          }
          size={16}
          color={
            traccia.esercizio
              ? colors.accentEdge
              : traccia.testoUfficiale
                ? colors.success
                : colors.textMuted
          }
        />
        {/* Un esercizio costruito da noi non deve poter essere scambiato
            per una prova assegnata: la nota lo dice prima di ogni altra
            cosa, perché è l'informazione che cambia come lo si usa. */}
        <Text style={styles.notaTesto}>
          {traccia.esercizio
            ? 'Esercizio costruito sulla prova riformata, non una traccia assegnata in passato: il parere in diritto amministrativo diventa possibile con il d.l. 100/2026 e non esiste ancora in archivio.'
            : traccia.testoUfficiale
              ? `Testo ufficiale integrale.${traccia.fonte ? ` Fonte: ${traccia.fonte}` : ''}`
              : 'Testo riassunto a scopo di studio: le tracce ufficiali integrali sono pubblicate dal Ministero della Giustizia.'}
        </Text>
      </View>

      {/* La traccia da sola dice poco: il valore sta nel come la si
          scioglie. Prima lo svolgimento proposto, poi il confronto con
          gli altri candidati. */}
      {svolgimento && (
        <>
          <View style={styles.sezioneTestata}>
            <Icona nome="bulb-outline" size={16} color={colors.textMuted} />
            <Text style={styles.sezioneTitolo}>Come si scioglie</Text>
          </View>

          <View style={styles.svolgimentoWrap}>
            <Pressable
              onPress={() =>
                svolgimentoLibero
                  ? navigation.navigate('Svolgimento', { tracciaId: traccia.id })
                  : navigation.navigate('Paywall')
              }
              accessibilityRole="button"
              style={({ pressed }) => [
                styles.svolgimento,
                { backgroundColor: tinte.end },
                pressed && styles.svolgimentoPremuto,
              ]}
            >
              <View style={styles.svolgimentoIcona}>
                <Icona nome={svolgimentoLibero ? 'bulb' : 'lock-closed'} size={20} color={tinte.end} />
              </View>
              <View style={styles.svolgimentoTesti}>
                <Text style={styles.svolgimentoEtichetta}>Svolgimento proposto</Text>
                <Text style={styles.svolgimentoSottotitolo}>
                  {!svolgimentoLibero && 'Riservato a Premium. '}
                  {svolgimento.questioni.length} questioni da individuare,{' '}
                  {svolgimento.contrasti.length === 1
                    ? 'un contrasto giurisprudenziale'
                    : `${svolgimento.contrasti.length} contrasti giurisprudenziali`}{' '}
                  e la griglia per rileggerti
                </Text>
              </View>
              <Icona nome="chevron-forward" size={18} color="rgba(255,255,255,0.75)" />
            </Pressable>
          </View>

          <Text style={styles.svolgimentoNota}>
            Prima di aprirlo, prova a impostarla: le sezioni sono chiuse apposta.
          </Text>
        </>
      )}

      <View style={styles.sezioneTestata}>
        <Icona nome="people-outline" size={16} color={colors.textMuted} />
        <Text style={styles.sezioneTitolo}>Confronto</Text>
      </View>

      <View style={styles.confronto}>
        <Pressable
          onPress={() =>
            navigation.navigate('Discussione', {
              argomento: argomentoTraccia(traccia.id),
              titolo: traccia.titolo,
            })
          }
          accessibilityRole="button"
          style={({ pressed }) => [styles.confrontoVoce, pressed && styles.confrontoPremuto]}
        >
          <View style={[styles.confrontoIcona, { backgroundColor: '#4F7CF3' }]}>
            <Icona nome="chatbubbles" size={18} color="#FFFFFF" />
          </View>
          <View style={styles.confrontoTesti}>
            <Text style={styles.confrontoEtichetta}>Commenti degli utenti</Text>
            <Text style={styles.confrontoSottotitolo}>
              Dubbi, precisazioni e riferimenti trovati dagli altri
            </Text>
          </View>
          {conteggio !== null && conteggio > 0 ? (
            <Text style={styles.confrontoConteggio}>{conteggio}</Text>
          ) : (
            <Icona nome="chevron-forward" size={17} color="#B6BECC" />
          )}
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate('Discussione', {
              argomento: argomentoTraccia(traccia.id),
              titolo: traccia.titolo,
              genereIniziale: 'soluzione',
            })
          }
          accessibilityRole="button"
          style={({ pressed }) => [styles.confrontoVoce, pressed && styles.confrontoPremuto]}
        >
          <View style={[styles.confrontoIcona, { backgroundColor: colors.accentEdge }]}>
            <Icona nome="bulb" size={18} color="#FFFFFF" />
          </View>
          <View style={styles.confrontoTesti}>
            <Text style={styles.confrontoEtichetta}>Suggerisci un’altra soluzione</Text>
            <Text style={styles.confrontoSottotitolo}>
              Come l’hai impostata tu, con le norme su cui ti sei basato
            </Text>
          </View>
          <Icona nome="chevron-forward" size={17} color="#B6BECC" />
        </Pressable>
      </View>

      {/* Alla fine della lettura serve una via d'uscita che non sia tornare indietro */}
      <View style={styles.chiusura}>
        <Monolite state="celebrating" size={64} />
        <Text style={styles.chiusuraTesto}>
          {prossima
            ? 'Un’altra traccia ti aspetta: più ne leggi, meno sorprese all’esame.'
            : 'Hai studiato tutte le tracce in archivio. Ottimo lavoro.'}
        </Text>
        {prossima && (
          <Bottone
            label="Traccia successiva"
            onPress={() => navigation.replace('TracciaDetail', { tracciaId: prossima.id })}
          variante="accento"
            style={styles.chiusuraBtn}
          />
        )}
        <Bottone
          label="Torna all’archivio"
          onPress={() => navigation.goBack()}
          variante="chiaro"
          style={styles.chiusuraBtn}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  content: { padding: spacing.md, paddingBottom: spacing.xl },

  vuoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  vuotoTitolo: { fontSize: 20, fontWeight: '600', color: colors.text },
  vuotoTesto: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
  vuotoBtn: { alignSelf: 'stretch', marginTop: spacing.md },

  testataWrap: { },
  testata: {
    borderRadius: radius.xxl,
    padding: spacing.md,
    gap: spacing.sm,
  },
  testataRiga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  testataIcona: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: alpha.bordo,
    backgroundColor: alpha.veloForte,
    alignItems: 'center',
    justifyContent: 'center',
  },
  testataTesto: { flex: 1 },
  tipo: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.85)',
  },
  sessione: { fontSize: 13, color: '#FFFFFF', fontWeight: '600', marginTop: 1 },
  titolo: { fontSize: 21, fontWeight: '700', color: '#FFFFFF', lineHeight: 27 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  chip: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: radius.sm,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  chipText: { fontSize: 12, color: '#FFFFFF', fontWeight: '600' },

  premioCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.successSoft,
    borderRadius: radius.lg,
    padding: spacing.md - 2,
    marginTop: spacing.md,
  },
  premioIcona: { alignItems: 'center', justifyContent: 'center' },
  premioTesto: { flex: 1, fontSize: 14, color: colors.text, lineHeight: 20 },
  premioPunti: { fontWeight: '600', color: colors.successEdge },

  sezioneTestata: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  sezioneTitolo: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },

  testoWrap: { },
  testoCard: {
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.xl,
    padding: spacing.md,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  // Il testo di una traccia si legge come un documento: righe larghe e
  // ariose, non compresse come una didascalia.
  // Il testo della traccia è un documento, non interfaccia: serif.
  testo: { ...type.corpoLungo, color: colors.text },

  // Lo svolgimento è la ragione per cui si apre una traccia: si prende
  // il colore pieno della materia, mentre il confronto resta bianco.
  svolgimentoWrap: { },
  svolgimento: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
    borderRadius: radius.xl,
    padding: spacing.md - 2,
  },
  svolgimentoPremuto: { opacity: 0.9 },
  svolgimentoIcona: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: alpha.veloForte,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svolgimentoTesti: { flex: 1 },
  svolgimentoEtichetta: { fontSize: 15.5, fontWeight: '600', color: '#FFFFFF' },
  svolgimentoSottotitolo: {
    fontSize: 12.5,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 2,
    lineHeight: 17,
  },
  svolgimentoNota: {
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 18,
    marginTop: spacing.sm,
    paddingHorizontal: 2,
  },

  // Stesso linguaggio delle impostazioni: tessera a tinta piena per voce,
  // una card sola senza righe divisorie.
  confronto: {
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md - 4,
    paddingVertical: spacing.xs,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  confrontoVoce: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
    paddingVertical: 11,
    paddingHorizontal: 4,
    borderRadius: radius.md,
  },
  confrontoPremuto: { backgroundColor: alpha.veloForte },
  confrontoIcona: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confrontoTesti: { flex: 1 },
  confrontoEtichetta: { fontSize: 15, fontWeight: '700', color: colors.text },
  confrontoSottotitolo: { fontSize: 12.5, color: colors.textMuted, marginTop: 1, lineHeight: 17 },
  confrontoConteggio: {
    fontSize: 12.5,
    fontWeight: '600',
    color: '#FFFFFF',
    backgroundColor: '#4F7CF3',
    borderRadius: radius.pill,
    paddingHorizontal: 9,
    paddingVertical: 2,
    overflow: 'hidden',
  },

  nota: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    marginTop: spacing.md,
    paddingHorizontal: 2,
  },
  notaTesto: { flex: 1, fontSize: 12, color: colors.textMuted, lineHeight: 18 },

  chiusura: {
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: alpha.bordo,
    alignSelf: 'stretch',
  },
  chiusuraTesto: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: spacing.xs,
  },
  chiusuraBtn: { alignSelf: 'stretch' },
});
