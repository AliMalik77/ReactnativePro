import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Card from '../../components/common/Card';

const data = [
  {
    id: '1',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Babar Azam',
    description: 'Cover Driv Documentation',
  },
  {
    id: '2',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Virat Kohli',
    description: 'Over the midwicket fence',
  },
  {
    id: '3',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'Abdevilliers',
    description: 'Mr 360 Documentation',
  },
];

const Cart = () => {
  return (
    <View>
      <Text
        style={{
          color: 'black',
          marginTop: 50,
          fontSize: 20,
          fontWeight: '500',
          padding: 10,
        }}>
        {data.length} items
      </Text>

      <FlatList
        data={data}
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
