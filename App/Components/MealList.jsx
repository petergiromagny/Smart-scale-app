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
import ScanButton from './ScanButton';

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
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
  listContainer: {
    marginHorizontal: 10,
  },
  scanTitle: {
    fontFamily: 'PoppinsMedium',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 25,
  },
});

export default function MealList(props) {
  const { horizontalView, navigation } = props;

  if (mealData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.scanTitle}>
          Start the Smart Scale experience scan your first meal.
        </Text>
        <ScanButton navigation={navigation} />
      </View>
    );
  }

  // Basic FlatList for LastMealScreen
  if (!horizontalView) {
    return (
      <FlatList
        data={mealData}
        renderItem={(item) => (
          <MealItem dataItem={item} navigation={navigation} mealScreen />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <View style={{ marginVertical: 10 }} />}
        ListFooterComponent={() => <View style={{ marginVertical: 10 }} />}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
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
        ListHeaderComponent={() => <View style={{ marginHorizontal: 10 }} />}
        ListFooterComponent={() => <View style={{ marginHorizontal: 10 }} />}
        ItemSeparatorComponent={() => <View style={{ marginHorizontal: 10 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
