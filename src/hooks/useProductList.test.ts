import {renderHook} from '@testing-library/react-hooks';
import * as productService from '../services/productService';
import {useProductList} from './useProductList';

jest.mock('../services/productService', () => ({
  getFinancialProducts: jest.fn(),
}));

const mockCreditCards: CreditCard[] = [
  {
    date_release: '2023-11-14T00:00:00.000+00:00',
    date_revision: '2024-11-14T00:00:00.000+00:00',
    description: 'describir',
    id: '123',
    logo: 'https://brandemia.org/sites/default/files/inline/images/logo_banco_pichincha_portada.jpg',
    name: 'Visa',
  },
  {
    date_release: '2022-11-10T00:00:00.000+00:00',
    date_revision: '2024-12-12T00:00:00.000+00:00',
    description: 'Sin pago por',
    id: '2334',
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    name: 'Visa gold',
  },
];

productService.getFinancialProducts.mockResolvedValue(mockCreditCards);

let isFocused = true;
jest.mock('@react-navigation/native', () => ({
  useIsFocused: () => isFocused,
}));

describe('useProductList', () => {
  it('debe cargar productos cuando la pantalla está enfocada', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useProductList());

    await waitForNextUpdate();

    expect(result.current.products).toEqual(mockCreditCards);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('');
  });
});
