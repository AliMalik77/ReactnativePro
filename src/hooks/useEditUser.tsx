import {useMutation} from 'react-query';
import Config from 'react-native-config';

const useEditUser = () => {
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
