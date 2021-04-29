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
import ScanningScreen from '../Containers/ScanningScreen';
import ScanResultScreen from '../Containers/ScanResultScreen';
import Settings from '../Containers/SettingsScreen';
import SignIn from '../Containers/SignInScreen';
import SignUp from '../Containers/SignUpScreen';
import StepObj from '../Containers/StepObjScreen';
import StepFav from '../Containers/StepFavScreen';

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
  headerTintColor: colors.dark,
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

const headerTitleStyle = () => ({
  fontFamily: 'PoppinsMedium',
  fontSize: 20,
});

const HomeStackNavigator = createStackNavigator();
const RecipesStackNavigator = createStackNavigator();
const MealsStackNavigator = createStackNavigator();
const ScanStackNavigator = createStackNavigator();
const SettingsStackNavigator = createStackNavigator();
const AuthStackNavigator = createStackNavigator();

export const HomeStack = () => (
  <HomeStackNavigator.Navigator screenOptions={headerOptions}>
    <HomeStackNavigator.Screen
      name='Home'
      options={{ title: '' }}
      component={Home}
    />
    <ScanStackNavigator.Screen
      name='ScanResult'
      options={{
        title: 'Scan Result',
        headerTitleStyle: headerTitleStyle(),
        headerLeft: '',
        gestureEnabled: false,
      }}
      component={ScanResultScreen}
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
      options={{
        title: 'Recipes',
        headerTransparent: true,
        headerTitleStyle: headerTitleStyle(),
      }}
      component={Recipes}
    />
    <RecipesStackNavigator.Screen
      name='RecipeDetail'
      options={() => ({
        title: '',
        headerTransparent: true,
        headerTruncatedBackTitle: '',
        headerBackTitle: '',
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
      options={{
        title: 'Last Meals',
        headerTransparent: true,
        headerTitleStyle: headerTitleStyle(),
      }}
      component={Meals}
    />
    <MealsStackNavigator.Screen
      name='MealDetailScreen'
      options={() => ({
        title: '',
        headerTransparent: true,
        headerTruncatedBackTitle: '',
        headerBackTitle: '',
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

export const ScanStack = () => (
  <ScanStackNavigator.Navigator screenOptions={headerOptions}>
    <ScanStackNavigator.Screen
      name='Scan'
      options={{
        title: 'Scanner',
        headerTitleStyle: headerTitleStyle(),
      }}
      component={ScanningScreen}
    />
    <ScanStackNavigator.Screen
      name='ScanResult'
      options={{
        title: 'Scan Result',
        headerTitleStyle: headerTitleStyle(),
        headerLeft: '',
        gestureEnabled: false,
      }}
      component={ScanResultScreen}
    />
  </ScanStackNavigator.Navigator>
);

export const SettingsStack = () => (
  <SettingsStackNavigator.Navigator screenOptions={headerOptions}>
    <SettingsStackNavigator.Screen
      name='Settings'
      options={{
        title: 'Settings',
        headerTitleStyle: headerTitleStyle(),
      }}
      component={Settings}
    />
  </SettingsStackNavigator.Navigator>
);

export const AuthStack = () => (
  <AuthStackNavigator.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName='SignIn'
  >
    <AuthStackNavigator.Screen
      name='SignIn'
      options={{ title: '' }}
      component={SignIn}
    />
    <AuthStackNavigator.Screen
      name='SignUp'
      options={{ title: '' }}
      component={SignUp}
    />
    <AuthStackNavigator.Screen
      name='StepObj'
      options={{ title: '' }}
      component={StepObj}
    />
    <AuthStackNavigator.Screen
      name='StepFav'
      options={{ title: '' }}
      component={StepFav}
    />
  </AuthStackNavigator.Navigator>
);
