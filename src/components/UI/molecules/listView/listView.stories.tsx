import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import ListViewComponent from './listView_component';
import { ListViewParamsType } from '.';

export default {
  title: 'Molecules/ListView',
  component: ListViewComponent,
  parameters: {},
} as Meta;

const Template: Story<ListViewParamsType> = (args: ListViewParamsType) => (
  <StoriesLayout title="Molecules/ListView">
    <ListViewComponent {...args} />
  </StoriesLayout>
);

const dummyData = () => {
  let _list: any= [];
  for (let index = 0; index < 3; index++) {
    _list.push({
      title: `Dummy ${index}`,
      username: `John Doe ${index}`,
      create_date: `2${index}.${index}.${index}`,
      short_text:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae cum voluptates ad facere, ab consequuntur possimus pariatur aut aliquid ipsum, nemo commodi facilis architecto! Nostrum in corrupti sint cumque?',
      tags: [...Array(index).fill(String(index))],
      favorites_count: index,
    });
  }
  return _list;
};

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  item_list: dummyData(),
};
