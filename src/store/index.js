import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '@reducers';
import root from '@sagas';

export default () => {
  const middleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(middleware));

  middleware.run(root);
  return store;
}