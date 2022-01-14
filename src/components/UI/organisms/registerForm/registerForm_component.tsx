import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledRegisterForm from './registerForm_styled';

import Atoms, { Input, Select, Button } from 'Atoms/index';

const RegsterFormComponent: React.FC<any> = (props) => {
  const item = ['성별', '남자', '여자'];
  return (
    <>
      <StyledRegisterForm {...props}>
        <div className="header">
          <h1>회원가입</h1>
        </div>

        <label className="line">
          <span>이름</span>
          <div className="line_container">
            <div style={{ width: '100%', marginRight: '10px' }}>
              <Input placeholder="성" type="text" name="text" />
            </div>
            <div style={{ width: '100%', marginLeft: '20px' }}>
              <Input placeholder="이름" type="text" name="text" />
            </div>
          </div>
        </label>

        <label className="line">
          <span>성별</span>
          <div className="line_container">
            <Select item={item} />
          </div>
        </label>

        <label className="line">
          <span>아이디</span>
          <div className="line_container">
            <Input placeholder="id" type="username" name="username" />
          </div>
        </label>

        <label className="line">
          <span>비밀번호</span>
          <div className="line_container">
            <Input placeholder="비밀번호" type="password" name="password" />
          </div>
        </label>

        <label className="line">
          <span>비밀번호 확인</span>
          <div className="line_container">
            <Input
              placeholder="비밀번호 확인"
              type="password"
              name="password"
            />
          </div>
        </label>

        <label className="line">
          <span>이메일</span>
          <div className="line_container">
            <Input placeholder="e-mail" type="email" name="email" />
          </div>
        </label>
        <div className="register-button">
          <Button backColor="gradient">회원가입</Button>
        </div>
      </StyledRegisterForm>
    </>
  );
};

export default RegsterFormComponent;
