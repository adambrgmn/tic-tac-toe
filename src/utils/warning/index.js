/**
 * Prints a warning in the console if it exists and if
 * the environment is equal to production.
 *
 * @param {String} message The warning message to be printed.
 * @returns {void}
 */

export default function warning(message) {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /* eslint-enable no-console */
  }

  try {
    throw new Error(message);
  /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
