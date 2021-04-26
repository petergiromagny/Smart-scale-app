import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  HeaderBackButton,
  TransitionPresets,
} from '@react-navigation/stack';

import Home from '../Containers/HomeScreen';
import Meals from '../Containers/MealsScreen';
import MealDetailScreen from '../Containers/MealDetailScreen';
import Recipes from '../Containers/RecipesScreen';
import RecipeDetailScreen from '../Containers/RecipeDetailScreen';
import Settings from '../Containers/SettingsScreen';
import SignIn from '../Containers/SignInScreen';
import SignUp from '../Containers/SignUpScreen';

import Avatar from '../Components/Avatar';
import Hamburger from '../Components/Hamburger';
import BackButton from '../Components/BackButton';
import colors from '../Constants/colors';

const headerOptions = ({ navigation, route }) => ({
  headerStyle: {
    backgroundColor: colors.background,
    shadowOpacity: 0,
    height: 80,
    elevation: 0,
  },
  cardStyle: { backgroundColor: colors.background },
  headerLeftContainerStyle: { marginLeft: 20 },
  headerTintColor: colors.orange,
  headerTitleAlign: 'center',
  headerRight: () => {
    if (route.name.toLowerCase() === 'home') {
      return <Avatar navigation={navigation} />;
    }
    return null;
  },
  headerRightContainerStyle: { marginRight: 20 },
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
const SignInStackNavigator = createStackNavigator();
const SignUpStackNavigator = createStackNavigator();

export const HomeStack = () => (
  <HomeStackNavigator.Navigator screenOptions={headerOptions}>
    <HomeStackNavigator.Screen
      name='Home'
      options={{ title: '' }}
      component={Home}
    />
    <RecipesStackNavigator.Screen
      name='RecipeDetailHome'
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
  </HomeStackNavigator.Navigator>
);

export const RecipesStack = () => (
  <RecipesStackNavigator.Navigator screenOptions={headerOptions}>
    <RecipesStackNavigator.Screen
      name='Recipes'
      options={{ title: '', headerTransparent: true }}
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
      options={{ title: '', headerTransparent: true }}
      component={Meals}
    />
    <MealsStackNavigator.Screen
      name='MealDetailScreen'
      options={() => ({
        title: '',
        headerTransparent: true,
        headerTruncatedBackTitle: '',
        headerBackImage: () => <BackButton />,
        headerLeft: (props) => (
          <HeaderBackButton {...props} style={{ marginHorizontal: 0 }} />
        ),
        gestureEnabled: true,
        ...TransitionPresets.DefaultTransition,
      })}
      component={MealDetailScreen}
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

export const SignInStack = () => (
  <SignInStackNavigator.Navigator screenOptions={{ headerShown: false }}>
    <SignInStackNavigator.Screen
      name='SignIn'
      options={{ title: '' }}
      component={SignIn}
    />
  </SignInStackNavigator.Navigator>
);

export const SignUpStack = () => (
  <SignUpStackNavigator.Navigator screenOptions={{ headerShown: false }}>
    <SignUpStackNavigator.Screen
      name='SignUp'
      options={{ title: '' }}
      component={SignUp}
    />
  </SignUpStackNavigator.Navigator>
);
