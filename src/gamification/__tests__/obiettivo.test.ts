import {
  messaggioObiettivo,
  obiettivoDi,
  OBIETTIVI,
  OBIETTIVO_PREDEFINITO,
  puntiObiettivo,
} from '../obiettivo';

describe('obiettivi giornalieri', () => {
  it('offre tre andature con soglie crescenti', () => {
    const punti = OBIETTIVI.map((o) => o.punti);
    expect(punti).toEqual([...punti].sort((a, b) => a - b));
    expect(new Set(punti).size).toBe(punti.length);
  });

  it('ha un predefinito che esiste', () => {
    expect(OBIETTIVI.map((o) => o.id)).toContain(OBIETTIVO_PREDEFINITO);
  });

  /**
   * Un'andatura sconosciuta può arrivare da dati salvati da una versione
   * futura o corrotti: deve ricadere su qualcosa di sensato invece di
   * lasciare l'anello dei progressi diviso per `undefined`.
   */
  it('ricade su un obiettivo valido davanti a un’andatura sconosciuta', () => {
    // @ts-expect-error: è esattamente il caso che il codice deve reggere.
    expect(OBIETTIVI).toContain(obiettivoDi('inventata'));
    // @ts-expect-error: idem.
    expect(puntiObiettivo('inventata')).toBeGreaterThan(0);
  });
});

describe('messaggioObiettivo', () => {
  it('riconosce l’obiettivo raggiunto', () => {
    const meta = puntiObiettivo('costante');
    expect(messaggioObiettivo(meta, 'costante', 10)).toContain('raggiunto');
  });

  /**
   * A metà strada il messaggio deve dire quanto lavoro manca, non quanti
   * punti: nessuno sa quanto sia un punto, tutti sanno quanto sia una
   * risposta.
   */
  it('traduce i punti mancanti in risposte esatte', () => {
    const meta = puntiObiettivo('costante');
    const testo = messaggioObiettivo(meta - 40, 'costante', 10);
    expect(testo).toContain('4 risposte esatte');
  });

  it('usa il singolare quando manca una sola risposta', () => {
    const meta = puntiObiettivo('leggero');
    expect(messaggioObiettivo(meta - 10, 'leggero', 10)).toContain('1 risposta esatta');
  });

  it('a zero punti presenta l’andatura scelta', () => {
    expect(messaggioObiettivo(0, 'intensivo', 10)).toContain('Intensivo');
  });
});
