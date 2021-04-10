import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

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
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Avatar />
        <MealList horizontalView navigation={navigation} />
        <Button
          title='See recipes'
          actionPress={() => navigation.navigate('Recipes')}
        />
      </View>
    );
  }
}
