import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: colors.orange,
    fontFamily: 'PoppinsRegular',
    color: colors.background,
    overflow: 'hidden',
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    ...Platform.select({
      ios: {
        borderRadius: 10,
      },
      android: {
        borderRadius: 50,
      },
    }),
  },
});

export default function TagList({ data }) {
  return (
    <View style={styles.tagContainer}>
      {data.map((d) => (
        <Text style={styles.tag}>{d.charAt(0).toUpperCase() + d.slice(1)}</Text>
      ))}
    </View>
  );
}
