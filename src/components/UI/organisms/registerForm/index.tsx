import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import RegsterFormComponent from './registerForm_component';

const RegisterForm: React.FC<any> = (props, {}) => {
  const setRegister = (e) => {
    e.preventDefault();
    e.persist();

    const data = {
      first_name: e.target.first_name.value, // 성
      last_name: e.target.last_name.value, // 이름
      gender: e.target.gender.value, // 성
      username: e.target.username.value, // 아이디
      password: e.target.password.value, // 비밀번호
      password_check: e.target.password_check.value, // 비밀번호 확인
      email: e.target.email.value, // 이메일
    };
    console.log(data);
  };
  return (
    <>
      <RegsterFormComponent onSubmit={setRegister} {...props} />
    </>
  );
};

export default RegisterForm;
