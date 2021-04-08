import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import MealDetailScreen from '../Containers/MealDetailScreen';
import DrawerRoutes from './Drawer';
import colors from '../Constants/colors';

const MainStackNavigator = createStackNavigator();

const headerOptions = () => ({
  headerStyle: {
    backgroundColor: colors.background,
    shadowOpacity: 0,
    elevation: 0,
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
    <MainStackNavigator.Navigator
      mode='modal'
      headerMode='none'
      screenOptions={headerOptions}
    >
      <MainStackNavigator.Screen name='Drawer' component={DrawerRoutes} />
      <MainStackNavigator.Screen
        name='MealDetail'
        component={MealDetailScreen}
      />
    </MainStackNavigator.Navigator>
  </NavigationContainer>
);

export default MainStack;
