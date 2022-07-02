import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import mealAfterScan from '../Data/mealAfterScan.json';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontFamily: 'PoppinsRegular',
  },
  itemSeparator: {
    marginVertical: 10,
    height: 1,
    backgroundColor: colors.greenOpacity,
  },
  addButton: {
    paddingVertical: 13,
    backgroundColor: colors.background,
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
  addText: {
    fontFamily: 'PoppinsMedium',
    color: colors.green,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
  },
  nextButton: {
    paddingVertical: 13,
    backgroundColor: colors.green,
    borderRadius: 10,
    width: '48%',
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  nextButtonText: {
    fontFamily: 'PoppinsMedium',
    color: colors.background,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  backButton: {
    paddingVertical: 13,
    backgroundColor: colors.background,
    borderRadius: 10,
    width: '48%',
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  backButtonText: {
    fontFamily: 'PoppinsMedium',
    color: colors.green,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default class ScanResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: mealAfterScan,
    };
  }

  handleAddMeal() {
    const { navigation } = this.props;
    // eslint-disable-next-line no-console
    console.log('Meals added');
    navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const { foods } = this.state;

    const handleDeleteFood = (item) =>
      Alert.alert(
        `Delete ${item}`,
        'You are sure to delete this food element ?',
        [
          {
            text: 'No',
            // eslint-disable-next-line no-console
            onPress: () => console.log(`${item} is gonna be saved`),
            style: 'cancel',
          },
          {
            text: 'Yes',
            // eslint-disable-next-line no-console
            onPress: () => console.log(`${item} is deleted`),
          },
        ]
      );

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={foods}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item}</Text>
                <TouchableOpacity onPress={() => handleDeleteFood(item)}>
                  <Entypo name='cross' size={30} color={colors.dark} />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => `${item.toLowerCase()}_${index}`}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('ScanAdd')}
          >
            <Text style={styles.addText}>Add food</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => this.handleAddMeal()}
          >
            <Text style={styles.nextButtonText}>Validate</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
