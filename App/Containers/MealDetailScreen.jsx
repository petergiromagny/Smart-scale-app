import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';

import colors from '../Constants/colors';
import Donut from '../Components/Donut';
import NutritionBar from '../Components/NutritionBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  donutContainer: {
    alignItems: 'center',
    ...Platform.select({ android: { marginTop: 20 } }),
  },
  dateTime: {
    textAlign: 'center',
    fontFamily: 'PoppinsMedium',
    fontSize: 16,
    ...Platform.select({ android: { marginVertical: 15 } }),
    color: colors.green,
  },
});

export default class MealDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Add State
    };
  }

  render() {
    const { route } = this.props;
    const { item, OBJ_KCAL } = route.params;
    const dateFormat = moment(item.date, 'DD/MM/YYYY').format('DD MMM YYYY');

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.donutContainer}>
            <Donut
              kcal={item.kcal}
              objKcal={OBJ_KCAL}
              color={colors.orange}
              radius={100}
              strokeWidth={15}
            />
          </View>
          <NutritionBar
            fats={item.fat}
            carbs={item.carbs}
            proteins={item.protein}
          />
        </View>
        <View>
          <Text style={styles.dateTime}>{`${dateFormat}, ${item.time}`}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
