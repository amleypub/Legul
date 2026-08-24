# Legul — Preparazione all'Esame da Avvocato

App mobile per **Android e iOS** (React Native + Expo) per prepararsi all'esame di abilitazione alla professione forense, con studio **gamificato**: punti, livelli, streak giornaliera, badge e messaggi di incoraggiamento.

## Linguaggio visivo

Superfici bianche non del tutto opache posate su un fondale con velature
appena percepibili, separate dallo sfondo da un filo di bordo scuro a
bassissima opacità e da un'ombra ampia e morbida. Niente bordi duri.

- **Perché il bordo è scuro-trasparente e non grigio pieno**: il fondale
  cambia tinta da una zona all'altra, e un grigio fisso stacca mentre un
  nero al sette per cento prende il colore di ciò che ha sotto
- **Il fondale non è un colore piatto**: due velature più una macchia
  colorata, tutte a opacità bassissima. Una superficie traslucida sopra
  un fondo uniforme è indistinguibile da una superficie opaca
- **Il glow è un'ombra colorata**, non un bagliore: su fondo chiaro un
  alone luminoso non si vedrebbe. L'elemento tinge l'aria intorno a sé
- **Alla pressione gli elementi rimpiccioliscono**, non scendono: la
  traslazione verticale aveva senso quando sotto c'era uno spessore da
  schiacciare
- **Tipografia con crenatura stretta in scala**: il valore negativo
  cresce col corpo del testo, le etichette in maiuscoletto vanno invece
  nella direzione opposta
- Animazioni con **Reanimated** e **Moti** (l'equivalente React Native di
  Framer Motion), sfocature con **expo-blur**, icone **Lucide**

## Funzionalità

### Percorso quiz in stile Duolingo
- 6 materie del nucleo comune: Diritto civile, Diritto penale, Procedura civile, Procedura penale, Diritto amministrativo, Deontologia forense
- **Materie a scelta dell'orale**: Diritto costituzionale, Diritto commerciale, Diritto del lavoro. Il d.l. 100/2026 ne fa portare **una sola**, scelta fra costituzionale, commerciale, lavoro, internazionale, UE e tributario: la schermata Quiz le tiene in un blocco a parte per non far credere che vadano studiate tutte. Le tre coperte sono quelle statisticamente più scelte; le altre tre restano fuori finché non risultino richieste
- **Percorso a nodi** con 4 unità per materia (Fondamenti, Consolidamento, Avanzato, Eccellenza) e lezioni da 10 domande a sblocco progressivo
- **Cuori**: 4 tentativi per lezione; **stelle** (1-3) in base alla precisione, gradienti, animazioni a molla e feedback aptico
- Dopo ogni risposta viene mostrata la **spiegazione del perché**, con i riferimenti normativi (articoli di codice, leggi speciali, riforma Cartabia, ecc.)
- Anche le risposte errate valgono qualche punto: studiare conta sempre

### Modello freemium
- Le unità **1 e 2 sono gratuite**; le unità **3 e 4 richiedono Premium** (paywall con piani mensile/annuale di esempio)
- L'acquisto in-app non è ancora integrato: il pulsante del paywall attiva Premium in **modalità demo** (`attivaPremium()` in `src/gamification/GamificationContext.tsx`)

### Banca domande
- **4.244 domande** in `src/data/questions/` (un file per materia-livello), aggregate in `index.ts`
- **645 domande per ogni materia principale**, **245 per deontologia** e **248 per ciascuna materia a scelta**, distribuite sui 4 livelli:
  - Unità 1 · Fondamenti — 158 per materia (58 deontologia, 62 per ogni materia a scelta)
  - Unità 2 · Consolidamento — 162 per materia (62 deontologia, 62 per ogni materia a scelta)
  - Unità 3 · Avanzato — 163 per materia (63 deontologia, 62 per ogni materia a scelta)
  - Unità 4 · Eccellenza — 162 per materia (62 deontologia, 62 per ogni materia a scelta)
- Id univoci verificati, nessuna emoji, diritto vigente: riforme Cartabia, codice contratti d.lgs. 36/2023, l. cost. 1/2022 su artt. 9 e 41 Cost., Codice della crisi come modificato dal d.lgs. 136/2024, e le pronunce della Corte costituzionale che hanno riscritto il d.lgs. 23/2015 (nn. 194/2018, 150/2020, 59/2021, 125/2022, 22/2024, 128/2024)
- La posizione della risposta corretta è bilanciata **dentro ogni materia**, non solo sul totale: chi studia una materia sola non deve poter imparare la posizione invece della norma

### Come funziona l'esame
- Schermata dedicata alla riforma: **due prove scritte** e un **orale in cinque parti**, dalla sessione 2026-2027 (d.l. 100/2026, conv. l. 145/2026)
- Linea del tempo delle prove, tabella **prima / adesso**, punteggi e soglie, che cosa si può portare in aula
- Una sezione dice esplicitamente **che cosa non si sa ancora**: il decreto di indizione non è uscito, e i tempi del caso pratico che circolano nei corsi non stanno nella norma
- Ogni affermazione porta il riferimento normativo e la data di verifica; `esame.test.ts` impedisce che una riscrittura futura annunci date inesistenti o trasformi in norma le stime dei corsi

> Contenuti in `src/data/esame.ts`, sorgente unica della schermata. Raggiungibile dalla Home, dalla schermata Tracce e via `legul://esame`.

### Tracce degli esami degli anni passati
- Archivio consultabile per anno delle tracce delle prove scritte (pareri di civile e penale, atti giudiziari)
- Ogni traccia riporta sessione, tipologia, argomenti trattati e testo
- Leggere una traccia assegna punti e sblocca badge dedicati

> I testi presenti in `src/data/tracce.ts` sono sintesi a scopo di studio; i testi ufficiali integrali (pubblicati dal Ministero della Giustizia) possono essere incollati nel campo `testo` di ciascuna traccia.

### Svolgimenti proposti
- **Tutte e dieci** le tracce in archivio hanno uno svolgimento, a sezioni che si aprono una alla volta e partono tutte chiuse: aprirle senza aver almeno impostato la traccia toglie alla lettura quasi tutto il suo valore
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
- **Sei casi**, due per ciascuna delle tre materie fra cui la prova si sceglie, con le domande di approfondimento della commissione e le insidie proprie di ciascun caso
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
- **Livelli** che misurano quanto sei pronto per l'esame — da «Al via» a «Più che pronto» — e non che titolo hai: chi usa Legul è già laureato e in pratica, una scala di qualifiche lo retrocederebbe o gli regalerebbe il traguardo che deve ancora conquistare
- **Streak** di giorni di studio consecutivi
- **Badge** da sbloccare e **messaggi di incoraggiamento** ad ogni azione
- **Obiettivo giornaliero** in punti, con anello di avanzamento e striscia dei sette giorni
- **Ripasso degli errori**: ogni domanda sbagliata viene riproposta finché non la indovini, senza cuori e senza stelle
- **Promemoria giornaliero** con notifica locale, all'ora scelta: programmata dal telefono, non passa da alcun server
- Progressi salvati sul dispositivo (AsyncStorage)

### Accesso e sincronizzazione (Supabase)
- Accesso con **Apple**, **Google** o **email** (link magico, nessuna password)
- I progressi vengono **fusi** fra dispositivo e cloud, mai sovrascritti: per ogni contatore vince il valore più alto e le liste si uniscono, così un dispositivo rimasto indietro non cancella il lavoro fatto altrove
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
esecuzione: va riportato in `app.json` (`splash.backgroundColor` e
`android.adaptiveIcon.backgroundColor`).

> Dopo aver creato o modificato il file `.env`, avvia con `npx expo start --clear`:
> i valori vengono incollati nel codice in fase di trasformazione e Metro
> tiene in cache i file già trasformati.

### Verifica grafica senza dispositivo

`scripts/shoot.js` esporta l'app per il web e ne cattura le schermate con
Chromium, comprese quelle raggiungibili solo via deep link (esito lezione,
paywall, accesso):

```bash
npx expo export --platform web --output-dir web-build --clear
node scripts/shoot.js        # immagini in shots/
```

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
  simulatore/                    # Fasi, cronometro e punteggio del caso pratico
  discussione/                   # Commenti, soluzioni proposte, voti, moderazione
  data/materiali.ts              # Materiale per l'esame (codici, manuali…)
  fonts.ts                       # Nunito applicato a tutta l'app
  gamification/                  # Punti, livelli, streak, badge, incoraggiamenti
  gamification/sync.ts           # Fusione dei progressi fra dispositivo e cloud
  navigation/linking.ts          # Deep link (schema legul://)
  screens/                       # Home, Quiz, Percorso, Lezione, Tracce, Materiale, Profilo
  components/                    # Superfici in vetro, bottoni, icone, mascotte, coriandoli
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
  tipo di buco che non si distingue da una scelta di design

## Come aggiungere contenuti

- **Nuove domande di quiz**: aggiungi un oggetto a `quizQuestions` in `src/data/quizzes.ts` (domanda, 4 opzioni, indice della risposta corretta e spiegazione).
- **Nuove tracce**: aggiungi un oggetto a `tracce` in `src/data/tracce.ts`; gli anni e i raggruppamenti si aggiornano automaticamente. Il test pretende che ogni traccia abbia il proprio svolgimento: aggiungine uno in `src/data/svolgimenti/` e registralo in `index.ts`.
- **Nuovi casi pratici**: aggiungi un oggetto al file della materia in `src/data/casi/`. I pesi della scaletta devono sommare a cento e ogni caso deve toccare sia il sostanziale sia il processuale.
- **Nuovo materiale**: aggiungi un oggetto a `materiali` in `src/data/materiali.ts` con categoria, descrizione e (quando disponibile) ASIN.
