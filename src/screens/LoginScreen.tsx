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
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Mascot } from '../components/Mascot';
import { useAuth } from '../auth/AuthContext';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, EDGE_3D, radius, spacing } from '../theme';

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
  icona: keyof typeof Ionicons.glyphMap;
  bg: string;
  fg: string;
  edge: string;
  bordo?: string;
  occupato?: boolean;
  disabilitato?: boolean;
  onPress: () => void;
}) {
  const ty = useRef(new Animated.Value(0)).current;
  const press = (down: boolean) => {
    Animated.spring(ty, { toValue: down ? EDGE_3D : 0, speed: 40, bounciness: 0, useNativeDriver: true }).start();
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
        <View style={[styles.socialEdge, { backgroundColor: edge }]} />
        <Animated.View
          style={[
            styles.social,
            { backgroundColor: bg, borderColor: bordo ?? bg, transform: [{ translateY: ty }] },
          ]}
        >
          {occupato ? (
            <ActivityIndicator color={fg} />
          ) : (
            <>
              <Ionicons name={icona} size={22} color={fg} style={styles.socialIcon} />
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
        <Ionicons name="close" size={28} color={colors.textMuted} />
      </Pressable>

      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Mascot state="celebrating" size={120} animated />
        <Text style={styles.titolo}>Accedi a Legul</Text>
        <Text style={styles.sottotitolo}>
          Salva i tuoi progressi e ritrovali su ogni dispositivo, senza mai perdere una streak.
        </Text>

        {linkInviato ? (
          <View style={styles.inviatoWrap}>
            <View style={styles.inviatoIcona}>
              <Ionicons name="mail-open" size={28} color={colors.success} />
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
                bordo="#E2E6EE"
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
                <Ionicons name="construct" size={16} color={colors.textMuted} />
                <Text style={styles.avviso}>
                  Server di accesso non configurato in questa versione: puoi studiare come ospite, i
                  progressi restano salvati su questo dispositivo.
                </Text>
              </View>
            )}

            <Text style={styles.privacy}>
              Continuando accetterai i Termini di servizio e l’Informativa sulla privacy di Legul.
            </Text>
          </>
        )}
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
  buttons: { alignSelf: 'stretch', gap: spacing.md, marginTop: spacing.xl },
  socialWrap: { paddingBottom: EDGE_3D },
  socialSpento: { opacity: 0.45 },
  emailWrap: { gap: spacing.sm },
  emailInput: {
    backgroundColor: colors.card,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: '#E2E6EE',
    paddingVertical: 15,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
    color: colors.text,
  },
  inviatoWrap: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginTop: spacing.xl,
    gap: spacing.sm,
  },
  inviatoIcona: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.successSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviatoTitolo: { fontSize: 19, fontWeight: '800', color: colors.text },
  inviatoTesto: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
  linkSecondario: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.primary,
    marginTop: spacing.xs,
  },
  socialEdge: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: EDGE_3D,
    bottom: 0,
    borderRadius: radius.pill,
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
  socialLabel: { fontSize: 16, fontWeight: '800' },
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
