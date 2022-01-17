import { createReducer } from 'typesafe-actions';
import {
  ToastReducerType,
  toastActionType,
  PushToastActionParamType,
} from 'Types/toastTypes';
import { PUSH_TOAST } from 'Actions/toastAction';

const initialState: ToastReducerType = {
  status: false,
  status_type: 'none',
  message: '',
};

const toastReducer = createReducer<ToastReducerType, toastActionType>(initialState, {
  [PUSH_TOAST]: (state, action) => ({
    ...state,
    status: true,
    status_type: action.payload.status_type,
    message: action.payload.message,
  }),
});

export default toastReducer;
