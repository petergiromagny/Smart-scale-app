import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import colors from '../Constants/colors';
import Donut from './Donut';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  itemContainerHome: {
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
  itemContainerMeal: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
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
    flexDirection: 'row',
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
  infoMealHome: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  infoMeal: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginHorizontal: 20,
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

const MealItem = ({ dataItem, navigation, mealScreen, calorieObjective }) => {
  const { item } = dataItem;

  return (
    <TouchableOpacity
      style={mealScreen ? styles.itemContainerMeal : styles.itemContainerHome}
      onPress={() =>
        navigation.navigate(mealScreen ? 'MealDetailScreen' : 'MealDetail', {
          item,
          calorieObjective,
        })
      }
    >
      <Donut
        kcal={item.kcal}
        objKcal={calorieObjective}
        color={colors.orange}
        radius={mealScreen ? 50 : 45}
        strokeWidth={10}
      />

      <View style={mealScreen ? styles.infoMeal : styles.infoMealHome}>
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
};

const mapStateToProps = (state) => ({
  calorieObjective: state.objectives.objCalorie,
});

export default connect(mapStateToProps)(MealItem);
