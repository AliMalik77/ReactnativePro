import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from '../../screens/settings/Settings';
import Personal from '../../screens/personalization/Personal';
import TabNavigation from './TabNavigation';
import ProductPage from '../../screens/product/ProductPage';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        swipeEnabled: true,
      }}>
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Personal" component={TabNavigation} />
      {/* <Stack.Screen name="Product" component={ProductPage}></Stack.Screen> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
