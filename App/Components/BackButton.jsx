import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 20,
    position: 'relative',
  },
  arrowLeftTop: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '100%',
    height: 4,
    backgroundColor: colors.dark,
    borderRadius: 50,
    transform: [{ rotate: '45deg' }, { translateY: 6 }],
  },
  arrowLeftBottom: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '100%',
    height: 4,
    backgroundColor: colors.dark,
    borderRadius: 50,
    transform: [{ rotate: '-45deg' }, { translateY: -6 }],
  },
});

export default function BackButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <View style={styles.arrowLeftTop} />
      <View style={styles.arrowLeftBottom} />
    </TouchableOpacity>
  );
}
