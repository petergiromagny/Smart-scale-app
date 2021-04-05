import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.green,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
    color: colors.background,
  },
});

export default function Button(props) {
  const { title, actionPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={actionPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
