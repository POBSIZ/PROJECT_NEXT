import React, { useState } from 'react';
import { faUser, faCoins, faUsers } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { nanoid } from 'nanoid';
import Layout from 'Layouts';
import { ResultPagePropsType, UsersType } from './resultPage_types';
import StyledResultPage, { GameInfo, UserRank } from './resultPage_styled';
import { Profile } from 'Molecules';

const ResultPageComponent: React.FC<ResultPagePropsType> = (props, {}) => {
  return (
    <>
      <Layout.Container>
        <StyledResultPage>
          <h1 className="page-title">📊 결과</h1>
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
          <UserRank>
            <h1>👑 Winner</h1>
            <ul>
              {props.users?.map((item: UsersType) => {
                return (
                  <li key={nanoid()}>
                    <div className='inner-wrapper'>
                      <Profile
                        UserName={item.userName}
                        task={item.task}
                        coins={item.coins}
                        flags={item.flags}
                        hearts={item.hearts}
                        rank={item.rank}
                        isMe={item.isMe}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </UserRank>
        </StyledResultPage>
      </Layout.Container>
    </>
  );
};

export default ResultPageComponent;
