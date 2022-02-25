import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ChannelListComponent from './channelList_component';
import { ChannelListPropsType } from './channelList_types';
import { Loader } from 'Bases';

const ChannelList: React.FC<ChannelListPropsType> = (
  props,
  { channel_list }: ChannelListPropsType,
) => {
  return (
    <>
      <ChannelListComponent {...props} />
    </>
  );
};

export default ChannelList;
