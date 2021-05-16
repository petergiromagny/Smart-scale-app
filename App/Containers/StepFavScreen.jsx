import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { addObjAction } from '../Redux/Actions/objAction';

import SettingItem from '../Components/SettingItem';

import colors from '../Constants/colors';

import CalculateCalorie from '../Utils/CalculateCalorie';

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
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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

class StepFavScreen extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props;
  }

  componentDidMount() {
    const { route, dispatch } = this.props;
    const {
      height,
      weight,
      objWeight,
      gender,
      physicalActivity,
      age,
    } = route.params;

    const objCalorie = CalculateCalorie(
      gender,
      weight,
      height,
      age,
      physicalActivity
    );

    dispatch(addObjAction(height, weight, objWeight, objCalorie, age, gender));
  }

  handleSubmitStepFav() {
    const { navigation } = this.props;

    navigation.replace('Drawer');
  }

  render() {
    const { navigation } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.dismissKeyboard}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Choose your favorites food</Text>

          <SettingItem
            dataLabel='Vegetable'
            dataType='default'
            navigation={navigation}
            favoriteType
            stepSignUp
          />
          <SettingItem
            dataLabel='Fruit'
            dataType='default'
            navigation={navigation}
            favoriteType
            stepSignUp
          />
          <SettingItem
            dataLabel='Meat'
            dataType='default'
            navigation={navigation}
            favoriteType
            stepSignUp
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
              onPress={() => this.handleSubmitStepFav()}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => ({ allState: state });

export default connect(mapStateToProps)(StepFavScreen);
