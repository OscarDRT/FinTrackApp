import {convertToISO8601, formatDate, formatDateToDDMMYYYY} from './commons';

describe('formatDate', () => {
  it('formats "2022-01-01" as "1 de enero de 2022"', () => {
    expect(formatDate('2022-01-01')).toBe('1 de enero de 2022');
  });
});

describe('convertToISO8601', () => {
  it('converts "25/12/2022" to ISO 8601 format', () => {
    expect(convertToISO8601('25/12/2022')).toBe('2022-12-25T00:00:00.000Z');
  });
});

describe('formatDateToDDMMYYYY', () => {
  it('formats "2022-12-31" as "31/12/2022"', () => {
    expect(formatDateToDDMMYYYY('2022-12-31')).toBe('31/12/2022');
  });
});
