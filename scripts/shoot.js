// Serve il build web e cattura screenshot delle schermate con Chromium headless.
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = path.join(__dirname, '..', 'web-build');
const EXE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.wav': 'audio/wav',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let file = path.join(ROOT, p);
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    // SPA fallback
    file = path.join(ROOT, 'index.html');
  }
  const ext = path.extname(file).toLowerCase();
  res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});

/** Costruisce l'URL della schermata di esito con i parametri richiesti. */
function esitoUrl({ stelle, corrette, punti, fallito = false }) {
  const q = new URLSearchParams({
    fallito: String(fallito),
    corrette: String(corrette),
    totale: '10',
    stelle: String(stelle),
    punti: String(punti),
    messaggio: fallito
      ? 'Ripassa le spiegazioni e riprova: sei più vicino di quanto pensi.'
      : 'Tre stelle piene: hai risposto correttamente a tutta la lezione.',
    nuoviBadge: fallito ? '' : 'primo-quiz',
  });
  return `/esito/${encodeURIComponent('Diritto civile')}/civile-l1-1?${q}`;
}

async function main() {
  await new Promise((r) => server.listen(8099, r));
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const page = await browser.newPage({
    viewport: { width: 402, height: 874 },
    deviceScaleFactor: 2,
  });
  page.on('pageerror', (e) => console.log('PAGEERROR:', e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') console.log('CONSOLE.ERROR:', m.text());
  });
  await page.goto('http://127.0.0.1:8099', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);

  const outDir = path.join(__dirname, '..', 'shots');
  fs.mkdirSync(outDir, { recursive: true });

  const shot = (n) => page.screenshot({ path: path.join(outDir, n) });
  const tap = async (testo, opts = {}) => {
    await page.getByText(testo, { exact: opts.exact !== false }).last().click({ timeout: 6000 });
    await page.waitForTimeout(opts.wait ?? 1200);
  };

  // Home è già mostrata
  await shot('1-home.png');

  // Tab Quiz -> elenco materie
  await tap('Quiz');
  await shot('2-quiz.png');

  // Percorso di una materia
  await tap('Diritto civile');
  await shot('3-percorso.png');

  // Fondo del percorso: le unità a pagamento con il riquadro Premium.
  await page.mouse.move(201, 500);
  for (let n = 0; n < 40; n++) await page.mouse.wheel(0, 900);
  await page.waitForTimeout(1200);
  await shot('3b-percorso-premium.png');
  for (let n = 0; n < 40; n++) await page.mouse.wheel(0, -900);
  await page.waitForTimeout(1000);

  // Primo nodo del percorso: il cerchio "play" sotto il fumetto INIZIA.
  await page.mouse.click(201, 350);
  await page.waitForTimeout(1400);
  await shot('4-lezione.png');

  // Seleziona una risposta e conferma, per vedere il foglio di feedback.
  try {
    await page.mouse.click(201, 300);
    await page.waitForTimeout(600);
    await shot('5-lezione-selezione.png');
    await tap('Conferma');
    await page.waitForTimeout(900);
    await shot('6-lezione-feedback.png');
  } catch (e) {
    console.log('lezione errore:', e.message);
  }

  // Torna alle tab e apri il Profilo.
  try {
    await page.goto('http://127.0.0.1:8099', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2500);
    await tap('Profilo');
    await shot('7-profilo.png');
  } catch (e) {
    console.log('profilo errore:', e.message);
  }

  // Schermate raggiunte via deep link (linking config di React Navigation).
  const deepLinks = [
    ['8-esito-perfetto.png', esitoUrl({ stelle: 3, corrette: 10, punti: 128 })],
    ['9-esito-fallito.png', esitoUrl({ stelle: 0, corrette: 4, punti: 22, fallito: true })],
    ['10-paywall.png', '/premium'],
    ['11-login.png', '/accedi'],
    ['12-materiale.png', '/materiale'],
    ['13-tracce.png', '/tracce'],
  ];
  for (const [nome, url] of deepLinks) {
    try {
      await page.goto('http://127.0.0.1:8099' + url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2600);
      await shot(nome);
    } catch (e) {
      console.log(nome, 'errore:', e.message);
    }
  }

  await browser.close();
  server.close();
  console.log('OK screenshots in shots/');
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
