import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  line: {
    height: 4,
    borderRadius: 50,
    marginVertical: 3,
    backgroundColor: colors.dark,
  },
  top: { width: 15 },
  middle: { width: 30 },
  bottom: { width: 20 },
});

/**
 * @todo: Create animation on hamburger (wave)
 */

export default function Hamburger() {
  return (
    <>
      <View style={[styles.line, styles.top]} />
      <View style={[styles.line, styles.middle]} />
      <View style={[styles.line, styles.bottom]} />
    </>
  );
}
