import {
  conRisposta,
  daElencoPiatto,
  dovuteOggi,
  INTERVALLI,
  MAX_CARTE,
  piuGiorni,
  prossimaScadenza,
  type CartaRipasso,
} from '../ripasso';

const OGGI = '2026-03-10';

describe('conRisposta', () => {
  it('mette in mazzo la domanda sbagliata, dovuta subito', () => {
    const dopo = conRisposta([], false, 'd1', OGGI);
    expect(dopo).toEqual([{ id: 'd1', successi: 0, dovutaIl: OGGI }]);
  });

  it('ignora una risposta giusta su una domanda che non è nel mazzo', () => {
    const mazzo: CartaRipasso[] = [{ id: 'd1', successi: 0, dovutaIl: OGGI }];
    expect(conRisposta(mazzo, true, 'altra', OGGI)).toBe(mazzo);
  });

  it('allontana la scadenza a ogni risposta giusta, seguendo gli intervalli', () => {
    let mazzo = conRisposta([], false, 'd1', OGGI);
    let giorno = OGGI;
    for (let i = 0; i < INTERVALLI.length - 1; i++) {
      mazzo = conRisposta(mazzo, true, 'd1', giorno);
      expect(mazzo[0].successi).toBe(i + 1);
      expect(mazzo[0].dovutaIl).toBe(piuGiorni(giorno, INTERVALLI[i]));
      giorno = mazzo[0].dovutaIl;
    }
  });

  it('toglie la carta dal mazzo dopo l’ultimo intervallo', () => {
    let mazzo = conRisposta([], false, 'd1', OGGI);
    let giorno = OGGI;
    for (let i = 0; i < INTERVALLI.length; i++) {
      mazzo = conRisposta(mazzo, true, 'd1', giorno);
      giorno = mazzo[0]?.dovutaIl ?? giorno;
    }
    expect(mazzo).toEqual([]);
  });

  /**
   * È il caso che rende utile il meccanismo: una regola che si credeva
   * acquisita e che invece cade dopo tre settimane deve tornare in cima,
   * non restare con la scadenza lontana che si era guadagnata.
   */
  it('riporta a zero la carta sbagliata dopo alcuni successi', () => {
    let mazzo = conRisposta([], false, 'd1', OGGI);
    mazzo = conRisposta(mazzo, true, 'd1', OGGI);
    mazzo = conRisposta(mazzo, true, 'd1', piuGiorni(OGGI, 1));
    expect(mazzo[0].successi).toBe(2);

    const dopoErrore = conRisposta(mazzo, false, 'd1', piuGiorni(OGGI, 4));
    expect(dopoErrore[0]).toEqual({ id: 'd1', successi: 0, dovutaIl: piuGiorni(OGGI, 4) });
  });

  it('senza identificatore lascia il mazzo intatto', () => {
    const mazzo: CartaRipasso[] = [{ id: 'd1', successi: 1, dovutaIl: OGGI }];
    expect(conRisposta(mazzo, false, undefined, OGGI)).toBe(mazzo);
    expect(conRisposta(mazzo, true, undefined, OGGI)).toBe(mazzo);
  });

  /**
   * Al tetto si scarta la carta con la scadenza più lontana, non la più
   * vecchia: quella lontana è la più consolidata, e perderla costa meno.
   */
  it('non supera il tetto e scarta la carta meno urgente', () => {
    const pieno: CartaRipasso[] = Array.from({ length: MAX_CARTE }, (_, i) => ({
      id: `d${i}`,
      successi: 1,
      dovutaIl: piuGiorni(OGGI, i),
    }));
    const dopo = conRisposta(pieno, false, 'nuova', OGGI);
    expect(dopo).toHaveLength(MAX_CARTE);
    expect(dopo.map((c) => c.id)).toContain('nuova');
    expect(dopo.map((c) => c.id)).not.toContain(`d${MAX_CARTE - 1}`);
  });
});

describe('dovuteOggi', () => {
  const mazzo: CartaRipasso[] = [
    { id: 'domani', successi: 1, dovutaIl: piuGiorni(OGGI, 1) },
    { id: 'oggi', successi: 0, dovutaIl: OGGI },
    { id: 'scaduta', successi: 2, dovutaIl: piuGiorni(OGGI, -5) },
  ];

  it('restituisce solo le carte scadute, dalla più arretrata', () => {
    expect(dovuteOggi(mazzo, OGGI).map((c) => c.id)).toEqual(['scaduta', 'oggi']);
  });

  it('non anticipa una carta futura', () => {
    expect(dovuteOggi(mazzo, piuGiorni(OGGI, -1)).map((c) => c.id)).toEqual(['scaduta']);
  });
});

describe('prossimaScadenza', () => {
  it('indica il primo giorno utile quando oggi non c’è nulla', () => {
    const mazzo: CartaRipasso[] = [
      { id: 'a', successi: 1, dovutaIl: piuGiorni(OGGI, 5) },
      { id: 'b', successi: 2, dovutaIl: piuGiorni(OGGI, 2) },
    ];
    expect(prossimaScadenza(mazzo, OGGI)).toBe(piuGiorni(OGGI, 2));
  });

  it('è nulla se il mazzo è vuoto o tutto dovuto', () => {
    expect(prossimaScadenza([], OGGI)).toBeNull();
    expect(prossimaScadenza([{ id: 'a', successi: 0, dovutaIl: OGGI }], OGGI)).toBeNull();
  });
});

describe('daElencoPiatto', () => {
  /**
   * Chi aggiorna l'app arriva con il vecchio elenco senza date: non deve
   * perdere gli errori accumulati, e trattarli come dovuti oggi è la
   * lettura giusta, perché erano lì proprio perché non recuperati.
   */
  it('converte il vecchio elenco in carte dovute oggi', () => {
    expect(daElencoPiatto(['a', 'b'], OGGI)).toEqual([
      { id: 'a', successi: 0, dovutaIl: OGGI },
      { id: 'b', successi: 0, dovutaIl: OGGI },
    ]);
  });
});
