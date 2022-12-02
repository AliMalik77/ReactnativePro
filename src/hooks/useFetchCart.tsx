import {useQuery} from 'react-query';
import axios from 'axios';

type FetchCartProps = {
  onSuccess: (val: any) => void;
  onError: (val: any) => void;
};

const fetchCart = () => {
  return axios.get('https://fakestoreapi.com/carts/5');
};

const useFetchCart = ({onSuccess, onError}: FetchCartProps) => {
  return useQuery('fetch-carts', fetchCart, {
    onSuccess,
    onError,
    select: data => {
      return data;
    },
  });
};

export default useFetchCart;
