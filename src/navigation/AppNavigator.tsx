import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductDetailScreen, ProductListScreen} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductListScreen"
        screenOptions={{
          headerTitle: 'BANCO PICHINCHA',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
