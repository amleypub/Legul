import React, { useMemo, useState } from 'react';
import {
  LayoutAnimation,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icona } from '../components/Icona';
import { tracce } from '../data/tracce';
import { svolgimentoDi } from '../data/svolgimenti';
import { svolgimentiRiservati, svolgimentoAccessibile } from '../data/accesso';
import { useGamification } from '../gamification/GamificationContext';
import { MuroPremium } from '../components/MuroPremium';
import type { Riferimento } from '../data/svolgimenti';
import { DA_COMPLETARE, TITOLARE } from '../data/legale';
import { argomentoTraccia } from '../discussione/modello';
import { Bottone } from '../components/Bottone';
import { Monolite } from '../components/Monolite';
import type { RootStackScreenProps } from '../navigation/types';
import { materiaDellaTraccia } from '../types';
import { alpha, colors, materiaColors, radius, spacing, type } from '../theme';

// L'animazione di apertura su Android va abilitata esplicitamente.
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function apriChiudi() {
  // Su web LayoutAnimation è un no-op: la chiamata resta innocua.
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
}

/** Pastiglia di un riferimento normativo o giurisprudenziale. */
function Pastiglia({ riferimento }: { riferimento: Riferimento }) {
  const norma = riferimento.tipo === 'norma';
  return (
    <View style={[styles.rif, norma ? styles.rifNorma : styles.rifGiuri]}>
      <Icona
        nome={norma ? 'bookmark' : 'hammer'}
        size={11}
        color={norma ? '#20399B' : '#8C1B3C'}
      />
      <Text style={[styles.rifTesto, norma ? styles.rifTestoNorma : styles.rifTestoGiuri]}>
        {riferimento.testo}
      </Text>
    </View>
  );
}

interface SezioneProps {
  titolo: string;
  sintesi?: string;
  icona: string;
  tinta: string;
  aperta: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

/**
 * Sezione che si apre e si chiude.
 *
 * Tutto parte chiuso e nessun ordine è imposto: chi vuole leggere prima
 * le trappole lo fa. Il punto della progressione non è impedire, è non
 * mettere lo svolgimento sotto gli occhi di chi non ha ancora provato.
 */
function Sezione({ titolo, sintesi, icona, tinta, aperta, onToggle, children }: SezioneProps) {
  return (
    <View style={styles.sezioneWrap}>
      <View style={styles.sezione}>
        <Pressable
          onPress={() => {
            apriChiudi();
            onToggle();
          }}
          accessibilityRole="button"
          accessibilityState={{ expanded: aperta }}
          style={({ pressed }) => [styles.sezioneTesta, pressed && styles.sezionePremuta]}
        >
          <View style={[styles.sezioneIcona, { backgroundColor: tinta }]}>
            <Icona nome={icona} size={17} color="#FFFFFF" />
          </View>
          <View style={styles.sezioneTesti}>
            <Text style={styles.sezioneTitolo}>{titolo}</Text>
            {!!sintesi && (
              <Text style={styles.sezioneSintesi} numberOfLines={aperta ? undefined : 2}>
                {sintesi}
              </Text>
            )}
          </View>
          <Icona
            nome={aperta ? 'chevron-up' : 'chevron-down'}
            size={18}
            color="#9AA3B2"
            style={styles.sezioneFreccia}
          />
        </Pressable>
        {aperta && <View style={styles.sezioneCorpo}>{children}</View>}
      </View>
    </View>
  );
}

export default function SvolgimentoScreen({
  route,
  navigation,
}: RootStackScreenProps<'Svolgimento'>) {
  const { tracciaId } = route.params;
  const traccia = tracce.find((t) => t.id === tracciaId);
  const svolgimento = svolgimentoDi(tracciaId);
  const { state } = useGamification();
  const accessibile = svolgimentoAccessibile(tracciaId, state.premium);

  const [aperte, setAperte] = useState<Record<string, boolean>>({});
  /** Voci della griglia che l'utente si è riconosciuto. */
  const [prese, setPrese] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setAperte((s) => ({ ...s, [id]: !s[id] }));

  const punteggio = useMemo(() => {
    if (!svolgimento) return 0;
    return svolgimento.griglia.reduce((acc, v) => acc + (prese[v.voce] ? v.peso : 0), 0);
  }, [svolgimento, prese]);

  if (!traccia || !svolgimento) {
    return (
      <View style={styles.vuoto}>
        <Monolite state="studying" size={96} />
        <Text style={styles.vuotoTitolo}>Svolgimento non disponibile</Text>
        <Text style={styles.vuotoTesto}>
          Per questa traccia non è ancora pubblicato uno svolgimento proposto. Nel frattempo puoi
          confrontarti con gli altri candidati nella discussione.
        </Text>
        <Bottone
          label="Torna alla traccia"
          onPress={() => navigation.goBack()}
          variante="scuro"
          style={styles.vuotoBtn}
        />
      </View>
    );
  }

  const tinte = materiaColors[materiaDellaTraccia(traccia.tipo)];

  /*
   * Il controllo sta qui e non solo sulla scheda della traccia: a questa
   * schermata si arriva anche per collegamento diretto, e un muro che si
   * aggira scrivendo un indirizzo non è un muro.
   */
  if (!accessibile) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contenutoMuro}>
        <MuroPremium
          cosa="Questo svolgimento"
          motivo={`Le questioni da individuare, i contrasti giurisprudenziali con le pronunce di entrambi gli orientamenti e la griglia per rileggerti. Su «${traccia.titolo}» e su tutte le altre tracce in archivio.`}
          quantiAltri={svolgimentiRiservati()}
          onSblocca={() => navigation.navigate('Paywall')}
          onIndietro={() => navigation.goBack()}
          etichettaIndietro="Torna alla traccia"
        />
      </ScrollView>
    );
  }

  /**
   * La segnalazione ha bisogno di un recapito pubblico. Finché l'indirizzo
   * del titolare non è compilato, il pulsante non finge di funzionare:
   * porta nella discussione, che è comunque un canale che esiste.
   */
  const emailPubblica = TITOLARE.email !== DA_COMPLETARE ? TITOLARE.email : null;
  const segnala = () => {
    if (emailPubblica) {
      const oggetto = `Segnalazione svolgimento — ${traccia.titolo}`;
      const corpo =
        `Traccia: ${traccia.id}\n` +
        `Aggiornato al: ${svolgimento.aggiornatoAl}\n\n` +
        'Che cosa non torna:\n';
      Linking.openURL(
        `mailto:${emailPubblica}?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(corpo)}`
      ).catch(() => undefined);
      return;
    }
    navigation.navigate('Discussione', {
      argomento: argomentoTraccia(traccia.id),
      titolo: traccia.titolo,
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.testataWrap}>
        {/* La materia resta un velo e un bordo, non un blocco pieno: su
            una schermata che si legge come un testo, una fascia satura
            in testa la faceva sembrare una scheda promozionale. */}
        <LinearGradient
          colors={[tinte.soft, alpha.vetroInterno]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.testata, { borderColor: `${tinte.edge}38` }]}
        >
          {/* L'occhiello non ripete l'intestazione della schermata: dice
              di che prova si tratta, che è l'informazione mancante. */}
          <Text style={[styles.occhiello, { color: tinte.edge }]}>{traccia.tipo}</Text>
          <Text style={styles.titolo}>{traccia.titolo}</Text>
          <Text style={styles.sottotitolo}>{traccia.sessione}</Text>
        </LinearGradient>
      </View>

      {/* Il nudge che dà senso a tutto il resto: aprire lo svolgimento
          senza aver provato vale poco più che leggere un manuale. */}
      <View style={styles.provaCard}>
        <Icona nome="stopwatch-outline" size={20} color={colors.accentEdge} />
        <Text style={styles.provaTesto}>
          <Text style={styles.provaForte}>Prima prova tu.</Text> Le sezioni qui sotto sono chiuse
          apposta: aprirle senza aver almeno impostato la traccia toglie alla lettura quasi tutto il
          suo valore.
        </Text>
      </View>

      <Sezione
        titolo="Questioni da individuare"
        sintesi="Che cosa la traccia nasconde. Confrontale con quelle che hai visto tu."
        icona="search"
        tinta={colors.primary}
        aperta={!!aperte.questioni}
        onToggle={() => toggle('questioni')}
      >
        {svolgimento.questioni.map((q, i) => (
          <View key={q} style={styles.voce}>
            <View style={styles.voceNumero}>
              <Text style={styles.voceNumeroTesto}>{i + 1}</Text>
            </View>
            <Text style={styles.voceTesto}>{q}</Text>
          </View>
        ))}
      </Sezione>

      <View style={styles.divisorio}>
        <Text style={styles.divisorioTesto}>Svolgimento</Text>
      </View>

      {svolgimento.blocchi.map((b) => (
        <Sezione
          key={b.id}
          titolo={b.titolo}
          sintesi={b.sintesi}
          icona="document-text"
          tinta={tinte.end}
          aperta={!!aperte[b.id]}
          onToggle={() => toggle(b.id)}
        >
          {b.paragrafi.map((p, i) => (
            <Text key={i} style={styles.paragrafo}>
              {p}
            </Text>
          ))}
          <View style={styles.rifRiga}>
            {b.riferimenti.map((r) => (
              <Pastiglia key={r.testo} riferimento={r} />
            ))}
          </View>
        </Sezione>
      ))}

      {svolgimento.contrasti.length > 0 && (
        <>
          <View style={styles.divisorio}>
            <Text style={styles.divisorioTesto}>Dove la giurisprudenza si divide</Text>
          </View>

          {/* Nessuno qui sceglie il vincitore: si espongono le tesi con i
              loro argomenti e si dice che cosa cambia in concreto. */}
          {svolgimento.contrasti.map((c) => (
            <Sezione
              key={c.id}
              titolo={c.questione}
              icona="git-compare"
              tinta="#B92E56"
              aperta={!!aperte[c.id]}
              onToggle={() => toggle(c.id)}
            >
              {c.orientamenti.map((o, i) => (
                <View key={o.tesi} style={styles.orientamento}>
                  <View style={styles.orientamentoTesta}>
                    <Text style={styles.orientamentoEtichetta}>
                      {i === 0 ? 'Primo orientamento' : 'Secondo orientamento'}
                    </Text>
                  </View>
                  <Text style={styles.orientamentoTesi}>{o.tesi}</Text>
                  <Text style={styles.orientamentoArgomento}>{o.argomento}</Text>
                  <View style={styles.rifRiga}>
                    {o.riferimenti.map((r) => (
                      <Pastiglia key={r.testo} riferimento={r} />
                    ))}
                  </View>
                </View>
              ))}
              <View style={styles.ricaduta}>
                <Icona nome="arrow-forward-circle" size={16} color={colors.accentEdge} />
                <Text style={styles.ricadutaTesto}>
                  <Text style={styles.ricadutaEtichetta}>Che cosa cambia. </Text>
                  {c.ricaduta}
                </Text>
              </View>
            </Sezione>
          ))}
        </>
      )}

      <View style={styles.divisorio}>
        <Text style={styles.divisorioTesto}>Prima di consegnare</Text>
      </View>

      <Sezione
        titolo="Trappole ricorrenti"
        sintesi="Gli errori che tornano negli elaborati, non consigli generici."
        icona="warning"
        tinta={colors.error}
        aperta={!!aperte.trappole}
        onToggle={() => toggle('trappole')}
      >
        {svolgimento.trappole.map((t) => (
          <View key={t} style={styles.voce}>
            <Icona nome="alert-circle" size={17} color={colors.error} style={styles.voceIcona} />
            <Text style={styles.voceTesto}>{t}</Text>
          </View>
        ))}
      </Sezione>

      <Sezione
        titolo="Griglia di autovalutazione"
        sintesi="Rileggi il tuo elaborato e segna che cosa ci hai messo davvero."
        icona="checkbox"
        tinta={colors.successEdge}
        aperta={!!aperte.griglia}
        onToggle={() => toggle('griglia')}
      >
        {svolgimento.griglia.map((v) => {
          const presa = !!prese[v.voce];
          return (
            <Pressable
              key={v.voce}
              onPress={() => setPrese((s) => ({ ...s, [v.voce]: !s[v.voce] }))}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: presa }}
              style={({ pressed }) => [styles.griglia, pressed && styles.grigliaPremuta]}
            >
              <Icona
                nome={presa ? 'checkbox' : 'square-outline'}
                size={22}
                color={presa ? colors.successEdge : '#B6BECC'}
              />
              <View style={styles.grigliaTesti}>
                <Text style={[styles.grigliaVoce, presa && styles.grigliaVocePresa]}>{v.voce}</Text>
                <Text style={styles.grigliaCriterio}>{v.criterio}</Text>
              </View>
              <Text style={styles.grigliaPeso}>{v.peso}</Text>
            </Pressable>
          );
        })}
        <View style={styles.totale}>
          <Text style={styles.totaleEtichetta}>Punti che ti sei riconosciuto</Text>
          <Text style={styles.totaleValore}>{punteggio}/100</Text>
        </View>
        <Text style={styles.totaleNota}>
          Il totale è un promemoria per te: nessuna commissione usa questa griglia, e i pesi sono
          una nostra ripartizione ragionata, non un criterio ufficiale.
        </Text>
      </Sezione>

      <View style={styles.chiusura}>
        <Text style={styles.disclaimer}>
          Questo è uno svolgimento proposto, non una soluzione ufficiale: all’esame non esiste un
          elaborato esatto depositato da qualche parte, esiste un ragionamento che regge. Verifica
          sempre norme e pronunce sull’edizione aggiornata dei codici.
        </Text>
        <Text style={styles.aggiornato}>
          Contenuti aggiornati al {svolgimento.aggiornatoAl}.
        </Text>

        <Pressable
          onPress={segnala}
          accessibilityRole="button"
          style={({ pressed }) => [styles.segnala, pressed && styles.segnalaPremuto]}
        >
          <Icona nome="flag-outline" size={16} color={colors.textMuted} />
          <Text style={styles.segnalaTesto}>
            {emailPubblica ? 'Segnala un errore' : 'Segnala un errore nella discussione'}
          </Text>
        </Pressable>

        <Bottone
          label="Confrontati con gli altri"
          onPress={() =>
            navigation.navigate('Discussione', {
              argomento: argomentoTraccia(traccia.id),
              titolo: traccia.titolo,
            })
          }
          variante="accento"
          style={styles.chiusuraBtn}
        />
      </View>
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
  vuotoTitolo: { fontSize: 20, fontWeight: '600', color: colors.text },
  vuotoTesto: { fontSize: 14, color: colors.textMuted, textAlign: 'center', lineHeight: 20 },
  vuotoBtn: { alignSelf: 'stretch', marginTop: spacing.md },

  testataWrap: { },
  testata: { borderRadius: radius.xl, borderWidth: 1, padding: spacing.md, gap: 3 },
  occhiello: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.85)',
  },
  titolo: { fontSize: 20, fontWeight: '700', color: '#FFFFFF', lineHeight: 26 },
  sottotitolo: { fontSize: 12.5, color: colors.textMuted, fontWeight: '600' },

  provaCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: alpha.vetro,
    borderRadius: radius.lg,
    borderLeftWidth: 2,
    borderLeftColor: colors.accentEdge,
    padding: spacing.md - 2,
    marginTop: spacing.md,
  },
  provaTesto: { flex: 1, fontSize: 13.5, color: colors.text, lineHeight: 20 },
  provaForte: { fontWeight: '600' },

  divisorio: { marginTop: spacing.lg, marginBottom: spacing.sm, paddingHorizontal: 2 },
  divisorioTesto: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },

  sezioneWrap: { marginTop: spacing.sm },
  sezione: { backgroundColor: alpha.vetroForte, borderRadius: radius.xl, overflow: 'hidden' },
  // Le domande dei contrasti occupano anche cinque righe: icona e freccia
  // si allineano alla prima riga, non al centro di un blocco alto.
  sezioneTesta: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm + 2,
    padding: spacing.md - 3,
  },
  sezionePremuta: { backgroundColor: alpha.veloForte },
  sezioneIcona: {
    width: 34,
    height: 34,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sezioneFreccia: { marginTop: 8 },
  sezioneTesti: { flex: 1 },
  sezioneTitolo: { fontSize: 15, fontWeight: '600', color: colors.text, lineHeight: 20 },
  sezioneSintesi: { fontSize: 12.5, color: colors.textMuted, marginTop: 2, lineHeight: 17 },
  sezioneCorpo: {
    paddingHorizontal: spacing.md - 3,
    paddingBottom: spacing.md - 3,
    paddingTop: 2,
    borderTopWidth: 1,
    borderTopColor: alpha.velo,
    marginTop: 2,
  },

  // I paragrafi dello svolgimento si leggono come una pagina stampata.
  paragrafo: { ...type.corpoLungo, fontSize: 15.5, color: colors.text, marginTop: spacing.sm + 2 },

  voce: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm, marginTop: spacing.sm + 2 },
  voceIcona: { marginTop: 2 },
  voceNumero: {
    width: 22,
    height: 22,
    borderRadius: 8,
    backgroundColor: alpha.velo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voceNumeroTesto: { fontSize: 12, fontWeight: '600', color: colors.primary },
  voceTesto: { flex: 1, fontSize: 14, color: colors.text, lineHeight: 21 },

  rifRiga: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: spacing.md - 2 },
  rif: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: radius.sm,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  rifNorma: { backgroundColor: alpha.velo },
  rifGiuri: { backgroundColor: colors.errorSoft },
  rifTesto: { fontSize: 11.5, fontWeight: '700' },
  rifTestoNorma: { color: '#20399B' },
  rifTestoGiuri: { color: colors.error },

  orientamento: {
    backgroundColor: alpha.velo,
    borderRadius: radius.lg,
    padding: spacing.md - 4,
    marginTop: spacing.sm + 2,
  },
  orientamentoTesta: { flexDirection: 'row' },
  orientamentoEtichetta: {
    fontSize: 10.5,
    fontWeight: '600',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  orientamentoTesi: {
    fontSize: 14.5,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 21,
    marginTop: 4,
  },
  orientamentoArgomento: { fontSize: 14, color: colors.text, lineHeight: 23, marginTop: 6 },

  ricaduta: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    backgroundColor: alpha.vetro,
    borderRadius: radius.lg,
    borderLeftWidth: 2,
    borderLeftColor: colors.accentEdge,
    padding: spacing.md - 4,
    marginTop: spacing.sm + 2,
  },
  ricadutaTesto: { flex: 1, fontSize: 13.5, color: colors.text, lineHeight: 21 },
  ricadutaEtichetta: { fontWeight: '600' },

  griglia: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: radius.md,
  },
  grigliaPremuta: { backgroundColor: alpha.veloForte },
  grigliaTesti: { flex: 1 },
  grigliaVoce: { fontSize: 14.5, fontWeight: '700', color: colors.text },
  grigliaVocePresa: { color: colors.successEdge },
  grigliaCriterio: { fontSize: 12.5, color: colors.textMuted, marginTop: 2, lineHeight: 18 },
  grigliaPeso: {
    fontSize: 12.5,
    fontWeight: '600',
    color: colors.textMuted,
    backgroundColor: alpha.velo,
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: 'hidden',
  },
  totale: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.successSoft,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md - 4,
    paddingVertical: 11,
    marginTop: spacing.sm,
  },
  totaleEtichetta: { fontSize: 13.5, fontWeight: '700', color: colors.text },
  totaleValore: { fontSize: 17, fontWeight: '700', color: colors.successEdge },
  totaleNota: { fontSize: 12, color: colors.textMuted, lineHeight: 18, marginTop: spacing.sm },

  chiusura: {
    marginTop: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: alpha.bordo,
    gap: spacing.sm,
  },
  disclaimer: { fontSize: 12.5, color: colors.textMuted, lineHeight: 19 },
  aggiornato: { fontSize: 12.5, color: colors.textMuted, fontWeight: '700' },
  segnala: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: radius.pill,
    backgroundColor: alpha.velo,
  },
  segnalaPremuto: { backgroundColor: '#DCE2ED' },
  segnalaTesto: { fontSize: 13, fontWeight: '700', color: colors.textMuted },
  chiusuraBtn: { alignSelf: 'stretch', marginTop: spacing.sm },
});
