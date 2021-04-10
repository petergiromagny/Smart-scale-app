import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  ingredientsContainer: {
    marginVertical: 20,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 17,
    color: colors.dark,
    marginBottom: 15,
  },
  ingredientName: {
    fontFamily: 'PoppinsRegular',
    color: colors.dark,
    ...Platform.select({ android: { marginBottom: 6 } }),
  },
});

export default function IngredientsList({ ingredients }) {
  console.log(ingredients);
  return (
    <View style={styles.ingredientsContainer}>
      <Text style={styles.title}>Ingredients</Text>
      {/* <FlatList
        data={ingredients}
        renderItem={(item) => (
          <Text style={styles.ingredientName}>{item.text}</Text>
        )}
        keyExtractor={(item) => item.foodId}
      /> */}
      {/* {ingredients.map((ingredient) => (
        <Text style={styles.ingredientName} key={ingredient.key}>
          {`- ${ingredient}`}
        </Text>
      ))} */}
    </View>
  );
}
