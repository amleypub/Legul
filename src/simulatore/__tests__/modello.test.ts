import { casi, casiPerMateria, casoDaId, MATERIE_CASO } from '../../data/casi';
import {
  casoSuggerito,
  coperturaPerVersante,
  esitoSimulazione,
  formattaTempo,
  pesoTotale,
  punteggio,
  SOGLIA_VERSANTE,
} from '../modello';

describe('casi pratici', () => {
  it('assegna cento punti in ogni scaletta', () => {
    for (const c of casi) expect(pesoTotale(c)).toBe(100);
  });

  it('non ha identificatori duplicati', () => {
    const id = casi.map((c) => c.id);
    expect(new Set(id).size).toBe(id.length);
    for (const c of casi) {
      const punti = c.scaletta.map((p) => p.id);
      expect(new Set(punti).size).toBe(punti.length);
    }
  });

  /**
   * La prova chiede espressamente diritto sostanziale e processuale
   * insieme: un caso che stia tutto su un versante non è un caso
   * pratico, è una domanda di teoria travestita.
   */
  it('copre entrambi i versanti in ogni caso', () => {
    for (const c of casi) {
      const versanti = coperturaPerVersante(c.scaletta, []);
      expect(versanti.sostanziale.totale).toBeGreaterThan(0);
      expect(versanti.processuale.totale).toBeGreaterThan(0);
      // Nessuno dei due può ridursi a una comparsa.
      expect(versanti.sostanziale.totale).toBeGreaterThanOrEqual(25);
      expect(versanti.processuale.totale).toBeGreaterThanOrEqual(25);
    }
  });

  it('offre casi in tutte e tre le materie a scelta della prova', () => {
    for (const m of MATERIE_CASO) {
      expect(casiPerMateria(m).length).toBeGreaterThan(0);
    }
  });

  it('descrive fatto, consegna, domande e insidie', () => {
    for (const c of casi) {
      expect(c.fatto.length).toBeGreaterThanOrEqual(2);
      for (const f of c.fatto) expect(f.trim().length).toBeGreaterThan(60);
      expect(c.consegna.trim().length).toBeGreaterThan(50);
      expect(c.domandeCommissione.length).toBeGreaterThanOrEqual(3);
      expect(c.insidie.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('àncora ogni punto della scaletta ad almeno un riferimento', () => {
    for (const c of casi) {
      for (const p of c.scaletta) {
        expect(p.riferimenti.length).toBeGreaterThanOrEqual(1);
        expect(p.dettaglio.trim().length).toBeGreaterThan(60);
      }
    }
  });

  /**
   * Il decreto non fissa i tempi della prova. Se un domani il testo li
   * presentasse come dato normativo, l'app affermerebbe una cosa che la
   * norma non dice.
   */
  it('non presenta i tempi come stabiliti dalla norma', () => {
    const testo = casi
      .flatMap((c) => [...c.fatto, c.consegna, ...c.insidie, ...c.domandeCommissione])
      .join(' ');
    expect(testo).not.toMatch(/il decreto (prevede|stabilisce|fissa).{0,40}minuti/i);
  });

  it('trova un caso dal suo identificatore', () => {
    expect(casoDaId(casi[0].id)).toBe(casi[0]);
    expect(casoDaId('caso-inesistente')).toBeUndefined();
  });
});

describe('punteggio e copertura', () => {
  const caso = casi[0];

  it('somma solo i punti spuntati', () => {
    expect(punteggio(caso.scaletta, [])).toBe(0);
    expect(punteggio(caso.scaletta, caso.scaletta.map((p) => p.id))).toBe(100);
    const primo = caso.scaletta[0];
    expect(punteggio(caso.scaletta, [primo.id])).toBe(primo.peso);
  });

  it('ignora identificatori che non appartengono alla scaletta', () => {
    expect(punteggio(caso.scaletta, ['punto-che-non-esiste'])).toBe(0);
  });

  it('separa il conteggio per versante', () => {
    const soloSostanziali = caso.scaletta
      .filter((p) => p.versante === 'sostanziale')
      .map((p) => p.id);
    const v = coperturaPerVersante(caso.scaletta, soloSostanziali);
    expect(v.sostanziale.quota).toBe(1);
    expect(v.processuale.presi).toBe(0);
    expect(v.processuale.quota).toBe(0);
  });
});

describe('esito della simulazione', () => {
  const caso = casi[0];
  const idPerVersante = (v: 'sostanziale' | 'processuale') =>
    caso.scaletta.filter((p) => p.versante === v).map((p) => p.id);

  it('riconosce la copertura piena', () => {
    const e = esitoSimulazione(caso, caso.scaletta.map((p) => p.id));
    expect(e.punteggio).toBe(100);
    expect(e.tono).toBe('ottimo');
  });

  /**
   * Il caso che il simulatore esiste per intercettare: punteggio alto
   * preso tutto da una parte sola. Il consiglio deve nominare il
   * versante scoperto, non limitarsi a lodare il totale.
   */
  it('segnala lo squilibrio quando il processuale resta scoperto', () => {
    const e = esitoSimulazione(caso, idPerVersante('sostanziale'));
    expect(e.consiglio).toMatch(/processuale/i);
  });

  it('segnala lo squilibrio opposto', () => {
    const e = esitoSimulazione(caso, idPerVersante('processuale'));
    expect(e.consiglio).toMatch(/sostanziale/i);
  });

  it('dichiara insufficiente chi non tocca quasi nulla', () => {
    const e = esitoSimulazione(caso, []);
    expect(e.tono).toBe('insufficiente');
    expect(e.punteggio).toBe(0);
  });

  it('usa la soglia per versante e non il solo totale', () => {
    expect(SOGLIA_VERSANTE).toBeGreaterThan(0);
    expect(SOGLIA_VERSANTE).toBeLessThan(1);
  });
});

describe('scelta del caso', () => {
  it('propone per primo un caso mai affrontato', () => {
    const svolti = { [casi[0].id]: 90 };
    expect(casoSuggerito(casi, svolti)).toBe(casi[1]);
  });

  it('quando li ha fatti tutti riparte da quello andato peggio', () => {
    const svolti = Object.fromEntries(casi.map((c, i) => [c.id, 50 + i]));
    expect(casoSuggerito(casi, svolti)).toBe(casi[0]);
  });

  it('non esplode su un elenco vuoto', () => {
    expect(casoSuggerito([], {})).toBeUndefined();
  });
});

describe('formattazione del tempo', () => {
  it('mostra minuti e secondi con lo zero davanti', () => {
    expect(formattaTempo(0)).toBe('00:00');
    expect(formattaTempo(65)).toBe('01:05');
    expect(formattaTempo(1800)).toBe('30:00');
  });

  it('non mostra tempi negativi', () => {
    expect(formattaTempo(-30)).toBe('00:00');
  });
});
