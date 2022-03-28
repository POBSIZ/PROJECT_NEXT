import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import EditInputComponent from './editInput_component';
import { EditInputProps } from '.';

export default {
  title: 'Atoms/EditInput',
  component: EditInputComponent,
  parameters: {},
  argTypes: {
    maxText: {
      control: {
        type: 'select',
        options: [undefined, 10, 20, 30, 40, 50],
      },
    },
  },
} as Meta;

const Template: Story<EditInputProps> = (args: EditInputProps) => (
  <StoriesLayout title="Atoms/EditInput">
    <div style={{ width: '250px' }}>
      <span className="info">Default</span>
      <EditInputComponent {...args} />

      <span className="info">Max Text</span>
      <EditInputComponent {...args} maxText={10} />

      <span className="info">Disabled</span>
      <EditInputComponent {...args} isDisabled={true} />
    </div>
  </StoriesLayout>
);
export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  placeholder: 'TEST',
  maxText: undefined,
  isDisabled: false,
};
