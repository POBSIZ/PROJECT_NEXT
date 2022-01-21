import { createReducer } from 'typesafe-actions';

import { testActionType, TestReducerType } from 'Types/testTypes';
import Actions from 'Actions/index';
import {
  INCREMENT,
  DECREMENT,
  GET_CHECK_SESSION_SUCCESS,
  GET_TEST_SUCCESS,
} from 'Actions/testAction';

const initialState: any = {
  num: 0,
  name: '',
  test: null,
};

//createReducer는 reducer를 쉽게 작성할 수 있도록 하는 모듈이며
//타입 오류를 방지 할 수 있습니다.
const testReducer = createReducer<TestReducerType, testActionType>(
  initialState,
  {
    [INCREMENT]: (state, action) => ({
      ...state,
      num: action.payload,
    }),

    [DECREMENT]: (state, action) => ({
      ...state,
      num: action.payload,
    }),

    [GET_CHECK_SESSION_SUCCESS]: (state, action) => ({
      ...state,
      name: action.payload.name,
    }),

    [GET_TEST_SUCCESS]: (state, action) => ({
      ...state,
      test: action.payload.test,
    }),
  },
);

export default testReducer;
