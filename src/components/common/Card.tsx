import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type CardProps = {
  data: {
    id: any;
    category: any;
    image: any;
    title: any;
    description: any;
    price: any;
    rating: {count: any; rate: any};
  };
};

const Card = ({data}: CardProps) => {
  console.log('data in card props ', data);

  const {image, title, description, price} = data;
  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <View style={{marginLeft: 30}}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}></Image>
        </View>
        <View style={{marginLeft: 20, width: '70%'}}>
          <Text style={styles.title}>{title}</Text>
          <View>
            <Text style={{fontSize: 16, color: 'black'}} numberOfLines={4}>
              {description}
            </Text>
          </View>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container1: {
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#EAEAEA',
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginTop: 10,
  },
  title: {fontSize: 20, fontWeight: '600', color: 'black'},
  image: {
    width: 60,
    height: 100,
    padding: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
  },
});
