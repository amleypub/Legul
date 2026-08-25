/**
 * Riequilibra la posizione della risposta corretta in un file di domande.
 *
 * Chi scrive una domanda mette la risposta giusta dove legge meglio, e su
 * sessanta domande quel gusto personale produce uno sbilanciamento
 * sistematico: chi studia una materia sola impara la posizione invece
 * della norma. Lo script scambia l'opzione corretta con quella di un'altra
 * posizione — uno scambio, non un rimescolamento, così l'ordine delle
 * altre resta com'era.
 *
 * Le domande le cui opzioni hanno un ordine proprio (importi crescenti,
 * termini in ordine di durata) vanno elencate in `--salta`: lì lo scambio
 * si vedrebbe.
 *
 *   node scripts/riequilibra.mjs src/data/questions/ue-l1.ts --salta ue-l1-041,ue-l1-012
 */
import fs from 'fs';

const [file, ...resto] = process.argv.slice(2);
const iSalta = resto.indexOf('--salta');
const salta = new Set(iSalta >= 0 ? (resto[iSalta + 1] ?? '').split(',').filter(Boolean) : []);

let testo = fs.readFileSync(file, 'utf8');

/** Blocchi `{ id: '…', … rispostaCorretta: n, … }`, con le loro opzioni. */
function domande(src) {
  const out = [];
  const re = /id:\s*'([^']+)',[\s\S]*?opzioni:\s*\[([\s\S]*?)\n\s*\],\s*\n\s*rispostaCorretta:\s*(\d)/g;
  let m;
  while ((m = re.exec(src))) {
    out.push({ id: m[1], corpoOpzioni: m[2], corretta: Number(m[3]), inizio: m.index, testo: m[0] });
  }
  return out;
}

/** Le voci di un array di stringhe, tenendo l'indentazione originale. */
function voci(corpo) {
  const righe = corpo.split('\n').filter((r) => r.trim());
  const parti = [];
  let corrente = '';
  for (const r of righe) {
    corrente += (corrente ? '\n' : '') + r;
    // Una voce finisce con `',` oppure `,` dopo una stringa chiusa.
    if (/',\s*$/.test(r) || /^\s*"[^"]*",\s*$/.test(r)) {
      parti.push(corrente);
      corrente = '';
    }
  }
  if (corrente.trim()) parti.push(corrente);
  return parti;
}

const elenco = domande(testo);
const conteggi = [0, 0, 0, 0];
for (const d of elenco) conteggi[d.corretta]++;
const obiettivo = elenco.length / 4;
console.log(`prima: ${conteggi.join('/')} su ${elenco.length}`);

// Sposta dalle posizioni in eccesso a quelle in difetto, una domanda per volta.
const spostamenti = [];
for (const d of elenco) {
  if (salta.has(d.id)) continue;
  const da = d.corretta;
  if (conteggi[da] <= Math.ceil(obiettivo)) continue;
  const a = conteggi.indexOf(Math.min(...conteggi));
  if (a === da || conteggi[a] >= Math.floor(obiettivo)) continue;
  spostamenti.push({ id: d.id, da, a });
  conteggi[da]--;
  conteggi[a]++;
}

for (const s of spostamenti) {
  const d = domande(testo).find((x) => x.id === s.id);
  const parti = voci(d.corpoOpzioni);
  if (parti.length !== 4) {
    console.log(`  salto ${s.id}: ${parti.length} opzioni riconosciute`);
    continue;
  }
  // Scambia il contenuto delle due voci mantenendo l'indentazione di ciascuna.
  const soloTesto = (v) => v.replace(/^\s+/, '').replace(/,\s*$/, '');
  const indent = (v) => (v.match(/^\s*/) ?? [''])[0];
  const a = soloTesto(parti[s.da]);
  const b = soloTesto(parti[s.a]);
  parti[s.da] = indent(parti[s.da]) + b + ',';
  parti[s.a] = indent(parti[s.a]) + a + ',';
  const nuovoCorpo = '\n' + parti.join('\n');
  const nuovoBlocco = d.testo
    .replace(d.corpoOpzioni, nuovoCorpo)
    .replace(/rispostaCorretta:\s*\d$/, `rispostaCorretta: ${s.a}`);
  testo = testo.replace(d.testo, nuovoBlocco);
}

fs.writeFileSync(file, testo);
const dopo = [0, 0, 0, 0];
for (const d of domande(testo)) dopo[d.corretta]++;
console.log(`dopo:  ${dopo.join('/')} (${spostamenti.length} spostate)`);
