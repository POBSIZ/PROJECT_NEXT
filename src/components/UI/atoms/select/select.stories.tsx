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
    <StoriesLayout title="Atoms/Select">
      <div
        style={{
          width: args.width,
        }}
      >
        <span className="info">Default</span>
        <Select {...args} isFail={args.isFail} />

        <span className="info">Success</span>
        <Select {...args} isSuccess={true} />

        <span className="info">Warning</span>
        <Select {...args} isWarning={true} />

        <span className="info">Disabled</span>
        <Select {...args} disabled={true} isFail={args.isFail} />

        <span className="info">Failed</span>
        <Select {...args} isFail={true} />
      </div>
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  item: ['남자', '여자'],
  placeholder: 'default',
  width: '300px',
  isFail: false,
  disabled: false,
};
