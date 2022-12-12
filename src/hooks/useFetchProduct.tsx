import {useQuery} from 'react-query';
import axios from 'axios';

type FetchProductProps = {
  onSuccess: (val: any) => void;
  onError: (val: any) => void;
  id?: any;
};

// const fetchProducts = (id: any) => {
//   console.log('id getting is complete', id);
//   return axios.get(`https://fakestoreapi.com/products?limit=5&id=${id}`);
// };

const fetchProduct = (id: any) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};

const useFetchProduct = ({onSuccess, onError, id}: FetchProductProps) => {
  console.log('id testing', id);

  return useQuery({
    queryKey: ['fetch-product', id],
    queryFn: () => fetchProduct(id),
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

export default useFetchProduct;
