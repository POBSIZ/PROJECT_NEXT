import React, { useState } from 'react';
import { faUser, faCoins, faUsers } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { nanoid } from 'nanoid';
import Layout from 'Layouts';
import { ReadyPagePropsType, UsersType } from './readyPage_types';
import StyledReadyPage, { GameInfo, UserList } from './readyPage_styled';
import { Button } from 'Atoms';
import { Profile } from 'Molecules';

const ReadyPageComponent: React.FC<ReadyPagePropsType> = (props, {}) => {
  return (
    <>
      <Layout.Container>
        <StyledReadyPage>
          <h1 className="page-title">📡 대기</h1>
          <section className='page-head'>
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
                  <FontAwesomeIcon
                    className="icon"
                    icon={faCoins as IconProp}
                  />
                  <span>{props.entryFee}</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faUsers as IconProp}
                  />
                  <span>
                    {props.currUser}/{props.maxUser}
                  </span>
                </li>
              </ul>
            </GameInfo>
            <Button
              backColor="primary"
              // isDisabled={true}
              // onClick={() => {
              //   console.log('TEST');
              // }}
            >
              대기
            </Button>
          </section>
          <UserList>
            {props.users?.map((item: UsersType) => {
              return (
                <li key={nanoid()}>
                  <Profile
                    UserName={item.userName}
                    task={item.task}
                    coins={item.coins}
                    flags={item.flags}
                    hearts={item.hearts}
                    isReady={item.isReady}
                    isMe={item.isMe}
                  />
                </li>
              );
            })}
          </UserList>
        </StyledReadyPage>
      </Layout.Container>
    </>
  );
};

export default ReadyPageComponent;
