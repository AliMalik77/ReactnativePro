import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import SplashLogo from '../../../assets/svgs/Splash.svg';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import {NavigationProp} from '@react-navigation/native';

const Splash = ({
  navigation,
}: {
  navigation: NavigationProp<{Auth: undefined}>;
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SplashLogo style={styles.image} />
        <Text style={styles.name}>miventure</Text>
        <Text style={styles.description}>Easily invest in startups</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = ScaledSheet.create({
  image: {
    width: '125@s',
    height: '125@vs',
  },
  container: {
    flex: 1,
    backgroundColor: '#377BF5',
  },
  logo: {
    width: '40@s',
  },
  header: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontWeight: '800',
    color: 'white',
    fontSize: 60,
  },
  description: {
    color: 'white',
    fontSize: 25,
  },
  footerDesc: {color: 'white', fontSize: 30, fontWeight: '700'},
});
