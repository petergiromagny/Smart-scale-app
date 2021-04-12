import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SettingsContent from '../Components/SettingsContent';

import settingsIcon from '../Assets/Images/settingsWIcon.png';
import favoritesIcon from '../Assets/Images/favoritesWIcon.png';
import targetIcon from '../Assets/Images/targetWIcon.png';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginHorizontal: 10,
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
    return (
      <View style={styles.container}>
        <SettingsContent
          title='Account'
          subtitle='Informations about you in details'
          icon={settingsIcon}
        >
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
        </SettingsContent>
        <SettingsContent
          title='Objectif'
          subtitle='Informations about your objectif'
          icon={targetIcon}
        >
          <Text>Obj</Text>
          <Text>Obj</Text>
          <Text>Obj</Text>
          <Text>Obj</Text>
          <Text>Obj</Text>
        </SettingsContent>
        <SettingsContent
          title='Favorites'
          subtitle='Informations about your objectif'
          icon={favoritesIcon}
          last
        >
          <Text>Fav</Text>
          <Text>Fav</Text>
          <Text>Fav</Text>
          <Text>Fav</Text>
          <Text>Fav</Text>
        </SettingsContent>
      </View>
    );
  }
}
