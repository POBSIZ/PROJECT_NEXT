import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import ResultPageComponent from './resultPage_component';
import { ResultPagePropsType } from './resultPage_types';

const ResultPage: React.FC<ResultPagePropsType> = (props, {}) => {
  return (
    <>
      <ResultPageComponent {...props} />
    </>
  );
};

export default ResultPage;
