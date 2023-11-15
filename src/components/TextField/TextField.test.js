import React from 'react';
import {render} from '@testing-library/react-native';
import {TextField} from '.';

describe('TextField', () => {
  const mockOnChangeText = jest.fn();
  const mockOnBlur = jest.fn();

  it('renders the title and text input', () => {
    const {getByText, getByPlaceholderText} = render(
      <TextField
        title="Test Title"
        value=""
        onChangeText={mockOnChangeText}
        onBlur={mockOnBlur}
        placeholder="Test Placeholder"
        error={undefined}
        touched={undefined}
      />,
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByPlaceholderText('Test Placeholder')).toBeTruthy();
  });

  it('displays error message when touched and error is present', () => {
    const {getByText} = render(
      <TextField
        title="Test Title"
        value=""
        onChangeText={mockOnChangeText}
        onBlur={mockOnBlur}
        placeholder="Test Placeholder"
        error="Test Error"
        touched={true}
      />,
    );

    expect(getByText('Test Error')).toBeTruthy();
  });
});
