import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ChartComponent from './chart_component';

const Chart: React.FC<any> = (props, {}) => {
  return(
    <>
      <ChartComponent {...props} />
    </>
  );
};

export default Chart;