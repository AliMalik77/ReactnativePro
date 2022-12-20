import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type FormControllerProps = {
  control: any;
  fieldName: string;
  rules: {
    maxLength: number;
    required: boolean;
  };
  name: string;
  secureTextEntry: boolean;
  type: any;
};

const FormController = ({
  control,
  fieldName,
  rules,
  name,
  secureTextEntry,
  type,
}: FormControllerProps) => {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <Text>{fieldName}</Text>
            <TextInput
              textContentType={type}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
            />
          </>
        )}
        name={name}
      />
      <View style={styles.divider} />
    </>
  );
};

export default FormController;

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: '90%',
  },
});
