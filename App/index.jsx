import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

import colors from './Constants/colors';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      PoppinsRegular: require('./Assets/Font/Poppins-Regular.ttf'),
      PoppinsMediumItalic: require('./Assets/Font/Poppins-MediumItalic.ttf'),
      PoppinsMedium: require('./Assets/Font/Poppins-Medium.ttf'),
      PoppinsBoldItalic: require('./Assets/Font/Poppins-BoldItalic.ttf'),
      PoppinsBold: require('./Assets/Font/Poppins-Bold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator color={colors.green} size={50} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLoading: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'PoppinsMedium',
  },
});
