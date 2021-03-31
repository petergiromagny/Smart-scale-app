import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontFamily: 'PoppinsMedium',
  },
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add State
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>This is the Home Page</Text>
      </SafeAreaView>
    );
  }
}
