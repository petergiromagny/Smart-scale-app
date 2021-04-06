import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    return (
      <SafeAreaView style={styles.container}>
        <RecipeList />
      </SafeAreaView>
    );
  }
}
