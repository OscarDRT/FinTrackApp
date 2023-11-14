import React, {useState} from 'react';
import {
  StackNavigationProps,
  convertToISO8601,
  formatDateToDDMMYYYY,
} from '../../utils/commons';
import {Formik} from 'formik';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import * as yup from 'yup';
import {Button} from '../../components/Button';
import {Container} from '../../components/Container';
import {TextField} from '../../components/TextField';
import {
  createFinancialProduct,
  updateFinancialProduct,
} from '../../services/productService';

const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;

const validationSchema = yup.object({
  id: yup.string().trim().required('Este campo es requerido!'),
  name: yup.string().trim().required('Este campo es requerido!'),
  description: yup.string().trim().required('Este campo es requerido!'),
  logo: yup.string().trim().required('Este campo es requerido!'),
  date_release: yup
    .string()
    .matches(dateRegex, 'Formato de fecha inválido (DD/MM/YYYY)')
    .required('Este campo es requerido!'),
  date_revision: yup
    .string()
    .matches(dateRegex, 'Formato de fecha inválido (DD/MM/YYYY)')
    .required('Este campo es requerido!'),
});

export const ProductAddScreen = ({
  navigation,
  route,
}: StackNavigationProps<'ProductAddScreen'>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {product} = route.params ?? {};

  const initialValues = {
    id: '',
    name: '',
    description: '',
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: '',
    date_revision: '',
  };

  const onSubmit = async (values: CreditCard) => {
    setIsLoading(true);
    try {
      const productData = {
        ...values,
        date_release: convertToISO8601(values.date_release),
        date_revision: convertToISO8601(values.date_revision),
      };

      if (product) {
        const updateProduct = await updateFinancialProduct(productData);
        console.log('Producto actualizado con éxito:', updateProduct);
      } else {
        const createdProduct = await createFinancialProduct(productData);
        console.log('Producto creado con éxito:', createdProduct);
      }

      navigation.navigate('ProductListScreen');
    } catch (error) {
      console.error('Error al crear el producto:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik<CreditCard>
      initialValues={
        product
          ? {
              ...product,
              date_release: formatDateToDDMMYYYY(product.date_release),
              date_revision: formatDateToDDMMYYYY(product.date_revision),
            }
          : initialValues
      }
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        setValues,
      }) => (
        <Container margins>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{flex: 1}}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1, gap: 16, paddingBottom: 32}}>
              <TextField
                value={values.id}
                onChangeText={handleChange('id')}
                onBlur={() => handleBlur('id')}
                title="ID"
                maxLength={10}
                error={errors.id}
                touched={touched.id}
                editable={!product}
              />

              <TextField
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => handleBlur('name')}
                title="Nombre"
                maxLength={20}
                error={errors.name}
                touched={touched.name}
              />

              <TextField
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={() => handleBlur('description')}
                title="Descripcion"
                maxLength={40}
                error={errors.description}
                touched={touched.description}
              />

              <TextField
                value={values.logo}
                onChangeText={handleChange('logo')}
                onBlur={() => handleBlur('logo')}
                title="Logo"
                error={errors.logo}
                touched={touched.logo}
              />

              <TextField
                value={values.date_release}
                onChangeText={handleChange('date_release')}
                onBlur={() => handleBlur('date_release')}
                title="Fecha de Lanzamiento"
                placeholder="DD/MM/YYYY"
                maxLength={10}
                error={errors.date_release}
                touched={touched.date_release}
              />

              <TextField
                value={values.date_revision}
                onChangeText={handleChange('date_revision')}
                onBlur={() => handleBlur('date_revision')}
                title="Fecha de Revisión"
                placeholder="DD/MM/YYYY"
                maxLength={10}
                error={errors.date_revision}
                touched={touched.date_revision}
              />
            </ScrollView>

            <View style={{gap: 8}}>
              <Button
                onPress={() => handleSubmit()}
                title="Enviar"
                loading={isLoading}
                disabled={isLoading}
              />
              <Button
                onPress={() => setValues(initialValues)}
                title="Reiniciar"
                variant="secondary"
                loading={isLoading}
                disabled={isLoading}
              />
            </View>
          </KeyboardAvoidingView>
        </Container>
      )}
    </Formik>
  );
};
