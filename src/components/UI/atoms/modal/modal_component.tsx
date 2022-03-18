import React, { useEffect, useState, useRef, useCallback } from 'react';
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

import StyledModal, { StyledModalContent } from './modal_styled';
import { ModalParamsType } from '.';
import { AosWrapper } from 'Hoc';

const ModalComponent: React.FC<ModalParamsType> = (props: ModalParamsType) => {
  return (
    <>
      <AosWrapper animation="zoom-in">
        <StyledModal {...props} onClick={(e) => props.handleShow(e)}>
          <StyledModalContent {...props}>{props.children}</StyledModalContent>
        </StyledModal>
      </AosWrapper>
    </>
  );
};

export default ModalComponent;
