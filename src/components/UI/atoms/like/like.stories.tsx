import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import LikeComponent from './like_component';

export default {
  title: 'Atoms/Like',
  component: LikeComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Atoms/Like">
      <div
        style={{
          width: args.width,
          height: args.height,
        }}
      >
        
        <span className='info'>Default</span>
        <LikeComponent {...args} />

        <span className='info'>Liked</span>
        <LikeComponent isLike={true} {...args} />

      </div>
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: '50px',
  heigth: '50px',
};
