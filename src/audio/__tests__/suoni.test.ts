import fs from 'fs';
import path from 'path';

/*
  Il motore dei suoni restava muto in tre casi, e nessuno dei tre si
  vedeva leggendo il codice di fretta: il riavvolgimento non aspettato,
  i player creati al primo uso, un solo player per suono. Qui ognuno ha
  il suo controllo.
*/

type Finto = {
  play: jest.Mock;
  seekTo: jest.Mock;
  playing: boolean;
  sorgente: unknown;
};

function carica() {
  const eventi: string[] = [];
  const creati: Finto[] = [];
  let seekRisolto: (() => void) | null = null;
  jest.resetModules();
  jest.doMock('expo-audio', () => ({
    setAudioModeAsync: jest.fn(async () => {
      eventi.push('sessione');
    }),
    createAudioPlayer: jest.fn((sorgente: unknown) => {
      eventi.push('player');
      const p: Finto = {
        sorgente,
        playing: false,
        play: jest.fn(() => eventi.push('play')),
        seekTo: jest.fn(
          () =>
            new Promise<void>((r) => {
              eventi.push('seek');
              seekRisolto = r;
            })
        ),
      };
      creati.push(p);
      return p;
    }),
  }));
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const modulo = require('../sounds') as typeof import('../sounds');
  return { modulo, eventi, creati, risolviSeek: () => seekRisolto?.() };
}

const ASSET = path.join(__dirname, '..', '..', '..', 'assets', 'sounds');

describe('suoni', () => {
  it('ha su disco ogni file che dichiara', () => {
    const testo = fs.readFileSync(path.join(__dirname, '..', 'sounds.ts'), 'utf8');
    const file = [...testo.matchAll(/assets\/sounds\/([a-z0-9]+\.wav)/g)].map((m) => m[1]);
    expect(file.length).toBeGreaterThan(5);
    for (const f of file) expect(fs.existsSync(path.join(ASSET, f))).toBe(true);
  });

  it('imposta la sessione audio prima di creare i player, e li crea tutti all’avvio', async () => {
    const { modulo, eventi, creati } = carica();
    await modulo.preparaAudio();
    expect(eventi[0]).toBe('sessione');
    // otto suoni, due gemelli ciascuno: nessuno nasce al primo uso
    expect(creati.length).toBe(16);
  });

  it('non ricarica nulla se la preparazione viene chiesta di nuovo', async () => {
    const { modulo, creati } = carica();
    await modulo.preparaAudio();
    await modulo.preparaAudio();
    expect(creati.length).toBe(16);
  });

  it('aspetta che il riavvolgimento sia finito prima di suonare', async () => {
    const { modulo, eventi, risolviSeek } = carica();
    await modulo.preparaAudio();
    eventi.length = 0;
    modulo.playSound('correct');
    // Riavvolgimento chiesto, play non ancora partito.
    expect(eventi).toEqual(['seek']);
    risolviSeek();
    await Promise.resolve();
    await Promise.resolve();
    expect(eventi).toEqual(['seek', 'play']);
  });

  it('usa il gemello quando lo stesso suono si ripete prima di essere finito', async () => {
    const { modulo, creati } = carica();
    await modulo.preparaAudio();
    // In Jest ogni file audio diventa lo stesso segnaposto, quindi i
    // gemelli non si riconoscono dalla sorgente: si guarda chi viene usato.
    modulo.playSound('star1');
    const primo = creati.find((p) => p.seekTo.mock.calls.length > 0)!;
    primo.playing = true;
    modulo.playSound('star1');
    const usati = creati.filter((p) => p.seekTo.mock.calls.length > 0);
    expect(usati.length).toBe(2);
    expect(usati[0]).not.toBe(usati[1]);
  });

  it('tace quando l’audio è disattivato', async () => {
    const { modulo, creati } = carica();
    await modulo.preparaAudio();
    modulo.setAudioEnabled(false);
    modulo.playSound('correct');
    expect(creati.every((p) => p.seekTo.mock.calls.length === 0)).toBe(true);
  });

  it('dà a ogni stella una nota diversa, che sale', () => {
    const { modulo } = carica();
    expect([1, 2, 3].map(modulo.suonoStella)).toEqual(['star1', 'star2', 'star3']);
    // Valori fuori misura non devono restituire un suono inesistente.
    expect(modulo.suonoStella(0)).toBe('star1');
    expect(modulo.suonoStella(7)).toBe('star3');
  });

  it('non ha clic all’inizio né alla fine dei file', () => {
    // Un campione iniziale o finale lontano da zero è un clic udibile.
    for (const f of fs.readdirSync(ASSET).filter((n) => n.endsWith('.wav'))) {
      const b = fs.readFileSync(path.join(ASSET, f));
      const n = (b.length - 44) / 2;
      const primo = b.readInt16LE(44) / 32768;
      const ultimo = b.readInt16LE(44 + 2 * (n - 1)) / 32768;
      expect({ f, primo: Math.abs(primo) < 0.01, ultimo: Math.abs(ultimo) < 0.01 }).toEqual({
        f,
        primo: true,
        ultimo: true,
      });
    }
  });
});
