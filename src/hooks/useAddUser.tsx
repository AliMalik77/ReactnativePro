import {useMutation} from 'react-query';

const useAddUser = () => {
  return useMutation((post: any) =>
    fetch(`https://fakestoreapi.com/users/new_post`, {
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
