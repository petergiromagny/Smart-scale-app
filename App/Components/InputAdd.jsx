import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

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
    alignItems: 'center',
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
    height: 30,
    flex: 5,
  },
});

export default function InputAdd(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          selectionColor={colors.green}
          keyboardAppearance='dark'
          spellCheck={false}
          {...props}
        />
      </View>
    </View>
  );
}
