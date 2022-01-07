import { ActionType } from 'typesafe-actions';
import Actions from 'Actions';

// Auth Reducer Type
export interface AuthReducerType {
  isAuthenticated: boolean;
  accessToken: string;
  userData: any;
  userResult: any;
}

// LOGIN Type
export interface LoginParamType {
  username: string;
  password: string;
}
export interface LoginResponseType {
  access_token: string;
}

// GET_PROFILE Type
export interface GetProfileParamType {}
export interface GetProfileResponseType {
  id: number;
  username: string;
  is_superuser: boolean;
  email: string;
  profile: any;
  last_login: string;
  date_joined: string;
}

export type authAction = ActionType<typeof Actions.auth>;
