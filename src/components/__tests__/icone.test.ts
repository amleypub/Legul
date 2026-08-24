import fs from 'fs';
import path from 'path';
import { glifoDi } from '../Icona';

/**
 * Un nome di icona non mappato non fa crashare nulla: sparisce e basta.
 * È il comportamento giusto a runtime e il peggiore possibile in fase di
 * sviluppo, perché un buco nell'interfaccia non si distingue da una
 * scelta di design. Questo controllo lo rende un errore rumoroso.
 */
describe('mappa delle icone', () => {
  const radice = path.join(__dirname, '..', '..');

  function fileSorgente(dir: string): string[] {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((v) => {
      const p = path.join(dir, v.name);
      if (v.isDirectory()) return v.name === '__tests__' ? [] : fileSorgente(p);
      return /\.tsx?$/.test(v.name) ? [p] : [];
    });
  }

  const sorgenti = fileSorgente(radice).filter((f) => !f.endsWith('Icona.tsx'));

  /** Nomi passati a `<Icona nome="…">` e memorizzati nei dati come `icona:`. */
  const usati = new Set<string>();
  for (const f of sorgenti) {
    const testo = fs.readFileSync(f, 'utf8');
    for (const m of testo.matchAll(/<Icona\s[^>]*nome=["']([a-z0-9-]+)["']/g)) usati.add(m[1]);
    for (const m of testo.matchAll(/icona:\s*'([a-z0-9-]+)'/g)) usati.add(m[1]);
  }

  it('trova nomi di icone nei sorgenti', () => {
    expect(usati.size).toBeGreaterThan(0);
  });

  it('copre ogni nome usato nel codice', () => {
    const mancanti = [...usati].filter((n) => glifoDi(n) === null).sort();
    expect(mancanti).toEqual([]);
  });

  it('restituisce null per un nome inventato, senza esplodere', () => {
    expect(glifoDi('icona-che-non-esiste')).toBeNull();
  });
});
