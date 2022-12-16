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
  const {isLoading, data, isError, error, isFetching, refetch} = useFetchCart({
    onSuccess,
    onError,
  });

  const handleProduct = (item: any) => {
    navigation.navigate('ProductView', item);
  };

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
          return <CartComponent data={item} handleProduct={handleProduct} />;
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
