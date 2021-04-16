import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 65,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'PoppinsBold',
  },
  input: {
    fontFamily: 'PoppinsRegular',
    paddingVertical: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.green,
  },
  button: {
    backgroundColor: colors.green,
  },
});

export default function SettingDetailScreen({ route }) {
  const { dataLabel, dataInput, dataType } = route.params;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>{dataLabel}</Text>
        <TextInput
          value={dataInput}
          keyboardAppearance='dark'
          keyboardType={dataType}
          textAlign='center'
          style={styles.input}
        />
        <Button title='Save' style={styles.button} color={colors.green} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
