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

export {getFinancialProducts};
