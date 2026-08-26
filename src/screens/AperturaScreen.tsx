import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Bottone } from '../components/Bottone';
import { Entrata } from '../components/Entrata';
import { Icona } from '../components/Icona';
import { Monolite } from '../components/Monolite';
import { Sfondo } from '../components/Sfondo';
import { Superficie } from '../components/Superficie';
import { useGamification } from '../gamification/GamificationContext';
import { oggiISO, piuGiorni } from '../gamification/ripasso';
import {
  giorniAllEsame,
  SCELTE_MATERIA,
  SCELTE_PROCEDURA,
  SCELTE_SCRITTI,
  testoConto,
  type MateriaScelta,
  type MateriaScritti,
  type ProceduraOrale,
} from '../data/scelte';
import { alone, alpha, colors, materiaColors, radius, spacing, type } from '../theme';

/**
 * Le domande d'apertura.
 *
 * Prima l'app si apriva sulla Home e basta: nove materie tutte uguali,
 * nessuna idea di che cosa il candidato debba effettivamente portare.
 * Dopo la riforma del 2026 quasi tutto è a scelta — la materia dei due
 * scritti, la procedura, una materia su sei all'orale — e un piano di
 * studio che ignora quelle scelte è il piano di nessuno.
 *
 * Tre regole:
 *
 * 1. **Si può saltare tutto, da subito.** Chi vuole solo vedere com'è
 *    fatta l'app deve poterci entrare. Le stesse domande stanno anche nel
 *    Profilo, e si possono fare dopo.
 * 2. **Niente permessi.** Non si chiedono qui le notifiche: chiedere il
 *    permesso prima che l'app abbia dimostrato di valere qualcosa è il
 *    modo più affidabile di farselo negare per sempre. La proposta arriva
 *    dopo la prima lezione.
 * 3. **La verità sulle materie scoperte.** Tre delle sei materie della
 *    rosa non hanno ancora un percorso: chi le sceglie se lo sente dire
 *    adesso, non dopo settimane passate a cercarle.
 */

type Passo = 'benvenuto' | 'scritti' | 'procedura' | 'materia' | 'data';

const PASSI: Passo[] = ['benvenuto', 'scritti', 'procedura', 'materia', 'data'];

/** Scadenze proposte per la data: settimane tonde, più «non lo so ancora». */
const ORIZZONTI = [
  { etichetta: 'Fra circa 3 mesi', giorni: 90 },
  { etichetta: 'Fra circa 6 mesi', giorni: 180 },
  { etichetta: 'Fra circa un anno', giorni: 365 },
];

function Opzione({
  titolo,
  nota,
  scelta,
  avviso,
  tinta,
  onPress,
}: {
  titolo: string;
  nota: string;
  scelta: boolean;
  avviso?: string;
  tinta: string;
  onPress: () => void;
}) {
  return (
    <Superficie
      tono={scelta ? 'forte' : 'vetro'}
      raggio={radius.xl}
      rilievo={scelta ? 'media' : 'tenue'}
      glow={scelta ? tinta : undefined}
      onPress={onPress}
      contentStyle={styles.opzione}
      style={styles.opzioneWrap}
    >
      <View style={[styles.pallino, { borderColor: scelta ? tinta : alpha.bordoMarcato }]}>
        {scelta && <View style={[styles.pallinoPieno, { backgroundColor: tinta }]} />}
      </View>
      <View style={styles.opzioneTesto}>
        <Text style={styles.opzioneTitolo}>{titolo}</Text>
        <Text style={styles.opzioneNota}>{nota}</Text>
        {!!avviso && (
          <View style={styles.avviso}>
            <Icona nome="alert-circle" size={13} color={colors.accentEdge} />
            <Text style={styles.avvisoTesto}>{avviso}</Text>
          </View>
        )}
      </View>
    </Superficie>
  );
}

export default function AperturaScreen() {
  const { state, aggiornaEsame, chiudiApertura } = useGamification();
  const [passo, setPasso] = useState<Passo>('benvenuto');
  const indice = PASSI.indexOf(passo);

  const giorni = useMemo(
    () => (state.esame.dataEsame ? giorniAllEsame(state.esame.dataEsame, oggiISO()) : null),
    [state.esame.dataEsame]
  );

  function avanti() {
    if (indice >= PASSI.length - 1) chiudiApertura();
    else setPasso(PASSI[indice + 1]);
  }

  const puoAvanzare =
    passo === 'benvenuto' ||
    passo === 'data' ||
    (passo === 'scritti' && !!state.esame.scritti) ||
    (passo === 'procedura' && !!state.esame.procedura) ||
    (passo === 'materia' && !!state.esame.materiaScelta);

  return (
    <Sfondo tinta={colors.accent}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        {/* Il conto dei passi è visibile fin dall'inizio: quattro domande
            annunciate si fanno, quattro domande a sorpresa si abbandonano. */}
        <View style={styles.barra}>
          {PASSI.map((p, i) => (
            <View
              key={p}
              style={[styles.tacca, i <= indice && styles.taccaPiena, i === 0 && styles.taccaPrima]}
            />
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.contenuto} showsVerticalScrollIndicator={false}>
          {passo === 'benvenuto' && (
            <Entrata>
              <View style={styles.centro}>
                <Monolite state="celebrating" size={120} />
                <Text style={styles.titolo}>Quattro domande, poi si comincia</Text>
                <Text style={styles.testo}>
                  Dalla sessione 2026-2027 l’esame è quasi tutto a scelta: la materia dei due
                  scritti, la procedura all’orale, una materia su sei. Dicci che cosa porti e il
                  percorso si adatta. Puoi cambiare idea quando vuoi dal Profilo.
                </Text>
              </View>
            </Entrata>
          )}

          {passo === 'scritti' && (
            <Entrata>
              <Text style={styles.domanda}>Su quale materia porti le prove scritte?</Text>
              <Text style={styles.sottodomanda}>
                Parere e atto si sostengono nella stessa terna: civile, penale o amministrativo.
              </Text>
              {SCELTE_SCRITTI.map((o) => (
                <Opzione
                  key={o.valore}
                  titolo={o.valore}
                  nota={o.nota}
                  tinta={materiaColors[o.valore].start}
                  scelta={state.esame.scritti === o.valore}
                  onPress={() => aggiornaEsame({ scritti: o.valore as MateriaScritti })}
                />
              ))}
            </Entrata>
          )}

          {passo === 'procedura' && (
            <Entrata>
              <Text style={styles.domanda}>Quale procedura porti all’orale?</Text>
              <Text style={styles.sottodomanda}>
                Il quesito processuale è su una delle due: una va comunque sostenuta.
              </Text>
              {SCELTE_PROCEDURA.map((o) => (
                <Opzione
                  key={o.valore}
                  titolo={o.valore}
                  nota={o.nota}
                  tinta={materiaColors[o.valore].start}
                  scelta={state.esame.procedura === o.valore}
                  onPress={() => aggiornaEsame({ procedura: o.valore as ProceduraOrale })}
                />
              ))}
            </Entrata>
          )}

          {passo === 'materia' && (
            <Entrata>
              <Text style={styles.domanda}>E la materia a scelta?</Text>
              <Text style={styles.sottodomanda}>
                Se ne porta una sola, su sei. Prima erano cinque su dodici.
              </Text>
              {SCELTE_MATERIA.map((o) => (
                <Opzione
                  key={o.valore}
                  titolo={o.valore}
                  nota={o.nota}
                  tinta={
                    o.coperta ? materiaColors[o.valore]?.start ?? colors.accent : colors.textFaint
                  }
                  avviso={
                    o.coperta
                      ? undefined
                      : 'Legul non ha ancora un percorso di quiz su questa materia'
                  }
                  scelta={state.esame.materiaScelta === o.valore}
                  onPress={() => aggiornaEsame({ materiaScelta: o.valore as MateriaScelta })}
                />
              ))}
            </Entrata>
          )}

          {passo === 'data' && (
            <Entrata>
              <Text style={styles.domanda}>Quando sostieni gli scritti?</Text>
              <Text style={styles.sottodomanda}>
                Serve solo a calcolare quante lezioni al giorno ti servono per arrivare in fondo.
                Il decreto di indizione non è ancora uscito: se non conosci la data, salta.
              </Text>
              {ORIZZONTI.map((o) => {
                const data = piuGiorni(oggiISO(), o.giorni);
                const scelta = state.esame.dataEsame === data;
                return (
                  <Opzione
                    key={o.etichetta}
                    titolo={o.etichetta}
                    nota={testoConto(o.giorni)}
                    tinta={colors.accent}
                    scelta={scelta}
                    onPress={() => aggiornaEsame({ dataEsame: scelta ? null : data })}
                  />
                );
              })}
              {giorni !== null && (
                <LinearGradient
                  colors={['rgba(201,162,39,0.16)', 'rgba(201,162,39,0.04)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[styles.conto, alone(colors.accent, 'tenue')]}
                >
                  <Icona nome="calendar" size={18} color={colors.accent} />
                  <Text style={styles.contoTesto}>{testoConto(giorni)}</Text>
                </LinearGradient>
              )}
            </Entrata>
          )}
        </ScrollView>

        <View style={styles.piede}>
          <Bottone
            label={indice >= PASSI.length - 1 ? 'Entra in Legul' : 'Avanti'}
            onPress={avanti}
            disabled={!puoAvanzare}
          />
          <Pressable onPress={chiudiApertura} hitSlop={10}>
            <Text style={styles.salta}>
              {indice === 0 ? 'Rispondo dopo' : 'Salta e vai all’app'}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Sfondo>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  barra: {
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  tacca: { flex: 1, height: 4, borderRadius: 2, backgroundColor: alpha.veloForte },
  taccaPiena: { backgroundColor: colors.accent },
  taccaPrima: {},
  contenuto: { padding: spacing.lg, paddingBottom: spacing.md, gap: spacing.sm },
  centro: { alignItems: 'center', gap: spacing.sm, paddingTop: spacing.lg },
  titolo: { ...type.titolo, color: colors.text, textAlign: 'center', marginTop: spacing.sm },
  testo: { ...type.corpoLungo, color: colors.textMuted, textAlign: 'center', maxWidth: 340 },
  domanda: { ...type.sezione, color: colors.text, marginBottom: 2 },
  sottodomanda: { ...type.corpo, color: colors.textMuted, marginBottom: spacing.sm },
  opzioneWrap: { marginBottom: spacing.sm },
  opzione: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm, padding: spacing.md },
  pallino: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  pallinoPieno: { width: 11, height: 11, borderRadius: 6 },
  opzioneTesto: { flex: 1, gap: 2 },
  opzioneTitolo: { ...type.scheda, color: colors.text },
  opzioneNota: { ...type.piccolo, color: colors.textMuted },
  avviso: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 4 },
  avvisoTesto: { ...type.minuto, color: colors.accentEdge, flex: 1 },
  conto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    borderRadius: radius.lg,
    paddingVertical: 14,
    marginTop: spacing.xs,
  },
  contoTesto: { ...type.scheda, color: colors.primary },
  // `alignItems: 'center'` qui stringeva il pulsante alla larghezza del
  // testo: su un pulsante primario è l'errore che fa sembrare l'app un
  // prototipo.
  piede: { padding: spacing.lg, paddingTop: spacing.sm, gap: spacing.sm },
  salta: {
    ...type.piccolo,
    fontWeight: '600',
    color: colors.textMuted,
    textAlign: 'center',
  },
});
