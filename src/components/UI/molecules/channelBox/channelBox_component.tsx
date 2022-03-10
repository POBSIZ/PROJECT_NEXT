import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {
  faClock,
  faCoins,
  faUsers,
  faLock,
} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'; // HOC

import Link from 'next/link';

import StyledChannelBox from './channelBox_styled';

import { ChannelBoxPropsType } from './channelBox_types';

interface ChannelBoxComponent {
  title: string;
  time: number;
  point: number;
  curr_user: number;
  max_user: number;
  info: string;
  link: string;
  creator: number;
}

const ChannelBoxComponent: React.FC<ChannelBoxComponent> = (
  props: ChannelBoxComponent,
  {},
) => {
  return (
    <Link href={`/game/investing/${props.link}`}>
      <StyledChannelBox {...props}>
        <div className="title">
          <FontAwesomeIcon icon={faLock as IconProp} className="icon" />
          <h3 className="text">{props.title}</h3>
        </div>
        <div className="options">
          <span className="time">
            <FontAwesomeIcon icon={faClock as IconProp} className="icon" />
            {props.time}
          </span>
          <span className="point">
            <FontAwesomeIcon icon={faCoins as IconProp} className="icon" />
            {props.point}
          </span>
          <span className="users">
            <FontAwesomeIcon icon={faUsers as IconProp} className="icon" />
            {props.curr_user}/{props.max_user}
          </span>
        </div>
        <p className="info">{props.info}</p>
        <label className="creator">{props.creator}</label>
      </StyledChannelBox>
    </Link>
  );
};

export default ChannelBoxComponent;
