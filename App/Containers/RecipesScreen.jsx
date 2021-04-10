import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import RecipeList from '../Components/RecipeList';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Add State
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <RecipeList navigation={navigation} />
      </View>
    );
  }
}
