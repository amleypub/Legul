import React, { useCallback, useEffect, useState } from 'react';
import { Icona } from '../components/Icona';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { nomeVisualizzato, useAuth } from '../auth/AuthContext';
import * as api from '../discussione/api';
import { abbreviaNome } from '../discussione/modello';
import { Bottone } from '../components/Bottone';
import type { RootStackScreenProps } from '../navigation/types';
import { alpha, colors, radius, spacing } from '../theme';

/**
 * Nome pubblico e persone bloccate.
 *
 * Il blocco è obbligatorio per pubblicare un'app con contenuti scritti
 * dagli utenti (App Store, linea guida 1.2), ma senza un posto dove
 * togliere il blocco resterebbe una porta a senso unico: chi lo dà per
 * sbaglio non potrebbe più rimediare.
 */
export default function ComunitaScreen({ navigation }: RootStackScreenProps<'Comunita'>) {
  const { utente } = useAuth();
  const [pseudonimo, setPseudonimo] = useState<string | null>(null);
  const [bozza, setBozza] = useState('');
  const [caricamento, setCaricamento] = useState(true);
  const [salvataggio, setSalvataggio] = useState(false);
  const [errore, setErrore] = useState<string | null>(null);
  const [esito, setEsito] = useState<string | null>(null);
  const [bloccati, setBloccati] = useState<api.UtenteBloccato[]>([]);

  // Finché non si scrive il primo messaggio lo pseudonimo non esiste ancora:
  // si mostra quello che verrà assegnato, calcolato con la stessa regola.
  const proposto = abbreviaNome(utente ? nomeVisualizzato(utente) : null) ?? 'Praticante';

  const carica = useCallback(async () => {
    if (!api.discussioneDisponibile || !utente) {
      setCaricamento(false);
      return;
    }
    try {
      const [nome, elenco] = await Promise.all([
        api.leggiPseudonimo(),
        api.leggiUtentiBloccati(),
      ]);
      setPseudonimo(nome);
      setBozza(nome ?? proposto);
      setBloccati(elenco);
      setErrore(null);
    } catch (e) {
      setErrore(api.messaggioErrore(e));
    } finally {
      setCaricamento(false);
    }
  }, [utente, proposto]);

  useEffect(() => {
    void carica();
  }, [carica]);

  async function salva() {
    setSalvataggio(true);
    setErrore(null);
    setEsito(null);
    try {
      const nuovo = await api.impostaPseudonimo(bozza);
      setPseudonimo(nuovo);
      setBozza(nuovo);
      setEsito('Nome aggiornato.');
    } catch (e) {
      setErrore(api.messaggioErrore(e));
    } finally {
      setSalvataggio(false);
    }
  }

  async function sblocca(utenteId: string) {
    setBloccati((attuali) => attuali.filter((b) => b.utenteId !== utenteId));
    try {
      await api.sblocca(utenteId);
    } catch (e) {
      setErrore(api.messaggioErrore(e));
      void carica();
    }
  }

  if (!utente) {
    return (
      <View style={styles.centro}>
        <Icona nome="people-outline" size={40} color={colors.textMuted} />
        <Text style={styles.centroTitolo}>Serve l’accesso</Text>
        <Text style={styles.centroTesto}>
          Il nome pubblico e le persone bloccate sono legati al tuo account.
        </Text>
        <Bottone
          label="Accedi"
          onPress={() => navigation.navigate('Login')}
          variante="scuro"
          style={styles.centroBtn}
        />
      </View>
    );
  }

  const cambiato = bozza.trim() !== (pseudonimo ?? proposto);
  const valido = bozza.trim().length >= 2 && bozza.trim().length <= 32;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.gruppoTitolo}>Nome nella discussione</Text>
      <View style={styles.carta}>
        <Text style={styles.spiega}>
          È il nome con cui compaiono i tuoi messaggi: non mostriamo mai cognome ed email per
          intero. Se non lo cambi, comparirai come{' '}
          <Text style={styles.forte}>{proposto}</Text>
        </Text>
        <TextInput
          value={bozza}
          onChangeText={(v) => {
            setBozza(v);
            setEsito(null);
          }}
          maxLength={32}
          autoCapitalize="words"
          placeholder={proposto}
          placeholderTextColor="#A7B0C0"
          style={styles.casella}
          accessibilityLabel="Nome nella discussione"
        />
        <Bottone
          label={salvataggio ? 'Salvataggio…' : 'Salva il nome'}
          onPress={() => void salva()}
          disabled={!cambiato || !valido || salvataggio}
          variante="scuro"
        />
        {esito ? <Text style={styles.esito}>{esito}</Text> : null}
      </View>

      <Text style={[styles.gruppoTitolo, styles.stacco]}>Persone bloccate</Text>
      <View style={styles.carta}>
        {caricamento ? (
          <ActivityIndicator color={colors.primary} />
        ) : bloccati.length === 0 ? (
          <Text style={styles.spiega}>
            Non hai bloccato nessuno. Puoi farlo dal menu di un messaggio: i suoi contenuti
            spariranno da tutte le discussioni.
          </Text>
        ) : (
          bloccati.map((b) => (
            <View key={b.utenteId} style={styles.riga}>
              <View style={styles.avatar}>
                <Text style={styles.avatarTesto}>{b.pseudonimo.slice(0, 1).toUpperCase()}</Text>
              </View>
              <Text style={styles.rigaNome} numberOfLines={1}>
                {b.pseudonimo}
              </Text>
              <Pressable
                onPress={() => void sblocca(b.utenteId)}
                accessibilityRole="button"
                style={({ pressed }) => [styles.sblocca, pressed && styles.premuto]}
              >
                <Text style={styles.sbloccaTesto}>Sblocca</Text>
              </Pressable>
            </View>
          ))
        )}
      </View>

      {errore ? (
        <View style={styles.errore}>
          <Icona nome="alert-circle" size={17} color={colors.errorEdge} />
          <Text style={styles.erroreTesto}>{errore}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  content: { padding: spacing.md, paddingBottom: spacing.xl },

  gruppoTitolo: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
    marginBottom: spacing.sm,
    paddingHorizontal: 2,
  },
  stacco: { marginTop: spacing.lg },
  carta: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md,
    gap: spacing.sm + 2,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  spiega: { fontSize: 13.5, color: colors.textMuted, lineHeight: 20 },
  forte: { fontWeight: '800', color: colors.text },
  casella: {
    backgroundColor: '#F2F5FB',
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md - 4,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  esito: { fontSize: 13, color: colors.successEdge, fontWeight: '700' },

  riga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 11,
    backgroundColor: '#7C8BA0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarTesto: { color: '#FFFFFF', fontWeight: '900', fontSize: 15 },
  rigaNome: { flex: 1, fontSize: 15, fontWeight: '700', color: colors.text },
  sblocca: {
    backgroundColor: '#F2F5FB',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md - 4,
    paddingVertical: 7,
  },
  premuto: { opacity: 0.7 },
  sbloccaTesto: { fontSize: 13, fontWeight: '800', color: colors.primary },

  errore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.errorSoft,
    borderRadius: radius.lg,
    padding: spacing.sm + 4,
    marginTop: spacing.md,
  },
  erroreTesto: { flex: 1, fontSize: 13, color: colors.errorEdge, lineHeight: 18 },

  centro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  centroTitolo: { fontSize: 20, fontWeight: '800', color: colors.text },
  centroTesto: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
  centroBtn: { alignSelf: 'stretch', marginTop: spacing.md },
});
