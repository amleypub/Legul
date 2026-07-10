import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useGamification } from '../gamification/GamificationContext';
import { Button3D } from '../components/Button3D';
import type { RootStackScreenProps } from '../navigation/types';
import { colors, radius, spacing } from '../theme';

const VANTAGGI = [
  'Unità Avanzato ed Eccellenza per tutte le materie',
  'Migliaia di domande con spiegazioni e riferimenti normativi',
  'Percorso completo fino al livello Principe del Foro',
  'Sostieni lo sviluppo continuo di Legul',
];

type Piano = 'mensile' | 'annuale';

export default function PaywallScreen({ navigation }: RootStackScreenProps<'Paywall'>) {
  const { attivaPremium } = useGamification();
  const [piano, setPiano] = useState<Piano>('annuale');

  return (
    <LinearGradient colors={['#22314F', '#101728']} style={styles.gradient}>
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <ScrollView contentContainerStyle={styles.content}>
          <Pressable onPress={() => navigation.goBack()} hitSlop={12} style={styles.chiudi}>
            <Ionicons name="close" size={28} color="rgba(255,255,255,0.7)" />
          </Pressable>

          <View style={styles.coronaBubble}>
            <MaterialCommunityIcons name="crown" size={44} color={colors.primary} />
          </View>
          <Text style={styles.titolo}>Legul Premium</Text>
          <Text style={styles.sottotitolo}>
            Sblocca l’intero percorso e preparati all’esame senza limiti.
          </Text>

          <View style={styles.vantaggi}>
            {VANTAGGI.map((v) => (
              <View key={v} style={styles.vantaggioRiga}>
                <Ionicons name="checkmark-circle" size={22} color={colors.accent} />
                <Text style={styles.vantaggioTesto}>{v}</Text>
              </View>
            ))}
          </View>

          <View style={styles.piani}>
            <Pressable
              onPress={() => setPiano('annuale')}
              style={[styles.piano, piano === 'annuale' && styles.pianoAttivo]}
            >
              <View style={styles.pianoBadge}>
                <Text style={styles.pianoBadgeTesto}>CONSIGLIATO</Text>
              </View>
              <Text style={styles.pianoNome}>Annuale</Text>
              <Text style={styles.pianoPrezzo}>49,99 €</Text>
              <Text style={styles.pianoDettaglio}>4,17 € al mese</Text>
            </Pressable>
            <Pressable
              onPress={() => setPiano('mensile')}
              style={[styles.piano, piano === 'mensile' && styles.pianoAttivo]}
            >
              <Text style={styles.pianoNome}>Mensile</Text>
              <Text style={styles.pianoPrezzo}>7,99 €</Text>
              <Text style={styles.pianoDettaglio}>fatturazione mensile</Text>
            </Pressable>
          </View>

          <Button3D
            label="Attiva Premium"
            onPress={() => {
              attivaPremium();
              navigation.goBack();
            }}
            color={colors.accent}
            edgeColor="#A8861B"
            textColor={colors.primary}
          />
          <Text style={styles.nota}>
            Prezzi di esempio. L’acquisto in-app (App Store / Google Play) sarà integrato prima
            della pubblicazione: per ora il pulsante attiva Premium in modalità demo, per provare i
            contenuti bloccati.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1 },
  content: { padding: spacing.lg, alignItems: 'center', paddingBottom: spacing.xl },
  chiudi: { alignSelf: 'flex-start' },
  coronaBubble: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
  },
  titolo: { fontSize: 30, fontWeight: '800', color: '#FFFFFF', marginTop: spacing.md },
  sottotitolo: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: spacing.xs,
  },
  vantaggi: { alignSelf: 'stretch', marginTop: spacing.lg, gap: spacing.sm },
  vantaggioRiga: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  vantaggioTesto: { flex: 1, fontSize: 15, color: '#FFFFFF', lineHeight: 21 },
  piani: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignSelf: 'stretch',
    marginVertical: spacing.lg,
  },
  piano: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.15)',
    padding: spacing.md,
    alignItems: 'center',
  },
  pianoAttivo: { borderColor: colors.accent, backgroundColor: 'rgba(201,162,39,0.15)' },
  pianoBadge: {
    backgroundColor: colors.accent,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: spacing.xs,
  },
  pianoBadgeTesto: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    color: colors.primary,
  },
  pianoNome: { fontSize: 15, fontWeight: '700', color: '#FFFFFF' },
  pianoPrezzo: { fontSize: 24, fontWeight: '800', color: '#FFFFFF', marginTop: 4 },
  pianoDettaglio: { fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 },
  nota: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: spacing.md,
  },
});
