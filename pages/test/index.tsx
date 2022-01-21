import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import {
  getCheckSessionAsync,
  getTestAsync,
  increment,
} from 'Actions/testAction';
import { LoginAsync } from 'Actions/authAction';
import { pushToast } from 'Actions/toastAction';

const Name: React.FC<any> = ({}) => {
  const storeTest = useSelector((state: RootStateOrAny) => state.test);
  const dispatch = useDispatch();

  const generate = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data: any = 1;
    dispatch(getTestAsync.request(data));
  };

  const getName = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data: any = 1;
    dispatch(getCheckSessionAsync.request(data));
  };

  const setLogin = () => {
    const data = {
      username: 'project',
      password: 'plan0531@',
    };
    dispatch(LoginAsync.request(data));
  };

  const popToast = () => {
    const radNum = Math.floor(Math.random() * 100);
    dispatch(
      pushToast({ is_pop: false, status: 'default', message: String(radNum) }),
    );
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div
        style={{
          paddingTop: '100px',
          textAlign: 'center',
        }}
      >
        <div>
          <h2>List</h2>
          <button onClick={getName}>GetName</button>
          <button onClick={generate}>Generate</button>
          <h3>{storeTest?.test}</h3>
          <h1>
            <button onClick={setLogin}>LOGIN</button>
          </h1>
          <h1>
            <button onClick={popToast}>TOAST</button>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Name;
