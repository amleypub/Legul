import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Icona } from '../components/Icona';
import { useGamification } from '../gamification/GamificationContext';
import { Bottone } from '../components/Bottone';
import {
  CASI_IN_PROVA,
  casiRiservati,
  SVOLGIMENTI_IN_PROVA,
  svolgimentiRiservati,
} from '../data/accesso';
import type { RootStackScreenProps } from '../navigation/types';
import { alone, alpha, colors, molla, radius, spacing, SCALA_PRESSIONE, type } from '../theme';

/**
 * Che cosa si compra.
 *
 * L'elenco è costruito sui numeri veri, contati dai dati: se domani
 * arriva un altro svolgimento la promessa si aggiorna da sola. Un
 * paywall che dice «contenuti esclusivi» chiede di fidarsi; uno che dice
 * «otto svolgimenti e cinque casi» si può verificare, ed è l'unica
 * differenza che conta quando qualcuno sta per pagare cinquanta euro.
 */
function vantaggi(): string[] {
  const svolgimenti = svolgimentiRiservati();
  const casi = casiRiservati();
  return [
    `${svolgimenti} svolgimenti completi delle tracce d'esame degli anni passati`,
    'Ogni svolgimento con i contrasti giurisprudenziali, le trappole e la griglia con cui la commissione assegna il voto',
    `${casi} casi pratici in più nel simulatore dell'orale, cronometrati come davanti alla commissione`,
    "Nuove tracce e nuovi casi a ogni sessione d'esame, senza pagare di nuovo",
  ];
}

/**
 * Il confronto.
 *
 * Sta prima dei prezzi perché la domanda che viene prima del «quanto
 * costa» è «che cosa mi manca se non pago», e nasconderla non la fa
 * sparire: la fa diventare sospetto. La colonna gratuita è generosa sul
 * serio — l'intero percorso quiz — e dirlo apertamente rende credibile
 * anche l'altra colonna.
 */
function confronto(): { voce: string; gratis: string; premium: string }[] {
  return [
    { voce: 'Percorso quiz', gratis: 'Tutto', premium: 'Tutto' },
    { voce: 'Tracce e testi', gratis: 'Tutti', premium: 'Tutti' },
    {
      voce: 'Svolgimenti',
      gratis: `${SVOLGIMENTI_IN_PROVA.length} di prova`,
      premium: 'Tutti',
    },
    {
      voce: 'Simulatore orale',
      gratis: CASI_IN_PROVA.length === 1 ? '1 caso' : `${CASI_IN_PROVA.length} casi`,
      premium: 'Tutti',
    },
  ];
}

type Piano = 'mensile' | 'annuale';

const PREZZO_MENSILE = 7.99;
const PREZZO_ANNUALE = 49.99;
const GIORNI_PROVA = 7;

/** Card di un piano: si abbassa quando la scegli. */
function CartaPiano({
  nome,
  prezzo,
  dettaglio,
  etichetta,
  attivo,
  onPress,
}: {
  nome: string;
  prezzo: string;
  dettaglio: string;
  etichetta?: string;
  attivo: boolean;
  onPress: () => void;
}) {
  const premuto = useSharedValue(0);
  const stileAnimato = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - premuto.value * (1 - SCALA_PRESSIONE) }],
  }));

  return (
    <Pressable
      style={styles.pianoPress}
      onPressIn={() => {
        premuto.value = withSpring(1, molla.tocco);
      }}
      onPressOut={() => {
        premuto.value = withSpring(0, molla.tocco);
      }}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected: attivo }}
      accessibilityLabel={`${nome}, ${prezzo}, ${dettaglio}`}
    >
      <Animated.View
        style={[
          styles.piano,
          attivo && styles.pianoAttivo,
          attivo && alone(colors.accent, 'tenue'),
          stileAnimato,
        ]}
      >
        {etichetta ? (
          <View style={[styles.pianoBadge, !attivo && styles.pianoBadgeSpento]}>
            <Text style={[styles.pianoBadgeTesto, !attivo && styles.pianoBadgeTestoSpento]}>
              {etichetta}
            </Text>
          </View>
        ) : (
          <View style={styles.pianoBadgeVuoto} />
        )}
        <Text style={styles.pianoNome}>{nome}</Text>
        <Text style={styles.pianoPrezzo}>{prezzo}</Text>
        <Text style={styles.pianoDettaglio}>{dettaglio}</Text>
        {attivo && (
          <View style={styles.pianoSpunta}>
            <Icona nome="checkmark" size={15} color={colors.accent} />
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
}

function euro(v: number): string {
  return `${v.toFixed(2).replace('.', ',')} €`;
}

export default function PaywallScreen({ navigation }: RootStackScreenProps<'Paywall'>) {
  const { attivaPremium } = useGamification();
  const [piano, setPiano] = useState<Piano>('annuale');
  const elenco = vantaggi();
  const righe = confronto();

  const conProva = piano === 'annuale';

  return (
    <LinearGradient colors={['#0C1017', '#07090D']} style={styles.gradient}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <ScrollView contentContainerStyle={styles.content}>
          <Pressable onPress={() => navigation.goBack()} hitSlop={12} style={styles.chiudi}>
            <Icona nome="close" size={28} color="rgba(255,255,255,0.7)" />
          </Pressable>

          <LinearGradient
            colors={['rgba(201,162,39,0.16)', 'rgba(201,162,39,0.04)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.coronaBubble, alone(colors.accent)]}
          >
            <Icona nome="crown" size={40} color={colors.accent} />
          </LinearGradient>
          <Text style={styles.titolo}>Legul Premium</Text>
          <Text style={styles.sottotitolo}>
            I quiz restano gratuiti per sempre. Premium apre la parte che si scrive: gli
            svolgimenti delle tracce e il simulatore dell'orale.
          </Text>

          <View style={styles.vantaggi}>
            {elenco.map((v) => (
              <View key={v} style={styles.vantaggioRiga}>
                <Icona nome="checkmark-circle" size={22} color={colors.accent} />
                <Text style={styles.vantaggioTesto}>{v}</Text>
              </View>
            ))}
          </View>

          <View style={styles.tabella}>
            <View style={styles.tabellaIntestazione}>
              <Text style={[styles.tabellaVoce, styles.tabellaTitolo]}> </Text>
              <Text style={[styles.tabellaCella, styles.tabellaTitolo]}>Gratis</Text>
              <Text style={[styles.tabellaCella, styles.tabellaTitolo, styles.tabellaOro]}>
                Premium
              </Text>
            </View>
            {righe.map((r) => (
              <View key={r.voce} style={styles.tabellaRiga}>
                <Text style={styles.tabellaVoce}>{r.voce}</Text>
                <Text style={styles.tabellaCella}>{r.gratis}</Text>
                <Text style={[styles.tabellaCella, styles.tabellaOro]}>{r.premium}</Text>
              </View>
            ))}
          </View>

          <View style={styles.piani}>
            <CartaPiano
              nome="Annuale"
              prezzo={euro(PREZZO_ANNUALE)}
              dettaglio={`${euro(PREZZO_ANNUALE / 12)} al mese`}
              etichetta={`${GIORNI_PROVA} GIORNI GRATIS`}
              attivo={piano === 'annuale'}
              onPress={() => setPiano('annuale')}
            />
            <CartaPiano
              nome="Mensile"
              prezzo={euro(PREZZO_MENSILE)}
              dettaglio="ogni mese"
              attivo={piano === 'mensile'}
              onPress={() => setPiano('mensile')}
            />
          </View>

          {/*
            Il conto per esteso invece della percentuale. «Risparmi il 48%»
            è una cifra che nessuno può verificare senza fare la
            moltiplicazione a mente; scritta la moltiplicazione, il
            risparmio si vede e non c'è niente da credere sulla parola.
          */}
          <Text style={styles.confronto}>
            Dodici mesi al piano mensile costano {euro(PREZZO_MENSILE * 12)}. L'annuale costa{' '}
            {euro(PREZZO_ANNUALE)}: {euro(PREZZO_MENSILE * 12 - PREZZO_ANNUALE)} in meno.
          </Text>

          <Bottone
            label={conProva ? `Inizia i ${GIORNI_PROVA} giorni gratis` : 'Attiva Premium'}
            onPress={() => {
              attivaPremium();
              navigation.goBack();
            }}
            variante="accento"
            style={styles.cta}
          />

          {/*
            Le condizioni della prova stanno sotto il pulsante e non in
            fondo alla pagina. Una prova gratuita di cui si scopre dopo
            che si rinnova da sola è il motivo per cui la gente diffida
            delle prove gratuite: dirlo prima costa qualche conversione e
            ne salva molte di più al momento del rimborso.
          */}
          <Text style={styles.condizioni}>
            {conProva
              ? `Nessun addebito per ${GIORNI_PROVA} giorni. Al termine parte l'abbonamento annuale a ${euro(
                  PREZZO_ANNUALE
                )}, se non disdici prima. Puoi disdire in qualsiasi momento dalle impostazioni del tuo account App Store o Google Play.`
              : `${euro(
                  PREZZO_MENSILE
                )} al mese, rinnovo automatico. Puoi disdire in qualsiasi momento dalle impostazioni del tuo account App Store o Google Play.`}
          </Text>

          <View style={styles.piedino}>
            <Pressable
              hitSlop={8}
              onPress={() =>
                Alert.alert(
                  'Ripristina acquisti',
                  "Gli acquisti in-app non sono ancora attivi in questa versione. Quando lo saranno, questo pulsante recupererà l'abbonamento già pagato senza doverlo comprare di nuovo."
                )
              }
            >
              <Text style={styles.link}>Ripristina acquisti</Text>
            </Pressable>
            <Text style={styles.separatore}>·</Text>
            <Pressable
              hitSlop={8}
              onPress={() => navigation.navigate('DocumentoLegale', { documento: 'termini' })}
            >
              <Text style={styles.link}>Termini</Text>
            </Pressable>
            <Text style={styles.separatore}>·</Text>
            <Pressable
              hitSlop={8}
              onPress={() => navigation.navigate('DocumentoLegale', { documento: 'privacy' })}
            >
              <Text style={styles.link}>Privacy</Text>
            </Pressable>
          </View>

          <Text style={styles.nota}>
            Prezzi di esempio. L'acquisto in-app (App Store / Google Play) sarà integrato prima
            della pubblicazione: per ora il pulsante attiva Premium in modalità demo, per provare i
            contenuti riservati.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1 },
  content: { padding: spacing.lg, alignItems: 'center', paddingBottom: spacing.xl },
  chiudi: { alignSelf: 'flex-start' },
  coronaBubble: {
    width: 84,
    height: 84,
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
  },
  titolo: { ...type.titolo, color: '#FFFFFF', marginTop: spacing.md },
  sottotitolo: {
    ...type.corpo,
    color: 'rgba(255,255,255,0.78)',
    textAlign: 'center',
    marginTop: spacing.xs,
    maxWidth: 340,
  },
  vantaggi: { alignSelf: 'stretch', marginTop: spacing.lg, gap: spacing.sm },
  vantaggioRiga: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm },
  vantaggioTesto: { ...type.corpo, flex: 1, color: '#FFFFFF' },

  tabella: {
    alignSelf: 'stretch',
    marginTop: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: 'rgba(255,255,255,0.14)',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  tabellaIntestazione: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    borderBottomWidth: StyleSheet.hairlineWidth * 1.5,
    borderBottomColor: 'rgba(255,255,255,0.14)',
  },
  tabellaRiga: { flexDirection: 'row', alignItems: 'center', paddingVertical: 7 },
  tabellaVoce: { ...type.piccolo, flex: 1.5, color: 'rgba(255,255,255,0.82)' },
  tabellaCella: {
    ...type.piccolo,
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    color: 'rgba(255,255,255,0.6)',
  },
  tabellaTitolo: { ...type.etichetta, color: 'rgba(255,255,255,0.55)' },
  tabellaOro: { color: colors.accent },

  piani: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: spacing.sm,
    alignSelf: 'stretch',
    marginTop: spacing.lg,
  },
  pianoPress: { flex: 1 },
  // Sfondo pieno (non traslucido) così il gradiente di fondo non sporca
  // il colore delle due carte in modo diverso a seconda dell'altezza.
  piano: {
    flex: 1,
    backgroundColor: alpha.vetro,
    borderRadius: radius.xl,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.16)',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
  },
  pianoAttivo: { borderColor: colors.accent, backgroundColor: 'rgba(201,162,39,0.10)' },
  // Altezza fissa condivisa col segnaposto, così i due piani restano allineati.
  pianoBadge: {
    height: 22,
    justifyContent: 'center',
    backgroundColor: colors.accent,
    borderRadius: radius.pill,
    paddingHorizontal: 9,
    marginBottom: spacing.sm,
  },
  pianoBadgeSpento: { backgroundColor: 'rgba(255,255,255,0.16)' },
  pianoBadgeVuoto: { height: 22, marginBottom: spacing.sm },
  pianoBadgeTesto: { ...type.etichetta, fontSize: 9, letterSpacing: 0.6, color: colors.primary },
  pianoBadgeTestoSpento: { color: 'rgba(255,255,255,0.85)' },
  pianoNome: { ...type.scheda, color: '#FFFFFF' },
  pianoPrezzo: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.9,
    color: '#FFFFFF',
    marginTop: 4,
    fontVariant: ['tabular-nums'],
  },
  pianoDettaglio: {
    ...type.minuto,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2,
    textAlign: 'center',
  },
  pianoSpunta: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  confronto: {
    ...type.minuto,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.62)',
    textAlign: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
    maxWidth: 340,
  },
  cta: { alignSelf: 'stretch' },
  condizioni: {
    ...type.minuto,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.62)',
    textAlign: 'center',
    marginTop: spacing.sm,
    maxWidth: 340,
  },
  piedino: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  link: { ...type.piccolo, fontWeight: '600', color: 'rgba(255,255,255,0.8)' },
  separatore: { ...type.piccolo, color: 'rgba(255,255,255,0.35)' },
  nota: {
    ...type.minuto,
    fontWeight: '400',
    color: 'rgba(255,255,255,0.45)',
    textAlign: 'center',
    marginTop: spacing.md,
  },
});
