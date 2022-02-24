import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware({});

  const store = process.env.NEXT_PUBLIC_DEV
    ? createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
      )
    : createStore(rootReducer);

  sagaMiddleware.run(rootSaga);

  return store;
}
