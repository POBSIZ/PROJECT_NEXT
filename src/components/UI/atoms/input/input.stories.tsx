import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import InputComponent from './input_component';

export default {
  title: 'Atoms/Input',
  component: InputComponent,
  parameters: {},
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email']
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <div
      style={{
        width: args.width,
      }}
    >
      <InputComponent
        placeholder={args.placeholder}
        type={args.type}
        name={args.name}
        required={args.required}
        disabled={args.disabled}
        isFail={args.isFail}
        {...args}
      />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: '300px',
  placeholder: 'TEST',
  type: 'text',
  name: 'TEST',
  required: false,
  disabled: false,
  isFail: false,
};
