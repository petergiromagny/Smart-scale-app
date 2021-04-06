import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({});

export default function RecipeDetailScreen({ route }) {
  const { item } = route.params;
  return (
    <View>
      <Text>{`Detail of the recipe ${item.name}`}</Text>
    </View>
  );
}
