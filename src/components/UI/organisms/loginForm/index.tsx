import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { LoginAsync } from 'Actions/authAction';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import LoginFormComponent from './loginForm_component';

export interface LoginFormParamsType {}

const LoginForm: React.FC<LoginFormParamsType> = (
  props,
  {}: LoginFormParamsType,
) => {
  const dispatch = useDispatch();

  const setLogin = (e) => {
    e.preventDefault();
    e.persist();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    dispatch(LoginAsync.request(data));
  };

  return (
    <>
      <LoginFormComponent onSubmit={setLogin} {...props} />
    </>
  );
};

export default LoginForm;
