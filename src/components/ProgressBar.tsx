import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, radius } from '../theme';

interface Props {
  /** Avanzamento da 0 a 1. */
  progress: number;
  color?: string;
  trackColor?: string;
  height?: number;
}

export function ProgressBar({
  progress,
  color = colors.accent,
  trackColor = 'rgba(255,255,255,0.25)',
  height = 10,
}: Props) {
  const pct = Math.min(Math.max(progress, 0), 1) * 100;
  return (
    <View style={[styles.track, { backgroundColor: trackColor, height, borderRadius: height / 2 }]}>
      <View
        style={[
          styles.fill,
          { width: `${pct}%`, backgroundColor: color, borderRadius: height / 2 },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: radius.pill,
  },
  fill: {
    height: '100%',
  },
});
