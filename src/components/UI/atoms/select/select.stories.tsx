import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import Select from './select_component';

export default {
  title: 'Atoms/Select',
  component: Select,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout>
      <Select {...args} />
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  item: ['성별', '남자', '여자'],
  width: '100px',
  height: '50px',
};
