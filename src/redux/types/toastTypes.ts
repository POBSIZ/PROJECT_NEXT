import { ActionType } from 'typesafe-actions';
import toastAction, { toastConstants } from 'Actions/toastAction';

export interface ToastReducerType {
  is_pop: boolean;
  status: 'default' | 'error' | 'success' | 'warning';
  message: string;
}

export interface PushToastParamType {
  status: 'default' | 'error' | 'success' | 'warning';
  message: string;
}

export interface PayloadType {
  payload: ToastReducerType;
}

export type toastActionType = ActionType<typeof toastAction>;
