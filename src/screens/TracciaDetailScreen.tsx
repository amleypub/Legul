import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { tracce } from '../data/tracce';
import { useGamification } from '../gamification/GamificationContext';
import { argomentoTraccia } from '../discussione/modello';
import { useConteggioDiscussione } from '../discussione/useConteggio';
import { Button3D } from '../components/Button3D';
import { Mascot } from '../components/Mascot';
import type { RootStackScreenProps } from '../navigation/types';
import type { TipoTraccia } from '../types';
import { colors, EDGE_3D, materiaColors, radius, spacing } from '../theme';

/** Ogni tipo di prova ha il colore della materia a cui appartiene. */
const TINTA_TIPO: Record<TipoTraccia, keyof typeof materiaColors> = {
  'Parere di diritto civile': 'Diritto civile',
  'Parere di diritto penale': 'Diritto penale',
  'Atto giudiziario': 'Procedura civile',
};

const ICONA_TIPO: Record<TipoTraccia, keyof typeof Ionicons.glyphMap> = {
  'Parere di diritto civile': 'chatbox-ellipses',
  'Parere di diritto penale': 'shield-half',
  'Atto giudiziario': 'document-text',
};

export default function TracciaDetailScreen({
  route,
  navigation,
}: RootStackScreenProps<'TracciaDetail'>) {
  const { tracciaId } = route.params;
  const traccia = tracce.find((t) => t.id === tracciaId);
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
        <Mascot state="studying" size={96} />
        <Text style={styles.vuotoTitolo}>Traccia non trovata</Text>
        <Text style={styles.vuotoTesto}>
          Potrebbe essere stata rimossa. Torna all’archivio per sceglierne un’altra.
        </Text>
        <Button3D
          label="Torna all’archivio"
          onPress={() => navigation.goBack()}
          color={colors.primary}
          edgeColor="#0E1830"
          style={styles.vuotoBtn}
        />
      </View>
    );
  }

  const tinte = materiaColors[TINTA_TIPO[traccia.tipo]];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Testata colorata per tipo di prova, come i blocchi del quiz */}
      <View style={styles.testataWrap}>
        <View style={[styles.testataEdge, { backgroundColor: tinte.edge }]} />
        <LinearGradient
          colors={[tinte.start, tinte.end]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.testata}
        >
          <View style={styles.testataRiga}>
            <View style={styles.testataIcona}>
              <Ionicons name={ICONA_TIPO[traccia.tipo]} size={22} color={tinte.end} />
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
            <Ionicons name="add-circle" size={20} color={colors.success} />
          </View>
          <Text style={styles.premioTesto}>
            <Text style={styles.premioPunti}>+{premio} punti</Text> per aver studiato questa
            traccia.
          </Text>
        </View>
      )}

      <View style={styles.sezioneTestata}>
        <Ionicons name="reader-outline" size={16} color={colors.textMuted} />
        <Text style={styles.sezioneTitolo}>Traccia assegnata</Text>
      </View>

      <View style={styles.testoWrap}>
        <View style={styles.testoEdge} />
        <View style={styles.testoCard}>
          <Text style={styles.testo}>{traccia.testo}</Text>
        </View>
      </View>

      <View style={styles.nota}>
        <Ionicons
          name={traccia.testoUfficiale ? 'checkmark-circle' : 'information-circle'}
          size={16}
          color={traccia.testoUfficiale ? colors.success : colors.textMuted}
        />
        <Text style={styles.notaTesto}>
          {traccia.testoUfficiale
            ? `Testo ufficiale integrale.${traccia.fonte ? ` Fonte: ${traccia.fonte}` : ''}`
            : 'Testo riassunto a scopo di studio: le tracce ufficiali integrali sono pubblicate dal Ministero della Giustizia.'}
        </Text>
      </View>

      {/* Confronto con gli altri candidati: la traccia da sola dice poco,
          il valore sta nel come la si scioglie. */}
      <View style={styles.sezioneTestata}>
        <Ionicons name="people-outline" size={16} color={colors.textMuted} />
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
            <Ionicons name="chatbubbles" size={18} color="#FFFFFF" />
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
            <Ionicons name="chevron-forward" size={17} color="#B6BECC" />
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
            <Ionicons name="bulb" size={18} color="#FFFFFF" />
          </View>
          <View style={styles.confrontoTesti}>
            <Text style={styles.confrontoEtichetta}>Suggerisci un’altra soluzione</Text>
            <Text style={styles.confrontoSottotitolo}>
              Come l’hai impostata tu, con le norme su cui ti sei basato
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={17} color="#B6BECC" />
        </Pressable>
      </View>

      {/* Alla fine della lettura serve una via d'uscita che non sia tornare indietro */}
      <View style={styles.chiusura}>
        <Mascot state="celebrating" size={64} />
        <Text style={styles.chiusuraTesto}>
          {prossima
            ? 'Un’altra traccia ti aspetta: più ne leggi, meno sorprese all’esame.'
            : 'Hai studiato tutte le tracce in archivio. Ottimo lavoro.'}
        </Text>
        {prossima && (
          <Button3D
            label="Traccia successiva"
            onPress={() => navigation.replace('TracciaDetail', { tracciaId: prossima.id })}
            color={colors.accent}
            edgeColor="#A8861B"
            textColor={colors.primary}
            style={styles.chiusuraBtn}
          />
        )}
        <Button3D
          label="Torna all’archivio"
          onPress={() => navigation.goBack()}
          color="#FFFFFF"
          edgeColor="#D3D8E2"
          textColor={colors.text}
          style={styles.chiusuraBtn}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },

  vuoto: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  vuotoTitolo: { fontSize: 20, fontWeight: '800', color: colors.text },
  vuotoTesto: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
  vuotoBtn: { alignSelf: 'stretch', marginTop: spacing.md },

  testataWrap: { paddingBottom: EDGE_3D },
  testataEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xxl,
  },
  testata: {
    borderRadius: radius.xxl,
    padding: spacing.md,
    gap: spacing.sm,
  },
  testataRiga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  testataIcona: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testataTesto: { flex: 1 },
  tipo: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.85)',
  },
  sessione: { fontSize: 13, color: '#FFFFFF', fontWeight: '600', marginTop: 1 },
  titolo: { fontSize: 21, fontWeight: '900', color: '#FFFFFF', lineHeight: 27 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  chip: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: radius.pill,
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
  premioPunti: { fontWeight: '800', color: colors.successEdge },

  sezioneTestata: {
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

  testoWrap: { paddingBottom: EDGE_3D },
  testoEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xl,
    backgroundColor: '#DFE4EF',
  },
  testoCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md,
  },
  // Il testo di una traccia si legge come un documento: righe larghe e
  // ariose, non compresse come una didascalia.
  testo: { fontSize: 15.5, color: colors.text, lineHeight: 26 },

  // Stesso linguaggio delle impostazioni: tessera a tinta piena per voce,
  // una card sola senza righe divisorie.
  confronto: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md - 4,
    paddingVertical: spacing.xs,
  },
  confrontoVoce: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
    paddingVertical: 11,
    paddingHorizontal: 4,
    borderRadius: radius.md,
  },
  confrontoPremuto: { backgroundColor: '#F2F5FB' },
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
    fontWeight: '800',
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
    borderTopColor: '#E4E8F0',
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
