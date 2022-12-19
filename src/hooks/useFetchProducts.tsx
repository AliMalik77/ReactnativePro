import {useInfiniteQuery, useQuery} from 'react-query';
import axios from 'axios';

type FetchProductProps = {
  onSuccess: (val: {}) => void;
  onError: (val: {}) => void;
};

const fetchProducts = (limit: number) => {
  console.log('limit getting products', limit);

  return axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
};

// const useFetchProducts = ({onSuccess, onError}: FetchProductProps) => {
//   return useQuery('fetch-products', fetchProducts, {
//     onSuccess,
//     onError,
//     select: data => {
//       return data;
//     },
//   });
// };

// const useFetchProducts = ({onSuccess, onError}: FetchProductProps) => {
//   return useInfiniteQuery(
//     'fetch-products', fetchProducts, {
//       getNextPageParam: ()
//     onSuccess,
//     onError,
//     select: data => {
//       return data;
//     },
//   });
// };

const useFetchProducts = () => {
  const getData = async ({pageParam = 10}) => {
    const res = await (
      await fetch(`https://fakestoreapi.com/products?limit=${pageParam}`)
    ).json();

    return {
      data: res,
      nextPage: 10,
    };
  };
  return useInfiniteQuery('fetch-products', getData, {
    getNextPageParam: lastPage => {
      if (lastPage.data.length < 10) return undefined;
      return lastPage.nextPage;
    },
  });
};

export default useFetchProducts;
