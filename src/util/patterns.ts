/**
 * Regex that matches valid US phone numbers
 */
export const PHONE_NUMBER_REGEX: RegExp =
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

/**
 * Regex that matches email addresses of a valid format
 */
export const EMAIL_REGEX: RegExp =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

/**
 * Regex that matches strings containing only letters
 */
export const LETTERS_ONLY_REGEX: RegExp = /^[A-Za-z]+$/i;

/**
 * Regex that matches strings containing only non-digits
 */
export const NON_DIGIT_REGEX: RegExp = /\D/g;
