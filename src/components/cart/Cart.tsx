import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import useFetchProduct from '../../hooks/useFetchProduct';
import Card from '../common/Card';

type CartProps = {
  data: {
    productId: number;
    quantity: number;
  };
  handleProduct: (val: {}) => void;
};

const CartComponent = ({data, handleProduct}: CartProps) => {
  const onSuccess = (data: any) => {
    // console.log('perform side effect after data fetching', data.data);
  };

  const onError = (data: any) => {
    // console.log('perform side effect after encountering error', data);
  };

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
