import React from 'react';
import styled, { css } from 'styled-components';

import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';

import Bases, { Header } from 'Bases';

const Layout: React.FC<any> = ({ children }) => {
  const cookies = useCookies();
  const auth = useSelector((store: RootStateOrAny) => store.auth);

  axios.defaults.baseURL = 'https://buscp.org/api/';
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['Authorization'] = `JWT ${auth.accessToken}`;
  axios.defaults.headers.common['X-CSRFToken'] = cookies[0].csrftoken;

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
