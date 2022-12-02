import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from '../../screens/settings/Settings';
import Personal from '../../screens/personalization/Personal';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        swipeEnabled: true,
      }}>
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Personal" component={Personal} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
