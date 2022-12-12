import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Product from '../../screens/product/Product';
import Cart from '../../screens/cart/Cart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#377BF5',
        tabBarInactiveTintColor: '#909090',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '700',
        },
        tabBarStyle: {
          height: 60,
          padding: 10,
          paddingBottom: 5,
        },
      })}>
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: () => {
            return <MaterialIcons name="home" size={30} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name="cart" size={30} color="black" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
