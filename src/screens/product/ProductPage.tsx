import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StarRating from 'react-native-star-rating';
import Back from '../../../assets/svgs/Backicon.svg';
import FastImage from 'react-native-fast-image';
type ProductPageProps = {
  route: any;
  navigation: NavigationProp<{
    goBack: undefined;
  }>;
};

const ProductPage = ({route, navigation}: ProductPageProps) => {
  const {category, image, price, rating, title} = route.params;

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TouchableOpacity
        style={{marginTop: 20, marginLeft: 20}}
        onPress={handleBack}>
        <Back />
      </TouchableOpacity>

      <FastImage
        style={{
          width: '90%',
          height: '60%',
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 20,
        }}
        source={{
          uri: image,
        }}
        resizeMode={FastImage.resizeMode.center}></FastImage>

      <View style={styles.image}>
        <View style={{width: '100%'}}>
          <Text>{category}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>

      <View style={styles.rating}>
        <StarRating
          disabled={false}
          maxStars={5}
          fullStarColor={'#FDCC0D'}
          rating={rating.rate}
        />
      </View>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  image: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '85%',
    alignSelf: 'center',
    padding: 10,
  },
  title: {
    marginTop: 10,
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 25,
  },
  price: {color: 'black', fontSize: 18, fontWeight: '500'},
  rating: {width: '60%', alignSelf: 'center', marginTop: 20},
});
