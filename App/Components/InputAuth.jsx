import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontFamily: 'PoppinsRegular',
    fontSize: 17,
    marginBottom: 10,
    marginLeft: 5,
  },
  textInputContainer: {
    flexDirection: 'row',
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
  textInput: {
    flex: 5,
  },
});

export default function InputAuth({
  label,
  placeholder,
  icon,
  secureTextEntry,
  textType,
  keyboard,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          selectionColor={colors.green}
          textContentType={textType}
          keyboardType={keyboard}
          keyboardAppearance='dark'
        />
        {icon}
      </View>
    </View>
  );
}
