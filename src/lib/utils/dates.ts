// const { format } = require('date-fns');
// const jalali = require('date-fns-jalali');
// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns-jalali';

/**
 * The function formats a given date to the Shamsi calendar format.
 * @param {Date} date - The `date` parameter is a `Date` object that represents the date to be
 * formatted.
 * @returns The function `formatToShamsi` returns a string representing the input date in the Shamsi
 * calendar format (yyyy/MM/dd).
 */
// eslint-disable-next-line import/prefer-default-export
export const formatToShamsi = (date: Date) => {
  const receivedDate = new Date(date);

  // * Format the date using the Shamsi calendar
  const shamsiDate = format(receivedDate, 'yyyy/MM/dd');

  return shamsiDate;
};
