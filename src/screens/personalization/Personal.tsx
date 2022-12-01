import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

const Personal = ({
  navigation,
}: {
  navigation: NavigationProp<{
    Notifications: undefined;
  }>;
}) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};
export default Personal;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
