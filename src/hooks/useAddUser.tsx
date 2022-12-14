import {useQuery, useMutation, useQueryClient} from 'react-query';
import axios from 'axios';

const addNewUser = (hero: any) => {
  console.log('hero data in axios is', hero);
  return axios.post('https://fakestoreapi.com/users', hero);
};

const useAddUser = () => {
  console.log('testing add user');
  const queryClient = useQueryClient();
  return useMutation(
    (post: any) => axios.post(`https://fakestoreapi.com/users`, post),
    // fetch(`https://fakestoreapi.com/users/new_post`, {
    //   body: JSON.stringify(post),
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }),
    {
      // onSuccess: data => {
      //   queryClient.setQueryData()
      // },
    },
  );
};

// const useAddUser = ({onSuccess, onError, data1}: FetchCartProps) => {
//   return useQuery('post-user', addUser, {
//     onSuccess,
//     onError,
//     select: data => {
//       return data;
//     },
//   });
// };

// const useAddUser = () => {
//   console.log('useAddUser called');

//   return useMutation(
//     async (post: any) =>
//       await axios.post('https://fakestoreapi.com/users', post),
//     {
//       onSuccess: res => {
//         console.log('res');
//       },
//       onError: error => {
//         console.log('error');
//       },
//     },
//   );
// };

export default useAddUser;
