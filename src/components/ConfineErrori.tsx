import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icona } from './Icona';
import { Bottone } from './Bottone';
import { Monolite } from './Monolite';
import { alpha, colors, radius, spacing } from '../theme';

interface Stato {
  errore: Error | null;
}

/**
 * Rete di sicurezza per gli errori di rendering.
 *
 * Senza, un solo componente che si rompe porta via l'intera interfaccia
 * e lascia una schermata bianca, senza spiegazione né via d'uscita: è
 * successo davvero durante lo sviluppo, con un difetto nel caricamento
 * del font. In produzione sarebbe una recensione a una stella.
 *
 * Deve restare una classe: gli hook non intercettano gli errori dei
 * figli, `componentDidCatch` è l'unico meccanismo che lo fa.
 */
export class ConfineErrori extends React.Component<{ children: React.ReactNode }, Stato> {
  state: Stato = { errore: null };

  static getDerivedStateFromError(errore: Error): Stato {
    return { errore };
  }

  componentDidCatch(errore: Error, info: React.ErrorInfo) {
    // In produzione qui andrà l'invio a un servizio di diagnostica.
    console.error('Errore non gestito:', errore, info.componentStack);
  }

  riprova = () => this.setState({ errore: null });

  render() {
    const { errore } = this.state;
    if (!errore) return this.props.children;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Monolite state="studying" size={104} />
          <Text style={styles.titolo}>Qualcosa si è inceppato</Text>
          <Text style={styles.testo}>
            L’app ha incontrato un problema imprevisto. I tuoi progressi sono salvati: riprova, e
            se succede di nuovo chiudi e riapri Legul.
          </Text>

          <Bottone
            label="Riprova"
            onPress={this.riprova}
          variante="scuro"
            style={styles.bottone}
          />

          {/* Il dettaglio tecnico serve a chi segnala il problema, ma non
              deve essere la prima cosa che si legge. */}
          <View style={styles.dettaglio}>
            <View style={styles.dettaglioTestata}>
              <Icona nome="bug-outline" size={14} color={colors.textMuted} />
              <Text style={styles.dettaglioTitolo}>Dettaglio tecnico</Text>
            </View>
            <Text style={styles.dettaglioTesto}>{errore.message || String(errore)}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  titolo: { fontSize: 22, fontWeight: '700', color: colors.text, marginTop: spacing.sm },
  testo: {
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },
  bottone: { alignSelf: 'stretch', marginTop: spacing.md },
  dettaglio: {
    alignSelf: 'stretch',
    backgroundColor: alpha.vetroForte,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginTop: spacing.lg,
    borderWidth: StyleSheet.hairlineWidth * 1.5,
    borderColor: alpha.bordo,
  },
  dettaglioTestata: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  dettaglioTitolo: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  dettaglioTesto: {
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 18,
    marginTop: 6,
  },
});
