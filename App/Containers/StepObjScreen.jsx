import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import { addAction } from '../Redux/Actions/caloryAction';

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

class StepObjScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calories: '',
    };
  }

  handleSubmitStepObj() {
    const { navigation, dispatch } = this.props;
    const { calories } = this.state;

    dispatch(addAction(calories));

    navigation.navigate('StepFav');
  }

  render() {
    const { navigation } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.dismissKeyboard}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Your daily calorie objective</Text>
          <InputAuth
            label=''
            placeholder='2000'
            textContentType='none'
            keyboardType='number-pad'
            textAlign='center'
            autoCorrect={false}
            spellCheck={false}
            icon={<Text style={styles.inputKcal}>Kcal</Text>}
            maxLength={4}
            onChangeText={(value) => this.setState({ calories: value })}
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

const mapStateToProps = (state) => ({ calory: state.calory });

export default connect(mapStateToProps)(StepObjScreen);
