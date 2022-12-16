import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/common/Button';
import {NavigationProp} from '@react-navigation/native';
import Header from '../../components/auth/auth/Header';
import Footer from '../../components/auth/auth/Footer';
import SplashScreen from 'react-native-splash-screen';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth, {firebase} from '@react-native-firebase/auth';

type AuthProps = {
  authenticated: boolean;
  setAuthenticated: (val: boolean) => void;
  navigation: NavigationProp<{
    LoginForm: undefined;
    SignupForm: undefined;
  }>;
};

const Auth = ({navigation, authenticated, setAuthenticated}: AuthProps) => {
  useEffect(() => {
    SplashScreen.hide();
    // const user = auth().currentUser;
    // console.log('user getting authenticated', user);

    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '180123884938-0iv7p5s8me7e1l6gthmmosd40m4i8o2a.apps.googleusercontent.com',
    });
    auth().onAuthStateChanged(user => {
      // firebase.auth().signOut();
      console.log('user: ', user);

      // if (user) {
      //   setAuthenticated(true);
      // }
    });
  }, []);

  console.log('hi testing');
  const handleClick = (data: any) => {
    if (data === 'login') {
      navigation.navigate('LoginForm');
    }
    // if (data === 'signup') {
    // navigation.navigate('SignupForm');
    // }
  };

  const googleSignin = async () => {
    try {
      console.log('in try now');

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('user info', userInfo);

      if (userInfo.user) {
        setAuthenticated(true);
      }
    } catch (error: any) {
      console.log('error getting user info', error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(
          'statusCodes.SIGN_IN_CANCELLED',
          statusCodes.SIGN_IN_CANCELLED,
        );

        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('statusCodes.IN_PROGRESS', statusCodes.IN_PROGRESS);

        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('statusCodes.PLAY_SERVICES_NOT_AVAILABLE'),
          statusCodes.PLAY_SERVICES_NOT_AVAILABLE;

        // play services not available or outdated
      } else {
        console.log('Something else', error);

        // some other error happened
      }
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
          onPress={() => googleSignin()}
          // onPress={() => handleClick('signup')}
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
