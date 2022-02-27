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

import { nanoid } from 'nanoid';
import StyledChannelList from './channelList_styled';
import { ChannelListPropsType } from './channelList_types';
import { ChannelBoxPropsType } from 'Molecules/channelBox/channelBox_types';
import { ChannelBox } from 'Molecules';

const ChannelListComponent: React.FC<ChannelListPropsType> = (
  props,
  { channel_list }: ChannelListPropsType,
) => {
  return (
    <>
      <StyledChannelList>
        {props.channel_list?.map((item: ChannelBoxPropsType, i: number) => {
          const keyNum: string = nanoid();
          return (
            <ChannelBox
              key={keyNum}
              is_private={item.is_private}
              title={item.title}
              time={item.time}
              point={item.point}
              curr_user={item.curr_user}
              max_user={item.max_user}
              info={item.info}
              creator={item.creator}
            />
          );
        })}
      </StyledChannelList>
    </>
  );
};

export default ChannelListComponent;
