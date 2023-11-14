import api from './api';

const getFinancialProducts = async () => {
  try {
    const response = await api.get<CreditCard[]>('/bp/products');
    return response.data;
  } catch (error) {
    console.error(
      'Error al obtener los productos financieros:',
      JSON.stringify(error),
    );
    throw error;
  }
};

const createFinancialProduct = async (newProductData: CreditCard) => {
  try {
    const response = await api.post('/bp/products', newProductData);
    return response.data;
  } catch (error) {
    console.error(
      'Error al crear un producto financiero:',
      JSON.stringify(error),
    );
    throw error;
  }
};

const updateFinancialProduct = async (newProductData: CreditCard) => {
  try {
    const response = await api.put('/bp/products', newProductData);
    return response.data;
  } catch (error) {
    console.error(
      'Error al crear un producto financiero:',
      JSON.stringify(error),
    );
    throw error;
  }
};

const deleteFinancialProduct = async (productId: string) => {
  try {
    const response = await api.delete(`/bp/products?id=${productId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error al eliminar un producto financiero: ${productId}}`,
      JSON.stringify(error),
    );
    throw error;
  }
};

export {
  getFinancialProducts,
  createFinancialProduct,
  updateFinancialProduct,
  deleteFinancialProduct,
};
