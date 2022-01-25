import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import ProgressBarComponent from './progressBar_component';

export default {
  title: 'Atoms/Progress Bar',
  component: ProgressBarComponent,
  parameters: {},
  argTypes: {
    bgcolor: {
      control: {
        type: 'select',
        options: ['blue', 'gradient', 'black'],
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Atoms/Progress Bar">
      <span className="info">Default</span>
      <div style={{ width: args.width, height: args.height }}>
        <ProgressBarComponent {...args} bgcolor={args.bgcolor} />
      </div>
      <span className="info">Black</span>
      <div style={{ width: args.width, height: args.height }}>
        <ProgressBarComponent {...args} bgcolor="black" />
      </div>
      <span className="info">Gradient</span>
      <div style={{ width: args.width, height: args.height }}>
        <ProgressBarComponent {...args} bgcolor="gradient" />
      </div>
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: '300px',
  height: '10px',
  prwidth: '30%',
  bgcolor: 'blue',
};
