import React, {useEffect} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import useAddUser from '../../../../hooks/useAddUser';
import Button from '../../../common/Button';

type VerificationProps = {
  onPress: (val: any) => void;
  setCode: (val: any) => void;
  code: string;
  data: {};
};

const Verification = ({onPress, setCode, code, data}: VerificationProps) => {
  console.log('data getting in Verification', data);
  const {
    mutate: sendPost,
    isError,
    isIdle,
    isLoading,
    isSuccess,
  } = useAddUser();

  useEffect(() => {
    sendPost({post: data});
  }, []);

  console.log(
    ' isError,isIdle,isLoading,isSuccess',
    isError,
    isIdle,
    isLoading,
    isSuccess,
  );

  // const {mutate, isLoading, isError} = useMutation(postData, {
  //   onSuccess: res => {
  //     console.log('res data', res);
  //   },
  // });

  // () => {
  //   mutate(user);
  // };

  // console.log(isLoading, isError);

  // if (isLoading) {
  //   return <Text>Loading</Text>;
  // }

  // const {mutate: newUser, isSuccess, isError, isLoading} = useAddUser();

  // () => {
  //   newUser({post: 'testing'});
  // };

  // console.log('isError', isError);
  // console.log('isSuccess', isSuccess);

  // const {
  //   mutate: addNewUser,
  //   isLoading,
  //   isError,
  //   error,
  //   data: response,
  //   isSuccess,
  // } = useAddUser();
  // () => {
  //   addNewUser(data);
  // };

  // console.log('isLoading', isLoading);
  // console.log('isSuccess', isSuccess);
  // console.log('isError', isError);

  // if (isLoading) {
  //   console.log('is loading');
  // }
  // if (isSuccess) {
  //   console.log('successfully loaded');
  // }
  // if (response) {
  //   console.log('response', response);
  // }
  return (
    <View style={styles.containerVerification}>
      <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
        Enter Verification Code
      </Text>

      <TextInput
        textAlign="center"
        textContentType="none"
        placeholder="Verification Code"
        style={styles.fieldContainer}
        onChangeText={text => {
          console.log(text);
          setCode(text);
        }}></TextInput>

      <View style={styles.buttonWrapper}>
        <Button
          text="Login"
          color="#377BF5"
          textColor="white"
          bordercolor="#377BF5"
          border={0}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  containerVerification: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  btnWrapper: {width: '90%', alignSelf: 'center', bottom: 30},
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
  buttonWrapper: {marginTop: 20, width: '90%', alignItems: 'center'},
});
