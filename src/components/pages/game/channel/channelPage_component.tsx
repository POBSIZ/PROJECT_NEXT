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

import Molecules, { ChannelBox } from 'Molecules';
import { ChannelPageProps } from '.';
import { ChannelBoxPropsType } from 'Molecules/channelBox/channelBox_types';
import { nanoid } from 'nanoid';
import Layout from 'Layouts';
import StyledChannelPage, { StyledChannelPageItem } from './channelPage_styled';

const ChannelPageComponent: React.FC<ChannelPageProps> = (
  props,
  {}: ChannelPageProps,
) => {
  return (
    <>
      <Layout.Container>
        <StyledChannelPage>
          <h1>📃 게임 목록</h1>
          <ul>
            {props?.channelList?.map((item: ChannelBoxPropsType) => (
              <StyledChannelPageItem key={nanoid()}>
                <ChannelBox
                  is_private={item.is_private}
                  title={item.title}
                  time={item.time}
                  point={item.point}
                  curr_user={item.curr_user}
                  max_user={item.max_user}
                  info={item.info}
                  creator={item.creator}
                  link={item.link}
                />
              </StyledChannelPageItem>
            ))}
          </ul>
        </StyledChannelPage>
      </Layout.Container>
    </>
  );
};

export default ChannelPageComponent;
