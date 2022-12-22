import React from 'react';
import AppStack from './app/AppStack';
import AuthStack from './auth/AuthStack';

type RootNavigationProps = {
  authenticated: boolean;
  setAuthenticated: (val: boolean) => void;
  userData: {
    email: string;
    password: string;
  };
  setUserData: (val: {email: string; password: string}) => void;
};

const RootNavigation = ({
  authenticated,
  setAuthenticated,
  userData,
  setUserData,
}: RootNavigationProps) => {
  return (
    <>
      {authenticated ? (
        <AppStack />
      ) : (
        <AuthStack
          userData={userData}
          setUserData={setUserData}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      )}
    </>
  );
};

export default RootNavigation;
