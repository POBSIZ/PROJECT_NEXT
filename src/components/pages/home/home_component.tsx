import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Atoms from 'Atoms/index';
import Molecules from 'Molecules/index';
import Organisms from 'Organisms/index';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledHome from './home_styled';

const HomeComponent: React.FC<any> = ({}) => {
  return (
    <StyledHome className="home_about">
      <div className="about_main">
        <div className="circle-wrapper">
          <img src={'/circle.png'} className="circle" />
          <img src={'/circle.png'} className="circle" />
          <img src={'/circle.png'} className="circle" />
          <img src={'/circle.png'} className="circle" />
          <img src={'/circle.png'} className="circle" />
        </div>

        <div className="about_main-logo">
          <span className="logo-name">PROJECT</span>
          <span className="logo-desc">부산 연합 IT 동아리</span>
        </div>
      </div>
    </StyledHome>
  );
};

export default HomeComponent;
