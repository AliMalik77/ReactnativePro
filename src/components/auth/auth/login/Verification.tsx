import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Button from '../../../common/Button';

type VerificationProps = {
  onPress: (val: any) => void;
  setCode: (val: any) => void;
  code: string;
};

const Verification = ({onPress, setCode, code}: VerificationProps) => {
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
