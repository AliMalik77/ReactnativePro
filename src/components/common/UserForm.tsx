import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm, Controller} from 'react-hook-form';

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

type UserFormProps = {
  schema: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
  onInvalid: any;
};

const UserForm = ({
  //   schema,
  //   handleSubmit,
  //   errors,
  onSubmit,
  onInvalid,
}: UserFormProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <View>
      <KeyboardAwareScrollView
        // style={{height: SCREEN_HEIGHT}}
        extraScrollHeight={100}
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
      </KeyboardAwareScrollView>
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  btnWrapper: {width: '90%', alignSelf: 'center', bottom: 30},
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
  divider: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: '90%',
  },
  colorRed: {
    color: 'red',
  },
  w50: {width: '50%'},
  fieldsDisplay: {display: 'flex', flexDirection: 'row', marginTop: 15},
  nameFields: {display: 'flex', flexDirection: 'row', marginTop: 50},
});
