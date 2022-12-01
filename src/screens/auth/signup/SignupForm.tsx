import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
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

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    streetAddress: yup.string().required(),
    emailAddress: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.number().required(),
    phoneNumber: yup.number().required(),
  })
  .required();

type EmailScreenProps = {
  userData: {email: string; password: string};
  setUserData: (val: {email: string; password: string}) => void;
  navigation: NavigationProp<{
    SignupType: undefined;
    SignupPassword: undefined;
  }>;
};

const EmailAddress = ({
  navigation,
  userData,
  setUserData,
}: EmailScreenProps) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    Alert.alert('data submitted Successfully');
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

  const {data, isLoading, isError, error, isFetching, refetch} = useFetchCart({
    onSuccess,
    onError,
  });

  if (data) {
    console.log('data', data.data);
  }

  if (isLoading || isFetching) {
    console.log('Loading data');
  }

  if (isError) {
    console.log('getting error message');
  }
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
          <KeyboardAwareScrollView>
            <View>
              <View style={styles.nameFields}>
                <View style={styles.w50}>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                      maxLength: 10,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
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
                        <Text>Password </Text>
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
                        <Text>Confirm Password</Text>
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
            </View>
            {/* </View> */}
          </KeyboardAwareScrollView>
        </View>
        {/* <View style={styles.fieldWrapper}>
          <TextInput
            textContentType="emailAddress"
            placeholder="Email Address"
            style={styles.fieldContainer}
            onChangeText={email =>
              setUserData({...userData, email: email})
            }></TextInput>

          <View style={styles.buttonWrapper}>
            <Button
              text="Next"
              color="#377BF5"
              textColor="white"
              bordercolor="#377BF5"
              border={0}
              onPress={() => handleNext()}
            />
          </View>
        </View> */}
        <View style={styles.btnWrapper}>
          <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.text}>Confirm Investor Info</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default EmailAddress;

const styles = StyleSheet.create({
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
