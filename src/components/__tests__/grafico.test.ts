import { descrizioneGrafico } from '../../data/ricerca';
import { separa } from '../etichette';

describe('grafico del metodo', () => {
  it('descrive a voce tutti i numeri del grafico e la fonte', () => {
    const d = descrizioneGrafico();
    for (const n of ['83', '40', '71', '61', '52']) expect(d).toContain(`${n} per cento`);
    expect(d).toContain('Roediger e Karpicke');
    expect(d).toContain('2006');
  });

  /*
    I valori a sinistra, 83 e 71, cadono vicini: su un grafico basso le
    due etichette si sovrapporrebbero. `separa` le allontana quanto basta
    senza spostarle se non serve.
  */
  it('allontana due etichette troppo vicine, di metà ciascuna', () => {
    const [a, b] = separa(30, 40, 15);
    expect(b - a).toBeCloseTo(15);
    expect((a + b) / 2).toBeCloseTo(35);
  });

  it('lascia ferme le etichette già abbastanza distanti', () => {
    expect(separa(10, 40, 15)).toEqual([10, 40]);
  });

  it('rispetta l’ordine, chiunque stia sopra', () => {
    const [a, b] = separa(40, 30, 15);
    expect(a).toBeGreaterThan(b);
    expect(a - b).toBeCloseTo(15);
  });
});
