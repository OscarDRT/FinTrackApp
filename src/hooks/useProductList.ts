import {useState, useEffect} from 'react';
import {getFinancialProducts} from '../services/productService';

export const useProductList = () => {
  const [products, setProducts] = useState<CreditCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Custom hook that fetches a list of financial products and manages the state of the products, loading status, and error.
   * @returns An object with the `products` array, `isLoading` boolean, and `error` object.
   */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await getFinancialProducts();
        console.log(response);
        setProducts(response);
        setIsLoading(false);
      } catch (err) {
        //setError(err);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {products, isLoading, error};
};
