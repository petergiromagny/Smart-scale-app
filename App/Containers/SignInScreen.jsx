import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputAuth from '../Components/InputAuth';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
    backgroundColor: colors.background,
  },
});

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add state
    };
  }

  render() {
    // const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <InputAuth label='Email' placeholder='peter.giromagny@me.com' />
        <InputAuth label='Password' placeholder='***********' />
        <Text>I'm new user.</Text>
        <Button title='Sign Up' />
      </SafeAreaView>
    );
  }
}
