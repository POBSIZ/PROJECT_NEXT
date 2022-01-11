import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledLoginForm from './loginForm_styled';
import { LoginFormParamsType } from '.';

import Atoms, { Input, Button, MoveButton } from 'Atoms/index';

const LoginFormComponent: React.FC<any> = (props) => {
  return (
    <>
      <StyledLoginForm onSubmit={props.onSubmit} {...props}>
        <div className="info">
          <h1>안녕하세요!</h1>
          <span>계정 정보를 입력하고 로그인 해주세요.</span>
        </div>
        <Input
          placeholder="아이디"
          type="username"
          name="username"
          required={true}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          name="password"
          required={true}
        />
        <Button backColor="gradient">로그인</Button>
        <MoveButton href="/auth/register" radius="none" height="45px" width="100%">
          회원가입
        </MoveButton>
      </StyledLoginForm>
    </>
  );
};

export default LoginFormComponent;
