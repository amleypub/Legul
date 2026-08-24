import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icona } from '../components/Icona';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGamification } from '../gamification/GamificationContext';
import { nomeVisualizzato, useAuth } from '../auth/AuthContext';
import { ORE_PROPOSTE } from '../notifiche/promemoria';
import { Mascot } from '../components/Mascot';
import { SpazioStatusBar } from '../components/TitoloSchermata';
import { Bottone } from '../components/Bottone';
import type { RootStackParamList } from '../navigation/types';
import { alpha, colors, radius, spacing, SPAZIO_TAB } from '../theme';

const VANTAGGI = [
  'Ritrova i tuoi progressi su ogni dispositivo',
  'Backup automatico di punti, streak e stelle',
  'Accesso sicuro con Apple, Google o email',
];

/**
 * Riga di impostazione.
 *
 * L'icona sta su una tessera a tinta piena, una per voce: le tessere
 * beige tutte uguali con l'icona blu erano il linguaggio delle
 * impostazioni di dieci anni fa, e non davano alcuna gerarchia. Il
 * colore distingue le voci a colpo d'occhio e si scorre più in fretta.
 */
function Voce({
  icona,
  tinta,
  etichetta,
  sottotitolo,
  valore,
  interruttore,
  onPress,
  distruttiva = false,
  occupata = false,
}: {
  icona: string;
  tinta: string;
  etichetta: string;
  sottotitolo?: string;
  valore?: string;
  interruttore?: { acceso: boolean; cambia: (v: boolean) => void };
  onPress?: () => void;
  distruttiva?: boolean;
  occupata?: boolean;
}) {
  const contenuto = (
    <>
      <View style={[styles.voceIcona, { backgroundColor: tinta }]}>
        {occupata ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Icona nome={icona} size={17} color="#FFFFFF" />
        )}
      </View>
      <View style={styles.voceTesto}>
        <Text style={[styles.voceEtichetta, distruttiva && styles.voceDistruttiva]}>
          {etichetta}
        </Text>
        {sottotitolo ? <Text style={styles.voceSottotitolo}>{sottotitolo}</Text> : null}
      </View>
      {interruttore ? (
        <Switch
          value={interruttore.acceso}
          onValueChange={interruttore.cambia}
          trackColor={{ true: colors.success, false: '#D7DCE6' }}
          thumbColor="#FFFFFF"
        />
      ) : valore ? (
        <Text style={styles.voceValore}>{valore}</Text>
      ) : onPress ? (
        <Icona nome="chevron-forward" size={17} color="#B6BECC" />
      ) : null}
    </>
  );

  if (!onPress) return <View style={styles.voce}>{contenuto}</View>;

  return (
    <Pressable
      onPress={onPress}
      disabled={occupata}
      accessibilityRole="button"
      accessibilityLabel={etichetta}
      style={({ pressed }) => [styles.voce, pressed && styles.vocePremuta]}
    >
      {contenuto}
    </Pressable>
  );
}

/** Titoletto di gruppo, fuori dalla card: dà struttura senza righe divisorie. */
function Gruppo({ titolo, children }: { titolo: string; children: React.ReactNode }) {
  return (
    <View style={styles.gruppo}>
      <Text style={styles.gruppoTitolo}>{titolo}</Text>
      <View style={styles.gruppoCard}>{children}</View>
    </View>
  );
}

export default function ProfiloScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { state, streak, livello, toggleAudio, impostaPromemoria, azzeraProgressi } =
    useGamification();
  const { utente, esci, eliminaAccount } = useAuth();
  const [eliminazioneInCorso, setEliminazioneInCorso] = useState(false);

  /**
   * L'interruttore resta acceso solo se il permesso è stato concesso:
   * altrimenti prometterebbe un promemoria che il sistema non mostrerà.
   */
  async function cambiaPromemoria(attivo: boolean) {
    const riuscito = await impostaPromemoria(attivo, state.oraPromemoria);
    if (!riuscito) {
      Alert.alert(
        'Notifiche disattivate',
        'Per ricevere il promemoria devi consentire le notifiche a Legul dalle impostazioni del telefono.',
        [{ text: 'Ho capito' }]
      );
    }
  }

  function scegliOra() {
    Alert.alert('A che ora vuoi il promemoria?', undefined, [
      ...ORE_PROPOSTE.map((ora) => ({
        text: `${String(ora).padStart(2, '0')}:00`,
        onPress: () => void impostaPromemoria(true, ora),
      })),
      { text: 'Annulla', style: 'cancel' as const },
    ]);
  }

  function confermaUscita() {
    Alert.alert(
      'Vuoi uscire?',
      'I progressi restano salvati sul tuo account: li ritrovi al prossimo accesso.',
      [
        { text: 'Annulla', style: 'cancel' },
        { text: 'Esci', style: 'destructive', onPress: () => void esci() },
      ]
    );
  }

  /**
   * Due passaggi prima di cancellare: il primo spiega che cosa sparisce,
   * il secondo chiede conferma. L'operazione è irreversibile e vale la
   * pena renderla difficile da avviare per sbaglio.
   */
  function confermaEliminazione() {
    Alert.alert(
      'Eliminare l’account?',
      'Verranno cancellati per sempre il tuo account e tutti i progressi: punti, streak, stelle, badge e tracce studiate, sia sul telefono sia sul server.\n\nSe hai un abbonamento attivo, ricordati di annullarlo dalle impostazioni dello store: eliminando l’account non si disdice da solo.',
      [
        { text: 'Annulla', style: 'cancel' },
        { text: 'Continua', style: 'destructive', onPress: ultimaConferma },
      ]
    );
  }

  /**
   * Azzeramento dei progressi senza toccare l'account: serve a chi vuole
   * rifare il percorso da capo, e a chi vuole ripulire il dispositivo
   * senza cancellarsi.
   */
  function confermaAzzeramento() {
    Alert.alert(
      'Ricominciare da capo?',
      `Punti, streak, stelle, badge e tracce lette torneranno a zero${
        utente ? ', su questo dispositivo e sul tuo account' : ' su questo dispositivo'
      }. Le domande e le tracce restano tutte disponibili.`,
      [
        { text: 'Annulla', style: 'cancel' },
        { text: 'Azzera i progressi', style: 'destructive', onPress: azzeraProgressi },
      ]
    );
  }

  function ultimaConferma() {
    Alert.alert('Sei sicuro?', 'L’operazione non può essere annullata.', [
      { text: 'No, torna indietro', style: 'cancel' },
      { text: 'Elimina definitivamente', style: 'destructive', onPress: () => void elimina() },
    ]);
  }

  async function elimina() {
    setEliminazioneInCorso(true);
    try {
      await eliminaAccount();
      // Solo dopo che il server ha confermato: se la chiamata fallisce,
      // i progressi locali devono restare dove sono.
      azzeraProgressi();
      Alert.alert('Account eliminato', 'Puoi continuare a usare Legul come ospite.');
    } catch (e) {
      const testo = e instanceof Error ? e.message : String(e);
      Alert.alert(
        'Eliminazione non riuscita',
        /network|fetch/i.test(testo)
          ? 'Connessione assente. Controlla la rete e riprova: il tuo account non è stato toccato.'
          : `${testo}\n\nIl tuo account non è stato toccato.`
      );
    } finally {
      setEliminazioneInCorso(false);
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SpazioStatusBar extra={spacing.sm} />
      {/* Stessa impostazione dell'intestazione in Home: la mascotte
          affiancata al testo, blocco con bordo 3D, niente ritratto
          sovrapposto che sfonda il riquadro. */}
      <View style={styles.heroWrap}>
        <LinearGradient
          colors={['#2E4370', '#1B2A4A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
        <View style={styles.heroTop}>
          <Mascot state="neutral" size={72} />
          <View style={styles.heroTesto}>
            <Text style={styles.heroNome} numberOfLines={1}>
              {nomeVisualizzato(utente)}
            </Text>
            {utente?.email && (
              <Text style={styles.heroEmail} numberOfLines={1}>
                {utente.email}
              </Text>
            )}
            <View style={styles.heroLivelloRow}>
              <Icona nome={livello.icona} size={13} color={colors.accent} />
              <Text style={styles.heroLivello} numberOfLines={1}>
                {livello.nome}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.heroStats}>
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValore}>{state.punti}</Text>
            <Text style={styles.heroStatLabel}>punti</Text>
          </View>
          <View style={styles.heroDivider} />
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValore}>{streak}</Text>
            <Text style={styles.heroStatLabel}>streak</Text>
          </View>
          <View style={styles.heroDivider} />
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValore}>{state.quizCompletati}</Text>
            <Text style={styles.heroStatLabel}>lezioni</Text>
          </View>
        </View>
        </LinearGradient>
      </View>

      {utente ? (
        /* Fascia di stato, non una card: dice una cosa sola, e l'uscita
           dall'account vive ora nel gruppo in fondo alla schermata. */
        <View style={styles.sincro}>
          <Icona nome="cloud-done" size={20} color={colors.successEdge} />
          <Text style={styles.sincroTesto}>
            <Text style={styles.sincroForte}>Progressi sincronizzati.</Text> Li ritrovi su ogni
            dispositivo dove accedi.
          </Text>
        </View>
      ) : (
        /* Invito ad accedere */
        <View style={styles.card}>
          <Text style={styles.cardTitolo}>Crea un account gratuito</Text>
          <Text style={styles.cardSub}>
            Stai studiando come ospite: i progressi sono salvati solo su questo telefono. Accedi per
            non perderli mai e ritrovarli ovunque.
          </Text>
          <View style={styles.vantaggi}>
            {VANTAGGI.map((v) => (
              <View key={v} style={styles.vantaggioRiga}>
                <Icona nome="checkmark-circle" size={19} color={colors.success} />
                <Text style={styles.vantaggioTesto}>{v}</Text>
              </View>
            ))}
          </View>
          <Bottone
            label="Accedi o registrati"
            onPress={() => navigation.navigate('Login')}
          variante="scuro"
            style={styles.cta}
          />
        </View>
      )}

      <Gruppo titolo="Preferenze">
        <Voce
          icona="volume-high"
          tinta="#7C5CE0"
          etichetta="Effetti sonori"
          interruttore={{ acceso: state.audioAttivo, cambia: toggleAudio }}
        />
        <Voce
          icona="notifications"
          tinta="#F5842B"
          etichetta="Promemoria giornaliero"
          sottotitolo={
            state.promemoriaAttivo
              ? undefined
              : 'Un invito a studiare, per non perdere la streak'
          }
          interruttore={{
            acceso: state.promemoriaAttivo,
            cambia: (v) => void cambiaPromemoria(v),
          }}
        />
        {state.promemoriaAttivo && (
          <Voce
            icona="time"
            tinta="#2FA8A0"
            etichetta="Ora del promemoria"
            valore={`${String(state.oraPromemoria).padStart(2, '0')}:00`}
            onPress={scegliOra}
          />
        )}
      </Gruppo>

      {utente && (
        <Gruppo titolo="Comunità">
          <Voce
            icona="people"
            tinta="#E1751A"
            etichetta="Nome e persone bloccate"
            sottotitolo="Come compari nelle discussioni"
            onPress={() => navigation.navigate('Comunita')}
          />
        </Gruppo>
      )}

      <Gruppo titolo="Documenti">
        <Voce
          icona="lock-closed"
          tinta="#4F7CF3"
          etichetta="Informativa sulla privacy"
          onPress={() => navigation.navigate('DocumentoLegale', { documento: 'privacy' })}
        />
        <Voce
          icona="document-text"
          tinta="#64748B"
          etichetta="Termini di servizio"
          onPress={() => navigation.navigate('DocumentoLegale', { documento: 'termini' })}
        />
      </Gruppo>

      {/* Azioni irreversibili, in fondo, dove ci si aspetta di trovarle. */}
      <Gruppo titolo="Account">
        {utente && (
          <Voce
            icona="log-out"
            tinta="#64748B"
            etichetta="Esci dall’account"
            onPress={confermaUscita}
          />
        )}
        <Voce
          icona="refresh"
          tinta="#C2610A"
          etichetta="Azzera i progressi"
          sottotitolo="Riparti da zero mantenendo account e contenuti"
          onPress={confermaAzzeramento}
          distruttiva
        />
        {utente && (
          <Voce
            icona="trash"
            tinta={colors.error}
            etichetta={eliminazioneInCorso ? 'Eliminazione in corso…' : 'Elimina account'}
            sottotitolo="Cancella per sempre account e progressi, qui e sul server"
            onPress={confermaEliminazione}
            distruttiva
            occupata={eliminazioneInCorso}
          />
        )}
      </Gruppo>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  content: { padding: spacing.md, paddingBottom: SPAZIO_TAB },
  heroWrap: { },
  hero: {
    borderRadius: radius.xxl,
    padding: spacing.md,
    gap: spacing.md,
  },
  heroTop: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm + 2 },
  heroTesto: { flex: 1, gap: 2 },
  heroNome: { color: '#FFFFFF', fontSize: 21, fontWeight: '900' },
  heroEmail: { color: 'rgba(255,255,255,0.6)', fontSize: 13 },
  sincro: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.successSoft,
    borderRadius: radius.lg,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md - 2,
    marginTop: spacing.md,
  },
  sincroTesto: { flex: 1, fontSize: 13.5, color: colors.text, lineHeight: 19 },
  sincroForte: { fontWeight: '800', color: colors.successEdge },
  heroLivelloRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 3 },
  heroLivello: { color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: '700' },
  heroStats: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.10)',
    paddingTop: spacing.md,
  },
  heroStat: { alignItems: 'center', flex: 1 },
  heroStatValore: { color: '#FFFFFF', fontSize: 22, fontWeight: '900' },
  heroStatLabel: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 2,
  },
  heroDivider: { width: 1, height: 30, backgroundColor: 'rgba(255,255,255,0.18)' },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    marginTop: spacing.lg,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  cardTitolo: { fontSize: 20, fontWeight: '800', color: colors.text },
  cardSub: { fontSize: 14, color: colors.textMuted, lineHeight: 21, marginTop: spacing.xs },
  // Spunte al posto delle tessere beige: sono tre benefici in elenco,
  // non tre voci di menu, e le tessere davano loro un peso che non hanno.
  vantaggi: { gap: spacing.sm + 2, marginTop: spacing.md },
  vantaggioRiga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  vantaggioTesto: { flex: 1, fontSize: 14.5, color: colors.text, lineHeight: 20 },
  cta: { marginTop: spacing.lg },
  // ——— Impostazioni ———
  gruppo: { marginTop: spacing.lg },
  gruppoTitolo: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
    marginLeft: spacing.xs,
    marginBottom: spacing.sm,
  },
  // Niente filetti fra le righe: lo spazio e le tessere colorate bastano
  // a separarle, e il risultato respira invece di sembrare un elenco.
  gruppoCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    overflow: 'hidden',
    paddingVertical: 4,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  voce: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
    paddingVertical: spacing.sm + 3,
    paddingHorizontal: spacing.md - 2,
  },
  vocePremuta: { backgroundColor: '#F3F6FC' },
  voceIcona: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voceTesto: { flex: 1 },
  voceEtichetta: { fontSize: 15, fontWeight: '700', color: colors.text },
  voceDistruttiva: { color: colors.error },
  voceSottotitolo: { fontSize: 12.5, color: colors.textMuted, lineHeight: 17, marginTop: 1 },
  voceValore: { fontSize: 15, fontWeight: '700', color: colors.textMuted },
});
