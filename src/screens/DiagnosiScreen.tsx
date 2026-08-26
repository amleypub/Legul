import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entrata, scaglione } from '../components/Entrata';
import { Icona } from '../components/Icona';
import { Sfondo } from '../components/Sfondo';
import { Superficie } from '../components/Superficie';
import { useGamification } from '../gamification/GamificationContext';
import { materiaDiDomanda } from '../data/questions';
import { materie } from '../data/quizzes';
import {
  diagnosi,
  materiaPiuDebole,
  perUrgenza,
  risposteMancanti,
  type DiagnosiMateria,
  type StatoMateria,
} from '../data/diagnosi';
import { ICONA_MATERIA } from '../data/percorso';
import type { RootStackScreenProps } from '../navigation/types';
import { alone, alpha, colors, materiaColors, radius, spacing, type } from '../theme';

/**
 * Dove sei debole.
 *
 * La schermata risponde a una domanda sola, ed è quella che chi ha una
 * data in calendario si fa ogni mattina: che cosa studio adesso. Tutto
 * ciò che non serve a rispondere sta fuori.
 *
 * Due scelte che la tengono onesta. La prima: una materia mai affrontata
 * non compare fra le deboli, perché non lo è — sta in fondo, con la sua
 * etichetta. La seconda: sotto un certo numero di risposte la precisione
 * non viene dichiarata affatto. Una percentuale calcolata su sei risposte
 * è rumore, e presentarla come misura significa mandare qualcuno a
 * rifare una materia che magari sa benissimo.
 */

const ETICHETTA: Record<StatoMateria, string> = {
  'da-rinforzare': 'Da rinforzare',
  'pochi-dati': 'Ancora pochi dati',
  'in-corso': 'In corso',
  solida: 'Solida',
  'non-iniziata': 'Non iniziata',
};

const TINTA_STATO: Record<StatoMateria, string> = {
  'da-rinforzare': colors.error,
  'pochi-dati': colors.textFaint,
  'in-corso': colors.accentEdge,
  solida: colors.successEdge,
  'non-iniziata': colors.textFaint,
};

/** Barra sottile: due misure diverse non vanno messe sulla stessa. */
function Barra({ quota, tinta }: { quota: number; tinta: string }) {
  return (
    <View style={styles.binario}>
      <View
        style={[styles.riempimento, { width: `${Math.round(quota * 100)}%`, backgroundColor: tinta }]}
      />
    </View>
  );
}

function Riga({ voce }: { voce: DiagnosiMateria }) {
  const tinte = materiaColors[voce.materia];
  const mancanti = risposteMancanti(voce);

  return (
    <Superficie tono="vetro" raggio={radius.xl} contentStyle={styles.riga}>
      <View style={styles.intestazione}>
        {/* La tinta della materia sta nel tratto, non nel riempimento:
            dodici quadrati saturi in colonna trasformerebbero una
            dashboard in una tavolozza. */}
        <View style={styles.icona}>
          <Icona nome={ICONA_MATERIA[voce.materia]} size={16} color={tinte.edge} />
        </View>
        <View style={styles.titoli}>
          <Text style={styles.materia}>{voce.materia}</Text>
          <Text style={[styles.stato, { color: TINTA_STATO[voce.stato] }]}>
            {ETICHETTA[voce.stato]}
            {voce.portata ? ' · la porti all’esame' : ''}
          </Text>
        </View>
        {voce.erroriAperti > 0 && (
          <View style={styles.errori}>
            <Text style={styles.erroriNumero}>{voce.erroriAperti}</Text>
            <Text style={styles.erroriLabel}>da ripassare</Text>
          </View>
        )}
      </View>

      <View style={styles.misura}>
        <View style={styles.misuraTesto}>
          <Text style={styles.misuraNome}>Programma svolto</Text>
          <Text style={styles.misuraValore}>
            {voce.lezioniFatte}/{voce.lezioniTotali} lezioni
          </Text>
        </View>
        <Barra quota={voce.copertura} tinta={tinte.start} />
      </View>

      <View style={styles.misura}>
        <View style={styles.misuraTesto}>
          <Text style={styles.misuraNome}>Precisione</Text>
          <Text style={styles.misuraValore}>
            {/*
              «ancora 20 risposte» si legge come «venti risposte finora»,
              che al primo avvio è falso: di risposte non ce n'è
              nessuna. Il numero è quanto ne manca, e il verbo deve
              dirlo.
            */}
            {voce.precisione === null
              ? mancanti > 0
                ? `servono ${mancanti} ${mancanti === 1 ? 'risposta' : 'risposte'}`
                : '—'
              : `${Math.round(voce.precisione * 100)}% su ${voce.risposte} risposte`}
          </Text>
        </View>
        {voce.precisione === null ? (
          <View style={styles.binario} />
        ) : (
          <Barra quota={voce.precisione} tinta={TINTA_STATO[voce.stato]} />
        )}
      </View>
    </Superficie>
  );
}

export default function DiagnosiScreen({ navigation }: RootStackScreenProps<'Diagnosi'>) {
  const { state } = useGamification();

  const voci = useMemo(
    () =>
      perUrgenza(
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

  const debole = materiaPiuDebole(voci);
  const nessunDato = voci.every((v) => v.stato === 'non-iniziata');

  return (
    <Sfondo tinta={colors.error}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contenuto}>
        <Entrata>
          {nessunDato ? (
            <Superficie tono="forte" raggio={radius.xxl} rilievo="media" contentStyle={styles.verdetto}>
              {/*
                L'icona sta dentro un riquadro di misura fissa come nel
                ramo con i dati: da sola, prima figlia di una colonna
                centrata, non disegnava niente e al suo posto restava il
                riflesso della lastra — che sembra un'icona sfocata, non
                un'icona mancante, ed è il modo peggiore di sparire.
              */}
              <View style={styles.corona}>
                <Icona nome="compass" size={26} color={colors.titanioChiaro} />
              </View>
              <Text style={styles.verdettoTitolo}>Non c’è ancora niente da misurare</Text>
              <Text style={styles.verdettoTesto}>
                Questa schermata dice su quale materia conviene lavorare, e per dirlo ha bisogno di
                vederti rispondere. Comincia una lezione: dopo una ventina di risposte in una
                materia si può già dire qualcosa.
              </Text>
            </Superficie>
          ) : debole ? (
            <Superficie
              tono="forte"
              raggio={radius.xxl}
              rilievo="alta"
              glow={colors.error}
              onPress={() => navigation.navigate('Percorso', { materia: debole.materia })}
              contentStyle={styles.verdetto}
            >
              <LinearGradient
                colors={['rgba(226,86,107,0.16)', 'rgba(226,86,107,0.04)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.corona, alone(colors.error, 'tenue')]}
              >
                <Icona nome="alert-circle" size={24} color="#FFFFFF" />
              </LinearGradient>
              <Text style={styles.verdettoTitolo}>Comincia da {debole.materia}</Text>
              <Text style={styles.verdettoTesto}>
                È la materia in cui sbagli di più: {Math.round((debole.precisione ?? 0) * 100)}% di
                risposte esatte su {debole.risposte}
                {debole.portata ? ', e la porti all’esame' : ''}.
              </Text>
              <View style={styles.azione}>
                <Text style={styles.azioneTesto}>Vai al percorso</Text>
                <Icona nome="chevron-forward" size={16} color={colors.errorEdge} />
              </View>
            </Superficie>
          ) : (
            <Superficie tono="forte" raggio={radius.xxl} rilievo="media" contentStyle={styles.verdetto}>
              <Icona nome="shield-checkmark" size={26} color={colors.successEdge} />
              <Text style={styles.verdettoTitolo}>Nessuna materia sotto soglia</Text>
              <Text style={styles.verdettoTesto}>
                Dove hai risposto abbastanza per poterlo dire, stai sopra il margine di sicurezza.
                Da qui conviene allargare il programma invece di ripassare.
              </Text>
            </Superficie>
          )}
        </Entrata>

        <Text style={styles.sezione}>Materia per materia</Text>
        {voci.map((v, i) => (
          <Entrata key={v.materia} ritardo={scaglione(i + 1, 40)}>
            <Riga voce={v} />
          </Entrata>
        ))}

        <Text style={styles.nota}>
          La precisione è contata sulle risposte che hai dato in ciascuna materia, non ricavata
          dalle stelle: una stella è una fascia, e una fascia non distingue il novanta per cento
          dal cento. Sotto una ventina di risposte non viene dichiarata affatto, perché una
          percentuale calcolata su sei risposte è rumore.
        </Text>
      </ScrollView>
    </Sfondo>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contenuto: { padding: spacing.md, paddingBottom: spacing.xl, gap: spacing.sm },

  verdetto: { alignItems: 'center', gap: spacing.sm, padding: spacing.lg },
  corona: {
    width: 54,
    height: 54,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verdettoTitolo: { ...type.sezione, color: colors.text, textAlign: 'center' },
  verdettoTesto: {
    ...type.corpo,
    color: colors.textMuted,
    textAlign: 'center',
    maxWidth: 340,
  },
  azione: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: spacing.xs },
  azioneTesto: { ...type.scheda, fontSize: 14, color: colors.errorEdge },

  sezione: { ...type.etichetta, color: colors.textMuted, marginTop: spacing.md },

  riga: { padding: spacing.md, gap: spacing.sm },
  intestazione: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  icona: {
    width: 34,
    height: 34,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: alpha.bordo,
    backgroundColor: alpha.velo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titoli: { flex: 1, gap: 1 },
  materia: { ...type.scheda, color: colors.text },
  stato: { ...type.minuto },
  errori: {
    alignItems: 'center',
    backgroundColor: materiaColors.Ripasso.soft,
    borderRadius: radius.md,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  erroriNumero: {
    fontSize: 15,
    fontWeight: '600',
    color: materiaColors.Ripasso.edge,
    fontVariant: ['tabular-nums'],
  },
  erroriLabel: { ...type.minuto, fontSize: 9.5, color: materiaColors.Ripasso.edge },

  misura: { gap: 4 },
  misuraTesto: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  misuraNome: { ...type.minuto, color: colors.textMuted },
  misuraValore: { ...type.minuto, color: colors.text, fontVariant: ['tabular-nums'] },
  binario: {
    height: 6,
    borderRadius: 3,
    backgroundColor: alpha.veloForte,
    overflow: 'hidden',
  },
  riempimento: { height: '100%', borderRadius: 3 },

  nota: { ...type.minuto, color: colors.textFaint, marginTop: spacing.md },
});
