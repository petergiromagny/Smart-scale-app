import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../Constants/colors';
import Donut from './Donut';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default function MealDetail(props) {
  const { route } = props;
  const { item, OBJ_KCAL } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Donut kcal={item.kcal} objKcal={OBJ_KCAL} color={colors.orange} />
    </SafeAreaView>
  );
}
