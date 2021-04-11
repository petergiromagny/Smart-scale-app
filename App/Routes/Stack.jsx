import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

import Home from '../Containers/HomeScreen';
import Recipes from '../Containers/RecipesScreen';
import Meals from '../Containers/MealsScreen';
import Settings from '../Containers/SettingsScreen';
import RecipeDetailScreen from '../Containers/RecipeDetailScreen';
import Hamburger from '../Components/Hamburger';
import BackButton from '../Components/BackButton';
import colors from '../Constants/colors';

const headerOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: colors.background,
    shadowOpacity: 0,
    elevation: 0,
  },
  cardStyle: { backgroundColor: colors.background },
  headerLeftContainerStyle: { marginLeft: 20 },
  headerTintColor: colors.orange,
  headerTitleAlign: 'center',
  headerLeft: () => (
    <TouchableOpacity onPress={navigation.openDrawer}>
      <Hamburger />
    </TouchableOpacity>
  ),
});

const HomeStackNavigator = createStackNavigator();
const RecipesStackNavigator = createStackNavigator();
const MealsStackNavigator = createStackNavigator();
const SettingsStackNavigator = createStackNavigator();

export const HomeStack = () => (
  <HomeStackNavigator.Navigator screenOptions={headerOptions}>
    <HomeStackNavigator.Screen
      name='Home'
      options={{ title: '' }}
      component={Home}
    />
  </HomeStackNavigator.Navigator>
);

export const RecipesStack = () => (
  <RecipesStackNavigator.Navigator screenOptions={headerOptions}>
    <RecipesStackNavigator.Screen
      name='Recipes'
      options={{ title: '' }}
      component={Recipes}
    />
    <RecipesStackNavigator.Screen
      name='RecipeDetail'
      options={() => ({
        title: '',
        headerTransparent: true,
        headerTruncatedBackTitle: '',
        headerBackImage: () => <BackButton />,
        headerLeft: (props) => (
          <HeaderBackButton {...props} style={{ marginHorizontal: 0 }} />
        ),
        gestureEnabled: true,
      })}
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
