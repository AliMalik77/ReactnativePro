import {useQuery, useMutation} from 'react-query';
import axios from 'axios';

type FetchCartProps = {
  onSuccess: (val: any) => void;
  onError: (val: any) => void;
  data1: any;
};

const addUser = () => {
  const data1 = {
    email: 'ali@gmail.com',
    username: 'ali',
    password: '123456',
    name: {
      firstname: 'ali',
      lastname: 'malik',
    },
    address: {
      city: 'kilcoole',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496',
      },
    },
    phone: '03201484476',
  };
  return axios.post('https://fakestoreapi.com/users', {data1});
};

const addNewUser = (hero: any) => {
  return axios.post('https://fakestoreapi.com/users', hero);
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

const useAddUser = () => {
  return useMutation(addNewUser);
};

export default useAddUser;
