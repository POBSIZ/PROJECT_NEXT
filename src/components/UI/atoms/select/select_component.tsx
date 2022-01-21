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

import StyledSelect from './select_styled';

const SelectComponent: React.FC<any> = (props) => {
  return (
    <>
      <StyledSelect {...props}>
        <select className="selectbox" disabled={props.disabled}>
          <option value="none" selected hidden style={{}}>
            {props.placeholder}
          </option>
          {props.item.map((item: string) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </StyledSelect>
    </>
  );
};

export default SelectComponent;
