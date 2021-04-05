import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Avatar from '../Components/Avatar';
import Button from '../Components/Button';
import MealList from '../Components/MealList';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: 20,
  },
  text: { fontFamily: 'PoppinsMedium' },
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /** Add State */
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Avatar />
        <MealList horizontalView />
        <Button title='See all recipes' />
      </SafeAreaView>
    );
  }
}
