import { casi } from '../casi';
import { tracceConSvolgimento } from '../svolgimenti';
import {
  CASI_IN_PROVA,
  casiRiservati,
  casoAccessibile,
  SVOLGIMENTI_IN_PROVA,
  svolgimentiRiservati,
  svolgimentoAccessibile,
  unitaAccessibile,
} from '../accesso';

/**
 * Il confine fra gratuito e a pagamento è la decisione di prodotto più
 * facile da rompere per distrazione: basta rinominare una traccia perché
 * l'assaggio sparisca, o cancellarne una perché diventi inesistente. Da
 * qui non si passa senza accorgersene.
 */
describe('confine di Premium', () => {
  it('lascia gratuito tutto il percorso quiz', () => {
    expect(unitaAccessibile()).toBe(true);
  });

  it('punta a contenuti che esistono davvero', () => {
    const svolti = tracceConSvolgimento();
    for (const id of SVOLGIMENTI_IN_PROVA) expect(svolti).toContain(id);
    const idCasi = casi.map((c) => c.id);
    for (const id of CASI_IN_PROVA) expect(idCasi).toContain(id);
  });

  /**
   * L'assaggio deve mostrare entrambi i formati: chi vede solo atti si fa
   * un'idea sbagliata di quello che comprerebbe.
   */
  it('offre in prova sia un atto sia un parere', () => {
    expect(SVOLGIMENTI_IN_PROVA.some((id) => id.includes('atto'))).toBe(true);
    expect(SVOLGIMENTI_IN_PROVA.some((id) => id.includes('parere'))).toBe(true);
  });

  it('apre l’assaggio a chi non paga e tutto il resto a chi paga', () => {
    expect(svolgimentoAccessibile(SVOLGIMENTI_IN_PROVA[0], false)).toBe(true);
    expect(casoAccessibile(CASI_IN_PROVA[0], false)).toBe(true);

    const riservato = tracceConSvolgimento().find((id) => !SVOLGIMENTI_IN_PROVA.includes(id));
    expect(riservato).toBeDefined();
    expect(svolgimentoAccessibile(riservato!, false)).toBe(false);
    expect(svolgimentoAccessibile(riservato!, true)).toBe(true);

    const casoRiservato = casi.find((c) => !CASI_IN_PROVA.includes(c.id));
    expect(casoRiservato).toBeDefined();
    expect(casoAccessibile(casoRiservato!.id, false)).toBe(false);
    expect(casoAccessibile(casoRiservato!.id, true)).toBe(true);
  });

  /**
   * Se l'assaggio coprisse tutto non ci sarebbe niente da vendere, e la
   * copia del paywall prometterebbe contenuti inesistenti.
   */
  it('lascia qualcosa dietro il muro, e la copia lo sa contare', () => {
    expect(svolgimentiRiservati()).toBeGreaterThan(0);
    expect(casiRiservati()).toBeGreaterThan(0);
    expect(svolgimentiRiservati()).toBe(
      tracceConSvolgimento().length - SVOLGIMENTI_IN_PROVA.length
    );
    expect(casiRiservati()).toBe(casi.length - CASI_IN_PROVA.length);
  });
});
