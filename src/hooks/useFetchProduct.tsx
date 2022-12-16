import {useQuery} from 'react-query';
import axios from 'axios';

type FetchProductProps = {
  onSuccess: (val: any) => void;
  onError: (val: any) => void;
  id?: any;
};

const fetchProduct = (id: any) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};

const useFetchProduct = ({onSuccess, onError, id}: FetchProductProps) => {
  return useQuery({
    queryKey: ['fetch-product', id],
    queryFn: () => fetchProduct(id),
    onSuccess,
    onError,
    select: data => {
      return data;
    },
  });
};

export default useFetchProduct;
