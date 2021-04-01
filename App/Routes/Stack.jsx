import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Containers/Home';
import Recipes from '../Containers/Recipes';
import Meals from '../Containers/Meals';
import Settings from '../Containers/Settings';
import colors from '../Constants/colors';
import Hamburger from '../Components/Hamburger';

const headerOptions = ({ navigation }) => ({
  headerMode: 'none',
  headerStyle: {
    backgroundColor: colors.background,
    shadowOpacity: 0,
    elevation: 0,
  },
  headerLeftContainerStyle: { marginLeft: 20 },
  headerTintColor: colors.orange,
  headerTitleAlign: 'center',
  headerLeft: () => (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Hamburger />
    </TouchableOpacity>
  ),
});

const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator screenOptions={headerOptions}>
    <Stack.Screen name='Home' options={{ title: '' }} component={Home} />
  </Stack.Navigator>
);

export const RecipesStack = () => (
  <Stack.Navigator screenOptions={headerOptions}>
    <Stack.Screen name='Recipes' options={{ title: '' }} component={Recipes} />
  </Stack.Navigator>
);

export const MealsStack = () => (
  <Stack.Navigator screenOptions={headerOptions}>
    <Stack.Screen name='Meals' options={{ title: '' }} component={Meals} />
  </Stack.Navigator>
);

export const SettingsStack = () => (
  <Stack.Navigator screenOptions={headerOptions}>
    <Stack.Screen
      name='Settings'
      options={{ title: '' }}
      component={Settings}
    />
  </Stack.Navigator>
);
