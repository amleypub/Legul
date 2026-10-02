import { DURATA_INTRO, fasePrimoAvvio, type StatoPrimoAvvio } from '../primoAvvio';

const nuovo: StatoPrimoAvvio = {
  introVista: false,
  accessoProposto: false,
  aperturaFatta: false,
  conAccount: false,
  sessioneInVerifica: false,
};

describe('primo avvio', () => {
  it('va in ordine: intro, accesso, domande, app', () => {
    expect(fasePrimoAvvio(nuovo)).toBe('intro');
    expect(fasePrimoAvvio({ ...nuovo, introVista: true })).toBe('accesso');
    expect(fasePrimoAvvio({ ...nuovo, introVista: true, accessoProposto: true })).toBe('domande');
    expect(
      fasePrimoAvvio({ ...nuovo, introVista: true, accessoProposto: true, aperturaFatta: true })
    ).toBe('app');
  });

  it('non propone l’accesso a chi ha già un account', () => {
    expect(fasePrimoAvvio({ ...nuovo, introVista: true, conAccount: true })).toBe('domande');
  });

  /*
    Mentre la sessione salvata si legge dal dispositivo non si sa ancora
    se l'utente ha un account: mostrare l'accesso in quel momento
    vorrebbe dire farlo lampeggiare davanti a chi è già dentro.
  */
  it('aspetta di sapere se c’è una sessione prima di proporre l’accesso', () => {
    expect(fasePrimoAvvio({ ...nuovo, introVista: true, sessioneInVerifica: true })).toBe('attesa');
    // Chi l'accesso l'ha già superato non aspetta niente.
    expect(
      fasePrimoAvvio({
        ...nuovo,
        introVista: true,
        accessoProposto: true,
        aperturaFatta: true,
        sessioneInVerifica: true,
      })
    ).toBe('app');
  });

  it('non salta l’intro per via di un account', () => {
    expect(fasePrimoAvvio({ ...nuovo, conAccount: true })).toBe('intro');
  });

  it('tiene l’intro breve: tre pagine, meno di quindici secondi', () => {
    expect(DURATA_INTRO).toHaveLength(3);
    const totale = DURATA_INTRO.reduce((a, b) => a + b, 0);
    expect(totale).toBeLessThan(15000);
    // E nessuna pagina così breve da non lasciar finire la sua animazione.
    for (const d of DURATA_INTRO) expect(d).toBeGreaterThanOrEqual(3000);
  });
});
