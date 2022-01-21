// import { createReducer } from 'typesafe-actions';
import { createReducer } from 'redux-immutablejs';
import { ToastReducerType, toastActionType } from 'Types/toastTypes';
import { PUSH_TOAST, INIT_TOAST, SET_TOAST } from 'Actions/toastAction';
import { Map, List, fromJS } from 'immutable';

const initialState = Map({
  toast_stack: List([]),
});

// const toastReducer = createReducer<ToastReducerType, toastActionType>(
const toastReducer = createReducer<any>(initialState, {
  [PUSH_TOAST]: (state, action) =>
    state.update('toast_stack', (stack) => {
      return stack.push(
        Map({
          is_pop: action.payload.is_pop,
          status: action.payload.status,
          message: action.payload.message,
        }),
      );
    }),
  [SET_TOAST]: (state, action) =>
    state.update('toast_stack', (stack) => {
      console.log(action.payload);
      return stack.set(List(action.payload));
    }),
  [INIT_TOAST]: (state, action) => Object.assign({}, state, {}),
});

export default toastReducer;
