import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { Icona } from '../components/Icona';
import { Monolite } from '../components/Monolite';
import { useAuth } from '../auth/AuthContext';
import type { RootStackScreenProps } from '../navigation/types';
import { SCALA_PRESSIONE, alpha, colors, radius, spacing } from '../theme';

const EMAIL_VALIDA = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Messaggio leggibile da un errore di rete o di Supabase. */
function messaggioErrore(e: unknown): string {
  const testo = e instanceof Error ? e.message : String(e);
  if (/network|fetch/i.test(testo)) {
    return 'Connessione assente. Controlla la rete e riprova.';
  }
  return testo || 'Riprova tra qualche istante.';
}

function SocialButton({
  label,
  icona,
  bg,
  fg,
  edge,
  bordo,
  occupato = false,
  disabilitato = false,
  onPress,
}: {
  label: string;
  icona: string;
  bg: string;
  fg: string;
  edge: string;
  bordo?: string;
  occupato?: boolean;
  disabilitato?: boolean;
  onPress: () => void;
}) {
  const premuto = useRef(new Animated.Value(0)).current;
  const press = (down: boolean) => {
    Animated.spring(premuto, {
      toValue: down ? 1 : 0,
      speed: 40,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
    if (down) Haptics.selectionAsync().catch(() => {});
  };
  return (
    <Pressable
      disabled={disabilitato || occupato}
      onPressIn={() => press(true)}
      onPressOut={() => press(false)}
      onPress={onPress}
    >
      <View style={[styles.socialWrap, disabilitato && styles.socialSpento]}>
        <Animated.View
          style={[
            styles.social,
            { backgroundColor: bg, borderColor: bordo ?? bg, transform: [
                {
                  scale: premuto.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, SCALA_PRESSIONE],
                  }),
                },
              ] },
          ]}
        >
          {occupato ? (
            <ActivityIndicator color={fg} />
          ) : (
            <>
              <Icona nome={icona} size={22} color={fg} style={styles.socialIcon} />
              <Text style={[styles.socialLabel, { color: fg }]}>{label}</Text>
            </>
          )}
        </Animated.View>
      </View>
    </Pressable>
  );
}

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  const { accediApple, accediGoogle, accediEmail, configurato, utente } = useAuth();
  const [inCorso, setInCorso] = useState<'apple' | 'google' | 'email' | null>(null);
  const [mostraEmail, setMostraEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [linkInviato, setLinkInviato] = useState(false);

  // Appena la sessione è attiva la schermata ha esaurito il suo compito.
  useEffect(() => {
    if (utente) navigation.goBack();
  }, [utente, navigation]);

  async function esegui(chi: 'apple' | 'google' | 'email', azione: () => Promise<void>) {
    if (!configurato) {
      Alert.alert(
        'Accesso non ancora attivo',
        'Le credenziali del server non sono configurate in questa versione. Puoi continuare a studiare come ospite: i progressi restano salvati su questo dispositivo.',
        [{ text: 'Ho capito' }]
      );
      return;
    }
    setInCorso(chi);
    try {
      await azione();
    } catch (e) {
      Alert.alert('Accesso non riuscito', messaggioErrore(e), [{ text: 'Chiudi' }]);
    } finally {
      setInCorso(null);
    }
  }

  function inviaEmail() {
    if (!EMAIL_VALIDA.test(email.trim())) {
      Alert.alert('Indirizzo non valido', 'Controlla l’email e riprova.', [{ text: 'Chiudi' }]);
      return;
    }
    esegui('email', async () => {
      await accediEmail(email);
      setLinkInviato(true);
    });
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Pressable style={styles.chiudi} hitSlop={12} onPress={() => navigation.goBack()}>
        <Icona nome="close" size={28} color={colors.textMuted} />
      </Pressable>

      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Monolite state="celebrating" size={120} animated />
        <Text style={styles.titolo}>Accedi a Legul</Text>
        <Text style={styles.sottotitolo}>
          Salva i tuoi progressi e ritrovali su ogni dispositivo, senza mai perdere una streak.
        </Text>

        {linkInviato ? (
          <View style={styles.inviatoWrap}>
            <View style={styles.inviatoIcona}>
              <Icona nome="mail-open" size={28} color={colors.success} />
            </View>
            <Text style={styles.inviatoTitolo}>Controlla la posta</Text>
            <Text style={styles.inviatoTesto}>
              Abbiamo inviato un link di accesso a {email.trim()}. Toccalo da questo dispositivo per
              entrare: nessuna password da ricordare.
            </Text>
            <Pressable onPress={() => setLinkInviato(false)}>
              <Text style={styles.linkSecondario}>Usa un altro indirizzo</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <View style={styles.buttons}>
              {/* Su iOS, per policy App Store, Apple va offerto insieme agli altri social */}
              <SocialButton
                label="Continua con Apple"
                icona="logo-apple"
                bg="#1A1A1C"
                fg="#FFFFFF"
                edge="#000000"
                occupato={inCorso === 'apple'}
                disabilitato={inCorso !== null}
                onPress={() => esegui('apple', accediApple)}
              />
              <SocialButton
                label="Continua con Google"
                icona="logo-google"
                bg="#FFFFFF"
                fg="#1C1E26"
                edge="#D3D8E2"
                bordo={alpha.bordo}
                occupato={inCorso === 'google'}
                disabilitato={inCorso !== null}
                onPress={() => esegui('google', accediGoogle)}
              />
              {mostraEmail ? (
                <View style={styles.emailWrap}>
                  <TextInput
                    style={styles.emailInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="tu@esempio.it"
                    placeholderTextColor="#9AA3B2"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus
                    onSubmitEditing={inviaEmail}
                    returnKeyType="send"
                  />
                  <SocialButton
                    label="Invia il link di accesso"
                    icona="paper-plane"
                    bg={colors.primary}
                    fg="#FFFFFF"
                    edge="#0E1830"
                    occupato={inCorso === 'email'}
                    disabilitato={inCorso !== null}
                    onPress={inviaEmail}
                  />
                </View>
              ) : (
                <SocialButton
                  label="Continua con email"
                  icona="mail"
                  bg={colors.primary}
                  fg="#FFFFFF"
                  edge="#0E1830"
                  disabilitato={inCorso !== null}
                  onPress={() => setMostraEmail(true)}
                />
              )}
            </View>

            {!configurato && (
              <View style={styles.avvisoWrap}>
                <Icona nome="construct" size={16} color={colors.textMuted} />
                <Text style={styles.avviso}>
                  Server di accesso non configurato in questa versione: puoi studiare come ospite, i
                  progressi restano salvati su questo dispositivo.
                </Text>
              </View>
            )}

            <Text style={styles.privacy}>
              Continuando accetterai i{' '}
              <Text
                style={styles.privacyLink}
                onPress={() => navigation.navigate('DocumentoLegale', { documento: 'termini' })}
              >
                Termini di servizio
              </Text>{' '}
              e l’
              <Text
                style={styles.privacyLink}
                onPress={() => navigation.navigate('DocumentoLegale', { documento: 'privacy' })}
              >
                Informativa sulla privacy
              </Text>{' '}
              di Legul.
            </Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  chiudi: { paddingHorizontal: spacing.md, paddingTop: spacing.sm },
  content: { padding: spacing.lg, alignItems: 'center', paddingBottom: spacing.xl },
  titolo: { fontSize: 26, fontWeight: '700', color: colors.text, marginTop: spacing.sm },
  sottotitolo: {
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  buttons: { alignSelf: 'stretch', gap: spacing.md, marginTop: spacing.xl },
  socialWrap: { },
  socialSpento: { opacity: 0.45 },
  emailWrap: { gap: spacing.sm },
  emailInput: {
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: alpha.bordo,
    paddingVertical: 15,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
    color: colors.text,
  },
  inviatoWrap: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginTop: spacing.xl,
    gap: spacing.sm,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  inviatoIcona: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.successSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviatoTitolo: { fontSize: 19, fontWeight: '600', color: colors.text },
  inviatoTesto: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
  linkSecondario: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.accent,
    marginTop: spacing.xs,
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
    paddingVertical: 16,
    borderWidth: 1.5,
  },
  socialIcon: { position: 'absolute', left: spacing.lg },
  socialLabel: { fontSize: 16, fontWeight: '600' },
  avvisoWrap: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'flex-start',
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.lg,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
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
  privacyLink: { color: colors.accent, fontWeight: '600', textDecorationLine: 'underline' },
});
