import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import BottomNavigation from './src/navigation/app/TabNavigation';
import Auth from './src/screens/auth/Auth';
import AuthStack from './src/navigation/auth/AuthStack';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import DrawerNavigation from './src/navigation/app/DrawNavigation';
import RootNavigation from './src/navigation/RootNavigation';

const queryClient = new QueryClient();
const App = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, [authenticated]);
  return (
    // <SafeAreaView>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* <BottomNavigation /> */}
        {/* <Splash /> */}
        <RootNavigation
          userData={userData}
          setUserData={setUserData}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
        {/* <AuthStack
          userData={userData}
          setUserData={setUserData}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        /> */}
        {/* <DrawerNavigation /> */}
        {/* <Auth /> */}
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
