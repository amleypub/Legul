import { linking } from '../navigation/linking';
import { oggiISO } from '../gamification/ripasso';
import { materiaColors, tintaMateria } from '../theme';

/*
  Tre difetti trovati con un audit e non con l'uso, perché nessuno dei
  tre si vede finché non capita: il giorno che cambia all'ora sbagliata,
  un indirizzo scritto a mano che apre una pagina bianca, e un numero
  malformato che arriva fino a un'animazione.
*/

/** La data locale di un istante, scritta a mano dai suoi campi. */
function dataLocale(d: Date): string {
  const mese = String(d.getMonth() + 1).padStart(2, '0');
  const giorno = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mese}-${giorno}`;
}

describe('confine di giornata', () => {
  /*
    `toISOString()` dà la data UTC. Per chi vive a est di Greenwich —
    cioè per chi userà quest'app — nelle ore piccole l'UTC è ancora il
    giorno prima, e una lezione finita all'una di notte finiva contata
    ieri: punti nel giorno sbagliato, pallino sbagliato acceso nella
    settimana in Home, streak spezzata o allungata a un'ora arbitraria.

    Il fuso non si può imporre da qui: Node lo legge all'avvio del
    processo, quindi assegnare `process.env.TZ` in un file di test non ha
    alcun effetto (`npm test` lo fissa sulla riga di comando). Le
    verifiche qui sotto sono perciò scritte per essere vere in qualunque
    fuso, e quella che ha bisogno di uno scarto da Greenwich lo dichiara
    invece di darlo per scontato.
  */
  const notti = [
    new Date(2026, 7, 27, 0, 30), // ora legale
    new Date(2026, 0, 1, 0, 30), // ora solare, e passaggio d'anno
    new Date(2026, 2, 15, 23, 59),
  ];

  it('segue il calendario di chi usa l’app, non quello di Greenwich', () => {
    for (const istante of notti) {
      expect(oggiISO(istante)).toBe(dataLocale(istante));
    }
  });

  it('non coincide con la data UTC quando il fuso se ne discosta', () => {
    const scarto = new Date(2026, 7, 27, 0, 30).getTimezoneOffset();
    if (scarto === 0) {
      // Runner a Greenwich: qui le due date coincidono per definizione e
      // il confronto non direbbe nulla. `npm test` gira su Europe/Rome.
      return;
    }
    const notte = new Date(2026, 7, 27, 0, 30);
    expect(oggiISO(notte)).not.toBe(notte.toISOString().slice(0, 10));
  });

  it('impagina sempre a due cifre mese e giorno', () => {
    expect(oggiISO(new Date(2026, 0, 5, 12, 0))).toBe('2026-01-05');
    expect(oggiISO(new Date(2026, 10, 30, 12, 0))).toBe('2026-11-30');
  });

  it('resta stabile per tutto il giorno', () => {
    for (const ora of [0, 1, 6, 13, 23]) {
      expect(oggiISO(new Date(2026, 2, 15, ora, 59))).toBe('2026-03-15');
    }
  });
});

describe('tinta di una materia', () => {
  it('restituisce la tinta giusta per le materie che esistono', () => {
    for (const nome of Object.keys(materiaColors)) {
      expect(tintaMateria(nome)).toBe(materiaColors[nome]);
    }
  });

  it('non restituisce mai «undefined» per un nome inventato', () => {
    /*
      Il nome arriva anche dall'URL: `legul://esito/Pippo/x` è un
      indirizzo che chiunque può digitare. Le schermate leggevano subito
      `tinte.soft` e l'app si apriva su una pagina bianca.
    */
    for (const nome of ['Pippo', '', 'diritto civile', '../../etc', '%%%']) {
      const tinta = tintaMateria(nome);
      expect(tinta).toBeDefined();
      expect(typeof tinta.soft).toBe('string');
      expect(typeof tinta.edge).toBe('string');
    }
  });
});

describe('parametri dei deep link', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schermate = (linking.config as any).screens;
  const parse = schermate.EsitoLezione.parse as Record<string, (v: string) => unknown>;

  it('converte i numeri buoni senza toccarli', () => {
    expect(parse.punti('128')).toBe(128);
    expect(parse.stelle('3')).toBe(3);
    expect(parse.corrette('0')).toBe(0);
  });

  it('non lascia passare NaN da una stringa qualunque', () => {
    /*
      `Number('abc')` è `NaN`, e quel NaN finiva nel contatore che fa
      salire i punti, che lo passa a un'animazione: sullo schermo
      restava «+NaN» e il conto non partiva mai.
    */
    for (const spazzatura of ['abc', '', 'NaN', 'Infinity', '1e999', '{}']) {
      const v = parse.punti(spazzatura) as number;
      expect(Number.isFinite(v)).toBe(true);
      expect(v).toBeGreaterThanOrEqual(0);
    }
  });

  it('non lascia passare numeri negativi o con la virgola', () => {
    expect(parse.punti('-50')).toBe(0);
    expect(parse.stelle('2.7')).toBe(2);
  });

  it('regge un elenco di badge vuoto o assente', () => {
    expect(parse.nuoviBadge('')).toEqual([]);
    expect(parse.nuoviBadge('primo-quiz,streak-3')).toEqual(['primo-quiz', 'streak-3']);
  });

  it('legge «fallito» solo come booleano esplicito', () => {
    expect(parse.fallito('true')).toBe(true);
    expect(parse.fallito('false')).toBe(false);
    expect(parse.fallito('pippo')).toBe(false);
  });
});
