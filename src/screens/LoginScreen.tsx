import React, { useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icona } from '../components/Icona';
import { Logo } from '../components/Logo';
import { AvvisoAccessoNonAttivo, NotaLegale, PannelloAccesso } from '../components/PannelloAccesso';
import { useAuth } from '../auth/AuthContext';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, FONT_SERIF, spacing } from '../theme';

/**
 * L'accesso che si apre dal Profilo, per chi è entrato senza account e
 * vuole crearlo dopo. I pulsanti sono gli stessi del primo avvio
 * (`PannelloAccesso`); cambia la cornice, che qui è un foglio da chiudere.
 */
export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  const { configurato, utente } = useAuth();

  // Appena la sessione è attiva la schermata ha esaurito il suo compito.
  useEffect(() => {
    if (utente) navigation.goBack();
  }, [utente, navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Pressable
        style={styles.chiudi}
        hitSlop={12}
        onPress={() => navigation.goBack()}
        accessibilityRole="button"
        accessibilityLabel="Chiudi"
      >
        <Icona nome="close" size={26} color={colors.textMuted} />
      </Pressable>

      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.marchio}>
          <Logo larghezza={150} />
          <Text style={styles.titolo} accessibilityRole="header">
            Accedi a Legul
          </Text>
          <Text style={styles.sottotitolo}>
            Salva i tuoi progressi e ritrovali su ogni dispositivo, senza mai perdere una serie.
          </Text>
        </View>

        <View style={styles.azioni}>
          <PannelloAccesso />
          {!configurato && <AvvisoAccessoNonAttivo />}
          <NotaLegale
            onDocumento={(documento) => navigation.navigate('DocumentoLegale', { documento })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  chiudi: { paddingHorizontal: spacing.md, paddingTop: spacing.sm, alignSelf: 'flex-start' },
  content: { padding: spacing.lg, paddingBottom: spacing.xl },
  marchio: { alignItems: 'center', paddingTop: spacing.sm, paddingBottom: spacing.xl },
  titolo: {
    fontFamily: FONT_SERIF.semibold,
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -0.5,
    color: colors.text,
    marginTop: spacing.lg,
  },
  sottotitolo: {
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: spacing.sm,
    maxWidth: 320,
  },
  azioni: { gap: 18 },
});
