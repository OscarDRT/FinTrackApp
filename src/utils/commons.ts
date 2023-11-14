import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/**
 * Formats a date string into a formatted date string in the format "month day, year".
 *
 * @param dateString - A string representing a date in the format "YYYY-MM-DD".
 * @returns The formatted date string in the format "month day, year".
 *
 * @example
 * const formattedDate = formatDate('2022-01-01');
 * console.log(formattedDate); // Output: "January 1, 2022"
 */
export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString
    .split('-')
    .map(part => parseInt(part, 10));
  const date = new Date(Date.UTC(year, month - 1, day));

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
};

/**
 * Converts a date string in the format "dd/mm/yyyy" to the ISO 8601 format.
 *
 * @param {string} dateString - The date string to convert.
 * @returns {string} The date string in the ISO 8601 format.
 * @example
 * const dateString = "25/12/2022";
 * const isoDate = convertToISO8601(dateString);
 * console.log(isoDate); // Output: "2022-12-25T00:00:00.000Z"
 */
export const convertToISO8601 = (dateString: string): string => {
  const [day, month, year] = dateString
    .split('/')
    .map(part => parseInt(part, 10));
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toISOString();
};

/**
 * Converts a date string in the format "dd/mm/yyyy" to the ISO 8601 format.
 *
 * @param {string} dateString - The date string to convert in the format "dd/mm/yyyy".
 * @returns {string} The date string in the ISO 8601 format.
 * @example
 * const date = "31/12/2022";
 * const isoDate = formatDateToDDMMYYYY(date);
 * console.log(isoDate); // Output: "2022-12-31"
 */
export const formatDateToDDMMYYYY = (dateString: string): string => {
  const [year, month, day] = dateString
    .split('-')
    .map(part => parseInt(part, 10));
  const date = new Date(Date.UTC(year, month - 1, day));

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC',
  };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
};

export interface StackNavigationProps<
  RouteName extends keyof RootStackParamList,
> {
  navigation: NativeStackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
}
