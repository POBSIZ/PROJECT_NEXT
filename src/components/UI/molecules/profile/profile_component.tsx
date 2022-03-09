import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {
  faBookReader,
  faCoins,
  faFlag,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledProfile from './profile_styled';
import { ProfilePropsType } from './profile_types';

const ProfileComponent: React.FC<ProfilePropsType> = (
  props: ProfilePropsType,
  {},
) => {
  return (
    <>
      <StyledProfile {...props}>
        <div className="avatar"></div>
        <div className="information">
          <div className="UserName">{props.UserName}</div>
          <div className="task">
            <FontAwesomeIcon
              icon={faBookReader}
              style={{ marginRight: '2px' }}
            />
            {props.task}
          </div>
          <div className="game_information">
            <FontAwesomeIcon
              icon={faCoins}
              style={{ marginRight: '2px', color: '#3182F6' }}
            />
            {props.coins}
            <FontAwesomeIcon
              icon={faFlag}
              style={{
                marginLeft: '10px',
                marginRight: '2px',
                color: '#2ECC71',
              }}
            />
            {props.flags}
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                marginLeft: '10px',
                marginRight: '2px',
                color: '#E74C3C',
              }}
            />
            {props.hearts}
          </div>
        </div>
      </StyledProfile>
    </>
  );
};

export default ProfileComponent;
