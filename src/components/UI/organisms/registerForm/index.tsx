import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import RegsterFormComponent from './registerForm_component';

export interface RegisterFormParamsType {
  vaild: register_data;
}

interface register_data {
  first_name: string;
  last_name: string;
  gender: string;
  username: string;
  password: string;
  password_check: string;
  email: string;
}

const RegisterForm: React.FC<any> = (props, {}) => {
  const [vaild, set_vaild] = useState({
    first_name: false,
    last_name: false,
    gender: false,
    username: false,
    password: false,
    password_check: false,
    email: false,
  });

  const setRegister = (e) => {
    e.preventDefault();
    e.persist();

    var re_username = /^[a-zA-Z0-9]{4,12}$/; // 아이디 4~12자리
    var re_email =
      /^[-!#$%& amp;'*+./0-9=?A-Z^_a-z{|}~]+@[-!#$%&'*+/0-9=?A-Z^_a-z{|}~]+.[-!#$%& amp;'*+./0-9=?A-Z^_a-z{|}~]+$/;
    var re_psword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const data: register_data = {
      first_name: e.target.first_name.value, // 성
      last_name: e.target.last_name.value, // 이름
      gender: e.target.gender.value, // 성
      username: e.target.username.value, // 아이디
      password: e.target.password.value, // 비밀번호
      password_check: e.target.password_check.value, // 비밀번호 확인
      email: e.target.email.value, // 이메일
    };

    data.first_name.length < 1
      ? set_vaild((prev) => ({ ...prev, first_name: true }))
      : set_vaild((prev) => ({ ...prev, first_name: false }));

    data.last_name.length < 1
      ? set_vaild((prev) => ({ ...prev, last_name: true }))
      : set_vaild((prev) => ({ ...prev, last_name: false }));

    data.gender == 'none'
      ? set_vaild((prev) => ({ ...prev, gender: true }))
      : set_vaild((prev) => ({ ...prev, gender: false }));

    re_username.test(data.username)
      ? set_vaild((prev) => ({ ...prev, username: false }))
      : set_vaild((prev) => ({ ...prev, username: true }));

    re_psword.test(data.password)
      ? set_vaild((prev) => ({ ...prev, password: false }))
      : set_vaild((prev) => ({ ...prev, password: true }));

    data.password == data.password_check
      ? data.password_check == ''
        ? set_vaild((prev) => ({ ...prev, password_check: true }))
        : set_vaild((prev) => ({ ...prev, password_check: false }))
      : set_vaild((prev) => ({ ...prev, password_check: true }));

    re_email.test(data.email)
      ? set_vaild((prev) => ({ ...prev, email: false }))
      : set_vaild((prev) => ({ ...prev, email: true }));
  };
  return (
    <>
      <RegsterFormComponent vaild={vaild} onSubmit={setRegister} {...props} />
    </>
  );
};

export default RegisterForm;
