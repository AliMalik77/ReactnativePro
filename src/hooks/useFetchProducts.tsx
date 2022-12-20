import {useInfiniteQuery} from 'react-query';
import Config from 'react-native-config';

type FetchProductProps = {
  onSuccess: (val: {}) => void;
  onError: (val: {}) => void;
};

const useFetchProducts = () => {
  console.log('config data', Config.BASE_URL);
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
      // if (lastPage.data.length < 10) return undefined;
      return lastPage.nextPage;
    },
  });
};

export default useFetchProducts;
