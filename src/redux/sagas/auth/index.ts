import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { apiLogin, apiGetProfile } from './api';
import { LoginResponseType, GetProfileResponseType } from 'Types/authTypes';
import Router from 'next/router';
import {
  LoginAsync,
  LOGIN,
  GetProfileAsync,
  GET_PROFILE,
  InitProfile,
  INIT_PROFILE,
  LogoutAsync,
  LOGOUT,
} from 'Actions/authAction';

import { pushToastAsync } from 'Actions/toastAction';

// LOGIN Saga
function* LoginSaga(action: ReturnType<typeof LoginAsync.request>) {
  try {
    // action.payload == param
    const response: LoginResponseType = yield call(apiLogin, action.payload);
    yield put(LoginAsync.success(response));
    yield put(GetProfileAsync.request(''));
    yield call(Router.push, '/');
    yield put(
      pushToastAsync.request({
        status: 'success',
        message: '로그인에 성공 하였습니다.',
      }),
    );
  } catch (error: any) {
    console.log(error);
    yield put(LoginAsync.failure(error));
    yield put(InitProfile.call(INIT_PROFILE));
    yield put(
      pushToastAsync.request({
        status: 'error',
        message: `로그인에 실패했습니다.`,
      }),
    );
  }
}

// LOGOUT Saga
function* LogoutSaga(action: ReturnType<typeof LogoutAsync.request>) {
  try {
    yield put(LogoutAsync.success());
    yield put(
      pushToastAsync.request({
        status: 'error',
        message: '로그아웃 하였습니다.',
      }),
    );
  } catch (error: any) {
    console.log(error);
    yield put(LogoutAsync.failure(error));
  }
}

// GET_PROFILE Saga
function* GetProfileSaga(action: ReturnType<typeof GetProfileAsync.request>) {
  try {
    const res: GetProfileResponseType = yield call(
      apiGetProfile,
      action.payload,
    );
    yield put(GetProfileAsync.success(res));
  } catch (error: any) {
    console.log(error);
    yield put(GetProfileAsync.failure(error));
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, LoginSaga); // 여러번 요청이 들어올 시 가장 마지막에 들어온 요청만 실행
  yield takeLatest(GET_PROFILE, GetProfileSaga);
  yield takeLatest(LOGOUT, LogoutSaga);
}

export { authSaga as default };
