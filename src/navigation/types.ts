import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Materia } from '../types';

export type RootStackParamList = {
  Tabs: undefined;
  /** Percorso a nodi (stile Duolingo) di una materia. */
  Percorso: { materia: Materia };
  /** Lezione da 10 domande con cuori e feedback immediato. */
  Lezione: { materia: Materia; lezioneId: string };
  /** Schermata di esito a fine lezione (stelle, punti, badge). */
  EsitoLezione: {
    materia: Materia;
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
  TracciaDetail: { tracciaId: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;
