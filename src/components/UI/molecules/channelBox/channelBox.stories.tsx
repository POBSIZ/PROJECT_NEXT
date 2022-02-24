import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import ChannelBoxComponent from './channelBox_component';
import { ChannelBoxPropsType } from './channelBox_types';

export default {
  title: 'Molecules/ChannelBox',
  component: ChannelBoxComponent,
  parameters: {},
  argTypes: {
    radius: {
      control: {
        type: 'select',
        options: [0, 4, 8, 16, 32],
      },
    },
  },
} as Meta;

const Template: Story<ChannelBoxPropsType> = (args) => (
  <StoriesLayout title="Molecules/ChannelBox">
    <div style={{ width: '450px' }}>
      <span className="info">Border Radius - 0</span>
      <ChannelBoxComponent {...args} />
      <div className="mb-50"></div>

      <span className="info">Border Radius - 4</span>
      <ChannelBoxComponent {...args} radius={4} />
      <div className="mb-50"></div>

      <span className="info">Border Radius - 8</span>
      <ChannelBoxComponent {...args} radius={8} />
      <div className="mb-50"></div>

      <span className="info">Border Radius - 16</span>
      <ChannelBoxComponent {...args} radius={16} />
      <div className="mb-50"></div>

      <span className="info">Border Radius - 32</span>
      <ChannelBoxComponent {...args} radius={32} />
      <div className="mb-50"></div>
    </div>
  </StoriesLayout>
);
export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: 'StoryBook',
  is_private: true,
  time: '12:30 ~ 13:30',
  point: 100,
  curr_user: 3,
  max_user: 5,
  info: 'Nasdaq-100 Random',
  creator: 'John Doe',
  radius: 0,
};
