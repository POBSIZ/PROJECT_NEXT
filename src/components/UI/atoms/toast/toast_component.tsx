import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {
  faExclamationCircle,
  faExclamationTriangle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledToast from './toast_styled';

const ToastComponent: React.FC<any> = (props) => {
  const typeIconSet = {
    default: null,
    error: faExclamationCircle,
    warning: faExclamationTriangle,
    success: faCheckCircle,
  };

  const typeIcon = typeIconSet[props.status];

  return (
    <>
      <StyledToast {...props}>
        <FontAwesomeIcon icon={typeIcon} />
        <span>{props.message}</span>
      </StyledToast>
    </>
  );
};

export default ToastComponent;
