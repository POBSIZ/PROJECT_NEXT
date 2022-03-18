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
import { useRouter } from 'next/router';

import Molecules, { ChannelBox } from 'Molecules';
import { ChannelPageProps } from '.';
import {
  ChannelBoxPropsType,
  ChannelBoxPropsTypeTest,
} from 'Molecules/channelBox/channelBox_types';
import { nanoid } from 'nanoid';
import Layout from 'Layouts';
import StyledChannelPage, { StyledChannelPageItem } from './channelPage_styled';
import { Button } from 'Atoms';

const ChannelPageComponent: React.FC<ChannelPageProps> = (
  props,
  {}: ChannelPageProps,
) => {
  const router = useRouter();
  return (
    <>
      <Layout.Container>
        <StyledChannelPage>
          <h1>📃 채널 목록</h1>
          <div className="btn_wrapper">
            <Button backColor="black" onClick={() => {}}>
              전적
            </Button>
            <Button
              backColor="primary"
              onClick={() => {
                router.push('/game/investing/create');
              }}
            >
              방 생성
            </Button>
          </div>
          <ul>
            {props?.channelList?.map((item: ChannelBoxPropsTypeTest) => (
              <StyledChannelPageItem key={nanoid()}>
                <ChannelBox
                  title={item.channelName}
                  time={10}
                  point={item.entryFee}
                  curr_user={Object.keys(item.users).length}
                  max_user={item.limitOfParticipants}
                  info={'Lorem Ipsum Dolor Sit'}
                  creator={item.hostId}
                  link={item.id}
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
