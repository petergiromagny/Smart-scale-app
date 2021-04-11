import React from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import colors from '../Constants/colors';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 5,
    paddingVertical: 10,
    backgroundColor: colors.background,
    shadowColor: colors.green,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 5,
    borderRadius: 10,
  },
  nutritionQty: {
    fontFamily: 'PoppinsMedium',
    fontSize: 17,
    color: colors.dark,
  },
  nutritionLabel: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: colors.dark,
  },
});

export default function NutritionInfo({ label, quantity, unit }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nutritionQty}>{`${quantity}${unit}`}</Text>
      <Text style={styles.nutritionLabel}>{label}</Text>
    </View>
  );
}
