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
  /*
    Un errore di lettura non deve abbattere il processo.

    Senza questo `on('error')` lo stream emette un evento non gestito e
    Node termina l'intero script: è successo lanciando un nuovo
    `expo export --clear` mentre una cattura era ancora in corso, perché
    la cartella `web-build` veniva svuotata sotto al server. Il risultato
    era una cattura interrotta a metà che lasciava sul disco gli scatti
    del giro precedente, senza dire niente a nessuno.
  */
  const stream = fs.createReadStream(file);
  stream.on('error', (err) => {
    console.log('SERVER — non riesco a leggere', p, ':', err.code);
    res.statusCode = 500;
    res.end();
  });
  stream.pipe(res);
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

/*
  Confronta l'età del bundle con quella dei sorgenti.

  Un `expo export` avviato prima dell'ultima modifica produce un bundle
  che non la contiene: gli scatti sembrano freschi — sono stati appena
  riscritti — ma mostrano il codice vecchio. È già capitato di leggerli e
  concludere che una correzione non aveva funzionato, quando in realtà
  non era mai stata compilata. Meglio rifiutarsi di scattare.
*/
function verificaFreschezza() {
  const bundleDir = path.join(ROOT, '_expo', 'static', 'js', 'web');
  if (!fs.existsSync(bundleDir)) return;
  const bundle = fs
    .readdirSync(bundleDir)
    .filter((f) => f.endsWith('.js'))
    .map((f) => fs.statSync(path.join(bundleDir, f)).mtimeMs);
  if (!bundle.length) return;
  const compilato = Math.max(...bundle);

  let piuRecente = 0;
  let colpevole = '';
  const visita = (dir) => {
    for (const voce of fs.readdirSync(dir, { withFileTypes: true })) {
      const f = path.join(dir, voce.name);
      if (voce.isDirectory()) {
        if (voce.name !== '__tests__') visita(f);
      } else if (/\.(tsx?|json)$/.test(voce.name)) {
        const m = fs.statSync(f).mtimeMs;
        if (m > piuRecente) {
          piuRecente = m;
          colpevole = path.relative(path.join(__dirname, '..'), f);
        }
      }
    }
  };
  visita(path.join(__dirname, '..', 'src'));

  if (piuRecente > compilato) {
    const ritardo = Math.round((piuRecente - compilato) / 1000);
    console.log(
      `BUNDLE VECCHIO — ${colpevole} è stato modificato ${ritardo}s dopo la compilazione.`
    );
    console.log('Rilancia `npx expo export --platform web --output-dir web-build --clear`.');
    process.exit(2);
  }
}

async function main() {
  verificaFreschezza();
  await new Promise((r) => server.listen(8099, r));
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const page = await browser.newPage({
    viewport: { width: 402, height: 874 },
    deviceScaleFactor: 2,
  });
  // Con lo stato vuoto ogni schermata mostra solo zeri e non si capisce
  // come apparirà davvero: si semina un profilo di esempio, a meno che
  // non si chieda esplicitamente la vista del primo avvio (`--nuovo`).
  if (!process.argv.includes('--nuovo')) {
    const oggi = new Date().toISOString().slice(0, 10);
    const stato = {
      punti: 740,
      risposteCorrette: 128,
      risposteErrate: 22,
      quizCompletati: 14,
      // Undici lezioni superate: serve anche a verificare che il percorso
      // si apra sulla lezione corrente invece che in cima.
      lezioni: Object.fromEntries([
        ...Array.from({ length: 11 }, (_, i) => [`Diritto civile|1|${i}`, 3 - (i % 3)]),
        // Un po' di penale e di procedura penale: servono alla diagnosi,
        // che su una materia sola non avrebbe niente da confrontare.
        ...Array.from({ length: 5 }, (_, i) => [`Diritto penale|1|${i}`, 3]),
        ['Procedura penale|1|0', 2],
      ]),
      premium: false,
      audioAttivo: true,
      tracceLette: ['2023-civile', '2023-penale', '2022-civile'],
      badges: ['primo-quiz', 'dieci-corrette', 'cinquanta-corrette', 'streak-3', 'prima-traccia'],
      streak: 4,
      ultimoGiornoAttivita: oggi,
      puntiOggi: 30,
      // Le domande d'apertura sono già state fatte: senza questo, ogni
      // scatto mostrerebbe la prima domanda invece della schermata.
      aperturaFatta: true,
      promemoriaProposto: true,
      esame: {
        dataEsame: new Date(Date.now() + 120 * 86400000).toISOString().slice(0, 10),
        scritti: 'Diritto civile',
        procedura: 'Procedura civile',
        materiaScelta: 'Diritto costituzionale',
      },
      /*
        Risposte contate per materia: senza, la diagnosi non ha nulla da
        misurare. I numeri sono scelti perché la schermata mostri tutti
        gli stati che sa rappresentare — una materia sotto soglia, una
        buona, una con troppi pochi dati, e diverse mai iniziate.
      */
      perMateria: {
        'Diritto civile': { corrette: 88, errate: 40 },
        'Diritto penale': { corrette: 43, errate: 7 },
        'Procedura penale': { corrette: 7, errate: 5 },
      },
      // Il vecchio elenco piatto: serve anche a verificare che la
      // conversione in carte di ripasso avvenga all'avvio.
      erroriDaRipassare: [
        'civ-l1-004',
        'civ-l1-011',
        'pen-l1-002',
      ],
    };
    // `--streak-rotta`: ultima attività di cinque giorni fa. Serve a
    // controllare che il contatore dei giorni di fila non menta.
    if (process.argv.includes('--streak-rotta')) {
      const vecchio = new Date(Date.now() - 5 * 86400000).toISOString().slice(0, 10);
      stato.ultimoGiornoAttivita = vecchio;
      stato.puntiOggi = 0;
    }
    await page.addInitScript(
      ([chiave, valore]) => window.localStorage.setItem(chiave, valore),
      ['@legul/gamification/v1', JSON.stringify(stato)]
    );
  }

  // `--utente` finge una sessione già attiva, per vedere le schermate
  // riservate a chi ha effettuato l'accesso (serve un build con le
  // credenziali Supabase valorizzate, anche di prova).
  if (process.argv.includes('--utente')) {
    const sessione = {
      access_token: 'finto-access-token',
      token_type: 'bearer',
      expires_in: 3600,
      expires_at: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365,
      refresh_token: 'finto-refresh-token',
      user: {
        id: '00000000-0000-4000-8000-000000000000',
        aud: 'authenticated',
        role: 'authenticated',
        email: 'anna.rossi@esempio.it',
        app_metadata: { provider: 'email' },
        user_metadata: { full_name: 'Anna Rossi' },
        created_at: '2026-01-05T10:00:00Z',
      },
    };
    await page.addInitScript(
      ([chiave, valore]) => window.localStorage.setItem(chiave, valore),
      ['sb-demo-auth-token', JSON.stringify(sessione)]
    );
  }

  page.on('pageerror', (e) => console.log('PAGEERROR:', e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') console.log('CONSOLE.ERROR:', m.text());
  });
  await page.goto('http://127.0.0.1:8099', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);

  const outDir = path.join(__dirname, '..', 'shots');
  fs.mkdirSync(outDir, { recursive: true });

  /*
    Registro degli scatti.

    Serve a un problema che mi ha già ingannato: quando un passaggio
    fallisce, il file PNG del giro precedente resta sul disco, e chi lo
    riapre crede di guardare lo stato attuale. Uno scatto stantìo è
    peggio di uno mancante, perché non si annuncia. Qui ogni scrittura
    viene registrata e alla fine si stampa l'elenco di ciò che manca.
  */
  const scattati = new Set();
  const attesi = new Set();
  const shot = async (n) => {
    attesi.add(n);
    await page.screenshot({ path: path.join(outDir, n) });
    scattati.add(n);
  };
  const tap = async (testo, opts = {}) => {
    await page.getByText(testo, { exact: opts.exact !== false }).last().click({ timeout: 6000 });
    await page.waitForTimeout(opts.wait ?? 1200);
  };

  // Home è già mostrata
  await shot('1-home.png');

  // Le domande d'apertura, con lo stato azzerato: è la prima cosa che
  // vede chi installa l'app, e non compare in nessun altro scatto.
  try {
    const apertura = await browser.newPage({
      viewport: { width: 402, height: 874 },
      deviceScaleFactor: 2,
    });
    await apertura.goto('http://127.0.0.1:8099', { waitUntil: 'networkidle' });
    await apertura.waitForTimeout(3000);
    await apertura.screenshot({ path: path.join(outDir, '0e-apertura.png') });
    await apertura.getByText('Avanti').last().click({ timeout: 6000 });
    await apertura.waitForTimeout(900);
    await apertura.screenshot({ path: path.join(outDir, '0f-apertura-scritti.png') });
    await apertura.close();
  } catch (e) {
    console.log('apertura errore:', e.message);
  }

  // Tab Quiz -> elenco materie
  await tap('Quiz');
  await shot('2-quiz.png');

  // Il fondo dell'elenco: è dove sta il blocco della rosa dell'orale, con
  // la materia dichiarata in cima e le altre sotto. Serve a controllare
  // che le sei materie a scelta ci siano tutte e che non compaia più la
  // riga «non ancora coperte da Legul», ora che non ne manca nessuna.
  await page.mouse.move(201, 500);
  for (let n = 0; n < 12; n++) await page.mouse.wheel(0, 700);
  await page.waitForTimeout(1000);
  await shot('2a-quiz-rosa.png');
  for (let n = 0; n < 12; n++) await page.mouse.wheel(0, -700);
  await page.waitForTimeout(800);

  // Percorso di una materia
  await tap('Diritto civile');
  await shot('3-percorso.png');

  // Fondo del percorso: ora è tutto libero, non c'è più il riquadro Premium.
  await page.mouse.move(201, 500);
  for (let n = 0; n < 40; n++) await page.mouse.wheel(0, 900);
  await page.waitForTimeout(1200);
  await shot('3b-percorso-fondo.png');
  for (let n = 0; n < 40; n++) await page.mouse.wheel(0, -900);
  await page.waitForTimeout(1000);

  /*
    Apre la lezione da fare.

    Anche qui niente coordinate: il nodo si trova dalla sua etichetta di
    accessibilità, che è la stessa che leggono VoiceOver e TalkBack e che
    non si sposta quando cambia il disegno. È il selettore che è
    sopravvissuto al passaggio da serpentina a colonna, mentre il click
    a (201, 350) puntava al vuoto.
  */
  try {
    const daFare = page.getByLabel(/Lezione \d+, da fare/).first();
    await daFare.waitFor({ timeout: 8000 });
    await daFare.click({ timeout: 4000 });
  } catch {
    await page.mouse.click(201, 350);
  }
  await page.waitForTimeout(1600);
  await shot('4-lezione.png');

  /*
    Seleziona una risposta e conferma, per vedere il foglio di feedback.

    Le coordinate fisse non vanno bene: bastava spostare il percorso da
    serpentina a colonna perché il tocco non aprisse più nulla, il
    passaggio fallisse in silenzio e restasse sul disco lo scatto del
    giro precedente. Qui si clicca il testo dell'opzione e si aspetta
    che il foglio compaia davvero prima di scattare.
  */
  try {
    await page.getByText('Conferma').first().waitFor({ timeout: 8000 });
    const opzioni = page.locator('div[tabindex]', { hasText: /^(5 anni|10 anni|20 anni)$/ });
    if (await opzioni.count()) await opzioni.first().click({ timeout: 4000 });
    else await page.mouse.click(201, 300);
    await page.waitForTimeout(600);
    await shot('5-lezione-selezione.png');
    await tap('Conferma');
    // Il foglio è arrivato solo quando si legge l'esito: senza questa
    // attesa si fotografa la schermata di mezzo.
    await page
      .getByText(/Corretto!|Risposta errata/)
      .first()
      .waitFor({ timeout: 8000 });
    await page.waitForTimeout(500);
    await shot('6-lezione-feedback.png');
  } catch (e) {
    console.log('SALTATO lezione-feedback:', e.message.split('\n')[0]);
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
    ['11b-login-email.png', '/accedi', async () => tap('Continua con email')],
    ['12-materiale.png', '/materiale'],
    ['13-tracce.png', '/tracce'],
    ['14-traccia.png', '/traccia/2023-atto-civile'],
    // L'amministrativo, che prima non esisteva in archivio. Lo
    // svolgimento è riservato, quindi si scatta la traccia.
    ['14g-traccia-amministrativo.png', '/traccia/2023-atto-amministrativo'],
    // L'esercizio sul parere di amministrativo: serve a controllare che
    // sia riconoscibile come tale sia in elenco sia in dettaglio.
    ['13b-tracce-esercizio.png', '/tracce'],
    ['14h-parere-amministrativo.png', '/traccia/2026-parere-amministrativo'],
    ['14b-ripasso.png', '/ripasso'],
    // Lo svolgimento nasce tutto chiuso: senza aprire una sezione lo
    // scatto mostrerebbe solo l'indice.
    [
      '14e-svolgimento.png',
      '/svolgimento/2023-atto-civile',
      async () => tap('Qualificazione del contratto', { exact: false }),
    ],
    // Un contenuto riservato raggiunto per deep link: deve trovare il muro,
    // non il contenuto. È la prova che il confine non sta solo nell'elenco.
    ['14f-svolgimento-muro.png', '/svolgimento/2022-atto-penale'],
    ['0d-caso-muro.png', '/caso-pratico/privato-custodia-caduta'],
    // Il percorso della materia entrata per ultima in banca dati: serve
    // a controllare che colore, icona e conteggio delle lezioni ci siano.
    ['2b-percorso-ue.png', `/percorso/${encodeURIComponent('Diritto dell’Unione europea')}`],
    ['2c-percorso-internazionale.png', `/percorso/${encodeURIComponent('Diritto internazionale')}`],
    ['2d-percorso-tributario.png', `/percorso/${encodeURIComponent('Diritto tributario')}`],
    ['0-esame.png', '/esame'],
    ['0g-diagnosi.png', '/dove-sei-debole'],
    ['0b-caso-elenco.png', '/caso-pratico'],
    ['0c-caso.png', '/caso-pratico/privato-locazione-morosita'],
    ['14c-discussione.png', `/discussione/${encodeURIComponent('traccia:2023-atto-civile')}`],
    ['14d-comunita.png', '/comunita'],
    ['15-privacy.png', '/legale/privacy'],
    ['16-termini.png', '/legale/termini'],
  ];
  for (const [nome, url, azione] of deepLinks) {
    try {
      await page.goto('http://127.0.0.1:8099' + url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2600);
      if (azione) await azione();
      await shot(nome);
    } catch (e) {
      console.log(nome, 'errore:', e.message);
    }
  }

  await browser.close();
  server.close();
  const mancanti = [...attesi].filter((n) => !scattati.has(n));
  if (mancanti.length) {
    console.log('ATTENZIONE — scatti non aggiornati (resta la versione precedente):');
    for (const n of mancanti) console.log('  -', n);
  }
  console.log(`OK screenshots in shots/ (${scattati.size} aggiornati, ${mancanti.length} saltati)`);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
