import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import ModalComponent from './modal_component';
import StoriesLayout from 'StoriesLayout';

export default {
  title: 'Atoms/Modal',
  component: ModalComponent,
  parameters: {},
  argTypes: {
    backColor: {
      control: {
        type: 'select',
        options: ['primary', 'gradient', 'black'],
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <StoriesLayout title="Atoms/Modal">
    <div style={{ width: args.width }}>
      <span className="info">Primary</span>
      <ModalComponent
        children={args.children}
        backColor={args.color}
        {...args}
      />

      <span className="info">Gradient</span>
      <ModalComponent
        children={args.children}
        title="Modal Title"
        height={args.height}
        backColor="gradient"
      />

      <span className="info">Black</span>
      <ModalComponent
        children={args.children}
        title="Modal Title"
        height={args.height}
        backColor="black"
      />
    </div>
  </StoriesLayout>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  children: 'test',
  title: 'Modal Title',
  backColor: 'primary',
  width: '400px',
  height: '150px',
};
