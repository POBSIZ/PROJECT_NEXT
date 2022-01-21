import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import {
  GetCheckSessionPramType,
  GetCheckSessionResponseType,
  GetTestParamType,
  GetTestResponseType,
} from 'Types/testTypes';

// +/- NUM
export const INCREMENT = 'test/INCREMENT' as const;
export const DECREMENT = 'test/DECREMENT' as const;
export const increment = createAction(INCREMENT)<number>();
export const decrement = createAction(DECREMENT)<number>();

// GET NAME
export const GET_CHECK_SESSION = 'test/GET_CHECK_SESSION' as const;
export const GET_CHECK_SESSION_SUCCESS =
  'test/GET_CHECK_SESSION_SUCCESS' as const;
export const GET_CHECK_SESSION_ERROR = 'test/GET_CHECK_SESSION_ERROR' as const;
export const getCheckSessionAsync = createAsyncAction(
  GET_CHECK_SESSION,
  GET_CHECK_SESSION_SUCCESS,
  GET_CHECK_SESSION_ERROR,
)<GetCheckSessionPramType, GetCheckSessionResponseType, AxiosError>();

// GET TEST
export const GET_TEST = 'test/GET_TEST' as const;
export const GET_TEST_SUCCESS = 'test/GET_TEST_SUCCESS' as const;
export const GET_TEST_ERROR = 'test/GET_TEST_ERROR' as const;
export const getTestAsync = createAsyncAction(
  GET_TEST,
  GET_TEST_SUCCESS,
  GET_TEST_ERROR,
)<GetTestParamType, GetTestResponseType, AxiosError>();

const testConstants = {
  INCREMENT,
  DECREMENT,
  GET_CHECK_SESSION,
  GET_CHECK_SESSION_SUCCESS,
  GET_TEST,
  GET_TEST_SUCCESS,
};

const testAction = {
  increment,
  decrement,
  getCheckSessionAsync,
  getTestAsync,
};

export default testAction;
