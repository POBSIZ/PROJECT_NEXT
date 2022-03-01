import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { rootSaga } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';

function configureStore() {
  const sagaMiddleware = createSagaMiddleware({});

  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(sagaMiddleware))
      : composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
