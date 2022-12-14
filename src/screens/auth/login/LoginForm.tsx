import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
  Button as Buttonn,
  KeyboardAvoidingView,
} from 'react-native';

import Back from '../../../../assets/svgs/Backicon.svg';
import Button from '../../../components/common/Button';
import {NavigationProp} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useFetchProducts from '../../../hooks/useFetchProducts';
import useFetchCart from '../../../hooks/useFetchCart';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import useAddUser from '../../../hooks/useAddUser';
import Verification from '../../../components/auth/auth/login/Verification';
import AddUser from '../../../components/auth/auth/login/AddUser';

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
    // phoneNumber: yup.number().required(),
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

  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState<any | null>(null);
  const [isSignedIn, setSignedIn] = useState('');
  const [code, setCode] = useState('');
  const [user, setUser] = useState({});
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
  // const onSubmit = (data: any) => {
  //   Alert.alert('data submitted Successfully', data);
  // };
  // const onSubmit = (data: any) => console.log('dataaaaaaaaaaaa', data);

  const onSubmit = (data: any) => {
    console.log('i m calling', data);
    signInWithPhoneNumber('+923201484476');
    // setUser(data);
    // AddUser(data);
    //Adding new user using reactquery mutation
    // const {mutate: addNewUser, isLoading, isError, error} = useAddUser();
    // const handlenewUser = () => {
    // console.log('i m clicked');

    // const hero = {
    //   email: 'ali@gmail.com',
    //   username: 'ali',
    //   password: '123456',
    //   name: {
    //     firstname: 'ali',
    //     lastname: 'malik',
    //   },
    //   address: {
    //     city: 'kilcoole',
    //     street: '7835 new road',
    //     number: 3,
    //     zipcode: '12926-3874',
    //     geolocation: {
    //       lat: '-37.3159',
    //       long: '81.1496',
    //     },
    //   },
    //   phone: '03201484476',
    // };
    // addNewUser(hero);
    // // };
    // if (data) {
    //   console.log('data', data.data);
    // }

    // if (isLoading || isFetching) {
    //   console.log('Loading data');
    // }
  };

  const onInvalid = (errors: any) => console.error(errors);
  // useEffect(() => {
  //   console.log('getting data...', getValues());
  //   if (getValues('emailAddress')) {
  //     console.log('data exists');
  //   }
  // }, [handleSubmit]);

  const confirmCode = async () => {
    try {
      console.log('verification is ', confirm);
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
    console.log('confirmation result', ConfirmationResult);
    setConfirm(ConfirmationResult);
  };

  const onSuccess = (data: any) => {
    console.log('perform side effect after data fetching', data.data);
  };

  const onError = (data: any) => {
    console.log('perform side effect after encountering error', data);
  };

  // const handleNext = () => {
  //   navigation.navigate('SignupPassword');
  // };

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
            <View>
              <KeyboardAwareScrollView
                scrollEnabled={true}
                enableOnAndroid={true}>
                <View style={styles.nameFields}>
                  <View style={styles.w50}>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                        maxLength: 10,
                      }}
                      render={({field: {onChange, onBlur, value, ref}}) => (
                        <>
                          <Text>First Name </Text>
                          <TextInput
                            textContentType="name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        </>
                      )}
                      name="firstName"
                    />
                    <View style={styles.divider} />
                    {errors.firstName && (
                      <Text style={styles.colorRed}>This is required.</Text>
                    )}
                  </View>
                  <View style={styles.w50}>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                        maxLength: 10,
                      }}
                      render={({field: {onChange, onBlur, value}}) => (
                        <>
                          <Text>Last Name </Text>
                          <TextInput
                            textContentType="name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        </>
                      )}
                      name="lastName"
                    />
                    <View style={styles.divider} />
                    {errors.lastName && (
                      <Text style={styles.colorRed}>This is required.</Text>
                    )}
                  </View>
                </View>
                <View style={{marginTop: 15}}>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                      maxLength: 30,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <>
                        <Text>Email Address </Text>
                        <TextInput
                          textContentType="emailAddress"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      </>
                    )}
                    name="emailAddress"
                  />
                  <View style={styles.divider} />
                  {errors.streetAddress && (
                    <Text style={styles.colorRed}>This is required.</Text>
                  )}
                </View>
                <View style={styles.fieldsDisplay}>
                  <View style={styles.w50}>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                        maxLength: 14,
                      }}
                      render={({field: {onChange, onBlur, value}}) => (
                        <>
                          <Text>Password </Text>
                          <TextInput
                            secureTextEntry={true}
                            textContentType="password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        </>
                      )}
                      name="password"
                    />
                    <View style={styles.divider} />
                    {errors.state && (
                      <Text style={styles.colorRed}>This is required.</Text>
                    )}
                  </View>
                  <View style={styles.w50}>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                        maxLength: 14,
                      }}
                      render={({field: {onChange, onBlur, value}}) => (
                        <>
                          <Text>Confirm Password</Text>
                          <TextInput
                            secureTextEntry={true}
                            textContentType={'password'}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        </>
                      )}
                      name="confirmPassword"
                    />
                    <View style={styles.divider} />
                    {errors.zipCode && (
                      <Text style={styles.colorRed}>This is required.</Text>
                    )}
                  </View>
                </View>
                <View style={{marginTop: 15}}>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                      maxLength: 30,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <>
                        <Text>Street Address </Text>
                        <TextInput
                          textContentType="streetAddressLine1"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      </>
                    )}
                    name="streetAddress"
                  />
                  <View style={styles.divider} />
                  {errors.streetAddress && (
                    <Text style={styles.colorRed}>This is required.</Text>
                  )}
                </View>
                <View style={styles.fieldsDisplay}>
                  <View style={styles.w50}>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                        maxLength: 14,
                      }}
                      render={({field: {onChange, onBlur, value}}) => (
                        <>
                          <Text>State </Text>
                          <TextInput
                            textContentType="addressState"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        </>
                      )}
                      name="state"
                    />
                    <View style={styles.divider} />
                    {errors.state && (
                      <Text style={styles.colorRed}>This is required.</Text>
                    )}
                  </View>
                  <View style={styles.w50}>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                        maxLength: 14,
                      }}
                      render={({field: {onChange, onBlur, value}}) => (
                        <>
                          <Text>Zip Code</Text>
                          <TextInput
                            textContentType="postalCode"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        </>
                      )}
                      name="zipCode"
                    />
                    <View style={styles.divider} />
                    {errors.zipCode && (
                      <Text style={styles.colorRed}>This is required.</Text>
                    )}
                  </View>
                </View>
              </KeyboardAwareScrollView>
              {/* <Buttonn title="Submit" onPress={() => onSubmit()} /> */}
            </View>
            {/* </View> */}
          </View>

          <View style={styles.btnWrapper}>
            <TouchableOpacity
              style={styles.button}
              // signInWithPhoneNumber('+9232014844476'),
              // onPress={() => signInWithPhoneNumber('+923054042027')}
              onPress={handleSubmit(onSubmit, onInvalid)}
              // onPress={() => {
              //   handlenewUser;
              // }}
            >
              <Text style={styles.text}>Confirm Investor Info</Text>
            </TouchableOpacity>
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
        // alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Verification
        onPress={confirmCode}
        setCode={setCode}
        code={code}
        data={hero}
      />
    </View>
    // <View style={styles.containerVerification}>
    //   <TextInput
    //     style={styles.input}
    //     value={code}
    //     onChangeText={text => setCode(text)}
    //   />
    //   <Button title="Confirm Code" onPress={() => confirmCode()} />
    // </View>
  );
  // if (isError) {
  //   console.log('getting error message');
  // }
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
