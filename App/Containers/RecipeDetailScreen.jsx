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

import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Constants/colors';
import IngredientsList from '../Components/IngredientsList';
import NutritionInfo from '../Components/NutritionInfo';

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
    fontFamily: 'PoppinsBold',
    fontSize: 24,
    color: colors.green,
    marginBottom: 10,
  },
  recipeSubTitle: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
    color: colors.dark,
    marginBottom: 5,
  },
  nutritionInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;
  const caloriesFormat = numeral(
    recipe.totalNutrients.ENERC_KCAL.quantity
  ).format('0');
  const fatFormat = numeral(recipe.totalNutrients.FAT.quantity).format('0');
  const carbsFormat = numeral(recipe.totalNutrients.CHOCDF.quantity).format(
    '0'
  );
  const proteinFormat = numeral(recipe.totalNutrients.PROCNT.quantity).format(
    '0'
  );
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.recipeImage}>
          <Image source={{ uri: recipe.image }} style={styles.image} />
        </View>
        <View style={styles.recipeInfo}>
          <Text style={styles.recipeTitle}>{recipe.label}</Text>
          <Text style={styles.recipeSubTitle}>Nutritions</Text>
          <View style={styles.nutritionInfoContainer}>
            <NutritionInfo
              label='Calories'
              quantity={caloriesFormat}
              unit={recipe.totalNutrients.ENERC_KCAL.unit}
            />
            <NutritionInfo
              label={recipe.totalNutrients.FAT.label}
              quantity={fatFormat}
              unit={recipe.totalNutrients.FAT.unit}
            />
            <NutritionInfo
              label={recipe.totalNutrients.CHOCDF.label}
              quantity={carbsFormat}
              unit={recipe.totalNutrients.CHOCDF.unit}
            />
            <NutritionInfo
              label={recipe.totalNutrients.PROCNT.label}
              quantity={proteinFormat}
              unit={recipe.totalNutrients.PROCNT.unit}
            />
          </View>
          <IngredientsList ingredients={recipe.ingredients} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
