import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';
import GridItemComponent from './gridItem_component';

export default {
  title: 'Molecules/GridItem',
  component: GridItemComponent,
  parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <StoriesLayout title="Molecules/GridItem">
      <div
        style={{
          width: args.width,
        }}
      >
        <GridItemComponent {...args} />
      </div>
    </StoriesLayout>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: '100%',
};
