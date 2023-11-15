module.exports = {
  ...jest.requireActual('@react-navigation/native'),
  NavigationContainer: ({children}) => children,
};
