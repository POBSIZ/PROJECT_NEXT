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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import StyledCreateChannel, {
  StyledCreateChannelInput,
} from './createChannel_styled';

import Atoms, { EditInput, Select, Input, Button } from 'Atoms';

const CreateChannelComponent: React.FC<any> = ({}) => {
  const [entryFee, setEntryFee] = useState(0);
  const handleEntryFee = (e) => {
    setEntryFee(e.target.value);
  };

  const [maxUser, setMaxUser] = useState(0);
  const handleMaxUser = (e) => {
    setMaxUser(e.target.value);
  };

  return (
    <>
      <StyledCreateChannel
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>🔨 방 생성</h1>

        <StyledCreateChannelInput>
          <h3>방 이름</h3>
          <EditInput
            placeholder="방의 제목을 입력해주세요."
            isDisabled={false}
            maxText={30}
          />
        </StyledCreateChannelInput>

        <StyledCreateChannelInput>
          <h3>참가 포인트</h3>
          <Input
            type="number"
            placeholder="참가 포인트를 입력해주세요."
            name="entryFee"
            value={entryFee}
            onChange={handleEntryFee}
          />
        </StyledCreateChannelInput>

        <StyledCreateChannelInput>
          <h3>최대 인원</h3>
          <Input
            type="number"
            placeholder="최대 참가 인원을 입력해주세요."
            name="maxUser"
            value={maxUser}
            onChange={handleMaxUser}
          />
        </StyledCreateChannelInput>

        <Button backColor="primary" onClick={() => {}}>
          생성
        </Button>
      </StyledCreateChannel>
    </>
  );
};

export default CreateChannelComponent;
