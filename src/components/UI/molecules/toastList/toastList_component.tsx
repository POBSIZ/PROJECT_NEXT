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

import StyledToastList from './toastList_styled';
import { ToastListPropsTypes } from '.';

import Atoms, { Toast } from 'Atoms/index';

const ToastListComponent: React.FC<ToastListPropsTypes> = (
  props,
  { toast_list }: ToastListPropsTypes,
) => {
  return (
    <>
      <StyledToastList {...props}>
        <ul>
          {props.toast_list?.map((item, i) => {
            return (
              <Toast
                is_pop={item.is_pop}
                status={item.status}
                message={item.message}
                key={i}
              />
            );
          })}
        </ul>
      </StyledToastList>
    </>
  );
};

export default ToastListComponent;
