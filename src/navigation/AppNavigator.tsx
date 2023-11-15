import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ProductAddScreen,
  ProductDetailScreen,
  ProductListScreen,
} from '../screens';
import {View} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <View style={{flex: 1}} testID="NavigationContainer">
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ProductListScreen"
          screenOptions={{
            headerTitle: 'BANCO PICHINCHA',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            animation: 'simple_push',
          }}>
          <Stack.Screen
            name="ProductListScreen"
            component={ProductListScreen}
          />
          <Stack.Screen
            name="ProductDetailScreen"
            component={ProductDetailScreen}
          />
          <Stack.Screen name="ProductAddScreen" component={ProductAddScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
