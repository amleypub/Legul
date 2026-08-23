// Cancellazione definitiva dell'account, richiesta da App Store e Play Store
// a ogni app che permette di registrarsi.
//
// Deve girare qui e non nell'app: eliminare un utente richiede la chiave
// `service_role`, che ha pieni poteri sul database. Se finisse dentro il
// bundle, chiunque potrebbe estrarla e cancellare gli account altrui.
//
// La funzione accetta solo il token dell'utente che chiama e cancella
// esclusivamente sé stesso: non riceve mai un id da fuori, così non è
// possibile passarle l'identificativo di qualcun altro.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function risposta(corpo: unknown, stato: number): Response {
  return new Response(JSON.stringify(corpo), {
    status: stato,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return risposta({ errore: 'Metodo non consentito.' }, 405);

  const autorizzazione = req.headers.get('Authorization') ?? '';
  const token = autorizzazione.replace(/^Bearer\s+/i, '').trim();
  if (!token) return risposta({ errore: 'Accesso richiesto.' }, 401);

  const admin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );

  // Il token viene verificato da Supabase: se è scaduto o contraffatto
  // non si ottiene alcun utente e non si cancella nulla.
  const { data, error } = await admin.auth.getUser(token);
  if (error || !data.user) return risposta({ errore: 'Sessione non valida.' }, 401);

  // La riga dei progressi ha una foreign key con ON DELETE CASCADE su
  // auth.users, quindi sparisce insieme all'utente. La cancelliamo lo
  // stesso, prima: se la cancellazione dell'utente fallisse a metà, è
  // meglio restare senza progressi che con progressi orfani.
  await admin.from('progressi').delete().eq('utente_id', data.user.id);

  const { error: erroreCancellazione } = await admin.auth.admin.deleteUser(data.user.id);
  if (erroreCancellazione) {
    return risposta({ errore: erroreCancellazione.message }, 500);
  }

  return risposta({ eliminato: true }, 200);
});
