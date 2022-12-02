import React from 'react';
import TabNavigation from './app/TabNavigation';
import AuthStack from './auth/AuthStack';

type RootNavigationProps = {
  userData: {
    email: string;
    password: string;
  };
  setUserData: (val: {email: string; password: string}) => void;
  authenticated: Boolean;
  setAuthenticated: (val: any) => void;
};

const RootNavigation = ({
  userData,
  setUserData,
  authenticated,
  setAuthenticated,
}: RootNavigationProps) => {
  return (
    <>
      {!authenticated ? (
        <AuthStack
          userData={userData}
          setUserData={setUserData}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      ) : (
        <TabNavigation />
      )}
    </>
  );
};

export default RootNavigation;
