import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';
import {Container} from '.';

describe('Container', () => {
  it('renders children correctly', () => {
    const {getByText} = render(
      <Container>
        <Text testID="child-text">Child</Text>
      </Container>,
    );
    expect(getByText('Child')).toBeTruthy();
  });

  it('applies margin if margins prop is true', () => {
    const {getByTestId} = render(
      <Container margins testID="container">
        <Text>Test</Text>
      </Container>,
    );
    const container = getByTestId('container');

    const paddingStyle = container.props.style.find(
      style => style.padding !== undefined,
    );

    expect(paddingStyle).toMatchObject({padding: 16});
  });
});
