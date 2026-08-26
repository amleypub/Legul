# Legul — Preparazione all'Esame da Avvocato

App mobile per **Android e iOS** (React Native + Expo) per prepararsi all'esame di abilitazione alla professione forense, con studio **gamificato**: punti, livelli, streak giornaliera, badge e messaggi di incoraggiamento.

## Linguaggio visivo

Obsidiana, vetro satinato, un solo accento. Fondo scuro e freddo,
superfici che sono lastre di vetro appena schiarite sopra una sfocatura
vera, e il colore quasi assente: compare dove c'è una decisione da
prendere, non a decorare.

- **Il vetro ha bisogno di qualcosa da rifrangere**: le superfici sono
  bianco al quattro-sette per cento: se il fondale fosse un colore
  piatto sarebbero rettangoli grigi, quindi `Sfondo` costruisce velature
  e aloni. Oltre il dieci per cento la lastra diventa lattiginosa e il
  testo perde contrasto
- **Il bordo è luce, non contorno**: un anello in gradiente, quasi bianco
  dove la luce batte e quasi nullo dal lato opposto. È la differenza fra
  lo spigolo di una lastra e la cornice di un rettangolo, e si ottiene
  con un vero anello — il gradiente riempie la superficie e il contenuto
  ci sta sopra rientrato di un pixel
- **L'accento è una risorsa scarsa**: lo champagne sta sulle azioni
  primarie e sulla lezione da fare adesso. Nel percorso al primo
  tentativo marcava le lezioni *completate*: una colonna di moduli dorati
  con l'unica cosa da toccare persa in mezzo
- **`primary` è una superficie, `accent` è un accento**: tenerli distinti
  non è pedanteria. Quando i due ruoli coincidono, ogni scheda che usava
  il primario come fondo diventa una lastra dorata
- **Icone a tratto 1,5**, sensibilmente più sottili del 2 di Lucide:
  l'icona accompagna l'etichetta, non grida più forte di lei
- **Due caratteri**: *Inter* per l'interfaccia, *Source Serif 4* per i
  testi di legge — tracce, paragrafi degli svolgimenti. È la convenzione
  editoriale che separa la macchina dal documento che serve
- **Niente mascotte**: il gufo-giurista è stato rimosso. Un personaggio
  cartoon costruisce simpatia, e la simpatia è ciò che si vende a chi
  sceglie fra le app gratuite. Al suo posto un prisma rifratto in
  assonometria (`Monolite`): non raffigura nulla — niente bilance, niente
  martelletti — perché la figura letterale è il modo più rapido di
  sembrare uno studio legale di provincia
- **Niente serpentina**: il percorso era a zigzag con dischi colorati, la
  firma più riconoscibile del linguaggio precedente. Ora è una colonna
  allineata di moduli quadrati. La logica di sblocco, le stelle e i punti
  non sono stati toccati
- **Niente coriandoli**: la vittoria faceva piovere centodieci dischi in
  sette tinte primarie che ruotavano. La festa resta, con la stessa
  logica che decide quando mostrarla, ma è diventata un pulviscolo rado
  di scaglie champagne e titanio che sale e si spegne (`Polvere`)
- **Il colore non fa insieme da fondo e da contenuto**: dove l'accento
  riempie, il testo e l'icona sopra sono grafite; dove il testo è
  champagne, il fondo è un velo. Confonderli produce oro su oro, che non
  è brutto — è invisibile, e non si vede rileggendo il codice
- **La materia è un velo, non una fascia**: nelle testate di traccia,
  svolgimento e caso pratico la tinta vive nel bordo e in un velo al
  quattordici per cento. Un blocco pieno in testa fa sembrare una scheda
  promozionale una schermata che si legge come un documento
- **Il pieno saturo non segnala la scelta**: durate, opzioni del quiz e
  segmenti si distinguono alzando il vetro e incidendo il bordo. Un
  riempimento acceso su un controllo secondario sembra l'azione
  principale della schermata
- Animazioni con **Reanimated** e **Moti**, sfocature con **expo-blur**
  (sul web `backdrop-filter`), icone **Lucide**

## Funzionalità

### Domande d'apertura
- Al primo avvio, **quattro domande** su che cosa il candidato porta: la materia dei due scritti, la procedura all'orale, la materia della rosa e, se la conosce, la data della prova
- Dopo la riforma del 2026 quasi tutto è a scelta, e un piano di studio che ignora quelle scelte è il piano di nessuno
- **Si può saltare tutto, da subito**, e rifarlo dal Profilo: un'app che chiede una decisione irreversibile al primo avvio si fa chiudere
- **Non si chiedono permessi qui.** La proposta di attivare il promemoria arriva dopo la prima lezione completata, una volta sola: chiedere le notifiche prima che l'app abbia dimostrato di valere qualcosa è il modo più affidabile di farsele negare, e su iOS quel «no» si corregge solo dalle impostazioni di sistema

> Schermata in `src/screens/AperturaScreen.tsx`, dati in `src/data/scelte.ts`. Vive **prima** della navigazione: è l'unica schermata da cui non si può uscire lateralmente, e infilarla nello stack significherebbe poterla scavalcare con un deep link.

### Dove sei debole
- Una schermata che risponde a una domanda sola, quella che chi ha una data in calendario si fa ogni mattina: **che cosa studio adesso**
- Tre misure per materia, **tutte esatte, nessuna stimata**: copertura (lezioni superate sul totale), precisione (risposte esatte sul totale date in quella materia) ed errori ancora aperti nel mazzo del ripasso
- La precisione è **contata sulle risposte**, non ricavata dalle stelle: una stella è una fascia, e una fascia non distingue il novanta per cento dal cento
- **Sotto una ventina di risposte la precisione non viene dichiarata affatto.** Una percentuale calcolata su sei risposte è rumore, e presentarla come misura manderebbe qualcuno a rifare una materia che magari sa benissimo
- **Una materia mai affrontata non è una materia debole**: sta in fondo con la sua etichetta. Confonderle produrrebbe una classifica in cui il primo consiglio è sempre «studia quello che non hai ancora aperto» — vero per definizione, inutile per chiunque
- L'ordine è quello del lavoro che ciascuna chiede adesso; la materia dichiarata all'apertura è solo il criterio di parità, non il criterio principale
- In Home compare una scheda **solo quando c'è davvero una materia sotto soglia**: meglio tacere che dare un consiglio a caso

> Modello in `src/data/diagnosi.ts`, schermata in `src/screens/DiagnosiScreen.tsx`. Raggiungibile dalla Home, dal Profilo e via `legul://dove-sei-debole`.

### Percorso quiz
- 6 materie del nucleo comune: Diritto civile, Diritto penale, Procedura civile, Procedura penale, Diritto amministrativo, Deontologia forense
- **Materie a scelta dell'orale**: tutte e sei quelle fra cui il d.l. 100/2026 fa scegliere — costituzionale, commerciale, lavoro, internazionale, Unione europea, tributario — di cui se ne porta **una sola**. La schermata Quiz le tiene in un blocco a parte per non far credere che vadano studiate tutte e mette in cima quella dichiarata dall'utente. Il codice che **dichiara le materie non coperte** resta al suo posto anche se oggi non ne stampa nessuna: l'elenco della rosa lo fissa la legge, e se una riforma ne aggiungesse una l'app deve tornare a dirlo invece di sembrare completa
- **Percorso a nodi** con 4 unità per materia (Fondamenti, Consolidamento, Avanzato, Eccellenza) e lezioni da 10 domande a sblocco progressivo
- **Cuori**: 4 tentativi per lezione; **stelle** (1-3) in base alla precisione, animazioni a molla e feedback aptico
- Dopo ogni risposta viene mostrata la **spiegazione del perché**, con i riferimenti normativi (articoli di codice, leggi speciali, riforma Cartabia, ecc.)
- Anche le risposte errate valgono qualche punto: studiare conta sempre

### Modello freemium
- **Il percorso quiz è interamente gratuito**, tutte e quattro le unità di tutte le materie
- **Premium apre gli svolgimenti delle tracce e i casi pratici del simulatore**, con un assaggio gratuito: due svolgimenti (un atto e un parere) e **tre casi, uno per ciascuna materia**. La prova si porta in una materia sola: con un assaggio concentrato su una, due candidati su tre valuterebbero il simulatore guardando qualcosa che non sosterranno
- Il confine sta in un solo file — `src/data/accesso.ts` — ed è fissato per identificativo, non per posizione: aggiungere una traccia in cima non cambia in silenzio che cosa è gratis per chi ha già l'app installata
- Il muro è un *early return* dentro `SvolgimentoScreen` e `CasoPraticoScreen`, non solo un lucchetto nell'elenco: i deep link arrivano dritti alla schermata e devono trovarlo comunque
- L'acquisto in-app non è ancora integrato: il pulsante del paywall attiva Premium in **modalità demo** (`attivaPremium()` in `src/gamification/GamificationContext.tsx`)

> Perché il confine è stato ribaltato: prima si pagava per le unità 3 e 4 del percorso quiz — domande a risposta multipla, la merce più comune del settore — mentre restava gratuito tutto ciò che nessun altro ha. Si pagava per la commodity e si regalava il differenziale.

### Banca domande
- **5.068 domande** in `src/data/questions/` (un file per materia-livello), aggregate in `index.ts`
- **650 domande per ogni materia principale**, **330 per deontologia** e **248 per ciascuna materia a scelta**, distribuite sui 4 livelli (163/162/163/162 per le principali, 62 per livello per le materie a scelta)
- **Tutte e sei le materie della rosa dell'orale sono ora coperte.** Era l'unico buco che l'app dichiarava di avere, ed è chiuso: le tre che mancavano — Unione europea, internazionale, tributario — sono complete su tutti e quattro i livelli
  - UE: dalle istituzioni e dalle fonti fino ai controlimiti e alla doppia pregiudizialità (Corte cost. 269/2017, 20/2019, 63/2019; Taricco e M.A.S.; Melloni; Achmea e Komstroy; parere 2/13; condizionalità e C-156/21)
  - Internazionale: parte generale, responsabilità dello Stato e diritto del mare, poi un **livello avanzato interamente di diritto internazionale privato** — l. 218/1995 e i regolamenti che l'hanno svuotata dall'interno (Bruxelles I-bis, Roma I e II, Bruxelles II-ter, successioni), riconoscimento delle sentenze straniere dopo la riforma Cartabia. In Eccellenza il caso di controlimiti più studiato al mondo, che è italiano: CIG 3 febbraio 2012, Corte cost. 238/2014, il fondo dell'art. 43 d.l. 36/2022 e Corte cost. 159/2023
  - Tributario: principi costituzionali e Statuto riscritto dal d.lgs. 219/2023 (contraddittorio generalizzato, autotutela doverosa, regime dell'invalidità degli atti), metodi di accertamento, **un livello avanzato tutto di processo tributario** — Corti di giustizia tributaria, onere della prova dell'art. 7 co. 5-bis, prova testimoniale scritta, abrogazione del reclamo-mediazione — e in Eccellenza penale tributario, fiscalità internazionale e la transizione ai testi unici
- Dentro deontologia, due blocchi che nessun manuale dell'anno scorso copre:
  - **64 domande di previdenza forense**, la parte dell'ordinamento professionale che all'orale viene chiesta e che quasi nessuno ripassa. Evitano di proposito gli importi in euro dei contributi minimi, che il Comitato dei delegati ridetermina ogni anno: una domanda costruita su una cifra diventa sbagliata da sola
  - **16 domande sulle modifiche al codice deontologico in vigore dal 1° novembre 2025** (delibera CNF n. 636/2025): artt. 48, 50, 51, 56, 61, 62 e il nuovo 62-bis sulla negoziazione assistita
- Id univoci verificati, nessuna emoji, diritto vigente: riforme Cartabia, codice contratti d.lgs. 36/2023, l. cost. 1/2022 su artt. 9 e 41 Cost., Codice della crisi come modificato dal d.lgs. 136/2024, e le pronunce della Corte costituzionale che hanno riscritto il d.lgs. 23/2015 (nn. 194/2018, 150/2020, 59/2021, 125/2022, 22/2024, 128/2024)
- La posizione della risposta corretta è bilanciata **dentro ogni materia**, non solo sul totale: chi studia una materia sola non deve poter imparare la posizione invece della norma

### Come funziona l'esame
- Schermata dedicata alla riforma: **due prove scritte** e un **orale in cinque parti**, dalla sessione 2026-2027 (d.l. 100/2026, conv. l. 145/2026)
- Linea del tempo delle prove, tabella **prima / adesso**, punteggi e soglie, che cosa si può portare in aula
- Una sezione dice esplicitamente **che cosa non si sa ancora**: il decreto di indizione non è uscito, e i tempi del caso pratico che circolano nei corsi non stanno nella norma
- Ogni affermazione porta il riferimento normativo e la data di verifica; `esame.test.ts` impedisce che una riscrittura futura annunci date inesistenti o trasformi in norma le stime dei corsi

> Contenuti in `src/data/esame.ts`, sorgente unica della schermata. Raggiungibile dalla Home, dalla schermata Tracce e via `legul://esame`.

### Tracce degli esami degli anni passati
- Archivio consultabile per anno, **tredici tracce** che coprono tutte e tre le materie fra cui si sceglie: pareri e atti di civile, penale e amministrativo
- Fra queste un **esercizio dichiarato come tale**, non una prova assegnata: il d.l. 100/2026 rende sceglibile il *parere* anche in diritto amministrativo, ma una prova del genere non è mai esistita e in archivio non ce n'è nessuna. Chi porta quella combinazione non avrebbe nulla su cui allenarsi. L'esercizio è contrassegnato in elenco e dichiarato in apertura di scheda, e un test impedisce che si presenti come testo ufficiale o si collochi in una sessione mai svolta
- Il tipo di una traccia dichiara insieme la forma della prova e la materia. Prima esisteva un generico «Atto giudiziario» che non diceva su che cosa vertesse, e l'amministrativo non era esprimibile affatto: la materia c'era già nella prova d'atto degli anni passati, ma qui non aveva un nome
- Ogni traccia riporta sessione, tipologia, argomenti trattati e testo
- Leggere una traccia assegna punti e sblocca badge dedicati

> I testi presenti in `src/data/tracce.ts` sono sintesi a scopo di studio; i testi ufficiali integrali (pubblicati dal Ministero della Giustizia) possono essere incollati nel campo `testo` di ciascuna traccia.

### Svolgimenti proposti
- **Tutte e tredici** le tracce in archivio hanno uno svolgimento, a sezioni che si aprono una alla volta e partono tutte chiuse: aprirle senza aver almeno impostato la traccia toglie alla lettura quasi tutto il suo valore
- Si chiama **«svolgimento proposto» e mai «soluzione corretta»**: all'esame non esiste una risposta esatta depositata da qualche parte, esiste un elaborato che regge o non regge
- **Ogni blocco porta i riferimenti puntuali**, norma o pronuncia: un blocco senza aggancio è un'opinione, e il test lo rifiuta
- **Dove la giurisprudenza è divisa si mostra il contrasto** invece di scegliere il vincitore al posto del candidato: due tesi, i rispettivi argomenti e — la parte che serve davvero — che cosa cambia in concreto per il cliente
- Trappole ricorrenti e **griglia di autovalutazione** spuntabile, con il totale dichiarato per quello che è: un promemoria, non un criterio ufficiale
- `stato` è un cancello interno di pubblicazione, non un bollino: le bozze non escono da `svolgimentoDi()` e all'utente non compare nessuna medaglia di qualità

> Un file per traccia in `src/data/svolgimenti/`. Raggiungibili dalla scheda della traccia e via `legul://svolgimento/<id>`.

### Simulatore del caso pratico
- La prova introdotta dalla riforma è l'unica per cui **non esistono prove passate**: questi casi sono scritti da zero sull'unica indicazione che la norma dà, un caso che richieda insieme diritto sostanziale e processuale
- Il ciclo è quello vero: leggi e prepari con un cronometro, **esponi ad alta voce con la scaletta nascosta**, poi confronti punto per punto quello che hai davvero detto
- La misura che conta non è il totale ma la **copertura per versante**: con un totale unico lo squilibrio fra sostanziale e processuale sparisce dentro una media, separandoli resta visibile e il consiglio finale nomina il versante scoperto
- **Dodici casi**, quattro per ciascuna delle tre materie fra cui la prova si sceglie, con le domande di approfondimento della commissione e le insidie proprie di ciascun caso
- **I tempi non sono fissati dal decreto**: le durate sono una nostra impostazione di lavoro, modificabili, e la nota che lo dice sta accanto ai pulsanti che le scelgono
- Il cronometro ricalcola sempre da un istante di scadenza assoluto: un timer basato su tick mente appena l'app va in background

> Casi in `src/data/casi/`, logica in `src/simulatore/`. Raggiungibile dalla Home, dalla schermata dell'esame e via `legul://caso-pratico`.

### Discussione fra candidati
- In fondo a ogni traccia, due ingressi: **Commenti degli utenti** e **Suggerisci un'altra soluzione**
- Le soluzioni proposte stanno in cima, con un distintivo dorato; i commenti liberi sotto
- **Voti** in stile Reddit (su/giù, il totale cambia colore col proprio voto) e **una risposta per messaggio**: il terzo rientro su uno schermo di telefono è già illeggibile, quindi rispondere a una risposta resta nello stesso filo
- Si compare con un **nome accorciato** — «Andrea Moriggi» diventa «Andrea M.» — modificabile da *Profilo → Comunità*. Email e cognome per intero non compaiono mai
- **Segnalazione** e **blocco** su ogni messaggio, filtro sul linguaggio e tetto anti-spam lato server; oltre tre segnalazioni un messaggio si nasconde in automatico in attesa di controllo
- Nessuna soluzione è validata da noi, e l'app lo dice in testa a ogni discussione: sono contributi di altri candidati, da valutare con il proprio giudizio

> Le regole stanno tutte in funzioni Postgres, non nell'app: la chiave anonima è dentro il bundle e quindi in mano a chiunque. Schema e attivazione: **[`docs/supabase.md`](docs/supabase.md)**, script in `supabase/sql/discussione.sql`.

### Gamification
- **Punti** per ogni risposta, quiz completato e traccia letta (bonus per i quiz perfetti)
- **Livelli agganciati al programma svolto**, non ai punti — da «Al via» a «Più che pronto». Con i punti l'ultimo livello arrivava avendo visto poco più del cinque per cento delle domande, perché i punti si accumulano anche sbagliando e anche rifacendo la stessa lezione: misuravano il tempo passato, non la preparazione. I nomi non sono qualifiche: chi usa Legul è già laureato e in pratica
- **Streak** di giorni di studio consecutivi
- **Badge** da sbloccare e **messaggi di incoraggiamento** ad ogni azione
- **Obiettivo giornaliero scelto dall'utente** — leggero, costante, intensivo — descritto in lezioni al giorno e non in punti, perché nessuno sa quanto valga un punto. Una costante uguale per tutti sbagliava in entrambe le direzioni
- **Ripasso a ripetizione dilazionata**: ogni errore diventa una carta che torna dopo un giorno, poi tre, sette, sedici, trentacinque, e dopo l'ultimo intervallo esce dal mazzo; sbagliando riparte da zero. Senza cuori e senza stelle. Vedi `src/gamification/ripasso.ts`
- **Conto alla rovescia all'esame**, se la data è stata indicata: non conta soltanto i giorni ma dice quante lezioni al giorno servono per arrivare in fondo al programma in tempo
- **Promemoria giornaliero** con notifica locale, all'ora scelta: programmata dal telefono, non passa da alcun server
- Progressi salvati sul dispositivo (AsyncStorage)

### Accesso e sincronizzazione (Supabase)
- Accesso con **Apple**, **Google** o **email** (link magico, nessuna password)
- I progressi vengono **fusi** fra dispositivo e cloud, mai sovrascritti: per ogni contatore vince il valore più alto e le liste si uniscono, così un dispositivo rimasto indietro non cancella il lavoro fatto altrove
- Le **scelte d'esame** seguono l'account e non il dispositivo, con una regola diversa: lì vince il dispositivo su cui l'utente sta agendo adesso, e il valore remoto subentra solo dove in locale non c'è nulla
- Senza credenziali configurate l'app resta pienamente utilizzabile **come ospite**, con i progressi sul solo dispositivo

> Configurazione passo passo (progetto, tabella, policy RLS, provider): **[`docs/supabase.md`](docs/supabase.md)**

### Privacy e Termini
- Testi difensivi e conformi al GDPR, con **una sola sorgente** (`src/data/legale.ts`) da cui vengono sia le schermate nell'app sia le pagine pubbliche
- Raggiungibili dalla schermata di accesso e dal Profilo, e pubblicabili su GitHub Pages con `npm run legale`

> Come completarli e metterli online: **[`docs/legale.md`](docs/legale.md)**

### Materiale per l'esame (link affiliati Amazon)
- Sezione con i **codici** (Civile, Penale, Quattro Codici, Procedura civile, Procedura penale, Amministrativo, Deontologia), manuali di pareri/atti svolti e accessori utili
- Ogni scheda apre Amazon tramite **link affiliato**, con informativa di affiliazione a fondo pagina

#### Affiliazione Amazon
Il tag del Programma di Affiliazione è già impostato in `src/config/affiliate.ts`.

Per puntare a una scheda prodotto precisa, aggiungi l'`asin` alla voce in
`src/data/materiali.ts` (lo trovi nell'URL della scheda, es. `/dp/B0ABC12345`).
Senza ASIN il link apre una ricerca Amazon mirata, comunque tracciata dal tag.

## Prima di pubblicare

Tutto ciò che segue richiede credenziali o dati che non stanno nel codice.
L'app funziona già senza — come ospite, con i progressi sul solo
dispositivo — ma questi passaggi vanno chiusi prima di metterla sugli store.

- [ ] **Dati del titolare** in `src/data/legale.ts`: partita IVA, sede ed
      email restano a `[[ da completare ]]`. Il GDPR impone di indicare il
      titolare con esattezza: pubblicare l'informativa con quei campi vuoti
      equivale a non averla, e `legale.test.ts` fallisce apposta finché lo
      sono. L'email finisce nelle pagine pubbliche, quindi va scelta come
      indirizzo di contatto del servizio. Vedi [`docs/legale.md`](docs/legale.md)
- [ ] **Progetto Supabase**: creare la tabella dei progressi con le policy
      RLS, eseguire `supabase/sql/discussione.sql`, attivare i provider di
      accesso e pubblicare la funzione `elimina-account`. Vedi
      [`docs/supabase.md`](docs/supabase.md)
- [ ] **Pagine legali online**: `npm run legale` rigenera `docs/`, poi va
      attivato GitHub Pages sulla cartella `docs/` e vanno dichiarati gli
      indirizzi risultanti nelle schede degli store
- [ ] **Acquisti in-app**: il paywall attiva Premium in modalità demo. Vanno
      creati i prodotti su App Store Connect e Google Play Console e
      collegati ad `attivaPremium()`, con il ripristino acquisti che oggi
      mostra soltanto una spiegazione
- [ ] **Testi ufficiali delle tracce**: quelli in `src/data/tracce.ts` sono
      sintesi a scopo di studio. I testi integrali del Ministero della
      Giustizia possono sostituirli nel campo `testo`, impostando
      `testoUfficiale: true` e la `fonte`

## Avvio

```bash
npm install
npm start          # avvia Expo (scansiona il QR con l'app Expo Go)
npm run android    # avvia su emulatore/dispositivo Android
npm run ios        # avvia su simulatore iOS (macOS)
npm run typecheck  # verifica TypeScript
npm test           # esegue i test (Jest)
npm run legale     # rigenera le pagine pubbliche di privacy e termini
npm run icone      # rigenera icona, icona adattiva, avvio e favicon dal logo
```

### Sostituire il logo

Metti il nuovo file in `assets/logo-sorgente.png` (il marchio su fondo
pieno, anche con margine e ombra intorno) e lancia `npm run icone`. Lo
script ritaglia il logo, isola il marchio dal fondo e produce i quattro
formati con i requisiti di ciascuno store — iOS vuole un quadrato pieno
senza canale alfa, Android il marchio dentro il 66% centrale su uno
strato trasparente. Il colore di fondo rilevato viene stampato a fine
esecuzione: va riportato in `app.json`, ma **soltanto** in
`android.adaptiveIcon.backgroundColor`.

`splash.backgroundColor` resta obsidiana. L'app si apriva su una
schermata arancione piena e poi cadeva nel nero: il salto era il momento
più stridente rimasto dopo il cambio di linguaggio. Ora l'avviso mostra
il marchio sulla sua targa, contenuto al centro di un fondo che è già
quello dell'app.

> Il fondo di marca non si può togliere anche da lì. Il marchio ha una
> faccia in indaco scuro (`#1B0A38`): sul fondo arancione il contrasto è
> 5,27, su qualunque candidato scuro del tema scende fra 1,01 e 1,43,
> cioè la faccia sparisce e la L isometrica sembra rotta. Per portare
> l'obsidiana anche nell'icona adattiva Android bisognerebbe ritoccare
> quella faccia, che è una decisione sul marchio e non sull'interfaccia.

> Dopo aver creato o modificato il file `.env`, avvia con `npx expo start --clear`:
> i valori vengono incollati nel codice in fase di trasformazione e Metro
> tiene in cache i file già trasformati.

### Verifica grafica senza dispositivo

`scripts/anteprima.sh` esporta l'app per il web e ne cattura le schermate
con Chromium, comprese quelle raggiungibili solo via deep link (esito
lezione, paywall, accesso):

```bash
sh scripts/anteprima.sh      # immagini in shots/
```

I due comandi vanno lanciati insieme, non separatamente. Un
`expo export` avviato prima dell'ultima modifica compila il codice
vecchio, e le immagini che ne escono sembrano fresche perché sono state
appena riscritte: è già capitato di leggerle e concludere che una
correzione non avesse funzionato quando non era mai stata compilata. Lo
script annota l'istante di avvio della compilazione e `shoot.js` si
rifiuta di scattare se un sorgente è più recente, dicendo quale.

A fine esecuzione la cattura dichiara **quanti scatti ha aggiornato e
quanti ne ha saltati**: uno scatto saltato lascia sul disco quello del
giro precedente, e senza quella riga non c'è modo di accorgersene.

## Struttura del progetto

```
App.tsx                          # Navigazione (tab + stack) e provider
src/
  auth/                          # Client Supabase, sessione, accesso Apple/Google/email
  config/affiliate.ts            # Tag affiliato Amazon e costruzione link
  data/questions/                # Banca domande (un file per materia-livello)
  data/percorso.ts               # Costruzione di unità e lezioni dal percorso
  data/tracce.ts                 # Archivio tracce anni passati
  data/svolgimenti/              # Svolgimenti proposti (un file per traccia)
  data/casi/                     # Casi pratici per l'orale (un file per materia)
  data/esame.ts                  # Come funziona l'esame dopo la riforma
  data/scelte.ts                 # Che cosa il candidato porta all'esame, e il conto alla rovescia
  data/accesso.ts                # Il confine fra gratuito e Premium, in un posto solo
  data/diagnosi.ts               # Dove sei debole: copertura, precisione, errori aperti
  simulatore/                    # Fasi, cronometro e punteggio del caso pratico
  discussione/                   # Commenti, soluzioni proposte, voti, moderazione
  data/materiali.ts              # Materiale per l'esame (codici, manuali…)
  fonts.ts                       # Inter (interfaccia) e Source Serif 4 (testi di legge)
  gamification/                  # Punti, livelli, streak, badge, incoraggiamenti
  gamification/sync.ts           # Fusione dei progressi fra dispositivo e cloud
  gamification/ripasso.ts        # Ripetizione dilazionata: le carte e i loro intervalli
  gamification/obiettivo.ts      # Le tre andature dell'obiettivo giornaliero
  navigation/linking.ts          # Deep link (schema legul://)
  screens/                       # Home, Quiz, Percorso, Lezione, Tracce, Materiale, Profilo
  components/                    # Superfici in vetro, bottoni, icone, Monolite, coriandoli
  components/Icona.tsx           # Mappa dei nomi di icona sui glifi Lucide
  theme.ts                       # Colori, trasparenze, tipografia, ombre, movimento
supabase/sql/discussione.sql     # Schema e regole della discussione (RLS + funzioni)
supabase/functions/              # Edge Function (cancellazione account)
docs/supabase.md                 # Configurazione dell'accesso e della sincronizzazione
scripts/shoot.js                 # Cattura delle schermate per la verifica grafica
```

## Test

`npm test` copre le parti dove un errore silenzioso costerebbe caro:

- **`sync.test.ts`** — la fusione dei progressi, con la garanzia che un
  dispositivo rimasto indietro non possa cancellare quelli fatti altrove
- **`regole.test.ts`** — streak (con orologio fissato), badge, stelle, livelli
- **`domande.test.ts`** — invarianti della banca domande: niente id duplicati,
  quattro opzioni distinte, indice della risposta valido, spiegazione presente,
  risposta corretta distribuita fra le quattro posizioni
- **`percorso.test.ts`** — costruzione delle unità e regole di sblocco
- **`affiliate.test.ts`** — i link portano sempre il tag affiliato
- **`discussione/modello.test.ts`** — ordinamento dei messaggi, risposte
  rimaste senza genitore (che non devono sparire), lapidi dei messaggi
  eliminati, e la regola per cui il cognome non compare mai per esteso
- **`legale.test.ts`** — fra l'altro: che i Termini continuino a dire chi
  risponde dei contenuti scritti dagli utenti e che la privacy continui a
  spiegare che cosa diventa pubblico
- **`esame.test.ts`** — che la schermata sulla riforma non annunci date che
  il decreto di indizione non ha ancora fissato, e non trasformi in norma le
  stime che circolano nei corsi
- **`svolgimenti.test.ts`** — che l'archivio resti coperto per intero, che
  ogni blocco porti almeno due riferimenti puntuali in forma verificabile,
  che ogni svolgimento esponga almeno un contrasto con due tesi e la sua
  ricaduta pratica, e che nessuno prometta «soluzioni corrette»
- **`simulatore/modello.test.ts`** — che ogni caso copra entrambi i versanti
  senza che uno faccia la comparsa, e che il consiglio finale nomini davvero
  il versante rimasto scoperto invece di lodare il totale
- **`icone.test.ts`** — che ogni nome di icona usato nel codice esista nella
  mappa: un nome mancante non fa crashare nulla, sparisce e basta, ed è il
  tipo di buco che non si distingue da una scelta di design. Il controllo
  legge tutte le forme in cui un nome arriva, compresa quella passata come
  proprietà a un altro componente (`<Voce icona="volume-high" />`), che è
  quella da cui erano passate undici icone invisibili
- **`accesso.test.ts`** — l'integrità del confine Premium: che l'assaggio
  gratuito resti ancorato agli identificativi e che i conteggi mostrati nel
  paywall vengano dai dati e non da una costante scritta a mano
- **`ripasso.test.ts`** — gli intervalli della ripetizione dilazionata, il
  ritorno a zero dopo un errore, e la conversione del vecchio elenco piatto
  per chi aggiorna l'app senza perdere gli errori accumulati
- **`obiettivo.test.ts`** — le tre andature e il messaggio che traduce i punti
  mancanti in risposte esatte, perché nessuno sa quanto valga un punto
- **`diagnosi.test.ts`** — che una materia mai affrontata non venga mai
  chiamata debole, che la precisione resti taciuta finché le risposte non
  bastano, e che l'ordine non lasci una materia dichiarata ma intatta
  scavalcare una su cui si è lavorato e in cui si sbaglia
- **`previdenza.test.ts`** — che la previdenza forense resti coperta a tutti e
  quattro i livelli, che ogni spiegazione sia ancorata a una fonte, e che
  nessuna domanda sia costruita su un importo in euro: contributi minimi,
  tetto e trattamento minimo cambiano ogni anno, e una domanda tarata su una
  cifra diventa sbagliata da sola
- **`tributario.test.ts`** — la stessa disciplina applicata alla materia più
  mobile della rosa: nessuna domanda costruita su un importo in euro, ogni
  spiegazione ancorata a una fonte, il confine fra abuso del diritto ed
  evasione tenuto fermo, e i **testi unici sempre collocati nel tempo** invece
  che dati per vigenti. Sono in Gazzetta Ufficiale ma si applicano dal 1°
  gennaio 2027: citarli come diritto attuale è sbagliato quanto ignorarli

## Come aggiungere contenuti

- **Nuove domande di quiz**: aggiungi un oggetto a `quizQuestions` in `src/data/quizzes.ts` (domanda, 4 opzioni, indice della risposta corretta e spiegazione).
- **Nuove tracce**: aggiungi un oggetto a `tracce` in `src/data/tracce.ts`; gli anni e i raggruppamenti si aggiornano automaticamente. Il test pretende che ogni traccia abbia il proprio svolgimento: aggiungine uno in `src/data/svolgimenti/` e registralo in `index.ts`.
- **Nuovi casi pratici**: aggiungi un oggetto al file della materia in `src/data/casi/`. I pesi della scaletta devono sommare a cento e ogni caso deve toccare sia il sostanziale sia il processuale.
- **Esercizi invece di tracce d'esame**: se la traccia non è una prova realmente assegnata, va marcata `esercizio: true`. Il test rifiuta un esercizio che si dichiari testo ufficiale o che si collochi in una sessione mai svolta, e la schermata lo contrassegna in elenco e in apertura di scheda.
- **Nuovo materiale**: aggiungi un oggetto a `materiali` in `src/data/materiali.ts` con categoria, descrizione e (quando disponibile) ASIN.
