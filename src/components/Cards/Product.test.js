import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ProductCard} from './Product';

describe('ProductCard', () => {
  const mockProduct = {name: 'Test Product', id: '123'};
  const mockOnPress = jest.fn();

  it('renders the product information', () => {
    const {getByText} = render(
      <ProductCard product={mockProduct} onPress={mockOnPress} />,
    );

    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('ID: 123')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const {getByText} = render(
      <ProductCard product={mockProduct} onPress={mockOnPress} />,
    );
    const card = getByText('Test Product');

    fireEvent.press(card);
    expect(mockOnPress).toHaveBeenCalledWith(mockProduct);
  });
});
