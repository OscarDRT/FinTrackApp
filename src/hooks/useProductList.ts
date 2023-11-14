import {useState, useCallback} from 'react';
import {getFinancialProducts} from '../services/productService';
import {useFocusEffect} from '@react-navigation/native';

export const useProductList = () => {
  const [products, setProducts] = useState<CreditCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  /**
   * Custom hook that fetches a list of financial products and manages the state of the products, loading status, and error.
   * @returns An object with the `products` array, `isLoading` boolean, and `error` object.
   */
  useFocusEffect(
    useCallback(() => {
      const fetchProducts = async () => {
        try {
          setIsLoading(true);
          const response = await getFinancialProducts();
          console.log(response);
          setProducts(response);
          setIsLoading(false);
        } catch (err) {
          setError('Error al obtener los productos financieros');
          setIsLoading(false);
        }
      };

      fetchProducts();
    }, []),
  );

  return {products, isLoading, error};
};
