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
  await consegnaToken(token);
}

/** Il messaggio d'errore che Supabase mette nell'indirizzo di ritorno, se c'è. */
function estraiErrore(url: string): string | null {
  const parti = url.split(/[#?]/).slice(1).join('&');
  if (!parti) return null;
  const p = new URLSearchParams(parti);
  return p.get('error_description') ?? p.get('error');
}

let ultimoTokenAccettato: string | null = null;

/**
 * Apre la sessione con i token ricevuti, una volta sola per token.
 *
 * Su Android lo stesso ritorno arriva per due strade: come risultato
 * della scheda del browser e come link che riapre l'app. Senza questo
 * controllo la sessione verrebbe impostata due volte.
 */
async function consegnaToken(token: { access_token: string; refresh_token: string }): Promise<boolean> {
  if (!supabase || token.access_token === ultimoTokenAccettato) return false;
  ultimoTokenAccettato = token.access_token;
  const { error } = await supabase.auth.setSession(token);
  if (error) {
    ultimoTokenAccettato = null;
    throw error;
  }
  return true;
}

/**
 * Il ritorno dal link dell'email.
 *
 * Toccando il link nella posta il telefono riapre l'app su
 * `legul://accedi#access_token=…`, e qualcuno deve leggere quei token e
 * consegnarli a Supabase. Sul web lo fa Supabase da sé, leggendo la barra
 * degli indirizzi; su iPhone e Android non lo faceva nessuno, e l'accesso
 * via email finiva con l'app aperta e l'utente ancora ospite.
 *
 * Restituisce `'ok'` se ha aperto una sessione, il messaggio d'errore se
 * il link non era più valido, `null` se l'indirizzo non era un ritorno di
 * accesso. Lo stesso link può arrivare due volte — all'avvio e come
 * evento — e la seconda viene ignorata.
 */
export async function accettaLinkDiAccesso(url: string): Promise<'ok' | string | null> {
  if (!supabase || !url.includes('accedi')) return null;
  const token = estraiToken(url);
  if (!token) return estraiErrore(url);
  return (await consegnaToken(token)) ? 'ok' : null;
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
