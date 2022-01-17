import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import { ToastReducerType, PushToastActionParamType } from 'Types/toastTypes';

// PUSH_TOAST Action
export const PUSH_TOAST = 'toast/PUSH_TOAST' as const;
export const pushToast = createAction(PUSH_TOAST)<PushToastActionParamType>();

export const toastConstants = {
  PUSH_TOAST,
};

const toastAction = {
  pushToast,
};
export default toastAction;
