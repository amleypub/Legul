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

  const shots = process.argv.slice(2);
  const tabs = shots.length ? shots : ['Home', 'Quiz', 'Profilo'];
  const outDir = path.join(__dirname, '..', 'shots');
  fs.mkdirSync(outDir, { recursive: true });

  // Home è già mostrata
  await page.screenshot({ path: path.join(outDir, '1-home.png') });

  // Naviga alle tab cliccando il testo nella tab bar
  let i = 2;
  for (const t of ['Quiz', 'Profilo']) {
    try {
      await page.getByText(t, { exact: true }).last().click({ timeout: 5000 });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(outDir, `${i}-${t.toLowerCase()}.png`) });
    } catch (e) {
      console.log('tab', t, 'errore:', e.message);
    }
    i++;
  }

  await browser.close();
  server.close();
  console.log('OK screenshots in shots/');
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
