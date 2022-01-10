import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import AuthForm from '../authForm';
import LoginFormComponent from './loginForm_component';

export default {
  title: 'Organisms/LoginForm',
  component: LoginFormComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <AuthForm>
      <LoginFormComponent {...args} />
    </AuthForm>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
