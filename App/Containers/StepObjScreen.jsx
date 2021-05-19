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
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,
  },
  inputKcal: {
    position: 'absolute',
    right: 20,
    fontFamily: 'PoppinsMedium',
    color: colors.green,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  nextButton: {
    paddingVertical: 13,
    backgroundColor: colors.green,
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
  nextButtonText: {
    fontFamily: 'PoppinsMedium',
    color: colors.background,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default class StepObjScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      height: '',
      weight: '',
      objWeight: '',
    };
  }

  handleSubmitStepObj() {
    const { navigation } = this.props;
    const { height, weight, objWeight, age } = this.state;

    navigation.navigate('StepPers', { height, weight, objWeight, age });
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.dismissKeyboard}
      >
        <View style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <Text style={styles.title}>Tell us more about yourself...</Text>
            <InputAuth
              label='Height'
              placeholder='170'
              textContentType='none'
              keyboardType='number-pad'
              textAlign='center'
              autoCorrect={false}
              spellCheck={false}
              icon={<Text style={styles.inputKcal}>cm</Text>}
              maxLength={3}
              onChangeText={(value) => this.setState({ height: value })}
            />
            <InputAuth
              label='Weight'
              placeholder='80'
              textContentType='none'
              keyboardType='number-pad'
              textAlign='center'
              autoCorrect={false}
              spellCheck={false}
              icon={<Text style={styles.inputKcal}>kg</Text>}
              maxLength={3}
              onChangeText={(value) => this.setState({ weight: value })}
            />
            <InputAuth
              label='Objective weight'
              placeholder='75'
              textContentType='none'
              keyboardType='number-pad'
              textAlign='center'
              autoCorrect={false}
              spellCheck={false}
              icon={<Text style={styles.inputKcal}>kg</Text>}
              maxLength={3}
              onChangeText={(value) => this.setState({ objWeight: value })}
            />

            <InputAuth
              label='Age'
              placeholder='35'
              textContentType='none'
              keyboardType='number-pad'
              textAlign='center'
              autoCorrect={false}
              spellCheck={false}
              maxLength={2}
              onChangeText={(value) => this.setState({ age: value })}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => this.handleSubmitStepObj()}
              >
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
