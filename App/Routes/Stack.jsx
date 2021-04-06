import * as React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Home from '../Containers/HomeScreen';
import Recipes from '../Containers/RecipesScreen';
import Meals from '../Containers/MealsScreen';
import Settings from '../Containers/SettingsScreen';
import Hamburger from '../Components/Hamburger';
import MealDetailScreen from '../Containers/MealDetailScreen';
import RecipeDetailScreen from '../Containers/RecipeDetailScreen';
import BackButton from '../Components/BackButton';
import colors from '../Constants/colors';

const headerOptions = ({ navigation }) => ({
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

const HomeStackNavigator = createStackNavigator();
const RecipesStackNavigator = createStackNavigator();
const MealsStackNavigator = createStackNavigator();
const SettingsStackNavigator = createStackNavigator();

export const HomeStack = () => (
  <HomeStackNavigator.Navigator screenOptions={headerOptions} mode='modal'>
    <HomeStackNavigator.Screen
      name='Home'
      options={{ title: '' }}
      component={Home}
    />
    <HomeStackNavigator.Screen
      name='MealDetail'
      options={{ title: '', headerShown: false }}
      component={MealDetailScreen}
    />
  </HomeStackNavigator.Navigator>
);

export const RecipesStack = ({ navigation }) => (
  <RecipesStackNavigator.Navigator screenOptions={headerOptions}>
    <RecipesStackNavigator.Screen
      name='Recipes'
      options={{ title: '' }}
      component={Recipes}
    />
    <RecipesStackNavigator.Screen
      name='RecipeDetail'
      options={{
        title: '',
        headerLeft: () => <BackButton navigation={navigation} />,
      }}
      component={RecipeDetailScreen}
    />
  </RecipesStackNavigator.Navigator>
);

export const MealsStack = () => (
  <MealsStackNavigator.Navigator screenOptions={headerOptions}>
    <MealsStackNavigator.Screen
      name='Meals'
      options={{ title: '' }}
      component={Meals}
    />
  </MealsStackNavigator.Navigator>
);

export const SettingsStack = () => (
  <SettingsStackNavigator.Navigator screenOptions={headerOptions}>
    <SettingsStackNavigator.Screen
      name='Settings'
      options={{ title: '' }}
      component={Settings}
    />
  </SettingsStackNavigator.Navigator>
);
