import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import ProgressBarComponent from './progressBar_component';

export default {
  title: 'Atoms/progressBar',
  component: ProgressBarComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <ProgressBarComponent {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
