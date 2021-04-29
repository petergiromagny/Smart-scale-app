import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import SettingsContent from '../Components/SettingsContent';

import settingsIcon from '../Assets/Images/settingsWIcon.png';
import favoritesIcon from '../Assets/Images/favoritesWIcon.png';
import targetIcon from '../Assets/Images/targetWIcon.png';
import colors from '../Constants/colors';
import SettingItem from '../Components/SettingItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginHorizontal: 10,
    paddingBottom: 30,
    ...(Platform.OS === 'ios' ? { marginTop: 15 } : {}),
  },
  signOutButton: {
    marginTop: 10,
    backgroundColor: colors.green,
    borderRadius: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signOutButtonText: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
    color: colors.background,
    textAlign: 'center',
    marginRight: 10,
  },
});

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Add State
    };
  }

  handleSignOut() {
    const { navigation } = this.props;
    navigation.replace('Auth');
    console.log('Sign out');
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <SettingsContent
          title='Account'
          subtitle='Informations about you in details'
          icon={settingsIcon}
        >
          <SettingItem
            dataLabel='Name'
            dataInput='Peter Giromagny'
            dataType='default'
            navigation={navigation}
          />
          <SettingItem
            dataLabel='Email'
            dataInput='peter.giromagny@me.com'
            dataType='email-address'
            navigation={navigation}
          />
          <SettingItem
            dataLabel='Phone'
            dataInput='0682056052'
            maxNumber={14}
            dataType='phone-pad'
            navigation={navigation}
          />
        </SettingsContent>
        <SettingsContent
          title='Objectives'
          subtitle='Informations about your objectif'
          icon={targetIcon}
        >
          <SettingItem
            dataLabel='Calories'
            dataInput='1580'
            maxNumber={4}
            dataType='number-pad'
            navigation={navigation}
          />
        </SettingsContent>
        <SettingsContent
          title='Favorites'
          subtitle='Informations about your objectif'
          icon={favoritesIcon}
        >
          <SettingItem
            dataLabel='Vegetable'
            dataInput='Peas'
            dataType='default'
            navigation={navigation}
            favouriteType
          />
          <SettingItem
            dataLabel='Fruit'
            dataInput='Kiwi'
            dataType='default'
            navigation={navigation}
            favouriteType
          />
          <SettingItem
            dataLabel='Meat'
            dataInput='Beef'
            dataType='default'
            navigation={navigation}
            favouriteType
          />
        </SettingsContent>
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => this.handleSignOut()}
        >
          <Text style={styles.signOutButtonText}>Sign Out</Text>
          <MaterialIcons name='logout' size={24} color={colors.background} />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
