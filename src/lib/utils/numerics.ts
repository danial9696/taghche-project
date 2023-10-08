/**
 * * It takes a number or string, converts it to a string, and then uses a regular expression to add
 * * commas to the string
 * The function adds commas to a number or string representing a number.
 * @param {number | string} num - The parameter `num` is of type `number` or `string`. It represents
 * the number that we want to add commas to.
 * @returns The `addCommas` function takes a number or string as input and returns a string with commas
 * added to separate groups of three digits. For example, if the input is `1000000`, the function will
 * return `"1,000,000"`.
 */
export const addCommas = (num: number | string): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/**
 * *It takes a string and returns a string with all non-numeric characters removed
 * The function removes all non-numeric characters from a given string.
 * @param {string} num - The parameter `num` is a string that may contain non-numeric characters. The
 * function `removeNonNumeric` takes this string as input and returns a new string with all non-numeric
 * characters removed.
 * @returns {string} The function `removeNonNumeric` takes a string `num` as input and returns a new string with
 * all non-numeric characters removed. The regular expression `/[^0-9]/g` matches any character that is
 * not a digit (0-9) and the `replace` method replaces all such characters with an empty string.
 * Therefore, the function returns a string that contains only numeric characters.
 */
export const removeNonNumeric = (num: string): string => num.toString().replace(/\D/g, '');

/**
 * * It checks if the given string is a number or not
 * The function checks if the entered character is a valid numerical character.
 * @param {string} enteredChar - string - This is the character or string of characters that will be
 * checked to see if it contains only numerical digits.
 * @returns {void}
 */
export const numCheck = (enteredChar: string): void => {
  // * numbers only match
  const pattern = /^\d+$/;

  // TODO: Handle numeric not matching when error
  if (!pattern.test(enteredChar)) {
    try {
      throw new Error('Invalid numerical character(s) given!');
    } catch (err) {
      throw new Error('err');
    }
  }
};
