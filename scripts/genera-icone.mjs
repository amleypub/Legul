// Genera icona, icona adattiva Android, immagine di avvio e favicon a
// partire da un unico file sorgente.
//
//   npm run icone
//
// Sorgente attesa: assets/logo-sorgente.png — il logo su fondo pieno,
// anche con margine e ombra intorno (vengono rimossi).
//
// Perché non si usa il file sorgente così com'è:
//   - iOS ritaglia da sé gli angoli e rifiuta la trasparenza: l'icona
//     deve essere un quadrato pieno, senza angoli arrotondati propri e
//     senza il margine bianco che li circonda.
//   - Android compone l'icona da due strati, e ritaglia il primo piano
//     con forme diverse a seconda del telefono: il contenuto deve stare
//     nel 66% centrale, altrimenti su alcuni dispositivi viene tagliato.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const RADICE = join(dirname(fileURLToPath(import.meta.url)), '..');
const SORGENTE = join(RADICE, 'assets', 'logo-sorgente.png');
const USCITA = join(RADICE, 'assets');

const LATO = 1024;
/** Quota del lato occupata dal contenuto nell'icona adattiva Android. */
const QUOTA_SICURA = 0.6;
/** Quota del lato occupata dal contenuto nella schermata di avvio. */
const QUOTA_AVVIO = 0.55;

const distanza = (a, b) =>
  Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2);

/**
 * Distanza di un colore dal segmento che unisce due colori.
 *
 * Serve a riconoscere i pixel sfumati lungo il bordo arrotondato del
 * logo: non sono né pagina né fondo, ma una miscela dei due, e senza
 * questo controllo sopravvivono come un anello di contenuto attorno a
 * tutto il quadrato.
 */
function distanzaDalSegmento(c, a, b) {
  const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
  const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
  const lung2 = ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2;
  if (lung2 === 0) return distanza(c, a);
  const t = Math.max(0, Math.min(1, (ac[0] * ab[0] + ac[1] * ab[1] + ac[2] * ab[2]) / lung2));
  return distanza(c, [a[0] + ab[0] * t, a[1] + ab[1] * t, a[2] + ab[2] * t]);
}

/** Riquadro dei pixel che si discostano da un colore di riferimento. */
function riquadro(data, W, H, C, riferimento, soglia) {
  let minX = W, maxX = -1, minY = H, maxY = -1;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * C;
      if (distanza([data[i], data[i + 1], data[i + 2]], riferimento) > soglia) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 };
}

const { data, info } = await sharp(SORGENTE).raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;
const px = (x, y) => {
  const i = (y * W + x) * C;
  return [data[i], data[i + 1], data[i + 2]];
};

// 1. Il colore della pagina attorno al logo, letto da un angolo.
const pagina = px(2, 2);

// 2. Il riquadro del logo. La soglia alta esclude l'ombra sfumata, che è
//    vicina al bianco della pagina e allargherebbe il riquadro.
const logo = riquadro(data, W, H, C, pagina, 90);
// Il logo è quadrato per costruzione: si prende il lato minore e lo si
// centra, così un'ombra asimmetrica non sposta il ritaglio.
const lato = Math.min(logo.w, logo.h);
const q = {
  x: logo.x + Math.round((logo.w - lato) / 2),
  y: logo.y + Math.round((logo.h - lato) / 2),
  lato,
};

// 3. Il colore di fondo del logo, letto poco dentro il bordo del quadrato
//    (a metà altezza, dove non c'è contenuto).
const fondo = px(q.x + Math.round(lato * 0.04), q.y + Math.round(lato / 2));

// 4. Contenuto su trasparente: si toglie il fondo con una rampa morbida e
//    si recupera il colore originale dai pixel semitrasparenti, che
//    altrimenti resterebbero circondati da un alone del colore di fondo.
const DENTRO = 45; // sotto: è fondo
const FUORI = 100; // sopra: è contenuto pieno

/**
 * Che cosa sta dentro il quadrato del logo.
 *
 * Il colore da solo non basta: il logotipo è bianco, e il bianco della
 * pagina attorno al logo è lo stesso bianco. Si parte quindi dal bordo
 * dell'immagine e si allaga verso l'interno finché si incontrano pixel
 * più vicini alla pagina che al fondo; l'arancione ferma l'allagamento.
 * Il logotipo bianco, essendo circondato dall'arancione, non viene mai
 * raggiunto e resta correttamente riconosciuto come contenuto.
 */
function calcolaInterno() {
  const esterno = new Uint8Array(lato * lato);
  const pila = [];
  const allagabile = (x, y) => {
    const c = px(q.x + x, q.y + y);
    return distanza(c, pagina) < distanza(c, fondo);
  };
  const spingi = (x, y, forza = false) => {
    if (x < 0 || y < 0 || x >= lato || y >= lato) return;
    const i = y * lato + x;
    if (esterno[i] || (!forza && !allagabile(x, y))) return;
    esterno[i] = 1;
    pila.push(x, y);
  };
  // Il ritaglio coincide con il bordo del logo, quindi sulla cornice non
  // c'è pagina da cui far partire l'allagamento: quei pixel sono il bordo
  // sfumato del quadrato, a metà strada fra pagina e fondo, e vanno presi
  // per esterni d'ufficio. Senza, sopravvivono come un arco lungo il
  // perimetro che sposta il ritaglio e scentra il marchio.
  for (let x = 0; x < lato; x++) {
    spingi(x, 0, true);
    spingi(x, lato - 1, true);
  }
  for (let y = 0; y < lato; y++) {
    spingi(0, y, true);
    spingi(lato - 1, y, true);
  }
  while (pila.length) {
    const y = pila.pop();
    const x = pila.pop();
    spingi(x + 1, y);
    spingi(x - 1, y);
    spingi(x, y + 1);
    spingi(x, y - 1);
  }
  return esterno;
}

/**
 * Allarga di qualche pixel la zona esterna.
 *
 * Il bordo del logo non è netto: resta un filo di pixel sfumati che
 * l'allagamento non raggiunge e che riaffiora come un arco sottile lungo
 * il perimetro. Mangiare due o tre pixel lo elimina, e il contenuto vero
 * è abbastanza lontano dal bordo da non risentirne.
 */
function allarga(mappa, passi) {
  let corrente = mappa;
  for (let p = 0; p < passi; p++) {
    const prossima = Uint8Array.from(corrente);
    for (let y = 0; y < lato; y++) {
      for (let x = 0; x < lato; x++) {
        if (corrente[y * lato + x]) continue;
        const vicini =
          (x > 0 && corrente[y * lato + x - 1]) ||
          (x < lato - 1 && corrente[y * lato + x + 1]) ||
          (y > 0 && corrente[(y - 1) * lato + x]) ||
          (y < lato - 1 && corrente[(y + 1) * lato + x]);
        if (vicini) prossima[y * lato + x] = 1;
      }
    }
    corrente = prossima;
  }
  return corrente;
}

const esterno = allarga(calcolaInterno(), 4);

const rgba = Buffer.alloc(lato * lato * 4);
for (let y = 0; y < lato; y++) {
  for (let x = 0; x < lato; x++) {
    const [r, g, b] = px(q.x + x, q.y + y);
    const d = distanza([r, g, b], fondo);
    let a = Math.max(0, Math.min(1, (d - DENTRO) / (FUORI - DENTRO)));
    if (esterno[y * lato + x]) a = 0;
    const j = (y * lato + x) * 4;
    if (a === 0) {
      rgba[j] = rgba[j + 1] = rgba[j + 2] = rgba[j + 3] = 0;
      continue;
    }
    // Il pixel osservato è una miscela fra contenuto e fondo: si inverte
    // la miscela per ottenere il colore pieno del contenuto.
    rgba[j] = Math.max(0, Math.min(255, (r - (1 - a) * fondo[0]) / a));
    rgba[j + 1] = Math.max(0, Math.min(255, (g - (1 - a) * fondo[1]) / a));
    rgba[j + 2] = Math.max(0, Math.min(255, (b - (1 - a) * fondo[2]) / a));
    rgba[j + 3] = Math.round(a * 255);
  }
}

const contenutoPieno = sharp(rgba, { raw: { width: lato, height: lato, channels: 4 } }).png();
const ritaglio = await contenutoPieno.clone().trim({ threshold: 1 }).toBuffer({ resolveWithObject: true });
const contenuto = ritaglio.data;
const cw = ritaglio.info.width;
const ch = ritaglio.info.height;

const esadecimale = (c) => '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('');
const SFONDO = esadecimale(fondo);

mkdirSync(USCITA, { recursive: true });

/** Contenuto centrato su una tela quadrata, occupando `quota` del lato. */
async function suTela(quota, sfondo) {
  const max = Math.round(LATO * quota);
  const scala = Math.min(max / cw, max / ch);
  const w = Math.round(cw * scala);
  const h = Math.round(ch * scala);
  const ridimensionato = await sharp(contenuto).resize(w, h).toBuffer();
  return sharp({
    create: {
      width: LATO,
      height: LATO,
      channels: 4,
      background: sfondo ?? { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: ridimensionato,
        left: Math.round((LATO - w) / 2),
        top: Math.round((LATO - h) / 2),
      },
    ])
    .png();
}

const pieno = { r: fondo[0], g: fondo[1], b: fondo[2], alpha: 1 };

// Icona iOS e generica: fondo pieno fino ai bordi, nessuna trasparenza.
// Il contenuto conserva le proporzioni che aveva nel logo originale.
const quotaOriginale = Math.max(cw, ch) / lato;
// removeAlpha() non è ridondante rispetto a flatten(): flatten fonde la
// trasparenza sul fondo ma lascia il canale nel file, e App Store Connect
// rifiuta al caricamento qualsiasi icona che ne abbia uno.
await (await suTela(quotaOriginale, pieno))
  .flatten({ background: pieno })
  .removeAlpha()
  .toFile(join(USCITA, 'icon.png'));

// Primo piano dell'icona adattiva Android: trasparente, dentro la zona
// sicura, perché il sistema lo ritaglia con forme diverse.
await (await suTela(QUOTA_SICURA)).toFile(join(USCITA, 'adaptive-icon.png'));

// Schermata di avvio: solo il contenuto, il fondo lo mette app.json.
await (await suTela(QUOTA_AVVIO)).toFile(join(USCITA, 'splash-icon.png'));

// Favicon per la versione web.
await sharp(join(USCITA, 'icon.png')).resize(48, 48).removeAlpha().toFile(join(USCITA, 'favicon.png'));

writeFileSync(
  join(USCITA, 'colore-marchio.json'),
  JSON.stringify({ sfondo: SFONDO }, null, 2) + '\n'
);

console.log(`Logo trovato: ${lato}x${lato} px, fondo ${SFONDO}`);
console.log(`Contenuto ritagliato: ${cw}x${ch} px`);
console.log('Generati: icon.png, adaptive-icon.png, splash-icon.png, favicon.png');
console.log(`\nColore di fondo da usare in app.json: ${SFONDO}`);
