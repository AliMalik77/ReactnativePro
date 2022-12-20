import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootNavigation from './src/navigation/RootNavigation';
const queryClient = new QueryClient();

const App = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigation
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
