import {useQueries, useQuery} from 'react-query';
import Config from 'react-native-config';

type FetchCartProps = {
  onSuccess: (val: any) => void;
  onError: (val: any) => void;
};

const fetchCart = async () => {
  const response = await fetch(`${Config.BASE_URL}/carts/5`);
  const data = await response.json();
  return data;
};

const fetchProduct = async (id: any) => {
  const response = await fetch(`${Config.BASE_URL}/products/${id}`);
  const data = await response.json();
  return data;
};

const useFetchCart = () => {
  const {data: result} = useQuery(['user'], fetchCart);
  const cartQuery = result?.products;

  const queryResults = useQueries(
    result?.products.map((x: any) => ({
      queryKey: ['test', x.productId],
      queryFn: async () => await fetchProduct(x.productId),
      enabled: !!cartQuery && !!result?.products,
    })) ?? [],
  );

  if (queryResults.length) {
    const allSuccess = queryResults.every(num => num.isSuccess === true);
    const productsData: any = [];
    if (allSuccess) {
      queryResults.map(({data}: any) => {
        productsData.push(data);
      });
    }
    if (productsData?.length) {
      return productsData;
    }
  }
};

export default useFetchCart;
