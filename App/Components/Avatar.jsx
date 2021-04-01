import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import ProfileImg from '../Assets/Images/Memoji.png';

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: 'center',
  },
  profileDrawer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15,
  },
  profileImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 15,
  },
  profileImgDrawer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 15,
  },
  profileName: {
    fontFamily: 'PoppinsBold',
    fontSize: 25,
    textAlign: 'center',
  },
  profileNameDrawer: {
    fontFamily: 'PoppinsBold',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default ({ drawerMode }) => {
  if (drawerMode) {
    return (
      <TouchableOpacity style={styles.profileDrawer}>
        <Image style={styles.profileImgDrawer} source={ProfileImg} />
        <Text style={styles.profileNameDrawer}>Peter Giromagny</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.profile}>
      <Image style={styles.profileImg} source={ProfileImg} />
      <Text style={styles.profileName}>Peter Giromagny</Text>
    </View>
  );
};
