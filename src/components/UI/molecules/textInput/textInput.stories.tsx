import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';
import TextInputComponent from './textInput_component';

export default {
  title: 'Molecules/TextInput',
  component: TextInputComponent,
  parameters: {},
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'name',
          'gender',
          'username',
          'password',
          'password_check',
          'email',
        ],
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Molecules/IconInput">
      <div
        style={{
          width: args.width,
        }}
      >
        <span className="info">Default</span>
        <TextInputComponent {...args}></TextInputComponent>
        <span className="info">Gender</span>
        <TextInputComponent
          {...args}
          isFail={false}
          warnning={false}
          type="gender"
        ></TextInputComponent>
        <span className="info">Username</span>
        <TextInputComponent
          {...args}
          isFail={false}
          warnning={false}
          type="username"
        ></TextInputComponent>
        <span className="info">Password</span>
        <TextInputComponent
          {...args}
          isFail={false}
          warnning={false}
          type="password"
        ></TextInputComponent>
        <span className="info">Password_Check</span>
        <TextInputComponent
          {...args}
          isFail={false}
          warnning={false}
          type="password_check"
        ></TextInputComponent>
        <span className="info">E-mail</span>
        <TextInputComponent
          {...args}
          isFail={false}
          type="email"
          warnning={false}
        ></TextInputComponent>
      </div>
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  isFail: false,
  width: '500px',
  warnning: true,
  type: 'name',
};
