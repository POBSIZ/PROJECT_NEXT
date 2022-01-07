import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import {
  LoginParamType,
  LoginResponseType,
  GetProfileParamType,
  GetProfileResponseType,
} from 'Types/authTypes';

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

// GET_PROFILE Async Action
export const GET_PROFILE = 'auth/GET_PROFILE' as const;
export const GET_PROFILE_SUCCESS = 'auth/GET_PROFILE_SUCCESS' as const;
export const GET_PROFILE_ERROR = 'auth/GET_PROFILE_ERROR' as const;
export const GetProfileAsync = createAsyncAction(
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
)<GetProfileParamType, GetProfileResponseType, AxiosError>();

const constants = {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
};
const authAction = {
  LoginAsync,
  logout,
  GetProfileAsync,
};

export default authAction;
