import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../Constants/colors';
import mealData from '../Data/lastMeal.json';
import MealItem from './MealItem';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  footerComponent: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: width / 5,
    backgroundColor: colors.green,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={styles.footerComponent}
            onPress={() => console.log('TODO: Navigate to Last meals screen')}
          >
            <MaterialCommunityIcons
              name='arrow-right-bold-circle'
              size={40}
              color={colors.background}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
