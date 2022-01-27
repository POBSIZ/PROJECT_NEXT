import { action, createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import {
  ToastReducerType,
  PushToastParamType,
} from 'Types/toastTypes';
import { ErrorInfo } from 'react';

// PUSH_TOAST Action
export const PUSH_TOAST = 'toast/PUSH_TOAST' as const;
export const PUSH_TOAST_SUCCESS = 'toast/PUSH_TOAST_SUCCESS' as const;
export const PUSH_TOAST_ERROR = 'toast/PUSH_TOAST_ERROR' as const;
export const pushToastAsync = createAsyncAction(
  PUSH_TOAST,
  PUSH_TOAST_SUCCESS,
  PUSH_TOAST_ERROR,
)<any, PushToastParamType, any>();

// INIT_TOAST Action
export const INIT_TOAST = 'toast/INIT_TOAST' as const;
export const initToast = createAction(INIT_TOAST)<undefined>();

export const toastConstants = {
  PUSH_TOAST,
  PUSH_TOAST_SUCCESS,
  PUSH_TOAST_ERROR,
  INIT_TOAST,
};

const toastAction = {
  pushToastAsync,
  initToast,
};
export default toastAction;
