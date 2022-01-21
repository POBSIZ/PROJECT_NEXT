import { ActionType } from 'typesafe-actions';
import testAction from 'Actions/testAction';

export interface TestReducerType {
  num: number;
  name: string;
  test: any;
}

// +/- NUM TYPE
export type testState = {
  increment: number;
  decrement: number;
};

// GET NAME TYPE
export interface GetCheckSessionPramType {
  payload: any;
}
export interface GetCheckSessionResponseType {
  name: any;
  payload: any;
}

// GET TEST TYPE
export interface GetTestParamType {
  id: number;
}
export interface GetTestResponseType {
  test: any;
}

export type testActionType = ActionType<typeof testAction>;
