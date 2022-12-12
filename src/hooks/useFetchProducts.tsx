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
  console.log('type', typeof onSuccess);

  return useQuery('fetch-products', fetchProducts, {
    onSuccess,
    onError,
    select: data => {
      return data;
    },
  });
  // ['fetch-products', id],
  // id !== null ? fetchProduct : fetchProducts,
  // fetchProducts,
  // () => fetchProducts(id),
  // {
  //   onSuccess,
  //   onError,
  //   select: data => {
  //     return data;
  //   },
  // enabled: !!Boolean(id),
  // },
};

export default useFetchProducts;
