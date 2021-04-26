import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import numeral from 'numeral';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginVertical: 10,
    borderRadius: 10,
  },
  leftSide: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  imageHorizontal: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  arrowIcon: {
    marginLeft: 5,
    opacity: 0.5,
  },
  recipeName: {
    fontFamily: 'PoppinsBold',
    color: colors.green,
  },
  recipeInfo: {
    fontFamily: 'PoppinsMedium',
    color: colors.green,
  },
  leftSideText: {
    flex: 1,
  },
});

export default function RecipeItem({ data, navigation, horizontal }) {
  const { recipe } = data.item;
  const caloriesFormat = numeral(recipe.calories).format('0');
  const totalWeightFormat = numeral(recipe.totalWeight).format('0');

  if (horizontal) {
    return (
      <TouchableOpacity
        style={styles.containerHorizontal}
        onPress={() => navigation.navigate('RecipeDetailHome', { recipe })}
      >
        <View>
          <Image
            source={{ uri: recipe.image }}
            style={styles.imageHorizontal}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('RecipeDetail', { recipe })}
    >
      <View style={styles.leftSide}>
        <Image source={{ uri: recipe.image }} style={styles.image} />

        <View style={styles.leftSideText}>
          <Text style={styles.recipeName}>{recipe.label}</Text>
          <Text
            style={[
              styles.recipeInfo,
              { ...Platform.select({ android: { marginTop: -8 } }) },
            ]}
          >
            {`${totalWeightFormat}g`}
          </Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.recipeInfo}>{`${caloriesFormat} kcal`}</Text>
        <SimpleLineIcons
          name='arrow-right'
          size={20}
          color={colors.green}
          style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  );
}
