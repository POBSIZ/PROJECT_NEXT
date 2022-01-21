import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutablejs';
import { persistReducer } from 'redux-persist';
// import storage from "redux-persist/lib/storage";
import storage from 'redux-persist/lib/storage/session';

import { all } from 'redux-saga/effects';

import Sagas from '../sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  // blacklist: [],
};

import testReducer from './testReducer';
import authReducer from './authReducer';
import toastReducer from './toastReducer';

const rootReducer = combineReducers({
  testReducer,
  authReducer,
  toastReducer,
});

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all(Sagas);
}
