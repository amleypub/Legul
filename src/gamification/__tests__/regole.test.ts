import {
  BADGES,
  conBadgeAggiornati,
  conErrore,
  conStreakAggiornata,
  LIVELLI,
  livelloPerPunti,
  MAX_ERRORI_DA_RIPASSARE,
  progressiAzzerati,
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
  promemoriaAttivo: false,
  oraPromemoria: 20,
  tracceLette: [],
  badges: [],
  streak: 0,
  ultimoGiornoAttivita: null,
  puntiOggi: 0,
  erroriDaRipassare: [],
  casiSvolti: {},
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

  it('azzera l’obiettivo giornaliero quando cambia il giorno', () => {
    expect(
      conStreakAggiornata(con({ puntiOggi: 80, ultimoGiornoAttivita: '2026-08-21' })).puntiOggi
    ).toBe(0);
  });

  it('non azzera l’obiettivo se si sta ancora studiando oggi', () => {
    expect(
      conStreakAggiornata(con({ puntiOggi: 30, ultimoGiornoAttivita: '2026-08-22' })).puntiOggi
    ).toBe(30);
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

  it('assegna il primo caso pratico appena ne compare uno', () => {
    const { nuovi } = conBadgeAggiornati(con({ casiSvolti: { 'privato-locazione-morosita': 40 } }));
    expect(nuovi.map((b) => b.id)).toContain('primo-caso');
    expect(nuovi.map((b) => b.id)).not.toContain('caso-completo');
  });

  it('assegna la scaletta completa solo alla copertura piena', () => {
    const parziale = conBadgeAggiornati(con({ casiSvolti: { 'penale-furto-abitazione': 95 } }));
    expect(parziale.nuovi.map((b) => b.id)).not.toContain('caso-completo');
    const pieno = conBadgeAggiornati(con({ casiSvolti: { 'penale-furto-abitazione': 100 } }));
    expect(pieno.nuovi.map((b) => b.id)).toContain('caso-completo');
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

describe('conErrore', () => {
  it('mette in testa la domanda sbagliata', () => {
    expect(conErrore(['b'], false, 'a')).toEqual(['a', 'b']);
  });

  it('toglie dall’elenco una domanda poi indovinata', () => {
    expect(conErrore(['a', 'b'], true, 'a')).toEqual(['b']);
  });

  it('non tocca l’elenco quando indovini qualcosa che non avevi sbagliato', () => {
    const errori = ['a', 'b'];
    expect(conErrore(errori, true, 'z')).toBe(errori);
  });

  it('non duplica una domanda sbagliata due volte', () => {
    expect(conErrore(['a', 'b'], false, 'b')).toEqual(['b', 'a']);
  });

  it('non fa nulla senza identificatore della domanda', () => {
    const errori = ['a'];
    expect(conErrore(errori, false)).toBe(errori);
    expect(conErrore(errori, true)).toBe(errori);
  });

  /**
   * Oltre il tetto il ripasso smetterebbe di essere un recupero mirato e
   * diventerebbe un secondo percorso che nessuno finisce mai.
   */
  it('tiene solo gli errori più recenti fino al tetto', () => {
    const molti = Array.from({ length: MAX_ERRORI_DA_RIPASSARE }, (_, i) => `d${i}`);
    const dopo = conErrore(molti, false, 'nuova');
    expect(dopo).toHaveLength(MAX_ERRORI_DA_RIPASSARE);
    expect(dopo[0]).toBe('nuova');
    expect(dopo).not.toContain(`d${MAX_ERRORI_DA_RIPASSARE - 1}`);
  });
});

describe('progressiAzzerati', () => {
  const pieno = con({
    punti: 940,
    risposteCorrette: 128,
    risposteErrate: 22,
    quizCompletati: 14,
    lezioni: { 'Diritto civile|1|0': 3 },
    premium: true,
    tracceLette: ['2023-atto-civile'],
    badges: ['primo-quiz', 'streak-3'],
    streak: 4,
    ultimoGiornoAttivita: '2026-08-22',
    puntiOggi: 30,
    erroriDaRipassare: ['civile-1-3'],
  });

  it('cancella ogni traccia dei progressi', () => {
    const vuoto = progressiAzzerati(pieno);
    expect(vuoto.punti).toBe(0);
    expect(vuoto.risposteCorrette).toBe(0);
    expect(vuoto.risposteErrate).toBe(0);
    expect(vuoto.quizCompletati).toBe(0);
    expect(vuoto.lezioni).toEqual({});
    expect(vuoto.tracceLette).toEqual([]);
    expect(vuoto.badges).toEqual([]);
    expect(vuoto.streak).toBe(0);
    expect(vuoto.ultimoGiornoAttivita).toBeNull();
    expect(vuoto.puntiOggi).toBe(0);
    expect(vuoto.erroriDaRipassare).toEqual([]);
  });

  it('revoca anche Premium', () => {
    expect(progressiAzzerati(pieno).premium).toBe(false);
  });

  /**
   * L'audio è una preferenza del telefono, non un dato dell'utente: chi
   * elimina l'account non si aspetta di ritrovare i suoni riaccesi.
   */
  it('conserva le preferenze del dispositivo', () => {
    expect(progressiAzzerati(con({ audioAttivo: false })).audioAttivo).toBe(false);
    expect(progressiAzzerati(con({ audioAttivo: true })).audioAttivo).toBe(true);
    const conPromemoria = progressiAzzerati(con({ promemoriaAttivo: true, oraPromemoria: 8 }));
    expect(conPromemoria.promemoriaAttivo).toBe(true);
    expect(conPromemoria.oraPromemoria).toBe(8);
  });

  it('non modifica lo stato ricevuto', () => {
    progressiAzzerati(pieno);
    expect(pieno.punti).toBe(940);
    expect(pieno.badges).toEqual(['primo-quiz', 'streak-3']);
  });
});

describe('livelloPerPunti', () => {
  it('parte dal primo livello', () => {
    expect(livelloPerPunti(0)).toBe(LIVELLI[0]);
    expect(livelloPerPunti(99)).toBe(LIVELLI[0]);
  });

  it('sale esattamente alla soglia', () => {
    expect(livelloPerPunti(100)).toBe(LIVELLI[1]);
    expect(livelloPerPunti(999)).toBe(LIVELLI[3]);
    expect(livelloPerPunti(1000)).toBe(LIVELLI[4]);
  });

  /**
   * I livelli non devono promettere qualifiche: chi usa l'app è già
   * laureato e in pratica, e l'abilitazione la ottiene all'esame vero.
   */
  it('non usa titoli professionali come nome di livello', () => {
    const titoli = ['avvocato', 'praticante', 'studente', 'laureato', 'cassazionista'];
    for (const l of LIVELLI) {
      for (const t of titoli) {
        expect(l.nome.toLowerCase()).not.toContain(t);
      }
    }
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
