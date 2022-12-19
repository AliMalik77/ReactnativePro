import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button as Buttonn,
} from 'react-native';

import Back from '../../../../assets/svgs/Backicon.svg';
import Button from '../../../components/common/Button';
import {NavigationProp} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import Verification from '../../../components/auth/auth/login/Verification';
import UserForm from '../../../components/common/UserForm';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    streetAddress: yup.string().required(),
    emailAddress: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.number().required(),
  })
  .required();

type LoginFormProps = {
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

const LoginForm = ({
  navigation,
  userData,
  setUserData,
  authenticated,
  setAuthenticated,
}: LoginFormProps) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [confirm, setConfirm] = useState<any | null>(null);

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

  const onSubmit = (data: any) => {
    signInWithPhoneNumber('+923201484476');
  };

  const onInvalid = (errors: any) => console.error(errors);

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      setAuthenticated(true);
      navigation.navigate('Root');
    } catch (error) {
      console.log('Invalid code.', error);
    }
  };

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    const ConfirmationResult: any = await auth().signInWithPhoneNumber(
      '+923054042027',
    );
    setConfirm(ConfirmationResult);
  };

  const onSuccess = (data: any) => {
    console.log('perform side effect after data fetching', data.data);
  };

  const onError = (data: any) => {
    console.log('perform side effect after encountering error', data);
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
            <Text style={styles.description}>Add User Information</Text>
          </View>

          <View style={{padding: 10}}>
            <UserForm onSubmit={onSubmit} onInvalid={onInvalid} />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <Verification
        onPress={confirmCode}
        setCode={setCode}
        code={code}
        data={hero}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btnWrapper: {width: '90%', alignSelf: 'center', bottom: 30},
  divider: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: '90%',
  },
  alert: {
    color: '#EA4335',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 24,
  },
  colorRed: {
    color: 'red',
  },
  nameFields: {display: 'flex', flexDirection: 'row', marginTop: 50},
  containerVerification: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  w50: {width: '50%'},
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  fieldsDisplay: {display: 'flex', flexDirection: 'row', marginTop: 15},
  button: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#377BF5',
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  buttonWrapper: {marginTop: 20, width: '90%', alignItems: 'center'},
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
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  // },
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
