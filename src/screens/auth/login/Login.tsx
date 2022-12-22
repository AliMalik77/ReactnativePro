import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Back from '../../../../assets/svgs/Backicon.svg';
import {NavigationProp} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import Verification from '../../../components/auth/login/Verification';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../themes/Colors';
import FormController from '../../../components/auth/FormController';

type LoginFormProps = {
  navigation: NavigationProp<{
    SignupType: undefined;
    SignupPassword: undefined;
    Root: undefined;
  }>;
  authenticated: boolean;
  setAuthenticated: (val: boolean) => void;
};

const LoginForm = ({navigation, setAuthenticated}: LoginFormProps) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [confirm, setConfirm] = useState<any | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<any | null>(null);
  const [code, setCode] = useState('');

  const hero = {
    email: 'ali@gmail.com',
    username: 'ali',
    password: '123456',
    name: {
      firstname: 'ali',
      lastname: 'malik',
    },
    address: {
      city: 'kilcoole',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496',
      },
    },
    phone: '03201484476',
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      setAuthenticated(true);
      navigation.navigate('Root');
    } catch (error) {
      console.log('Invalid code.', error);
    }
  };

  const onSubmit = (data: any) => {
    signInWithPhoneNumber(data?.phoneNumber);
  };

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    const confirmationResult: {} = await auth().signInWithPhoneNumber(
      phoneNumber,
    );
    setConfirm(confirmationResult);
  };

  if (!confirm) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={handleBack}>
              <Back height={25} width={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.descHeader}>
            <Text style={styles.description}>Enter Your Number</Text>
          </View>

          <View style={[styles.p10, styles.ml20]}>
            <FormController
              control={control}
              fieldName="Phone Number"
              rules={{
                required: true,
                maxLength: 20,
              }}
              secureTextEntry={false}
              name="phoneNumber"
              type="telephoneNumber"
            />
            {errors.phoneNumber && (
              <Text style={styles.colorRed}>This is required.</Text>
            )}
          </View>
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.verificationContainer}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Back height={25} width={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.verification}>
        <Verification
          onPress={confirmCode}
          setCode={setCode}
          code={code}
          data={hero}
        />
      </View>
    </View>
  );
};

export default LoginForm;

const styles = ScaledSheet.create({
  verificationContainer: {flex: 1, backgroundColor: Colors.White},
  backIconContainer: {padding: 20, flex: 1},
  verification: {
    flex: 2,
    backgroundColor: Colors.White,
    justifyContent: 'flex-start',
  },
  p10: {
    padding: 10,
  },
  ml20: {
    marginLeft: 20,
  },
  fieldContainer: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#EAEAEA',
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    height: '40@vs',
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btnWrapper: {width: '90%', alignSelf: 'center', bottom: 30},
  divider: {
    borderWidth: 1,
    borderColor: Colors.BrightGray,
    width: '90%',
  },
  colorRed: {
    color: Colors.IntenseRed,
  },
  nameFields: {display: 'flex', flexDirection: 'row', marginTop: 50},
  containerVerification: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  w50: {width: '50%'},
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.White,
  },
  fieldsDisplay: {display: 'flex', flexDirection: 'row', marginTop: 15},
  button: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: Colors.Blue,
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: Colors.White,
  },
  buttonWrapper: {marginTop: 20, width: '90%', alignItems: 'center'},
  fieldWrapper: {width: '100%', alignItems: 'center'},

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
    color: Colors.Black,
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
});
