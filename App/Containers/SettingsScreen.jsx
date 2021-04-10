import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Add State
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> This is the Settings Page </Text>
      </View>
    );
  }
}
