import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icona } from '../components/Icona';
import { alpha, colors, radius, spacing } from '../theme';
import { tempoRelativo, type Messaggio } from './modello';

/** Iniziale dello pseudonimo su pastiglia colorata: distingue chi scrive senza foto. */
const TINTE = ['#4F7CF3', '#2FA8A0', '#7C5CE0', '#F5842B', '#D83A46', '#159183', '#C2610A'];

function tintaPer(id: string): string {
  let somma = 0;
  for (let i = 0; i < id.length; i++) somma = (somma + id.charCodeAt(i)) % 997;
  return TINTE[somma % TINTE.length];
}

function Avatar({ pseudonimo, autoreId }: { pseudonimo: string; autoreId: string }) {
  return (
    <View style={[styles.avatar, { backgroundColor: tintaPer(autoreId) }]}>
      <Text style={styles.avatarTesto}>{pseudonimo.slice(0, 1).toUpperCase()}</Text>
    </View>
  );
}

/**
 * Barra di voto in stile Reddit: freccia su, punteggio, freccia giù.
 *
 * Il punteggio cambia colore col proprio voto perché su uno schermo
 * piccolo la freccia accesa da sola si nota poco, e senza un ritorno
 * chiaro si finisce per votare due volte.
 */
function BarraVoto({
  punteggio,
  mioVoto,
  attivo,
  onVota,
}: {
  punteggio: number;
  mioVoto: 1 | -1 | 0;
  attivo: boolean;
  onVota: (direzione: 1 | -1) => void;
}) {
  const tinta = mioVoto === 1 ? colors.successEdge : mioVoto === -1 ? colors.errorEdge : colors.textMuted;
  return (
    <View style={[styles.voto, mioVoto !== 0 && { backgroundColor: mioVoto === 1 ? colors.successSoft : colors.errorSoft }]}>
      <Pressable
        onPress={() => onVota(1)}
        disabled={!attivo}
        hitSlop={6}
        accessibilityRole="button"
        accessibilityLabel="Voto positivo"
        style={({ pressed }) => [styles.freccia, pressed && styles.frecciaPremuta]}
      >
        <Icona
          nome={mioVoto === 1 ? 'arrow-up-circle' : 'arrow-up'}
          size={mioVoto === 1 ? 18 : 16}
          color={mioVoto === 1 ? colors.successEdge : colors.textMuted}
        />
      </Pressable>
      <Text style={[styles.punteggio, { color: tinta }]}>{punteggio}</Text>
      <Pressable
        onPress={() => onVota(-1)}
        disabled={!attivo}
        hitSlop={6}
        accessibilityRole="button"
        accessibilityLabel="Voto negativo"
        style={({ pressed }) => [styles.freccia, pressed && styles.frecciaPremuta]}
      >
        <Icona
          nome={mioVoto === -1 ? 'arrow-down-circle' : 'arrow-down'}
          size={mioVoto === -1 ? 18 : 16}
          color={mioVoto === -1 ? colors.errorEdge : colors.textMuted}
        />
      </Pressable>
    </View>
  );
}

export function CartaMessaggio({
  messaggio,
  risposta = false,
  puoInteragire,
  segnalato,
  onVota,
  onRispondi,
  onMenu,
}: {
  messaggio: Messaggio;
  /** Le risposte sono rientrate e più sobrie: non devono rubare la scena. */
  risposta?: boolean;
  puoInteragire: boolean;
  segnalato: boolean;
  onVota: (direzione: 1 | -1) => void;
  onRispondi: () => void;
  onMenu: () => void;
}) {
  if (messaggio.eliminato) {
    return (
      <View style={[styles.lapide, risposta && styles.rientro]}>
        <Icona nome="remove-circle-outline" size={15} color="#B6BECC" />
        <Text style={styles.lapideTesto}>Messaggio eliminato dall’autore</Text>
      </View>
    );
  }

  const corpo = (
    <View style={risposta ? styles.cartaRisposta : styles.carta}>
      <View style={styles.intestazione}>
        <Avatar pseudonimo={messaggio.pseudonimo} autoreId={messaggio.autoreId} />
        <View style={styles.intestazioneTesti}>
          <View style={styles.rigaNome}>
            <Text style={styles.nome} numberOfLines={1}>
              {messaggio.pseudonimo}
            </Text>
            {messaggio.mio ? (
              <View style={styles.tuo}>
                <Text style={styles.tuoTesto}>tu</Text>
              </View>
            ) : null}
          </View>
          <Text style={styles.tempo}>{tempoRelativo(messaggio.creatoIl)}</Text>
        </View>
        {messaggio.genere === 'soluzione' && !risposta ? (
          <View style={styles.distintivo}>
            <Icona nome="bulb" size={12} color={colors.accent} />
            <Text style={styles.distintivoTesto}>Soluzione</Text>
          </View>
        ) : null}
      </View>

      <Text style={styles.testo}>{messaggio.testo}</Text>

      <View style={styles.piede}>
        <BarraVoto
          punteggio={messaggio.punteggio}
          mioVoto={messaggio.mioVoto}
          attivo={puoInteragire}
          onVota={onVota}
        />
        <Pressable
          onPress={onRispondi}
          disabled={!puoInteragire}
          accessibilityRole="button"
          style={({ pressed }) => [styles.azione, pressed && styles.azionePremuta]}
        >
          <Icona nome="return-down-forward" size={15} color={colors.textMuted} />
          <Text style={styles.azioneTesto}>Rispondi</Text>
        </Pressable>
        <View style={styles.spazio} />
        {segnalato ? (
          <View style={styles.azione}>
            <Icona nome="flag" size={14} color={colors.textMuted} />
            <Text style={styles.azioneTesto}>Segnalato</Text>
          </View>
        ) : (
          <Pressable
            onPress={onMenu}
            accessibilityRole="button"
            accessibilityLabel="Altre azioni"
            hitSlop={8}
            style={({ pressed }) => [styles.azione, pressed && styles.azionePremuta]}
          >
            <Icona nome="ellipsis-horizontal" size={16} color={colors.textMuted} />
          </Pressable>
        )}
      </View>
    </View>
  );

  if (risposta) return <View style={styles.rientro}>{corpo}</View>;

  return <View style={styles.involucro}>{corpo}</View>;
}

const styles = StyleSheet.create({
  involucro: { },
  carta: {
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.xl,
    padding: spacing.md - 2,
    gap: spacing.sm,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  cartaRisposta: {
    backgroundColor: alpha.velo,
    borderRadius: radius.lg,
    padding: spacing.sm + 4,
    gap: 6,
  },
  // Le risposte pendono da una stanghetta verticale: si capisce a colpo
  // d'occhio dove finisce un filo e dove ne comincia un altro. Lo stacco
  // fra una risposta e l'altra è padding e non margine, così la stanghetta
  // corre continua invece di spezzarsi a ogni messaggio.
  rientro: {
    marginLeft: spacing.md,
    paddingTop: spacing.sm,
    paddingLeft: spacing.sm + 2,
    borderLeftWidth: 1,
    borderLeftColor: alpha.bordo,
  },

  intestazione: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  intestazioneTesti: { flex: 1 },
  rigaNome: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  avatar: { width: 32, height: 32, borderRadius: 11, alignItems: 'center', justifyContent: 'center' },
  avatarTesto: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
  nome: { fontSize: 14.5, fontWeight: '600', color: colors.text, flexShrink: 1 },
  tuo: {
    backgroundColor: alpha.velo,
    borderRadius: radius.pill,
    paddingHorizontal: 7,
    paddingVertical: 1,
  },
  tuoTesto: { fontSize: 10.5, fontWeight: '600', color: '#2D4FC7', letterSpacing: 0.3 },
  tempo: { fontSize: 12, color: colors.textMuted, marginTop: 1 },

  distintivo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.pill,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  distintivoTesto: { fontSize: 11, fontWeight: '600', color: colors.accent },

  testo: { fontSize: 15, color: colors.text, lineHeight: 23 },

  piede: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  spazio: { flex: 1 },
  voto: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: alpha.veloForte,
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  freccia: { padding: 1 },
  frecciaPremuta: { opacity: 0.5 },
  punteggio: { fontSize: 13.5, fontWeight: '600', minWidth: 16, textAlign: 'center' },

  azione: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: radius.pill,
  },
  azionePremuta: { backgroundColor: alpha.veloForte },
  azioneTesto: { fontSize: 13, fontWeight: '700', color: colors.textMuted },

  lapide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  lapideTesto: { fontSize: 13, color: '#B6BECC', fontStyle: 'italic' },
});
