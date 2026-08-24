import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { casi, MATERIE_CASO, type MateriaCaso } from '../data/casi';
import { casoSuggerito } from '../simulatore/modello';
import { useGamification } from '../gamification/GamificationContext';
import { Button3D } from '../components/Button3D';
import { TitoloSchermata } from '../components/TitoloSchermata';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, EDGE_3D, materiaColors, radius, spacing } from '../theme';

/** Ogni materia della prova prende in prestito la tinta della materia affine. */
const TINTA: Record<MateriaCaso, keyof typeof materiaColors> = {
  'Diritto privato': 'Diritto civile',
  'Diritto penale': 'Diritto penale',
  'Diritto amministrativo': 'Diritto amministrativo',
};

const ICONA: Record<MateriaCaso, keyof typeof Ionicons.glyphMap> = {
  'Diritto privato': 'people',
  'Diritto penale': 'shield-half',
  'Diritto amministrativo': 'business',
};

export default function SimulatoreScreen({ navigation }: RootStackScreenProps<'Simulatore'>) {
  const { state } = useGamification();
  const svolti = state.casiSvolti;
  const suggerito = casoSuggerito(casi, svolti);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TitoloSchermata
        titolo="Caso pratico"
        sottotitolo="La prima parte dell’orale, quella che prima non esisteva. Ti diamo il caso, il tempo per prepararlo e poi la scaletta con cui confrontare quello che hai detto."
      />

      {/* Il confine da tenere fermo: la prova è nuova, di prove passate
          non ne esistono, e i tempi non stanno nel decreto. */}
      <View style={styles.avvisoWrap}>
        <View style={styles.avvisoEdge} />
        <View style={styles.avviso}>
          <Ionicons name="information-circle" size={20} color="#8A5B00" />
          <Text style={styles.avvisoTesto}>
            Il caso pratico è stato introdotto dalla riforma del 2026: prove passate non ne esistono
            e questi casi sono scritti da noi. Anche i tempi che proponiamo{' '}
            <Text style={styles.avvisoForte}>non sono fissati dal decreto</Text> — li puoi cambiare
            prima di iniziare.
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate('Esame')}
        accessibilityRole="button"
        style={({ pressed }) => [styles.rimando, pressed && styles.rimandoPremuto]}
      >
        <Ionicons name="school-outline" size={17} color={colors.primary} />
        <Text style={styles.rimandoTesto}>Come funziona l’esame dopo la riforma</Text>
        <Ionicons name="chevron-forward" size={16} color="#9AA3B2" />
      </Pressable>

      {suggerito && (
        <>
          <View style={styles.sezione}>
            <Ionicons name="play-circle-outline" size={16} color={colors.textMuted} />
            <Text style={styles.sezioneTitolo}>Riprendi da qui</Text>
          </View>
          <View style={styles.suggeritoWrap}>
            <View
              style={[
                styles.suggeritoEdge,
                { backgroundColor: materiaColors[TINTA[suggerito.materia]].edge },
              ]}
            />
            <LinearGradient
              colors={[
                materiaColors[TINTA[suggerito.materia]].start,
                materiaColors[TINTA[suggerito.materia]].end,
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.suggerito}
            >
              <Text style={styles.suggeritoMateria}>{suggerito.materia}</Text>
              <Text style={styles.suggeritoTitolo}>{suggerito.titolo}</Text>
              <Text style={styles.suggeritoNota}>
                {svolti[suggerito.id] === undefined
                  ? 'Non l’hai ancora affrontato.'
                  : `Il tuo miglior risultato: ${svolti[suggerito.id]} punti su 100.`}
              </Text>
              <Button3D
                label="Inizia la simulazione"
                onPress={() => navigation.navigate('CasoPratico', { casoId: suggerito.id })}
                color="#FFFFFF"
                edgeColor="#D3D8E2"
                textColor={colors.primary}
                style={styles.suggeritoBtn}
              />
            </LinearGradient>
          </View>
        </>
      )}

      {MATERIE_CASO.map((materia) => {
        const dellaMateria = casi.filter((c) => c.materia === materia);
        if (dellaMateria.length === 0) return null;
        const tinte = materiaColors[TINTA[materia]];
        return (
          <View key={materia}>
            <View style={styles.sezione}>
              <Ionicons name={ICONA[materia]} size={16} color={colors.textMuted} />
              <Text style={styles.sezioneTitolo}>{materia}</Text>
            </View>
            {dellaMateria.map((caso) => {
              const migliore = svolti[caso.id];
              return (
                <View key={caso.id} style={styles.cartaWrap}>
                  <View style={styles.cartaEdge} />
                  <Pressable
                    onPress={() => navigation.navigate('CasoPratico', { casoId: caso.id })}
                    accessibilityRole="button"
                    style={({ pressed }) => [styles.carta, pressed && styles.cartaPremuta]}
                  >
                    <View style={[styles.cartaIcona, { backgroundColor: tinte.soft }]}>
                      <Ionicons name={ICONA[materia]} size={20} color={tinte.end} />
                    </View>
                    <View style={styles.cartaTesti}>
                      <Text style={styles.cartaTitolo}>{caso.titolo}</Text>
                      <Text style={styles.cartaSotto} numberOfLines={2}>
                        {caso.fatto[0]}
                      </Text>
                    </View>
                    {migliore === undefined ? (
                      <Ionicons name="chevron-forward" size={17} color="#B6BECC" />
                    ) : (
                      <Text
                        style={[
                          styles.cartaPunteggio,
                          migliore >= 70 && styles.cartaPunteggioAlto,
                        ]}
                      >
                        {migliore}
                      </Text>
                    )}
                  </Pressable>
                </View>
              );
            })}
          </View>
        );
      })}

      <Text style={styles.chiusura}>
        I casi sono esercizi costruiti sull’unica indicazione che la norma dà: un caso che richieda
        insieme diritto sostanziale e processuale. Non sono prove d’esame passate, perché prove
        passate di questa prova non esistono.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },

  avvisoWrap: { paddingBottom: EDGE_3D, marginTop: spacing.sm },
  avvisoEdge: {
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
  avvisoTesto: { flex: 1, fontSize: 13, color: '#5A3D00', lineHeight: 19 },
  avvisoForte: { fontWeight: '800' },

  rimando: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md - 4,
    paddingVertical: 12,
    marginTop: spacing.sm,
  },
  rimandoPremuto: { backgroundColor: '#F2F5FB' },
  rimandoTesto: { flex: 1, fontSize: 14, fontWeight: '700', color: colors.text },

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

  suggeritoWrap: { paddingBottom: EDGE_3D },
  suggeritoEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xxl,
  },
  suggerito: { borderRadius: radius.xxl, padding: spacing.md, gap: 3 },
  suggeritoMateria: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.85)',
  },
  suggeritoTitolo: { fontSize: 20, fontWeight: '900', color: '#FFFFFF', lineHeight: 26 },
  suggeritoNota: { fontSize: 13, color: 'rgba(255,255,255,0.9)', marginTop: 2 },
  suggeritoBtn: { alignSelf: 'stretch', marginTop: spacing.sm + 2 },

  cartaWrap: { paddingBottom: EDGE_3D, marginBottom: spacing.sm - 2 },
  cartaEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.lg,
    backgroundColor: '#DFE4EF',
  },
  carta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md - 4,
  },
  cartaPremuta: { backgroundColor: '#F7F9FE' },
  cartaIcona: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartaTesti: { flex: 1 },
  cartaTitolo: { fontSize: 15, fontWeight: '800', color: colors.text, lineHeight: 20 },
  cartaSotto: { fontSize: 12.5, color: colors.textMuted, marginTop: 2, lineHeight: 17 },
  cartaPunteggio: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.textMuted,
    backgroundColor: '#EEF1F7',
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 3,
    overflow: 'hidden',
  },
  cartaPunteggioAlto: { color: colors.successEdge, backgroundColor: colors.successSoft },

  chiusura: {
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 18,
    marginTop: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: '#E4E8F0',
  },
});
