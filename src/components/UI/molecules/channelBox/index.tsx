import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ChannelBoxComponent from './channelBox_component';

import { ChannelBoxPropsType } from './channelBox_types';

const ChannelBox: React.FC<ChannelBoxPropsType> = (
  props,
  {
    title,
    time,
    point,
    curr_user,
    max_user,
    info,
    creator,
    is_private,
    on_click,
    radius,
    link,
  }: ChannelBoxPropsType,
) => {
  return (
    <>
      <ChannelBoxComponent {...props} />
    </>
  );
};

export default ChannelBox;
