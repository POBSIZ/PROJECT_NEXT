import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import axios from 'axios';

import ChannelPageComponent from './channelPage_component';
import { ChannelPageProps } from '.';
import { ChannelBoxPropsTypeTest } from 'Molecules/channelBox/channelBox_types';

export default {
  title: 'Pages/ChannelPage',
  component: ChannelPageComponent,
  parameters: {},
} as Meta;

const Template: Story<ChannelPageProps> = (args) => (
  <StoriesLayout title="Pages/ChannelPage">
    <div style={{ width: '100%' }}>
      <ChannelPageComponent {...args} />
    </div>
  </StoriesLayout>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  channelList: [
    ...Array(10).fill({
      id: 'string',
      channelNum: 100,
      channelName: 'string',
      entryFee: 100,
      users: ['John Doe', 'John Doe', 'John Doe'],
      pointPsum: 100,
      hostId: 1,
      limitOfParticipants: 100,
    }),
  ],
};
