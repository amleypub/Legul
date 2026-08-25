import { tutteLeDomande } from '../questions';

/**
 * La previdenza forense è la parte dell'ordinamento professionale che
 * all'orale viene chiesta e che quasi nessuno ripassa. Prima di questo
 * blocco l'app la citava una volta sola, di sfuggita: chi si preparava
 * qui arrivava davanti alla commissione senza saper rispondere a «chi è
 * tenuto a iscriversi alla Cassa».
 *
 * I controlli che seguono non verificano che le risposte siano giuste —
 * quello lo fa la verifica delle fonti prima di scrivere — ma che le
 * scelte editoriali che rendono utile il blocco restino in piedi quando
 * qualcuno lo amplierà.
 */
describe('previdenza forense', () => {
  const previdenza = tutteLeDomande.filter((d) => d.id.startsWith('prev-l'));

  it('è coperta a tutti e quattro i livelli', () => {
    const scarsi = ([1, 2, 3, 4] as const)
      .map((livello) => ({
        livello,
        n: previdenza.filter((d) => d.difficolta === livello).length,
      }))
      .filter((v) => v.n < 10);
    expect(scarsi).toEqual([]);
  });

  it('sta dentro la materia con cui viene chiesta all’esame', () => {
    const fuori = previdenza.filter((d) => d.materia !== 'Deontologia forense');
    expect(fuori.map((d) => d.id)).toEqual([]);
  });

  /**
   * Ogni spiegazione deve ancorarsi a una fonte. Senza questo vincolo il
   * blocco scivola verso il riassunto discorsivo, che è esattamente ciò
   * che il candidato non può ripetere alla commissione.
   */
  it('ancora ogni spiegazione a una fonte normativa o giurisprudenziale', () => {
    const fonte = /\b(art\.|artt\.|l\.\s*\d|d\.lgs\.|d\.l\.|c\.c\.|Cost\.|Corte cost\.|Cass\.|Regolamento unico|codice deontologico)/;
    const senzaFonte = previdenza.filter((d) => !fonte.test(d.spiegazione));
    expect(senzaFonte.map((d) => d.id)).toEqual([]);
  });

  /**
   * Niente importi in euro.
   *
   * I contributi minimi, il tetto reddituale e il trattamento minimo sono
   * rideterminati ogni anno dal Comitato dei delegati: una domanda
   * costruita su una cifra diventa sbagliata da sola, senza che nessuno
   * tocchi il file. Le regole, invece, cambiano di rado — e sono quelle
   * che la commissione chiede.
   */
  it('non costruisce domande su importi in euro, che cambiano ogni anno', () => {
    const importo = /(€|\beuro\b)/i;
    const datate = previdenza.filter(
      (d) => importo.test(d.domanda) || d.opzioni.some((o) => importo.test(o)) || importo.test(d.spiegazione)
    );
    expect(datate.map((d) => d.id)).toEqual([]);
  });
});
