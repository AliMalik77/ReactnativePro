import {useInfiniteQuery} from 'react-query';
import Config from 'react-native-config';

const useFetchProducts = () => {
  const getData = async ({pageParam = 10}) => {
    const res = await (
      await fetch(`${Config.BASE_URL}/products?limit=${pageParam}`)
    ).json();

    return {
      data: res,
      nextPage: 10,
    };
  };
  return useInfiniteQuery('fetch-products', getData, {
    getNextPageParam: lastPage => {
      return lastPage.nextPage;
    },
  });
};

export default useFetchProducts;
