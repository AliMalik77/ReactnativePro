import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Card from '../../components/common/Card';
import useFetchCart from '../../hooks/useFetchCart';
import useFetchProduct from '../../hooks/useFetchProduct';

// const data = [
//   {
//     id: '1',
//     image: 'https://reactnative.dev/img/tiny_logo.png',
//     title: 'Babar Azam',
//     description: 'Cover Driv Documentation',
//   },
//   {
//     id: '2',
//     image: 'https://reactnative.dev/img/tiny_logo.png',
//     title: 'Virat Kohli',
//     description: 'Over the midwicket fence',
//   },
//   {
//     id: '3',
//     image: 'https://reactnative.dev/img/tiny_logo.png',
//     title: 'Abdevilliers',
//     description: 'Mr 360 Documentation',
//   },
// ];

const Cart = () => {
  const onSuccess = (data: any) => {
    // console.log('perform side effect after data fetching', data.data);
  };

  const onError = (data: any) => {
    // console.log('perform side effect after encountering error', data);
  };
  const {isLoading, data, isError, error, isFetching, refetch} = useFetchCart({
    onSuccess,
    onError,
  });

  const results = [];
  useEffect(() => {
    data?.data?.products.forEach((product: any) => {
      console.log('product is ', product);
      // const {
      //   isLoading: isLoadingProduct,
      //   data: productData,
      //   isError: productIsError,
      //   error: productError,
      //   isFetching: productIsFetching,
      //   refetch: productRefetch,
      // } = useFetchProduct({onSuccess, onError, id: product?.productId});
    });
  }, [data?.data?.products]);

  console.log('data getting in cart is ', data?.data);

  return (
    <View>
      <Text
        style={{
          color: 'black',
          marginTop: 10,
          fontSize: 20,
          fontWeight: '500',
          padding: 10,
        }}>
        {data?.data?.products?.length} products in Cart
      </Text>

      <FlatList
        data={data?.data?.products}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Card data={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  mr10: {marginRight: 10},
  option: {
    marginTop: 10,
    marginRight: 20,
    alignItems: 'flex-end',
  },

  infoIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '800',
    fontSize: 19,
  },
  topicWrapper: {
    width: '90%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  desc: {
    width: '90%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
