import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledFooter from './footer_styled';

const FooterComponent: React.FC<any> = ({}) => {
  return (
    <StyledFooter className="footer">
      <h3 className="footer-logo">PROJECT</h3>
      <div className="footer-mid">
        <div className="footer-copyright">
          ©Copyright 2021 PROJECT All rights reserved
        </div>
        <div className="footer-address">부산광역시 남구 전포대로 77번길 39-2</div>
      </div>
      <div className="footer-link">
        <a
          href="https://www.youtube.com/channel/UCZZOjlTrjJvSATrknAzYEfw"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.instagram.com/project_busan" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:projectplan0531@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </StyledFooter>
  );
};

export default FooterComponent;
