import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import ResultPageComponent from './resultPage_component';
import { ResultPagePropsType, UsersType } from './resultPage_types';

export default {
  title: 'Pages/ResultPage',
  component: ResultPageComponent,
  parameters: {},
} as Meta;

const Template: Story<ResultPagePropsType> = (args) => (
  <StoriesLayout title="Pages/ResultPage">
    <div style={{ width: '100%' }}>
      <ResultPageComponent {...args} />
    </div>
  </StoriesLayout>
);

const userListFn = () => {
  let users: UsersType[] = [];
  for (let i: number = 0; i < 10; i++) {
    const _isMe = i === 0 ? true : false;
    users.push({
      userName: `John Doe ${i}`,
      task: `Job ${i}`,
      coins: i,
      flags: i,
      hearts: i,
      isMe: _isMe,
      rank: i + 1,
    });
  }
  return users;
  // 나녕이가 나보고 김지렁이라고 했다.
};
const userList = userListFn();

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: '같이 게임해요!',
  info: '나스닥 100 랜덤',
  creator: 'John Doe',
  entryFee: 3000,
  currUser: userList.length,
  maxUser: 10,
  stocksList: ['삼성', '메타', '애플', '아마존', '넷플릭스', '구글'],
  users: userList,
};
