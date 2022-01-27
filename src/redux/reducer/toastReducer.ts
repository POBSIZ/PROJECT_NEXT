// import ( createReducer } from 'typesafe-actions';
import { createReducer } from 'redux-immutablejs';
import { Map, List, fromJS, Record } from 'immutable';
import {
  ToastReducerType,
  toastActionType,
  PayloadType,
} from 'Types/toastTypes';
import { PUSH_TOAST_SUCCESS, INIT_TOAST } from 'Actions/toastAction';

const initialState = Map({
  is_pop: false,
  status: 'default',
  message: '',
});

const toastReducer = createReducer<any>(
  initialState,
  {
    [PUSH_TOAST_SUCCESS]: (state, action: PayloadType) => {
      return state.merge({
        is_pop: true,
        status: action.payload.status,
        message: action.payload.message,
      });
    },
    [INIT_TOAST]: (state, action) => {
      return state.merge({
        is_pop: false,
      });
    },
  },
);

export default toastReducer;
