import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../../components/common/Button';
import {NavigationProp} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Back from '../../../../assets/svgs/Backicon.svg';
import FormController from '../../../components/auth/FormController';
import {useForm} from 'react-hook-form';
import Colors from '../../../themes/Colors';

type SignupFormProps = {
  userData: {email: string; password: string};
  setUserData: (val: {email: string; password: string}) => void;
  navigation: NavigationProp<{
    SignupType: undefined;
    SignupPassword: undefined;
    Root: undefined;
  }>;
  authenticated: boolean;
  setAuthenticated: (val: boolean) => void;
};

const SignupForm = ({navigation, setAuthenticated}: SignupFormProps) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data: any) => {
    handleEmailSignup(data);
  };

  const onInvalid = (errors: any) => {
    console.error(errors);
  };
  const handleEmailSignup = (data: {email: string; password: string}) => {
    auth()
      .createUserWithEmailAndPassword(data?.email, data?.password)
      .then(() => {
        setAuthenticated(true);
        navigation.navigate('Root');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={handleBack}>
            <Back height={25} width={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.descHeader}>
          <Text style={styles.description}>Sign Up</Text>
        </View>

        <View style={{padding: 10}}>
          <View style={[styles.p10, styles.ml20]}>
            <FormController
              control={control}
              fieldName="Email"
              rules={{
                required: true,
                maxLength: 30,
              }}
              secureTextEntry={false}
              name="email"
              type="emailAddress"
            />
            {errors.email && (
              <Text style={styles.colorRed}>This is required.</Text>
            )}
          </View>
          <View style={[styles.p10, styles.ml20]}>
            <FormController
              control={control}
              fieldName="Password"
              rules={{
                required: true,
                maxLength: 20,
              }}
              secureTextEntry={false}
              name="password"
              type="password"
            />
            {errors.password && (
              <Text style={styles.colorRed}>This is required.</Text>
            )}
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              text="Signup"
              color={Colors.Blue}
              textColor={Colors.White}
              bordercolor={Colors.Blue}
              border={0}
              onPress={handleSubmit(onSubmit, onInvalid)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  buttonWrapper: {marginTop: 20, width: '90%', alignSelf: 'center'},
  fieldWrapper: {width: '100%', alignItems: 'center'},
  fieldContainer: {
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#EAEAEA',
    marginTop: 20,
    textAlign: 'center',
  },
  p10: {
    padding: 10,
  },
  ml20: {
    marginLeft: 20,
  },
  colorRed: {
    color: Colors.IntenseRed,
  },
  icon: {
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  descHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '25%',
    width: '50%',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    margin: 10,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
});
