import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';
import ProfileComponent from './profile_component';

import { ProfilePropsType } from './profile_types';

export default {
  title: 'Molecules/Profile',
  component: ProfileComponent,
  parameters: {},
} as Meta;

const Template: Story<ProfilePropsType> = (args) => (
  <StoriesLayout title="Molecules/profile">
    <div style={{ width: '220px' }}>
      <ProfileComponent {...args} />
    </div>
  </StoriesLayout>
);
export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  radius: 0,
  UserName: 'John Park',
  task: 'front end',
  coins: 20,
  flags: 10,
  hearts: 5,
};
