import { tributarioL1 } from '../questions/tributario-l1';
import { tributarioL2 } from '../questions/tributario-l2';
import { tributarioL3 } from '../questions/tributario-l3';
import { tributarioL4 } from '../questions/tributario-l4';

const tributario = [...tributarioL1, ...tributarioL2, ...tributarioL3, ...tributarioL4];

describe('diritto tributario', () => {
  it('copre quattro livelli con volumi allineati alle altre materie a scelta', () => {
    for (const livello of [tributarioL1, tributarioL2, tributarioL3, tributarioL4]) {
      expect(livello.length).toBeGreaterThanOrEqual(60);
    }
    expect(tributario.every((d) => d.materia === 'Diritto tributario')).toBe(true);
  });

  it('non ha identificativi duplicati', () => {
    const ids = tributario.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  /**
   * Ogni spiegazione porta la fonte.
   *
   * Una spiegazione senza appiglio non si può controllare, e all'orale
   * non si può ripetere: la commissione chiede l'articolo, non il
   * concetto in astratto.
   */
  it('ancora ogni spiegazione a una fonte normativa o giurisprudenziale', () => {
    /*
      Sono fonti sia le forme abbreviate sia quelle per esteso: «Corte
      costituzionale, con la sentenza 21 gennaio 2000, n. 18» è una
      citazione migliore di «Corte cost. 18/2000», non peggiore, e un
      test che accettasse solo la seconda spingerebbe a scrivere peggio.
    */
    const fonte =
      /\b(art\.|artt\.|l\.\s*\d|legge\s+\d|d\.lgs\.|d\.l\.|d\.P\.R\.|r\.d\.|c\.c\.|Cost\.|Corte cost(\.|ituzionale)|Cass\.|Corte di cassazione|Sezioni unite|Corte giust(\.|izia)|Corte di giustizia|Corte europea|sentenze? \d|direttiva|regolamento|convenzione|TUIR|Modello OCSE|Statuto)/i;
    const senzaFonte = tributario.filter((d) => !fonte.test(d.spiegazione));
    expect(senzaFonte.map((d) => d.id)).toEqual([]);
  });

  /**
   * Niente cifre che una legge di bilancio azzera.
   *
   * È la stessa disciplina già adottata per la previdenza forense, e qui
   * vale ancora di più: aliquote, scaglioni, detrazioni, franchigie e
   * soglie di rateazione si spostano ogni anno. Una domanda costruita su
   * un importo diventa sbagliata da sola, senza che nessuno tocchi il
   * file — e il candidato la impara convinto che sia diritto vigente.
   *
   * Le percentuali restano ammesse quando fissano una regola stabile
   * (l'aliquota minima globale del quindici per cento, lo scarto
   * valutativo del dieci per cento dell'art. 4 d.lgs. 74/2000): sono
   * scritte in norme che non seguono il ciclo di bilancio.
   */
  it('non costruisce domande su importi in euro, che cambiano ogni anno', () => {
    const importo = /(€|\beuro\b|\bmila euro\b)/i;
    const datate = tributario.filter(
      (d) =>
        importo.test(d.domanda) ||
        d.opzioni.some((o) => importo.test(o)) ||
        importo.test(d.spiegazione)
    );
    expect(datate.map((d) => d.id)).toEqual([]);
  });

  /**
   * I testi unici non vanno presentati come diritto già applicabile.
   *
   * Sono in Gazzetta Ufficiale dal 2024-2025 ma si applicano dal 1°
   * gennaio 2027. È la trappola più insidiosa della materia in questa
   * fase: chi li cita come vigenti sbaglia esattamente come chi ignora
   * che esistano. Ogni domanda che li nomina deve dire quando entrano
   * in applicazione, o collocarli nel percorso della delega.
   */
  it('colloca nel tempo i testi unici, invece di darli per vigenti', () => {
    const nominaTestiUnici = tributario.filter((d) =>
      /testi? unic[oi]/i.test(`${d.domanda} ${d.spiegazione}`)
    );
    expect(nominaTestiUnici.length).toBeGreaterThan(0);
    const senzaCollocazione = nominaTestiUnici.filter(
      (d) => !/(2027|delega|riordino|proroga|differit)/i.test(`${d.domanda} ${d.spiegazione}`)
    );
    expect(senzaCollocazione.map((d) => d.id)).toEqual([]);
  });

  /**
   * L'abuso del diritto non è un reato.
   *
   * L'art. 10-bis, comma 13, dello Statuto lo dice espressamente, ed è
   * uno degli errori più frequenti perché l'intuizione tira dall'altra
   * parte. Se una domanda tocca il tema, la spiegazione deve tenere
   * fermo il confine con l'evasione.
   */
  it('tiene fermo il confine fra abuso del diritto ed evasione', () => {
    const suAbuso = tributario.filter((d) => /abus/i.test(`${d.domanda} ${d.spiegazione}`));
    expect(suAbuso.length).toBeGreaterThanOrEqual(3);
    const penale = suAbuso.filter((d) => /penal/i.test(d.spiegazione));
    expect(penale.length).toBeGreaterThan(0);
  });
});
