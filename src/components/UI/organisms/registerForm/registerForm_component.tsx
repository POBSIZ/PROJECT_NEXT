import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledRegisterForm from './registerForm_styled';

import Atoms, { Input, Select, Button, ProgressBar } from 'Atoms/index';

import Molecules, { TextInput } from 'Molecules/index';
const RegsterFormComponent: React.FC<any> = (props, { vaild }) => {
  const item = ['남자', '여자'];
  const select_default = '선택해주세요';
  return (
    <>
      <StyledRegisterForm vaild={vaild} onSubmit={props.onSubmit} {...props}>
        <div className="header">
          <h1>회원가입</h1>
        </div>
        <TextInput
          first_name={props.vaild.first_name}
          last_name={props.vaild.last_name}
          isFail={
            props.vaild.first_name == true
              ? true
              : props.vaild.last_name == true
              ? true
              : false
          }
          type="name"
        />
        <TextInput isFail={props.vaild.gender} type="gender" />

        <TextInput
          warnning={props.vaild.username}
          isFail={props.vaild.username}
          type="username"
        />

        <TextInput
          warnning={props.vaild.password}
          isFail={props.vaild.password}
          type="password"
        />

        <TextInput
          warnning={props.vaild.password_check}
          isFail={props.vaild.password_check}
          type="password_check"
        />

        <TextInput isFail={props.vaild.email} type="email" />

        <div className="register-button">
          <Button backColor="gradient">회원가입</Button>
        </div>
      </StyledRegisterForm>
    </>
  );
};

export default RegsterFormComponent;
