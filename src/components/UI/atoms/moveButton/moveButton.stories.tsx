//ssc
import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import MoveButtonComponent from './moveButton_component';

export default {
  title: 'Atoms/Move',
  component: MoveButtonComponent,
  parameters: {},
  argTypes: {
    radius: {
      control: {
        type: 'select',
        options: ['none', '4', '8', '16', '32', '64'],
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Atoms/Move">
      <span className="info">Default</span>
      <MoveButtonComponent {...args} />

      <span className="info">border-radius: 4px</span>
      <MoveButtonComponent {...args} radius="4" />

      <span className="info">border-radius: 8px</span>
      <MoveButtonComponent {...args} radius="8" />

      <span className="info">border-radius: 16px</span>
      <MoveButtonComponent {...args} radius="16" />

      <span className="info">border-radius: 32px</span>
      <MoveButtonComponent {...args} radius="32" />

      <span className="info">border-radius: 64px</span>
      <MoveButtonComponent {...args} radius="64" />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  href: 'test',
  children: 'test',
  radius: 'none',
  width: 'auto',
  height: 'auto',
};
