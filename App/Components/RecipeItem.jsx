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

import imageTest from '../Assets/Images/bolo.jpg';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginVertical: 10,
    marginHorizontal: 10,
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

export default function RecipeItem({ data }) {
  const { item } = data;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftSide}>
        <Image source={imageTest} style={styles.image} />

        <View style={styles.leftSideText}>
          <Text style={styles.recipeName}>{item.name}</Text>
          <Text
            style={[
              styles.recipeInfo,
              { ...Platform.select({ android: { marginTop: -8 } }) },
            ]}
          >
            150g
          </Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.recipeInfo}>{`${item.calories} kcal`}</Text>
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
