import React, {useEffect} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import useAddUser from '../../../hooks/useAddUser';
import Colors from '../../../themes/Colors';
import Button from '../../common/Button';

type VerificationProps = {
  onPress: () => void;
  setCode: (val: string) => void;
  code: string;
  data: {};
};

const Verification = ({onPress, setCode, data}: VerificationProps) => {
  const {mutate: sendPost} = useAddUser();

  useEffect(() => {
    sendPost({post: data});
  }, []);

  return (
    <View style={styles.containerVerification}>
      <Text style={styles.title}>Enter Verification Code</Text>

      <TextInput
        textAlign="center"
        textContentType="none"
        placeholder="Verification Code"
        style={styles.fieldContainer}
        onChangeText={text => {
          setCode(text);
        }}></TextInput>

      <View style={styles.buttonWrapper}>
        <Button
          text="Login"
          color={Colors.Blue}
          textColor={Colors.White}
          bordercolor={Colors.Blue}
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
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  title: {fontSize: 20, fontWeight: '600', color: Colors.Black},
  btnWrapper: {width: '90%', alignSelf: 'center', bottom: 30},
  fieldContainer: {
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.BrightGray,
    marginTop: 20,
    textAlign: 'center',
  },
  buttonWrapper: {marginTop: 20, width: '90%', alignItems: 'center'},
});
