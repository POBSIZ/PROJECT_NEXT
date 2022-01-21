import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import GridListComponent from './grid_component';

export default {
  title: 'Organisms/GridList',
  component: GridListComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <GridListComponent {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
