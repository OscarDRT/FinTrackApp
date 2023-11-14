import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StyleProp,
  TextStyle,
} from 'react-native';
import {StackNavigationProps, formatDate} from '../../utils/commons';
import {Container} from '../../components/Container';
import {Button} from '../../components/Button';
import {CustomModal} from '../../components/Modal';
import {deleteFinancialProduct} from '../../services/productService';

interface DetailRowProps {
  label: string;
  content: string;
  contentStyle?: StyleProp<TextStyle>;
}

const DetailRow = ({label, content, contentStyle}: DetailRowProps) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.textAlignRight, contentStyle]}>{content}</Text>
  </View>
);

interface ProductActionsProps {
  product: CreditCard;
  onEdit: () => void;
  onDelete: () => void;
}

const ProductActions = ({onEdit, onDelete, product}: ProductActionsProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false); // New loading state

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  const handleDelete = () => {
    setIsLoading(true);
    try {
      onDelete();
      closeModal();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <CustomModal
        isVisible={isVisible}
        closeModal={closeModal}
        description={`¿Estás seguro de eliminar el producto ${product.name}?`}
        primaryButtonTitle="Confirmar"
        onPrimaryPress={handleDelete}
        secondaryButtonTitle="Cancelar"
        onSecondaryPress={closeModal}
        isLoading={isLoading}
      />
      <View style={styles.buttonContainer}>
        <View style={{flex: 1}}>
          <Button title="Eliminar" onPress={openModal} variant="error" />
        </View>
      </View>
    </>
  );
};

export const ProductDetailScreen = ({
  route,
  navigation,
}: StackNavigationProps<'ProductDetailScreen'>) => {
  const {product} = route.params;

  const onDelete = async () => {
    const productId = product.id;
    try {
      const result = await deleteFinancialProduct(productId);
      console.log(`Producto financiero eliminado con éxito: ${productId}`);
      navigation.canGoBack() && navigation.goBack();
      return result;
    } catch (error) {
      console.error(
        `Error al eliminar un producto financiero con ID: ${productId}`,
        JSON.stringify(error),
      );
      throw error;
    }
  };

  return (
    <Container margins style={{justifyContent: 'space-between'}}>
      <View style={styles.containerPadding}>
        <DetailRow
          label={`ID: ${product.id}`}
          content={''}
          contentStyle={styles.id}
        />
        <Text style={styles.extraInfo}>Información extra</Text>
        <View style={styles.detailContainer}>
          <DetailRow label="Nombre" content={product.name} />
          <DetailRow
            label="Descripción"
            content={product.description}
            contentStyle={styles.flex}
          />
          <Text style={styles.label}>Logo</Text>
          <View style={styles.logoContainer}>
            {product.logo && (
              <Image source={{uri: product.logo}} style={styles.logo} />
            )}
          </View>
          <DetailRow
            label="Fecha liberación"
            content={formatDate(product.date_release)}
          />
          <DetailRow
            label="Fecha revisión"
            content={formatDate(product.date_revision)}
          />
        </View>
      </View>
      <ProductActions product={product} onEdit={() => {}} onDelete={onDelete} />
    </Container>
  );
};

const styles = StyleSheet.create({
  containerPadding: {
    paddingHorizontal: 16,
  },
  flex: {
    flex: 1,
  },
  textAlignRight: {
    textAlign: 'right',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 32,
  },
  id: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  extraInfo: {
    fontStyle: 'italic',
    color: 'black',
  },
  detailContainer: {
    marginVertical: 20,
    gap: 4,
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
