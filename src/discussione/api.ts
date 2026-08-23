/**
 * Accesso alla discussione sul database.
 *
 * Tutte le scritture passano da funzioni Postgres (`rpc`) e non da INSERT
 * diretti: i limiti di lunghezza, il filtro sul linguaggio e il tetto
 * anti-spam devono valere per chiunque, e la chiave anonima dell'app è
 * pubblica per costruzione — chi volesse aggirarli lo farebbe con una
 * chiamata HTTP fatta a mano.
 */

import { supabase, supabaseConfigurato } from '../auth/supabase';
import { daGrezzo, type GenereMessaggio, type Messaggio, type MessaggioGrezzo } from './modello';

export const discussioneDisponibile = supabaseConfigurato;

export interface UtenteBloccato {
  utenteId: string;
  pseudonimo: string;
  creatoIl: string;
}

class DiscussioneSpenta extends Error {
  constructor() {
    super('La discussione non è disponibile: manca la configurazione del server.');
  }
}

function client() {
  if (!supabase) throw new DiscussioneSpenta();
  return supabase;
}

/**
 * Messaggio d'errore da mostrare all'utente.
 *
 * Le nostre funzioni sollevano eccezioni già scritte in italiano e già
 * comprensibili; tutto il resto (violazioni di vincoli, errori di rete)
 * arriva in inglese e col gergo del database, e non va messo davanti a
 * nessuno.
 */
export function messaggioErrore(errore: unknown): string {
  const testo = errore instanceof Error ? errore.message : String(errore ?? '');
  const nostro = /^[A-ZÀ-Ù].*[.!?]$/.test(testo) && !/[a-z]_[a-z]|violates|duplicate key/i.test(testo);
  if (nostro) return testo;
  if (/Failed to fetch|Network|fetch failed/i.test(testo)) {
    return 'Nessuna connessione: riprova quando sei online.';
  }
  return 'Qualcosa è andato storto. Riprova fra un momento.';
}

export async function leggiDiscussione(argomento: string): Promise<Messaggio[]> {
  const { data, error } = await client().rpc('discussione', { p_argomento: argomento });
  if (error) throw error;
  return ((data ?? []) as MessaggioGrezzo[]).map(daGrezzo);
}

export async function contaDiscussione(argomento: string): Promise<number> {
  const { data, error } = await client().rpc('conteggio_discussione', { p_argomento: argomento });
  if (error) throw error;
  return typeof data === 'number' ? data : 0;
}

export async function pubblica(opzioni: {
  argomento: string;
  genere: GenereMessaggio;
  testo: string;
  padreId?: string | null;
}): Promise<string> {
  const { data, error } = await client().rpc('pubblica_commento', {
    p_argomento: opzioni.argomento,
    p_genere: opzioni.genere,
    p_testo: opzioni.testo,
    p_padre_id: opzioni.padreId ?? null,
  });
  if (error) throw error;
  return data as string;
}

export async function vota(commentoId: string, valore: 1 | -1 | 0): Promise<void> {
  const { error } = await client().rpc('vota_commento', {
    p_commento_id: commentoId,
    p_valore: valore,
  });
  if (error) throw error;
}

export async function elimina(commentoId: string): Promise<void> {
  const { error } = await client().rpc('elimina_commento', { p_commento_id: commentoId });
  if (error) throw error;
}

export async function segnala(commentoId: string, motivo?: string): Promise<void> {
  const { error } = await client().rpc('segnala_commento', {
    p_commento_id: commentoId,
    p_motivo: motivo ?? null,
  });
  if (error) throw error;
}

export async function blocca(utenteId: string): Promise<void> {
  const sb = client();
  const { data } = await sb.auth.getUser();
  if (!data.user) throw new Error('Serve l’accesso per bloccare qualcuno.');
  const { error } = await sb
    .from('blocchi')
    .upsert({ utente_id: data.user.id, bloccato_id: utenteId });
  if (error) throw error;
}

export async function sblocca(utenteId: string): Promise<void> {
  const sb = client();
  const { data } = await sb.auth.getUser();
  if (!data.user) return;
  const { error } = await sb
    .from('blocchi')
    .delete()
    .eq('utente_id', data.user.id)
    .eq('bloccato_id', utenteId);
  if (error) throw error;
}

export async function leggiUtentiBloccati(): Promise<UtenteBloccato[]> {
  const { data, error } = await client().rpc('utenti_bloccati');
  if (error) throw error;
  return ((data ?? []) as { utente_id: string; pseudonimo: string; creato_il: string }[]).map(
    (r) => ({ utenteId: r.utente_id, pseudonimo: r.pseudonimo, creatoIl: r.creato_il })
  );
}

export async function leggiPseudonimo(): Promise<string | null> {
  const { data, error } = await client().rpc('mio_pseudonimo');
  if (error) throw error;
  return (data as string | null) ?? null;
}

export async function impostaPseudonimo(nome: string): Promise<string> {
  const { data, error } = await client().rpc('imposta_pseudonimo', { p_nome: nome });
  if (error) throw error;
  return data as string;
}
