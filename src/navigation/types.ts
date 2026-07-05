import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Materia } from '../types';

export type RootStackParamList = {
  Tabs: undefined;
  QuizGame: { materia: Materia };
  QuizResult: {
    materia: Materia;
    corrette: number;
    totale: number;
    puntiGuadagnati: number;
    messaggio: string;
    nuoviBadge: string[]; // id dei badge sbloccati durante il quiz
  };
  TracciaDetail: { tracciaId: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;
