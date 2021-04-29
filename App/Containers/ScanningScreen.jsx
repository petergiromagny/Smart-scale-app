import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ScanButton from '../Components/ScanButton';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'PoppinsMedium',
    fontSize: 25,
    color: colors.orange,
  },
});

export default class ScanningScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add state
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScanButton navigation={navigation} />
      </View>
    );
  }
}
