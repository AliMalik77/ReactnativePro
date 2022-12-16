import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Settings from '../../screens/settings/Settings';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        swipeEnabled: true,
      }}>
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Home" component={TabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
