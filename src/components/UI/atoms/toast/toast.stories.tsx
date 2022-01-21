import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';
import ToastComponent from './toast_component';

export default {
  title: 'Atoms/Toast',
  component: ToastComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Atoms/Toast">
      <div style={{ width: '300px' }}>
        <ToastComponent {...args} />
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
