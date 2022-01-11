import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import ButtonComponent from './button_component';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  parameters: {},
  argTypes: {
    backColor: {
      control: {
        type: 'select',
        options: ['primary', 'gradient'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['submit', 'none'],
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Atoms/Button">
      <div
        style={{
          width: args.width,
        }}
      >
        <span className='info'>Primary</span>
        <ButtonComponent
          children={args.children}
          onClick={args.onClick}
          type={args.type}
          backColor={args.color}
          {...args}
        />

        <span className='info'>Gradient</span>
        <ButtonComponent
          children={args.children}
          onClick={args.onClick}
          type={args.type}
          backColor="gradient"
        />
      </div>
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: '300px',
  children: 'TEST',
  type: 'none',
  backColor: 'primary',
};
