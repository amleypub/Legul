// Genera le pagine pubbliche di privacy e termini dalla stessa sorgente
// usata dall'app (src/data/legale.ts), così i due testi non divergono.
//
//   npm run legale
//
// Le pagine finiscono in docs/, da cui GitHub Pages le pubblica.
// Richiede Node 22+ (esegue TypeScript rimuovendo i tipi).

import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DOCUMENTI,
  TITOLARE,
  campiTitolareDaCompletare,
  type DocumentoLegale,
} from '../src/data/legale.ts';

const RADICE = join(dirname(fileURLToPath(import.meta.url)), '..');
const USCITA = join(RADICE, 'docs');

/** Neutralizza i caratteri che altrimenti verrebbero letti come marcatori. */
function esc(t: string): string {
  return t
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const STILE = `
  :root {
    --ground: #F4F6FB; --surface: #FFFFFF; --ink: #1C1E26; --ink-soft: #545E70;
    --rule: #E3E8F1; --navy: #1B2A4A; --gold: #A8760A;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --ground: #0F131B; --surface: #171D28; --ink: #E9EDF5; --ink-soft: #A6AFC0;
      --rule: #262E3D; --navy: #B3C4E6; --gold: #E0A93C;
    }
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; background: var(--ground); color: var(--ink);
    font-family: "Nunito", system-ui, -apple-system, "Segoe UI", sans-serif;
    line-height: 1.65; -webkit-text-size-adjust: 100%;
  }
  .wrap { max-width: 44rem; margin: 0 auto; padding: 3rem 1.25rem 5rem; }
  header { border-bottom: 2px solid var(--navy); padding-bottom: 1.25rem; }
  .marchio {
    font-size: 0.72rem; font-weight: 800; letter-spacing: 0.16em;
    text-transform: uppercase; color: var(--gold); margin: 0;
  }
  h1 { font-size: clamp(1.9rem, 5vw, 2.5rem); line-height: 1.12; margin: 0.4rem 0 0; }
  .occhiello { color: var(--ink-soft); margin: 0.9rem 0 0; }
  .data {
    display: inline-block; margin-top: 1rem; padding: 0.3rem 0.7rem;
    border: 1px solid var(--rule); border-radius: 999px;
    font-size: 0.8rem; font-weight: 700; color: var(--ink-soft);
  }
  section { margin-top: 2.25rem; }
  h2 { font-size: 1.15rem; color: var(--navy); margin: 0 0 0.6rem; }
  p { margin: 0 0 0.85rem; }
  footer {
    margin-top: 3.5rem; padding-top: 1.25rem; border-top: 1px solid var(--rule);
    color: var(--ink-soft); font-size: 0.85rem;
  }
  a { color: var(--navy); }
  nav { margin-top: 1.5rem; display: flex; gap: 1rem; font-size: 0.9rem; }
`;

function pagina(doc: DocumentoLegale): string {
  const altro = doc.id === 'privacy' ? 'termini' : 'privacy';
  const altroTitolo = DOCUMENTI[altro].titolo;

  const sezioni = doc.sezioni
    .map(
      (s) =>
        `  <section>\n    <h2>${esc(s.titolo)}</h2>\n` +
        s.paragrafi.map((p) => `    <p>${esc(p)}</p>`).join('\n') +
        `\n  </section>`
    )
    .join('\n');

  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(doc.titolo)} · Legul</title>
<meta name="description" content="${esc(doc.occhiello)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap">
<style>${STILE}</style>
</head>
<body>
<div class="wrap">
<header>
  <p class="marchio">Legul · Preparazione all’esame da avvocato</p>
  <h1>${esc(doc.titolo)}</h1>
  <p class="occhiello">${esc(doc.occhiello)}</p>
  <span class="data">Aggiornato il ${esc(doc.aggiornatoIl)}</span>
</header>
${sezioni}
<footer>
  <p>${esc(TITOLARE.nome)} — ${esc(TITOLARE.forma)} — P. IVA ${esc(TITOLARE.partitaIva)} — ${esc(TITOLARE.sede)}</p>
  <nav><a href="./${altro}.html">${esc(altroTitolo)}</a></nav>
</footer>
</div>
</body>
</html>
`;
}

const indice = `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Documenti legali · Legul</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap">
<style>${STILE}</style>
</head>
<body>
<div class="wrap">
<header>
  <p class="marchio">Legul · Preparazione all’esame da avvocato</p>
  <h1>Documenti legali</h1>
  <p class="occhiello">Le condizioni d’uso dell’app e l’informativa su come trattiamo i dati.</p>
</header>
<section>
  <h2><a href="./privacy.html">Informativa sulla privacy</a></h2>
  <p>${esc(DOCUMENTI.privacy.occhiello)}</p>
</section>
<section>
  <h2><a href="./termini.html">Termini di servizio</a></h2>
  <p>${esc(DOCUMENTI.termini.occhiello)}</p>
</section>
<footer>
  <p>${esc(TITOLARE.nome)} — ${esc(TITOLARE.forma)} — P. IVA ${esc(TITOLARE.partitaIva)} — ${esc(TITOLARE.sede)}</p>
</footer>
</div>
</body>
</html>
`;

mkdirSync(USCITA, { recursive: true });
// Senza questo file GitHub Pages passa tutto attraverso Jekyll, che tratta
// in modo speciale nomi e cartelle: qui servono file statici e basta.
writeFileSync(join(USCITA, '.nojekyll'), '');
writeFileSync(join(USCITA, 'index.html'), indice);
for (const doc of Object.values(DOCUMENTI)) {
  writeFileSync(join(USCITA, `${doc.id}.html`), pagina(doc));
}

const mancanti = campiTitolareDaCompletare();
console.log(`Generate: docs/index.html, docs/privacy.html, docs/termini.html`);
if (mancanti.length > 0) {
  console.warn(
    `\nATTENZIONE — campi del titolare ancora da compilare: ${mancanti.join(', ')}.\n` +
      `Compilali in src/data/legale.ts e rigenera prima di pubblicare:\n` +
      `pagine con segnaposto visibili vengono rifiutate dagli store.`
  );
  process.exitCode = 1;
}
