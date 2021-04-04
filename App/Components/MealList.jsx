import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import colors from '../Constants/colors';

import mealData from '../Data/lastMeal.json';
import MealItem from './MealItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: 10,
  },
});

export default function MealList(props) {
  const { horizontalView } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={mealData}
        renderItem={(item) => <MealItem dataItem={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal={horizontalView}
      />
    </View>
  );
}
