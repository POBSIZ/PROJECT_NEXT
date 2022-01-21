import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import GridItemComponent from './gridItem_component';

export default {
  title: 'Organisms/GridList',
  component: GridItemComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <GridItemComponent {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
