import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import type { Provider } from '@supabase/supabase-js';
import { supabase } from './supabase';

// Chiude il popup di autenticazione rimasto aperto dopo un reload (solo web).
WebBrowser.maybeCompleteAuthSession();

/**
 * Estrae i token dal frammento (`#access_token=...`) o dalla query string
 * dell'URL con cui il browser rimanda all'app dopo il consenso.
 */
function estraiToken(url: string): { access_token: string; refresh_token: string } | null {
  const parti = url.split(/[#?]/).slice(1).join('&');
  if (!parti) return null;
  const p = new URLSearchParams(parti);
  const access_token = p.get('access_token');
  const refresh_token = p.get('refresh_token');
  if (!access_token || !refresh_token) return null;
  return { access_token, refresh_token };
}

/**
 * Accesso con un provider esterno (Apple, Google).
 *
 * Su mobile apriamo il consenso in una scheda del browser di sistema —
 * è quello che Apple e Google richiedono, e l'utente vede il lucchetto
 * del dominio vero invece di una WebView che potrebbe essere chiunque.
 * Al ritorno l'app riceve i token sullo schema `legul://` e li consegna
 * a Supabase. Sul web basta il redirect normale.
 */
export async function accediConProvider(provider: Provider): Promise<void> {
  if (!supabase) throw new Error('Supabase non configurato.');

  const redirectTo = Linking.createURL('accedi');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
      // Sul web lasciamo che sia il browser a seguire il redirect.
      skipBrowserRedirect: Platform.OS !== 'web',
    },
  });
  if (error) throw error;
  if (Platform.OS === 'web') return;
  if (!data?.url) throw new Error('Supabase non ha restituito l’indirizzo di accesso.');

  const esito = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);
  if (esito.type !== 'success') {
    // L'utente ha annullato: non è un errore da mostrare.
    if (esito.type === 'cancel' || esito.type === 'dismiss') return;
    throw new Error('Accesso non completato.');
  }

  const token = estraiToken(esito.url);
  if (!token) throw new Error('Risposta di accesso non valida.');

  const { error: erroreSessione } = await supabase.auth.setSession(token);
  if (erroreSessione) throw erroreSessione;
}

/**
 * Accesso via email senza password: Supabase manda un link, toccandolo si
 * torna nell'app già autenticati. Una password in meno da dimenticare.
 */
export async function inviaLinkEmail(email: string): Promise<void> {
  if (!supabase) throw new Error('Supabase non configurato.');
  const { error } = await supabase.auth.signInWithOtp({
    email: email.trim(),
    options: { emailRedirectTo: Linking.createURL('accedi') },
  });
  if (error) throw error;
}
