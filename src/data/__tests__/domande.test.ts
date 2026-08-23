import { tutteLeDomande } from '../questions';
import { materie } from '../quizzes';
import type { Difficolta, Materia } from '../../types';

const DIFFICOLTA: Difficolta[] = [1, 2, 3, 4];

/**
 * La banca domande è stata scritta a più mani e conta migliaia di voci:
 * questi controlli servono a impedire che una modifica futura introduca
 * una domanda senza risposta, con un indice fuori posto o duplicata.
 */
describe('banca domande', () => {
  it('non è vuota', () => {
    expect(tutteLeDomande.length).toBeGreaterThan(3000);
  });

  it('non contiene identificatori duplicati', () => {
    const visti = new Map<string, number>();
    for (const d of tutteLeDomande) visti.set(d.id, (visti.get(d.id) ?? 0) + 1);
    const duplicati = [...visti.entries()].filter(([, n]) => n > 1).map(([id]) => id);
    expect(duplicati).toEqual([]);
  });

  it('ha quattro opzioni distinte e non vuote per ogni domanda', () => {
    const rotte = tutteLeDomande.filter(
      (d) =>
        d.opzioni.length !== 4 ||
        d.opzioni.some((o) => o.trim().length === 0) ||
        new Set(d.opzioni).size !== d.opzioni.length
    );
    expect(rotte.map((d) => d.id)).toEqual([]);
  });

  it('indica sempre una risposta corretta valida', () => {
    const rotte = tutteLeDomande.filter(
      (d) =>
        !Number.isInteger(d.rispostaCorretta) ||
        d.rispostaCorretta < 0 ||
        d.rispostaCorretta >= d.opzioni.length
    );
    expect(rotte.map((d) => d.id)).toEqual([]);
  });

  it('ha testo e spiegazione per ogni domanda', () => {
    const rotte = tutteLeDomande.filter(
      (d) => d.domanda.trim().length === 0 || d.spiegazione.trim().length < 20
    );
    expect(rotte.map((d) => d.id)).toEqual([]);
  });

  it('usa solo materie e difficoltà previste', () => {
    const rotte = tutteLeDomande.filter(
      (d) => !materie.includes(d.materia) || !DIFFICOLTA.includes(d.difficolta)
    );
    expect(rotte.map((d) => d.id)).toEqual([]);
  });

  /**
   * Se la risposta giusta stesse sempre nella stessa posizione si
   * imparerebbe la posizione invece della norma.
   */
  it('distribuisce la risposta corretta fra le quattro posizioni', () => {
    const conteggi = [0, 0, 0, 0];
    for (const d of tutteLeDomande) conteggi[d.rispostaCorretta] += 1;
    const atteso = tutteLeDomande.length / 4;
    for (const c of conteggi) {
      expect(c).toBeGreaterThan(atteso * 0.5);
      expect(c).toBeLessThan(atteso * 1.5);
    }
  });

  /**
   * Il controllo globale sopra non basta: una materia nuova, aggiunta con
   * le risposte quasi tutte nella stessa posizione, resta invisibile
   * perché le migliaia di domande preesistenti diluiscono lo squilibrio.
   * Chi però studia una sola materia se ne accorge subito, e impara la
   * posizione invece della norma. Il controllo va fatto materia per materia.
   */
  it('distribuisce la risposta corretta anche dentro ogni materia', () => {
    const squilibrate: { materia: string; quote: string }[] = [];
    for (const materia of materie as Materia[]) {
      const domande = tutteLeDomande.filter((d) => d.materia === materia);
      const conteggi = [0, 0, 0, 0];
      for (const d of domande) conteggi[d.rispostaCorretta] += 1;
      const quote = conteggi.map((c) => c / domande.length);
      if (quote.some((q) => q < 0.12 || q > 0.4)) {
        squilibrate.push({
          materia,
          quote: quote.map((q) => `${Math.round(q * 100)}%`).join(' '),
        });
      }
    }
    expect(squilibrate).toEqual([]);
  });

  it('copre ogni materia a ogni livello di difficoltà', () => {
    for (const materia of materie as Materia[]) {
      for (const d of DIFFICOLTA) {
        const n = tutteLeDomande.filter(
          (q) => q.materia === materia && q.difficolta === d
        ).length;
        expect({ materia, difficolta: d, n }).toEqual({
          materia,
          difficolta: d,
          n: expect.any(Number),
        });
        expect(n).toBeGreaterThanOrEqual(60);
      }
    }
  });
});
