import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../../components/common/Button';
import {NavigationProp} from '@react-navigation/native';
// import Header from '../../../components/auth/signup/signupType/Header';

const SignupType = ({
  navigation,
}: {
  navigation: NavigationProp<{
    // Login: undefined;
    // Auth: undefined;
    // Email: undefined;
  }>;
}) => {
  const handleClick = () => {
    // navigation.navigate('Login');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleEmailSignup = () => {
    // navigation.navigate('Email');
  };

  return (
    <View style={styles.container}>
      {/* <Header onPress={handleBack} /> */}
      <View style={styles.footer}>
        <Button
          text="Sign up with Google"
          color="#EA4335"
          textColor="white"
          bordercolor="#377BF5"
          border={0}
        />

        <Button
          text="Signup with email"
          color="#377BF5"
          textColor="white"
          bordercolor="#377BF5"
          border={0}
          onPress={() => handleEmailSignup()}
        />
        <Button
          text="Login"
          color="#fff"
          textColor="#377BF5"
          bordercolor="#377BF5"
          border={2}
          onPress={() => handleClick()}
        />
      </View>
    </View>
  );
};

export default SignupType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  footer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },
});
