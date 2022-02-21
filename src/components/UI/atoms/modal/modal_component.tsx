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
import StyledModal from './modal_styled';
import Button from 'Atoms/button';

const ModalComponent: React.FC<any> = (props) => {
  const [showModal, setShowModal] = useState(true);
  const onCloseButton = useCallback(() => {
    setShowModal((prev) => !prev);
  }, [showModal]);
  return (
    <>
      {showModal ? (
        <StyledModal {...props}>
          <h4>{props.title}</h4>
          <p>{props.children}</p>
          <div>
            <button onClick={onCloseButton}>Close</button>
          </div>
        </StyledModal>
      ) : (
        <button onClick={onCloseButton}>Open</button>
      )}
    </>
  );
};

export default ModalComponent;
