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
import FavIngrList from '../Components/FavIngrList';

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
    marginVertical: 20,
    backgroundColor: colors.background,
    borderRadius: 10,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
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
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
  },
});

export default function SettingDetailScreen({ route, navigation }) {
  const {
    dataLabel,
    dataInput,
    dataType,
    maxNumber,
    favouriteType,
  } = route.params;

  /**
   * @var dataUpdate : input value
   */
  const [dataUpdate, setDataUpdate] = useState(dataInput);

  // Action for save button
  const updateSetting = () => {
    console.log(dataUpdate);
    navigation.goBack();
  };

  // Reformat phone number with regex
  const formatMobileNumber = (text) => {
    const phoneNumber = parsePhoneNumberFromString(text, 'FR');
    return phoneNumber.formatNational();
  };

  // Handle when value changes
  const onChange = (text) => {
    if (dataLabel.toLowerCase() === 'phone') {
      const phoneText = formatMobileNumber(text);
      setDataUpdate(phoneText);
    } else {
      setDataUpdate(text);
    }
  };

  // Set new phone number with regex function
  useEffect(() => {
    if (dataLabel.toLowerCase() === 'phone') {
      const phoneText = formatMobileNumber(dataUpdate);
      setDataUpdate(phoneText);
    }
  });

  // Component for favorite food list
  if (favouriteType) {
    return (
      <>
        <FavIngrList
          label={dataLabel}
          navigation={navigation}
          data={dataUpdate}
        />
      </>
    );
  }

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
