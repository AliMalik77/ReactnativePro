import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/common/Button';
import {NavigationProp} from '@react-navigation/native';
import Header from '../../components/auth/auth/Header';
import Footer from '../../components/auth/auth/Footer';

//props

const Auth = ({
  navigation,
}: {
  navigation: NavigationProp<{LoginForm: undefined; SignupForm: undefined}>;
}) => {
  console.log('hi testing');
  const handleClick = (data: any) => {
    if (data === 'login') {
      navigation.navigate('LoginForm');
    }
    if (data === 'signup') {
      // navigation.navigate('SignupForm');
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.footer}>
        <Button
          text="Signup"
          color="#377BF5"
          textColor="white"
          bordercolor="#377BF5"
          border={0}
          onPress={() => handleClick('signup')}
        />
        <Button
          text="Login"
          color="#fff"
          textColor="#377BF5"
          bordercolor="#377BF5"
          border={2}
          onPress={() => handleClick('login')}
        />
        <Footer />
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});
