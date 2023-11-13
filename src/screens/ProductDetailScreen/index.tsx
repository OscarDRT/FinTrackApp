import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  StyleProp,
  TextStyle,
} from 'react-native';
import {StackNavigationProps, formatDate} from '../../utils/commons';
import {Container} from '../../components/Container';

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
  onEdit: () => void;
  onDelete: () => void;
}

const ProductActions = ({onEdit, onDelete}: ProductActionsProps) => (
  <View style={styles.buttonContainer}>
    <Button title="Editar" color="#FFA500" onPress={onEdit} />
    <Button title="Eliminar" color="#FF0000" onPress={onDelete} />
  </View>
);

export const ProductDetailScreen = ({
  route,
}: StackNavigationProps<'ProductDetailScreen'>) => {
  const {product} = route.params;

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
      <ProductActions onEdit={() => {}} onDelete={() => {}} />
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
