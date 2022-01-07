import axios from 'axios';
import {
  LoginParamType,
  LoginResponseType,
  GetProfileParamType,
  GetProfileResponseType,
} from 'Types/authTypes';

// LOGIN Api
export const apiLogin = async ({ username, password }: LoginParamType) => {
  const res = await axios({
    method: 'POST',
    url: 'v1/auth/login/',
    data: {
      username: username,
      password: password,
    },
  });
  const data: LoginResponseType = res.data.access_token;
  return data;
};

// GET_PROFILE Api
export const apiGetProfile = async ({}: GetProfileParamType) => {
  const res = await axios({
    method: 'GET',
    url: 'v1/users/me',
  });
  const data: GetProfileResponseType = res.data[0];
  return data;
};
