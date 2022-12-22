import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../../components/common/Card';
import useFetchCart from '../../hooks/useFetchCart';
import Colors from '../../themes/Colors';

const Cart = ({
  navigation,
}: {
  navigation: NavigationProp<{ProductView: undefined}>;
}) => {
  const products = useFetchCart();

  const handleProduct = (item: any) => {
    navigation.navigate('ProductView', item);
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>{products?.length} products in Cart</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => handleProduct(item)}>
              <Card data={item} />
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={
          <View>
            <ActivityIndicator size="large" color={Colors.Blue} />
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  title: {
    color: Colors.Black,
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
  },
});
