import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BADGES, useGamification } from '../gamification/GamificationContext';
import { settimanaCorrente, type GiornoSettimana } from '../gamification/settimana';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from '../components/ProgressBar';
import { AnelloProgresso, EtichettaAnello } from '../components/AnelloProgresso';
import { Button3D } from '../components/Button3D';
import { Card3D } from '../components/Card3D';
import { Mascot } from '../components/Mascot';
import { TitoloSchermata } from '../components/TitoloSchermata';
import { colors, EDGE_3D, materiaColors, radius, spacing } from '../theme';

/** Obiettivo giornaliero in punti: la ragione per riaprire l'app domani. */
export const OBIETTIVO_GIORNALIERO = 50;

/** Data odierna in formato YYYY-MM-DD, come la salva la gamification. */
function oggiISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Una colonna della riga statistiche: numero grande, etichetta piccola. */
function Statistica({
  valore,
  label,
  icona,
  tint,
}: {
  valore: string | number;
  label: string;
  icona: keyof typeof Ionicons.glyphMap;
  tint: string;
}) {
  return (
    <View style={styles.stat}>
      <Ionicons name={icona} size={15} color={tint} />
      <Text style={styles.statValore} numberOfLines={1} adjustsFontSizeToFit>
        {valore}
      </Text>
      <Text style={styles.statLabel} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

/** Pastiglia di un giorno nella striscia settimanale. */
function GiornoPill({ g }: { g: GiornoSettimana }) {
  return (
    <View style={styles.giornoCol}>
      <Text style={[styles.giornoLettera, g.oggi && styles.giornoLetteraOggi]}>{g.lettera}</Text>
      <View
        style={[
          styles.giorno,
          g.attivo && styles.giornoAttivo,
          !g.attivo && g.futuro && styles.giornoFuturo,
          g.oggi && styles.giornoOggi,
        ]}
      >
        {g.attivo ? (
          <Ionicons name="flame" size={15} color="#FFFFFF" />
        ) : (
          <View style={[styles.giornoPunto, g.futuro && styles.giornoPuntoFuturo]} />
        )}
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const { state, streak, livello, prossimoLivello, progressoLivello } = useGamification();
  // La Home sta dentro il tab navigator: la tab «Quiz» è una sorella.
  const navigation = useNavigation<{ navigate: (schermata: string) => void }>();

  const totaleRisposte = state.risposteCorrette + state.risposteErrate;
  const precisione =
    totaleRisposte > 0 ? Math.round((state.risposteCorrette / totaleRisposte) * 100) : null;

  const obiettivoRaggiunto = state.puntiOggi >= OBIETTIVO_GIORNALIERO;
  const mancanti = OBIETTIVO_GIORNALIERO - state.puntiOggi;
  const messaggioObiettivo = obiettivoRaggiunto
    ? 'Obiettivo di oggi raggiunto. Ogni punto in più è vantaggio guadagnato.'
    : state.puntiOggi > 0
      ? `Ti mancano ${mancanti} punti: circa ${Math.ceil(mancanti / 10)} risposte esatte.`
      : `${OBIETTIVO_GIORNALIERO} punti al giorno: bastano cinque risposte esatte.`;

  // Alla striscia serve la streak *salvata*, non quella corretta: i giorni
  // accesi sono la cronologia vera, e vanno mostrati anche quando la serie
  // si è interrotta. È proprio il confronto fra le fiamme di lunedì e lo
  // zero di oggi a far capire che cosa è successo.
  const settimana = useMemo(
    () => settimanaCorrente(oggiISO(), state.ultimoGiornoAttivita, state.streak),
    [state.ultimoGiornoAttivita, state.streak]
  );

  // La fiamma della streak respira. Si anima solo quando la streak è
  // accesa: un ciclo infinito che nessuno vede consuma batteria e basta.
  const flame = useRef(new Animated.Value(0)).current;
  const streakAccesa = streak > 0;
  useEffect(() => {
    if (!streakAccesa) return;
    const respiro = Animated.loop(
      Animated.sequence([
        Animated.timing(flame, {
          toValue: 1,
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(flame, {
          toValue: 0,
          duration: 700,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );
    respiro.start();
    return () => respiro.stop();
  }, [flame, streakAccesa]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TitoloSchermata titolo="Legul" sottotitolo="La tua preparazione, un giorno alla volta." />
      {/*
        Intestazione compatta: prima occupava mezza schermata per dire il
        livello e i punti, spingendo sotto la piega la parte che conta.
      */}
      <View style={styles.heroWrap}>
        <View style={styles.heroEdge} />
        <LinearGradient
          colors={['#2E4370', '#1B2A4A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <Mascot state="neutral" size={78} animated />
          <View style={styles.heroTesto}>
            <View style={styles.heroBadgeLivello}>
              <Ionicons name={livello.icona} size={13} color={colors.primary} />
              <Text style={styles.heroLivello} numberOfLines={1}>
                {livello.nome}
              </Text>
            </View>
            <Text style={styles.heroPunti}>
              {state.punti}
              <Text style={styles.heroPuntiLabel}> punti</Text>
            </Text>
            <ProgressBar progress={progressoLivello} />
            <Text style={styles.heroProssimo} numberOfLines={1}>
              {prossimoLivello
                ? `${prossimoLivello.sogliaPunti - state.punti} punti a «${prossimoLivello.nome}»`
                : 'Hai raggiunto l’ultimo livello.'}
            </Text>
          </View>
        </LinearGradient>
      </View>

      {/*
        L'esame è appena cambiato: chi apre l'app oggi ha bisogno di
        sapere che cosa deve preparare prima ancora di sapere a che
        punto è. La card sta perciò sopra i progressi, non in fondo.
      */}
      <Card3D
        edgeColor="#0E1830"
        color={colors.primary}
        radiusSize={radius.xl}
        style={styles.esameWrap}
        contentStyle={styles.esame}
        onPress={() => navigation.navigate('Esame')}
      >
        <View style={styles.esameIcona}>
          <Ionicons name="school" size={24} color={colors.primary} />
        </View>
        <View style={styles.esameTesto}>
          <View style={styles.esameChip}>
            <Text style={styles.esameChipTesto}>NUOVE REGOLE</Text>
          </View>
          <Text style={styles.esameTitolo}>Come funziona l’esame</Text>
          <Text style={styles.esameSub}>
            Due scritti e un orale in cinque parti: che cosa cambia dalla sessione 2026-2027.
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="rgba(255,255,255,0.9)" />
      </Card3D>

      {/*
        Obiettivo di oggi, streak e settimana in un solo pannello: la
        striscia dei giorni racconta già la streak, tenerli separati
        significava dire due volte la stessa cosa.
      */}
      <Text style={styles.sectionTitle}>I tuoi progressi</Text>

      <View style={styles.obiettivoWrap}>
        <View style={styles.obiettivoEdge} />
        <LinearGradient
          colors={['#33406B', '#1B2540']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.obiettivo}
        >
          <View style={styles.obiettivoTop}>
            <AnelloProgresso progresso={state.puntiOggi / OBIETTIVO_GIORNALIERO} size={106}>
              <EtichettaAnello valore={`${state.puntiOggi}`} unita="punti" />
            </AnelloProgresso>
            <View style={styles.obiettivoTesto}>
              <Text style={styles.obiettivoTitolo}>Obiettivo di oggi</Text>
              <Text style={styles.obiettivoSub}>{messaggioObiettivo}</Text>
              {obiettivoRaggiunto && (
                <View style={styles.obiettivoChip}>
                  <Ionicons name="checkmark-circle" size={14} color={colors.primary} />
                  <Text style={styles.obiettivoChipTesto}>COMPLETATO</Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.settimana}>
            <View style={styles.streakRiga}>
              <Animated.View
                style={{
                  transform: [
                    { scale: flame.interpolate({ inputRange: [0, 1], outputRange: [1, 1.14] }) },
                    {
                      rotate: flame.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['-5deg', '5deg'],
                      }),
                    },
                  ],
                }}
              >
                <Ionicons
                  name="flame"
                  size={22}
                  color={streak > 0 ? colors.streakTo : 'rgba(255,255,255,0.28)'}
                />
              </Animated.View>
              <Text style={styles.streakNumero}>
                {streak}
                <Text style={styles.streakNumeroLabel}>
                  {streak === 1 ? ' giorno di fila' : ' giorni di fila'}
                </Text>
              </Text>
              {streak > 0 && <Mascot state="celebrating" size={40} />}
            </View>

            <View style={styles.giorni}>
              {settimana.map((g) => (
                <GiornoPill key={g.data} g={g} />
              ))}
            </View>
          </View>

          {/* Dalla Home mancava un modo per iniziare a studiare. */}
          <Button3D
            label={state.quizCompletati > 0 ? 'Continua a studiare' : 'Inizia la prima lezione'}
            onPress={() => navigation.navigate('Quiz')}
            color={colors.accent}
            edgeColor="#A8861B"
            textColor={colors.primary}
          />
        </LinearGradient>
      </View>

      {/* Ripasso: compare solo se c'è davvero qualcosa da recuperare */}
      {state.erroriDaRipassare.length > 0 && (
        <Card3D
          edgeColor={materiaColors.Ripasso.edge}
          color={materiaColors.Ripasso.soft}
          radiusSize={radius.xl}
          style={styles.ripassoWrap}
          contentStyle={styles.ripasso}
          onPress={() => navigation.navigate('Ripasso')}
        >
          <View style={styles.ripassoIcona}>
            <Ionicons name="refresh-circle" size={26} color="#FFFFFF" />
          </View>
          <View style={styles.ripassoTesto}>
            <Text style={styles.ripassoTitolo}>Ripassa i tuoi errori</Text>
            <Text style={styles.ripassoSub}>
              {state.erroriDaRipassare.length}{' '}
              {state.erroriDaRipassare.length === 1 ? 'domanda sbagliata' : 'domande sbagliate'} da
              recuperare.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color={materiaColors.Ripasso.edge} />
        </Card3D>
      )}

      {/* Numeri complessivi, su una riga sola */}
      <View style={styles.statsWrap}>
        <View style={styles.statsEdge} />
        <View style={styles.stats}>
          <Statistica
            valore={state.risposteCorrette}
            label="Esatte"
            icona="checkmark-done"
            tint={colors.success}
          />
          <View style={styles.statsDivider} />
          <Statistica
            valore={precisione !== null ? `${precisione}%` : '0%'}
            label="Precisione"
            icona="analytics"
            tint="#4F7CF3"
          />
          <View style={styles.statsDivider} />
          <Statistica
            valore={state.quizCompletati}
            label="Lezioni"
            icona="ribbon"
            tint="#9B6BFF"
          />
          <View style={styles.statsDivider} />
          <Statistica
            valore={state.tracceLette.length}
            label="Tracce"
            icona="document-text"
            tint={colors.accentEdge}
          />
        </View>
      </View>

      {/* Badge con vetro smerigliato sui bloccati */}
      <Text style={styles.sectionTitle}>
        Badge ({state.badges.length}/{BADGES.length})
      </Text>
      <View style={styles.badgeGrid}>
        {BADGES.map((badge) => {
          const sbloccato = state.badges.includes(badge.id);
          return (
            <View key={badge.id} style={styles.badgeWrap}>
              <View style={[styles.badgeEdge, sbloccato && styles.badgeEdgeOn]} />
              <View style={[styles.badgeCard, sbloccato && styles.badgeCardOn]}>
                <View style={[styles.badgeIconWrap, sbloccato && styles.badgeIconWrapOn]}>
                  <Ionicons
                    name={badge.icona}
                    size={26}
                    color={sbloccato ? colors.accent : '#9AA3B2'}
                  />
                </View>
                <Text style={[styles.badgeNome, !sbloccato && styles.badgeSpento]}>
                  {badge.nome}
                </Text>
                <Text style={[styles.badgeDescr, !sbloccato && styles.badgeSpento]}>
                  {badge.descrizione}
                </Text>
                {!sbloccato && (
                  /* Il lucchetto sta in un angolo, non sopra il testo: un
                     badge bloccato deve incuriosire, e per farlo bisogna
                     poter leggere che cosa si sta per sbloccare. */
                  <View style={styles.badgeLockPill}>
                    <Ionicons name="lock-closed" size={12} color="#8B93A3" />
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },

  heroWrap: { paddingBottom: EDGE_3D },
  heroEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xxl,
    backgroundColor: '#111A2E',
  },
  hero: {
    borderRadius: radius.xxl,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
  },
  heroTesto: { flex: 1, gap: 5 },
  heroBadgeLivello: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 5,
    backgroundColor: colors.accent,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  heroLivello: { color: colors.primary, fontSize: 12, fontWeight: '800' },
  heroPunti: { color: '#FFFFFF', fontSize: 28, fontWeight: '900' },
  heroPuntiLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    fontWeight: '700',
  },
  heroProssimo: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },

  streakRiga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  streakNumero: { flex: 1, fontSize: 20, fontWeight: '900', color: '#FFFFFF' },
  streakNumeroLabel: { fontSize: 14, fontWeight: '700', color: 'rgba(255,255,255,0.7)' },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },

  // ——— Obiettivo di oggi ———
  obiettivoWrap: { paddingBottom: EDGE_3D },
  obiettivoEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xxl,
    backgroundColor: '#111A2E',
  },
  obiettivo: {
    borderRadius: radius.xxl,
    padding: spacing.md,
    gap: spacing.md,
  },
  obiettivoTop: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  obiettivoTesto: { flex: 1 },
  obiettivoTitolo: { color: '#FFFFFF', fontSize: 18, fontWeight: '900' },
  obiettivoSub: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 3,
  },
  obiettivoChip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 4,
    marginTop: spacing.sm,
    backgroundColor: colors.accent,
    borderRadius: radius.pill,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  obiettivoChipTesto: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
    color: colors.primary,
  },

  // ——— Streak e striscia della settimana ———
  settimana: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.10)',
    paddingTop: spacing.md,
    gap: spacing.sm + 2,
  },
  giorni: { flexDirection: 'row', justifyContent: 'space-between' },
  giornoCol: { alignItems: 'center', gap: 6 },
  giornoLettera: {
    fontSize: 11,
    fontWeight: '800',
    color: 'rgba(255,255,255,0.45)',
  },
  giornoLetteraOggi: { color: colors.accent },
  giorno: {
    width: 32,
    height: 32,
    borderRadius: 11,
    backgroundColor: 'rgba(255,255,255,0.10)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  giornoAttivo: { backgroundColor: colors.streakTo },
  giornoFuturo: { backgroundColor: 'rgba(255,255,255,0.05)' },
  giornoOggi: { borderWidth: 2, borderColor: colors.accent },
  giornoPunto: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.30)',
  },
  giornoPuntoFuturo: { backgroundColor: 'rgba(255,255,255,0.15)' },

  // ——— Ripasso degli errori ———
  esameWrap: { marginTop: spacing.lg },
  esame: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm + 4, padding: spacing.md - 2 },
  esameIcona: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  esameTesto: { flex: 1 },
  esameChip: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 3,
  },
  esameChipTesto: { fontSize: 9.5, fontWeight: '900', letterSpacing: 0.9, color: '#FFE08A' },
  esameTitolo: { fontSize: 16.5, fontWeight: '800', color: '#FFFFFF' },
  esameSub: { fontSize: 12.5, color: 'rgba(255,255,255,0.85)', lineHeight: 18, marginTop: 2 },

  ripassoWrap: { marginTop: spacing.md },
  ripasso: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.md - 2,
  },
  ripassoIcona: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: materiaColors.Ripasso.end,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripassoTesto: { flex: 1 },
  ripassoTitolo: { fontSize: 16, fontWeight: '800', color: colors.text },
  ripassoSub: { fontSize: 13, color: colors.textMuted, lineHeight: 18, marginTop: 2 },

  // ——— Riga dei numeri complessivi ———
  statsWrap: { paddingBottom: EDGE_3D, marginTop: spacing.sm },
  statsEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xl,
    backgroundColor: '#DFE4EF',
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    paddingVertical: spacing.md - 2,
    paddingHorizontal: spacing.xs,
  },
  statsDivider: { width: 1, height: 32, backgroundColor: '#EAEEF6' },
  stat: { flex: 1, alignItems: 'center', gap: 2, paddingHorizontal: 2 },
  statValore: { fontSize: 21, fontWeight: '900', color: colors.text },
  statLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },

  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  badgeWrap: { width: '48%', flexGrow: 1, paddingBottom: EDGE_3D },
  badgeEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.xl,
    backgroundColor: '#DFE4EF',
  },
  badgeEdgeOn: { backgroundColor: colors.accentEdge },
  badgeCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md,
    alignItems: 'center',
    overflow: 'hidden',
  },
  badgeCardOn: { backgroundColor: colors.accentSoft },
  badgeIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF1F6',
  },
  badgeIconWrapOn: { backgroundColor: '#FFFFFF' },
  badgeNome: { fontSize: 14, fontWeight: '800', color: colors.text, marginTop: spacing.sm },
  badgeDescr: { fontSize: 11, color: colors.textMuted, textAlign: 'center', marginTop: 2 },
  badgeSpento: { color: '#9AA3B2' },
  badgeLockPill: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#EEF1F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
