import type { MaterialeEsame } from '../types';

/**
 * Tag affiliato Amazon (Programma di Affiliazione Amazon.it).
 * Sostituire con il proprio tag, es. "legul-21".
 */
export const AMAZON_AFFILIATE_TAG = 'INSERISCI-TAG-21';

const AMAZON_BASE = 'https://www.amazon.it';

/**
 * Costruisce il link affiliato per un materiale:
 * - con ASIN  → link diretto alla scheda prodotto;
 * - senza ASIN → link alla ricerca Amazon (anch'essa tracciata dal tag).
 */
export function buildAffiliateUrl(materiale: MaterialeEsame): string {
  const tag = encodeURIComponent(AMAZON_AFFILIATE_TAG);
  if (materiale.asin) {
    return `${AMAZON_BASE}/dp/${materiale.asin}?tag=${tag}`;
  }
  const query = encodeURIComponent(materiale.searchQuery);
  return `${AMAZON_BASE}/s?k=${query}&tag=${tag}`;
}
