import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontFamily: 'PoppinsMedium',
    fontSize: 17,
  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.background,
    borderRadius: 10,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default function InputAuth({ label, placeholder }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
}
