import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  ingredientsContainer: {
    marginVertical: 20,
  },
  title: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
    color: colors.dark,
    marginBottom: 5,
  },
  ingredientName: {
    fontFamily: 'PoppinsRegular',
    color: colors.dark,
    ...Platform.select({ android: { marginBottom: 6 } }),
  },
  ingredientImage: { width: 50, height: 50, borderRadius: 10, marginRight: 10 },
  ingredientListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default function IngredientsList({ ingredients }) {
  return (
    <View style={styles.ingredientsContainer}>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <View style={styles.ingredientListContainer} key={ingredient.foodId}>
          <Image
            source={{
              uri: ingredient.image,
            }}
            style={styles.ingredientImage}
          />
          <Text style={styles.ingredientName}>
            {ingredient.text.charAt(0).toUpperCase() + ingredient.text.slice(1)}
          </Text>
        </View>
      ))}
    </View>
  );
}
