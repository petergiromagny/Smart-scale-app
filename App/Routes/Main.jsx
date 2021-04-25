import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import MealDetailScreen from '../Containers/MealDetailScreen';
import SettingDetailScreen from '../Containers/SettingDetailScreen';
import CloseButton from '../Components/CloseButton';
import DrawerRoutes from './Drawer';
import colors from '../Constants/colors';

const MainStackNavigator = createStackNavigator();

const headerOptions = () => ({
  headerStyle: {
    backgroundColor: colors.background,
    shadowOpacity: 0,
    elevation: 0,
    height: 50,
  },
  gestureEnabled: true,
  cardStyle: { backgroundColor: colors.background },
  cardOverlayEnabled: true,
  ...Platform.select({
    ios: {
      ...TransitionPresets.ModalPresentationIOS,
    },
    android: {
      ...TransitionPresets.RevealFromBottomAndroid,
    },
  }),
});

const MainStack = () => (
  <NavigationContainer>
    <MainStackNavigator.Navigator mode='modal' screenOptions={headerOptions}>
      <MainStackNavigator.Screen
        name='Drawer'
        component={DrawerRoutes}
        options={{ headerShown: false }}
      />
      <MainStackNavigator.Screen
        name='MealDetail'
        component={MealDetailScreen}
        options={({ navigation }) => ({
          title: '',
          headerLeft: () => <CloseButton navigation={navigation} />,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
        })}
      />
      <MainStackNavigator.Screen
        name='SettingDetailScreen'
        component={SettingDetailScreen}
        options={{ headerShown: false }}
      />
    </MainStackNavigator.Navigator>
  </NavigationContainer>
);

export default MainStack;
