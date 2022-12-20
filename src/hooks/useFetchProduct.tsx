import {useQuery} from 'react-query';
import axios from 'axios';
import Config from 'react-native-config';
type FetchProductProps = {
  onSuccess: (val: any) => void;
  onError: (val: any) => void;
  id?: any;
};

const fetchProduct = (id: any) => {
  return axios.get(`${Config.BASE_URL}/products/${id}`);
};

const useFetchProduct = ({onSuccess, onError, id}: FetchProductProps) => {
  console.log('config data', Config.BASE_URL);
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
