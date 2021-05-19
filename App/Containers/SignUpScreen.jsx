import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import firebase from 'firebase';

import { Ionicons } from '@expo/vector-icons';

import InputAuth from '../Components/InputAuth';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  dismissKeyboard: {
    flex: 1,
  },
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
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

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      isLoading: false,
    };
  }

  handleSubmitSignUp() {
    const { firstname, lastname, email, password } = this.state;
    const { navigation } = this.props;
    this.setState({ isLoading: true });

    if (firstname && lastname && email && password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const { user } = userCredential;
          user
            .updateProfile({
              displayName: `${firstname} ${lastname}`,
            })
            .then(
              () => {
                this.setState({ isLoading: false });
                navigation.navigate('StepObj', { user });
              },
              (error) =>
                Alert.alert('', error, [
                  {
                    text: 'Ok',
                    onPress: () => this.setState({ isLoading: false }),
                  },
                ])
            );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          switch (errorCode) {
            case 'auth/email-already-in-use':
              Alert.alert('', errorMessage, [
                {
                  text: 'Ok',
                  onPress: () => this.setState({ isLoading: false }),
                },
              ]);
              break;
            case 'auth/invalid-email':
              Alert.alert('', errorMessage, [
                {
                  text: 'Ok',
                  onPress: () => this.setState({ isLoading: false }),
                },
              ]);
              break;
            case 'auth/operation-not-allowed':
              Alert.alert('', errorMessage, [
                {
                  text: 'Ok',
                  onPress: () => this.setState({ isLoading: false }),
                },
              ]);
              break;
            case 'auth/weak-password':
              Alert.alert('', errorMessage, [
                {
                  text: 'Ok',
                  onPress: () => this.setState({ isLoading: false }),
                },
              ]);
              break;

            default:
              Alert.alert(errorCode, errorMessage, [
                {
                  text: 'Ok',
                  onPress: () => this.setState({ isLoading: false }),
                },
              ]);
              break;
          }
        });
    } else {
      Alert.alert('', 'Please be sure to fill all fields');
    }
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
        onPress={() => this.handleSubmitSignUp()}
      >
        <Text style={styles.signInButtonText}>Sign up</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          scrollEnabled={false}
        >
          <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
            style={styles.dismissKeyboard}
          >
            <KeyboardAvoidingView behavior='position'>
              <View style={styles.containerForm}>
                <View style={styles.header}>
                  <Text style={styles.title}>Smart Scale</Text>
                  <Text style={styles.subtitle}>
                    Become a Smart Scale member
                  </Text>
                </View>

                <InputAuth
                  label='Firstname'
                  placeholder='Your firstname'
                  textContentType='name'
                  keyboardType='default'
                  spellCheck={false}
                  onChangeText={(value) => this.setState({ firstname: value })}
                  icon={
                    <Ionicons
                      name='person-outline'
                      size={24}
                      color={colors.dark}
                    />
                  }
                />

                <InputAuth
                  label='Lastname'
                  placeholder='Your lastname'
                  textContentType='name'
                  keyboardType='default'
                  spellCheck={false}
                  onChangeText={(value) => this.setState({ lastname: value })}
                  icon={
                    <Ionicons
                      name='person-outline'
                      size={24}
                      color={colors.dark}
                    />
                  }
                />

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
                    <Ionicons
                      name='mail-outline'
                      size={24}
                      color={colors.dark}
                    />
                  }
                />

                <InputAuth
                  label='Password'
                  placeholder='•••••••••••'
                  textContentType='password'
                  secureTextEntry
                  keyboardType='default'
                  spellCheck={false}
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
                  <Text style={styles.text}>I&apos;m already a member.</Text>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('SignIn')}
                  >
                    <Text style={styles.textButton}>Sign In</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
