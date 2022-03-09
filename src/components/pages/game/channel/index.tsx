import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import { ChannelBoxPropsType } from 'Molecules/channelBox/channelBox_types';
import ChannelPageComponent from './channelPage_component';

export interface ChannelPageProps {
  channelList: ChannelBoxPropsType[];
}

const ChannelPage: React.FC<ChannelPageProps> = (
  props,
  {}: ChannelPageProps,
) => {
  return (
    <>
      <ChannelPageComponent {...props} />
    </>
  );
};

export default ChannelPage;
