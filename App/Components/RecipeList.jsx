import React from 'react';
import { FlatList } from 'react-native';

import recipeData from '../Data/recipesAPI.json';
import RecipeItem from './RecipeItem';

export default function RecipeList(props) {
  const { navigation } = props;
  return (
    <>
      <FlatList
        data={recipeData}
        renderItem={(item) => (
          <RecipeItem data={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.recipe.label}
      />
    </>
  );
}
