import React from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  text: string;
  color: string;
  textColor: string;
  bordercolor: string;
  border: number;
  onPress?: (val: any) => void;
};

const Button = ({
  text,
  color,
  textColor,
  bordercolor = 'none',
  border,
  onPress = () => {},
}: ButtonProps) => {
  console.log('on Press is called', onPress);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: color, borderWidth: border, borderColor: bordercolor},
      ]}
      onPress={onPress}>
      <Text style={[styles.btnTitle, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  btnTitle: {fontSize: 18, fontWeight: '600'},
});
