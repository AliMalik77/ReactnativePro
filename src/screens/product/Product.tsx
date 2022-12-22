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
import useFetchProducts from '../../hooks/useFetchProducts';
import Colors from '../../themes/Colors';

const Product = ({
  navigation,
}: {
  navigation: NavigationProp<{ProductView: undefined; Auth: undefined}>;
}) => {
  const {data, hasNextPage, fetchNextPage} = useFetchProducts();

  const flattenData = data?.pages.flatMap((page: any) => page.data);

  const handleProduct = (item: any) => {
    navigation.navigate('ProductView', item);
  };

  const loadNext = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return (
    <View style={styles.mb80}>
      <Text style={styles.productText}>{flattenData?.length} Products</Text>

      <FlatList
        data={flattenData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => handleProduct(item)}>
              <Card data={item} />
            </TouchableOpacity>
          );
        }}
        onEndReached={loadNext}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View>
            <ActivityIndicator size="large" color={Colors.Blue} />
          </View>
        }
      />
    </View>
  );
};

export default Product;

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
  mb80: {
    marginBottom: 80,
  },
  productText: {
    color: Colors.Black,
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
  },
});
