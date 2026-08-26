import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Bottone } from './Bottone';
import { Icona } from './Icona';
import { Superficie } from './Superficie';
import { alone, colors, radius, spacing, type } from '../theme';

interface Props {
  /** Che cosa sta dietro il muro, al singolare: «questo svolgimento». */
  cosa: string;
  /**
   * Perché vale la pena, in una riga. Non un elenco di funzioni: la cosa
   * concreta che si ottiene subito dopo aver pagato.
   */
  motivo: string;
  /** Quanti altri contenuti dello stesso tipo si sbloccano. */
  quantiAltri?: number;
  onSblocca: () => void;
  /** Via d'uscita: chi non compra deve poter tornare indietro senza attrito. */
  onIndietro?: () => void;
  etichettaIndietro?: string;
}

/**
 * Il muro che si incontra su un contenuto riservato.
 *
 * Due regole che sembrano dettagli e non lo sono. La prima: dice sempre
 * che cosa c'è dietro *in concreto* — non «sblocca tutto», ma quanti
 * svolgimenti o quanti casi — perché una promessa generica non si può
 * verificare e quindi non si crede. La seconda: la via d'uscita è
 * sempre visibile. Un muro senza uscita si chiude con il gesto di
 * chiudere l'app, e quella è la sessione che non torna.
 */
export function MuroPremium({
  cosa,
  motivo,
  quantiAltri,
  onSblocca,
  onIndietro,
  etichettaIndietro = 'Torna indietro',
}: Props) {
  return (
    <Superficie tono="forte" raggio={radius.xxl} rilievo="alta" contentStyle={styles.corpo}>
      <LinearGradient
        colors={['#F7BE3E', colors.accent]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.corona, alone(colors.accent, 'tenue')]}
      >
        <Icona nome="lock-closed" size={24} color={colors.accent} />
      </LinearGradient>

      <Text style={styles.titolo}>{cosa} è riservato a Premium</Text>
      <Text style={styles.motivo}>{motivo}</Text>

      {quantiAltri !== undefined && quantiAltri > 0 && (
        <View style={styles.conta}>
          <Text style={styles.contaNumero}>{quantiAltri}</Text>
          <Text style={styles.contaTesto}>
            {quantiAltri === 1 ? 'altro contenuto ti aspetta' : 'altri ti aspettano'}
          </Text>
        </View>
      )}

      <Bottone label="Vedi Premium" onPress={onSblocca} icona="crown" style={styles.azione} />
      {!!onIndietro && (
        <Bottone
          label={etichettaIndietro}
          onPress={onIndietro}
          variante="fantasma"
          style={styles.azione}
        />
      )}
    </Superficie>
  );
}

const styles = StyleSheet.create({
  corpo: { alignItems: 'center', padding: spacing.lg, gap: spacing.sm },
  corona: {
    width: 60,
    height: 60,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  titolo: { ...type.sezione, color: colors.text, textAlign: 'center' },
  motivo: {
    ...type.corpo,
    color: colors.textMuted,
    textAlign: 'center',
    maxWidth: 340,
  },
  conta: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 7,
    backgroundColor: colors.accentSoft,
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginTop: spacing.xs,
  },
  contaNumero: {
    fontSize: 19,
    fontWeight: '600',
    letterSpacing: -0.5,
    color: colors.accentEdge,
    fontVariant: ['tabular-nums'],
  },
  contaTesto: { ...type.piccolo, fontWeight: '600', color: colors.accent },
  azione: { alignSelf: 'stretch', marginTop: spacing.xs },
});
