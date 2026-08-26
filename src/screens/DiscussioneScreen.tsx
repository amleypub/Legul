import React, { useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icona } from '../components/Icona';
import { useAuth } from '../auth/AuthContext';
import { CartaMessaggio } from '../discussione/CartaMessaggio';
import { discussioneDisponibile } from '../discussione/api';
import { LIMITE_TESTO, validaTesto, type GenereMessaggio, type Messaggio, type Nodo } from '../discussione/modello';
import { useDiscussione } from '../discussione/useDiscussione';
import { FoglioAzioni, type AzioneFoglio } from '../components/FoglioAzioni';
import { Monolite } from '../components/Monolite';
import type { RootStackScreenProps } from '../navigation/types';
import { alpha, colors, radius, spacing } from '../theme';

/** A chi si sta rispondendo, per la striscia sopra la casella di scrittura. */
interface Destinatario {
  padreId: string;
  pseudonimo: string;
}

export default function DiscussioneScreen({
  route,
  navigation,
}: RootStackScreenProps<'Discussione'>) {
  const { argomento, titolo, genereIniziale } = route.params;
  const { utente } = useAuth();
  const insets = useSafeAreaInsets();
  const filoDati = useDiscussione(argomento);
  const { filo, caricamento, errore, invioInCorso, segnalati } = filoDati;

  const [testo, setTesto] = useState('');
  const [genere, setGenere] = useState<GenereMessaggio>(genereIniziale ?? 'commento');
  const [destinatario, setDestinatario] = useState<Destinatario | null>(null);
  const [menuSu, setMenuSu] = useState<Messaggio | null>(null);
  const casella = useRef<TextInput>(null);

  const collegato = Boolean(utente);
  const puoInteragire = collegato && discussioneDisponibile;

  const azioniMenu = useMemo<AzioneFoglio[]>(() => {
    if (!menuSu) return [];
    if (menuSu.mio) {
      return [
        {
          chiave: 'elimina',
          etichetta: 'Elimina il mio messaggio',
          descrizione: 'Le risposte altrui restano, senza il tuo testo',
          icona: 'trash',
          tinta: colors.error,
          distruttiva: true,
          onPress: () => void filoDati.elimina(menuSu.id),
        },
      ];
    }
    return [
      {
        chiave: 'segnala',
        etichetta: 'Segnala il messaggio',
        descrizione: 'Lo mettiamo in coda per il controllo',
        icona: 'flag',
        tinta: '#F5842B',
        onPress: () => void filoDati.segnala(menuSu.id),
      },
      {
        chiave: 'blocca',
        etichetta: `Blocca ${menuSu.pseudonimo}`,
        descrizione: 'Non vedrai più i suoi messaggi, qui e altrove',
        icona: 'person-remove',
        tinta: colors.error,
        distruttiva: true,
        onPress: () => void filoDati.blocca(menuSu.autoreId),
      },
    ];
  }, [menuSu, filoDati]);

  function iniziaRisposta(nodo: Messaggio) {
    setDestinatario({ padreId: nodo.id, pseudonimo: nodo.pseudonimo });
    setGenere('commento');
    casella.current?.focus();
  }

  function proponiSoluzione() {
    setDestinatario(null);
    setGenere('soluzione');
    casella.current?.focus();
  }

  async function invia() {
    const esito = validaTesto(testo);
    if (!esito.valido) return;
    const riuscito = await filoDati.pubblica({
      genere: destinatario ? 'commento' : genere,
      testo,
      padreId: destinatario?.padreId ?? null,
    });
    if (!riuscito) return;
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    setTesto('');
    setDestinatario(null);
    setGenere('commento');
    Keyboard.dismiss();
  }

  function renderNodo(nodo: Nodo) {
    return (
      <View key={nodo.id} style={styles.nodo}>
        <CartaMessaggio
          messaggio={nodo}
          puoInteragire={puoInteragire}
          segnalato={segnalati.has(nodo.id)}
          onVota={(direzione) => filoDati.vota(nodo.id, direzione)}
          onRispondi={() => iniziaRisposta(nodo)}
          onMenu={() => setMenuSu(nodo)}
        />
        {nodo.risposte.map((r) => (
          <CartaMessaggio
            key={r.id}
            messaggio={r}
            risposta
            puoInteragire={puoInteragire}
            segnalato={segnalati.has(r.id)}
            onVota={(direzione) => filoDati.vota(r.id, direzione)}
            onRispondi={() => iniziaRisposta(nodo)}
            onMenu={() => setMenuSu(r)}
          />
        ))}
      </View>
    );
  }

  const lunghezza = testo.trim().length;
  const puoInviare = lunghezza >= 2 && lunghezza <= LIMITE_TESTO && !invioInCorso;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 92 : 0}
    >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {titolo ? (
          <Text style={styles.contesto} numberOfLines={2}>
            {titolo}
          </Text>
        ) : null}

        {/* Il quadro va messo prima di far leggere qualsiasi cosa: qui non
            scrive una redazione, scrivono altri candidati. */}
        <View style={styles.avvisoWrap}>
          <View style={styles.avviso}>
            <Icona nome="people" size={17} color="#2D4FC7" />
            <Text style={styles.avvisoTesto}>
              Quello che leggi qui è scritto da altri utenti. Non sono soluzioni ufficiali e
              nessuno le ha validate: valutale con il tuo giudizio e controlla sempre le fonti.
            </Text>
          </View>
        </View>

        {!discussioneDisponibile ? (
          <View style={styles.cartaInfo}>
            <Icona nome="cloud-offline-outline" size={20} color={colors.textMuted} />
            <Text style={styles.cartaInfoTesto}>
              La discussione non è ancora attiva su questa installazione: manca la
              configurazione del server.
            </Text>
          </View>
        ) : null}

        {errore ? (
          <Pressable style={styles.errore} onPress={filoDati.ricarica} accessibilityRole="button">
            <Icona nome="alert-circle" size={18} color={colors.errorEdge} />
            <Text style={styles.erroreTesto}>{errore}</Text>
            <Text style={styles.erroreAzione}>Riprova</Text>
          </Pressable>
        ) : null}

        {caricamento ? (
          <View style={styles.attesa}>
            <ActivityIndicator color={colors.accent} />
          </View>
        ) : null}

        {/* --- Soluzioni proposte --- */}
        <View style={styles.sezioneTestata}>
          <Icona nome="bulb-outline" size={15} color={colors.textMuted} />
          <Text style={styles.sezioneTitolo}>Soluzioni proposte</Text>
          <Text style={styles.sezioneConteggio}>{filo.soluzioni.length}</Text>
        </View>

        {filo.soluzioni.length === 0 && !caricamento ? (
          <View style={styles.vuoto}>
            <Monolite state="studying" size={56} />
            <Text style={styles.vuotoTesto}>
              Nessuna soluzione proposta. Se hai svolto la traccia, il tuo ragionamento è
              probabilmente utile a qualcun altro.
            </Text>
          </View>
        ) : (
          filo.soluzioni.map(renderNodo)
        )}

        <Pressable
          onPress={proponiSoluzione}
          disabled={!puoInteragire}
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.proponi,
            pressed && styles.proponiPremuto,
            !puoInteragire && styles.spento,
          ]}
        >
          <Icona nome="create-outline" size={18} color={colors.accent} />
          <Text style={styles.proponiTesto}>Suggerisci un’altra soluzione</Text>
        </Pressable>

        {/* --- Commenti --- */}
        <View style={[styles.sezioneTestata, styles.sezioneStacco]}>
          <Icona nome="chatbubbles-outline" size={15} color={colors.textMuted} />
          <Text style={styles.sezioneTitolo}>Commenti</Text>
          <Text style={styles.sezioneConteggio}>{filo.commenti.length}</Text>
        </View>

        {filo.commenti.length === 0 && !caricamento ? (
          <View style={styles.vuoto}>
            <Text style={styles.vuotoTesto}>
              Ancora nessun commento. Puoi essere il primo a chiedere o a spiegare qualcosa.
            </Text>
          </View>
        ) : (
          filo.commenti.map(renderNodo)
        )}

        <Pressable
          onPress={() => navigation.navigate('DocumentoLegale', { documento: 'termini' })}
          accessibilityRole="link"
          style={styles.regole}
        >
          <Icona nome="shield-checkmark-outline" size={14} color={colors.textMuted} />
          <Text style={styles.regoleTesto}>
            Scrivendo accetti le regole della community, nei Termini di servizio.
          </Text>
        </Pressable>
      </ScrollView>

      {/* --- Casella di scrittura --- */}
      {!collegato ? (
        <Pressable
          onPress={() => navigation.navigate('Login')}
          accessibilityRole="button"
          disabled={!discussioneDisponibile}
          style={({ pressed }) => [
            styles.barraAccesso,
            { paddingBottom: spacing.sm + insets.bottom },
            pressed && styles.proponiPremuto,
            !discussioneDisponibile && styles.spento,
          ]}
        >
          <Icona nome="lock-closed" size={16} color="#FFFFFF" />
          <Text style={styles.barraAccessoTesto}>Accedi per commentare e votare</Text>
        </Pressable>
      ) : (
        <View style={[styles.compositore, { paddingBottom: spacing.sm + insets.bottom }]}>
          {destinatario ? (
            <View style={styles.striscia}>
              <Icona nome="return-down-forward" size={14} color={colors.textMuted} />
              <Text style={styles.strisciaTesto} numberOfLines={1}>
                Rispondi a {destinatario.pseudonimo}
              </Text>
              <Pressable onPress={() => setDestinatario(null)} hitSlop={8} accessibilityLabel="Annulla risposta">
                <Icona nome="close" size={16} color={colors.textMuted} />
              </Pressable>
            </View>
          ) : genere === 'soluzione' ? (
            <View style={[styles.striscia, styles.strisciaOro]}>
              <Icona nome="bulb" size={14} color={colors.accent} />
              <Text style={[styles.strisciaTesto, styles.strisciaTestoOro]} numberOfLines={1}>
                Stai proponendo una soluzione
              </Text>
              <Pressable onPress={() => setGenere('commento')} hitSlop={8} accessibilityLabel="Torna a commento">
                <Icona nome="close" size={16} color={colors.accent} />
              </Pressable>
            </View>
          ) : null}

          <View style={styles.rigaCasella}>
            <TextInput
              ref={casella}
              value={testo}
              onChangeText={setTesto}
              multiline
              maxLength={LIMITE_TESTO}
              editable={discussioneDisponibile}
              placeholder={
                destinatario
                  ? 'Scrivi la tua risposta…'
                  : genere === 'soluzione'
                    ? 'Come imposteresti la soluzione? Cita le norme su cui ti basi.'
                    : 'Scrivi un commento…'
              }
              placeholderTextColor="#A7B0C0"
              style={styles.casella}
            />
            <Pressable
              onPress={() => void invia()}
              disabled={!puoInviare}
              accessibilityRole="button"
              accessibilityLabel="Pubblica"
              style={({ pressed }) => [
                styles.invia,
                genere === 'soluzione' && !destinatario && styles.inviaOro,
                !puoInviare && styles.inviaSpento,
                pressed && styles.proponiPremuto,
              ]}
            >
              {invioInCorso ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Icona nome="arrow-up" size={20} color="#FFFFFF" />
              )}
            </Pressable>
          </View>

          {lunghezza > LIMITE_TESTO - 300 ? (
            <Text style={styles.contatore}>
              {lunghezza} / {LIMITE_TESTO}
            </Text>
          ) : null}
        </View>
      )}

      <FoglioAzioni
        visibile={menuSu !== null}
        titolo={menuSu?.pseudonimo}
        azioni={azioniMenu}
        onChiudi={() => setMenuSu(null)}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  scroll: { flex: 1 },
  content: { padding: spacing.md, paddingBottom: spacing.xl },

  contesto: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },

  avvisoWrap: { marginBottom: spacing.md },
  avviso: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: alpha.velo,
    borderRadius: radius.lg,
    padding: spacing.md - 2,
  },
  avvisoTesto: { flex: 1, fontSize: 13, color: colors.textMuted, lineHeight: 19 },

  cartaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.lg,
    padding: spacing.md - 2,
    marginBottom: spacing.md,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  cartaInfoTesto: { flex: 1, fontSize: 13, color: colors.textMuted, lineHeight: 19 },

  errore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.errorSoft,
    borderRadius: radius.lg,
    padding: spacing.sm + 4,
    marginBottom: spacing.md,
  },
  erroreTesto: { flex: 1, fontSize: 13, color: colors.errorEdge, lineHeight: 18 },
  erroreAzione: { fontSize: 13, fontWeight: '600', color: colors.errorEdge },

  attesa: { paddingVertical: spacing.lg },

  sezioneTestata: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: spacing.sm,
  },
  sezioneStacco: { marginTop: spacing.lg },
  sezioneTitolo: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  sezioneConteggio: {
    fontSize: 11.5,
    fontWeight: '600',
    color: colors.textMuted,
    backgroundColor: '#E4E9F3',
    borderRadius: radius.pill,
    paddingHorizontal: 7,
    paddingVertical: 1,
    overflow: 'hidden',
  },

  nodo: { marginBottom: spacing.md },

  vuoto: {
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.xl,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  vuotoTesto: {
    fontSize: 13.5,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },

  proponi: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.lg,
    paddingVertical: 13,
  },
  proponiPremuto: { opacity: 0.75 },
  proponiTesto: { fontSize: 14.5, fontWeight: '600', color: colors.accent },
  spento: { opacity: 0.45 },

  regole: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: spacing.lg,
  },
  regoleTesto: { fontSize: 12, color: colors.textMuted },

  barraAccesso: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.primary,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.md,
  },
  barraAccessoTesto: { fontSize: 15, fontWeight: '600', color: '#FFFFFF' },

  compositore: {
    backgroundColor: alpha.vetroForte,
    borderTopWidth: 1,
    borderTopColor: alpha.bordo,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    gap: spacing.sm,
  },
  striscia: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: alpha.veloForte,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: 6,
  },
  strisciaOro: { backgroundColor: colors.accentSoft },
  strisciaTesto: { flex: 1, fontSize: 12.5, fontWeight: '700', color: colors.textMuted },
  strisciaTestoOro: { color: colors.accent },

  rigaCasella: { flexDirection: 'row', alignItems: 'flex-end', gap: spacing.sm },
  casella: {
    flex: 1,
    minHeight: 44,
    maxHeight: 140,
    backgroundColor: alpha.veloForte,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md - 4,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 15,
    color: colors.text,
    lineHeight: 21,
  },
  invia: {
    width: 44,
    height: 44,
    borderRadius: radius.lg,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviaOro: { backgroundColor: colors.accentEdge },
  inviaSpento: { backgroundColor: '#C3CAD8' },
  contatore: { alignSelf: 'flex-end', fontSize: 11.5, color: colors.textMuted },
});
