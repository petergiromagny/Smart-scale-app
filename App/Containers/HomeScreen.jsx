import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealList from '../Components/MealList';
import RecipeList from '../Components/RecipeList';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: 20,
  },
  homeHeader: {
    flex: 1,
    justifyContent: 'center',
  },
  text: { fontFamily: 'PoppinsBold', textAlign: 'center', fontSize: 30 },
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /** Add State */
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.homeHeader}>
          <Text style={styles.text}>Smart Scale</Text>
        </View>
        <MealList horizontalView navigation={navigation} />
        <RecipeList horizontalView navigation={navigation} />
        {/*         <Button
          title='See recipes'
          actionPress={() => navigation.navigate('Recipes')}
        /> */}
      </View>
    );
  }
}
