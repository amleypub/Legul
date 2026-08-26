import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Icona } from '../components/Icona';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { anniDisponibili, tracce, tracceByAnno } from '../data/tracce';
import { quanteConSvolgimento, tracceConSvolgimento } from '../data/svolgimenti';
import { useGamification } from '../gamification/GamificationContext';
import { Superficie } from '../components/Superficie';
import type { RootStackParamList } from '../navigation/types';
import type { TipoTraccia } from '../types';
import { Sfondo } from '../components/Sfondo';
import { TitoloSchermata } from '../components/TitoloSchermata';
import { alpha, colors, materiaColors, radius, spacing, SPAZIO_TAB } from '../theme';

/** Tracce che hanno uno svolgimento pubblicato: l'elenco non cambia a runtime. */
const svolto = new Set(tracceConSvolgimento());
const totaleTracce = tracce.length;
const svolte = quanteConSvolgimento();
const parzialmenteCoperto = svolte < totaleTracce;

/*
  Il colore segue la materia, l'icona la forma della prova: così a colpo
  d'occhio si legge sia che cosa si scrive sia su che cosa. Con un tipo
  solo per tutti gli atti l'amministrativo non era distinguibile.
*/
const TIPO_STYLE: Record<TipoTraccia, { icona: string; tinta: string }> = {
  'Parere di diritto civile': { icona: 'book', tinta: materiaColors['Diritto civile'].start },
  'Parere di diritto penale': { icona: 'book', tinta: materiaColors['Diritto penale'].start },
  'Parere di diritto amministrativo': {
    icona: 'book',
    tinta: materiaColors['Diritto amministrativo'].start,
  },
  'Atto di diritto civile': {
    icona: 'document-text',
    tinta: materiaColors['Diritto civile'].start,
  },
  'Atto di diritto penale': {
    icona: 'document-text',
    tinta: materiaColors['Diritto penale'].start,
  },
  'Atto di diritto amministrativo': {
    icona: 'document-text',
    tinta: materiaColors['Diritto amministrativo'].start,
  },
};

export default function TracceScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { state } = useGamification();

  const sections = anniDisponibili.map((anno) => ({
    title: String(anno),
    data: tracceByAnno(anno),
  }));

  return (
    <Sfondo tinta={materiaColors['Procedura civile'].start}>
    <SectionList
      style={styles.container}
      contentContainerStyle={styles.content}
      sections={sections}
      keyExtractor={(t) => t.id}
      stickySectionHeadersEnabled={false}
      ListHeaderComponent={
        <>
          <TitoloSchermata
            titolo="Tracce d’esame"
            sottotitolo="Le prove scritte degli anni passati: capire cosa è già stato chiesto è il modo migliore per prevedere cosa arriverà. Dove la riforma ha aperto una combinazione mai assegnata, trovi un esercizio contrassegnato come tale. Ogni traccia letta vale punti."
          />
          {/* Le tracce in archivio sono tre per sessione, le prove ora
              sono due: chi legge deve poter capire subito perché, senza
              credere che l'archivio sia sbagliato. */}
          <Superficie
            tinta={colors.accentSoft}
            raggio={radius.lg}
            style={styles.riformaWrap}
            contentStyle={styles.riforma}
            onPress={() => navigation.navigate('Esame')}
          >
            <Icona nome="information-circle" size={20} color="#8A5B00" />
            <Text style={styles.riformaTesto}>
              Dalla sessione 2026-2027 le prove scritte sono due — parere e atto — e ciascuna si
              sostiene su una materia a scelta fra civile, penale e amministrativo.{' '}
              <Text style={styles.riformaLink}>Vedi come funziona l’esame</Text>
            </Text>
            <Icona nome="chevron-forward" size={18} color="#8A5B00" />
          </Superficie>

          {/* La frase cambia da sola quando l'archivio è coperto: una
              riga che promette «le altre arrivano» quando non ne mancano
              più è il tipo di dettaglio che fa dubitare del resto. */}
          <Text style={styles.copertura}>
            {svolte === totaleTracce
              ? `Tutte e ${totaleTracce} le tracce in archivio hanno lo svolgimento proposto, con le questioni da individuare, i contrasti giurisprudenziali e la griglia per rileggerti.`
              : `${svolte} tracce su ${totaleTracce} hanno lo svolgimento proposto. Le altre arrivano: ne pubblichiamo una solo quando regge alla rilettura.`}
          </Text>
        </>
      }
      renderSectionHeader={({ section }) => (
        <View style={styles.annoRow}>
          <View style={styles.annoPill}>
            <Text style={styles.annoPillText}>{section.title}</Text>
          </View>
          <View style={styles.annoLine} />
        </View>
      )}
      renderItem={({ item }) => {
        const letta = state.tracceLette.includes(item.id);
        const tipo = TIPO_STYLE[item.tipo];
        return (
          <Superficie
            raggio={radius.lg}
            style={styles.cardOuter}
            contentStyle={styles.card}
            onPress={() => navigation.navigate('TracciaDetail', { tracciaId: item.id })}
          >
            <View style={[styles.iconTile, { backgroundColor: tipo.tinta + '1A' }]}>
              <Icona nome={tipo.icona} size={24} color={tipo.tinta} />
            </View>
            <View style={styles.cardText}>
              <Text style={[styles.tipo, { color: tipo.tinta }]}>{item.tipo}</Text>
              <Text style={styles.titolo}>{item.titolo}</Text>
              <View style={styles.chipRow}>
                {/* Il distintivo serve finché la copertura è parziale:
                    quando c'è su tutte non distingue più nulla e diventa
                    rumore ripetuto dieci volte. */}
                {parzialmenteCoperto && svolto.has(item.id) && (
                  <View style={[styles.chip, styles.chipSvolta]}>
                    <Icona nome="bulb" size={11} color={colors.accentEdge} />
                    <Text style={[styles.chipText, styles.chipSvoltaText]}>Con svolgimento</Text>
                  </View>
                )}
                {/* Un esercizio va riconosciuto già qui. L'elenco è
                    raggruppato per anno, e una pastiglia «2026» da sola
                    lo farebbe leggere come una sessione realmente
                    svolta: chi scorre non apre ogni scheda. */}
                {item.esercizio && (
                  <View style={[styles.chip, styles.chipSvolta, styles.chipEsercizio]}>
                    <Icona nome="flash" size={11} color={colors.accentEdge} />
                    <Text style={[styles.chipText, styles.chipSvoltaText]}>Esercizio</Text>
                  </View>
                )}
                {item.argomenti.map((a) => (
                  <View key={a} style={styles.chip}>
                    <Text style={styles.chipText}>{a}</Text>
                  </View>
                ))}
              </View>
            </View>
            <Icona
              nome={letta ? 'checkmark-circle' : 'chevron-forward'}
              size={22}
              color={letta ? colors.success : colors.textMuted}
            />
          </Superficie>
        );
      }}
    />
    </Sfondo>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  content: { padding: spacing.md, paddingBottom: SPAZIO_TAB },
  intro: { fontSize: 14, color: colors.textMuted, marginBottom: spacing.sm, lineHeight: 20 },
  riformaWrap: { marginBottom: spacing.md },
  riforma: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md - 4,
    paddingVertical: spacing.sm + 4,
  },
  riformaTesto: { flex: 1, fontSize: 13, color: '#6B4600', lineHeight: 19 },
  riformaLink: { fontWeight: '800', textDecorationLine: 'underline' },

  /* Solo il bordo: il resto del layout viene da `chipSvolta`, che ha già
     la riga con icona e testo. */
  chipEsercizio: { borderColor: colors.accentEdge + '55', borderWidth: 1 },
  annoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  annoPill: {
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  annoPillText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  annoLine: { flex: 1, height: 2, borderRadius: 1, backgroundColor: colors.border },
  cardOuter: { marginBottom: spacing.sm },
  card: {
    padding: spacing.md,
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  iconTile: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: { flex: 1 },
  tipo: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.3 },
  titolo: { fontSize: 15, fontWeight: '700', color: colors.text, marginTop: 2 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginTop: 6 },
  chip: {
    // Velo scuro invece del vecchio grigio pieno: la pastiglia sta sopra
    // una superficie chiara e deve prenderne la tinta, non coprirla.
    backgroundColor: alpha.velo,
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  chipText: { fontSize: 11, color: colors.textMuted, fontWeight: '600' },
  chipSvolta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: colors.accentSoft,
  },
  chipSvoltaText: { color: colors.accentEdge, fontWeight: '800' },
  copertura: {
    fontSize: 12.5,
    color: colors.textMuted,
    lineHeight: 18,
    marginTop: spacing.sm,
    paddingHorizontal: 2,
  },
});
