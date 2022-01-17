import { ActionType } from 'typesafe-actions';
import toastAction, { toastConstants } from 'Actions/toastAction';

export interface ToastReducerType {
  status: boolean;
  status_type: 'none' | 'error' | 'success' | 'warning' | string;
  message: string;
  payload?: any;
}

export interface PushToastActionParamType {
  status_type: 'none' | 'error' | 'success' | 'warning' | string;
  message: string;
  payload?: any;
}

export type toastActionType = ActionType<typeof toastAction>;
