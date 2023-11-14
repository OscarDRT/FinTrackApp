import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('es-ES', options).format(new Date(dateString));
};

export const convertToISO8601 = (dateString: string) => {
  const [day, month, year] = dateString
    .split('/')
    .map(part => parseInt(part, 10));
  const date = new Date(year, month - 1, day);
  return date.toISOString();
};

export const formatDateToDDMMYYYY = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  return new Intl.DateTimeFormat('es-ES', options).format(new Date(dateString));
};

export interface StackNavigationProps<
  RouteName extends keyof RootStackParamList,
> {
  navigation: NativeStackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
}
