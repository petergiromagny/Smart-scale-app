import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import InputAuth from '../Components/InputAuth';

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
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputKcal: {
    fontFamily: 'PoppinsMedium',
    color: colors.green,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextButton: {
    paddingVertical: 13,
    marginTop: 20,
    backgroundColor: colors.green,
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
  nextButtonText: {
    fontFamily: 'PoppinsMedium',
    color: colors.background,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  backButton: {
    paddingVertical: 13,
    marginTop: 20,
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
  backButtonText: {
    fontFamily: 'PoppinsMedium',
    color: colors.green,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default class StepObjScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calories: '',
    };
  }

  handleSubmitStepObj() {
    const { navigation } = this.props;
    navigation.navigate('StepFav');
  }

  handleOnChange(value) {
    this.setState({ calories: value });
  }

  render() {
    const { navigation } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.dismissKeyboard}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Your daily calory objective</Text>
          <InputAuth
            label=''
            placeholder='2000'
            textContentType='none'
            keyboardType='number-pad'
            textAlign='center'
            icon={<Text style={styles.inputKcal}>Kcal</Text>}
            maxLength={4}
            onChangeText={(value) => this.handleOnChange(value)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => this.handleSubmitStepObj()}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
