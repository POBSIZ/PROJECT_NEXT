import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import GridListComponent from './grid_component';

export interface GridListParamsType {}

const GridList: React.FC<any> = ({}) => {
  return (
    <>
      <GridListComponent />
    </>
  );
};

export default GridList;
