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

import Atoms, { Input, Select } from 'Atoms/index';

const RegsterFormComponent: React.FC<any> = (props) => {
  const item = ['성별', '남자', '여자'];
  return (
    <>
      <StyledRegisterForm {...props}>
        <div className="header">
          <h1
            style={{
              marginBottom: '40px',
              fontSize: '40px',
              fontWeight: 600,
            }}
          >
            회원가입
          </h1>
        </div>
        <label className="line">
          <span>이름</span>
          <Input placeholder="성" type="username" name="username" />
          <Input placeholder="이름" type="username" name="username" />
        </label>

        <label className="line">
          <span>성별</span>
          <Select item={item} />
        </label>

        <label className="line">
          <Input placeholder="아이디" type="username" name="username" />
        </label>
      </StyledRegisterForm>
    </>
  );
};

export default RegsterFormComponent;
