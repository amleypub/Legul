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

describe('unisciProgressi: le scelte d’esame', () => {
  /**
   * Il telefono nuovo appena installato non ha nulla in locale: deve
   * ricevere dal cloud che cosa il candidato porta, altrimenti si
   * ritrova a rifare le domande d'apertura e, peggio, un percorso
   * tarato su scelte che non ha mai espresso.
   */
  it('porta sul dispositivo nuovo le scelte già fatte altrove', () => {
    const esito = unisciProgressi(
      con({}),
      con({
        esame: {
          dataEsame: '2027-05-10',
          scritti: 'Diritto penale',
          procedura: 'Procedura penale',
          materiaScelta: 'Diritto commerciale',
        },
        aperturaFatta: true,
      })
    );
    expect(esito.esame?.scritti).toBe('Diritto penale');
    expect(esito.esame?.materiaScelta).toBe('Diritto commerciale');
    expect(esito.aperturaFatta).toBe(true);
  });

  /**
   * Il contrario invece no: chi ha appena cambiato idea sul dispositivo
   * che ha in mano non deve vedersi riscrivere la scelta da una copia
   * remota più vecchia.
   */
  it('fa prevalere la scelta locale su quella remota', () => {
    const esito = unisciProgressi(
      con({
        esame: {
          dataEsame: null,
          scritti: 'Diritto amministrativo',
          procedura: null,
          materiaScelta: null,
        },
      }),
      con({
        esame: {
          dataEsame: '2027-05-10',
          scritti: 'Diritto civile',
          procedura: 'Procedura civile',
          materiaScelta: null,
        },
      })
    );
    expect(esito.esame?.scritti).toBe('Diritto amministrativo');
    // Dove in locale non c'è nulla, il valore remoto subentra.
    expect(esito.esame?.procedura).toBe('Procedura civile');
    expect(esito.esame?.dataEsame).toBe('2027-05-10');
  });

  it('regge i dati salvati prima che le scelte esistessero', () => {
    const esito = unisciProgressi(con({}), con({}));
    expect(esito.esame).toEqual({
      dataEsame: null,
      scritti: null,
      procedura: null,
      materiaScelta: null,
    });
    expect(esito.aperturaFatta).toBe(false);
  });
});
