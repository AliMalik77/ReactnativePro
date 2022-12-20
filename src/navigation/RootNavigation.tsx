import React from 'react';
import AuthStack from './auth/AuthStack';

type RootNavigationProps = {
  authenticated: boolean;
  setAuthenticated: (val: boolean) => void;
};

const RootNavigation = ({
  authenticated,
  setAuthenticated,
}: RootNavigationProps) => {
  return (
    <>
      <AuthStack
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
    </>
  );
};

export default RootNavigation;
