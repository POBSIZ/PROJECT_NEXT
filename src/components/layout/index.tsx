import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';

import StyledMain from './main_styled';
import Bases, { Header, Footer, Toast } from 'Bases/index';

const Layout: React.FC<any> = ({ children }) => {
  const router = useRouter();
  const cookies = useCookies();
  const auth = useSelector((store: RootStateOrAny) => store.auth);

  axios.defaults.baseURL = 'https://buscp.org/api/';
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['Authorization'] = `JWT ${auth?.accessToken}`;
  axios.defaults.headers.common['X-CSRFToken'] = cookies[0].csrftoken;

  useEffect(() => {
    const handleRouteChange = () => {
      console.log('Page Change');
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {};
  }, []);

  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
      <Toast />
    </>
  );
};

export default Layout;
