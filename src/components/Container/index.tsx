import React from 'react';
import {StyleProp, ViewStyle, StatusBar, View} from 'react-native';

interface MainContainerProps {
  margins?: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export const Container: React.FC<MainContainerProps> = ({
  style,
  margins,
  children,
}) => {
  const horizontalMargin = 16;

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: 'white',
          padding: margins ? horizontalMargin : 0,
        },
        style,
      ]}>
      <StatusBar hidden />
      {children}
    </View>
  );
};
