module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    setupFiles: ['<rootDir>/jest/setup.js'],
    moduleNameMapper: {
      '@react-navigation/native':
        '<rootDir>/__mocks__/@react-navigation/native.js',
      '@react-navigation/native-stack':
        '<rootDir>/__mocks__/@react-navigation/native-stack.js',
    },
  },
};
