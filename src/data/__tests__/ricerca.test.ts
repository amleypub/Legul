import fs from 'fs';
import path from 'path';
import { APICI, EFFETTO_GAMIFICATION_G, ESPERIMENTO, FONTI, guadagnoDopoUnaSettimana } from '../ricerca';

/*
  L'intro cita tre ricerche e mostra un numero grande. Un numero grande
  sbagliato in una schermata che parla di rigore è il peggior errore
  possibile, e non lo vede nessuno: chi guarda l'intro non va a
  controllare l'articolo. Lo controlla questo test, ogni volta.
*/

const INTRO = fs.readFileSync(path.join(__dirname, '..', '..', 'screens', 'IntroScreen.tsx'), 'utf8');

describe('ricerca citata nell’intro', () => {
  it('riporta i valori pubblicati da Roediger e Karpicke (2006, esperimento 2)', () => {
    expect(ESPERIMENTO.rileggere).toEqual([83, 40]);
    expect(ESPERIMENTO.allaProva).toEqual([71, 61]);
  });

  it('mostra l’incrocio che rende il dato interessante', () => {
    const [r0, r1] = ESPERIMENTO.rileggere;
    const [p0, p1] = ESPERIMENTO.allaProva;
    // Subito dopo, rileggere sembra meglio; una settimana dopo no.
    expect(r0).toBeGreaterThan(p0);
    expect(p1).toBeGreaterThan(r1);
  });

  it('arrotonda il guadagno per difetto, mai per eccesso', () => {
    const esatto = (61 / 40 - 1) * 100; // 52,5
    expect(guadagnoDopoUnaSettimana()).toBe(52);
    expect(guadagnoDopoUnaSettimana()).toBeLessThanOrEqual(esatto);
  });

  it('riporta l’effetto della meta-analisi senza gonfiarlo', () => {
    expect(EFFETTO_GAMIFICATION_G).toBe(0.49);
  });

  it('cita ogni fonte con un DOI ben formato e una nota per ciascuna', () => {
    expect(FONTI.map((f) => f.nota)).toEqual([1, 2, 3]);
    expect(APICI).toHaveLength(FONTI.length);
    for (const f of FONTI) {
      expect(f.doi).toMatch(/^10\.\d{4,9}\/\S+$/);
      // La citazione breve porta l'anno giusto: è ciò che si legge a schermo.
      expect(f.citazione.endsWith(String(f.anno))).toBe(true);
    }
  });

  it('usa nel testo dell’intro tutte e tre le note, e non altre', () => {
    for (let i = 0; i < FONTI.length; i++) expect(INTRO).toContain(`APICI[${i}]`);
    expect(INTRO).not.toMatch(/APICI\[[3-9]\]/);
  });

  /*
    Nessuno studio citato misura l'esame da avvocato. L'intro può dire
    che il metodo è fondato sulla ricerca, non che garantisce un esito.
  */
  it('non promette risultati all’esame', () => {
    expect(INTRO).not.toMatch(/garanti|promoss|superi l.esame|passare l.esame|successo assicurato/i);
  });
});
