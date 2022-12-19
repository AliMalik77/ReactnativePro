import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from '../../screens/auth/Auth';
import LoginForm from '../../screens/auth/login/LoginForm';
import DrawerNavigation from '../app/DrawNavigation';
import TabNavigation from '../app/TabNavigation';
import ProductPage from '../../screens/product/ProductPage';

const Stack = createStackNavigator();

type AuthProps = {
  userData: {
    email: string;
    password: string;
  };
  setUserData: (val: {email: string; password: string}) => void;
  authenticated: boolean;
  setAuthenticated: (val: boolean) => void;
};

const AuthStack = ({
  userData,
  setUserData,
  authenticated,
  setAuthenticated,
}: AuthProps) => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth">
        {props => (
          <Auth
            {...props}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Root"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Tab" component={TabNavigation}></Stack.Screen>
      <Stack.Screen name="ProductView" component={ProductPage}></Stack.Screen>
      <Stack.Screen name="LoginForm">
        {props => (
          <LoginForm
            {...props}
            userData={userData}
            setUserData={setUserData}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
