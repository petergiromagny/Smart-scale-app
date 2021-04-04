import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import moment from 'moment';

import colors from '../Constants/colors';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: width / 2.5,
    backgroundColor: colors.green,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'PoppinsRegular',
    color: colors.background,
  },
});

export default function MealItem({ dataItem }) {
  const { item } = dataItem;
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => console.log('TODO: Open meal modal')}
    >
      <Text style={styles.text}>{`${item.kcal} Kcal`}</Text>
      <Text style={styles.text}>{item.time}</Text>
      <Text style={styles.text}>{moment(item.date).format('L')}</Text>
    </TouchableOpacity>
  );
}
