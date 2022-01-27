import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import { PUSH_TOAST } from 'Actions/toastAction';
import { pushToastAsync, initToast } from 'Actions/toastAction';

// PUSH TOAST SAGA
function* pushToastSaga(action: ReturnType<typeof pushToastAsync.request>) {
  try {
    yield put(pushToastAsync.success(action.payload));
    // yield put(initToast());
  } catch (error: any) {
    console.log(error);
    yield put(pushToastAsync.failure(error));
  }
}

export function* toastSaga() {
  yield takeLatest(PUSH_TOAST, pushToastSaga);
}

export { toastSaga as default };
