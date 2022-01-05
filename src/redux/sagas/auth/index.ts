import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { apiLogin } from './api';
import {
    LoginParamType,
    LoginResponseType
} from 'Types/authTypes';
import {
  LoginAsync,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from 'Actions/authAction';

// LOGIN SAGA
function* LoginSaga(action: ReturnType<typeof LoginAsync.request>) {
  try {
    // action.payload == param
    const response: LoginResponseType = yield call(
      apiLogin,
      action.payload,
    );
    yield put(LoginAsync.success(response));
  } catch (error: any) {
    console.log(error);
    yield put(LoginAsync.failure(error));
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, LoginSaga);
}

export { authSaga as default };
