import {useMutation} from 'react-query';

const useEditUser = () => {
  return useMutation((post: any) =>
    fetch(`https://fakestoreapi.com/users/7`, {
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
