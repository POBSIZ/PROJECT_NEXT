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
} from 'Actions/authAction';

// LOGIN Saga
function* LoginSaga(action: ReturnType<typeof LoginAsync.request>) {
  try {
    // action.payload == param
    const response: LoginResponseType = yield call(apiLogin, action.payload);
    yield put(LoginAsync.success(response));
    yield put(GetProfileAsync.request(''));
    yield call(Router.push, '/');
  } catch (error: any) {
    console.log(error);
    yield put(LoginAsync.failure(error));
    yield put(InitProfile.call(INIT_PROFILE));
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
  yield takeLatest(LOGIN, LoginSaga); // 기존 작업을 모두 취소하고 실행 시킬때는 takeLatests
  yield takeLatest(GET_PROFILE, GetProfileSaga);
}

export { authSaga as default };
