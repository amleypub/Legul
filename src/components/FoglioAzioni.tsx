import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icona } from './Icona';
import { alpha, colors, radius, spacing } from '../theme';

export interface AzioneFoglio {
  chiave: string;
  etichetta: string;
  descrizione?: string;
  icona: string;
  tinta: string;
  distruttiva?: boolean;
  onPress: () => void;
}

/**
 * Menu di azioni che sale dal basso.
 *
 * Non si usa `Alert.alert` con più pulsanti: su Android l'ordine dei
 * pulsanti cambia rispetto a iOS e sul web (dove si verificano le
 * schermate) `Alert` non mostra nulla. Un foglio scritto a mano si
 * comporta allo stesso modo ovunque.
 */
export function FoglioAzioni({
  visibile,
  titolo,
  azioni,
  onChiudi,
}: {
  visibile: boolean;
  titolo?: string;
  azioni: AzioneFoglio[];
  onChiudi: () => void;
}) {
  return (
    <Modal
      visible={visibile}
      transparent
      animationType="fade"
      onRequestClose={onChiudi}
      statusBarTranslucent
    >
      <Pressable style={styles.velo} onPress={onChiudi} accessibilityLabel="Chiudi">
        {/* Il tocco dentro il foglio non deve chiuderlo. */}
        <Pressable style={styles.foglio} onPress={() => {}}>
          <View style={styles.maniglia} />
          {titolo ? <Text style={styles.titolo}>{titolo}</Text> : null}
          {azioni.map((azione) => (
            <Pressable
              key={azione.chiave}
              onPress={() => {
                onChiudi();
                azione.onPress();
              }}
              accessibilityRole="button"
              accessibilityLabel={azione.etichetta}
              style={({ pressed }) => [styles.riga, pressed && styles.rigaPremuta]}
            >
              <View style={[styles.icona, { backgroundColor: azione.tinta }]}>
                <Icona nome={azione.icona} size={17} color="#FFFFFF" />
              </View>
              <View style={styles.testi}>
                <Text style={[styles.etichetta, azione.distruttiva && styles.distruttiva]}>
                  {azione.etichetta}
                </Text>
                {azione.descrizione ? (
                  <Text style={styles.descrizione}>{azione.descrizione}</Text>
                ) : null}
              </View>
            </Pressable>
          ))}
          <Pressable
            onPress={onChiudi}
            accessibilityRole="button"
            style={({ pressed }) => [styles.annulla, pressed && styles.rigaPremuta]}
          >
            <Text style={styles.annullaTesto}>Annulla</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  velo: {
    flex: 1,
    backgroundColor: 'rgba(15, 21, 36, 0.45)',
    justifyContent: 'flex-end',
  },
  foglio: {
    backgroundColor: alpha.vetroForte,
    borderTopLeftRadius: radius.xxl,
    borderTopRightRadius: radius.xxl,
    padding: spacing.md,
    paddingBottom: spacing.xl,
    gap: 2,
  },
  maniglia: {
    alignSelf: 'center',
    width: 42,
    height: 5,
    borderRadius: radius.pill,
    backgroundColor: alpha.bordoMarcato,
    marginBottom: spacing.sm,
  },
  titolo: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textMuted,
    marginBottom: spacing.xs,
    paddingHorizontal: 2,
  },
  riga: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
    paddingVertical: 11,
    borderRadius: radius.md,
  },
  rigaPremuta: { backgroundColor: alpha.veloForte },
  icona: {
    width: 34,
    height: 34,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  testi: { flex: 1 },
  etichetta: { fontSize: 15.5, fontWeight: '700', color: colors.text },
  distruttiva: { color: colors.error },
  descrizione: { fontSize: 12.5, color: colors.textMuted, marginTop: 1, lineHeight: 17 },
  annulla: {
    marginTop: spacing.sm,
    paddingVertical: 13,
    borderRadius: radius.md,
    backgroundColor: alpha.veloForte,
    alignItems: 'center',
  },
  annullaTesto: { fontSize: 15.5, fontWeight: '600', color: colors.textMuted },
});
