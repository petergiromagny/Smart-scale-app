import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Alert,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { getUserAccount } from '../API/Firebase/Auth';

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
  header: {
    marginBottom: 30,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 25,
  },
  subtitle: {
    fontFamily: 'PoppinsRegular',
    fontSize: 18,
    marginTop: 10,
  },
  newUser: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
  },
  textButton: {
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
    color: colors.orange,
    marginLeft: 10,
  },
  signInButton: {
    paddingVertical: 13,
    marginTop: 20,
    backgroundColor: colors.green,
    borderRadius: 10,
  },
  signInButtonText: {
    fontFamily: 'PoppinsMedium',
    color: colors.background,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  handleSubmitSignIn() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    this.setState({ isLoading: true });

    getUserAccount(email, password, navigation).then(() =>
      this.setState({ isLoading: false })
    );
  }

  displayLoading() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={styles.signInButton}>
          <ActivityIndicator color={colors.background} />
        </View>
      );
    }
    return (
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => this.handleSubmitSignIn()}
      >
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.dismissKeyboard}
      >
        <View style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.header}>
              <Text style={styles.title}>Smart Scale</Text>
              <Text style={styles.subtitle}>
                Login to your personal Smart Scale
              </Text>
            </View>

            <InputAuth
              label='E-Mail'
              placeholder='youremail@gmail.com'
              textContentType='emailAddress'
              keyboardType='email-address'
              autoCorrect={false}
              spellCheck={false}
              autoCapitalize='none'
              onChangeText={(value) => this.setState({ email: value })}
              icon={
                <Ionicons name='mail-outline' size={24} color={colors.dark} />
              }
            />

            <InputAuth
              label='Password'
              placeholder='•••••••••••'
              textContentType='password'
              secureTextEntry
              keyboardType='default'
              onChangeText={(value) => this.setState({ password: value })}
              icon={
                <Ionicons
                  name='lock-closed-outline'
                  size={24}
                  color={colors.dark}
                />
              }
            />

            {this.displayLoading()}

            <View style={styles.newUser}>
              <Text style={styles.text}>I&apos;m new user.</Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={styles.textButton}>Sign Up</Text>
              </TouchableWithoutFeedback>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
