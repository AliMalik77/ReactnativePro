import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Card from '../../components/common/Card';
import useFetchProducts from '../../hooks/useFetchProducts';

const Product = ({
  navigation,
}: {
  navigation: NavigationProp<{ProductView: undefined; Auth: undefined}>;
}) => {
  const onSuccess = (data: any) => {
    // console.log('perform side effect after data fetching', data.data);
  };

  const onError = (data: any) => {
    // console.log('perform side effect after encountering error', data);
  };

  const {
    isLoading,
    data,
    isError,
    error,
    isFetching,
    refetch,
    hasNextPage,
    fetchNextPage,
  } = useFetchProducts();

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>An error occurred while fetching data</Text>;
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
    color: 'black',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
  },
});
