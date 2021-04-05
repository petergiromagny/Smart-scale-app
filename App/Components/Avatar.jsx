import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import ProfileImg from '../Assets/Images/Memoji.png';
import colors from '../Constants/colors';

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
    width: 120,
    height: 120,
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
    color: colors.dark,
    textAlign: 'center',
  },
  profileNameDrawer: {
    fontFamily: 'PoppinsBold',
    fontSize: 15,
    color: colors.dark,
    textAlign: 'center',
  },
});

export default function Avatar({ drawerMode }) {
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
}
