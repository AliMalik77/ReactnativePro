import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import ProductPage from '../../screens/product/ProductPage';
import DrawerNavigation from './DrawNavigation';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Root"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Tab" component={TabNavigation}></Stack.Screen>
      <Stack.Screen name="ProductView" component={ProductPage}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppStack;
