import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import AuthForm from '../authForm';
import RegisterFormComponent from './registerForm_component';

export default {
  title: 'Organisms/RegisterForm',
  component: RegisterFormComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <AuthForm>
      <RegisterFormComponent {...args} />
    </AuthForm>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  vaild: {
    first_name: false,
    last_name: false,
    gender: false,
    username: false,
    password: false,
    password_check: false,
    email: false,
  },
};
