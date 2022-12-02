import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import BottomNavigation from './src/navigation/app/TabNavigation';
import Splash from './src/screens/splash/Splash';
import Auth from './src/screens/auth/Auth';
import AuthStack from './src/navigation/auth/AuthStack';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import DrawerNavigation from './src/navigation/app/DrawNavigation';
const queryClient = new QueryClient();
const App = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  return (
    // <SafeAreaView>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* <BottomNavigation /> */}
        {/* <Splash /> */}
        {/* <AuthStack
          userData={userData}
          setUserData={setUserData}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        /> */}
        <DrawerNavigation />
        {/* <Auth /> */}
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
