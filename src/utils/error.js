// Functions only used to handle uncaught errors

// unrecoverable error -> crash overlay
export const uncaughtErrorInSaga = (error) => {
  console.error(error);
};

export const uncaughtErrorInReducer = (error) => {
  console.error(error);
};

export const uncaughtErrorInReact = (error, componentStack) => {
  console.error(error, componentStack);
};

// Public API
/**
 * Call this function to log an error.
 * Optionally pass a component name (e.g. AwesomeCustomComponent) to make classification easier.
 */
export const logError = (error, component) => {
  if (component) console.error(`Component: ${component}\n`, error);
  else console.error(error);
};

/**
 * Call this function to log a warning message. (Expects a string)
 * Optionally pass a component name (e.g. AwesomeCustomComponent) to make classification easier.
 */
export const logWarning = (warning, component) => {
  if (component) console.warn(`Component: ${component}\n`, warning);
  else console.warn(warning);
};
