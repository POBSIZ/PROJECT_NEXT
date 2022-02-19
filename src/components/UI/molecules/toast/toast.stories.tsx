import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';
import ToastComponent from './toast_component';

export default {
  title: 'Atoms/Toast',
  component: ToastComponent,
  parameters: {},
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['default', 'error', 'success', 'warning'],
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Atoms/Toast">
      <div style={{ width: '300px' }}>
        <span className="info">Default</span>
        <ToastComponent
          {...args}
          style={{ transform: 'translate(0)', left: '0' }}
        />

        <span className="info">Success</span>
        <ToastComponent
          {...args}
          style={{ transform: 'translate(0)', left: '0' }}
          status="success"
        />

        <span className="info">Warning</span>
        <ToastComponent
          {...args}
          style={{ transform: 'translate(0)', left: '0' }}
          status="warning"
        />

        <span className="info">Error</span>
        <ToastComponent
          {...args}
          style={{ transform: 'translate(0)', left: '0' }}
          status="error"
        />
      </div>
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  is_pop: 'true',
  // status: 'default' | 'error' | 'success' | 'warning',
  status: 'default',
  message: 'TEST',
};
