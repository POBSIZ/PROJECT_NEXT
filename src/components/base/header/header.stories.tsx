import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import HeaderComponent from './header_component';

export default {
  title: 'Base/Header',
  component: HeaderComponent,
  parameters: {
    backgrounds: {
      default: 'White',
      values: [
        { name: 'Black', value: '#000000' },
        { name: 'White', value: '#ffffff' },
      ],
    },
  },
} as Meta;

const Template: Story<any> = (args) => <HeaderComponent {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'white' },
};
Default.args = {
  isAuthenticated: true,
  profile: {
    username: 'USER',
  },
};
