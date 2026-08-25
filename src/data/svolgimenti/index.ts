/**
 * Registro degli svolgimenti proposti.
 *
 * Un file per traccia: gli svolgimenti sono documenti lunghi e si
 * rileggono uno alla volta, quindi tenerli separati è l'unico modo per
 * poterli correggere senza aprire un file da quattromila righe.
 *
 * Le regole editoriali che valgono per tutti stanno in `tipi.ts`.
 */

import { tracce } from '../tracce';
import { attoCivile2023 } from './2023-atto-civile';
import { attoPenale2023 } from './2023-atto-penale';
import { attoAmministrativo2023 } from './2023-atto-amministrativo';
import { attoCivile2022 } from './2022-atto-civile';
import { attoPenale2022 } from './2022-atto-penale';
import { attoAmministrativo2022 } from './2022-atto-amministrativo';
import { parereCivile2019 } from './2019-parere-civile';
import { parerePenale2019 } from './2019-parere-penale';
import { parereCivile2018 } from './2018-parere-civile';
import { parerePenale2018 } from './2018-parere-penale';
import { parereCivile2017 } from './2017-parere-civile';
import { atto2017 } from './2017-atto';
import type { Svolgimento } from './tipi';

export type {
  BloccoSvolgimento,
  Contrasto,
  Orientamento,
  Riferimento,
  StatoSvolgimento,
  Svolgimento,
  TipoRiferimento,
  VoceGriglia,
} from './tipi';
export { AGGIORNATO_AL } from './tipi';

export const svolgimenti: Svolgimento[] = [
  attoCivile2023,
  attoPenale2023,
  attoAmministrativo2023,
  attoCivile2022,
  attoPenale2022,
  attoAmministrativo2022,
  parereCivile2019,
  parerePenale2019,
  parereCivile2018,
  parerePenale2018,
  parereCivile2017,
  atto2017,
];

/**
 * Lo svolgimento pubblicato di una traccia, se esiste.
 *
 * Le bozze restano fuori: è qui che il cancello di pubblicazione opera,
 * in un solo punto, così che nessuna schermata possa aggirarlo per
 * distrazione.
 */
export function svolgimentoDi(tracciaId: string): Svolgimento | undefined {
  return svolgimenti.find((s) => s.tracciaId === tracciaId && s.stato === 'verificata');
}

/** Tracce che hanno uno svolgimento pubblicato. */
export function tracceConSvolgimento(): string[] {
  return svolgimenti.filter((s) => s.stato === 'verificata').map((s) => s.tracciaId);
}

/** Numero di tracce dell'archivio che hanno già uno svolgimento pubblicato. */
export function quanteConSvolgimento(): number {
  const pubblicate = new Set(tracceConSvolgimento());
  return tracce.filter((t) => pubblicate.has(t.id)).length;
}
