import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

import colors from '../Constants/colors';
import mealData from '../Data/lastMeal.json';
import MealItem from './MealItem';

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerTitle: {
    fontFamily: 'PoppinsMedium',
    fontSize: 17,
  },
  buttonAll: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: colors.green,
  },
  textAll: {
    fontFamily: 'PoppinsRegular',
    color: colors.background,
  },
});

export default function MealList(props) {
  const { horizontalView, navigation } = props;

  if (!horizontalView) {
    return (
      <FlatList
        data={mealData}
        renderItem={(item) => (
          <MealItem dataItem={item} navigation={navigation} mealScreen />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerList}>
        <Text style={styles.headerTitle}>Last meals</Text>
        <TouchableOpacity
          style={styles.buttonAll}
          onPress={() => navigation.navigate('Meals')}
        >
          <Text style={styles.textAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={mealData}
        renderItem={(item) => (
          <MealItem dataItem={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={horizontalView}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
