import {useQueries, useQuery} from 'react-query';
import axios from 'axios';
import Config from 'react-native-config';
type FetchCartProps = {
  onSuccess: (val: any) => void;
  onError: (val: any) => void;
};

const fetchCart = () => {
  return axios.get(`${Config.BASE_URL}/carts/5`);
};

const fetchProduct = (id: any) => {
  return axios.get(`${Config.BASE_URL}/products/${id}`);
};

const useFetchCart = ({onSuccess, onError}: FetchCartProps) => {
  const {data: products} = useQuery(['user'], fetchCart);
  const userId = products;

  console.log('userId', userId);

  console.log('data getting is', products?.data?.products);
  // const test = useQueries(
  //   products?.data?.products.map((x: any) => ({
  //     queryKey: ['clientSurvey', x.productId],
  //     queryFn: async () => await fetchProduct(x.productId),
  //     enabled: !!userId,
  //   })),
  // );

  // return test;

  // return useQuery('fetch-carts', fetchCart, {
  //   onSuccess,
  //   onError,
  //   select: data => {
  //     return data;
  //   },
  //   enabled: !!userId,
  // });

  // const {data, isError, error, isLoading, isSuccess} = useQuery({
  //   queryKey: ['carts'],
  //   queryFn: () => fetchCart,
  // });
  // if (isSuccess === true) {
  //   console.log('data getting from fetch cart is complete', data.data.products);
  //   const userQueries = useQueries(
  //     data.data.products.map((x: any) => ({
  //       queryKey: ['clientSurvey', x.productId],
  //       queryFn: () => fetchProduct(x.productId),
  //     })),
  //   );
  //   const tokensData = useQueries(
  //     data.data.products.map((x: any) => {
  //       return {
  //         queryKey: x.productId + ' tokenData',
  //         queryFn: async () => await fetchProduct(x.productId),
  //       };
  //     }),
  //   );
  //   if (!tokensData.length) {
  //     console.log('nothing found');
  //   }
  //   if (tokensData.length) {
  //     tokensData.forEach(data => {
  //       if (!data) return [];
  //       if (data.isSuccess === true) {
  //         console.log('data getting is', data.data);
  //       }
  //     });
  //     console.log('data found', tokensData);
  //   }
  // }
  // console.log('carts query data');
  // console.log('config data', Config.BASE_URL);
  return useQuery('fetch-carts', fetchCart, {
    onSuccess,
    onError,
    select: data => {
      return data;
    },
  });
};

export default useFetchCart;
