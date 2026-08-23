import { settimanaCorrente, streakEffettiva } from '../settimana';

// Sabato 22 agosto 2026: la settimana va da lunedì 17 a domenica 23.
const SABATO = '2026-08-22';

describe('streakEffettiva', () => {
  it('vale il numero salvato se hai studiato oggi', () => {
    expect(streakEffettiva(4, SABATO, SABATO)).toBe(4);
  });

  it('resta viva se l’ultima attività è di ieri', () => {
    // La giornata non è finita: la serie può ancora essere allungata.
    expect(streakEffettiva(4, '2026-08-21', SABATO)).toBe(4);
  });

  /**
   * Il difetto che questa funzione esiste per evitare: il valore salvato
   * viene aggiornato solo quando si guadagnano punti, quindi da solo
   * continuerebbe a dichiarare una serie finita da giorni.
   */
  it('si azzera dopo un giorno saltato', () => {
    expect(streakEffettiva(4, '2026-08-20', SABATO)).toBe(0);
    expect(streakEffettiva(30, '2026-07-01', SABATO)).toBe(0);
  });

  it('vale zero senza alcuna attività registrata', () => {
    expect(streakEffettiva(0, null, SABATO)).toBe(0);
    expect(streakEffettiva(5, null, SABATO)).toBe(0);
  });

  it('non si fida di una data futura', () => {
    // Orologio del dispositivo spostato indietro, o dato manomesso.
    expect(streakEffettiva(9, '2026-09-01', SABATO)).toBe(0);
  });
});

describe('settimanaCorrente', () => {
  it('restituisce sette giorni da lunedì a domenica', () => {
    const s = settimanaCorrente(SABATO, null, 0);
    expect(s).toHaveLength(7);
    expect(s.map((g) => g.lettera)).toEqual(['L', 'M', 'M', 'G', 'V', 'S', 'D']);
    expect(s[0].data).toBe('2026-08-17');
    expect(s[6].data).toBe('2026-08-23');
  });

  it('segna il giorno corrente', () => {
    const s = settimanaCorrente(SABATO, null, 0);
    expect(s.filter((g) => g.oggi).map((g) => g.data)).toEqual([SABATO]);
  });

  it('marca come futuri solo i giorni successivi a oggi', () => {
    const s = settimanaCorrente(SABATO, null, 0);
    expect(s.filter((g) => g.futuro).map((g) => g.lettera)).toEqual(['D']);
  });

  it('accende i giorni coperti dalla streak', () => {
    // Streak di 3 che finisce oggi: giovedì, venerdì e sabato.
    const s = settimanaCorrente(SABATO, SABATO, 3);
    expect(s.filter((g) => g.attivo).map((g) => g.data)).toEqual([
      '2026-08-20',
      '2026-08-21',
      '2026-08-22',
    ]);
  });

  it('non accende nulla senza attività', () => {
    expect(settimanaCorrente(SABATO, null, 0).some((g) => g.attivo)).toBe(false);
  });

  it('non accende oggi se l’ultima attività era ieri', () => {
    const s = settimanaCorrente(SABATO, '2026-08-21', 2);
    expect(s.find((g) => g.oggi)?.attivo).toBe(false);
    expect(s.filter((g) => g.attivo).map((g) => g.data)).toEqual(['2026-08-20', '2026-08-21']);
  });

  it('non trabocca nella settimana quando la streak è più lunga', () => {
    const s = settimanaCorrente(SABATO, SABATO, 30);
    expect(s.filter((g) => g.attivo)).toHaveLength(6); // da lunedì a sabato
    expect(s.find((g) => g.futuro)?.attivo).toBe(false);
  });

  it('tratta la domenica come ultimo giorno, non come primo', () => {
    const domenica = '2026-08-23';
    const s = settimanaCorrente(domenica, domenica, 1);
    expect(s[0].data).toBe('2026-08-17');
    expect(s[6].oggi).toBe(true);
    expect(s.some((g) => g.futuro)).toBe(false);
  });
});
