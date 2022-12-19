import {useQuery} from 'react-query';
import axios from 'axios';

type FetchProductProps = {
  onSuccess: (val: {}) => void;
  onError: (val: {}) => void;
};

const fetchProducts = () => {
  return axios.get(`https://fakestoreapi.com/products?limit=10`);
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
