import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Container} from '../../components/Container';
import {useProductList} from '../../hooks/useProductList';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {ProductCard} from '../../components/Cards/Product';
import {StackNavigationProps} from '../../utils/commons';
import {debounce} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from '../../components/Button';

/**
 * Renders a list of credit cards with search functionality.
 *
 * @component
 * @example
 * const cards = [
 *   { id: 1, name: 'Card 1' },
 *   { id: 2, name: 'Card 2' },
 *   { id: 3, name: 'Card 3' },
 * ];
 * return <CreditCardList cards={cards} />;
 *
 * @param {Object} props - The component props.
 * @param {CreditCard[]} props.cards - An array of credit card objects to be displayed in the list.
 * @returns {JSX.Element} - The rendered component.
 */
export const CreditCardList = ({cards}: {cards: CreditCard[]}): JSX.Element => {
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

  const onPress = useCallback(
    (product: CreditCard) => {
      navigation.navigate('ProductDetailScreen', {product});
    },
    [navigation],
  );

  const renderProduct = useCallback(
    ({item}: {item: CreditCard}) => (
      <ProductCard product={item} onPress={() => onPress(item)} />
    ),
    [onPress],
  );

  const listHeaderComponent = useCallback(
    () => (
      <Text style={{marginVertical: 8, color: '#ccc'}}>{`${
        filteredCards.length
      } producto${filteredCards.length === 1 ? '' : 's'}`}</Text>
    ),
    [filteredCards],
  );

  return (
    <View style={{flex: 1, gap: 32}}>
      <TextInput
        placeholder="Search..."
        onChangeText={handleSearch}
        style={styles.searchInput}
        placeholderTextColor={'#ccc'}
      />
      <FlatList
        data={filteredCards}
        keyExtractor={item => item.id}
        renderItem={renderProduct}
        ListHeaderComponent={listHeaderComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export const ProductListScreen = ({
  navigation,
}: StackNavigationProps<'ProductListScreen'>) => {
  const {products} = useProductList();

  const onNavigate = useCallback(() => {
    navigation.navigate('ProductAddScreen');
  }, [navigation]);

  return (
    <Container margins style={{justifyContent: 'flex-start'}}>
      <CreditCardList cards={products} />
      <Button title="Agregar" style={{marginTop: 16}} onPress={onNavigate} />
    </Container>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 2,
    padding: 8,
    color: 'black',
  },
});
