import React, {useEffect, useMemo, useState} from 'react';
import {Container} from '../../components/Container';
import {useProductList} from '../../hooks/useProductList';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {ProductCard} from '../../components/Cards/Product';
import {StackNavigationProps} from '../../utils/commons';
import {debounce} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const CreditCardList = ({cards}: {cards: CreditCard[]}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ProductDetailScreen'>
    >();

  const filteredCards = useMemo(() => {
    return searchTerm
      ? cards.filter(card =>
          card.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : cards;
  }, [searchTerm, cards]);

  const handleSearch = useMemo(() => debounce(setSearchTerm, 500), []);

  useEffect(() => {
    const debouncedHandleSearch = handleSearch;
    return () => {
      debouncedHandleSearch.cancel();
    };
  }, [handleSearch]);

  const onPress = (product: CreditCard) => {
    navigation.navigate('ProductDetailScreen', {product});
  };

  const renderProduct = ({item}: {item: CreditCard}) => (
    <ProductCard product={item} onPress={() => onPress(item)} />
  );

  return (
    <View style={{gap: 32}}>
      <TextInput
        placeholder="Search..."
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredCards}
        keyExtractor={item => item.id}
        renderItem={renderProduct}
      />
    </View>
  );
};

export const ProductListScreen =
  ({}: StackNavigationProps<'ProductListScreen'>) => {
    /**
     * Renders a screen that displays a list of products.
     *
     * @param navigation - The navigation object provided by React Navigation.
     * @returns The rendered UI components for the product list screen.
     */
    const {products} = useProductList();

    return (
      <Container margins style={{justifyContent: 'space-between'}}>
        <CreditCardList cards={products} />
        <Text>Oscar</Text>
      </Container>
    );
  };

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 2,
    padding: 8,
  },
});
