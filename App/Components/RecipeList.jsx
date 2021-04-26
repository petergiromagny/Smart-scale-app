import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import colors from '../Constants/colors';
import recipeData from '../Data/recipesAPI.json';
import RecipeItem from './RecipeItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default function RecipeList({ navigation, horizontalView }) {
  if (horizontalView) {
    return (
      <View style={styles.container}>
        <View style={styles.headerList}>
          <Text style={styles.headerTitle}>Recipes</Text>
          <TouchableOpacity
            style={styles.buttonAll}
            onPress={() => navigation.navigate('Recipes')}
          >
            <Text style={styles.textAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={recipeData}
          renderItem={(item) => (
            <RecipeItem
              data={item}
              navigation={navigation}
              horizontal={horizontalView}
            />
          )}
          keyExtractor={(item) => item.recipe.label}
          horizontal={horizontalView}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => <View style={styles.listContainer} />}
          ListFooterComponent={() => <View style={styles.listContainer} />}
          ItemSeparatorComponent={() => (
            <View style={{ marginHorizontal: 10 }} />
          )}
        />
      </View>
    );
  }
  return (
    <>
      <FlatList
        data={recipeData}
        renderItem={(item) => (
          <RecipeItem data={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.recipe.label}
        ListHeaderComponent={() => <View style={{ marginVertical: 5 }} />}
        ListFooterComponent={() => <View style={{ marginVertical: 5 }} />}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
      />
    </>
  );
}
