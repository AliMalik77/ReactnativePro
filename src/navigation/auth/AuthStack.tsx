import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from '../../screens/auth/Auth';
import LoginForm from '../../screens/auth/login/Login';
import DrawerNavigation from '../app/DrawNavigation';
import TabNavigation from '../app/TabNavigation';
import ProductPage from '../../screens/product/ProductPage';
import SignupType from '../../screens/auth/signup/SignupType';
import SignupForm from '../../screens/auth/signup/SignupForm';

const Stack = createStackNavigator();

type AuthProps = {
  authenticated: boolean;
  setAuthenticated: (val: boolean) => void;
  userData: {
    email: string;
    password: string;
  };
  setUserData: (val: {email: string; password: string}) => void;
};

const AuthStack = ({
  authenticated,
  setAuthenticated,
  userData,
  setUserData,
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
      <Stack.Screen name="SignupForm">
        {props => (
          <SignupForm
            {...props}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="LoginForm">
        {props => (
          <LoginForm
            {...props}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SignupType">
        {props => (
          <SignupType
            {...props}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
