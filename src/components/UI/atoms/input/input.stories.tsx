import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import InputComponent from './input_component';

export default {
  title: 'Atoms/Input',
  component: InputComponent,
  parameters: {},
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'text',
          'username',
          'password',
          'current-password',
          'new-password',
          'email',
        ],
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Atoms/Input">
      <div
        style={{
          width: args.width,
        }}
      >
        <span className="info">Default</span>
        <InputComponent
          placeholder={args.placeholder}
          type={args.type}
          name={args.name}
          required={args.required}
          disabled={args.disabled}
          isFail={args.isFail}
          {...args}
        />

        <span className="info">Disabled</span>
        <InputComponent
          placeholder={args.placeholder}
          type={args.type}
          name={args.name}
          required={args.required}
          disabled={true}
          isFail={args.isFail}
        />

        <span className="info">Failed</span>
        <InputComponent
          placeholder={args.placeholder}
          type={args.type}
          name={args.name}
          required={args.required}
          disabled={args.disabled}
          isFail={true}
        />
      </div>
    </StoriesLayout>
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
