import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm} from 'react-hook-form';
import FormController from './FormController';
import Colors from '../../themes/Colors';

type UserFormProps = {
  onSubmit: (val: {}) => void;
  onInvalid: (val: {}) => void;
};

const UserForm = ({onSubmit, onInvalid}: UserFormProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View>
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        scrollEnabled={true}
        enableOnAndroid={true}>
        <View style={styles.nameFields}>
          <View style={styles.w50}>
            <FormController
              control={control}
              fieldName="First Name"
              rules={{
                required: true,
                maxLength: 10,
              }}
              secureTextEntry={false}
              name="firstName"
              type="name"
            />
            {errors.firstName && (
              <Text style={styles.colorRed}>This is required.</Text>
            )}
          </View>
          <View style={styles.w50}>
            <FormController
              control={control}
              fieldName="Last Name"
              rules={{
                required: true,
                maxLength: 10,
              }}
              secureTextEntry={false}
              name="lastName"
              type="name"
            />
            {errors.lastName && (
              <Text style={styles.colorRed}>This is required.</Text>
            )}
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <FormController
            control={control}
            fieldName="Email Address"
            rules={{
              required: true,
              maxLength: 30,
            }}
            secureTextEntry={false}
            name="emailAddress"
            type="emailAddress"
          />
          {errors.emailAddress && (
            <Text style={styles.colorRed}>This is required.</Text>
          )}
        </View>
        <View style={styles.fieldsDisplay}>
          <View style={styles.w50}>
            <FormController
              control={control}
              fieldName="Password"
              rules={{
                required: true,
                maxLength: 14,
              }}
              secureTextEntry={true}
              name="password"
              type="password"
            />
            {errors.password && (
              <Text style={styles.colorRed}>This is required.</Text>
            )}
          </View>
          <View style={styles.w50}>
            <FormController
              control={control}
              fieldName="Confirm Password"
              rules={{
                required: true,
                maxLength: 14,
              }}
              secureTextEntry={true}
              name="confirmPassword"
              type="password"
            />
            {errors.confirmPassword && (
              <Text style={styles.colorRed}>This is required.</Text>
            )}
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <FormController
            control={control}
            fieldName="Street Address"
            rules={{
              required: true,
              maxLength: 30,
            }}
            secureTextEntry={false}
            name="streetAddress"
            type="addressCity"
          />
          {errors.streetAddress && (
            <Text style={styles.colorRed}>This is required.</Text>
          )}
        </View>
        <View style={styles.fieldsDisplay}>
          <View style={styles.w50}>
            <FormController
              control={control}
              fieldName="State"
              rules={{
                required: true,
                maxLength: 14,
              }}
              secureTextEntry={false}
              name="state"
              type="addressState"
            />
            {errors.state && (
              <Text style={styles.colorRed}>This is required.</Text>
            )}
          </View>
          <View style={styles.w50}>
            <FormController
              control={control}
              fieldName="Zip Code"
              rules={{
                required: true,
                maxLength: 14,
              }}
              secureTextEntry={false}
              name="zipCode"
              type="postalCode"
            />
            {errors.zipCode && (
              <Text style={styles.colorRed}>This is required.</Text>
            )}
          </View>
        </View>

        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit, onInvalid)}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  btnWrapper: {width: '80%', alignSelf: 'center', bottom: 30},
  button: {
    marginTop: 50,
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
  divider: {
    borderWidth: 1,
    borderColor: Colors.IntenseRed,
    width: '90%',
  },
  colorRed: {
    color: Colors.IntenseRed,
  },
  w50: {width: '50%'},
  fieldsDisplay: {display: 'flex', flexDirection: 'row', marginTop: 15},
  nameFields: {display: 'flex', flexDirection: 'row', marginTop: 50},
});
