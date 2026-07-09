import type { Traccia } from '../types';

/**
 * Archivio delle tracce delle prove scritte degli anni passati.
 *
 * NOTA: i testi qui riportati sono sintesi/ricostruzioni a scopo di studio
 * degli argomenti oggetto delle prove; i testi ufficiali integrali sono
 * pubblicati dal Ministero della Giustizia e possono essere incollati nel
 * campo `testo` per sostituire le sintesi.
 *
 * Per ogni traccia con testo ufficiale integrale impostare:
 *   testoUfficiale: true,
 *   fonte: 'https://www.giustizia.it/...',
 * La schermata di dettaglio mostra la nota "testo riassunto" solo quando
 * `testoUfficiale` non è true. I testi delle tracce sono atti ufficiali
 * dello Stato e come tali sono liberamente riproducibili (art. 5 l. 633/1941).
 */
export const tracce: Traccia[] = [
  {
    id: '2023-atto-civile',
    anno: 2023,
    sessione: 'Sessione 2023 (prova scritta – dicembre 2023)',
    tipo: 'Atto giudiziario',
    titolo: 'Atto in materia di diritto civile',
    argomenti: ['Responsabilità contrattuale', 'Inadempimento', 'Risarcimento del danno'],
    testo:
      'Il candidato, assunte le vesti del difensore, rediga l’atto giudiziario ritenuto più idoneo alla tutela del proprio assistito in una vicenda di inadempimento contrattuale.\n\n' +
      'Tizio ha concluso con la società Alfa un contratto avente ad oggetto la fornitura e posa in opera di serramenti per la propria abitazione, versando un cospicuo acconto. La società ha eseguito la prestazione con notevole ritardo e con vizi tali da rendere i beni inidonei all’uso. I solleciti bonari non hanno avuto esito.\n\n' +
      'Il candidato individui lo strumento processuale più opportuno, illustri le questioni sostanziali e processuali rilevanti (risoluzione per inadempimento, garanzia per vizi, risarcimento del danno, mezzi di prova) e rediga l’atto completo di conclusioni.',
  },
  {
    id: '2023-atto-penale',
    anno: 2023,
    sessione: 'Sessione 2023 (prova scritta – dicembre 2023)',
    tipo: 'Atto giudiziario',
    titolo: 'Atto in materia di diritto penale',
    argomenti: ['Impugnazioni', 'Elemento soggettivo', 'Circostanze del reato'],
    testo:
      'Il candidato, assunte le vesti del difensore dell’imputato, rediga l’atto di impugnazione ritenuto più idoneo.\n\n' +
      'Caio è stato condannato in primo grado per un delitto contro il patrimonio; la sentenza ha ritenuto sussistente l’elemento soggettivo sulla base di elementi indiziari e ha negato le circostanze attenuanti generiche, senza motivare specificamente sul punto.\n\n' +
      'Il candidato individui i motivi di impugnazione proponibili (vizio di motivazione, erronea qualificazione giuridica, trattamento sanzionatorio), illustri la disciplina delle impugnazioni applicabile dopo la riforma Cartabia, anche quanto ai requisiti di forma a pena di inammissibilità, e rediga l’atto completo di richieste.',
  },
  {
    id: '2022-atto-civile',
    anno: 2022,
    sessione: 'Sessione 2022 (prova scritta – dicembre 2022)',
    tipo: 'Atto giudiziario',
    titolo: 'Atto in materia di diritto civile',
    argomenti: ['Contratto preliminare', 'Esecuzione in forma specifica', 'Trascrizione'],
    testo:
      'Il candidato, assunte le vesti del difensore del promissario acquirente, rediga l’atto giudiziario più idoneo.\n\n' +
      'Sempronio ha stipulato un contratto preliminare di compravendita immobiliare versando una caparra confirmatoria. Alla data fissata per il rogito, il promittente venditore ha rifiutato di stipulare, adducendo pretestuosamente la sopravvenuta variazione del valore di mercato dell’immobile.\n\n' +
      'Il candidato esamini i rimedi esperibili (esecuzione in forma specifica ex art. 2932 c.c., risoluzione con ritenzione o richiesta del doppio della caparra ex art. 1385 c.c.), valuti l’opportunità della trascrizione della domanda giudiziale e rediga l’atto introduttivo completo.',
  },
  {
    id: '2022-atto-penale',
    anno: 2022,
    sessione: 'Sessione 2022 (prova scritta – dicembre 2022)',
    tipo: 'Atto giudiziario',
    titolo: 'Atto in materia di diritto penale',
    argomenti: ['Misure cautelari', 'Riesame', 'Esigenze cautelari'],
    testo:
      'Il candidato, assunte le vesti del difensore dell’indagato, rediga l’atto ritenuto più idoneo.\n\n' +
      'Nei confronti di Mevio è stata applicata la misura della custodia cautelare in carcere per un reato contro la pubblica amministrazione. L’ordinanza valorizza esclusivamente la gravità del fatto, senza confrontarsi con gli elementi difensivi e con il tempo trascorso dai fatti contestati.\n\n' +
      'Il candidato illustri i presupposti applicativi delle misure cautelari personali (artt. 273, 274 e 275 c.p.p.), i principi di proporzionalità e attualità delle esigenze cautelari e rediga la richiesta di riesame ex art. 309 c.p.p. completa di motivi.',
  },
  {
    id: '2019-parere-civile',
    anno: 2019,
    sessione: 'Sessione 2019 (prove scritte – dicembre 2019)',
    tipo: 'Parere di diritto civile',
    titolo: 'Parere motivato in materia di diritto civile',
    argomenti: ['Successioni', 'Collazione', 'Donazione indiretta'],
    testo:
      'Il candidato rediga un parere motivato in materia successoria.\n\n' +
      'Il de cuius, in vita, ha corrisposto a uno dei figli somme di denaro utilizzate per l’acquisto di un immobile, intestato direttamente al figlio. Alla morte del genitore, gli altri coeredi chiedono che il valore dell’immobile sia conferito in collazione, mentre il beneficiario sostiene che oggetto dell’eventuale collazione sarebbe solo il denaro donato.\n\n' +
      'Il candidato, premessi brevi cenni sulla donazione indiretta e sull’istituto della collazione (artt. 737 ss. c.c.), esamini l’oggetto della collazione nella donazione indiretta di immobile alla luce della giurisprudenza di legittimità e concluda con la soluzione più favorevole al proprio assistito.',
  },
  {
    id: '2019-parere-penale',
    anno: 2019,
    sessione: 'Sessione 2019 (prove scritte – dicembre 2019)',
    tipo: 'Parere di diritto penale',
    titolo: 'Parere motivato in materia di diritto penale',
    argomenti: ['Reati contro il patrimonio', 'Truffa', 'Circonvenzione di incapace'],
    testo:
      'Il candidato rediga un parere motivato.\n\n' +
      'Tizio, approfittando della condizione di fragilità psichica di un’anziana vicina di casa, si fa consegnare ripetutamente somme di denaro prospettando investimenti in realtà inesistenti.\n\n' +
      'Il candidato, premessi brevi cenni sugli elementi costitutivi della truffa (art. 640 c.p.) e della circonvenzione di persone incapaci (art. 643 c.p.), esamini i criteri distintivi tra le due fattispecie elaborati dalla giurisprudenza, con particolare riguardo allo stato di vulnerabilità della persona offesa e all’induzione, e individui la qualificazione giuridica più corretta del fatto, valutando i profili sanzionatori e le strategie difensive.',
  },
  {
    id: '2018-parere-civile',
    anno: 2018,
    sessione: 'Sessione 2018 (prove scritte – dicembre 2018)',
    tipo: 'Parere di diritto civile',
    titolo: 'Parere motivato in materia di diritto civile',
    argomenti: ['Responsabilità sanitaria', 'Consenso informato', 'Danno non patrimoniale'],
    testo:
      'Il candidato rediga un parere motivato in materia di responsabilità sanitaria.\n\n' +
      'Un paziente, sottoposto a intervento chirurgico tecnicamente ben eseguito, lamenta di non essere stato adeguatamente informato dei rischi dell’operazione, dai quali è derivato un pregiudizio alla salute; sostiene che, se informato, avrebbe rifiutato l’intervento.\n\n' +
      'Il candidato, premessi brevi cenni sulla natura della responsabilità della struttura e del medico dopo la legge Gelli-Bianco (l. 24/2017) e sul fondamento del consenso informato (art. 32 Cost.; l. 219/2017), esamini l’autonoma risarcibilità della lesione del diritto all’autodeterminazione, l’onere della prova e la liquidazione del danno, e concluda nell’interesse del proprio assistito.',
  },
  {
    id: '2018-parere-penale',
    anno: 2018,
    sessione: 'Sessione 2018 (prove scritte – dicembre 2018)',
    tipo: 'Parere di diritto penale',
    titolo: 'Parere motivato in materia di diritto penale',
    argomenti: ['Concorso di persone', 'Desistenza', 'Recesso attivo'],
    testo:
      'Il candidato rediga un parere motivato.\n\n' +
      'Due soggetti pianificano un furto in abitazione; giunti sul posto, uno dei due si allontana prima dell’inizio dell’esecuzione, tentando anche di dissuadere il complice, che porta invece a termine la sottrazione.\n\n' +
      'Il candidato, premessi brevi cenni sul concorso di persone nel reato (art. 110 c.p.) e sulla disciplina della desistenza volontaria e del recesso attivo (art. 56, commi 3 e 4, c.p.), esamini i presupposti perché la desistenza operi in favore del concorrente, alla luce della giurisprudenza sulla necessità di neutralizzare il contributo già prestato, e individui la soluzione più favorevole all’assistito.',
  },
  {
    id: '2017-parere-civile',
    anno: 2017,
    sessione: 'Sessione 2017 (prove scritte – dicembre 2017)',
    tipo: 'Parere di diritto civile',
    titolo: 'Parere motivato in materia di diritto civile',
    argomenti: ['Garanzia per vizi', 'Compravendita', 'Prescrizione e decadenza'],
    testo:
      'Il candidato rediga un parere motivato in materia di compravendita.\n\n' +
      'L’acquirente di un bene scopre, a distanza di tempo dalla consegna, vizi che ne diminuiscono in modo apprezzabile il valore. Il venditore eccepisce la decadenza dalla garanzia per tardiva denuncia e la prescrizione dell’azione.\n\n' +
      'Il candidato, premessi brevi cenni sulla garanzia per i vizi della cosa venduta (artt. 1490 ss. c.c.), esamini i termini di decadenza e prescrizione ex art. 1495 c.c., la distinzione tra vizi, mancanza di qualità e aliud pro alio — con le diverse conseguenze in punto di rimedi esperibili — e concluda con la strategia più utile per l’assistito.',
  },
  {
    id: '2017-atto',
    anno: 2017,
    sessione: 'Sessione 2017 (prove scritte – dicembre 2017)',
    tipo: 'Atto giudiziario',
    titolo: 'Atto giudiziario su quesito in materia di diritto civile',
    argomenti: ['Opposizione a decreto ingiuntivo', 'Prova scritta', 'Eccezioni'],
    testo:
      'Il candidato, assunte le vesti del difensore dell’ingiunto, rediga l’atto ritenuto più idoneo.\n\n' +
      'Una società ha ottenuto decreto ingiuntivo per il pagamento di fatture relative a merce che l’ingiunto assume mai consegnata e comunque affetta da vizi tempestivamente denunciati.\n\n' +
      'Il candidato rediga l’atto di citazione in opposizione a decreto ingiuntivo (artt. 645 ss. c.p.c.), illustrando il riparto dell’onere probatorio nel giudizio di opposizione, le eccezioni proponibili e l’eventuale istanza di sospensione della provvisoria esecutorietà ex art. 649 c.p.c.',
  },
];

/** Anni disponibili in archivio, in ordine decrescente. */
export const anniDisponibili: number[] = [...new Set(tracce.map((t) => t.anno))].sort(
  (a, b) => b - a
);

export function tracceByAnno(anno: number): Traccia[] {
  return tracce.filter((t) => t.anno === anno);
}
