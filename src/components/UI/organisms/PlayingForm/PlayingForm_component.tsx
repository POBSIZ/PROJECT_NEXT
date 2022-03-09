import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {
  faUser,
  faClock,
  faCoins,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledPlayingForm from './PlayingForm_styled';

import Atoms, { Input, Button, MoveButton, Select } from 'Atoms/index';

const PlayingFormComponent: React.FC<any> = ({}) => {
  const item = ['종목', '차트종류'];
  return (
    <>
      <StyledPlayingForm>
        <h1>📡 모의투자 게임</h1>
        <div className="title">Title1</div>
        <div className="information">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} /> name
          <FontAwesomeIcon
            icon={faClock}
            style={{ marginLeft: '20px', marginRight: '5px' }}
          />
          12:30 ~ 13:00
          <FontAwesomeIcon
            icon={faCoins}
            style={{ marginLeft: '20px', marginRight: '5px' }}
          />{' '}
          20
          <FontAwesomeIcon
            icon={faUsers}
            style={{ marginLeft: '20px', marginRight: '5px' }}
          />
          20/30
        </div>
        <div className="chart"></div>
        <div className="select_box">
          <Select name="gender" placeholder="종목" item={item} />
          <Select name="gender" placeholder="차트 종류" item={item} />
        </div>

        <input type="number" placeholder={0}></input>
      </StyledPlayingForm>
    </>
  );
};

export default PlayingFormComponent;
