import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useAuth } from '../auth/AuthContext';
import { Entrata } from './Entrata';
import { Icona } from './Icona';
import { alpha, colors, molla, ombra, radius, SCALA_PRESSIONE, spacing } from '../theme';

/*
  I modi per entrare: Apple, Google, email.

  Sta in un componente solo perché le schermate che lo usano sono due —
  l'accesso del primo avvio e quello che si apre dal Profilo — e due
  copie della stessa logica divergono alla prima correzione.

  I pulsanti di Apple e Google seguono le regole dei due marchi, che non
  sono gusti: Apple vuole il nero (o il bianco) pieno con il suo logo,
  Google il bianco con il filo grigio e la G a quattro colori. Un
  pulsante «Continua con Apple» ridisegnato a piacere può costare il
  rifiuto in revisione.
*/

const EMAIL_VALIDA = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Messaggio leggibile da un errore di rete o di Supabase. */
export function messaggioErrore(e: unknown): string {
  const testo = e instanceof Error ? e.message : String(e);
  if (/network|fetch/i.test(testo)) {
    return 'Connessione assente. Controlla la rete e riprova.';
  }
  return testo || 'Riprova tra qualche istante.';
}

type Variante = 'apple' | 'google' | 'email' | 'invio';

const ASPETTO: Record<Variante, { fondo: string; testo: string; bordo: string }> = {
  apple: { fondo: '#000000', testo: '#FFFFFF', bordo: '#000000' },
  // I valori del pulsante chiaro di Google: fondo bianco, filo #747775, testo #1F1F1F.
  google: { fondo: '#FFFFFF', testo: '#1F1F1F', bordo: '#747775' },
  email: { fondo: 'rgba(255,255,255,0.72)', testo: colors.text, bordo: alpha.bordoMarcato },
  invio: { fondo: colors.primary, testo: '#FFFFFF', bordo: colors.primary },
};

function PulsanteAccesso({
  label,
  icona,
  variante,
  occupato = false,
  disabilitato = false,
  onPress,
}: {
  label: string;
  icona: string;
  variante: Variante;
  occupato?: boolean;
  disabilitato?: boolean;
  onPress: () => void;
}) {
  const a = ASPETTO[variante];
  const premuto = useSharedValue(0);
  const stile = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - premuto.value * (1 - SCALA_PRESSIONE) }],
  }));
  return (
    <Pressable
      disabled={disabilitato || occupato}
      onPressIn={() => {
        premuto.value = withSpring(1, molla.tocco);
        Haptics.selectionAsync().catch(() => {});
      }}
      onPressOut={() => {
        premuto.value = withSpring(0, molla.tocco);
      }}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: disabilitato, busy: occupato }}
    >
      <Animated.View
        style={[
          styles.pulsante,
          { backgroundColor: a.fondo, borderColor: a.bordo },
          variante === 'email' ? ombra.tenue : null,
          disabilitato && !occupato && styles.spento,
          stile,
        ]}
      >
        {occupato ? (
          <ActivityIndicator color={a.testo} />
        ) : (
          <>
            <Icona nome={icona} size={variante === 'apple' ? 19 : 18} color={a.testo} />
            <Text style={[styles.etichetta, { color: a.testo }]} maxFontSizeMultiplier={1.3}>
              {label}
            </Text>
          </>
        )}
      </Animated.View>
    </Pressable>
  );
}

/**
 * I pulsanti di accesso, il campo email e la conferma del link inviato.
 *
 * Su Android Google viene prima di Apple: è l'account che quasi tutti
 * hanno già sul telefono. Altrove, iPhone compreso, il contrario.
 */
export function PannelloAccesso() {
  const { accediApple, accediGoogle, accediEmail, configurato } = useAuth();
  const [inCorso, setInCorso] = useState<'apple' | 'google' | 'email' | null>(null);
  const [mostraEmail, setMostraEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [linkInviato, setLinkInviato] = useState(false);
  const [campoAttivo, setCampoAttivo] = useState(false);

  async function esegui(chi: 'apple' | 'google' | 'email', azione: () => Promise<void>) {
    if (!configurato) {
      Alert.alert(
        'Accesso non ancora attivo',
        'In questa versione il server di accesso non è configurato. Puoi entrare senza account: i progressi restano salvati su questo dispositivo.',
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

  if (linkInviato) {
    return (
      <Entrata>
        <View style={styles.inviato} accessibilityLiveRegion="polite">
          <View style={styles.inviatoIcona}>
            <Icona nome="mail-open" size={26} color={colors.success} />
          </View>
          <Text style={styles.inviatoTitolo}>Controlla la posta</Text>
          <Text style={styles.inviatoTesto}>
            Abbiamo mandato un link di accesso a {email.trim()}. Aprilo da questo telefono per
            entrare: nessuna password da ricordare.
          </Text>
          <Pressable onPress={() => setLinkInviato(false)} hitSlop={8} accessibilityRole="button">
            <Text style={styles.linkSecondario}>Usa un altro indirizzo</Text>
          </Pressable>
        </View>
      </Entrata>
    );
  }

  const apple = (
    <PulsanteAccesso
      key="apple"
      label="Continua con Apple"
      icona="logo-apple"
      variante="apple"
      occupato={inCorso === 'apple'}
      disabilitato={inCorso !== null}
      onPress={() => esegui('apple', accediApple)}
    />
  );
  const google = (
    <PulsanteAccesso
      key="google"
      label="Continua con Google"
      icona="logo-google"
      variante="google"
      occupato={inCorso === 'google'}
      disabilitato={inCorso !== null}
      onPress={() => esegui('google', accediGoogle)}
    />
  );

  return (
    <View style={styles.pulsanti}>
      {Platform.OS === 'android' ? [google, apple] : [apple, google]}
      {mostraEmail ? (
        <Entrata style={styles.email}>
          <TextInput
            style={[styles.campo, campoAttivo && styles.campoAttivo]}
            onFocus={() => setCampoAttivo(true)}
            onBlur={() => setCampoAttivo(false)}
            value={email}
            onChangeText={setEmail}
            placeholder="nome@esempio.it"
            placeholderTextColor={colors.titanio}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus
            onSubmitEditing={inviaEmail}
            returnKeyType="send"
            accessibilityLabel="Indirizzo email"
          />
          <PulsanteAccesso
            label="Inviami il link di accesso"
            icona="paper-plane"
            variante="invio"
            occupato={inCorso === 'email'}
            disabilitato={inCorso !== null}
            onPress={inviaEmail}
          />
          <Pressable
            onPress={() => setMostraEmail(false)}
            hitSlop={8}
            accessibilityRole="button"
            style={styles.annulla}
          >
            <Text style={styles.annullaTesto}>Annulla</Text>
          </Pressable>
        </Entrata>
      ) : (
        <PulsanteAccesso
          label="Continua con l’email"
          icona="mail"
          variante="email"
          disabilitato={inCorso !== null}
          onPress={() => setMostraEmail(true)}
        />
      )}
    </View>
  );
}

/** Quando le credenziali del server mancano: lo si dice, senza allarmare. */
export function AvvisoAccessoNonAttivo() {
  return (
    <View style={styles.avviso}>
      <Icona nome="information-circle" size={15} color={colors.textMuted} />
      <Text style={styles.avvisoTesto}>
        Accesso non ancora attivo in questa versione: entra senza account, i progressi restano sul
        telefono.
      </Text>
    </View>
  );
}

/** La riga dei Termini e della privacy, con i due documenti apribili. */
export function NotaLegale({ onDocumento }: { onDocumento: (d: 'termini' | 'privacy') => void }) {
  return (
    <Text style={styles.legale}>
      {/* Spazi indivisibili dentro i collegamenti: andando a capo a metà,
          la sottolineatura si spezzava e sembravano due link. */}
      Continuando accetti i{' '}
      <Text style={styles.legaleLink} onPress={() => onDocumento('termini')} accessibilityRole="link">
        {'Termini\u00A0di\u00A0servizio'}
      </Text>{' '}
      e l’
      <Text style={styles.legaleLink} onPress={() => onDocumento('privacy')} accessibilityRole="link">
        {'Informativa\u00A0sulla\u00A0privacy'}
      </Text>
      .
    </Text>
  );
}

const styles = StyleSheet.create({
  pulsanti: { alignSelf: 'stretch', gap: 12 },
  pulsante: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: radius.lg,
    borderWidth: 1,
  },
  spento: { opacity: 0.45 },
  etichetta: { fontSize: 16, lineHeight: 21, fontWeight: '600', letterSpacing: -0.2 },
  email: { gap: 10 },
  campo: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: alpha.bordoMarcato,
    paddingHorizontal: spacing.md + 2,
    fontSize: 16,
    color: colors.text,
  },
  /* Il campo attivo si riconosce dal bordo, in grafite: sul web la
     cornice nera del browser è grossa il doppio e fuori registro. */
  campoAttivo: { borderColor: colors.titanioForte, borderWidth: 1.5, outlineWidth: 0 },
  annulla: { alignSelf: 'center', paddingVertical: 4 },
  annullaTesto: { fontSize: 14, fontWeight: '600', color: colors.textMuted },
  inviato: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.sm,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  inviatoIcona: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.successSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviatoTitolo: { fontSize: 18, fontWeight: '600', color: colors.text },
  inviatoTesto: { fontSize: 14, color: colors.textMuted, textAlign: 'center', lineHeight: 20 },
  linkSecondario: { fontSize: 14, fontWeight: '600', color: colors.accentTesto, marginTop: 2 },
  avviso: { flexDirection: 'row', gap: 8, alignItems: 'flex-start', paddingHorizontal: 4 },
  avvisoTesto: { flex: 1, fontSize: 12.5, lineHeight: 18, color: colors.textMuted },
  legale: { fontSize: 12, lineHeight: 18, color: colors.textMuted, textAlign: 'center' },
  legaleLink: { color: colors.text, fontWeight: '600', textDecorationLine: 'underline' },
});
