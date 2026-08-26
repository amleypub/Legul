import { ICONA_MATERIA } from '../data/percorso';
import { alpha, colors, materiaColors } from '../theme';

/*
  Il tema non è documentazione: è la regola che tiene insieme le
  schermate, e finora l'unica verifica era guardare gli scatti. Guardare
  ha lasciato passare, in ordine: un accento champagne usato come fondo
  *e* come colore del testo sopra quel fondo, quindi invisibile; una
  materia tinta di un ambra che dall'accento distava 22,9 di ΔE, cioè
  sotto la soglia entro cui due colori si distinguono con sicurezza; e
  diversi colori del tema chiaro rimasti dentro file che nessuno
  riapriva. Sono errori che un occhio distratto non vede e un numero sì.

  Una regola che qui NON c'è, e vale la pena spiegare perché.

  Verrebbe da pretendere che le dodici materie siano tutte distinguibili
  fra loro. Non si può, ed è stato misurato invece che supposto: alla
  saturazione e alla chiarezza che questo tema impone — tinte smorzate,
  mai accese — dodici caselle di tinta equidistanti cadono a 27° l'una
  dall'altra, che in ΔE vale circa 14. La soglia perché due tratti
  sottili si distinguano con sicurezza sta intorno a 25. Ridistribuire
  le tinte su una griglia regolare è stato provato: porta il minimo a
  14,3 e in cambio ruota ogni materia, cioè ridipinge l'app senza
  risolvere niente.

  La conclusione è che il colore non può essere l'identificatore, e
  infatti non lo è: ogni scheda porta il nome della materia per esteso e
  un'icona sua. Il colore aiuta a ritrovarsi, non a riconoscere — che è
  poi quello che le linee guida sull'accessibilità chiedono da sempre.
  Quello che si può pretendere davvero è che nessuna materia imiti
  l'accento e che il codice ridondante ci sia sul serio: è ciò che i
  test qui sotto verificano.
*/

/** Da `#RRGGBB` a componenti 0-255. */
function rgb(hex: string): [number, number, number] {
  const m = /^#([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) throw new Error(`colore non esadecimale a sei cifre: ${hex}`);
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Luminanza relativa secondo WCAG. */
function luminanza(hex: string): number {
  const canale = (v: number) => {
    const x = v / 255;
    return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  };
  const [r, g, b] = rgb(hex);
  return 0.2126 * canale(r) + 0.7152 * canale(g) + 0.0722 * canale(b);
}

/** Rapporto di contrasto WCAG fra due colori opachi. */
function contrasto(a: string, b: string): number {
  const la = luminanza(a);
  const lb = luminanza(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/** Coordinate CIELAB, per misurare quanto due colori si somiglino. */
function cielab(hex: string): [number, number, number] {
  const [r, g, b] = rgb(hex).map((v) => {
    const x = v / 255;
    return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  }) as [number, number, number];
  const X = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  const Y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const Z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  const f = (t: number) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  return [116 * f(Y) - 16, 500 * (f(X) - f(Y)), 200 * (f(Y) - f(Z))];
}

/** Differenza percettiva CIE76 fra due colori. */
function deltaE(a: string, b: string): number {
  const A = cielab(a);
  const B = cielab(b);
  return Math.hypot(A[0] - B[0], A[1] - B[1], A[2] - B[2]);
}

/** Sotto questa soglia due colori non si distinguono con sicurezza. */
const SOGLIA = 25;

const MATERIE = Object.keys(materiaColors).filter((m) => m !== 'Ripasso');

describe('tema', () => {
  it('tiene distinti il ruolo di superficie e quello di accento', () => {
    /*
      `primary` è la superficie grafite, `accent` lo champagne. Quando i
      due ruoli sono coincisi, ogni scheda che usava il primario come
      fondo è diventata una lastra dorata.
    */
    expect(contrasto(colors.primary, colors.accent)).toBeGreaterThan(3);
    expect(luminanza(colors.primary)).toBeLessThan(luminanza(colors.accent));
  });

  it('lascia leggibile il contenuto scuro previsto sopra l’accento', () => {
    // Sui riempimenti champagne il contenuto è grafite, mai oro: è
    // l'errore che ha reso invisibili la pastiglia del livello, la
    // spunta del piano annuale e il chip di Amazon.
    expect(contrasto(colors.accent, '#0A0C10')).toBeGreaterThan(7);
    expect(contrasto(colors.accent, colors.primary)).toBeGreaterThan(3);
  });

  it('lascia leggibile l’accento usato come testo sul fondo dell’app', () => {
    expect(contrasto(colors.accent, colors.background)).toBeGreaterThan(4.5);
  });

  it('tiene i testi sopra il fondo e sopra le schede entro le soglie WCAG', () => {
    for (const fondo of [colors.background, colors.card, colors.cardAlta]) {
      expect(contrasto(colors.text, fondo)).toBeGreaterThan(7);
      // I secondari possono scendere, ma non sotto il minimo per il
      // testo normale: sono etichette, non decorazione.
      expect(contrasto(colors.textMuted, fondo)).toBeGreaterThan(4.5);
    }
  });

  it('non dà a nessuna materia una tinta che imita l’accento', () => {
    /*
      «Ripasso» porta l'accento apposta, perché è l'unica cosa che l'app
      chiede attivamente di fare, e nell'elenco delle materie sta in
      mezzo alle altre. Se una materia gli somiglia quel segnale si
      spegne: è successo con l'ambra dell'amministrativo, a 22,9.
    */
    const vicine = MATERIE.map((m) => ({
      materia: m,
      scarto: Number(deltaE(materiaColors[m].start, colors.accent).toFixed(1)),
    })).filter((v) => v.scarto < SOGLIA);
    expect(vicine).toEqual([]);
  });

  it('usa per «Ripasso» proprio l’accento, non una sua imitazione', () => {
    expect(materiaColors.Ripasso.start.toUpperCase()).toBe(colors.accent.toUpperCase());
  });

  it('non affida a nessuna materia il colore come unico segno', () => {
    /*
      È la ragione per cui non si pretende che le tinte siano tutte
      distinguibili: non devono esserlo, perché non portano loro
      l'informazione. Se però una materia perdesse l'icona, o due ne
      condividessero una, il colore resterebbe l'unica differenza — e
      quello sì che non regge.
    */
    for (const materia of MATERIE) {
      expect(ICONA_MATERIA[materia as keyof typeof ICONA_MATERIA]).toBeTruthy();
    }
    const icone = Object.values(ICONA_MATERIA);
    expect(new Set(icone).size).toBe(icone.length);
  });

  it('dà una tinta a ogni materia che ha un’icona', () => {
    // Una materia senza tinta non esplode: prende `undefined` e la
    // scheda perde il bordo. Sparisce in silenzio, che è peggio.
    for (const materia of Object.keys(ICONA_MATERIA)) {
      expect(materiaColors[materia]).toBeDefined();
    }
  });

  it('tiene leggibile il bordo chiaro di ogni materia sul fondo scuro', () => {
    // `edge` non è decorazione: porta gli occhielli e i numeri dei passi.
    for (const materia of Object.keys(materiaColors)) {
      expect(contrasto(materiaColors[materia].edge, colors.background)).toBeGreaterThan(4.5);
    }
  });

  it('tiene i veli delle materie trasparenti, non pastello', () => {
    // Su fondo obsidiana un riempimento chiaro è una macchia.
    for (const materia of Object.keys(materiaColors)) {
      const soft = materiaColors[materia].soft;
      const m = /^rgba\([^)]*,\s*([0-9.]+)\)$/.exec(soft);
      if (!m) throw new Error(`${materia}: «soft» deve essere rgba trasparente, non ${soft}`);
      expect(Number(m[1])).toBeLessThanOrEqual(0.2);
    }
  });

  it('tiene le lastre di vetro sotto la soglia oltre la quale diventano lattiginose', () => {
    /*
      Oltre il dieci per cento di bianco la superficie smette di
      rifrangere e diventa un rettangolo grigio, e il testo sopra perde
      contrasto. Fanno eccezione i bordi, che sono luce e non fondo.
    */
    const superfici = ['vetro', 'vetroForte', 'vetroInterno', 'velo', 'veloForte'] as const;
    for (const nome of superfici) {
      const m = /^rgba\([^)]*,\s*([0-9.]+)\)$/.exec(alpha[nome]);
      if (!m) throw new Error(`alpha.${nome} deve essere rgba: ${alpha[nome]}`);
      expect(Number(m[1])).toBeLessThanOrEqual(0.1);
    }
  });
});
