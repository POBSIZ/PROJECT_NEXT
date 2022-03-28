import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import PlayPageComponent from './playPage_component';
import { PlayPagePropsType } from './playPage_types';

const PlayPage: React.FC<PlayPagePropsType> = (props, {}) => {
  return (
    <>
      <PlayPageComponent {...props} />
    </>
  );
};

export default PlayPage;
