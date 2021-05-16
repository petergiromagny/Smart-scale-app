import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';

import colors from '../Constants/colors';
import Donut from '../Components/Donut';

import fatsIcon from '../Assets/Images/fatsIcon.png';
import carbsIcon from '../Assets/Images/carbsIcon.png';
import proteinsIcon from '../Assets/Images/proteinsIcon.png';

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

export default class MealDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add state
    };
  }

  render() {
    const { route } = this.props;
    const { item, calorieObjective } = route.params;
    const dateFormat = moment(item.date, 'DD/MM/YYYY').format('DD MMM YYYY');

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.donutContainer}>
            <Donut
              kcal={item.kcal}
              objKcal={calorieObjective}
              color={colors.orange}
              radius={100}
              strokeWidth={15}
              donutAnimated
            />
          </View>
          <View style={styles.nutritionInfo}>
            <View style={styles.nutritionRow}>
              <Image source={fatsIcon} style={styles.nutritionImage} />
              <Text style={styles.nutritionText}>{item.fat}</Text>
            </View>
            <View style={styles.nutritionSeparator} />
            <View style={styles.nutritionRow}>
              <Image source={carbsIcon} style={styles.nutritionImage} />
              <Text style={styles.nutritionText}>{item.carbs}</Text>
            </View>
            <View style={styles.nutritionSeparator} />
            <View style={styles.nutritionRow}>
              <Image source={proteinsIcon} style={styles.nutritionImage} />
              <Text style={styles.nutritionText}>{item.protein}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.dateTime}>{`${dateFormat}, ${item.time}`}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
