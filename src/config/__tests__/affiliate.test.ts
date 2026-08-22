import { AMAZON_AFFILIATE_TAG, buildAffiliateUrl } from '../affiliate';
import { materiali } from '../../data/materiali';

describe('buildAffiliateUrl', () => {
  it('usa il link diretto alla scheda quando c’è l’ASIN', () => {
    const url = buildAffiliateUrl({
      id: 'x',
      titolo: 'Codice Civile',
      descrizione: '',
      categoria: 'Codici',
      searchQuery: 'codice civile',
      asin: 'B0ABCDEFG',
    });
    expect(url).toBe(`https://www.amazon.it/dp/B0ABCDEFG?tag=${AMAZON_AFFILIATE_TAG}`);
  });

  it('ripiega sulla ricerca quando l’ASIN manca', () => {
    const url = buildAffiliateUrl({
      id: 'x',
      titolo: 'Codice Civile',
      descrizione: '',
      categoria: 'Codici',
      searchQuery: 'codice civile 2026',
    });
    expect(url).toBe(
      `https://www.amazon.it/s?k=codice%20civile%202026&tag=${AMAZON_AFFILIATE_TAG}`
    );
  });

  it('codifica i caratteri speciali della ricerca', () => {
    const url = buildAffiliateUrl({
      id: 'x',
      titolo: '',
      descrizione: '',
      categoria: 'Manuali',
      searchQuery: 'diritto & procedura penale',
    });
    expect(url).toContain('k=diritto%20%26%20procedura%20penale');
    expect(url).not.toContain(' ');
  });
});

describe('catalogo materiali', () => {
  it('porta il tag affiliato su ogni link', () => {
    for (const m of materiali) {
      expect(buildAffiliateUrl(m)).toContain(`tag=${AMAZON_AFFILIATE_TAG}`);
    }
  });

  it('non ha identificatori duplicati', () => {
    const ids = materiali.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('dà a ogni materiale un modo per essere trovato', () => {
    const senzaRiferimento = materiali.filter((m) => !m.asin && !m.searchQuery?.trim());
    expect(senzaRiferimento.map((m) => m.id)).toEqual([]);
  });
});
