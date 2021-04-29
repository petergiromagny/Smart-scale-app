import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../Constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    width: width / 2.5,
    height: width / 2.5,
    borderRadius: 100,
    backgroundColor: colors.background,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default function ScanButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log('Scanning')}
        style={styles.button}
      >
        <Ionicons name='play' size={100} color={colors.green} />
      </TouchableOpacity>
    </View>
  );
}
