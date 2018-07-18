import { get, clone, setWith } from 'lodash';

/**
 * Check if two objects or arrays have the same keys and values.
 */
export const shallowEqual = (v, o) => {
  if (v === o) return true;
  if (typeof v !== 'object' || typeof o !== 'object') return false;

  /* eslint-disable no-restricted-syntax */
  for (const key in v) {
    if (!(key in o) || v[key] !== o[key]) return false;
  }

  for (const key in o) {
    if (!(key in v) || v[key] !== o[key]) return false;
  }
  /* eslint-enable no-restricted-syntax */
  return true;
};

/**
 * Array.map but for objects.
 * objectMap({a:1, b:2}, (k, v) => v * 2) = {a:2, b:4}.
 */
export const objectMap = (object, f) =>
  Object.entries(object).reduce((previous, [k, v]) => {
    previous[k] = f(v, k); // eslint-disable-line no-param-reassign
    return previous;
  }, {});

/*
 * Pass through all decendents of the root and apply a function
 */
export const recursiveObjectMap = (root, fn) => {
  const recursor = obj =>
    objectMap(
      obj,
      child => (!!child && child.constructor === Object ? recursor(child) : fn(child)),
    );
  return recursor(root);
};

/**
 * Wraps an object so that accessing a non-existing property throws an error.
 * ({a:1, b:2}).c = undefined.
 * but throwUndefinedProperties({a:1, b:2}).c throws an error.
 */
export const throwUndefinedProperties = object =>
  new Proxy(object, {
    get: (target, prop) => {
      if (!(prop in target)) throw new Error(`Undefined property: ${prop}`);
      return target[prop];
    },
  });

const _stripRootDot = path => (path.startsWith('.') ? path.slice(1) : path);
const _isRoot = path => path === '.' || path === '';
export const getIn = (o, path) => (_isRoot(path) ? o : get(o, _stripRootDot(path)));
export const setIn = (obj, path, value) =>
  (_isRoot(path) ? value : setWith(clone(obj), _stripRootDot(path), value, clone));
export const updateIn = (obj, path, values) => setIn(obj, path, { ...getIn(obj, path), ...values });
