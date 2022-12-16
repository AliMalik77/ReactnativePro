import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useFetchProduct from '../../hooks/useFetchProduct';
import Card from '../common/Card';

type CartProps = {
  data: any;
  handleProduct: any;
};

const CartComponent = ({data, handleProduct}: CartProps) => {
  console.log('data getting isLoading', data);
  const onSuccess = (data: any) => {
    // console.log('perform side effect after data fetching', data.data);
  };

  const onError = (data: any) => {
    // console.log('perform side effect after encountering error', data);
  };
  //   useFetchProduct
  const {
    isLoading,
    data: dataa,
    isError,
    error,
    isFetching,
    refetch,
  } = useFetchProduct({
    onSuccess,
    onError,
    id: data.productId,
  });

  console.log('data getting after fetch', dataa?.data);

  return (
    <>
      {dataa?.data ? (
        <TouchableOpacity onPress={() => handleProduct(dataa?.data)}>
          <Card data={dataa?.data} />
        </TouchableOpacity>
      ) : (
        <Text> No data to display</Text>
      )}
    </>
  );
};

export default CartComponent;
