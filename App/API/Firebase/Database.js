import firebase from 'firebase';

export const setUserData = (uid, weight, height, objWeight, dailyCalorie) => {
  firebase.database().ref(`users/${uid}`).set({
    weight,
    height,
    objWeight,
    dailyCalorie,
  });
};

export const getUserData = (uid) => {
  const starCountRef = firebase.database().ref(`users/${uid}`);
  starCountRef.on('value', (snapchot) => {
    const data = snapchot.val();
    return data;
  });
};
