import React, { useState } from 'react';
import { faUser, faCoins, faUsers } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { nanoid } from 'nanoid';

import Layout from 'Layouts';
import { PlayPagePropsType, UsersType } from './playPage_types';
import StyledPlayPage, {
  GameInfo,
  PurchaseForm,
  Ranking,
} from './playPage_styled';
import { Chart } from 'Hoc';
import { Select, Input, Button } from 'Atoms';
import { Profile } from 'Molecules';

const PlayPageComponent: React.FC<PlayPagePropsType> = (props, {}) => {
  const [count, setCount] = useState(null);
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
                  {props.currUser}/{props.maxUser}
                </span>
              </li>
            </ul>
          </GameInfo>
          <Chart />
          <PurchaseForm onSubmit={handleSubmit}>
            <section>
              <Select placeholder="종목" item={props.stocksList} />
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
                min={0}
              />
              <Button backColor="primary">매수</Button>
              <Button backColor="red">매도</Button>
            </section>
          </PurchaseForm>
          <Ranking>
            <h1>순위</h1>
            <ul>
              {props.users?.map((item: UsersType) => {
                return (
                  <li key={nanoid()}>
                    <Profile
                      UserName={item.userName}
                      task={item.task}
                      coins={item.coins}
                      flags={item.flags}
                      hearts={item.hearts}
                      rank={item.rank}
                      isMe={item.isMe}
                    />
                  </li>
                );
              })}
            </ul>
          </Ranking>
        </StyledPlayPage>
      </Layout.Container>
    </>
  );
};

export default PlayPageComponent;
