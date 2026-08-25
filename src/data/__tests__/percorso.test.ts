import {
  coperturaProgramma,
  DOMANDE_PER_LEZIONE,
  lezioneDoveRiprendere,
  lezioneSbloccata,
  lezioniInOrdine,
  percorsoPerMateria,
  statiLezioni,
  trovaLezione,
} from '../percorso';
import { materie } from '../quizzes';
import type { Materia } from '../../types';

describe('percorsoPerMateria', () => {
  it('costruisce le unità in ordine di difficoltà crescente', () => {
    for (const materia of materie as Materia[]) {
      const unita = percorsoPerMateria(materia);
      expect(unita.length).toBeGreaterThan(0);
      const difficolta = unita.map((u) => u.difficolta);
      expect(difficolta).toEqual([...difficolta].sort((a, b) => a - b));
    }
  });

  it('non lascia lezioni vuote o troppo corte', () => {
    for (const materia of materie as Materia[]) {
      for (const u of percorsoPerMateria(materia)) {
        for (const l of u.lezioni) {
          expect(l.domande.length).toBeGreaterThanOrEqual(5);
        }
      }
    }
  });

  it('accorpa la coda invece di creare una lezione da poche domande', () => {
    // La regola: solo l'ultima lezione di un'unità può superare la
    // dimensione standard, perché assorbe le domande avanzate.
    for (const materia of materie as Materia[]) {
      for (const u of percorsoPerMateria(materia)) {
        u.lezioni.slice(0, -1).forEach((l) => {
          expect(l.domande.length).toBe(DOMANDE_PER_LEZIONE);
        });
        const ultima = u.lezioni[u.lezioni.length - 1];
        expect(ultima.domande.length).toBeLessThan(DOMANDE_PER_LEZIONE + 5);
      }
    }
  });

  it('usa tutte le domande della materia senza perderne né ripeterne', () => {
    for (const materia of materie as Materia[]) {
      const ids = percorsoPerMateria(materia)
        .flatMap((u) => u.lezioni)
        .flatMap((l) => l.domande.map((d) => d.id));
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('assegna identificatori di lezione unici', () => {
    for (const materia of materie as Materia[]) {
      const ids = lezioniInOrdine(materia).map((l) => l.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  /**
   * Il percorso è calcolato una volta e riusato: senza, ogni render della
   * schermata Quiz rileggeva l'intera banca domande sei volte.
   */
  it('riusa lo stesso percorso invece di ricostruirlo', () => {
    expect(percorsoPerMateria('Diritto civile')).toBe(percorsoPerMateria('Diritto civile'));
    expect(lezioniInOrdine('Diritto penale')).toBe(lezioniInOrdine('Diritto penale'));
  });

  it('non duplica domande quando viene richiesto più volte', () => {
    const conta = () =>
      percorsoPerMateria('Deontologia forense')
        .flatMap((u) => u.lezioni)
        .reduce((acc, l) => acc + l.domande.length, 0);
    const prima = conta();
    conta();
    expect(conta()).toBe(prima);
  });

  it('ritrova una lezione dal suo identificatore', () => {
    const materia: Materia = 'Diritto civile';
    const prima = lezioniInOrdine(materia)[0];
    expect(trovaLezione(materia, prima.id)?.id).toBe(prima.id);
    expect(trovaLezione(materia, 'inesistente')).toBeUndefined();
  });
});

describe('statiLezioni', () => {
  const ordine = lezioniInOrdine('Diritto civile');

  it('apre la prima e chiude tutte le altre a percorso vuoto', () => {
    const stati = statiLezioni(ordine, {});
    expect(stati.get(ordine[0].id)).toBe('corrente');
    expect(stati.get(ordine[1].id)).toBe('bloccata');
    expect(stati.get(ordine[10].id)).toBe('bloccata');
  });

  it('sposta il fronte avanti man mano che si completa', () => {
    const stati = statiLezioni(ordine, { [ordine[0].id]: 3, [ordine[1].id]: 1 });
    expect(stati.get(ordine[0].id)).toBe('completata');
    expect(stati.get(ordine[1].id)).toBe('completata');
    expect(stati.get(ordine[2].id)).toBe('corrente');
    expect(stati.get(ordine[3].id)).toBe('bloccata');
  });

  it('non considera completata una lezione senza stelle', () => {
    const stati = statiLezioni(ordine, { [ordine[0].id]: 0 });
    expect(stati.get(ordine[0].id)).toBe('corrente');
    expect(stati.get(ordine[1].id)).toBe('bloccata');
  });

  it('assegna uno stato a ogni lezione del percorso', () => {
    const stati = statiLezioni(ordine, {});
    expect(stati.size).toBe(ordine.length);
  });

  /**
   * `lezioneSbloccata` e la schermata del percorso devono rispondere alla
   * stessa regola: prima erano due implementazioni separate, libere di
   * divergere alla prima modifica.
   */
  it('concorda con lezioneSbloccata', () => {
    const stelle = { [ordine[0].id]: 2, [ordine[1].id]: 3 };
    const stati = statiLezioni(ordine, stelle);
    for (const l of ordine.slice(0, 12)) {
      const sbloccata = lezioneSbloccata('Diritto civile', l.id, stelle);
      expect(sbloccata).toBe(stati.get(l.id) !== 'bloccata');
    }
  });
});

describe('lezioneSbloccata', () => {
  const materia: Materia = 'Diritto civile';
  const ordine = lezioniInOrdine(materia);

  it('apre sempre la prima lezione', () => {
    expect(lezioneSbloccata(materia, ordine[0].id, {})).toBe(true);
  });

  it('tiene chiusa una lezione finché la precedente non dà almeno una stella', () => {
    expect(lezioneSbloccata(materia, ordine[1].id, {})).toBe(false);
    expect(lezioneSbloccata(materia, ordine[1].id, { [ordine[0].id]: 0 })).toBe(false);
    expect(lezioneSbloccata(materia, ordine[1].id, { [ordine[0].id]: 1 })).toBe(true);
  });

  it('non apre una lezione lontana solo perché la prima è completata', () => {
    expect(lezioneSbloccata(materia, ordine[5].id, { [ordine[0].id]: 3 })).toBe(false);
  });

  it('considera bloccata una lezione che non esiste', () => {
    expect(lezioneSbloccata(materia, 'inesistente', {})).toBe(false);
  });
});

describe('coperturaProgramma', () => {
  it('è zero senza alcuna lezione superata', () => {
    expect(coperturaProgramma(materie, {})).toBe(0);
  });

  /**
   * È il difetto che questa misura corregge: la scala dei livelli era
   * agganciata ai punti, che si accumulano anche sbagliando e anche
   * rifacendo la stessa lezione. La copertura conta invece il programma
   * effettivamente svolto, e una sola lezione su centinaia deve pesare
   * pochissimo.
   */
  it('cresce di poco per una singola lezione superata', () => {
    const prima = lezioniInOrdine('Diritto civile')[0];
    const copertura = coperturaProgramma(materie, { [prima.id]: 3 });
    expect(copertura).toBeGreaterThan(0);
    expect(copertura).toBeLessThan(0.02);
  });

  it('conta come svolta una lezione con una sola stella', () => {
    const prima = lezioniInOrdine('Diritto civile')[0];
    expect(coperturaProgramma(materie, { [prima.id]: 1 })).toBe(
      coperturaProgramma(materie, { [prima.id]: 3 })
    );
  });

  it('arriva a uno quando tutte le lezioni sono superate', () => {
    const tutte: Record<string, number> = {};
    for (const m of materie) for (const l of lezioniInOrdine(m)) tutte[l.id] = 1;
    expect(coperturaProgramma(materie, tutte)).toBe(1);
  });
});

describe('lezioneDoveRiprendere', () => {
  it('senza progressi propone la prima lezione della prima materia', () => {
    const ripresa = lezioneDoveRiprendere(materie, {});
    expect(ripresa?.materia).toBe(materie[0]);
    expect(ripresa?.lezione.id).toBe(lezioniInOrdine(materie[0])[0].id);
  });

  /**
   * Il pulsante in Home deve riportare dove si stava lavorando, non
   * all'inizio dell'elenco: è la materia con più lezioni alle spalle.
   */
  it('sceglie la materia su cui si è andati più avanti', () => {
    const penale = lezioniInOrdine('Diritto penale');
    const stelle: Record<string, number> = {};
    for (const l of penale.slice(0, 5)) stelle[l.id] = 2;
    const ripresa = lezioneDoveRiprendere(materie, stelle);
    expect(ripresa?.materia).toBe('Diritto penale');
    expect(ripresa?.lezione.id).toBe(penale[5].id);
  });

  it('è nulla quando non resta nulla da fare', () => {
    const tutte: Record<string, number> = {};
    for (const m of materie) for (const l of lezioniInOrdine(m)) tutte[l.id] = 1;
    expect(lezioneDoveRiprendere(materie, tutte)).toBeNull();
  });
});
