import axios from 'axios';
import { LoginParamType, LoginResponseType } from 'Types/authTypes';

// LOGIN API
export const apiLogin = async ({
  username,
  password,
}: LoginParamType) => {
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
