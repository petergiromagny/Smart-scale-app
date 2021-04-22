import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
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
  },
});

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Add State
    };
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
          />
          <SettingItem
            dataLabel='Fruit'
            dataInput='Kiwi'
            dataType='default'
            navigation={navigation}
          />
          <SettingItem
            dataLabel='Meat'
            dataInput='Beef'
            dataType='default'
            navigation={navigation}
          />
        </SettingsContent>
      </ScrollView>
    );
  }
}
