import { ActionType } from 'typesafe-actions';
import toastAction, { toastConstants } from 'Actions/toastAction';

export interface ToastObjectType {
  is_pop: boolean;
  status: 'default' | 'error' | 'success' | 'warning';
  message: string;
}

export interface ToastReducerType {
  toast_stack: ToastObjectType[];
}

export interface PushToastActionParamType {
  is_pop: boolean;
  status: 'default' | 'error' | 'success' | 'warning';
  message: string;
}

export interface SetToastActionParamType {
  toast_list: ToastObjectType[];
}

export type toastActionType = ActionType<typeof toastAction>;
