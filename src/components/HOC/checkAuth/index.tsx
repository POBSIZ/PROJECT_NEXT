import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import Home from 'Pages';

const CheckAuth: React.FC<any> = (props, { children }) => {
  const authState = useSelector((state: RootStateOrAny) => state.auth);

  return <>{authState.isAuthenticated ? { children } : <Home />}</>;
};

export default CheckAuth;
