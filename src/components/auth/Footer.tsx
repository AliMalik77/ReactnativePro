import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Circle from '../../../assets/svgs/Circle.svg';
import Colors from '../../themes/Colors';

const Footer = () => {
  return (
    <>
      <View style={styles.descriptionText}>
        <Text>
          By viewing the{' '}
          <Text style={{color: Colors.Blue}}>Offerings here</Text> , I accept
          Miventure’s <Text style={{color: Colors.Blue}}>Terms of Service</Text>{' '}
          and
          <Text style={{color: Colors.Blue}}>Privacy Policy.</Text>
        </Text>
      </View>
      <View style={styles.ball}>
        <Circle style={styles.circle} />
      </View>
    </>
  );
};

export default Footer;

const styles = StyleSheet.create({
  circle: {
    zIndex: -1,
  },
  descriptionText: {
    padding: 20,
    paddingTop: 0,
  },
  ball: {
    position: 'absolute',
    right: 0,
  },
});
