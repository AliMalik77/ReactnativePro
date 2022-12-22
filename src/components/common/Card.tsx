import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../themes/Colors';

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
            }}
            resizeMode="center"></Image>
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

const styles = ScaledSheet.create({
  infoContainer: {marginLeft: 20, width: '70%'},
  ml30: {marginLeft: 30},
  description: {fontSize: 16, color: Colors.Black},
  container1: {
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: Colors.BrightGray,
    backgroundColor: Colors.White,
    width: '100%',
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.Black,
    marginTop: 10,
  },
  title: {fontSize: 20, fontWeight: '600', color: Colors.Black},
  image: {
    width: '50@s',
    height: '100@vs',
    padding: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
  },
});
