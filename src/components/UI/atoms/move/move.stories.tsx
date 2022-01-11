//ssc
import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import MoveComponent from './move_component';

export default {
  title: 'Atoms/Move',
  component: MoveComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <MoveComponent {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  href: 'test',
  children: 'test',
};
