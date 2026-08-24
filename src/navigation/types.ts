import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Materia } from '../types';

export type RootStackParamList = {
  Tabs: undefined;
  /** Percorso a nodi (stile Duolingo) di una materia. */
  Percorso: { materia: Materia };
  /** Lezione da 10 domande con cuori e feedback immediato. */
  Lezione: { materia: Materia; lezioneId: string };
  /** Ripasso mirato delle domande sbagliate, senza cuori. */
  Ripasso: undefined;
  /** Schermata di esito a fine lezione (stelle, punti, badge). */
  EsitoLezione: {
    /** `Ripasso` quando l'esito non appartiene a una lezione del percorso. */
    materia: Materia | 'Ripasso';
    lezioneId: string;
    fallito: boolean;
    corrette: number;
    totale: number;
    stelle: number;
    punti: number;
    messaggio: string;
    nuoviBadge: string[];
  };
  /** Paywall Premium (unità 3 e 4). */
  Paywall: undefined;
  /** Accesso: Apple / Google / email (UI; backend in arrivo). */
  Login: undefined;
  TracciaDetail: { tracciaId: string };
  /**
   * Discussione degli utenti su un contenuto.
   *
   * `argomento` è una chiave libera (`traccia:<id>` oggi, `caso:<id>`
   * domani): il filo si aggancia a qualunque contenuto senza che il
   * database debba sapere che cosa sia.
   */
  Discussione: {
    argomento: string;
    /** Titolo del contenuto discusso; assente quando si arriva da un deep link. */
    titolo?: string;
    /** Apre la casella già in modalità «soluzione proposta». */
    genereIniziale?: 'commento' | 'soluzione';
  };
  /** Come funziona l'esame: prove, punteggi, che cosa è cambiato. */
  Esame: undefined;
  /** Nome pubblico e persone bloccate. */
  Comunita: undefined;
  /** Informativa sulla privacy o termini di servizio. */
  DocumentoLegale: { documento: 'privacy' | 'termini' };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;
