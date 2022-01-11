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

import Atoms, { Input } from 'Atoms/index';

const RegsterFormComponent: React.FC<any> = (props) => {
  return (
    <>
      <StyledRegisterForm {...props}>
        <Input placeholder="아이디" type="username" name="username" />
      </StyledRegisterForm>
    </>
  );
};

export default RegsterFormComponent;
