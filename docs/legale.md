# Privacy e Termini: come completarli e pubblicarli

I due documenti hanno **una sola sorgente**: `src/data/legale.ts`. Da lì
vengono sia le schermate dentro l'app sia le pagine pubbliche. Non
modificare gli HTML in `docs/`: vengono rigenerati e le modifiche a mano
andrebbero perse.

---

## 1. Completare i dati del titolare

In cima a `src/data/legale.ts` c'è il blocco `TITOLARE`. Tre campi sono
ancora segnaposto:

```ts
export const TITOLARE = {
  nome: 'Andrea Moriggi',
  forma: 'ditta individuale',
  partitaIva: DA_COMPLETARE,   // ← es. 'IT01234567890'
  sede: DA_COMPLETARE,         // ← es. 'Via Roma 1, 20100 Milano (MI)'
  email: DA_COMPLETARE,        // ← es. 'privacy@legul.app'
};
```

L'indirizzo email diventa pubblico e va presidiato: per le richieste sui
dati il GDPR concede **un mese** per rispondere.

> Finché restano segnaposto, `npm run legale` genera comunque le pagine ma
> termina con un errore, e i segnaposto sono visibili nel testo. Gli store
> rifiutano un'informativa in quello stato.

## 2. Rigenerare le pagine

```bash
npm run legale
```

Scrive `docs/index.html`, `docs/privacy.html`, `docs/termini.html`.
Va rieseguito dopo ogni modifica ai testi.

## 3. Pubblicare su GitHub Pages

Una volta sola, dal browser:

1. Apri il repository su GitHub → **Settings** → **Pages**.
2. Alla voce *Build and deployment*, **Source**: `Deploy from a branch`.
3. **Branch**: `main`, cartella **`/docs`**. Salva.

Dopo un paio di minuti i documenti sono online:

```
https://amleypub.github.io/Legul/privacy.html
https://amleypub.github.io/Legul/termini.html
```

## 4. Dichiarare gli indirizzi agli store

- **App Store Connect** → l'app → *Informazioni sulla privacy dell'app*:
  incolla l'URL della privacy. Nella scheda prodotto va indicato anche
  l'URL dei termini se offri abbonamenti.
- **Google Play Console** → *Contenuti dell'app* → *Norme sulla privacy*:
  stesso URL.

Entrambi gli store verificano che l'indirizzo risponda: deve essere
pubblico e raggiungibile senza accesso.

---

## Che cosa dicono i documenti

I **Termini** sono deliberatamente difensivi sui punti che contano per
un'app di preparazione a un esame di Stato:

- Legul è uno strumento di studio, **non consulenza legale**, e non
  instaura alcun rapporto professionale.
- **Nessuna promessa di superamento dell'esame**, in nessuna forma.
- Nessuna garanzia di esattezza e aggiornamento dei contenuti: il diritto
  cambia, e l'utente è tenuto a verificare sulle fonti ufficiali.
- Nessun collegamento con Ministero, Ordini o commissioni d'esame.
- Divieto di estrazione massiva dei contenuti, rivendita e uso per
  addestrare sistemi di intelligenza artificiale.
- Rinnovo automatico degli abbonamenti, disdetta dallo store, e perdita
  del diritto di recesso ad esecuzione avvenuta (art. 59 Cod. Consumo).
- Limitazione di responsabilità **entro i limiti consentiti dalla legge**:
  la riserva non è una formula di stile, senza di essa la clausola sarebbe
  nulla verso i consumatori e cadrebbe per intero.
- Foro: quello del consumatore, che è inderogabile. Imporre il proprio
  sarebbe una clausola vessatoria, quindi inefficace.

La **Privacy** rispecchia ciò che l'app fa davvero oggi: nessun
tracciamento, nessuna pubblicità, nessuna profilazione, e nessun dato che
lascia il dispositivo finché non si effettua l'accesso.

> Se in futuro aggiungiamo notifiche, statistiche d'uso o qualsiasi altro
> trattamento, l'informativa va aggiornata **prima** di rilasciare la
> funzione.

Alcuni test in `src/data/__tests__/legale.test.ts` verificano che i blocchi
obbligatori restino al loro posto dopo una riscrittura: titolare, basi
giuridiche, conservazione, diritti, reclamo al Garante, e le clausole
difensive dei Termini.
