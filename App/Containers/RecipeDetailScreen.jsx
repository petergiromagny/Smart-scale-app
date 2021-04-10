import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import numeral from 'numeral';
import NutritionBar from '../Components/NutritionBar';

import imageTest from '../Assets/Images/bolo.jpg';
import colors from '../Constants/colors';
import TagList from '../Components/TagList';
import IngredientsList from '../Components/IngredientsList';

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipeImage: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: height / 3,
  },
  recipeInfo: {
    flex: 2,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  recipeTitle: {
    fontFamily: 'PoppinsMedium',
    fontSize: 24,
    color: colors.dark,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;
  const fatFormat = numeral(recipe.totalNutrients.FAT.quantity).format('0');
  const carbsFormat = numeral(recipe.totalNutrients.CHOCDF.quantity).format(
    '0'
  );
  const proteinFormat = numeral(recipe.totalNutrients.PROCNT.quantity).format(
    '0'
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.recipeImage}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
      </View>
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeTitle}>{recipe.label}</Text>
        <NutritionBar
          fats={fatFormat}
          carbs={carbsFormat}
          proteins={proteinFormat}
        />
        <IngredientsList ingredients={recipe.ingredients} />
      </View>
    </ScrollView>
  );
}
