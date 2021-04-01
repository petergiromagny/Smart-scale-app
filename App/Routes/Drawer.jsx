import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
      activeTintColor: colors.green,
      inactiveTintColor: colors.green,
      itemStyle: { marginVertical: 5 },
      labelStyle: {
        fontFamily: 'PoppinsBold',
        fontSize: 15,
      },
    }}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen name='Home' component={HomeStack} />
    <Drawer.Screen name='Recipes' component={RecipesStack} />
    <Drawer.Screen name='Meals' component={MealsStack} />
    <Drawer.Screen name='Settings' component={SettingsStack} />
  </Drawer.Navigator>
);

export default () => (
  <NavigationContainer>
    <DrawerRoutes />
  </NavigationContainer>
);
