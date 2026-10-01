/**
 * Le ricerche citate nell'introduzione.
 *
 * L'intro dice una cosa precisa — che mettersi alla prova fa ricordare
 * più che rileggere, e che il gioco aiuta ad apprendere — e la dice in
 * pochi secondi, quindi non c'è spazio per le sfumature. Le sfumature
 * stanno qui, insieme ai numeri, perché chi un giorno ritoccherà il testo
 * sappia che cosa si può affermare e che cosa no.
 *
 * Che cosa **non** si può affermare: nessuno di questi studi misura
 * l'esame da avvocato, né un'app. Misurano tecniche di studio. L'intro
 * presenta il metodo come «fondato sulla ricerca», mai come «garantito
 * dalla ricerca», e non promette percentuali di promossi.
 */

export interface Fonte {
  /** Numero della nota, come compare in apice nel testo. */
  nota: 1 | 2 | 3;
  /** Come si nomina a voce, per i lettori di schermo. */
  breve: string;
  /**
   * Come si cita a piè di pagina: autori, rivista abbreviata secondo
   * l'uso (ISO 4), anno. È la forma delle note di un articolo, e in una
   * riga sola ci sta anche sullo schermo più stretto.
   */
  citazione: string;
  rivista: string;
  anno: number;
  titolo: string;
  doi: string;
}

export const FONTI: readonly Fonte[] = [
  {
    nota: 1,
    breve: 'Roediger e Karpicke',
    citazione: 'Roediger & Karpicke, Psychol. Sci., 2006',
    rivista: 'Psychological Science',
    anno: 2006,
    titolo: 'Test-enhanced learning: Taking memory tests improves long-term retention',
    doi: '10.1111/j.1467-9280.2006.01693.x',
  },
  {
    nota: 2,
    breve: 'Dunlosky e colleghi',
    citazione: 'Dunlosky et al., Psychol. Sci. Public Interest, 2013',
    rivista: 'Psychological Science in the Public Interest',
    anno: 2013,
    titolo: 'Improving students’ learning with effective learning techniques',
    doi: '10.1177/1529100612453266',
  },
  {
    nota: 3,
    breve: 'Sailer e Homner',
    citazione: 'Sailer & Homner, Educ. Psychol. Rev., 2020',
    rivista: 'Educational Psychology Review',
    anno: 2020,
    titolo: 'The gamification of learning: A meta-analysis',
    doi: '10.1007/s10648-019-09498-w',
  },
] as const;

/** Le note in apice, per comporle nel testo. */
export const APICI = ['¹', '²', '³'] as const;

/**
 * Roediger e Karpicke (2006), esperimento 2.
 *
 * Studenti universitari studiano un brano in quattro sessioni da cinque
 * minuti. Un gruppo lo rilegge quattro volte; un altro lo legge una volta
 * e poi per tre volte prova a scrivere tutto ciò che ricorda. Stesso
 * tempo, stesso testo. Poi si misura la quota di idee del brano che
 * ciascuno sa ancora richiamare.
 *
 * Il dato interessante è l'incrocio. Cinque minuti dopo chi ha riletto
 * sembra più preparato; una settimana dopo il rapporto si è ribaltato.
 * È l'illusione di sapere che produce la rilettura, ed è il motivo per
 * cui Legul fa rispondere invece di far rileggere.
 *
 * I valori sono le percentuali pubblicate, arrotondate all'intero come
 * nell'articolo.
 */
export const ESPERIMENTO = {
  momenti: ['dopo 5 minuti', 'dopo 7 giorni'] as const,
  rileggere: [83, 40] as const,
  allaProva: [71, 61] as const,
} as const;

/**
 * Di quanto si ricorda di più, una settimana dopo, chi si è messo alla
 * prova: 61 contro 40, cioè il 52,5% in più.
 *
 * Arrotondato per difetto. Un numero che vende un metodo deve stare
 * dalla parte prudente: chi va a controllare deve trovarne uno più
 * grande, mai più piccolo.
 */
export function guadagnoDopoUnaSettimana(): number {
  const [, rileggere] = ESPERIMENTO.rileggere;
  const [, allaProva] = ESPERIMENTO.allaProva;
  return Math.floor((allaProva / rileggere - 1) * 100);
}

/**
 * Dunlosky et al. (2013) hanno valutato dieci tecniche di studio su
 * centinaia di esperimenti. Due sole hanno ottenuto il giudizio di
 * utilità alta: mettersi alla prova e distribuire lo studio nel tempo —
 * esattamente le due su cui sono costruiti quiz e ripasso. Rileggere e
 * sottolineare stanno fra quelle di utilità bassa.
 *
 * Sailer e Homner (2020), meta-analisi di studi controllati: la
 * gamification ha un effetto positivo significativo sull'apprendimento
 * cognitivo, g = 0,49, cioè un effetto medio-piccolo secondo le soglie
 * usuali. Non enorme, e l'intro non lo fa sembrare enorme: dice che il
 * gioco migliora l'apprendimento, non che lo moltiplica.
 */
export const EFFETTO_GAMIFICATION_G = 0.49;

/**
 * Il grafico detto a voce, per chi usa un lettore di schermo: tutti i
 * numeri, nello stesso ordine in cui si leggono sul grafico, e la fonte.
 * È la tabella che il grafico rappresenta.
 */
export function descrizioneGrafico(): string {
  const [m0, m1] = ESPERIMENTO.momenti;
  const fonte = FONTI[0];
  return (
    `Grafico: quanto si ricorda di un testo, a parità di tempo di studio. ` +
    `Rileggendolo: ${ESPERIMENTO.rileggere[0]} per cento ${m0}, ${ESPERIMENTO.rileggere[1]} per cento ${m1}. ` +
    `Mettendosi alla prova: ${ESPERIMENTO.allaProva[0]} per cento ${m0}, ${ESPERIMENTO.allaProva[1]} per cento ${m1}. ` +
    `Dopo una settimana si ricorda il ${guadagnoDopoUnaSettimana()} per cento in più. ` +
    `Fonte: ${fonte.breve}, ${fonte.rivista}, ${fonte.anno}.`
  );
}
