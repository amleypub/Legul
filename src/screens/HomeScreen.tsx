import React, { useEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { BADGES, PUNTI, useGamification } from '../gamification/GamificationContext';
import { messaggioObiettivo } from '../gamification/obiettivo';
import { settimanaCorrente, type GiornoSettimana } from '../gamification/settimana';
import { dovuteOggi } from '../gamification/ripasso';
import { giorniAllEsame, ritmoNecessario, testoConto } from '../data/scelte';
import { diagnosi, materiaPiuDebole } from '../data/diagnosi';
import { materiaDiDomanda } from '../data/questions';
import { lezioneDoveRiprendere, totaleLezioni } from '../data/percorso';
import { materie } from '../data/quizzes';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from '../components/ProgressBar';
import { AnelloProgresso, EtichettaAnello } from '../components/AnelloProgresso';
import { Bottone } from '../components/Bottone';
import { Entrata, scaglione } from '../components/Entrata';
import { Icona } from '../components/Icona';
import { Monolite } from '../components/Monolite';
import { Sfondo } from '../components/Sfondo';
import { Superficie } from '../components/Superficie';
import { TitoloSchermata } from '../components/TitoloSchermata';
import { SPAZIO_TAB, alone, alpha, colors, materiaColors, ombra, radius, spacing, type } from '../theme';

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
  icona: string;
  tint: string;
}) {
  return (
    <View style={styles.stat}>
      <Icona nome={icona} size={15} color={tint} />
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
          g.attivo && alone(colors.streakTo, 'tenue'),
          !g.attivo && g.futuro && styles.giornoFuturo,
          g.oggi && styles.giornoOggi,
        ]}
      >
        {g.attivo ? (
          <Icona nome="flame" size={15} color="#FFFFFF" pieno />
        ) : (
          <View style={[styles.giornoPunto, g.futuro && styles.giornoPuntoFuturo]} />
        )}
      </View>
    </View>
  );
}

/**
 * Scorciatoia a tinta piena verso una sezione: l'unico elemento saturo
 * di una schermata fatta di superfici chiare, così la gerarchia si legge
 * senza bisogno di titoli in grassetto.
 */
function Scorciatoia({
  gradiente,
  glow,
  icona,
  etichetta,
  titolo,
  sottotitolo,
  onPress,
}: {
  gradiente: [string, string];
  glow: string;
  icona: string;
  etichetta: string;
  titolo: string;
  sottotitolo: string;
  onPress: () => void;
}) {
  return (
    <Superficie
      tono="piena"
      rilievo="nessuno"
      raggio={radius.xl}
      onPress={onPress}
      style={[styles.scorciatoia, alone(glow, 'tenue')] as never}
      accessibilityLabel={titolo}
    >
      <LinearGradient
        colors={gradiente}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.scorciatoiaCorpo}
      >
        <View style={styles.scorciatoiaIcona}>
          <Icona nome={icona} size={22} color={gradiente[1]} />
        </View>
        <View style={styles.scorciatoiaTesti}>
          <Text style={styles.scorciatoiaEtichetta}>{etichetta}</Text>
          <Text style={styles.scorciatoiaTitolo}>{titolo}</Text>
          <Text style={styles.scorciatoiaSub}>{sottotitolo}</Text>
        </View>
        <Icona nome="chevron-forward" size={20} color="rgba(255,255,255,0.85)" />
      </LinearGradient>
    </Superficie>
  );
}

export default function HomeScreen() {
  const { state, streak, livello, prossimoLivello, progressoLivello, copertura, obiettivoOggi } =
    useGamification();
  // La Home sta dentro il tab navigator: la tab «Quiz» è una sorella.
  const navigation = useNavigation<{
    navigate: (schermata: string, parametri?: object) => void;
  }>();

  const totaleRisposte = state.risposteCorrette + state.risposteErrate;
  const precisione =
    totaleRisposte > 0 ? Math.round((state.risposteCorrette / totaleRisposte) * 100) : null;

  // Solo le carte in scadenza oggi: il mazzo intero contiene anche quelle
  // già rimesse in coda, e mostrarle come «da recuperare» terrebbe la
  // scheda accesa per sempre.
  const daRipassareOggi = useMemo(
    () => dovuteOggi(state.mazzoRipasso, oggiISO()).length,
    [state.mazzoRipasso]
  );

  // Il calcolo attraversa i percorsi di tutte le materie: va fatto una
  // volta e rifatto solo quando cambiano le stelle.
  const ripresa = useMemo(() => lezioneDoveRiprendere(materie, state.lezioni), [state.lezioni]);
  const etichettaRipresa = !ripresa
    ? 'Rivedi il percorso'
    : state.quizCompletati > 0
      ? `Riprendi dalla lezione ${ripresa.lezione.indice + 1}`
      : 'Inizia la prima lezione';

  /**
   * Quante lezioni mancano al livello successivo.
   *
   * Una percentuale non dice che cosa fare; un numero di lezioni sì. È la
   * differenza fra «ti manca il 12%» e «ti mancano nove lezioni», e la
   * seconda è l'unica delle due su cui qualcuno può decidere di aprire
   * una lezione adesso.
   */
  const lezioniAlProssimo = useMemo(() => {
    if (!prossimoLivello) return 0;
    const totali = totaleLezioni(materie);
    return Math.max(1, Math.ceil((prossimoLivello.sogliaCopertura - copertura) * totali));
  }, [prossimoLivello, copertura]);

  /**
   * Il conto alla rovescia e il ritmo che serve.
   *
   * Una data da sola è un'ansia; una data più «due lezioni al giorno» è
   * un piano. Il secondo numero è quello che rende utile il primo, ed è
   * anche l'unico che si può confrontare con l'andatura scelta.
   */
  const esame = useMemo(() => {
    if (!state.esame.dataEsame) return null;
    const oggi = oggiISO();
    const giorni = giorniAllEsame(state.esame.dataEsame, oggi);
    const totali = totaleLezioni(materie);
    const rimaste = Math.max(0, Math.round(totali * (1 - copertura)));
    return { giorni, ritmo: ritmoNecessario(rimaste, giorni), rimaste };
  }, [state.esame.dataEsame, copertura]);

  /**
   * La materia su cui conviene lavorare adesso, se i dati bastano per
   * dirlo. È `null` finché non c'è abbastanza: meglio non dire nulla che
   * mandare qualcuno a rifare una materia che magari sa benissimo.
   */
  const debole = useMemo(
    () =>
      materiaPiuDebole(
        diagnosi(
          materie,
          state.lezioni,
          state.perMateria,
          state.mazzoRipasso,
          materiaDiDomanda,
          state.esame
        )
      ),
    [state.lezioni, state.perMateria, state.mazzoRipasso, state.esame]
  );

  const obiettivoRaggiunto = state.puntiOggi >= obiettivoOggi;
  const testoObiettivo = messaggioObiettivo(
    state.puntiOggi,
    state.andatura,
    PUNTI.rispostaCorretta
  );

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
  const respiro = useSharedValue(0);
  const streakAccesa = streak > 0;
  useEffect(() => {
    if (!streakAccesa) {
      respiro.value = 0;
      return;
    }
    respiro.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 700, easing: Easing.inOut(Easing.quad) }),
        withTiming(0, { duration: 700, easing: Easing.inOut(Easing.quad) })
      ),
      -1,
      false
    );
  }, [respiro, streakAccesa]);
  const stileFiamma = useAnimatedStyle(() => ({
    transform: [
      { scale: 1 + respiro.value * 0.14 },
      { rotate: `${-5 + respiro.value * 10}deg` },
    ],
  }));

  return (
    <Sfondo tinta={colors.accent}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <TitoloSchermata titolo="Legul" sottotitolo="La tua preparazione, un giorno alla volta." />

        {/*
          Intestazione compatta: prima occupava mezza schermata per dire il
          livello e i punti, spingendo sotto la piega la parte che conta.
        */}
        <Entrata>
          <View style={[styles.heroWrap, alone(colors.primary, 'tenue')]}>
            <LinearGradient
              colors={['rgba(255,255,255,0.09)', 'rgba(255,255,255,0.025)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.hero}
            >
              <Monolite state="neutral" size={78} animated />
              <View style={styles.heroTesto}>
                <View style={styles.heroBadgeLivello}>
                  <Icona nome={livello.icona} size={13} color={colors.accent} />
                  <Text style={styles.heroLivello} numberOfLines={1}>
                    {livello.nome}
                  </Text>
                </View>
                {/*
                  Il numero grande è la quota di programma svolto, non i
                  punti: è la sola cifra che risponde alla domanda per cui
                  si apre questa schermata, cioè se si è pronti. I punti
                  restano, ma sotto, come misura della costanza.
                */}
                <Text style={styles.heroPunti}>
                  {Math.round(copertura * 100)}%{' '}
                  <Text style={styles.heroPuntiLabel}>di programma svolto</Text>
                </Text>
                <ProgressBar progress={progressoLivello} />
                <Text style={styles.heroProssimo} numberOfLines={1}>
                  {prossimoLivello
                    ? `${lezioniAlProssimo} ${lezioniAlProssimo === 1 ? 'lezione' : 'lezioni'} a «${prossimoLivello.nome}» · ${state.punti} punti`
                    : `Hai svolto tutto il programma · ${state.punti} punti`}
                </Text>
              </View>
            </LinearGradient>
          </View>
        </Entrata>

        {/*
          Il conto alla rovescia, se la data è stata indicata.

          Sta prima di tutto il resto perché è la cornice dentro cui ogni
          altro numero acquista senso: il tre per cento di programma
          svolto vuol dire una cosa a un anno dall'esame e un'altra a tre
          settimane. Compare solo con una data: inventarne una sarebbe
          peggio che non averla.
        */}
        {!!esame && esame.giorni >= 0 && (
          <Entrata ritardo={scaglione(1)}>
            <Superficie
              tono="forte"
              raggio={radius.xl}
              rilievo="media"
              glow={colors.accent}
              onPress={() => navigation.navigate('Esame')}
              contentStyle={styles.conto}
            >
              <LinearGradient
                colors={['rgba(201,162,39,0.16)', 'rgba(201,162,39,0.04)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.contoIcona}
              >
                <Icona nome="calendar" size={22} color={colors.accent} />
              </LinearGradient>
              <View style={styles.contoTesto}>
                <Text style={styles.contoTitolo}>{testoConto(esame.giorni)}</Text>
                <Text style={styles.contoSub}>
                  {esame.ritmo === null
                    ? 'Hai svolto tutto il programma: da qui in avanti è ripasso.'
                    : `Per finire il programma in tempo servono ${esame.ritmo.toLocaleString(
                        'it-IT'
                      )} lezioni al giorno.`}
                </Text>
              </View>
              <Icona nome="chevron-forward" size={20} color={colors.accentEdge} />
            </Superficie>
          </Entrata>
        )}

        {/*
          Dove sei debole.

          Compare solo quando c'è davvero una materia sotto soglia e i
          dati bastano per dirlo. È la risposta alla domanda che chi ha
          una data si fa ogni mattina — che cosa studio adesso — e sta
          subito sotto il conto alla rovescia perché è la conseguenza
          pratica di quel numero.
        */}
        {!!debole && (
          <Entrata ritardo={scaglione(1)}>
            <Superficie
              tono="forte"
              raggio={radius.xl}
              rilievo="media"
              glow={colors.error}
              onPress={() => navigation.navigate('Diagnosi')}
              contentStyle={styles.conto}
            >
              <LinearGradient
                colors={['rgba(226,86,107,0.16)', 'rgba(226,86,107,0.04)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.contoIcona}
              >
                <Icona nome="alert-circle" size={22} color={colors.error} />
              </LinearGradient>
              <View style={styles.contoTesto}>
                <Text style={styles.contoTitolo}>Comincia da {debole.materia}</Text>
                <Text style={styles.contoSub}>
                  È la materia in cui sbagli di più:{' '}
                  {Math.round((debole.precisione ?? 0) * 100)}% di risposte esatte.
                </Text>
              </View>
              <Icona nome="chevron-forward" size={20} color={colors.errorEdge} />
            </Superficie>
          </Entrata>
        )}

        {/*
          L'esame è appena cambiato: chi apre l'app oggi ha bisogno di
          sapere che cosa deve preparare prima ancora di sapere a che
          punto è. La card sta perciò sopra i progressi, non in fondo.
        */}
        <Entrata ritardo={scaglione(1)}>
          <Scorciatoia
            gradiente={['rgba(255,255,255,0.13)', 'rgba(255,255,255,0.05)']}
            glow={colors.primary}
            icona="school"
            etichetta="Nuove regole"
            titolo="Come funziona l’esame"
            sottotitolo="Due scritti e un orale in cinque parti: che cosa cambia dalla sessione 2026-2027."
            onPress={() => navigation.navigate('Esame')}
          />
        </Entrata>

        {/*
          Il caso pratico è la prova che prima non esisteva, quindi quella
          su cui nessuno ha materiale e nessuno si è mai esercitato: sta
          subito sotto le nuove regole perché è la conseguenza pratica di
          quelle regole.
        */}
        <Entrata ritardo={scaglione(2)}>
          <Scorciatoia
            gradiente={['rgba(192,94,126,0.20)', 'rgba(192,94,126,0.05)']}
            glow="#B32D53"
            icona="mic"
            etichetta="Prova nuova"
            titolo="Simula il caso pratico"
            sottotitolo="Ti diamo il caso e il tempo per prepararlo. Poi confronti quello che hai detto con la scaletta."
            onPress={() => navigation.navigate('Simulatore')}
          />
        </Entrata>

        {/*
          Obiettivo di oggi, streak e settimana in un solo pannello: la
          striscia dei giorni racconta già la streak, tenerli separati
          significava dire due volte la stessa cosa.
        */}
        <Entrata ritardo={scaglione(3)}>
          <Text style={styles.sectionTitle}>I tuoi progressi</Text>

          <View style={[styles.obiettivoWrap, ombra.alta]}>
            <LinearGradient
              colors={['rgba(255,255,255,0.07)', 'rgba(255,255,255,0.02)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.obiettivo}
            >
              <View style={styles.obiettivoTop}>
                <AnelloProgresso progresso={state.puntiOggi / obiettivoOggi} size={106}>
                  <EtichettaAnello valore={`${state.puntiOggi}`} unita="punti" />
                </AnelloProgresso>
                <View style={styles.obiettivoTesto}>
                  <Text style={styles.obiettivoTitolo}>Obiettivo di oggi</Text>
                  <Text style={styles.obiettivoSub}>{testoObiettivo}</Text>
                  {obiettivoRaggiunto && (
                    <View style={styles.obiettivoChip}>
                      <Icona nome="checkmark-circle" size={14} color={colors.accent} />
                      <Text style={styles.obiettivoChipTesto}>COMPLETATO</Text>
                    </View>
                  )}
                </View>
              </View>

              <View style={styles.settimana}>
                <View style={styles.streakRiga}>
                  <Animated.View style={stileFiamma}>
                    <Icona
                      nome="flame"
                      size={22}
                      color={streak > 0 ? colors.streakTo : 'rgba(255,255,255,0.28)'}
                      pieno={streak > 0}
                    />
                  </Animated.View>
                  <Text style={styles.streakNumero}>
                    {streak}
                    <Text style={styles.streakNumeroLabel}>
                      {streak === 1 ? ' giorno di fila' : ' giorni di fila'}
                    </Text>
                  </Text>
                  {streak > 0 && <Monolite state="celebrating" size={40} />}
                </View>

                <View style={styles.giorni}>
                  {settimana.map((g) => (
                    <GiornoPill key={g.data} g={g} />
                  ))}
                </View>
              </View>

              {/* Dalla Home mancava un modo per iniziare a studiare. */}
              {/*
                Il pulsante porta alla lezione esatta su cui ci si è
                fermati, non all'elenco delle materie: chiedere di
                ricordarsi da soli dove si era rimasti è l'attrito che si
                paga a ogni apertura dell'app, proprio nel momento in cui
                la sessione o comincia o finisce.
              */}
              <Bottone
                label={etichettaRipresa}
                onPress={() =>
                  ripresa
                    ? navigation.navigate('Lezione', {
                        materia: ripresa.materia,
                        lezioneId: ripresa.lezione.id,
                      })
                    : navigation.navigate('Quiz')
                }
                variante="accento"
              />
              {!!ripresa && state.quizCompletati > 0 && (
                <Text style={styles.ripresaNota}>{ripresa.materia}</Text>
              )}
            </LinearGradient>
          </View>
        </Entrata>

        {/*
          Ripasso: compare solo se ci sono carte in scadenza oggi. Le
          domande sbagliate ieri e già rimesse in coda per fra tre giorni
          non devono comparire, altrimenti la scheda resta accesa per
          sempre e smette di voler dire qualcosa.
        */}
        {daRipassareOggi > 0 && (
          <Entrata ritardo={scaglione(4)}>
            <Superficie
              tono="forte"
              raggio={radius.xl}
              onPress={() => navigation.navigate('Ripasso')}
              glow={materiaColors.Ripasso.end}
              style={styles.ripassoWrap}
              contentStyle={styles.ripasso}
            >
              <LinearGradient
                colors={[materiaColors.Ripasso.start, materiaColors.Ripasso.end]}
                style={styles.ripassoIcona}
              >
                <Icona nome="refresh-circle" size={24} color={colors.accent} />
              </LinearGradient>
              <View style={styles.ripassoTesto}>
                <Text style={styles.ripassoTitolo}>Ripassa i tuoi errori</Text>
                <Text style={styles.ripassoSub}>
                  {daRipassareOggi}{' '}
                  {daRipassareOggi === 1 ? 'domanda ti aspetta' : 'domande ti aspettano'} oggi.
                </Text>
              </View>
              <Icona nome="chevron-forward" size={20} color={materiaColors.Ripasso.edge} />
            </Superficie>
          </Entrata>
        )}

        {/* Numeri complessivi, su una riga sola */}
        <Entrata ritardo={scaglione(5)}>
          <Superficie tono="vetro" raggio={radius.xl} contentStyle={styles.stats}>
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
              icona="pulse"
              tint={materiaColors['Diritto civile'].start}
            />
            <View style={styles.statsDivider} />
            <Statistica
              valore={state.quizCompletati}
              label="Lezioni"
              icona="trophy"
              tint={materiaColors['Procedura penale'].start}
            />
            <View style={styles.statsDivider} />
            <Statistica
              valore={state.tracceLette.length}
              label="Tracce"
              icona="document-text"
              tint={colors.accentEdge}
            />
            <View style={styles.statsDivider} />
            {/*
              I casi pratici mancavano da questa riga: l'esercizio più
              vicino all'orale era l'unico che non lasciava traccia nei
              numeri, e ciò che non viene contato non viene rifatto.
            */}
            <Statistica
              valore={Object.keys(state.casiSvolti).length}
              label="Casi"
              icona="mic"
              tint={materiaColors['Diritto costituzionale'].start}
            />
          </Superficie>
        </Entrata>

        <Text style={styles.sectionTitle}>
          Badge ({state.badges.length}/{BADGES.length})
        </Text>
        <View style={styles.badgeGrid}>
          {BADGES.map((badge, i) => {
            const sbloccato = state.badges.includes(badge.id);
            return (
              <Entrata key={badge.id} ritardo={scaglione(6 + i, 30)} style={styles.badgeWrap}>
                <Superficie
                  tono={sbloccato ? 'forte' : 'interno'}
                  rilievo={sbloccato ? 'media' : 'tenue'}
                  raggio={radius.lg}
                  glow={colors.accent}
                  attiva={sbloccato}
                  contentStyle={styles.badgeCard}
                >
                  <View style={[styles.badgeIconWrap, sbloccato && styles.badgeIconWrapOn]}>
                    <Icona
                      nome={badge.icona}
                      size={24}
                      color={sbloccato ? colors.accentEdge : colors.textFaint}
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
                      <Icona nome="lock-closed" size={11} color={colors.textFaint} />
                    </View>
                  )}
                </Superficie>
              </Entrata>
            );
          })}
        </View>
      </ScrollView>
    </Sfondo>
  );
}

const styles = StyleSheet.create({
  conto: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, padding: spacing.md },
  contoIcona: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: alpha.bordo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contoTesto: { flex: 1, gap: 2 },
  contoTitolo: { ...type.scheda, color: colors.text },
  contoSub: { ...type.piccolo, color: colors.textMuted },
  ripresaNota: {
    ...type.minuto,
    color: 'rgba(255,255,255,0.62)',
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  container: { flex: 1 },
  content: { padding: spacing.md, paddingBottom: SPAZIO_TAB },

  heroWrap: { borderRadius: radius.xxl },
  hero: {
    borderRadius: radius.xxl,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
    overflow: 'hidden',
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
  heroLivello: { color: colors.accent, fontSize: 12, fontWeight: '600', letterSpacing: -0.2 },
  heroPunti: { color: '#FFFFFF', fontSize: 30, fontWeight: '600', letterSpacing: -1 },
  heroPuntiLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  heroProssimo: { color: 'rgba(255,255,255,0.7)', ...type.minuto, fontWeight: '500' },

  scorciatoia: { marginTop: spacing.md },
  scorciatoiaCorpo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 4,
    padding: spacing.md - 2,
  },
  scorciatoiaIcona: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: alpha.bordo,
    backgroundColor: alpha.veloForte,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scorciatoiaTesti: { flex: 1 },
  scorciatoiaEtichetta: { ...type.etichetta, fontSize: 9.5, color: 'rgba(255,255,255,0.7)' },
  scorciatoiaTitolo: {
    ...type.scheda,
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 2,
  },
  scorciatoiaSub: {
    ...type.minuto,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.78)',
    marginTop: 2,
    lineHeight: 17,
  },

  sectionTitle: {
    ...type.sezione,
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm + 2,
  },

  obiettivoWrap: { borderRadius: radius.xxl },
  obiettivo: {
    borderRadius: radius.xxl,
    padding: spacing.md,
    gap: spacing.md,
    overflow: 'hidden',
  },
  obiettivoTop: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  obiettivoTesto: { flex: 1, gap: 4 },
  obiettivoTitolo: { color: '#FFFFFF', ...type.sezione, fontSize: 19 },
  obiettivoSub: { color: 'rgba(255,255,255,0.75)', ...type.piccolo, lineHeight: 19 },
  obiettivoChip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 4,
    backgroundColor: colors.accent,
    borderRadius: radius.pill,
    paddingHorizontal: 9,
    paddingVertical: 3,
    marginTop: 2,
  },
  obiettivoChipTesto: { ...type.etichetta, fontSize: 9.5, color: colors.primary },

  settimana: {
    gap: spacing.sm + 2,
    borderTopWidth: StyleSheet.hairlineWidth * 1.5,
    borderTopColor: 'rgba(255,255,255,0.14)',
    paddingTop: spacing.md,
  },
  streakRiga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  streakNumero: { flex: 1, color: '#FFFFFF', fontSize: 21, fontWeight: '600', letterSpacing: -0.6 },
  streakNumeroLabel: {
    color: 'rgba(255,255,255,0.62)',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: -0.1,
  },

  giorni: { flexDirection: 'row', justifyContent: 'space-between' },
  giornoCol: { alignItems: 'center', gap: 5 },
  giornoLettera: {
    ...type.etichetta,
    fontSize: 10,
    color: 'rgba(255,255,255,0.45)',
  },
  giornoLetteraOggi: { color: colors.accent },
  giorno: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.09)',
  },
  giornoAttivo: { backgroundColor: colors.streakTo },
  giornoFuturo: { backgroundColor: 'rgba(255,255,255,0.05)' },
  giornoOggi: { borderWidth: 2, borderColor: colors.accent },
  giornoPunto: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.32)',
  },
  giornoPuntoFuturo: { backgroundColor: 'rgba(255,255,255,0.16)' },

  ripassoWrap: { marginTop: spacing.md },
  ripasso: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 4,
    padding: spacing.md - 2,
  },
  ripassoIcona: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: alpha.bordo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripassoTesto: { flex: 1 },
  ripassoTitolo: { ...type.scheda, color: colors.text },
  ripassoSub: { ...type.minuto, fontWeight: '500', color: colors.textMuted, marginTop: 2 },

  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md - 2,
    paddingHorizontal: spacing.sm,
    marginTop: spacing.md,
  },
  stat: { flex: 1, alignItems: 'center', gap: 3 },
  statValore: { ...type.sezione, fontSize: 21, color: colors.text },
  statLabel: { ...type.etichetta, fontSize: 9.5, color: colors.textFaint },
  statsDivider: { width: StyleSheet.hairlineWidth * 1.5, height: 34, backgroundColor: alpha.bordo },

  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm + 2 },
  badgeWrap: { width: '47.6%' },
  badgeCard: {
    alignItems: 'center',
    padding: spacing.md - 2,
    gap: 5,
    minHeight: 156,
  },
  badgeIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: alpha.velo,
    marginBottom: 2,
  },
  badgeIconWrapOn: { backgroundColor: colors.accentSoft },
  badgeNome: {
    ...type.scheda,
    fontSize: 14.5,
    color: colors.text,
    textAlign: 'center',
  },
  badgeDescr: {
    ...type.minuto,
    fontWeight: '500',
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 16,
  },
  badgeSpento: { color: colors.textFaint },
  badgeLockPill: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: alpha.velo,
  },
});
