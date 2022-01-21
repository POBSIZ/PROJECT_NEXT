import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import IconInput from '.';

export default {
  title: 'Molecules/IconInput',
  component: IconInput,
  parameters: {},
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['username', 'password'],
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
        <IconInput {...args} />
        <span className="info">Password</span>
        <IconInput {...args} type="password" />
      </div>
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: '500px',
  type: 'username',
};
