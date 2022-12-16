import React from 'react';
import {Text, View} from 'react-native';
import Headphone from '../../../../assets/svgs/Headphone.svg';
import Logo from '../../../../assets/svgs/Logo.svg';
import Cycle from '../../../../assets/svgs/Cycle.svg';
import Background from '../../../../assets/svgs/Background.svg';
import {ScaledSheet} from 'react-native-size-matters';
const Header = () => {
  return (
    <>
      <View style={styles.background}>
        <Background />
      </View>
      <View style={styles.mainContent}>
        <Headphone style={styles.headphone} />
        <View style={styles.logo}>
          <Logo style={styles.image} />
        </View>

        <View style={styles.headerTextCont}>
          <Text style={styles.headerText}>
            Easily invest in your favourite startups
          </Text>
        </View>
      </View>
      <View style={(styles.center, {width: '100%'})}>
        <Cycle style={styles.cycle} />
      </View>
    </>
  );
};

export default Header;

const styles = ScaledSheet.create({
  background: {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0},
  headerText: {
    color: '#377BF5',
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    marginBottom: 20,
    marginTop: 20,
  },
  headerTextCont: {
    width: '65%',
    alignItems: 'center',
  },
  mainContent: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '250@s',
    height: '300@vs',
  },
  headphone: {
    width: '100@s',
    height: '100@vs',
    alignItems: 'center',
    marginLeft: -250,
    marginTop: 10,
  },
  cycle: {
    width: '150@s',
    height: '150@vs',
    marginLeft: 50,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
});
