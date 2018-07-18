// SELECTORS
const debugMode = globalState =>
  globalState.router.location && globalState.router.location.hash === '#debug';

const productionMode = globalState =>
  global.ENVIRONMENT === 'production' ||
  (globalState.router.location && globalState.router.location.hash === '#production');

const hash = globalState => (globalState.router.location ? globalState.router.location.hash : '');

export const RouterSelectors = {
  debugMode,
  productionMode,
  hash,
};
