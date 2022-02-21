import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ListViewComponent from './listView_component';

export interface ListViewPropsType {}

export interface ItemListType {
  title: string;
  username: string;
  create_date: string;
  short_text: string;
  tags: string[];
  is_favorite: boolean;
  favorite_count: number;
}

export interface ListViewParamsType {
  item_list: ItemListType[];
  with_imgs: boolean;
}

const ListView: React.FC<ListViewParamsType> = (
  props,
  { item_list, with_imgs }: ListViewParamsType,
) => {
  return (
    <>
      <ListViewComponent {...props} />
    </>
  );
};

export default ListView;
