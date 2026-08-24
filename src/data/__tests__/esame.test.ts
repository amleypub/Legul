import {
  AGGIORNATO_IL,
  CONFRONTO,
  CONSIGLI,
  PROVE,
  RIFORMA,
  SEZIONI,
} from '../esame';

/**
 * Su una materia appena riformata, il rischio non è l'errore vistoso ma
 * l'invecchiamento silenzioso: una riscrittura futura che toglie un
 * riferimento normativo, promette date che non ci sono ancora o
 * trasforma in norma quello che oggi è solo una stima dei corsi.
 */
describe('come funziona l’esame', () => {
  const tuttoIlTesto = [
    ...PROVE.flatMap((p) => [p.titolo, p.sintesi, p.scelta ?? '', ...p.dettagli]),
    ...SEZIONI.flatMap((s) => [s.titolo, ...s.paragrafi]),
    ...CONFRONTO.flatMap((c) => [c.aspetto, c.prima, c.adesso]),
    ...CONSIGLI.flatMap((c) => [c.titolo, c.testo]),
  ].join(' ');

  it('descrive due prove scritte e cinque parti dell’orale', () => {
    expect(PROVE.filter((p) => p.tipo === 'scritto')).toHaveLength(2);
    expect(PROVE.filter((p) => p.tipo === 'orale')).toHaveLength(5);
  });

  it('non ha identificatori duplicati', () => {
    const id = PROVE.map((p) => p.id);
    expect(new Set(id).size).toBe(id.length);
  });

  it('descrive ogni prova con una sintesi e almeno un dettaglio', () => {
    for (const p of PROVE) {
      expect(p.sintesi.trim().length).toBeGreaterThan(20);
      expect(p.dettagli.length).toBeGreaterThan(0);
      for (const d of p.dettagli) expect(d.trim().length).toBeGreaterThan(20);
    }
  });

  it('cita il decreto e la legge di conversione', () => {
    expect(RIFORMA.decreto).toMatch(/decreto-legge .* 2026, n\. 100/);
    expect(RIFORMA.conversione).toMatch(/legge .* 2026, n\. 145/);
    expect(RIFORMA.abrogati).toMatch(/247/);
  });

  it('indica la data di aggiornamento dei contenuti', () => {
    expect(AGGIORNATO_IL).toMatch(/\d{1,2}\s+\w+\s+\d{4}/);
  });

  /**
   * I tempi del caso pratico circolano ovunque ma non stanno nel
   * decreto. Se un domani entrassero nel testo come dato normativo,
   * l'app affermerebbe una cosa che la norma non dice: il controllo
   * pretende che restino accompagnati dalla precisazione.
   */
  it('non spaccia per norma i tempi del caso pratico', () => {
    const cautele = SEZIONI.find((s) => s.id === 'cautele');
    expect(cautele).toBeDefined();
    const corpo = cautele!.paragrafi.join(' ');
    expect(corpo).toMatch(/non è indicato nel decreto|non stanno nella norma/i);
    expect(corpo).toMatch(/corsi di preparazione/i);
  });

  it('avverte che il decreto di indizione non è ancora uscito', () => {
    expect(tuttoIlTesto).toMatch(/decreto ministeriale di indizione|decreto di indizione/i);
  });

  /**
   * Finché manca il bando, qualunque data sarebbe inventata. Il
   * controllo intercetta l'introduzione di giorni e mesi precisi.
   */
  it('non annuncia date di svolgimento della sessione', () => {
    expect(tuttoIlTesto).not.toMatch(
      /\b\d{1,2}\s+(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)\b/i
    );
  });

  it('spiega che non c’è compensazione fra i punteggi', () => {
    expect(tuttoIlTesto).toMatch(/compensazion|non si compensano/i);
  });

  it('registra le differenze rispetto al regime precedente', () => {
    expect(CONFRONTO.length).toBeGreaterThan(5);
    for (const voce of CONFRONTO) {
      expect(voce.aspetto.trim().length).toBeGreaterThan(0);
      expect(voce.prima.trim().length).toBeGreaterThan(0);
      expect(voce.adesso.trim().length).toBeGreaterThan(0);
      expect(voce.prima).not.toBe(voce.adesso);
    }
  });

  it('dà conto dell’uscita del diritto ecclesiastico e dell’ingresso della previdenza', () => {
    expect(tuttoIlTesto).toMatch(/ecclesiastico/i);
    expect(tuttoIlTesto).toMatch(/previdenza forense/i);
  });

  it('ricorda che all’orale la materia a scelta è una sola', () => {
    const terza = PROVE.find((p) => p.id === 'orale-terza');
    expect(terza).toBeDefined();
    expect(terza!.dettagli.join(' ')).toMatch(/una su sei|una sola/i);
  });
});
