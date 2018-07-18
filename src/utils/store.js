import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reduxCatch from 'redux-catch';
import createHistory from 'history/createMemoryHistory';

import { uncaughtErrorInSaga, uncaughtErrorInReducer } from './error';
import { objectMap } from './object';

// sanitizers for cleaning up state and actions for debug tools
const recursiveObjectMap = (root, fn) => {
  const recursor = obj =>
    objectMap(
      obj,
      child => (!!child && child.constructor === Object ? recursor(child) : fn(child)),
    );
  return recursor(root);
};
const actionSanitizer = (action) => {
  switch (action.type) {
    default:
      return action;
  }
};
const stateSanitizer = state =>
  recursiveObjectMap(state, (elm) => {
    if (!elm || !elm.constructor) return elm;
    if (elm instanceof Error) return elm.message;
    switch (elm.constructor.name) {
      default:
        return elm;
    }
  });

const createCustomStore = (reducer, sagas, customMiddlewares = []) => {
  // create history
  const history = createHistory();

  // add the middlewares
  const middlewares = [];

  middlewares.push(reduxCatch(uncaughtErrorInReducer));

  // add the router middleware
  middlewares.push(routerMiddleware(history));

  // add the saga middleware
  const sagaMiddleware = createSagaMiddleware({ onError: uncaughtErrorInSaga });
  middlewares.push(sagaMiddleware);

  // add any custom middleware
  middlewares.push(...customMiddlewares);

  // apply the middleware
  const middleware = applyMiddleware(...middlewares);

  // add the redux dev tools
  const composeEnhancers = composeWithDevTools({
    actionSanitizer,
    stateSanitizer,
  });

  // create the store
  const store = createStore(reducer, composeEnhancers(middleware));

  // add saga
  sagaMiddleware.run(sagas);

  // export
  return { store, history };
};

export { createCustomStore as createStore };
