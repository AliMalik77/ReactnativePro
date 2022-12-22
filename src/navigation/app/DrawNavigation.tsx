import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Settings from '../../screens/settings/Settings';
import TabNavigation from './TabNavigation';
import auth from '@react-native-firebase/auth';
const Drawer = createDrawerNavigator();

function AppDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <DrawerItemList {...props} style={{borderWidth: 1}} />
      <DrawerItem
        label="Log out"
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
      />
    </DrawerContentScrollView>
  );
}
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        swipeEnabled: true,
      }}
      drawerContent={props => <AppDrawerContent {...props} />}>
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Home" component={TabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
