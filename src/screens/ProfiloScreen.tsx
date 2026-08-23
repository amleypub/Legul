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
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGamification } from '../gamification/GamificationContext';
import { nomeVisualizzato, useAuth } from '../auth/AuthContext';
import { Mascot } from '../components/Mascot';
import { Button3D } from '../components/Button3D';
import type { RootStackParamList } from '../navigation/types';
import { colors, radius, softShadow, spacing } from '../theme';

const VANTAGGI: { icona: keyof typeof Ionicons.glyphMap; testo: string }[] = [
  { icona: 'sync', testo: 'Ritrova i tuoi progressi su ogni dispositivo' },
  { icona: 'cloud-done', testo: 'Backup automatico di punti, streak e stelle' },
  { icona: 'shield-checkmark', testo: 'Accesso sicuro con Apple, Google o email' },
];

export default function ProfiloScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { state, livello, toggleAudio, azzeraProgressi } = useGamification();
  const { utente, esci, eliminaAccount } = useAuth();
  const [eliminazioneInCorso, setEliminazioneInCorso] = useState(false);

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
      {/* Intestazione ospite */}
      <LinearGradient
        colors={['#2E4370', '#1B2A4A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.hero, softShadow]}
      >
        <Mascot state="neutral" size={96} style={styles.heroMascot} />
        <Text style={styles.heroNome}>{nomeVisualizzato(utente)}</Text>
        {utente?.email && <Text style={styles.heroEmail}>{utente.email}</Text>}
        <View style={styles.heroLivelloRow}>
          <Ionicons name={livello.icona} size={15} color={colors.accent} />
          <Text style={styles.heroLivello}>{livello.nome}</Text>
        </View>
        <View style={styles.heroStats}>
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValore}>{state.punti}</Text>
            <Text style={styles.heroStatLabel}>punti</Text>
          </View>
          <View style={styles.heroDivider} />
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValore}>{state.streak}</Text>
            <Text style={styles.heroStatLabel}>streak</Text>
          </View>
          <View style={styles.heroDivider} />
          <View style={styles.heroStat}>
            <Text style={styles.heroStatValore}>{state.quizCompletati}</Text>
            <Text style={styles.heroStatLabel}>lezioni</Text>
          </View>
        </View>
      </LinearGradient>

      {utente ? (
        /* Account collegato: i progressi viaggiano con l'utente */
        <View style={styles.card}>
          <View style={styles.sincroRiga}>
            <View style={styles.sincroIcona}>
              <Ionicons name="cloud-done" size={20} color={colors.success} />
            </View>
            <View style={styles.sincroTesto}>
              <Text style={styles.cardTitolo}>Progressi al sicuro</Text>
              <Text style={styles.cardSub}>
                Punti, streak e stelle sono salvati sul tuo account: li ritrovi su ogni dispositivo
                dove accedi.
              </Text>
            </View>
          </View>
          <Button3D
            label="Esci dall’account"
            onPress={confermaUscita}
            color="#FFFFFF"
            edgeColor="#D3D8E2"
            textColor={colors.text}
            style={styles.cta}
          />
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
              <View key={v.testo} style={styles.vantaggioRiga}>
                <View style={styles.vantaggioIcona}>
                  <Ionicons name={v.icona} size={18} color={colors.primary} />
                </View>
                <Text style={styles.vantaggioTesto}>{v.testo}</Text>
              </View>
            ))}
          </View>
          <Button3D
            label="Accedi o registrati"
            onPress={() => navigation.navigate('Login')}
            color={colors.primary}
            edgeColor="#0E1830"
            style={styles.cta}
          />
        </View>
      )}

      {/* Impostazioni */}
      <Text style={styles.sezioneTitolo}>Impostazioni</Text>
      <View style={styles.settingsCard}>
        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <View style={styles.settingIcona}>
              <Ionicons name="volume-high" size={18} color={colors.primary} />
            </View>
            <Text style={styles.settingLabel}>Effetti sonori</Text>
          </View>
          <Switch
            value={state.audioAttivo}
            onValueChange={toggleAudio}
            trackColor={{ true: colors.success, false: '#CBD2DE' }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>

      {utente && (
        /* Cancellazione dell'account: obbligatoria per gli store quando
           l'app permette di registrarsi. In fondo alla schermata, dove ci
           si aspetta di trovare le azioni irreversibili. */
        <View style={styles.pericoloCard}>
          <Pressable
            onPress={confermaEliminazione}
            disabled={eliminazioneInCorso}
            accessibilityRole="button"
            accessibilityLabel="Elimina account"
            accessibilityHint="Cancella per sempre account e progressi"
            style={({ pressed }) => [styles.pericoloRiga, pressed && styles.pericoloPremuto]}
          >
            <View style={styles.pericoloIcona}>
              {eliminazioneInCorso ? (
                <ActivityIndicator size="small" color={colors.error} />
              ) : (
                <Ionicons name="trash-outline" size={19} color={colors.error} />
              )}
            </View>
            <View style={styles.pericoloTesto}>
              <Text style={styles.pericoloLabel}>
                {eliminazioneInCorso ? 'Eliminazione in corso…' : 'Elimina account'}
              </Text>
              <Text style={styles.pericoloSub}>
                Cancella per sempre account e progressi, su questo dispositivo e sul server.
              </Text>
            </View>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingTop: spacing.xl + spacing.md, paddingBottom: spacing.xl },
  hero: {
    borderRadius: radius.xxl,
    paddingTop: spacing.xl + spacing.md,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    marginTop: 40,
  },
  heroMascot: { position: 'absolute', top: -48, alignSelf: 'center' },
  heroNome: { color: '#FFFFFF', fontSize: 24, fontWeight: '900', marginTop: spacing.sm },
  heroEmail: { color: 'rgba(255,255,255,0.6)', fontSize: 13, marginTop: 2 },
  sincroRiga: { flexDirection: 'row', gap: spacing.sm + 2 },
  sincroTesto: { flex: 1 },
  sincroIcona: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: colors.successSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroLivelloRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 4 },
  heroLivello: { color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: '700' },
  heroStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.lg,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
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
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginTop: spacing.lg,
    ...softShadow,
    shadowOpacity: 0.06,
  },
  cardTitolo: { fontSize: 20, fontWeight: '800', color: colors.text },
  cardSub: { fontSize: 14, color: colors.textMuted, lineHeight: 21, marginTop: spacing.xs },
  vantaggi: { gap: spacing.sm, marginTop: spacing.md },
  vantaggioRiga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  vantaggioIcona: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vantaggioTesto: { flex: 1, fontSize: 14, color: colors.text },
  cta: { marginTop: spacing.lg },
  sezioneTitolo: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  settingsCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md,
    ...softShadow,
    shadowOpacity: 0.06,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  settingLeft: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  settingIcona: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingLabel: { fontSize: 15, fontWeight: '600', color: colors.text },

  // Azione irreversibile: niente blocco 3D invitante, un riquadro sobrio
  // che si distingue senza gridare.
  pericoloCard: {
    marginTop: spacing.lg,
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: '#F3D5D8',
    overflow: 'hidden',
  },
  pericoloRiga: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.md,
  },
  pericoloPremuto: { backgroundColor: colors.errorSoft },
  pericoloIcona: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.errorSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pericoloTesto: { flex: 1 },
  pericoloLabel: { fontSize: 15, fontWeight: '700', color: colors.error },
  pericoloSub: { fontSize: 12, color: colors.textMuted, lineHeight: 17, marginTop: 2 },
});
