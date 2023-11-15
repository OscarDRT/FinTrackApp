module.exports = {
  createNativeStackNavigator: jest.fn().mockReturnValue({
    Navigator: ({children}) => children,
    Screen: () => null,
  }),
};
