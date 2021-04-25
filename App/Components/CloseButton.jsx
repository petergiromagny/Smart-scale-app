import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 50,
    opacity: 0.9,
    position: 'relative',
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    width: 5,
    height: '75%',
    borderRadius: 5,
    backgroundColor: colors.background,
    position: 'absolute',
  },
  crossOne: { transform: [{ rotate: '45deg' }] },
  crossTwo: { transform: [{ rotate: '-45deg' }] },
});

export default function CloseButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <View style={[styles.cross, styles.crossOne]} />
        <View style={[styles.cross, styles.crossTwo]} />
      </View>
    </TouchableOpacity>
  );
}
