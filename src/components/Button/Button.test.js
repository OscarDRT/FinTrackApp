import React from 'react';
import {render} from '@testing-library/react-native';
import {Button} from '.';

describe('Button Component', () => {
  it('renders primary variant correctly', () => {
    const {getByTestId} = render(
      <Button title="Test" variant="primary" testID="button-test" />,
    );
    const button = getByTestId('button-test');
    expect(button.props.style).toMatchObject({backgroundColor: '#ffc107'});
  });

  it('renders secondary variant correctly', () => {
    const {getByTestId} = render(
      <Button title="Test" variant="secondary" testID="button-test" />,
    );
    const button = getByTestId('button-test');
    expect(button.props.style).toMatchObject({backgroundColor: '#e9edf2'});
  });

  it('renders error variant correctly', () => {
    const {getByTestId} = render(
      <Button title="Test" variant="error" testID="button-test" />,
    );
    const button = getByTestId('button-test');
    expect(button.props.style).toMatchObject({backgroundColor: '#d50606'});
  });

  it('shows activity indicator when loading', () => {
    const {getByTestId} = render(
      <Button title="Test" loading testID="button-test" />,
    );
    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  });

  it('is disabled when disabled prop is true', () => {
    const {getByTestId} = render(
      <Button title="Test" disabled testID="button-test" />,
    );
    const button = getByTestId('button-test');
    // Verifica si la opacidad del botón es menor cuando está deshabilitado.
    expect(button.props.style.opacity).toBeLessThan(1);
  });
});
