// Genera tutto ciò che porta il logo a partire da un unico file sorgente.
//
//   npm run icone
//
// Sorgente attesa: assets/logo-sorgente.png — il logo su un fondo chiaro
// e uniforme, con la parola «Legul» sopra e la trascrizione fonetica
// sotto, separate da una riga vuota.
//
// Che cosa produce, e perché ogni formato è diverso:
//   - assets/logo/parola.png, fonetica.png, completo.png
//       il logo su trasparente, per l'app. Parola e fonetica sono
//       separate perché l'intro le fa comparire in due tempi.
//   - assets/icon.png
//       iOS ritaglia da sé gli angoli e rifiuta la trasparenza: quadrato
//       pieno, senza canale alfa.
//   - assets/adaptive-icon.png
//       Android compone l'icona da due strati e ritaglia il primo piano
//       con forme diverse a seconda del telefono: il contenuto deve stare
//       nel cerchio centrale, altrimenti su alcuni dispositivi si taglia.
//   - assets/splash.png
//       la schermata di avvio, su trasparente: il fondo lo mette app.json.
//   - assets/favicon.png
//       la versione web.
//
// Nell'icona va solo la parola, non la fonetica. A sessanta punti — la
// misura di un'icona sulla schermata Home — la riga fonetica sarebbe alta
// cinque o sei pixel: non una scritta ma una striscia grigia, che sporca
// il disegno invece di completarlo. Dove il logo è grande, cioè l'avvio e
// l'intro, c'è tutto.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const RADICE = join(dirname(fileURLToPath(import.meta.url)), '..');
const SORGENTE = join(RADICE, 'assets', 'logo-sorgente.png');
const USCITA = join(RADICE, 'assets');
const USCITA_LOGO = join(USCITA, 'logo');

const LATO = 1024;
/** Larghezza della parola nell'icona iOS, in quota del lato. */
const QUOTA_ICONA = 0.76;
/**
 * Larghezza della parola nel primo piano Android.
 *
 * La zona che nessuna maschera taglia è un cerchio di diametro pari al
 * sessantasei per cento del lato. La parola è larga il doppio di quanto è
 * alta, quindi a decidere sono i suoi angoli: al cinquantasei per cento
 * l'angolo più lontano sta a 320 pixel dal centro, sotto i 338 del raggio
 * sicuro.
 */
const QUOTA_ADATTIVA = 0.56;
/** Larghezza del logo completo nella schermata di avvio. */
const QUOTA_AVVIO = 0.62;

/*
  Soglia sotto la quale uno scurimento è rumore di compressione e non
  disegno: tre per cento, cioè sette o otto unità su un fondo quasi
  bianco. Il fondo dei file esportati dai generatori di immagini non è mai
  perfettamente uniforme.
*/
const RUMORE = 0.03;

const { data, info } = await sharp(SORGENTE).raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

/** Colore medio dei quattro angoli: il fondo del logo. */
function coloreDiFondo() {
  const somma = [0, 0, 0];
  let n = 0;
  for (const [cx, cy] of [
    [0, 0],
    [W - 16, 0],
    [0, H - 16],
    [W - 16, H - 16],
  ]) {
    for (let y = cy; y < cy + 16; y++) {
      for (let x = cx; x < cx + 16; x++) {
        const i = (y * W + x) * C;
        somma[0] += data[i];
        somma[1] += data[i + 1];
        somma[2] += data[i + 2];
        n++;
      }
    }
  }
  return somma.map((v) => Math.round(v / n));
}

const fondo = coloreDiFondo();

/*
  Il logo su trasparente, con la tecnica del «colore in trasparenza».

  Per ogni pixel si cerca la trasparenza minima che, posata su quel fondo,
  restituisce esattamente il colore osservato; poi si ricava il colore
  pieno. È ciò che conserva i bordi sfumati delle lettere e il riflesso di
  luce sul «g» e sulla «u», che una soglia netta taglierebbe in gradini.

  Si conta solo lo scurimento. Ogni parte del logo è più scura del fondo
  crema, e un pixel più chiaro del fondo è rumore: contarlo farebbe
  dividere per uno — il fondo è quasi bianco — e basterebbe un'unità di
  scarto per produrre un pixel pieno.
*/
const rgba = Buffer.alloc(W * H * 4);
for (let p = 0; p < W * H; p++) {
  const i = p * C;
  const j = p * 4;
  let a = 0;
  for (let k = 0; k < 3; k++) {
    const scurimento = (fondo[k] - data[i + k]) / fondo[k];
    if (scurimento > a) a = scurimento;
  }
  if (a < RUMORE) continue; // resta trasparente
  a = Math.min(1, a);
  for (let k = 0; k < 3; k++) {
    rgba[j + k] = Math.max(0, Math.min(255, Math.round((data[i + k] - fondo[k]) / a + fondo[k])));
  }
  rgba[j + 3] = Math.round(a * 255);
}

const trasparente = sharp(rgba, { raw: { width: W, height: H, channels: 4 } });

/** Righe occupate: due bande, la parola e sotto la fonetica. */
function bande() {
  const elenco = [];
  let dentro = false;
  let inizio = 0;
  for (let y = 0; y < H; y++) {
    let piena = false;
    for (let x = 0; x < W && !piena; x++) piena = rgba[(y * W + x) * 4 + 3] > 10;
    if (piena && !dentro) {
      dentro = true;
      inizio = y;
    }
    if (!piena && dentro) {
      dentro = false;
      elenco.push([inizio, y - 1]);
    }
  }
  if (dentro) elenco.push([inizio, H - 1]);
  // Le bande di una riga o due sono granelli, non scritte.
  return elenco.filter(([a, b]) => b - a > 6);
}

const [bandaParola, bandaFonetica] = bande();
if (!bandaParola || !bandaFonetica) {
  throw new Error(
    'Nel logo non ho trovato due bande distinte (parola e fonetica). ' +
      'Il sorgente deve avere la scritta sopra e la trascrizione sotto, separate da uno spazio.'
  );
}

/** Ritaglia una banda verticale, stretta attorno al disegno, con un margine. */
async function ritaglio(y0, y1, margine = 8) {
  let minX = W;
  let maxX = -1;
  let minY = H;
  let maxY = -1;
  for (let y = y0; y <= y1; y++) {
    for (let x = 0; x < W; x++) {
      if (rgba[(y * W + x) * 4 + 3] > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const left = Math.max(0, minX - margine);
  const top = Math.max(0, minY - margine);
  const width = Math.min(W - left, maxX - minX + 1 + 2 * margine);
  const height = Math.min(H - top, maxY - minY + 1 + 2 * margine);
  const buffer = await trasparente.clone().extract({ left, top, width, height }).png().toBuffer();
  return { buffer, width, height };
}

mkdirSync(USCITA_LOGO, { recursive: true });

const parola = await ritaglio(bandaParola[0], bandaParola[1]);
const fonetica = await ritaglio(bandaFonetica[0], bandaFonetica[1]);
const completo = await ritaglio(bandaParola[0], bandaFonetica[1]);

await sharp(parola.buffer).png({ compressionLevel: 9 }).toFile(join(USCITA_LOGO, 'parola.png'));
await sharp(fonetica.buffer).png({ compressionLevel: 9 }).toFile(join(USCITA_LOGO, 'fonetica.png'));
await sharp(completo.buffer).png({ compressionLevel: 9 }).toFile(join(USCITA_LOGO, 'completo.png'));

/** Un livello trasparente centrato su una tela quadrata, largo `quota` del lato. */
async function suTela(livello, quota, sfondo) {
  const w = Math.round(LATO * quota);
  const h = Math.round((livello.height / livello.width) * w);
  const ridimensionato = await sharp(livello.buffer).resize(w, h).toBuffer();
  return sharp({
    create: {
      width: LATO,
      height: LATO,
      channels: 4,
      background: sfondo ?? { r: 0, g: 0, b: 0, alpha: 0 },
    },
  }).composite([
    { input: ridimensionato, left: Math.round((LATO - w) / 2), top: Math.round((LATO - h) / 2) },
  ]);
}

const pieno = { r: fondo[0], g: fondo[1], b: fondo[2], alpha: 1 };

// Icona iOS e generica: fondo pieno fino ai bordi, nessun canale alfa.
// removeAlpha() non è ridondante rispetto a flatten(): flatten fonde la
// trasparenza sul fondo ma lascia il canale nel file, e App Store Connect
// rifiuta al caricamento qualsiasi icona che ne abbia uno.
const icona = await (await suTela(parola, QUOTA_ICONA, pieno)).png().toBuffer();
await sharp(icona).flatten({ background: pieno }).removeAlpha().toFile(join(USCITA, 'icon.png'));

// Primo piano dell'icona adattiva Android: trasparente, dentro la zona sicura.
await (await suTela(parola, QUOTA_ADATTIVA)).png().toFile(join(USCITA, 'adaptive-icon.png'));

// Schermata di avvio: il logo completo su trasparente.
await (await suTela(completo, QUOTA_AVVIO)).png().toFile(join(USCITA, 'splash.png'));

// Favicon per la versione web.
await sharp(icona).resize(48, 48).flatten({ background: pieno }).removeAlpha().toFile(join(USCITA, 'favicon.png'));

const esadecimale = (c) => '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase();
const SFONDO = esadecimale(fondo);
writeFileSync(join(USCITA, 'colore-marchio.json'), JSON.stringify({ sfondo: SFONDO }, null, 2) + '\n');

console.log(`Logo: ${W}x${H} px, fondo ${SFONDO}`);
console.log(`Parola ${parola.width}x${parola.height}, fonetica ${fonetica.width}x${fonetica.height}`);
console.log('Generati: logo/parola.png, logo/fonetica.png, logo/completo.png,');
console.log('          icon.png, adaptive-icon.png, splash.png, favicon.png');
console.log(`\nColore di fondo da usare in app.json: ${SFONDO}`);
console.log('  → in android.adaptiveIcon.backgroundColor.');
if (W < 1500) {
  console.log(
    `\nNota: il sorgente è largo ${W} pixel. L'icona è a ${LATO}: la parola viene ingrandita ` +
      'e perde un po\' di nitidezza. Un sorgente da 2000 pixel, o un SVG, la renderebbe netta.'
  );
}
