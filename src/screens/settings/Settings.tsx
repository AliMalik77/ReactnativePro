import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import UserForm from '../../components/auth/UserForm';

import EditUser from '../../components/settings/EditUser';

type SettingsProps = {
  navigation: NavigationProp<{
    Home: undefined;
  }>;
};

const Settings = ({navigation}: SettingsProps) => {
  const [editData, setEditData] = useState(null);

  const onSubmit = (data: any) => {
    setEditData(data);
  };

  const onInvalid = (errors: any) => {
    console.error(errors);
  };
  return (
    <>
      {editData ? (
        <EditUser data={editData} setEditData={setEditData} />
      ) : (
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
      )}
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  title: {color: 'black', fontSize: 24, fontWeight: '600'},
  alignself: {alignSelf: 'center'},
  detail: {marginTop: 10, padding: 20},
  container: {flex: 1, alignItems: 'center', backgroundColor: '#fff'},
});
