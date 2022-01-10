import React from 'react';
import styled, { css } from 'styled-components';

import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';

import StyledMain from './main_styled';
import Bases, { Header, Footer } from 'Bases';

const Layout: React.FC<any> = ({ children }) => {
  const cookies = useCookies();
  const auth = useSelector((store: RootStateOrAny) => store.auth);

  axios.defaults.baseURL = 'http://buscp.org/api/';
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['Authorization'] = `JWT ${auth.accessToken}`;
  axios.defaults.headers.common['X-CSRFToken'] = cookies[0].csrftoken;

  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
