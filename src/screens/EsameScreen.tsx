import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  AGGIORNATO_IL,
  CONFRONTO,
  CONSIGLI,
  PROVE,
  RIFORMA,
  SEZIONI,
  type Prova,
} from '../data/esame';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, EDGE_3D, radius, spacing } from '../theme';

const TINTA_SCRITTO = { chiaro: '#E8EEFD', scuro: '#2D4FC7', bordo: '#C7D5F7' };
const TINTA_ORALE = { chiaro: '#FDF0DC', scuro: '#B0640F', bordo: '#F3DCB6' };

function BloccoProva({ prova }: { prova: Prova }) {
  const tinta = prova.tipo === 'scritto' ? TINTA_SCRITTO : TINTA_ORALE;
  return (
    <View style={styles.provaRiga}>
      {/* La colonna di sinistra fa da linea del tempo: il pallino numerato
          e la stanghetta che lo collega alla prova successiva. */}
      <View style={styles.provaColonna}>
        <View style={[styles.provaPallino, { backgroundColor: tinta.scuro }]}>
          <Text style={styles.provaNumero}>{prova.ordine}</Text>
        </View>
        <View style={[styles.provaLinea, { backgroundColor: tinta.bordo }]} />
      </View>

      <View style={styles.provaCorpoWrap}>
        <View style={[styles.provaBordo, { backgroundColor: tinta.bordo }]} />
        <View style={styles.provaCorpo}>
          <Text style={styles.provaTitolo}>{prova.titolo}</Text>
          <Text style={styles.provaSintesi}>{prova.sintesi}</Text>

          {prova.scelta ? (
            <View style={[styles.provaScelta, { backgroundColor: tinta.chiaro }]}>
              <Ionicons name="options-outline" size={14} color={tinta.scuro} />
              <Text style={[styles.provaSceltaTesto, { color: tinta.scuro }]}>
                Scegli fra {prova.scelta}
              </Text>
            </View>
          ) : null}

          {prova.dettagli.map((d) => (
            <View key={d} style={styles.puntoRiga}>
              <View style={[styles.puntoPallino, { backgroundColor: tinta.bordo }]} />
              <Text style={styles.puntoTesto}>{d}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default function EsameScreen(_: RootStackScreenProps<'Esame'>) {
  const scritti = PROVE.filter((p) => p.tipo === 'scritto');
  const orali = PROVE.filter((p) => p.tipo === 'orale');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Testata: che cosa è cambiato e da quando, prima di ogni dettaglio */}
      <View style={styles.testataWrap}>
        <View style={styles.testataEdge} />
        <LinearGradient
          colors={['#2E4370', '#1B2A4A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.testata}
        >
          <View style={styles.testataChip}>
            <Ionicons name="sparkles" size={12} color="#FFE08A" />
            <Text style={styles.testataChipTesto}>NUOVE REGOLE</Text>
          </View>
          <Text style={styles.testataTitolo}>Due prove scritte e un orale in cinque parti</Text>
          <Text style={styles.testataTesto}>
            L’esame è stato riscritto dal {RIFORMA.decreto}, convertito con {RIFORMA.conversione}.
            Le nuove regole valgono dalla {RIFORMA.decorrenza}.
          </Text>
        </LinearGradient>
      </View>

      {/* Il dato più importante da sapere subito: manca ancora il bando */}
      <View style={styles.avvisoWrap}>
        <View style={styles.avvisoBordo} />
        <View style={styles.avviso}>
          <Ionicons name="time-outline" size={18} color="#8A5B00" />
          <Text style={styles.avvisoTesto}>
            Il decreto ministeriale di indizione non è ancora uscito: date, sedi e modalità
            operative della sessione non sono ancora note.
          </Text>
        </View>
      </View>

      <Text style={styles.sezioneTitolo}>Le prove scritte</Text>
      <Text style={styles.sezioneNota}>
        Due prove, entrambe nella materia che scegli tu. In presenza.
      </Text>
      {scritti.map((p) => (
        <BloccoProva key={p.id} prova={p} />
      ))}

      <Text style={[styles.sezioneTitolo, styles.stacco]}>La prova orale</Text>
      <Text style={styles.sezioneNota}>
        Un colloquio unico, articolato in cinque parti valutate separatamente.
      </Text>
      {orali.map((p) => (
        <BloccoProva key={p.id} prova={p} />
      ))}

      {/* Confronto con il regime precedente: è la domanda che si fanno tutti */}
      <Text style={[styles.sezioneTitolo, styles.stacco]}>Che cosa cambia</Text>
      <View style={styles.tabella}>
        <View style={styles.tabellaIntestazione}>
          <Text style={[styles.tabellaCella, styles.tabellaAspetto, styles.tabellaIntestazioneTesto]}>
            {' '}
          </Text>
          <Text style={[styles.tabellaCella, styles.tabellaIntestazioneTesto]}>Prima</Text>
          <Text style={[styles.tabellaCella, styles.tabellaIntestazioneTesto]}>Adesso</Text>
        </View>
        {CONFRONTO.map((voce, i) => (
          <View key={voce.aspetto} style={[styles.tabellaRiga, i % 2 === 1 && styles.tabellaRigaAlt]}>
            <Text style={[styles.tabellaCella, styles.tabellaAspetto]}>{voce.aspetto}</Text>
            <Text style={[styles.tabellaCella, styles.tabellaPrima]}>{voce.prima}</Text>
            <Text style={[styles.tabellaCella, styles.tabellaAdesso]}>{voce.adesso}</Text>
          </View>
        ))}
      </View>

      {SEZIONI.map((sezione) => (
        <View key={sezione.id} style={styles.schedaWrap}>
          <View style={styles.schedaBordo} />
          <View style={styles.scheda}>
            <View style={styles.schedaTestata}>
              <Ionicons
                name={sezione.icona as keyof typeof Ionicons.glyphMap}
                size={19}
                color={colors.primary}
              />
              <Text style={styles.schedaTitolo}>{sezione.titolo}</Text>
            </View>
            {sezione.paragrafi.map((p) => (
              <Text key={p} style={styles.schedaTesto}>
                {p}
              </Text>
            ))}
          </View>
        </View>
      ))}

      <Text style={[styles.sezioneTitolo, styles.stacco]}>Dove studiarlo, qui dentro</Text>
      <View style={styles.consigli}>
        {CONSIGLI.map((c) => (
          <View key={c.id} style={styles.consiglio}>
            <View style={styles.consiglioIcona}>
              <Ionicons
                name={c.icona as keyof typeof Ionicons.glyphMap}
                size={17}
                color="#FFFFFF"
              />
            </View>
            <View style={styles.consiglioTesti}>
              <Text style={styles.consiglioTitolo}>{c.titolo}</Text>
              <Text style={styles.consiglioTesto}>{c.testo}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Ogni affermazione deve poter essere verificata alla fonte, e il
          lettore deve sapere a quando risale la verifica. */}
      <View style={styles.fonte}>
        <Ionicons name="document-attach-outline" size={15} color={colors.textMuted} />
        <Text style={styles.fonteTesto}>
          Fonte: {RIFORMA.decreto}, convertito con {RIFORMA.conversione} ({RIFORMA.gazzetta}), che
          ha abrogato gli {RIFORMA.abrogati}. Contenuti aggiornati al {AGGIORNATO_IL}: verifica
          sempre il bando della sessione, che prevale su ogni sintesi.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },

  testataWrap: { paddingBottom: EDGE_3D },
  testataEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xxl,
    backgroundColor: '#0E1830',
  },
  testata: { borderRadius: radius.xxl, padding: spacing.md, gap: spacing.sm },
  testataChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  testataChipTesto: { fontSize: 10.5, fontWeight: '900', letterSpacing: 1, color: '#FFE08A' },
  testataTitolo: { fontSize: 21, fontWeight: '900', color: '#FFFFFF', lineHeight: 27 },
  testataTesto: { fontSize: 13.5, color: 'rgba(255,255,255,0.88)', lineHeight: 20 },

  avvisoWrap: { paddingBottom: EDGE_3D, marginTop: spacing.md },
  avvisoBordo: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.lg,
    backgroundColor: '#F3DCB6',
  },
  avviso: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.lg,
    padding: spacing.md - 2,
  },
  avvisoTesto: { flex: 1, fontSize: 13, color: '#6B4600', lineHeight: 19 },

  sezioneTitolo: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
    marginTop: spacing.lg,
  },
  sezioneNota: {
    fontSize: 13.5,
    color: colors.textMuted,
    lineHeight: 19,
    marginTop: 4,
    marginBottom: spacing.md,
  },
  stacco: { marginTop: spacing.xl },

  provaRiga: { flexDirection: 'row', gap: spacing.sm + 2 },
  provaColonna: { alignItems: 'center', width: 30 },
  provaPallino: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  provaNumero: { color: '#FFFFFF', fontWeight: '900', fontSize: 14 },
  provaLinea: { width: 3, flex: 1, borderRadius: 2, marginVertical: 4 },

  provaCorpoWrap: { flex: 1, paddingBottom: EDGE_3D, marginBottom: spacing.sm },
  provaBordo: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xl,
  },
  provaCorpo: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md - 2,
    gap: 7,
  },
  provaTitolo: { fontSize: 16.5, fontWeight: '800', color: colors.text },
  provaSintesi: { fontSize: 14, color: colors.text, lineHeight: 20 },
  provaScelta: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    borderRadius: radius.md,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginTop: 1,
  },
  provaSceltaTesto: { flex: 1, fontSize: 12.5, fontWeight: '700', lineHeight: 17 },
  puntoRiga: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  puntoPallino: { width: 5, height: 5, borderRadius: 3, marginTop: 7 },
  puntoTesto: { flex: 1, fontSize: 13, color: colors.textMuted, lineHeight: 19 },

  tabella: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    overflow: 'hidden',
    marginTop: spacing.md,
  },
  tabellaIntestazione: {
    flexDirection: 'row',
    backgroundColor: '#EDF1F9',
    paddingVertical: 8,
  },
  tabellaIntestazioneTesto: {
    fontSize: 10.5,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  tabellaRiga: { flexDirection: 'row', paddingVertical: 10 },
  tabellaRigaAlt: { backgroundColor: '#F7F9FD' },
  tabellaCella: { flex: 1, paddingHorizontal: 9, fontSize: 12.5, lineHeight: 17 },
  tabellaAspetto: { flex: 0.85, fontWeight: '800', color: colors.text },
  tabellaPrima: { color: colors.textMuted },
  tabellaAdesso: { color: '#1F7A4D', fontWeight: '700' },

  schedaWrap: { paddingBottom: EDGE_3D, marginTop: spacing.md },
  schedaBordo: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xl,
    backgroundColor: '#DFE4EF',
  },
  scheda: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md - 2,
    gap: spacing.sm,
  },
  schedaTestata: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  schedaTitolo: { fontSize: 16, fontWeight: '800', color: colors.text },
  schedaTesto: { fontSize: 13.5, color: colors.textMuted, lineHeight: 20 },

  consigli: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md - 4,
    marginTop: spacing.md,
    gap: spacing.xs,
  },
  consiglio: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm + 2,
    padding: 8,
  },
  consiglioIcona: {
    width: 32,
    height: 32,
    borderRadius: 11,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  consiglioTesti: { flex: 1 },
  consiglioTitolo: { fontSize: 14.5, fontWeight: '800', color: colors.text },
  consiglioTesto: { fontSize: 12.5, color: colors.textMuted, lineHeight: 18, marginTop: 2 },

  fonte: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 7,
    marginTop: spacing.xl,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: '#E4E8F0',
  },
  fonteTesto: { flex: 1, fontSize: 11.5, color: colors.textMuted, lineHeight: 17 },
});
