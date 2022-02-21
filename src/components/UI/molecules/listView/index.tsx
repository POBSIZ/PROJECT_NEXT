import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ListViewComponent from './listView_component';

import { ListViewPropsType } from "./listView_types";

const ListView: React.FC<ListViewPropsType> = (
  props,
  { item_list, with_imgs }: ListViewPropsType,
) => {
  return (
    <>
      <ListViewComponent {...props} />
    </>
  );
};

export default ListView;
