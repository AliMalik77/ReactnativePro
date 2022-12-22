import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import UserForm from '../../components/auth/UserForm';
import Colors from '../../themes/Colors';
import useEditUser from '../../hooks/useEditUser';

type SettingsProps = {
  navigation: NavigationProp<{
    Home: undefined;
  }>;
};

const Settings = ({navigation}: SettingsProps) => {
  const {mutate: editUser, isSuccess} = useEditUser();

  const onSubmit = (data: any) => {
    editUser({
      post: data,
    });
    if (isSuccess === true) {
      Alert.alert('User updated successfully');
    }
  };

  const onInvalid = (errors: any) => {
    console.error(errors);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.detail}>
          <View style={styles.alignself}>
            <Text style={styles.title}>Edit User Info</Text>
          </View>

          <View>
            <UserForm onSubmit={onSubmit} onInvalid={onInvalid} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  title: {color: Colors.Black, fontSize: 24, fontWeight: '600'},
  alignself: {alignSelf: 'center'},
  detail: {marginTop: 10, padding: 20},
  container: {flex: 1, alignItems: 'center', backgroundColor: Colors.White},
});
