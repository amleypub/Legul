import {
  diagnosi,
  materiaPiuDebole,
  perUrgenza,
  RISPOSTE_MINIME,
  risposteMancanti,
  SOGLIA_DEBOLE,
  type DiagnosiMateria,
} from '../diagnosi';
import { lezioniInOrdine } from '../percorso';
import { PROFILO_VUOTO, type ProfiloEsame } from '../scelte';
import type { CartaRipasso } from '../../gamification/ripasso';
import type { Materia } from '../../types';

const MATERIE: Materia[] = ['Diritto civile', 'Diritto penale', 'Procedura civile'];

/** Segna come superate le prime `quante` lezioni della materia. */
function conLezioni(materia: Materia, quante: number): Record<string, number> {
  const stelle: Record<string, number> = {};
  for (const l of lezioniInOrdine(materia).slice(0, quante)) stelle[l.id] = 2;
  return stelle;
}

const senzaMazzo: CartaRipasso[] = [];
const nessunaMateria = () => undefined;

function esegui(
  stelle: Record<string, number> = {},
  perMateria: Record<string, { corrette: number; errate: number }> = {},
  mazzo: CartaRipasso[] = senzaMazzo,
  materiaDi: (id: string) => Materia | undefined = nessunaMateria,
  profilo: ProfiloEsame = PROFILO_VUOTO
) {
  return diagnosi(MATERIE, stelle, perMateria, mazzo, materiaDi, profilo);
}

const di = (voci: DiagnosiMateria[], m: Materia) => voci.find((v) => v.materia === m)!;

describe('diagnosi', () => {
  it('parte con tutte le materie non iniziate', () => {
    const voci = esegui();
    expect(voci).toHaveLength(MATERIE.length);
    expect(voci.every((v) => v.stato === 'non-iniziata')).toBe(true);
    expect(voci.every((v) => v.precisione === null)).toBe(true);
  });

  it('conta la copertura sulle lezioni superate', () => {
    const voci = esegui(conLezioni('Diritto civile', 8));
    const civile = di(voci, 'Diritto civile');
    expect(civile.lezioniFatte).toBe(8);
    expect(civile.copertura).toBeCloseTo(8 / civile.lezioniTotali);
    expect(di(voci, 'Diritto penale').lezioniFatte).toBe(0);
  });

  /**
   * È la regola che tiene onesta tutta la schermata. Senza, il primo
   * consiglio sarebbe sempre «studia quello che non hai ancora aperto»:
   * vero per definizione, inutile per chiunque.
   */
  it('non chiama debole una materia mai affrontata', () => {
    const voci = esegui();
    expect(voci.every((v) => v.stato !== 'da-rinforzare')).toBe(true);
    expect(materiaPiuDebole(voci)).toBeNull();
  });

  it('tace sulla precisione finché le risposte non bastano', () => {
    const voci = esegui(conLezioni('Diritto civile', 2), {
      'Diritto civile': { corrette: 2, errate: RISPOSTE_MINIME - 3 },
    });
    const civile = di(voci, 'Diritto civile');
    expect(civile.precisione).toBeNull();
    expect(civile.stato).toBe('pochi-dati');
    expect(risposteMancanti(civile)).toBe(1);
  });

  it('dichiara la precisione appena le risposte bastano', () => {
    const voci = esegui(conLezioni('Diritto civile', 2), {
      'Diritto civile': { corrette: RISPOSTE_MINIME / 2, errate: RISPOSTE_MINIME / 2 },
    });
    const civile = di(voci, 'Diritto civile');
    expect(civile.precisione).toBeCloseTo(0.5);
    expect(civile.stato).toBe('da-rinforzare');
    expect(risposteMancanti(civile)).toBe(0);
  });

  it('separa «in corso» da «solida» in base al programma svolto', () => {
    const buona = { corrette: 95, errate: 5 };
    const parziale = esegui(conLezioni('Diritto civile', 3), { 'Diritto civile': buona });
    expect(di(parziale, 'Diritto civile').stato).toBe('in-corso');

    const tutte = lezioniInOrdine('Diritto civile').length;
    const completa = esegui(conLezioni('Diritto civile', tutte), { 'Diritto civile': buona });
    expect(di(completa, 'Diritto civile').stato).toBe('solida');
  });

  it('attribuisce gli errori aperti alla materia della domanda', () => {
    const mazzo: CartaRipasso[] = [
      { id: 'civ-1', successi: 0, dovutaIl: '2026-01-01' },
      { id: 'civ-2', successi: 1, dovutaIl: '2026-01-05' },
      { id: 'pen-1', successi: 0, dovutaIl: '2026-01-02' },
      { id: 'sconosciuta', successi: 0, dovutaIl: '2026-01-02' },
    ];
    const materiaDi = (id: string): Materia | undefined =>
      id.startsWith('civ') ? 'Diritto civile' : id.startsWith('pen') ? 'Diritto penale' : undefined;

    const voci = esegui({}, {}, mazzo, materiaDi);
    expect(di(voci, 'Diritto civile').erroriAperti).toBe(2);
    expect(di(voci, 'Diritto penale').erroriAperti).toBe(1);
    expect(di(voci, 'Procedura civile').erroriAperti).toBe(0);
  });

  it('riconosce le materie dichiarate, e deontologia sempre', () => {
    const voci = diagnosi(
      [...MATERIE, 'Deontologia forense'],
      {},
      {},
      senzaMazzo,
      nessunaMateria,
      { ...PROFILO_VUOTO, scritti: 'Diritto penale' }
    );
    expect(di(voci, 'Diritto penale').portata).toBe(true);
    expect(di(voci, 'Deontologia forense').portata).toBe(true);
    expect(di(voci, 'Diritto civile').portata).toBe(false);
  });
});

describe('perUrgenza', () => {
  it('mette per prima la materia più debole, e le non iniziate in fondo', () => {
    const voci = esegui(
      { ...conLezioni('Diritto civile', 3), ...conLezioni('Diritto penale', 3) },
      {
        'Diritto civile': { corrette: 60, errate: 40 },
        'Diritto penale': { corrette: 80, errate: 20 },
      }
    );
    const ordinate = perUrgenza(voci).map((v) => v.materia);
    expect(ordinate[0]).toBe('Diritto civile');
    expect(ordinate[1]).toBe('Diritto penale');
    expect(ordinate[2]).toBe('Procedura civile');
  });

  /**
   * A parità di stato viene prima ciò che il candidato porta davvero:
   * una materia della rosa che non ha scelto non deve scavalcare quella
   * dei suoi scritti.
   */
  it('a parità di stato antepone le materie dichiarate', () => {
    const deboli = {
      'Diritto civile': { corrette: 60, errate: 40 },
      'Diritto penale': { corrette: 50, errate: 50 },
    };
    const voci = diagnosi(
      MATERIE,
      { ...conLezioni('Diritto civile', 3), ...conLezioni('Diritto penale', 3) },
      deboli,
      senzaMazzo,
      nessunaMateria,
      { ...PROFILO_VUOTO, scritti: 'Diritto civile' }
    );
    // Penale è più debole, ma civile è la materia degli scritti.
    expect(perUrgenza(voci)[0].materia).toBe('Diritto civile');
  });

  /**
   * L'ordine inverso — tutte le dichiarate prima di qualunque altra —
   * sembra ragionevole e non lo è: spingerebbe sotto una materia mai
   * aperta una materia su cui si è lavorato e in cui si sbaglia.
   */
  it('non lascia che una materia dichiarata ma intatta scavalchi una debole', () => {
    const voci = diagnosi(
      MATERIE,
      conLezioni('Diritto penale', 3),
      { 'Diritto penale': { corrette: 50, errate: 50 } },
      senzaMazzo,
      nessunaMateria,
      // Civile è dichiarata, ma non è mai stata aperta.
      { ...PROFILO_VUOTO, scritti: 'Diritto civile' }
    );
    const ordinate = perUrgenza(voci);
    expect(ordinate[0].materia).toBe('Diritto penale');
    expect(ordinate[0].stato).toBe('da-rinforzare');
  });

  it('mette in fondo ciò che è finito e non chiede più niente', () => {
    const tutte = lezioniInOrdine('Procedura civile').length;
    const voci = diagnosi(
      MATERIE,
      { ...conLezioni('Procedura civile', tutte), ...conLezioni('Diritto civile', 2) },
      {
        'Procedura civile': { corrette: 190, errate: 10 },
        'Diritto civile': { corrette: 90, errate: 10 },
      },
      senzaMazzo,
      nessunaMateria,
      PROFILO_VUOTO
    );
    const ordinate = perUrgenza(voci).map((v) => v.materia);
    // Penale non è mai stata aperta: chiede comunque più lavoro di una
    // materia già conclusa bene.
    expect(ordinate.indexOf('Diritto penale')).toBeLessThan(
      ordinate.indexOf('Procedura civile')
    );
    expect(ordinate[ordinate.length - 1]).toBe('Procedura civile');
  });

  it('non altera l’elenco ricevuto', () => {
    const voci = esegui();
    const copia = [...voci];
    perUrgenza(voci);
    expect(voci).toEqual(copia);
  });
});

describe('materiaPiuDebole', () => {
  it('indica la materia sotto soglia con la precisione più bassa', () => {
    const voci = esegui(
      { ...conLezioni('Diritto civile', 3), ...conLezioni('Diritto penale', 3) },
      {
        'Diritto civile': { corrette: 70, errate: 30 },
        'Diritto penale': { corrette: 55, errate: 45 },
      }
    );
    expect(materiaPiuDebole(voci)?.materia).toBe('Diritto penale');
  });

  it('è nulla quando nessuna materia sta sotto soglia', () => {
    const voci = esegui(conLezioni('Diritto civile', 3), {
      'Diritto civile': { corrette: 95, errate: 5 },
    });
    expect(materiaPiuDebole(voci)).toBeNull();
  });

  it('usa una soglia che lascia margine sopra la sufficienza d’esame', () => {
    // Diciotto trentesimi è il sessanta per cento: la soglia deve stare
    // sopra, perché arrivare al minimo non è arrivare pronti.
    expect(SOGLIA_DEBOLE).toBeGreaterThan(0.6);
    expect(SOGLIA_DEBOLE).toBeLessThan(0.9);
  });
});
