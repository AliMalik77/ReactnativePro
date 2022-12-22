import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootNavigation from './src/navigation/RootNavigation';
import {firebase} from '@react-native-firebase/auth';

const queryClient = new QueryClient();

const App = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigation
          userData={userData}
          setUserData={setUserData}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
