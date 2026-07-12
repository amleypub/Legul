import React from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Mascot } from '../components/Mascot';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, radius, spacing } from '../theme';

/**
 * Schermata di accesso — solo interfaccia.
 * I pulsanti sono definitivi nell'aspetto; il collegamento a un backend
 * (Apple / Google / email + sincronizzazione progressi) verrà aggiunto
 * in un secondo momento. Per ora un tocco mostra un avviso onesto.
 */
function accessoInArrivo(provider: string) {
  Alert.alert(
    'Accesso in arrivo',
    `Il login con ${provider} sarà attivo nella prossima versione, insieme al salvataggio dei progressi su tutti i dispositivi. Per ora puoi continuare a studiare come ospite.`,
    [{ text: 'Ho capito' }]
  );
}

function SocialButton({
  label,
  icona,
  bg,
  fg,
  bordo,
  onPress,
}: {
  label: string;
  icona: keyof typeof Ionicons.glyphMap;
  bg: string;
  fg: string;
  bordo?: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.social,
        { backgroundColor: bg, borderColor: bordo ?? bg },
        pressed && styles.socialPressed,
      ]}
    >
      <Ionicons name={icona} size={20} color={fg} style={styles.socialIcon} />
      <Text style={[styles.socialLabel, { color: fg }]}>{label}</Text>
    </Pressable>
  );
}

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Pressable style={styles.chiudi} hitSlop={12} onPress={() => navigation.goBack()}>
        <Ionicons name="close" size={28} color={colors.textMuted} />
      </Pressable>

      <ScrollView contentContainerStyle={styles.content}>
        <Mascot state="celebrating" size={120} animated />
        <Text style={styles.titolo}>Accedi a Legul</Text>
        <Text style={styles.sottotitolo}>
          Salva i tuoi progressi e ritrovali su ogni dispositivo, senza mai perdere una streak.
        </Text>

        <View style={styles.buttons}>
          {/* Su iOS, per policy App Store, Apple va offerto insieme agli altri social */}
          <SocialButton
            label="Continua con Apple"
            icona="logo-apple"
            bg="#000000"
            fg="#FFFFFF"
            onPress={() => accessoInArrivo('Apple')}
          />
          <SocialButton
            label="Continua con Google"
            icona="logo-google"
            bg="#FFFFFF"
            fg="#1C1E26"
            bordo={colors.border}
            onPress={() => accessoInArrivo('Google')}
          />
          <SocialButton
            label="Continua con email"
            icona="mail"
            bg={colors.primary}
            fg="#FFFFFF"
            onPress={() => accessoInArrivo('email')}
          />
        </View>

        <View style={styles.avvisoWrap}>
          <Ionicons name="construct" size={16} color={colors.textMuted} />
          <Text style={styles.avviso}>
            Accesso in fase di completamento: per ora puoi studiare come ospite, i progressi restano
            salvati su questo dispositivo.
          </Text>
        </View>

        <Text style={styles.privacy}>
          Continuando accetterai i Termini di servizio e l’Informativa sulla privacy di Legul.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  chiudi: { paddingHorizontal: spacing.md, paddingTop: spacing.sm },
  content: { padding: spacing.lg, alignItems: 'center', paddingBottom: spacing.xl },
  titolo: { fontSize: 26, fontWeight: '900', color: colors.text, marginTop: spacing.sm },
  sottotitolo: {
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  buttons: { alignSelf: 'stretch', gap: spacing.sm, marginTop: spacing.xl },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md + 2,
    paddingVertical: 15,
    borderWidth: 1.5,
  },
  socialPressed: { transform: [{ translateY: 1 }], opacity: 0.9 },
  socialIcon: { position: 'absolute', left: spacing.md },
  socialLabel: { fontSize: 16, fontWeight: '700' },
  avvisoWrap: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'flex-start',
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.lg,
  },
  avviso: { flex: 1, fontSize: 13, color: colors.textMuted, lineHeight: 19 },
  privacy: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.sm,
  },
});
