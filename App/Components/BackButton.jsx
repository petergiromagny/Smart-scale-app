import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    opacity: 0.5,
    borderRadius: 50,
    padding: 8,
    backgroundColor: colors.green,
  },
});

export default function BackButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <SimpleLineIcons name='arrow-left' size={20} color='black' />
    </TouchableOpacity>
  );
}
