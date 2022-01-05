import { combineReducers } from 'redux';
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

import test from './testReducer';
import auth from './authReducer'

const rootReducer = combineReducers({
  test,
  auth,
});

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all(Sagas);
}
