import {useMutation} from 'react-query';
import Config from 'react-native-config';

const useEditUser = () => {
  console.log('config data', Config.BASE_URL);
  return useMutation((post: any) =>
    fetch(`${Config.BASE_URL}/users/7`, {
      body: JSON.stringify(post),
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  );
};

export default useEditUser;
