/* eslint-disable import/prefer-default-export */
/**
 * The function "escapeRegExp" takes a string as input and returns a new string with all special
 * characters escaped with a backslash.
 * @param {string} value - The input string that needs to be escaped.
 */
export const escapeRegExp = (value: string) => value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
