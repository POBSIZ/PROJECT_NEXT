import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import BadgeComponent from './badge_component';

export default {
  title: 'Atoms/Badge',
  component: BadgeComponent,
  parameters: {},
  argTypes: {
    backColor: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'success',
          'warning',
          'error',
          'diabled',
        ],
      },
    },
    radius: {
      control: {
        type: 'select',
        options: ['0px', '4px', '8px', '16px', '32px', '64px'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
  },
} as Meta;

const color = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'disabled',
];
const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Atoms/Badge">
      <div style={{ display: 'flex' }}>
        <div>
          <h1>Small</h1>
          {color.map((data) => {
            return (
              <>
                <span className="info">{data}</span>
                <div style={{ width: args.width }}>
                  <BadgeComponent {...args} backColor={data} />
                </div>
              </>
            );
          })}
        </div>

        <div style={{ marginLeft: '150px' }}>
          <h1>Medium</h1>
          {color.map((data) => {
            return (
              <>
                <span className="info">{data}</span>
                <div style={{ width: args.width }}>
                  <BadgeComponent {...args} size={'medium'} backColor={data} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: '40px',
  children: 'TEST',
  backColor: 'primary',
  textColor: 'black',
  radius: '4px',
  size: 'small',
};
