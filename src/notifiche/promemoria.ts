import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

/**
 * Promemoria giornaliero di studio.
 *
 * È una notifica **locale**, programmata dal telefono stesso: non serve
 * alcun server e nessun dato lascia il dispositivo. Non usiamo notifiche
 * push, che richiederebbero un identificativo inviato a un servizio
 * esterno per una funzione che non ne ha bisogno.
 */

const IDENTIFICATORE = 'legul-promemoria-giornaliero';

/** Ore proposte: mattina, pausa pranzo, pomeriggio, sera. */
export const ORE_PROPOSTE = [8, 13, 18, 21] as const;

export const ORA_PREDEFINITA = 20;

const MESSAGGI = [
  { titolo: 'Dieci minuti oggi?', corpo: 'Una lezione basta per tenere accesa la streak.' },
  { titolo: 'L’esame si avvicina', corpo: 'Cinque risposte esatte e l’obiettivo di oggi è fatto.' },
  { titolo: 'Il tuo posto ti aspetta', corpo: 'Riprendi il percorso da dove l’hai lasciato.' },
];

/** Sul telefono la notifica va mostrata anche ad app aperta. */
export function configuraNotifiche() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

/**
 * Chiede il permesso, se non è già stato dato.
 * Restituisce `false` quando l'utente rifiuta: in quel caso l'interruttore
 * non deve restare acceso, altrimenti promette qualcosa che non accadrà.
 */
export async function chiediPermesso(): Promise<boolean> {
  if (Platform.OS === 'web') return false;
  const { status } = await Notifications.getPermissionsAsync();
  if (status === 'granted') return true;
  const richiesta = await Notifications.requestPermissionsAsync();
  return richiesta.status === 'granted';
}

/** Programma (o riprogramma) il promemoria all'ora indicata. */
export async function programmaPromemoria(ora: number): Promise<void> {
  if (Platform.OS === 'web') return;
  await annullaPromemoria();

  /*
    Il messaggio cambia a ogni riprogrammazione, non a ogni giorno: il
    trigger `DAILY` ripete sempre lo stesso contenuto. Poiché l'app
    riprogramma il promemoria a ogni avvio, chi la apre con una certa
    regolarità vede testi diversi; chi sparisce per una settimana riceve
    sette volte lo stesso. Rotearlo davvero vorrebbe dire programmare
    più notifiche distinte, e non vale la complicazione per un
    promemoria che serve proprio a farsi riaprire.
  */
  const messaggio = MESSAGGI[new Date().getDate() % MESSAGGI.length];

  await Notifications.scheduleNotificationAsync({
    identifier: IDENTIFICATORE,
    content: { title: messaggio.titolo, body: messaggio.corpo },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: ora,
      minute: 0,
    },
  });
}

export async function annullaPromemoria(): Promise<void> {
  if (Platform.OS === 'web') return;
  await Notifications.cancelScheduledNotificationAsync(IDENTIFICATORE).catch(() => {
    // Nessun promemoria da annullare: va bene così.
  });
}
