import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ChannelBoxComponent from './channelBox_component';

import {
  ChannelBoxPropsType,
  ChannelBoxPropsTypeTest,
} from './channelBox_types';

interface ChannelBox {
  title: string;
  time: number;
  point: number;
  curr_user: number;
  max_user: number;
  info: string;
  link: string;
  creator: number;
}

const ChannelBox: React.FC<ChannelBox> = (props) => {
  return (
    <>
      <ChannelBoxComponent {...props} />
    </>
  );
};

export default ChannelBox;
