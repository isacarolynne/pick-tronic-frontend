import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/pt-br';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.locale('pt-br');
dayjs.tz.setDefault('America/Sao_Paulo');

// const ISO_8601_PATTERN = 'YYYY-MM-DD';
const BRAZILIAN_PATTERN = 'DD/MM/YYYY';

/**
 * Format a date into a string, using this model: `DD/MM/YYYY`.
 * If date is invalid, then returns an empty string.
 * @param {Date} date - Date object or ISO 8601 string.
 */
export const formatDateToBrazilian = (date: Date | string) => {
  if (!date) {
    return '';
  }

  return dayjs(date).format(BRAZILIAN_PATTERN);
};
