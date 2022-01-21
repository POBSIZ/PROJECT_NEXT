import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import GridItemComponent from './gridItem_component';

export interface GridListParamsType {}

const GridItem: React.FC<any> = ({}) => {
  return (
    <>
      <GridItemComponent />
    </>
  );
};

export default GridItem;
