import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';
import Recipes from '../Screens/Recipes';
import Meals from '../Screens/Meals';
import Settings from '../Screens/Settings';

const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>
);

export const RecipesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Recipes' component={Recipes} />
  </Stack.Navigator>
);

export const MealsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Meals' component={Meals} />
  </Stack.Navigator>
);

export const SettingsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Settings' component={Settings} />
  </Stack.Navigator>
);
