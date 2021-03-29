import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack, MealsStack, RecipesStack, SettingsStack } from './Stack';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeStack} />
        <Drawer.Screen name='Recipes' component={RecipesStack} />
        <Drawer.Screen name='Meals' component={MealsStack} />
        <Drawer.Screen name='Settings' component={SettingsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
