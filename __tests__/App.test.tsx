import React, {ReactNode} from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';
import {SafeAreaProvider} from 'react-native-safe-area-context';

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({children}: {children: ReactNode}) => children,
}));

describe('App Component', () => {
  it('renders AppNavigator', () => {
    render(
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>,
    );
  });
});
