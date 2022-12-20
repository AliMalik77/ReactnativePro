import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type CardProps = {
  data: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
    price: number;
    rating: {count: number; rate: number};
  };
};

const Card = ({data}: CardProps) => {
  const {image, title, description, price} = data;
  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.ml30}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}></Image>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <View>
            <Text style={styles.description} numberOfLines={4}>
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
  infoContainer: {marginLeft: 20, width: '70%'},
  ml30: {marginLeft: 30},
  description: {fontSize: 16, color: 'black'},
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
