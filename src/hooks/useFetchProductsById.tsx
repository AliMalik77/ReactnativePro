import axios from 'axios';
import React from 'react';
import {View} from 'react-native';
import {useQuery} from 'react-query';

type FetchProductProps = {
  onSuccess: (val: {}) => void;
  onError: (val: {}) => void;
  id: any;
};

const fetchProduct = (data: any) => {
  //   console.log('data in fetchProduct func is ', data);
  //   const array: any = [];
  //   data.map(async (x: any) => {
  //     // console.log('x data getting is ', x);
  //     let fetchProduct = await axios.get(
  //       `https://fakestoreapi.com/products/${x.productId}`,
  //     );
  //     console.log('fetchProduct is ', fetchProduct?.data);
  //     array.push(fetchProduct?.data);
  //   });

  //   console.log('array before return', array);

  //   return array;
  //   data.forEach((x: any) => {
  //     console.log('x data in fetchProduct func is ', x.product);
  //     let fetchProduct = axios.get(
  //       `https://fakestoreapi.com/products/${x.productId}`,
  //     );
  //     console.log('fetchProduct data in fetchProduct func is ', fetchProduct);
  //   });
  //   return axios.get(`https://fakestoreapi.com/products/${data}`);
  return axios.get(`https://fakestoreapi.com/products/1`);
};

const useFetchProductsById = ({onSuccess, onError, id}: FetchProductProps) => {
  return useQuery({
    queryKey: ['fetch-product', id],
    queryFn: () => fetchProduct(id),
    onSuccess,
    onError,
    select: data => {
      //   console.log('data getting from fetch is called', data);
      return data;
    },
  });
};

export default useFetchProductsById;
