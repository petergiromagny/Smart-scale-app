import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import parsePhoneNumberFromString from 'libphonenumber-js/mobile';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  dataContainer: {
    flexDirection: 'column',
  },
  dataLabel: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: colors.green,
  },
  dataInput: {
    fontFamily: 'PoppinsMedium',
  },
  svgContainer: {
    width: 14,
    height: 14,
    borderRadius: 50,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '180deg' }],
  },
});

export default function SettingItem({
  dataLabel,
  dataInput,
  dataType,
  maxNumber,
  navigation,
}) {
  const [dataUpdate, setDataUpdate] = useState(dataInput);

  const formatMobileNumber = (text) => {
    const phoneNumber = parsePhoneNumberFromString(text, 'FR');
    return phoneNumber.formatNational();
  };

  useEffect(() => {
    if (dataLabel.toLowerCase() === 'phone') {
      const phoneText = formatMobileNumber(dataUpdate);
      setDataUpdate(phoneText);
    }
  });

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate('SettingDetailScreen', {
          dataInput,
          dataLabel,
          dataType,
          maxNumber,
        })
      }
    >
      <View style={styles.dataContainer}>
        <Text style={styles.dataLabel}>{dataLabel}</Text>
        <Text style={styles.dataInput}>{dataUpdate}</Text>
      </View>
      <View style={styles.svgContainer}>
        <Svg width='100%' height='100%' viewBox='0 0 100 100'>
          <Path
            fill={colors.green}
            d='M68.82,98a9.54,9.54,0,0,1-6.63-2.67L26.12,60.53a14.62,14.62,0,0,1,0-21.06L62.19,4.67A9.54,9.54,0,0,1,75.44,18.41L42.69,50,75.44,81.59A9.54,9.54,0,0,1,68.82,98Z'
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
}
