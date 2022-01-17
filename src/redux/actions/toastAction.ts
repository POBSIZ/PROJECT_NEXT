import { action, createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import {
  ToastReducerType,
  PushToastActionParamType,
  SetToastActionParamType,
} from 'Types/toastTypes';

// PUSH_TOAST Action
export const PUSH_TOAST = 'toast/PUSH_TOAST' as const;
export const pushToast = createAction(PUSH_TOAST)<PushToastActionParamType>();

// PUSH_TOAST Action
export const SET_TOAST = 'toast/SET_TOAST' as const;
export const setToast = createAction(SET_TOAST)<SetToastActionParamType>();

// INIT_TOAST Action
export const INIT_TOAST = 'toast/INIT_TOAST' as const;
export const initToast = createAction(INIT_TOAST)<undefined>();

export const toastConstants = {
  PUSH_TOAST,
  SET_TOAST,
  INIT_TOAST,
};

const toastAction = {
  pushToast,
  setToast,
  initToast,
};
export default toastAction;
