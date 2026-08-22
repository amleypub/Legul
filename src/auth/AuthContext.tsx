import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase, supabaseConfigurato } from './supabase';
import { accediConProvider, inviaLinkEmail } from './oauth';

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

  const esci = useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
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
    }),
    [session, caricamento, esci]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth va usato dentro AuthProvider.');
  return ctx;
}
