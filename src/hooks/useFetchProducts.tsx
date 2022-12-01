import {useQuery} from 'react-query';
import axios from 'axios';

type FetchProductProps = {
  onSuccess: (val: any) => void;
  onError: (val: any) => void;
};

const fetchProducts = () => {
  return axios.get('https://fakestoreapi.com/products/1');
};

const useFetchProducts = ({onSuccess, onError}: FetchProductProps) => {
  return useQuery('fetch-products', fetchProducts, {
    onSuccess,
    onError,
    select: data => {
      return data;
    },
  });
};

export default useFetchProducts;
