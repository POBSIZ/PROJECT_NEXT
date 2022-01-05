import { ActionType } from 'typesafe-actions';
import Actions from 'Actions';

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

export type testAction = ActionType<typeof Actions.test>;
