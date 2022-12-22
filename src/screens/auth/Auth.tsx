import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/common/Button';
import {NavigationProp} from '@react-navigation/native';
import Header from '../../components/auth/Header';
import Footer from '../../components/auth/Footer';
import SplashScreen from 'react-native-splash-screen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Config from 'react-native-config';
import Colors from '../../themes/Colors';

type AuthProps = {
  authenticated: boolean;
  setAuthenticated: (val: boolean) => void;
  navigation: NavigationProp<{
    LoginForm: undefined;
    SignupType: undefined;
  }>;
};

const Auth = ({navigation, setAuthenticated}: AuthProps) => {
  useEffect(() => {
    SplashScreen.hide();

    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: Config.CLIENTID,
    });
    auth().onAuthStateChanged(user => {});
  }, []);

  const handleClick = (data: any) => {
    if (data === 'login') {
      navigation.navigate('LoginForm');
    }
    if (data === 'signup') {
      navigation.navigate('SignupType');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.footer}>
        <Button
          text="Signup"
          color={Colors.Blue}
          textColor={Colors.White}
          bordercolor={Colors.Blue}
          border={0}
          onPress={() => handleClick('signup')}
        />
        <Button
          text="Login"
          color={Colors.White}
          textColor={Colors.Blue}
          bordercolor={Colors.Blue}
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
