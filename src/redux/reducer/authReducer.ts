import { createReducer } from 'typesafe-actions';

import Actions from 'Actions/index';
import { AuthReducerType, authAction } from 'Types/authTypes';
import {
  LOGIN_SUCCESS,
  LOGOUT,
  GET_PROFILE_SUCCESS,
  INIT_PROFILE,
} from 'Actions/authAction';

const initialState: AuthReducerType = {
  isAuthenticated: false,
  accessToken: '',
  userData: null,
  userResult: null,
};

const reducer = createReducer<AuthReducerType, authAction>(initialState, {
  [LOGIN_SUCCESS]: (state, action) =>
    Object.assign({}, state, {
      ...state,
      isAuthenticated: true,
      accessToken: action.payload,
    }),

  [LOGOUT]: (state, action) =>
    Object.assign({}, state, {
      ...state,
      isAuthenticated: false,
      accessToken: '',
    }),

  [GET_PROFILE_SUCCESS]: (state, action) =>
    Object.assign({}, state, {
      ...state,
      userData: action.payload,
    }),

  [INIT_PROFILE]: (state, action) =>
    Object.assign({}, state, {
      ...state,
      userData: null,
    }),
});

export default reducer;
