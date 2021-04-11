import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  FlatList,
  Image,
} from 'react-native';
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
  },
  ingredientSeparator: {
    marginVertical: 5,
  },
});

export default function IngredientsList({ ingredients }) {
  return (
    <View style={styles.ingredientsContainer}>
      <Text style={styles.title}>Ingredients</Text>
      <FlatList
        data={ingredients}
        renderItem={(item) => (
          <View style={styles.ingredientListContainer}>
            <Image
              source={{ uri: item.item.image }}
              style={styles.ingredientImage}
            />
            <Text style={styles.ingredientName}>{item.item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.foodId}
        ItemSeparatorComponent={() => (
          <View style={styles.ingredientSeparator} />
        )}
      />
    </View>
  );
}
