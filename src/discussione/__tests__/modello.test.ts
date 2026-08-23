import {
  abbreviaNome,
  argomentoTraccia,
  contaMessaggi,
  costruisciFilo,
  daGrezzo,
  LIMITE_TESTO,
  prossimoVoto,
  punteggioDopoVoto,
  tempoRelativo,
  validaTesto,
  type Messaggio,
  type MessaggioGrezzo,
} from '../modello';

function messaggio(parziale: Partial<Messaggio> & { id: string }): Messaggio {
  return {
    padreId: null,
    genere: 'commento',
    testo: 'testo',
    pseudonimo: 'Andrea M.',
    autoreId: 'u1',
    creatoIl: '2026-08-01T10:00:00.000Z',
    punteggio: 0,
    mioVoto: 0,
    eliminato: false,
    mio: false,
    ...parziale,
  };
}

describe('costruisciFilo', () => {
  it('separa le soluzioni dai commenti', () => {
    const filo = costruisciFilo([
      messaggio({ id: 'a', genere: 'soluzione' }),
      messaggio({ id: 'b', genere: 'commento' }),
    ]);
    expect(filo.soluzioni.map((n) => n.id)).toEqual(['a']);
    expect(filo.commenti.map((n) => n.id)).toEqual(['b']);
  });

  it('mette in cima il più votato e, a parità, il più vecchio', () => {
    const filo = costruisciFilo([
      messaggio({ id: 'vecchio', punteggio: 3, creatoIl: '2026-08-01T09:00:00.000Z' }),
      messaggio({ id: 'nuovo', punteggio: 3, creatoIl: '2026-08-01T11:00:00.000Z' }),
      messaggio({ id: 'top', punteggio: 9, creatoIl: '2026-08-01T12:00:00.000Z' }),
    ]);
    expect(filo.commenti.map((n) => n.id)).toEqual(['top', 'vecchio', 'nuovo']);
  });

  it('aggancia le risposte al messaggio di partenza, ordinate per punteggio', () => {
    const filo = costruisciFilo([
      messaggio({ id: 'padre' }),
      messaggio({ id: 'r1', padreId: 'padre', punteggio: 1 }),
      messaggio({ id: 'r2', padreId: 'padre', punteggio: 5 }),
    ]);
    expect(filo.commenti).toHaveLength(1);
    expect(filo.commenti[0].risposte.map((r) => r.id)).toEqual(['r2', 'r1']);
  });

  /**
   * Se il messaggio di partenza sparisce (autore bloccato, contenuto
   * nascosto), la risposta non deve sparire con lui: chi l'ha scritta non
   * ha fatto nulla di male.
   */
  it('promuove le risposte rimaste senza genitore', () => {
    const filo = costruisciFilo([messaggio({ id: 'orfana', padreId: 'sparito' })]);
    expect(filo.commenti.map((n) => n.id)).toEqual(['orfana']);
    expect(filo.commenti[0].risposte).toEqual([]);
  });

  it('tiene la lapide di un messaggio eliminato che ha ancora risposte', () => {
    const filo = costruisciFilo([
      messaggio({ id: 'padre', eliminato: true, testo: null }),
      messaggio({ id: 'r1', padreId: 'padre' }),
    ]);
    expect(filo.commenti).toHaveLength(1);
    expect(filo.commenti[0].eliminato).toBe(true);
    expect(filo.commenti[0].risposte).toHaveLength(1);
  });

  it('non mostra la lapide di un messaggio eliminato rimasto senza risposte', () => {
    const filo = costruisciFilo([messaggio({ id: 'solo', eliminato: true, testo: null })]);
    expect(filo.commenti).toEqual([]);
  });
});

describe('contaMessaggi', () => {
  it('conta risposte comprese e salta le lapidi', () => {
    const filo = costruisciFilo([
      messaggio({ id: 'a', genere: 'soluzione' }),
      messaggio({ id: 'b' }),
      messaggio({ id: 'c', padreId: 'b' }),
      messaggio({ id: 'd', eliminato: true, testo: null }),
      messaggio({ id: 'e', padreId: 'd' }),
    ]);
    expect(contaMessaggi(filo)).toBe(4);
  });
});

describe('daGrezzo', () => {
  const riga: MessaggioGrezzo = {
    id: 'x',
    padre_id: null,
    genere: 'soluzione',
    testo: 'ciao',
    pseudonimo: 'Andrea M.',
    autore_id: 'u9',
    creato_il: '2026-08-01T10:00:00.000Z',
    punteggio: 4,
    mio_voto: -1,
    eliminato: false,
    mio: true,
  };

  it('traduce le colonne nei nomi usati dall’app', () => {
    const m = daGrezzo(riga);
    expect(m).toMatchObject({ padreId: null, autoreId: 'u9', mioVoto: -1, mio: true });
  });

  it('normalizza il voto mancante a zero', () => {
    expect(daGrezzo({ ...riga, mio_voto: null }).mioVoto).toBe(0);
  });

  it('non lascia trapelare il testo di un messaggio eliminato', () => {
    expect(daGrezzo({ ...riga, eliminato: true }).testo).toBeNull();
  });
});

describe('validaTesto', () => {
  it('rifiuta il vuoto e i messaggi di un solo carattere', () => {
    expect(validaTesto('   ').valido).toBe(false);
    expect(validaTesto('a').valido).toBe(false);
  });

  it('rifiuta oltre il limite', () => {
    expect(validaTesto('a'.repeat(LIMITE_TESTO + 1)).valido).toBe(false);
  });

  it('accetta un messaggio normale', () => {
    expect(validaTesto('  Secondo me si applica l’art. 2932 c.c.  ').valido).toBe(true);
  });
});

describe('abbreviaNome', () => {
  it('lascia il nome e riduce il cognome all’iniziale', () => {
    expect(abbreviaNome('Andrea Moriggi')).toBe('Andrea M.');
    expect(abbreviaNome('maria teresa de luca')).toBe('Maria T. D. L.');
  });

  it('regge un nome solo e le maiuscole di troppo', () => {
    expect(abbreviaNome('ANDREA')).toBe('Andrea');
  });

  it('restituisce null quando non c’è nulla da abbreviare', () => {
    expect(abbreviaNome('')).toBeNull();
    expect(abbreviaNome(null)).toBeNull();
    expect(abbreviaNome('   ')).toBeNull();
  });

  /** Il cognome per intero non deve mai comparire: è il punto della regola. */
  it('non lascia passare il cognome per esteso', () => {
    expect(abbreviaNome('Andrea Moriggi')).not.toContain('Moriggi');
  });
});

describe('tempoRelativo', () => {
  const ora = new Date('2026-08-23T12:00:00.000Z');

  it('copre i vari scaglioni', () => {
    expect(tempoRelativo('2026-08-23T11:59:40.000Z', ora)).toBe('adesso');
    expect(tempoRelativo('2026-08-23T11:48:00.000Z', ora)).toBe('12 min');
    expect(tempoRelativo('2026-08-23T09:00:00.000Z', ora)).toBe('3 h');
    expect(tempoRelativo('2026-08-20T12:00:00.000Z', ora)).toBe('3 g');
  });

  it('oltre la settimana passa alla data', () => {
    expect(tempoRelativo('2026-07-02T12:00:00.000Z', ora)).toMatch(/lug/i);
  });

  it('non esplode su una data non valida', () => {
    expect(tempoRelativo('non una data', ora)).toBe('');
  });
});

describe('voto', () => {
  it('ritocca la stessa freccia e ritira il voto', () => {
    expect(prossimoVoto(1, 1)).toBe(0);
    expect(prossimoVoto(-1, -1)).toBe(0);
  });

  it('passa da un verso all’altro', () => {
    expect(prossimoVoto(-1, 1)).toBe(1);
    expect(prossimoVoto(0, -1)).toBe(-1);
  });

  it('aggiorna il punteggio del salto giusto', () => {
    // Da negativo a positivo il totale si muove di due, non di uno.
    expect(punteggioDopoVoto(5, -1, 1)).toBe(7);
    expect(punteggioDopoVoto(5, 1, 0)).toBe(4);
    expect(punteggioDopoVoto(5, 0, 1)).toBe(6);
  });
});

describe('argomentoTraccia', () => {
  it('usa un prefisso, così i fili di contenuti diversi non si mescolano', () => {
    expect(argomentoTraccia('2023-atto-civile')).toBe('traccia:2023-atto-civile');
  });
});
