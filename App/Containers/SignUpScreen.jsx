import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputAuth from '../Components/InputAuth';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default class SignUpScreen extends Component {
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
        <Text>I`m already a member.</Text>
        <Button title='Sign In' />
      </SafeAreaView>
    );
  }
}
