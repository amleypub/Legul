import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icona } from '../components/Icona';
import { casi, MATERIE_CASO, type MateriaCaso } from '../data/casi';
import { casoSuggerito } from '../simulatore/modello';
import { casoAccessibile } from '../data/accesso';
import { useGamification } from '../gamification/GamificationContext';
import { Bottone } from '../components/Bottone';
import type { RootStackScreenProps } from '../navigation/types';
import { alpha, colors, materiaColors, radius, spacing, type } from '../theme';

/** Ogni materia della prova prende in prestito la tinta della materia affine. */
const TINTA: Record<MateriaCaso, keyof typeof materiaColors> = {
  'Diritto privato': 'Diritto civile',
  'Diritto penale': 'Diritto penale',
  'Diritto amministrativo': 'Diritto amministrativo',
};

const ICONA: Record<MateriaCaso, string> = {
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
      {/*
        Niente titolo grande qui: questa schermata sta nello stack e ha
        già «Caso pratico» nell'intestazione. Ripeterlo subito sotto
        significava mostrare due volte le stesse due parole a mezzo
        centimetro di distanza. Le schermate a tab, che l'intestazione non
        ce l'hanno, continuano a usare `TitoloSchermata`.
      */}
      <Text style={styles.occhiello}>
        La prima parte dell’orale, quella che prima non esisteva. Ti diamo il caso, il tempo per
        prepararlo e poi la scaletta con cui confrontare quello che hai detto.
      </Text>

      {/* Il confine da tenere fermo: la prova è nuova, di prove passate
          non ne esistono, e i tempi non stanno nel decreto. */}
      <View style={styles.avvisoWrap}>
        <View style={styles.avviso}>
          <Icona nome="information-circle" size={20} color="#8A5B00" />
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
        <Icona nome="school-outline" size={17} color={colors.accent} />
        <Text style={styles.rimandoTesto}>Come funziona l’esame dopo la riforma</Text>
        <Icona nome="chevron-forward" size={16} color="#9AA3B2" />
      </Pressable>

      {suggerito && (
        <>
          <View style={styles.sezione}>
            <Icona nome="play-circle-outline" size={16} color={colors.textMuted} />
            <Text style={styles.sezioneTitolo}>Riprendi da qui</Text>
          </View>
          <View style={styles.suggeritoWrap}>
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
              <Bottone
                label="Inizia la simulazione"
                onPress={() => navigation.navigate('CasoPratico', { casoId: suggerito.id })}
          variante="chiaro"
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
              <Icona nome={ICONA[materia]} size={16} color={colors.textMuted} />
              <Text style={styles.sezioneTitolo}>{materia}</Text>
            </View>
            {dellaMateria.map((caso) => {
              const migliore = svolti[caso.id];
              const libero = casoAccessibile(caso.id, state.premium);
              return (
                <View key={caso.id} style={styles.cartaWrap}>
                  <Pressable
                    onPress={() => navigation.navigate('CasoPratico', { casoId: caso.id })}
                    accessibilityRole="button"
                    style={({ pressed }) => [styles.carta, pressed && styles.cartaPremuta]}
                  >
                    <View style={[styles.cartaIcona, { backgroundColor: tinte.soft }]}>
                      <Icona
                        nome={libero ? ICONA[materia] : 'lock-closed'}
                        size={20}
                        color={tinte.end}
                      />
                    </View>
                    <View style={styles.cartaTesti}>
                      {/* Due righe al massimo: un titolo lungo scendeva a
                          tre e stringeva la pastiglia PREMIUM in un angolo,
                          facendo sembrare le carte disallineate fra loro. */}
                      <Text style={styles.cartaTitolo} numberOfLines={2}>
                        {caso.titolo}
                      </Text>
                      <Text style={styles.cartaSotto} numberOfLines={2}>
                        {caso.fatto[0]}
                      </Text>
                    </View>
                    {!libero ? (
                      <Text style={styles.cartaRiservato}>PREMIUM</Text>
                    ) : migliore === undefined ? (
                      <Icona nome="chevron-forward" size={17} color="#B6BECC" />
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
  occhiello: { ...type.corpoLungo, color: colors.textMuted, marginBottom: spacing.md },
  container: { flex: 1, },
  content: { padding: spacing.md, paddingBottom: spacing.xl },

  avvisoWrap: { marginTop: spacing.sm },
  avviso: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.lg,
    padding: spacing.md - 2,
  },
  avvisoTesto: { flex: 1, fontSize: 13, color: colors.accent, lineHeight: 19 },
  avvisoForte: { fontWeight: '600' },

  rimando: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md - 4,
    paddingVertical: 12,
    marginTop: spacing.sm,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  rimandoPremuto: { backgroundColor: alpha.veloForte },
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
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },

  suggeritoWrap: { },
  suggerito: { borderRadius: radius.xxl, padding: spacing.md, gap: 3 },
  suggeritoMateria: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.85)',
  },
  suggeritoTitolo: { fontSize: 20, fontWeight: '700', color: '#FFFFFF', lineHeight: 26 },
  suggeritoNota: { fontSize: 13, color: 'rgba(255,255,255,0.9)', marginTop: 2 },
  suggeritoBtn: { alignSelf: 'stretch', marginTop: spacing.sm + 2 },

  cartaWrap: { marginBottom: spacing.sm - 2 },
  carta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.lg,
    padding: spacing.md - 4,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  cartaPremuta: { backgroundColor: alpha.velo },
  cartaIcona: {
    width: 42,
    height: 42,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: alpha.bordo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartaTesti: { flex: 1 },
  cartaTitolo: { fontSize: 15, fontWeight: '600', color: colors.text, lineHeight: 20 },
  cartaSotto: { fontSize: 12.5, color: colors.textMuted, marginTop: 2, lineHeight: 17 },
  cartaPunteggio: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
    backgroundColor: alpha.velo,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 3,
    overflow: 'hidden',
  },
  cartaPunteggioAlto: { color: colors.successEdge, backgroundColor: colors.successSoft },
  cartaRiservato: {
    fontSize: 9.5,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: colors.accentEdge,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
    overflow: 'hidden',
  },

  chiusura: {
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 18,
    marginTop: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: alpha.bordo,
  },
});
