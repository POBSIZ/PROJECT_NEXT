import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import Dropdown from '.';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  children: 'test',
};
