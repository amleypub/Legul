import {
  campiTitolareDaCompletare,
  DA_COMPLETARE,
  DOCUMENTI,
  PRIVACY,
  TERMINI,
  TITOLARE,
} from '../legale';

describe('documenti legali', () => {
  const tutti = Object.values(DOCUMENTI);

  it('espone privacy e termini', () => {
    expect(Object.keys(DOCUMENTI).sort()).toEqual(['privacy', 'termini']);
    expect(DOCUMENTI.privacy).toBe(PRIVACY);
    expect(DOCUMENTI.termini).toBe(TERMINI);
  });

  it('non ha sezioni né paragrafi vuoti', () => {
    for (const doc of tutti) {
      expect(doc.sezioni.length).toBeGreaterThan(5);
      for (const s of doc.sezioni) {
        expect(s.titolo.trim().length).toBeGreaterThan(0);
        expect(s.paragrafi.length).toBeGreaterThan(0);
        for (const p of s.paragrafi) expect(p.trim().length).toBeGreaterThan(20);
      }
    }
  });

  it('non ripete lo stesso titolo di sezione dentro un documento', () => {
    for (const doc of tutti) {
      const titoli = doc.sezioni.map((s) => s.titolo);
      expect(new Set(titoli).size).toBe(titoli.length);
    }
  });

  it('indica la data di aggiornamento', () => {
    for (const doc of tutti) {
      expect(doc.aggiornatoIl).toMatch(/\d{1,2}\s+\w+\s+\d{4}/);
    }
  });
});

describe('informativa privacy', () => {
  const testo = PRIVACY.sezioni.flatMap((s) => [s.titolo, ...s.paragrafi]).join(' ');

  /**
   * Gli articoli 13 e 14 del GDPR elencano che cosa l'informativa deve
   * dire. Questi controlli non certificano la conformità, ma impediscono
   * che una riscrittura futura faccia sparire un blocco obbligatorio.
   */
  it('copre i contenuti obbligatori del GDPR', () => {
    expect(testo).toContain('titolare del trattamento');
    expect(testo).toMatch(/base giuridica|basi giuridiche/i);
    expect(testo).toMatch(/conserv/i);
    expect(testo).toMatch(/portabilit/i);
    expect(testo).toMatch(/reclamo/i);
    expect(testo).toContain('Garante');
  });

  it('dichiara come si cancellano account e dati', () => {
    expect(testo).toMatch(/Elimina account/i);
  });

  it('dichiara l’assenza di profilazione e pubblicità', () => {
    expect(testo).toMatch(/profilazione/i);
    expect(testo).toMatch(/pubblicit/i);
  });
});

describe('termini di servizio', () => {
  const testo = TERMINI.sezioni.flatMap((s) => [s.titolo, ...s.paragrafi]).join(' ');

  it('chiarisce che l’app non è consulenza legale', () => {
    expect(testo).toContain('non è consulenza legale');
  });

  it('non promette il superamento dell’esame', () => {
    expect(testo).toMatch(/non garantisce il superamento/i);
  });

  /**
   * Una limitazione di responsabilità scritta senza questa riserva è
   * nulla verso i consumatori, e trascina con sé l'intera clausola.
   */
  it('riserva i limiti inderogabili di legge nella clausola di responsabilità', () => {
    const sezione = TERMINI.sezioni.find((s) => /limitazione di responsabilit/i.test(s.titolo));
    expect(sezione).toBeDefined();
    const corpo = sezione!.paragrafi.join(' ');
    expect(corpo).toMatch(/nei limiti (massimi )?consentiti dalla legge/i);
    expect(corpo).toMatch(/dolo o colpa grave/i);
  });

  it('non impone il proprio foro ai consumatori', () => {
    const sezione = TERMINI.sezioni.find((s) => /foro|controversie/i.test(s.titolo));
    expect(sezione!.paragrafi.join(' ')).toMatch(/consumatore/i);
  });

  it('spiega rinnovo automatico e disdetta dell’abbonamento', () => {
    expect(testo).toMatch(/rinnovano automaticamente/i);
    expect(testo).toMatch(/disdett/i);
  });

  it('dichiara i link di affiliazione', () => {
    expect(testo).toMatch(/affiliaz|affiliati/i);
  });
});

describe('dati del titolare', () => {
  it('elenca esattamente i campi ancora da compilare', () => {
    const attesi = Object.entries(TITOLARE)
      .filter(([, v]) => v === DA_COMPLETARE)
      .map(([k]) => k);
    expect(campiTitolareDaCompletare().sort()).toEqual(attesi.sort());
  });

  it('ha sempre nome e forma giuridica', () => {
    expect(TITOLARE.nome).not.toBe(DA_COMPLETARE);
    expect(TITOLARE.forma).not.toBe(DA_COMPLETARE);
  });
});
