import type { LinkingOptions } from '@react-navigation/native';
import type { RootStackParamList } from './types';

/**
 * Deep link dell'app (schema `legul://` su mobile, path normali sul web).
 * Serve per aprire una schermata precisa da una notifica o da un link
 * condiviso, e permette di raggiungere ogni schermata direttamente in fase
 * di verifica grafica.
 */
export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['legul://', 'https://legul.app'],
  config: {
    screens: {
      Tabs: {
        screens: {
          Home: '',
          Quiz: 'quiz',
          Tracce: 'tracce',
          Materiale: 'materiale',
          Profilo: 'profilo',
        },
      },
      Percorso: 'percorso/:materia',
      Lezione: 'lezione/:materia/:lezioneId',
      Ripasso: 'ripasso',
      EsitoLezione: {
        path: 'esito/:materia/:lezioneId',
        // I parametri arrivano dall'URL come stringhe: qui tornano ai tipi giusti.
        parse: {
          fallito: (v: string) => v === 'true',
          corrette: Number,
          totale: Number,
          stelle: Number,
          punti: Number,
          nuoviBadge: (v: string) => (v ? v.split(',') : []),
        },
        stringify: {
          fallito: (v: boolean) => String(v),
          nuoviBadge: (v: string[]) => v.join(','),
        },
      },
      Paywall: 'premium',
      Login: 'accedi',
      TracciaDetail: 'traccia/:tracciaId',
      Discussione: 'discussione/:argomento',
      Esame: 'esame',
      Comunita: 'comunita',
      DocumentoLegale: 'legale/:documento',
    },
  },
};
