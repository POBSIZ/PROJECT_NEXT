import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledEditInput, { StyledEditInputWrapper } from './editInput_styled';
import { EditInputProps } from '.';

const EditInputComponent: React.FC<EditInputProps> = (
  props: EditInputProps,
  {},
) => {
  const [currText, setCurrText] = useState('');

  const handleInput = useCallback(
    (e) => {
      if (props.maxText !== undefined) {
        if (e.target.value.length <= props.maxText) {
          setCurrText(e.target.value);
        }
      } else {
        setCurrText(e.target.value);
      }
    },
    [currText],
  );

  const removeText = useCallback(() => {
    setCurrText('');
  }, [currText]);

  return (
    <>
      <StyledEditInputWrapper>
        <div className="input_wrapper">
          <StyledEditInput
            {...props}
            value={currText}
            onChange={(e) => handleInput(e)}
          />
          {currText.length > 0 ? (
            <FontAwesomeIcon
              icon={faTimesCircle as IconProp}
              className="icon"
              onClick={removeText}
              tabIndex={0}
            />
          ) : null}
        </div>
        {props.maxText ? (
          <span className="text_count">
            {currText.length} / {props.maxText}
          </span>
        ) : null}
      </StyledEditInputWrapper>
    </>
  );
};

export default EditInputComponent;
