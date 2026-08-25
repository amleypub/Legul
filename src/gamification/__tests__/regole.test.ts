import {
  BADGES,
  conBadgeAggiornati,
  conStreakAggiornata,
  LIVELLI,
  livelloPerCopertura,
  migrato,
  progressiAzzerati,
  stellePerRisultato,
  type GamificationState,
} from '../GamificationContext';
import { PROFILO_VUOTO } from '../../data/scelte';

const base: GamificationState = {
  punti: 0,
  risposteCorrette: 0,
  risposteErrate: 0,
  quizCompletati: 0,
  lezioni: {},
  premium: false,
  audioAttivo: true,
  andatura: 'costante',
  esame: PROFILO_VUOTO,
  aperturaFatta: false,
  promemoriaProposto: false,
  promemoriaAttivo: false,
  oraPromemoria: 20,
  tracceLette: [],
  badges: [],
  streak: 0,
  ultimoGiornoAttivita: null,
  puntiOggi: 0,
  mazzoRipasso: [],
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

describe('migrato', () => {
  /**
   * Chi aggiorna l'app arriva con il vecchio elenco piatto di errori.
   * Perderlo in silenzio significherebbe azzerare il ripasso di chi lo
   * stava usando, che è esattamente l'utente che si vuole tenere.
   */
  it('converte il vecchio elenco di errori in carte dovute oggi', () => {
    const dopo = migrato(con({ erroriDaRipassare: ['a', 'b'] }));
    expect(dopo.mazzoRipasso.map((c) => c.id)).toEqual(['a', 'b']);
    expect(dopo.mazzoRipasso.every((c) => c.successi === 0)).toBe(true);
    expect(dopo.erroriDaRipassare).toBeUndefined();
  });

  it('non duplica una domanda già presente nel mazzo', () => {
    const dopo = migrato(
      con({
        erroriDaRipassare: ['a'],
        mazzoRipasso: [{ id: 'a', successi: 2, dovutaIl: '2026-09-01' }],
      })
    );
    expect(dopo.mazzoRipasso).toEqual([{ id: 'a', successi: 2, dovutaIl: '2026-09-01' }]);
  });

  it('svuota il campo vecchio anche quando non c’è nulla da convertire', () => {
    expect(migrato(con({})).erroriDaRipassare).toBeUndefined();
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
    mazzoRipasso: [{ id: 'civile-1-3', successi: 0, dovutaIl: '2026-08-22' }],
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
    expect(vuoto.mazzoRipasso).toEqual([]);
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

describe('livelloPerCopertura', () => {
  it('parte dal primo livello', () => {
    expect(livelloPerCopertura(0)).toBe(LIVELLI[0]);
    expect(livelloPerCopertura(LIVELLI[1].sogliaCopertura - 0.001)).toBe(LIVELLI[0]);
  });

  it('sale esattamente alla soglia', () => {
    expect(livelloPerCopertura(LIVELLI[1].sogliaCopertura)).toBe(LIVELLI[1]);
    expect(livelloPerCopertura(LIVELLI[4].sogliaCopertura)).toBe(LIVELLI[4]);
  });

  /**
   * È il difetto che questa scala corregge: con i punti l'ultimo livello
   * arrivava dopo aver visto poco più del cinque per cento delle domande,
   * perché i punti si accumulano anche sbagliando e anche rifacendo la
   * stessa lezione. Dire «più che pronto» a chi non ha visto il programma
   * è l'unica bugia che questa app non si può permettere.
   */
  it('riserva l’ultimo livello a chi ha svolto quasi tutto il programma', () => {
    const ultimo = LIVELLI[LIVELLI.length - 1];
    expect(ultimo.sogliaCopertura).toBeGreaterThanOrEqual(0.9);
    expect(livelloPerCopertura(0.5).nome).not.toBe(ultimo.nome);
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
    expect(livelloPerCopertura(1).nome).toBe(ultimo.nome);
  });

  it('ha soglie in ordine crescente', () => {
    const soglie = LIVELLI.map((l) => l.sogliaCopertura);
    expect(soglie).toEqual([...soglie].sort((a, b) => a - b));
  });
});
