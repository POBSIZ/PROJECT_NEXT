import { createReducer } from 'typesafe-actions';
import { ToastReducerType, toastActionType } from 'Types/toastTypes';
import { PUSH_TOAST, INIT_TOAST, SET_TOAST } from 'Actions/toastAction';
import { Map } from 'immutable';

const state = Map({
  toast_stack: [],
});
console.log(state.get('toast_stack'));

const initialState: ToastReducerType = {
  toast_stack: [],
};

const toastReducer = createReducer<ToastReducerType, toastActionType>(
  initialState,
  {
    [PUSH_TOAST]: (state, action) =>
      Object.assign({}, state, {
        is_pop: action.payload.is_pop,
        status: action.payload.status,
        message: action.payload.message,
      }),
    [SET_TOAST]: (state, action) =>
      Object.assign({}, state, {
        toast_stack: action.payload.toast_list,
      }),
    [INIT_TOAST]: (state, action) => Object.assign({}, state, {}),
  },
);

export default toastReducer;
