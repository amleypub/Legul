import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../auth/AuthContext';
import { Aurora } from '../components/Aurora';
import { Entrata } from '../components/Entrata';
import { Icona } from '../components/Icona';
import { Logo } from '../components/Logo';
import { AvvisoAccessoNonAttivo, NotaLegale, PannelloAccesso } from '../components/PannelloAccesso';
import { DOCUMENTI } from '../data/legale';
import { colors, FONT_SERIF, spacing } from '../theme';
import { ContenutoDocumento } from './DocumentoLegaleScreen';

/*
  La schermata di accesso del primo avvio, subito dopo l'intro.

  Chiede una cosa sola — come vuoi entrare — e la chiede in basso, dove
  arriva il pollice; in alto restano il marchio e la promessa. La luce
  dell'intro continua qui, più tenue, così il passaggio sembra lo stesso
  ambiente e non una schermata nuova.

  Si può entrare senza account, ed è una scelta e non una scappatoia:
  l'app funziona tutta anche così, e le regole dell'App Store chiedono
  che un'app che non ha bisogno di un account non lo imponga. L'account
  serve a salvare i progressi sul cloud, e lo si può creare dopo dal
  Profilo.
*/

export default function AccessoScreen({ onFine }: { onFine: () => void }) {
  const { utente, configurato } = useAuth();
  const { width: W } = useWindowDimensions();
  const [documento, setDocumento] = useState<'termini' | 'privacy' | null>(null);

  // Appena c'è una sessione questa schermata ha finito il suo compito.
  useEffect(() => {
    if (utente) onFine();
  }, [utente, onFine]);

  return (
    <View style={styles.radice}>
      <StatusBar style="dark" />
      <Aurora larghezza={W * 1.2} style={{ left: -W * 0.1, top: -W * 0.62, opacity: 0.75 }} />

      <SafeAreaView style={styles.radice} edges={['top', 'bottom']}>
        <KeyboardAvoidingView
          style={styles.radice}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.contenuto}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.marchio}>
              <Entrata da={10}>
                <Logo larghezza={164} fonetica />
              </Entrata>
              <Entrata ritardo={90} da={10}>
                <Text style={styles.titolo} accessibilityRole="header" maxFontSizeMultiplier={1.3}>
                  Come vuoi iniziare?
                </Text>
              </Entrata>
              <Entrata ritardo={150} da={10}>
                <Text style={styles.sottotitolo} maxFontSizeMultiplier={1.3}>
                  Crea il tuo account per salvare i progressi e ritrovarli su ogni dispositivo.
                </Text>
              </Entrata>
            </View>

            <Entrata ritardo={220} style={styles.azioni}>
              <PannelloAccesso />

              <Pressable
                onPress={onFine}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel="Continua senza account"
                style={styles.ospite}
              >
                <Text style={styles.ospiteTesto} maxFontSizeMultiplier={1.3}>
                  Continua senza account
                </Text>
                <Icona nome="chevron-forward" size={16} color={colors.text} strokeWidth={2} />
              </Pressable>

              {!configurato && <AvvisoAccessoNonAttivo />}
              <NotaLegale onDocumento={setDocumento} />
            </Entrata>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>

      {/* I documenti si leggono qui sopra: la navigazione, prima
          dell'accesso, non c'è ancora. */}
      <Modal
        visible={documento !== null}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setDocumento(null)}
      >
        <View style={styles.foglio}>
          <View style={styles.foglioTestata}>
            <Text style={styles.foglioTitolo} accessibilityRole="header">
              {documento ? DOCUMENTI[documento].titolo : ''}
            </Text>
            <Pressable
              onPress={() => setDocumento(null)}
              hitSlop={12}
              accessibilityRole="button"
              accessibilityLabel="Chiudi"
            >
              <Icona nome="close" size={24} color={colors.textMuted} />
            </Pressable>
          </View>
          {documento && <ContenutoDocumento documento={documento} />}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  radice: { flex: 1 },
  contenuto: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  marchio: {
    flex: 1,
    minHeight: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  titolo: {
    fontFamily: FONT_SERIF.semibold,
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: -0.6,
    color: colors.text,
    textAlign: 'center',
    marginTop: 28,
  },
  sottotitolo: {
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: -0.1,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 10,
    maxWidth: 300,
  },
  azioni: { gap: 18 },
  ospite: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 6,
  },
  ospiteTesto: { fontSize: 15, lineHeight: 20, fontWeight: '600', color: colors.text },
  foglio: { flex: 1, backgroundColor: colors.background },
  foglioTestata: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(20,22,27,0.10)',
  },
  foglioTitolo: { fontSize: 17, fontWeight: '600', color: colors.text },
});
