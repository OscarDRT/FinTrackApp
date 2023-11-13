import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

/**
 * Renders a card view for a product, including the product name, ID, and an arrow icon.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {CreditCard} props.product - The product object containing the name and ID of the product.
 * @param {Function} props.onPress - The function to be called when the product card is pressed. It takes the `product` object as a parameter.
 *
 * @returns {JSX.Element} The rendered product card view.
 *
 * @example
 * import { ProductCard } from './ProductCard';
 *
 * const product = {
 *   name: 'Example Product',
 *   id: 12345,
 * };
 *
 * const handlePress = (product) => {
 *   console.log('Product pressed:', product);
 * };
 *
 * const App = () => {
 *   return (
 *     <ProductCard product={product} onPress={handlePress} />
 *   );
 * };
 */
export const ProductCard = ({
  product,
  onPress,
}: {
  product: CreditCard;
  onPress: (product: CreditCard) => void;
}): JSX.Element => {
  return (
    <Pressable onPress={() => onPress(product)}>
      <View style={styles.card}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.id}>{`ID: ${product.id}`}</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 18,
    color: '#000',
  },
});
