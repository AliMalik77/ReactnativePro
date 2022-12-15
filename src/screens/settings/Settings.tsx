import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

const Settings = ({
  navigation,
}: {
  navigation: NavigationProp<{
    Home: undefined;
  }>;
}) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 10}}>
        <Text style={{color: 'black', fontSize: 24, fontWeight: '600'}}>
          Edit User Info
        </Text>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
});
