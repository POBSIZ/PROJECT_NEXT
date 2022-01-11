import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import LikeComponent from './like_component';

export default {
  title: 'Atoms/Like',
  component: LikeComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <div
      style={{
        width: args.width,
        height: args.height,
      }}
    >
      <LikeComponent onClick={args.onClick} {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: '50px',
  heigth: '50px',
  backColor: 'primary',
  isLike: true,
};
