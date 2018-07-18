import React from 'react';
import { createStore } from './utils/store';

import { App, AppWithRouter } from './components';

import sagas from './sagas';
import reducer from './reducer';
import { routes, notFound } from './routes';

export const { store, history } = createStore(reducer, sagas);

const Boilerplate = () => (
  <App store={store}>
    <AppWithRouter history={history} routes={routes} notFound={notFound} />
  </App>
);

export default Boilerplate;
