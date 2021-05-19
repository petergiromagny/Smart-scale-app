import * as firebase from 'firebase';
import firebaseConfig from '../Keys/FirebaseConfig';

if (firebase.app.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
