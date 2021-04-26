import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';

import colors from '../Constants/colors';

// Import data
import fruit from '../Data/fruit.json';
import vegetable from '../Data/vegetable.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  label: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'PoppinsMedium',
  },
  listContainer: {
    marginVertical: 20,
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  itemText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
    color: colors.dark,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    borderRadius: 10,
    width: '48%',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
  },
  indicator: {
    marginTop: 20,
  },
});

export default function FavIngrList({ label, navigation, data }) {
  /**
   * @var dataSet : all favorite by type of food
   * @var dataSelected : all favorites food selected
   */
  const [dataSet, setDataSet] = useState();
  const [dataSelected, setDataSelected] = useState(data);

  // Init dataSet for FlatList
  useEffect(() => {
    if (label.toLowerCase() === 'fruit') {
      setDataSet(fruit);
    } else if (label.toLowerCase() === 'vegetable') {
      setDataSet(vegetable);
    } else if (label.toLowerCase() === 'meat') {
      setDataSet('futur meat list');
    }
  }, []);

  // Add SVG Circle to check radio button
  const favoriteActivated = (item) => {
    if (dataSelected.includes(item)) {
      return <Circle cx='50' cy='50' r='30' fill={colors.orange} />;
    }
    return null;
  };

  // Add and remove ingredient to favorites
  const handleFavorite = (item) => {
    if (dataSelected.includes(item)) {
      const dataSelectedFiltered = dataSelected.filter((i) => i !== item);
      setDataSelected(dataSelectedFiltered);
    } else if (!dataSelected.includes(item)) {
      setDataSelected((actualData) => [...actualData, item]);
    }
  };

  const updateDataSet = () => {
    console.log(dataSelected);
    navigation.goBack();
  };

  // RenderItem component
  const renderItemComponent = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => handleFavorite(item)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Text>
        <Svg height='100%' width='50%' viewBox='-40 0 100 100'>
          <Circle
            cx='50'
            cy='50'
            r='45'
            stroke={colors.green}
            strokeWidth='7'
            fill='transparent'
          />
          {favoriteActivated(item.toLowerCase())}
        </Svg>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={dataSet}
          renderItem={renderItemComponent}
          keyExtractor={(index) => index}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: colors.background, elevation: 5 },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.buttonText, { color: colors.green }]}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: colors.green, elevation: 5 },
          ]}
          onPress={() => updateDataSet()}
        >
          <Text style={[styles.buttonText, { color: colors.background }]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
