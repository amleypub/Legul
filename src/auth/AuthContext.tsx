import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Alert, Platform } from 'react-native';
import * as Linking from 'expo-linking';
import type { Session, User } from '@supabase/supabase-js';
import { supabase, supabaseConfigurato } from './supabase';
import { accediConProvider, accettaLinkDiAccesso, inviaLinkEmail } from './oauth';

interface AuthValue {
  /** `null` finché non sappiamo se c'è una sessione salvata. */
  session: Session | null;
  utente: User | null;
  /** true durante il ripristino iniziale della sessione. */
  caricamento: boolean;
  /** false se mancano le credenziali: l'app resta in modalità ospite. */
  configurato: boolean;
  accediApple: () => Promise<void>;
  accediGoogle: () => Promise<void>;
  accediEmail: (email: string) => Promise<void>;
  esci: () => Promise<void>;
  /** Cancella definitivamente l'account e i dati sul server. */
  eliminaAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthValue | undefined>(undefined);

/** Nome da mostrare: quello del provider, altrimenti la parte prima della @. */
export function nomeVisualizzato(utente: User | null): string {
  if (!utente) return 'Ospite';
  const meta = utente.user_metadata ?? {};
  const nome = (meta.full_name ?? meta.name ?? meta.preferred_username) as string | undefined;
  if (nome) return nome;
  if (utente.email) return utente.email.split('@')[0];
  return 'Studente';
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [caricamento, setCaricamento] = useState(supabaseConfigurato);

  useEffect(() => {
    if (!supabase) return;
    let vivo = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!vivo) return;
      setSession(data.session);
      setCaricamento(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_evento, nuova) => {
      setSession(nuova);
      setCaricamento(false);
    });

    return () => {
      vivo = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  /*
    Il link dell'email riapre l'app con i token nell'indirizzo: qui
    vengono letti, sia quando è il link ad avviare l'app sia quando l'app
    era già aperta. Sul web non serve, lo fa Supabase dalla barra degli
    indirizzi. La sessione nuova arriva poi da `onAuthStateChange`, come
    per gli altri accessi.
  */
  useEffect(() => {
    if (!supabase || Platform.OS === 'web') return;
    const gestisci = (url: string | null) => {
      if (!url) return;
      accettaLinkDiAccesso(url)
        .then((esito) => {
          if (esito && esito !== 'ok') {
            Alert.alert(
              'Accesso non completato',
              'Il link di accesso è scaduto o non è più valido. Riprova dalla schermata di accesso.',
              [{ text: 'Ho capito' }]
            );
          }
        })
        .catch(() => {
          Alert.alert('Accesso non riuscito', 'Riprova tra qualche istante.', [{ text: 'Chiudi' }]);
        });
    };
    Linking.getInitialURL().then(gestisci).catch(() => {});
    const sub = Linking.addEventListener('url', ({ url }) => gestisci(url));
    return () => sub.remove();
  }, []);

  const esci = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setSession(null);
  }, []);

  const eliminaAccount = useCallback(async () => {
    if (!supabase) throw new Error('Supabase non configurato.');

    const { error } = await supabase.functions.invoke('elimina-account', { method: 'POST' });
    if (error) throw error;

    // L'utente non esiste più: un signOut normale proverebbe a revocare la
    // sessione sul server e fallirebbe. Qui basta dimenticarla in locale.
    await supabase.auth.signOut({ scope: 'local' }).catch(() => {});
    setSession(null);
  }, []);

  const value = useMemo<AuthValue>(
    () => ({
      session,
      utente: session?.user ?? null,
      caricamento,
      configurato: supabaseConfigurato,
      accediApple: () => accediConProvider('apple'),
      accediGoogle: () => accediConProvider('google'),
      accediEmail: inviaLinkEmail,
      esci,
      eliminaAccount,
    }),
    [session, caricamento, esci, eliminaAccount]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth va usato dentro AuthProvider.');
  return ctx;
}
