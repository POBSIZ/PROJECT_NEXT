import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import PlayPageComponent from './playPage_component';
import { PlayPagePropsType } from './playPage_types';

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

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: 'Title 1',
  info: 'Nasdaq-100 Random',
  creator: 'John Doe',
  entryFee: 3000,
  curr_user: 5,
  max_user: 10,
};
