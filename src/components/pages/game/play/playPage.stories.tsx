import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import PlayPageComponent from './playPage_component';
import { PlayPagePropsType, UsersType } from './playPage_types';

export default {
  title: 'Pages/PlayPage',
  component: PlayPageComponent,
  parameters: {},
} as Meta;

const Template: Story<PlayPagePropsType> = (args) => (
  <StoriesLayout title="Pages/PlayPage">
    <div style={{ width: '100%' }}>
      <PlayPageComponent {...args} />
    </div>
  </StoriesLayout>
);

const userListFn = () => {
  let users: UsersType[] = [];
  for (let i: number = 0; i < 5; i++) {
    const _isMe = i === 0 ? true : false;
    users.push({
      userName: `John Doe ${i}`,
      task: `Job ${i}`,
      coins: 1000 * i,
      flags: i,
      hearts: i,
      rank: i + 1,
      isMe: _isMe,
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
