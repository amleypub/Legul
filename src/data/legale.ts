/**
 * Testi legali dell'app: sorgente unica.
 *
 * Da qui vengono sia le schermate dentro Legul sia le pagine pubbliche su
 * GitHub Pages (`npm run legale`). Tenere due copie separate significa
 * ritrovarsi con un'informativa che dice una cosa nell'app e un'altra sul
 * web: una discrepanza che, davanti a un reclamo, non si spiega.
 */

/** Marcatore dei campi che devono essere compilati prima di pubblicare. */
export const DA_COMPLETARE = '[[ da completare ]]';

/**
 * Titolare del trattamento e fornitore del servizio.
 * Il GDPR impone di indicarlo con esattezza: pubblicare documenti con
 * questi campi ancora vuoti equivale a non averli.
 */
export const TITOLARE = {
  nome: 'Andrea Moriggi',
  forma: 'ditta individuale',
  partitaIva: DA_COMPLETARE,
  sede: DA_COMPLETARE,
  email: DA_COMPLETARE,
};

/** Elenco dei campi del titolare ancora da compilare. */
export function campiTitolareDaCompletare(): string[] {
  return Object.entries(TITOLARE)
    .filter(([, valore]) => valore === DA_COMPLETARE)
    .map(([campo]) => campo);
}

export interface SezioneLegale {
  titolo: string;
  paragrafi: string[];
}

export interface DocumentoLegale {
  id: 'privacy' | 'termini';
  titolo: string;
  /** Riga di apertura che riassume il documento. */
  occhiello: string;
  aggiornatoIl: string;
  sezioni: SezioneLegale[];
}

const AGGIORNAMENTO = '23 agosto 2026';

const intestazioneTitolare =
  `${TITOLARE.nome}, ${TITOLARE.forma}, partita IVA ${TITOLARE.partitaIva}, ` +
  `con sede in ${TITOLARE.sede} (di seguito «noi» o «il Titolare»).`;

// ————————————————————————————————————————————————
// Termini di servizio
// ————————————————————————————————————————————————

export const TERMINI: DocumentoLegale = {
  id: 'termini',
  titolo: 'Termini di servizio',
  occhiello:
    'Le regole d’uso di Legul. Leggile: alcune limitano la nostra responsabilità e definiscono che cosa l’app è e che cosa non è.',
  aggiornatoIl: AGGIORNAMENTO,
  sezioni: [
    {
      titolo: '1. Chi fornisce il servizio',
      paragrafi: [
        `Legul (l’«App» o il «Servizio») è fornita da ${intestazioneTitolare}`,
        `Per qualsiasi comunicazione relativa al Servizio puoi scrivere a ${TITOLARE.email}.`,
        'Usando l’App accetti integralmente questi Termini. Se non li accetti, non usare l’App.',
      ],
    },
    {
      titolo: '2. Che cos’è Legul e che cosa non è',
      paragrafi: [
        'Legul è uno strumento di studio e autoverifica per chi si prepara all’esame di abilitazione alla professione forense. Serve ad esercitarsi: quiz a risposta multipla con spiegazioni, tracce di esami degli anni passati, indicazioni su materiali di studio.',
        'Legul non è consulenza legale. I contenuti hanno finalità esclusivamente didattica e non costituiscono un parere professionale, né possono essere utilizzati come base per decisioni giuridiche, processuali o negoziali di alcun tipo. L’uso dell’App non instaura alcun rapporto professionale fra te e il Titolare.',
        'Legul non garantisce il superamento dell’esame. Nessuna parte del Servizio, dei materiali promozionali o dei messaggi di incoraggiamento presenti nell’App costituisce promessa, garanzia o previsione di un risultato d’esame. Il risultato dipende dalla tua preparazione complessiva e dalla valutazione insindacabile della commissione.',
        'Legul non è collegata al Ministero della Giustizia, ai Consigli dell’Ordine degli Avvocati né ad alcuna commissione d’esame, e non è da questi autorizzata, patrocinata o approvata.',
      ],
    },
    {
      titolo: '3. Esattezza e aggiornamento dei contenuti',
      paragrafi: [
        'Il diritto cambia. Norme, orientamenti giurisprudenziali e prassi possono essere modificati, abrogati o superati anche subito dopo la pubblicazione di un contenuto nell’App.',
        'Ci impegniamo a curare i contenuti, ma non garantiamo che siano completi, esatti, aggiornati o adatti a uno scopo particolare. Prima di fare affidamento su qualsiasi informazione presente in Legul sei tenuto a verificarla sulle fonti ufficiali e sui testi normativi vigenti.',
        'Le tracce degli esami degli anni passati sono riportate a scopo di studio. Quando il testo non è indicato come integrale e ufficiale, si tratta di una sintesi redatta da noi: fa fede unicamente il testo pubblicato dal Ministero della Giustizia.',
        'Se individui un errore, segnalacelo: correggerlo è nel nostro interesse quanto nel tuo.',
      ],
    },
    {
      titolo: '4. Chi può usare l’App',
      paragrafi: [
        'Il Servizio è destinato a persone maggiorenni. Registrandoti dichiari di avere almeno 18 anni e la capacità di agire.',
        'L’account è personale e non cedibile. Non puoi condividere le credenziali, rivendere l’accesso né consentirne l’uso a terzi. Sei responsabile di ogni attività svolta tramite il tuo account e devi informarci senza ritardo se sospetti un accesso non autorizzato.',
      ],
    },
    {
      titolo: '5. Proprietà dei contenuti e licenza d’uso',
      paragrafi: [
        'Tutti i contenuti dell’App — domande, spiegazioni, sintesi delle tracce, testi, grafica, illustrazioni, suoni, marchi, codice sorgente e struttura del percorso di studio — sono di titolarità del Titolare o di terzi che ne hanno concesso l’uso, e sono protetti dalla normativa su diritto d’autore e proprietà industriale.',
        'Ti concediamo una licenza personale, limitata, revocabile, non esclusiva e non trasferibile a usare l’App per il tuo studio individuale. Nessun altro diritto ti è concesso.',
        'In particolare non puoi, senza nostro consenso scritto: copiare, riprodurre, tradurre, distribuire, pubblicare, comunicare al pubblico o mettere in vendita i contenuti; estrarli in modo sistematico, anche automatizzato (scraping, crawling, download massivi); usarli per addestrare sistemi di intelligenza artificiale; crearne opere derivate; utilizzarli per finalità didattiche o commerciali proprie o di terzi.',
      ],
    },
    {
      titolo: '6. Comportamenti vietati',
      paragrafi: [
        'Non è consentito: aggirare, disattivare o alterare le limitazioni della versione gratuita o i controlli di accesso ai contenuti a pagamento; decompilare, disassemblare o sottoporre a reverse engineering l’App, salvo nei limiti inderogabili di legge; interferire con il funzionamento del Servizio o sovraccaricarne l’infrastruttura; accedere a dati o account altrui; usare l’App in violazione di legge o dei diritti di terzi.',
        'Possiamo adottare misure tecniche per prevenire questi comportamenti e per proteggere il Servizio.',
      ],
    },
    {
      titolo: '7. Legul Premium: abbonamenti e pagamenti',
      paragrafi: [
        'Alcune parti del percorso di studio sono accessibili solo con un abbonamento a pagamento. Le condizioni economiche in vigore ti sono mostrate nell’App prima dell’acquisto.',
        'Gli abbonamenti sono acquistati e gestiti tramite App Store (Apple) o Google Play secondo le condizioni di tali piattaforme. Il pagamento avviene presso lo store: non riceviamo né trattiamo i dati della tua carta o del tuo metodo di pagamento.',
        'Salvo diversa indicazione, gli abbonamenti si rinnovano automaticamente alla scadenza al prezzo allora in vigore, finché non li disdici. La disdetta si effettua dalle impostazioni del tuo account sullo store, almeno 24 ore prima della scadenza del periodo in corso. Eliminare l’account nell’App non disdice l’abbonamento.',
        'Diritto di recesso: in quanto consumatore hai normalmente quattordici giorni per recedere dall’acquisto di contenuti digitali. Chiedendo l’accesso immediato ai contenuti a pagamento acconsenti all’esecuzione immediata del contratto e riconosci di perdere il diritto di recesso ad esecuzione avvenuta, ai sensi dell’art. 59 del Codice del Consumo. Restano ferme le condizioni di rimborso previste dallo store presso cui hai acquistato.',
        'Possiamo modificare prezzi e composizione dei piani per il futuro, dandone avviso con ragionevole anticipo. Le modifiche non incidono sul periodo di abbonamento già pagato.',
      ],
    },
    {
      titolo: '8. Link di affiliazione Amazon',
      paragrafi: [
        'La sezione dedicata al materiale d’esame contiene link di affiliazione: in qualità di Affiliati Amazon riceviamo un guadagno dagli acquisti idonei effettuati tramite quei link, senza alcun costo aggiuntivo per te.',
        'I prodotti sono venduti da Amazon o da venditori terzi, secondo le loro condizioni. Non siamo parte di quel contratto e non rispondiamo della disponibilità, del prezzo, delle caratteristiche, della consegna o dell’idoneità dei prodotti, né dei contenuti dei siti di terzi raggiungibili dall’App.',
        'L’indicazione di un prodotto non costituisce garanzia che sia ammesso in sede d’esame: le regole sui testi consultabili sono stabilite dalla commissione e vanno verificate ogni anno.',
      ],
    },
    {
      titolo: '9. Disponibilità del servizio',
      paragrafi: [
        'Il Servizio è fornito «così com’è» e «come disponibile». Non garantiamo che sia privo di errori o interruzioni, né che funzioni senza difetti su ogni dispositivo o versione di sistema operativo.',
        'Possiamo modificare, sospendere o interrompere in tutto o in parte il Servizio, anche senza preavviso, per ragioni tecniche, di sicurezza, legali o organizzative. Se l’interruzione è definitiva e hai un abbonamento in corso, ti sarà rimborsata la quota corrispondente al periodo non goduto.',
        'I contenuti dell’App possono essere aggiunti, modificati o rimossi in qualsiasi momento.',
      ],
    },
    {
      titolo: '10. Copia dei tuoi dati e responsabilità del dispositivo',
      paragrafi: [
        'Se usi Legul senza account, i tuoi progressi sono salvati soltanto sul dispositivo: disinstallando l’App, cancellandone i dati o perdendo il dispositivo li perdi in modo irreversibile. Per conservarli ti consigliamo di accedere con un account.',
        'Pur adottando misure adeguate, non rispondiamo della perdita di progressi dovuta a malfunzionamenti del dispositivo, del sistema operativo, della rete o a operazioni compiute da te.',
      ],
    },
    {
      titolo: '11. Limitazione di responsabilità',
      paragrafi: [
        'Nei limiti massimi consentiti dalla legge applicabile, non rispondiamo dei danni indiretti, consequenziali, punitivi, né della perdita di occasioni, di risultati di studio, di esiti d’esame, di tempo o di dati, comunque derivanti dall’uso o dal mancato uso del Servizio.',
        'Nei limiti massimi consentiti dalla legge, la nostra responsabilità complessiva verso di te, per qualsiasi titolo, non potrà superare l’importo che ci hai effettivamente corrisposto per il Servizio nei dodici mesi precedenti il fatto che ha generato la richiesta; se nulla hai corrisposto, la responsabilità è esclusa nei limiti in cui la legge lo consente.',
        'Nulla in questi Termini esclude o limita la nostra responsabilità per dolo o colpa grave, per morte o lesioni personali, né i diritti inderogabili che la legge riconosce ai consumatori: le limitazioni sopra previste si applicano soltanto nella misura in cui la legge le ammette.',
      ],
    },
    {
      titolo: '12. Sospensione e chiusura dell’account',
      paragrafi: [
        'Possiamo sospendere o chiudere il tuo account, dandotene comunicazione, in caso di violazione di questi Termini, di uso fraudolento o di attività che pregiudichino la sicurezza del Servizio o i diritti di terzi. Nei casi più gravi la misura può essere immediata.',
        'Puoi chiudere il tuo account in qualsiasi momento dalla sezione Profilo dell’App: la cancellazione elimina definitivamente account e progressi, sul dispositivo e sui nostri server.',
      ],
    },
    {
      titolo: '13. Modifiche ai Termini',
      paragrafi: [
        'Possiamo aggiornare questi Termini, per esempio a seguito di modifiche del Servizio o della normativa. La versione aggiornata è pubblicata nell’App con la data di aggiornamento; se le modifiche sono rilevanti te ne daremo avviso.',
        'Continuare a usare l’App dopo l’entrata in vigore delle modifiche significa accettarle. Se non le accetti, puoi smettere di usare il Servizio ed eliminare il tuo account.',
      ],
    },
    {
      titolo: '14. Legge applicabile e controversie',
      paragrafi: [
        'Questi Termini sono regolati dalla legge italiana.',
        'Se sei un consumatore, resta ferma la competenza inderogabile del giudice del luogo in cui risiedi o hai eletto domicilio, e restano applicabili le disposizioni più favorevoli previste dalla legge del tuo Paese di residenza nell’Unione europea. Puoi inoltre ricorrere alla piattaforma europea di risoluzione delle controversie online.',
        'Se non sei un consumatore, per ogni controversia è competente in via esclusiva il foro del luogo in cui il Titolare ha la propria sede.',
      ],
    },
    {
      titolo: '15. Disposizioni finali',
      paragrafi: [
        'Se una clausola di questi Termini risultasse nulla o inefficace, le restanti conservano piena validità e la clausola viene sostituita da una disposizione valida che ne rispetti il più possibile la finalità.',
        'La nostra tolleranza rispetto a un inadempimento non costituisce rinuncia a far valere i nostri diritti in seguito.',
        'Non puoi cedere i diritti derivanti da questi Termini senza il nostro consenso scritto. Noi possiamo cederli in caso di trasferimento dell’azienda o del ramo d’azienda relativo al Servizio, senza pregiudizio per i tuoi diritti.',
      ],
    },
  ],
};

// ————————————————————————————————————————————————
// Informativa sulla privacy
// ————————————————————————————————————————————————

export const PRIVACY: DocumentoLegale = {
  id: 'privacy',
  titolo: 'Informativa sulla privacy',
  occhiello:
    'Quali dati tratta Legul, perché, per quanto tempo e come puoi farli cancellare. Redatta ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679.',
  aggiornatoIl: AGGIORNAMENTO,
  sezioni: [
    {
      titolo: 'In breve',
      paragrafi: [
        'Senza account, nessun dato lascia il tuo telefono: i progressi restano salvati soltanto lì.',
        'Con un account trattiamo il minimo necessario: un identificativo, l’email e i tuoi progressi di studio. Servono a farti ritrovare punti, streak e stelle su ogni dispositivo.',
        'Non facciamo pubblicità, non profiliamo, non vendiamo né cediamo i tuoi dati a terzi per finalità commerciali. Non usiamo strumenti di analisi del comportamento.',
        'Puoi cancellare account e dati in qualsiasi momento dall’App, in modo definitivo.',
      ],
    },
    {
      titolo: '1. Titolare del trattamento',
      paragrafi: [
        `Il titolare del trattamento è ${intestazioneTitolare}`,
        `Per esercitare i tuoi diritti o per qualsiasi domanda su questa informativa puoi scrivere a ${TITOLARE.email}.`,
        'Non è stato nominato un responsabile della protezione dei dati, non ricorrendone i presupposti di legge.',
      ],
    },
    {
      titolo: '2. Se usi Legul senza account',
      paragrafi: [
        'Puoi usare l’App come ospite. In questo caso punti, streak, stelle, badge e tracce lette sono conservati esclusivamente nella memoria del tuo dispositivo e non ci vengono trasmessi: non abbiamo modo di accedervi.',
        'Disinstallando l’App o cancellandone i dati, queste informazioni sono eliminate dal dispositivo e non sono recuperabili.',
      ],
    },
    {
      titolo: '3. Dati trattati quando accedi con un account',
      paragrafi: [
        'Dati identificativi e di contatto: un identificativo univoco assegnato al tuo account, l’indirizzo email e, se il provider lo comunica, il nome visualizzato. Se accedi con Apple o Google riceviamo solo quanto tu autorizzi in fase di accesso; se usi Sign in with Apple e scegli di nascondere l’email, riceviamo un indirizzo di inoltro anonimo generato da Apple.',
        'Dati di utilizzo del percorso di studio: punti totali e giornalieri, risposte corrette ed errate, lezioni completate e stelle ottenute, badge sbloccati, giorni di studio consecutivi e data dell’ultima attività, tracce contrassegnate come lette, stato dell’eventuale abbonamento.',
        'Dati tecnici strettamente necessari: i dati di autenticazione e di sessione gestiti dal nostro fornitore di infrastruttura, compresi gli indirizzi IP registrati nei log tecnici per finalità di sicurezza.',
        'Non trattiamo categorie particolari di dati (art. 9 GDPR). Non ti chiediamo dati che non siano necessari alle finalità indicate: in particolare non raccogliamo la tua posizione, la rubrica, le fotografie o i contenuti del dispositivo.',
      ],
    },
    {
      titolo: '4. Finalità e basi giuridiche',
      paragrafi: [
        'Creare e gestire il tuo account, conservare e sincronizzare i progressi fra i tuoi dispositivi, fornirti le funzioni dell’App. Base giuridica: esecuzione del contratto (art. 6.1.b GDPR).',
        'Gestire l’eventuale abbonamento e le funzioni riservate. Base giuridica: esecuzione del contratto (art. 6.1.b GDPR).',
        'Garantire la sicurezza del Servizio, prevenire abusi, usi fraudolenti e accessi non autorizzati. Base giuridica: nostro legittimo interesse a proteggere il Servizio e gli utenti (art. 6.1.f GDPR).',
        'Adempiere a obblighi di legge, anche contabili e fiscali, e dare seguito a richieste dell’autorità. Base giuridica: obbligo legale (art. 6.1.c GDPR).',
        'Il conferimento dei dati indicati è necessario per creare un account: senza, puoi comunque usare l’App come ospite.',
      ],
    },
    {
      titolo: '5. Chi tratta i dati per nostro conto',
      paragrafi: [
        'Ci avvaliamo di Supabase come fornitore di autenticazione e banca dati, nominato responsabile del trattamento ai sensi dell’art. 28 GDPR. Tratta i dati esclusivamente secondo le nostre istruzioni.',
        'Apple e Google trattano i dati relativi all’accesso con le rispettive identità e agli acquisti effettuati sui loro store in qualità di titolari autonomi, secondo le proprie informative, sulle quali non abbiamo controllo.',
        'I dati possono essere conosciuti da soggetti che ci prestano assistenza tecnica o professionale, vincolati alla riservatezza, e possono essere comunicati alle autorità quando previsto dalla legge.',
        'Non vendiamo, cediamo né mettiamo altrimenti a disposizione di terzi i tuoi dati per finalità commerciali o pubblicitarie.',
      ],
    },
    {
      titolo: '6. Dove sono conservati i dati',
      paragrafi: [
        'I dati sono conservati su infrastruttura situata nell’Unione europea.',
        'Qualora si rendesse necessario un trasferimento verso Paesi terzi, avverrà soltanto in presenza di una decisione di adeguatezza della Commissione europea o di garanzie adeguate ai sensi degli artt. 46 e seguenti del GDPR, quali le clausole contrattuali tipo. Puoi chiederci copia delle garanzie adottate.',
      ],
    },
    {
      titolo: '7. Per quanto tempo li conserviamo',
      paragrafi: [
        'Conserviamo i dati dell’account e i progressi finché il tuo account resta attivo. Con la cancellazione dell’account i dati sono eliminati definitivamente dai nostri sistemi; le copie di sicurezza sono sovrascritte secondo i normali cicli di rotazione.',
        'I log tecnici di sicurezza sono conservati per il tempo necessario alle finalità di sicurezza e comunque per un periodo limitato.',
        'I dati necessari ad adempiere obblighi contabili e fiscali sono conservati per i termini di legge, indipendentemente dalla cancellazione dell’account.',
      ],
    },
    {
      titolo: '8. I tuoi diritti',
      paragrafi: [
        'Puoi in qualsiasi momento chiedere: l’accesso ai tuoi dati e una copia degli stessi (art. 15); la rettifica dei dati inesatti (art. 16); la cancellazione (art. 17); la limitazione del trattamento (art. 18); la portabilità in formato leggibile da dispositivo automatico (art. 20); l’opposizione ai trattamenti fondati sul legittimo interesse (art. 21).',
        `Per esercitarli scrivi a ${TITOLARE.email}. Rispondiamo entro un mese dalla richiesta, prorogabile di due mesi in casi complessi, dandotene avviso.`,
        'Se ritieni che il trattamento violi la normativa, puoi proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it) o all’autorità di controllo dello Stato in cui risiedi, e ricorrere all’autorità giudiziaria.',
      ],
    },
    {
      titolo: '9. Come cancellare account e dati',
      paragrafi: [
        'Puoi eliminare il tuo account direttamente dall’App: apri Profilo e scegli «Elimina account». La cancellazione è definitiva e riguarda sia i dati sul nostro server sia i progressi salvati sul dispositivo.',
        `Se preferisci, puoi chiedere la cancellazione scrivendo a ${TITOLARE.email}.`,
        'Ricorda che eliminare l’account non disdice un eventuale abbonamento: la disdetta va effettuata dalle impostazioni dello store presso cui l’hai sottoscritto.',
      ],
    },
    {
      titolo: '10. Nessuna profilazione, nessuna pubblicità',
      paragrafi: [
        'Non effettuiamo processi decisionali automatizzati né attività di profilazione che producano effetti giuridici o incidano in modo analogamente significativo sulla tua persona.',
        'L’App non contiene reti pubblicitarie, strumenti di analisi del comportamento o tecnologie di tracciamento di terze parti. Non utilizziamo cookie di profilazione: le informazioni salvate sul dispositivo servono unicamente a far funzionare l’App e a conservare i tuoi progressi e le tue preferenze.',
        'La sezione dedicata al materiale d’esame contiene link di affiliazione ad Amazon. Aprendo un link esci dall’App: da quel momento si applica l’informativa di Amazon, che può registrare la provenienza della visita. Non riceviamo da Amazon dati che ti identifichino.',
      ],
    },
    {
      titolo: '11. Minori',
      paragrafi: [
        'Il Servizio è destinato a persone maggiorenni e non è rivolto ai minori. Non raccogliamo consapevolmente dati di minori.',
        `Se ritieni che un minore ci abbia fornito dati personali, scrivici a ${TITOLARE.email}: provvederemo a cancellarli senza ritardo.`,
      ],
    },
    {
      titolo: '12. Sicurezza',
      paragrafi: [
        'Adottiamo misure tecniche e organizzative adeguate a proteggere i dati da accessi non autorizzati, perdita e divulgazione: comunicazioni cifrate, autenticazione gestita da un fornitore specializzato e regole di accesso che consentono a ciascun utente di leggere e modificare esclusivamente i propri dati.',
        'Nessun sistema è però sicuro in modo assoluto. In caso di violazione dei dati personali che comporti un rischio elevato per i tuoi diritti, ti informeremo secondo quanto previsto dall’art. 34 GDPR.',
      ],
    },
    {
      titolo: '13. Modifiche a questa informativa',
      paragrafi: [
        'Possiamo aggiornare questa informativa per adeguarla a modifiche del Servizio o della normativa. La versione vigente è sempre consultabile nell’App, con la data di ultimo aggiornamento indicata in testa.',
        'Se le modifiche riguardano finalità o basi giuridiche del trattamento, te ne daremo avviso prima che diventino efficaci.',
      ],
    },
  ],
};

export const DOCUMENTI: Record<DocumentoLegale['id'], DocumentoLegale> = {
  privacy: PRIVACY,
  termini: TERMINI,
};
