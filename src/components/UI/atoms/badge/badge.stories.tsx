import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import BadgeComponent from './badge_component';

export default {
  title: 'Atoms/Badge',
  component: BadgeComponent,
  parameters: {},
  argTypes: {
    backColor: {
      control: {
        type: 'select',
        options: ['none', 'primary', 'gradient', 'black'],
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Atoms/Badge">
      <span className="info">none</span>
      <BadgeComponent {...args} backColor={args.backColor} />
      <span className="info">primary</span>
      <BadgeComponent {...args} backColor="primary" />
      <span className="info">gradient</span>
      <BadgeComponent {...args} backColor="gradient" />
      <span className="info">black</span>
      <BadgeComponent {...args} backColor="black" />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  children: 'TEST',
  backColor: 'none',
  textColor: 'black',
};
