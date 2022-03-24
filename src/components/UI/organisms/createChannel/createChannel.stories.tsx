import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import CreateChannelComponent from './createChannel_component';
import Layout, { Container } from 'Layouts';

export default {
  title: 'Organisms/CreateChannel',
  component: CreateChannelComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <StoriesLayout title="Organisms/CreateChannel">
    <div
      style={{
        // width: '280px',
        width: '80%',
        margin: 'auto',
      }}
    >
      <Layout.Container>
        <CreateChannelComponent {...args} />
      </Layout.Container>
    </div>
  </StoriesLayout>
);
export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
