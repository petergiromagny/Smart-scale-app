import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import colors from '../Constants/colors';

import fatsIcon from '../Assets/Images/fatsIcon.png';
import carbsIcon from '../Assets/Images/carbsIcon.png';
import proteinsIcon from '../Assets/Images/proteinsIcon.png';

const styles = StyleSheet.create({
  nutritionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-evenly',
    backgroundColor: colors.background,
    shadowColor: colors.green,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 5,
    borderRadius: 10,
  },
  nutritionRow: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 15,
  },
  nutritionImage: { width: 25, height: 25, marginVertical: 5 },
  nutritionText: {
    fontFamily: 'PoppinsMedium',
    fontSize: 17,
    marginVertical: 5,
    color: colors.green,
  },
  nutritionSeparator: {
    width: 1,
    height: '75%',
    backgroundColor: colors.green,
    opacity: 0.1,
  },
});

export default ({ fats, carbs, proteins }) => (
  <View style={styles.nutritionInfo}>
    <View style={styles.nutritionRow}>
      <Image source={fatsIcon} style={styles.nutritionImage} />
      <Text style={styles.nutritionText}>{fats}</Text>
    </View>
    <View style={styles.nutritionSeparator} />
    <View style={styles.nutritionRow}>
      <Image source={carbsIcon} style={styles.nutritionImage} />
      <Text style={styles.nutritionText}>{carbs}</Text>
    </View>
    <View style={styles.nutritionSeparator} />
    <View style={styles.nutritionRow}>
      <Image source={proteinsIcon} style={styles.nutritionImage} />
      <Text style={styles.nutritionText}>{proteins}</Text>
    </View>
  </View>
);
