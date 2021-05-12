import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  dismissKeyboard: {
    flex: 1,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    paddingVertical: 13,
    backgroundColor: colors.background,
    borderRadius: 10,
    width: '48%',
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
    color: colors.green,
    textAlign: 'center',
  },
  backButton: {
    paddingVertical: 13,
    backgroundColor: colors.background,
    borderRadius: 10,
    width: '100%',
    shadowColor: colors.green,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  backButtonText: {
    fontFamily: 'PoppinsMedium',
    color: colors.green,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default class StepPersScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: '',
      maleEnabled: false,
      femaleEnabled: false,
    };
  }

  handleSubmitGender(type) {
    const { gender } = this.state;
    const { navigation, route } = this.props;
    const { height, weight, objWeight, age } = route.params;

    if (type === 'male') {
      this.setState({ gender: type, maleEnabled: true, femaleEnabled: false });
    } else if (type === 'female') {
      this.setState({ gender: type, femaleEnabled: true, maleEnabled: false });
    }
    navigation.navigate('StepFav', {
      height,
      weight,
      objWeight,
      gender,
      age,
    });
  }

  render() {
    const { navigation } = this.props;
    const { maleEnabled, femaleEnabled } = this.state;
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.dismissKeyboard}
      >
        <View style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => this.handleSubmitGender('male')}
                style={[
                  styles.button,
                  maleEnabled && { backgroundColor: colors.green },
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    maleEnabled && { color: colors.background },
                  ]}
                >
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.handleSubmitGender('female')}
                style={[
                  styles.button,
                  femaleEnabled && { backgroundColor: colors.green },
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    femaleEnabled && { color: colors.background },
                  ]}
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
