import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import parsePhoneNumberFromString from 'libphonenumber-js/mobile';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 65,
  },
  label: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'PoppinsMedium',
  },
  input: {
    fontFamily: 'PoppinsRegular',
    paddingVertical: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.green,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    borderRadius: 10,
    width: '48%',
    paddingVertical: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'PoppinsMedium',
  },
});

export default function SettingDetailScreen({ route, navigation }) {
  const { dataLabel, dataInput, dataType, maxNumber } = route.params;

  const [dataUpdate, setDataUpdate] = useState(dataInput);

  const updateSetting = () => {
    navigation.goBack();
  };

  const formatMobileNumber = (text) => {
    const phoneNumber = parsePhoneNumberFromString(text, 'FR');
    return phoneNumber.formatNational();
  };

  const onChange = (text) => {
    if (dataLabel.toLowerCase() === 'phone') {
      const phoneText = formatMobileNumber(text);
      setDataUpdate(phoneText);
    } else {
      setDataUpdate(text);
    }
  };

  useEffect(() => {
    if (dataLabel.toLowerCase() === 'phone') {
      const phoneText = formatMobileNumber(dataUpdate);
      setDataUpdate(phoneText);
    }
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>{dataLabel}</Text>
        <TextInput
          value={dataUpdate}
          onChangeText={(text) => onChange(text)}
          keyboardAppearance='dark'
          keyboardType={dataType}
          textAlign='center'
          maxLength={maxNumber}
          style={styles.input}
          onSubmitEditing={() => updateSetting()}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors.background, elevation: 5 },
            ]}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.buttonText, { color: colors.green }]}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors.green, elevation: 5 },
            ]}
            onPress={() => updateSetting()}
          >
            <Text style={[styles.buttonText, { color: colors.background }]}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
