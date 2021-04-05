import React, { Component } from 'react';
import { Platform, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    fontSize: 20,
    marginVertical: 10,
    color: colors.dark,
  },
  nutritionInfo: {},
  nutritionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  nutritionImage: { width: 35, height: 35 },
  nutritionText: {
    fontFamily: 'PoppinsMedium',
    fontSize: 17,
    marginLeft: 15,
  },
  nutritionSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.green,
    opacity: 0.1,
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
          <View style={styles.nutritionInfo}>
            <View style={styles.nutritionRow}>
              <Image source={fatsIcon} style={styles.nutritionImage} />
              <Text style={styles.nutritionText}>{`Fats: ${item.fat}`}</Text>
            </View>
            <View style={styles.nutritionSeparator} />
            <View style={styles.nutritionRow}>
              <Image source={carbsIcon} style={styles.nutritionImage} />
              <Text style={styles.nutritionText}>{`Carbs: ${item.carbs}`}</Text>
            </View>
            <View style={styles.nutritionSeparator} />
            <View style={styles.nutritionRow}>
              <Image source={proteinsIcon} style={styles.nutritionImage} />
              <Text style={styles.nutritionText}>
                {`Proteins: ${item.protein}`}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.dateTime}>{`${item.date} - ${item.time}`}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
