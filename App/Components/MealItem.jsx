import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';

import colors from '../Constants/colors';
import Donut from './Donut';

const { width } = Dimensions.get('screen');

const OBJ_KCAL = 1850;

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: width / 1.7,
    backgroundColor: colors.background,
    borderRadius: 10,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'PoppinsRegular',
    color: colors.green,
    textAlign: 'center',
  },
  textNumber: {
    fontSize: 18,
    fontFamily: 'PoppinsBold',
    color: colors.green,
    textAlign: 'center',
  },
  infoMeal: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  infoTop: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  infoTopSection: {
    width: '50%',
    paddingVertical: 10,
  },
  infoBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  separatorVertical: {
    width: 1,
    height: '100%',
    backgroundColor: colors.green,
    opacity: 0.3,
  },
  separatorHorizontal: {
    height: 1,
    width: '100%',
    backgroundColor: colors.green,
    opacity: 0.3,
  },
});

export default function MealItem({ dataItem, navigation }) {
  const { item } = dataItem;

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('MealDetail', { item, OBJ_KCAL })}
    >
      <Donut
        kcal={item.kcal}
        objKcal={OBJ_KCAL}
        color={colors.orange}
        radius={45}
        strokeWidth={10}
      />

      <View style={styles.infoMeal}>
        <View style={styles.infoTop}>
          <View style={styles.infoTopSection}>
            <Text style={styles.textNumber}>{item.fat}</Text>
            <Text style={styles.text}>Fats</Text>
          </View>
          <View style={styles.separatorVertical} />
          <View style={styles.infoTopSection}>
            <Text style={styles.textNumber}>{item.carbs}</Text>
            <Text style={styles.text}>Carbs</Text>
          </View>
        </View>
        <View style={styles.separatorHorizontal} />
        <View style={styles.infoBottom}>
          <Text style={styles.textNumber}>{item.protein}</Text>
          <Text style={styles.text}>Proteins</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
