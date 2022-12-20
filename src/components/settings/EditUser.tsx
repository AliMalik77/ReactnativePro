import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import useEditUser from '../../hooks/useEditUser';

type EditUserProps = {
  data: {};
  setEditData: any;
};

const EditUser = ({data, setEditData}: EditUserProps) => {
  const {mutate: editUser, isSuccess} = useEditUser();

  useEffect(() => {
    editUser({
      post: data,
    });
  }, []);

  const handleEdit = () => {
    Alert.alert('Edit Successfully');
    setEditData(null);
  };

  if (isSuccess) {
    handleEdit();
  }

  return <></>;
};

export default EditUser;
