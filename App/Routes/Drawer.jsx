import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { HomeStack, MealsStack, RecipesStack, SettingsStack } from './Stack';

import colors from '../Constants/colors';
import DrawerContent from '../Components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => (
  <Drawer.Navigator
    initialRouteName='Home'
    drawerType='slide'
    drawerStyle={{ backgroundColor: colors.background }}
    drawerContentOptions={{
      activeTintColor: colors.dark,
      inactiveTintColor: colors.green,
      itemStyle: { marginVertical: 5 },
      labelStyle: {
        fontFamily: 'PoppinsBold',
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen
      name='Home'
      component={HomeStack}
      options={{
        title: 'Home',
        drawerIcon: ({ size, focused }) => (
          <Entypo
            name='home'
            size={size}
            color={focused ? colors.dark : colors.green}
          />
        ),
      }}
    />
    <Drawer.Screen
      name='Recipes'
      component={RecipesStack}
      options={{
        title: 'Recipes',
        drawerIcon: ({ size, focused }) => (
          <MaterialCommunityIcons
            name='food-variant'
            size={size}
            color={focused ? colors.dark : colors.green}
          />
        ),
      }}
    />
    <Drawer.Screen
      name='Meals'
      component={MealsStack}
      options={{
        title: 'Last meals',
        drawerIcon: ({ size, focused }) => (
          <MaterialCommunityIcons
            name='bowl-mix'
            size={size}
            color={focused ? colors.dark : colors.green}
          />
        ),
      }}
    />
    <Drawer.Screen
      name='Settings'
      component={SettingsStack}
      options={{
        title: 'Settings',
        drawerIcon: ({ size, focused }) => (
          <MaterialIcons
            name='settings'
            size={size}
            color={focused ? colors.dark : colors.green}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default () => (
  <NavigationContainer>
    <DrawerRoutes />
  </NavigationContainer>
);
