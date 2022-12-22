import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../../components/common/Button';
import {NavigationProp} from '@react-navigation/native';
import Back from '../../../../assets/svgs/Backicon.svg';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import auth from '@react-native-firebase/auth';
import Colors from '../../../themes/Colors';

type SignupTypeProps = {
  authenticated: boolean;
  setAuthenticated: (val: boolean) => void;
  navigation: NavigationProp<{
    LoginForm: undefined;
    SignupForm: undefined;
  }>;
};

const SignupType = ({navigation, setAuthenticated}: SignupTypeProps) => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: Config.CLIENTID,
    });
    auth().onAuthStateChanged(user => {});
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleGoogleSignup = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.user) {
        setAuthenticated(true);
      }
    } catch (error: any) {
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

  const handleEmailSignup = () => {
    navigation.navigate('SignupForm');
  };

  const handleLogin = () => {
    navigation.navigate('LoginForm');
  };

  return (
    <View style={styles.container}>
      <View style={styles.p20}>
        <TouchableOpacity onPress={handleBack}>
          <Back height={25} width={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Button
          text="Sign up with Google"
          color={Colors.Cinnabar}
          textColor={Colors.White}
          bordercolor={Colors.Blue}
          border={0}
          onPress={handleGoogleSignup}
        />

        <Button
          text="Signup with email"
          color={Colors.Blue}
          textColor={Colors.White}
          bordercolor={Colors.Blue}
          border={0}
          onPress={handleEmailSignup}
        />
        <Button
          text="Login"
          color={Colors.White}
          textColor={Colors.Blue}
          bordercolor={Colors.Blue}
          border={2}
          onPress={handleLogin}
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
  p20: {
    padding: 20,
  },
  footer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },
});
