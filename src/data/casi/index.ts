/**
 * Registro dei casi pratici per l'orale.
 *
 * Vedi `tipi.ts` per il motivo per cui questi casi sono scritti da zero
 * invece che ripresi da prove passate: la prova è nuova e prove passate
 * non ne esistono.
 */

import { casiPrivato } from './privato';
import { casiPenale } from './penale';
import { casiAmministrativo } from './amministrativo';
import type { CasoPratico, MateriaCaso } from './tipi';

export type { CasoPratico, MateriaCaso, PuntoScaletta, Versante } from './tipi';
export {
  DURATA_ESPOSIZIONE_PREDEFINITA,
  DURATA_PREPARAZIONE_PREDEFINITA,
  DURATE_ESPOSIZIONE,
  DURATE_PREPARAZIONE,
  MATERIE_CASO,
} from './tipi';

export const casi: CasoPratico[] = [...casiPrivato, ...casiPenale, ...casiAmministrativo];

export function casoDaId(id: string): CasoPratico | undefined {
  return casi.find((c) => c.id === id);
}

export function casiPerMateria(materia: MateriaCaso): CasoPratico[] {
  return casi.filter((c) => c.materia === materia);
}
