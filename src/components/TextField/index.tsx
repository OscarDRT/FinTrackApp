import React from 'react';
import {TextInput, Text, View, TextInputProps, StyleSheet} from 'react-native';

interface TextFieldProps extends TextInputProps {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  error: string | undefined;
  touched: boolean | undefined;
}

export const TextField = ({
  title,
  value,
  onChangeText,
  onBlur,
  error,
  touched,
  ...textInputProps
}: TextFieldProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={styles.searchInput}
        placeholderTextColor={'#ccc'}
        {...textInputProps}
      />
      {touched && error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {color: 'black', fontSize: 16, fontWeight: '600', marginBottom: 4},
  error: {color: 'red', fontSize: 14, fontWeight: '600', marginBottom: 4},
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 2,
    padding: 8,
    color: 'black',
  },
});
