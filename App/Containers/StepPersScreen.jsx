import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import RadioButton from '../Components/RadioButton';

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
    marginBottom: 20,
  },
  physicalContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
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

export default class StepPersScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: '',
      physicalActivity: '',
      maleEnabled: false,
      femaleEnabled: false,
      sedentaryEnabled: false,
      lightEnabled: false,
      moderateEnabled: false,
      intenseEnabled: false,
    };
  }

  handleSubmitStepPers() {
    const { gender, physicalActivity } = this.state;
    const { navigation, route } = this.props;
    const { height, weight, objWeight, age } = route.params;

    navigation.navigate('StepFav', {
      height,
      weight,
      objWeight,
      gender,
      physicalActivity,
      age,
    });
  }

  handleGender(type) {
    if (type === 'male') {
      this.setState({ gender: type, maleEnabled: true, femaleEnabled: false });
    } else if (type === 'female') {
      this.setState({ gender: type, femaleEnabled: true, maleEnabled: false });
    }
  }

  handleRadioCheck(physicalActivity) {
    switch (physicalActivity) {
      case 'sedentary':
        this.setState({
          sedentaryEnabled: true,
          lightEnabled: false,
          moderateEnabled: false,
          intenseEnabled: false,
          physicalActivity,
        });
        break;
      case 'light':
        this.setState({
          sedentaryEnabled: false,
          lightEnabled: true,
          moderateEnabled: false,
          intenseEnabled: false,
          physicalActivity,
        });
        break;
      case 'moderate':
        this.setState({
          sedentaryEnabled: false,
          lightEnabled: false,
          moderateEnabled: true,
          intenseEnabled: false,
          physicalActivity,
        });
        break;
      case 'intense':
        this.setState({
          sedentaryEnabled: false,
          lightEnabled: false,
          moderateEnabled: false,
          intenseEnabled: true,
          physicalActivity,
        });
        break;

      default:
        break;
    }
  }

  render() {
    const { navigation } = this.props;
    const {
      maleEnabled,
      femaleEnabled,
      sedentaryEnabled,
      lightEnabled,
      moderateEnabled,
      intenseEnabled,
    } = this.state;
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.dismissKeyboard}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Your physical activity and gender</Text>
          <View style={styles.physicalContainer}>
            <RadioButton
              text='Sedentary'
              activeCheck={() => this.handleRadioCheck('sedentary')}
              checked={sedentaryEnabled}
            />
            <RadioButton
              text='Light'
              activeCheck={() => this.handleRadioCheck('light')}
              checked={lightEnabled}
            />
            <RadioButton
              text='Moderate'
              activeCheck={() => this.handleRadioCheck('moderate')}
              checked={moderateEnabled}
            />
            <RadioButton
              text='Intense'
              activeCheck={() => this.handleRadioCheck('intense')}
              checked={intenseEnabled}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.handleGender('male')}
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
              onPress={() => this.handleGender('female')}
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
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => this.handleSubmitStepPers()}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
