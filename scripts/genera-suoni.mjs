// Sintetizza gli effetti sonori dell'app.
//
//   node scripts/genera-suoni.mjs
//
// Perché sintetizzati e non scaricati: nessun problema di licenza, e
// soprattutto ogni suono è un'equazione che si può ritoccare — più acuto,
// più breve, più morbido — rilanciando lo script, invece di cercare un
// altro file che somigli a quello di prima.
//
// Il criterio, per tutti: intervalli consonanti (quinte, terze maggiori,
// accordi perfetti), un timbro di vetro o di campana, attacchi morbidi e
// code che si spengono in modo esponenziale, come fa un oggetto vero.
// Niente onde quadre, niente ronzii: il suono di una risposta esatta deve
// essere una piccola ricompensa, non un segnale acustico. Quello di una
// risposta sbagliata deve informare senza punire: chi sta imparando
// sbaglia spesso, e un suono che rimprovera lo sentirà cento volte.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const CAMPIONI = 44100;
const USCITA = join(dirname(fileURLToPath(import.meta.url)), '..', 'assets', 'sounds');

/** Frequenza di una nota: A4 = 440 Hz, temperamento equabile. */
const NOTE = { C4: -9, E4: -5, G4: -2, A4: 0, C5: 3, E5: 7, G5: 10, A5: 12, C6: 15, E6: 19, G6: 22, A6: 24, C7: 27, E7: 31 };
const hz = (nota) => 440 * 2 ** (NOTE[nota] / 12);

/**
 * Un rintocco di vetro.
 *
 * Sintesi additiva: la fondamentale e quattro parziali, ognuna con la sua
 * coda — le acute si spengono prima, come nei metalli e nel vetro, ed è
 * ciò che fa sembrare il suono un oggetto e non un oscillatore. L'ultima
 * parziale è leggermente inarmonica: dà la luccicanza del vetro. Una
 * seconda voce scordata di tre centesimi produce un battimento lento che
 * scalda il timbro.
 */
function rintocco(buf, { inizio, freq, amp = 1, coda = 0.3, attacco = 0.003, luce = 1 }) {
  const parziali = [
    { r: 1, a: 1 },
    { r: 2, a: 0.38 * luce },
    { r: 3, a: 0.13 * luce },
    { r: 4.02, a: 0.05 * luce },
    { r: 5.43, a: 0.03 * luce },
  ];
  const n0 = Math.round(inizio * CAMPIONI);
  const durata = Math.min(buf.length - n0, Math.round((coda * 7 + attacco) * CAMPIONI));
  for (let i = 0; i < durata; i++) {
    const t = i / CAMPIONI;
    const inviluppoAttacco = t < attacco ? 0.5 - 0.5 * Math.cos((Math.PI * t) / attacco) : 1;
    let v = 0;
    parziali.forEach((p, k) => {
      const tau = coda / (1 + 0.85 * k);
      const decadimento = Math.exp(-t / tau);
      const f = freq * p.r;
      v += p.a * decadimento * (Math.sin(2 * Math.PI * f * t) + 0.35 * Math.sin(2 * Math.PI * f * 1.0017 * t));
    });
    buf[n0 + i] += amp * inviluppoAttacco * v;
  }
}

/** Un tono basso e smorzato, con una leggera discesa di altezza. */
function tonfo(buf, { inizio, da, a, amp = 1, coda = 0.15 }) {
  const n0 = Math.round(inizio * CAMPIONI);
  const durata = Math.round(coda * 6 * CAMPIONI);
  let fase = 0;
  for (let i = 0; i < durata && n0 + i < buf.length; i++) {
    const t = i / CAMPIONI;
    const f = a + (da - a) * Math.exp(-t / 0.06);
    fase += (2 * Math.PI * f) / CAMPIONI;
    const inviluppo = (t < 0.005 ? t / 0.005 : 1) * Math.exp(-t / coda);
    buf[n0 + i] += amp * inviluppo * (Math.sin(fase) + 0.22 * Math.sin(2 * fase));
  }
}

/** Un ticchettio brevissimo, per la selezione di una risposta. */
function tocco(buf, { inizio, freq = 1900, amp = 1 }) {
  const n0 = Math.round(inizio * CAMPIONI);
  const durata = Math.round(0.03 * CAMPIONI);
  for (let i = 0; i < durata && n0 + i < buf.length; i++) {
    const t = i / CAMPIONI;
    const inviluppo = (t < 0.0008 ? t / 0.0008 : 1) * Math.exp(-t / 0.006);
    buf[n0 + i] += amp * inviluppo * Math.sin(2 * Math.PI * freq * t);
  }
}

/** Passa-basso a un polo: toglie l'asprezza delle parziali più acute. */
function ammorbidisci(buf, taglio) {
  const rc = 1 / (2 * Math.PI * taglio);
  const alfa = 1 / CAMPIONI / (rc + 1 / CAMPIONI);
  let y = 0;
  for (let i = 0; i < buf.length; i++) {
    y += alfa * (buf[i] - y);
    buf[i] = y;
  }
}

/**
 * Riverbero leggero: quattro linee di ritardo con retroazione, come in
 * un riverbero di Schroeder ridotto all'osso. Pochissimo, quanto basta
 * perché il suono abbia uno spazio intorno invece di uscire «secco»
 * dall'altoparlante del telefono.
 */
function stanza(buf, mix) {
  const ritardi = [1116, 1356, 1557, 1617].map((d) => Math.round((d * CAMPIONI) / 44100));
  const retro = 0.72;
  const umido = new Float64Array(buf.length);
  for (const d of ritardi) {
    const linea = new Float64Array(buf.length);
    for (let i = 0; i < buf.length; i++) {
      linea[i] = buf[i] + (i >= d ? retro * linea[i - d] * 0.9 : 0);
      umido[i] += linea[i] / ritardi.length;
    }
  }
  ammorbidisci(umido, 3200);
  for (let i = 0; i < buf.length; i++) buf[i] = buf[i] * (1 - mix) + umido[i] * mix * 1.6;
}

/** Porta il picco al livello voluto e chiude con una dissolvenza: niente clic. */
function finisci(buf, piccoDb) {
  let picco = 0;
  for (const v of buf) picco = Math.max(picco, Math.abs(v));
  const guadagno = picco > 0 ? 10 ** (piccoDb / 20) / picco : 1;
  const dissolvenza = Math.round(0.012 * CAMPIONI);
  for (let i = 0; i < buf.length; i++) {
    let v = buf[i] * guadagno;
    const daFine = buf.length - 1 - i;
    if (daFine < dissolvenza) v *= daFine / dissolvenza;
    buf[i] = v;
  }
  return buf;
}

/** Un file WAV a 16 bit, mono. */
function wav(buf) {
  const dati = Buffer.alloc(buf.length * 2);
  for (let i = 0; i < buf.length; i++) {
    dati.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(buf[i] * 32767))), i * 2);
  }
  const intestazione = Buffer.alloc(44);
  intestazione.write('RIFF', 0);
  intestazione.writeUInt32LE(36 + dati.length, 4);
  intestazione.write('WAVE', 8);
  intestazione.write('fmt ', 12);
  intestazione.writeUInt32LE(16, 16);
  intestazione.writeUInt16LE(1, 20); // PCM
  intestazione.writeUInt16LE(1, 22); // mono
  intestazione.writeUInt32LE(CAMPIONI, 24);
  intestazione.writeUInt32LE(CAMPIONI * 2, 28);
  intestazione.writeUInt16LE(2, 32);
  intestazione.writeUInt16LE(16, 34);
  intestazione.write('data', 36);
  intestazione.writeUInt32LE(dati.length, 40);
  return Buffer.concat([intestazione, dati]);
}

const vuoto = (secondi) => new Float64Array(Math.round(secondi * CAMPIONI));

const SUONI = {
  /*
    Risposta esatta: due rintocchi che salgono di una quinta, La e poi Mi,
    e una scintilla all'ottava sopra. La quinta è l'intervallo più
    consonante dopo l'ottava: suona come un «sì» senza bisogno di altro.
  */
  correct() {
    const b = vuoto(0.9);
    rintocco(b, { inizio: 0, freq: hz('A5'), amp: 0.75, coda: 0.24 });
    rintocco(b, { inizio: 0.075, freq: hz('E6'), amp: 1, coda: 0.3 });
    rintocco(b, { inizio: 0.14, freq: hz('A6'), amp: 0.22, coda: 0.12, luce: 0.5 });
    ammorbidisci(b, 7000);
    stanza(b, 0.16);
    return finisci(b, -5);
  },
  /*
    Risposta sbagliata: un tono basso e ovattato che scende appena. Dice
    «non era questa» con la voce bassa, e dura meno di un battito.
  */
  wrong() {
    const b = vuoto(0.55);
    tonfo(b, { inizio: 0, da: 247, a: 196, coda: 0.13 });
    ammorbidisci(b, 900);
    stanza(b, 0.07);
    return finisci(b, -11);
  },
  /* Selezione di una risposta: un ticchettio appena percettibile. */
  tap() {
    const b = vuoto(0.06);
    tocco(b, { inizio: 0.001 });
    ammorbidisci(b, 6000);
    return finisci(b, -19);
  },
  /*
    Le tre stelle dell'esito suonano un accordo perfetto che sale — Do, Mi,
    Sol — una nota per stella. Prima era la stessa nota tre volte, mentre
    il commento nel codice prometteva «tre note in sequenza».
  */
  star1: () => stella('C6'),
  star2: () => stella('E6'),
  star3: () => stella('G6'),
  /*
    Lezione superata: la risoluzione dopo le stelle, dal Sol al Do, con una
    nota grave sotto che dà calore.
  */
  complete() {
    const b = vuoto(1.9);
    rintocco(b, { inizio: 0, freq: hz('C5'), amp: 0.3, coda: 0.55, luce: 0.4 });
    rintocco(b, { inizio: 0, freq: hz('G5'), amp: 0.7, coda: 0.32 });
    rintocco(b, { inizio: 0.1, freq: hz('C6'), amp: 1, coda: 0.42 });
    ammorbidisci(b, 6500);
    stanza(b, 0.2);
    return finisci(b, -6);
  },
  /*
    Tre stelle: l'accordo intero che fiorisce, con un attacco più lento, e
    due scintille in alto che lo fanno brillare.
  */
  perfect() {
    const b = vuoto(2.9);
    for (const [nota, amp] of [
      ['C5', 0.3],
      ['C6', 0.65],
      ['E6', 0.5],
      ['G6', 0.5],
    ]) {
      rintocco(b, { inizio: 0, freq: hz(nota), amp, coda: 0.6, attacco: 0.012, luce: 0.7 });
    }
    rintocco(b, { inizio: 0.07, freq: hz('C7'), amp: 0.2, coda: 0.2, luce: 0.4 });
    rintocco(b, { inizio: 0.15, freq: hz('E7'), amp: 0.14, coda: 0.18, luce: 0.4 });
    ammorbidisci(b, 6500);
    stanza(b, 0.24);
    return finisci(b, -5);
  },
};

function stella(nota) {
  const b = vuoto(0.7);
  rintocco(b, { inizio: 0, freq: hz(nota), amp: 1, coda: 0.22 });
  rintocco(b, { inizio: 0.02, freq: hz(nota) * 2, amp: 0.16, coda: 0.1, luce: 0.4 });
  ammorbidisci(b, 7000);
  stanza(b, 0.14);
  return finisci(b, -8);
}

mkdirSync(USCITA, { recursive: true });
for (const [nome, genera] of Object.entries(SUONI)) {
  const campioni = genera();
  writeFileSync(join(USCITA, `${nome}.wav`), wav(campioni));
  let picco = 0;
  for (const v of campioni) picco = Math.max(picco, Math.abs(v));
  console.log(
    `${nome.padEnd(9)} ${(campioni.length / CAMPIONI).toFixed(2)} s  picco ${(20 * Math.log10(picco)).toFixed(1)} dBFS`
  );
}
