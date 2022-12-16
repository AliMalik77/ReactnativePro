import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
type ProductCardProps = {
  data: {
    id: string;
    image: string;
    title: string;
    description: string;
  };
};

const ProductCard = ({data}: ProductCardProps) => {
  const {image, title, description} = data;
  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <View style={{marginLeft: 30}}>
          <FastImage
            style={styles.image}
            source={{
              uri: image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={'center'}></FastImage>
        </View>
        <View style={{marginLeft: 20}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{fontSize: 16, color: 'black'}}>{description}</Text>
          <Text style={styles.price}>$12000</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

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
