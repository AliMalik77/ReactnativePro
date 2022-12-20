import {useMutation} from 'react-query';
import Config from 'react-native-config';

const useAddUser = () => {
  console.log('config data', Config.BASE_URL);

  return useMutation((post: any) =>
    fetch(`${Config.BASE_URL}/users/new_post`, {
      body: JSON.stringify(post),
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  );
};

export default useAddUser;
