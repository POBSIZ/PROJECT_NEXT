import { createReducer } from 'typesafe-actions';

import Actions from 'Actions';
import { AuthReducerType, authAction } from 'Types/authTypes';
import { LOGIN_SUCCESS, LOGOUT } from 'Actions/authAction';

const initialState: AuthReducerType = {
  isAuthenticated: false,
  accessToken: '',
  userData: null,
  userResult: null,
};

//createReducer는 reducer를 쉽게 작성할 수 있도록 하는 모듈이며
//타입 오류를 방지 할 수 있습니다.
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
});

export default reducer;
