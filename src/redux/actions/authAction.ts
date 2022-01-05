import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import { LoginParamType, LoginResponseType } from 'Types/authTypes';

// LOGIN Async Action
export const LOGIN = 'auth/LOGIN' as const;
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS' as const;
export const LOGIN_ERROR = 'auth/LOGIN_ERROR' as const;
export const LoginAsync = createAsyncAction(LOGIN, LOGIN_SUCCESS, LOGIN_ERROR)<
  LoginParamType,
  LoginResponseType,
  AxiosError
>();

// LOGOUT Action
export const LOGOUT = 'auth/LOGOUT' as const;
export const logout = createAction(LOGOUT)();

const constants = {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
};
const authAction = {
  LoginAsync,
  logout,
};

export default authAction;
