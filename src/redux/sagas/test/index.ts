import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { apiGetCheckSession, apiGetTest } from './api';
import {
  GetCheckSessionResponseType,
  GetTestResponseType,
} from 'Types/testTypes';
import {
  getCheckSessionAsync,
  GET_CHECK_SESSION,
  getTestAsync,
  GET_TEST,
} from 'Actions/testAction';

// GET NAME SAGA
function* getCheckSessionSaga(
  action: ReturnType<typeof getCheckSessionAsync.request>,
) {
  try {
    // action.payload == param
    const response: GetCheckSessionResponseType = yield call(
      apiGetCheckSession,
      action.payload,
    );
    yield put(getCheckSessionAsync.success(response));
  } catch (error: any) {
    console.log(error);
    yield put(getCheckSessionAsync.failure(error));
  }
}

// GET TEST SAGA
function* getTestSaga(action: ReturnType<typeof getTestAsync.request>) {
  try {
    const res: GetTestResponseType = yield call(apiGetTest, action.payload);
    yield put(getTestAsync.success(res));
  } catch (error: any) {
    yield put(getTestAsync.failure(error));
  }
}

export function* testSaga() {
  yield takeLatest(GET_CHECK_SESSION, getCheckSessionSaga);
  yield takeEvery(GET_TEST, getTestSaga);
}

export { testSaga as default };
