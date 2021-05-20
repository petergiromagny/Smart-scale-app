import { Alert } from 'react-native';
import firebase from 'firebase';

export const setUserAccount = (
  email,
  password,
  firstname,
  lastname,
  navigation
) =>
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
          () => navigation.navigate('StepObj', { user }),
          (error) =>
            Alert.alert('', error, [
              {
                text: 'Ok',
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
            },
          ]);
          break;
        case 'auth/invalid-email':
          Alert.alert('', errorMessage, [
            {
              text: 'Ok',
            },
          ]);
          break;
        case 'auth/operation-not-allowed':
          Alert.alert('', errorMessage, [
            {
              text: 'Ok',
            },
          ]);
          break;
        case 'auth/weak-password':
          Alert.alert('', errorMessage, [
            {
              text: 'Ok',
            },
          ]);
          break;

        default:
          Alert.alert(errorCode, errorMessage, [
            {
              text: 'Ok',
            },
          ]);
          break;
      }
    });

export const getUserAccount = (email, password, navigation) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.replace('Drawer');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      switch (errorCode) {
        case 'auth/invalid-email':
          Alert.alert('', errorMessage, [
            {
              text: 'Ok',
            },
          ]);
          break;
        case 'auth/user-disabled':
          Alert.alert('', errorMessage, [
            {
              text: 'Ok',
            },
          ]);
          break;
        case 'auth/user-not-found':
          Alert.alert('', errorMessage, [
            {
              text: 'Ok',
            },
          ]);
          break;
        case 'auth/wrong-password':
          Alert.alert('', errorMessage, [
            {
              text: 'Ok',
            },
          ]);
          break;

        default:
          Alert.alert(errorCode, errorMessage);
          break;
      }
    });
