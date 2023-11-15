import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CustomModal} from '.';

describe('CustomModal', () => {
  const mockClose = jest.fn();
  const mockPrimaryPress = jest.fn();
  const mockSecondaryPress = jest.fn();

  it('renders correctly when visible', () => {
    const {getByText} = render(
      <CustomModal
        isVisible={true}
        description="Test Description"
        primaryButtonTitle="Primary"
        onPrimaryPress={mockPrimaryPress}
        secondaryButtonTitle="Secondary"
        onSecondaryPress={mockSecondaryPress}
        closeModal={mockClose}
        isLoading={false}
      />,
    );

    expect(getByText('Test Description')).toBeTruthy();
    expect(getByText('Primary')).toBeTruthy();
    expect(getByText('Secondary')).toBeTruthy();
  });

  it('calls onPrimaryPress when primary button is pressed', () => {
    const {getByText} = render(
      <CustomModal
        isVisible={true}
        description="Test Description"
        primaryButtonTitle="Primary"
        onPrimaryPress={mockPrimaryPress}
        secondaryButtonTitle="Secondary"
        onSecondaryPress={mockSecondaryPress}
        closeModal={mockClose}
        isLoading={false}
      />,
    );

    fireEvent.press(getByText('Primary'));
    expect(mockPrimaryPress).toHaveBeenCalled();
  });

  it('calls onSecondaryPress when secondary button is pressed', () => {
    const {getByText} = render(
      <CustomModal
        isVisible={true}
        description="Test Description"
        primaryButtonTitle="Primary"
        onPrimaryPress={mockPrimaryPress}
        secondaryButtonTitle="Secondary"
        onSecondaryPress={mockSecondaryPress}
        closeModal={mockClose}
        isLoading={false}
      />,
    );

    fireEvent.press(getByText('Secondary'));
    expect(mockSecondaryPress).toHaveBeenCalled();
  });

  it('calls closeModal when close area is pressed', () => {
    const {getByText} = render(
      <CustomModal
        isVisible={true}
        description="Test Description"
        primaryButtonTitle="Primary"
        onPrimaryPress={mockPrimaryPress}
        secondaryButtonTitle="Secondary"
        onSecondaryPress={mockSecondaryPress}
        closeModal={mockClose}
        isLoading={false}
      />,
    );

    fireEvent.press(getByText('X'));
    expect(mockClose).toHaveBeenCalled();
  });
});
