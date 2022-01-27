import { createReducer } from 'typesafe-actions';

import Actions from 'Actions/index';
import { AuthReducerType, authActionType } from 'Types/authTypes';
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

const authReducer = createReducer<AuthReducerType, authActionType>(
  initialState,
  {
    [LOGIN_SUCCESS]: (state, action) => {
      return Object.assign({}, state, {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload,
      });
    },

    [LOGOUT]: (state, action) => {
      return Object.assign({}, state, {
        ...state,
        isAuthenticated: false,
        accessToken: '',
      });
    },

    [GET_PROFILE_SUCCESS]: (state, action) => {
      return Object.assign({}, state, {
        ...state,
        userData: action.payload,
      });
    },

    [INIT_PROFILE]: (state, action) => {
      return Object.assign({}, state, {
        ...state,
        userData: null,
      });
    },
  },
);

export default authReducer;
