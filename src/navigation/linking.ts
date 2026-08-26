import type { LinkingOptions } from '@react-navigation/native';
import type { RootStackParamList } from './types';

/**
 * Deep link dell'app (schema `legul://` su mobile, path normali sul web).
 * Serve per aprire una schermata precisa da una notifica o da un link
 * condiviso, e permette di raggiungere ogni schermata direttamente in fase
 * di verifica grafica.
 */
/**
 * Un intero non negativo, comunque sia fatta la stringa in arrivo.
 *
 * `Number` da solo risponde `NaN` a qualunque cosa non sia un numero, e
 * un indirizzo come `legul://esito/…?punti=abc` lo può scrivere
 * chiunque. Quel `NaN` finiva nel contatore che fa salire i punti, che
 * lo passa a un'animazione: sullo schermo restava «+NaN» e il conto non
 * partiva. Un deep link malformato deve poter fallire in modo noioso.
 */
function intero(v: string): number {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(0, Math.trunc(n)) : 0;
}

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
          corrette: intero,
          totale: intero,
          stelle: intero,
          punti: intero,
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
      Svolgimento: 'svolgimento/:tracciaId',
      Discussione: 'discussione/:argomento',
      Esame: 'esame',
      Diagnosi: 'dove-sei-debole',
      Simulatore: 'caso-pratico',
      CasoPratico: 'caso-pratico/:casoId',
      Comunita: 'comunita',
      DocumentoLegale: 'legale/:documento',
    },
  },
};
