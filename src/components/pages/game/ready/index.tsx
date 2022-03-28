import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ReadyPageComponent from './readyPage_component';
import { ReadyPagePropsType } from './readyPage_types';

const ReadyPage: React.FC<ReadyPagePropsType> = (props, {}) => {
  return (
    <>
      <ReadyPageComponent {...props} />
    </>
  );
};

export default ReadyPage;
