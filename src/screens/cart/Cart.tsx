import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CartComponent from '../../components/cart/Cart';
import useFetchCart from '../../hooks/useFetchCart';

const Cart = ({
  navigation,
}: {
  navigation: NavigationProp<{ProductView: undefined}>;
}) => {
  const onSuccess = (data: any) => {
    // console.log('perform side effect after data fetching', data.data);
  };

  const onError = (data: any) => {
    // console.log('perform side effect after encountering error', data);
  };
  // const {isLoading, data, isError, error, isFetching, refetch} = useFetchCart({
  //   onSuccess,
  //   onError,
  // });

  const test = useFetchCart({onSuccess, onError});
  console.log('test data loaded', test);

  const handleProduct = (item: any) => {
    navigation.navigate('ProductView', item);
  };

  return (
    <View>
      <Text style={styles.title}>
        {/* {data?.data?.products?.length} products in Cart */}
      </Text>
      {/* <FlatList
        data={data?.data?.products}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <CartComponent data={item} handleProduct={handleProduct} />;
        }}
        showsVerticalScrollIndicator={false}
      /> */}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
  },
});
