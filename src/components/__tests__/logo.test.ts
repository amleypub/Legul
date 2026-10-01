import fs from 'fs';
import path from 'path';
import { DIMENSIONI_LOGO, altezzaParola, larghezzaFonetica } from '../Logo';

/** Larghezza e altezza di un PNG, lette dall'intestazione IHDR. */
function dimensioniPng(file: string): { larghezza: number; altezza: number } {
  const b = fs.readFileSync(file);
  // Firma PNG (8 byte), lunghezza del blocco (4), «IHDR» (4), poi larghezza e altezza.
  expect(b.toString('ascii', 12, 16)).toBe('IHDR');
  return { larghezza: b.readUInt32BE(16), altezza: b.readUInt32BE(20) };
}

const ASSET = path.join(__dirname, '..', '..', '..', 'assets');

describe('logo', () => {
  /*
    Le proporzioni del logo sono scritte in `Logo.tsx` perché non si
    possono leggere a runtime su tutte le piattaforme. Se qualcuno
    rigenera il logo da un sorgente nuovo e dimentica di aggiornarle,
    l'app non dà errori: mostra una parola schiacciata o allungata. Qui
    invece il test fallisce e dice quali numeri scrivere.
  */
  it.each(['parola', 'fonetica'] as const)('dichiara le dimensioni vere di %s.png', (nome) => {
    const vere = dimensioniPng(path.join(ASSET, 'logo', `${nome}.png`));
    expect({ [nome]: DIMENSIONI_LOGO[nome] }).toEqual({ [nome]: vere });
  });

  it('mantiene le proporzioni della parola a qualunque misura', () => {
    const { parola } = DIMENSIONI_LOGO;
    for (const w of [96, 132, 240, 300]) {
      expect(Math.abs(altezzaParola(w) / w - parola.altezza / parola.larghezza)).toBeLessThan(0.01);
    }
  });

  it('tiene la fonetica più stretta della parola, come nel disegno', () => {
    for (const w of [132, 240]) {
      expect(larghezzaFonetica(w)).toBeLessThan(w);
      expect(larghezzaFonetica(w)).toBeGreaterThan(0);
    }
  });

  it('ha un’icona iOS senza canale alfa', () => {
    // App Store Connect rifiuta al caricamento un'icona con trasparenza.
    const b = fs.readFileSync(path.join(ASSET, 'icon.png'));
    const tipoColore = b.readUInt8(25);
    // 2 = RGB, 6 = RGBA. Solo il primo è accettato.
    expect(tipoColore).toBe(2);
    expect(dimensioniPng(path.join(ASSET, 'icon.png'))).toEqual({ larghezza: 1024, altezza: 1024 });
  });
});
