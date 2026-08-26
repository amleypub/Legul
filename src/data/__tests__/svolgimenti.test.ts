import { tracce } from '../tracce';
import {
  quanteConSvolgimento,
  svolgimentoDi,
  svolgimenti,
  tracceConSvolgimento,
} from '../svolgimenti';
import type { Riferimento, Svolgimento } from '../svolgimenti';

/**
 * Questi controlli non guardano la struttura dei dati: guardano gli
 * impegni editoriali presi con chi studia. Uno svolgimento senza
 * riferimenti puntuali, un contrasto con una tesi sola, una promessa di
 * «soluzione corretta» sono difetti di contenuto che nessun compilatore
 * intercetta e che invecchiano in silenzio.
 */
describe('svolgimenti proposti', () => {
  const testo = (s: Svolgimento) =>
    [
      ...s.questioni,
      ...s.blocchi.flatMap((b) => [b.titolo, b.sintesi, ...b.paragrafi]),
      ...s.contrasti.flatMap((c) => [
        c.questione,
        c.ricaduta,
        ...c.orientamenti.flatMap((o) => [o.tesi, o.argomento]),
      ]),
      ...s.trappole,
      ...s.griglia.flatMap((g) => [g.voce, g.criterio]),
    ].join(' ');

  it('si aggancia a tracce esistenti in archivio', () => {
    const id = new Set(tracce.map((t) => t.id));
    for (const s of svolgimenti) expect(id.has(s.tracciaId)).toBe(true);
  });

  it('non ha due svolgimenti per la stessa traccia', () => {
    const id = svolgimenti.map((s) => s.tracciaId);
    expect(new Set(id).size).toBe(id.length);
  });

  it('indica la data di aggiornamento di ogni svolgimento', () => {
    for (const s of svolgimenti) expect(s.aggiornatoAl).toMatch(/\d{1,2}\s+\w+\s+\d{4}/);
  });

  /**
   * La regola che tiene in piedi tutto il resto: se un passaggio non
   * porta l'aggancio alla norma o alla pronuncia, è un'opinione, e chi
   * studia non ha modo di controllarla.
   */
  it('àncora ogni blocco ad almeno due riferimenti puntuali', () => {
    for (const s of svolgimenti) {
      for (const b of s.blocchi) {
        expect(b.riferimenti.length).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it('cita norme e pronunce in forma verificabile', () => {
    const forma: Record<Riferimento['tipo'], RegExp> = {
      // «art. 1495 c.c.», «artt. 128 ss. d.lgs. 206/2005», «d.lgs. 170/2021»
      norma: /(art\.|artt\.)\s*\d|\b(l\.|d\.lgs\.|d\.l\.|d\.p\.r\.)\s*\d+\/\d{4}/i,
      // «Cass. civ. n. 5935/2018», «Cass. Sez. Un. n. 9282/1992»
      giurisprudenza: /\bn\.\s*\d+\/\d{4}/i,
    };
    for (const s of svolgimenti) {
      const tutti = [
        ...s.blocchi.flatMap((b) => b.riferimenti),
        ...s.contrasti.flatMap((c) => c.orientamenti.flatMap((o) => o.riferimenti)),
      ];
      for (const r of tutti) {
        expect(r.testo).toMatch(forma[r.tipo]);
      }
    }
  });

  it('apre con le questioni da individuare e chiude con le trappole', () => {
    for (const s of svolgimenti) {
      expect(s.questioni.length).toBeGreaterThanOrEqual(3);
      expect(s.trappole.length).toBeGreaterThanOrEqual(3);
      for (const q of [...s.questioni, ...s.trappole]) {
        expect(q.trim().length).toBeGreaterThan(30);
      }
    }
  });

  it('scrive blocchi argomentati, non elenchi di massime', () => {
    for (const s of svolgimenti) {
      expect(s.blocchi.length).toBeGreaterThanOrEqual(3);
      for (const b of s.blocchi) {
        expect(b.sintesi.trim().length).toBeGreaterThan(20);
        expect(b.paragrafi.length).toBeGreaterThanOrEqual(3);
        for (const p of b.paragrafi) expect(p.trim().length).toBeGreaterThan(80);
      }
    }
  });

  /**
   * Un «contrasto» con un orientamento solo non è un contrasto: è una
   * tesi travestita da panoramica. E senza `ricaduta` resta erudizione,
   * perché non dice che cosa cambia per il cliente.
   */
  it('espone i contrasti con almeno due orientamenti e la loro ricaduta', () => {
    for (const s of svolgimenti) {
      for (const c of s.contrasti) {
        expect(c.orientamenti.length).toBeGreaterThanOrEqual(2);
        expect(c.ricaduta.trim().length).toBeGreaterThan(80);
        for (const o of c.orientamenti) {
          expect(o.tesi.trim().length).toBeGreaterThan(30);
          expect(o.argomento.trim().length).toBeGreaterThan(80);
          expect(o.riferimenti.length).toBeGreaterThanOrEqual(1);
        }
        const tesi = c.orientamenti.map((o) => o.tesi);
        expect(new Set(tesi).size).toBe(tesi.length);
      }
    }
  });

  it('non ha identificatori duplicati dentro il singolo svolgimento', () => {
    for (const s of svolgimenti) {
      const blocchi = s.blocchi.map((b) => b.id);
      expect(new Set(blocchi).size).toBe(blocchi.length);
      const contrasti = s.contrasti.map((c) => c.id);
      expect(new Set(contrasti).size).toBe(contrasti.length);
    }
  });

  it('distribuisce cento punti nella griglia di autovalutazione', () => {
    for (const s of svolgimenti) {
      expect(s.griglia.length).toBeGreaterThanOrEqual(4);
      const totale = s.griglia.reduce((acc, v) => acc + v.peso, 0);
      expect(totale).toBe(100);
      for (const v of s.griglia) expect(v.peso).toBeGreaterThan(0);
    }
  });

  /**
   * All'esame non esiste una risposta esatta depositata da qualche
   * parte. Prometterla sarebbe una promessa che nessuno può mantenere:
   * il controllo intercetta il linguaggio che la lascia intendere.
   */
  it('non promette soluzioni corrette né risposte esatte', () => {
    for (const s of svolgimenti) {
      expect(testo(s)).not.toMatch(/soluzione (corretta|giusta|esatta)|risposta esatta/i);
    }
  });

  it('non spaccia per pubblicate le bozze', () => {
    for (const s of svolgimenti) {
      if (s.stato === 'bozza') expect(svolgimentoDi(s.tracciaId)).toBeUndefined();
      else expect(svolgimentoDi(s.tracciaId)).toBe(s);
    }
    expect(svolgimentoDi('traccia-che-non-esiste')).toBeUndefined();
  });

  /**
   * L'archivio è coperto per intero. Se domani si aggiunge una traccia
   * senza svolgimento il controllo fallisce: è voluto, perché serve a
   * ricordare che la copertura dichiarata in schermata deve restare
   * vera, non a impedire di aggiungere tracce.
   */
  it('copre tutte le tracce in archivio', () => {
    const coperte = new Set(tracceConSvolgimento());
    const scoperte = tracce.filter((t) => !coperte.has(t.id)).map((t) => t.id);
    expect(scoperte).toEqual([]);
  });

  /**
   * Uno svolgimento tutto norme e niente pronunce è un riassunto del
   * codice: sulle tracce d'esame il valore sta nel come la
   * giurisprudenza ha sciolto i nodi.
   */
  it('porta almeno una pronuncia per ogni svolgimento', () => {
    for (const s of svolgimenti) {
      const pronunce = [
        ...s.blocchi.flatMap((b) => b.riferimenti),
        ...s.contrasti.flatMap((c) => c.orientamenti.flatMap((o) => o.riferimenti)),
      ].filter((r) => r.tipo === 'giurisprudenza');
      expect(pronunce.length).toBeGreaterThan(0);
    }
  });

  it('non ripete lo stesso riferimento dentro il medesimo blocco', () => {
    for (const s of svolgimenti) {
      for (const b of s.blocchi) {
        const testi = b.riferimenti.map((r) => r.testo);
        expect(new Set(testi).size).toBe(testi.length);
      }
    }
  });

  /**
   * Ogni traccia porta il suo contrasto: è la promessa fatta a chi
   * studia, ed è anche il motivo per cui queste schede valgono più di
   * uno svolgimento che sceglie il vincitore e tace il resto.
   */
  it('espone almeno un contrasto per ogni svolgimento', () => {
    for (const s of svolgimenti) {
      expect(s.contrasti.length).toBeGreaterThan(0);
    }
  });

  it('conta solo le tracce dell’archivio effettivamente coperte', () => {
    const pubblicate = tracceConSvolgimento();
    expect(quanteConSvolgimento()).toBe(
      tracce.filter((t) => pubblicate.includes(t.id)).length
    );
    expect(quanteConSvolgimento()).toBeLessThanOrEqual(tracce.length);
  });
});

/**
 * Un esercizio scritto da noi non deve poter passare per una prova
 * assegnata dal Ministero.
 *
 * La riforma ha reso possibile il parere in diritto amministrativo, che
 * come prova non è mai esistita: colmare il buco è utile, ma la
 * distinzione fra «questo è stato chiesto» e «questo potrebbe essere
 * chiesto» è esattamente ciò che chi studia non è in grado di verificare
 * da solo, e quindi è ciò che va presidiato qui.
 */
describe('provenienza delle tracce', () => {
  /** Prima sessione retta dal d.l. 100/2026: nulla di anteriore può portare questo anno. */
  const PRIMA_SESSIONE_RIFORMATA = 2026;

  it('non spaccia per prova assegnata un esercizio costruito da noi', () => {
    for (const t of tracce.filter((x) => x.esercizio)) {
      expect(t.testoUfficiale).not.toBe(true);
      expect(t.fonte).toBeUndefined();
      expect(t.sessione).toMatch(/esercizio/i);
    }
  });

  it('non colloca prove assegnate in sessioni che non si sono svolte', () => {
    const future = tracce.filter((t) => t.anno >= PRIMA_SESSIONE_RIFORMATA && !t.esercizio);
    expect(future.map((t) => t.id)).toEqual([]);
  });

  /**
   * Il buco che l'esercizio colma esiste davvero: se un domani entrasse
   * in archivio un parere di amministrativo realmente assegnato, questo
   * controllo va aggiornato invece di essere cancellato.
   */
  it('copre la combinazione che la riforma ha reso possibile e l’archivio non ha', () => {
    const pareriAmministrativi = tracce.filter((t) => t.tipo === 'Parere di diritto amministrativo');
    expect(pareriAmministrativi.length).toBeGreaterThan(0);
    expect(pareriAmministrativi.every((t) => t.esercizio)).toBe(true);
  });
});
