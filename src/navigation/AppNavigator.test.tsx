import React, {ReactNode} from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './AppNavigator';

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn().mockReturnValue({
    Navigator: ({children}: {children: ReactNode}) => children,
    Screen: () => null,
  }),
}));

describe('AppNavigator Component', () => {
  it('renders the ProductListScreen', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>,
    );

    expect(getByTestId('NavigationContainer')).toBeTruthy();
  });
});
