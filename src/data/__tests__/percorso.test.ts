import {
  DOMANDE_PER_LEZIONE,
  lezioneSbloccata,
  lezioniInOrdine,
  percorsoPerMateria,
  statiLezioni,
  trovaLezione,
  unitaGratuita,
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

  it('ritrova una lezione dal suo identificatore', () => {
    const materia: Materia = 'Diritto civile';
    const prima = lezioniInOrdine(materia)[0];
    expect(trovaLezione(materia, prima.id)?.id).toBe(prima.id);
    expect(trovaLezione(materia, 'inesistente')).toBeUndefined();
  });
});

describe('unitaGratuita', () => {
  it('lascia libere le prime due unità e chiude le altre', () => {
    expect(unitaGratuita(1)).toBe(true);
    expect(unitaGratuita(2)).toBe(true);
    expect(unitaGratuita(3)).toBe(false);
    expect(unitaGratuita(4)).toBe(false);
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
