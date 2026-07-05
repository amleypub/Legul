import type { MaterialeEsame } from '../types';

/**
 * Materiale per l'esame — collegato ad Amazon tramite link affiliato.
 *
 * Per collegare un prodotto specifico basta aggiungere il suo ASIN
 * (lo trovi nell'URL della scheda prodotto Amazon, es. /dp/B0ABC12345).
 * Finché l'ASIN non è inserito, il pulsante apre una ricerca Amazon
 * mirata, comunque tracciata con il tag affiliato.
 */
export const materiali: MaterialeEsame[] = [
  // ——— Codici ———
  {
    id: 'codice-civile',
    titolo: 'Codice Civile e leggi complementari',
    descrizione:
      'Il testo indispensabile per il parere di diritto civile e per la prova scritta. Scegli l’edizione aggiornata all’anno in corso.',
    categoria: 'Codici',
    searchQuery: 'codice civile e leggi complementari 2026 esame avvocato',
    emoji: '📕',
  },
  {
    id: 'codice-penale',
    titolo: 'Codice Penale e leggi complementari',
    descrizione:
      'Fondamentale per il parere di diritto penale: verifica che l’edizione sia ammessa in sede d’esame (solo testi non commentati).',
    categoria: 'Codici',
    searchQuery: 'codice penale e leggi complementari 2026 esame avvocato',
    emoji: '📗',
  },
  {
    id: 'quattro-codici',
    titolo: 'I Quattro Codici',
    descrizione:
      'Civile, procedura civile, penale e procedura penale in un unico volume: la scelta più pratica per lo studio quotidiano.',
    categoria: 'Codici',
    searchQuery: 'quattro codici 2026',
    emoji: '📚',
  },
  {
    id: 'codice-procedura-civile',
    titolo: 'Codice di Procedura Civile',
    descrizione:
      'Necessario per la redazione dell’atto giudiziario in materia civile e per lo studio del processo dopo la riforma Cartabia.',
    categoria: 'Codici',
    searchQuery: 'codice di procedura civile 2026',
    emoji: '📘',
  },
  {
    id: 'codice-procedura-penale',
    titolo: 'Codice di Procedura Penale',
    descrizione:
      'Indispensabile per l’atto giudiziario in materia penale: impugnazioni, misure cautelari, riti speciali.',
    categoria: 'Codici',
    searchQuery: 'codice di procedura penale 2026',
    emoji: '📙',
  },
  {
    id: 'codice-amministrativo',
    titolo: 'Codice Amministrativo',
    descrizione:
      'Per chi sceglie il diritto amministrativo all’orale: c.p.a., procedimento amministrativo e testi fondamentali.',
    categoria: 'Codici',
    searchQuery: 'codice amministrativo 2026',
    emoji: '📔',
  },
  {
    id: 'codice-deontologico',
    titolo: 'Ordinamento e deontologia forense',
    descrizione:
      'L’ordinamento forense e il codice deontologico: materia obbligatoria all’esame orale per tutti i candidati.',
    categoria: 'Codici',
    searchQuery: 'ordinamento e deontologia forense esame avvocato',
    emoji: '⚖️',
  },
  // ——— Manuali ———
  {
    id: 'manuale-pareri-civile',
    titolo: 'Pareri svolti di Diritto Civile',
    descrizione:
      'Raccolta di pareri motivati svolti, con schema di redazione e giurisprudenza aggiornata: perfetta per esercitarsi sulle tracce.',
    categoria: 'Manuali',
    searchQuery: 'pareri svolti diritto civile esame avvocato',
    emoji: '📝',
  },
  {
    id: 'manuale-pareri-penale',
    titolo: 'Pareri svolti di Diritto Penale',
    descrizione:
      'Pareri di penale svolti e commentati, con focus sugli orientamenti delle Sezioni Unite più ricorrenti nelle tracce.',
    categoria: 'Manuali',
    searchQuery: 'pareri svolti diritto penale esame avvocato',
    emoji: '🖋️',
  },
  {
    id: 'manuale-atti',
    titolo: 'Atti giudiziari svolti',
    descrizione:
      'Modelli e atti svolti di civile, penale e amministrativo: struttura, formule di rito e tecnica di redazione.',
    categoria: 'Manuali',
    searchQuery: 'atti giudiziari svolti esame avvocato',
    emoji: '📃',
  },
  {
    id: 'manuale-orale',
    titolo: 'Manuale per l’esame orale',
    descrizione:
      'Domande e risposte per l’orale rafforzato: le questioni più frequenti materia per materia.',
    categoria: 'Manuali',
    searchQuery: 'esame avvocato prova orale domande e risposte',
    emoji: '🎓',
  },
  // ——— Cancelleria e utilità ———
  {
    id: 'segnapagine',
    titolo: 'Segnapagine adesivi per codici',
    descrizione:
      'Per indicizzare gli articoli chiave dei codici e trovarli al volo durante la prova (consentiti in sede d’esame).',
    categoria: 'Cancelleria e utilità',
    searchQuery: 'segnapagine adesivi trasparenti codici',
    emoji: '🔖',
  },
  {
    id: 'evidenziatori',
    titolo: 'Evidenziatori pastello',
    descrizione:
      'Set di evidenziatori a punta a scalpello per sottolineare norme e massime senza rovinare le pagine sottili dei codici.',
    categoria: 'Cancelleria e utilità',
    searchQuery: 'evidenziatori pastello punta scalpello',
    emoji: '🖍️',
  },
];
