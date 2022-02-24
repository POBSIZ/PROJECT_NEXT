import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import StoriesLayout from 'StoriesLayout';

import ListViewComponent from './listView_component';
import { ListViewPropsType, ItemListType } from './listView_types';

export default {
  title: 'Molecules/ListView',
  component: ListViewComponent,
  parameters: {},
} as Meta;

const Template: Story<ListViewPropsType> = (args: ListViewPropsType) => (
  <StoriesLayout title="Molecules/ListView">
    <span className="info">Default</span>
    <div>
      <ListViewComponent {...args} />
    </div>
  </StoriesLayout>
);

const dummyData = () => {
  let _list: ItemListType[] = [];
  for (let index: number = 0; index < 3; index++) {
    _list.push({
      id: String(index),
      title: `Dummy ${index}`,
      username: `John Doe ${index}`,
      create_date: `2${index}.${index}.${index}`,
      short_text:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae cum voluptates ad facere, ab consequuntur possimus pariatur aut aliquid ipsum, nemo commodi facilis architecto! Nostrum in corrupti sint cumque?',
      tags: [...Array(index).fill(String(index))],
      is_favorite: false,
      favorite_count: index,
    });
  }
  return _list;
};

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  item_list: dummyData(),
};
