import { lezioniInOrdine } from './percorso';
import type { CartaRipasso } from '../gamification/ripasso';
import type { ProfiloEsame } from './scelte';
import type { Materia } from '../types';

/**
 * Dove sei debole.
 *
 * L'app sapeva dire quanto programma avevi svolto e con quanta
 * precisione in generale. Sono due numeri veri e due numeri inutili: la
 * precisione complessiva è la media che nasconde proprio ciò che serve
 * sapere, cioè che in procedura penale si sbaglia il doppio che in
 * civile. Chi ha una data e poche settimane non deve decidere *se*
 * studiare, deve decidere *che cosa* studiare per primo, e su quella
 * domanda l'app taceva.
 *
 * Tre misure, tutte esatte, nessuna stimata:
 *
 * - **Copertura** — lezioni superate sul totale della materia. Dice
 *   quanto hai visto.
 * - **Precisione** — risposte esatte sul totale date in quella materia.
 *   Dice quanto ci prendi. È misurata a partire dalle risposte contate
 *   una per una, non ricavata dalle stelle: le stelle sono fasce, e una
 *   fascia non distingue il novanta per cento dal cento.
 * - **Errori aperti** — carte di quella materia ancora nel mazzo del
 *   ripasso. Dice che cosa non ti è rimasto attaccato.
 *
 * La regola che tiene onesto tutto il resto: **una materia mai
 * affrontata non è una materia debole.** Confonderle produrrebbe una
 * classifica in cui il primo consiglio è sempre «studia quello che non
 * hai ancora aperto», che è vero per definizione e non serve a nessuno.
 */

/** Quante risposte servono in una materia prima di dichiararne la precisione. */
export const RISPOSTE_MINIME = 20;

/**
 * Sotto questa precisione la materia è da rinforzare.
 *
 * Il valore non è arbitrario: all'esame la sufficienza è 18 su 30, cioè
 * il sessanta per cento, e le lezioni assegnano la prima stella proprio
 * a quella soglia. Settantacinque lascia un margine sopra la sufficienza,
 * perché arrivare all'esame esattamente al minimo non è arrivarci pronti.
 */
export const SOGLIA_DEBOLE = 0.75;

export type StatoMateria =
  /** Nessuna lezione aperta: non è debole, è di là da venire. */
  | 'non-iniziata'
  /** Cominciata, ma le risposte non bastano per dire com'è andata. */
  | 'pochi-dati'
  /** Abbastanza risposte, e la precisione sta sotto la soglia. */
  | 'da-rinforzare'
  /** Precisione buona, programma non ancora finito. */
  | 'in-corso'
  /** Precisione buona e programma coperto. */
  | 'solida';

export interface DiagnosiMateria {
  materia: Materia;
  lezioniTotali: number;
  /** Lezioni superate con almeno una stella. */
  lezioniFatte: number;
  copertura: number;
  risposte: number;
  corrette: number;
  /** Esatte sul totale, oppure `null` sotto `RISPOSTE_MINIME`. */
  precisione: number | null;
  erroriAperti: number;
  /**
   * La materia rientra fra quelle che il candidato ha dichiarato di
   * portare. Deontologia è sempre portata: non si sceglie.
   */
  portata: boolean;
  stato: StatoMateria;
}

/** Deontologia comprende ordinamento e previdenza: non è mai facoltativa. */
const SEMPRE_PORTATA: Materia = 'Deontologia forense';

function statoDi(
  lezioniFatte: number,
  copertura: number,
  precisione: number | null
): StatoMateria {
  if (lezioniFatte === 0) return 'non-iniziata';
  if (precisione === null) return 'pochi-dati';
  if (precisione < SOGLIA_DEBOLE) return 'da-rinforzare';
  return copertura >= 1 ? 'solida' : 'in-corso';
}

/**
 * Costruisce la diagnosi di ogni materia.
 *
 * Riceve tutto dall'esterno invece di leggere lo stato: così si può
 * verificare con dati inventati, che è l'unico modo per controllare che
 * una materia mai aperta non finisca in cima ai consigli.
 */
export function diagnosi(
  materie: Materia[],
  stellePerLezione: Record<string, number>,
  perMateria: Record<string, { corrette: number; errate: number }>,
  mazzoRipasso: CartaRipasso[],
  materiaDiDomanda: (domandaId: string) => Materia | undefined,
  profilo: ProfiloEsame
): DiagnosiMateria[] {
  const erroriPerMateria = new Map<Materia, number>();
  for (const carta of mazzoRipasso) {
    const m = materiaDiDomanda(carta.id);
    if (m) erroriPerMateria.set(m, (erroriPerMateria.get(m) ?? 0) + 1);
  }

  const dichiarate = new Set<string>(
    ([profilo.scritti, profilo.procedura, profilo.materiaScelta] as (string | null)[]).filter(
      (v): v is string => Boolean(v)
    )
  );

  return materie.map((materia) => {
    const lezioni = lezioniInOrdine(materia);
    const lezioniFatte = lezioni.filter((l) => (stellePerLezione[l.id] ?? 0) >= 1).length;
    const conteggi = perMateria[materia] ?? { corrette: 0, errate: 0 };
    const risposte = conteggi.corrette + conteggi.errate;
    const precisione = risposte >= RISPOSTE_MINIME ? conteggi.corrette / risposte : null;
    const copertura = lezioni.length === 0 ? 0 : lezioniFatte / lezioni.length;

    return {
      materia,
      lezioniTotali: lezioni.length,
      lezioniFatte,
      copertura,
      risposte,
      corrette: conteggi.corrette,
      precisione,
      erroriAperti: erroriPerMateria.get(materia) ?? 0,
      portata: materia === SEMPRE_PORTATA || dichiarate.has(materia),
      stato: statoDi(lezioniFatte, copertura, precisione),
    };
  });
}

/**
 * Ordine in cui presentare le materie: quanto lavoro chiedono adesso.
 *
 * Prima ciò che è cominciato e va male, poi ciò che è cominciato e va
 * bene, poi ciò che è cominciato da troppo poco per dirlo, poi ciò che
 * non è mai stato aperto, e in fondo ciò che è finito e non chiede
 * niente.
 *
 * Le materie mai iniziate non stanno in cima — metterle lì
 * significherebbe consigliare a tutti, ogni giorno, di aprire qualcosa
 * di nuovo invece di chiudere ciò che è rimasto a metà — ma nemmeno in
 * fondo: una materia intera da fare chiede più lavoro di una già
 * conclusa bene.
 */
const PESO_STATO: Record<StatoMateria, number> = {
  'da-rinforzare': 0,
  'in-corso': 1,
  'pochi-dati': 2,
  'non-iniziata': 3,
  solida: 4,
};

export function perUrgenza(voci: DiagnosiMateria[]): DiagnosiMateria[] {
  return [...voci].sort((a, b) => {
    /*
      Lo stato viene prima di tutto, e la materia dichiarata è solo il
      criterio di parità.

      L'ordine inverso — tutte le dichiarate prima di qualunque altra —
      sembra ragionevole e non lo è: spingerebbe sotto quattro materie
      mai aperte una materia su cui si è lavorato e in cui si sbaglia.
      Chi apre questa schermata vuole sapere che cosa fare adesso, e la
      risposta è sempre la cosa cominciata che va peggio.
    */
    const s = PESO_STATO[a.stato] - PESO_STATO[b.stato];
    if (s !== 0) return s;
    if (a.portata !== b.portata) return a.portata ? -1 : 1;
    if (a.stato === 'da-rinforzare') return (a.precisione ?? 1) - (b.precisione ?? 1);
    if (a.stato === 'in-corso') return a.copertura - b.copertura;
    return 0;
  });
}

/**
 * La materia su cui conviene lavorare adesso, se ce n'è una.
 *
 * Restituisce `null` quando non c'è ancora abbastanza per dirlo: è la
 * risposta giusta al primo avvio, e molto meglio di un consiglio scelto
 * a caso fra nove materie identiche.
 */
export function materiaPiuDebole(voci: DiagnosiMateria[]): DiagnosiMateria | null {
  const deboli = voci.filter((v) => v.stato === 'da-rinforzare');
  if (deboli.length === 0) return null;
  return perUrgenza(deboli)[0];
}

/** Quante risposte mancano prima di poter dichiarare la precisione. */
export function risposteMancanti(voce: DiagnosiMateria): number {
  return Math.max(0, RISPOSTE_MINIME - voce.risposte);
}
