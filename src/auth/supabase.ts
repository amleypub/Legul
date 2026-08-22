import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';

/**
 * Credenziali del progetto Supabase.
 *
 * Vanno messe in un file `.env` alla radice del progetto (vedi
 * `.env.example`). Il prefisso `EXPO_PUBLIC_` è obbligatorio: senza,
 * Expo non le include nel bundle. Sono chiavi pubbliche — la chiave
 * anonima è pensata per stare nell'app, la sicurezza vera la fanno le
 * policy RLS lato database, non la segretezza di questa stringa.
 */
const URL = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';

/**
 * Se le credenziali non ci sono, l'app deve continuare a funzionare come
 * prima: si studia da ospite e i progressi restano sul dispositivo.
 * Meglio di una schermata bianca o di un errore incomprensibile.
 */
export const supabaseConfigurato = URL.length > 0 && ANON_KEY.length > 0;

export const supabase: SupabaseClient | null = supabaseConfigurato
  ? createClient(URL, ANON_KEY, {
      auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        // Su mobile non esiste un URL da cui leggere il token: il ritorno
        // dall'OAuth lo gestiamo noi in `auth/oauth.ts`. Sul web invece
        // Supabase deve poterlo leggere dall'indirizzo.
        detectSessionInUrl: Platform.OS === 'web',
      },
    })
  : null;
