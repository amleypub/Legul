import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as api from './api';
import {
  costruisciFilo,
  prossimoVoto,
  punteggioDopoVoto,
  type Filo,
  type GenereMessaggio,
  type Messaggio,
} from './modello';

interface Stato {
  filo: Filo;
  messaggi: Messaggio[];
  caricamento: boolean;
  errore: string | null;
  invioInCorso: boolean;
  /** Id dei messaggi che questo utente ha appena segnalato, per non rifarlo. */
  segnalati: Set<string>;
  ricarica: () => void;
  pubblica: (opzioni: {
    genere: GenereMessaggio;
    testo: string;
    padreId?: string | null;
  }) => Promise<boolean>;
  vota: (id: string, direzione: 1 | -1) => void;
  elimina: (id: string) => Promise<void>;
  segnala: (id: string) => Promise<void>;
  blocca: (autoreId: string) => Promise<void>;
}

const FILO_VUOTO: Filo = { soluzioni: [], commenti: [] };

/**
 * Carica e governa il filo di un argomento.
 *
 * Il voto è ottimistico: si aggiorna subito sullo schermo e si annulla se
 * il server rifiuta. Un secondo di attesa su un gesto che si ripete decine
 * di volte renderebbe l'interfaccia sgradevole, e il caso di errore è
 * raro abbastanza da poterlo pagare con un ripristino.
 */
export function useDiscussione(argomento: string): Stato {
  const [messaggi, setMessaggi] = useState<Messaggio[]>([]);
  const [caricamento, setCaricamento] = useState(api.discussioneDisponibile);
  const [errore, setErrore] = useState<string | null>(null);
  const [invioInCorso, setInvioInCorso] = useState(false);
  const [segnalati, setSegnalati] = useState<Set<string>>(new Set());
  const vivo = useRef(true);

  useEffect(() => {
    vivo.current = true;
    return () => {
      vivo.current = false;
    };
  }, []);

  const carica = useCallback(async () => {
    if (!api.discussioneDisponibile) {
      setCaricamento(false);
      return;
    }
    setCaricamento(true);
    try {
      const righe = await api.leggiDiscussione(argomento);
      if (!vivo.current) return;
      setMessaggi(righe);
      setErrore(null);
    } catch (e) {
      if (!vivo.current) return;
      setErrore(api.messaggioErrore(e));
    } finally {
      if (vivo.current) setCaricamento(false);
    }
  }, [argomento]);

  useEffect(() => {
    void carica();
  }, [carica]);

  const pubblica = useCallback<Stato['pubblica']>(
    async ({ genere, testo, padreId }) => {
      setInvioInCorso(true);
      try {
        await api.pubblica({ argomento, genere, testo, padreId });
        await carica();
        return true;
      } catch (e) {
        if (vivo.current) setErrore(api.messaggioErrore(e));
        return false;
      } finally {
        if (vivo.current) setInvioInCorso(false);
      }
    },
    [argomento, carica]
  );

  const vota = useCallback<Stato['vota']>((id, direzione) => {
    let precedente: Messaggio | undefined;
    let nuovo: 1 | -1 | 0 = 0;

    setMessaggi((attuali) =>
      attuali.map((m) => {
        if (m.id !== id) return m;
        precedente = m;
        nuovo = prossimoVoto(m.mioVoto, direzione);
        return {
          ...m,
          mioVoto: nuovo,
          punteggio: punteggioDopoVoto(m.punteggio, m.mioVoto, nuovo),
        };
      })
    );

    if (!precedente) return;
    const daRipristinare = precedente;
    api.vota(id, nuovo).catch((e) => {
      if (!vivo.current) return;
      setMessaggi((attuali) => attuali.map((m) => (m.id === id ? daRipristinare : m)));
      setErrore(api.messaggioErrore(e));
    });
  }, []);

  const elimina = useCallback(
    async (id: string) => {
      try {
        await api.elimina(id);
        await carica();
      } catch (e) {
        if (vivo.current) setErrore(api.messaggioErrore(e));
      }
    },
    [carica]
  );

  const segnala = useCallback(async (id: string) => {
    // La segnalazione si mostra come presa in carico subito: se il server
    // rifiuta, l'utente non ha nulla da rifare e insistere lo confonderebbe.
    setSegnalati((attuali) => new Set(attuali).add(id));
    try {
      await api.segnala(id);
    } catch (e) {
      if (vivo.current) setErrore(api.messaggioErrore(e));
    }
  }, []);

  const blocca = useCallback(async (autoreId: string) => {
    try {
      await api.blocca(autoreId);
      if (vivo.current) setMessaggi((attuali) => attuali.filter((m) => m.autoreId !== autoreId));
    } catch (e) {
      if (vivo.current) setErrore(api.messaggioErrore(e));
    }
  }, []);

  const filo = useMemo(
    () => (messaggi.length ? costruisciFilo(messaggi) : FILO_VUOTO),
    [messaggi]
  );

  return {
    filo,
    messaggi,
    caricamento,
    errore,
    invioInCorso,
    segnalati,
    ricarica: () => void carica(),
    pubblica,
    vota,
    elimina,
    segnala,
    blocca,
  };
}
