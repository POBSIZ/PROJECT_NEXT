import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faUser, faCoins, faUsers } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import Layout from 'Layouts';
import { PlayPagePropsType } from './playPage_types';
import StyledPlayPage, { GameInfo, PurchaseForm } from './playPage_styled';
import { Chart } from 'Hoc';
import { Select, Input, Button } from 'Atoms';

const PlayPageComponent: React.FC<PlayPagePropsType> = (props, {}) => {
  const [count, setCount] = useState(0);
  const handleCount = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();
  };

  return (
    <>
      <Layout.Container>
        <StyledPlayPage>
          <h1 className="page-title">🎮 게임</h1>
          <GameInfo>
            <h1>
              {props.title} - {props.info}
            </h1>
            <ul>
              <li>
                <FontAwesomeIcon className="icon" icon={faUser as IconProp} />
                <span>{props.creator}</span>
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faCoins as IconProp} />
                <span>{props.entryFee}</span>
              </li>
              <li>
                <FontAwesomeIcon className="icon" icon={faUsers as IconProp} />
                <span>
                  {props.curr_user}/{props.max_user}
                </span>
              </li>
            </ul>
          </GameInfo>
          <Chart />
          <PurchaseForm onSubmit={handleSubmit}>
            <section>
              <Select placeholder="종목" item={['Samsung', 'Apple', 'Tesla']} />
              <Select
                placeholder="차트 종류"
                item={['캔들 차트', '종가 차트']}
              />
            </section>
            <section>
              <Input
                placeholder="수량"
                type="number"
                name="count"
                value={count}
                onChange={handleCount}
              />
              <Button backColor="primary">매수</Button>
              <Button backColor="red">매도</Button>
            </section>
          </PurchaseForm>
        </StyledPlayPage>
      </Layout.Container>
    </>
  );
};

export default PlayPageComponent;
