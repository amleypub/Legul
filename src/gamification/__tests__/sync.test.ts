import { unisciProgressi, type ProgressiRemoti } from '../sync';

const vuoto: ProgressiRemoti = {
  punti: 0,
  risposteCorrette: 0,
  risposteErrate: 0,
  quizCompletati: 0,
  lezioni: {},
  premium: false,
  tracceLette: [],
  badges: [],
  streak: 0,
  ultimoGiornoAttivita: null,
};

const con = (p: Partial<ProgressiRemoti>): ProgressiRemoti => ({ ...vuoto, ...p });

describe('unisciProgressi', () => {
  it('tiene il valore più alto di ogni contatore', () => {
    const esito = unisciProgressi(
      con({ punti: 120, risposteCorrette: 30, quizCompletati: 2 }),
      con({ punti: 80, risposteCorrette: 45, quizCompletati: 5 })
    );
    expect(esito.punti).toBe(120);
    expect(esito.risposteCorrette).toBe(45);
    expect(esito.quizCompletati).toBe(5);
  });

  it('tiene il miglior numero di stelle per ogni lezione', () => {
    const esito = unisciProgressi(
      con({ lezioni: { a: 3, b: 1 } }),
      con({ lezioni: { a: 2, c: 2 } })
    );
    expect(esito.lezioni).toEqual({ a: 3, b: 1, c: 2 });
  });

  it('unisce badge e tracce senza creare duplicati', () => {
    const esito = unisciProgressi(
      con({ badges: ['primo-quiz', 'streak-3'], tracceLette: ['t1'] }),
      con({ badges: ['streak-3', 'mille-punti'], tracceLette: ['t1', 't2'] })
    );
    expect(esito.badges.sort()).toEqual(['mille-punti', 'primo-quiz', 'streak-3']);
    expect(esito.tracceLette.sort()).toEqual(['t1', 't2']);
  });

  it('mantiene Premium se è attivo anche da una sola parte', () => {
    expect(unisciProgressi(con({ premium: true }), con({ premium: false })).premium).toBe(true);
    expect(unisciProgressi(con({ premium: false }), con({ premium: true })).premium).toBe(true);
  });

  it('tiene la data di attività più recente', () => {
    const esito = unisciProgressi(
      con({ ultimoGiornoAttivita: '2026-03-01' }),
      con({ ultimoGiornoAttivita: '2026-08-14' })
    );
    expect(esito.ultimoGiornoAttivita).toBe('2026-08-14');
  });

  it('accetta una data anche se manca dall’altra parte', () => {
    expect(
      unisciProgressi(con({ ultimoGiornoAttivita: null }), con({ ultimoGiornoAttivita: '2026-01-05' }))
        .ultimoGiornoAttivita
    ).toBe('2026-01-05');
  });

  /**
   * È la garanzia che regge tutta la sincronizzazione: un dispositivo
   * rimasto indietro non deve poter cancellare il lavoro fatto altrove.
   */
  it('non perde mai i progressi del dispositivo più avanti', () => {
    const indietro = con({ punti: 0, lezioni: {}, badges: [] });
    const avanti = con({
      punti: 940,
      lezioni: { 'civile|1|0': 3, 'civile|1|1': 2 },
      badges: ['primo-quiz'],
      streak: 12,
    });

    for (const esito of [
      unisciProgressi(indietro, avanti),
      unisciProgressi(avanti, indietro),
    ]) {
      expect(esito.punti).toBe(940);
      expect(esito.lezioni).toEqual({ 'civile|1|0': 3, 'civile|1|1': 2 });
      expect(esito.badges).toEqual(['primo-quiz']);
      expect(esito.streak).toBe(12);
    }
  });

  it('non modifica gli oggetti ricevuti', () => {
    const locale = con({ lezioni: { a: 1 }, badges: ['x'] });
    const remoto = con({ lezioni: { a: 3 }, badges: ['y'] });
    unisciProgressi(locale, remoto);
    expect(locale.lezioni).toEqual({ a: 1 });
    expect(remoto.lezioni).toEqual({ a: 3 });
    expect(remoto.badges).toEqual(['y']);
  });
});
