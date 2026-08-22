import {
  BADGES,
  conBadgeAggiornati,
  conStreakAggiornata,
  LIVELLI,
  livelloPerPunti,
  stellePerRisultato,
  type GamificationState,
} from '../GamificationContext';

const base: GamificationState = {
  punti: 0,
  risposteCorrette: 0,
  risposteErrate: 0,
  quizCompletati: 0,
  lezioni: {},
  premium: false,
  audioAttivo: true,
  tracceLette: [],
  badges: [],
  streak: 0,
  ultimoGiornoAttivita: null,
};

const con = (p: Partial<GamificationState>): GamificationState => ({ ...base, ...p });

describe('stellePerRisultato', () => {
  it('dà tre stelle solo senza errori', () => {
    expect(stellePerRisultato(10, 10)).toBe(3);
    expect(stellePerRisultato(9, 10)).toBe(2);
  });

  it('rispetta le soglie dell’80% e del 60%', () => {
    expect(stellePerRisultato(8, 10)).toBe(2);
    expect(stellePerRisultato(7, 10)).toBe(1);
    expect(stellePerRisultato(6, 10)).toBe(1);
    expect(stellePerRisultato(5, 10)).toBe(0);
  });

  it('non va in errore con una lezione senza domande', () => {
    expect(stellePerRisultato(0, 0)).toBe(0);
  });
});

describe('conStreakAggiornata', () => {
  // Le date sono fisse: la streak dipende dal calendario e senza un
  // orologio controllato il test passerebbe o meno a seconda del giorno.
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-08-22T09:00:00Z'));
  });
  afterAll(() => jest.useRealTimers());

  it('parte da uno alla prima attività', () => {
    const s = conStreakAggiornata(base);
    expect(s.streak).toBe(1);
    expect(s.ultimoGiornoAttivita).toBe('2026-08-22');
  });

  it('incrementa se l’ultima attività era ieri', () => {
    expect(conStreakAggiornata(con({ streak: 4, ultimoGiornoAttivita: '2026-08-21' })).streak).toBe(5);
  });

  it('non cambia nulla se hai già studiato oggi', () => {
    const gia = con({ streak: 4, ultimoGiornoAttivita: '2026-08-22' });
    expect(conStreakAggiornata(gia)).toBe(gia);
  });

  it('riparte da uno dopo un giorno saltato', () => {
    expect(conStreakAggiornata(con({ streak: 9, ultimoGiornoAttivita: '2026-08-20' })).streak).toBe(1);
  });
});

describe('conBadgeAggiornati', () => {
  it('non assegna nulla a uno stato appena creato', () => {
    expect(conBadgeAggiornati(base).nuovi).toEqual([]);
  });

  it('assegna il badge quando la soglia è raggiunta', () => {
    const { state, nuovi } = conBadgeAggiornati(con({ risposteCorrette: 10 }));
    expect(nuovi.map((b) => b.id)).toContain('dieci-corrette');
    expect(state.badges).toContain('dieci-corrette');
  });

  it('non riassegna un badge già ottenuto', () => {
    const gia = con({ risposteCorrette: 10, badges: ['dieci-corrette'] });
    const { state, nuovi } = conBadgeAggiornati(gia);
    expect(nuovi).toEqual([]);
    expect(state).toBe(gia);
  });

  it('può assegnare più badge insieme', () => {
    const { nuovi } = conBadgeAggiornati(
      con({ risposteCorrette: 50, punti: 1000, quizCompletati: 3, streak: 7 })
    );
    expect(nuovi.map((b) => b.id).sort()).toEqual([
      'cinquanta-corrette',
      'dieci-corrette',
      'mille-punti',
      'primo-quiz',
      'streak-3',
      'streak-7',
    ]);
  });

  it('conta le tracce lette', () => {
    expect(
      conBadgeAggiornati(con({ tracceLette: ['a'] })).nuovi.map((b) => b.id)
    ).toEqual(['prima-traccia']);
    expect(
      conBadgeAggiornati(con({ tracceLette: ['a', 'b', 'c', 'd', 'e'] })).nuovi.map((b) => b.id).sort()
    ).toEqual(['cinque-tracce', 'prima-traccia']);
  });

  it('usa identificatori di badge unici', () => {
    const ids = BADGES.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('livelloPerPunti', () => {
  it('parte dal primo livello', () => {
    expect(livelloPerPunti(0).nome).toBe('Studente di Giurisprudenza');
    expect(livelloPerPunti(99).nome).toBe('Studente di Giurisprudenza');
  });

  it('sale esattamente alla soglia', () => {
    expect(livelloPerPunti(100).nome).toBe('Laureato in Legge');
    expect(livelloPerPunti(1000).nome).toBe('Avvocato');
  });

  it('si ferma al livello massimo', () => {
    const ultimo = LIVELLI[LIVELLI.length - 1];
    expect(livelloPerPunti(999_999).nome).toBe(ultimo.nome);
  });

  it('ha soglie in ordine crescente', () => {
    const soglie = LIVELLI.map((l) => l.sogliaPunti);
    expect(soglie).toEqual([...soglie].sort((a, b) => a - b));
  });
});
