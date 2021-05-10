import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Platform,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';

/**
 * @import Fonts
 */
import PopRegular from './Assets/Font/Poppins-Regular.ttf';
import PopMediumItalic from './Assets/Font/Poppins-MediumItalic.ttf';
import PopMedium from './Assets/Font/Poppins-Medium.ttf';
import PopBoldItalic from './Assets/Font/Poppins-BoldItalic.ttf';
import PopBold from './Assets/Font/Poppins-Bold.ttf';

/**
 * @import Components
 */
import colors from './Constants/colors';
import Main from './Routes/Main';

/**
 * @import Redux Store
 */
import store from './Redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerLoading: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontFamily: 'PoppinsMedium' },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.barColor = 'light';
    this.state = { fontsLoaded: false };
  }

  async componentDidMount() {
    if (Platform.OS === 'ios') {
      this.barColor = 'dark';
    }
    await Font.loadAsync({
      PoppinsRegular: PopRegular,
      PoppinsMediumItalic: PopMediumItalic,
      PoppinsMedium: PopMedium,
      PoppinsBoldItalic: PopBoldItalic,
      PoppinsBold: PopBold,
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    const { fontsLoaded } = this.state;

    if (!fontsLoaded) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator color={colors.green} size={50} />
        </View>
      );
    }

    return (
      <Provider store={store}>
        <SafeAreaProvider style={styles.container}>
          <StatusBar
            barStyle={
              Platform.OS === 'android' ? 'light-content' : 'dark-content'
            }
            translucent
          />
          <Main />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
