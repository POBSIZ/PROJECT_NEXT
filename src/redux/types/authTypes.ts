import { ActionType } from 'typesafe-actions';
import Actions from 'Actions';

// Auth Reducer Type
export interface AuthReducerType {
  isAuthenticated: boolean;
  accessToken: string;
  userData: any;
  userResult: any;
}

// LOGIN TYPE
export interface LoginParamType {
  username: string;
  password: string;
}
export interface LoginResponseType {
  access_token: string;
}

export type authAction = ActionType<typeof Actions.auth>;
