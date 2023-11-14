import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  style?: ViewStyle;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = ({
  title,
  variant = 'primary',
  style,
  loading,
  disabled,
  ...props
}: ButtonProps) => {
  const variantStyles = {
    primary: {backgroundColor: '#ffc107', textColor: '#000000'},
    secondary: {backgroundColor: '#e9edf2', textColor: '#000000'},
    success: {backgroundColor: '#28a745', textColor: '#ffffff'},
    warning: {backgroundColor: '#ffc107', textColor: '#000000'},
    error: {backgroundColor: '#dc3545', textColor: '#ffffff'},
  };

  const currentVariant = variantStyles[variant];

  const buttonStyle: ViewStyle = {
    backgroundColor: currentVariant.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 2,
    flexDirection: 'row',
    ...style,
  };

  const textStyle: TextStyle = {
    color: currentVariant.textColor,
    fontSize: 16,
    fontWeight: 'bold',
  };

  return (
    <TouchableOpacity disabled={disabled} style={buttonStyle} {...props}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={currentVariant.textColor}
          style={{marginRight: 10}}
        />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
