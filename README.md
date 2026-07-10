# Legul — Preparazione all'Esame da Avvocato

App mobile per **Android e iOS** (React Native + Expo) per prepararsi all'esame di abilitazione alla professione forense, con studio **gamificato**: punti, livelli, streak giornaliera, badge e messaggi di incoraggiamento.

## Funzionalità

### Percorso quiz in stile Duolingo
- 6 materie: Diritto civile, Diritto penale, Procedura civile, Procedura penale, Diritto amministrativo, Deontologia forense
- **Percorso a nodi** con 4 unità per materia (Fondamenti, Consolidamento, Avanzato, Eccellenza) e lezioni da 10 domande a sblocco progressivo
- **Cuori**: 4 tentativi per lezione; **stelle** (1-3) in base alla precisione; pulsanti "chunky" 3D, gradienti, animazioni a molla e feedback aptico
- Dopo ogni risposta viene mostrata la **spiegazione del perché**, con i riferimenti normativi (articoli di codice, leggi speciali, riforma Cartabia, ecc.)
- Anche le risposte errate valgono qualche punto: studiare conta sempre

### Modello freemium
- Le unità **1 e 2 sono gratuite**; le unità **3 e 4 richiedono Premium** (paywall con piani mensile/annuale di esempio)
- L'acquisto in-app non è ancora integrato: il pulsante del paywall attiva Premium in **modalità demo** (`attivaPremium()` in `src/gamification/GamificationContext.tsx`)

### Banca domande
- Obiettivo: **650 domande per materia** (250 per deontologia), suddivise nei 4 livelli
- Stato attuale: ~900 domande in `src/data/questions/` (una per file materia-livello); i completamenti sono pianificati nelle fasi 2 e 3

### Tracce degli esami degli anni passati
- Archivio consultabile per anno delle tracce delle prove scritte (pareri di civile e penale, atti giudiziari)
- Ogni traccia riporta sessione, tipologia, argomenti trattati e testo
- Leggere una traccia assegna punti e sblocca badge dedicati

> I testi presenti in `src/data/tracce.ts` sono sintesi a scopo di studio; i testi ufficiali integrali (pubblicati dal Ministero della Giustizia) possono essere incollati nel campo `testo` di ciascuna traccia.

### Gamification
- **Punti** per ogni risposta, quiz completato e traccia letta (bonus per i quiz perfetti)
- **Livelli** a tema forense: da «Studente di Giurisprudenza» a «Principe del Foro»
- **Streak** di giorni di studio consecutivi
- **Badge** da sbloccare e **messaggi di incoraggiamento** ad ogni azione
- Progressi salvati sul dispositivo (AsyncStorage)

### Materiale per l'esame (link affiliati Amazon)
- Sezione con i **codici** (Civile, Penale, Quattro Codici, Procedura civile, Procedura penale, Amministrativo, Deontologia), manuali di pareri/atti svolti e accessori utili
- Ogni scheda apre Amazon tramite **link affiliato**, con informativa di affiliazione a fondo pagina

#### Come configurare l'affiliazione Amazon
1. Apri `src/config/affiliate.ts` e sostituisci `INSERISCI-TAG-21` con il tuo tag del Programma di Affiliazione Amazon (es. `legul-21`).
2. (Opzionale) In `src/data/materiali.ts` aggiungi l'`asin` del prodotto specifico che vuoi promuovere (lo trovi nell'URL della scheda prodotto, es. `/dp/B0ABC12345`): il pulsante punterà direttamente alla scheda. Senza ASIN, il link apre una ricerca Amazon mirata, comunque tracciata col tag.

## Avvio

```bash
npm install
npm start          # avvia Expo (scansiona il QR con l'app Expo Go)
npm run android    # avvia su emulatore/dispositivo Android
npm run ios        # avvia su simulatore iOS (macOS)
npm run typecheck  # verifica TypeScript
```

## Struttura del progetto

```
App.tsx                          # Navigazione (tab + stack) e provider
src/
  config/affiliate.ts            # Tag affiliato Amazon e costruzione link
  data/quizzes.ts                # Domande dei quiz con spiegazioni
  data/tracce.ts                 # Archivio tracce anni passati
  data/materiali.ts              # Materiale per l'esame (codici, manuali…)
  gamification/                  # Punti, livelli, streak, badge, incoraggiamenti
  screens/                       # Home, Quiz, Tracce, Materiale
  components/                    # Componenti condivisi
  theme.ts                       # Colori e spaziature
```

## Come aggiungere contenuti

- **Nuove domande di quiz**: aggiungi un oggetto a `quizQuestions` in `src/data/quizzes.ts` (domanda, 4 opzioni, indice della risposta corretta e spiegazione).
- **Nuove tracce**: aggiungi un oggetto a `tracce` in `src/data/tracce.ts`; gli anni e i raggruppamenti si aggiornano automaticamente.
- **Nuovo materiale**: aggiungi un oggetto a `materiali` in `src/data/materiali.ts` con categoria, descrizione e (quando disponibile) ASIN.
